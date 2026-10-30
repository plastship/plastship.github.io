(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/components/Atom/Altcha/Altcha.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALTCHA_WIDGET_HEIGHT",
    ()=>ALTCHA_WIDGET_HEIGHT,
    "Slot",
    ()=>Slot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const ALTCHA_WIDGET_HEIGHT = 'calc(1.5rem + 1.5rem + 2px)';
const Slot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Altcha.styles__Slot",
    componentId: "sc-8715a897-0"
})`
  min-height: ${ALTCHA_WIDGET_HEIGHT};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Altcha/Altcha.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALTCHA_MAX_WORKERS",
    ()=>ALTCHA_MAX_WORKERS,
    "Altcha",
    ()=>Altcha,
    "altchaWorkers",
    ()=>altchaWorkers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Altcha$2f$Altcha$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Altcha/Altcha.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
/**
 * Thin React wrapper around the `altcha` web component (#243 Phase B7).
 *
 * The web component ships with its own shadow DOM, widget chrome and
 * solving worker — we only need to mount it and listen for the
 * `statechange` event to lift the proof up into the form.
 *
 * The web-component package has a side effect of registering
 * <altcha-widget> with the browser; we import it dynamically inside a
 * useEffect so it never runs on the server (the widget is browser-only).
 *
 * Why we cast the tag instead of augmenting JSX.IntrinsicElements:
 * React 19 moved the JSX namespace under `React.JSX`, which broke
 * the legacy `declare global { namespace JSX }` augmentation in some
 * TS configs. Treating the tag as a forwardRef'd component sidesteps
 * the namespace question entirely.
 *
 * #1534 — Start und Rechenlast:
 *  - `auto="onfocus"`: Bibliothek (34 KB), Aufgabe und Rechenarbeit starten
 *    erst bei der ersten Berührung des umgebenden Formulars (Fokus, Zeiger,
 *    Taste), nicht beim Laden der Seite. Vorher gemessen: /contact-us/ und
 *    /password-reset/ holten sofort die Aufgabe und starteten 16 Worker, bevor
 *    jemand ein Feld angefasst hatte. Bis zum Start hält ein Platzhalter in
 *    der Höhe des Widgets die Stelle frei.
 *    Bewusst nicht das `onfocus` des Widgets selbst: dafür müsste die
 *    Bibliothek schon beim Laden da sein, und ein Feld, das den Fokus bereits
 *    hat, löste nie ein `focusin` aus.
 *  - Worker: höchstens ALTCHA_MAX_WORKERS. Das Widget nimmt sonst je Kern
 *    einen, bis 16 — für eine SHA-256-Aufgabe dieser Größe (unter einer
 *    Sekunde) ist das nur Last, auf dem Telefon beim Seitenaufbau.
 */ const AltchaTag = 'altcha-widget';
const ALTCHA_MAX_WORKERS = 4;
function altchaWorkers(hardwareConcurrency) {
    const kerne = hardwareConcurrency ?? (typeof navigator === 'undefined' ? undefined : navigator.hardwareConcurrency);
    return Math.min(ALTCHA_MAX_WORKERS, Math.max(1, kerne || 2));
}
/** Was im Formular als Berührung zählt — jeweils das erste Ereignis startet das Widget */ const BERUEHRUNG = [
    'focusin',
    'pointerdown',
    'keydown'
];
const Altcha = ({ onSolved, resetKey, // Trailing slash matches next.config trailingSlash:true — avoids a 308 redirect
// that would drop the ALTCHA widget's challenge fetch.
challengeUrl = '/api/altcha/challenge/', auto = 'onsubmit', startImmediately = false, dataTestId = 'altcha' })=>{
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const slotRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wartetAufBeruehrung = auto === 'onfocus';
    // null = noch nicht gestartet. Die Zahl steht erst im Browser fest
    // (navigator), deshalb Zustand statt Konstante — das Server-HTML kennt sie nicht.
    const [workers, setWorkers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const gestartet = workers !== null;
    const starten = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Altcha.useCallback[starten]": ()=>setWorkers({
                "Altcha.useCallback[starten]": (w)=>w ?? altchaWorkers()
            }["Altcha.useCallback[starten]"])
    }["Altcha.useCallback[starten]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Altcha.useEffect": ()=>{
            if (gestartet) return undefined;
            const form = wartetAufBeruehrung && !startImmediately ? slotRef.current?.closest('form') : null;
            // Ohne Formular gibt es nichts, worauf zu warten wäre
            if (!form) {
                starten();
                return undefined;
            }
            for (const ereignis of BERUEHRUNG)form.addEventListener(ereignis, starten, {
                capture: true
            });
            return ({
                "Altcha.useEffect": ()=>{
                    for (const ereignis of BERUEHRUNG)form.removeEventListener(ereignis, starten, {
                        capture: true
                    });
                }
            })["Altcha.useEffect"];
        }
    }["Altcha.useEffect"], [
        gestartet,
        wartetAufBeruehrung,
        startImmediately,
        starten
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Altcha.useEffect": ()=>{
            // Side-effect import: registers <altcha-widget> as a custom element.
            // Erst nach dem Start — dann steht die Worker-Zahl schon am Element.
            if (gestartet) void __turbopack_context__.A("[project]/node_modules/altcha/dist/main/altcha.js [app-client] (ecmascript, async loader)");
        }
    }["Altcha.useEffect"], [
        gestartet
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Altcha.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const handler = {
                "Altcha.useEffect.handler": (e)=>{
                    // The widget dispatches a 'statechange' event with detail.state ==
                    // 'verified' and detail.payload set once the PoW is solved. We
                    // listen here rather than poll attributes so we don't have to
                    // hook into the widget's internal lifecycle.
                    const detail = e.detail;
                    if (detail?.state === 'verified' && detail.payload) {
                        onSolved(detail.payload);
                    }
                }
            }["Altcha.useEffect.handler"];
            el.addEventListener('statechange', handler);
            return ({
                "Altcha.useEffect": ()=>{
                    el.removeEventListener('statechange', handler);
                }
            })["Altcha.useEffect"];
        // `gestartet`: mit auto="onfocus" gibt es das Element erst nach dem Start
        }
    }["Altcha.useEffect"], [
        onSolved,
        resetKey,
        gestartet
    ]);
    // altcha v3 only reads its observed attributes (challenge, configuration,
    // auto, name, ...). The v1/v2 names (challengeurl, hidefooter, hidelogo) are
    // silently ignored — with them the widget had no challenge URL, fetched the
    // current page instead and always failed with "Verification failed" (#342).
    // Footer/logo hiding are Configuration options in v3, passed as JSON.
    const configuration = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Altcha.useMemo[configuration]": ()=>JSON.stringify({
                hideFooter: true,
                hideLogo: true,
                ...workers !== null ? {
                    workers
                } : {}
            })
    }["Altcha.useMemo[configuration]"], [
        workers
    ]);
    if (wartetAufBeruehrung) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Altcha$2f$Altcha$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
            ref: slotRef,
            "data-testid": `${dataTestId}-slot`,
            "data-started": gestartet ? 'true' : 'false',
            children: gestartet && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AltchaTag, {
                ref: ref,
                challenge: challengeUrl,
                configuration: configuration,
                auto: "onload",
                "data-testid": dataTestId
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Altcha/Altcha.tsx",
                lineNumber: 170,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Altcha/Altcha.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AltchaTag, {
        ref: ref,
        challenge: challengeUrl,
        configuration: configuration,
        auto: auto,
        "data-testid": dataTestId
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Altcha/Altcha.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Altcha, "EbOZNWBKXuOkg+rxNYuCsnwSuEM=");
_c = Altcha;
var _c;
__turbopack_context__.k.register(_c, "Altcha");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconCalendar.styles__Root",
    componentId: "sc-31b25be0-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCalendar",
    ()=>IconCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.styles.ts [app-client] (ecmascript)");
;
;
const IconCalendar = (props)=>{
    const defaultStrokeColor = 'currentColor';
    const strokeColor = props['strokeColor'] || defaultStrokeColor;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        className: props['className'],
        "data-testid": 'icon-calendar-root',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            fill: strokeColor,
            strokeLinejoin: "miter",
            strokeLinecap: "butt",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "2",
                    y1: "9",
                    x2: "22",
                    y2: "9",
                    fill: "none",
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "7",
                    y1: "1",
                    x2: "7",
                    y2: "4",
                    fill: "none",
                    stroke: strokeColor,
                    strokeLinecap: "square",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "17",
                    y1: "1",
                    x2: "17",
                    y2: "4",
                    fill: "none",
                    stroke: strokeColor,
                    strokeLinecap: "square",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "4",
                    width: "20",
                    height: "16",
                    rx: "2",
                    ry: "2",
                    fill: "none",
                    stroke: strokeColor,
                    strokeLinecap: "square",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconCalendar;
;
var _c;
__turbopack_context__.k.register(_c, "IconCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCalendar"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconDownload/IconDownload.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconDownload.styles__Root",
    componentId: "sc-985edd3b-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconDownload/IconDownload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconDownload",
    ()=>IconDownload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDownload$2f$IconDownload$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDownload/IconDownload.styles.ts [app-client] (ecmascript)");
;
;
const IconDownload = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDownload$2f$IconDownload$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-download-root',
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8.01562 15.784H5.21429C3.43908 15.784 2 14.5585 2 12.7614C2 10.9644 3.43908 9.50762 5.21429 9.50762C5.335 9.50762 5.45417 9.51436 5.57143 9.52748V9.50762H5.61564C5.58646 9.27074 5.57143 9.02942 5.57143 8.78455C5.57143 5.58983 8.1298 3 11.2857 3C13.4228 3 15.2859 4.1876 16.2661 5.94642C16.5056 5.91075 16.7507 5.89227 17 5.89227C19.7614 5.89227 22 8.15838 22 10.9538C22 13.5036 20.1374 15.3819 17.7143 15.7328H15.125M11.6429 9.86915V21M11.6429 21L9.10937 18.5008M11.6429 21L14.1094 18.5008",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconDownload/IconDownload.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconDownload/IconDownload.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconDownload;
;
var _c;
__turbopack_context__.k.register(_c, "IconDownload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconDownload/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDownload$2f$IconDownload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDownload/IconDownload.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDownload$2f$IconDownload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDownload"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Body",
    ()=>Body,
    "Email",
    ()=>Email,
    "Initials",
    ()=>Initials,
    "Name",
    ()=>Name,
    "Phone",
    ()=>Phone,
    "Photo",
    ()=>Photo,
    "Role",
    ()=>Role,
    "Root",
    ()=>Root,
    "TileLayer",
    ()=>TileLayer,
    "Tiles",
    ()=>Tiles,
    "VCardButton",
    ()=>VCardButton,
    "VCardIcon",
    ()=>VCardIcon,
    "VCardLabel",
    ()=>VCardLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Canvas__as__HexTileCanvas$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexEdge.styles.ts [app-client] (ecmascript) <export Canvas as HexTileCanvas>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
'use client';
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].article.withConfig({
    displayName: "TeamMemberCard.styles__Root",
    componentId: "sc-2c9d3046-0"
})`
  position: relative;
  display: flex;
  flex-direction: column;
  /* globals.css gibt jedem article die Seitenfarbe; auf getönten Bändern
     stand die Karte sonst als weißes Rechteck hinter der Wabe */
  background: transparent;
  color: ${({ theme })=>theme.palette.site.text};
