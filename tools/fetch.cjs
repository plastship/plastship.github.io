// Holt das Server-HTML jeder Route per HTTP (ohne Cookies, Accept: text/html), so wie der
// Server es ausliefert, und dazu die React-Debug-Daten der Anfrage. Der Entwicklungsserver
// schickt sie nicht im HTML, sondern ueber die HMR-Verbindung (/_next/hmr?id=<__next_r>);
// ohne sie hydriert React nicht. interim-boot.js spielt sie im Browser wieder ein.
//   node fetch.cjs <routes.txt> <ausgabe> [SOURCE]
// Ausgabe je Route: <ausgabe>/<route>/index.html und <ausgabe>/<route>/debug.bin
const fs = require('fs'), path = require('path');
const [,, routesFile, outDir, base = 'http://localhost'] = process.argv;
const NOTFOUND = '/diese-seite-gibt-es-nicht-interim/';
const routes = fs.readFileSync(routesFile, 'utf8').split('\n').filter(Boolean);
const PAR = Math.max(1, Number(process.env.PAR || 2));
const sleep = ms => new Promise(r => setTimeout(r, ms));

function debugChunks(id) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(base.replace(/^http/, 'ws') + '/_next/hmr?id=' + encodeURIComponent(id));
    ws.binaryType = 'arraybuffer';
    const parts = [];
    const timer = setTimeout(() => { try { ws.close(); } catch {} reject(new Error('Debug-Daten unvollstaendig (Zeitlimit)')); }, 60000);
    ws.onmessage = ev => {
      if (!(ev.data instanceof ArrayBuffer)) return;
      const b = Buffer.from(ev.data);
      if (b[0] !== 0) return;                          // nur REACT_DEBUG_CHUNK
      const len = b[1];
      if (b.subarray(2, 2 + len).toString() !== id) return;
      if (b.length > 2 + len) { parts.push(b.subarray(2 + len)); return; }
      clearTimeout(timer); try { ws.close(); } catch {}
      resolve(Buffer.concat(parts));                   // leerer Rest = Ende
    };
    ws.onerror = e => { clearTimeout(timer); reject(new Error('WebSocket: ' + (e.message || 'Fehler'))); };
  });
}

// Konsolen-Mitschnitte des Servers (Zeilen ":W[...]", z. B. Datenbankabfragen) gehoeren
// nicht ins Paket: React spielt sie sonst in der Browser-Konsole ab. Zeilen mit
// Laengenpraefix (T und Binaertypen) werden unveraendert uebersprungen.
function dropConsoleRows(buf) {
  const out = [];
  let i = 0;
  while (i < buf.length) {
    let j = i;
    while (j < buf.length && /[0-9a-f]/.test(String.fromCharCode(buf[j]))) j++;
    let end;
    if (buf[j] === 0x3a) {
      const tag = String.fromCharCode(buf[j + 1]);
      let k = j + 2;
      while (k < buf.length && /[0-9a-f]/.test(String.fromCharCode(buf[k]))) k++;
      if ('TAOoUSsLlGgMmVb'.includes(tag) && k > j + 2 && buf[k] === 0x2c) {
        end = k + 1 + parseInt(buf.subarray(j + 2, k).toString(), 16);
      } else {
        const nl = buf.indexOf(0x0a, j);
        end = nl < 0 ? buf.length : nl + 1;
      }
      if (!(tag === 'W' && j === i)) out.push(buf.subarray(i, end));
    } else {
      const nl = buf.indexOf(0x0a, i);
      end = nl < 0 ? buf.length : nl + 1;
      out.push(buf.subarray(i, end));
    }
    i = end;
  }
  return Buffer.concat(out);
}

async function one(r) {
  for (let t = 1; t <= 5; t++) {
    try {
      const res = await fetch(base + r, { headers: { Accept: 'text/html', 'User-Agent': 'plastship-interim-mirror' }, redirect: 'manual' });
      const want = r === NOTFOUND ? 404 : 200;
      if (res.status >= 500) throw new Error('HTTP ' + res.status);
      if (res.status !== want) return `HTTP ${res.status}`;
      const html = await res.text();
      const m = html.match(/self\.__next_r="([^"]+)"/);
      const debug = m ? dropConsoleRows(await debugChunks(m[1])) : Buffer.alloc(0);
      const dir = path.join(outDir, r);
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(path.join(dir, 'index.html'), html);
      fs.writeFileSync(path.join(dir, 'debug.bin'), debug);
      return null;
    } catch (e) {
      if (t === 5) return e.message;
      console.log(`  ${r}: ${e.message}, warte 30 s (${t}/5)`);
      await sleep(30000);
    }
  }
}

(async () => {
  fs.rmSync(outDir, { recursive: true, force: true });
  let i = 0; const bad = [];
  await Promise.all(Array.from({ length: PAR * 2 }, async () => {
    while (i < routes.length) { const r = routes[i++]; const err = await one(r); if (err) bad.push(`${r}: ${err}`); }
  }));
  console.log(`${routes.length - bad.length}/${routes.length} Seiten geholt (HTML + Debug-Daten)`);
  bad.forEach(b => console.log('  FEHLER ' + b));
  process.exit(bad.length ? 1 : 0);
})();
