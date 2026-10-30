#!/usr/bin/env bash
# Erzeugt docs/ und interim-site.zip neu aus der lokal laufenden App.
# Idempotent: .work/, docs/ und die ZIP werden jedes Mal komplett neu gebaut.
#
#   ./build.sh                       # Quelle http://localhost
#   SOURCE=http://localhost:3000 ./build.sh
#
# Voraussetzungen: python3, node, zip und ein plastship-Checkout mit
# installiertem Playwright (PLASTSHIP_REPO, Vorgabe ~/plastship/plastship).
set -euo pipefail
HERE="$(cd "$(dirname "$0")" && pwd)"
export SOURCE="${SOURCE:-http://localhost}"
export LIVE="${LIVE:-https://plastship.com}"
REPO="${PLASTSHIP_REPO:-$HOME/plastship/plastship}"
export PW_MODULE="$REPO/node_modules/playwright"
export PAR="${PAR:-2}"
WORK="$HERE/.work"

rm -rf "$WORK"
mkdir -p "$WORK/raw"

echo "1/4 Routen aus $SOURCE/sitemap.xml pruefen"
python3 -I "$HERE/tools/build.py" routes > "$WORK/routes.txt"
echo "    $(wc -l < "$WORK/routes.txt" | tr -d ' ') Routen (inkl. 404-Seite)"

echo "2/4 Seiten im Browser rendern (ohne Login, $PAR parallel)"
node "$HERE/tools/snapshot.cjs" "$WORK/routes.txt" "$WORK/raw" "$SOURCE"

echo "3/4 Paket zusammenbauen"
python3 -I "$HERE/tools/build.py" assemble "$WORK/raw" "$HERE/docs"

echo "4/4 ZIP"
rm -f "$HERE/interim-site.zip"
(cd "$HERE" && find docs -name .DS_Store -delete && zip -qr interim-site.zip docs -x '*.DS_Store')
rm -rf "$WORK"
du -sh "$HERE/docs" "$HERE/interim-site.zip"
