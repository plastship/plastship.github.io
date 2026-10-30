// Prueft das Paket im Browser (Playwright) gegen einen lokalen statischen Server.
//   python3 -m http.server 8099 --directory docs &
//   node tools/test.cjs [http://localhost:8099] [Vergleichsquelle http://localhost] [shots/]
const fs = require('fs'), path = require('path');
const { chromium } = require(process.env.PW_MODULE || '/Users/moritzlimbachplastship/plastship/plastship/node_modules/playwright');
const [,, BASE = 'http://localhost:8099', REF = 'http://localhost', SHOTS = path.join(__dirname, '..', 'shots')] = process.argv;
const PAGES = (process.env.PAGES || '/,/en/,/recyclate-performance/,/news/,/partners/3s/,/contact-us/').split(',');
fs.mkdirSync(SHOTS, { recursive: true });
const results = [];
const res = (k, ok, info) => { results.push({ k, ok, info }); console.log(`${ok ? 'OK  ' : 'FAIL'} ${k}${info ? ' - ' + info : ''}`); };
const slug = r => (r.replace(/\//g, '_').replace(/^_|_$/g, '') || 'home');

function watch(page, bag) {
  page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') bag.console.push(`${m.type()}: ${m.text().slice(0, 300)}`); });
  page.on('pageerror', e => bag.errors.push(String(e.message || e).slice(0, 300)));
  page.on('response', r => { if (r.status() >= 400) bag.bad.push(`${r.status()} ${r.url()}`); });
}

async function scroll(page) {
  await page.evaluate(async () => {
    const h = document.documentElement.scrollHeight;
    for (let y = 0; y < h; y += 500) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); }
    window.scrollTo(0, 0);
  });
}

