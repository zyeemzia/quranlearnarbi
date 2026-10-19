"""Build the pronunciation audio after editing content.

    python tools/audio.py wbw        map every ayah word to the Quran word-by-word recitation
    python tools/audio.py quran      play Quranic words and phrases elsewhere in the course from the recitation
    python tools/audio.py tts        make the male and female synthetic files for everyday phrases only
    python tools/audio.py all        all three (wbw, quran, tts), then run tools/build.py yourself

wbw: fetches the word list of each ayah used in data/ (api.quran.com, cached in tools/.cache)
     and lines it up with our `words` items (one item may hold several Quran words). Only items with the
     same letters and harakat are mapped; tapping any other item plays the whole-ayah recitation.
     The recitation files are streamed on tap from audio.qurancdn.com (Quran.com), never copied here.
tts: reads the list of every Arabic text the app can speak and where it is used (tools/.cache/saylist.json,
     written by headless Chrome from index.html?saylist). Only everyday conversation, texts used nowhere but
     the Everyday Arabic unit, gets a synthetic voice: audio/m/<key>.mp3 and audio/f/<key>.mp3, made with the
     Microsoft Edge read-aloud voices (pip install edge-tts). Letters, harakat, makharij, tajweed, Quranic
     vocabulary, Quran text and phrases with the name of Allah never get a synthetic file, and neither does an
     everyday word that is found in the Quran (it plays the recitation). Files no longer needed are removed.
quran: for every other text the app speaks (Quranic vocabulary, tajweed, grammar and reading examples), finds
     the same word or phrase in the Quran, letter for letter and haraka for haraka, and plays that word's human
     recitation from Quran.com instead of the device voice. Single letters, sound drills and syllables are
     never matched. The Quran word list is fetched from api.quran.com (text only, cached for up to 7 days).
All three write audio/manifest.json, which tools/build.py bundles into data.bundle.js.
Check the synthetic files with tools/check_audio.py, and have a teacher listen on the site's #audio page.

Copyright © ZyeemZia
"""
import asyncio, json, os, re, subprocess, sys, time, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, 'tools', '.cache')
AUDIO = os.path.join(ROOT, 'audio')
MANIFEST = os.path.join(AUDIO, 'manifest.json')
VOICES = {'m': 'ar-SA-HamedNeural', 'f': 'ar-SA-ZariyahNeural'}
RATE = '-15%'   # learners: a little slower than normal; the app's speed slider adjusts from here
CHROME = [r'C:\Program Files\Google\Chrome\Application\chrome.exe', r'C:\Program Files (x86)\Google\Chrome\Application\chrome.exe']


def read_json(p, default):
    try:
        with open(p, encoding='utf-8') as f:
            return json.load(f)
    except (OSError, ValueError):
        return default


def write_json(p, o, compact=False):
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(o, f, ensure_ascii=False, separators=(',', ':') if compact else None, indent=None if compact else 1)


def units():
    dec = json.JSONDecoder()
    out = []
    for n in ['reading', 'writing', 'tajweed', 'vocab', 'grammar', 'daily', 'quran']:
        p = os.path.join(ROOT, 'data', n + '.js')
        if not os.path.exists(p):
            continue
        src = open(p, encoding='utf-8').read()
        m = re.search(r'AQ\.units\.push\(\s*', src)
        out.append(dec.raw_decode(src, m.end())[0])
    return out


# ---------------- word-by-word Quran recitation ----------------

def skeleton(s):
    """Letters only, with the spelling differences between scripts (Uthmani / Indo-Pak / modern) removed."""
    s = re.sub(r'[\u064B-\u065F\u0670\u06D6-\u06ED\u0640\u08D3-\u08FF]', '', s)   # vowels, small signs, tatweel
    s = re.sub(r'[\u0671\u0622\u0623\u0625\u0627\u0649\u06E5\u06E6\u0648\u064A\u06CC\u0626\u0624\u0621]', '', s)  # alif / weak letters / hamza seats
    s = s.replace('\u0629', '\u0647').replace('\u06A9', '\u0643')
    return re.sub(r'[^\u0621-\u064A]', '', s)


HARAKAT = 'ًٌٍَُِّ'   # tanween, short vowels, shadda
FATHA, DAMMA, KASRA, SUKUN = 'َ', 'ُ', 'ِ', 'ْ'


