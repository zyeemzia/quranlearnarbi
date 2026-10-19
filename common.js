/* Shared helpers for the web app (app.js) and the printable book (book.js). */
window.AQ = window.AQ || { units: [], alphabet: [], vocab: [] };
(function () {
  const AR_CH = '\\u0600-\\u06FF\\u0750-\\u077F\\u08A0-\\u08FF\\uFB50-\\uFDFF\\uFE70-\\uFEFF';
  const AR_TEST = new RegExp('[' + AR_CH + ']');
  const AR_RUN = new RegExp('([' + AR_CH + '](?:[' + AR_CH + '\\s\\u200c\\u200d()\\[\\]«»،؛؟!.]*[' + AR_CH + '])?)', 'g');
  const BN_TEST = /[ঀ-৿]/;

  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const isAr = s => typeof s === 'string' && AR_TEST.test(s) && !BN_TEST.test(s) && !/[a-zA-Z]{3}/.test(s);

  /* inline markup: **bold**, {{arabic}}; bare Arabic runs are wrapped automatically */
  function md(s) {
    const parts = String(s == null ? '' : s).split(/\{\{([\s\S]+?)\}\}/);
    return parts.map((p, i) => {
      if (i % 2) return `<span class="ar-in" lang="ar" dir="rtl">${esc(p)}</span>`;
      let h = esc(p).replace(AR_RUN, '<span class="ar-in" lang="ar" dir="rtl">$1</span>');
      return h.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    }).join('');
  }

  /* wrap the first occurrence of `hl` inside Arabic string `ar` */
  function hlAr(ar, hl, cls) {
    if (!hl || ar.indexOf(hl) < 0) return esc(ar);
    const i = ar.indexOf(hl);
    return esc(ar.slice(0, i)) + `<mark class="${cls || 'hl'}">${esc(hl)}</mark>` + esc(ar.slice(i + hl.length));
  }

  const BN_DIG = '০১২৩৪৫৬৭৮৯';
  const bnNum = n => String(n).replace(/\d/g, d => BN_DIG[d]);

  /* rough syllable transliteration for build grids: letter + mark */
  const MARKS = {
    'َ': { bn: 'া', en: 'a', vowel: 'আ' }, 'ِ': { bn: 'ি', en: 'i', vowel: 'ই' }, 'ُ': { bn: 'ু', en: 'u', vowel: 'উ' },
    'ْ': { bn: '্', en: '', vowel: '' }, 'ً': { bn: 'ান', en: 'an', vowel: 'আন' }, 'ٍ': { bn: 'িন', en: 'in', vowel: 'ইন' },
    'ٌ': { bn: 'ুন', en: 'un', vowel: 'উন' }
  };
  function syllableTr(letter, mark) {
    const a = (AQ.alphabet || []).find(x => x.ar === letter);
    if (!a) return null;
    const m = MARKS[mark];
    if (!m) return null;
    const base = (a.tr.bn || '').replace(/[ািীুূেৈোৌ্]+$/, '');
    const isVowelLetter = !/[ক-হড়-য়]/.test(base);
    const bn = isVowelLetter ? (m.vowel || base) : base + m.bn;
    const en = (a.tr.en || '').replace(/^['ʼʾ]$/, "'") + m.en;
    return { bn, en };
  }

  /* collection helpers */
  function prepare() {
    const units = (AQ.units || []).slice().sort((a, b) => a.order - b.order);
    const lessons = [];
    units.forEach(u => u.lessons.forEach((l, i) => { l.unit = u; l.index = i; l.gi = lessons.length; lessons.push(l); }));
    const vocab = []; const seen = new Set();
    lessons.forEach(l => l.blocks.forEach(b => {
      if (b.type !== 'vocab') return;
      b.items.forEach(w => { if (!seen.has(w.ar)) { seen.add(w.ar); vocab.push(Object.assign({ lesson: l, unit: l.unit }, w)); } });
    }));
    const letterById = {}; (AQ.alphabet || []).forEach(a => letterById[a.id] = a);
    return { units, lessons, vocab, letterById };
  }

  const UNIT_COLORS = ['teal', 'cyan', 'emerald', 'amber', 'indigo', 'rose', 'violet'];

  /* the 11 basic pen moves of Arabic handwriting, drawn right to left in a 200×120 box (baseline y = 80) */
  const STROKES = {
    'line-h': { d: 'M175 80 L25 80', ar: 'ـــ' },
    'line-v': { d: 'M100 12 L100 92', ar: 'ا' },
    'slant': { d: 'M138 18 L62 92', ar: 'ك' },
    'cup': { d: 'M172 52 C176 84 150 92 100 92 C52 92 26 86 28 56', ar: 'ب' },
    'bowl': { d: 'M162 46 C170 112 34 112 40 46', ar: 'ن' },
    'tail': { d: 'M128 44 C136 76 116 104 58 112', ar: 'ر' },
    'hook': { d: 'M150 42 L72 42 C26 48 30 108 118 106', ar: 'ح' },
    'teeth': { d: 'M172 60 Q168 82 152 80 Q141 78 142 62 Q138 82 122 80 Q111 78 112 62 Q106 84 30 80', ar: 'س' },
    'loop': { d: 'M112 58 C138 58 138 90 112 90 C86 90 86 58 112 58', ar: 'م' },
    'wave': { d: 'M176 70 C142 36 122 104 92 70 C62 36 42 104 24 70', ar: 'ى' },
    'dot': { d: 'M100 56 L112 68 L100 80 L88 68 Z', ar: '•' }
  };

  /* makharij: 5 areas, 17 points (Hafs) */
  const MAKHARIJ = [
    { id: 'jawf', ar: 'الْجَوْف', name: { bn: 'জাওফ — মুখ ও গলার ফাঁকা অংশ', en: 'Jawf — the open space of mouth and throat' },
      points: [{ letters: 'ا و ي', desc: { bn: 'মাদ্দের হরফ: যবরের পর আলিফ, পেশের পর জযমওয়ালা ওয়াও, যেরের পর জযমওয়ালা ইয়া। বাতাস যতক্ষণ, আওয়াজ ততক্ষণ।', en: 'The madd letters: alif after fatha, sukun waw after damma, sukun ya after kasra. The sound lasts as long as the air flows.' } }] },
    { id: 'halq', ar: 'الْحَلْق', name: { bn: 'হালক — গলা', en: 'Halq — the throat' },
      points: [
        { letters: 'ء ه', desc: { bn: 'গলার সবচেয়ে গভীর অংশ (বুকের কাছে)।', en: 'Deepest part of the throat (nearest the chest).' } },
        { letters: 'ع ح', desc: { bn: 'গলার মাঝখান।', en: 'Middle of the throat.' } },
        { letters: 'غ خ', desc: { bn: 'গলার ওপরের অংশ (মুখের কাছে)।', en: 'Top of the throat (nearest the mouth).' } }] },
    { id: 'lisan', ar: 'اللِّسَان', name: { bn: 'লিসান — জিহ্বা', en: 'Lisan — the tongue' },
      points: [
        { letters: 'ق', desc: { bn: 'জিহ্বার একদম গোড়া + ওপরের নরম তালু।', en: 'Very back of the tongue + the soft palate.' } },
        { letters: 'ك', desc: { bn: 'ق-এর একটু সামনে, জিহ্বার গোড়া + তালু।', en: 'Slightly in front of ق: back of the tongue + palate.' } },
        { letters: 'ج ش ي', desc: { bn: 'জিহ্বার মাঝখান + ওপরের তালু।', en: 'Middle of the tongue + the hard palate.' } },
        { letters: 'ض', desc: { bn: 'জিহ্বার কিনারা + ওপরের মাড়ির দাঁত (বাম বা ডান দিকে)।', en: 'Side edge of the tongue + the upper molars (left or right side).' } },
        { letters: 'ل', desc: { bn: 'জিহ্বার আগার কিনারা + সামনের ওপরের মাড়ি।', en: 'Front edges of the tongue + the upper front gum.' } },
        { letters: 'ن', desc: { bn: 'জিহ্বার আগা + ওপরের সামনের মাড়ি (ل-এর একটু নিচে)।', en: 'Tongue tip + the upper front gum (just below ل).' } },
        { letters: 'ر', desc: { bn: 'জিহ্বার আগা ও পিঠ + ওপরের মাড়ি (ن-এর কাছে)।', en: 'Tongue tip and top + the upper gum (near ن).' } },
        { letters: 'ط د ت', desc: { bn: 'জিহ্বার আগা + ওপরের সামনের দুই দাঁতের গোড়া।', en: 'Tongue tip + the roots of the two upper front teeth.' } },
        { letters: 'ظ ذ ث', desc: { bn: 'জিহ্বার আগা + ওপরের সামনের দুই দাঁতের মাথা (জিহ্বা সামান্য বের হয়)।', en: 'Tongue tip + the edges of the two upper front teeth (tongue peeks out).' } },
        { letters: 'ص س ز', desc: { bn: 'জিহ্বার আগা + নিচের সামনের দাঁতের কাছে — শিসের আওয়াজ।', en: 'Tongue tip near the lower front teeth: a whistling sound.' } }] },
    { id: 'shafatan', ar: 'الشَّفَتَان', name: { bn: 'শাফাতান — দুই ঠোঁট', en: 'Shafatan — the two lips' },
      points: [
        { letters: 'ف', desc: { bn: 'নিচের ঠোঁটের ভেতর + ওপরের সামনের দাঁতের মাথা।', en: 'Inside of the lower lip + the tips of the upper front teeth.' } },
        { letters: 'ب م و', desc: { bn: 'দুই ঠোঁট: ب ও م-এ ঠোঁট মিলে যায়, و-তে গোল হয় (পুরো বন্ধ নয়)।', en: 'Both lips: they close for ب and م, and round without closing for و.' } }] },
    { id: 'khayshum', ar: 'الْخَيْشُوم', name: { bn: 'খাইশুম — নাকের বাঁশি', en: 'Khayshum — the nasal passage' },
      points: [{ letters: 'نّ مّ', desc: { bn: 'গুন্নাহর আওয়াজ: তাশদীদওয়ালা নূন-মীম, ইখফা, ইদগাম বিল-গুন্নাহ। নাক চেপে ধরলে আওয়াজ থেমে যায়।', en: 'The ghunnah sound: noon and meem with shaddah, ikhfa, idgham with ghunnah. Pinch your nose and the sound stops.' } }] }
  ];

  /* stylised side view of the head (facing left) with five clickable zones */
  function makharijSVG(labels) {
    const L = labels || {};
    return `<svg class="mk-svg" viewBox="0 0 360 310" role="img" aria-label="Makharij diagram">
      <path class="mk-head" d="M252 18 C182 6 122 28 106 80 L98 104 L70 140 Q66 148 76 150 L96 153 L96 166 L82 172 L96 180 L93 200 C95 226 116 238 142 234 L150 298 L262 298 C268 214 302 128 284 62 C274 36 264 24 252 18 Z"/>
      <path class="mk-zone" data-zone="khayshum" d="M100 116 C118 104 170 102 196 116 C186 128 128 132 100 126 Z"/>
      <path class="mk-zone" data-zone="jawf" d="M100 160 C140 148 190 146 214 160 L222 292 L196 292 L192 196 C170 188 130 186 100 182 Z"/>
      <path class="mk-zone" data-zone="lisan" d="M104 176 C130 162 176 162 192 178 C200 192 196 206 186 210 C160 200 126 196 106 186 Z"/>
      <path class="mk-zone" data-zone="halq" d="M194 214 C204 210 214 212 218 218 L224 290 L200 290 Z"/>
      <path class="mk-zone" data-zone="shafatan" d="M78 162 C92 158 100 164 100 172 C100 182 92 188 80 182 C70 176 70 166 78 162 Z"/>
      <path class="mk-line" d="M100 158 C140 144 186 142 212 156"/>
      <g class="mk-tag"><line x1="148" y1="116" x2="148" y2="72"/><text x="148" y="64">${L.khayshum || 'Khayshum'}</text></g>
      <g class="mk-tag"><line x1="86" y1="172" x2="30" y2="200"/><text x="26" y="214" text-anchor="start">${L.shafatan || 'Shafatan'}</text></g>
      <g class="mk-tag"><line x1="150" y1="186" x2="120" y2="262"/><text x="112" y="276">${L.lisan || 'Lisan'}</text></g>
      <g class="mk-tag"><line x1="210" y1="250" x2="300" y2="250"/><text x="304" y="254" text-anchor="start">${L.halq || 'Halq'}</text></g>
      <g class="mk-tag"><line x1="200" y1="158" x2="300" y2="140"/><text x="304" y="144" text-anchor="start">${L.jawf || 'Jawf'}</text></g>
    </svg>`;
  }

  /* small seeded random generator so the book's puzzles are the same on every print */
  function seeded(seed) { let s = seed >>> 0 || 1; return () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296; }
  const stripMarks = s => String(s).replace(/[ً-ٰٟۖ-ۭـ]/g, '');

  window.AQX = { esc, md, isAr, hlAr, bnNum, syllableTr, prepare, MARKS, UNIT_COLORS, STROKES, MAKHARIJ, makharijSVG, seeded, stripMarks };
})();
