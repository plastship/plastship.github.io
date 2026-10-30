#!/usr/bin/env python3
"""Statisches 1:1-Abbild des oeffentlichen Bereichs fuer GitHub Pages.

Modi (Aufruf aus build.sh):
  routes                      Routen aus /sitemap.xml pruefen, eine je Zeile (+ 404-Fuehler)
  assemble <html> <urls> <out>
                              HTML umschreiben (Bildoptimierer, Ursprung, Interim-Zusaetze),
                              alle Assets laden (HTML, Browser-Protokoll, CSS url(), Chunk-
                              Verweise in JS), Service Worker erzeugen, fehlende Dateien melden.
  check    <out>              jede lokale Referenz in HTML/CSS/JS/Manifest hat eine Datei

Das Server-HTML samt React-Debug-Daten holt tools/fetch.cjs.

Umgebung: SOURCE (Quelle, Vorgabe http://localhost), LIVE (https://plastship.com), PAR.
"""
import os, re, sys, json, time, html, shutil, urllib.request, urllib.error, urllib.parse
from concurrent.futures import ThreadPoolExecutor

BASE = os.environ.get('SOURCE', 'http://localhost').rstrip('/')
LIVE = os.environ.get('LIVE', 'https://plastship.com').rstrip('/')
PAR = int(os.environ.get('PAR', '2'))
NOTFOUND = '/diese-seite-gibt-es-nicht-interim/'
TOOLS = os.path.dirname(os.path.abspath(__file__))
UA = 'plastship-interim-mirror'
# Origin, unter dem die App ihre absoluten URLs schreibt (canonical, og, JSON-LD)
ORIGINS = sorted({BASE, 'http://localhost'}, key=len, reverse=True)


def log(*a):
    print(*a, flush=True)


def fetch(path, tries=5, accept='*/*'):
    url = path if path.startswith('http') else BASE + path
    for i in range(tries):
        req = urllib.request.Request(url, headers={'User-Agent': UA, 'Accept': accept})
        try:
            with urllib.request.urlopen(req, timeout=180) as r:
                return r.status, r.read(), r.geturl()
        except urllib.error.HTTPError as e:
            if e.code in (502, 503, 504) and i < tries - 1:
                log(f'  {e.code} fuer {path}, warte 30 s ({i + 1}/{tries})')
                time.sleep(30)
                continue
            return e.code, e.read(), url
        except (urllib.error.URLError, TimeoutError, ConnectionError) as e:
            if i < tries - 1:
                log(f'  {e} fuer {path}, warte 30 s ({i + 1}/{tries})')
                time.sleep(30)
                continue
            raise
    raise RuntimeError('unerreichbar: ' + url)


def norm(p):
    p = p.split('#')[0].split('?')[0]
    if not p.endswith('/'):
        p += '/'
    return p


def sitemap_routes():
    st, body, _ = fetch('/sitemap.xml')
    if st != 200:
        sys.exit(f'sitemap.xml lieferte {st}')
    routes = []
    for loc in re.findall(r'<loc>([^<]+)</loc>', body.decode()):
        p = norm(urllib.parse.urlsplit(html.unescape(loc)).path or '/')
        if p not in routes:
            routes.append(p)
    return routes


def html_file(root, route):
    return os.path.join(root, route.strip('/'), 'index.html') if route != '/' else os.path.join(root, 'index.html')


# --- routes ------------------------------------------------------------------
def cmd_routes():
    routes = sitemap_routes()
    print(f'{len(routes)} Routen in der Sitemap', file=sys.stderr)

    def head(p):
        st, _, final = fetch(p, accept='text/html')
        return p, st, urllib.parse.urlsplit(final).path

    ok = []
    with ThreadPoolExecutor(4) as ex:
        for p, st, fp in ex.map(head, routes):
            if st == 200 and '/login' not in fp:
                ok.append(p)
            else:
                print(f'nicht oeffentlich, uebersprungen: {p} ({st} -> {fp})', file=sys.stderr)
    print('\n'.join(ok + [NOTFOUND]))