def vowelled(s, uthmani=False):
    """A word as consonants with their harakat, shadda, tanween and long vowels (A, I, U), so equal results mean
    the same pronunciation. Only spelling conventions that differ between Uthmani, Indo-Pak and modern print are
    ignored: how a long vowel is written (alif, dagger alif, alif maqsura, small ya), sukun, maddah, silah and
    waqf signs, the unwritten vowel of hamzat wasl and a word-initial shadda from idgham with the word before."""
    out = []
    for w in s.split():
        # word-initial alif: hamzat wasl (dropped) or a hamza written without its sign (kept as hamza).
        # Uthmani marks wasl as ٱ; in our print a bare alif or one with kasra/damma is wasl, with fatha a hamza.
        m0 = re.match('ا([ً-ْ]?)', w)
        wasl = w.startswith('ٱ') or (bool(m0) and (not m0.group(1) if uthmani else m0.group(1) != FATHA))
        if m0 and not wasl:
            w = 'ء' + w[1:]
        w = (w.replace('ࣰ', 'ً').replace('ࣱ', 'ٌ').replace('ࣲ', 'ٍ')   # open tanween
              .replace('ٗ', DAMMA).replace('ٖ', KASRA)                                     # inverted damma / subscript alif
              .replace('ٱ', 'ا').replace('ی', 'ي').replace('ک', 'ك')
              .replace('أ', 'ء').replace('إ', 'ء').replace('ؤ', 'ء').replace('ئ', 'ء'))
        # alif with maddah: in Uthmani print it is a long alif (the hamza is written separately as ء); in ours it is ءَا
        w = w.replace('آ', 'ا' if uthmani else 'ء' + FATHA + 'ا')
        toks = []                                             # [letter, marks]
        for ch in w:
            if 'ء' <= ch <= 'ي' or ch == 'ـ':  # letters (and tatweel, which may carry a hamza)
                toks.append([ch, set()])
            elif not toks:
                continue
            elif ch in HARAKAT or ch == SUKUN or ch == 'ۡ':
                toks[-1][1].add(SUKUN if ch == 'ۡ' else ch)
            elif ch in 'ٕٔ':                        # hamza written above/below a seat or a tatweel
                toks[-1][0] = 'ء'
            elif ch in 'ٰۦ':                       # dagger alif (long a) / small ya (long i, or silah after ha)
                t = next((t for t in reversed(toks) if t[0] != 'ـ'), None)
                if t and ch == 'ٰ' and t[0] != 'ى':
                    t[1] |= {FATHA, 'A'}
                elif t and ch == 'ۦ' and t[0] != 'ه':
                    t[1].add('I')
            # everything else (maddah, small waw of silah, small high/low signs) is spelling only
        if wasl and toks and toks[0][0] == 'ا':
            toks.pop(0)
        res = []
        for ch, m in toks:
            prev = res[-1][1] if res else set()
            bare = not (m - {SUKUN})
            if ch == 'ـ':
                continue
            if ch == 'ا' and bare:
                if FATHA in prev: prev.add('A')
                continue                                      # otherwise a silent alif (after waw of plural, tanween)
            if ch == 'ى' and not m:                      # alif maqsura (with a sukun it is the consonant y)
                prev.add('I' if KASRA in prev else 'A')
                continue
            if ch in 'يى' and bare and KASRA in prev:
                prev.add('I'); continue
            if ch == 'و' and bare and DAMMA in prev:
                prev.add('U'); continue
            res.append(['ي' if ch == 'ى' else ch, m - {SUKUN}])
        if res:
            res[0][1].discard('ّ')
        word = ''.join(t[0] for t in res)
        for k, t in enumerate(res):                           # the name Allah: no alif is written in Uthmani
            if t[0] == 'ل' and k and res[k - 1][0] == 'ل' and 'ّ' in t[1] and k + 1 < len(res) and res[k + 1][0] == 'ه':
                t[1].discard('A')
        out.extend(t[0] + ''.join(sorted(t[1])) for t in res)
    return ' '.join(out)


def verse_words(ref):
    p = os.path.join(CACHE, 'verses', ref.replace(':', '_') + '.json')
    got = read_json(p, None)
    if got is None:
        url = f'https://api.quran.com/api/v4/verses/by_key/{ref}?words=true&word_fields=text_uthmani,audio_url'
        with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'quranlearnarbi-build'}), timeout=30) as r:
            v = json.load(r)['verse']
        got = [{'p': w['position'], 't': w['text_uthmani'], 'a': w['audio_url']} for w in v['words'] if w['char_type_name'] == 'word']
        write_json(p, got)
        time.sleep(0.2)
    return got


def align(items, qw):
    """For each of our word items, the Quran word positions it covers, or None when it is not the same
    pronunciation (then the app plays the whole-ayah recitation instead of guessing)."""
    out, k = [], 0
    for it in items:
        want, hit = skeleton(it['ar']), None
        for start in range(k, min(k + 4, len(qw))):          # allow a skipped word or two before this item
            for n in (1, 2, 3, 4):                            # one item may hold up to four Quran words (a phrase)
                seg = qw[start:start + n]
                if len(seg) == n and ''.join(skeleton(w['t']) for w in seg) == want and all(w['a'] for w in seg):
                    hit = (start, n)
                    break
            if hit:
                break
        if hit:
            seg = qw[hit[0]:hit[0] + hit[1]]; k = hit[0] + hit[1]
            same = vowelled(it['ar']) == vowelled(' '.join(w['t'] for w in seg), uthmani=True)
            out.append([w['p'] for w in seg] if same else None)
            if not same:
                print(f'    vowels differ: {it["ar"]}  |  Quran.com: {" ".join(w["t"] for w in seg)}')
        else:
            out.append(None)
    return out


