// Oeffnet jede Route im Browser (ohne Cookies), scrollt durch, oeffnet Menues und
// protokolliert alle Anfragen an die Quelle. Ergebnis: eine URL je Zeile (Pfad + Query).
//   node crawl.cjs <routes.txt> <urls.txt> [SOURCE]
const fs = require('fs');
const { chromium } = require(process.env.PW_MODULE || '/Users/moritzlimbachplastship/plastship/plastship/node_modules/playwright');
const [,, routesFile, outFile, base = 'http://localhost'] = process.argv;
const routes = fs.readFileSync(routesFile, 'utf8').split('\n').filter(Boolean);
const PAR = Number(process.env.PAR || 2);
const origin = new URL(base).origin;
const urls = new Set(), foreign = new Set(), api = new Set();

function record(u) {
  let x;
  try { x = new URL(u); } catch { return; }
  if (x.origin !== origin) { if (/^https?:/.test(x.protocol)) foreign.add(x.origin + x.pathname); return; }
  if (x.searchParams.has('_rsc') || /\/_next\/(webpack-)?hmr/.test(x.pathname)) return;
  if (x.pathname.startsWith('/api/') && !x.pathname.startsWith('/api/cms/media/')) { api.add(x.pathname); return; }
  urls.add(x.pathname + x.search);
}

async function visit(page, r, mobile) {
  const resp = await page.goto(base + r, { waitUntil: 'load', timeout: 120000 });
  if (resp && resp.status() >= 500) throw new Error('HTTP ' + resp.status());
  await page.waitForTimeout(1500);
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 150)); }
    window.scrollTo(0, 0);
  });
  if (mobile) {
    const b = page.locator('[data-testid="mobile-menu-open"]');
    if (await b.count()) { await b.first().click().catch(() => {}); await page.waitForTimeout(800); }
  } else {
    // Slider: jede Folie einmal anklicken, damit ihre Bilder/Texturen geladen werden
    const dots = page.locator('[data-testid*="-pagination-item-"]');
    const nd = await dots.count();
    for (let k = 0; k < nd; k++) {
      await dots.nth(k).click({ timeout: 2000 }).catch(() => {});
      await page.waitForTimeout(700);
    }
    const toggles = page.locator('[data-testid^="header-public-nav-item-"][data-testid$="-toggle"]');
    const n = await toggles.count();
    for (let k = 0; k < n; k++) {
      await toggles.nth(k).hover().catch(() => {});
      await toggles.nth(k).click({ timeout: 2000 }).catch(() => {});
      await page.waitForTimeout(250);
    }
    await page.keyboard.press('Escape').catch(() => {});
    const lang = page.locator('[data-testid="header-language-switcher-trigger"]');
    if (await lang.count()) { await lang.first().click({ timeout: 2000 }).catch(() => {}); await page.waitForTimeout(250); }
    const theme = page.locator('[data-testid="header-theme-toggle"]');
    if (await theme.count()) {
      await theme.first().click({ timeout: 2000 }).catch(() => {});
      await page.waitForTimeout(600);
      await theme.first().click({ timeout: 2000 }).catch(() => {});
    }
  }
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
}

(async () => {
  const browser = await chromium.launch();
  let i = 0; const failed = [];
  // erst alle Routen am Desktop, danach je Route mobil (Mobilmenue, responsive Bilder)
  const jobs = routes.flatMap(r => [[r, false]]).concat(routes.map(r => [r, true]));
  async function worker() {
    while (i < jobs.length) {
      const [r, mobile] = jobs[i++];
      const ctx = await browser.newContext(mobile
        ? { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 3 }
        : { viewport: { width: 1440, height: 900 } });
      const page = await ctx.newPage();
      page.on('request', q => record(q.url()));
      let ok = false;
      for (let t = 0; t < 5 && !ok; t++) {
        try { await visit(page, r, mobile); ok = true; process.stdout.write(mobile ? ',' : '.'); }
        catch (e) { console.log(`\n${r}: ${e.message.split('\n')[0]} (Versuch ${t + 1}/5)`); await page.waitForTimeout(30000); }
      }
      if (!ok) failed.push(r);
      await ctx.close();
    }
  }
  await Promise.all(Array.from({ length: PAR }, worker));
  await browser.close();
  fs.writeFileSync(outFile, [...urls].sort().join('\n') + '\n');
  console.log(`\n${urls.size} URLs protokolliert`);
  if (api.size) console.log('API-Aufrufe (im Interim per Service Worker beantwortet): ' + [...api].sort().join(' '));
  if (foreign.size) console.log('Fremde Ziele: ' + [...foreign].sort().join(' '));
  if (failed.length) { console.log('FEHLGESCHLAGEN: ' + failed.join(' ')); process.exit(1); }
})();
