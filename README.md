# কুরআন ও আরবি শিক্ষা · Quran & Arabic Learning

A bilingual (বাংলা + English) Arabic course, from the first letter to understanding the Quran.
One set of content powers two outputs: an interactive web app and a printable book.

## Open it

| What | How |
|---|---|
| Web app | Double-click `index.html` (works offline; recitation audio needs internet) |
| Printable book | Open `book.html` → Ctrl + P → Save as PDF / print (A4, background graphics on) |
| Ready PDF | `Quran-o-Arbi-Shikkha.pdf` (419 pages) |

## What's inside

6 units · 71 lessons · 509 quiz questions · 543 vocabulary words · 60 word-by-word ayahs

1. **আরবি পড়তে শিখি / Learn to Read**: 29 letters, forms, harakat, sukun, tanween, shaddah, madd, sun/moon letters, fluency lab
2. **তাজবীদ / Tajweed**: makharij, heavy/light, noon & meem sakinah, ghunnah, qalqalah, madd, waqf, common Bangla-speaker mistakes, colour map
3. **কুরআনের শব্দভাণ্ডার / Quranic Vocabulary**: ~300 high-frequency words, roots and patterns
4. **সহজ ব্যাকরণ / Grammar Made Easy**: ism/fi'l/harf, gender, number, pronouns, idafa, verbs, negation, decoding an ayah
5. **দৈনন্দিন আরবি / Everyday Arabic**: Islamic phrases, greetings, numbers, family, food, time, conversations
6. **কুরআন ও সালাত / Quran & Salah**: adhan, salah step by step, tashahhud, Al-Fatiha and 9 short surahs, Ayat al-Kursi, daily duas

Web app extras: letter explorer with tracing practice, spaced-repetition flashcards, 3 games (Letter Hunt, Harakat Hero, Word Match),
XP and streaks, word-by-word ayahs with Mishary Alafasy recitation, Bangla / English / both, light and dark theme, adjustable Arabic size.

## Edit the content

All content lives in `data/*.js` (schema: `data/SCHEMA.md`). After editing, check it with:

```bash
cd data && python validate.py *.js
```

Then refresh the app; the book updates automatically. To rebuild the PDF, run a local server in this folder
(`python -m http.server 8765`) and print `http://localhost:8765/book.html` from Chrome.

Fonts (Amiri, Hind Siliguri, Reem Kufi, Figtree) are bundled in `fonts/` under the SIL Open Font License.

---

Copyright © ZyeemZia. সর্বস্বত্ব সংরক্ষিত · All rights reserved.