def cmd_wbw():
    man = read_json(MANIFEST, {})
    wbw, bad, total = {}, [], 0
    for u in units():
        for l in u['lessons']:
            for b in l['blocks']:
                if b.get('type') != 'ayah' or not b.get('words'):
                    continue
                ref = b['ref']
                qw = verse_words(ref)
                spans = align(b['words'], qw)
                total += len(spans)
                for w, s in zip(b['words'], spans):
                    if s is None:
                        bad.append(f'{l["id"]} {ref}: {w["ar"]}')
                key = ref + '|' + '+'.join(w['ar'] for w in b['words'])   # one key per way of splitting the ayah into items
                # the same ayah can appear in more than one lesson (with the same words); keep one entry per spelling
                wbw[key] = [s or 0 for s in spans]
    man['wbw'] = wbw
    write_json(MANIFEST, man, compact=True)
    ok = total - len(bad)
    print(f'Ayah words: {ok}/{total} matched the recitation.')
    if bad:
        print('Not matched (tapping these plays the whole-ayah recitation):')
        for x in bad:
            print('  ' + x)


# ---------------- built-in voices ----------------

def chrome():
    for c in CHROME:
        if os.path.exists(c):
            return c
    sys.exit('Google Chrome was not found; it is needed to list the texts the app speaks.')


def saylist():
    """Every text the app can speak, from the app itself (index.html?saylist renders it into the page)."""
    url = 'file:///' + os.path.join(ROOT, 'index.html').replace('\\', '/') + '?saylist'
    r = subprocess.run([chrome(), '--headless=new', '--disable-gpu', '--allow-file-access-from-files',
                        '--virtual-time-budget=20000', '--dump-dom', url], capture_output=True, timeout=180)
    html = r.stdout.decode('utf-8', 'replace')
    m = re.search(r'<pre id="saylist">(.*?)</pre>', html, re.S)
    if not m:
        sys.exit('Could not read the text list from the app (index.html?saylist).')
    import html as H
    items = json.loads(H.unescape(m.group(1)))
    write_json(os.path.join(CACHE, 'saylist.json'), items)
    return items


# trim the silence around each recording (so a tap sounds at once) and keep files small: mono 24 kHz, 32 kbps
TRIM = ('silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.04,areverse,'
        'silenceremove=start_periods=1:start_threshold=-50dB:start_silence=0.12,areverse')


async def make(text, voice, path):
    import edge_tts
    tmp, err = path + '.part', 'empty audio'
    for attempt in range(4):
        try:
            await edge_tts.Communicate(text, voice, rate=RATE).save(tmp)
            if os.path.getsize(tmp) > 500:
                p = await asyncio.create_subprocess_exec('ffmpeg', '-v', 'error', '-y', '-f', 'mp3', '-i', tmp, '-af', TRIM,
                                                         '-ac', '1', '-ar', '24000', '-b:a', '32k', '-f', 'mp3', path)
                if await p.wait() == 0 and os.path.getsize(path) > 300:
                    os.remove(tmp)
                    return True
                err = 'ffmpeg failed'
        except Exception as e:  # network hiccups: retry
            err = e
        await asyncio.sleep(1.5 * (attempt + 1))
    print(f'  failed: {voice} {text} ({err})')
    if os.path.exists(path):
        os.remove(path)
    return False


async def generate(items):
    jobs = []
    for key, text in items.items():
        for v, voice in VOICES.items():
            p = os.path.join(AUDIO, v, key + '.mp3')
            if not os.path.exists(p):
                jobs.append((text, voice, p))
    for v in VOICES:
        os.makedirs(os.path.join(AUDIO, v), exist_ok=True)
    print(f'{len(items)} texts, {len(jobs)} files to make.')
    sem = asyncio.Semaphore(6)
    done = 0

    async def one(j):
        nonlocal done
        async with sem:
            await make(*j)
            done += 1
            if done % 200 == 0:
                print(f'  {done}/{len(jobs)}')
    await asyncio.gather(*(one(j) for j in jobs))


# the name of Allah (اللّٰه / لِلّٰه / اللَّه ...): phrases with it are dhikr or Quran text, so never synthetic
ALLAH = re.compile('ل[ً-ْٰ]*ل[ً-ْٰ]*ه')


def everyday(contexts, text=''):
    """Used only in the Everyday Arabic unit (or the sound test buttons) and not a phrase with the name of Allah."""
    return 'daily' in contexts and set(contexts) <= {'daily', 'tools'} and not ALLAH.search(text)


