// Service Worker der Interim-Seite (statischer Spiegel ohne Server).
// - /_next/image?url=X  -> X (Bildoptimierer gibt es statisch nicht)
// - /api/contact*       -> 503 (kein vorgetaeuschter Erfolg)
// - /api/*              -> 200 {} (GET) bzw. 204 (sonst); /api/cms/media/ bleibt Datei
// - Sentry              -> 204 (keine Fehlerberichte vom Interim)
// - Seitenaufrufe ausserhalb des Spiegels (/login/, /map/, geschuetzte Seiten)
//                        -> Weiterleitung auf __LIVE__<pfad>
// - ?_rsc= (Client-Navigation) bleibt unberuehrt: der Router faellt auf eine normale
//   Seitennavigation zurueck, weil statt RSC-Daten HTML kommt.
const ROUTES = new Set(__ROUTES__);
const LIVE = '__LIVE__';
const SERVED_UNDER_LIVE = self.location.origin === LIVE || self.location.origin === LIVE.replace('://', '://www.');

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));

function normalise(path) {
  return path.endsWith('/') ? path : path + '/';
}

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  if (url.origin !== self.location.origin) {
    if (/(^|\.)sentry\.io$/.test(url.hostname)) event.respondWith(new Response(null, { status: 204 }));
    return;
  }
  if (url.searchParams.has('_rsc')) return;
  const p = url.pathname;

  if (p === '/_next/image' || p === '/_next/image/') {
    const src = url.searchParams.get('url');
    if (!src) return;
    const target = new URL(src, self.location.origin);
    event.respondWith(target.origin === self.location.origin
      ? fetch(target.href, { credentials: 'same-origin' })
      : Response.redirect(target.href, 302));
    return;
  }

  // Kontakt-Endpunkte: kein vorgetaeuschter Erfolg. Das Formular schickt im Interim gar
  // nicht ab (interim.js oeffnet eine E-Mail); kommt doch eine Anfrage an, dann 503.
  if (p.startsWith('/api/contact')) {
    event.respondWith(new Response('{"error":"unavailable"}', { status: 503, headers: { 'Content-Type': 'application/json' } }));
    return;
  }
  if (p.startsWith('/api/') && !p.startsWith('/api/cms/media/')) {
    event.respondWith(req.method === 'GET' || req.method === 'HEAD'
      ? new Response('{}', { status: 200, headers: { 'Content-Type': 'application/json' } })
      : new Response(null, { status: 204 }));
    return;
  }
  // Entwicklungs-Endpunkte von Next (Stack-Frames, Overlay); Schriften bleiben Dateien
  if (p.startsWith('/__nextjs') && !p.startsWith('/__nextjs_font/')) {
    event.respondWith(new Response(null, { status: 204 }));
    return;
  }

  if (req.mode === 'navigate' && !SERVED_UNDER_LIVE) {
    const isFile = /\.[A-Za-z0-9]{2,5}$/.test(p);
    if (!isFile && !ROUTES.has(normalise(p))) {
      event.respondWith(Response.redirect(LIVE + p + url.search + url.hash, 302));
    }
  }
});
