# plastship Interim-Seite (statisches Abbild für GitHub Pages)

Statisches 1:1-Abbild des öffentlichen, ausgeloggten Bereichs von plastship.com, **mit CSS und
JavaScript**: React hydriert im Browser wie auf der echten Seite. Waben-Hero-Slider (WebGL),
Imagefilm-Animation, Menü-Flyouts, Mobilmenü, Hell/Dunkel-Schalter, Sprachumschalter und alle
Animationen laufen. Es fehlt nur, was einen Server braucht (Login, Formulare, Messung).

Gedacht als Ausweichseite unter der eigenen Domain **plastship.com** (GitHub Pages mit Custom
Domain), falls der Live-Server ausfällt. Darum behält das Paket alle SEO-Angaben der Quelle. Erzeugt aus einer lokal laufenden
App: bevorzugt ein Produktions-Build (`next start`, z. B. `http://localhost:3110`), notfalls der
Entwicklungsserver (`http://localhost`).

## Inhalt

```
interim-site/
├── docs/               fertiges Paket – das liefert GitHub Pages aus
├── build.sh            erzeugt docs/ (und interim-site.zip) neu
├── tools/
│   ├── build.py        Routen, Umschreiben, Assets laden, Prüfung
│   ├── fetch.cjs       Server-HTML + React-Debug-Daten je Route
│   ├── crawl.cjs       öffnet jede Route im Browser, protokolliert nachgeladene Dateien
│   ├── test.cjs        Browser-Test gegen das fertige Paket
│   ├── interim-boot.js läuft vor den Next-Skripten (HMR-Platzhalter, Bild-URLs, SW-Registrierung)
│   ├── interim-sw.js   Service Worker (Vorlage, Routenliste wird beim Bauen eingesetzt)
│   ├── interim.css     blendet Login, Cookie-Banner, Captcha aus
│   └── interim.js      Kontaktformular: Absenden öffnet eine vorbefüllte E-Mail
└── shots/              Screenshots vom Test (nicht im Repo)
```

### Seiten