def cmd_tts():
    every = saylist()
    human = read_json(MANIFEST, {}).get('qw', {})        # everyday words that are also Quran words play the recitation
    items = {k: e['t'] for k, e in every.items() if everyday(e['c'], e['t']) and k not in human}
    print(f'{len(items)} of {len(every)} texts are everyday (non-Quranic) phrases; only these get the synthetic voice.')
    asyncio.run(generate(items))
    have = {}
    for v in VOICES:
        d = os.path.join(AUDIO, v)
        for n in os.listdir(d):
            k = n[:-4]
            if k not in items:
                os.remove(os.path.join(d, n))       # no longer used by the app
            elif n.endswith('.mp3'):
                have[k] = have.get(k, 0) + 1
    man = read_json(MANIFEST, {})
    man['tts'] = sorted(k for k, n in have.items() if n == len(VOICES))
    write_json(MANIFEST, man, compact=True)
    print(f'Synthetic voice files ready for {len(man["tts"])}/{len(items)} everyday texts.')


# ---------------- Quranic words outside the ayah blocks ----------------

def quran_chapter(c):
    """Words of one surah: [(ayah, position, uthmani text)], cached for at most 7 days (Quran Foundation terms)."""
    p = os.path.join(CACHE, 'quran', f'{c:03d}.json')
    if os.path.exists(p) and time.time() - os.path.getmtime(p) < 7 * 86400:
        return read_json(p, [])
    out, page = [], 1
    while page:
        url = f'https://api.quran.com/api/v4/verses/by_chapter/{c}?words=true&word_fields=text_uthmani&per_page=50&page={page}'
        with urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': 'quranlearnarbi-build'}), timeout=30) as r:
            d = json.load(r)
        for v in d['verses']:
            a = int(v['verse_key'].split(':')[1])
            out.extend([a, w['position'], w['text_uthmani']] for w in v['words'] if w['char_type_name'] == 'word' and w.get('audio_url'))
        page = d['pagination']['next_page']
        time.sleep(0.15)
    write_json(p, out, compact=True)
    return out


PUNCT = re.compile(r'[،؛؟.,!?:;«»"\'()\[\]]')


def cmd_quran():
    every = read_json(os.path.join(CACHE, 'saylist.json'), None) or saylist()
    index, seq = {}, {}                                   # vowelled word -> occurrences; (s, a) -> [vowelled words]
    for c in range(1, 115):
        for a, pos, t in quran_chapter(c):
            v = vowelled(t, uthmani=True)
            index.setdefault(v, []).append((c, a, pos))
            seq.setdefault((c, a), {})[pos] = v
    lesson_refs = set()
    for u in units():
        for l in u['lessons']:
            for b in l['blocks']:
                if b.get('type') == 'ayah':
                    lesson_refs.add(tuple(int(x) for x in b['ref'].split(':')))
    qw = {}
    for k, e in every.items():
        text = PUNCT.sub(' ', e['t'])
        if re.search(r'[^؀-ۿ\s]', text) or 'ـ' in text:
            continue                                      # mixed with other symbols (+, …, latin): not a plain word
        words = [vowelled(w) for w in text.split()]
        if not words or not all(words) or not re.search('[ً-ِ]', text):
            continue                                      # nothing to match, or no vowels at all (letter groups like لم)
        if len(words) == 1 and len(words[0].split()) < 2 and not ({'vocab', 'grammar'} & set(e['c'])):
            continue                                      # one-letter sounds and syllable drills (صْ, قُو, بِي): not Quran words
        hits = []
        for c, a, pos in index.get(words[0], []):
            verse = seq[(c, a)]
            if all(verse.get(pos + i) == w for i, w in enumerate(words)):
                hits.append((c, a, pos))
        if hits:
            c, a, pos = sorted(hits, key=lambda h: ((h[0], h[1]) not in lesson_refs, h))[0]   # prefer an ayah the course teaches
            qw[k] = f'{c}:{a}:' + ','.join(str(pos + i) for i in range(len(words)))
    man = read_json(MANIFEST, {})
    man['qw'] = qw
    write_json(MANIFEST, man, compact=True)
    n = sum(1 for e in every.values() if not everyday(e['c'], e['t']))
    print(f'Quranic words and phrases matched to the recitation: {len(qw)} (of {n} non-everyday texts).')


if __name__ == '__main__':
    cmd = sys.argv[1] if len(sys.argv) > 1 else 'all'
    if cmd in ('wbw', 'all'):
        cmd_wbw()
    if cmd in ('quran', 'all'):
        cmd_quran()
    if cmd in ('tts', 'all'):
        cmd_tts()
    if cmd not in ('wbw', 'tts', 'quran', 'all'):
        sys.exit(__doc__)
