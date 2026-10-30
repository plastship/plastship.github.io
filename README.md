# plastship Interim-Seite (statischer Spiegel für GitHub Pages)

Statische Kopie des öffentlichen, ausgeloggten Bereichs von plastship.com. Gedacht als
Ausweichseite, falls der Live-Server ausfällt. Erzeugt aus der lokal laufenden App
(`http://localhost`, Stand dev).

## Inhalt

```
interim-docs/
├── docs/               fertiges Paket – dieser Inhalt kommt ins Pages-Repo
├── interim-site.zip    dasselbe gepackt (Ordner docs/)
├── build.sh            erzeugt docs/ und die ZIP neu
├── tools/              build.py, snapshot.cjs, interim.js/.css, Testskripte
└── shots/              Screenshots vom lokalen Test
```

### Seiten (202 + 404)

Genau die Routen aus `/sitemap.xml` (die App nimmt dort alle öffentlichen Seiten auf),
jeweils Deutsch ohne Präfix und Englisch unter `/en/`:

- Startseite `/`, `/en/`
- Inhaltsseiten: `/services/`, `/news/`, `/design-for-recycling/`, `/about/`, `/accessibility/`,
  `/agb/`, `/benchmark/`, `/contact-us/`, `/email-disclaimer/`, `/end-to-end-supply/`, `/faq/`,
  `/imprint/`, `/industry-survey/`, `/laboratory-services/`, `/material-quality/`,
  `/material-search/`, `/monitored-material-system/`, `/partners/`, `/privacy/`, `/procurement/`,
  `/recyclate-performance/`, `/recycler-circle/`, `/story/`, `/strategy-mix/`, `/team/`,
  `/top-recyclates/`, `/waste-disposal/`, `/whitepaper/`