Genau die Routen aus `/sitemap.xml` (alle öffentlichen Seiten), Deutsch ohne Präfix und
Englisch unter `/en/`, jeweils als `<route>/index.html` (die App nutzt Schrägstriche am Ende):
Startseite, Inhaltsseiten, News-Artikel und -Kategorien, Partner- und Produktseiten. Dazu
`404.html` (die Nicht-gefunden-Seite der App; Pages liefert sie mit Status 404), `robots.txt`
und `sitemap.xml` (von der Quelle, absolute https://plastship.com-URLs, nur gespiegelte Seiten),
`.nojekyll`.

## Wie das Paket entsteht

1. **Routen** aus `/sitemap.xml`; jede wird ohne Cookies abgefragt, was auf `/login/`
   umleitet oder nicht 200 liefert, fällt raus.
2. **Server-HTML** jeder Route per HTTP ohne Cookies (`Accept: text/html`), genau so, wie der
   Server es ausliefert: mit dem inline CSS von styled-components und den
   `self.__next_f`-Flight-Skripten. Dadurch hydriert React im Browser.
3. **React-Debug-Daten (nur bei Entwicklungsserver als Quelle):** Läuft die Quelle mit
   `next dev`, schickt sie einen Teil der Flight-Daten (Debug-Infos) nicht im HTML,
   sondern über die HMR-Verbindung `/_next/hmr?id=<__next_r>`; ohne sie hydriert React nicht.
   `fetch.cjs` liest sie direkt nach dem HTML über diese Verbindung mit und legt sie als
   `<route>/interim-debug.bin` ab (404: `/404-debug.bin`). Konsolen-Mitschnitte des Servers
   (Zeilen `:W[…]`, z. B. Datenbankabfragen) werden dabei entfernt. Bei einer
   Produktionsquelle (kein `self.__next_r` im HTML) entfällt der Schritt automatisch: keine
   `.bin`-Dateien, kein Pfad im HTML; der Platzhalter in `interim-boot.js` wird nie aktiv.
4. **Browser-Durchlauf:** `crawl.cjs` öffnet jede Route in Chromium (Desktop 1440 px und
   mobil 390 px), scrollt durch, öffnet Menüs, Sprachwahl, Theme-Schalter bzw. Mobilmenü und
   klickt jede Slider-Folie einmal an und protokolliert jede angefragte Datei (dynamisch
   nachgeladene Chunks für Slider, WebGL, Imagefilm, Formulare usw.).
5. **Zusammenbau** (`build.py assemble`): Vereinigung aus HTML-Verweisen, Dateipfaden in den
   Flight-Daten (z. B. alle Folienbilder des Hero-Sliders, auch die erst beim Wechsel geladenen),
   Browser-Protokoll, `url()` in CSS und Chunk-Verweisen in JS herunterladen, unter demselben Pfad ablegen.
   Danach prüft `build.py check`, dass jede lokale Referenz in HTML/CSS/JS/Manifest eine Datei
   hat, und meldet den Rest.

### Was beim Umschreiben passiert

| Stelle | Änderung |
| --- | --- |
| `<head>` (ganz vorn) | nur mit `NOINDEX=1`: `<meta name="robots" content="noindex, nofollow">`; immer: CSP-Meta `connect-src 'self' blob: data:`, `/interim.css`, `/interim-boot.js` (synchron, vor den Next-Skripten), bei Entwicklungsquelle der Pfad der Debug-Daten. React 19 überspringt fremde Knoten im `<head>`. |
| `/_next/image?url=X&w=…` in `src`, `srcset`, `imageSrcSet` (nur Markup, nicht in Skripten) | → Originaldatei `X` (liegt im Paket). Die Flight-Daten enthalten keine Optimierer-URLs. |
| canonical, hreflang, og:*, twitter:*, JSON-LD, Flight-Daten | Quell-Origin (`SOURCE`, z. B. `http://localhost:3110`, und `http://localhost`) → `https://plastship.com` (Flight nur, wo kein Längenpräfix betroffen ist; der Lauf warnt sonst) |
| vorhandene `robots`-Metas (Markup und Flight) | unverändert; nur mit `NOINDEX=1` → `noindex, nofollow` |
| `</body>` | `/interim.js` (defer) |

Nichts wird aus dem DOM gelöscht – sonst gäbe es Hydration-Fehler. Was weg soll, blendet
`interim.css` aus.

### Was das Paket bewusst tut

- **SEO wie die Quelle:** Das Paket läuft unter plastship.com und darf nicht aus dem Index
  fallen. Titel, Meta-Description, robots-Meta, JSON-LD, canonical, hreflang und og:url bleiben
  wie in der Quelle (absolute URLs auf https://plastship.com). `robots.txt` und `sitemap.xml`
  kommen von der Quelle (Sitemap nur mit gespiegelten URLs). `build.py` prüft das für jede Seite
  gegen das Server-HTML (Titel, Description, JSON-LD gleich; canonical/hreflang auf
  plastship.com; kein noindex; keine Reste des Next-Entwicklungs-Overlays; kein localhost im
  `<head>`) und bricht bei Abweichungen ab. `404.html` bleibt eine echte 404 (Pages-Status 404).
- **`NOINDEX=1`** (Build-Schalter, Standard aus): nur für eine Auslieferung ohne eigene Domain
  (z. B. `plastship.github.io`). Dann trägt jede Seite `noindex, nofollow` und `robots.txt`
  sperrt alles.
- **`docs/CNAME`:** legt GitHub für die eigene Domain an. `build.sh` erhält die Datei, falls sie
  da ist, und überschreibt sie nie.
- **Kein Login:** Header-Login (`header-login`) und Login im Mobilmenü
  (`mobile-menu-item-login`) sind per CSS ausgeblendet. Links auf `/login/` und andere nicht
  gespiegelte Pfade leitet der Service Worker auf https://plastship.com weiter.
- **Kein Cookie-Banner, keine Cookie-Einstellungen** im Footer (ausgeblendet): Das Interim
  misst nichts.
- **Kontaktformular → E-Mail:** Das Formular bleibt 1:1 sichtbar und ausfüllbar, mit
  „Anfrage senden“. `interim.js` fängt das Absenden ab, bevor React es sieht (kein Request an
  `/api`, keine Erfolgs- oder Fehlermeldung der App), prüft Pflichtfelder und E-Mail-Format
  (HTML-Constraints, auch bei `noValidate`) und öffnet
  `mailto:info@plastship.com?subject=Kontaktanfrage plastship.com: <Anliegen>&body=…` (en:
  „Contact request plastship.com: …“). Der Text enthält alle Felder zeilenweise mit den Labels
  aus dem Formular (Name, Firma, E-Mail, Telefon, Anliegen, Nachricht; `%0D%0A`). Darunter
  erscheint „Ihr E-Mail-Programm öffnet sich mit der Anfrage. Falls nicht: info@plastship.com“.
  Felder per `data-field`/`data-testid`, nicht über Texte. Das Captcha (altcha) braucht den
  Server und ist ausgeblendet. Andere öffentliche Formulare (Umfrage, Whitepaper, Newsletter)
  gibt es derzeit nicht; der Selektor in `interim.js` wäre dort zu erweitern.
- **Keine Fehlerberichte:** Sentry ist doppelt gesperrt (CSP-Meta `connect-src 'self'` auch
  beim ersten Aufruf, Service Worker antwortet 204).
- **Entwicklungs-Overlay von Next** (`nextjs-portal`) ist ausgeblendet.

### `interim-boot.js`

Läuft synchron als erstes Skript jeder Seite:

1. **HMR-Platzhalter (nur Entwicklungsquelle):** ersetzt die WebSocket-Verbindung zu `/_next/hmr` durch einen
   Platzhalter, der „verbunden“ meldet, die aufgezeichneten Debug-Daten einspielt und dann das
   Ende-Signal sendet. Kein Reconnect, kein Neuladen, keine Fehlermeldungen in der Konsole.
2. **Bild-URLs:** setzt React oder WebGL zur Laufzeit `/_next/image?url=X…` (z. B. Texturen des
   Hero-Sliders), wird daraus `X` – auch beim allerersten Aufruf, bevor der Service Worker greift.
3. registriert den **Service Worker**.
4. nur `404.html`: Pfade außerhalb des Spiegels → Weiterleitung auf https://plastship.com.

### Service Worker (`/interim-sw.js`)

| Anfrage | Antwort |
| --- | --- |
| `/_next/image?url=X…` | Datei `X` (gleicher Ursprung) bzw. Redirect (fremder Ursprung) |
| `/api/contact*` (Kontakt-Token, Kontaktanfrage) | `503` – kein vorgetäuschter Erfolg; das Formular sendet ohnehin nicht ab |
| übrige `/api/*` außer `/api/cms/media/` | GET/HEAD: `200 {}`; sonst `204` (Nutzungsmessung, Session, Web-Vitals) |
| `*.sentry.io` | `204` |
| `/__nextjs*` (außer Schriften) | `204` (Entwicklungs-Endpunkte) |
| Seitenaufruf auf nicht gespiegelten Pfad (`/login/`, `/map/`, geschützte Seiten) | Redirect auf `https://plastship.com<pfad>` |
| `?_rsc=` (Client-Navigation) | unberührt: statt RSC-Daten kommt HTML, der Next-Router fällt auf eine normale Seitennavigation zurück (getestet) |

Unter `plastship.com`/`www.plastship.com` selbst (der vorgesehene Betrieb) leiten weder Service
Worker noch `404.html` weiter, sonst entstünde eine Schleife; nicht gespiegelte Pfade (`/login/`
usw.) zeigen dann die 404-Seite. Die Weiterleitung greift nur unter einer anderen Domain.

### Was nicht geht

- Login und alles dahinter (Weiterleitung auf plastship.com)
- Alles, was Daten an den Server schickt (das Kontaktformular weicht auf E-Mail aus);
  Suche/Filter, die Server-Daten nachladen; Karten (`/map/`)
- Sprachen außer de/en (öffentlich gibt es nur diese beiden)
- Erster Aufruf ohne JavaScript: Inhalte sind vollständig da (Server-HTML), Interaktion nicht

### Bekannte Konsolenmeldungen (harmlos)

- „A tree hydrated but some attributes … didn't match“ (nur im Entwicklungs-React sichtbar): die
  umgeschriebenen Bild-URLs (Markup zeigt das Original, React erwartet `/_next/image…`). Wird
  nicht „repariert“, die Bilder bleiben korrekt.
- `503` auf `/api/contact-requests/token/` auf den Kontaktseiten: gewollt (siehe Service Worker).
- Bei Entwicklungsquelle zusätzlich Chunk-Preloads mit 404, die schon die Quelle mit 404 beantwortet.

## Auf GitHub Pages hochladen

Das Paket ist für eine **Wurzel-Site** gebaut: alle Pfade beginnen mit `/`, der Service Worker
hat den Scope `/`. Das passt für
- eine User-/Org-Site (`<name>.github.io`, Repo heißt genau so), oder
- jede Pages-Site mit eigener Domain (z. B. `interim.plastship.com`).

Dieses Repo: Settings → Pages → „Deploy from a branch“, Branch `main`, Ordner `/docs`.
`.nojekyll` liegt in `docs/` (sonst ignoriert Pages `_next/`).

### Eigene Domain (optional)

- Repo → Settings → Pages → „Custom domain“ eintragen und „Enforce HTTPS“ aktivieren, sobald
  das Zertifikat da ist. Service Worker brauchen HTTPS (oder localhost).
- DNS (Cloudflare): Subdomain `CNAME interim → <org>.github.io` (DNS-only, graue Wolke); Apex
  A-Records `185.199.108.153`, `.109.153`, `.110.153`, `.111.153` (AAAA `2606:50c0:8000::153` …
  `8003::153`).
- Eine `CNAME`-Datei erzeugt der Build nicht: GitHub legt sie beim Speichern der Custom Domain
  selbst an. `build.sh` lässt eine vorhandene `docs/CNAME` unangetastet.
- Mit Custom Domain leitet GitHub `plastship.github.io` selbst per 301 auf plastship.com um.

### Projekt-Site (`<name>.github.io/<repo>/`)

Geht mit diesem Paket nicht ohne Weiteres: Next lädt Chunks über absolute Pfade
(`/_next/…`, auch aus JavaScript heraus), der Service Worker braucht den Scope `/`. Ein
Basis-Pfad müsste beim Bauen der App (`basePath`) gesetzt werden. Darum: Wurzel-Site oder
eigene Domain.

## Neu erzeugen

```bash
cd ~/plastship/interim-site
./build.sh                                  # Quelle http://localhost
SOURCE=http://localhost:3110 PAR=3 ./build.sh   # Produktions-Build als Quelle (empfohlen)
```

- `SOURCE`: Quelle (Vorgabe `http://localhost`); `LIVE`: Ziel der absoluten URLs (Vorgabe
  `https://plastship.com`); `PAR`: parallele Browser-Seiten (Vorgabe 2; HTML-Abruf mit
  doppelt so vielen); `PLASTSHIP_REPO`: Checkout mit Playwright (Vorgabe `~/plastship/plastship`).
- Voraussetzungen: App läuft lokal (`next start` oder Container `plastship-nextjs-local`), python3, node ≥ 22
  (eingebautes `WebSocket`), zip.
- `NOINDEX=1`: siehe oben. `ALLOW_MISSING=1`: fehlende Dateien nur melden statt abbrechen
  (bei einer Entwicklungsquelle nötig, deren Preload-Chunks teils schon an der Quelle 404 sind).
- Idempotent: `docs/` (außer `CNAME`) und die ZIP werden komplett neu gebaut, `.work/` danach
  gelöscht. Bei
  502/503 der Quelle je 30 s warten, höchstens 5 Versuche.
- HTML, Debug-Daten und Chunks müssen aus **demselben Stand** des Entwicklungsservers kommen.
  Während des Laufs nichts im plastship-Checkout ändern (jede Änderung kompiliert neu und
  benennt Chunks um). Der Lauf meldet am Ende jede Referenz ohne Datei.

Prüfen:

```bash
python3 -m http.server 8099 --directory docs &
node tools/test.cjs http://localhost:8099 http://localhost shots
```

Der Test prüft je Seite Konsole und Netzwerk (erster Aufruf und mit Service Worker),
Hero-Slider (Wechsel und alle Folien ohne fehlendes Bild), Imagefilm, Flyout, Login ausgeblendet, Klick auf Unterseite, Dark Mode,
Mobilmenü, Weiterleitung von `/login/`, Kontaktformular (ausfüllen, absenden → mailto, kein
API-Request) und vergleicht die
Seitenhöhen mit der Quelle. Screenshots landen in `shots/`.
