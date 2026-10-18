"""Validate Quran & Arabic Learning (Quran-o-Arbi-Shikkha) data files. Copyright © ZyeemZia.  Usage:  python validate.py reading.js [more.js ...]
Each file must contain   window.AQ = ...;   then optional   AQ.alphabet = <JSON>;   and   AQ.units.push(<JSON>);
where <JSON> is STRICT JSON (double quotes, no trailing commas, no comments)."""
import json, re, sys, os

ARABIC = re.compile(r'[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]')
BLOCK_TYPES = {'text','tip','letters','examples','table','build','compare','rule','practice','vocab','ayah','steps','trace','quiz'}
errors = []
ALPHA_IDS = set()

def err(path, msg): errors.append(f'{path}: {msg}')

def bi(v, path, required=True):
    if v is None:
        if required: err(path, 'missing {bn,en}')
        return
    if not isinstance(v, dict) or not isinstance(v.get('bn'), str) or not isinstance(v.get('en'), str) \
            or not v['bn'].strip() or not v['en'].strip():
        err(path, f'must be {{bn,en}} with both non-empty, got {str(v)[:80]}')

def ar(v, path, required=True):
    if v is None:
        if required: err(path, 'missing Arabic')
        return
    if not isinstance(v, str) or not ARABIC.search(v): err(path, f'expected Arabic string, got {str(v)[:60]}')

def extract(src, pattern):
    """Find  <pattern> <json> ;  and return parsed json.  Uses raw_decode so the JSON boundary is exact."""
    m = re.search(pattern, src)
    if not m: return None
    dec = json.JSONDecoder()
    obj, _ = dec.raw_decode(src, m.end())
    return obj

def check_block(b, p):
    t = b.get('type')
    if t not in BLOCK_TYPES: err(p, f'unknown block type {t}'); return
    if 'title' in b: bi(b['title'], p + '.title')
    if t == 'text': bi(b, p)
    elif t == 'tip':
        if b.get('kind') not in ('tip','warn','memory','fun'): err(p, 'tip.kind invalid')
        bi(b, p)
    elif t == 'letters':
        for i, x in enumerate(b.get('items', [])):
            if ALPHA_IDS and x not in ALPHA_IDS: err(f'{p}.items[{i}]', f'unknown alphabet id {x}')
    elif t == 'examples':
        for i, x in enumerate(b.get('items', [])):
            q = f'{p}.items[{i}]'; ar(x.get('ar'), q + '.ar'); bi(x.get('tr'), q + '.tr')
            if 'mean' in x: bi(x['mean'], q + '.mean')
            if 'note' in x: bi(x['note'], q + '.note')
            if x.get('hl') and x['hl'] not in x.get('ar', ''): err(q, 'hl not a substring of ar')
    elif t == 'table':
        cells = list(b.get('head', [])) + [c for r in b.get('rows', []) for c in r]
        if not b.get('rows'): err(p, 'table has no rows')
        w = len(b.get('head', [])) or None
        for ri, r in enumerate(b.get('rows', [])):
            if w and len(r) != w: err(f'{p}.rows[{ri}]', f'row has {len(r)} cells, head has {w}')
        for c in cells:
            if isinstance(c, dict): bi(c, p + '.cell')
            elif not isinstance(c, str): err(p, f'bad cell {c}')
    elif t == 'build':
        for x in b.get('base', []): ar(x, p + '.base')
        if not b.get('marks'): err(p, 'build.marks missing')
        if 'labels' in b:
            if len(b['labels']) != len(b['marks']): err(p, 'labels length != marks length')
            for x in b['labels']: bi(x, p + '.labels')
    elif t == 'compare':
        for i, x in enumerate(b.get('items', [])):
            q = f'{p}.items[{i}]'; ar(x.get('ar'), q + '.ar'); bi(x.get('label'), q + '.label'); bi(x.get('desc'), q + '.desc')
    elif t == 'rule':
        bi(b.get('name'), p + '.name'); ar(b.get('ar'), p + '.ar'); bi(b.get('desc'), p + '.desc'); bi(b.get('how'), p + '.how')
        if b.get('color') not in ('green','blue','red','orange','purple','gray'): err(p, 'rule.color invalid')
        for i, x in enumerate(b.get('examples', [])):
            q = f'{p}.examples[{i}]'; ar(x.get('ar'), q + '.ar'); bi(x.get('tr'), q + '.tr')
            if x.get('hl') and x['hl'] not in x.get('ar', ''): err(q, 'hl not a substring of ar')
    elif t == 'practice':
        bi(b, p)
        if not b.get('lines'): err(p, 'practice.lines missing')
        for x in b.get('lines', []): ar(x, p + '.lines')
    elif t == 'vocab':
        for i, x in enumerate(b.get('items', [])):
            q = f'{p}.items[{i}]'; ar(x.get('ar'), q + '.ar'); bi(x.get('tr'), q + '.tr'); bi(x.get('mean'), q + '.mean')
            if 'example' in x: ar(x['example'].get('ar'), q + '.example.ar'); bi(x['example'].get('mean'), q + '.example.mean')
    elif t == 'ayah':
        if not re.fullmatch(r'\d{1,3}:\d{1,3}', str(b.get('ref', ''))): err(p, 'ayah.ref must be like "1:2"')
        ar(b.get('ar'), p + '.ar'); bi(b.get('tr'), p + '.tr'); bi(b.get('mean'), p + '.mean')
        for i, w in enumerate(b.get('words', [])):
            q = f'{p}.words[{i}]'; ar(w.get('ar'), q + '.ar')
            if not w.get('bn') or not w.get('en'): err(q, 'word needs bn and en')
    elif t == 'steps':
        for i, x in enumerate(b.get('items', [])):
            q = f'{p}.items[{i}]'; bi(x.get('title'), q + '.title')
            if 'ar' in x: ar(x['ar'], q + '.ar')
            for k in ('tr', 'mean', 'desc'):
                if k in x: bi(x[k], f'{q}.{k}')
    elif t == 'trace':
        for x in b.get('items', []): ar(x, p + '.items')
    elif t == 'quiz':
        if not b.get('items'): err(p, 'quiz has no items')
        for i, x in enumerate(b.get('items', [])):
            q = f'{p}.items[{i}]'; bi(x.get('q'), q + '.q')
            if 'ar' in x: ar(x['ar'], q + '.ar')
            o = x.get('options', [])
            if not 2 <= len(o) <= 5: err(q, 'needs 2-5 options')
            for c in o:
                if isinstance(c, dict): bi(c, q + '.option')
            if not isinstance(x.get('answer'), int) or not 0 <= x['answer'] < len(o): err(q, 'answer index out of range')
            if 'explain' in x: bi(x['explain'], q + '.explain')