(async () => {
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  // Live-Seite nie wirklich aufrufen: Weiterleitungen dorthin nur protokollieren
  await ctx.route('https://plastship.com/**', r => r.fulfill({ status: 200, contentType: 'text/html', body: '<title>live</title>live' }));

  // (a) Konsole/Netzwerk je Seite: erster Aufruf (ohne Service Worker) und zweiter (mit)
  for (const r of PAGES) {
    for (const pass of ['erster Aufruf', 'mit Service Worker']) {
      const page = await ctx.newPage();
      const bag = { console: [], errors: [], bad: [] };
      watch(page, bag);
      await page.goto(BASE + r, { waitUntil: 'load' });
      await page.waitForTimeout(2500);
      await scroll(page);
      await page.waitForTimeout(1500);
      const sw = await page.evaluate(() => !!(navigator.serviceWorker && navigator.serviceWorker.controller));
      const brokenImgs = await page.evaluate(() => [...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.currentSrc).map(i => i.currentSrc).slice(0, 5));
      const bad = bag.bad.filter(x => !/[?&]_rsc=/.test(x));
      const known = bad.filter(x => /_1vp-rpbrgbncx|HeroSlider_tsx_1zwefv35iu_ts|altcha_1s_pshnzoawaq/.test(x));
      const unexpected = bad.filter(x => !known.includes(x));
      res(`(a) ${r} ${pass}`, unexpected.length === 0 && bag.errors.length === 0 && brokenImgs.length === 0,
        `SW=${sw} 4xx=${unexpected.length} (bekannt aus Quelle: ${known.length}) JS-Fehler=${bag.errors.length} kaputte Bilder=${brokenImgs.length}` +
        (unexpected.length ? ' | ' + unexpected.slice(0, 5).join(' ; ') : '') + (bag.errors.length ? ' | ' + bag.errors.slice(0, 3).join(' ; ') : '') +
        (brokenImgs.length ? ' | ' + brokenImgs.join(' ; ') : ''));
      if (pass === 'mit Service Worker') {
        const cons = bag.console.filter(x => !/Failed to load resource/.test(x));
        if (cons.length) console.log('     Konsole: ' + [...new Set(cons)].slice(0, 6).join('\n              '));
        await page.screenshot({ path: path.join(SHOTS, `interim-${slug(r)}.png`), fullPage: true });
      }
      await page.close();
    }
  }

  const page = await ctx.newPage();
  await page.goto(BASE + '/', { waitUntil: 'load' });
  await page.waitForTimeout(3000);

  // (b) Hero-Slider: Bild sichtbar, Index wechselt (automatisch oder per Pagination)
  const hero = page.locator('[data-testid="cms-block-start-hero"]');
  const heroInfo = await page.evaluate(() => {
    const c = document.querySelector('[data-testid="cms-block-start-hero-canvas"]');
    const img = document.querySelector('[data-testid="cms-block-start-hero-slide-0-image"] img, [data-testid="cms-block-start-hero-slide-0-image"]');
    return { canvas: !!c && c.width > 0, img: img && img.tagName === 'IMG' ? img.naturalWidth : null };
  });
  const i0 = await hero.getAttribute('data-active-index');
  await page.waitForTimeout(9000);
  let i1 = await hero.getAttribute('data-active-index');
  let how = 'automatisch';
  if (i1 === i0) { await page.click('[data-testid="cms-block-start-hero-pagination-item-2"]'); await page.waitForTimeout(2000); i1 = await hero.getAttribute('data-active-index'); how = 'per Pagination'; }
  await page.screenshot({ path: path.join(SHOTS, 'interim-hero.png') });
  res('(b) Hero-Slider wechselt', i0 !== i1, `Index ${i0} -> ${i1} (${how}), Canvas=${heroInfo.canvas}, Bild=${heroInfo.img}`);

  // (c) Imagefilm animiert
  const film = page.locator('[data-testid="cms-block-start-imagefilm"]').first();
  await film.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  const s1 = await film.screenshot({ path: path.join(SHOTS, 'interim-imagefilm-1.png') });
  await page.waitForTimeout(2500);
  const s2 = await film.screenshot({ path: path.join(SHOTS, 'interim-imagefilm-2.png') });
  res('(c) Imagefilm animiert', !s1.equals(s2), 'zwei Aufnahmen im Abstand 2,5 s ' + (s1.equals(s2) ? 'gleich' : 'verschieden'));

  // (d) Menue-Flyout
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.hover('[data-testid="header-public-nav-item-0-toggle"]');
  await page.waitForTimeout(600);
  const fly = await page.locator('[data-testid="header-public-nav-item-0-children"]').isVisible();
  await page.screenshot({ path: path.join(SHOTS, 'interim-flyout.png') });
  res('(d) Menue-Flyout oeffnet', fly, '');
  await page.mouse.move(700, 600);
  await page.waitForTimeout(400);

  // (e) kein Login-Knopf
  const loginVisible = await page.locator('[data-testid="header-login"]').isVisible().catch(() => false);
  const cookieVisible = await page.locator('[data-testid="cookie-banner"]').isVisible().catch(() => false);
  res('(e) kein Login-Knopf sichtbar', !loginVisible, `header-login sichtbar=${loginVisible}, Cookie-Banner sichtbar=${cookieVisible}`);

  // (g) Dark-Mode-Schalter
  const themeOf = () => page.evaluate(() => ({ cls: document.documentElement.className, attr: document.documentElement.getAttribute('data-theme'), bg: getComputedStyle(document.body).backgroundColor }));
  const t0 = await themeOf();
  await page.click('[data-testid="header-theme-toggle"]');
  await page.waitForTimeout(800);
  const t1 = await themeOf();
  await page.screenshot({ path: path.join(SHOTS, 'interim-dark.png') });
  res('(g) Dark-Mode wechselt', JSON.stringify(t0) !== JSON.stringify(t1), `${t0.attr}/${t0.bg} -> ${t1.attr}/${t1.bg}`);
  await page.click('[data-testid="header-theme-toggle"]');
  await page.waitForTimeout(500);

  // (f) Klick auf Unterseiten-Link laedt die Unterseite
  await page.hover('[data-testid="header-public-nav-item-1-toggle"]');
  await page.waitForTimeout(500);
  if (!(await page.locator('[data-testid="header-public-nav-item-1-children"]').isVisible())) {
    await page.click('[data-testid="header-public-nav-item-1-toggle"]');
    await page.waitForTimeout(500);
  }
  const link = page.locator('[data-testid="header-public-nav-item-1-children"] a[href="/recyclate-performance/"]').first();
  const titleBefore = await page.title();
  await Promise.all([page.waitForURL('**/recyclate-performance/', { timeout: 20000 }).catch(() => {}), link.click()]);
  await page.waitForLoadState('load');
  await page.waitForTimeout(2000);
  const titleAfter = await page.title();
  const h1 = await page.locator('h1').first().textContent().catch(() => '');
  res('(f) Klick laedt Unterseite', page.url().endsWith('/recyclate-performance/') && titleAfter !== titleBefore,
    `${page.url()} Titel "${titleAfter}" h1 "${(h1 || '').trim().slice(0, 60)}"`);

  // Weiterleitung nicht gespiegelter Pfade (Service Worker)
  const p2 = await ctx.newPage();
  const navs = [];
  p2.on('framenavigated', f => { if (f === p2.mainFrame()) navs.push(f.url()); });
  await p2.goto(BASE + '/login/', { waitUntil: 'load' }).catch(() => {});
  res('Weiterleitung /login/ -> Live', p2.url().startsWith('https://plastship.com/login/'), p2.url());
  await p2.close();

  // Kontaktformular: Hinweis da, Absenden ausgeblendet
  const p3 = await ctx.newPage();
  await p3.goto(BASE + '/contact-us/', { waitUntil: 'load' });
  await p3.waitForTimeout(3000);
  const noteOk = await p3.locator('[data-testid="interim-form-note"]').isVisible().catch(() => false);
  const submitVis = await p3.locator('[data-testid$="contact-form-submit"]').isVisible().catch(() => false);
  await p3.locator('[data-testid="interim-form-note"]').scrollIntoViewIfNeeded().catch(() => {});
  await p3.screenshot({ path: path.join(SHOTS, 'interim-contact-note.png') });
  res('Kontaktformular-Hinweis', noteOk && !submitVis, `Hinweis=${noteOk} Absenden sichtbar=${submitVis}`);
  await p3.close();

  // (h) mobil 390 px
  const m = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
  const mp = await m.newPage();
  await mp.goto(BASE + '/', { waitUntil: 'load' });
  await mp.waitForTimeout(3000);
  await mp.click('[data-testid="mobile-menu-open"]');
  await mp.waitForTimeout(1000);
  const mm = await mp.locator('[data-testid="mobile-menu-item-public"]').isVisible();
  const mlogin = await mp.locator('[data-testid="mobile-menu-item-login"]').isVisible().catch(() => false);
  await mp.screenshot({ path: path.join(SHOTS, 'interim-mobile-menu.png') });
  res('(h) Mobilmenue oeffnet (390 px)', mm && !mlogin, `Menue sichtbar=${mm}, Login im Mobilmenue sichtbar=${mlogin}`);
  await m.close();

  // Vergleich mit der Quelle: Seitenhoehe und Screenshots
  if (REF !== 'none') {
    for (const r of PAGES) {
      const heights = [];
      for (const [name, base] of [['interim', BASE], ['quelle', REF]]) {
        const c = await browser.newContext({ viewport: { width: 1440, height: 900 } });
        const p = await c.newPage();
        await p.goto(base + r, { waitUntil: 'load' });
        await p.waitForTimeout(2500);
        await scroll(p);
        await p.waitForTimeout(1500);
        heights.push(await p.evaluate(() => document.documentElement.scrollHeight));
        await p.screenshot({ path: path.join(SHOTS, `vergleich-${slug(r)}-${name}.png`), fullPage: false });
        await c.close();
      }
      const diff = Math.abs(heights[0] - heights[1]);
      res(`Vergleich ${r}`, diff <= 150, `Hoehe Interim ${heights[0]} px, Quelle ${heights[1]} px`);
    }
  }
  await browser.close();
  const failed = results.filter(x => !x.ok);
  console.log(`\n${results.length - failed.length}/${results.length} Pruefungen ok`);
  process.exit(failed.length ? 1 : 0);
})();