`;
const Photo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TeamMemberCard.styles__Photo",
    componentId: "sc-2c9d3046-1"
})`
  position: relative;
  width: 100%;
  /* Höhe eines regelmäßigen Sechsecks der Breite (PHOTO_BOX_RATIO im Bauteil) */
  aspect-ratio: 866 / 1000;
  overflow: hidden;
  background: ${({ theme })=>theme.palette.site.tint};

  /* #1473: next/image mit width/height statt fill — füllt die Fläche per CSS */
  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  /* Mit Maske zeigt die Kachelebene das Foto — Box und Bild darunter treten zurück */
  &[data-masked='true'] {
    background: transparent;

    img {
      visibility: hidden;
    }
  }
`;
const Initials = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "TeamMemberCard.styles__Initials",
    componentId: "sc-2c9d3046-2"
})`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme })=>theme.palette.site.blue};
`;
const TileLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TeamMemberCard.styles__TileLayer",
    componentId: "sc-2c9d3046-3"
})`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
`;
/*
 * #1433: Atmen über fill-opacity statt opacity. Eine Animation auf opacity
 * überschreibt jeden Übergang — beim Hover sprangen die Randkacheln auf ihre
 * neue Deckung. So multiplizieren sich beide: opacity blendet (--alpha),
 * fill-opacity atmet.
 */ const tileBreath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0%, 100% { fill-opacity: 1; }
  50% { fill-opacity: ${1 - 2 * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIMMER_AMPLITUDE"]}; }
`;
const Tiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Canvas__as__HexTileCanvas$3e$__["HexTileCanvas"]).withConfig({
    displayName: "TeamMemberCard.styles__Tiles",
    componentId: "sc-2c9d3046-4"
})`
  pointer-events: none;

  /* #1415/#1433: Hover gibt mehr Foto frei — die Deckung blendet weich */
  && path[data-full='true'],
  && path[data-rounded='true'] {
    transition: opacity 0.7s cubic-bezier(0.33, 1, 0.68, 1);
  }

  && [data-partial='true'] {
    animation-name: ${tileBreath};
  }

  @media (prefers-reduced-motion: reduce) {
    && path[data-full='true'],
    && path[data-rounded='true'] {
      transition: none;
      animation: none;
    }
  }
`;
const Body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TeamMemberCard.styles__Body",
    componentId: "sc-2c9d3046-5"
})`
  position: relative;
  z-index: 2;
  /* Der Text überlagert die untere Spitze des Sechsecks um 1,5 Kachelreihen */
  margin-top: ${-Math.round(1.5 * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_STEP"] * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TILE_SIZE_PX"])}px;
  padding: 0 20px 8px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 16px;
  line-height: 24px;
  overflow-wrap: break-word;
`;
const Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "TeamMemberCard.styles__Name",
    componentId: "sc-2c9d3046-6"
})`
  margin: 0 0 4px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0;
  text-transform: none;
  color: ${({ theme })=>theme.palette.site.heading};
`;
const Role = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "TeamMemberCard.styles__Role",
    componentId: "sc-2c9d3046-7"
})`
  margin: 0 0 4px;
  color: ${({ theme })=>theme.palette.site.text};
`;
const Phone = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TeamMemberCard.styles__Phone",
    componentId: "sc-2c9d3046-8"
})`
  color: ${({ theme })=>theme.palette.site.muted};

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover,
  a:focus-visible {
    text-decoration: underline;
  }
`;
const Email = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TeamMemberCard.styles__Email",
    componentId: "sc-2c9d3046-9"
})`
  font-weight: 700;
  color: ${({ theme })=>theme.palette.site.blue};

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover,
  a:focus-visible {
    text-decoration: underline;
  }
`;
const VCardButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "TeamMemberCard.styles__VCardButton",
    componentId: "sc-2c9d3046-10"
})`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin: 8px 0 0;
  padding: 4px 0;
  border: 0;
  background: none;
  cursor: pointer;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme })=>theme.palette.site.blue};

  &:hover > span:last-child,
  &:focus-visible > span:last-child {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.site.blue};
    outline-offset: 2px;
    border-radius: 2px;
  }
`;
const VCardIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "TeamMemberCard.styles__VCardIcon",
    componentId: "sc-2c9d3046-11"
})`
  display: inline-flex;
  flex: none;

  svg {
    width: 18px;
    height: 18px;
  }
`;
const VCardLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "TeamMemberCard.styles__VCardLabel",
    componentId: "sc-2c9d3046-12"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOVER_FRAY_STEPS",
    ()=>HOVER_FRAY_STEPS,
    "HOVER_TINT_FACTOR",
    ()=>HOVER_TINT_FACTOR,
    "PHOTO_BOX_RATIO",
    ()=>PHOTO_BOX_RATIO,
    "PHOTO_SIZES",
    ()=>PHOTO_SIZES,
    "TINT_MAX",
    ()=>TINT_MAX,
    "TINT_START",
    ()=>TINT_START,
    "TeamMemberCard",
    ()=>TeamMemberCard,
    "portraitTiles",
    ()=>portraitTiles,
    "portraitTint",
    ()=>portraitTint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexTileGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexTileGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/backdropCells.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDownload$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDownload/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$blobDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/blobDownload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vcard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vcard/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vcard$2f$vcard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vcard/vcard.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ContactLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$ContactLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ContactLink/ContactLink.tsx [app-client] (ecmascript)");
/** #2054: tel:-Ziel aus lib/contact (E.164, das Plus bleibt) — hier weiter exportiert */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$contactLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/contactLinks.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
/** Ausfransen der Sechseckkante (oben, links, rechts) gedrosselt; am Text volle Stärke */ const PORTRAIT_FRAY_STRENGTH = 0.35;
const HOVER_FRAY_STEPS = [
    1,
    0.2
];
const TINT_START = 0.55;
const TINT_MAX = 0.5;
const HOVER_TINT_FACTOR = 0.4;
/**
 * Großes Sechseck des Porträts: regelmäßig, Spitze oben wie die Kacheln; die
 * Bildbreite begrenzt es, die Fläche ist genau so hoch (PHOTO_BOX_RATIO).
 */ const portraitHexagon = (width, height)=>{
    const a = width / 2;
    const b = Math.min(a * 2 / Math.sqrt(3), height / 2);
    return {
        cx: width / 2,
        cy: height / 2,
        a,
        b
    };
};
/** Sechseck-Abstand zur Mitte: 0 in der Mitte, 1 auf der Kante, darüber außen */ const hexagonDistance = ({ cx, cy, a, b }, x, y)=>{
    if (a <= 0 || b <= 0) return Infinity;
    const dx = Math.abs(x - cx) / a;
    const dy = Math.abs(y - cy) / b;
    return Math.max(dx, dy + dx / 2);
};
const insideHexagon = (shape, x, y)=>hexagonDistance(shape, x, y) <= 1;
const smoothstep = (edge0, edge1, x)=>{
    const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
};
const PHOTO_BOX_RATIO = 2 / Math.sqrt(3);
/** #1415: Kopf mittig in der Wabe — das scharfe Foto sitzt tiefer (vorher 0.04) */ const PHOTO_TOP = 0.14;
const PHOTO_FADE = 0.12;
/**
 * #1473: größte Darstellungsbreite des Fotos in CSS-px — eine Karte je Reihe
 * bis 639 px Viewport (100vw minus 2 × 12 px Rand). Breiter wird es erst ab
 * ~2600 px Viewport (vier Karten je Reihe, Raster ohne Höchstbreite).
 */ const PHOTO_MAX_WIDTH = 616;
