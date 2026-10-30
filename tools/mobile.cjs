const { chromium } = require(process.env.PW_MODULE || '/Users/moritzlimbachplastship/plastship/plastship/node_modules/playwright');
const [,, url, shot] = process.argv;
(async () => {
  const b = await chromium.launch();
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true })).newPage();
  await p.goto(url, { waitUntil: 'load' }); await p.waitForTimeout(800);
  await p.screenshot({ path: shot });
  const btn = p.locator('[data-testid="mobile-menu-open"]');
  console.log('menu button visible', await btn.isVisible());
  if (await btn.isVisible()) { await btn.click(); await p.waitForTimeout(500); await p.screenshot({ path: shot.replace('.png', '-menu.png') }); }
  console.log('nav visible', await p.locator('[data-testid="header-public-nav"]').first().isVisible());
  await b.close();
})();
