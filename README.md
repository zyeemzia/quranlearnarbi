# কুরআন ও আরবি শিক্ষা · Quran & Arabic Learning

A bilingual (বাংলা + English) Arabic course, from the first letter to understanding the Quran.
One set of content powers two outputs: an interactive web app and a printable book.

**Live site: https://quranlearnarbi.zyeemzia.com/**

## Open it

| What | How |
|---|---|
| Web app | https://quranlearnarbi.zyeemzia.com/ (installs an offline cache on first visit; recitation audio needs internet) |
| Printable book | Open `book.html` → Ctrl + P → Save as PDF / print (A4, background graphics on) |
| Ready PDF | `Quran-o-Arbi-Shikkha.pdf` (419 pages) |

## What's inside

7 units · 87 lessons · 590 quiz questions · 543 vocabulary words · 60 word-by-word ayahs

1. **আরবি পড়তে শিখি / Learn to Read**: 29 letters, forms, harakat, sukun, tanween, shaddah, madd, sun/moon letters, fluency lab
2. **লিখতে শিখি / Learn to Write**: 16 phases, from the 11 pen moves and every letter (step-by-step stroke guides) to letter forms, joining, harakat, Quranic words, copying ayahs, dictation, writing your name and a calligraphy project
3. **তাজবীদ / Tajweed**: makharij, heavy/light, noon & meem sakinah, ghunnah, qalqalah, madd, waqf, common Bangla-speaker mistakes, colour map
4. **কুরআনের শব্দভাণ্ডার / Quranic Vocabulary**: ~300 high-frequency words, roots and patterns
5. **সহজ ব্যাকরণ / Grammar Made Easy**: ism/fi'l/harf, gender, number, pronouns, idafa, verbs, negation, decoding an ayah
6. **দৈনন্দিন আরবি / Everyday Arabic**: Islamic phrases, greetings, numbers, family, food, time, conversations
7. **কুরআন ও সালাত / Quran & Salah**: adhan, salah step by step, tashahhud, Al-Fatiha and 9 short surahs, Ayat al-Kursi, daily duas

**Web app extras:** writing studio (watch-the-pen demos, copybook tracing pads with star scores, dictation),
daily missions with XP and streaks, memorise mode for every ayah (progressive word hiding, ×3 recitation repeat),
Ayah Puzzle, Listen & Pick, Letter Hunt, Harakat Hero and Word Match games, a root explorer, an interactive makharij map,
spaced-repetition flashcards, a downloadable certificate, word-by-word ayahs with Mishary Alafasy recitation,
Bangla / English / both, light and dark theme, adjustable Arabic size.

**Book extras:** a full phase-by-phase handwriting workbook (stroke rows, letter guides, copybook lines, dictation with answers),
10 word-search puzzles, 14 ayah puzzles, root family trees, a makharij diagram, a memorisation tracker, journal and blank
copybook pages, answer keys, a progress tracker and a certificate.

## Edit the content

All content lives in `data/*.js` (schema: `data/SCHEMA.md`). After editing, run the build:

```bash
python tools/build.py
```

It checks every file, bundles them into one compact `data.bundle.js` (what the site and book load) and stamps a new
version so browsers and the offline cache pick up the change. Then commit and push.

To rebuild the PDF, run a local server in this folder (`python -m http.server 8765`) and print
`http://localhost:8765/book.html` from Chrome (A4, background graphics on).

**Speed:** after the first visit the site opens instantly and works offline (service worker in `sw.js`);
the online book draws its pages in chunks so phones stay responsive.

Fonts (Amiri, Hind Siliguri, Reem Kufi, Figtree) are bundled in `fonts/` under the SIL Open Font License.

---

Copyright © ZyeemZia. সর্বস্বত্ব সংরক্ষিত · All rights reserved.
