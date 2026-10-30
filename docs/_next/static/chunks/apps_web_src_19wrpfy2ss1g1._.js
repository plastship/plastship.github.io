(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/assets/theme/heroStage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HERO_CONTENT_GAP",
    ()=>HERO_CONTENT_GAP,
    "HERO_PHONE_SIDE_PADDING",
    ()=>HERO_PHONE_SIDE_PADDING,
    "HERO_SIDE_PADDING",
    ()=>HERO_SIDE_PADDING,
    "heroContentAnchor",
    ()=>heroContentAnchor,
    "heroContentLayout",
    ()=>heroContentLayout,
    "heroPhoneBottomPadding",
    ()=>heroPhoneBottomPadding,
    "heroStageFrame",
    ()=>heroStageFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
// #2027: Regeln je Viewport an einer Stelle (Höhe, Textzone, Schrift, CTA, Wabe)
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/heroViewport.ts [app-client] (ecmascript)");
;
;
;
;
;
const heroStageFrame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: relative;
  width: 100%;
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroHeightCss"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_HEIGHT"].desktop)}
  overflow: hidden;
  /* WebGL-Bühne: die Löcher des Randes zeigen diesen Hintergrund (heroEdgeColor) */
  background: ${({ theme, $edgeColor })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeColorValue"])(theme, $edgeColor ?? 'primary')};
  color: ${({ theme })=>theme.palette.default.white};
  /* Verhindert Blitzer der Nachbarn beim Kanten-Antialiasing der Maske */
  isolation: isolate;
  /* Vollflächiger Hero ohne Abstand nach unten — das Default-Template gibt
     Kindern per Kind-Selektor (not(:last-child)) 40px; die Doppelklasse übertrifft
     diese Spezifität ohne !important. */
  && {
    margin-bottom: 0;
  }

  @media ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_MEDIA"]} {
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroHeightCss"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_HEIGHT"].phone)}
  }
`;
const heroPhoneBottomPadding = (withControls)=>withControls ? `calc(5.5rem + ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TILE_SIZE_PX"]}px)` : '5.5rem';
const HERO_CONTENT_GAP = '0.25rem';
const HERO_SIDE_PADDING = 'clamp(1.5rem, 8vw, 7rem)';
const HERO_PHONE_SIDE_PADDING = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_SIDE"];
const heroContentAnchor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: absolute;
  left: 0;
  /* an der Falz verankert, nicht am unteren Bühnenrand (Randzone darunter) */
  bottom: var(--edge-padding, 0px);
  padding: 0 ${HERO_SIDE_PADDING} clamp(6rem, 14vh, 9rem);

  @media ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_MEDIA"]} {
    padding: 0 ${HERO_PHONE_SIDE_PADDING} ${({ $withControls })=>heroPhoneBottomPadding(Boolean($withControls))};
  }
`;
const heroContentLayout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${heroContentAnchor}
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${HERO_CONTENT_GAP};
  /* Headline-Spalte 1,3 × der früheren 46rem — der Text darunter bleibt bei 38rem */
  max-width: calc(46rem * 1.3);
  pointer-events: none;

  /* Die Atome sind direkte Kinder (keine Wrapper) — Maße und Positionen
     von Headline, Text und CTA sind damit exakt die der Elemente selbst. */
  & > :is(h1, h2, h3) {
    color: ${({ theme })=>theme.palette.default.white};
    margin-bottom: ${({ theme })=>theme.margin.small};
    text-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);
    text-wrap: balance;
    /* Keine automatische Silbentrennung: mit balance trennt der Browser sonst
       Wörter, die auf die Zeile passen, nur um die Zeilen anzugleichen
       („Monit-ored"). Umbrochen wird an Leerzeichen und an weichen
       Trennstrichen (&shy;) aus dem CMS; ein Wort, das allein breiter als die
       Zeile ist („Schlagzähigkeitsprüfung" am Telefon), bricht im Notfall
       ohne Trennstrich, statt den Rahmen zu sprengen. */
    hyphens: manual;
    overflow-wrap: anywhere;

    /* #2027 Abnahme: am Telefon Stufe h5 der Theme-Skala (semantisch bleibt es
       die Überschrift) und Silbentrennung nach <html lang> nur als Rückfall
       für sehr lange Wörter (HERO_PHONE_HYPHENS) */
    @media ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_MEDIA"]} {
      font-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_TYPE"].headline.fontSize};
      line-height: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_TYPE"].headline.lineHeight};
      -webkit-hyphens: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_HYPHENS"].hyphens};
      hyphens: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_HYPHENS"].hyphens};
      hyphenate-limit-chars: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_HYPHENS"].limitChars};
    }
  }

  & > p {
    color: rgba(255, 255, 255, 0.92);
    margin-bottom: ${({ theme })=>theme.margin.default};
    max-width: 38rem;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.35);

    @media ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_MEDIA"]} {
      font-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_TYPE"].text.fontSize};
      line-height: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_TYPE"].text.lineHeight};
    }
  }

  /* #2027: die WebGL-Wabe zeichnet ihr Overlay immer in Marineblau (PlastshipColors.PRIMARY,
     honeycombRenderer) — im Dark Mode wäre default.white dort #1F2937, dunkle Schrift auf
     dunklem Blau. Über der WebGL-Bühne steht die Headline deshalb fest in Weiß. */
  [data-renderer='webgl'] & > :is(h1, h2, h3) {
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  }

  & > button,
  & > a {
    pointer-events: auto;
  }

  /* Das letzte Element trägt keinen Rand nach unten — in jeder Kombination
     (nur Headline, Headline + Text, mit CTA) endet der Block mit dem Inhalt. */
  & > :last-child {
    margin-bottom: 0;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Headline/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconArrowLeft.styles__Root",
    componentId: "sc-6d9f062c-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconArrowLeft",
    ()=>IconArrowLeft
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$IconArrowLeft$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.styles.ts [app-client] (ecmascript)");
;
;
const IconArrowLeft = (props)=>{
    const defaultStrokeColor = 'currentColor';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$IconArrowLeft$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        className: props['className'],
        "data-testid": 'icon-arrow-left-root',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M10.6667 19L4 12M4 12L10.6667 5M4 12L20 12",
            stroke: props['strokeColor'] || defaultStrokeColor,
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconArrowLeft;
;
var _c;
__turbopack_context__.k.register(_c, "IconArrowLeft");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$IconArrowLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/IconArrowLeft.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$IconArrowLeft$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowLeft"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Text/Text.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text,
    "getTextStyles",
    ()=>getTextStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
'use client';
;
;
const getTextStyles = (variant = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].body)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    font-family: ${(props)=>props.theme.font.secondaryFamily};
    font-size: ${(props)=>props.theme.font.text[variant].mobile.fontSize};
    line-height: ${(props)=>props.theme.font.text[variant].mobile.lineHeight};
    font-weight: ${(props)=>props.theme.font.text[variant].mobile.fontWeight};
    letter-spacing: ${(props)=>props.theme.font.text[variant].mobile.letterSpacing};
    -webkit-font-smoothing: antialiased;
    word-wrap: break-word;

    a {
      text-decoration: underline;
      &:link,
      &:active,
      &:visited {
        color: ${(props)=>props.theme.palette.link.primary};
      }
    }

    b,
    strong {
      font-weight: bold;
    }

    @media screen and (min-width: ${(props)=>props.theme.device.mobile}) {
      font-size: ${(props)=>props.theme.font.text[variant].desktop.fontSize};
      line-height: ${(props)=>props.theme.font.text[variant].desktop.lineHeight};
      font-weight: ${(props)=>props.theme.font.text[variant].desktop.fontWeight};
      letter-spacing: ${(props)=>props.theme.font.text[variant].desktop.letterSpacing};
    }
  `;
};
const baseTextStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  margin-bottom: ${(props)=>props.$variant === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].caption ? 0 : props.theme.margin.default};
  max-width: 700px;
  ${(props)=>getTextStyles(props.$variant)}
`;
const Text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "Text.styles__Text",
    componentId: "sc-18bfeccb-0"
})`
  ${baseTextStyles}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text,
    "TextVariants",
    ()=>TextVariants,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.styles.ts [app-client] (ecmascript)");
