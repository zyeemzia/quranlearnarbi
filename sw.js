/* Offline cache for কুরআন ও আরবি শিক্ষা · Quran & Arabic Learning. Copyright © ZyeemZia
   Pages and files open instantly from the cache and are refreshed in the background.
   VERSION is stamped by tools/build.py; a new version clears the old cache. */
const VERSION = '725a2927a5';
const CACHE = 'qas-' + VERSION;
const CORE = ['./', 'index.html', 'app.css', 'fonts.css', 'common.js', 'data.bundle.js', 'app.js', 'favicon.svg', 'book.html', 'book.css', 'book.js'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

/* Pronunciation audio is cached as it is played, in caches that outlive a site update:
   our own voice files (audio/m, audio/f) for good, and Quran.com's word-by-word recitation for at most
   7 days (Quran Foundation's terms allow caching their content for up to a week, so it is re-fetched after that). */
const VOICE = 'qa-voice', WBW = 'qa-wbw', WEEK = 7 * 864e5;
const saved = r => +(r.headers.get('x-saved') || 0);

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('qas-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => caches.open(WBW)).then(c => c.keys().then(ks => Promise.all(ks.map(k => c.match(k).then(r => { if (!r || Date.now() - saved(r) > WEEK) return c.delete(k); })))))
    .then(() => self.clients.claim()));
});

async function audio(req, name, maxAge) {
  const cache = await caches.open(name);
  let res = await cache.match(req.url);
  if (res && maxAge && Date.now() - saved(res) > maxAge) { await cache.delete(req.url); res = null; }
  if (!res) {
    const net = await fetch(req.url, { mode: 'cors', credentials: 'omit' }).catch(() => null);
    if (!net || !net.ok) return net || Response.error();
    res = new Response(await net.blob(), { headers: { 'Content-Type': 'audio/mpeg', 'x-saved': String(Date.now()) } });
    cache.put(req.url, res.clone());
  }
  const range = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
  if (!range) return res;
  const buf = await res.arrayBuffer(), n = buf.byteLength;     // media players ask for byte ranges: answer with 206
  let start = range[1] ? +range[1] : Math.max(0, n - +range[2]), end = range[1] && range[2] ? Math.min(+range[2], n - 1) : n - 1;
  if (start >= n) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${n}` } });
  return new Response(buf.slice(start, end + 1), { status: 206, headers: { 'Content-Type': 'audio/mpeg', 'Accept-Ranges': 'bytes', 'Content-Range': `bytes ${start}-${end}/${n}`, 'Content-Length': String(end - start + 1) } });
}

self.addEventListener('fetch', e => {
  const req = e.request; const url = new URL(req.url);
  if (req.method !== 'GET') return;
  if (url.hostname === 'audio.qurancdn.com') { e.respondWith(audio(req, WBW, WEEK)); return; }
  if (url.origin !== location.origin) return;
  if (/\/audio\/[mf]\/[^/]+\.mp3$/.test(url.pathname)) { e.respondWith(audio(req, VOICE, 0)); return; }
  if (url.pathname.endsWith('.pdf')) return; // the large PDF is never cached
  e.respondWith(caches.open(CACHE).then(async cache => {
    const hit = await cache.match(req, { ignoreSearch: true });
    const fresh = fetch(req).then(res => { if (res && res.ok && res.type === 'basic') cache.put(req, res.clone()); return res; }).catch(() => hit);
    return hit || fresh;
  }));
});