def check_alphabet(al, f):
    req = ['id','ar','name','nameAr','tr','forms','connects','heavy','sun','qalqalah','makhraj','sound','family','example']
    for i, a in enumerate(al):
        p = f'{f}:alphabet[{i}]'
        for k in req:
            if k not in a: err(p, f'missing {k}')
        ALPHA_IDS.add(a.get('id'))
        for k in ('name','tr','makhraj','sound'): bi(a.get(k), f'{p}.{k}')
        ar(a.get('ar'), p + '.ar'); ar(a.get('nameAr'), p + '.nameAr')
        fm = a.get('forms', {})
        for k in ('isolated','initial','medial','final'): ar(fm.get(k), f'{p}.forms.{k}')
        ex = a.get('example', {}); ar(ex.get('ar'), p + '.example.ar'); bi(ex.get('tr'), p + '.example.tr'); bi(ex.get('mean'), p + '.example.mean')
        if 'mnemonic' in a: bi(a['mnemonic'], p + '.mnemonic')

def check_file(f):
    src = open(f, encoding='utf-8').read()
    if 'window.AQ = window.AQ ||' not in src: err(f, 'missing window.AQ registration line')
    try:
        al = extract(src, r'AQ\.alphabet\s*=\s*')
        if al is not None: check_alphabet(al, f)
        unit = extract(src, r'AQ\.units\.push\(\s*')
    except json.JSONDecodeError as e:
        line = src[:e.pos].count('\n') + 1
        err(f, f'STRICT JSON error at line {line}: {e.msg}'); return None
    if unit is None: err(f, 'no AQ.units.push( found'); return None
    for k in ('id','order','icon','color','title','subtitle','lessons'):
        if k not in unit: err(f, f'unit missing {k}')
    bi(unit.get('title'), f + ':unit.title'); bi(unit.get('subtitle'), f + ':unit.subtitle')
    ids = set(); stats = {'lessons': 0, 'blocks': 0, 'quiz_q': 0, 'vocab': 0}
    for li, L in enumerate(unit.get('lessons', [])):
        p = f'{f}:lesson[{li}]({L.get("id")})'
        stats['lessons'] += 1
        for k in ('id','icon','title','subtitle','minutes','goals','blocks'):
            if k not in L: err(p, f'missing {k}')
        if L.get('id') in ids: err(p, 'duplicate lesson id')
        ids.add(L.get('id'))
        bi(L.get('title'), p + '.title'); bi(L.get('subtitle'), p + '.subtitle')
        for g in L.get('goals', []): bi(g, p + '.goals')
        for bi_, b in enumerate(L.get('blocks', [])):
            stats['blocks'] += 1
            if b.get('type') == 'quiz': stats['quiz_q'] += len(b.get('items', []))
            if b.get('type') == 'vocab': stats['vocab'] += len(b.get('items', []))
            check_block(b, f'{p}.blocks[{bi_}:{b.get("type")}]')
    return stats

if __name__ == '__main__':
    here = os.path.dirname(os.path.abspath(__file__))
    files = sys.argv[1:]
    # load alphabet ids from reading.js first if present, so `letters` blocks can be checked everywhere
    rj = os.path.join(here, 'reading.js')
    if os.path.exists(rj) and not any(os.path.basename(x) == 'reading.js' for x in files):
        try:
            for a in extract(open(rj, encoding='utf-8').read(), r'AQ\.alphabet\s*=\s*') or []: ALPHA_IDS.add(a.get('id'))
        except Exception: pass
    for f in sorted(files, key=lambda x: os.path.basename(x) != 'reading.js'):
        s = check_file(f if os.path.isabs(f) else os.path.join(os.getcwd(), f))
        if s: print(f'{os.path.basename(f)}: {s}')
    if errors:
        print(f'\n{len(errors)} problem(s):'); [print(' -', e) for e in errors[:200]]; sys.exit(1)
    print('OK - no problems found')
