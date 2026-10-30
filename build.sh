#!/usr/bin/env bash
# Erzeugt docs/ (und interim-site.zip) neu aus der laufenden App. Idempotent: .work/,
# docs/ und die ZIP werden jedes Mal komplett neu gebaut (docs/CNAME bleibt erhalten).
#
#   ./build.sh                                # Quelle http://localhost
#   SOURCE=http://localhost:3110 PAR=3 ./build.sh   # Produktions-Build (empfohlen)
#   NOINDEX=1 ./build.sh                            # nur fuer plastship.github.io ohne eigene Domain
#
# Voraussetzungen: python3, node, zip und ein plastship-Checkout mit installiertem
# Playwright (PLASTSHIP_REPO, Vorgabe ~/plastship/plastship).
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
export SOURCE="${SOURCE:-http://localhost}"
export LIVE="${LIVE:-https://plastship.com}"
export PAR="${PAR:-2}"
export NOINDEX="${NOINDEX:-}"          # 1 = nicht indexierbar (nur ohne eigene Domain)
export ALLOW_MISSING="${ALLOW_MISSING:-}"  # 1 = fehlende Dateien nur melden (Entwicklungsquelle)
REPO="${PLASTSHIP_REPO:-$HOME/plastship/plastship}"
export PW_MODULE="$REPO/node_modules/playwright"
WORK="$HERE/.work"

rm -rf "$WORK"
mkdir -p "$WORK"

echo "1/5 Routen aus $SOURCE/sitemap.xml pruefen"
python3 -I "$HERE/tools/build.py" routes > "$WORK/routes.txt"
echo "    $(wc -l < "$WORK/routes.txt" | tr -d ' ') Routen (inkl. 404-Fuehler)"

echo "2/5 Server-HTML und React-Debug-Daten holen (ohne Cookies)"
node "$HERE/tools/fetch.cjs" "$WORK/routes.txt" "$WORK/html" "$SOURCE"

echo "3/5 Jede Route im Browser oeffnen und nachgeladene Dateien protokollieren ($PAR parallel)"
node "$HERE/tools/crawl.cjs" "$WORK/routes.txt" "$WORK/urls.txt" "$SOURCE"

echo "4/5 Paket zusammenbauen"
python3 -I "$HERE/tools/build.py" assemble "$WORK/html" "$WORK/urls.txt" "$HERE/docs"
find "$HERE/docs" -name .DS_Store -delete
python3 -I "$HERE/tools/build.py" check "$HERE/docs"

echo "5/5 ZIP"
rm -f "$HERE/interim-site.zip"
(cd "$HERE" && zip -qr interim-site.zip docs -x '*.DS_Store')
rm -rf "$WORK"
du -sh "$HERE/docs" "$HERE/interim-site.zip"