const PHOTO_SIZES = [
    '(max-width: 639px) calc(100vw - 24px)',
    '(max-width: 899px) calc(50vw - 24px)',
    '(max-width: 1199px) calc(33.4vw - 24px)',
    'calc(25vw - 24px)'
].join(', ');
/** Rand in px um Name, Funktion, Telefon und E-Mail, den die Textkacheln zusätzlich decken */ const TEXT_PADDING = 12;
;
function initialen(name) {
    return name.split(/\s+/).filter(Boolean).slice(0, 2).map((teil)=>teil[0]?.toUpperCase() ?? '').join('');
}
function portraitTiles(width, height, columns, rects, hovered = false) {
    if (width <= 0 || height <= 0 || columns <= 0) return [];
    // Raster der Fotofläche (volle Breite, Höhe nach PHOTO_BOX_RATIO, oben in der Karte)
    const photoHeight = width * PHOTO_BOX_RATIO;
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(width, photoHeight, columns);
    // Das Foto als großes Sechseck (Spitze oben wie die Kacheln) über die volle
    // Breite: Kacheln innen voll, außen leer — die Kante ist die Kachelkante
    const shape = portraitHexagon(width, photoHeight);
    const steps = hovered ? HOVER_FRAY_STEPS : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"];
    // Sechseckkante mit derselben Ausfransung wie überall, von außen nach innen
    // gemessen und gedrosselt (PORTRAIT_FRAY_STRENGTH) — die Form bleibt klar
    const outsideCoverage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frayedCoverage"])(cells, (cell)=>!insideHexagon(shape, cell.cx, cell.cy), steps, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frayJitter"])(hovered ? 0 : PORTRAIT_FRAY_STRENGTH));
    const textCoverage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frayedCoverage"])(cells, (cell)=>rects.some((r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexIntersectsRect"])(cell, r)), steps, hovered ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frayJitter"])(0) : undefined);
    return cells.flatMap((cell)=>{
        // Kacheln über der Flächenkante bleiben leer — nie eine gerade Schnittkante
        const crossesBox = cell.x < 0 || cell.y < 0 || cell.x + cell.size > width || cell.y + cell.size > photoHeight;
        if (crossesBox) return [];
        const alpha = (1 - (outsideCoverage.get(cell.key) ?? 0)) * (1 - (textCoverage.get(cell.key) ?? 0));
        return [
            {
                ...cell,
                alpha: alpha > 0.005 ? Math.round(alpha * 1000) / 1000 : 0
            }
        ];
    });
}
function portraitTint(tiles, width, hovered = false) {
    if (width <= 0) return [];
    const shape = portraitHexagon(width, width * PHOTO_BOX_RATIO);
    const max = hovered ? TINT_MAX * HOVER_TINT_FACTOR : TINT_MAX;
    return tiles.map((tile)=>{
        const half = tile.size / 2;
        const distance = hexagonDistance(shape, tile.x + half, tile.y + half);
        const alpha = max * smoothstep(TINT_START, 1, distance);
        return {
            ...tile,
            alpha: alpha > 0.005 ? Math.round(alpha * 1000) / 1000 : 0
        };
    });
}
/**
 * Teammitglied als Waben-Karte (#1411): das Porträt erscheint als großes
 * Sechseck aus Wabenkacheln über die volle Bildbreite — außen leer, die
 * Kante mit der gewohnten Verlaufskante (frayedCoverage), gedrosselt; innen voll. Der Text steht darunter und überlagert die unteren ein
 * bis zwei Kachelreihen; dort weicht das Foto in derselben Ausfransung zurück
 * (Zeilen gemessen wie das Hero-Overlay, `useContentRects`). Raster,
 * Kachelgröße und Rendering wie im Hero-Slider (lib/hex, HexContentBackdrop,
 * HexTileGroup). Vor der ersten Messung (SSR) zeigt die Karte das Foto ungemasked.
 */ const TeamMemberCard = (props)=>{
    _s();
    const { name, jobTitle, photoUrl, phone, email, className, dataTestId = 'team-member-card' } = props;
    const layerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bodyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { stage, rects } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useContentRects"])(layerRef, bodyRef, 'active', TEXT_PADDING);
    const width = stage?.width ?? 0;
    const height = stage?.height ?? 0;
    const columns = width > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnsForWidth"])(width) : 0;
    const maskId = `team-photo-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, '')}`;
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // #1473: die Maske zeichnet das Bild, das next/image schon geladen hat (WebP
    // in der gewählten 1×/2×-Breite) — sonst holte das SVG das PNG-Original nach
    const [loaded, setLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const photoSrc = photoUrl && loaded?.url === photoUrl ? loaded.src : null;
    const tiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TeamMemberCard.useMemo[tiles]": ()=>photoUrl ? portraitTiles(width, height, columns, rects, hovered) : []
    }["TeamMemberCard.useMemo[tiles]"], [
        photoUrl,
        width,
        height,
        columns,
        rects,
        hovered
    ]);
    const tint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TeamMemberCard.useMemo[tint]": ()=>portraitTint(tiles, width, hovered)
    }["TeamMemberCard.useMemo[tint]"], [
        tiles,
        width,
        hovered
    ]);
    const masked = photoSrc !== null && tiles.some((tile)=>tile.alpha > 0);
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    // #1436: Kontakt als vCard speichern — nur mit Telefon oder E-Mail sinnvoll
    const hasContact = Boolean(phone?.trim() || email?.trim());
    const downloadVCard = ()=>{
        const vcard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vcard$2f$vcard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildVCard"])({
            name,
            jobTitle,
            phone,
            email
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$blobDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerBlobDownload"])(new Blob([
            vcard
        ], {
            type: 'text/vcard;charset=utf-8'
        }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vcard$2f$vcard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vcardFileName"])(name));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        "data-hovered": hovered ? 'true' : 'false',
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        onFocus: ()=>setHovered(true),
        onBlur: ()=>setHovered(false),
        "data-hex-stage": "true",
        "data-columns": columns || undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Photo"], {
                "data-testid": `${dataTestId}-avatar`,
                "data-has-photo": photoUrl ? 'true' : 'false',
                "data-masked": masked ? 'true' : 'false',
                children: photoUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                    src: photoUrl,
                    alt: name,
                    width: PHOTO_MAX_WIDTH,
                    height: Math.round(PHOTO_MAX_WIDTH * PHOTO_BOX_RATIO),
                    sizes: PHOTO_SIZES,
                    onLoad: (event)=>{
                        const img = event.currentTarget;
                        setLoaded({
                            url: photoUrl,
                            src: img.currentSrc || img.src
                        });
                    },
                    "data-testid": `${dataTestId}-photo`
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Initials"], {
                    "aria-hidden": "true",
                    children: initialen(name)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                    lineNumber: 298,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                ref: layerRef,
                "aria-hidden": "true",
                children: masked && photoSrc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tiles"], {
                    focusable: "false",
                    "data-testid": `${dataTestId}-tiles`,
                    "data-tiles": tiles.length,
                    style: {
                        '--edge-x': '0px',
                        '--edge-y': '0px',
                        '--edge-w': `${width}px`,
                        '--edge-h': `${height}px`
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                    id: maskId,
                                    maskUnits: "userSpaceOnUse",
                                    x: 0,
                                    y: 0,
                                    width: width,
                                    height: height,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexTileGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexTileGroup"], {
                                        tiles: tiles,
                                        color: "mask"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                        lineNumber: 326,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                    lineNumber: 318,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                                    id: `${maskId}-blur`,
                                    x: "-10%",
                                    y: "-10%",
                                    width: "120%",
                                    height: "120%",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                                        stdDeviation: width * 0.04
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                        lineNumber: 329,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                    id: `${maskId}-fade-grad`,
                                    x1: "0",
                                    y1: "0",
                                    x2: "0",
                                    y2: "1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "0",
                                            stopColor: "#fff",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: PHOTO_FADE,
                                            stopColor: "#fff",
                                            stopOpacity: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: 1 - PHOTO_FADE / 2,
                                            stopColor: "#fff",
                                            stopOpacity: "1"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                            lineNumber: 335,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                            offset: "1",
                                            stopColor: "#fff",
                                            stopOpacity: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                            lineNumber: 336,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                                    id: `${maskId}-fade`,
                                    maskUnits: "userSpaceOnUse",
                                    x: 0,
                                    y: width * PHOTO_TOP,
                                    width: width,
                                    height: width,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: 0,
                                        y: width * PHOTO_TOP,
                                        width: width,
                                        height: width,
                                        fill: `url(#${maskId}-fade-grad)`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                        lineNumber: 346,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                    lineNumber: 338,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                            lineNumber: 317,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            mask: `url(#${maskId})`,
                            "data-testid": `${dataTestId}-masked-photo`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                    href: photoSrc,
                                    x: -width * 0.15,
                                    y: -width * 0.1,
                                    width: width * 1.3,
                                    height: width * PHOTO_BOX_RATIO + width * 0.2,
                                    preserveAspectRatio: "xMidYMid slice",
                                    filter: `url(#${maskId}-blur)`,
                                    "data-testid": `${dataTestId}-photo-blur`
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                    lineNumber: 357,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("image", {
                                    href: photoSrc,
                                    x: 0,
                                    y: width * PHOTO_TOP,
                                    width: width,
                                    height: width,
                                    preserveAspectRatio: "xMidYMin slice",
                                    mask: `url(#${maskId}-fade)`,
                                    "data-testid": `${dataTestId}-photo-sharp`
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexTileGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexTileGroup"], {
                                    tiles: tint,
                                    color: "primary",
                                    dataTestId: `${dataTestId}-tint`
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                    lineNumber: 378,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                            lineNumber: 355,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                    lineNumber: 304,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body"], {
                ref: bodyRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Name"], {
                        "data-testid": `${dataTestId}-name`,
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Role"], {
                        "data-testid": `${dataTestId}-title`,
                        children: jobTitle
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Phone"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$ContactLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactLink"], {
                            kind: "tel",
                            value: phone,
                            place: "teamCard",
                            dataTestId: `${dataTestId}-phone`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                            lineNumber: 393,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                        lineNumber: 392,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Email"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$ContactLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactLink"], {
                            kind: "mail",
                            value: email,
                            place: "teamCard",
                            dataTestId: `${dataTestId}-email`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                            lineNumber: 398,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                        lineNumber: 397,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    hasContact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VCardButton"], {
                        type: "button",
                        onClick: downloadVCard,
                        "aria-label": tr('team.vcard.ariaLabel', {
                            name,
                            defaultValue: 'Kontakt von {{name}} als vCard speichern'
                        }),
                        "data-testid": `${dataTestId}-vcard`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VCardIcon"], {
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDownload$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                    lineNumber: 412,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VCardLabel"], {
                                children: tr('team.vcard.download', {
                                    defaultValue: 'Kontakt speichern'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                                lineNumber: 414,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                        lineNumber: 402,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx",
        lineNumber: 268,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TeamMemberCard, "N3js2V8AeVIWfGTl9ZLY5TNy96c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useContentRects"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = TeamMemberCard;
;
var _c;
__turbopack_context__.k.register(_c, "TeamMemberCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/TeamMemberCard/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx [app-client] (ecmascript) <locals>");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TeamMemberCard"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ContactFormBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactFormBlock",
    ()=>ContactFormBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/ContactForm/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TeamMemberCard/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TeamMemberCard/TeamMemberCard.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsAnimationReport.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const ContactFormBlock = ({ block, locale, dataTestId })=>{
    _s();
    const p = block.props;
    const t = (value)=>value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(value, locale) : undefined;
    const melden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"])('contactMember');
    const zeiger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ContactFormBlock.useCallback[zeiger]": (event)=>{
            if (event.pointerType === 'mouse') melden('hover');
        }
    }["ContactFormBlock.useCallback[zeiger]"], [
        melden
    ]);
    const klick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ContactFormBlock.useCallback[klick]": (event)=>{
            if (event.target?.closest('a, button')) melden('cta');
        }
    }["ContactFormBlock.useCallback[klick]"], [
        melden
    ]);
    const person = p.contact;
    const kachel = person ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsAnimationBoundary"], {
        element: "contactMember",
        fallback: null,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kachel, {
            onPointerEnter: zeiger,
            onClick: klick,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TeamMemberCard$2f$TeamMemberCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TeamMemberCard"], {
                name: person.name,
                jobTitle: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(person.jobTitle, locale),
                photoUrl: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(person.photoUrl),
                phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(person.phone),
                email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(person.email),
                dataTestId: `${dataTestId}-contact-member`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ContactFormBlock.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ContactFormBlock.tsx",
            lineNumber: 46,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ContactFormBlock.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : undefined;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactForm"], {
        topics: p.topics,
        headline: t(p.headline),
        description: t(p.description),
        privacyHref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(p.privacyHref),
        successTitle: t(p.successTitle),
        successText: t(p.successText),
        aside: {
            title: t(p.asideTitle),
            phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(p.phone),
            email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(p.email),
            address: t(p.address),
            hours: t(p.hours),
            contact: kachel
        },
        locale: locale === 'en' ? 'en' : 'de',
        dataTestId: `${dataTestId}-contact-form`
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ContactFormBlock.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ContactFormBlock, "BxfwTNjUDldMLkckal/H+AbSx9c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsAnimationReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsAnimationReport"]
    ];
});
_c = ContactFormBlock;
const Kachel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactFormBlock__Kachel",
    componentId: "sc-2e246f30-0"
})`
  width: 100%;
`;
_c1 = Kachel;
var _c, _c1;
__turbopack_context__.k.register(_c, "ContactFormBlock");
__turbopack_context__.k.register(_c1, "Kachel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ASIDE_INK",
    ()=>ASIDE_INK,
    "Aside",
    ()=>Aside,
    "AsideColumn",
    ()=>AsideColumn,
    "AsideContact",
    ()=>AsideContact,
    "AsideItem",
    ()=>AsideItem,
    "AsideList",
    ()=>AsideList,
    "AsideTitle",
    ()=>AsideTitle,
    "Banner",
    ()=>Banner,
    "Card",
    ()=>Card,
    "Chip",
    ()=>Chip,
    "Chips",
    ()=>Chips,
    "Counter",
    ()=>Counter,
    "Details",
    ()=>Details,
    "Field",
    ()=>Field,
    "FieldError",
    ()=>FieldError,
    "Fieldset",
    ()=>Fieldset,
    "Footer",
    ()=>Footer,
    "Form",
    ()=>Form,
    "Grid",
    ()=>Grid,
    "GroupLabel",
    ()=>GroupLabel,
    "Head",
    ()=>Head,
    "Headline",
    ()=>Headline,
    "Input",
    ()=>Input,
    "Label",
    ()=>Label,
    "Lead",
    ()=>Lead,
    "Legend",
    ()=>Legend,
    "Optional",
    ()=>Optional,
    "Privacy",
    ()=>Privacy,
    "Required",
    ()=>Required,
    "Root",
    ()=>Root,
    "Select",
    ()=>Select,
    "Step",
    ()=>Step,
    "SubmitRow",
    ()=>SubmitRow,
    "Success",
    ()=>Success,
    "SuccessIcon",
    ()=>SuccessIcon,
    "TOPIC_MIN_PX",
    ()=>TOPIC_MIN_PX,
    "Textarea",
    ()=>Textarea,
    "TopicCard",
    ()=>TopicCard,
    "TopicCheck",
    ()=>TopicCheck,
    "TopicHint",
    ()=>TopicHint,
    "TopicTitle",
    ()=>TopicTitle,
    "Topics",
    ()=>Topics,
    "Trap",
    ()=>Trap,
    "asideFace",
    ()=>asideFace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
'use client';
;
;
/*
 * #1435: Kontaktformular der öffentlichen Seiten. Farben ausschließlich aus
 * palette.site (hell und dunkel), Formularfelder eigens gestaltet — die
 * App-Felder (FormEditableField) gehören zur Arbeitsoberfläche, nicht zur
 * Website. Kein border-box-Reset im Projekt: jedes Feld setzt es selbst.
 */ const ring = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  outline: none;
  box-shadow: 0 0 0 3px ${({ theme })=>theme.palette.site.tint};
  border-color: ${({ theme })=>theme.palette.site.blue};
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "ContactForm.styles__Root",
    componentId: "sc-6ea461e7-0"
})`
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);
  gap: 32px;
  align-items: start;
  color: ${({ theme })=>theme.palette.site.text};
  font-family: ${({ theme })=>theme.font.secondaryFamily};

  @media only screen and (max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devices"].tabletportrait}px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;
const Card = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__Card",
    componentId: "sc-6ea461e7-1"
})`
  box-sizing: border-box;
  padding: 40px;
  border: 1px solid ${({ theme })=>theme.palette.site.border};
  border-radius: 24px;
  background: ${({ theme })=>theme.palette.site.card};
  box-shadow: ${({ theme })=>theme.palette.site.shadow};

  @media only screen and (max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devices"].smartphonelandscape}px) {
    padding: 24px 20px;
  }
