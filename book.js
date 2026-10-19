/* Quran & Arabic Learning (কুরআন ও আরবি শিক্ষা) — printable book renderer (same data as the web app). Always bilingual. */
(function () {
  'use strict';
  const { esc, md, isAr, hlAr, bnNum, syllableTr, prepare, STROKES, MAKHARIJ, makharijSVG, seeded, stripMarks } = window.AQX;
  const D = prepare();
  const tx = o => !o ? '' : typeof o === 'string' ? md(o) : `${md(o.bn)}<span class="sub">${md(o.en)}</span>`;
  const t1 = o => !o ? '' : typeof o === 'string' ? md(o) : md(o.bn);
  const trn = t => t ? `${esc(t.bn)} · <span class="en">${md(t.en)}</span>` : '';
  const KEYS = ['ক', 'খ', 'গ', 'ঘ', 'ঙ'];
  const arDigits = n => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
  const baseLen = s => String(s).replace(/[ً-ٰٟـ◌\s]/g, '').length;
  const badge = (u, txt, cls) => { const t = txt || u.icon; const n = baseLen(t); return `<span class="badge star ${cls || ''} ${n >= 4 ? 'bx4' : n === 3 ? 'bx3' : ''}" data-c="${u.color}">${esc(t)}</span>`; };

  /* pen-stroke tiles and copybook rows */
  const stk = (id, mode) => `<svg class="wk-s ${mode}" viewBox="0 0 200 120"><line x1="0" y1="80" x2="200" y2="80" class="bl"/>${mode === 'blank' ? '' : `<path d="${STROKES[id] ? STROKES[id].d : ''}"/>`}</svg>`;
  function copyRow(text, level, reps) {
    const wide = level === 'line' || [...stripMarks(text)].length > 7;
    if (wide) return `<div class="wk-row wide lv-${level}"><div class="wk-copy"><span class="m">${esc(text)}</span></div><div class="wk-copy"><span class="g">${esc(text)}</span></div><div class="wk-free"></div><div class="wk-free"></div></div>`;
    const ghosts = `<span class="g">${esc(text)}</span>`.repeat(Math.max(0, reps - 1));
    return `<div class="wk-row lv-${level}"><div class="wk-copy"><span class="m">${esc(text)}</span>${ghosts}</div><div class="wk-free"></div></div>`;
  }

  function cover() {
    return `<section class="page cover"><div class="khatam"></div><div class="cover-in">
      <div class="cover-top">${D.units.length} Units · ${D.lessons.length} Lessons · বাংলা + English</div>
      <div class="cover-cal">تَعَلُّمُ الْقُرْآنِ وَالْعَرَبِيَّةِ</div>
      <h1>কুরআন ও আরবি শিক্ষা<span class="sub">Quran &amp; Arabic Learning</span></h1>
      <p class="cover-lead">বাংলা ও ইংরেজিতে আরবি পড়া, হাতের লেখা, তাজবীদ, কুরআনের শব্দ, ব্যাকরণ, দৈনন্দিন আরবি ও সালাত — শব্দে শব্দে, ধাপে ধাপে।
        <span class="sub">Reading, handwriting, tajweed, Quranic words, grammar, everyday Arabic and salah, word by word and step by step.</span></p>
      <div class="cover-units" style="grid-template-columns:repeat(${D.units.length},1fr)">${D.units.map(u => `<div><b>${esc(u.icon)}</b>${t1(u.title)}</div>`).join('')}</div>
      <div class="cover-copy">Copyright © ZyeemZia</div>
    </div></section>`;
  }

  function intro() {
    return `<section class="page" style="page:bare">
      <div class="eyebrow">শুরুর আগে · Before you begin</div>
      <h1 class="h-page">এই বইটি কীভাবে ব্যবহার করবেন<span class="sub">How to use this book</span></h1>
      <p>${tx({ bn: 'এই বই আর এর ইন্টারঅ্যাকটিভ ওয়েব সংস্করণ একই কোর্স। বইয়ে লিখে অনুশীলন করুন, আর ওয়েব অ্যাপে উচ্চারণ শুনুন, তিলাওয়াত শুনুন, কুইজ দিন, ফ্ল্যাশকার্ডে শব্দ মুখস্থ করুন ও খেলুন।', en: 'This book and its interactive web version are the same course. Write and practise in the book; use the web app to hear pronunciation and recitation, take quizzes, memorise words with flashcards and play games.' })}</p>
      <div class="howto">
        <div><b>১. ডান থেকে বামে · Right to left</b>${tx({ bn: 'আরবি ডান দিক থেকে পড়া ও লেখা হয়। প্রতিটি সারি ডান দিক থেকে শুরু করুন।', en: 'Arabic is read and written from right to left. Start every row from the right.' })}</div>
        <div><b>২. জোরে পড়ুন · Read aloud</b>${tx({ bn: 'প্রতিটি হরফ ও শব্দ আওয়াজ করে পড়ুন। এতে জিহ্বা দ্রুত অভ্যস্ত হয়।', en: 'Say every letter and word out loud. Your tongue gets used to the sounds faster.' })}</div>
        <div><b>৩. পেন্সিল ব্যবহার করুন · Use a pencil</b>${tx({ bn: 'কুইজ ও লেখার অনুশীলনে পেন্সিল ব্যবহার করুন, যাতে মুছে আবার চেষ্টা করা যায়। উত্তর প্রতিটি ইউনিটের শেষে আছে।', en: 'Use a pencil for quizzes and writing so you can erase and retry. Answers are at the end of each unit.' })}</div>
        <div><b>৪. অল্প কিন্তু প্রতিদিন · Little but daily</b>${tx({ bn: 'প্রতিদিন ১৫ মিনিট, সপ্তাহে ৫ দিন — এক সপ্তাহে ২–৩টি পাঠ। ধারাবাহিকতাই আসল শক্তি।', en: '15 minutes a day, 5 days a week, 2–3 lessons a week. Consistency is the real power.' })}</div>
      </div>
      <div class="routine">
        <div><b>৩′</b>${tx({ bn: 'আগের পাঠ রিভিউ', en: 'Review last lesson' })}</div>
        <div><b>৭′</b>${tx({ bn: 'নতুন পাঠ', en: 'New lesson' })}</div>
        <div><b>৩′</b>${tx({ bn: 'জোরে পড়া ও লেখা', en: 'Read aloud & write' })}</div>
        <div><b>২′</b>${tx({ bn: 'কুইজ / ফ্ল্যাশকার্ড', en: 'Quiz / flashcards' })}</div>
      </div>
      <div class="learner">
        <div>শিক্ষার্থীর নাম · Learner's name <span class="line"></span></div>
        <div>শুরুর তারিখ · Start date <span class="line"></span> লক্ষ্য · Goal <span class="line"></span></div>
      </div>
      <p style="margin-top:6mm;font-size:9pt;color:var(--ink-2)">${tx({ bn: 'রঙের সংকেত: গোলাপি হরফ = মোটা (পুর) উচ্চারণ। তাজবীদের রং — সবুজ: গুন্নাহ/ইখফা, ধূসর: ইদগাম, নীল: ইকলাব, বেগুনি: ইযহার, কমলা: কলকলা, লাল: মাদ্দ।', en: 'Colour code: pink letters = heavy sounds. Tajweed colours: green ghunnah/ikhfa, gray idgham, blue iqlab, purple izhar, orange qalqalah, red madd.' })}</p>
      <p class="imprint">কুরআন ও আরবি শিক্ষা · Quran &amp; Arabic Learning<br>Copyright © ZyeemZia. সর্বস্বত্ব সংরক্ষিত · All rights reserved.</p>
    </section>`;
  }

  function toc() {
    let n = 0;
    return `<section class="flow" style="page:bare"><div class="eyebrow">সূচিপত্র · Contents</div><h1 class="h-page">যা যা শিখবেন<span class="sub">What you will learn</span></h1>
      ${D.units.map(u => `<div class="toc-unit" data-c="${u.color}"><h3>${badge(u)} ইউনিট ${bnNum(u.order)}: ${t1(u.title)}<span class="sub">${md(u.title.en)}</span></h3>
        <ol start="${n + 1}">${u.lessons.map(l => { n++; return `<li>${t1(l.title)} <span class="sub">${md(l.title.en)}</span></li>`; }).join('')}</ol></div>`).join('')}
      <div class="toc-unit" data-c="teal"><h3>${badge({ color: 'teal', icon: '+' })} পরিশিষ্ট · Appendix</h3>
        <ol>${[['শব্দ খোঁজ ধাঁধা', 'Word-search puzzles'], ['আয়াত পাজল', 'Ayah puzzles'], ['মূলধাতুর পরিবার', 'Root family trees'], ['মাখরাজ মানচিত্র', 'Makharij map'], ['মুখস্থের খাতা', 'Memorisation tracker'], ['আমার আরবি ডায়েরি ও খালি খাতা', 'Journal & blank copybook'], ['ধাঁধার উত্তর', 'Puzzle answers'], ['অগ্রগতির তালিকা', 'Progress tracker'], ['সনদপত্র', 'Certificate']].map(([b, e]) => `<li>${b} <span class="sub">${e}</span></li>`).join('')}</ol></div>
    </section>`;
  }

  function alphabetChart() {
    const A = AQ.alphabet || [];
    if (!A.length) return '';
    return `<section class="flow"><div class="eyebrow">এক নজরে · At a glance</div><h1 class="h-page">আরবি বর্ণমালা<span class="sub">The Arabic alphabet</span></h1>
      <div class="alpha">${A.map((a, i) => `<div class="${a.heavy ? 'heavy' : ''}"><div class="a">${esc(a.ar)}</div><b>${bnNum(i + 1)}. ${esc(a.name.bn)}</b><small>${md(a.name.en)} · /${md(a.tr.en)}/</small>
        <div class="f">${esc(a.forms.final)} ${esc(a.forms.medial)} ${esc(a.forms.initial)}</div></div>`).join('')}</div>
      <p style="margin-top:4mm;font-size:9pt;color:var(--ink-2)">${tx({ bn: 'প্রতিটি ঘরের নিচে হরফটির শুরু, মাঝ ও শেষের রূপ (ডান থেকে বামে)। গোলাপি হরফগুলো মোটা করে পড়তে হয়।', en: 'Under each letter: its initial, middle and final forms (right to left). Pink letters are pronounced heavy.' })}</p></section>`;
  }

  function block(b, ctx) {
    const T = b.title ? `<h3 class="blk-title">${t1(b.title)}<span class="sub">${md(b.title.en)}</span></h3>` : '';
    const wrap = h => `<div class="blk">${T}${h}</div>`;
    switch (b.type) {
      case 'text': return wrap(`<p>${tx(b)}</p>`);
      case 'tip': return wrap(`<aside class="tip tip-${esc(b.kind)}"><span class="tip-label">${{ tip: 'টিপস · Tip', warn: 'সতর্কতা · Watch out', memory: 'মনে রাখার কৌশল · Memory trick', fun: 'জানেন কি? · Did you know?' }[b.kind] || ''}</span>${tx(b)}</aside>`);
      case 'letters': return wrap(`<div class="lgrid">${b.items.map(id => D.letterById[id]).filter(Boolean).map(a => `<div class="lcard ${a.heavy ? 'heavy' : ''}"><span class="a ar">${esc(a.ar)}</span><b>${esc(a.name.bn)}</b><small>${md(a.name.en)} · /${md(a.tr.en)}/ · ${esc(a.tr.bn)}</small><small><span class="ar-in">${esc(a.example.ar)}</span> ${esc(a.example.mean.bn)}</small><span class="f">${esc(a.forms.isolated)} ${esc(a.forms.initial)} ${esc(a.forms.medial)} ${esc(a.forms.final)}</span></div>`).join('')}</div>`);
      case 'examples': return wrap(`<div class="exg">${b.items.map(x => `<div class="ex"><span class="ar">${hlAr(x.ar, x.hl)}</span><span class="t">${trn(x.tr)}</span>${x.mean ? `<span class="m">${t1(x.mean)} · <span class="en">${md(x.mean.en)}</span></span>` : ''}${x.note ? `<span class="m">${t1(x.note)}</span>` : ''}</div>`).join('')}</div>`);
      case 'table': return wrap(`<table>${b.head ? `<thead><tr>${b.head.map(h => `<th>${typeof h === 'object' ? tx(h) : md(h)}</th>`).join('')}</tr></thead>` : ''}<tbody>${b.rows.map(r => `<tr>${r.map(c => c && typeof c === 'object' ? `<td>${tx(c)}</td>` : isAr(c) ? `<td class="arc">${esc(c)}</td>` : `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`);
      case 'build': return wrap(`<table class="build"><thead><tr>${b.marks.slice().reverse().map((m, j) => `<th style="text-align:center">${b.labels ? t1(b.labels[b.marks.length - 1 - j]) : ''} <span class="ar-in">${esc('ـ' + m)}</span></th>`).join('')}<th></th></tr></thead><tbody>${b.base.map(L => `<tr>${b.marks.slice().reverse().map(m => { const t = syllableTr(L, m); return `<td><span class="ar">${esc(L + m)}</span>${t ? `<small>${esc(t.bn)} · ${md(t.en)}</small>` : ''}</td>`; }).join('')}<td class="base">${esc(L)}</td></tr>`).join('')}</tbody></table>`);
      case 'compare': return wrap(`<div class="cmp">${b.items.map(x => `<div><span class="ar">${esc(x.ar)}</span><b>${t1(x.label)}</b><p>${tx(x.desc)}</p></div>`).join('')}</div>`);
      case 'rule': return wrap(`<section class="rule" style="--rc:var(--tj-${esc(b.color)})"><div class="rule-h"><h4>${t1(b.name)}<span class="sub">${md(b.name.en)}</span></h4><span class="ar">${esc(b.ar)}</span></div>
        ${b.letters ? `<div class="letters">${esc(b.letters)}</div>` : ''}<p>${tx(b.desc)}</p>${b.how ? `<div class="how"><b>কীভাবে পড়বেন · How:</b> ${tx(b.how)}</div>` : ''}
        ${b.examples ? `<div class="exs">${b.examples.map(x => `<span>${hlAr(x.ar, x.hl, 'tj-' + b.color)}<small>${md(x.tr.en)}</small></span>`).join('')}</div>` : ''}</section>`);
      case 'practice': return wrap(`<div class="practice"><p style="font-size:9.5pt;margin-bottom:1mm">${tx(b)}</p>${b.lines.map(l => `<div class="ln">${esc(l)}</div>`).join('')}</div>`);
      case 'vocab': return wrap(`<table class="vt"><thead><tr><th>আরবি · Arabic</th><th>উচ্চারণ · Say it</th><th>অর্থ · Meaning</th></tr></thead><tbody>${b.items.map(w => `<tr><td class="arc">${esc(w.ar)}</td><td>${trn(w.tr)}</td><td>${tx(w.mean)}${w.root ? ` <span class="root">${esc(w.root)}</span>` : ''}${w.example ? `<div class="exr"><span class="ar-in">${esc(w.example.ar)}</span> — ${t1(w.example.mean)}${w.example.ref ? ` (${esc(w.example.ref)})` : ''}</div>` : ''}</td></tr>`).join('')}</tbody></table>`);
      case 'ayah': {
        const [s, a] = b.ref.split(':');
        return wrap(`<div class="ayah"><div class="ref">সূরা ${bnNum(s)} · আয়াত ${bnNum(a)} — Surah ${s}:${a}</div>
          <div class="txt">${esc(b.ar)} <span class="num">${arDigits(a)}</span></div>
          ${b.words && b.words.length ? `<div class="wbw">${b.words.map(w => `<div><span class="ar">${esc(w.ar)}</span><small>${md(w.bn)}</small><small class="en">${md(w.en)}</small></div>`).join('')}</div>` : ''}
          <div class="tr">${esc(b.tr.bn)}<span class="sub">${md(b.tr.en)}</span></div><p style="margin-top:1mm">${tx(b.mean)}</p></div>`);
      }
      case 'steps': return wrap(`<ol class="steps">${b.items.map(x => `<li><div><b>${t1(x.title)}</b> <span class="sub" style="display:inline">${md(x.title.en)}</span>
          ${x.ar ? `<span class="ar">${esc(x.ar)}</span>` : ''}${x.tr ? `<div class="tr">${esc(x.tr.bn)}<span class="sub">${md(x.tr.en)}</span></div>` : ''}${x.mean ? `<div>${tx(x.mean)}</div>` : ''}${x.desc ? `<div class="d">${tx(x.desc)}</div>` : ''}</div></li>`).join('')}</ol>`);
      case 'trace': return wrap(`<div class="trace"><p style="font-size:9pt;color:var(--ink-2)">${tx({ bn: 'প্রথম হরফটি দেখে বাকি হালকা হরফগুলোর ওপর লিখুন, তারপর খালি লাইনে নিজে লিখুন (ডান থেকে বামে)।', en: 'Look at the first letter, trace the faint ones, then write on your own on the empty line (right to left).' })}</p>
        ${b.items.slice(0, 6).map(x => `<div class="row"><span class="solid">${esc(x)}</span>${`<span>${esc(x)}</span>`.repeat(x.length > 2 ? 3 : 7)}</div><div class="blank"></div>`).join('')}</div>`);
      case 'strokes': return wrap(`<div class="wk"><p class="wk-help">${tx({ bn: 'প্রথমটি দেখুন, তারপর ডট দেওয়া রেখার ওপর কলম চালান — সবসময় ডান থেকে বামে। শেষে নিজে আঁকুন।', en: 'Look at the first one, then trace the dotted strokes, always right to left. Finish by drawing your own.' })}</p>
        ${b.items.map(x => `<div class="wk-stroke"><div class="wk-sl">${t1(x.label)}<span class="sub">${md(x.label.en)}</span></div><div class="wk-sr">${stk(x.id, 'solid')}${stk(x.id, 'ghost').repeat(4)}${stk(x.id, 'blank')}</div></div>`).join('')}</div>`);
      case 'howto': {
        const a = (AQ.alphabet || []).find(x => x.ar === b.letter);
        return wrap(`<div class="wk-howto"><div class="wk-hm"><span class="wk-big">${esc(b.letter)}</span>${a ? `<b>${esc(a.name.bn)}</b><small>${md(a.name.en)}</small>` : ''}</div>
          <div><ol class="wk-steps">${b.steps.map(st => `<li>${tx(st)}</li>`).join('')}</ol>${b.tip ? `<p class="wk-tip">★ ${tx(b.tip)}</p>` : ''}</div></div>
          ${copyRow(b.letter, 'letter', 6)}`);
      }
      case 'write': {
        const reps = b.reps || { letter: 6, form: 4, word: 3, line: 1 }[b.level] || 3;
        return wrap(`<div class="wk">${b.note ? `<p class="wk-help">${tx(b.note)}</p>` : `<p class="wk-help">${tx({ bn: 'মডেল দেখুন → হালকা লেখার ওপর লিখুন → খালি লাইনে নিজে লিখুন।', en: 'Look at the model → write over the light copies → write on your own on the empty line.' })}</p>`}
          ${b.items.map(x => copyRow(x, b.level, reps)).join('')}</div>`);
      }
      case 'dictation': {
        const start = ctx.dict.length + 1; b.items.forEach(x => ctx.dict.push({ lesson: ctx.lessonNo, x }));
        return wrap(`<div class="wk wk-dict"><p class="wk-help">${tx({ bn: 'শিক্ষক/অভিভাবক পড়ে শোনাবেন, অথবা ওয়েব অ্যাপে "শুনুন" চাপুন। শুনে লিখুন — উত্তর ইউনিটের শেষে।', en: 'A teacher or parent reads aloud, or press "Listen" in the web app. Write what you hear; answers are at the end of the unit.' })}</p>
          <ol start="${start}" class="wk-dl">${b.items.map(() => `<li><span class="wk-line"></span></li>`).join('')}</ol></div>`);
      }
      case 'selfcheck': return wrap(`<div class="wk-check"><b>${tx({ bn: 'নিজেকে যাচাই করুন', en: 'Check yourself' })}</b>${b.items.map(x => `<div>☐ ${t1(x)} <span class="sub" style="display:inline">· ${md(x.en)}</span></div>`).join('')}
          <div class="wk-stars">${tx({ bn: 'আজকের লেখায় নিজেকে তারকা দিন', en: 'Give your writing today some stars' })} ☆ ☆ ☆ ☆ ☆</div></div>`);
      case 'quiz': {
        const start = ctx.q.length + 1;
        b.items.forEach(q => ctx.q.push({ lesson: ctx.lessonNo, q }));
        return wrap(`<div class="quiz"><h4>কুইজ · Quiz</h4><ol start="${start}">${b.items.map(q => `<li>${tx(q.q)}${q.ar ? `<div class="qa">${esc(q.ar)}</div>` : ''}<div class="opts">${q.options.map((o, k) => `<span>${KEYS[k]}) ${typeof o === 'object' ? `${md(o.bn)} / <span class="en">${md(o.en)}</span>` : md(o)}</span>`).join('')}</div></li>`).join('')}</ol></div>`);
      }
      default: return '';
    }
  }

  function unitSection(u) {
    const ctx = { q: [], dict: [] };
    let h = `<section class="page opener" data-c="${u.color}"><div class="khatam"></div>
      ${badge(u)}<div class="u-n">ইউনিট ${bnNum(u.order)} · Unit ${u.order}</div><h1>${t1(u.title)}<span class="sub">${md(u.title.en)}</span></h1>
      <p style="font-size:12pt">${tx(u.subtitle)}</p>
      <ol>${u.lessons.map(l => `<li>${t1(l.title)} <span class="sub" style="display:inline">${md(l.title.en)}</span></li>`).join('')}</ol></section>`;
    u.lessons.forEach((l, i) => {
      ctx.lessonNo = i + 1;
      h += `<section class="flow" data-c="${u.color}">
        <header class="lesson-h"><div class="khatam"></div>${badge(u, l.icon)}<div><div class="meta">ইউনিট ${bnNum(u.order)} · পাঠ ${bnNum(i + 1)} · ${bnNum(l.minutes)} মিনিট — Unit ${u.order} · Lesson ${i + 1}</div>
        <h2>${t1(l.title)}<span class="sub">${md(l.title.en)}</span></h2><p style="color:var(--ink-2);font-size:9.5pt">${t1(l.subtitle)}</p></div></header>
        ${l.goals && l.goals.length ? `<ul class="goals">${l.goals.map(g => `<li>${t1(g)} <span class="sub">${md(g.en)}</span></li>`).join('')}</ul>` : ''}
        ${l.blocks.map(b => block(b, ctx)).join('')}
        <p style="font-size:9pt;color:var(--ink-3);margin-top:3mm">☐ পাঠ শেষ · Lesson done &nbsp;&nbsp; তারিখ · Date: ____________</p>
      </section>`;
    });
    if (ctx.q.length || ctx.dict.length) {
      h += `<section class="flow" data-c="${u.color}"><div class="eyebrow">ইউনিট ${bnNum(u.order)} · Unit ${u.order}</div><h1 class="h-page">উত্তরমালা<span class="sub">Answer key</span></h1>
        ${ctx.dict.length ? `<h3 class="blk-title">শুনে লেখা · Dictation</h3><div class="key key-dict">${ctx.dict.map((d, i) => `<div><b>${bnNum(i + 1)}.</b> <span class="ar-in">${esc(d.x.ar)}</span> ${trn(d.x.tr)}</div>`).join('')}</div><h3 class="blk-title" style="margin-top:4mm">কুইজ · Quiz</h3>` : ''}
        <div class="key">${ctx.q.map((x, i) => `<div><b>${bnNum(i + 1)}.</b> ${KEYS[x.q.answer]}) ${(o => typeof o === 'object' ? `${md(o.bn)} / <span class="en">${md(o.en)}</span>` : md(o))(x.q.options[x.q.answer])}${x.q.explain ? `<br><span style="color:var(--ink-2)">${t1(x.q.explain)}</span>` : ''}</div>`).join('')}</div></section>`;
    }
    return h;
  }

  /* ---- word search puzzles from vocabulary lessons ---- */
  const NORM = { 'أ': 'ا', 'إ': 'ا', 'آ': 'ا', 'ٱ': 'ا', 'ؤ': 'و', 'ئ': 'ي', 'ى': 'ي' };
  const letters = w => [...stripMarks(w).replace(/[\sـ]/g, '')].map(c => NORM[c] || c);
  const FILL = [...'ابتثجحخدذرزسشصضطظعغفقكلمنهوي'];
  function wordSearch(words, seed) {
    const N = 10, rnd = seeded(seed), grid = Array.from({ length: N }, () => Array(N).fill(''));
    const placed = [];
    words.forEach(w => {
      const L = letters(w.ar); if (L.length < 3 || L.length > N) return;
      for (let t = 0; t < 120; t++) {
        const dir = rnd() < .55 ? [0, 1] : [1, 0]; // across (right to left in an RTL table) or down
        const r = Math.floor(rnd() * (N - (dir[0] ? L.length : 0) + (dir[0] ? 1 : 0))) % N, c = Math.floor(rnd() * (N - (dir[1] ? L.length : 0) + (dir[1] ? 1 : 0))) % N;
        if (r + dir[0] * (L.length - 1) >= N || c + dir[1] * (L.length - 1) >= N) continue;
        if (L.every((ch, i) => { const g = grid[r + dir[0] * i][c + dir[1] * i]; return !g || g === ch; })) {
          const cells = L.map((ch, i) => { const rr = r + dir[0] * i, cc = c + dir[1] * i; grid[rr][cc] = ch; return rr * N + cc; });
          placed.push({ w, cells }); break;
        }
      }
    });
    const ans = new Set(placed.flatMap(p => p.cells));
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) if (!grid[r][c]) grid[r][c] = FILL[Math.floor(rnd() * FILL.length)];
    return { grid, placed, ans, N };
  }
  function puzzles() {
    const vu = D.units.find(u => u.id === 'vocab') || D.units.find(u => u.lessons.some(l => l.blocks.some(b => b.type === 'vocab')));
    if (!vu) return { pages: '', key: '' };
    let pages = '', key = '', n = 0;
    vu.lessons.forEach((l, li) => {
      const words = l.blocks.filter(b => b.type === 'vocab').flatMap(b => b.items).filter(w => { const k = letters(w.ar).length; return k >= 3 && k <= 7; });
      if (words.length < 5) return;
      const pick = words.filter((w, i, a) => a.findIndex(x => letters(x.ar).join('') === letters(w.ar).join('')) === i).slice(0, 8);
      const ws = wordSearch(pick, 7919 * (li + 3)); if (ws.placed.length < 4) return; n++;
      const table = hl => `<table class="ws" dir="rtl">${ws.grid.map((row, r) => `<tr>${row.map((ch, c) => `<td class="${hl && ws.ans.has(r * ws.N + c) ? 'on' : ''}">${ch}</td>`).join('')}</tr>`).join('')}</table>`;
      pages += `<section class="flow puzzle-page"><div class="eyebrow">শব্দ খোঁজ · Word search ${bnNum(n)}</div><h2 class="h-page" style="font-size:16pt">${t1(l.title)}<span class="sub">${md(l.title.en)}</span></h2>
        <p class="wk-help">${tx({ bn: 'নিচের শব্দগুলো ছকে খুঁজে গোল করুন — শব্দ ডান থেকে বামে অথবা ওপর থেকে নিচে আছে। ছকে হরকত ও হামযার চিহ্ন নেই।', en: 'Find and circle the words in the grid. They run right to left or top to bottom. The grid has no vowel marks or hamza signs.' })}</p>
        <div class="ws-wrap">${table(false)}<ol class="ws-list">${ws.placed.map(p => `<li><span class="ar-in">${esc(p.w.ar)}</span> — ${t1(p.w.mean)}</li>`).join('')}</ol></div></section>`;
      key += `<div class="ws-key"><b>${bnNum(n)}. ${t1(l.title)}</b>${table(true)}</div>`;
    });
    return { pages, key };
  }
  /* ---- ayah puzzles: number the shuffled words ---- */
  function ayahPuzzles() {
    const ays = D.lessons.flatMap(l => l.blocks.filter(b => b.type === 'ayah' && b.words && b.words.length >= 3 && b.words.length <= 8)).filter((b, i, a) => a.findIndex(x => x.ref === b.ref) === i).slice(0, 14);
    if (!ays.length) return { page: '', key: '' };
    const rnd = seeded(2027);
    const items = ays.map(b => { const order = b.words.map((w, i) => i); for (let i = order.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; } if (order.every((v, i) => v === i)) order.reverse(); return { b, order }; });
    const page = `<section class="flow"><div class="eyebrow">আয়াত পাজল · Ayah puzzles</div><h1 class="h-page">শব্দ সাজিয়ে আয়াত গড়ুন<span class="sub">Rebuild each ayah</span></h1>
      <p class="wk-help">${tx({ bn: 'প্রতিটি শব্দের নিচের ঘরে সঠিক ক্রমের নম্বর লিখুন (প্রথম শব্দ = ১)। অর্থ দেখে সূত্র খুঁজুন, তারপর পুরো আয়াতটি নিচের লাইনে লিখুন।', en: 'Write the correct order number under each word (first word = 1). Use the meaning as a clue, then write the whole ayah on the line below.' })}</p>
      ${items.map(({ b, order }, i) => `<div class="ap"><div class="ap-h"><b>${bnNum(i + 1)}.</b> ${t1(b.mean)} <span class="ap-ref">(${esc(b.ref)})</span></div>
        <div class="ap-words">${order.map(k => `<span class="ap-w"><span class="ar-in">${esc(b.words[k].ar)}</span><i></i></span>`).join('')}</div><div class="wk-free"></div></div>`).join('')}</section>`;
    const key = items.map(({ b, order }, i) => `<div><b>${bnNum(i + 1)}.</b> ${order.map(k => bnNum(k + 1)).join(', ')} — <span class="ar-in">${esc(b.ar)}</span></div>`).join('');
    return { page, key };
  }
  /* ---- root family trees ---- */
  function rootTrees() {
    const m = {}; D.vocab.forEach(w => { if (!w.root) return; const r = w.root.replace(/\s+/g, ' ').trim(); (m[r] = m[r] || []).push(w); });
    const fams = Object.entries(m).filter(([, ws]) => ws.length >= 3).sort((a, b) => b[1].length - a[1].length).slice(0, 16);
    if (!fams.length) return '';
    return `<section class="flow"><div class="eyebrow">পরিশিষ্ট · Appendix</div><h1 class="h-page">মূলধাতুর পরিবার<span class="sub">Root family trees</span></h1>
      <p class="wk-help">${tx({ bn: 'একটি তিন অক্ষরের মূল থেকে কত শব্দ! প্রতিটি গাছে খালি ডালে নিজের খুঁজে পাওয়া আরেকটি শব্দ লিখুন।', en: 'So many words from one three-letter root! On each tree, add one more word you find yourself on the empty branch.' })}</p>
      <div class="rt-grid">${fams.map(([r, ws]) => `<div class="rt"><div class="rt-root">${esc(r)}</div><ul>${ws.slice(0, 6).map(w => `<li><span class="ar-in">${esc(w.ar)}</span> <small>${t1(w.mean)}</small></li>`).join('')}<li class="rt-blank">…………………</li></ul></div>`).join('')}</div></section>`;
  }
  /* ---- makharij diagram ---- */
  function makharijPage() {
    const labels = {}; MAKHARIJ.forEach(z => labels[z.id] = esc(z.name.bn.split(' — ')[0]));
    return `<section class="flow"><div class="eyebrow">পরিশিষ্ট · Appendix</div><h1 class="h-page">মাখরাজ মানচিত্র<span class="sub">Makharij map: 5 areas, 17 points</span></h1>
      <div class="mk-print"><div class="mk-fig">${makharijSVG(labels)}</div>
      <table class="mk-t"><thead><tr><th>এলাকা · Area</th><th>হরফ · Letters</th><th>কোথা থেকে · From where</th></tr></thead><tbody>
      ${MAKHARIJ.flatMap(z => z.points.map((pt, i) => `<tr>${i === 0 ? `<td rowspan="${z.points.length}"><b>${esc(z.name.bn.split(' — ')[0])}</b><br><span class="ar-in">${esc(z.ar)}</span></td>` : ''}<td class="arc">${esc(pt.letters)}</td><td>${tx(pt.desc)}</td></tr>`)).join('')}
      </tbody></table></div>
      <p class="wk-help">${tx({ bn: 'নিজে যাচাই: হরফের আগে যবরওয়ালা হামযা, পরে জযম দিয়ে পড়ুন (যেমন أَبْ, أَقْ)। আওয়াজ যেখানে থামে, সেটাই মাখরাজ।', en: 'Self-test: say the letter with a fatha hamza before it and a sukun on it (أَبْ, أَقْ). Where the sound stops is its makhraj.' })}</p></section>`;
  }
  /* ---- memorisation tracker ---- */
  function hifzTracker() {
    const rows = []; const seen = new Set();
    D.lessons.forEach(l => l.blocks.forEach(b => { if (b.type !== 'ayah') return; const su = b.ref.split(':')[0]; const key = l.id + '|' + su; if (seen.has(key)) return; seen.add(key); rows.push({ l, su, n: l.blocks.filter(x => x.type === 'ayah' && x.ref.split(':')[0] === su).length }); }));
    return `<section class="flow"><div class="eyebrow">পরিশিষ্ট · Appendix</div><h1 class="h-page">মুখস্থের খাতা<span class="sub">Memorisation tracker</span></h1>
      <p class="wk-help">${tx({ bn: 'প্রতিটি ধাপ শেষ হলে টিক দিন। মুখস্থ করার পর ১ দিন, ১ সপ্তাহ ও ১ মাস পরে আবার ঝালিয়ে নিন — তাহলে আর ভুলবেন না।', en: 'Tick each step when done. After memorising, revise after 1 day, 1 week and 1 month so it stays for good.' })}</p>
      <table class="tracker"><thead><tr><th>পাঠ · Lesson</th><th>সূরা · Surah</th><th>পড়েছি<br>Read</th><th>অর্থ বুঝেছি<br>Understood</th><th>মুখস্থ<br>Memorised</th><th>১ দিন</th><th>১ সপ্তাহ</th><th>১ মাস</th></tr></thead>
      <tbody>${rows.map(r => `<tr><td>${t1(r.l.title)}</td><td>${bnNum(r.su)} (${bnNum(r.n)})</td>${'<td>☐</td>'.repeat(6)}</tr>`).join('')}</tbody></table></section>`;
  }
  /* ---- journal and blank copybook pages ---- */
  function journal() {
    const prompts = [
      { bn: 'আজ যে নতুন আরবি শব্দ শিখলাম', en: 'A new Arabic word I learned today' }, { bn: 'যে আয়াত আমার মনে ছুঁয়ে গেছে', en: 'An ayah that touched my heart' },
      { bn: 'আমার নাম আরবিতে', en: 'My name in Arabic' }, { bn: 'যে দোয়াটি আজ পড়েছি', en: 'A dua I said today' }];
    return `<section class="flow"><div class="eyebrow">পরিশিষ্ট · Appendix</div><h1 class="h-page">আমার আরবি ডায়েরি<span class="sub">My Arabic journal</span></h1>
      ${prompts.map(pr => `<div class="jr"><b>${t1(pr)}</b> <span class="sub" style="display:inline">· ${md(pr.en)}</span><div class="wk-free"></div><div class="wk-free"></div></div>`).join('')}</section>
      <section class="flow"><div class="eyebrow">পরিশিষ্ট · Appendix</div><h1 class="h-page">খালি লেখার খাতা<span class="sub">Blank copybook pages</span></h1>
      <p class="wk-help">${tx({ bn: 'মোটা রেখাটি মূলরেখা — হরফ এর ওপর বসে, কিছু হরফ নিচে নামে। ড্যাশ দেওয়া রেখা উচ্চতা মাপার জন্য।', en: 'The bold line is the baseline: letters sit on it and some dip below. The dashed lines help you measure height.' })}</p>
      ${'<div class="wk-free tall"></div>'.repeat(9)}</section>`;
  }

  function tracker() {
    return `<section class="flow"><div class="eyebrow">পরিশিষ্ট · Appendix</div><h1 class="h-page">অগ্রগতির তালিকা<span class="sub">Progress tracker</span></h1>
      <table class="tracker"><thead><tr><th>#</th><th>পাঠ · Lesson</th><th>তারিখ · Date</th><th>কুইজ · Quiz</th><th>✓</th></tr></thead>
      <tbody>${D.lessons.map((l, i) => `<tr><td>${bnNum(i + 1)}</td><td>${t1(l.title)} <span class="sub" style="display:inline">· ${md(l.title.en)}</span></td><td style="width:28mm"></td><td style="width:18mm">&nbsp;&nbsp;&nbsp;/${bnNum(l.blocks.filter(b => b.type === 'quiz').reduce((n, b) => n + b.items.length, 0))}</td><td style="width:10mm"></td></tr>`).join('')}</tbody></table></section>`;
  }
  function certificate() {
    return `<section class="flow"><div class="cert"><div class="khatam"></div>
      <div class="cal">بَارَكَ اللّٰهُ فِيكَ</div>
      <div class="eyebrow">সনদপত্র · Certificate of completion</div>
      <h1>কুরআন ও আরবি শিক্ষা<span class="sub">Quran &amp; Arabic Learning</span></h1>
      <p>${tx({ bn: 'এই মর্মে প্রত্যয়ন করা হচ্ছে যে', en: 'This is to certify that' })}</p><div class="name"></div>
      <p>${tx({ bn: `সফলভাবে ${bnNum(D.lessons.length)}টি পাঠ সম্পন্ন করেছেন — আরবি পড়া, হাতের লেখা, তাজবীদ, কুরআনের শব্দভাণ্ডার, ব্যাকরণ, দৈনন্দিন আরবি এবং সালাত ও সূরা অর্থসহ।`, en: `has successfully completed all ${D.lessons.length} lessons: Arabic reading, handwriting, tajweed, Quranic vocabulary, grammar, everyday Arabic, and salah and surahs with meaning.` })}</p>
      <p class="ar" style="font-size:18pt">رَبِّ زِدْنِي عِلْمًا</p><p style="font-size:9pt;color:var(--ink-2)">“হে আমার রব, আমার জ্ঞান বাড়িয়ে দিন।” · “My Lord, increase me in knowledge.” (20:114)</p>
      <div class="sig"><div>তারিখ · Date</div><div>শিক্ষক / অভিভাবক · Teacher / Guardian</div></div></div></section>`;
  }

  const render = () => {
    const pz = puzzles(), ap = ayahPuzzles();
    const keys = (pz.key || ap.key) ? `<section class="flow"><div class="eyebrow">পরিশিষ্ট · Appendix</div><h1 class="h-page">ধাঁধার উত্তর<span class="sub">Puzzle answers</span></h1>
      ${ap.key ? `<h3 class="blk-title">আয়াত পাজল · Ayah puzzles</h3><div class="key">${ap.key}</div>` : ''}${pz.key ? `<h3 class="blk-title" style="margin-top:4mm">শব্দ খোঁজ · Word search</h3><div class="ws-keys">${pz.key}</div>` : ''}</section>` : '';
    // build the book in chunks so the browser stays responsive on phones
    const el = document.getElementById('book'); el.innerHTML = '';
    const parts = [() => cover() + intro() + toc() + alphabetChart()].concat(D.units.map(u => () => unitSection(u)),
      [() => pz.pages + ap.page, () => rootTrees() + makharijPage() + hifzTracker() + journal() + keys + tracker() + certificate()]);
    let i = 0;
    (function step() {
      el.insertAdjacentHTML('beforeend', parts[i++]());
      if (i < parts.length) setTimeout(step, 0); else document.body.setAttribute('data-ready', '1');
    })();
  };
  // load every face before laying out, so print/PDF never falls back to system fonts
  const faces = ['400 16px Amiri', '700 16px Amiri', '400 16px "Hind Siliguri"', '600 16px "Hind Siliguri"', '700 16px "Hind Siliguri"',
    '400 16px Figtree', '600 16px Figtree', '500 16px "Reem Kufi"', '600 16px "Reem Kufi"', '700 16px "Reem Kufi"'];
  if (document.fonts && document.fonts.load) {
    Promise.all(faces.map(f => document.fonts.load(f, 'Aaআبب'))).then(render, render);
  } else render();
})();
