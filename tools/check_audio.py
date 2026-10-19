"""Check that every synthetic voice file says the right words, with offline speech recognition.

    python tools/check_audio.py            (needs: pip install faster-whisper; first run downloads the
                                            Whisper "medium" model, about 1.5 GB)

Transcribes audio/m and audio/f (several clips at a time, with a spoken separator word between them) for each everyday phrase in audio/manifest.json, compares the letters with
the text (vowel marks are not compared: Whisper writes none), and lists the files that do not match.
It cannot judge tajweed or fine pronunciation; a teacher should still listen on the site's #audio page.
The full result is written to tools/.cache/check.json.

Copyright © ZyeemZia
"""
import difflib, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, 'tools', '.cache')
PASS = 0.8   # letter similarity needed to count as the same words


def letters(s):
    s = re.sub(r'[ً-ٰٟۖ-ۭـ]', '', s)
    s = re.sub('[آأإٱ]', 'ا', s).replace('ى', 'ي').replace('ة', 'ه')
    s = re.sub('[ؤئ]', 'ء', s)
    return re.sub(r'[^ء-ي]', '', s)


SEP_TEXT = 'فَاصِلْ'   # فَاصِلْ: a spoken word placed between clips
PER_WINDOW = 6   # Whisper always listens to a 30-second window; several short clips per window is much faster


def main():
    import asyncio, numpy as np, edge_tts
    from faster_whisper import WhisperModel, decode_audio
    model = WhisperModel('medium', device='cpu', compute_type='int8')
    man = json.load(open(os.path.join(ROOT, 'audio', 'manifest.json'), encoding='utf-8'))
    texts = {k: e['t'] for k, e in json.load(open(os.path.join(CACHE, 'saylist.json'), encoding='utf-8')).items()}
    clips = [(v, k) for k in man.get('tts', []) for v in ('m', 'f') if os.path.exists(os.path.join(ROOT, 'audio', v, k + '.mp3'))]
    if len(sys.argv) > 1:
        clips = clips[:int(sys.argv[1])]                  # a quick sample run
    sep_file = os.path.join(CACHE, 'separator.mp3')       # spoken by a third voice, so it is never confused with a clip
    if not os.path.exists(sep_file):
        os.makedirs(CACHE, exist_ok=True)
        asyncio.run(edge_tts.Communicate(SEP_TEXT, 'ar-EG-SalmaNeural').save(sep_file))
    sep = decode_audio(sep_file, sampling_rate=16000)
    sil = np.zeros(8000, dtype=sep.dtype)
    sep_l = letters(SEP_TEXT)

    def hear(audio):
        segs, _ = model.transcribe(audio, language='ar', beam_size=5, vad_filter=False,
                                   condition_on_previous_text=False, without_timestamps=True)
        return ' '.join(s.text.strip() for s in segs)

    heard = {}
    for n in range(0, len(clips), PER_WINDOW):
        group = clips[n:n + PER_WINDOW]
        audios = [decode_audio(os.path.join(ROOT, 'audio', v, k + '.mp3'), sampling_rate=16000) for v, k in group]
        parts = []
        for a in audios:
            parts += [a, sil, sep, sil]
        out = hear(np.concatenate(parts))
        pieces = [p.strip() for p in re.split(r'\s*' + r'\s*'.join(sep_l) + r'\S*\s*', out)]
        pieces = [p for p in pieces if p or True][:len(group) + 1]
        if len([p for p in re.findall(r'\S+', out) if letters(p) == sep_l or letters(p).startswith(sep_l)]) != len(group):
            pieces = [hear(a) for a in audios]            # the separators were not all heard: check one by one
        for c, p in zip(group, pieces):
            heard[c] = p
        print(f'  {min(n + PER_WINDOW, len(clips))}/{len(clips)}', flush=True)
    res, bad, digits = {}, [], []
    for v, k in clips:
        h = heard[(v, k)]
        want, got = letters(texts.get(k, '')), letters(h)
        score = difflib.SequenceMatcher(None, want, got).ratio() if want else 0
        res[f'{v}/{k}'] = {'text': texts.get(k), 'heard': h, 'score': round(score, 3)}
        if re.search(r'[0-9٠-٩]', h):
            digits.append((v, k))                # Whisper wrote a number as digits: listen to these by ear
        elif score < PASS:
            bad.append((v, k))
    os.makedirs(CACHE, exist_ok=True)
    json.dump(res, open(os.path.join(CACHE, 'check.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print(f'Checked {len(res)} files: {len(res) - len(bad) - len(digits)} match, {len(bad)} do not, {len(digits)} heard as digits.')
    for v, k in bad:
        r = res[f'{v}/{k}']
        print(f'  x {v} {k}: {r["text"]}  ->  heard: {r["heard"]}  ({r["score"]})')
    for v, k in digits:
        r = res[f'{v}/{k}']
        print(f'  # {v} {k}: {r["text"]}  ->  heard: {r["heard"]}')


if __name__ == '__main__':
    sys.exit(main())