`;
const Head = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].header.withConfig({
    displayName: "ContactForm.styles__Head",
    componentId: "sc-6ea461e7-2"
})`
  margin-bottom: 32px;
  /* globals.css gibt jedem header die Seitenfarbe: auf der weißen Karte im Dunkelmodus eine dunkle Box */
  background: transparent;
`;
const Headline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "ContactForm.styles__Headline",
    componentId: "sc-6ea461e7-3"
})`
  margin: 0 0 12px;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme })=>theme.palette.site.heading};

  @media only screen and (max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devices"].smartphonelandscape}px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
const Lead = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ContactForm.styles__Lead",
    componentId: "sc-6ea461e7-4"
})`
  margin: 0;
  font-size: 16px;
  line-height: 26px;
`;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].form.withConfig({
    displayName: "ContactForm.styles__Form",
    componentId: "sc-6ea461e7-5"
})`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const Fieldset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].fieldset.withConfig({
    displayName: "ContactForm.styles__Fieldset",
    componentId: "sc-6ea461e7-6"
})`
  margin: 0;
  padding: 0;
  border: 0;
  min-width: 0;
`;
const Legend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].legend.withConfig({
    displayName: "ContactForm.styles__Legend",
    componentId: "sc-6ea461e7-7"
})`
  display: flex;
  align-items: baseline;
  gap: 12px;
  padding: 0;
  margin-bottom: 16px;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 18px;
  line-height: 26px;
  font-weight: 700;
  color: ${({ theme })=>theme.palette.site.heading};
`;
const Step = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ContactForm.styles__Step",
    componentId: "sc-6ea461e7-8"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  font-size: 14px;
  line-height: 1;
  color: ${({ theme })=>theme.palette.site.card};
  background: ${({ theme })=>theme.palette.site.blue};
`;
const TOPIC_MIN_PX = 160;
const Topics = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__Topics",
    componentId: "sc-6ea461e7-9"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;

  > * {
    flex: 1 1 ${TOPIC_MIN_PX}px;
    min-width: 0;
  }
`;
const TopicCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "ContactForm.styles__TopicCard",
    componentId: "sc-6ea461e7-10"
})`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding: 16px;
  min-height: 132px;
  border: 2px solid ${({ theme })=>theme.palette.site.border};
  border-radius: 16px;
  background: ${({ theme })=>theme.palette.site.card};
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${({ theme })=>theme.palette.site.blue};
    box-shadow: ${({ theme })=>theme.palette.site.shadow};
    transform: translateY(-2px);
  }

  &[data-selected='true'] {
    border-color: ${({ theme })=>theme.palette.site.green};
    background: ${({ theme })=>theme.palette.site.greenTint};
  }

  &:has(input:focus-visible) {
    ${ring}
  }

  input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin: 0;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;

    &:hover {
      transform: none;
    }
  }
`;
const TopicTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ContactForm.styles__TopicTitle",
    componentId: "sc-6ea461e7-11"
})`
  font-size: 16px;
  line-height: 22px;
  font-weight: 700;
  color: ${({ theme })=>theme.palette.site.heading};
`;
const TopicHint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ContactForm.styles__TopicHint",
    componentId: "sc-6ea461e7-12"
})`
  font-size: 13px;
  line-height: 18px;
  color: ${({ theme })=>theme.palette.site.muted};
`;
const TopicCheck = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ContactForm.styles__TopicCheck",
    componentId: "sc-6ea461e7-13"
})`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme })=>theme.palette.site.green};
  color: #ffffff;
  opacity: 0;
  transform: scale(0.6);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  svg {
    width: 14px;
    height: 14px;
  }

  [data-selected='true'] > & {
    opacity: 1;
    transform: scale(1);
  }
`;
const aufklappen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; transform: translateY(-6px); }
  to { opacity: 1; transform: translateY(0); }
`;
const Details = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__Details",
    componentId: "sc-6ea461e7-14"
})`
  margin-top: 20px;
  padding: 20px;
  border-radius: 16px;
  background: ${({ theme })=>theme.palette.site.tint};
  animation: ${aufklappen} 0.25s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const Grid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__Grid",
    componentId: "sc-6ea461e7-15"
})`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 20px;

  @media only screen and (max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devices"].smartphonelandscape}px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;
const Field = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__Field",
    componentId: "sc-6ea461e7-16"
})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  ${({ $wide })=>$wide && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      grid-column: 1 / -1;
    `}
`;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "ContactForm.styles__Label",
    componentId: "sc-6ea461e7-17"
})`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${({ theme })=>theme.palette.site.heading};
`;
const GroupLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ContactForm.styles__GroupLabel",
    componentId: "sc-6ea461e7-18"
})`
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: ${({ theme })=>theme.palette.site.heading};
`;
const Required = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ContactForm.styles__Required",
    componentId: "sc-6ea461e7-19"
})`
  margin-left: 2px;
  color: ${({ theme })=>theme.palette.site.red};
`;
const Optional = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ContactForm.styles__Optional",
    componentId: "sc-6ea461e7-20"
})`
  margin-left: 6px;
  font-weight: 400;
  color: ${({ theme })=>theme.palette.site.muted};
`;
const feld = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 14px;
  border: 1px solid ${({ theme })=>theme.palette.site.border};
  border-radius: 12px;
  background: ${({ theme })=>theme.palette.site.card};
  color: ${({ theme })=>theme.palette.site.heading};
  font: inherit;
  font-size: 16px;
  line-height: 22px;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &::placeholder {
    color: ${({ theme })=>theme.palette.site.muted};
  }

  &:focus-visible {
    ${ring}
  }

  &[aria-invalid='true'] {
    border-color: ${({ theme })=>theme.palette.site.red};
  }
`;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "ContactForm.styles__Input",
    componentId: "sc-6ea461e7-21"
})`
  ${feld}
  min-height: 48px;
`;
const Select = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].select.withConfig({
    displayName: "ContactForm.styles__Select",
    componentId: "sc-6ea461e7-22"
})`
  ${feld}
  min-height: 48px;
  appearance: none;
  padding-right: 40px;
  background-image:
    linear-gradient(45deg, transparent 50%, currentColor 50%),
    linear-gradient(135deg, currentColor 50%, transparent 50%);
  background-position:
    calc(100% - 20px) 50%,
    calc(100% - 14px) 50%;
  background-size: 6px 6px;
  background-repeat: no-repeat;
`;
const Textarea = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].textarea.withConfig({
    displayName: "ContactForm.styles__Textarea",
    componentId: "sc-6ea461e7-23"
})`
  ${feld}
  min-height: 160px;
  resize: vertical;
`;
const Counter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ContactForm.styles__Counter",
    componentId: "sc-6ea461e7-24"
})`
  align-self: flex-end;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme })=>theme.palette.site.muted};
`;
const Chips = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__Chips",
    componentId: "sc-6ea461e7-25"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
const Chip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "ContactForm.styles__Chip",
    componentId: "sc-6ea461e7-26"
})`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border: 1px solid ${({ theme })=>theme.palette.site.border};
  border-radius: 999px;
  background: ${({ theme })=>theme.palette.site.card};
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease;

  &:hover {
    border-color: ${({ theme })=>theme.palette.site.blue};
  }

  &[data-selected='true'] {
    border-color: ${({ theme })=>theme.palette.site.blue};
    background: ${({ theme })=>theme.palette.site.blue};
    color: ${({ theme })=>theme.palette.site.card};
  }

  &:has(input:focus-visible) {
    ${ring}
  }

  input {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    margin: 0;
    pointer-events: none;
  }
`;
const FieldError = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ContactForm.styles__FieldError",
    componentId: "sc-6ea461e7-27"
})`
  font-size: 13px;
  line-height: 18px;
  color: ${({ theme })=>theme.palette.site.red};
`;
const Trap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__Trap",
    componentId: "sc-6ea461e7-28"
})`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
const Footer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__Footer",
    componentId: "sc-6ea461e7-29"
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const SubmitRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__SubmitRow",
    componentId: "sc-6ea461e7-30"
})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
const Privacy = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "ContactForm.styles__Privacy",
    componentId: "sc-6ea461e7-31"
})`
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme })=>theme.palette.site.muted};

  && a {
    color: ${({ theme })=>theme.palette.site.blue};
    text-decoration: underline;
  }
`;
const Banner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__Banner",
    componentId: "sc-6ea461e7-32"
})`
  box-sizing: border-box;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme })=>theme.palette.site.red};
  color: ${({ theme })=>theme.palette.site.heading};
  background: ${({ theme })=>theme.palette.site.card};
  font-size: 14px;
  line-height: 20px;
`;
const Success = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__Success",
    componentId: "sc-6ea461e7-33"
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 0;
  animation: ${aufklappen} 0.3s ease both;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const SuccessIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ContactForm.styles__SuccessIcon",
    componentId: "sc-6ea461e7-34"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${({ theme })=>theme.palette.site.greenTint};
  color: ${({ theme })=>theme.palette.site.green};

  svg {
    width: 28px;
    height: 28px;
  }
`;
const asideFace = (theme)=>theme.palette.site.navy;
const ASIDE_INK = '#ffffff';
const AsideColumn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__AsideColumn",
    componentId: "sc-6ea461e7-35"
})`
  position: sticky;
  top: 112px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.default};

  @media only screen and (max-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devices"].tabletportrait}px) {
    position: static;
  }
`;
const Aside = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].aside.withConfig({
    displayName: "ContactForm.styles__Aside",
    componentId: "sc-6ea461e7-36"
})`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 32px;
  border-radius: 24px;
  background: ${({ theme })=>asideFace(theme)};
  color: ${ASIDE_INK};
`;
const AsideTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "ContactForm.styles__AsideTitle",
    componentId: "sc-6ea461e7-37"
})`
  margin: 0;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: #ffffff;
`;
const AsideList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "ContactForm.styles__AsideList",
    componentId: "sc-6ea461e7-38"
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const AsideContact = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ContactForm.styles__AsideContact",
    componentId: "sc-6ea461e7-39"
})`
  width: 100%;
  max-width: 20rem;
  margin: 0 auto;
