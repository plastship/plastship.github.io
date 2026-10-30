(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/instrumentation-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "onRouterTransitionStart",
    ()=>onRouterTransitionStart
]);
/**
 * Client-seitige Sentry-Initialisierung — #630/#631, seit #1494 nachgeladen.
 *
 * WARUM DIESE DATEI (und nicht sentry.client.config.ts):
 * Seit @sentry/nextjs v9 laedt der Build die Client-Init NUR noch aus
 * `instrumentation-client.ts`; unter `next build --turbopack` wird das alte
 * `sentry.client.config.ts` kommentarlos ignoriert. Genau das war hier der
 * Fall: das SDK fehlte komplett im Browser-Bundle (DSN in keinem Chunk),
 * 30 Tage lang kam aus KEINER Umgebung ein einziges javascript-Event an.
 * Diese Datei bleibt deshalb der Einstieg (hier injiziert der Build auch
 * die Sentry-Werte wie das Routen-Manifest).
 *
 * #1494: Das SDK selbst (~100 KB gzip) lag damit im kritischen Pfad jeder
 * Seite, vor dem LCP. Jetzt:
 *  1. sofort: die Brücke (lib/sentry/browser.ts, wenige hundert Byte) hört
 *     auf Fehler, Promise-Ablehnungen und console.warn/error und puffert,
 *  2. nach `load` im Leerlauf (spätestens nach 10 s, bei einem Fehler
 *     sofort): lib/sentry/browserInit.ts per import() — Sentry.init mit den
 *     unveränderten Optionen, danach wird der Puffer weitergegeben.
 * Kein Fehler der Ladephase geht verloren; Client-Code meldet über die Brücke.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["installEarlyCapture"])();
(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scheduleSentryLoad"])();
const onRouterTransitionStart = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onRouterTransitionStart"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Sentry-Brücke für den Browser (#1494).
 *
 * WARUM: Das Sentry-SDK wog ~100 KB gzip im kritischen Pfad jeder Seite —
 * ein Viertel des JavaScripts öffentlicher Seiten, direkt vor dem LCP. Seit
 * #1494 lädt es erst nach dem ersten Rendern (`load` + Leerlauf, spätestens
 * nach SPAETESTENS_MS) als eigener Chunk (lib/sentry/browserInit.ts).
 *
 * GARANTIE: Nichts aus der Ladephase geht verloren. Bis zur Init nimmt diese
 * Brücke alles an und gibt es danach in derselben Reihenfolge ans SDK:
 *  - direkte Aufrufe (captureException, captureMessage, addBreadcrumb,
 *    setUser, setTag, captureReactException) aller Client-Module,
 *  - globale Fehler (`error`) und unbehandelte Promise-Ablehnungen
 *    (`unhandledrejection`) — nach der Init übernimmt die GlobalHandlers-
 *    Integration des SDK, die Brücke hört dann auf (keine Doppelmeldung),
 *  - console.warn/error als Sentry-Logs (wie consoleLoggingIntegration).
 * Ein Fehler in der Ladephase holt das SDK SOFORT (Überwachung vor Tempo).
 * Der Puffer ist begrenzt (MAX_BUFFERED); die ersten Einträge bleiben, weil
 * die Ursache einer Fehlerkette meist am Anfang steht.
 *
 * REGEL: Client-Code importiert `@sentry/nextjs` nie statisch, sondern
 * diese Brücke — sonst wäre das SDK wieder im Seiten-Chunk UND Aufrufe vor
 * der Init gingen an ein uninitialisiertes SDK (verloren). Wächter:
 * tests/guards/sentry-client-bridge.test.ts. Server-Code (Route-Handler,
 * lib/*) nutzt das SDK weiter direkt.
 *
 * Nicht gepuffert (bewusst): Breadcrumbs, die das SDK selbst sammeln würde
 * (fetch/xhr/Klicks vor der Init), und Router-Übergänge vor der Init — die
 * Pageload-Messung setzt das SDK bei der Init rückwirkend ab timeOrigin.
 */ __turbopack_context__.s([
    "MAX_BUFFERED",
    ()=>MAX_BUFFERED,
    "addBreadcrumb",
    ()=>addBreadcrumb,
    "captureException",
    ()=>captureException,
    "captureMessage",
    ()=>captureMessage,
    "captureReactException",
    ()=>captureReactException,
    "installEarlyCapture",
    ()=>installEarlyCapture,
    "loadSentry",
    ()=>loadSentry,
    "onRouterTransitionStart",
    ()=>onRouterTransitionStart,
    "scheduleSentryLoad",
    ()=>scheduleSentryLoad,
    "setTag",
    ()=>setTag,
    "setUser",
    ()=>setUser
]);
const MAX_BUFFERED = 100;
/** Davon höchstens so viele Konsolen-Einträge (die sind geschwätzig). */ const MAX_CONSOLE = 30;
/** Spätestens dann lädt das SDK, auch wenn `load` nie feuert (hängende Ressource). */ const SPAETESTENS_MS = 10_000;
/** Leerlauf-Frist nach `load`. */ const LEERLAUF_TIMEOUT_MS = 3_000;
let sdk = null;
let laden = null;
const puffer = [];
let konsolenEintraege = 0;
let verworfen = 0;
// Server (Route-Handler über logger/permissions, SSR von Client-Komponenten):
// dort initialisiert instrumentation.ts das SDK. Das Modul wird beim Laden
// dieser Datei geholt (import(), damit es nicht im Browser-Chunk landet) und
// ist nach wenigen Mikrotasks da — ab dann gehen Aufrufe synchron durch wie
// vorher. Nur was in diesem Moment schon ankommt, wartet kurz.
let serverSdk = null;
const serverWarteschlange = [];
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function einreihen(aufruf, istFehler = false) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (sdk) {
        aufruf(sdk);
        return;
    }
    if (puffer.length >= MAX_BUFFERED) {
        verworfen++;
    } else {
        puffer.push(aufruf);
    }
    if (istFehler) void loadSentry();
}
function captureException(error, hint) {
    einreihen((s)=>{
        s.captureException(error, hint);
    }, true);
}
function captureMessage(message, context) {
    einreihen((s)=>{
        s.captureMessage(message, context);
    }, true);
}
function captureReactException(error, errorInfo) {
    const componentStack = errorInfo.componentStack ?? '';
    einreihen((s)=>{
        if (s.captureReactException) s.captureReactException(error, {
            componentStack
        });
        else s.captureException(error, {
            contexts: {
                react: {
                    componentStack
                }
            }
        });
    }, true);
}
function addBreadcrumb(breadcrumb) {
    einreihen((s)=>s.addBreadcrumb(breadcrumb));
}
function setUser(user) {
    einreihen((s)=>s.setUser(user));
}
function setTag(key, value) {
    einreihen((s)=>s.setTag(key, value));
}
function onRouterTransitionStart(href, navigationType) {
    sdk?.captureRouterTransitionStart?.(href, navigationType);
}
const originalKonsole = {};
let fruehAktiv = false;
function konsolenText(args) {
    return args.map((a)=>{
        if (typeof a === 'string') return a;
        if (a instanceof Error) return a.stack || `${a.name}: ${a.message}`;
        try {
            return JSON.stringify(a) ?? String(a);
        } catch  {
            return String(a);
        }
    }).join(' ');
}
function beiFehler(event) {
    // Ladefehler von <img>/<script> tragen weder error noch message — die meldet
    // auch das SDK nicht als Ausnahme.
    if (!event.error && !event.message) return;
    const fehler = event.error ?? event.message;
    einreihen((s)=>s.captureException(fehler, {
            mechanism: {
                type: 'auto.browser.early_bridge.onerror',
                handled: false
            }
        }), true);
}
function beiAblehnung(event) {
    const grund = event.reason;
    einreihen((s)=>s.captureException(grund, {
            mechanism: {
                type: 'auto.browser.early_bridge.onunhandledrejection',
                handled: false
            }
        }), true);
}
function konsoleUmhuellen(stufe) {
    const original = console[stufe];
    originalKonsole[stufe] = original;
    console[stufe] = (...args)=>{
        if (!sdk && konsolenEintraege < MAX_CONSOLE) {
            konsolenEintraege++;
            const text = konsolenText(args);
            einreihen((s)=>{
                s.logger?.[stufe]?.(text, {
                    'sentry.origin': 'auto.console.logging.early_bridge'
                });
                s.addBreadcrumb({
                    category: 'console',
                    level: stufe === 'warn' ? 'warning' : 'error',
                    message: text
                });
            });
        }
        original.apply(console, args);
    };
}
function konsoleZurueck() {
    for (const stufe of Object.keys(originalKonsole)){
        const original = originalKonsole[stufe];
        if (original) console[stufe] = original;
        delete originalKonsole[stufe];
    }
}
function installEarlyCapture() {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || fruehAktiv || sdk) return;
    fruehAktiv = true;
    window.addEventListener('error', beiFehler);
    window.addEventListener('unhandledrejection', beiAblehnung);
    konsoleUmhuellen('warn');
    konsoleUmhuellen('error');
}
function fruehAbbauen() {
    if (!fruehAktiv) return;
    fruehAktiv = false;
    window.removeEventListener('error', beiFehler);
    window.removeEventListener('unhandledrejection', beiAblehnung);
}
function loadSentry() {
    if (sdk) return Promise.resolve();
    if (!laden) {
        laden = __turbopack_context__.A("[project]/apps/web/src/lib/sentry/browserInit.ts [app-client] (ecmascript, async loader)").then(({ initBrowserSentry })=>{
            // Konsole VOR der Init zurück: consoleLoggingIntegration soll die echte
            // Konsole umhüllen, nicht die Brücke.
            konsoleZurueck();
            const geladen = initBrowserSentry();
            // Ab hier meldet die GlobalHandlers-Integration des SDK selbst.
            fruehAbbauen();
            sdk = geladen;
            const offen = puffer.splice(0);
            for (const aufruf of offen){
                try {
                    aufruf(geladen);
                } catch  {
                // ein kaputter Eintrag darf die übrigen nicht verhindern
                }
            }
            if (verworfen > 0) {
                geladen.addBreadcrumb({
                    category: 'sentry.bridge',
                    level: 'warning',
                    message: `${verworfen} Einträge vor der Init verworfen (Puffergrenze ${MAX_BUFFERED})`
                });
                verworfen = 0;
            }
        }).catch(()=>{
            laden = null;
        });
    }
    return laden;
}
function scheduleSentryLoad() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const imLeerlauf = ()=>{
        const ric = window.requestIdleCallback;
        if (typeof ric === 'function') ric(()=>void loadSentry(), {
            timeout: LEERLAUF_TIMEOUT_MS
        });
        else setTimeout(()=>void loadSentry(), 1);
    };
    if (document.readyState === 'complete') imLeerlauf();
    else window.addEventListener('load', imLeerlauf, {
        once: true
    });
    setTimeout(()=>void loadSentry(), SPAETESTENS_MS);
    // Wer die Seite früh verlässt: mit Fehlern im Puffer wenigstens versuchen
    window.addEventListener('pagehide', ()=>{
        if (puffer.length > 0) void loadSentry();
    }, {
        once: true
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_0xxgebg3nf3p0._.js.map