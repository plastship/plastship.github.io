// Testlauf gegen den statischen Server: Konsole, 404, Navigation, Screenshots.
const { chromium } = require(process.env.PW_MODULE || '/Users/moritzlimbachplastship/plastship/plastship/node_modules/playwright');
const [,, base, shotDir] = process.argv;
const pages = ['/', '/recyclate-performance/', '/en/', '/contact-us/', '/news/', '/en/partners/trinamix/'];
(async () => {
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
  const p = await ctx.newPage();
  const issues = [];
  p.on('console', m => { if (m.type() === 'error') issues.push(`[${p.url()}] console: ${m.text().slice(0, 200)}`); });
  p.on('pageerror', e => issues.push(`[${p.url()}] pageerror: ${e.message.slice(0, 200)}`));
  p.on('response', r => { if (r.status() >= 400) issues.push(`[${p.url()}] HTTP ${r.status()} ${r.url()}`); });
  p.on('requestfailed', r => { if (!r.url().startsWith(base)) return; issues.push(`[${p.url()}] FAILED ${r.url()} ${r.failure()?.errorText}`); });
  const external = new Set();
  p.on('request', r => { if (!r.url().startsWith(base) && !r.url().startsWith('data:')) external.add(r.url()); });
  for (const path of pages) {
    await p.goto(base + path, { waitUntil: 'load' });
    await p.waitForTimeout(800);
    const name = (path.replace(/\//g, '_').replace(/^_|_$/g, '') || 'home');
    await p.screenshot({ path: `${shotDir}/${name}.png` });
    await p.screenshot({ path: `${shotDir}/${name}-full.png`, fullPage: true });
  }
  // Navigation: Klick auf einen Link der Startseite
  await p.goto(base + '/', { waitUntil: 'load' });
  const link = p.locator('[data-testid="footer-meta-imprint"]').first();
  await link.click();
  await p.waitForLoadState('load');
  const navOk = p.url() === base + '/imprint/';
  // Menue: Flyout aufklappen
  await p.goto(base + '/', { waitUntil: 'load' });
  await p.locator('[data-testid="header-public-nav-item-5-toggle"]').click();
  const open = await p.locator('[data-testid="header-public-nav-item-5"]').getAttribute('data-open');
  await p.screenshot({ path: `${shotDir}/menu-open.png` });
  await p.locator('[data-testid="header-public-nav-item-5-child-0"] a, a[data-testid="header-public-nav-item-5-child-0"]').first().click();
  await p.waitForLoadState('load');
  const menuNav = p.url();
  // Sprachumschalter
  await p.goto(base + '/', { waitUntil: 'load' });
  await p.locator('[data-testid="header-language-switcher-trigger"]').click();
  await p.locator('[data-testid="header-language-switcher-option-en-GB"]').click();
  await p.waitForLoadState('load');
  const langNav = p.url();
  // 404
  const r404 = await p.goto(base + '/404.html', { waitUntil: 'load' });
  await p.screenshot({ path: `${shotDir}/404.png` });
  console.log(JSON.stringify({ navOk, navUrl: p.url(), flyoutOpen: open, menuNav, langNav, status404: r404.status(), external: [...external], issues }, null, 1));
  await b.close();
})();
