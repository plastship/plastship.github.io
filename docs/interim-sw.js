// Service Worker der Interim-Seite (statischer Spiegel ohne Server).
// - /_next/image?url=X  -> X (Bildoptimierer gibt es statisch nicht)
// - /api/*              -> 200 {} (GET) bzw. 204 (sonst); /api/cms/media/ bleibt Datei
// - Sentry              -> 204 (keine Fehlerberichte vom Interim)
// - Seitenaufrufe ausserhalb des Spiegels (/login/, /map/, geschuetzte Seiten)
//                        -> Weiterleitung auf https://plastship.com<pfad>
// - ?_rsc= (Client-Navigation) bleibt unberuehrt: der Router faellt auf eine normale
//   Seitennavigation zurueck, weil statt RSC-Daten HTML kommt.
const ROUTES = new Set(["/","/about/","/accessibility/","/agb/","/benchmark/","/contact-us/","/design-for-recycling/","/email-disclaimer/","/en/","/en/about/","/en/accessibility/","/en/agb/","/en/benchmark/","/en/contact-us/","/en/design-for-recycling/","/en/email-disclaimer/","/en/end-to-end-supply/","/en/faq/","/en/imprint/","/en/industry-survey/","/en/laboratory-services/","/en/material-quality/","/en/material-search/","/en/monitored-material-system/","/en/news/","/en/news/1922-pp-h-post-consumer/","/en/news/4-internationales-recycling-forum/","/en/news/bvse-rezyklateinsatz-marktbedingungen/","/en/news/category/aktuelle-nachrichten/","/en/news/category/best-practices/","/en/news/category/forschungsprojekte/","/en/news/category/interviews/","/en/news/category/messen-und-webinare/","/en/news/category/partner-news/","/en/news/category/top-rezyklate/","/en/news/earth-overshoot-day-2025/","/en/news/efficient-use-of-recyclates-webinar/","/en/news/eu-verpackungsabfaelle-2023/","/en/news/fachpack-2025-rueckblick/","/en/news/internationales-recycling-forum-2024/","/en/news/interview-jan-bauer/","/en/news/interview-jeroen-glansdorp/","/en/news/interview-kreislaufwirtschaft-moeglichkeit/","/en/news/interview-kunststoffindustrie-2024-2/","/en/news/interview-kunststoffindustrie-2024/","/en/news/kiss-kreislaufwirtschaft-praxis-fachpack-k/","/en/news/kiss-projekt-ki-kreislaufwirtschaft/","/en/news/kreislaufwirtschaft-rezyklateinsatz-strategie/","/en/news/kreislaufwirtschaft-zwischen-regulierung-und-realitaet/","/en/news/material-stories-fachpack-k-messe-2/","/en/news/material-stories-fachpack-k-messe/","/en/news/monitored-materials-rezyklate-schuetz-premium/","/en/news/optimierte-kunststoffrezyklate-fuellstoffe/","/en/news/plastship-2025-prioritaeten-innovationen/","/en/news/plastship-bvse-beitritt/","/en/news/plastship-entsorger-circle-digitalisierung/","/en/news/plastship-fachpack-2024-save-the-date/","/en/news/plastship-fachpack-2024/","/en/news/plastship-fachpack-2025-kiss/","/en/news/plastship-hpf-partnerschaft/","/en/news/plastship-k-messe-2025-kiss/","/en/news/plastship-k-messe-2025/","/en/news/plastship-odorcheckerspot-3s/","/en/news/plastship-prse-2025/","/en/news/plastship-prse-ifat-2026/","/en/news/plastship-tecpart-beitritt/","/en/news/plastship-trinamix-partnerschaft/","/en/news/plastship-tuev-nord-cert-zertifizierung/","/en/news/pp-regranulat-mfr-20/","/en/news/pre-initiative-zirkulaere-kunststoffe/","/en/news/prse-2024-kreislaufwirtschaft/","/en/news/prse-2025-rueckblick/","/en/news/rezy-spezi-rezyklateinsatz/","/en/news/rezyklateinsatz-kunststoffindustrie/","/en/news/skz-plastship-gemeinsames-projekt/","/en/news/supernase-lebensmittelverschwendung/","/en/news/veridis-plastship-praezision/","/en/news/was-ist-eucertplast/","/en/partners/","/en/partners/3s/","/en/partners/3s/odorcheckerspot/","/en/partners/hpf/","/en/partners/hpf/mineral-engineers/","/en/partners/hpf/rescofil/","/en/partners/hpf/tremin-939/","/en/partners/plastcert/","/en/partners/plastcert/recyclability/","/en/partners/plastcert/recycled-plastic/","/en/partners/plastcert/recycling-process/","/en/partners/r-a-m/","/en/partners/r-a-m/itg-500-bench/","/en/partners/r-a-m/pq-mex/","/en/partners/trinamix/","/en/partners/trinamix/design-for-recycling/","/en/partners/trinamix/film-identification/","/en/partners/trinamix/nir-spectroscopy/","/en/partners/veridis/","/en/partners/veridis/madscan/","/en/privacy/","/en/procurement/","/en/recyclate-performance/","/en/recycler-circle/","/en/services/","/en/story/","/en/strategy-mix/","/en/team/","/en/top-recyclates/","/en/waste-disposal/","/en/whitepaper/","/end-to-end-supply/","/faq/","/imprint/","/industry-survey/","/laboratory-services/","/material-quality/","/material-search/","/monitored-material-system/","/news/","/news/1922-pp-h-post-consumer/","/news/4-internationales-recycling-forum/","/news/bvse-rezyklateinsatz-marktbedingungen/","/news/category/aktuelle-nachrichten/","/news/category/best-practices/","/news/category/forschungsprojekte/","/news/category/interviews/","/news/category/messen-und-webinare/","/news/category/partner-news/","/news/category/top-rezyklate/","/news/earth-overshoot-day-2025/","/news/efficient-use-of-recyclates-webinar/","/news/eu-verpackungsabfaelle-2023/","/news/fachpack-2025-rueckblick/","/news/internationales-recycling-forum-2024/","/news/interview-jan-bauer/","/news/interview-jeroen-glansdorp/","/news/interview-kreislaufwirtschaft-moeglichkeit/","/news/interview-kunststoffindustrie-2024-2/","/news/interview-kunststoffindustrie-2024/","/news/kiss-kreislaufwirtschaft-praxis-fachpack-k/","/news/kiss-projekt-ki-kreislaufwirtschaft/","/news/kreislaufwirtschaft-rezyklateinsatz-strategie/","/news/kreislaufwirtschaft-zwischen-regulierung-und-realitaet/","/news/material-stories-fachpack-k-messe-2/","/news/material-stories-fachpack-k-messe/","/news/monitored-materials-rezyklate-schuetz-premium/","/news/optimierte-kunststoffrezyklate-fuellstoffe/","/news/plastship-2025-prioritaeten-innovationen/","/news/plastship-bvse-beitritt/","/news/plastship-entsorger-circle-digitalisierung/","/news/plastship-fachpack-2024-save-the-date/","/news/plastship-fachpack-2024/","/news/plastship-fachpack-2025-kiss/","/news/plastship-hpf-partnerschaft/","/news/plastship-k-messe-2025-kiss/","/news/plastship-k-messe-2025/","/news/plastship-odorcheckerspot-3s/","/news/plastship-prse-2025/","/news/plastship-prse-ifat-2026/","/news/plastship-tecpart-beitritt/","/news/plastship-trinamix-partnerschaft/","/news/plastship-tuev-nord-cert-zertifizierung/","/news/pp-regranulat-mfr-20/","/news/pre-initiative-zirkulaere-kunststoffe/","/news/prse-2024-kreislaufwirtschaft/","/news/prse-2025-rueckblick/","/news/rezy-spezi-rezyklateinsatz/","/news/rezyklateinsatz-kunststoffindustrie/","/news/skz-plastship-gemeinsames-projekt/","/news/supernase-lebensmittelverschwendung/","/news/veridis-plastship-praezision/","/news/was-ist-eucertplast/","/partners/","/partners/3s/","/partners/3s/odorcheckerspot/","/partners/hpf/","/partners/hpf/mineral-engineers/","/partners/hpf/rescofil/","/partners/hpf/tremin-939/","/partners/plastcert/","/partners/plastcert/recyclability/","/partners/plastcert/recycled-plastic/","/partners/plastcert/recycling-process/","/partners/r-a-m/","/partners/r-a-m/itg-500-bench/","/partners/r-a-m/pq-mex/","/partners/trinamix/","/partners/trinamix/design-for-recycling/","/partners/trinamix/film-identification/","/partners/trinamix/nir-spectroscopy/","/partners/veridis/","/partners/veridis/madscan/","/privacy/","/procurement/","/recyclate-performance/","/recycler-circle/","/services/","/story/","/strategy-mix/","/team/","/top-recyclates/","/waste-disposal/","/whitepaper/"]);
const LIVE = 'https://plastship.com';
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