# --- assemble: Umschreiben -----------------------------------------------------
SCRIPT_RE = re.compile(r'<script\b[^>]*>.*?</script>', re.S)
NEXT_IMG = re.compile(r'/_next/image/?\?url=([^&"\'\s,\\]+)(?:&(?:amp;)?[a-z]+=[^&"\'\s,\\]*)*')


def next_img_target(enc):
    return urllib.parse.unquote(html.unescape(enc))


def rewrite_next_img(m):
    return urllib.parse.quote(next_img_target(m.group(1)), safe="/:@!$'()*+;=-._~%")


def outside_scripts(doc, fn):
    """Wendet fn nur auf Markup ausserhalb von <script>-Elementen an."""
    out, pos = [], 0
    for m in SCRIPT_RE.finditer(doc):
        out.append(fn(doc[pos:m.start()]))
        out.append(m.group(0))
        pos = m.end()
    out.append(fn(doc[pos:]))
    return ''.join(out)


FLIGHT_RE = re.compile(r'(<script>)(self\.__next_f\.push\((\[.*?\])\))(</script>)', re.S)


def flight_text_regions(stream_bytes):
    """Byte-Bereiche der T-Zeilen (Text mit Laengenpraefix) im Flight-Strom."""
    regions, i, n = [], 0, len(stream_bytes)
    row = re.compile(rb'([0-9a-f]*):')
    while i < n:
        m = row.match(stream_bytes, i)
        if not m:
            nl = stream_bytes.find(b'\n', i)
            i = n if nl < 0 else nl + 1
            continue
        j = m.end()
        if stream_bytes[j:j + 1] == b'T':
            comma = stream_bytes.find(b',', j)
            ln = int(stream_bytes[j + 1:comma], 16)
            regions.append((comma + 1, comma + 1 + ln))
            i = comma + 1 + ln
        else:
            nl = stream_bytes.find(b'\n', j)
            i = n if nl < 0 else nl + 1
    return regions


ROBOTS = 'noindex, nofollow'
ROBOTS_FLIGHT = re.compile(r'"name":"robots","content":"[^"]*"')
ROBOTS_FLIGHT_RAW = re.compile(r'\\"name\\":\\"robots\\",\\"content\\":\\"[^\\"]*\\"')
ROBOTS_FLIGHT_NEW = '\\"name\\":\\"robots\\",\\"content\\":\\"' + ROBOTS + '\\"'


def rewrite_flight(doc, route, warnings):
    """Ersetzt in den Flight-Daten den Quell-Origin durch LIVE und den robots-Inhalt durch
    noindex, nofollow, sofern kein Treffer in einer T-Zeile steht (deren Laengenpraefix
    wuerde sonst nicht mehr stimmen). Markup und Flight bleiben so deckungsgleich."""
    parts = []
    for m in FLIGHT_RE.finditer(doc):
        try:
            arr = json.loads(m.group(3))
        except ValueError:
            continue
        if len(arr) == 2 and arr[0] == 1 and isinstance(arr[1], str):
            parts.append(arr[1])
    stream = ''.join(parts).encode('utf-8')
    regions = flight_text_regions(stream)

    def safe(pattern):
        for hit in re.finditer(pattern, stream):
            if any(a <= hit.start() < b for a, b in regions):
                return False
        return True
    do_origin = all(safe(re.escape(o.encode())) for o in ORIGINS)
    do_robots = safe(ROBOTS_FLIGHT.pattern.encode())
    if not do_origin:
        warnings.append(f'{route}: Ursprungs-URL in Flight-Textzeile, dort unveraendert')
    if not do_robots:
        warnings.append(f'{route}: robots in Flight-Textzeile, dort unveraendert')

    def fix(m):
        body = m.group(2)
        if do_origin:
            for o in ORIGINS:
                body = body.replace(o + '/', LIVE + '/').replace(o + '\\"', LIVE + '\\"')
        if do_robots:
            body = ROBOTS_FLIGHT_RAW.sub(lambda _: ROBOTS_FLIGHT_NEW, body)
        return m.group(1) + body + m.group(4)
    return FLIGHT_RE.sub(fix, doc)


