#!/usr/bin/env python3
"""Statischer Spiegel des oeffentlichen Bereichs fuer GitHub Pages.

Liest die Routen aus /sitemap.xml der lokal laufenden App, laedt jede Seite
ohne Cookies, entfernt das Next-JavaScript (Seiten sind vollstaendig
serverseitig gerendert), ersetzt /_next/image-Optimizer-URLs durch die
Originalbilder, biegt Links auf nicht gespiegelte Pfade auf
https://plastship.com um und laedt alle referenzierten Dateien nach.
"""
import os, re, sys, time, html, shutil, urllib.request, urllib.error, urllib.parse
from concurrent.futures import ThreadPoolExecutor

BASE = os.environ.get('SOURCE', 'http://localhost').rstrip('/')
LIVE = os.environ.get('LIVE', 'https://plastship.com').rstrip('/')
MODE = sys.argv[1]          # routes | assemble
RAW = sys.argv[2] if MODE == 'assemble' else None
OUT = sys.argv[3] if MODE == 'assemble' else None
NOTFOUND = '/diese-seite-gibt-es-nicht-interim/'
TOOLS = os.path.dirname(os.path.abspath(__file__))
UA = 'plastship-interim-mirror'

def fetch(path, tries=5):
    url = BASE + path
    for i in range(tries):
        req = urllib.request.Request(url, headers={'User-Agent': UA})
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                return r.status, r.read(), r.geturl()
        except urllib.error.HTTPError as e:
            if e.code in (502, 503, 504) and i < tries - 1:
                print(f'  {e.code} fuer {path}, warte 30 s ({i+1}/{tries})', flush=True)
                time.sleep(30); continue
            return e.code, e.read(), url
        except urllib.error.URLError as e:
            if i < tries - 1:
                print(f'  {e.reason} fuer {path}, warte 30 s ({i+1}/{tries})', flush=True)
                time.sleep(30); continue
            raise
    raise RuntimeError('unerreichbar: ' + url)

# --- 1. Routen ---------------------------------------------------------------
st, body, _ = fetch('/sitemap.xml')
if st != 200:
    sys.exit(f'sitemap.xml lieferte {st}')
locs = re.findall(r'<loc>([^<]+)</loc>', body.decode())
routes = []
for l in locs:
    p = urllib.parse.urlsplit(l).path or '/'
    if not p.endswith('/'):
        p += '/'
    if p not in routes:
        routes.append(p)
print(f'{len(routes)} Routen aus der Sitemap', file=sys.stderr)

def norm(p):
    p = p.split('#')[0].split('?')[0]
    if not p.endswith('/'):
        p += '/'
    return p

# --- 2. Seiten pruefen (routes) bzw. gerenderte Seiten lesen (assemble) ------
if MODE == 'routes':
    ok, skipped = [], []
    def head(p):
        st, b, final = fetch(p)
        return p, st, urllib.parse.urlsplit(final).path
    with ThreadPoolExecutor(4) as ex:
        for p, st, fp in ex.map(head, routes):
            if st == 200 and '/login' not in fp:
                ok.append(p)
            else:
                skipped.append(f'{p} ({st} -> {fp})')
    for p in skipped:
        print('nicht oeffentlich, uebersprungen:', p, file=sys.stderr)
    print('\n'.join(ok + [NOTFOUND]))
    sys.exit(0)

pages = {}
for p in routes:
    fp = os.path.join(RAW, p.lstrip('/'), 'index.html')
    if os.path.exists(fp):
        pages[p] = open(fp, encoding='utf-8').read()
    else:
        print('nicht gerendert:', p)
page404 = open(os.path.join(RAW, NOTFOUND.strip('/'), 'index.html'), encoding='utf-8').read()
static_paths = set(pages)
print(f'{len(pages)} Seiten')

# --- 3. Umschreiben ----------------------------------------------------------
def decode_next_image(m):
    q = html.unescape(m.group(1))
    qs = urllib.parse.parse_qs(q)
    return qs.get('url', [''])[0]

NEXT_IMG = re.compile(r'/_next/image/?\?((?:url=[^"\s,\')]+))')