- 46 News-Artikel `/news/<slug>/` und 7 Kategorien `/news/category/<slug>/`
- 6 Partnerseiten `/partners/<partner>/` und 13 Produktseiten `/partners/<partner>/<produkt>/`
- alles davon auch unter `/en/…`
- `404.html` (die Nicht-gefunden-Seite der App; GitHub Pages zeigt sie für jeden unbekannten Pfad)
- `robots.txt`, `sitemap.xml` (URLs auf https://plastship.com), `.nojekyll`

## Wie die Seiten entstehen

Jede Route wird in einem Headless-Chromium (Playwright) ohne Cookies geöffnet, einmal
durchgescrollt und das fertig gerenderte DOM gespeichert. Danach (tools/build.py):

1. **Alles Next-/React-JavaScript entfernt.** Die Seiten sind reines HTML + CSS. Dadurch gibt
   es keine RSC-Abrufe (`?_rsc=`), keine Client-Navigation, kein Sentry, keine Nutzungsmessung,
   keinen Cookie-Banner-Endpunkt – jeder Klick ist eine normale Seitennavigation.
   JSON-LD (strukturierte Daten) bleibt.
2. **`/_next/image?url=…`** durch das Originalbild ersetzt (src, srcset, Preloads); die
   Originale liegen mit im Paket (`/IH/`, `/images/`, `/team/`, `/api/cms/media/…`).
3. **Links auf nicht gespiegelte Pfade** (`/login/`, `/map/`, alles Geschützte) zeigen absolut auf
   `https://plastship.com/…` und funktionieren, sobald der Live-Server zurück ist.
   canonical, hreflang, og:* und JSON-LD zeigen ebenfalls auf https://plastship.com.
4. **Alle referenzierten Dateien** (CSS, Fonts, Bilder, Favicons, Manifest) werden nachgeladen,
   auch `url()` aus den CSS-Dateien. Der Lauf meldet jede fehlende Datei.
5. Ein kleines Skript `interim.js` + `interim.css` ersetzt das Nötigste an Interaktion.

### Entschärft bzw. ersetzt

| Teil | Interim-Verhalten |
| --- | --- |
| Kontaktformular (`/contact-us/`, POST an `/api/…`) | ersetzt durch Hinweis „vorübergehend nicht verfügbar“ mit `mailto:info@plastship.com` und `tel:+49 6126 5898010` (de/en). Kein Formular mehr, also kein 405 auf Pages. |
| Login-Button, Links in den geschützten Bereich, Karten-Link (`/map/`) | absolute Links auf https://plastship.com/… |
| Cookie-Banner, „Cookie-Einstellungen“ im Footer | entfernt – ohne Skripte setzt die Seite keine Cookies und misst nichts |
| Nutzungsmessung, Sentry, Web-Vitals | weg (kein App-JavaScript) |
| Hero-Slider der Startseite (WebGL) | erstes Bild statisch, Slider-Steuerung ausgeblendet |
| Hauptmenü (Flyouts) | öffnen per Hover, Tastaturfokus oder Klick auf den Pfeil (interim.js/.css) |
| Mobilmenü | einfache Linkliste aus der Desktop-Navigation, plus Sprache und Login |
| Sprachumschalter | funktioniert (normale Links auf `/` bzw. `/en/…`) |
| Hell/Dunkel-Schalter | ausgeblendet (nur helles Design) |

### Was nicht geht

- Login und alles dahinter (Links führen auf plastship.com)
- Kontaktformular, Umfrage- und Download-Formulare, jede Eingabe an den Server
- Suche/Filter, die Daten vom Server laden (z. B. auf `/material-search/` sind nur die
  gerenderten Inhalte da), Karten (`/map/`)
- Animationen und Effekte, die React/WebGL brauchen, stehen im Endzustand
- Andere Sprachen als de/en (öffentlich gibt es nur diese beiden)

## Auf GitHub Pages hochladen

Das Paket ist für eine **Wurzel-Site** gebaut: alle Pfade beginnen mit `/`. Das passt für
- eine User-/Org-Site (`<name>.github.io`, Repo heißt genau so), oder
- jede Pages-Site mit eigener Domain (z. B. `interim.plastship.com` oder im Notfall `plastship.com`).

### Schritte

1. Auf GitHub ein Repo anlegen (privat geht nur mit kostenpflichtigem Plan; für Pages aus einem
   Free-Account muss das Repo öffentlich sein – Inhalt ist ohnehin die öffentliche Website).
2. Inhalt von `docs/` (nicht den Ordner selbst) ins Wurzelverzeichnis legen:
   ```bash
   unzip interim-site.zip            # oder direkt docs/ nehmen
   cd docs
   git init -b main
   git add -A && git commit -m "Interim-Seite"
   git remote add origin git@github.com:<org>/<repo>.git
   git push -u origin main
   ```
   Alternativ Branch `gh-pages` statt `main`.
   Wichtig: `.nojekyll` muss mit (versteckte Datei), sonst ignoriert Pages den Ordner `_next/`.
3. Repo → Settings → Pages → „Deploy from a branch“, Branch `main` (bzw. `gh-pages`), Ordner `/ (root)`.
4. Nach 1–2 Minuten ist die Seite unter `https://<org>.github.io/` erreichbar.

### Eigene Domain (optional)

- Repo → Settings → Pages → „Custom domain“ eintragen (z. B. `interim.plastship.com`) und
  „Enforce HTTPS“ aktivieren, sobald das Zertifikat da ist.
- DNS (Cloudflare): für eine Subdomain `CNAME interim → <org>.github.io` (DNS-only, graue Wolke);
  für die Apex-Domain A-Records auf `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
  `185.199.111.153` (und AAAA `2606:50c0:8000::153` … `8003::153`).
- Eine `CNAME`-Datei ist **bewusst nicht** im Paket: GitHub legt sie beim Speichern der
  Custom Domain selbst an. Wer das Paket per Push neu hochlädt, nimmt sie vorher aus dem Repo
  mit (oder setzt die Domain danach erneut in den Einstellungen).

### Projekt-Site (`<name>.github.io/<repo>/`)

Dann liegt alles unter einem Unterpfad, und die wurzelrelativen Pfade zeigen ins Leere. Vor
dem Hochladen einen Basis-Pfad voranstellen (Beispiel `/plastship-interim`):

```bash
BASE=/plastship-interim
cd docs
find . -name '*.html' -o -name '*.css' -o -name '*.webmanifest' | while read -r f; do
  perl -pi -e 's#(href|src|action|poster|content)="/(?!/)#$1="'"$BASE"'/#g;
               s#(srcset|imagesrcset|imageSrcSet)="([^"]*)"#my($a,$v)=($1,$2); $v=~s{(^|,\s*)/(?!/)}{$1'"$BASE"'/}g; "$a=\"$v\""#ge;
               s#url\((["'"'"']?)/(?!/)#url($1'"$BASE"'/#g' "$f"
done
```

(`content="/…"` betrifft nur wenige Meta-Tags; absolute Links auf https://plastship.com
bleiben unverändert.) Einfacher ist meist eine eigene Domain.

## Neu erzeugen

```bash
cd ~/plastship/interim-site
./build.sh                        # Quelle http://localhost, ca. 10 Minuten
SOURCE=http://localhost:3110 ./build.sh   # andere Quelle
```

Voraussetzungen: die App läuft lokal (Docker-Container `plastship-nextjs-local`), python3,
node, zip, ein plastship-Checkout mit Playwright (`PLASTSHIP_REPO`, Vorgabe
`~/plastship/plastship`). Das Skript ist idempotent: `docs/` und die ZIP werden komplett neu
gebaut, Zwischenstände (`.work/`) danach gelöscht. Bei 502/503 der Quelle wartet es je 30 s,
höchstens 5 Versuche. `PAR=1 ./build.sh` rendert nur eine Seite gleichzeitig (schont den
Dev-Container).

Hinweis: Bewusst kein `wget --mirror`. wget sieht nur das Server-HTML; Teile wie die
Hero-Bilder rendert erst React im Browser, und `--convert-links` zerlegt `srcset` mit
`/_next/image`-URLs und macht die Pfade relativ. Darum Browser-Rendering + eigenes
Umschreiben.

Lokal ansehen: `python3 -m http.server 8099 --directory docs` und http://localhost:8099/ öffnen.

## Dieses Repo

GitHub Pages liefert den Ordner `docs/` aus (Settings → Pages → Branch `main`, Ordner `/docs`). `build.sh` erzeugt `docs/` neu; `shots/`, `.work/` und die ZIP bleiben lokal (.gitignore).