def to_live(s):
    for o in ORIGINS:
        s = s.replace(o + '/', LIVE + '/').replace(o + '"', LIVE + '"')
    return s


def head_inject(routes_json, is404, route):
    debug = '/404-debug.bin' if is404 else route + 'interim-debug.bin'
    parts = [
        '<script>window.__INTERIM_DEBUG__=' + json.dumps(debug) + ';</script>',
        '<meta name="robots" content="' + ROBOTS + '">',
        # Verbindungen nur zum eigenen Ursprung: keine Fehlerberichte an Sentry o. ae., auch vor dem Service Worker
        '<meta http-equiv="Content-Security-Policy" content="connect-src \'self\' blob: data:">',
        '<link rel="stylesheet" href="/interim.css">',
        '<script src="/interim-boot.js"></script>',
    ]
    if is404:
        parts.insert(0, '<script>window.__INTERIM_ROUTES__=' + routes_json + ';</script>')
    return ''.join(parts)


def rewrite(doc, route, routes_json, warnings):
    is404 = route == NOTFOUND
    # 1. Bildoptimierer -> Originalbild (nur Markup; Flight enthaelt keine Optimierer-URLs,
    #    clientseitig gemountete Bilder biegen interim-boot.js und der Service Worker um)
    doc = outside_scripts(doc, lambda s: NEXT_IMG.sub(rewrite_next_img, s))
    # 2. absolute Quell-URLs (canonical, hreflang, og, twitter, JSON-LD) -> LIVE
    doc = rewrite_flight(doc, route, warnings)
    # 2b. nie indexieren (Ersatzseite); vorhandene robots-Angaben angleichen, eigene vorn im head
    doc = outside_scripts(doc, lambda s: re.sub(r'(<meta name="robots" content=")[^"]*(")', r'\g<1>' + ROBOTS + r'\g<2>', s))
    doc = re.sub(r'<link[^>]*rel="(?:canonical|alternate)"[^>]*>', lambda m: to_live(m.group(0)), doc)
    doc = re.sub(r'<meta[^>]*>', lambda m: to_live(m.group(0)), doc)
    doc = re.sub(r'<script[^>]*application/ld\+json[^>]*>.*?</script>', lambda m: to_live(m.group(0)), doc, flags=re.S)
    # 3. Interim-Zusaetze an den Anfang von <head> (React 19 ueberspringt fremde Knoten im head)
    m = re.search(r'<head[^>]*>', doc)
    if not m:
        raise RuntimeError(f'{route}: kein <head>')
    doc = doc[:m.end()] + head_inject(routes_json, is404, route) + doc[m.end():]
    doc = doc.replace('</body>', '<script src="/interim.js" defer></script></body>', 1)
    return doc


# --- assemble: Assets ----------------------------------------------------------
LOCAL_PREFIXES = ('/_next/static/', '/__nextjs_font/', '/IH/', '/images/', '/team/', '/api/cms/media/',
                  '/videos/', '/favicon', '/brands/', '/fonts/', '/icons/', '/logos/', '/files/', '/downloads/')
ATTR_RE = re.compile(r'(?:src|href|poster|srcSet|srcset|imageSrcSet|imagesrcset|content|data-src)="([^"]+)"')
CSS_URL = re.compile(r'url\(\s*(?:&quot;|["\'])?([^)"\'&]+?)(?:&quot;|["\'])?\s*\)')
JS_REF = re.compile(r'(?:/_next/)?static/(?:chunks|media)/[A-Za-z0-9_.%\-\[\]@~+]+\.(?:js|css|woff2?|ttf|otf|svg|png|jpe?g|webp|avif|gif|wasm|json|glb|hdr|ktx2|mp4|webm)')
FILE_EXT = re.compile(r'\.[A-Za-z0-9]{2,5}$')


