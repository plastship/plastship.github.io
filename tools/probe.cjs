const { chromium } = require('/Users/moritzlimbachplastship/plastship/plastship/node_modules/playwright');
(async () => {
const [,, url, shot, nojs] = process.argv;
const b = await chromium.launch();
const ctx = await b.newContext({ javaScriptEnabled: nojs !== 'nojs', viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
const msgs = [];
p.on('console', m => { if (['error','warning'].includes(m.type())) msgs.push(m.type()+': '+m.text().slice(0,200)); });
p.on('pageerror', e => msgs.push('pageerror: '+e.message.slice(0,200)));
p.on('response', r => { if (r.status() >= 400) msgs.push('HTTP '+r.status()+' '+r.url().slice(0,160)); });
p.on('requestfailed', r => msgs.push('FAILED '+r.url().slice(0,160)+' '+r.failure()?.errorText));
await p.goto(url, { waitUntil: 'load', timeout: 60000 });
await p.waitForTimeout(3000);
if (shot) await p.screenshot({ path: shot, fullPage: false });
console.log(msgs.slice(0,40).join('\n')); console.log('count', msgs.length);
await b.close();
})();
