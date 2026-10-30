(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/useSaveData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SLOW_CONNECTIONS",
    ()=>SLOW_CONNECTIONS,
    "prefersLightMedia",
    ()=>prefersLightMedia,
    "useSaveData",
    ()=>useSaveData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const SLOW_CONNECTIONS = [
    'slow-2g',
    '2g'
];
const connectionOf = ()=>typeof navigator === 'undefined' ? undefined : navigator.connection;
const prefersLightMedia = (connection)=>Boolean(connection?.saveData) || SLOW_CONNECTIONS.includes(connection?.effectiveType ?? '');
const useSaveData = ()=>{
    _s();
    const [light, setLight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSaveData.useEffect": ()=>{
            const connection = connectionOf();
            const update = {
                "useSaveData.useEffect.update": ()=>setLight(prefersLightMedia(connection))
            }["useSaveData.useEffect.update"];
            update();
            connection?.addEventListener?.('change', update);
            return ({
                "useSaveData.useEffect": ()=>connection?.removeEventListener?.('change', update)
            })["useSaveData.useEffect"];
        }
    }["useSaveData.useEffect"], []);
    return light;
};
_s(useSaveData, "pUsKsCXTyWDrC6j7xZ+0k3XYdo0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Template/Frontpage/Frontpage.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Main",
    ()=>Main,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Frontpage.styles__Root",
    componentId: "sc-dcb3d040-0"
})`
  --page-header-offset: 0px;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sitePrimaryButton"]}
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
`;
const Main = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].main.withConfig({
    displayName: "Frontpage.styles__Main",
    componentId: "sc-dcb3d040-1"
})`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  /* Abstand vor dem Footer — entfällt, wenn die Seite mit einer Fläche endet
     und der Fuß direkt in sie übergeht (Befund 29.10., #2192) */
  padding-bottom: ${({ $flushFooter })=>$flushFooter ? '0' : '40px'};

  > *:not(:last-child) {
    margin-bottom: 40px;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Template/Frontpage/Frontpage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Frontpage",
    ()=>Frontpage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Header/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Footer/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$GuestMenu$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/GuestMenu/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$GuestMenu$2f$GuestMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/GuestMenu/GuestMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$Frontpage$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/Frontpage/Frontpage.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$useHeaderOverHero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/Frontpage/useHeaderOverHero.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$useHeaderTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/Frontpage/useHeaderTone.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$footerEdge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/footerEdge.ts [app-client] (ecmascript)");
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
/**
 * Template der Startseite für Besucher ohne Konto: wie Default, aber der
 * Header steht fest über dem Inhalt. Über dem Seiten-Hero (HeroSlider) ist er
 * durchsichtig, sobald der Hero am Header vorbeigescrollt ist, bekommt er
 * seinen Grund. Solange er durchsichtig ist, wählt er seine Schrift nach dem
 * Block unter ihm (useHeaderTone, #1497, #2175): Kontrastformel im aktuellen
 * Theme, ohne bekannten Grund der Theme-Default.
 */ const Frontpage = ({ children, className, footerEdge })=>{
    _s();
    const footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$footerEdge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["footerEdgesFor"])(footerEdge);
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const overHero = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$useHeaderOverHero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeaderOverHero"])(mainRef);
    const { themeMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { palette } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const tone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$useHeaderTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeaderTone"])(mainRef, overHero, themeMode, palette);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$Frontpage$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": "frontpage-root",
        "data-over-hero": overHero ? 'true' : 'false',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                navigation: false,
                site: true,
                overlay: true,
                transparent: overHero,
                tone: tone
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Template/Frontpage/Frontpage.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$GuestMenu$2f$GuestMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestMenu"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Template/Frontpage/Frontpage.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$Frontpage$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Main"], {
                ref: mainRef,
                $flushFooter: footer.flush,
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Template/Frontpage/Frontpage.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Footer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                edges: footer.edges
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Template/Frontpage/Frontpage.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Template/Frontpage/Frontpage.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Frontpage, "1JVa2ygUOUqv6KxIfCPv0qHxwD4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$useHeaderOverHero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeaderOverHero"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$useHeaderTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeaderTone"]
    ];
});
_c = Frontpage;
;
var _c;
__turbopack_context__.k.register(_c, "Frontpage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Template/Frontpage/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$Frontpage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/Frontpage/Frontpage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$useHeaderOverHero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/Frontpage/useHeaderOverHero.ts [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$Frontpage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Frontpage"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Template/Frontpage/useHeaderOverHero.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEADER_HEIGHT_PX",
    ()=>HEADER_HEIGHT_PX,
    "heroExitPx",
    ()=>heroExitPx,
    "heroToneInsetPx",
    ()=>heroToneInsetPx,
    "useHeaderOverHero",
    ()=>useHeaderOverHero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const HEADER_HEIGHT_PX = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_HEADER_HEIGHT_PX"];
/** Spielraum, in dem ein Folgeblock noch als „direkt unter dem Hero" gilt (Rundung, Kanten-Überlappung) */ const ANSCHLUSS_PX = 2;
/** Tiefe des inneren Wabenrands, den ein Block unten trägt (`data-page-hero-edge`), sonst null */ const bottomEdge = (block)=>{
    const depth = block.dataset.pageHeroEdge;
    return depth && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_EDGE_DEPTHS"].includes(depth) ? depth : null;
};
const heroExitPx = (block)=>{
    const depth = bottomEdge(block);
    return depth ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgeSolidPx"])(depth) : HEADER_HEIGHT_PX;
};
const heroToneInsetPx = (block)=>{
    const depth = bottomEdge(block);
    return depth ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgeHalfPx"])(depth) : 0;
};
/**
 * Hero plus die Blöcke mit `data-page-hero-follow`, die lückenlos darunter
 * anschließen (z. B. der Imagefilm auf dem blauen Band) — über dieser ganzen
 * Strecke bleibt der Header transparent.
 */ const heroStrecke = (main, hero)=>{
    const strecke = [
        hero
    ];
    for (const block of main.querySelectorAll('[data-page-hero-follow]')){
        const unterkante = strecke[strecke.length - 1].getBoundingClientRect().bottom;
        if (Math.abs(block.getBoundingClientRect().top - unterkante) <= ANSCHLUSS_PX) strecke.push(block);
    }
    return strecke;
};
const useHeaderOverHero = (mainRef)=>{
    _s();
    const [overHero, setOverHero] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHeaderOverHero.useEffect": ()=>{
            const main = mainRef.current;
            const hero = main?.querySelector('[data-page-hero]');
            const atTop = !!main && !!hero && hero.getBoundingClientRect().top - main.getBoundingClientRect().top < 1;
            if (!main || !hero || !atTop) {
                setOverHero(false);
                return;
            }
            if (typeof IntersectionObserver === 'undefined') return;
            const sichtbar = new Map();
            const melden = {
                "useHeaderOverHero.useEffect.melden": (entries)=>{
                    for (const entry of entries)sichtbar.set(entry.target, entry.isIntersecting);
                    setOverHero([
                        ...sichtbar.values()
                    ].some(Boolean));
                }
            }["useHeaderOverHero.useEffect.melden"];
            // Beobachtungsfenster beginnt unter dem Header (bzw. an der Austrittslinie des Blocks, heroExitPx):
            // die Strecke „schneidet" es, bis ihre Unterkante dort ankommt. Je Austrittslinie ein Beobachter.
            const observers = new Map();
            for (const block of heroStrecke(main, hero)){
                const exit = heroExitPx(block);
                const observer = observers.get(exit) ?? new IntersectionObserver(melden, {
                    rootMargin: `-${exit}px 0px 0px 0px`
                });
                observers.set(exit, observer);
                observer.observe(block);
            }
            return ({
                "useHeaderOverHero.useEffect": ()=>observers.forEach({
                        "useHeaderOverHero.useEffect": (observer)=>observer.disconnect()
                    }["useHeaderOverHero.useEffect"])
            })["useHeaderOverHero.useEffect"];
        }
    }["useHeaderOverHero.useEffect"], [
        mainRef
    ]);
    return overHero;
};
_s(useHeaderOverHero, "H0Z5rSIk3HJ+23EiOoak3uCqrmQ=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Template/Frontpage/useHeaderTone.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "elementUnderHeader",
    ()=>elementUnderHeader,
    "toneOfElement",
    ()=>toneOfElement,
    "useHeaderTone",
    ()=>useHeaderTone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$useHeaderOverHero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/Frontpage/useHeaderOverHero.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Header/headerTone.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
/** Elemente, die dem Header ihre Farbe melden (#2175); `data-bg` trägt nur die Wurzel des Imagefilms */ const MELDER = '[data-header-bg], [data-header-tone], [data-header-hex], [data-bg]';
/** Attribute, deren Wechsel neu messen lässt (Folie des Films, Ton der Hero-Folie) */ const BEOBACHTET = [
    'data-bg',
    'data-header-bg',
    'data-header-tone',
    'data-header-hex'
];
const toneOfElement = (el, themeMode, palette)=>{
    if (!el) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerToneDefault"])(themeMode);
    const ton = el.dataset.headerTone;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeaderTone"])(ton)) return ton;
    // feste Farbe, die nicht mit dem Theme geht (Folie des Imagefilms in Markenfarben)
    const hex = el.dataset.headerHex;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHexColor"])(hex)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerToneForHex"])(hex, palette);
    const folie = el.dataset.bg;
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeaderBgToken"])(folie) ? folie : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeaderBgToken"])(el.dataset.headerBg) ? el.dataset.headerBg : null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerToneFor"])(token ?? null, themeMode, palette);
};
const elementUnderHeader = (main, mitte = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$useHeaderOverHero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_HEIGHT_PX"] / 2)=>{
    let treffer = null;
    for (const el of main.querySelectorAll(MELDER)){
        const rect = el.getBoundingClientRect();
        // Dokumentreihenfolge: ein verschachteltes Element (Spalte im Band) kommt nach seinem Vorfahren
        if (rect.top <= mitte && rect.bottom - (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$useHeaderOverHero$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroToneInsetPx"])(el) > mitte) treffer = el;
    }
    return treffer;
};
const useHeaderTone = (mainRef, active, themeMode, palette)=>{
    _s();
    const [tone, setTone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useHeaderTone.useState": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerToneDefault"])(themeMode)
    }["useHeaderTone.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHeaderTone.useEffect": ()=>{
            const main = mainRef.current;
            if (!active || !main) {
                setTone((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$headerTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headerToneDefault"])(themeMode));
                return;
            }
            let frame = 0;
            const messen = {
                "useHeaderTone.useEffect.messen": ()=>{
                    frame = 0;
                    setTone(toneOfElement(elementUnderHeader(main), themeMode, palette));
                }
            }["useHeaderTone.useEffect.messen"];
            const planen = {
                "useHeaderTone.useEffect.planen": ()=>{
                    if (!frame) frame = requestAnimationFrame(messen);
                }
            }["useHeaderTone.useEffect.planen"];
            messen();
            window.addEventListener('scroll', planen, {
                passive: true
            });
            window.addEventListener('resize', planen);
            const beobachter = typeof MutationObserver === 'undefined' ? null : new MutationObserver(planen);
            beobachter?.observe(main, {
                attributes: true,
                attributeFilter: BEOBACHTET,
                subtree: true,
                childList: true
            });
            return ({
                "useHeaderTone.useEffect": ()=>{
                    cancelAnimationFrame(frame);
                    window.removeEventListener('scroll', planen);
                    window.removeEventListener('resize', planen);
                    beobachter?.disconnect();
                }
            })["useHeaderTone.useEffect"];
        }
    }["useHeaderTone.useEffect"], [
        mainRef,
        active,
        themeMode,
        palette
    ]);
    return tone;
};
_s(useHeaderTone, "gwk1jT7oGfmcX0Xwec1gh5P28hk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Template/footerEdge.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLOSING_BAND_EDGES",
    ()=>CLOSING_BAND_EDGES,
    "CLOSING_BAND_FOOTER",
    ()=>CLOSING_BAND_FOOTER,
    "footerEdgesFor",
    ()=>footerEdgesFor
]);
function footerEdgesFor(color) {
    if (!color || color === 'white') return {
        edges: undefined,
        flush: false
    };
    return {
        edges: {
            top: {
                placement: 'inner',
                color
            }
        },
        flush: true
    };
}
const CLOSING_BAND_EDGES = {
    top: {
        placement: 'inner',
        color: 'white',
        depth: 'section'
    }
};
const CLOSING_BAND_FOOTER = 'navy';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Utility/JsonLd/JsonLd.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JsonLd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$seo$2f$structuredData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/seo/structuredData.ts [app-client] (ecmascript)");
;
;
function JsonLd({ data }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        "data-testid": "structured-data",
        dangerouslySetInnerHTML: {
            __html: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$seo$2f$structuredData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeJsonLd"])(data)
        }
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Utility/JsonLd/JsonLd.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = JsonLd;
var _c;
__turbopack_context__.k.register(_c, "JsonLd");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Utility/JsonLd/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Utility$2f$JsonLd$2f$JsonLd$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Utility/JsonLd/JsonLd.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_app_components_0km6w6bobq--_._.js.map