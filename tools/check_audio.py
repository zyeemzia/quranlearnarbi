"""Check that every synthetic voice file says the right words, with offline speech recognition.

    python tools/check_audio.py            (needs: pip install faster-whisper; first run downloads the
                                            Whisper "medium" model, about 1.5 GB)

Transcribes audio/m and audio/f for each everyday phrase in audio/manifest.json, compares the letters with
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


GAP = 1.5      # seconds of silence between clips that share one recognition window
WINDOW = 28    # Whisper listens in 30-second windows; packing short clips into one is many times faster


def main():
    import numpy as np
    from faster_whisper import WhisperModel, decode_audio
    model = WhisperModel('medium', device='cpu', compute_type='int8')
    man = json.load(open(os.path.join(ROOT, 'audio', 'manifest.json'), encoding='utf-8'))
    texts = {k: e['t'] for k, e in json.load(open(os.path.join(CACHE, 'saylist.json'), encoding='utf-8')).items()}
    clips = [(v, k) for k in man.get('tts', []) for v in ('m', 'f') if os.path.exists(os.path.join(ROOT, 'audio', v, k + '.mp3'))]
    heard, done = {c: [] for c in clips}, 0
    batch, parts, t = [], [], 0.0

    def run():
        segs, _ = model.transcribe(np.concatenate(parts), language='ar', beam_size=5, word_timestamps=True,
                                   vad_filter=False, condition_on_previous_text=False)
        for seg in segs:
            for w in seg.words:                               # each heard word belongs to the clip playing at that time
                c = next((c for c, a, b in batch if a - 0.3 <= w.start <= b + GAP / 2), None)
                if c:
                    heard[c].append(w.word.strip())

    for c in clips:
        a = decode_audio(os.path.join(ROOT, 'audio', c[0], c[1] + '.mp3'), sampling_rate=16000)
        d = len(a) / 16000
        if batch and t + d > WINDOW:
            run(); done += len(batch); batch, parts, t = [], [], 0.0
            print(f'  {done}/{len(clips)}', flush=True)
        batch.append((c, t, t + d)); parts += [a, np.zeros(int(GAP * 16000), dtype=a.dtype)]; t += d + GAP
    if batch:
        run()
    res, bad, digits = {}, [], []
    for v, k in clips:
        h = ' '.join(heard[(v, k)])
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
