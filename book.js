/* Quran & Arabic Learning (কুরআন ও আরবি শিক্ষা) — printable book renderer (same data as the web app). Always bilingual. */
(function () {
  'use strict';
  const { esc, md, isAr, hlAr, bnNum, syllableTr, prepare } = window.AQX;
  const D = prepare();
  const tx = o => !o ? '' : typeof o === 'string' ? md(o) : `${md(o.bn)}<span class="sub">${md(o.en)}</span>`;
  const t1 = o => !o ? '' : typeof o === 'string' ? md(o) : md(o.bn);
  const trn = t => t ? `${esc(t.bn)} · <span class="en">${md(t.en)}</span>` : '';
  const KEYS = ['ক', 'খ', 'গ', 'ঘ', 'ঙ'];
  const arDigits = n => String(n).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[d]);
  const baseLen = s => String(s).replace(/[ً-ٰٟـ◌\s]/g, '').length;
  const badge = (u, txt, cls) => { const t = txt || u.icon; const n = baseLen(t); return `<span class="badge star ${cls || ''} ${n >= 4 ? 'bx4' : n === 3 ? 'bx3' : ''}" data-c="${u.color}">${esc(t)}</span>`; };

  function cover() {
    return `<section class="page cover"><div class="khatam"></div><div class="cover-in">
      <div class="cover-top">${D.units.length} Units · ${D.lessons.length} Lessons · বাংলা + English</div>
      <div class="cover-cal">تَعَلُّمُ الْقُرْآنِ وَالْعَرَبِيَّةِ</div>
      <h1>কুরআন ও আরবি শিক্ষা<span class="sub">Quran &amp; Arabic Learning</span></h1>
      <p class="cover-lead">বাংলা ও ইংরেজিতে আরবি পড়া, তাজবীদ, কুরআনের শব্দ, ব্যাকরণ, দৈনন্দিন আরবি ও সালাত — শব্দে শব্দে, ধাপে ধাপে।
        <span class="sub">Reading, tajweed, Quranic words, grammar, everyday Arabic and salah, word by word and step by step.</span></p>
      <div class="cover-units">${D.units.map(u => `<div><b>${esc(u.icon)}</b>${t1(u.title)}</div>`).join('')}</div>
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
        <ol style="columns:1"><li>অগ্রগতির তালিকা <span class="sub">Progress tracker</span></li><li>সনদপত্র <span class="sub">Certificate</span></li></ol></div>
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
      case 'quiz': {
        const start = ctx.q.length + 1;
        b.items.forEach(q => ctx.q.push({ lesson: ctx.lessonNo, q }));
        return wrap(`<div class="quiz"><h4>কুইজ · Quiz</h4><ol start="${start}">${b.items.map(q => `<li>${tx(q.q)}${q.ar ? `<div class="qa">${esc(q.ar)}</div>` : ''}<div class="opts">${q.options.map((o, k) => `<span>${KEYS[k]}) ${typeof o === 'object' ? `${md(o.bn)} / <span class="en">${md(o.en)}</span>` : md(o)}</span>`).join('')}</div></li>`).join('')}</ol></div>`);
      }
      default: return '';
    }
  }

  function unitSection(u) {
    const ctx = { q: [] };
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
    if (ctx.q.length) {
      h += `<section class="flow" data-c="${u.color}"><div class="eyebrow">ইউনিট ${bnNum(u.order)} · Unit ${u.order}</div><h1 class="h-page">উত্তরমালা<span class="sub">Answer key</span></h1>
        <div class="key">${ctx.q.map((x, i) => `<div><b>${bnNum(i + 1)}.</b> ${KEYS[x.q.answer]}) ${(o => typeof o === 'object' ? `${md(o.bn)} / <span class="en">${md(o.en)}</span>` : md(o))(x.q.options[x.q.answer])}${x.q.explain ? `<br><span style="color:var(--ink-2)">${t1(x.q.explain)}</span>` : ''}</div>`).join('')}</div></section>`;
    }
    return h;
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
      <p>${tx({ bn: `সফলভাবে ${bnNum(D.lessons.length)}টি পাঠ সম্পন্ন করেছেন — আরবি পড়া, তাজবীদ, কুরআনের শব্দভাণ্ডার, ব্যাকরণ, দৈনন্দিন আরবি এবং সালাত ও সূরা অর্থসহ।`, en: `has successfully completed all ${D.lessons.length} lessons: Arabic reading, tajweed, Quranic vocabulary, grammar, everyday Arabic, and salah and surahs with meaning.` })}</p>
      <p class="ar" style="font-size:18pt">رَبِّ زِدْنِي عِلْمًا</p><p style="font-size:9pt;color:var(--ink-2)">“হে আমার রব, আমার জ্ঞান বাড়িয়ে দিন।” · “My Lord, increase me in knowledge.” (20:114)</p>
      <div class="sig"><div>তারিখ · Date</div><div>শিক্ষক / অভিভাবক · Teacher / Guardian</div></div></div></section>`;
  }

  const render = () => {
    document.getElementById('book').innerHTML = cover() + intro() + toc() + alphabetChart() + D.units.map(unitSection).join('') + tracker() + certificate();
    document.body.setAttribute('data-ready', '1');
  };
  // load every face before laying out, so print/PDF never falls back to system fonts
  const faces = ['400 16px Amiri', '700 16px Amiri', '400 16px "Hind Siliguri"', '600 16px "Hind Siliguri"', '700 16px "Hind Siliguri"',
    '400 16px Figtree', '600 16px Figtree', '500 16px "Reem Kufi"', '600 16px "Reem Kufi"', '700 16px "Reem Kufi"'];
  if (document.fonts && document.fonts.load) {
    Promise.all(faces.map(f => document.fonts.load(f, 'Aaআبب'))).then(render, render);
  } else render();
})();