;
;
var TextVariants = /*#__PURE__*/ function(TextVariants) {
    TextVariants["bodybig"] = "bodybig";
    TextVariants["body"] = "body";
    TextVariants["bodysmall"] = "bodysmall";
    TextVariants["button"] = "button";
    TextVariants["caption"] = "caption";
    TextVariants["navigation"] = "navigation";
    return TextVariants;
}({});
const Text = ({ children, dataTestId = 'text-root', variant, className })=>{
    // Filter out props to avoid DOM attribute warnings
    const domProps = {
        'data-testid': dataTestId,
        className
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
        ...domProps,
        $variant: variant,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Text/Text.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Text;
const __TURBOPACK__default__export__ = Text;
var _c;
__turbopack_context__.k.register(_c, "Text");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Text/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEX_PAGINATION_GAP_PX",
    ()=>HEX_PAGINATION_GAP_PX,
    "HEX_PAGINATION_TILE_PX",
    ()=>HEX_PAGINATION_TILE_PX,
    "Progress",
    ()=>Progress,
    "Root",
    ()=>Root,
    "Tile",
    ()=>Tile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const HEX_PAGINATION_TILE_PX = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TILE_SIZE_PX"];
const HEX_PAGINATION_GAP_PX = 4;
/* Autoplay-Fortschritt füllt die aktive Kachel von unten nach oben. */ const fillUp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: scaleY(0); }
  to { transform: scaleY(1); }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexPagination.styles__Root",
    componentId: "sc-99a21391-0"
})`
  position: absolute;
  inset: 0;
  pointer-events: none;
  /* #1473: bis zur Messung verborgen statt an falscher Stelle (Layout-Shift) */
  visibility: ${({ $placed })=>$placed ? 'visible' : 'hidden'};

  /* Ohne Messung (SSR, Tests): Reihe unten rechts */
  ${({ $fallback })=>$fallback && `
    inset: auto 2rem 2rem auto;
    display: flex;
    gap: ${HEX_PAGINATION_GAP_PX}px;
  `}

  /* #1214: im Fluss, z. B. unter einer Karte */
  ${({ $inline, $gap = HEX_PAGINATION_GAP_PX })=>$inline && `
    position: static;
    inset: auto;
    display: flex;
    gap: ${$gap}px;
  `}
`;
const Tile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "HexPagination.styles__Tile",
    componentId: "sc-99a21391-1"
})`
  position: ${({ $fallback })=>$fallback ? 'relative' : 'absolute'};
  left: var(--x);
  top: var(--y);
  width: var(--size, ${HEX_PAGINATION_TILE_PX}px);
  height: var(--size, ${HEX_PAGINATION_TILE_PX}px);
  padding: 0;
  margin: 0;
  border: 0;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  /* Trefferfläche: Masken schneiden Zeigerereignisse nicht zu, ohne clip-path wäre der ganze Kasten klickbar. Das spitze Polygon bleibt die Trefferform; die runde Maske liegt ganz darin. */
  clip-path: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HEXAGON_CLIP_PATH"]};
  background: ${({ $active })=>$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE : 'rgba(0, 65, 110, 0.45)'};
  color: ${({ $active })=>$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: calc(var(--size, ${HEX_PAGINATION_TILE_PX}px) * 0.3);
  font-variant-numeric: tabular-nums;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  overflow: hidden;

  &:hover,
  &:focus-visible {
    background: ${({ $active })=>$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
    outline: none;
  }

  /* #1214: heller Grund — aktiv sattes Blau mit weißer Nummer, sonst hellblau */
  ${({ $tone, $active, theme })=>$tone === 'light' && `
    background: ${$active ? theme.palette.site.blue : theme.palette.site.tint};
    color: ${$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE : theme.palette.site.blue};

    &:hover,
    &:focus-visible {
      background: ${theme.palette.site.blue};
      color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
    }
  `}

  /* #1747: auf dem blauen Overlay hinter dem Hero-Text — übrige Kacheln durchscheinend weiß, Zeigen eine deutliche Stufe heller; aktiv weiß mit blauer Nummer */
  /* Feste Farben statt Theme-Weiß: das Overlay bleibt auch im Dark Mode Marineblau (PlastshipColors.PRIMARY), default.white würde dort dunkelgrau. */
  ${({ $tone, $active })=>$tone === 'overlay' && `
    background: ${$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE : `color-mix(in srgb, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE} 22%, transparent)`};
    color: ${$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};

    &:hover,
    &:focus-visible {
      background: ${$active ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE : `color-mix(in srgb, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE} 48%, transparent)`};
    }
  `}

  span {
    position: relative;
    z-index: 1;
  }
`;
const Progress = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HexPagination.styles__Progress",
    componentId: "sc-99a21391-2"
})`
  position: absolute;
  inset: 0;
  z-index: 0;
  /* Blau auf der weißen aktiven Kachel — invertiert wie Grund und Nummer */
  background: rgba(0, 65, 110, 0.25);
  transform-origin: 50% 100%;
  transform: scaleY(0);
  animation: ${fillUp} ${({ $duration })=>$duration}ms linear both;
  animation-play-state: ${({ $paused })=>$paused ? 'paused' : 'running'};

  @media (prefers-reduced-motion: reduce) {
    animation-duration: 0ms;
    transform: scaleY(1);
    opacity: 0.6;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexPagination",
    ()=>HexPagination,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const HexPagination = ({ count, activeIndex, cells, onSelect, progressDuration, paused = false, progressKey, controlsIdPrefix, getLabel, tone = 'dark', inline = false, measured, gap = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_PAGINATION_GAP_PX"], dataTestId = 'hex-pagination', className })=>{
    if (count < 1) return null;
    const fallback = inline || cells.length < count;
    // #1473: ohne Messung (SSR, erster Frame) verborgen — die Ersatzreihe unten
    // rechts sprang sonst beim Messen an ihre Rasterstelle (CLS 0,77 auf der Startseite).
    // Nach der Messung immer sichtbar, auch wenn die Bühne keine Reihe hergibt.
    const placed = inline || (measured ?? cells.length > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        role: "tablist",
        "data-testid": dataTestId,
        "data-fallback": fallback ? 'true' : 'false',
        "data-placed": placed ? 'true' : 'false',
        "data-tone": tone,
        $fallback: fallback,
        $inline: inline,
        $placed: placed,
        $gap: gap,
        children: Array.from({
            length: count
        }, (_, index)=>{
            const active = index === activeIndex;
            const cell = fallback ? null : cells[index];
            // #1949: sichtbare Nummer vorn im Namen (WCAG 2.5.3 Label in Name)
            const nummer = String(index + 1).padStart(2, '0');
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tile"], {
                type: "button",
                role: "tab",
                "aria-selected": active,
                "aria-controls": controlsIdPrefix ? `${controlsIdPrefix}-${index}` : undefined,
                "aria-label": `${nummer} – ${getLabel ? getLabel(index) : String(index + 1)}`,
                tabIndex: active ? 0 : -1,
                $active: active,
                $fallback: fallback,
                $tone: tone,
                "data-testid": `${dataTestId}-item-${index}`,
                "data-active": active ? 'true' : 'false',
                onClick: ()=>onSelect?.(index),
                style: cell ? {
                    '--x': `${cell.x}px`,
                    '--y': `${cell.y}px`,
                    '--size': `${cell.size}px`
                } : undefined,
                children: [
                    active && progressDuration !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                        $duration: progressDuration,
                        $paused: paused,
                        "data-testid": `${dataTestId}-progress`,
                        "data-paused": paused ? 'true' : 'false'
                    }, progressKey ?? activeIndex, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx",
                        lineNumber: 117,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: nummer
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, index, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx",
                lineNumber: 92,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HexPagination;
const __TURBOPACK__default__export__ = HexPagination;
var _c;
__turbopack_context__.k.register(_c, "HexPagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexPagination/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.styles.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "Tile",
    ()=>Tile,
    "TileFace",
    ()=>TileFace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
const pop = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: scale(0) rotate(-14deg);
  }
  60% {
    opacity: 1;
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexTileReveal.styles__Root",
    componentId: "sc-7b3c4462-0"
})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  /* Layout/Style/Paint bleiben in dieser Ebene — 1000+ Kacheln invalidieren nicht die Seite */
  contain: layout style paint;
`;
const Tile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexTileReveal.styles__Tile",
    componentId: "sc-7b3c4462-1"
})`
  position: absolute;
  left: var(--x);
  top: var(--y);
  width: var(--size);
  height: var(--size);
  transform: scale(0);
  opacity: 0;
  /* will-change bleibt: ohne Vorab-Ebene hebt Chromium jede Kachel erst beim
     Animationsstart auf den Compositor und malt neu — gemessen 41 statt 56 fps */
  will-change: transform, opacity;
  animation: ${pop} var(--tile-duration) cubic-bezier(0.2, 0.8, 0.2, 1) both;
  animation-delay: var(--delay);
`;
const TileFace = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HexTileReveal.styles__TileFace",
    componentId: "sc-7b3c4462-2"
})`
  position: absolute;
  inset: 0;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background-image: var(--image);
  background-repeat: no-repeat;
  background-size: var(--bg-size);
  background-position: var(--bg-pos);
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HexTileReveal",
    ()=>HexTileReveal,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$hexTiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/hexTiles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
/** Natürliche Bildmaße; der Browser hat das Bild in der Regel schon im Cache. */ const useImageSize = (src)=>{
    _s();
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useImageSize.useEffect": ()=>{
            setSize(null);
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const img = new window.Image();
            let cancelled = false;
            img.onload = ({
                "useImageSize.useEffect": ()=>{
                    if (!cancelled && img.naturalWidth > 0) {
                        setSize({
                            width: img.naturalWidth,
                            height: img.naturalHeight
                        });
                    }
                }
            })["useImageSize.useEffect"];
            img.src = src;
            if (img.complete && img.naturalWidth > 0) {
                setSize({
                    width: img.naturalWidth,
                    height: img.naturalHeight
                });
            }
            return ({
                "useImageSize.useEffect": ()=>{
                    cancelled = true;
                }
            })["useImageSize.useEffect"];
        }
    }["useImageSize.useEffect"], [
        src
    ]);
    return size;
};
_s(useImageSize, "VfyA+VXrXg3t9CuFIcn4WoTl07c=");
const HexTileReveal = ({ image, direction, duration, delay = 0, columns = 12, focusX = 50, focusY = 50, dataTestId = 'hex-tile-reveal', className })=>{
    _s1();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const imageSize = useImageSize(image);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HexTileReveal.useEffect": ()=>{
            const el = rootRef.current;
            if (!el) return;
            const measure = {
                "HexTileReveal.useEffect.measure": ()=>{
                    const rect = el.getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) setStage({
                        width: rect.width,
                        height: rect.height
                    });
                }
            }["HexTileReveal.useEffect.measure"];
            measure();
            if (typeof ResizeObserver === 'undefined') return;
            const observer = new ResizeObserver(measure);
            observer.observe(el);
            return ({
                "HexTileReveal.useEffect": ()=>observer.disconnect()
            })["HexTileReveal.useEffect"];
        }
    }["HexTileReveal.useEffect"], []);
    const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HexTileReveal.useMemo[grid]": ()=>{
            if (!stage || !imageSize) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$hexTiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHexGrid"])({
                width: stage.width,
                height: stage.height,
                imageWidth: imageSize.width,
                imageHeight: imageSize.height,
                columns,
                direction,
                duration,
                focus: {
                    x: focusX,
                    y: focusY
                }
            });
        }
    }["HexTileReveal.useMemo[grid]"], [
        stage,
        imageSize,
        columns,
        direction,
        duration,
        focusX,
        focusY
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        "data-testid": dataTestId,
        "data-ready": grid ? 'true' : 'false',
        "data-tiles": grid?.tiles.length ?? 0,
        "aria-hidden": "true",
        children: grid?.tiles.map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tile"], {
                style: {
                    '--x': `${tile.x}px`,
                    '--y': `${tile.y}px`,
                    '--size': `${tile.size}px`,
                    '--delay': `${delay + tile.delay}ms`,
                    '--tile-duration': `${grid.tileDuration}ms`,
                    '--image': `url("${image}")`,
                    '--bg-size': `${grid.bgWidth}px ${grid.bgHeight}px`,
                    '--bg-pos': `${tile.bgX}px ${tile.bgY}px`
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileFace"], {
                    "data-role": tile.role,
                    "data-side": tile.side
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, tile.key, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(HexTileReveal, "T2HdivguqxwWiPjQCxgGETLlyt4=", false, function() {
    return [
        useImageSize
    ];
});
_c = HexTileReveal;
const __TURBOPACK__default__export__ = HexTileReveal;
var _c;
__turbopack_context__.k.register(_c, "HexTileReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexTileReveal/hexTiles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TILE_DURATION_RATIO",
    ()=>TILE_DURATION_RATIO,
    "buildHexGrid",
    ()=>buildHexGrid,
    "coverBox",
    ()=>coverBox,
    "paginationRow",
    ()=>paginationRow
]);
/**
 * Geometrie für die Wabe des Slide-Übergangs: gleiche Sechseckform wie der
 * IconButton (Spitze oben, quadratischer Rahmen), versetzt gestapelt wie ein
 * Bienenwabenmuster. Jede Kachel zeigt den Ausschnitt des neuen Bildes an
 * ihrer Position (object-fit: cover nachgerechnet) und blendet mit eigener
 * Verzögerung ein — Kachel um Kachel von einer Seite zur anderen, bis das
 * ganze Bild steht. Das Raster selbst liegt in `@/lib/hex/grid` (#1188).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
;
const TILE_DURATION_RATIO = 0.42;
const CENTER_FOCUS = {
    x: 50,
    y: 50
};
const coverBox = (width, height, imageWidth, imageHeight, focus = CENTER_FOCUS)=>{
    const scale = Math.max(width / imageWidth, height / imageHeight);
    const bgWidth = imageWidth * scale;
    const bgHeight = imageHeight * scale;
    return {
        bgWidth,
        bgHeight,
        offsetX: (width - bgWidth) * focus.x / 100,
        offsetY: (height - bgHeight) * focus.y / 100
    };
};
/**
 * Aufteilungen der Pagination-Reihe, beste zuerst: je eine leere Kachel
 * zwischen Pfeil und Slide-Kacheln (`gap`) und eine zum rechten Rand
 * (`border`). Reicht die Reihe nicht, entfällt zuerst der Randabstand, dann
 * der Abstand der Pfeile.
 */ const ROW_LAYOUTS = [
    {
        gap: 1,
        border: 1
    },
    {
        gap: 1,
        border: 0
    },
    {
        gap: 0,
        border: 0
    }
];
const paginationRow = (width, height, columns, count, bottom = height, arrows = true)=>{
    if (count < 1) return {
        prev: null,
        pages: [],
        next: null
    };
    const inside = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(width, height, columns).filter((c)=>c.x >= 0 && c.x + c.size <= width && c.y >= 0 && c.y + c.size <= Math.min(height, bottom));
    if (inside.length === 0) return {
        prev: null,
        pages: [],
        next: null
    };
    const rowYs = [
        ...new Set(inside.map((c)=>Math.round(c.cy * 10) / 10))
    ].sort((a, b)=>b - a);
    const rowY = rowYs[1] ?? rowYs[0];
    const row = inside.filter((c)=>Math.abs(c.cy - rowY) < 0.5).sort((a, b)=>a.x - b.x);
    for (const { gap, border } of arrows ? ROW_LAYOUTS : []){
        const need = count + 2 + gap * 2 + border;
        if (row.length < need) continue;
        const cells = row.slice(row.length - need, row.length - border);
        return {
            prev: cells[0],
            pages: cells.slice(1 + gap, 1 + gap + count),
            next: cells[cells.length - 1]
        };
    }
    const withoutBorder = row.length > count ? row.slice(0, -1) : row;
    const pages = withoutBorder.slice(-count);
    if (!arrows) return {
        prev: null,
        pages,
        next: null
    };
    const below = rowYs.length > 1 ? inside.filter((c)=>Math.abs(c.cy - rowYs[0]) < 0.5) : [];
    if (pages.length === 0 || below.length < 2) return {
        prev: null,
        pages,
        next: null
    };
    // versetzte unterste Reihe: die Nachbarn unten links der ersten und unten rechts der letzten Slide-Zelle
    const half = pages[0].size / 2;
    const nearest = (x)=>below.reduce((best, c)=>Math.abs(c.cx - x) < Math.abs(best.cx - x) ? c : best);
    const prev = nearest(pages[0].cx - half);
    const next = nearest(pages[pages.length - 1].cx + half);
    return prev.key === next.key ? {
        prev: null,
        pages,
        next: null
    } : {
        prev,
        pages,
        next
    };
};
const buildHexGrid = ({ width, height, imageWidth, imageHeight, columns, direction, duration, bleed = 1, focus })=>{
    const tileDuration = Math.round(duration * TILE_DURATION_RATIO);
    if (width <= 0 || height <= 0 || imageWidth <= 0 || imageHeight <= 0 || columns < 1) {
        return {
            tiles: [],
            tileDuration,
            bgWidth: 0,
            bgHeight: 0
        };
    }
    const { size, rowStep, originX, originY, shiftOf, baseCenterX, baseCenterY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridOrigin"])(width, height, columns);
    const rows = Math.ceil(height / rowStep) + 1;
    const { bgWidth, bgHeight, offsetX, offsetY } = coverBox(width, height, imageWidth, imageHeight, focus);
    // Die Verzögerung wächst mit dem Weg über die Bühne (leicht diagonal),
    // Richtung siehe `along` unten; ein kleiner deterministischer Versatz je
    // Kachel nimmt der Front die Linealkante. Alle Kacheln sind spätestens bei
    // `duration` fertig.
    const spread = Math.max(0, duration - tileDuration);
    const diagonalWeight = 0.35;
    const maxPath = width + height * diagonalWeight;
    const neighbourRadius = size * 1.05;
    const tiles = [];
    for(let row = -1; row <= rows; row += 1){
        for(let col = -1; col <= columns + 1; col += 1){
            const cx = baseCenterX(row, col) + originX;
            const cy = baseCenterY(row) + originY;
            const x = cx - size / 2;
            const y = cy - size / 2;
            if (x >= width || y >= height || x + size <= 0 || y + size <= 0) continue;
            const along = direction === 'next' ? width - cx : cx;
            const path = (along + cy * diagonalWeight) / maxPath;
            const jitter = (Math.abs(row) * 7 + Math.abs(col) * 13) % 11 / 11 * 0.08;
            const delay = Math.round(Math.min(1, Math.max(0, path * 0.92 + jitter)) * spread);
            const dx = cx - width / 2;
            const dy = cy - height / 2;
            const dist = Math.hypot(dx, dy);
            let role = 'plain';
            let side;
            if (dist < 0.5) role = 'center';
            else if (dist < neighbourRadius) {
                role = dx + dy < 0 ? 'ring-blue' : 'ring-green';
                if (Math.abs(dy) < size * 0.1) side = dx < 0 ? 'w' : 'e';
                else if (dy < 0) side = dx < 0 ? 'nw' : 'ne';
                else side = dx < 0 ? 'sw' : 'se';
            }
            const bx = x - bleed;
            const by = y - bleed;
            tiles.push({
                key: `${row}-${col}`,
                role,
                side,
                x: bx,
                y: by,
                size: size + bleed * 2,
                delay,
                tintDuration: Math.max(0, duration - delay),
                bgX: offsetX - bx,
                bgY: offsetY - by
            });
        }
    }
    return {
        tiles,
        tileDuration,
        bgWidth,
        bgHeight
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HexTileReveal/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$hexTiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/hexTiles.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroControls",
    ()=>HeroControls,
    "HeroCornerCta",
    ()=>HeroCornerCta,
    "HeroPagination",
    ()=>HeroPagination,
    "default",
    ()=>__TURBOPACK__default__export__,
    "heroArrows",
    ()=>heroArrows,
    "heroControlSnap",
    ()=>heroControlSnap,
    "useHeroCtaAccent",
    ()=>useHeroCtaAccent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCta/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$HexCta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexCta/HexCta.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStagePlacement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useHexStagePlacement.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/heroViewport.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
const heroArrows = (stageWidth)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHeroPhone"])(stageWidth);
const NO_KEYS = [];
const useHeroCtaAccent = (activeHasCta)=>{
    _s();
    const [ctaKeys, setCtaKeys] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(NO_KEYS);
    const accentKeys = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useHeroCtaAccent.useMemo[accentKeys]": ()=>activeHasCta ? ctaKeys : NO_KEYS
    }["useHeroCtaAccent.useMemo[accentKeys]"], [
        activeHasCta,
        ctaKeys
    ]);
    return {
        accentKeys,
        onCellsChange: setCtaKeys
    };
};
_s(useHeroCtaAccent, "Dv9+XRh5dAcmjG7huAaljACgu2E=");
const heroControlSnap = ({ width, height, columns, rect })=>{
    const size = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCellSize"])(width, columns);
    const x = rect.left + size / 2;
    const y = (rect.top + rect.bottom) / 2;
    const cell = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nearestHexCell"])(width, height, columns, x, y);
    return cell ? {
        dx: cell.cx - x,
        dy: cell.cy - y,
        size
    } : null;
};
const HeroPagination = ({ count, slider, progressDuration, getLabel, dataTestId })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexPagination"], {
        count: count,
        activeIndex: slider.activeIndex,
        cells: [],
        inline: true,
        onSelect: (index)=>slider.goTo(index),
        progressDuration: progressDuration,
        paused: slider.isPaused,
        progressKey: slider.cycle,
        controlsIdPrefix: `${dataTestId}-slide`,
        getLabel: getLabel,
        tone: "overlay",
        // #1984: Kacheln lückenlos nebeneinander wie Zellen einer Rasterreihe
        gap: 0,
        dataTestId: `${dataTestId}-pagination`
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx",
        lineNumber: 94,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = HeroPagination;
const HeroControls = ({ arrows, slider, prevLabel, nextLabel, dataTestId, ...pagination })=>{
    _s1();
    const rowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const placement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStagePlacement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexStagePlacement"])(rowRef);
    const snap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroControls.useMemo[snap]": ()=>placement ? heroControlSnap(placement) : null
    }["HeroControls.useMemo[snap]"], [
        placement
    ]);
    const size = snap?.size ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCellSize"])(0, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationSlot"], {
        "data-testid": `${dataTestId}-pagination-slot`,
        "data-arrows": arrows ? 'true' : 'false',
        "data-gap": __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_ARROW_GAP_CELLS"] * size,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControlRow"], {
            ref: rowRef,
            "data-testid": `${dataTestId}-control-row`,
            "data-snapped": snap ? 'true' : 'false',
            "data-cell": size,
            style: snap ? {
                '--snap-x': `${snap.dx}px`,
                '--snap-y': `${snap.dy}px`
            } : undefined,
            children: [
                arrows && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavTile"], {
                    type: "button",
                    onClick: slider.prev,
                    "aria-label": prevLabel,
                    "data-testid": `${dataTestId}-prev`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        strokeColor: "currentColor"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroPagination, {
                    ...pagination,
                    slider: slider,
                    dataTestId: dataTestId
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                arrows && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavTile"], {
                    type: "button",
                    onClick: slider.next,
                    "aria-label": nextLabel,
                    "data-testid": `${dataTestId}-next`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx",
                        lineNumber: 180,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx",
                    lineNumber: 174,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(HeroControls, "AJGT8OR7kDYs6CUb9cQlT1WDHoM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStagePlacement$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexStagePlacement"]
    ];
});
_c1 = HeroControls;
const HeroCornerCta = ({ label, activeIndex, onClick, onCellsChange, dataTestId })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CtaCorner"], {
        "data-testid": `${dataTestId}-cta-corner`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexCta$2f$HexCta$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexCta"], {
            onClick: onClick,
            onCellsChange: onCellsChange,
            dataTestId: `${dataTestId}-slide-${activeIndex}-cta`,
            children: label
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx",
            lineNumber: 211,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx",
        lineNumber: 210,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c2 = HeroCornerCta;
const __TURBOPACK__default__export__ = HeroControls;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "HeroPagination");
__turbopack_context__.k.register(_c1, "HeroControls");
__turbopack_context__.k.register(_c2, "HeroCornerCta");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlideContent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSlideContent",
    ()=>HeroSlideContent,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
/** Misst die Inhalte wie HexContentBackdrop, zeichnet aber nichts — für Overlays außerhalb des DOM. */ const ContentRects = ({ frameRef, anchorRef, state, index, onChange })=>{
    _s();
    const { rects } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useContentRects"])(frameRef, anchorRef, state);
    const handler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContentRects.useEffect": ()=>{
            handler.current = onChange;
        }
    }["ContentRects.useEffect"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContentRects.useEffect": ()=>{
            handler.current?.(index, rects);
        }
    }["ContentRects.useEffect"], [
        index,
        rects
    ]);
    return null;
};
_s(ContentRects, "0mzdOAI8bwYcHZR8X5GqJQtLLSE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useContentRects"]
    ];
});
_c = ContentRects;
const HeroSlideContent = ({ slide, index, state, timeline, columns, dataTestId, cornerCta = false, reservePagination = 0, reserveArrows = false, backdrop = 'tiles', onRectsChange, pageHeading = false })=>{
    _s1();
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const layerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const id = `${dataTestId}-slide-${index}`;
    // #1541: Der Slide, der beim Einhängen aktiv ist, zeigt seinen Text sofort —
    // ohne Einblenden. Er steht so schon im ersten Bild des Server-HTML (auf dem
    // blauen Grund der WebGL-Bühne lesbar, bevor das Bild aufgebaut ist). Mit
    // Einblenden von Deckkraft 0 zählte der Browser die Überschrift erst, als sie
    // nach der Hydration neu gezeichnet wurde: LCP der Startseite mobil 4 s bei
    // einem ersten Bild nach 1,4 s. Nur mit WebGL-Overlay (`backdrop="none"`):
    // mit DOM-Kacheln stünde der Text kurz ohne Grund auf dem Bild. Verlässt der
    // Slide die Bühne, gilt für ihn danach die Zeitachse wie für alle anderen.
    const [instant, setInstant] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(backdrop === 'none' && state === 'active');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSlideContent.useEffect": ()=>{
            if (state !== 'active') setInstant(false);
        }
    }["HeroSlideContent.useEffect"], [
        state
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ForegroundLayer"], {
        ref: layerRef,
        $state: state,
        "data-testid": `${id}-foreground`,
        "data-state": state,
        "aria-hidden": state !== 'active',
        children: [
            backdrop === 'tiles' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HexContentBackdrop"], {
                anchorRef: contentRef,
                state: state,
                duration: timeline.total,
                enterDelay: timeline.backdropIn.delay,
                enterDuration: timeline.backdropIn.duration,
                leaveDelay: timeline.textOut.delay,
                leaveDuration: timeline.textOut.duration,
                columns: columns,
                dataTestId: `${id}-backdrop`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlideContent.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentRects, {
                frameRef: layerRef,
                anchorRef: contentRef,
                state: state,
                index: index,
                onChange: onRectsChange
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlideContent.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
                ref: contentRef,
                $state: state,
                $in: timeline.textIn,
                $out: timeline.textOut,
                $instant: instant,
                $withControls: reservePagination > 0 || cornerCta,
                $withSpacer: reservePagination > 0,
                "data-testid": `${id}-content`,
                "data-instant": instant ? 'true' : 'false',
                children: [
                    slide.headline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                        importance: pageHeading ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h1 : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h2,
                        renderAs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h2,
                        dataTestId: `${id}-headline`,
                        children: slide.headline
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlideContent.tsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    slide.text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                        variant: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].bodybig,
                        dataTestId: `${id}-text`,
                        children: slide.text
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlideContent.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    reservePagination > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationSpacer"], {
                        $count: reservePagination,
                        $arrows: reserveArrows,
                        "aria-hidden": "true",
                        "data-backdrop-leaf": "",
                        "data-arrows": reserveArrows ? 'true' : 'false',
                        "data-width": (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroControlRowWidth"])(reservePagination, reserveArrows),
                        "data-gap": __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_PAGINATION_TILE_PX"],
                        "data-testid": `${id}-pagination-spacer`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlideContent.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlideContent.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlideContent.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(HeroSlideContent, "mMx15QyS07npxc/hiltPZcZtyNU=");
_c1 = HeroSlideContent;
const __TURBOPACK__default__export__ = HeroSlideContent;
var _c, _c1;
__turbopack_context__.k.register(_c, "ContentRects");
__turbopack_context__.k.register(_c1, "HeroSlideContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTA_CORNER_BOTTOM",
    ()=>CTA_CORNER_BOTTOM,
    "CTA_CORNER_LIFT_ROWS",
    ()=>CTA_CORNER_LIFT_ROWS,
    "Content",
    ()=>Content,
    "ControlRow",
    ()=>ControlRow,
    "CtaCorner",
    ()=>CtaCorner,
    "Foreground",
    ()=>Foreground,
    "ForegroundLayer",
    ()=>ForegroundLayer,
    "HERO_ARROW_GAP_CELLS",
    ()=>HERO_ARROW_GAP_CELLS,
    "HEX_CELL",
    ()=>HEX_CELL,
    "HaloWrap",
    ()=>HaloWrap,
    "HoverSpotWrap",
    ()=>HoverSpotWrap,
    "Layer",
    ()=>Layer,
    "Media",
    ()=>Media,
    "NavTile",
    ()=>NavTile,
    "PaginationSlot",
    ()=>PaginationSlot,
    "PaginationSpacer",
    ()=>PaginationSpacer,
    "Root",
    ()=>Root,
    "SlideImage",
    ()=>SlideImage,
    "SlideVideo",
    ()=>SlideVideo,
    "Stage",
    ()=>Stage,
    "TilesWrap",
    ()=>TilesWrap,
    "heroControlRowCells",
    ()=>heroControlRowCells,
    "heroControlRowWidth",
    ()=>heroControlRowWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$heroStage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/heroStage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/heroViewport.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexPagination/HexPagination.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
/*
 * Der neue Slide liegt über dem alten. Bilder erscheinen als Sechseck-Wabe
 * Kachel um Kachel (Molecule/HexTileReveal, Modus `tiles`); Videos und der
 * Fallback nutzen eine wachsende Sechseck-Maske (Form des IconButtons, Modus
 * `mask`) — der Waben-Übergang aus `assets/theme/hex` (hexMaskReveal,
 * hexRevealSettle, hexRevealRecede, #1214 herausgelöst).
 */ const fadeOut = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 1; }
  to { opacity: 0; }
`;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "HeroSlider.styles__Root",
    componentId: "sc-f25f50e9-0"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$heroStage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroStageFrame"]}