def local_asset(u, static_paths):
    """Liefert den Dateipfad (ohne Query) oder None."""
    u = html.unescape(u).strip()
    if not u.startswith('/') or u.startswith('//'):
        return None
    m = NEXT_IMG.match(u)
    if m:
        t = next_img_target(m.group(1))
        return t.split('?')[0].split('#')[0] if t.startswith('/') and not t.startswith('//') else None
    path = u.split('#')[0].split('?')[0]
    if path in ('/interim.js', '/interim.css', '/interim-boot.js', '/interim-sw.js'):
        return None
    if path.startswith('/api/') and not path.startswith('/api/cms/media/'):
        return None
    if norm(path) in static_paths and not FILE_EXT.search(path):
        return None
    if path.endswith('/'):
        return None
    if path.startswith(LOCAL_PREFIXES) or FILE_EXT.search(path):
        return path
    return None


def refs_in_html(doc, static_paths):
    refs = set()
    for m in ATTR_RE.finditer(doc):
        for part in html.unescape(m.group(1)).split(','):
            a = local_asset(part.strip().split(' ')[0], static_paths)
            if a:
                refs.add(a)
    for m in CSS_URL.finditer(doc):
        a = local_asset(m.group(1), static_paths)
        if a:
            refs.add(a)
    # Chunk-/Medienverweise in Flight-Daten und Inline-Skripten
    for m in JS_REF.finditer(doc):
        p = m.group(0)
        refs.add(p if p.startswith('/') else '/_next/' + p)
    return refs


def disk_path(out, url_path):
    return os.path.join(out, urllib.parse.unquote(url_path).lstrip('/'))


def cmd_assemble(html_dir, urls_file, out):
    routes = []
    for root, _, files in os.walk(html_dir):
        if 'index.html' in files:
            rel = os.path.relpath(root, html_dir)
            routes.append('/' if rel == '.' else '/' + rel.replace(os.sep, '/') + '/')
    routes.sort()
    pages_routes = [r for r in routes if r != NOTFOUND]
    static_paths = set(pages_routes)
    routes_json = json.dumps(pages_routes, separators=(',', ':'))
    log(f'{len(pages_routes)} Seiten + 404')

    if os.path.isdir(out):
        shutil.rmtree(out)
    os.makedirs(out)

    def write(rel, data):
        fp = disk_path(out, rel)
        os.makedirs(os.path.dirname(fp), exist_ok=True)
        with open(fp, 'wb') as f:
            f.write(data)

    warnings, todo = [], set()
    for r in routes:
        doc = open(html_file(html_dir, r), encoding='utf-8').read()
        todo |= refs_in_html(doc, static_paths)
        new = rewrite(doc, r, routes_json, warnings)
        todo |= refs_in_html(new, static_paths)
        write('/404.html' if r == NOTFOUND else (r + 'index.html'), new.encode('utf-8'))
        dbg = os.path.join(os.path.dirname(html_file(html_dir, r)), 'debug.bin')
        write('/404-debug.bin' if r == NOTFOUND else (r + 'interim-debug.bin'), open(dbg, 'rb').read() if os.path.exists(dbg) else b'')
    for w in warnings:
        log('  WARNUNG', w)

    # zur Laufzeit im Browser angefragte URLs
    for line in open(urls_file).read().split('\n'):
        a = local_asset(line, static_paths) if line else None
        if a:
            todo.add(a)

    # Interim-Dateien
    write('/.nojekyll', b'')
    for f in ('interim.js', 'interim.css', 'interim-boot.js'):
        shutil.copy(os.path.join(TOOLS, f), os.path.join(out, f))
    sw = open(os.path.join(TOOLS, 'interim-sw.js'), encoding='utf-8').read()
    write('/interim-sw.js', sw.replace('__ROUTES__', routes_json).replace('__LIVE__', LIVE).encode('utf-8'))
    # Ersatzseite nie indexieren: robots.txt sperrt alles (ohne Sitemap-Zeile)
    write('/robots.txt', b'User-agent: *\nDisallow: /\n')
    st, b, _ = fetch('/sitemap.xml')
    if st == 200:
        write('/sitemap.xml', to_live(b.decode()).encode())

    # herunterladen, CSS/JS/Manifest rekursiv nach weiteren Verweisen durchsuchen
    done, missing = set(), []
    while todo:
        batch = sorted(todo - done)
        todo = set()

        def dl(u):
            return (u,) + fetch(urllib.parse.quote(urllib.parse.unquote(u), safe="/:@!$'()*+;=-._~,[]"))[:2]
        with ThreadPoolExecutor(8) as ex:
            for u, st, b in ex.map(dl, batch):
                done.add(u)
                if st != 200:
                    missing.append((u, st))
                    continue
                write(u, b)
                if u.endswith(('.css', '.webmanifest', '.js', '.json')):
                    txt = b.decode('utf-8', 'replace')
                    found = []
                    if u.endswith('.css'):
                        found += [urllib.parse.urljoin(u, x) for x in CSS_URL.findall(txt) if not x.startswith(('data:', '#'))]
                    if u.endswith(('.webmanifest', '.json')):
                        found += [urllib.parse.urljoin(u, x) for x in re.findall(r'"src"\s*:\s*"([^"]+)"', txt)]
                    if u.endswith(('.js', '.css')):
                        found += [x if x.startswith('/') else '/_next/' + x for x in JS_REF.findall(txt)]
                    for x in found:
                        a = local_asset(x, static_paths)
                        if a and a not in done:
                            todo.add(a)
    log(f'{len(done)} Dateien geladen, {len(missing)} nicht ladbar')
    for u, st in sorted(missing):
        log(f'  NICHT LADBAR {st} {u}')