def remove_element(doc, start_idx):
    """Entfernt das Element, dessen Starttag bei start_idx beginnt (Tags balanciert)."""
    m = re.compile(r'<([a-zA-Z0-9]+)').match(doc, start_idx)
    tag = m.group(1)
    pat = re.compile(r'<(/?)' + tag + r'(?=[\s>/])[^>]*?(/?)>')
    depth = 0
    for t in pat.finditer(doc, start_idx):
        if t.group(1):
            depth -= 1
        elif not t.group(2):
            depth += 1
        if depth == 0:
            return doc[:start_idx] + doc[t.end():]
    return doc

def remove_by_testid(doc, testid, repl=''):
    while True:
        m = re.search(r'<[a-zA-Z0-9]+[^>]*\sdata-testid="' + re.escape(testid) + r'"', doc)
        if not m:
            return doc
        before = doc[:m.start()]
        doc = remove_element(doc, m.start())
        if repl:
            doc = doc[:m.start()] + repl + doc[m.start():]
            return doc

FORM_NOTE = {
    'de': ('Das Kontaktformular ist vorübergehend nicht verfügbar.',
           'Bitte schreiben Sie uns an', 'oder rufen Sie an:'),
    'en': ('The contact form is temporarily unavailable.',
           'Please email us at', 'or call:'),
}

def link_target(href):
    """Gibt das neue href zurueck (oder None = unveraendert)."""
    if not href.startswith('/') or href.startswith('//'):
        return None
    if href.startswith(('/_next/', '/favicon', '/images/', '/api/cms/media/')):
        return None
    if norm(href) in static_paths:
        return None
    if re.search(r'\.(png|jpe?g|webp|svg|gif|ico|pdf|mp4|webm|woff2?|css|js|json|txt|xml|webmanifest)(\?|$)', href.split('#')[0]):
        return None
    return LIVE + href

def rewrite(doc, lang):
    # Skripte raus (JSON-LD bleibt), Skript-Preloads raus
    doc = re.sub(r'<script(?![^>]*application/ld\+json)[^>]*>.*?</script>', '', doc, flags=re.S)
    doc = re.sub(r'<link[^>]*\bas="script"[^>]*/?>', '', doc)
    doc = re.sub(r'<link[^>]*rel="modulepreload"[^>]*/?>', '', doc)
    doc = re.sub(r'\snonce="[^"]*"', '', doc)
    # Next-Image-Optimizer -> Originalbild
    doc = NEXT_IMG.sub(lambda m: urllib.parse.quote(decode_next_image(m), safe='/%:'), doc)
    # srcset-Duplikate nach dem Ersetzen sind harmlos; w-Deskriptoren bleiben gueltig
    # absolute Ursprungs-URLs (canonical, hreflang, og) -> live
    # (nur in canonical/hreflang, meta und JSON-LD; sonst root-relativ)
    def to_live(m):
        return m.group(0).replace(BASE + '/', LIVE + '/').replace(BASE + '"', LIVE + '"')
    doc = re.sub(r'<link[^>]*rel="(?:canonical|alternate)"[^>]*>', to_live, doc)
    doc = re.sub(r'<meta[^>]*>', to_live, doc)
    doc = re.sub(r'<script[^>]*application/ld\+json[^>]*>.*?</script>', to_live, doc, flags=re.S)
    doc = doc.replace('"' + BASE + '/', '"/').replace(' ' + BASE + '/', ' /').replace('(' + BASE + '/', '(/')
    doc = doc.replace(BASE + '/', LIVE + '/')
    # Favicon mit Cache-Query
    doc = re.sub(r'(href="/favicon\.ico)\?[^"]*"', r'\1"', doc)
    # Cookie-Banner + Cookie-Einstellungen + Theme-Schalter: ohne Skripte und Cookies sinnlos
    doc = remove_by_testid(doc, 'cookie-banner')
    doc = remove_by_testid(doc, 'footer-cookie-settings')
    # Kontaktformular -> Hinweis mit Mail-Link
    t = FORM_NOTE.get(lang, FORM_NOTE['de'])
    note = ('<div data-testid="interim-form-note" style="padding:24px;border:1px solid #c8d3df;'
            'border-radius:4px;background:#f4f7fa;color:#003d6b;line-height:1.6">'
            f'<strong>{t[0]}</strong><br>{t[1]} '
            '<a href="mailto:info@plastship.com">info@plastship.com</a> '
            f'{t[2]} <a href="tel:+4961265898010">+49 6126 5898010</a></div>')
    while re.search(r'<form[\s>]', doc):
        m = re.search(r'<form[\s>]', doc)
        doc = remove_element(doc, m.start())
        doc = doc[:m.start()] + note + doc[m.start():]
    # Links auf nicht gespiegelte Pfade -> live
    def fix_href(m):
        new = link_target(html.unescape(m.group(2)))
        return m.group(0) if new is None else f'{m.group(1)}"{html.escape(new, quote=True)}"'
    doc = re.sub(r'(<a\s[^>]*?href=)"([^"]*)"', fix_href, doc)
    doc = re.sub(r'(<form\s[^>]*?action=)"([^"]*)"', fix_href, doc)
    # Hinweis + kleines Skript fuer Menues
    doc = doc.replace('</head>', '<link rel="stylesheet" href="/interim.css"></head>', 1)
    doc = doc.replace('</body>', '<script src="/interim.js" defer></script></body>')
    return doc

