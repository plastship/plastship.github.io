const { chromium } = require('/Users/moritzlimbachplastship/plastship/plastship/node_modules/playwright');
(async () => {
const [,, url, js] = process.argv;
const b = await chromium.launch();
const p = await (await b.newContext({ viewport: { width: 1440, height: 900 } })).newPage();
await p.goto(url, { waitUntil: 'load', timeout: 90000 });
await p.waitForTimeout(4000);
console.log(await p.evaluate(js));
await b.close();
})();
