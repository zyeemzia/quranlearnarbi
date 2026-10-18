# কুরআন ও আরবি শিক্ষা (Quran & Arabic Learning) — content schema

Copyright © ZyeemZia

All course content lives in plain JS files in this folder. Both the interactive web app (`index.html`)
and the printable book (`book.html`) render from the same data, so every field below must work in
both places. Write content ONLY as data — no HTML, no functions.

## Registration

Every file starts with:

```js
window.AQ = window.AQ || { units: [], alphabet: [], vocab: [] };
```

and then calls `AQ.units.push({...})` once with a whole unit. (`reading.js` also fills
`AQ.alphabet`; `vocab.js` also fills `AQ.vocab`.)

## Bilingual text

Every user-facing string is an object `{ bn: "বাংলা", en: "English" }`. Never leave one side empty.
Bangla must be natural, warm, simple (class 6–8 level), using standard Islamic terms Bangladeshi
learners know (যবর/ফাতহা, যের/কাসরা, পেশ/যম্মা, জযম/সুকুন, তাশদীদ, তানবীন, মাদ্দ, গুন্নাহ, মাখরাজ …).
English must be clear and friendly.

Inline markup allowed inside any bn/en string:
- `**bold**`
- `{{عَرَبِي}}` — inline Arabic (rendered in the Arabic font, larger)

## Arabic text

- Always fully vowelled (complete harakat) unless the lesson is explicitly about unvowelled text.
- Use standard Unicode Arabic. For "Allah" use `اللّٰهُ` / `اللّٰه`. Superscript (dagger) alif: `ٰ`.
- Quranic text must be exactly correct (Uthmani-style vowelling as printed in Bangladeshi/Indo-Pak mushaf
  is fine, but use standard Unicode code points that render in "Amiri"/"Noto Naskh Arabic").
- Transliteration `tr` is `{ bn: "বাংলা উচ্চারণ", en: "latin" }`. Latin: simple readable style
  (a, i, u, aa/ā, ee/ī, oo/ū, ' for ع, ḥ ṣ ḍ ṭ ẓ ...). Pick one style and stay consistent in your file.

## Unit

```js
AQ.units.push({
  id: "reading",                 // unique, kebab-case
  order: 1,                      // 1..5
  icon: "ا",                     // 1–2 characters shown big on the unit badge
  color: "teal",                 // one of: teal, amber, rose, indigo, emerald
  title:    { bn, en },
  subtitle: { bn, en },          // one line
  lessons: [ Lesson, ... ]
});
```

## Lesson

```js
{
  id: "harakat",                 // unique across ALL units (prefix with unit if unsure)
  icon: "◌َ",                    // 1–3 chars
  title:    { bn, en },
  subtitle: { bn, en },          // one line
  minutes: 10,                   // estimated study time
  goals: [ { bn, en }, ... ],    // 2–4 "you will learn" bullets
  blocks: [ Block, ... ]         // the lesson body, in order
}
```

## Blocks

Each block is an object with a `type`. Optional `title: {bn,en}` on any block shows a small heading.

| type | fields | renders as |
|---|---|---|
| `text` | `bn`, `en` | paragraph |
| `tip` | `kind`: `"tip"` \| `"warn"` \| `"memory"` \| `"fun"`, `bn`, `en` | coloured callout (memory = mnemonic/trick, fun = fun fact) |
| `letters` | `items`: array of alphabet ids (e.g. `["alif","ba"]`) | grid of tappable letter cards (data from `AQ.alphabet`) |
| `examples` | `items`: `[{ ar, tr:{bn,en}, mean?:{bn,en}, note?:{bn,en}, hl?: "substring of ar to highlight" }]` | tappable cards (tap = hear) |
| `table` | `head`: array of cells, `rows`: array of arrays of cells. A cell is a string (Arabic auto-detected) or `{bn,en}` | table |
| `build` | `base`: array of Arabic letters, `marks`: array of marks e.g. `["َ","ِ","ُ"]`, `labels?`: `[{bn,en}...]` per mark | interactive combination grid (letter × mark) |
| `compare` | `items`: `[{ ar, label:{bn,en}, desc:{bn,en} }]` (2–4 items) | side-by-side contrast (similar sounds/shapes) |
| `rule` | `name:{bn,en}`, `ar` (Arabic name of rule), `color`: `"green"`\|`"blue"`\|`"red"`\|`"orange"`\|`"purple"`\|`"gray"`, `letters?` (string of trigger letters), `desc:{bn,en}`, `how:{bn,en}` (how to pronounce), `examples:[{ ar, tr:{bn,en}, hl? }]` | colour-coded tajweed rule card |
| `practice` | `bn`, `en` (instruction), `lines`: array of Arabic strings (each line = a row of words/syllables separated by spaces) | read-aloud drill; every word tappable |
| `vocab` | `items`: `[{ ar, tr:{bn,en}, mean:{bn,en}, root?: "ك ت ب", example?: { ar, mean:{bn,en}, ref?: "2:255" } }]` | word list (also feeds flashcards) |
| `ayah` | `ref`: `"1:2"` (surah:ayah), `ar`, `words`: `[{ ar, bn, en }]` (word-by-word), `tr:{bn,en}` (transliteration), `mean:{bn,en}` (translation) | word-by-word verse with audio |
| `steps` | `items`: `[{ title:{bn,en}, ar?, tr?:{bn,en}, mean?:{bn,en}, desc?:{bn,en} }]` | numbered step list (e.g. salah steps) |
| `trace` | `items`: array of Arabic letters/words | web: tracing canvas; print: dotted handwriting rows |
| `quiz` | `items`: `[{ q:{bn,en}, ar?: "Arabic shown big", options: [string or {bn,en}], answer: <index>, explain?: {bn,en} }]` | MCQ in web; numbered questions + answer key in print |

Rules for good lessons:
- Start with a short friendly `text`, then teach in small steps, mix in `tip`/`examples`, end every lesson
  with `practice` and/or `quiz` (4–8 questions). Quiz options: 3–4, exactly one correct.
- Keep each block short. Prefer many small blocks over long text.
- Be original — do not copy text from any existing book. Use your own explanations and examples.
- Be accurate. If unsure about a Quranic word's vowelling, choose a different example you are sure of.
