/* Quran & Arabic Learning (কুরআন ও আরবি শিক্ষা) — interactive web app. Renders everything from window.AQ (data/*.js). */
(function () {
  'use strict';
  const { esc, md, isAr, hlAr, bnNum, syllableTr, prepare } = window.AQX;
  const D = prepare();
  const $ = (s, el) => (el || document).querySelector(s);
  const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
  const view = $('#view');

  /* ---------------- state ---------------- */
  const KEY = 'quran-o-arbi-shikkha.v1', OLD_KEY = 'alif-to-quran.v1';
  const defaults = () => ({ lang: 'both', theme: 'auto', arScale: 1, rate: 0.75, done: {}, quiz: {}, xp: 0, streak: { last: null, count: 0 }, srs: {}, best: {}, fcDir: 'ar', day: {}, checks: {}, memo: {}, certName: '' });
  let S = defaults();
  try { S = Object.assign(defaults(), JSON.parse(localStorage.getItem(KEY) || localStorage.getItem(OLD_KEY) || '{}')); } catch (e) { /* storage blocked */ }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } };
  const today = () => new Date().toISOString().slice(0, 10);
  function touchStreak() {
    const t = today(); if (S.streak.last === t) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    S.streak.count = S.streak.last === y ? S.streak.count + 1 : 1; S.streak.last = t;
  }
  function addXP(n) { S.xp += n; touchStreak(); save(); renderChrome(); }
  /* daily missions: 1 lesson or quiz, 10 flashcards, 3 writing checks */
  const MISSIONS = [['lesson', 1], ['cards', 10], ['write', 3]];
  function today_() { if (S.day.date !== today()) S.day = { date: today(), lesson: 0, cards: 0, write: 0, quiz: 0 }; return S.day; }
  function bumpDaily(k) {
    const d = today_(); const before = MISSIONS.every(([m, n]) => (m === 'lesson' ? d.lesson + d.quiz : d[m]) >= n);
    d[k] = (d[k] || 0) + 1; save();
    const after = MISSIONS.every(([m, n]) => (m === 'lesson' ? d.lesson + d.quiz : d[m]) >= n);
    if (!before && after) { addXP(30); confetti(); toast(L() ? 'All daily missions done! +30 XP' : 'আজকের সব মিশন শেষ! +৩০ এক্সপি', 3500); }
  }

  /* ---------------- i18n ---------------- */
  const UI = {
    home: ['হোম', 'Home'], learn: ['পাঠসমূহ', 'Lessons'], alphabet: ['বর্ণমালা', 'Alphabet'], cards: ['ফ্ল্যাশকার্ড', 'Flashcards'],
    games: ['খেলা', 'Games'], book: ['বই', 'Book'], settings: ['সেটিংস', 'Settings'], cont: ['পড়া চালিয়ে যান', 'Continue learning'],
    start: ['শুরু করুন', 'Start learning'], lesson: ['পাঠ', 'Lesson'], unit: ['ইউনিট', 'Unit'], min: ['মিনিট', 'min'],
    complete: ['পাঠ সম্পন্ন করুন', 'Mark lesson complete'], completed: ['পাঠ সম্পন্ন হয়েছে', 'Lesson completed'],
    next: ['পরের পাঠ', 'Next lesson'], prev: ['আগের পাঠ', 'Previous'], check: ['যাচাই করুন', 'Check'], nextQ: ['পরের প্রশ্ন', 'Next question'],
    finish: ['ফলাফল দেখুন', 'See result'], retry: ['আবার চেষ্টা', 'Try again'], score: ['স্কোর', 'Score'],
    tip: ['টিপস', 'Tip'], warn: ['সতর্কতা', 'Watch out'], memory: ['মনে রাখার কৌশল', 'Memory trick'], fun: ['জানেন কি?', 'Did you know?'],
    goals: ['এই পাঠে আপনি শিখবেন', 'In this lesson you will learn'], playLine: ['পুরো লাইন শুনুন', 'Play line'],
    wbw: ['শব্দে শব্দে', 'Word by word'], listen: ['শুনুন', 'Listen'], clear: ['মুছুন', 'Clear'], checkTrace: ['মিলিয়ে দেখুন', 'Check my writing'],
    traceHelp: ['আঙুল বা মাউস দিয়ে হালকা হরফটির ওপর লিখুন', 'Trace over the faint letter with your finger or mouse'],
    xp: ['এক্সপি', 'XP'], streak: ['দিনের ধারা', 'day streak'], lessonsDone: ['পাঠ শেষ', 'lessons done'], words: ['শব্দ আয়ত্তে', 'words mastered'],
    wotd: ['আজকের শব্দ', 'Word of the day'], units: ['আপনার যাত্রা', 'Your journey'], tools: ['শেখার টুলস', 'Learning tools'],
    again: ['আবার', 'Again'], hard: ['কঠিন', 'Hard'], easy: ['সহজ', 'Easy'], flip: ['উল্টাতে ট্যাপ করুন', 'Tap to flip'],
    allDecks: ['সব শব্দ', 'All words'], noDue: ['আজকের সব কার্ড শেষ!', 'All cards done for today!'],
    search: ['খোঁজার ফল', 'Search results'], nothing: ['কিছু পাওয়া যায়নি', 'Nothing found'], loading: ['বিষয়বস্তু লোড হচ্ছে…', 'Content is loading…'],
    play: ['খেলুন', 'Play'], best: ['সেরা', 'Best'], time: ['সময়', 'Time'], again2: ['আবার খেলুন', 'Play again'],
    forms: ['রূপ', 'Forms'], isolated: ['একা', 'Alone'], initial: ['শুরুতে', 'Start'], medial: ['মাঝে', 'Middle'], final: ['শেষে', 'End'],
    makhraj: ['মাখরাজ', 'Articulation'], sound: ['উচ্চারণ', 'Sound'], example: ['উদাহরণ', 'Example'], trick: ['কৌশল', 'Trick'],
    sun: ['শামসি (সূর্য)', 'Sun letter'], moon: ['কামারি (চাঁদ)', 'Moon letter'], heavy: ['মোটা (পুর)', 'Heavy'], light: ['পাতলা (বারীক)', 'Light'],
    qalqalah: ['কলকলা', 'Qalqalah'], nonjoin: ['পরের হরফে জোড়া লাগে না', "Doesn't join the next letter"], join: ['দুই দিকে জোড়া লাগে', 'Joins both sides'],
    all: ['সব', 'All'], families: ['আকৃতির পরিবার', 'Shape families'], close: ['বন্ধ করুন', 'Close'],
    printBook: ['ছাপার উপযোগী বই খুলুন', 'Open the printable book'], quizBest: ['সেরা কুইজ', 'Best quiz'],
    write: ['লিখি', 'Write'], more: ['টুলস', 'Tools'], missions: ['আজকের মিশন', "Today's missions"], roots: ['মূলধাতু', 'Roots'],
    makharij: ['মাখরাজ মানচিত্র', 'Makharij map'], cert: ['সনদপত্র', 'Certificate']
  };
  const L = () => S.lang === 'en' ? 1 : 0;
  const u = k => (UI[k] || [k, k])[L()];
  const num = n => S.lang === 'en' ? String(n) : bnNum(n);
  /* bilingual block text */
  function tx(o) {
    if (!o) return '';
    if (typeof o === 'string') return md(o);
    if (S.lang === 'bn') return md(o.bn);
    if (S.lang === 'en') return `<span lang="en">${md(o.en)}</span>`;
    return `${md(o.bn)}<span class="sub" lang="en">${md(o.en)}</span>`;
  }
  /* single-line label: primary language only */
  const t1 = o => !o ? '' : typeof o === 'string' ? md(o) : md(S.lang === 'en' ? o.en : o.bn);
  const plain = o => (!o ? '' : typeof o === 'string' ? o : (S.lang === 'en' ? o.en : o.bn)).replace(/\{\{|\}\}|\*\*/g, '');

  /* ---------------- icons ---------------- */
  const I = {
    home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
    learn: '<path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M8 7h6"/>',
    alphabet: '<path d="M4 18c4-1 6-5 6-12M14 6v12M10 12h8"/>',
    cards: '<rect x="3" y="6" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13"/>',
    games: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M16 12h.01M18 14h.01"/>',
    book: '<path d="M12 6c-2-1.5-5-2-8-1.5V19c3-.5 6 0 8 1.5 2-1.5 5-2 8-1.5V4.5C17 4 14 4.5 12 6zM12 6v14.5"/>',
    play: '<path d="M7 4.5v15l13-7.5z" fill="currentColor" stroke="none"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    flame: '<path d="M12 22c4 0 7-2.7 7-6.8 0-3.6-2.6-6.3-4.3-8.5-.4 2-1.5 3.2-2.7 3.7.3-3.2-1.2-6.2-3.7-8.4.2 3.4-4.3 6.6-4.3 11.2C4 18.9 8 22 12 22z" fill="currentColor" stroke="none"/>',
    star: '<path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21l1.6-7L2 9.2l7.1-.6z" fill="currentColor" stroke="none"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>', x: '<path d="M6 6l12 12M18 6L6 18"/>',
    bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z"/>',
    warn: '<path d="M12 3l10 18H2zM12 10v5M12 18h.01"/>', brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a3 3 0 0 0-3-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
    pen: '<path d="M4 20l4-1 11-11-3-3L5 16z"/><path d="M14 6l3 3"/>', grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
    arrowL: '<path d="M15 5l-7 7 7 7"/>', arrowR: '<path d="M9 5l7 7-7 7"/>', gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>'
  };
  const icon = (n, extra) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra || ''}>${I[n] || ''}</svg>`;
  /* Single words are said in the stopping form when their transliteration has no "-n" ending:
     drop the final tanween, and turn a final short vowel into sukun. Phrases and ayahs stay as written. */
  function pz(ar, tr) {
    if (!ar || !tr || !tr.en || /\s/.test(ar.trim())) return ar;
    const en = tr.en.trim().toLowerCase().replace(/[\s.,!?;:)'’ʼ\-…]+$/, '');
    const tan = (ar.match(/([\u064B-\u064D])\u0651?[اى]?$/) || [])[1];
    if (tan && en.endsWith({ '\u064B': 'an', '\u064C': 'un', '\u064D': 'in' }[tan])) return ar;   // the tanween "-un/-in/-an" is meant to be heard
    let out = ar.replace(/[\u064B-\u064D](\u0651?)([اى]?)$/, '$1$2');
    if (/[^aeiouāīū]$/.test(en)) {                      // ends in a consonant: stop with sukun
      out = out.replace(/[\u064E-\u0650](\u0651?)$/, '$1\u0652').replace(/(\u0651)[\u064E-\u0650]$/, '$1\u0652');
      if (/[\u0621-\u064A]$/.test(out) && !/[اوي]$/.test(out)) out += '\u0652';
    }
    return out;
  }
  /* Stopping (waqf) form for a word tapped on its own inside an ayah: no tanween, final short vowel becomes sukun,
     fathatan before a final alif becomes a long 'aa'. Used only for single-word taps, never for full ayahs. */
  function waqf(ar) {
    if (!ar) return ar;
    return ar.split(/(\s+)/).map((w, i, all) => i !== all.length - 1 ? w : w
      .replace(/\u064B([اى])$/, '\u064E$1')
      .replace(/[\u064B\u064C\u064D](\u0651?)$/, '$1\u0652')
      .replace(/(\u0651?)[\u064E-\u0650](\u0651?)$/, '$1$2\u0652')).join('');
  }
  const playBtn = (text, label) => `<button class="play" type="button" data-say="${esc(text)}" aria-label="${esc(label || u('listen'))}">${icon('play')}</button>`;

  /* ---------------- speech & audio ---------------- */
  let arVoice = null, voiceWarned = false;
  function pickVoice() {
    if (!('speechSynthesis' in window)) return;
    const vs = speechSynthesis.getVoices();
    arVoice = vs.find(v => /^ar(-|_)SA/i.test(v.lang)) || vs.find(v => /^ar/i.test(v.lang)) || null;
  }
  if ('speechSynthesis' in window) { pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }
  function say(text, rate) {
    if (!text) return;
    if (!('speechSynthesis' in window)) { toast(L() ? 'Speech is not supported in this browser.' : 'এই ব্রাউজারে কথা বলার সুবিধা নেই।'); return; }
    const clean = String(text).replace(/ـ/g, '').replace(/[◌]/g, '');
    const ut = new SpeechSynthesisUtterance(clean);
    ut.lang = 'ar-SA'; if (arVoice) ut.voice = arVoice; ut.rate = rate || S.rate;
    if (!arVoice && !voiceWarned) {
      voiceWarned = true;
      toast(L() ? 'No Arabic voice found on this device. Install an Arabic voice (Windows: Settings → Time & language → Speech) or use Chrome/Edge for better sound.'
        : 'এই ডিভাইসে আরবি ভয়েস নেই। ভালো উচ্চারণের জন্য আরবি ভয়েস ইনস্টল করুন (Windows: Settings → Time & language → Speech) অথবা Chrome/Edge ব্যবহার করুন।', 6500);
    }
    speechSynthesis.cancel(); speechSynthesis.speak(ut);
    return ut;
  }
  let audioEl = null;
  function playAyah(ref, btn) {
    const [s, a] = ref.split(':').map(Number);
    const url = `https://everyayah.com/data/Alafasy_128kbps/${String(s).padStart(3, '0')}${String(a).padStart(3, '0')}.mp3`;
    if (audioEl) { audioEl.pause(); if (audioEl._btn) audioEl._btn.classList.remove('on'); if (audioEl._url === url) { audioEl = null; return; } }
    audioEl = new Audio(url); audioEl._url = url; audioEl._btn = btn;
    btn && btn.classList.add('on');
    audioEl.onended = () => { btn && btn.classList.remove('on'); audioEl = null; };
    audioEl.play().catch(() => {
      toast(L() ? 'Recitation audio could not load here (it needs internet and may be blocked in some viewers). Using the device voice instead.' : 'তিলাওয়াতের অডিও এখানে চালানো গেল না (ইন্টারনেট লাগে, কিছু ভিউয়ারে বন্ধ থাকে)। আপাতত ডিভাইসের ভয়েসে শোনানো হচ্ছে।', 5500);
      const blk = btn && btn.closest('.ayah'); if (blk) say(blk.dataset.ar);
    });
  }

  /* ---------------- toast / confetti ---------------- */
  let toastT;
  function toast(msg, ms) {
    const el = $('#toast'); el.textContent = msg; el.hidden = false; clearTimeout(toastT);
    toastT = setTimeout(() => { el.hidden = true; }, ms || 2600);
  }
  function confetti() {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const c = document.createElement('canvas'); c.className = 'confetti'; document.body.appendChild(c);
    const x = c.getContext('2d'); c.width = document.documentElement.clientWidth; c.height = innerHeight;
    const cs = getComputedStyle(document.documentElement);
    const cols = ['--gold', '--primary', '--c-rose', '--c-indigo', '--c-amber'].map(v => cs.getPropertyValue(v).trim());
    const ps = Array.from({ length: 120 }, () => ({ x: c.width / 2, y: c.height / 2.4, vx: (Math.random() - .5) * 14, vy: Math.random() * -14 - 4, r: Math.random() * 6 + 3, c: cols[Math.random() * cols.length | 0], a: Math.random() * 6 }));
    let f = 0;
    (function tick() {
      x.clearRect(0, 0, c.width, c.height);
      ps.forEach(p => { p.vy += .45; p.x += p.vx; p.y += p.vy; p.a += .2; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 1.6); x.restore(); });
      if (++f < 110) requestAnimationFrame(tick); else c.remove();
    })();
  }

  /* ---------------- chrome ---------------- */
  const NAV = [['home', 'home', '#home'], ['learn', 'learn', '#learn'], ['write', 'pen', '#unit/writing'], ['alphabet', 'alphabet', '#alphabet'], ['games', 'games', '#games'], ['more', 'grid', '#tools']];
  const TABS = ['home', 'learn', 'write', 'games', 'more'];
  function applyTheme() {
    const r = document.documentElement;
    if (S.theme === 'auto') r.removeAttribute('data-theme'); else r.setAttribute('data-theme', S.theme);
    r.style.setProperty('--ar-scale', S.arScale);
    r.lang = S.lang === 'en' ? 'en' : 'bn';
  }
  function isDark() { return S.theme === 'dark' || (S.theme === 'auto' && matchMedia('(prefers-color-scheme: dark)').matches); }
  function renderChrome() {
    const [cur, arg] = location.hash.slice(1).split('/');
    const r = cur || 'home';
    const lessonUnit = r === 'lesson' && D.lessons.find(l => l.id === arg);
    const inWriting = (r === 'unit' && arg === 'writing') || (lessonUnit && lessonUnit.unit.id === 'writing');
    const owner = inWriting ? 'write' : (r === 'unit' || r === 'lesson') ? 'learn' : (['cards', 'roots', 'makharij', 'certificate', 'settings', 'search'].includes(r) ? 'more' : r === 'play' ? 'games' : r);
    const active = k => k === owner ? 'aria-current="page"' : '';
    $('#mainnav').innerHTML = NAV.map(([k, , href]) => `<a href="${href}" ${active(k)}>${u(k)}</a>`).join('') + `<a class="nav-book" href="book.html" target="_blank" rel="noopener">${icon('book')}${u('book')}</a>`;
    $('#tabbar').innerHTML = NAV.filter(([k]) => TABS.includes(k)).map(([k, ic, href]) => `<a href="${href}" ${active(k)}>${icon(ic)}<span>${u(k)}</span></a>`).join('');
    $('#langSeg').innerHTML = [['bn', 'বাং'], ['both', 'বাং+EN'], ['en', 'EN']].map(([k, l]) => `<button type="button" data-lang="${k}" aria-pressed="${S.lang === k}">${l}</button>`).join('');
    $('#themeBtn').innerHTML = icon(isDark() ? 'sun' : 'moon');
    $('#xpChip').innerHTML = `${icon('flame')}<span>${num(S.streak.count)}</span> ${icon('star')}<span>${num(S.xp)}</span><span class="xp-label">${u('xp')}</span>`;
  }

  /* ---------------- helpers ---------------- */
  const nextLesson = () => D.lessons.find(l => !S.done[l.id]) || D.lessons[0];
  const unitProgress = un => { const n = un.lessons.length; const d = un.lessons.filter(l => S.done[l.id]).length; return { n, d, pct: n ? Math.round(d / n * 100) : 0 }; };
  const baseLen = s => String(s).replace(/[ً-ٰٟـ◌\s]/g, '').length;
  const badge = (unit, extra, txt) => { const t = txt || unit.icon; const n = baseLen(t); return `<span class="u-badge star-clip ${n >= 4 ? 'bx4' : n === 3 ? 'bx3' : ''}" data-c="${unit.color}" ${extra || ''} lang="ar">${esc(t)}</span>`; };
  const masteredCount = () => Object.values(S.srs).filter(c => c.box >= 4).length;
  function dayIndex() { return Math.floor(Date.now() / 864e5); }

  /* ---------------- views ---------------- */
  function viewHome() {
    const nl = nextLesson();
    const doneN = Object.keys(S.done).filter(k => S.done[k]).length;
    const w = D.vocab.length ? D.vocab[dayIndex() % D.vocab.length] : null;
    const started = doneN > 0;
    return `
    <section class="hero">
      <div class="hero-main">
        <div class="pattern" style="opacity:.06"></div>
        <div class="hero-greet" lang="ar">السَّلَامُ عَلَيْكُمْ</div>
        <h1>${S.lang === 'en' ? 'Learn Arabic from the first letter to the Quran' : 'প্রথম হরফ থেকে কুরআন পর্যন্ত — আরবি শিখুন সহজে'}${S.lang === 'both' ? '<span class="sub">Learn Arabic from the first letter to the Quran</span>' : ''}</h1>
        <p class="hero-lead">${tx({ bn: `${bnNum(D.units.length)}টি ইউনিট, ${bnNum(D.lessons.length)}টি পাঠ, ${bnNum(D.vocab.length)}+ কুরআনি ও দৈনন্দিন শব্দ, ধাপে ধাপে হাতের লেখা, শব্দে শব্দে সূরা, তাজবীদ, ব্যাকরণ, খেলা ও ফ্ল্যাশকার্ড। প্রতিদিন মাত্র ১৫ মিনিট।`, en: `${D.units.length} units, ${D.lessons.length} lessons, ${D.vocab.length}+ Quranic and everyday words, phase-by-phase handwriting, surahs word by word, tajweed, grammar, games and flashcards. Just 15 minutes a day.` })}</p>
        <div class="hero-actions">
          ${nl ? `<a class="btn btn-primary" href="#lesson/${nl.id}">${u(started ? 'cont' : 'start')} ${icon('arrowR')}</a>` : ''}
          <a class="btn" href="book.html" target="_blank" rel="noopener">${icon('book')} ${t1({ bn: 'বই পড়ুন', en: 'Read the book' })}</a>
        </div>
        ${nl ? `<div class="muted" style="font-size:.88rem">${u('lesson')} ${num(nl.gi + 1)}: <b>${t1(nl.title)}</b></div>` : ''}
        <div class="stats">
          <div class="stat"><b>${num(S.xp)}</b><span>${u('xp')}</span></div>
          <div class="stat"><b>${num(S.streak.count)}</b><span>${u('streak')}</span></div>
          <div class="stat"><b>${num(doneN)}/${num(D.lessons.length)}</b><span>${u('lessonsDone')}</span></div>
          <div class="stat"><b>${num(masteredCount())}</b><span>${u('words')}</span></div>
        </div>
      </div>
      ${w ? `<aside class="wotd">
        <div class="pattern"></div>
        <div class="eyebrow">${u('wotd')}</div>
        <div class="wotd-ar ${w.ar.length > 12 ? 'long' : ''}" lang="ar">${esc(w.ar)}</div>
        <div class="wotd-tr">${esc(w.tr.bn)} · <span lang="en">${esc(w.tr.en)}</span></div>
        <div class="wotd-mean">${tx(w.mean)}</div>
        ${playBtn(pz(w.ar, w.tr))}
      </aside>` : ''}
    </section>

    ${missionsHTML()}

    ${bookBanner()}

    <h2 class="section-title">${u('units')}</h2>
    ${D.units.length ? `<div class="unit-grid">${D.units.map(un => { const p = unitProgress(un); return `
      <a class="unit-card" href="#unit/${un.id}" data-c="${un.color}">
        <div class="u-top">${badge(un)}<div><div class="u-num">${u('unit')} ${num(un.order)}</div><h3>${tx(un.title)}</h3></div></div>
        <p>${t1(un.subtitle)}</p>
        <div class="bar"><i style="width:${p.pct}%"></i></div>
        <div class="u-meta"><span>${num(p.d)}/${num(p.n)} ${u('lesson')}</span><span>${num(p.pct)}%</span></div>
      </a>`; }).join('')}</div>` : `<div class="empty"><div class="ar">…</div>${u('loading')}</div>`}

    <h2 class="section-title">${u('tools')}</h2>
    <div class="tools-grid">${toolCards().slice(0, 8).join('')}    </div>`;
  }

  function bookBanner() {
    return `<section class="book-banner">
      <a class="bb-cover" href="book.html" target="_blank" rel="noopener" aria-label="${esc(plain({ bn: 'বই খুলুন', en: 'Open the book' }))}"><span class="pattern"></span><span class="bb-cal" lang="ar">تَعَلُّمُ الْقُرْآنِ وَالْعَرَبِيَّةِ</span><b>কুরআন ও আরবি শিক্ষা</b><small>Quran &amp; Arabic Learning</small></a>
      <div class="bb-text"><div class="eyebrow">${t1({ bn: 'ছাপার বই ও লেখার খাতা', en: 'Printable book & writing workbook' })}</div>
        <h2>${t1({ bn: 'পুরো কোর্স এক বইয়ে — ৫১১ পৃষ্ঠা', en: 'The whole course in one book: 511 pages' })}</h2>
        <p class="muted">${t1({ bn: 'সব পাঠ, ধাপে ধাপে আরবি হাতের লেখার খাতা, শব্দ খোঁজ ও আয়াত পাজল, মাখরাজ মানচিত্র, মুখস্থের খাতা, উত্তরমালা ও সনদপত্র। অনলাইনে পড়ুন বা PDF নামিয়ে প্রিন্ট করুন।', en: 'Every lesson, a phase-by-phase handwriting workbook, word searches and ayah puzzles, the makharij map, a memorisation tracker, answer keys and a certificate. Read it online or download the PDF to print.' })}</p>
        <div class="hero-actions"><a class="btn btn-primary" href="book.html" target="_blank" rel="noopener">${icon('book')} ${t1({ bn: 'অনলাইনে বই পড়ুন', en: 'Read the book online' })}</a>
          <a class="btn" href="Quran-o-Arbi-Shikkha.pdf" download>${t1({ bn: 'PDF ডাউনলোড (২৭ MB)', en: 'Download PDF (27 MB)' })}</a></div></div>
    </section>`;
  }
  function missionsHTML() {
    const d = today_();
    const items = [
      ['lesson', 1, d.lesson + d.quiz, { bn: 'একটি পাঠ বা কুইজ শেষ করুন', en: 'Finish a lesson or quiz' }, nextLesson() ? '#lesson/' + nextLesson().id : '#learn'],
      ['cards', 10, d.cards, { bn: '১০টি ফ্ল্যাশকার্ড রিভিউ করুন', en: 'Review 10 flashcards' }, '#cards'],
      ['write', 3, d.write, { bn: '৩ বার লেখা মিলিয়ে দেখুন', en: 'Check your writing 3 times' }, '#unit/writing']
    ];
    const done = items.filter(x => x[2] >= x[1]).length;
    return `<section class="missions">
      <div class="m-head"><div class="m-ring" style="--p:${done / 3 * 100}"><b>${num(done)}/${num(3)}</b></div>
        <div><div class="eyebrow">${u('missions')}</div><h2>${t1(done === 3 ? { bn: 'মাশাআল্লাহ! আজকের সব মিশন শেষ', en: 'MashaAllah! All missions done today' } : { bn: 'প্রতিদিন তিনটি ছোট কাজ — বড় অগ্রগতি', en: 'Three small tasks a day, big progress' })}</h2><p class="muted">${t1({ bn: 'সব শেষ করলে +৩০ এক্সপি বোনাস', en: 'Finish all three for a +30 XP bonus' })}</p></div></div>
      <div class="m-list">${items.map(([k, n, v, label, href]) => `<a class="m-item ${v >= n ? 'done' : ''}" href="${href}"><span class="m-check">${v >= n ? icon('check') : ''}</span><span class="m-text">${t1(label)}</span><span class="m-count">${num(Math.min(v, n))}/${num(n)}</span></a>`).join('')}</div>
    </section>`;
  }
  function toolCards() {
    const due = dueCards(null).length;
    const T = [
      ['#unit/writing', 'خط', { bn: 'লেখার স্টুডিও', en: 'Writing studio' }, { bn: 'কলম দেখুন, ট্রেস করুন, তারকা জিতুন — ধাপে ধাপে', en: 'Watch the pen, trace and earn stars, phase by phase' }],
      ['#alphabet', 'أ ب ت', { bn: 'বর্ণমালা', en: 'Alphabet' }, { bn: '২৯টি হরফ, রূপ, উচ্চারণ ও লেখা', en: '29 letters, forms, sounds and writing' }],
      ['#cards', 'كَلِمَة', { bn: 'ফ্ল্যাশকার্ড', en: 'Flashcards' }, { bn: `${bnNum(due)}টি কার্ড আজ রিভিউর অপেক্ষায়`, en: `${due} cards waiting for review` }],
      ['#games', 'لُعْبَة', { bn: 'খেলা', en: 'Games' }, { bn: 'আয়াত পাজল, শুনে চিনুন, হরফ শিকার আরও', en: 'Ayah Puzzle, Listen & Pick, Letter Hunt and more' }],
      ['#roots', 'ك ت ب', { bn: 'মূলধাতু এক্সপ্লোরার', en: 'Root explorer' }, { bn: 'এক মূল থেকে শব্দের পুরো পরিবার', en: 'One root, a whole family of words' }],
      ['#makharij', 'مَخْرَج', { bn: 'মাখরাজ মানচিত্র', en: 'Makharij map' }, { bn: 'কোন হরফ মুখের কোথা থেকে আসে', en: 'Where each letter comes from in the mouth' }],
      ['#lesson/quran-fatiha', 'حِفْظ', { bn: 'মুখস্থ মোড', en: 'Memorise mode' }, { bn: 'আয়াতের শব্দ লুকিয়ে মুখস্থ যাচাই', en: 'Hide words of an ayah to test your memory' }],
      ['#certificate', 'شَهَادَة', { bn: 'সনদপত্র', en: 'Certificate' }, { bn: 'আপনার নামে সনদ তৈরি ও ডাউনলোড', en: 'Make and download your own certificate' }],
      ['book.html', 'كِتَاب', { bn: 'ছাপার বই', en: 'Printable book' }, { bn: 'পুরো কোর্স ও লেখার খাতা বই আকারে', en: 'The whole course and writing workbook as a book' }],
      ['Quran-o-Arbi-Shikkha.pdf', 'PDF', { bn: 'PDF ডাউনলোড', en: 'Download PDF' }, { bn: 'অফলাইনে পড়ুন বা প্রিন্ট করুন', en: 'Read offline or print it' }],
      ['#settings', '⚙', { bn: 'অগ্রগতি ও সেটিংস', en: 'Progress & settings' }, { bn: 'ভাষা, থিম, আরবির আকার, উচ্চারণের গতি', en: 'Language, theme, Arabic size, speech speed' }]
    ];
    return T.map(([href, ar, name, desc]) => `<a class="tool" href="${href}" ${href.endsWith('.html') ? 'target="_blank" rel="noopener"' : ''} ${href.endsWith('.pdf') ? 'download' : ''}><span class="t-ar" lang="ar">${esc(ar)}</span><b>${t1(name)}</b><span>${t1(desc)}</span></a>`);
  }

  function viewLearn() {
    return `<div class="page-head"><div class="eyebrow">${u('learn')}</div><h1 class="page-title">${tx({ bn: 'সব পাঠ এক নজরে', en: 'All lessons at a glance' })}</h1>
      <form class="search page-search" id="learnSearch" role="search"><input id="learnSearchInput" type="search" placeholder="${S.lang === 'en' ? 'Search lessons, words, meanings…' : 'পাঠ, শব্দ বা অর্থ খুঁজুন…'}" aria-label="Search"></form></div>` +
      D.units.map(un => `<h2 class="section-title" data-c="${un.color}">${badge(un, 'style="width:38px;height:38px;font-size:19px"')} ${tx(un.title)}</h2>${pathHTML(un)}`).join('');
  }
  function pathHTML(un) {
    const nl = nextLesson();
    return `<div class="path" data-c="${un.color}">${un.lessons.map((l, i) => {
      const st = S.done[l.id] ? 'done' : (nl && nl.id === l.id ? 'next' : '');
      const qb = S.quiz[l.id];
      return `<div class="path-row">
        <a class="node star-clip ${st}" href="#lesson/${l.id}" aria-label="${esc(plain(l.title))}" lang="ar">${S.done[l.id] ? icon('check', 'style="width:28px;height:28px"') : `<span class="${baseLen(l.icon) >= 4 ? 'bx4' : baseLen(l.icon) === 3 ? 'bx3' : ''}">${esc(l.icon)}</span>`}</a>
        <a class="lesson-link" href="#lesson/${l.id}">
          <span class="l-n">${u('lesson')} ${num(i + 1)} · ${num(l.minutes)} ${u('min')}</span>
          <b>${tx(l.title)}</b><small>${t1(l.subtitle)}</small>
          ${qb != null ? `<span class="l-meta"><span class="chip">${u('quizBest')}: ${num(qb)}%</span></span>` : ''}
        </a></div>`;
    }).join('')}</div>`;
  }
  function viewUnit(id) {
    const un = D.units.find(x => x.id === id); if (!un) return notFound();
    const p = unitProgress(un);
    return `<div class="crumbs"><a href="#learn">${u('learn')}</a> / <span>${u('unit')} ${num(un.order)}</span></div>
      <section class="unit-hero" data-c="${un.color}" style="margin-top:12px"><div class="pattern"></div>${badge(un)}
        <div><div class="u-num">${u('unit')} ${num(un.order)}</div><h1 class="page-title">${tx(un.title)}</h1><p class="muted">${tx(un.subtitle)}</p>
        <div class="bar" style="margin-top:12px;max-width:320px"><i style="width:${p.pct}%"></i></div>
        <div class="u-meta" style="max-width:320px;margin-top:4px"><span>${num(p.d)}/${num(p.n)} ${u('lesson')}</span><span>${num(p.pct)}%</span></div></div>
      </section>${pathHTML(un)}`;
  }

  /* ---------- lesson ---------- */
  let quizStates = {};
  function viewLesson(id) {
    const l = D.lessons.find(x => x.id === id); if (!l) return notFound();
    const un = l.unit; quizStates = {};
    const prev = D.lessons[l.gi - 1], next = D.lessons[l.gi + 1];
    return `<article class="lesson" data-c="${un.color}" data-lesson="${l.id}">
      <div class="crumbs"><a href="#learn">${u('learn')}</a> / <a href="#unit/${un.id}">${t1(un.title)}</a> / <span>${u('lesson')} ${num(l.index + 1)}</span></div>
      <header class="lesson-head"><div class="pattern"></div>${badge(un, '', l.icon)}
        <div><div class="u-num">${u('unit')} ${num(un.order)} · ${u('lesson')} ${num(l.index + 1)}/${num(un.lessons.length)} · ${num(l.minutes)} ${u('min')}</div>
        <h1>${tx(l.title)}</h1><p>${t1(l.subtitle)}</p>
        ${l.goals && l.goals.length ? `<ul class="goals" aria-label="${u('goals')}">${l.goals.map(g => `<li><span>${tx(g)}</span></li>`).join('')}</ul>` : ''}</div>
      </header>
      <div class="blocks">${l.blocks.map((b, i) => renderBlock(b, i, l)).join('')}</div>
      <footer class="lesson-foot">
        ${prev ? `<a class="btn btn-ghost" href="#lesson/${prev.id}">${icon('arrowL')} ${u('prev')}</a>` : '<span></span>'}
        <div id="completeSlot">${completeHTML(l)}</div>
        ${next ? `<a class="btn" href="#lesson/${next.id}">${u('next')} ${icon('arrowR')}</a>` : '<span></span>'}
      </footer></article>`;
  }
  const completeHTML = l => S.done[l.id]
    ? `<span class="done-banner">${icon('check')} ${u('completed')}</span>`
    : `<button class="btn btn-gold" type="button" data-complete="${l.id}">${icon('check')} ${u('complete')} <small>+20 ${u('xp')}</small></button>`;

  function blockTitle(b) { return b.title ? `<h3 class="block-title">${tx(b.title)}</h3>` : ''; }
  function cell(c) {
    if (c && typeof c === 'object') return `<td>${tx(c)}</td>`;
    if (isAr(c)) return `<td class="ar-cell" lang="ar" data-say="${esc(c)}">${esc(c)}</td>`;
    return `<td>${md(c)}</td>`;
  }
  function renderBlock(b, i, lesson) {
    const T = blockTitle(b);
    switch (b.type) {
      case 'text': return `<div>${T}<p class="b-text">${tx(b)}</p></div>`;
      case 'tip': {
        const ic = { tip: 'bulb', warn: 'warn', memory: 'brain', fun: 'spark' }[b.kind] || 'bulb';
        return `<aside class="tip tip-${esc(b.kind)}"><span class="tip-label">${icon(ic)} ${u(b.kind)}</span>${T}<div>${tx(b)}</div></aside>`;
      }
      case 'letters': return `<div>${T}<div class="letter-grid">${b.items.map(id => D.letterById[id]).filter(Boolean).map(letterTile).join('')}</div></div>`;
      case 'examples': return `<div>${T}<div class="ex-grid">${b.items.map(x => `
        <button class="ex" type="button" data-say="${esc(pz(x.ar, x.tr))}">
          <span class="ar" lang="ar">${hlAr(x.ar, x.hl)}</span>
          <span class="ex-tr">${esc(S.lang === 'en' ? x.tr.en : x.tr.bn)}${S.lang === 'both' ? `<span class="sub" lang="en">${esc(x.tr.en)}</span>` : ''}</span>
          ${x.mean ? `<span class="ex-mean">${t1(x.mean)}</span>` : ''}
          ${x.note ? `<span class="ex-note">${t1(x.note)}</span>` : ''}
        </button>`).join('')}</div></div>`;
      case 'table': return `<div>${T}<div class="tbl-wrap"><table>${b.head ? `<thead><tr>${b.head.map(h => `<th>${typeof h === 'object' ? tx(h) : md(h)}</th>`).join('')}</tr></thead>` : ''}<tbody>${b.rows.map(r => `<tr>${r.map(cell).join('')}</tr>`).join('')}</tbody></table></div></div>`;
      case 'build': {
        const cols = b.marks.length;
        const head = `<div class="build-row" style="--cols:${cols}"><span></span>${b.marks.map((m, j) => `<span class="build-head">${b.labels ? t1(b.labels[j]) : ''}<br><span class="ar-in">${esc('ـ' + m)}</span></span>`).join('')}</div>`;
        const rows = b.base.map(L0 => `<div class="build-row" style="--cols:${cols}"><span class="build-base" lang="ar">${esc(L0)}</span>${b.marks.map(m => {
          const s = L0 + m, trn = syllableTr(L0, m);
          return `<button class="build-cell" type="button" data-say="${esc(s)}"><span class="ar" lang="ar">${esc(s)}</span>${trn ? `<small>${esc(S.lang === 'en' ? trn.en : trn.bn)}</small>` : ''}</button>`;
        }).join('')}</div>`).join('');
        return `<div>${T}<div class="build">${head}${rows}</div></div>`;
      }
      case 'compare': return `<div>${T}<div class="compare">${b.items.map(x => `
        <div class="cmp"><span class="ar" lang="ar">${esc(x.ar)}</span>${playBtn(x.ar)}<b>${t1(x.label)}</b><p>${tx(x.desc)}</p></div>`).join('')}</div></div>`;
      case 'rule': return `<section class="rule">${T}
        <div class="rule-head"><span class="rule-swatch" style="background:var(--tj-${esc(b.color)})"></span><h4 class="tj-${esc(b.color)}">${t1(b.name)}${S.lang === 'both' ? `<span class="sub">${md(b.name.en)}</span>` : ''}</h4><span class="ar" lang="ar">${esc(b.ar)}</span></div>
        <div class="rule-body">
          ${b.letters ? `<div class="rule-letters" lang="ar">${esc(b.letters)}</div>` : ''}
          <div>${tx(b.desc)}</div>
          ${b.how ? `<div class="rule-how"><b>${S.lang === 'en' ? 'How to read' : 'কীভাবে পড়বেন'}</b>${tx(b.how)}</div>` : ''}
          ${b.examples && b.examples.length ? `<div class="rule-ex">${b.examples.map(x => `<button type="button" data-say="${esc(x.ar)}"><span class="ar" lang="ar">${hlAr(x.ar, x.hl, 'tj-' + b.color)}</span><small>${esc(S.lang === 'en' ? x.tr.en : x.tr.bn)}</small></button>`).join('')}</div>` : ''}
        </div></section>`;
      case 'practice': return `<section class="practice">${T}
        <div class="practice-top"><div>${tx(b)}</div></div>
        ${b.lines.map(line => `<div class="p-line" lang="ar">${line.split(/\s+/).filter(Boolean).map(w => `<button class="p-word" type="button" data-say="${esc(w)}">${esc(w)}</button>`).join('')}${playBtn(line, u('playLine'))}</div>`).join('')}
      </section>`;
      case 'vocab': return `<div>${T}<div class="vocab">${b.items.map(w => `
        <div class="vrow">
          <span class="ar" lang="ar" data-say="${esc(pz(w.ar, w.tr))}">${esc(w.ar)}</span>
          <span class="v-tr">${esc(S.lang === 'en' ? w.tr.en : w.tr.bn)}${S.lang === 'both' ? `<span class="sub" lang="en">${esc(w.tr.en)}</span>` : ''}</span>
          <span class="v-mean">${tx(w.mean)} ${w.root ? `<span class="root" title="root">${esc(w.root)}</span>` : ''}</span>
          ${playBtn(pz(w.ar, w.tr))}
          ${w.example ? `<div class="v-ex"><span class="ar-in" lang="ar">${esc(w.example.ar)}</span> — ${t1(w.example.mean)}${w.example.ref ? ` <span class="chip">${esc(w.example.ref)}</span>` : ''}</div>` : ''}
        </div>`).join('')}</div></div>`;
      case 'ayah': {
        const [s, a] = b.ref.split(':');
        const words = b.words || [];
        return `<section class="ayah" data-ar="${esc(b.ar)}">${T}
          <div class="ayah-top"><span class="ayah-ref">${S.lang === 'en' ? `Surah ${s} · Ayah ${a}` : `সূরা ${bnNum(s)} · আয়াত ${bnNum(a)}`}</span>
            <span class="ayah-btns">${S.memo[b.ref] ? `<span class="chip memo-chip">${icon('check')} ${t1({ bn: 'মুখস্থ', en: 'Memorised' })}</span>` : ''}<button class="btn btn-sm" type="button" data-wbw>${u('wbw')}</button><button class="btn btn-sm" type="button" data-memo="${esc(b.ref)}">${icon('brain')} ${t1({ bn: 'মুখস্থ করুন', en: 'Memorise' })}</button><button class="btn btn-sm btn-primary" type="button" data-ayah="${esc(b.ref)}">${icon('play')} ${u('listen')}</button></span></div>
          <div class="memo-bar" hidden><span class="memo-level"></span><span class="memo-actions"><button class="btn btn-sm" type="button" data-memorep="${esc(b.ref)}">${icon('play')} ×3</button><button class="btn btn-sm" type="button" data-memodone="${esc(b.ref)}">${icon('check')} ${t1({ bn: 'মুখস্থ হয়েছে', en: 'I know it' })}</button></span></div>
          <div class="ayah-ar" lang="ar">${words.length ? words.map((w, j) => `<span class="w" data-wi="${j}" data-say="${esc(waqf(w.ar))}">${esc(w.ar)}</span>`).join(' ') : esc(b.ar)} <span class="ayah-num">${esc(toArabicDigits(a))}</span></div>
          <div class="wbw" hidden>${words.map(w => `<div class="wbw-w" data-say="${esc(waqf(w.ar))}"><span class="ar" lang="ar">${esc(w.ar)}</span>${S.lang !== 'en' ? `<small>${md(w.bn)}</small>` : ''}${S.lang !== 'bn' ? `<small class="en" lang="en">${md(w.en)}</small>` : ''}</div>`).join('')}</div>
          <div class="ayah-tr">${esc(S.lang === 'en' ? b.tr.en : b.tr.bn)}${S.lang === 'both' ? `<span class="sub" lang="en">${esc(b.tr.en)}</span>` : ''}</div>
          <div class="ayah-mean">${tx(b.mean)}</div>
        </section>`;
      }
      case 'steps': return `<div>${T}<ol class="steps">${b.items.map(x => `<li><div class="st-body">
          <b>${tx(x.title)}</b>
          ${x.ar ? `<div class="ar" lang="ar" data-say="${esc(x.ar)}">${esc(x.ar)}</div>` : ''}
          ${x.tr ? `<div class="st-tr">${esc(S.lang === 'en' ? x.tr.en : x.tr.bn)}${S.lang === 'both' ? `<span class="sub" lang="en">${esc(x.tr.en)}</span>` : ''}</div>` : ''}
          ${x.mean ? `<div>${tx(x.mean)}</div>` : ''}
          ${x.desc ? `<div class="st-desc">${tx(x.desc)}</div>` : ''}
        </div></li>`).join('')}</ol></div>`;
      case 'trace': return `<div>${T}${traceHTML(b.items, 'tr' + i, { lesson: lesson.id })}</div>`;
      case 'strokes': return `<div>${T}<div class="stroke-row">${b.items.map(x => `<figure class="stroke-card">${strokeSVG(x.id, 'stk-card')}<figcaption>${t1(x.label)}</figcaption></figure>`).join('')}</div>
        ${traceHTML(b.items.map(x => x.id), 'st' + i, { kind: 'stroke', lesson: lesson.id })}</div>`;
      case 'howto': {
        const a = (AQ.alphabet || []).find(x => x.ar === b.letter);
        return `<section class="howto">${T}
          <div class="howto-model"><span class="howto-ar" lang="ar" data-say="${esc(a ? a.nameAr : b.letter)}">${esc(b.letter)}</span>
            <button class="btn btn-sm" type="button" data-howto>${icon('play')} ${t1({ bn: 'আবার দেখুন', en: 'Replay' })}</button></div>
          <div class="howto-body"><h4>${a ? `${t1(a.name)} <span class="muted" lang="en">· ${esc(a.name.en)}</span>` : esc(b.letter)}</h4>
            <ol class="howto-steps">${b.steps.map(st => `<li>${tx(st)}</li>`).join('')}</ol>
            ${b.tip ? `<p class="howto-tip">${icon('bulb')} ${tx(b.tip)}</p>` : ''}</div></section>`;
      }
      case 'write': return `<div>${T}${b.note ? `<p class="b-text muted">${tx(b.note)}</p>` : ''}${traceHTML(b.items, 'wr' + i, { level: b.level, lesson: lesson.id })}</div>`;
      case 'dictation': return `<div>${T}${traceHTML(b.items.map(x => x.ar), 'dc' + i, { blind: true, lesson: lesson.id })}</div>`;
      case 'selfcheck': return `<section class="selfcheck">${T || `<h3 class="block-title">${t1({ bn: 'নিজেকে যাচাই করুন', en: 'Check yourself' })}</h3>`}
        ${b.items.map((x, j) => { const key = lesson.id + ':' + i + ':' + j; return `<label class="sc-item"><input type="checkbox" data-check="${esc(key)}" ${S.checks[key] ? 'checked' : ''}><span>${tx(x)}</span></label>`; }).join('')}</section>`;
      case 'quiz': quizStates['q' + i] = { i: 0, picked: null, right: 0, results: [], items: b.items, lesson: lesson.id };
        return `<div>${T}<section class="quiz" id="q${i}">${quizInner('q' + i)}</section></div>`;
      default: return '';
    }
  }
  function toArabicDigits(n) { return String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]); }
  function letterTile(a) {
    const n = (AQ.alphabet || []).indexOf(a) + 1;
    return `<button class="ltile ${a.heavy ? 'heavy' : ''}" type="button" data-letter="${a.id}" aria-label="${esc(a.name.en)}">
      <span class="l-num">${num(n)}</span>
      <span class="l-ar" lang="ar">${esc(a.ar)}</span><span class="l-name">${t1(a.name)}</span><span class="l-tr">${esc(S.lang === 'en' ? a.tr.en : a.tr.bn + ' · ' + a.tr.en)}</span></button>`;
  }

  /* ---------- quiz ---------- */
  const optText = o => typeof o === 'object' ? t1(o) : md(o);
  function quizInner(qid) {
    const st = quizStates[qid]; const n = st.items.length;
    const dots = `<div class="quiz-dots">${st.items.map((_, k) => `<i class="${st.results[k] === true ? 'ok' : st.results[k] === false ? 'no' : ''} ${k === st.i && st.i < n ? 'cur' : ''}"></i>`).join('')}</div>`;
    if (st.i >= n) {
      const pct = Math.round(st.right / n * 100);
      return `<div class="quiz-top"><b>${S.lang === 'en' ? 'Quiz' : 'কুইজ'}</b>${dots}</div>
        <div class="quiz-result"><div class="big">${num(st.right)}/${num(n)}</div>
        <div>${pct >= 80 ? t1({ bn: 'মাশাআল্লাহ! চমৎকার।', en: 'MashaAllah! Excellent.' }) : pct >= 50 ? t1({ bn: 'ভালো হয়েছে! আরেকবার দেখলে আরও ভালো হবে।', en: 'Good work! One more look and you will master it.' }) : t1({ bn: 'চিন্তা নেই — পাঠটি আবার দেখে আবার চেষ্টা করুন।', en: 'No worries. Review the lesson and try again.' })}</div>
        <div class="muted">+${num(st.right * 5)} ${u('xp')}</div>
        <button class="btn" type="button" data-qretry="${qid}">${u('retry')}</button></div>`;
    }
    const q = st.items[st.i]; const answered = st.picked != null;
    return `<div class="quiz-top"><b>${S.lang === 'en' ? 'Quiz' : 'কুইজ'} · ${num(st.i + 1)}/${num(n)}</b>${dots}</div>
      <div class="quiz-q">${tx(q.q)}</div>
      ${q.ar ? `<div class="quiz-ar" lang="ar" data-say="${esc(q.ar)}">${esc(q.ar)}</div>` : ''}
      <div class="quiz-opts">${q.options.map((o, k) => {
        let cls = ''; if (answered) { if (k === q.answer) cls = 'ok'; else if (k === st.picked) cls = 'no'; }
        return `<button class="opt ${cls}" type="button" data-qopt="${qid}:${k}" ${answered ? 'disabled' : ''}><span class="k">${'ABCDE'[k]}</span><span>${optText(o)}</span></button>`;
      }).join('')}</div>
      ${answered && q.explain ? `<div class="quiz-explain">${tx(q.explain)}</div>` : ''}
      ${answered ? `<div class="quiz-foot"><button class="btn btn-primary" type="button" data-qnext="${qid}">${st.i + 1 < n ? u('nextQ') : u('finish')} ${icon('arrowR')}</button></div>` : ''}`;
  }
  function quizPick(qid, k) {
    const st = quizStates[qid]; if (!st || st.picked != null) return;
    st.picked = k; const ok = k === st.items[st.i].answer; st.results[st.i] = ok; if (ok) st.right++;
    $('#' + qid).innerHTML = quizInner(qid);
  }
  function quizNext(qid) {
    const st = quizStates[qid]; st.i++; st.picked = null;
    if (st.i >= st.items.length) {
      const pct = Math.round(st.right / st.items.length * 100);
      S.quiz[st.lesson] = Math.max(S.quiz[st.lesson] || 0, pct); bumpDaily('quiz');
      addXP(st.right * 5);
      if (pct >= 80) confetti();
    }
    $('#' + qid).innerHTML = quizInner(qid);
  }

  /* ---------- writing pad (tracing, pen demo, dictation) ---------- */
  const STK = window.AQX.STROKES;
  const strokeSVG = (id, cls) => `<svg class="${cls || 'stk-mini'}" viewBox="0 0 200 120" aria-hidden="true"><path d="${STK[id] ? STK[id].d : ''}"/></svg>`;
  function traceHTML(items, tid, opts) {
    const o = opts || {}; const kind = o.kind || 'text';
    const wide = o.level === 'line';
    const label = x => kind === 'stroke' ? strokeSVG(x) : esc(x);
    return `<div class="trace ${wide ? 'trace-wide' : ''}" data-trace="${tid}" data-kind="${kind}" data-items="${esc(JSON.stringify(items))}" ${o.blind ? 'data-blind="1"' : ''} ${o.lesson ? `data-lesson="${esc(o.lesson)}"` : ''}>
      <div class="trace-pad"><canvas class="t-guide"></canvas><canvas class="t-demo"></canvas><canvas class="t-ink"></canvas></div>
      <div class="trace-side">
        <div class="muted" style="font-size:.88rem">${o.blind ? t1({ bn: 'শুনুন, তারপর না দেখে লিখুন। শেষে উত্তর দেখে মিলিয়ে নিন।', en: 'Listen, then write without looking. Reveal the answer to check.' }) : u('traceHelp')}</div>
        ${items.length > 1 ? `<div class="trace-letters ${kind === 'stroke' ? 'trace-strokes' : ''}">${items.map((x, k) => `<button type="button" data-tpick="${k}" aria-pressed="${k === 0}" aria-label="${esc(x)}">${o.blind ? num(k + 1) : label(x)}</button>`).join('')}</div>` : ''}
        <div class="trace-score" aria-live="polite"></div>
        <div class="trace-btns">
          ${o.blind ? `<button class="btn btn-primary btn-sm" type="button" data-tsay>${icon('play')} ${u('listen')}</button><button class="btn btn-sm" type="button" data-treveal>${t1({ bn: 'উত্তর দেখুন', en: 'Show answer' })}</button>`
            : `<button class="btn btn-sm" type="button" data-tdemo>${icon('play')} ${t1({ bn: 'কলম দেখুন', en: 'Watch the pen' })}</button>`}
          <button class="btn btn-primary btn-sm" type="button" data-tcheck>${u('checkTrace')}</button>
          <button class="btn btn-sm" type="button" data-tclear>${u('clear')}</button>
          ${items.length > 1 ? `<button class="btn btn-sm btn-ghost" type="button" data-tnext>${t1({ bn: 'পরেরটি', en: 'Next' })} ${icon('arrowR')}</button>` : ''}
        </div>
      </div></div>`;
  }
  function initTraces(root) {
    $$('.trace', root).forEach(box => {
      if (box._init) return; box._init = true;
      const items = JSON.parse(box.dataset.items); const kind = box.dataset.kind || 'text'; let cur = 0;
      let revealed = !box.dataset.blind;
      const guide = $('.t-guide', box), demo = $('.t-demo', box), ink = $('.t-ink', box), pad = $('.trace-pad', box);
      const g = guide.getContext('2d'), dm = demo.getContext('2d'), k = ink.getContext('2d');
      let W = 0, H = 0, dpr = 1, drawing = false, last = null, mask = null, geo = null, anim = 0;
      const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
      const FONT = '"Amiri", "Noto Naskh Arabic", serif';
      function size() {
        const r = pad.getBoundingClientRect(); dpr = Math.min(2, devicePixelRatio || 1);
        W = Math.max(10, r.width); H = Math.max(10, r.height);
        [guide, demo, ink].forEach(c => { c.width = W * dpr; c.height = H * dpr; });
        [g, dm, k].forEach(c => c.setTransform(dpr, 0, 0, dpr, 0, 0)); drawGuide();
      }
      // where and how big the model sits
      function layout(ctx) {
        if (kind === 'stroke') { const sc = Math.min(W / 200, H / 120) * .92; return { sc, ox: (W - 200 * sc) / 2, oy: (H - 120 * sc) / 2 }; }
        const txt = items[cur]; let fs = H * .5; ctx.font = `${fs}px ${FONT}`;
        const w = ctx.measureText(txt).width; if (w > W * .86) fs *= (W * .86) / w;
        return { fs, base: H * .64 };
      }
      // copybook guide lines: baseline (solid) plus dashed helper lines
      function rules(ctx) {
        ctx.save(); ctx.strokeStyle = css('--line'); ctx.lineWidth = 1;
        const base = kind === 'stroke' ? geo.oy + 80 * geo.sc : geo.base;
        const step = kind === 'stroke' ? 26 * geo.sc : geo.fs * .34;
        [base - step * 2, base - step, base + step].forEach(y => { ctx.setLineDash([3, 6]); ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); });
        ctx.setLineDash([]); ctx.strokeStyle = css('--ink-3'); ctx.globalAlpha = .55; ctx.beginPath(); ctx.moveTo(0, base); ctx.lineTo(W, base); ctx.stroke();
        ctx.restore();
      }
      function model(ctx, color, alpha) {
        ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = color; ctx.strokeStyle = color;
        if (kind === 'stroke') {
          ctx.translate(geo.ox, geo.oy); ctx.scale(geo.sc, geo.sc); ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
          ctx.stroke(new Path2D(STK[items[cur]].d));
        } else {
          ctx.font = `${geo.fs}px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; ctx.direction = 'rtl';
          ctx.fillText(items[cur], W / 2, geo.base);
        }
        ctx.restore();
      }
      function drawGuide() {
        g.clearRect(0, 0, W, H); dm.clearRect(0, 0, W, H); geo = layout(g); rules(g);
        if (revealed) model(g, css('--ink-3'), .3);
        // scoring mask at quarter resolution
        const m = document.createElement('canvas'); m.width = Math.max(4, Math.round(W / 4)); m.height = Math.max(4, Math.round(H / 4));
        const mx = m.getContext('2d'); mx.scale(.25, .25); model(mx, '#000', 1); mask = mx.getImageData(0, 0, m.width, m.height);
      }
      // "watch the pen": reveal right to left for text, follow the path for strokes
      function playDemo() {
        cancelAnimationFrame(anim); const t0 = performance.now(); const dur = kind === 'stroke' ? 1300 : 900 + 260 * [...items[cur]].length;
        const col = css('--primary');
        let pts = null;
        if (kind === 'stroke') {
          const sv = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); sv.setAttribute('style', 'position:absolute;width:0;height:0;overflow:hidden');
          const p = document.createElementNS('http://www.w3.org/2000/svg', 'path'); p.setAttribute('d', STK[items[cur]].d); sv.appendChild(p); document.body.appendChild(sv);
          const len = p.getTotalLength(); pts = Array.from({ length: 80 }, (_, i) => p.getPointAtLength(len * i / 79)); sv.remove();
        }
        (function frame(now) {
          const f = Math.min(1, (now - t0) / dur); dm.clearRect(0, 0, W, H);
          if (kind === 'stroke') {
            dm.save(); dm.translate(geo.ox, geo.oy); dm.scale(geo.sc, geo.sc); dm.strokeStyle = col; dm.lineWidth = 9; dm.lineCap = 'round'; dm.lineJoin = 'round';
            const n = Math.max(2, Math.round(pts.length * f)); dm.beginPath(); dm.moveTo(pts[0].x, pts[0].y); for (let i = 1; i < n; i++) dm.lineTo(pts[i].x, pts[i].y); dm.stroke();
            const tip = pts[n - 1]; dm.fillStyle = css('--gold'); dm.beginPath(); dm.arc(tip.x, tip.y, 7, 0, 7); dm.fill(); dm.restore();
          } else {
            dm.save(); dm.beginPath(); dm.rect(W * (1 - f), 0, W * f, H); dm.clip(); model(dm, col, .9); dm.restore();
            dm.save(); dm.fillStyle = css('--gold'); dm.beginPath(); dm.arc(W * (1 - f) + 4, geo.base - geo.fs * .25, 6, 0, 7); dm.fill(); dm.restore();
          }
          if (f < 1) anim = requestAnimationFrame(frame); else setTimeout(() => dm.clearRect(0, 0, W, H), 700);
        })(t0);
      }
      function pos(e) { const r = ink.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; }
      ink.addEventListener('pointerdown', e => { drawing = true; last = pos(e); ink.setPointerCapture(e.pointerId); dot(last); });
      ink.addEventListener('pointermove', e => { if (!drawing) return; const p = pos(e); line(last, p); last = p; });
      ['pointerup', 'pointercancel', 'pointerleave'].forEach(ev => ink.addEventListener(ev, () => { drawing = false; }));
      function style() { k.strokeStyle = css('--primary'); k.fillStyle = k.strokeStyle; k.lineWidth = Math.max(8, Math.min(W, H * 1.4) / 30); k.lineCap = 'round'; k.lineJoin = 'round'; }
      function dot(p) { style(); k.beginPath(); k.arc(p.x, p.y, k.lineWidth / 2, 0, 7); k.fill(); }
      function line(a, b) { style(); k.beginPath(); k.moveTo(a.x, a.y); k.lineTo(b.x, b.y); k.stroke(); }
      const sayItem = () => { if (kind !== 'stroke') say(items[cur]); };
      function select(i) {
        cur = (i + items.length) % items.length; revealed = !box.dataset.blind;
        $$('[data-tpick]', box).forEach((b, j) => b.setAttribute('aria-pressed', j === cur));
        k.clearRect(0, 0, W, H); drawGuide(); $('.trace-score', box).innerHTML = '';
        sayItem();
      }
      box.addEventListener('click', e => {
        const pick = e.target.closest('[data-tpick]'); if (pick) select(+pick.dataset.tpick);
        if (e.target.closest('[data-tnext]')) select(cur + 1);
        if (e.target.closest('[data-tclear]')) { k.clearRect(0, 0, W, H); $('.trace-score', box).innerHTML = ''; }
        if (e.target.closest('[data-tcheck]')) score();
        if (e.target.closest('[data-tdemo]')) playDemo();
        if (e.target.closest('[data-tsay]')) sayItem();
        if (e.target.closest('[data-treveal]')) { revealed = true; drawGuide(); $('.trace-score', box).innerHTML = `<span class="ar-in" lang="ar" style="font-size:1.6em">${esc(items[cur])}</span>`; }
      });
      function score() {
        const sw = mask.width, sh = mask.height; const small = document.createElement('canvas'); small.width = sw; small.height = sh;
        const sx = small.getContext('2d'); sx.drawImage(ink, 0, 0, sw, sh); const inkD = sx.getImageData(0, 0, sw, sh).data; const mD = mask.data;
        let letterPx = 0, covered = 0, inkPx = 0, onLetter = 0;
        for (let p = 3; p < mD.length; p += 4) {
          const isL = mD[p] > 80, isI = inkD[p] > 40;
          if (isL) letterPx++; if (isI) inkPx++; if (isL && isI) covered++;
          if (isI && near(p)) onLetter++;
        }
        function near(p) { const idx = (p - 3) / 4, x = idx % sw, y = (idx / sw) | 0; for (let dy = -2; dy <= 2; dy++) for (let dx = -2; dx <= 2; dx++) { const xx = x + dx, yy = y + dy; if (xx >= 0 && yy >= 0 && xx < sw && yy < sh && mD[(yy * sw + xx) * 4 + 3] > 80) return true; } return false; }
        const out = $('.trace-score', box);
        if (inkPx < 5) { out.innerHTML = `<small>${t1({ bn: 'আগে লিখুন, তারপর মিলিয়ে দেখুন', en: 'Write first, then check' })}</small>`; return; }
        const cov = covered / Math.max(1, letterPx), prec = onLetter / inkPx;
        const sc = Math.round(Math.min(1, (2 * cov * prec) / Math.max(.01, cov + prec) * 1.45) * 100);
        const stars = sc >= 80 ? 3 : sc >= 55 ? 2 : sc >= 30 ? 1 : 0;
        if (!revealed) { revealed = true; drawGuide(); }
        out.innerHTML = `${'★'.repeat(stars)}${'☆'.repeat(3 - stars)} ${num(sc)}%<small>${t1(stars === 3 ? { bn: 'অসাধারণ হাতের লেখা!', en: 'Beautiful writing!' } : stars >= 1 ? { bn: 'ভালো! আরও একটু রেখার ওপর থাকুন।', en: 'Good! Stay a little closer to the guide.' } : { bn: 'আবার চেষ্টা করুন — ধীরে ধীরে লিখুন।', en: 'Try again, slowly.' })}</small>`;
        bumpDaily('write'); if (stars === 3) addXP(2);
      }
      size(); new ResizeObserver(() => { const r = pad.getBoundingClientRect(); if (Math.abs(r.width - W) > 2) size(); }).observe(pad);
      if (document.fonts) document.fonts.ready.then(drawGuide);
    });
  }

  /* ---------- alphabet ---------- */
  let alphaFilter = 'all';
  function viewAlphabet() {
    const F = [['all', u('all')], ['sun', u('sun')], ['moon', u('moon')], ['heavy', u('heavy')], ['qalqalah', u('qalqalah')], ['nonjoin', t1({ bn: 'জোড়া লাগে না', en: 'Non-joining' })], ['families', u('families')]];
    return `<div class="page-head"><div class="eyebrow">${u('alphabet')}</div><h1 class="page-title">${tx({ bn: 'আরবি বর্ণমালা — ২৯টি হরফ', en: 'The Arabic alphabet: 29 letters' })}</h1>
      <p class="muted">${t1({ bn: 'যেকোনো হরফে ট্যাপ করুন: উচ্চারণ শুনুন, চার রূপ দেখুন, মাখরাজ জানুন আর নিজ হাতে লিখে অনুশীলন করুন।', en: 'Tap any letter to hear it, see its four forms, learn where it is pronounced and practise writing it.' })}</p></div>
      <div class="filters" role="group">${F.map(([k, l]) => `<button type="button" data-afilter="${k}" aria-pressed="${alphaFilter === k}">${l}</button>`).join('')}</div>
      <div id="alphaGrid">${alphaGrid()}</div>
      <div class="legend"><span><i style="background:var(--c-rose)"></i>${u('heavy')}</span><span><i style="background:var(--ink)"></i>${u('light')}</span></div>`;
  }
  function alphaGrid() {
    const A = AQ.alphabet || [];
    if (!A.length) return `<div class="empty">${u('loading')}</div>`;
    if (alphaFilter === 'families') {
      const fam = {}; A.forEach(a => (fam[a.family] = fam[a.family] || []).push(a));
      return Object.values(fam).filter(g => g.length > 1).map(g => `<div style="margin-bottom:14px"><div class="eyebrow" style="margin-bottom:6px">${g.map(a => t1(a.name)).join(' · ')}</div><div class="letter-grid">${g.map(letterTile).join('')}</div></div>`).join('');
    }
    const test = { all: () => true, sun: a => a.sun, moon: a => !a.sun && a.id !== 'hamza', heavy: a => a.heavy, qalqalah: a => a.qalqalah, nonjoin: a => !a.connects }[alphaFilter] || (() => true);
    return `<div class="letter-grid">${A.map(a => letterTile(a).replace('class="ltile', `class="ltile ${test(a) ? '' : 'dim'}`)).join('')}</div>`;
  }
  function openLetter(id) {
    const A = AQ.alphabet; const i = A.findIndex(a => a.id === id); const a = A[i]; if (!a) return;
    const prev = A[(i - 1 + A.length) % A.length], next = A[(i + 1) % A.length];
    const chip = (on, a1, b1) => `<span class="chip">${u(on ? a1 : b1)}</span>`;
    $('#modalCard').innerHTML = `
      <button class="icon-btn lm-close" type="button" data-close aria-label="${u('close')}">${icon('x')}</button>
      <div class="lm-head"><div class="pattern"></div><div class="lm-big" lang="ar">${esc(a.ar)}</div>
        <div><div class="eyebrow">${num(i + 1)} / ${num(A.length)}</div><h2>${t1(a.name)} <span class="ar-in" lang="ar">${esc(a.nameAr)}</span></h2>
        <div class="muted">${esc(a.tr.bn)} · <span lang="en">${esc(a.tr.en)}</span> · <span lang="en">${esc(a.name.en)}</span></div>
        <div class="chips" style="margin-top:10px">${chip(a.sun, 'sun', 'moon')}${chip(a.heavy, 'heavy', 'light')}${a.qalqalah ? chip(1, 'qalqalah') : ''}${chip(a.connects, 'join', 'nonjoin')}</div>
        <div style="margin-top:12px;display:flex;gap:8px"><button class="btn btn-primary btn-sm" type="button" data-say="${esc(a.nameAr)}">${icon('play')} ${u('listen')}</button></div></div>
      </div>
      <div class="lm-body">
        <div><div class="eyebrow" style="margin-bottom:6px">${u('forms')}</div>
        <div class="forms">${['isolated', 'initial', 'medial', 'final'].map(f => `<div class="form-box"><div class="ar" lang="ar">${esc(a.forms[f])}</div><small>${u(f)}</small></div>`).join('')}</div></div>
        <dl class="kv">
          <dt>${u('makhraj')}</dt><dd>${tx(a.makhraj)}</dd>
          <dt>${u('sound')}</dt><dd>${tx(a.sound)}</dd>
          ${a.mnemonic ? `<dt>${u('trick')}</dt><dd>${tx(a.mnemonic)}</dd>` : ''}
          <dt>${u('example')}</dt><dd><span class="ar-in" lang="ar" style="font-size:1.9em;cursor:pointer" data-say="${esc(pz(a.example.ar, a.example.tr))}">${esc(a.example.ar)}</span> — ${esc(a.example.tr.bn)} / <span lang="en">${esc(a.example.tr.en)}</span> = ${t1(a.example.mean)}</dd>
        </dl>
        ${traceHTML([a.ar, a.forms.initial.replace('ـ', ''), a.example.ar], 'lm')}
        <div class="lm-nav"><button class="btn" type="button" data-letter="${prev.id}">${icon('arrowL')} ${t1(prev.name)}</button><button class="btn" type="button" data-letter="${next.id}">${t1(next.name)} ${icon('arrowR')}</button></div>
      </div>`;
    $('#modal').hidden = false; initTraces($('#modalCard')); say(a.nameAr);
    $('.lm-close').focus();
  }
  function closeModal() { $('#modal').hidden = true; $('#modalCard').innerHTML = ''; }

  /* ---------- flashcards (Leitner SRS) ---------- */
  const INTERVALS = [0, 1, 2, 4, 8, 16, 32]; // days per box
  let fcDeck = 'all', fcQueue = [], fcFlip = false;
  function deckWords(deck) { return D.vocab.filter(w => deck === 'all' || !deck || w.unit.id === deck); }
  function dueCards(deck) {
    const now = Date.now(); const words = deckWords(deck || 'all');
    const due = words.filter(w => S.srs[w.ar] && S.srs[w.ar].due <= now);
    const fresh = words.filter(w => !S.srs[w.ar]).slice(0, 12);
    return due.concat(fresh);
  }
  function viewCards() {
    const decks = D.units.filter(un => D.vocab.some(w => w.unit.id === un.id));
    fcQueue = dueCards(fcDeck); fcFlip = false;
    const words = deckWords(fcDeck);
    const boxes = [0, 1, 2, 3, 4, 5].map(b => words.filter(w => b === 0 ? !S.srs[w.ar] : (S.srs[w.ar] && Math.min(5, S.srs[w.ar].box) === b)).length);
    const boxNames = S.lang === 'en' ? ['New', 'Box 1', 'Box 2', 'Box 3', 'Box 4', 'Mastered'] : ['নতুন', 'বক্স ১', 'বক্স ২', 'বক্স ৩', 'বক্স ৪', 'আয়ত্তে'];
    return `<div class="fc-wrap">
      <div class="page-head"><div class="eyebrow">${u('cards')}</div><h1 class="page-title">${tx({ bn: 'স্মার্ট ফ্ল্যাশকার্ড', en: 'Smart flashcards' })}</h1>
      <p class="muted">${t1({ bn: 'স্পেসড রিপিটিশন: যে শব্দ পারেন তা পরে আসবে, যা ভুলে যান তা দ্রুত ফিরে আসবে। প্রতিদিন একটু করে।', en: 'Spaced repetition: words you know come back later, words you forget come back sooner. A little every day.' })}</p></div>
      <div class="fc-bar">
        <label><span class="muted" style="font-size:.85rem">${S.lang === 'en' ? 'Deck' : 'ডেক'}: </span><select id="fcDeck">${['all'].concat(decks.map(d => d.id)).map(id => `<option value="${id}" ${fcDeck === id ? 'selected' : ''}>${id === 'all' ? u('allDecks') : plain(D.units.find(x => x.id === id).title)}</option>`).join('')}</select></label>
        <div class="seg" role="group"><button type="button" data-fcdir="ar" aria-pressed="${S.fcDir === 'ar'}">${S.lang === 'en' ? 'Arabic → meaning' : 'আরবি → অর্থ'}</button><button type="button" data-fcdir="mean" aria-pressed="${S.fcDir === 'mean'}">${S.lang === 'en' ? 'Meaning → Arabic' : 'অর্থ → আরবি'}</button></div>
      </div>
      <div class="boxes">${boxes.map((n, b) => `<div><b>${num(n)}</b><small>${boxNames[b]}</small></div>`).join('')}</div>
      <div id="fcStage">${fcStage()}</div></div>`;
  }
  function fcStage() {
    if (!D.vocab.length) return `<div class="empty">${u('loading')}</div>`;
    const w = fcQueue[0];
    if (!w) return `<div class="result-card"><div class="big">${icon('check', 'style="width:56px;height:56px"')}</div><b>${u('noDue')}</b><p class="muted">${t1({ bn: 'আগামীকাল আবার আসুন, অথবা অন্য ডেক বেছে নিন।', en: 'Come back tomorrow, or pick another deck.' })}</p></div>`;
    const front = S.fcDir === 'ar'
      ? `<div class="ar" lang="ar">${esc(w.ar)}</div>`
      : `<div class="fc-mean">${tx(w.mean)}</div>`;
    const back = `<div class="ar" lang="ar" style="font-size:calc(3rem * var(--ar-scale))">${esc(w.ar)}</div>
      <div style="color:var(--primary);font-weight:600">${esc(w.tr.bn)} · <span lang="en">${esc(w.tr.en)}</span></div>
      <div class="fc-mean">${tx(w.mean)}</div>
      ${w.root ? `<span class="root">${esc(w.root)}</span>` : ''}
      ${w.example ? `<div class="muted" style="font-size:.9rem"><span class="ar-in" lang="ar">${esc(w.example.ar)}</span> — ${t1(w.example.mean)}</div>` : ''}`;
    return `<div class="muted" style="text-align:center;font-size:.85rem;margin-bottom:8px">${num(fcQueue.length)} ${S.lang === 'en' ? 'cards left today' : 'টি কার্ড বাকি'}</div>
      <div class="card3d ${fcFlip ? 'flip' : ''}" id="fcCard" role="button" tabindex="0" aria-label="${u('flip')}">
        <div class="card3d-in"><div class="face"><div class="pattern"></div>${front}<span class="hint">${u('flip')}</span></div><div class="face back"><div class="pattern"></div>${back}</div></div>
      </div>
      <div style="display:flex;justify-content:center;margin:12px 0">${playBtn(pz(w.ar, w.tr))}</div>
      <div class="fc-actions">
        <button class="btn" type="button" data-fc="0" style="color:var(--bad)">${u('again')}<small>${S.lang === 'en' ? 'soon' : 'শিগগিরই'}</small></button>
        <button class="btn" type="button" data-fc="1">${u('hard')}<small>${S.lang === 'en' ? 'tomorrow' : 'আগামীকাল'}</small></button>
        <button class="btn btn-primary" type="button" data-fc="2">${u('easy')}<small>${S.lang === 'en' ? 'later' : 'পরে'}</small></button>
      </div>`;
  }
  function fcGrade(g) {
    const w = fcQueue.shift(); if (!w) return;
    const c = S.srs[w.ar] || { box: 0, due: 0 };
    if (g === 0) { c.box = 1; c.due = Date.now() + 60e3; fcQueue.splice(Math.min(3, fcQueue.length), 0, w); }
    else if (g === 1) { c.box = Math.max(1, c.box); c.due = Date.now() + 864e5; }
    else { c.box = Math.min(6, c.box + 1); c.due = Date.now() + INTERVALS[c.box] * 864e5; }
    S.srs[w.ar] = c; fcFlip = false; addXP(g === 0 ? 0 : 1); bumpDaily('cards');
    $('#fcStage').innerHTML = fcStage();
  }

  /* ---------- games ---------- */
  function viewGames() {
    const G = [
      ['hunt', 'ب', 'teal', { bn: 'হরফ শিকার', en: 'Letter Hunt' }, { bn: '৬০ সেকেন্ডে যত বেশি সম্ভব হরফ চিনুন। নাম দেখে সঠিক হরফটি ধরুন — একই রকম দেখতে হরফ দিয়ে ফাঁদ পাতা আছে!', en: 'Spot as many letters as you can in 60 seconds. Look-alike letters are there to trick you!' }],
      ['harakat', 'بُ', 'amber', { bn: 'হরকত হিরো', en: 'Harakat Hero' }, { bn: 'উচ্চারণ দেখে সঠিক যবর-যের-পেশ যুক্ত হরফ বেছে নিন। দ্রুত পড়ার দক্ষতা বাড়ান।', en: 'Read the sound and pick the letter with the right vowel mark. Builds fast reading.' }],
      ['match', 'كَلِمَة', 'rose', { bn: 'শব্দ মেলাও', en: 'Word Match' }, { bn: 'আরবি শব্দ আর তার অর্থের জোড়া মেলান। কম চালে শেষ করলে বেশি স্কোর।', en: 'Match Arabic words with their meanings. Fewer moves means a higher score.' }],
      ['puzzle', 'آيَة', 'violet', { bn: 'আয়াত পাজল', en: 'Ayah Puzzle' }, { bn: 'এলোমেলো শব্দগুলো সঠিক ক্রমে সাজিয়ে আয়াত সম্পূর্ণ করুন। অর্থ দেখে বুঝে সাজান — মুখস্থও পাকা হবে।', en: 'Put the shuffled words back in order to rebuild the ayah. The meaning is your clue, and it locks in your memorisation.' }],
      ['listen', 'سَمْع', 'indigo', { bn: 'শুনে চিনুন', en: 'Listen & Pick' }, { bn: 'শব্দটি শুনুন, তারপর চারটি আরবি শব্দ থেকে সঠিকটি বেছে নিন। কান ও চোখ একসাথে শেখে।', en: 'Hear a word, then pick it from four Arabic words. Trains your ears and eyes together.' }],
      ['write', 'خط', 'cyan', { bn: 'লেখার চ্যালেঞ্জ', en: 'Writing Challenge' }, { bn: 'লেখার স্টুডিওতে যান — কলম দেখুন, ট্রেস করুন আর তিন তারকা জিতুন।', en: 'Go to the writing studio: watch the pen, trace and win three stars.' }]
    ];
    return `<div class="page-head"><div class="eyebrow">${u('games')}</div><h1 class="page-title">${tx({ bn: 'খেলতে খেলতে শিখি', en: 'Learn while you play' })}</h1></div>
      <div class="game-grid">${G.map(([id, ar, c, n, d]) => `<div class="game-card" data-c="${c}"><div class="pattern" style="background:var(--uc);opacity:.07"></div><div class="g-ar" lang="ar">${ar}</div><h3>${tx(n)}</h3><p>${t1(d)}</p>
        <div style="display:flex;justify-content:space-between;align-items:center"><span class="chip">${u('best')}: ${num(S.best[id] || 0)}</span><a class="btn btn-primary" href="${id === 'write' ? '#unit/writing' : '#play/' + id}">${u('play')} ${icon('arrowR')}</a></div></div>`).join('')}</div>`;
  }
  let G = null;
  function stopGame() { if (G && G.timer) clearInterval(G.timer); G = null; }
  function viewPlay(id) {
    stopGame();
    if (!(AQ.alphabet || []).length) return `<div class="empty">${u('loading')}</div>`;
    G = { id, score: 0, combo: 0, time: 60, moves: 0 };
    setTimeout(() => { if (id === 'match') matchStart(); else if (id === 'puzzle') puzzleStart(); else { roundStart(); G.timer = setInterval(tickGame, 1000); } }, 0);
    return `<div class="arena" id="arena"></div>`;
  }
  function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0;[a[i], a[j]] = [a[j], a[i]]; } return a; }
  function tickGame() { if (!G) return; G.time--; const t = $('#gTimer'); if (t) t.style.width = (G.time / 60 * 100) + '%'; const tt = $('#gTime'); if (tt) tt.textContent = num(G.time); if (G.time <= 0) endGame(); }
  function roundStart() {
    const A = AQ.alphabet.filter(a => a.id !== 'hamza');
    const a = A[Math.random() * A.length | 0];
    let opts, prompt, answer;
    if (G.id === 'listen') {
      const pool = D.vocab.filter(w => w.ar.length <= 16);
      const w = pool[Math.random() * pool.length | 0];
      const others = shuffle(pool.filter(x => x.ar !== w.ar)).slice(0, 3);
      answer = w.ar; opts = shuffle([w].concat(others)).map(x => x.ar);
      G.answer = answer;
      $('#arena').innerHTML = `${arenaTop()}<div class="prompt"><div class="muted">${t1({ bn: 'শুনুন — কোন শব্দটি?', en: 'Listen: which word is it?' })}</div>
        <button class="btn btn-primary listen-btn" type="button" data-say="${esc(pz(w.ar, w.tr))}">${icon('play')} ${u('listen')}</button><div class="muted" style="margin-top:8px">${t1(w.mean)}</div></div>
        <div class="answers answers-words">${opts.map(o => `<button type="button" data-gans="${esc(o)}" lang="ar">${esc(o)}</button>`).join('')}</div>`;
      setTimeout(() => say(pz(w.ar, w.tr)), 250);
      return;
    }
    if (G.id === 'hunt') {
      const fam = shuffle(A.filter(x => x.family === a.family && x !== a));
      const rest = shuffle(A.filter(x => x !== a && !fam.includes(x)));
      opts = shuffle([a].concat(fam.slice(0, 2), rest).slice(0, 4)).map(x => x.ar);
      // ensure correct is in options
      if (!opts.includes(a.ar)) opts[0] = a.ar; opts = shuffle(opts);
      answer = a.ar;
      prompt = `<div class="muted">${t1({ bn: 'এই হরফটি খুঁজুন', en: 'Find this letter' })}</div><div class="big">${t1(a.name)}</div><div class="muted" lang="en">${esc(a.name.en)} · /${esc(a.tr.en)}/</div>`;
    } else {
      const marks = ['َ', 'ِ', 'ُ', 'ْ', 'ً', 'ٍ', 'ٌ'];
      const m = marks[Math.random() * 3 | 0];
      const trn = syllableTr(a.ar, m) || { bn: '', en: '' };
      const others = shuffle(marks.filter(x => x !== m)).slice(0, 2).map(x => a.ar + x);
      const fam = A.filter(x => x.family === a.family && x !== a);
      const look = (fam[0] || A[(A.indexOf(a) + 3) % A.length]).ar + m;
      answer = a.ar + m; opts = shuffle([answer, look].concat(others));
      prompt = `<div class="muted">${t1({ bn: 'কোনটি পড়া হয়…', en: 'Which one reads…' })}</div><div class="big">${esc(trn.bn)} <span class="muted" lang="en" style="font-size:.6em">/${esc(trn.en)}/</span></div>`;
    }
    G.answer = answer;
    $('#arena').innerHTML = `${arenaTop()}<div class="prompt">${prompt}</div><div class="answers">${opts.map(o => `<button type="button" data-gans="${esc(o)}" lang="ar">${esc(o)}</button>`).join('')}</div>`;
  }
  function arenaTop() {
    return `<div class="arena-top"><a class="btn btn-ghost btn-sm" href="#games">${icon('arrowL')} ${u('games')}</a><span>${u('score')}: ${num(G.score)} ${G.combo > 2 ? `<span class="chip" style="background:var(--gold-soft);color:var(--gold)">×${num(G.combo)}</span>` : ''}</span><span>${u('time')}: <span id="gTime">${num(G.time)}</span></span></div>
      <div class="timer"><i id="gTimer" style="width:${G.time / 60 * 100}%"></i></div>`;
  }
  function gameAnswer(btn) {
    if (!G || G.lock) return; G.lock = true;
    const ok = btn.dataset.gans === G.answer;
    btn.classList.add(ok ? 'ok' : 'no');
    if (!ok) $$('[data-gans]').forEach(b => { if (b.dataset.gans === G.answer) b.classList.add('ok'); });
    if (ok) { G.combo++; G.score += 10 + Math.min(G.combo, 10) * 2; } else G.combo = 0;
    say(G.answer);
    setTimeout(() => { if (!G) return; G.lock = false; roundStart(); }, ok ? 450 : 1100);
  }
  function endGame() {
    if (!G) return; clearInterval(G.timer); const id = G.id, sc = G.score;
    const best = S.best[id] || 0; const isBest = sc > best; if (isBest) S.best[id] = sc;
    addXP(Math.round(sc / 10)); if (isBest && sc > 0) confetti();
    $('#arena').innerHTML = `<div class="result-card"><div class="eyebrow">${isBest ? t1({ bn: 'নতুন রেকর্ড!', en: 'New record!' }) : u('score')}</div><div class="big">${num(sc)}</div><div class="muted">${u('best')}: ${num(S.best[id] || 0)} · +${num(Math.round(sc / 10))} ${u('xp')}</div>
      <div style="display:flex;gap:8px"><a class="btn" href="#games">${u('games')}</a><button class="btn btn-primary" type="button" data-replay="${id}">${u('again2')}</button></div></div>`;
    G = null;
  }
  function matchStart() {
    const pool = shuffle(D.vocab.filter(w => w.ar.length <= 14 && plain(w.mean).length <= 28)).slice(0, 6);
    if (pool.length < 3) { $('#arena').innerHTML = `<div class="empty">${u('loading')}</div>`; return; }
    G.pairs = pool.length; G.found = 0; G.sel = null;
    const tiles = shuffle(pool.flatMap((w, k) => [{ k, html: `<span class="ar-in" lang="ar">${esc(w.ar)}</span>`, ar: pz(w.ar, w.tr) }, { k, html: t1(w.mean) }]));
    G.start = Date.now();
    $('#arena').innerHTML = `<div class="arena-top"><a class="btn btn-ghost btn-sm" href="#games">${icon('arrowL')} ${u('games')}</a><span id="gMoves">${S.lang === 'en' ? 'Moves' : 'চাল'}: ${num(0)}</span></div>
      <div class="memory">${tiles.map((t, i) => `<button class="mem" type="button" data-mem="${t.k}" ${t.ar ? `data-say="${esc(t.ar)}"` : ''}>${t.html}</button>`).join('')}</div>`;
  }
  /* Ayah Puzzle: rebuild an ayah from shuffled words */
  function puzzleStart() {
    G.pool = shuffle(D.lessons.flatMap(l => l.blocks.filter(b => b.type === 'ayah' && b.words && b.words.length >= 3 && b.words.length <= 9)));
    if (!G.pool.length) { $('#arena').innerHTML = `<div class="empty">${u('loading')}</div>`; return; }
    G.round = 0; G.rounds = Math.min(5, G.pool.length); puzzleRound();
  }
  function puzzleRound() {
    const b = G.pool[G.round]; G.ay = b; G.placed = []; G.tries = 0;
    G.tiles = shuffle(b.words.map((w, i) => ({ i, ar: w.ar })));
    if (G.tiles.every((t, k) => t.i === k)) G.tiles.reverse();
    puzzleDraw();
  }
  function puzzleDraw(state) {
    const b = G.ay, [su, ay] = b.ref.split(':');
    $('#arena').innerHTML = `<div class="arena-top"><a class="btn btn-ghost btn-sm" href="#games">${icon('arrowL')} ${u('games')}</a><span>${t1({ bn: 'রাউন্ড', en: 'Round' })} ${num(G.round + 1)}/${num(G.rounds)} · ${u('score')}: ${num(G.score)}</span></div>
      <div class="prompt puzzle-prompt"><div class="eyebrow">${S.lang === 'en' ? `Surah ${su} · Ayah ${ay}` : `সূরা ${bnNum(su)} · আয়াত ${bnNum(ay)}`}</div><p>${t1(b.mean)}</p></div>
      <div class="pz-answer ${state || ''}" lang="ar" aria-label="Your answer">${G.placed.length ? G.placed.map((t, k) => `<button type="button" class="pz-tile" data-pans="${k}">${esc(t.ar)}</button>`).join('') : `<span class="pz-empty">${t1({ bn: 'ডান দিক থেকে শব্দ সাজান', en: 'Build the ayah from the right' })}</span>`}</div>
      <div class="pz-bank" lang="ar">${G.tiles.map((t, k) => `<button type="button" class="pz-tile" data-ptile="${k}">${esc(t.ar)}</button>`).join('')}</div>
      ${state === 'ok' ? `<div class="pz-foot"><button class="btn btn-primary" type="button" data-pnext>${G.round + 1 < G.rounds ? t1({ bn: 'পরের আয়াত', en: 'Next ayah' }) : u('finish')} ${icon('arrowR')}</button></div>` : ''}`;
  }
  function puzzleMove(from, k) {
    if (!G || !G.tiles) return;
    if (from === 'bank') G.placed.push(G.tiles.splice(k, 1)[0]); else G.tiles.push(G.placed.splice(k, 1)[0]);
    if (!G.tiles.length) {
      const ok = G.placed.every((t, j) => G.ay.words[t.i].ar === G.ay.words[j].ar);
      if (ok) { G.score += Math.max(10, 30 - G.tries * 10); puzzleDraw('ok'); playAyah(G.ay.ref, null); confetti(); return; }
      G.tries++; puzzleDraw('no'); setTimeout(() => { if (G && G.tiles) { G.tiles = G.placed.concat(G.tiles); G.placed = []; puzzleDraw(); } }, 1100);
      toast(L() ? 'Not quite. Read the meaning again and retry.' : 'হয়নি — অর্থটি আবার পড়ে চেষ্টা করুন।'); return;
    }
    puzzleDraw();
  }

  function memClick(b) {
    if (!G || b.classList.contains('matched') || b === G.sel) return;
    if (!G.sel) { G.sel = b; b.classList.add('sel'); return; }
    G.moves++; $('#gMoves').textContent = `${S.lang === 'en' ? 'Moves' : 'চাল'}: ${num(G.moves)}`;
    const a = G.sel; G.sel = null; a.classList.remove('sel');
    if (a.dataset.mem === b.dataset.mem) {
      a.classList.add('matched'); b.classList.add('matched'); G.found++;
      if (G.found === G.pairs) { G.score = Math.max(10, 120 - (G.moves - G.pairs) * 10); setTimeout(endGame, 500); }
    } else { [a, b].forEach(x => { x.classList.add('wrong'); setTimeout(() => x.classList.remove('wrong'), 400); }); }
  }

  /* ---------- search ---------- */
  function viewSearch(q) {
    q = decodeURIComponent(q || '').trim(); const ql = q.toLowerCase();
    const strip = s => String(s).replace(/[ً-ْٰـ]/g, '');
    const qa = strip(q);
    if (!q) return notFound();
    const ls = D.lessons.filter(l => (l.title.bn + ' ' + l.title.en + ' ' + l.subtitle.bn + ' ' + l.subtitle.en).toLowerCase().includes(ql)).slice(0, 20);
    const ws = D.vocab.filter(w => strip(w.ar).includes(qa) || (w.tr.en + ' ' + w.tr.bn + ' ' + w.mean.en + ' ' + w.mean.bn).toLowerCase().includes(ql)).slice(0, 40);
    const as = (AQ.alphabet || []).filter(a => a.ar === q || a.name.en.toLowerCase() === ql || a.name.bn === q);
    return `<div class="page-head"><div class="eyebrow">${u('search')}</div><h1 class="page-title">“${esc(q)}”</h1></div>
      ${!ls.length && !ws.length && !as.length ? `<div class="empty">${u('nothing')}</div>` : ''}
      ${as.length ? `<div class="letter-grid" style="margin-bottom:18px">${as.map(letterTile).join('')}</div>` : ''}
      ${ls.length ? `<div class="results" style="margin-bottom:18px">${ls.map(l => `<a class="result" href="#lesson/${l.id}" data-c="${l.unit.color}">${badge(l.unit, 'style="width:40px;height:40px;font-size:18px"', l.icon)}<div><b>${tx(l.title)}</b><div class="muted" style="font-size:.85rem">${t1(l.unit.title)}</div></div></a>`).join('')}</div>` : ''}
      ${ws.length ? `<div class="results">${ws.map(w => `<a class="result" href="#lesson/${w.lesson.id}"><span class="ar" lang="ar">${esc(w.ar)}</span><div><b>${tx(w.mean)}</b><div class="muted" style="font-size:.85rem">${esc(w.tr.bn)} · ${esc(w.tr.en)} — ${t1(w.lesson.title)}</div></div></a>`).join('')}</div>` : ''}`;
  }

  /* ---------- settings ---------- */
  function viewSettings() {
    return `<div class="page-head"><div class="eyebrow">${u('settings')}</div><h1 class="page-title">${tx({ bn: 'আপনার অগ্রগতি ও সেটিংস', en: 'Your progress & settings' })}</h1></div>
    <div class="settings">
      <div class="stats" style="margin:0 0 6px">
        <div class="stat"><b>${num(S.xp)}</b><span>${u('xp')}</span></div><div class="stat"><b>${num(S.streak.count)}</b><span>${u('streak')}</span></div>
        <div class="stat"><b>${num(Object.keys(S.done).length)}</b><span>${u('lessonsDone')}</span></div><div class="stat"><b>${num(masteredCount())}</b><span>${u('words')}</span></div>
      </div>
      <div class="set-row"><div><b>${S.lang === 'en' ? 'Arabic text size' : 'আরবি লেখার আকার'}</b><small>${S.lang === 'en' ? 'Make Arabic bigger for easier reading' : 'সহজে পড়ার জন্য আরবি বড় করুন'}</small></div>
        <input id="arScale" type="range" min="0.8" max="1.6" step="0.1" value="${S.arScale}"></div>
      <div class="set-row"><div><b>${S.lang === 'en' ? 'Speech speed' : 'উচ্চারণের গতি'}</b><small>${arVoice ? (S.lang === 'en' ? 'Voice: ' : 'ভয়েস: ') + esc(arVoice.name) : (S.lang === 'en' ? 'No Arabic voice detected on this device' : 'এই ডিভাইসে আরবি ভয়েস পাওয়া যায়নি')}</small></div>
        <span style="display:flex;gap:8px;align-items:center"><input id="rate" type="range" min="0.4" max="1.1" step="0.05" value="${S.rate}"><button class="play" type="button" data-say="بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيمِ">${icon('play')}</button></span></div>
      <div class="set-row"><div><b>${S.lang === 'en' ? 'Theme' : 'থিম'}</b></div>
        <div class="seg" role="group">${[['auto', S.lang === 'en' ? 'System' : 'সিস্টেম'], ['light', S.lang === 'en' ? 'Light' : 'আলো'], ['dark', S.lang === 'en' ? 'Dark' : 'অন্ধকার']].map(([k, l]) => `<button type="button" data-theme-set="${k}" aria-pressed="${S.theme === k}">${l}</button>`).join('')}</div></div>
      <div class="set-row"><div><b>${u('book')}</b><small>${S.lang === 'en' ? 'Print it or save as PDF from your browser' : 'ব্রাউজার থেকে প্রিন্ট বা PDF হিসেবে সেভ করুন'}</small></div><span style="display:flex;gap:8px;flex-wrap:wrap"><a class="btn" href="book.html" target="_blank" rel="noopener">${u('printBook')}</a><a class="btn btn-primary" href="Quran-o-Arbi-Shikkha.pdf" download>${S.lang === 'en' ? 'Download PDF' : 'PDF ডাউনলোড'}</a></span></div>
      <div class="set-row"><div><b>${S.lang === 'en' ? 'Reset progress' : 'অগ্রগতি মুছে ফেলুন'}</b><small>${S.lang === 'en' ? 'Clears XP, lessons, quiz scores and flashcards on this device' : 'এই ডিভাইসের এক্সপি, পাঠ, কুইজ ও ফ্ল্যাশকার্ডের তথ্য মুছে যাবে'}</small></div>
        <span id="resetSlot"><button class="btn" type="button" data-reset="ask" style="color:var(--bad)">${S.lang === 'en' ? 'Reset' : 'মুছুন'}</button></span></div>
    </div>`;
  }

  function viewTools() {
    return `<div class="page-head"><div class="eyebrow">${u('more')}</div><h1 class="page-title">${tx({ bn: 'সব শেখার টুলস', en: 'All learning tools' })}</h1></div>
      ${missionsHTML()}<div class="tools-grid" style="margin-top:18px">${toolCards().join('')}</div>`;
  }

  function rootMap() {
    const m = {}; D.vocab.forEach(w => { if (!w.root) return; const r = w.root.replace(/\s+/g, ' ').trim(); (m[r] = m[r] || []).push(w); });
    return Object.entries(m).sort((a, b) => b[1].length - a[1].length);
  }
  let rootQuery = '';
  function viewRoots() {
    const all = rootMap(); if (!all.length) return `<div class="empty">${u('loading')}</div>`;
    const featured = all.filter(([, ws]) => ws.length >= 2);
    const pick = featured.length ? featured[dayIndex() % featured.length] : all[0];
    return `<div class="page-head"><div class="eyebrow">${u('roots')}</div><h1 class="page-title">${tx({ bn: 'মূলধাতু এক্সপ্লোরার', en: 'Root explorer' })}</h1>
      <p class="muted">${t1({ bn: 'আরবির বেশিরভাগ শব্দ তিন অক্ষরের একটি মূল থেকে আসে। একটি মূল চিনলে শব্দের পুরো পরিবার চেনা যায়।', en: 'Most Arabic words grow from a three-letter root. Learn one root and you recognise a whole family of words.' })}</p></div>
      <section class="root-hero"><div class="pattern"></div><div class="eyebrow">${t1({ bn: 'আজকের মূল', en: 'Root of the day' })}</div>
        <div class="root-big" lang="ar">${esc(pick[0])}</div>
        <div class="root-fam">${pick[1].map(w => `<button class="root-w" type="button" data-say="${esc(pz(w.ar, w.tr))}"><span class="ar-in" lang="ar">${esc(w.ar)}</span><small>${t1(w.mean)}</small></button>`).join('')}</div></section>
      <form class="search page-search" id="rootSearch" role="search"><input id="rootSearchInput" type="search" value="${esc(rootQuery)}" placeholder="${S.lang === 'en' ? 'Filter by root letters or meaning…' : 'মূল অক্ষর বা অর্থ দিয়ে খুঁজুন…'}" aria-label="Filter roots"></form>
      <div class="root-grid" id="rootGrid">${rootGrid(all)}</div>`;
  }
  function rootGrid(all) {
    const q = rootQuery.trim().toLowerCase(); const strip = window.AQX.stripMarks;
    const list = (all || rootMap()).filter(([r, ws]) => !q || r.replace(/\s/g, '').includes(strip(q).replace(/\s/g, '')) || ws.some(w => (w.mean.bn + ' ' + w.mean.en + ' ' + strip(w.ar)).toLowerCase().includes(q)));
    if (!list.length) return `<div class="empty">${u('nothing')}</div>`;
    return list.map(([r, ws]) => `<details class="root-card"><summary><span class="root-letters" lang="ar">${esc(r)}</span><span class="chip">${num(ws.length)} ${t1({ bn: 'শব্দ', en: ws.length === 1 ? 'word' : 'words' })}</span><span class="root-hint">${t1(ws[0].mean)}</span></summary>
      <div class="root-list">${ws.map(w => `<div class="root-row"><span class="ar" lang="ar" data-say="${esc(pz(w.ar, w.tr))}">${esc(w.ar)}</span><span><b>${t1(w.mean)}</b><small class="muted"> · ${esc(S.lang === 'en' ? w.tr.en : w.tr.bn)}</small></span>${playBtn(pz(w.ar, w.tr))}</div>`).join('')}</div></details>`).join('');
  }

  let mkZone = 'halq';
  function viewMakharij() {
    const labels = {}; window.AQX.MAKHARIJ.forEach(z => labels[z.id] = esc(plain(z.name).split(' — ')[0]));
    return `<div class="page-head"><div class="eyebrow">${u('makharij')}</div><h1 class="page-title">${tx({ bn: 'হরফ কোথা থেকে আসে?', en: 'Where does each letter come from?' })}</h1>
      <p class="muted">${t1({ bn: 'ছবির যেকোনো অংশে ট্যাপ করুন। তারপর হরফে ট্যাপ করলে তা "আ + হরফ + জযম" (যেমন أَبْ) আকারে শোনাবে — এটাই মাখরাজ যাচাইয়ের আসল কৌশল।', en: 'Tap any part of the picture. Then tap a letter to hear it as "a + letter + sukun" (like أَبْ), the classic way to find a makhraj.' })}</p></div>
      <div class="mk-wrap"><div class="mk-figure" id="mkFigure">${window.AQX.makharijSVG(labels)}</div><div class="mk-panel" id="mkPanel">${mkPanel()}</div></div>`;
  }
  function mkPanel() {
    const z = window.AQX.MAKHARIJ.find(x => x.id === mkZone);
    const test = l => /^[اوي]$/.test(l) ? { ا: 'بَا', و: 'بُو', ي: 'بِي' }[l] : l.length > 1 ? l : 'أَ' + l + 'ْ';
    return `<div class="eyebrow">${z.points.length} ${t1({ bn: 'মাখরাজ', en: z.points.length === 1 ? 'point' : 'points' })}</div>
      <h2>${t1(z.name)} <span class="ar-in" lang="ar">${esc(z.ar)}</span></h2>${S.lang === 'both' ? `<p class="muted" lang="en">${esc(z.name.en)}</p>` : ''}
      <ol class="mk-points">${z.points.map(pt => `<li><span class="mk-letters">${pt.letters.split(' ').map(l => `<button type="button" class="mk-l" data-say="${esc(test(l))}" lang="ar">${esc(l)}</button>`).join('')}</span><span>${tx(pt.desc)}</span></li>`).join('')}</ol>
      <div class="mk-zones">${window.AQX.MAKHARIJ.map(x => `<button type="button" class="chip" data-zone="${x.id}" aria-pressed="${x.id === mkZone}">${esc(plain(x.name).split(' — ')[0])}</button>`).join('')}</div>`;
  }
  function markZone() { $$('#mkFigure [data-zone]').forEach(el => el.classList.toggle('on', el.dataset.zone === mkZone)); }

  function viewCertificate() {
    const doneN = Object.keys(S.done).length;
    return `<div class="page-head"><div class="eyebrow">${u('cert')}</div><h1 class="page-title">${tx({ bn: 'আপনার সনদপত্র', en: 'Your certificate' })}</h1>
      <p class="muted">${t1({ bn: `আপনি ${bnNum(D.lessons.length)}টির মধ্যে ${bnNum(doneN)}টি পাঠ শেষ করেছেন। নাম লিখুন, সনদ তৈরি হবে — ছবি হিসেবে ডাউনলোড করে শেয়ার বা প্রিন্ট করুন।`, en: `You have finished ${doneN} of ${D.lessons.length} lessons. Type your name to make your certificate, then download it as an image to share or print.` })}</p></div>
      <div class="cert-tools"><label class="cert-name"><span>${t1({ bn: 'আপনার নাম', en: 'Your name' })}</span><input id="certName" type="text" maxlength="40" value="${esc(S.certName || '')}" placeholder="${S.lang === 'en' ? 'e.g. Fatima Rahman' : 'যেমন: ফাতিমা রহমান'}"></label>
        <button class="btn btn-primary" type="button" data-certdl>${t1({ bn: 'ছবি ডাউনলোড (PNG)', en: 'Download image (PNG)' })}</button></div>
      <canvas id="certCanvas" class="cert-canvas" width="1600" height="1130" aria-label="Certificate preview"></canvas>`;
  }
  function drawCert() {
    const c = $('#certCanvas'); if (!c) return; const x = c.getContext('2d'); const W = c.width, H = c.height;
    const doneN = Object.keys(S.done).length, all = D.lessons.length, finished = doneN >= all;
    x.fillStyle = '#fbfaf5'; x.fillRect(0, 0, W, H);
    x.strokeStyle = '#b07a17'; x.lineWidth = 14; x.strokeRect(40, 40, W - 80, H - 80); x.lineWidth = 3; x.strokeRect(70, 70, W - 140, H - 140);
    // corner stars
    const star = (cx, cy, r) => { x.beginPath(); for (let i = 0; i < 16; i++) { const a = Math.PI / 8 * i - Math.PI / 2, rr = i % 2 ? r * .7 : r; x.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr); } x.closePath(); x.fill(); };
    x.fillStyle = '#0f6b5e'; [[120, 120], [W - 120, 120], [120, H - 120], [W - 120, H - 120]].forEach(([a, b]) => star(a, b, 34));
    x.textAlign = 'center'; x.direction = 'rtl';
    x.fillStyle = '#b07a17'; x.font = '700 70px Amiri, serif'; x.fillText('بَارَكَ اللّٰهُ فِيكَ', W / 2, 220);
    x.direction = 'ltr'; x.fillStyle = '#0f6b5e'; x.font = '600 30px "Reem Kufi", "Hind Siliguri", sans-serif'; x.fillText('সনদপত্র · CERTIFICATE', W / 2, 290);
    x.fillStyle = '#102f2a'; x.font = '700 64px "Hind Siliguri", sans-serif'; x.fillText('কুরআন ও আরবি শিক্ষা', W / 2, 390);
    x.font = '500 34px Figtree, "Hind Siliguri", sans-serif'; x.fillStyle = '#4b635d'; x.fillText('Quran & Arabic Learning', W / 2, 440);
    x.font = '400 32px "Hind Siliguri", sans-serif'; x.fillText('এই মর্মে প্রত্যয়ন করা হচ্ছে যে · This is to certify that', W / 2, 530);
    x.fillStyle = '#102f2a'; x.font = '700 76px "Hind Siliguri", Figtree, sans-serif'; x.fillText(S.certName || '________________', W / 2, 640);
    x.strokeStyle = '#b07a17'; x.lineWidth = 2; x.beginPath(); x.moveTo(W / 2 - 380, 665); x.lineTo(W / 2 + 380, 665); x.stroke();
    x.fillStyle = '#4b635d'; x.font = '400 32px "Hind Siliguri", sans-serif';
    x.fillText(finished ? `সফলভাবে ${bnNum(all)}টি পাঠ সম্পন্ন করেছেন` : `${bnNum(all)}টির মধ্যে ${bnNum(doneN)}টি পাঠ সম্পন্ন করেছেন — চলমান যাত্রা`, W / 2, 740);
    x.font = '400 28px Figtree, sans-serif'; x.fillText(finished ? `has successfully completed all ${all} lessons` : `has completed ${doneN} of ${all} lessons, the journey continues`, W / 2, 785);
    x.direction = 'rtl'; x.fillStyle = '#0f6b5e'; x.font = '400 46px Amiri, serif'; x.fillText('رَبِّ زِدْنِي عِلْمًا', W / 2, 880);
    x.direction = 'ltr'; x.fillStyle = '#7a8f89'; x.font = '400 24px "Hind Siliguri", Figtree, sans-serif';
    x.fillText(`${S.xp} XP · ${new Date().toLocaleDateString('en-GB')} · quranlearnarbi.zyeemzia.com`, W / 2, 960);
    x.fillText('Copyright © ZyeemZia', W / 2, 1000);
  }

  function notFound() { return `<div class="empty"><div class="ar">؟</div><p>${t1({ bn: 'পাতাটি পাওয়া যায়নি।', en: 'Page not found.' })}</p><a class="btn" href="#home">${u('home')}</a></div>`; }

  /* ---------------- router ---------------- */
  function route() {
    stopGame(); if ('speechSynthesis' in window) speechSynthesis.cancel();
    const [r, arg] = location.hash.slice(1).split('/');
    const V = { home: viewHome, '': viewHome, learn: viewLearn, unit: viewUnit, lesson: viewLesson, alphabet: viewAlphabet, cards: viewCards, games: viewGames, play: viewPlay, search: viewSearch, settings: viewSettings, tools: viewTools, roots: viewRoots, makharij: viewMakharij, certificate: viewCertificate }[r || ''] || notFound;
    view.innerHTML = V(arg);
    renderChrome(); initTraces(view);
    if (r === 'makharij') markZone();
    if (r === 'certificate') { drawCert(); if (document.fonts) document.fonts.ready.then(drawCert); }
    window.scrollTo(0, 0); onScroll();
    document.title = (r === 'lesson' && D.lessons.find(l => l.id === arg)) ? plain(D.lessons.find(l => l.id === arg).title) + ' · কুরআন ও আরবি শিক্ষা' : 'কুরআন ও আরবি শিক্ষা · Quran & Arabic Learning';
  }
  function rerender() { const y = scrollY; const r = location.hash.slice(1).split('/')[0]; if (r === 'play') return renderChrome(); view.innerHTML = ''; route(); window.scrollTo(0, y); }
  function onScroll() {
    const p = $('#readProgress'); const isLesson = location.hash.startsWith('#lesson/');
    if (!isLesson) { p.style.width = '0'; return; }
    const h = document.documentElement.scrollHeight - innerHeight; p.style.width = (h > 0 ? scrollY / h * 100 : 0) + '%';
  }

  /* ---------------- events ---------------- */
  document.addEventListener('click', e => {
    const t = e.target;
    const lang = t.closest('[data-lang]'); if (lang) { S.lang = lang.dataset.lang; save(); applyTheme(); rerender(); return; }
    if (t.closest('#themeBtn')) { S.theme = isDark() ? 'light' : 'dark'; save(); applyTheme(); renderChrome(); return; }
    const ts = t.closest('[data-theme-set]'); if (ts) { S.theme = ts.dataset.themeSet; save(); applyTheme(); rerender(); return; }
    if (t.closest('[data-close]')) { closeModal(); return; }
    const pt = t.closest('[data-ptile]'); if (pt) { puzzleMove('bank', +pt.dataset.ptile); return; }
    const pa = t.closest('[data-pans]'); if (pa) { puzzleMove('ans', +pa.dataset.pans); return; }
    if (t.closest('[data-pnext]')) { G.round++; if (G.round >= G.rounds) endGame(); else puzzleRound(); return; }
    const zn = t.closest('[data-zone]'); if (zn) { mkZone = zn.dataset.zone; $('#mkPanel').innerHTML = mkPanel(); markZone(); return; }
    if (t.closest('[data-certdl]')) {
      drawCert(); const a = document.createElement('a'); a.download = 'Quran-o-Arbi-Shikkha-certificate.png'; a.href = $('#certCanvas').toDataURL('image/png'); document.body.appendChild(a); a.click(); a.remove(); return;
    }
    if (t.closest('[data-howto]')) { const el = $('.howto-ar', t.closest('.howto')); el.classList.remove('play'); void el.offsetWidth; el.classList.add('play'); return; }
    const mm0 = t.closest('button[data-memo]'); if (mm0) {
      const ay = mm0.closest('.ayah'); const lvl = ((+ay.dataset.memoLevel || 0) + 1) % 4; ay.dataset.memoLevel = lvl;
      const ws = $$('.ayah-ar .w', ay);
      ws.forEach((w, j) => w.classList.toggle('hid', lvl === 3 || (lvl === 2 && j % 2 === 1) || (lvl === 1 && j % 3 === 2)));
      const bar = $('.memo-bar', ay); bar.hidden = lvl === 0; $('.wbw', ay).hidden = true;
      $('.memo-level', ay).textContent = [, t1({ bn: 'ধাপ ১: কিছু শব্দ লুকানো', en: 'Level 1: a few words hidden' }), t1({ bn: 'ধাপ ২: অর্ধেক শব্দ লুকানো', en: 'Level 2: half the words hidden' }), t1({ bn: 'ধাপ ৩: পুরো আয়াত মুখস্থ বলুন', en: 'Level 3: recite the whole ayah' })][lvl] || '';
      mm0.classList.toggle('btn-primary', lvl > 0); return;
    }
    const mr = t.closest('[data-memorep]'); if (mr) {
      let n = 0; const ref = mr.dataset.memorep; const go = () => { if (n++ >= 3) return; playAyah(ref, null); if (audioEl) audioEl.addEventListener('ended', go, { once: true }); }; go(); return;
    }
    const md0 = t.closest('[data-memodone]'); if (md0) { S.memo[md0.dataset.memodone] = today(); addXP(5); save(); toast(L() ? 'Marked as memorised. Revise it again tomorrow!' : 'মুখস্থ হিসেবে চিহ্নিত — আগামীকাল আবার ঝালিয়ে নিন!'); return; }
    const hidw = t.closest('.ayah-ar .w.hid'); if (hidw) { hidw.classList.add('peek'); setTimeout(() => hidw.classList.remove('peek'), 1400); }
    const lt = t.closest('[data-letter]'); if (lt) { openLetter(lt.dataset.letter); return; }
    const qo = t.closest('[data-qopt]'); if (qo) { const [q, k] = qo.dataset.qopt.split(':'); quizPick(q, +k); return; }
    const qn = t.closest('[data-qnext]'); if (qn) { quizNext(qn.dataset.qnext); return; }
    const qr = t.closest('[data-qretry]'); if (qr) { const st = quizStates[qr.dataset.qretry]; Object.assign(st, { i: 0, picked: null, right: 0, results: [] }); $('#' + qr.dataset.qretry).innerHTML = quizInner(qr.dataset.qretry); return; }
    const cp = t.closest('[data-complete]'); if (cp) {
      const id = cp.dataset.complete; if (!S.done[id]) { S.done[id] = today(); addXP(20); confetti(); bumpDaily('lesson'); }
      $('#completeSlot').innerHTML = completeHTML(D.lessons.find(l => l.id === id));
      const nx = D.lessons[D.lessons.findIndex(l => l.id === id) + 1];
      toast(nx ? (L() ? `Well done! Next: ${plain(nx.title)}` : `চমৎকার! এবার: ${plain(nx.title)}`) : (L() ? 'You finished the whole course! Alhamdulillah.' : 'আপনি পুরো কোর্স শেষ করেছেন! আলহামদুলিল্লাহ।'), 3500);
      return;
    }
    const ay = t.closest('[data-ayah]'); if (ay) { playAyah(ay.dataset.ayah, ay); return; }
    const wb = t.closest('[data-wbw]'); if (wb) { const box = $('.wbw', wb.closest('.ayah')); box.hidden = !box.hidden; wb.classList.toggle('btn-primary', !box.hidden); return; }
    const af = t.closest('[data-afilter]'); if (af) { alphaFilter = af.dataset.afilter; $$('[data-afilter]').forEach(b => b.setAttribute('aria-pressed', b === af)); $('#alphaGrid').innerHTML = alphaGrid(); return; }
    if (t.closest('#fcCard')) { fcFlip = !fcFlip; $('#fcCard').classList.toggle('flip', fcFlip); if (fcFlip && fcQueue[0]) say(pz(fcQueue[0].ar, fcQueue[0].tr)); return; }
    const fg = t.closest('[data-fc]'); if (fg) { fcGrade(+fg.dataset.fc); return; }
    const fd = t.closest('[data-fcdir]'); if (fd) { S.fcDir = fd.dataset.fcdir; save(); rerender(); return; }
    const ga = t.closest('[data-gans]'); if (ga) { gameAnswer(ga); return; }
    const mm = t.closest('[data-mem]'); if (mm) { if (mm.dataset.say) say(mm.dataset.say); memClick(mm); return; }
    const rp = t.closest('[data-replay]'); if (rp) { view.innerHTML = viewPlay(rp.dataset.replay); return; }
    const rs = t.closest('[data-reset]'); if (rs) {
      if (rs.dataset.reset === 'ask') { $('#resetSlot').innerHTML = `<span style="display:flex;gap:6px"><button class="btn btn-sm" type="button" data-reset="no">${S.lang === 'en' ? 'Cancel' : 'বাতিল'}</button><button class="btn btn-sm" type="button" data-reset="yes" style="background:var(--bad);color:#fff;border-color:transparent">${S.lang === 'en' ? 'Yes, erase everything' : 'হ্যাঁ, সব মুছুন'}</button></span>`; }
      else if (rs.dataset.reset === 'yes') { const keep = { lang: S.lang, theme: S.theme, arScale: S.arScale, rate: S.rate }; S = Object.assign(defaults(), keep); save(); rerender(); toast(L() ? 'Progress reset.' : 'অগ্রগতি মুছে ফেলা হয়েছে।'); }
      else rerender();
      return;
    }
    const sy = t.closest('[data-say]'); if (sy) {
      say(sy.dataset.say);
      const w = sy.closest('.ayah-ar .w'); if (w) { $$('.ayah-ar .w.on').forEach(x => x.classList.remove('on')); w.classList.add('on'); const ayah = w.closest('.ayah'); const box = $('.wbw', ayah); if (box.hidden) { box.hidden = false; $('[data-wbw]', ayah).classList.add('btn-primary'); } const tgt = box.children[+w.dataset.wi]; if (tgt) { tgt.style.outline = '2px solid var(--gold)'; setTimeout(() => { tgt.style.outline = ''; }, 1200); } }
      return;
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !$('#modal').hidden) closeModal();
    if ((e.key === 'Enter' || e.key === ' ') && document.activeElement && document.activeElement.id === 'fcCard') { e.preventDefault(); document.activeElement.click(); }
  });
  document.addEventListener('input', e => {
    if (e.target.id === 'arScale') { S.arScale = +e.target.value; applyTheme(); save(); }
    if (e.target.id === 'rate') { S.rate = +e.target.value; save(); }
    if (e.target.id === 'certName') { S.certName = e.target.value; save(); drawCert(); }
    if (e.target.id === 'rootSearchInput') { rootQuery = e.target.value; $('#rootGrid').innerHTML = rootGrid(); }
  });
  document.addEventListener('change', e => {
    if (e.target.id === 'fcDeck') { fcDeck = e.target.value; rerender(); }
    if (e.target.dataset && e.target.dataset.check) { S.checks[e.target.dataset.check] = e.target.checked; if (e.target.checked) addXP(1); save(); }
  });
  document.addEventListener('submit', e => {
    if (e.target.closest('#rootSearch')) { e.preventDefault(); return; }
    const f = e.target.closest('#searchForm, #learnSearch'); if (!f) return;
    e.preventDefault(); const q = $('input', f).value.trim(); if (q) location.hash = '#search/' + encodeURIComponent(q);
  });
  addEventListener('hashchange', route);
  addEventListener('scroll', onScroll, { passive: true });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (S.theme === 'auto') renderChrome(); });

  applyTheme(); route();
  if ('serviceWorker' in navigator && location.protocol === 'https:') {
    addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => { /* offline cache is optional */ }));
  }
})();
