// Rendert jede Route im Browser (JS an, ohne Cookies) und speichert das fertige DOM.
const fs = require('fs'), path = require('path');
const { chromium } = require(process.env.PW_MODULE || '/Users/moritzlimbachplastship/plastship/plastship/node_modules/playwright');
const [,, routesFile, outDir, base = 'http://localhost'] = process.argv;
const routes = fs.readFileSync(routesFile, 'utf8').split('\n').filter(Boolean);
const PAR = Number(process.env.PAR || 2);
(async () => {
  const browser = await chromium.launch();
  let i = 0, failed = [];
  async function worker() {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, colorScheme: 'light', serviceWorkers: 'block' });
    const page = await ctx.newPage();
    while (i < routes.length) {
      const r = routes[i++];
      let ok = false;
      for (let t = 0; t < 5 && !ok; t++) {
        try {
          const resp = await page.goto(base + r, { waitUntil: 'load', timeout: 120000 });
          if (resp.status() >= 500) throw new Error('HTTP ' + resp.status());
          await page.waitForTimeout(1500);
          // einmal durchscrollen, damit Scroll-/Lazy-Effekte ihren Endzustand erreichen
          await page.evaluate(async () => {
            const h = document.documentElement.scrollHeight;
            for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
            window.scrollTo(0, 0);
          });
          await page.waitForTimeout(2000);
          const html = await page.evaluate(() => {
            document.querySelectorAll('nextjs-portal, canvas, [data-nextjs-toast], [data-nextjs-dev-tools-button]').forEach(e => e.remove());
            const dt = document.doctype ? '<!DOCTYPE html>' : '';
            return dt + '\n' + document.documentElement.outerHTML;
          });
          const f = path.join(outDir, r, 'index.html');
          fs.mkdirSync(path.dirname(f), { recursive: true });
          fs.writeFileSync(f, html);
          ok = true;
          process.stdout.write('.');
        } catch (e) {
          console.log(`\n${r}: ${e.message.split('\n')[0]} (Versuch ${t + 1}/5)`);
          await page.waitForTimeout(30000);
        }
      }
      if (!ok) failed.push(r);
    }
    await ctx.close();
  }
  await Promise.all(Array.from({ length: PAR }, worker));
  await browser.close();
  console.log(`\n${routes.length - failed.length}/${routes.length} gerendert`);
  if (failed.length) { console.log('FEHLGESCHLAGEN: ' + failed.join(' ')); process.exit(1); }
})();