# --- check: jede lokale Referenz hat eine Datei ---------------------------------
def cmd_check(out):
    routes = set()
    for root, _, files in os.walk(out):
        if 'index.html' in files:
            rel = os.path.relpath(root, out)
            routes.add('/' if rel == '.' else '/' + rel.replace(os.sep, '/') + '/')
    missing = {}
    for root, _, files in os.walk(out):
        for f in files:
            if not f.endswith(('.html', '.css', '.js', '.webmanifest')):
                continue
            fp = os.path.join(root, f)
            txt = open(fp, encoding='utf-8', errors='replace').read()
            if f.endswith('.html'):
                refs = refs_in_html(txt, routes)
            elif f.endswith('.css'):
                rel = '/' + os.path.relpath(fp, out).replace(os.sep, '/')
                refs = {local_asset(urllib.parse.urljoin(rel, x), routes) for x in CSS_URL.findall(txt) if not x.startswith(('data:', '#'))}
            elif f.endswith('.webmanifest'):
                refs = {local_asset(x, routes) for x in re.findall(r'"src"\s*:\s*"([^"]+)"', txt)}
            else:
                refs = {x if x.startswith('/') else '/_next/' + x for x in JS_REF.findall(txt)}
            for r in refs:
                if r and r.endswith('.map'):
                    continue
                if r and not os.path.exists(disk_path(out, r)):
                    missing.setdefault(r, set()).add(os.path.relpath(fp, out))
    # Seitenlinks innerhalb des Spiegels
    log(f'Pruefung: {len(missing)} Verweise ohne Datei')
    for r, src in sorted(missing.items()):
        log(f'  OHNE DATEI {r}  (in {len(src)} Datei(en), z. B. {sorted(src)[0]})')


if __name__ == '__main__':
    mode = sys.argv[1]
    if mode == 'routes':
        cmd_routes()
    elif mode == 'assemble':
        cmd_assemble(sys.argv[2], sys.argv[3], sys.argv[4])
    elif mode == 'check':
        cmd_check(sys.argv[2])
    else:
        sys.exit('unbekannter Modus ' + mode)