`;
const Stage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__Stage",
    componentId: "sc-f25f50e9-1"
})`
  position: absolute;
  inset: 0;
  touch-action: pan-y;
  /* Eigener Stapelkontext: alles im Stage (Medien, Wabe, Hover-Kacheln)
     bleibt unter dem Vordergrund (z-index 2) mit Text, CTA und Overlay. */
  z-index: 1;
`;
/*
 * `$phase` ist die Bild-Phase der Zeitachse (heroTimeline): Maske und
 * Zurückweichen des alten Slides starten erst nach deren Verzögerung — vorher
 * blendet der alte Text aus, das Bild steht noch. `both` hält den Startwert
 * während der Wartezeit (Maske 0 % → neuer Slide unsichtbar).
 */ const stateStyles = {
    active: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    z-index: 2;
    visibility: visible;
    ${({ $reveal, $phase })=>$reveal === 'mask' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexMaskReveal"])($phase.duration, $phase.delay)}
      `}
  `,
    leaving: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    z-index: 1;
    visibility: visible;
    ${({ $phase })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexRevealRecede"])($phase.duration, $phase.delay)}
  `,
    hidden: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    z-index: 0;
    visibility: hidden;
  `
};
const Layer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__Layer",
    componentId: "sc-f25f50e9-2"
})`
  position: absolute;
  inset: 0;
  overflow: hidden;
  ${({ $state })=>stateStyles[$state]}

  @media (prefers-reduced-motion: reduce) {
    -webkit-mask-image: none;
    mask-image: none;
    animation: ${({ $state, $phase })=>$state === 'active' && $phase.duration ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
            ${fadeIn} 400ms ease both
          ` : 'none'};
  }
`;
const Media = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__Media",
    componentId: "sc-f25f50e9-3"
})`
  position: absolute;
  inset: 0;
  /* Während die Wabe läuft, bleibt das echte Bild unsichtbar und übernimmt
     deckungsgleich, sobald alle Kacheln stehen. */
  opacity: ${({ $hidden })=>$hidden ? 0 : 1};
  ${({ $state, $reveal, $phase })=>$state === 'active' && $reveal === 'mask' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexRevealSettle"])($phase.duration, $phase.delay)}
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const HaloWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__HaloWrap",
    componentId: "sc-f25f50e9-4"
})`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
`;
const HoverSpotWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__HoverSpotWrap",
    componentId: "sc-f25f50e9-5"
})`
  position: absolute;
  inset: 0;
  z-index: 3;
  pointer-events: none;
