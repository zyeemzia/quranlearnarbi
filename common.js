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

  const UNIT_COLORS = ['teal', 'emerald', 'amber', 'indigo', 'rose', 'violet'];

  window.AQX = { esc, md, isAr, hlAr, bnNum, syllableTr, prepare, MARKS, UNIT_COLORS };
})();