def lang_of(p):
    return 'en' if p.startswith('/en/') else 'de'

out_pages = {p: rewrite(d, lang_of(p)) for p, d in pages.items()}
out_404 = rewrite(page404, 'de')
# 404: Links muessen absolut sein (GitHub Pages liefert 404.html unter beliebigem Pfad)

# --- 4. Assets sammeln -------------------------------------------------------
ASSET_RE = [
    re.compile(r'(?:src|href|poster|imageSrcSet|srcSet|srcset|imagesrcset|content)="([^"]+)"'),
    re.compile(r'url\((?:&quot;|["\'])?(/[^)"\'&]+)(?:&quot;|["\'])?\)'),
]
def asset_refs(doc):
    refs = set()
    for m in ASSET_RE[0].finditer(doc):
        val = html.unescape(m.group(1))
        for part in val.split(','):
            u = part.strip().split(' ')[0]
            if u.startswith('/') and not u.startswith('//'):
                refs.add(u)
    for m in ASSET_RE[1].finditer(doc):
        refs.add(html.unescape(m.group(1)))
    keep = set()
    for u in refs:
        path = u.split('#')[0].split('?')[0]
        if path in ('/interim.js', '/interim.css'):
            continue
        if norm(path) in static_paths and not re.search(r'\.[a-z0-9]{2,5}$', path):
            continue
        if re.search(r'\.[A-Za-z0-9]{2,5}$', path) or path.startswith('/_next/static/'):
            keep.add(path)
    return keep

if os.path.isdir(OUT):
    shutil.rmtree(OUT)
os.makedirs(OUT)

def write(rel, data):
    fp = os.path.join(OUT, urllib.parse.unquote(rel.lstrip('/')))
    os.makedirs(os.path.dirname(fp), exist_ok=True)
    with open(fp, 'wb') as f:
        f.write(data)

for p, d in out_pages.items():
    write(p + 'index.html', d.encode('utf-8'))
write('/404.html', out_404.encode('utf-8'))
write('/.nojekyll', b'')
for f in ('interim.js', 'interim.css'):
    shutil.copy(os.path.join(TOOLS, f), os.path.join(OUT, f))
for extra in ('/robots.txt', '/sitemap.xml'):
    st, b, _ = fetch(extra)
    if st == 200:
        write(extra, b.decode().replace(BASE + '/', LIVE + '/').encode())

todo = set()
for d in list(out_pages.values()) + [out_404]:
    todo |= asset_refs(d)
done, missing = set(), []
CSS_URL = re.compile(r'url\(\s*["\']?([^)"\']+)["\']?\s*\)')
while todo:
    batch = sorted(todo - done); todo = set()
    def dl(u):
        st, b, _ = fetch(u)
        return u, st, b
    with ThreadPoolExecutor(8) as ex:
        for u, st, b in ex.map(dl, batch):
            done.add(u)
            if st != 200:
                missing.append((u, st)); continue
            write(u, b)
            if u.endswith('.css') or u.endswith('.webmanifest'):
                txt = b.decode('utf-8', 'replace')
                refs = CSS_URL.findall(txt) + re.findall(r'"src"\s*:\s*"([^"]+)"', txt)
                for r in refs:
                    if r.startswith('data:'):
                        continue
                    r = urllib.parse.urljoin(u, r).split('?')[0].split('#')[0]
                    if r.startswith('/') and r not in done:
                        todo.add(r)
print(f'{len(done)} Dateien geladen, {len(missing)} fehlen')
for u, st in missing:
    print(f'  FEHLT {st} {u}')