`;
const TilesWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__TilesWrap",
    componentId: "sc-f25f50e9-6"
})`
  position: absolute;
  inset: 0;
  z-index: 1;
`;
const SlideImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img.withConfig({
    displayName: "HeroSlider.styles__SlideImage",
    componentId: "sc-f25f50e9-7"
})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ $focal })=>$focal ?? 'center'};
`;
const SlideVideo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].video.withConfig({
    displayName: "HeroSlider.styles__SlideVideo",
    componentId: "sc-f25f50e9-8"
})`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Foreground = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__Foreground",
    componentId: "sc-f25f50e9-9"
})`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
`;
const ForegroundLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__ForegroundLayer",
    componentId: "sc-f25f50e9-10"
})`
  position: absolute;
  inset: 0;
  z-index: ${({ $state })=>$state === 'active' ? 2 : $state === 'leaving' ? 1 : 0};
  visibility: ${({ $state })=>$state === 'hidden' ? 'hidden' : 'visible'};
`;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__Content",
    componentId: "sc-f25f50e9-11"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$heroStage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroContentLayout"]}

  /* #1768: der Abstand zur Reihe kommt allein aus dem Platzhalter (eine Kachel) — kein Rand des Texts davor */
  ${({ $withSpacer })=>$withSpacer && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      & > :nth-last-child(2) {
        margin-bottom: 0;
      }
    `}

  & > * {
    animation-duration: ${({ $in })=>$in.duration}ms;
    animation-timing-function: ease;
    animation-fill-mode: both;
  }

  /* $instant (#1541): der beim Laden aktive Slide steht sofort da, ohne Einblenden */
  ${({ $state, $in, $instant })=>$state === 'active' && !$instant && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      & > * {
        animation-name: ${fadeIn};
        animation-delay: ${$in.delay}ms;
      }
    `}

  ${({ $state, $out })=>$state === 'leaving' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      & > * {
        animation-name: ${fadeOut};
        animation-delay: ${$out.delay}ms;
        animation-duration: ${$out.duration}ms;
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    & > * {
      animation-delay: 0ms;
      animation-duration: 200ms;
    }
  }
`;
const CTA_CORNER_LIFT_ROWS = 2;
/** Telefon: kein Platz für Pfeile — dieselbe Grenze wie heroArrows (HeroControls), Quelle heroViewport (#2027) */ const PHONE = `@media ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_MEDIA"]}`;
const HEX_CELL = `var(--hex-cell, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TILE_SIZE_PX"]}px)`;
const HERO_ARROW_GAP_CELLS = 0;
const heroControlRowCells = (count, arrows)=>count + (arrows ? 2 + 2 * HERO_ARROW_GAP_CELLS : 0);
const heroControlRowWidth = (count, arrows, cell = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TILE_SIZE_PX"])=>heroControlRowCells(count, arrows) * cell;
const PaginationSpacer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__PaginationSpacer",
    componentId: "sc-f25f50e9-12"
})`
  width: calc(${HEX_CELL} * ${({ $count, $arrows })=>heroControlRowCells($count, $arrows)});
  height: calc(2 * ${HEX_CELL} - ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$heroStage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_CONTENT_GAP"]});
  flex-shrink: 0;
  pointer-events: none;

  ${PHONE} {
    width: calc(${HEX_CELL} * ${({ $count })=>heroControlRowCells($count, false)});
  }
`;
const PaginationSlot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.attrs({
    $withControls: true
}).withConfig({
    displayName: "HeroSlider.styles__PaginationSlot",
    componentId: "sc-f25f50e9-13"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$heroStage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroContentAnchor"]}
  z-index: 3;
  --size: ${HEX_CELL};
  pointer-events: none;
`;
const ControlRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__ControlRow",
    componentId: "sc-f25f50e9-14"
})`
  display: flex;
  align-items: center;
  gap: calc(${HERO_ARROW_GAP_CELLS} * var(--size, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_PAGINATION_TILE_PX"]}px));
  transform: translate(var(--snap-x, 0px), var(--snap-y, 0px));
  pointer-events: none;
`;
const NavTile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "HeroSlider.styles__NavTile",
    componentId: "sc-f25f50e9-15"
})`
  flex-shrink: 0;
  width: var(--size, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_PAGINATION_TILE_PX"]}px);
  height: var(--size, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexPagination$2f$HexPagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_PAGINATION_TILE_PX"]}px);
  padding: 0;
  margin: 0;
  border: 0;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  /* Trefferfläche: Masken schneiden Zeigerereignisse nicht zu, ohne clip-path wäre der ganze Kasten klickbar. Das spitze Polygon bleibt die Trefferform; die runde Maske liegt ganz darin. */
  clip-path: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HEXAGON_CLIP_PATH"]};
  /* #1768: feste Farben wie die Pagination im Ton overlay — das Overlay bleibt auch im Dark Mode Marineblau, Theme-Weiß wäre dort dunkelgrau */
  background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;

  svg {
    width: 45%;
    height: 45%;
  }

  &:hover,
  &:focus-visible {
    background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
    outline: none;
  }

  ${PHONE} {
    display: none;
  }
`;
const CTA_CORNER_BOTTOM = `calc(var(--edge-padding, 0px) + ${CTA_CORNER_LIFT_ROWS * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_STEP"]} * ${HEX_CELL})`;
const CtaCorner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeroSlider.styles__CtaCorner",
    componentId: "sc-f25f50e9-16"
})`
  position: absolute;
  left: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$heroStage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_SIDE_PADDING"]};
  right: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$heroStage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_SIDE_PADDING"]};
  /* #1984: zwei Kachelreihen über der Falz, damit der Button auch bei hoher Bühne im Viewport steht; HexCta rastet weiter ein */
  bottom: ${CTA_CORNER_BOTTOM};
  height: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TILE_SIZE_PX"] * (1 + 2 * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_STEP"])}px;
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;

  & > button,
  & > a {
    margin-top: 0;
    pointer-events: auto;
  }

  /* Telefon (#1984): direkt an der Falz, die Bühne passt dort immer in den Viewport */
  ${PHONE} {
    left: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$heroStage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_SIDE_PADDING"]};
    right: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$heroStage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_SIDE_PADDING"]};
    bottom: var(--edge-padding, 0px);

    /* #2178: Knopf nur so breit wie sein Label, mittig; die Kacheln folgen der Breite (hexCtaShape) */
    justify-content: center;

    /* #2027 Abnahme: der Knopf ist am Telefon genau eine Zeile hoch — kleinere
       Stufe der Theme-Skala, kein Umbruch; reicht der Platz nicht, endet das
       Label (inneres span von HexCta) mit Auslassungspunkten */
    & > button,
    & > a {
      max-width: 100%;
      font-size: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_TYPE"].cta.fontSize};
      line-height: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_PHONE_TYPE"].cta.lineHeight};
      white-space: nowrap;
    }

    & > button > span,
    & > a > span {
      max-width: 100%;
      white-space: nowrap;
    }

    & > button > span > span,
    & > a > span > span {
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSlider",
    ()=>HeroSlider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexHaloBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexHaloBackdrop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexEdge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexHoverSpot/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$HexHoverSpot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexHoverSpot/HexHoverSpot.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/HexTileReveal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlideContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlideContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/heroTimeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useHeroSlider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/useHeroSlider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useSliderInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/useSliderInteractions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useRequestedSlides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/useRequestedSlides.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/useInView.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$optimizedImageUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/images/optimizedImageUrl.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStageSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useHexStageSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexPointer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useHexPointer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/heroEdges.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/heroViewport.ts [app-client] (ecmascript)");
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
;
;
;
;
const HeroSlider = ({ slides, autoplay = true, autoplayDelay = 7000, transitionDuration = 2400, tileColumns, initialIndex = 0, onCtaClick, dataTestId = 'hero-slider', dataAttributes, pageHeading = false, className, edges })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    const count = slides.length;
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // #2027: Autoplay steht außerhalb des Viewports und bei reduzierter Bewegung (wie HoneycombSlider)
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(rootRef);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const slider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useHeroSlider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeroSlider"])({
        count,
        autoplay: autoplay && !reducedMotion,
        autoplayDelay,
        transitionDuration,
        initialIndex,
        inView
    });
    // #1473: nur aktiver und nächster Slide laden, die übrigen kurz vor ihrem Einsatz
    const requested = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useRequestedSlides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestedSlides"])(slider.activeIndex, count);
    const timeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroSlider.useMemo[timeline]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroTimeline"])(transitionDuration)
    }["HeroSlider.useMemo[timeline]"], [
        transitionDuration
    ]);
    // Beim Laden wartet der erste Slide nicht auf Text-aus und Bild-Phase
    const firstTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroSlider.useMemo[firstTimeline]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialTimeline"])(transitionDuration)
    }["HeroSlider.useMemo[firstTimeline]"], [
        transitionDuration
    ]);
    const hoverSpot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Kachelgröße bleibt ~36 px: Spalten aus der Bühnenbreite, außer der Aufrufer gibt sie vor
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStageSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexStageSize"])(rootRef, 40);
    const columns = tileColumns ?? stage.columns;
    // #2027: am Telefon flacherer Wabenrand (heroViewport)
    const stageEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeroSlider.useMemo[stageEdges]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroViewportEdges"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroEdges"])(edges), stage.width)
    }["HeroSlider.useMemo[stageEdges]"], [
        edges,
        stage.width
    ]);
    // Die Bühne reicht um die Randzone unter die Falz (Root wächst um
    // --edge-padding): beim ersten Laden ist kein Rand im Bild, beim Scrollen
    // kommt er ins Bild und übergibt an das nächste Element. Inhalte und
    // Pagination bleiben an der Falz verankert.
    // Vor der ersten Messung (Server-HTML) die Vorgabe — sonst wächst die Bühne nach der Hydration (#1541)
    const edgePadding = stage.width > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroEdgePadding"])(stageEdges, stage.width, columns) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroEdgePaddingFallback"])(stageEdges);
    // #1768: Pfeile neben der Pagination unter dem Text, außer am Telefon
    const arrows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroArrows"])(stage.width);
    const activeCta = slides[slider.activeIndex]?.cta;
    // #1768: blauer Rand um den Waben-Button unten rechts (Halo und Akzent der Hover-Wabe)
    const { accentKeys, onCellsChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeroCtaAccent"])(Boolean(activeCta));
    const interactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useSliderInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderInteractions"])(slider);
    // Hover-Wabe folgt der Maus über dem ganzen Slider — auch über die
    // Reihe unter dem Text und den Button unten rechts, deshalb am Root statt am Stage (der Stage füllt den Root,
    // die Koordinaten sind identisch). Rechteck-Cache und Touch-Filter im Hook.
    const pointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexPointer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexPointer"])({
        onMove: {
            "HeroSlider.useHexPointer[pointer]": (x, y)=>hoverSpot.current?.move(x, y)
        }["HeroSlider.useHexPointer[pointer]"],
        onLeave: {
            "HeroSlider.useHexPointer[pointer]": ()=>hoverSpot.current?.leave()
        }["HeroSlider.useHexPointer[pointer]"]
    });
    const slideState = (index)=>{
        if (index === slider.activeIndex) return 'active';
        if (index === slider.previousIndex) return 'leaving';
        return 'hidden';
    };
    if (count === 0) return null;
    const slideLabel = (index)=>tr('heroSlider.slideOf', {
            defaultValue: 'Slide {{index}} von {{count}}',
            index: index + 1,
            count
        });
    const openCta = (index)=>{
        const slide = slides[index];
        if (onCtaClick) onCtaClick(slide, index);
        else {
            // #2018: nie ein leeres oder `null`-Ziel an den Router
            const ziel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(slide?.cta?.href);
            if (ziel) router.push(ziel);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        ...dataAttributes,
        "data-testid": dataTestId,
        "data-columns": columns,
        "data-active-index": slider.activeIndex,
        // #2175: Ton der aktiven Folie für den durchsichtigen Header (useHeaderTone); ohne Angabe fehlt er
        "data-header-tone": slides[slider.activeIndex]?.tone,
        "data-transitioning": slider.isTransitioning ? 'true' : 'false',
        "data-edge-padding": edgePadding,
        // Seiten-Hero: das Frontpage-Template hält den Header darüber durchsichtig
        "data-page-hero": "true",
        "data-hex-stage": "true",
        // #1984: Zellgröße des Rasters für Pagination, Pfeile und CTA-Ecke (eine Quelle mit der Hover-Wabe)
        style: {
            '--edge-padding': `${edgePadding}px`,
            '--hex-cell': `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCellSize"])(stage.width, columns)}px`
        },
        role: "region",
        "aria-roledescription": tr('heroSlider.roleCarousel', {
            defaultValue: 'carousel'
        }),
        "aria-label": tr('heroSlider.label', {
            defaultValue: 'Bildergalerie'
        }),
        ...interactions.root,
        ...pointer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage"], {
                ...interactions.stage,
                children: [
                    slides.map((slide, index)=>{
                        const state = slideState(index);
                        const reveal = state !== 'active' || slider.cycle === 0 || reducedMotion ? 'none' : slide.image ? 'tiles' : 'mask';
                        const showTiles = reveal === 'tiles' && slider.isTransitioning && Boolean(slide.image);
                        const alt = slide.alt ?? slide.headline ?? '';
                        const load = requested.has(index);
                        // #1473: skaliert und als WebP über den Bildoptimierer; der CMS-Pfad bleibt
                        const image = slide.image ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$optimizedImageUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedImageUrl"])(slide.image, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$optimizedImageUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_IMAGE_WIDTH"]) : undefined;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
                            id: `${dataTestId}-slide-${index}`,
                            "data-testid": `${dataTestId}-slide-${index}`,
                            "data-state": state,
                            role: "group",
                            "aria-roledescription": tr('heroSlider.roleSlide', {
                                defaultValue: 'slide'
                            }),
                            "aria-label": slideLabel(index),
                            "aria-hidden": state !== 'active',
                            $state: state,
                            $phase: timeline.image,
                            $reveal: reveal,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Media"], {
                                    $state: state,
                                    $phase: timeline.image,
                                    $reveal: reveal,
                                    $hidden: showTiles,
                                    children: slide.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideVideo"], {
                                        autoPlay: true,
                                        muted: true,
                                        loop: true,
                                        playsInline: true,
                                        preload: load ? 'auto' : 'none',
                                        "aria-label": alt,
                                        "data-testid": `${dataTestId}-slide-${index}-video`,
                                        children: load && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                            src: slide.video,
                                            type: "video/mp4",
                                            "data-testid": `${dataTestId}-slide-${index}-video-source`
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                                            lineNumber: 217,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                                        lineNumber: 207,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideImage"], {
                                        src: load ? image : undefined,
                                        // #1950: ohne srcset/sizes lud der Browser w=1920 auch auf dem Handy
                                        srcSet: load && slide.image ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$optimizedImageUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedImageSrcSet"])(slide.image) : undefined,
                                        sizes: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$optimizedImageUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_IMAGE_SIZES"],
                                        alt: alt,
                                        $focal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroObjectPosition"])(slide.focalPoint),
                                        loading: load ? 'eager' : 'lazy',
                                        // #1533: nur der aktive Slide konkurriert mit dem ersten Bildschirm; die Nachbarn
                                        // werden erst nach Sekunden gebraucht — niedrige Priorität, kein preload im Kopf
                                        fetchPriority: load && state !== 'active' ? 'low' : undefined,
                                        decoding: "async",
                                        draggable: false,
                                        "data-testid": `${dataTestId}-slide-${index}-image`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                                        lineNumber: 225,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)) : null
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                showTiles && image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TilesWrap"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$HexTileReveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexTileReveal"], {
                                        image: image,
                                        direction: slider.direction,
                                        delay: timeline.image.delay,
                                        duration: timeline.image.duration,
                                        columns: columns,
                                        focusX: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroFocalPoint"])(slide.focalPoint).x,
                                        focusY: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroFocalPoint"])(slide.focalPoint).y,
                                        dataTestId: `${dataTestId}-slide-${index}-tiles`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                                        lineNumber: 244,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                                    lineNumber: 243,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    }),
                    accentKeys.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HaloWrap"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexHaloBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexHaloBackdrop"], {
                            width: stage.width,
                            height: stage.height,
                            columns: columns,
                            keys: accentKeys,
                            dataTestId: `${dataTestId}-halo`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                            lineNumber: 261,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverSpotWrap"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexHoverSpot$2f$HexHoverSpot$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexHoverSpot"], {
                            ref: hoverSpot,
                            columns: columns,
                            enabled: !reducedMotion,
                            accentKeys: accentKeys,
                            dataTestId: `${dataTestId}-hover-spot`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                            lineNumber: 272,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexEdge"], {
                        edges: stageEdges,
                        columns: columns,
                        zIndex: 3,
                        dataTestId: `${dataTestId}-edge`
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                lineNumber: 177,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Foreground"], {
                children: [
                    slides.map((slide, index)=>{
                        // #1747: mit mehreren Slides hält jeder Inhalt den Platz der Reihe (Pfeile, Pagination) frei (Overlay dahinter), auch ohne Text.
                        // #1976: der CTA steht immer unten rechts, er allein ist kein Inhalt unter dem Text
                        const hasContent = Boolean(slide.headline || slide.text) || count > 1;
                        if (!hasContent) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlideContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSlideContent"], {
                            slide: slide,
                            index: index,
                            state: slideState(index),
                            timeline: slider.cycle === 0 ? firstTimeline : timeline,
                            columns: columns,
                            dataTestId: dataTestId,
                            pageHeading: pageHeading && index === 0,
                            cornerCta: Boolean(slide.cta),
                            reservePagination: count > 1 ? count : 0,
                            reserveArrows: arrows
                        }, index, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                            lineNumber: 298,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    }),
                    count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroControls"], {
                        count: count,
                        arrows: arrows,
                        slider: slider,
                        progressDuration: autoplay ? autoplayDelay : undefined,
                        getLabel: slideLabel,
                        prevLabel: tr('heroSlider.previous', {
                            defaultValue: 'Vorheriger Slide'
                        }),
                        nextLabel: tr('heroSlider.next', {
                            defaultValue: 'Nächster Slide'
                        }),
                        dataTestId: dataTestId
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                        lineNumber: 315,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            activeCta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroCornerCta"], {
                label: activeCta.label,
                activeIndex: slider.activeIndex,
                onClick: ()=>openCta(slider.activeIndex),
                onCellsChange: onCellsChange,
                dataTestId: dataTestId
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
                lineNumber: 330,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroSlider, "IIAUX6+sn9rSy1rq3Y4w/9RrBEA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useHeroSlider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeroSlider"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useRequestedSlides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRequestedSlides"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStageSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexStageSize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeroCtaAccent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useSliderInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderInteractions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexPointer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexPointer"]
    ];
});
_c = HeroSlider;
const __TURBOPACK__default__export__ = HeroSlider;
var _c;
__turbopack_context__.k.register(_c, "HeroSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HeroSlider/heroTimeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Zeitachse eines Slidewechsels. Vier Phasen laufen nacheinander mit leichter
 * Überlappung: der alte Text blendet aus, dann baut sich das Bild auf (Wabe
 * bzw. Maske, der alte Slide weicht zurück), dann poppt das blaue
 * Waben-Overlay hinter dem neuen Text ein, zuletzt blendet der Text ein.
 * Alle Werte in ms, abgeleitet aus der Gesamtdauer des Übergangs.
 */ __turbopack_context__.s([
    "HERO_PHASES",
    ()=>HERO_PHASES,
    "heroTimeline",
    ()=>heroTimeline,
    "initialTimeline",
    ()=>initialTimeline
]);
const HERO_PHASES = {
    textOut: [
        0,
        0.18
    ],
    image: [
        0.12,
        0.7
    ],
    backdropIn: [
        0.62,
        0.84
    ],
    textIn: [
        0.82,
        1
    ]
};
const phase = (total, [start, end])=>({
        delay: Math.round(total * start),
        duration: Math.round(total * (end - start))
    });
const heroTimeline = (total)=>({
        total,
        textOut: phase(total, HERO_PHASES.textOut),
        image: phase(total, HERO_PHASES.image),
        backdropIn: phase(total, HERO_PHASES.backdropIn),
        textIn: phase(total, HERO_PHASES.textIn)
    });
const initialTimeline = (total)=>{
    const t = heroTimeline(total);
    const shift = t.backdropIn.delay;
    return {
        ...t,
        backdropIn: {
            ...t.backdropIn,
            delay: 0
        },
        textIn: {
            ...t.textIn,
            delay: t.textIn.delay - shift
        }
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HeroSlider/heroViewport.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HERO_FOCAL_DEFAULT",
    ()=>HERO_FOCAL_DEFAULT,
    "HERO_HEIGHT",
    ()=>HERO_HEIGHT,
    "HERO_PHONE_EDGE_DEPTH",
    ()=>HERO_PHONE_EDGE_DEPTH,
    "HERO_PHONE_HEADLINE_LEVEL",
    ()=>HERO_PHONE_HEADLINE_LEVEL,
    "HERO_PHONE_HYPHENS",
    ()=>HERO_PHONE_HYPHENS,
    "HERO_PHONE_MAX_PX",
    ()=>HERO_PHONE_MAX_PX,
    "HERO_PHONE_MEDIA",
    ()=>HERO_PHONE_MEDIA,
    "HERO_PHONE_SIDE",
    ()=>HERO_PHONE_SIDE,
    "HERO_PHONE_TEXT_VARIANT",
    ()=>HERO_PHONE_TEXT_VARIANT,
    "HERO_PHONE_TYPE",
    ()=>HERO_PHONE_TYPE,
    "HERO_SAFE_TOP_PX",
    ()=>HERO_SAFE_TOP_PX,
    "heroFocalPoint",
    ()=>heroFocalPoint,
    "heroHeightCss",
    ()=>heroHeightCss,
    "heroObjectPosition",
    ()=>heroObjectPosition,
    "heroViewportEdges",
    ()=>heroViewportEdges,
    "isHeroPhone",
    ()=>isHeroPhone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
;
const HERO_PHONE_MAX_PX = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devices"].tabletportrait;
const HERO_PHONE_MEDIA = `(max-width: ${HERO_PHONE_MAX_PX}px)`;
const isHeroPhone = (stageWidth)=>stageWidth > 0 && stageWidth <= HERO_PHONE_MAX_PX;
const HERO_HEIGHT = {
    desktop: {
        height: 'calc(100svh - var(--page-header-offset, 56px))',
        fallback: 'calc(100vh - var(--page-header-offset, 56px))',
        min: 480,
        max: 1000
    },
    phone: {
        height: '82svh',
        fallback: '82vh',
        min: 480,
        max: 760
    }
};
const heroHeightCss = (rule)=>[
        `height: calc(${rule.fallback} + var(--edge-padding, 0px));`,
        `height: calc(${rule.height} + var(--edge-padding, 0px));`,
        `min-height: calc(${rule.min}px + var(--edge-padding, 0px));`,
        `max-height: calc(${rule.max}px + var(--edge-padding, 0px));`
    ].join('\n');
const HERO_SAFE_TOP_PX = 96;
const HERO_PHONE_SIDE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].margin.default;
const HERO_PHONE_HEADLINE_LEVEL = 'five';
const HERO_PHONE_TEXT_VARIANT = 'bodysmall';
const HERO_PHONE_TYPE = {
    headline: {
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].font.headline[HERO_PHONE_HEADLINE_LEVEL].mobile.fontSize,
        lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].font.headline[HERO_PHONE_HEADLINE_LEVEL].mobile.lineHeight
    },
    text: {
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].font.text[HERO_PHONE_TEXT_VARIANT].mobile.fontSize,
        lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].font.text[HERO_PHONE_TEXT_VARIANT].mobile.lineHeight
    },
    /**
   * CTA-Knopf am Telefon genau eine Zeile hoch: Label in `bodysmall`
   * (14/22 px, „Lassen Sie Ihre Materialien bei uns testen!" 254 px bei
   * 276 px Platz neben dem Pfeil), ohne Umbruch; reicht der Platz
   * trotzdem nicht (längere Sprache), endet das Label mit Auslassungspunkten.
   */ cta: {
        fontSize: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].font.text[HERO_PHONE_TEXT_VARIANT].mobile.fontSize,
        lineHeight: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].font.text[HERO_PHONE_TEXT_VARIANT].mobile.lineHeight
    }
};
const HERO_PHONE_HYPHENS = {
    hyphens: 'auto',
    limitChars: '12 6 6'
};
const HERO_PHONE_EDGE_DEPTH = 'section';
const flatten = (spec)=>spec && (spec.depth ?? 'hero') === 'hero' ? {
        ...spec,
        depth: HERO_PHONE_EDGE_DEPTH
    } : spec;