`;
const AsideItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "ContactForm.styles__AsideItem",
    componentId: "sc-6ea461e7-40"
})`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 15px;
  line-height: 22px;
  white-space: pre-line;

  svg {
    flex: none;
    width: 20px;
    height: 20px;
    margin-top: 1px;
  }

  && a {
    color: #ffffff;
    text-decoration: none;
    overflow-wrap: anywhere;
  }

  && a:hover,
  && a:focus-visible {
    text-decoration: underline;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.tsx [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Altcha$2f$Altcha$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Altcha/Altcha.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/IconChip/IconChip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCheck/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEmail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconEmail/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLocation$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLocation/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ContactLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$ContactLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ContactLink/ContactLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPhone$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPhone/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
// #1531: bewusst nicht aus contactSchema — das zöge zod (63 KB) in den Browser
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/contact/contactInput.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactValidate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/contact/contactValidate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/contact/contactTopics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const LEER = {
    topic: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    details: {}
};
/** ALTCHA-Lösungen gelten zehn Minuten — nach acht wird vor dem Absenden neu gelöst */ const ALTCHA_FRISCH_MS = 8 * 60 * 1000;
/** Reihenfolge der Felder für den Fokus auf den ersten Fehler */ const FELD_REIHENFOLGE = [
    'topic',
    'name',
    'email',
    'company',
    'phone',
    'message'
];
function ContactForm({ topics, headline, description, // #1563: mit Schluss-Slash — schlichtes <a>, ohne ihn käme erst ein 308
privacyHref = '/privacy/', successTitle, successText, aside, locale = 'de', dataTestId = 'contact-form' }) {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? '';
    const baseId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])().replace(/:/g, '');
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const liste = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContactForm.useMemo[liste]": ()=>{
            const gewaehlt = (topics ?? []).filter({
                "ContactForm.useMemo[liste].gewaehlt": (t, i, a)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_TOPICS"].includes(t) && a.indexOf(t) === i
            }["ContactForm.useMemo[liste].gewaehlt"]);
            return gewaehlt.length > 0 ? gewaehlt : [
                ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_TOPICS"]
            ];
        }
    }["ContactForm.useMemo[liste]"], [
        topics
    ]);
    const [werte, setWerte] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(LEER);
    const [falle, setFalle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [fehler, setFehler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [formFehler, setFormFehler] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [altcha, setAltcha] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [altchaKey, setAltchaKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const holeToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ContactForm.useCallback[holeToken]": async ()=>{
            try {
                const res = await fetch('/api/contact-requests/token/', {
                    credentials: 'same-origin',
                    cache: 'no-store'
                });
                if (!res.ok) return '';
                const json = await res.json();
                const neu = typeof json.token === 'string' ? json.token : '';
                setToken(neu);
                return neu;
            } catch  {
                return '';
            }
        }
    }["ContactForm.useCallback[holeToken]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactForm.useEffect": ()=>{
            void holeToken();
        }
    }["ContactForm.useEffect"], [
        holeToken
    ]);
    // #1967: Anliegen aus der Adresse vorwählen (`?anliegen=<topic>`), nur bekannte
    // und angebotene Werte, nur solange noch nichts gewählt ist. Erst nach dem
    // Mounten gelesen: das Server-HTML bleibt für alle Adressen gleich.
    const [vorausgewaehlt, setVorausgewaehlt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactForm.useEffect": ()=>{
            const topic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactTopicFromSearch"])(window.location.search, liste);
            if (!topic) return;
            setWerte({
                "ContactForm.useEffect": (w)=>w.topic ? w : {
                        ...w,
                        topic
                    }
            }["ContactForm.useEffect"]);
            setVorausgewaehlt(true);
        }
    }["ContactForm.useEffect"], [
        liste
    ]);
    const altchaNeu = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ContactForm.useCallback[altchaNeu]": ()=>{
            setAltcha(null);
            setAltchaKey({
                "ContactForm.useCallback[altchaNeu]": (k)=>k + 1
            }["ContactForm.useCallback[altchaNeu]"]);
        }
    }["ContactForm.useCallback[altchaNeu]"], []);
    const onSolved = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ContactForm.useCallback[onSolved]": (payload)=>setAltcha({
                payload,
                at: Date.now()
            })
    }["ContactForm.useCallback[onSolved]"], []);
    const setze = (key, value)=>{
        setWerte((w)=>({
                ...w,
                [key]: value
            }));
        setFehler((f)=>{
            if (!f[key]) return f;
            const { [key]: _weg, ...rest } = f;
            return rest;
        });
    };
    const setzeDetail = (key, value)=>setWerte((w)=>({
                ...w,
                details: {
                    ...w.details,
                    [key]: value
                }
            }));
    const topicDef = liste.includes(werte.topic) ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_TOPIC_DEFS"][werte.topic] : null;
    const fehlerText = (code)=>{
        if (!code) return undefined;
        if (code === 'required') return tr('contact.form.error.required', {
            defaultValue: 'Bitte ausfüllen.'
        });
        if (code === 'tooShort') return tr('contact.form.error.tooShort', {
            defaultValue: 'Mindestens 10 Zeichen.'
        });
        return tr('contact.form.error.invalid', {
            defaultValue: 'Bitte prüfen Sie die Eingabe.'
        });
    };
    const fokusAufErstenFehler = (errs)=>{
        const erstes = FELD_REIHENFOLGE.find((f)=>errs[f]);
        if (!erstes) return;
        const el = formRef.current?.querySelector(`[data-field="${erstes}"]`);
        el?.focus();
    };
    const absenden = async (event)=>{
        event.preventDefault();
        if (status === 'submitting') return;
        setFormFehler(null);
        // Bereinigen wie der Server und zurückschreiben — die Person sieht, was ankommt
        const payload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeContactPayload"])({
            ...werte,
            locale,
            sourcePath: pathname,
            token,
            altcha: altcha?.payload ?? '',
            website: falle
        });
        const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactInputOf"])(payload);
        setWerte({
            topic: input.topic,
            name: input.name,
            company: input.company,
            email: input.email,
            phone: input.phone,
            message: input.message,
            details: input.details
        });
        // Dieselben Regeln wie das Schema der API, ohne zod (#1531); die API prüft maßgeblich
        const geprueft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactValidate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkContactInput"])(input);
        if (!geprueft.ok) {
            setFehler(geprueft.errors);
            fokusAufErstenFehler(geprueft.errors);
            return;
        }
        setFehler({});
        if (!altcha || Date.now() - altcha.at > ALTCHA_FRISCH_MS) {
            if (altcha) altchaNeu();
            setFormFehler('altcha_pending');
            return;
        }
        const aktuellesToken = token || await holeToken();
        setStatus('submitting');
        try {
            const res = await fetch('/api/contact-requests/', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...payload,
                    token: aktuellesToken
                })
            });
            if (res.ok) {
                setStatus('success');
                setWerte(LEER);
                return;
            }
            const json = await res.json().catch(()=>({}));
            // Eine verbrauchte oder abgelehnte Lösung gilt nie wieder — immer neu lösen
            altchaNeu();
            setStatus('idle');
            if (res.status === 429) setFormFehler('rate_limited');
            else if (json.error === 'unavailable') setFormFehler('unavailable');
            else if (json.error === 'token_expired' || json.error === 'token_invalid') {
                await holeToken();
                setFormFehler('token_expired');
            } else if (json.error === 'altcha_failed') setFormFehler('altcha_failed');
            else if (json.error === 'validation' && json.fields) {
                setFehler(json.fields);
                setFormFehler('validation');
                fokusAufErstenFehler(json.fields);
            } else setFormFehler('unknown');
        } catch  {
            altchaNeu();
            setStatus('idle');
            setFormFehler('network');
        }
    };
    const formFehlerText = {
        rate_limited: tr('contact.form.error.rateLimited', {
            defaultValue: 'Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es später erneut.'
        }),
        token_expired: tr('contact.form.error.tokenExpired', {
            defaultValue: 'Das Formular war zu lange geöffnet. Bitte senden Sie es erneut.'
        }),
        altcha_failed: tr('contact.form.error.altchaFailed', {
            defaultValue: 'Die Sicherheitsprüfung ist abgelaufen. Sie wird erneuert — bitte senden Sie erneut.'
        }),
        altcha_pending: tr('contact.form.error.altchaPending', {
            defaultValue: 'Die Sicherheitsprüfung läuft noch. Bitte senden Sie in einem Moment erneut.'
        }),
        validation: tr('contact.form.error.validation', {
            defaultValue: 'Bitte prüfen Sie die markierten Felder.'
        }),
        network: tr('contact.form.error.network', {
            defaultValue: 'Keine Verbindung. Bitte prüfen Sie Ihre Internetverbindung.'
        }),
        // #1725: Salesforce nicht erreichbar; #1722 (Moritz 15:48): kein Verweis auf Mail im Text
        unavailable: tr('contact.form.error.unavailable', {
            defaultValue: 'Die Anfrage konnte gerade nicht übermittelt werden. Bitte versuchen Sie es später erneut.'
        }),
        unknown: tr('contact.form.error.unknown', {
            defaultValue: 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.'
        })
    };
    // Standards aus CONTACT_DETAIL_VALUE_LABELS — dieselben Werte stehen in der Case-Beschreibung (#1722)
    const materialLabel = (m)=>m === 'mixed' ? tr('contact.material.mixed', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].material.mixed
        }) : m === 'other' ? tr('contact.material.other', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].material.other
        }) : m;
    const formLabel = {
        regrind: tr('contact.materialForm.regrind', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].materialForm.regrind
        }),
        regranulate: tr('contact.materialForm.regranulate', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].materialForm.regranulate
        }),
        bales: tr('contact.materialForm.bales', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].materialForm.bales
        }),
        production_waste: tr('contact.materialForm.production_waste', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].materialForm.production_waste
        }),
        post_consumer: tr('contact.materialForm.post_consumer', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].materialForm.post_consumer
        }),
        other: tr('contact.materialForm.other', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].materialForm.other
        })
    };
    const volumeLabel = {
        lt1: tr('contact.volume.lt1', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].volume.lt1
        }),
        '1to10': tr('contact.volume.1to10', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].volume['1to10']
        }),
        '10to50': tr('contact.volume.10to50', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].volume['10to50']
        }),
        '50to200': tr('contact.volume.50to200', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].volume['50to200']
        }),
        gt200: tr('contact.volume.gt200', {
            defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_DETAIL_VALUE_LABELS"].volume.gt200
        })
    };
    /** #1725: bei freien Anliegen ist die Nachricht Pflicht (wie Schema und Browser-Prüfung) */ const nachrichtPflicht = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_MESSAGE_REQUIRED_TOPICS"].includes(werte.topic);
    const optional = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Optional"], {
        children: tr('contact.form.optional', {
            defaultValue: '(optional)'
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
        lineNumber: 362,
        columnNumber: 5
    }, this);
    const pflicht = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Required"], {
        "aria-hidden": "true",
        children: "*"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
        lineNumber: 364,
        columnNumber: 19
    }, this);
    const bitteWaehlen = tr('contact.form.select', {
        defaultValue: 'Bitte wählen'
    });
    const feldProps = (name)=>({
            id: `${baseId}-${name}`,
            'data-field': name,
            'data-testid': `${dataTestId}-${name}`,
            'aria-invalid': fehler[name] ? 'true' : undefined,
            'aria-describedby': fehler[name] ? `${baseId}-${name}-error` : undefined
        });
    const fehlerZeile = (name)=>fehler[name] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldError"], {
            id: `${baseId}-${name}-error`,
            "data-testid": `${dataTestId}-${name}-error`,
            "data-error": fehler[name],
            children: fehlerText(fehler[name])
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
            lineNumber: 376,
            columnNumber: 7
        }, this) : null;
    const hatKarte = Boolean(aside && (aside.phone || aside.email || aside.address || aside.hours));
    const hatAside = Boolean(hatKarte || aside?.contact);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-testid": dataTestId,
        "data-status": status,
        "data-topic": werte.topic || undefined,
        "data-preselected": vorausgewaehlt ? 'true' : 'false',
        "data-error": formFehler ?? undefined,
        "data-token": token ? 'ready' : 'pending',
        "data-altcha": altcha ? 'solved' : 'pending',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: status === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Success"], {
                    role: "status",
                    "data-testid": `${dataTestId}-success`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SuccessIcon"], {
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                lineNumber: 402,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                            lineNumber: 401,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                            children: successTitle ?? tr('contact.form.successTitle', {
                                defaultValue: 'Vielen Dank für Ihre Anfrage!'
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                            lineNumber: 404,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lead"], {
                            children: successText ?? tr('contact.form.successText', {
                                defaultValue: 'Wir haben Ihre Nachricht erhalten und melden uns in der Regel innerhalb von zwei Werktagen.'
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                            lineNumber: 408,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].SECONDARY,
                            onClick: ()=>{
                                setStatus('idle');
                                altchaNeu();
                                void holeToken();
                            },
                            dataTestId: `${dataTestId}-again`,
                            children: tr('contact.form.again', {
                                defaultValue: 'Weitere Anfrage senden'
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                            lineNumber: 415,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                    lineNumber: 400,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        (headline || description) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Head"], {
                            children: [
                                headline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                                    children: headline
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                    lineNumber: 431,
                                    columnNumber: 30
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Lead"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                    lineNumber: 432,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                            lineNumber: 430,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                            ref: formRef,
                            noValidate: true,
                            onSubmit: absenden,
                            "data-testid": `${dataTestId}-form`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fieldset"], {
                                    role: "radiogroup",
                                    "aria-required": "true",
                                    "aria-invalid": fehler['topic'] ? 'true' : undefined,
                                    "aria-describedby": fehler['topic'] ? `${baseId}-topic-error` : undefined,
                                    "data-testid": `${dataTestId}-topics`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Step"], {
                                                    "aria-hidden": "true",
                                                    children: "1"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        tr('contact.form.topicLegend', {
                                                            defaultValue: 'Worum geht es?'
                                                        }),
                                                        pflicht
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 445,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                            lineNumber: 443,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Topics"], {
                                            "data-testid": `${dataTestId}-topic-grid`,
                                            "data-count": liste.length,
                                            children: liste.map((key, index)=>{
                                                const def = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_TOPIC_DEFS"][key];
                                                const selected = werte.topic === key;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopicCard"], {
                                                    "data-selected": selected ? 'true' : 'false',
                                                    "data-testid": `${dataTestId}-topic-${key}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: `${baseId}-topic`,
                                                            value: key,
                                                            checked: selected,
                                                            onChange: ()=>setze('topic', key),
                                                            "data-field": index === 0 ? 'topic' : undefined
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$IconChip$2f$IconChip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChip"], {
                                                            name: def.icon,
                                                            tone: selected ? 'green' : 'blue'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 468,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopicTitle"], {
                                                            children: tr(def.labelKey, {
                                                                defaultValue: def.labelDefault
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 469,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopicHint"], {
                                                            children: tr(def.hintKey, {
                                                                defaultValue: def.hintDefault
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 472,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TopicCheck"], {
                                                            "aria-hidden": "true",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCheck$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                lineNumber: 476,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 475,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 455,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                            lineNumber: 450,
                                            columnNumber: 17
                                        }, this),
                                        fehlerZeile('topic'),
                                        topicDef && topicDef.details.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Details"], {
                                            "data-testid": `${dataTestId}-details`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                                                children: [
                                                    topicDef.details.includes('material') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                htmlFor: `${baseId}-material`,
                                                                children: [
                                                                    tr('contact.form.material', {
                                                                        defaultValue: 'Kunststoff'
                                                                    }),
                                                                    optional
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                lineNumber: 489,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                                id: `${baseId}-material`,
                                                                value: werte.details.material ?? '',
                                                                onChange: (e)=>setzeDetail('material', e.target.value),
                                                                "data-testid": `${dataTestId}-material`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: bitteWaehlen
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                        lineNumber: 499,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_MATERIALS"].map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: m,
                                                                            children: materialLabel(m)
                                                                        }, m, false, {
                                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                            lineNumber: 501,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                lineNumber: 493,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 25
                                                    }, this),
                                                    topicDef.details.includes('materialForm') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                htmlFor: `${baseId}-materialForm`,
                                                                children: [
                                                                    tr('contact.form.materialForm', {
                                                                        defaultValue: 'Form'
                                                                    }),
                                                                    optional
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                lineNumber: 510,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                                                id: `${baseId}-materialForm`,
                                                                value: werte.details.materialForm ?? '',
                                                                onChange: (e)=>setzeDetail('materialForm', e.target.value),
                                                                "data-testid": `${dataTestId}-materialForm`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                        value: "",
                                                                        children: bitteWaehlen
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                        lineNumber: 520,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_MATERIAL_FORMS"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: f,
                                                                            children: formLabel[f]
                                                                        }, f, false, {
                                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                            lineNumber: 522,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                lineNumber: 514,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                        lineNumber: 509,
                                                        columnNumber: 25
                                                    }, this),
                                                    topicDef.details.includes('volume') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                        $wide: true,
                                                        role: "radiogroup",
                                                        "aria-labelledby": `${baseId}-volume-label`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupLabel"], {
                                                                id: `${baseId}-volume-label`,
                                                                children: [
                                                                    tr('contact.form.volume', {
                                                                        defaultValue: 'Menge pro Monat'
                                                                    }),
                                                                    optional
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                lineNumber: 531,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chips"], {
                                                                "data-testid": `${dataTestId}-volume`,
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_VOLUMES"].map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                                                                        "data-selected": werte.details.volume === v ? 'true' : 'false',
                                                                        "data-testid": `${dataTestId}-volume-${v}`,
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                type: "radio",
                                                                                name: `${baseId}-volume`,
                                                                                value: v,
                                                                                checked: werte.details.volume === v,
                                                                                onChange: ()=>setzeDetail('volume', v)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                                lineNumber: 542,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            volumeLabel[v]
                                                                        ]
                                                                    }, v, true, {
                                                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                        lineNumber: 537,
                                                                        columnNumber: 31
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                lineNumber: 535,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 25
                                                    }, this),
                                                    topicDef.details.includes('application') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                        $wide: true,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                htmlFor: `${baseId}-application`,
                                                                children: [
                                                                    tr('contact.form.application', {
                                                                        defaultValue: 'Anwendung / Einsatzzweck'
                                                                    }),
                                                                    optional
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                lineNumber: 557,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                id: `${baseId}-application`,
                                                                value: werte.details.application ?? '',
                                                                maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].application,
                                                                onChange: (e)=>setzeDetail('application', e.target.value),
                                                                "data-testid": `${dataTestId}-application`
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                lineNumber: 563,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                        lineNumber: 556,
                                                        columnNumber: 25
                                                    }, this),
                                                    topicDef.details.includes('postalCode') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                                htmlFor: `${baseId}-postalCode`,
                                                                children: [
                                                                    tr('contact.form.postalCode', {
                                                                        defaultValue: 'PLZ des Standorts'
                                                                    }),
                                                                    optional
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                lineNumber: 574,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                id: `${baseId}-postalCode`,
                                                                value: werte.details.postalCode ?? '',
                                                                maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].postalCode,
                                                                autoComplete: "postal-code",
                                                                inputMode: "text",
                                                                onChange: (e)=>setzeDetail('postalCode', e.target.value),
                                                                "data-testid": `${dataTestId}-postalCode`
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                                lineNumber: 578,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                        lineNumber: 573,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                lineNumber: 486,
                                                columnNumber: 21
                                            }, this)
                                        }, topicDef.key, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                            lineNumber: 485,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                    lineNumber: 436,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fieldset"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Step"], {
                                                    "aria-hidden": "true",
                                                    children: "2"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 596,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: tr('contact.form.contactLegend', {
                                                        defaultValue: 'Ihre Kontaktdaten'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 597,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                            lineNumber: 595,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: `${baseId}-name`,
                                                            children: [
                                                                tr('contact.form.name', {
                                                                    defaultValue: 'Name'
                                                                }),
                                                                pflicht
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 603,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            ...feldProps('name'),
                                                            value: werte.name,
                                                            maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].name,
                                                            autoComplete: "name",
                                                            required: true,
                                                            onChange: (e)=>setze('name', e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 607,
                                                            columnNumber: 21
                                                        }, this),
                                                        fehlerZeile('name')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: `${baseId}-email`,
                                                            children: [
                                                                tr('contact.form.email', {
                                                                    defaultValue: 'E-Mail'
                                                                }),
                                                                pflicht
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 618,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            ...feldProps('email'),
                                                            type: "email",
                                                            value: werte.email,
                                                            maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].email,
                                                            autoComplete: "email",
                                                            inputMode: "email",
                                                            required: true,
                                                            onChange: (e)=>setze('email', e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 622,
                                                            columnNumber: 21
                                                        }, this),
                                                        fehlerZeile('email')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 617,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: `${baseId}-company`,
                                                            children: [
                                                                tr('contact.form.company', {
                                                                    defaultValue: 'Firma'
                                                                }),
                                                                optional
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            ...feldProps('company'),
                                                            value: werte.company,
                                                            maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].company,
                                                            autoComplete: "organization",
                                                            onChange: (e)=>setze('company', e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 639,
                                                            columnNumber: 21
                                                        }, this),
                                                        fehlerZeile('company')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: `${baseId}-phone`,
                                                            children: [
                                                                tr('contact.form.phone', {
                                                                    defaultValue: 'Telefon'
                                                                }),
                                                                optional
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 649,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            ...feldProps('phone'),
                                                            type: "tel",
                                                            value: werte.phone,
                                                            maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].phone,
                                                            autoComplete: "tel",
                                                            inputMode: "tel",
                                                            onChange: (e)=>setze('phone', e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 653,
                                                            columnNumber: 21
                                                        }, this),
                                                        fehlerZeile('phone')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 648,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                    $wide: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                            htmlFor: `${baseId}-message`,
                                                            children: [
                                                                tr('contact.form.message', {
                                                                    defaultValue: 'Ihre Nachricht'
                                                                }),
                                                                nachrichtPflicht ? pflicht : optional
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 665,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                            ...feldProps('message'),
                                                            "aria-required": nachrichtPflicht ? 'true' : undefined,
                                                            value: werte.message,
                                                            maxLength: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].message,
                                                            onChange: (e)=>setze('message', e.target.value)
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 669,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Counter"], {
                                                            "aria-live": "polite",
                                                            "data-testid": `${dataTestId}-message-count`,
                                                            children: [
                                                                werte.message.length,
                                                                " / ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].message
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 676,
                                                            columnNumber: 21
                                                        }, this),
                                                        fehlerZeile('message')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                            lineNumber: 601,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                    lineNumber: 594,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trap"], {
                                    "aria-hidden": "true",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: `${baseId}-website`,
                                            children: "Website"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                            lineNumber: 686,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            id: `${baseId}-website`,
                                            name: "website",
                                            type: "text",
                                            tabIndex: -1,
                                            autoComplete: "off",
                                            value: falle,
                                            onChange: (e)=>setFalle(e.target.value),
                                            "data-testid": `${dataTestId}-trap`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                            lineNumber: 687,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                    lineNumber: 685,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {
                                    children: [
                                        formFehler && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Banner"], {
                                            role: "alert",
                                            "data-testid": `${dataTestId}-error`,
                                            "data-error": formFehler,
                                            children: formFehlerText[formFehler]
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                            lineNumber: 701,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Altcha$2f$Altcha$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Altcha"], {
                                            challengeUrl: "/api/contact-requests/challenge/",
                                            auto: "onfocus",
                                            startImmediately: altchaKey > 0,
                                            onSolved: onSolved,
                                            dataTestId: `${dataTestId}-altcha`
                                        }, altchaKey, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                            lineNumber: 709,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmitRow"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Privacy"], {
                                                    children: [
                                                        tr('contact.form.privacy', {
                                                            defaultValue: 'Wir verwenden Ihre Angaben nur, um Ihre Anfrage zu beantworten.'
                                                        }),
                                                        ' ',
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: privacyHref,
                                                            "data-testid": `${dataTestId}-privacy`,
                                                            children: tr('contact.form.privacyLink', {
                                                                defaultValue: 'Datenschutzerklärung'
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                            lineNumber: 723,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 718,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                                    buttonType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonTypes"].SUBMIT,
                                                    modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY,
                                                    loading: status === 'submitting',
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                        lineNumber: 731,
                                                        columnNumber: 27
                                                    }, this),
                                                    iconAlign: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].RIGHT,
                                                    dataTestId: `${dataTestId}-submit`,
                                                    children: tr('contact.form.submit', {
                                                        defaultValue: 'Anfrage senden'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                    lineNumber: 727,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                            lineNumber: 717,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                    lineNumber: 699,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                            lineNumber: 435,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                    lineNumber: 428,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this),
            hatAside && aside && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsideColumn"], {
                "data-testid": `${dataTestId}-aside-column`,
                children: [
                    aside.contact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsideContact"], {
                        "data-testid": `${dataTestId}-aside-contact`,
                        children: aside.contact
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                        lineNumber: 749,
                        columnNumber: 13
                    }, this),
                    hatKarte && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aside"], {
                        "data-testid": `${dataTestId}-aside`,
                        children: [
                            aside.title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsideTitle"], {
                                children: aside.title
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                lineNumber: 755,
                                columnNumber: 31
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsideList"], {
                                children: [
                                    aside.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsideItem"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPhone$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                lineNumber: 761,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$ContactLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactLink"], {
                                                kind: "tel",
                                                value: aside.phone,
                                                place: "contactForm",
                                                dataTestId: `${dataTestId}-aside-phone`
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                lineNumber: 762,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                        lineNumber: 760,
                                        columnNumber: 19
                                    }, this),
                                    aside.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsideItem"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEmail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                lineNumber: 772,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$ContactLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactLink"], {
                                                kind: "mail",
                                                value: aside.email,
                                                place: "contactForm",
                                                dataTestId: `${dataTestId}-aside-email`
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                lineNumber: 773,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                        lineNumber: 771,
                                        columnNumber: 19
                                    }, this),
                                    aside.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsideItem"], {
                                        "data-testid": `${dataTestId}-aside-address`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLocation$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                lineNumber: 783,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ContactLink$2f$ContactLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContactLink"], {
                                                kind: "map",
                                                value: aside.address,
                                                place: "contactForm",
                                                dataTestId: `${dataTestId}-aside-address-link`
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                lineNumber: 784,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                        lineNumber: 782,
                                        columnNumber: 19
                                    }, this),
                                    aside.hours && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AsideItem"], {
                                        "data-testid": `${dataTestId}-aside-hours`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                lineNumber: 794,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: aside.hours
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                                lineNumber: 795,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                        lineNumber: 793,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                                lineNumber: 756,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                        lineNumber: 754,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
                lineNumber: 745,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx",
        lineNumber: 389,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "cuqm+mgCI6Ha9Q39USE68POvaqI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = ContactForm;
const __TURBOPACK__default__export__ = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/ContactForm/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$ContactForm$2f$ContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/ContactForm/ContactForm.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/blobDownload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Trigger a browser file download from a Blob.
 *
 * #1478: eigene Datei ohne HTTP-Client — lib/axios.ts re-exportiert sie; wer
 * nur herunterlädt (TeamMemberCard auf öffentlichen Seiten), lädt axios nicht.
 */ __turbopack_context__.s([
    "triggerBlobDownload",
    ()=>triggerBlobDownload
]);
function triggerBlobDownload(blob, filename) {
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(blobUrl);
    document.body.removeChild(link);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/contact/contactInput.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTACT_LIMITS",
    ()=>CONTACT_LIMITS,
    "CONTACT_MESSAGE_MIN",
    ()=>CONTACT_MESSAGE_MIN,
    "CONTACT_MESSAGE_REQUIRED_TOPICS",
    ()=>CONTACT_MESSAGE_REQUIRED_TOPICS,
    "CONTACT_SOURCE_PATH",
    ()=>CONTACT_SOURCE_PATH,
    "contactInputOf",
    ()=>contactInputOf,
    "contactMessageProblem",
    ()=>contactMessageProblem,
    "contactPhoneOk",
    ()=>contactPhoneOk,
    "leerZuUndefined",
    ()=>leerZuUndefined,
    "sanitizeContactPayload",
    ()=>sanitizeContactPayload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/contact/contactTopics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/contact/contactSanitize.ts [app-client] (ecmascript)");
;
;
const CONTACT_LIMITS = {
    name: 100,
    company: 150,
    email: 254,
    phone: 40,
    message: 4000,
    application: 200,
    postalCode: 12,
    sourcePath: 200,
    /** ALTCHA-Nutzlast (base64) und Formular-Token */ altcha: 4000,
    token: 200,
    /** Größe der ganzen Anfrage in Byte — alles darüber wird ungelesen verworfen */ bodyBytes: 16 * 1024
};
const CONTACT_MESSAGE_REQUIRED_TOPICS = [
    'partnership',
    'press',
    'career',
    'other'
];
const CONTACT_MESSAGE_MIN = 10;
function contactMessageProblem(topic, message) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContactTopic"])(topic) || !CONTACT_MESSAGE_REQUIRED_TOPICS.includes(topic)) return null;
    if (typeof message !== 'string') return null;
    const laenge = message.trim().length;
    if (laenge === 0) return 'required';
    return laenge < CONTACT_MESSAGE_MIN ? 'tooShort' : null;
}
function sanitizeContactPayload(raw) {
    const r = raw && typeof raw === 'object' ? raw : {};
    const d = r['details'] && typeof r['details'] === 'object' ? r['details'] : {};
    const topic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeLine"])(r['topic'], 40);
    const erlaubt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContactTopic"])(topic) ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_TOPIC_DEFS"][topic].details : [];
    const details = {};
    const setze = (feld, wert)=>{
        if (erlaubt.includes(feld) && wert) details[feld] = wert;
    };
    setze('material', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeLine"])(d['material'], 20));
    setze('materialForm', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeLine"])(d['materialForm'], 30));
    setze('volume', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeLine"])(d['volume'], 20));
    setze('application', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeLine"])(d['application'], CONTACT_LIMITS.application));
    setze('postalCode', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizePostalCode"])(d['postalCode'], CONTACT_LIMITS.postalCode));
    return {
        topic,
        name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeLine"])(r['name'], CONTACT_LIMITS.name),
        company: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeLine"])(r['company'], CONTACT_LIMITS.company),
        email: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeEmail"])(r['email'], CONTACT_LIMITS.email),
        phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizePhone"])(r['phone'], CONTACT_LIMITS.phone),
        message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeMultiline"])(r['message'], CONTACT_LIMITS.message),
        details,
        locale: r['locale'] === 'en' ? 'en' : 'de',
        sourcePath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeLine"])(r['sourcePath'], CONTACT_LIMITS.sourcePath),
        token: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeLine"])(r['token'], CONTACT_LIMITS.token),
        altcha: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactSanitize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeLine"])(r['altcha'], CONTACT_LIMITS.altcha),
        // Honeypot nicht kürzen oder normalisieren: jede Eingabe zählt
        website: typeof r['website'] === 'string' ? r['website'] : ''
    };
}
function contactInputOf(payload) {
    const { token: _t, altcha: _a, website: _w, ...input } = payload;
    return input;
}
const leerZuUndefined = (s)=>s === '' ? undefined : s;
const CONTACT_SOURCE_PATH = /^\/[a-z0-9\-/]*$/i;
const contactPhoneOk = (phone)=>phone === '' || phone.replace(/\D/g, '').length >= 6;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/contact/contactSanitize.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sanitizeEmail",
    ()=>sanitizeEmail,
    "sanitizeLine",
    ()=>sanitizeLine,
    "sanitizeMultiline",
    ()=>sanitizeMultiline,
    "sanitizePhone",
    ()=>sanitizePhone,
    "sanitizePostalCode",
    ()=>sanitizePostalCode,
    "stripContactMarkup",
    ()=>stripContactMarkup,
    "stripFormulaPrefix",
    ()=>stripFormulaPrefix
]);
/**
 * #1435: Bereinigung der Eingaben des Kontaktformulars — dieselbe Funktion
 * läuft im Browser vor dem Absenden und auf dem Server vor der Prüfung. Der
 * Server verlässt sich nie auf den Browser; der Browser bereinigt, damit die
 * Person sieht, was tatsächlich ankommt, und die Zählung der Zeichen stimmt.
 *
 * Gespeichert wird reiner Text. React und die Mail-Vorlage escapen beim
 * Ausgeben; hier geht es darum, dass nichts Unsichtbares, Steuerndes oder
 * Markup-Artiges überhaupt in der Datenbank landet.
 */ /* eslint-disable no-control-regex */ /** C0/C1-Steuerzeichen außer Tab und Zeilenumbruch */ const STEUERZEICHEN = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g;
/** Unsichtbare Zeichen: Zero-Width, Bidi-Steuerung (Trojan Source), BOM, Soft Hyphen, Tag-Zeichen */ const UNSICHTBAR = /[\u00AD\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\uFEFF\uFFF9-\uFFFB]|\uDB40[\uDC00-\uDC7F]/g;
/* eslint-enable no-control-regex */ /** HTML-/XML-Tags und Kommentare */ const TAGS = /<\/?[a-z!?][^<>]*>/gi;
/** Spitze Klammern, die nach dem Entfernen der Tags übrig sind */ const KLAMMERN = /[<>]/g;
function stripContactMarkup(text) {
    return text.replace(TAGS, '').replace(KLAMMERN, '');
}
/**
 * Rohwert vor jeder Regex auf das Doppelte der Feldgrenze kürzen — die
 * Regex-Arbeit bleibt so je Feld beschränkt, egal was geschickt wird.
 */ const vorkuerzen = (value, maxLength)=>value.slice(0, maxLength * 2 + 64);
/** Leerzeichen und geschützte Leerzeichen am Zeilenende — linear, ohne Regex (kein ReDoS) */ function ohneZeilenendLeerraum(zeile) {
    let ende = zeile.length;
    while(ende > 0 && (zeile[ende - 1] === ' ' || zeile[ende - 1] === '\u00A0'))ende--;
    return zeile.slice(0, ende);
}
/** Grundreinigung für jedes Textfeld: Unicode-Normalform, keine Steuer- und unsichtbaren Zeichen, kein Markup */ const grund = (value)=>value.normalize('NFKC').replace(/\r\n?/g, '\n').replace(STEUERZEICHEN, '').replace(UNSICHTBAR, '').replace(TAGS, '').replace(KLAMMERN, '');
/**
 * Formel-Injektion (CSV/Excel): ein Feld, das mit = + - @ beginnt, würde beim
 * Export als Formel ausgeführt. Führende Zeichen dieser Art fallen weg —
 * nicht bei Telefon (Plus) und E-Mail (eigene Form).
 */ const FORMEL_ANFANG = /^[=+\-@\s]+/;
function stripFormulaPrefix(value) {
    return value.replace(FORMEL_ANFANG, '');
}
function sanitizeLine(value, maxLength) {
    if (typeof value !== 'string') return '';
    return stripFormulaPrefix(grund(vorkuerzen(value, maxLength)).replace(/\s+/g, ' ').trim()).slice(0, maxLength);
}
function sanitizeMultiline(value, maxLength) {
    if (typeof value !== 'string') return '';
    return grund(vorkuerzen(value, maxLength)).replace(/\t/g, ' ').split('\n').map(ohneZeilenendLeerraum).join('\n').replace(/[ \u00A0]{2,}/g, ' ').replace(/\n{3,}/g, '\n\n').trim().replace(FORMEL_ANFANG, '').slice(0, maxLength);
}
function sanitizeEmail(value, maxLength) {
    if (typeof value !== 'string') return '';
    return grund(vorkuerzen(value, maxLength)).replace(/\s/g, '').toLowerCase().slice(0, maxLength);
}
function sanitizePhone(value, maxLength) {
    if (typeof value !== 'string') return '';
    return grund(vorkuerzen(value, maxLength)).slice(0, maxLength).replace(/[^\d+()/\- ]/g, '').replace(/\s+/g, ' ').replace(/^[-\s]+/, '').trim();
}
function sanitizePostalCode(value, maxLength) {
    return sanitizeLine(value, maxLength).replace(/[^\p{L}\p{N} -]/gu, '').trim().toUpperCase();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/contact/contactValidate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkContactInput",
    ()=>checkContactInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/contact/contactTopics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/contact/contactInput.ts [app-client] (ecmascript)");
;
;
/**
 * #1531: Prüfung der bereinigten Anfrage im Browser — ohne zod.
 *
 * Das Formular prüfte vor dem Absenden mit dem zod-Schema der API
 * (`contactSchema.ts`). Dafür lud /contact-us/ ganz zod: 63 KB übertragen,
 * 277 KB entpackt, für neun Felder. Diese Datei prüft dieselben Regeln von
 * Hand und liefert dieselben Fehler je Feld (gleiche Schlüssel, gleiche Codes).
 *
 * Maßgeblich bleibt der Server: die API prüft jede Anfrage weiter mit dem
 * Schema und lehnt ab, was hier durchrutschte. Diese Prüfung spart nur den
 * Umweg — eine abgelehnte Anfrage kostet eine ALTCHA-Lösung und einen Platz
 * im Rate-Limit.
 *
 * Gleichlauf: tests/lib/contact/contactValidate.test.ts schickt dieselben
 * Fälle durch beide Prüfungen und verlangt dasselbe Ergebnis. Wer im Schema
 * eine Regel ändert, ändert sie hier mit — sonst bricht der Test.
 */ /**
 * E-Mail-Form wie `z.string().email()` in zod 4 (zod/v4/core/regexes.js,
 * `email`), nur ohne die überflüssigen Maskierungen in den Zeichenklassen.
 */ const EMAIL = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+.-]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9-]*\.)+[A-Za-z]{2,}$/;
const FELDER = [
    'topic',
    'name',
    'company',
    'email',
    'phone',
    'message',
    'details',
    'locale',
    'sourcePath'
];
const ZUSATZFELDER = [
    'material',
    'materialForm',
    'volume',
    'application',
    'postalCode'
];
const istText = (wert)=>typeof wert === 'string';
const inListe = (liste, wert)=>istText(wert) && liste.includes(wert);
function checkContactInput(input) {
    const errors = {};
    // je Feld zählt der erste Fehler
    const melde = (feld, code)=>{
        if (!errors[feld]) errors[feld] = code;
    };
    /** Text bis zur Grenze; alles andere ist ungültig */ const text = (feld, wert, max)=>{
        if (istText(wert) && wert.length <= max) return true;
        melde(feld, 'invalid');
        return false;
    };
    const roh = input;
    // unbekannte Felder nimmt das Schema nicht an (strict)
    if (Object.keys(roh).some((feld)=>!FELDER.includes(feld))) melde('form', 'invalid');
    if (!inListe(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_TOPICS"], roh['topic'])) melde('topic', 'required');
    const name = roh['name'];
    if (istText(name) && name.length < 1) melde('name', 'required');
    else text('name', name, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].name);
    text('company', roh['company'], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].company);
    const email = roh['email'];
    if (istText(email) && email.length < 1) melde('email', 'required');
    else if (text('email', email, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].email) && !EMAIL.test(email)) melde('email', 'invalid');
    const phone = roh['phone'];
    if (text('phone', phone, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].phone) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactPhoneOk"])(phone)) melde('phone', 'invalid');
    text('message', roh['message'], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].message);
    // #1725: wie die superRefine-Regel im Schema
    const nachricht = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactMessageProblem"])(roh['topic'], roh['message']);
    if (nachricht) melde('message', nachricht);
    const details = roh['details'];
    if (!details || typeof details !== 'object' || Array.isArray(details)) {
        melde('details', 'invalid');
    } else {
        const d = details;
        if (Object.keys(d).some((feld)=>!ZUSATZFELDER.includes(feld))) melde('details', 'invalid');
        // leere und fehlende Zusatzfelder zählen als nicht angegeben
        const wert = (feld)=>{
            const v = d[feld] ?? '';
            return istText(v) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leerZuUndefined"])(v) : v;
        };
        const auswahl = (feld, liste)=>{
            const v = wert(feld);
            if (v !== undefined && !inListe(liste, v)) melde(`details.${feld}`, 'invalid');
        };
        const freitext = (feld, max)=>{
            const v = wert(feld);
            if (v !== undefined) text(`details.${feld}`, v, max);
        };
        auswahl('material', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_MATERIALS"]);
        auswahl('materialForm', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_MATERIAL_FORMS"]);
        auswahl('volume', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_VOLUMES"]);
        freitext('application', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].application);
        freitext('postalCode', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].postalCode);
    }
    if (!inListe([
        'de',
        'en'
    ], roh['locale'])) melde('locale', 'invalid');
    const pfad = roh['sourcePath'];
    if (text('sourcePath', pfad, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_LIMITS"].sourcePath) && pfad !== '' && !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactInput$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_SOURCE_PATH"].test(pfad)) {
        melde('sourcePath', 'invalid');
    }
    return Object.keys(errors).length === 0 ? {
        ok: true
    } : {
        ok: false,
        errors
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/vcard/company.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLASTSHIP_COMPANY",
    ()=>PLASTSHIP_COMPANY
]);
/**
 * #1436: Firmenangaben für die vCard der Teamkarten — in Feldern (ADR).
 * #2054: Anschrift aus `config/companyContact.ts` (eine Quelle mit Footer,
 * Kontaktseiten und strukturierten Daten).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/companyContact.ts [app-client] (ecmascript)");
;
const PLASTSHIP_COMPANY = {
    name: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"].name,
    street: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"].street,
    postalCode: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"].postalCode,
    city: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"].locality,
    country: 'Germany',
    url: 'https://plastship.com'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/vcard/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vcard$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vcard/company.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vcard$2f$vcard$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vcard/vcard.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/vcard/vcard.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildVCard",
    ()=>buildVCard,
    "escapeVCardText",
    ()=>escapeVCardText,
    "foldVCardLine",
    ()=>foldVCardLine,
    "splitName",
    ()=>splitName,
    "vcardFileName",
    ()=>vcardFileName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vcard$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/vcard/company.ts [app-client] (ecmascript)");
;
const CRLF = '\r\n';
/** Höchstlänge einer Zeile in Oktetten (ohne CRLF) */ const MAX_LINE_OCTETS = 75;
function escapeVCardText(value) {
    return value.replace(/\\/g, '\\\\').replace(/,/g, '\\,').replace(/;/g, '\\;').replace(/\r\n|\r|\n/g, '\\n');
}
/** UTF-8-Länge in Oktetten, ohne TextEncoder (fehlt in jsdom) */ function utf8Length(text) {
    let octets = 0;
    for (const char of text){
        const code = char.codePointAt(0) ?? 0;
        octets += code < 0x80 ? 1 : code < 0x800 ? 2 : code < 0x10000 ? 3 : 4;
    }
    return octets;
}
function foldVCardLine(line) {
    if (utf8Length(line) <= MAX_LINE_OCTETS) return line;
    const parts = [];
    let current = '';
    let currentOctets = 0;
    // Erste Zeile 75 Oktette, Folgezeilen 74 plus führendes Leerzeichen
    let limit = MAX_LINE_OCTETS;
    for (const char of line){
        const octets = utf8Length(char);
        if (currentOctets + octets > limit) {
            parts.push(current);
            current = '';
            currentOctets = 0;
            limit = MAX_LINE_OCTETS - 1;
        }
        current += char;
        currentOctets += octets;
    }
    parts.push(current);
    return parts.join(`${CRLF} `);
}
function splitName(name) {
    const tokens = name.trim().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return {
        given: '',
        family: ''
    };
    const family = tokens[tokens.length - 1] ?? '';
    return {
        given: tokens.slice(0, -1).join(' '),
        family
    };
}
function buildVCard(contact) {
    const company = contact.company ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$vcard$2f$company$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLASTSHIP_COMPANY"];
    const name = contact.name.trim();
    const { given, family } = splitName(name);
    const jobTitle = contact.jobTitle?.trim();
    const phone = contact.phone?.trim();
    const email = contact.email?.trim();
    const lines = [
        'BEGIN:VCARD',
        'VERSION:3.0'
    ];
    // N: Nachname;Vorname;weitere Namen;Präfix;Suffix
    lines.push(`N:${escapeVCardText(family)};${escapeVCardText(given)};;;`);
    lines.push(`FN:${escapeVCardText(name)}`);
    if (company.name) lines.push(`ORG:${escapeVCardText(company.name)}`);
    if (jobTitle) lines.push(`TITLE:${escapeVCardText(jobTitle)}`);
    if (phone) lines.push(`TEL;TYPE=WORK,VOICE:${escapeVCardText(phone)}`);
    if (email) lines.push(`EMAIL;TYPE=INTERNET,WORK:${escapeVCardText(email)}`);
    // ADR: Postfach;erweiterte Adresse;Straße;Ort;Region;PLZ;Land
    const adr = [
        '',
        '',
        company.street,
        company.city,
        '',
        company.postalCode,
        company.country
    ];
    if (adr.some(Boolean)) lines.push(`ADR;TYPE=WORK:${adr.map(escapeVCardText).join(';')}`);
    // URI-Werte werden nicht maskiert
    if (company.url) lines.push(`URL:${company.url}`);
    lines.push('END:VCARD');
    return lines.map(foldVCardLine).join(CRLF) + CRLF;
}
const TRANSLITERATION = {
    ä: 'ae',
    ö: 'oe',
    ü: 'ue',
    Ä: 'Ae',
    Ö: 'Oe',
    Ü: 'Ue',
    ß: 'ss'
};
function vcardFileName(name) {
    const base = name.replace(/[äöüÄÖÜß]/g, (char)=>TRANSLITERATION[char] ?? char).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return `${base || 'kontakt'}.vcf`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ContactFormBlock.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ContactFormBlock.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_0dkgftjwa25hq._.js.map