const heroViewportEdges = (edges, stageWidth)=>{
    if (!isHeroPhone(stageWidth)) return edges;
    const out = {};
    for (const side of Object.keys(edges)){
        const spec = edges[side];
        if (spec) out[side] = flatten(spec);
    }
    return out;
};
const HERO_FOCAL_DEFAULT = {
    x: 50,
    y: 50
};
const clampPercent = (value, fallback)=>typeof value === 'number' && Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : fallback;
const heroFocalPoint = (point)=>({
        x: clampPercent(point?.x, HERO_FOCAL_DEFAULT.x),
        y: clampPercent(point?.y, HERO_FOCAL_DEFAULT.y)
    });
const heroObjectPosition = (point)=>{
    const { x, y } = heroFocalPoint(point);
    return `${x}% ${y}%`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HeroSlider/useHeroSlider.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHeroSlider",
    ()=>useHeroSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const wrap = (index, count)=>(index % count + count) % count;
const useHeroSlider = ({ count, autoplay, autoplayDelay, transitionDuration, initialIndex = 0, inView = true })=>{
    _s();
    const [position, setPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        active: count > 0 ? wrap(initialIndex, count) : 0,
        previous: null,
        direction: 'next',
        cycle: 0
    });
    const [interactionPaused, setInteractionPausedState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [documentHidden, setDocumentHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const transitionTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const goTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHeroSlider.useCallback[goTo]": (index, direction)=>{
            if (count < 2) return;
            const target = wrap(index, count);
            setPosition({
                "useHeroSlider.useCallback[goTo]": (current)=>{
                    if (target === current.active) return current;
                    return {
                        active: target,
                        previous: current.active,
                        direction: direction ?? (target > current.active ? 'next' : 'prev'),
                        cycle: current.cycle + 1
                    };
                }
            }["useHeroSlider.useCallback[goTo]"]);
        }
    }["useHeroSlider.useCallback[goTo]"], [
        count
    ]);
    const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHeroSlider.useCallback[next]": ()=>{
            setPosition({
                "useHeroSlider.useCallback[next]": (current)=>({
                        active: wrap(current.active + 1, count),
                        previous: current.active,
                        direction: 'next',
                        cycle: current.cycle + 1
                    })
            }["useHeroSlider.useCallback[next]"]);
        }
    }["useHeroSlider.useCallback[next]"], [
        count
    ]);
    const prev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHeroSlider.useCallback[prev]": ()=>{
            setPosition({
                "useHeroSlider.useCallback[prev]": (current)=>({
                        active: wrap(current.active - 1, count),
                        previous: current.active,
                        direction: 'prev',
                        cycle: current.cycle + 1
                    })
            }["useHeroSlider.useCallback[prev]"]);
        }
    }["useHeroSlider.useCallback[prev]"], [
        count
    ]);
    // Übergang: `previous` bleibt für die Dauer der CSS-Animation sichtbar.
    // isTransitioning leitet sich direkt daraus ab — als eigener State (per
    // Effekt gesetzt) hinkte er einen Render hinterher, und in diesem einen
    // Frame stand das neue Bild unverdeckt da, bevor die Wabe es abdeckte.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHeroSlider.useEffect": ()=>{
            if (position.previous === null) return;
            if (transitionTimer.current) clearTimeout(transitionTimer.current);
            transitionTimer.current = setTimeout({
                "useHeroSlider.useEffect": ()=>{
                    setPosition({
                        "useHeroSlider.useEffect": (current)=>current.previous === null ? current : {
                                ...current,
                                previous: null
                            }
                    }["useHeroSlider.useEffect"]);
                }
            }["useHeroSlider.useEffect"], transitionDuration);
            return ({
                "useHeroSlider.useEffect": ()=>{
                    if (transitionTimer.current) clearTimeout(transitionTimer.current);
                }
            })["useHeroSlider.useEffect"];
        }
    }["useHeroSlider.useEffect"], [
        position.active,
        position.cycle,
        position.previous,
        transitionDuration
    ]);
    // Autoplay steht, solange der Tab unsichtbar ist.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHeroSlider.useEffect": ()=>{
            if (typeof document === 'undefined') return;
            const onVisibility = {
                "useHeroSlider.useEffect.onVisibility": ()=>setDocumentHidden(document.visibilityState === 'hidden')
            }["useHeroSlider.useEffect.onVisibility"];
            onVisibility();
            document.addEventListener('visibilitychange', onVisibility);
            return ({
                "useHeroSlider.useEffect": ()=>document.removeEventListener('visibilitychange', onVisibility)
            })["useHeroSlider.useEffect"];
        }
    }["useHeroSlider.useEffect"], []);
    const isPaused = !autoplay || count < 2 || interactionPaused || documentHidden || !inView;
    // #2027: zurück im Viewport — der Zyklus startet neu (Timer und Fortschritt von null), wie nach einer Pause
    const wasInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(inView);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHeroSlider.useEffect": ()=>{
            if (inView && !wasInView.current) setPosition({
                "useHeroSlider.useEffect": (pos)=>({
                        ...pos,
                        cycle: pos.cycle + 1
                    })
            }["useHeroSlider.useEffect"]);
            wasInView.current = inView;
        }
    }["useHeroSlider.useEffect"], [
        inView
    ]);
    // Beim Wiederanlaufen startet der Zyklus neu, damit Timer und Fortschrittsbalken
    // wieder synchron von null laufen.
    const setInteractionPaused = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHeroSlider.useCallback[setInteractionPaused]": (paused)=>{
            setInteractionPausedState({
                "useHeroSlider.useCallback[setInteractionPaused]": (current)=>{
                    if (current === paused) return current;
                    if (!paused) setPosition({
                        "useHeroSlider.useCallback[setInteractionPaused]": (pos)=>({
                                ...pos,
                                cycle: pos.cycle + 1
                            })
                    }["useHeroSlider.useCallback[setInteractionPaused]"]);
                    return paused;
                }
            }["useHeroSlider.useCallback[setInteractionPaused]"]);
        }
    }["useHeroSlider.useCallback[setInteractionPaused]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHeroSlider.useEffect": ()=>{
            if (isPaused) return;
            const timer = setTimeout(next, autoplayDelay);
            return ({
                "useHeroSlider.useEffect": ()=>clearTimeout(timer)
            })["useHeroSlider.useEffect"];
        }
    }["useHeroSlider.useEffect"], [
        isPaused,
        autoplayDelay,
        next,
        position.active,
        position.cycle
    ]);
    return {
        activeIndex: count > 0 ? wrap(position.active, count) : 0,
        previousIndex: position.previous,
        direction: position.direction,
        isTransitioning: position.previous !== null,
        isPaused,
        cycle: position.cycle,
        goTo,
        next,
        prev,
        setInteractionPaused
    };
};
_s(useHeroSlider, "ayDjqhGyxeVWoiLVxtJkmpIcjR8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HeroSlider/useInView.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInView",
    ()=>useInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useInView = (ref, threshold = 0.25)=>{
    _s();
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el || typeof IntersectionObserver === 'undefined') return;
            const observer = new IntersectionObserver({
                "useInView.useEffect": (entries)=>{
                    const entry = entries[entries.length - 1];
                    if (!entry) return;
                    // ohne Anteil (ältere Engines, Test-Ersatz) zählt allein isIntersecting
                    const ratio = typeof entry.intersectionRatio === 'number' ? entry.intersectionRatio : entry.isIntersecting ? 1 : 0;
                    setInView(entry.isIntersecting && ratio >= threshold);
                }
            }["useInView.useEffect"], {
                threshold: [
                    0,
                    threshold,
                    1
                ]
            });
            observer.observe(el);
            return ({
                "useInView.useEffect": ()=>observer.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        ref,
        threshold
    ]);
    return inView;
};
_s(useInView, "kKR2um609Ba4KhyTU1mw6AEF/lc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HeroSlider/useRequestedSlides.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRequestedSlides",
    ()=>useRequestedSlides
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 * Slides, die jetzt Medien brauchen: der aktive und der nächste
 * (Autoplay-Richtung), nach dem ersten Paint auch der vorherige („Zurück").
 */ const neededSlides = (active, count, withPrevious)=>{
    if (count <= 0) return [];
    if (count === 1) return [
        active
    ];
    const needed = [
        active,
        (active + 1) % count
    ];
    if (withPrevious) needed.push((active - 1 + count) % count);
    return needed;
};
/** Nach dem ersten Paint im Leerlauf ausführen (Safari ohne requestIdleCallback: Timeout) */ const IDLE_FALLBACK_MS = 200;
const whenIdle = (run)=>{
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.requestIdleCallback === 'function') {
        const id = window.requestIdleCallback(run);
        return ()=>window.cancelIdleCallback(id);
    }
    const id = setTimeout(run, IDLE_FALLBACK_MS);
    return ()=>clearTimeout(id);
};
const useRequestedSlides = (activeIndex, count)=>{
    _s();
    const [settled, setSettled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [requested, setRequested] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useRequestedSlides.useState": ()=>new Set(neededSlides(activeIndex, count, false))
    }["useRequestedSlides.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRequestedSlides.useEffect": ()=>whenIdle({
                "useRequestedSlides.useEffect": ()=>setSettled(true)
            }["useRequestedSlides.useEffect"])
    }["useRequestedSlides.useEffect"], []);
    const missing = neededSlides(activeIndex, count, settled).filter((index)=>!requested.has(index));
    if (missing.length === 0) return requested;
    // Zustand im Render nachziehen (React-Muster „Zustand aus Props ableiten"):
    // die neue Quelle steht im selben Commit, bevor useHoneycomb die Textur anfordert
    const next = new Set([
        ...requested,
        ...missing
    ]);
    setRequested(next);
    return next;
};
_s(useRequestedSlides, "TrxzjJPn5Z2mClqdqHqH7cefG+A=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HeroSlider/useSliderInteractions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSliderInteractions",
    ()=>useSliderInteractions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const SWIPE_THRESHOLD_PX = 48;
/**
 * #2027: nach einer Berührung meldet der Browser einen nachgeahmten
 * mouseenter, aber kein mouseleave, bis woanders getippt wird — ohne diese
 * Sperre blieb Autoplay nach einem Tipp dauerhaft stehen.
 */ const TOUCH_MOUSE_GUARD_MS = 800;
const useSliderInteractions = (slider)=>{
    _s();
    const pointerStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTouch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(-Infinity);
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSliderInteractions.useCallback[onKeyDown]": (event)=>{
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                slider.next();
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                slider.prev();
            }
        }
    }["useSliderInteractions.useCallback[onKeyDown]"], [
        slider
    ]);
    const onPointerDown = (event)=>{
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        pointerStart.current = {
            x: event.clientX,
            y: event.clientY
        };
    };
    const onPointerUp = (event)=>{
        const start = pointerStart.current;
        if (start === null) return;
        pointerStart.current = null;
        const dx = event.clientX - start.x;
        const dy = event.clientY - start.y;
        if (Math.abs(dx) < SWIPE_THRESHOLD_PX || Math.abs(dx) <= Math.abs(dy)) return;
        if (dx < 0) slider.next();
        else slider.prev();
    };
    const onPointerCancel = ()=>{
        pointerStart.current = null;
    };
    const isTouch = (event)=>event.pointerType === 'touch' || event.pointerType === 'pen';
    const touchStart = (event)=>{
        if (!isTouch(event)) return;
        lastTouch.current = Date.now();
        slider.setInteractionPaused(true);
    };
    const touchEnd = (event)=>{
        if (!isTouch(event)) return;
        lastTouch.current = Date.now();
        // Fokus (z. B. eine angetippte Pagination-Kachel) hält die Pause selbst
        if (event.currentTarget.contains(document.activeElement)) return;
        slider.setInteractionPaused(false);
    };
    const fromTouch = ()=>Date.now() - lastTouch.current < TOUCH_MOUSE_GUARD_MS;
    const onBlur = (event)=>{
        if (event.currentTarget.contains(event.relatedTarget)) return;
        slider.setInteractionPaused(false);
    };
    return {
        root: {
            onMouseEnter: ()=>{
                if (!fromTouch()) slider.setInteractionPaused(true);
            },
            onMouseLeave: ()=>{
                if (!fromTouch()) slider.setInteractionPaused(false);
            },
            onFocus: ()=>slider.setInteractionPaused(true),
            onBlur,
            onKeyDown,
            onPointerDownCapture: touchStart,
            onPointerUpCapture: touchEnd,
            onPointerCancelCapture: touchEnd
        },
        stage: {
            onPointerDown,
            onPointerUp,
            onPointerCancel
        }
    };
};
_s(useSliderInteractions, "yKMhG2gdz2RgvtgP7wD/Oav1T3E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useHexPointer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHexPointer",
    ()=>useHexPointer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useHexPointer = ({ onMove, onLeave })=>{
    _s();
    const rootRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const onPointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHexPointer.useCallback[onPointerMove]": (event)=>{
            if (event.pointerType === 'touch') return;
            if (!rootRect.current) rootRect.current = event.currentTarget.getBoundingClientRect();
            const rect = rootRect.current;
            onMove(event.clientX - rect.left, event.clientY - rect.top);
        }
    }["useHexPointer.useCallback[onPointerMove]"], [
        onMove
    ]);
    const onPointerLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHexPointer.useCallback[onPointerLeave]": ()=>{
            rootRect.current = null;
            onLeave();
        }
    }["useHexPointer.useCallback[onPointerLeave]"], [
        onLeave
    ]);
    return {
        onPointerMove,
        onPointerLeave
    };
};
_s(useHexPointer, "H15tssBWmSLoV4DoPXJKGMzLOeo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/images/optimizedImageUrl.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1473: URL des Next-Bildoptimierers für ein lokales Bild — WebP/AVIF je
 * nach Accept-Header, auf `width` skaliert (nie vergrößert). Für Stellen, die
 * kein `next/image` nutzen können: WebGL-Texturen des Hero-Sliders, die
 * CSS-Kacheln von HexTileReveal. Der Pfad in den CMS-Inhalten bleibt gleich.
 */ /** Breite der Hero-Slides (Bühne bis Full-HD); muss in `images.deviceSizes` stehen */ __turbopack_context__.s([
    "HERO_IMAGE_SIZES",
    ()=>HERO_IMAGE_SIZES,
    "HERO_IMAGE_WIDTH",
    ()=>HERO_IMAGE_WIDTH,
    "HERO_IMAGE_WIDTHS",
    ()=>HERO_IMAGE_WIDTHS,
    "OPTIMIZABLE_PREFIXES",
    ()=>OPTIMIZABLE_PREFIXES,
    "optimizedImageSrcSet",
    ()=>optimizedImageSrcSet,
    "optimizedImageUrl",
    ()=>optimizedImageUrl
]);
const HERO_IMAGE_WIDTH = 1920;
const HERO_IMAGE_WIDTHS = [
    640,
    1080,
    HERO_IMAGE_WIDTH
];
const HERO_IMAGE_SIZES = '100vw';
/** Standardqualität des Optimierers; `images.qualities` erlaubt nur diese */ const QUALITY = 75;
/**
 * Endpunkt wie beim Standard-Loader von next/image: mit `trailingSlash: true`
 * `/_next/image/` — ohne Schrägstrich antwortet Next erst mit 308.
 */ const OPTIMIZER_PATH = '/_next/image/';
const OPTIMIZABLE_PREFIXES = [
    '/IH/',
    '/team/',
    '/images/',
    '/api/cms/media/'
];
function optimizedImageUrl(src, width) {
    if (!OPTIMIZABLE_PREFIXES.some((prefix)=>src.startsWith(prefix))) return src;
    if (/\.svg(?:$|[?#])/i.test(src)) return src;
    return `${OPTIMIZER_PATH}?url=${encodeURIComponent(src)}&w=${width}&q=${QUALITY}`;
}
function optimizedImageSrcSet(src, widths = HERO_IMAGE_WIDTHS) {
    if (optimizedImageUrl(src, widths[0] ?? HERO_IMAGE_WIDTH) === src) return undefined;
    return widths.map((width)=>`${optimizedImageUrl(src, width)} ${width}w`).join(', ');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_19wrpfy2ss1g1._.js.map