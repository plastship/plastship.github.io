(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
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
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/HeroBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroBlock",
    ()=>HeroBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// #1951: direkt die WebGL-Variante, nicht der Index (der exportiert auch die
// DOM-Variante `HeroSliderDom`, die nur als Rückfall lazy nachlädt).
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSliderWebGl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSliderWebGl.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsCta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsCta.ts [app-client] (ecmascript)");
;
;
;
;
const HeroBlock = ({ block, locale, dataTestId, dataAttributes, edges, pageHeading })=>{
    const { slides, autoplay, autoplayDelay } = block.props;
    const heroSlides = slides.map((slide)=>({
            image: slide.image,
            video: slide.video,
            alt: slide.alt ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(slide.alt, locale) : undefined,
            headline: slide.headline ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(slide.headline, locale) : undefined,
            text: slide.text ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(slide.text, locale) : undefined,
            cta: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$blocks$2f$cmsCta$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsCta"])(slide.cta, locale),
            // #2027: Bildfokus je Folie; ohne Angabe bleibt die Mitte
            focalPoint: slide.focalPoint,
            // #2175: Ton der Folie für die Kopfzeile; ohne Angabe Theme-Default
            tone: slide.tone
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSliderWebGl$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroSlider"], {
        slides: heroSlides,
        autoplay: autoplay ?? heroSlides.length > 1,
        autoplayDelay: autoplayDelay,
        dataTestId: dataTestId,
        dataAttributes: dataAttributes,
        // #1563: oben auf der Seite trägt der erste Slide die Seitenüberschrift
        pageHeading: pageHeading,
        // Ohne Rand ausdrücklich leer — sonst zöge der Slider seine Vorgabe (unten, Blau)
        edges: edges ?? {}
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/HeroBlock.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeroBlock;
var _c;
__turbopack_context__.k.register(_c, "HeroBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/cmsCta.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cmsCta",
    ()=>cmsCta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
;
;
function cmsCta(cta, locale) {
    const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsHref"])(cta?.href);
    return cta && href ? {
        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(cta.label, locale),
        href
    } : undefined;
}
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
"[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSliderWebGl.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSlider",
    ()=>HeroSlider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$HoneycombSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx [app-client] (ecmascript)");
'use client';
;
;
const HeroSlider = ({ dataTestId = 'hero-slider', ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$HoneycombSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoneycombSlider"], {
        dataTestId: dataTestId,
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSliderWebGl.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
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
"[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasStage",
    ()=>CanvasStage,
    "SlideMarker",
    ()=>SlideMarker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const CanvasStage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HoneycombSlider.styles__CanvasStage",
    componentId: "sc-81fb4a70-0"
})`
  position: absolute;
  inset: 0;
  z-index: 1;
  touch-action: pan-y;

  & > canvas {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;
const SlideMarker = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HoneycombSlider.styles__SlideMarker",
    componentId: "sc-81fb4a70-1"
})`
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoneycombSlider",
    ()=>HoneycombSlider,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/HeroControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlideContent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlideContent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/heroTimeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useHeroSlider$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/useHeroSlider.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useRequestedSlides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/useRequestedSlides.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useSliderInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/useSliderInteractions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStageSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useHexStageSize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/heroEdges.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexPointer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useHexPointer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$optimizedImageUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/images/optimizedImageUrl.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$HoneycombSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$useHoneycomb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HoneycombSlider/useHoneycomb.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/useInView.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/heroViewport.ts [app-client] (ecmascript)");
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
/**
 * DOM-Rückfall (#1951): nur ohne WebGL2 oder nach Kontextverlust gebraucht,
 * deshalb nicht im Startseiten-Chunk, sondern per `import()` nachgeladen.
 * Bis der Chunk da ist, bleibt die WebGL-Bühne stehen (Bilder, Inhalte,
 * Steuerung) — kein leerer Moment, kein Layoutsprung. Scheitert das Laden,
 * bleibt die Bühne und der Fehler geht an Sentry.
 */ const loadHeroSliderDom = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/HeroSlider/HeroSlider.tsx [app-client] (ecmascript, async loader)").then((m)=>m.HeroSlider);
const HoneycombSlider = (props)=>{
    _s();
    const [Fallback, setFallback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const onUnsupported = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HoneycombSlider.useCallback[onUnsupported]": ()=>{
            loadHeroSliderDom().then({
                "HoneycombSlider.useCallback[onUnsupported]": (slider)=>setFallback({
                        "HoneycombSlider.useCallback[onUnsupported]": ()=>slider
                    }["HoneycombSlider.useCallback[onUnsupported]"])
            }["HoneycombSlider.useCallback[onUnsupported]"], {
                "HoneycombSlider.useCallback[onUnsupported]": (error)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"])(error, {
                        tags: {
                            component: 'HoneycombSlider'
                        }
                    })
            }["HoneycombSlider.useCallback[onUnsupported]"]);
        }
    }["HoneycombSlider.useCallback[onUnsupported]"], []);
    if (Fallback) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Fallback, {
        ...props,
        dataTestId: props.dataTestId ?? 'honeycomb-slider'
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
        lineNumber: 90,
        columnNumber: 24
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HoneycombStage, {
        ...props,
        onUnsupported: onUnsupported
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
        lineNumber: 91,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HoneycombSlider, "aaSYU1bvNlwX0eNfsI3PWLWk0cg=");
_c = HoneycombSlider;
const HoneycombStage = ({ slides, autoplay = true, autoplayDelay = 7000, transitionDuration = 2400, tileColumns, initialIndex = 0, onCtaClick, dataTestId = 'honeycomb-slider', dataAttributes, className, edges, pageHeading = false, onUnsupported })=>{
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    const count = slides.length;
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Außerhalb des Sichtfelds kein Slidewechsel (#1496): jeder Wechsel rendert
    // React und Wabe neu und ruckelt sonst in Inhalte weiter unten (Imagefilm).
    // #2027: schon, wenn weniger als ein Viertel im Bild ist — kein Sprung beim
    // Zurückscrollen, danach beginnt der Zyklus neu. Reduzierte Bewegung: kein Autoplay.
    // Der Hero steht oben: sichtbar, bis der Observer anderes meldet
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
        "HoneycombStage.useMemo[timeline]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroTimeline"])(transitionDuration)
    }["HoneycombStage.useMemo[timeline]"], [
        transitionDuration
    ]);
    const firstTimeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HoneycombStage.useMemo[firstTimeline]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialTimeline"])(transitionDuration)
    }["HoneycombStage.useMemo[firstTimeline]"], [
        transitionDuration
    ]);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mediaRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Rahmen = Bühne (inklusive Randzone); Kachelgröße ~36 px wie beim HeroSlider
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexStageSize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexStageSize"])(rootRef, 40);
    const columns = tileColumns ?? stage.columns;
    // Wabenrand: der Shader schneidet die inneren Seiten aus, die Löcher zeigen den Root in der Randfarbe
    // #2027: am Telefon flacherer Wabenrand (heroViewport)
    const stageEdges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HoneycombStage.useMemo[stageEdges]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroViewportEdges"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroEdges"])(edges), stage.width)
    }["HoneycombStage.useMemo[stageEdges]"], [
        edges,
        stage.width
    ]);
    // vor der ersten Messung (Server-HTML) die Vorgabe — sonst wächst die Bühne nach der Hydration (#1541)
    const edgePadding = stage.width > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroEdgePadding"])(stageEdges, stage.width, columns) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroEdgePaddingFallback"])(stageEdges);
    // #1768: Pfeile neben der Pagination unter dem Text, außer am Telefon
    const arrows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroArrows"])(stage.width);
    const activeCta = slides[slider.activeIndex]?.cta;
    // #1768: blauer Rand der Wabe um den Waben-Button unten rechts
    const { accentKeys, onCellsChange } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHeroCtaAccent"])(Boolean(activeCta));
    const interactions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$useSliderInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSliderInteractions"])(slider);
    const honeycomb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$useHoneycomb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHoneycomb"])({
        canvasRef,
        width: stage.width,
        height: stage.height,
        columns,
        slides,
        slider,
        transitionDuration,
        reducedMotion,
        accentKeys,
        edges: stageEdges,
        mediaRefs,
        onUnsupported
    });
    // Hover-Wabe folgt der Maus über dem ganzen Rahmen (geteilter Hook: Rechteck-Cache, kein Touch)
    const pointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexPointer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexPointer"])({
        onMove: {
            "HoneycombStage.useHexPointer[pointer]": (x, y)=>honeycomb.movePointer(x, y)
        }["HoneycombStage.useHexPointer[pointer]"],
        onLeave: {
            "HoneycombStage.useHexPointer[pointer]": ()=>honeycomb.leavePointer()
        }["HoneycombStage.useHexPointer[pointer]"]
    });
    const setMedia = (index)=>(element)=>{
            if (element) mediaRefs.current.set(index, element);
            else mediaRefs.current.delete(index);
        };
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
        $edgeColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroEdgeColor"])(stageEdges),
        ...dataAttributes,
        "data-testid": dataTestId,
        "data-renderer": "webgl",
        "data-ready": honeycomb.ready ? 'true' : 'false',
        "data-columns": columns,
        "data-active-index": slider.activeIndex,
        // #2175: Ton der aktiven Folie für den durchsichtigen Header (useHeaderTone); ohne Angabe fehlt er
        "data-header-tone": slides[slider.activeIndex]?.tone,
        "data-transitioning": slider.isTransitioning ? 'true' : 'false',
        "data-edge-padding": edgePadding,
        "data-edges": (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["describeEdges"])(stageEdges),
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$HoneycombSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasStage"], {
                ...interactions.stage,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                        ref: canvasRef,
                        "data-testid": `${dataTestId}-canvas`,
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    slides.map((slide, index)=>{
                        const state = slideState(index);
                        const alt = slide.alt ?? slide.headline ?? '';
                        const load = requested.has(index);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$HoneycombSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideMarker"], {
                            id: `${dataTestId}-slide-${index}`,
                            "data-testid": `${dataTestId}-slide-${index}`,
                            "data-state": state,
                            role: "group",
                            "aria-roledescription": tr('heroSlider.roleSlide', {
                                defaultValue: 'slide'
                            }),
                            "aria-label": slideLabel(index),
                            "aria-hidden": state !== 'active',
                            children: slide.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideVideo"], {
                                ref: setMedia(index),
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
                                    fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
                                    lineNumber: 263,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
                                lineNumber: 252,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : slide.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroSlider$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideImage"], {
                                ref: setMedia(index),
                                // #1473: skaliert und als WebP über den Bildoptimierer; der CMS-Pfad bleibt
                                src: load ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$optimizedImageUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedImageUrl"])(slide.image, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$optimizedImageUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_IMAGE_WIDTH"]) : undefined,
                                // #1950: ohne srcset/sizes lud der Browser w=1920 auch auf dem Handy
                                srcSet: load ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$images$2f$optimizedImageUrl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["optimizedImageSrcSet"])(slide.image) : undefined,
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
                                fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
                                lineNumber: 271,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)) : null
                        }, index, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
                            lineNumber: 241,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
                lineNumber: 234,
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
                            backdrop: "none",
                            onRectsChange: honeycomb.reportRects,
                            pageHeading: pageHeading && index === 0,
                            cornerCta: Boolean(slide.cta),
                            reservePagination: count > 1 ? count : 0,
                            reserveArrows: arrows
                        }, index, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
                            lineNumber: 302,
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
                        fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
                        lineNumber: 321,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            activeCta && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$HeroControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroCornerCta"], {
                label: activeCta.label,
                activeIndex: slider.activeIndex,
                onClick: ()=>openCta(slider.activeIndex),
                onCellsChange: onCellsChange,
                dataTestId: dataTestId
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
                lineNumber: 336,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/HoneycombSlider/HoneycombSlider.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(HoneycombStage, "EL0MdEgM0pKt6nwICUq348ePqKo=", false, function() {
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
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$useHoneycomb$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHoneycomb"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useHexPointer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHexPointer"]
    ];
});
_c1 = HoneycombStage;
const __TURBOPACK__default__export__ = HoneycombSlider;
var _c, _c1;
__turbopack_context__.k.register(_c, "HoneycombSlider");
__turbopack_context__.k.register(_c1, "HoneycombStage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HoneycombSlider/easing.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * Seit #1454 leben die Zeitfunktionen in lib/motion (geteilt mit den
 * 3D-Szenen). Dieser Pfad bleibt für den Wabenmotor und seinen Test.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HoneycombSlider/honeycombEngine.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FADE_MS",
    ()=>FADE_MS,
    "HOVER_IN_MS",
    ()=>HOVER_IN_MS,
    "HOVER_MIN_LIT",
    ()=>HOVER_MIN_LIT,
    "HOVER_OUT_MS",
    ()=>HOVER_OUT_MS,
    "HOVER_RADIUS_PX",
    ()=>HOVER_RADIUS_PX,
    "HoneycombEngine",
    ()=>HoneycombEngine,
    "REDUCED_POP_MS",
    ()=>REDUCED_POP_MS,
    "buildCellGrid",
    ()=>buildCellGrid,
    "cellAt",
    ()=>cellAt,
    "emptyGrid",
    ()=>emptyGrid,
    "texelIndex",
    ()=>texelIndex,
    "withoutStagger",
    ()=>withoutStagger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$hexTiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/hexTiles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/heroEdges.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/backdropCells.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HoneycombSlider/easing.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
;
;
;
;
;
const HOVER_RADIUS_PX = 70;
const HOVER_IN_MS = 420;
const HOVER_OUT_MS = 650;
const HOVER_MIN_LIT = 0.25;
const FADE_MS = 400;
const REDUCED_POP_MS = 200;
const REVEAL_OPACITY_STOP = 0.6;
const RECEDE_SCALE = 0.06;
const SETTLE_SCALE = 1.08;
const SETTLE_RATIO = 1.4;
const emptyGrid = ()=>({
        width: 0,
        height: 0,
        columns: 0,
        size: 0,
        rowStep: 0,
        originX: 0,
        originY: 0,
        texWidth: 1,
        texHeight: 1,
        cells: [],
        index: new Map()
    });
const texelIndex = (row, col, texWidth)=>(row + 1) * texWidth + (col + 1);
const buildCellGrid = (width, height, columns)=>{
    if (width <= 0 || height <= 0 || columns < 1) return emptyGrid();
    const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(width, height, columns);
    const { size, rowStep, originX, originY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridOrigin"])(width, height, columns);
    const rows = Math.ceil(height / rowStep) + 1;
    const texWidth = columns + 3;
    const texHeight = rows + 2;
    const index = new Map();
    for (const cell of cells)index.set(cell.key, texelIndex(cell.row, cell.col, texWidth));
    return {
        width,
        height,
        columns,
        size,
        rowStep,
        originX,
        originY,
        texWidth,
        texHeight,
        cells,
        index
    };
};
const byte = (v)=>Math.round((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(v) * 255);
class HoneycombEngine {
    grid = emptyGrid();
    texA = new Uint8Array(4);
    texB = new Uint8Array(4);
    texS = new Uint8Array(4);
    transition = null;
    activeBackdrop = null;
    leavingBackdrop = null;
    hover = new Map();
    accentKeys = [];
    edges = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HERO_DEFAULT_EDGES"];
    /** Atmen der teiltransparenten Randkacheln; aus bei reduzierter Bewegung */ shimmer = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIMMER_AMPLITUDE"];
    dirtyA = true;
    dirtyB = true;
    dirtyS = true;
    pop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingTable"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]);
    reveal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingTable"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_REVEAL"]);
    easeIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingTable"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN"]);
    standard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easingTable"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_STANDARD"]);
    /** Neue Bühnenmaße: Raster, Texturen und Randschnitt neu; Overlays setzt der Aufrufer neu (er misst neu). */ resize(width, height, columns) {
        this.grid = buildCellGrid(width, height, columns);
        const n = this.grid.texWidth * this.grid.texHeight * 4;
        this.texA = new Uint8Array(n);
        this.texB = new Uint8Array(n);
        this.texS = new Uint8Array(n);
        this.fillReveal(this.transition?.reveal ? 0 : 255);
        if (this.transition?.reveal) this.transition.reveal = this.buildReveal(this.transition.spec);
        this.applyEdge();
        this.applyAccent();
        this.activeBackdrop = null;
        this.leavingBackdrop = null;
        this.hover.clear();
        this.dirtyA = true;
        this.dirtyB = true;
        this.dirtyS = true;
    }
    fillReveal(value) {
        for(let i = 0; i < this.texA.length; i += 4){
            this.texA[i] = value;
            this.texA[i + 1] = value;
        }
    }
    /** Randschnitt (R) aus dem geteilten Wabenrand: innere Seiten, Deckung = wie weit die Zelle ausgeschnitten ist */ applyEdge() {
        for(let i = 0; i < this.texS.length; i += 4)this.texS[i] = 0;
        const { width, height, columns, index } = this.grid;
        if (width <= 0) return;
        for (const cell of (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgeCells"])(width, height, columns, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerEdges"])(this.edges)).cells){
            const i = index.get(cell.key);
            if (i !== undefined) this.texS[i * 4] = byte(cell.alpha);
        }
    }
    /** Randseiten ändern (nur innere zählen — der Canvas kann nicht über sich hinaus zeichnen). */ setEdges(edges) {
        this.edges = edges;
        this.applyEdge();
        this.dirtyS = true;
    }
    /** Akzentzellen (Hover blau) und ihr fester, ausgefranster Rand (haloCells) */ applyAccent() {
        for(let i = 0; i < this.texS.length; i += 4){
            this.texS[i + 1] = 0;
            this.texS[i + 2] = 0;
        }
        for (const key of this.accentKeys){
            const i = this.grid.index.get(key);
            if (i !== undefined) this.texS[i * 4 + 1] = 255;
        }
        for (const cell of (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["haloCells"])(this.grid.cells, this.accentKeys)){
            const i = this.grid.index.get(cell.key);
            if (i !== undefined) this.texS[i * 4 + 2] = byte(cell.alpha);
        }
    }
    setAccentKeys(keys) {
        this.accentKeys = keys;
        this.applyAccent();
        this.dirtyS = true;
    }
    buildReveal(spec) {
        const { width, height, columns, index, texWidth, texHeight } = this.grid;
        const delays = new Float32Array(texWidth * texHeight).fill(-1);
        if (width <= 0) return {
            delays,
            duration: 1
        };
        const hex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$hexTiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildHexGrid"])({
            width,
            height,
            imageWidth: width,
            imageHeight: height,
            columns,
            direction: spec.direction,
            duration: spec.timeline.image.duration
        });
        for (const tile of hex.tiles){
            const i = index.get(tile.key);
            if (i !== undefined) delays[i] = tile.delay;
        }
        return {
            delays,
            duration: Math.max(1, hex.tileDuration)
        };
    }
    startTransition(spec) {
        const tl = spec.timeline;
        this.transition = {
            spec,
            end: spec.start + tl.total,
            imageStart: spec.start + tl.image.delay,
            imageDuration: Math.max(1, tl.image.duration),
            reveal: spec.mode === 'tiles' ? this.buildReveal(spec) : null
        };
        // Kacheln beginnen unsichtbar (alter Slide scheint durch); Maske und Überblendung brauchen keine Zellwerte
        this.fillReveal(spec.mode === 'tiles' ? 0 : 255);
        this.dirtyA = true;
    }
    endTransition() {
        if (!this.transition && !this.leavingBackdrop) return;
        this.transition = null;
        this.leavingBackdrop = null;
        this.fillReveal(255);
        for(let i = 0; i < this.texB.length; i += 4)this.texB[i] = 0;
        this.dirtyA = true;
        this.dirtyB = true;
    }
    isTransitioning() {
        return this.transition !== null;
    }
    /** Overlay hinter Headline/Text/CTA des aktiven Slides: poppt je Zelle nach `start + delay` in `popDuration` ms auf. */ setActiveBackdrop(cells, start, popDuration) {
        for(let i = 2; i < this.texA.length; i += 4){
            this.texA[i] = 0;
            this.texA[i + 1] = 0;
        }
        const mapped = [];
        let end = start;
        for (const cell of cells){
            const index = this.grid.index.get(cell.key);
            if (index === undefined) continue;
            mapped.push({
                index,
                alpha: cell.alpha,
                delay: cell.delay
            });
            this.texA[index * 4 + 2] = byte(cell.alpha);
            end = Math.max(end, start + cell.delay + popDuration);
        }
        this.activeBackdrop = {
            cells: mapped,
            start,
            pop: Math.max(1, popDuration),
            end,
            done: false
        };
        this.dirtyA = true;
    }
    /** Overlay des alten Slides: blendet ab `start + delay` in `duration` ms aus. */ setLeavingBackdrop(cells, start, delay, duration) {
        for(let i = 0; i < this.texB.length; i += 4)this.texB[i] = 0;
        const mapped = [];
        for (const cell of cells){
            const index = this.grid.index.get(cell.key);
            if (index === undefined) continue;
            mapped.push({
                index,
                alpha: cell.alpha
            });
            this.texB[index * 4] = byte(cell.alpha);
        }
        this.leavingBackdrop = {
            cells: mapped,
            start: start + delay,
            duration: Math.max(1, duration),
            end: start + delay + duration,
            done: false
        };
        this.dirtyB = true;
    }
    clearBackdrops() {
        for(let i = 0; i < this.texA.length; i += 4){
            this.texA[i + 2] = 0;
            this.texA[i + 3] = 0;
            this.texB[i] = 0;
        }
        this.activeBackdrop = null;
        this.leavingBackdrop = null;
        this.dirtyA = true;
        this.dirtyB = true;
    }
    /** Zeiger bei (x, y) in Bühnen-Pixeln: Zellen im Radius leuchten auf, verlassene schließen sich. */ setPointer(x, y, now) {
        const next = new Set();
        for (const cell of this.grid.cells){
            if (Math.abs(cell.cx - x) > HOVER_RADIUS_PX || Math.abs(cell.cy - y) > HOVER_RADIUS_PX) continue;
            const level = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["litLevel"])(cell, x, y, HOVER_RADIUS_PX);
            if (level <= 0) continue;
            const index = this.grid.index.get(cell.key);
            if (index === undefined) continue;
            next.add(index);
            const lit = HOVER_MIN_LIT + level * (1 - HOVER_MIN_LIT);
            const state = this.hover.get(index);
            if (!state || state.phase === 'out') {
                this.hover.set(index, {
                    index,
                    lit,
                    phase: 'in',
                    start: now,
                    fromO: state?.o ?? 0,
                    fromT: state?.t ?? 0,
                    o: state?.o ?? 0,
                    t: state?.t ?? 0
                });
            } else {
                state.lit = lit;
            }
        }
        for (const state of this.hover.values()){
            if (state.phase === 'in' && !next.has(state.index)) this.release(state, now);
        }
    }
    clearPointer(now) {
        for (const state of this.hover.values())if (state.phase === 'in') this.release(state, now);
    }
    release(state, now) {
        state.phase = 'out';
        state.start = now;
        state.fromO = state.o;
        state.fromT = state.t;
    }
    hoverCount() {
        return this.hover.size;
    }
    tick(now) {
        const uniforms = {
            mode: 0,
            recede: 0,
            settle: 1,
            maskT: 0,
            fade: 0,
            time: now / 1000,
            shimmer: this.shimmer,
            shimmerMin: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIMMER_PERIOD_MS"][0] / 1000,
            shimmerMax: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIMMER_PERIOD_MS"][1] / 1000
        };
        let animating = false;
        const tr = this.transition;
        if (tr) {
            if (now >= tr.end) {
                this.endTransition();
            } else {
                animating = true;
                const imageP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((now - tr.imageStart) / tr.imageDuration);
                if (tr.spec.mode === 'tiles' && tr.reveal) {
                    uniforms.mode = 1;
                    uniforms.recede = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableAt"])(this.reveal, imageP);
                    const { delays, duration } = tr.reveal;
                    for(let i = 0; i < delays.length; i += 1){
                        const delay = delays[i];
                        if (delay < 0) continue;
                        const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((now - tr.imageStart - delay) / duration);
                        this.texA[i * 4] = byte((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableAt"])(this.pop, p));
                        this.texA[i * 4 + 1] = byte((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableAt"])(this.pop, Math.min(1, p / REVEAL_OPACITY_STOP)));
                    }
                    this.dirtyA = true;
                } else if (tr.spec.mode === 'mask') {
                    uniforms.mode = 2;
                    uniforms.recede = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableAt"])(this.reveal, imageP);
                    uniforms.maskT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableAt"])(this.reveal, imageP);
                    const settleP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((now - tr.imageStart) / (tr.imageDuration * SETTLE_RATIO));
                    uniforms.settle = SETTLE_SCALE - (SETTLE_SCALE - 1) * (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableAt"])(this.pop, settleP);
                } else {
                    uniforms.mode = 3;
                    uniforms.fade = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableAt"])(this.standard, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((now - tr.spec.start) / FADE_MS));
                }
            }
        }
        const ab = this.activeBackdrop;
        if (ab && ab.cells.length > 0 && !ab.done) {
            for (const cell of ab.cells){
                const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((now - ab.start - cell.delay) / ab.pop);
                this.texA[cell.index * 4 + 3] = byte((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableAt"])(this.pop, p));
            }
            this.dirtyA = true;
            if (now < ab.end) animating = true;
            else ab.done = true;
        }
        const lb = this.leavingBackdrop;
        if (lb && lb.cells.length > 0 && !lb.done) {
            const factor = 1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableAt"])(this.easeIn, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((now - lb.start) / lb.duration));
            for (const cell of lb.cells)this.texB[cell.index * 4] = byte(cell.alpha * factor);
            this.dirtyB = true;
            if (now < lb.end) animating = true;
            else lb.done = true;
        }
        if (this.hover.size > 0) {
            for (const state of this.hover.values()){
                if (state.phase === 'in') {
                    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableAt"])(this.pop, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((now - state.start) / HOVER_IN_MS));
                    state.t = state.fromT + (1 - state.fromT) * e;
                    state.o = state.fromO + (state.lit - state.fromO) * e;
                } else {
                    const p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((now - state.start) / HOVER_OUT_MS);
                    const e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tableAt"])(this.pop, p);
                    state.t = state.fromT * (1 - e);
                    state.o = state.fromO * (1 - e);
                    if (p >= 1) {
                        state.t = 0;
                        state.o = 0;
                        this.hover.delete(state.index);
                    }
                }
                this.texB[state.index * 4 + 1] = byte(state.o);
                this.texB[state.index * 4 + 2] = byte(state.t);
            }
            this.dirtyB = true;
            // Der letzte Frame einer Auslauf-Animation schreibt noch Nullen, braucht aber keinen weiteren
            if (this.hover.size > 0) animating = true;
        }
        const result = {
            uniforms,
            dirtyA: this.dirtyA,
            dirtyB: this.dirtyB,
            dirtyS: this.dirtyS,
            animating,
            transitioning: this.transition !== null
        };
        this.dirtyA = false;
        this.dirtyB = false;
        this.dirtyS = false;
        return result;
    }
}
const withoutStagger = (cells)=>cells.map((cell)=>({
            ...cell,
            delay: 0
        }));
const cellAt = (grid, x, y)=>{
    let best = null;
    let bestD = Infinity;
    for (const cell of grid.cells){
        const d = Math.hypot(cell.cx - x, cell.cy - y);
        if (d < bestD) {
            bestD = d;
            best = cell;
        }
    }
    return best;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HoneycombSlider/honeycombRenderer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createHoneycombRenderer",
    ()=>createHoneycombRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$honeycombShaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HoneycombSlider/honeycombShaders.ts [app-client] (ecmascript)");
;
;
const hexToRgb = (hex)=>{
    const h = hex.replace('#', '');
    return [
        parseInt(h.slice(0, 2), 16) / 255,
        parseInt(h.slice(2, 4), 16) / 255,
        parseInt(h.slice(4, 6), 16) / 255
    ];
};
/** Nur in der Entwicklung: warum die Wabe auf die DOM-Variante zurückfällt */ const warn = (reason)=>{
    if ("TURBOPACK compile-time truthy", 1) console.warn(`[HoneycombSlider] ${reason}`);
};
const compile = (gl, type, source)=>{
    const shader = gl.createShader(type);
    if (!shader) throw new Error('honeycomb: shader allocation failed');
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const log = gl.getShaderInfoLog(shader) ?? '';
        gl.deleteShader(shader);
        throw new Error(`honeycomb: shader compile failed: ${log}`);
    }
    return shader;
};
const UNIFORMS = [
    'uSize',
    'uDpr',
    'uOrigin',
    'uCell',
    'uRowStep',
    'uTexDims',
    'uCellsA',
    'uCellsB',
    'uCellsS',
    'uImgA',
    'uImgB',
    'uCoverA',
    'uCoverB',
    'uHasA',
    'uHasB',
    'uMode',
    'uRecede',
    'uSettle',
    'uMaskT',
    'uFade',
    'uBlue',
    'uFill',
    'uTime',
    'uShimmer',
    'uShimmerMin',
    'uShimmerMax'
];
const createHoneycombRenderer = (canvas, options = {})=>{
    let gl = null;
    try {
        gl = canvas.getContext('webgl2', {
            alpha: true,
            premultipliedAlpha: true,
            antialias: false,
            depth: false,
            stencil: false,
            powerPreference: 'high-performance'
        });
    } catch  {
        gl = null;
    }
    if (!gl) {
        warn('WebGL2 nicht verfügbar');
        return null;
    }
    const ctx = gl;
    let program;
    try {
        const vs = compile(ctx, ctx.VERTEX_SHADER, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$honeycombShaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VERTEX_SHADER"]);
        const fs = compile(ctx, ctx.FRAGMENT_SHADER, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$honeycombShaders$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FRAGMENT_SHADER"]);
        const p = ctx.createProgram();
        if (!p) return null;
        ctx.attachShader(p, vs);
        ctx.attachShader(p, fs);
        ctx.linkProgram(p);
        ctx.deleteShader(vs);
        ctx.deleteShader(fs);
        if (!ctx.getProgramParameter(p, ctx.LINK_STATUS)) {
            warn(`Programm nicht gelinkt: ${ctx.getProgramInfoLog(p) ?? ''}`);
            ctx.deleteProgram(p);
            return null;
        }
        program = p;
    } catch (error) {
        warn(error instanceof Error ? error.message : String(error));
        return null;
    }
    const loc = {};
    for (const name of UNIFORMS)loc[name] = ctx.getUniformLocation(program, name);
    // Vollbild-Dreieck
    const vao = ctx.createVertexArray();
    const vbo = ctx.createBuffer();
    ctx.bindVertexArray(vao);
    ctx.bindBuffer(ctx.ARRAY_BUFFER, vbo);
    ctx.bufferData(ctx.ARRAY_BUFFER, new Float32Array([
        -1,
        -1,
        3,
        -1,
        -1,
        3
    ]), ctx.STATIC_DRAW);
    const aPosition = ctx.getAttribLocation(program, 'aPosition');
    ctx.enableVertexAttribArray(aPosition);
    ctx.vertexAttribPointer(aPosition, 2, ctx.FLOAT, false, 0, 0);
    ctx.bindVertexArray(null);
    const makeCellTexture = ()=>{
        const tex = ctx.createTexture();
        if (!tex) throw new Error('honeycomb: texture allocation failed');
        ctx.bindTexture(ctx.TEXTURE_2D, tex);
        ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.NEAREST);
        ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.NEAREST);
        ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE);
        ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE);
        ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA8, 1, 1, 0, ctx.RGBA, ctx.UNSIGNED_BYTE, new Uint8Array([
            255,
            255,
            0,
            0
        ]));
        return tex;
    };
    const cellTextures = {
        A: makeCellTexture(),
        B: makeCellTexture(),
        S: makeCellTexture()
    };
    let texDims = {
        width: 1,
        height: 1
    };
    const images = {
        A: {
            texture: null,
            cover: {
                offsetX: 0,
                offsetY: 0,
                bgWidth: 1,
                bgHeight: 1
            }
        },
        B: {
            texture: null,
            cover: {
                offsetX: 0,
                offsetY: 0,
                bgWidth: 1,
                bgHeight: 1
            }
        }
    };
    const blank = makeCellTexture();
    let size = {
        width: 1,
        height: 1,
        dpr: 1
    };
    let grid = null;
    let lost = false;
    const [br, bg, bb] = hexToRgb(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY);
    const onLost = (event)=>{
        event.preventDefault();
        lost = true;
        options.onContextLost?.();
    };
    canvas.addEventListener('webglcontextlost', onLost);
    ctx.pixelStorei(ctx.UNPACK_ALIGNMENT, 1);
    ctx.disable(ctx.BLEND);
    ctx.disable(ctx.DEPTH_TEST);
    ctx.clearColor(0, 0, 0, 0);
    const bindImage = (slot, unit)=>{
        ctx.activeTexture(ctx.TEXTURE0 + unit);
        ctx.bindTexture(ctx.TEXTURE_2D, images[slot].texture ?? blank);
    };
    return {
        resize (cssWidth, cssHeight, dpr) {
            const ratio = Math.max(1, Math.min(dpr, 2));
            size = {
                width: Math.max(1, cssWidth),
                height: Math.max(1, cssHeight),
                dpr: ratio
            };
            const w = Math.round(size.width * ratio);
            const h = Math.round(size.height * ratio);
            if (canvas.width !== w) canvas.width = w;
            if (canvas.height !== h) canvas.height = h;
            ctx.viewport(0, 0, w, h);
        },
        setGrid (next) {
            grid = next;
            if (next.texWidth !== texDims.width || next.texHeight !== texDims.height) {
                texDims = {
                    width: next.texWidth,
                    height: next.texHeight
                };
                for (const tex of Object.values(cellTextures)){
                    ctx.bindTexture(ctx.TEXTURE_2D, tex);
                    ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA8, texDims.width, texDims.height, 0, ctx.RGBA, ctx.UNSIGNED_BYTE, null);
                }
            }
        },
        uploadCells (which, data) {
            if (lost) return;
            if (data.length !== texDims.width * texDims.height * 4) return;
            ctx.bindTexture(ctx.TEXTURE_2D, cellTextures[which]);
            ctx.texSubImage2D(ctx.TEXTURE_2D, 0, 0, 0, texDims.width, texDims.height, ctx.RGBA, ctx.UNSIGNED_BYTE, data);
        },
        createImageTexture (image) {
            const tex = ctx.createTexture();
            if (!tex) throw new Error('honeycomb: texture allocation failed');
            ctx.bindTexture(ctx.TEXTURE_2D, tex);
            ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, false);
            ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, ctx.RGBA, ctx.UNSIGNED_BYTE, image);
            ctx.generateMipmap(ctx.TEXTURE_2D);
            ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.LINEAR_MIPMAP_LINEAR);
            ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.LINEAR);
            ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE);
            ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE);
            return tex;
        },
        createVideoTexture () {
            const tex = ctx.createTexture();
            if (!tex) throw new Error('honeycomb: texture allocation failed');
            ctx.bindTexture(ctx.TEXTURE_2D, tex);
            ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MIN_FILTER, ctx.LINEAR);
            ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_MAG_FILTER, ctx.LINEAR);
            ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_S, ctx.CLAMP_TO_EDGE);
            ctx.texParameteri(ctx.TEXTURE_2D, ctx.TEXTURE_WRAP_T, ctx.CLAMP_TO_EDGE);
            ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, 1, 1, 0, ctx.RGBA, ctx.UNSIGNED_BYTE, new Uint8Array([
                0,
                65,
                110,
                255
            ]));
            return tex;
        },
        updateVideoTexture (texture, video) {
            if (lost || video.readyState < 2) return;
            ctx.bindTexture(ctx.TEXTURE_2D, texture);
            ctx.pixelStorei(ctx.UNPACK_FLIP_Y_WEBGL, false);
            ctx.texImage2D(ctx.TEXTURE_2D, 0, ctx.RGBA, ctx.RGBA, ctx.UNSIGNED_BYTE, video);
        },
        deleteTexture (texture) {
            if (images.A.texture === texture) images.A.texture = null;
            if (images.B.texture === texture) images.B.texture = null;
            ctx.deleteTexture(texture);
        },
        setImage (slot, texture, cover) {
            images[slot].texture = texture;
            if (cover) images[slot].cover = cover;
        },
        render (u) {
            if (lost || !grid) return;
            ctx.useProgram(program);
            ctx.bindVertexArray(vao);
            ctx.activeTexture(ctx.TEXTURE0);
            ctx.bindTexture(ctx.TEXTURE_2D, cellTextures.A);
            ctx.activeTexture(ctx.TEXTURE1);
            ctx.bindTexture(ctx.TEXTURE_2D, cellTextures.B);
            ctx.activeTexture(ctx.TEXTURE2);
            ctx.bindTexture(ctx.TEXTURE_2D, cellTextures.S);
            bindImage('A', 3);
            bindImage('B', 4);
            ctx.uniform1i(loc.uCellsA, 0);
            ctx.uniform1i(loc.uCellsB, 1);
            ctx.uniform1i(loc.uCellsS, 2);
            ctx.uniform1i(loc.uImgA, 3);
            ctx.uniform1i(loc.uImgB, 4);
            ctx.uniform2f(loc.uSize, size.width, size.height);
            ctx.uniform1f(loc.uDpr, size.dpr);
            ctx.uniform2f(loc.uOrigin, grid.originX, grid.originY);
            ctx.uniform1f(loc.uCell, Math.max(grid.size, 1e-3));
            ctx.uniform1f(loc.uRowStep, Math.max(grid.rowStep, 1e-3));
            ctx.uniform2i(loc.uTexDims, texDims.width, texDims.height);
            const a = images.A.cover;
            const b = images.B.cover;
            ctx.uniform4f(loc.uCoverA, a.offsetX, a.offsetY, a.bgWidth, a.bgHeight);
            ctx.uniform4f(loc.uCoverB, b.offsetX, b.offsetY, b.bgWidth, b.bgHeight);
            ctx.uniform1f(loc.uHasA, images.A.texture ? 1 : 0);
            ctx.uniform1f(loc.uHasB, images.B.texture ? 1 : 0);
            ctx.uniform1i(loc.uMode, u.mode);
            ctx.uniform1f(loc.uRecede, u.recede);
            ctx.uniform1f(loc.uSettle, u.settle);
            ctx.uniform1f(loc.uMaskT, u.maskT);
            ctx.uniform1f(loc.uFade, u.fade);
            ctx.uniform3f(loc.uBlue, br, bg, bb);
            ctx.uniform3f(loc.uFill, br, bg, bb);
            ctx.uniform1f(loc.uTime, u.time);
            ctx.uniform1f(loc.uShimmer, u.shimmer);
            ctx.uniform1f(loc.uShimmerMin, u.shimmerMin);
            ctx.uniform1f(loc.uShimmerMax, u.shimmerMax);
            ctx.clear(ctx.COLOR_BUFFER_BIT);
            ctx.drawArrays(ctx.TRIANGLES, 0, 3);
            ctx.bindVertexArray(null);
        },
        dispose () {
            canvas.removeEventListener('webglcontextlost', onLost);
            if (lost) return;
            for (const tex of Object.values(cellTextures))ctx.deleteTexture(tex);
            ctx.deleteTexture(blank);
            if (images.A.texture) ctx.deleteTexture(images.A.texture);
            if (images.B.texture && images.B.texture !== images.A.texture) ctx.deleteTexture(images.B.texture);
            ctx.deleteBuffer(vbo);
            ctx.deleteVertexArray(vao);
            ctx.deleteProgram(program);
        // Kein loseContext(): React StrictMode mountet zweimal, und ein absichtlich
        // verlorener Kontext bleibt für dasselbe Canvas verloren — der zweite Mount
        // fiele sonst auf die DOM-Variante zurück. Ressourcen sind oben freigegeben.
        }
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HoneycombSlider/honeycombShaders.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Ein Vollbild-Dreieck, ein Fragment-Shader: jedes Pixel findet seine
 * Wabenzelle (dasselbe Raster wie hexGridOrigin/hexGridCells) und liest
 * dort aus drei kleinen Texturen, was zu zeichnen ist — Kachel des neuen
 * Slides, Rand um Pfeile/Pagination, Hover-Licht, Overlay hinter dem Text,
 * Randschnitt. Bewegung kommt
 * als geeaster Fortschritt 0…1 je Zelle aus dem HoneycombEngine, der Shader
 * wendet nur die Transformation `scale(t) rotate(-14° · (1 − t))` an.
 */ __turbopack_context__.s([
    "FRAGMENT_SHADER",
    ()=>FRAGMENT_SHADER,
    "VERTEX_SHADER",
    ()=>VERTEX_SHADER
]);
const VERTEX_SHADER = `#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`;
const FRAGMENT_SHADER = `#version 300 es
precision highp float;
precision highp int;

uniform vec2 uSize;
uniform float uDpr;
uniform vec2 uOrigin;
uniform float uCell;
uniform float uRowStep;
uniform ivec2 uTexDims;
uniform sampler2D uCellsA;
uniform sampler2D uCellsB;
uniform sampler2D uCellsS;
uniform sampler2D uImgA;
uniform sampler2D uImgB;
uniform vec4 uCoverA;
uniform vec4 uCoverB;
uniform float uHasA;
uniform float uHasB;
uniform int uMode;
uniform float uRecede;
uniform float uSettle;
uniform float uMaskT;
uniform float uFade;
uniform vec3 uBlue;
uniform vec3 uFill;
uniform float uTime;
uniform float uShimmer;
uniform float uShimmerMin; // Periode des Atmens je Zelle in s, aus SHIMMER_PERIOD_MS (#1721)
uniform float uShimmerMax;
out vec4 outColor;

const float TILT = 0.2443461; // 14° im Bogenmaß
const float MASK_GROWTH = 3.2;        // mask-size 320 %
const float MASK_HEX = 100.0 / 140.0; // Sechseck in der gepolsterten viewBox
const float MASK_BLUR = 5.0 / 140.0;  // feGaussianBlur stdDeviation 5
const float BLEED = 1.0;              // 1 px Überstand je Seite wie die DOM-Kacheln (gegen Haarlinien)
const float TAU = 6.2831853;

vec3 sampleCover(sampler2D img, vec4 cover, vec2 p) {
  vec2 uv = (p - cover.xy) / cover.zw;
  return texture(img, clamp(uv, 0.0, 1.0)).rgb;
}

// Sechseck mit Spitze oben in einem Quadrat der halben Kantenlänge h (clip-path der Kacheln)
bool inHex(vec2 d, float h) {
  return abs(d.x) <= h && abs(d.y) <= h - 0.5 * abs(d.x);
}

// Zufall 0…1 je Zelle, stabil über Frames
float cellSeed(float row, float col) {
  return fract(sin(dot(vec2(row, col), vec2(12.9898, 78.233))) * 43758.5453);
}

// Atmen einer teiltransparenten Randkachel: ±uShimmer ihrer Deckung, volle und leere stehen
float shimmer(float v, float seed) {
  if (uShimmer <= 0.0 || v <= 0.005 || v >= 0.995) return v;
  float period = uShimmerMin + (uShimmerMax - uShimmerMin) * fract(seed * 7.13);
  return clamp(v * (1.0 + uShimmer * sin(TAU * (uTime / period + seed))), 0.0, 1.0);
}

// Umkehrung von scale(t) rotate(a) um die Zellmitte, a = -14° · (1 - t)
vec2 untransform(vec2 d, float t) {
  float a = -TILT * (1.0 - t);
  float c = cos(a);
  float s = sin(a);
  vec2 r = vec2(c * d.x + s * d.y, -s * d.x + c * d.y);
  return r / max(t, 1e-4);
}

void main() {
  vec2 p = vec2(gl_FragCoord.x / uDpr, uSize.y - gl_FragCoord.y / uDpr);
  float s = uCell;
  float h = 0.5 * s;

  // Zelle des Pixels: zwei Reihen- und zwei Spaltenkandidaten, exakter Sechsecktest
  float row = 0.0;
  float col = 0.0;
  vec2 ctr = p;
  bool found = false;
  float rf = floor((p.y - uOrigin.y - 0.25 * s) / uRowStep);
  for (int i = 0; i < 2; i++) {
    if (found) break;
    float r = rf + float(i);
    float shift = (mod(abs(r), 2.0) == 1.0) ? h : 0.0;
    float cf = floor((p.x - uOrigin.x + shift - h) / s);
    for (int j = 0; j < 2; j++) {
      float c = cf + float(j);
      vec2 cc = vec2(c * s - shift + h + uOrigin.x, r * uRowStep + 0.25 * s + uOrigin.y);
      if (inHex(p - cc, h)) {
        row = r;
        col = c;
        ctr = cc;
        found = true;
        break;
      }
    }
  }
  ivec2 ti = ivec2(int(col) + 1, int(row) + 1);
  bool inTex = found && ti.x >= 0 && ti.y >= 0 && ti.x < uTexDims.x && ti.y < uTexDims.y;
  vec4 ca = inTex ? texelFetch(uCellsA, ti, 0) : vec4(1.0, 1.0, 0.0, 0.0);
  vec4 cb = inTex ? texelFetch(uCellsB, ti, 0) : vec4(0.0);
  vec4 cs = inTex ? texelFetch(uCellsS, ti, 0) : vec4(0.0);
  vec2 d = p - ctr;
  vec2 centre = 0.5 * uSize;
  float seed = cellSeed(row, col);

  // alter Slide weicht zurück: scale 1 → 1,06, brightness 1 → 0,55
  float recedeScale = 1.0 + 0.06 * uRecede;
  vec3 leaving = uHasB > 0.5
    ? sampleCover(uImgB, uCoverB, centre + (p - centre) / recedeScale) * (1.0 - 0.45 * uRecede)
    : uFill;
  vec3 activePlain = uHasA > 0.5 ? sampleCover(uImgA, uCoverA, p) : uFill;

  vec3 media;
  if (uMode == 1) {
    // Kachel um Kachel: die Kachel zeigt den neuen Slide deckungsgleich, poppt skaliert/gedreht auf
    media = leaving;
    float t = ca.r;
    if (t > 0.002 && uHasA > 0.5) {
      vec2 d0 = untransform(d, t);
      if (inHex(d0, h + BLEED)) media = mix(leaving, sampleCover(uImgA, uCoverA, ctr + d0), ca.g);
    }
  } else if (uMode == 2) {
    // wachsende Sechseck-Maske mit weichem Rand (Videos, Slides ohne Bild)
    vec2 ps = centre + (p - centre) / uSettle;
    vec3 act = uHasA > 0.5 ? sampleCover(uImgA, uCoverA, ps) : uFill;
    float maskWidth = uMaskT * MASK_GROWTH * uSize.x;
    float halfW = 0.5 * maskWidth * MASK_HEX;
    float sigma = max(maskWidth * MASK_BLUR, 0.5);
    vec2 dm = abs(p - centre);
    float sd = max(dm.x - halfW, dm.y - (halfW - 0.5 * dm.x));
    float cov = 1.0 - smoothstep(-1.5 * sigma, 1.5 * sigma, sd);
    media = mix(leaving, act, cov);
  } else if (uMode == 3) {
    media = mix(leaving, activePlain, uFade);
  } else {
    media = activePlain;
  }

  // Fester Rand um Pfeile und Pagination: multipliziert Blau ein, unter dem Hover-Licht;
  // teiltransparente Kacheln hier, hinter dem Text und an der Unterkante atmen (shimmer)
  float halo = shimmer(cs.b, seed);
  if (halo > 0.002) media *= mix(vec3(1.0), uBlue, halo);

  // Hover-Licht: weiße Kachel (Akzentzellen blau), poppt um die Zellmitte auf
  float ho = cb.g;
  float ht = cb.b;
  if (ho > 0.002 && ht > 0.002) {
    vec2 dh = untransform(d, ht);
    if (inHex(dh, h)) media = cs.g > 0.5 ? mix(media, uBlue, ho) : mix(media, vec3(1.0), 0.55 * ho);
  }

  // Overlay hinter Headline, Text und CTA: multipliziert Blau ein — aktiver Slide poppt, alter blendet aus
  float ba = shimmer(ca.b, seed);
  float bp = ca.a;
  if (ba > 0.002 && bp > 0.002) {
    vec2 db = untransform(d, bp);
    if (inHex(db, h + BLEED)) media *= mix(vec3(1.0), uBlue, ba * bp);
  }
  float lo = cb.r;
  if (lo > 0.002) media *= mix(vec3(1.0), uBlue, lo);

  // Unterkante: herausgeschnittene Zellen lassen den Rahmen durchscheinen (premultipliziert)
  float alpha = 1.0 - shimmer(cs.r, seed);
  outColor = vec4(media * alpha, alpha);
}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/HoneycombSlider/useHoneycomb.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHoneycomb",
    ()=>useHoneycomb
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/backdropCells.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$hexTiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexTileReveal/hexTiles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/heroTimeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HeroSlider/heroViewport.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$honeycombEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HoneycombSlider/honeycombEngine.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$honeycombRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/HoneycombSlider/honeycombRenderer.ts [app-client] (ecmascript)");
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
const now = ()=>typeof performance !== 'undefined' ? performance.now() : Date.now();
/** Startzeit weit in der Vergangenheit: Overlay steht sofort, ohne erneut aufzupoppen */ const LONG_AGO_MS = 60_000;
/**
 * Frame-Abstand, solange nur die Randkacheln atmen (~20 fps): die Deckung
 * ändert sich dabei um weniger als eine 8-Bit-Stufe je Frame, volle Bildrate
 * brächte nichts außer Last.
 */ const SHIMMER_FRAME_MS = 50;
const waitFor = (element, events)=>new Promise((resolve)=>{
        const done = ()=>{
            for (const name of events)element.removeEventListener(name, done);
            resolve();
        };
        for (const name of events)element.addEventListener(name, done, {
            once: true
        });
    });
const useHoneycomb = ({ canvasRef, width, height, columns, slides, slider, transitionDuration, reducedMotion, accentKeys, edges, mediaRefs, onUnsupported })=>{
    _s();
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const renderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const engine = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textures = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const pending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const rects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Overlay-Zellen je Slide, gültig solange dieselben Rechtecke gemessen sind —
    // waveCoverage über 1700 Zellen kostet ~3 ms, das soll nicht in jeden Wechsel fallen
    const cellCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const pendingBackdrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shownBackdrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const raf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const idleTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Canvas im Viewport? Nur dann laufen die ruhigen Atem-Frames
    const onScreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const scheduleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "useHoneycomb.useRef[scheduleRef]": ()=>undefined
    }["useHoneycomb.useRef[scheduleRef]"]);
    const unsupported = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onUnsupported);
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        width,
        height,
        active: slider.activeIndex,
        leaving: slider.previousIndex,
        cycle: slider.cycle,
        reduced: reducedMotion,
        count: slides.length,
        slides
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoneycomb.useEffect": ()=>{
            latest.current = {
                width,
                height,
                active: slider.activeIndex,
                leaving: slider.previousIndex,
                cycle: slider.cycle,
                reduced: reducedMotion,
                count: slides.length,
                slides
            };
            unsupported.current = onUnsupported;
        }
    }["useHoneycomb.useEffect"]);
    const frame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHoneycomb.useCallback[frame]": (time)=>{
            raf.current = null;
            const r = renderer.current;
            const e = engine.current;
            if (!r || !e) return;
            const result = e.tick(time);
            if (result.dirtyA) r.uploadCells('A', e.texA);
            if (result.dirtyB) r.uploadCells('B', e.texB);
            if (result.dirtyS) r.uploadCells('S', e.texS);
            const { width: w, height: h, active, leaving } = latest.current;
            let live = false;
            const bind = {
                "useHoneycomb.useCallback[frame].bind": (slot, index)=>{
                    const media = index === null ? undefined : textures.current.get(index);
                    if (!media) {
                        r.setImage(slot, null);
                        return;
                    }
                    if (media.kind === 'video') {
                        r.updateVideoTexture(media.texture, media.element);
                        live = true;
                    }
                    // #2027: Ausschnitt um den Bildfokus der Folie, wie object-position der DOM-Variante
                    const focus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroViewport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroFocalPoint"])(latest.current.slides[index]?.focalPoint);
                    const cover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexTileReveal$2f$hexTiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coverBox"])(Math.max(w, 1), Math.max(h, 1), media.width, media.height, focus);
                    r.setImage(slot, media.texture, cover);
                }
            }["useHoneycomb.useCallback[frame].bind"];
            bind('A', active);
            bind('B', result.transitioning ? leaving : null);
            r.render(result.uniforms);
            // Außerhalb des Sichtfelds keine Frames (#1496): der Übergang ist zeitbasiert,
            // beim Zurückkehren zeichnet der Observer den aktuellen Stand
            if (!onScreen.current) return;
            if (result.animating || live) scheduleRef.current();
            else if (e.shimmer > 0 && onScreen.current && idleTimer.current === null) {
                // Nur die Randkacheln atmen: gedrosselt weiter, bis Übergang oder Video wieder volle Rate brauchen
                idleTimer.current = setTimeout({
                    "useHoneycomb.useCallback[frame]": ()=>{
                        idleTimer.current = null;
                        scheduleRef.current();
                    }
                }["useHoneycomb.useCallback[frame]"], SHIMMER_FRAME_MS);
            }
        }
    }["useHoneycomb.useCallback[frame]"], []);
    const schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHoneycomb.useCallback[schedule]": ()=>{
            if (raf.current !== null || typeof requestAnimationFrame !== 'function') return;
            if (!renderer.current) return;
            raf.current = requestAnimationFrame(frame);
        }
    }["useHoneycomb.useCallback[schedule]"], [
        frame
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoneycomb.useEffect": ()=>{
            scheduleRef.current = schedule;
        }
    }["useHoneycomb.useEffect"], [
        schedule
    ]);
    const evict = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHoneycomb.useCallback[evict]": ()=>{
            const r = renderer.current;
            if (!r) return;
            const { active, leaving, count } = latest.current;
            const n = Math.max(count, 1);
            const keep = new Set([
                active,
                leaving ?? -1,
                (active + 1) % n,
                (active - 1 + n) % n
            ]);
            for (const [index, media] of textures.current){
                if (keep.has(index)) continue;
                r.deleteTexture(media.texture);
                textures.current.delete(index);
            }
        }
    }["useHoneycomb.useCallback[evict]"], []);
    const ensureTexture = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHoneycomb.useCallback[ensureTexture]": (index)=>{
            if (textures.current.has(index) || pending.current.has(index)) return;
            const element = mediaRefs.current?.get(index);
            if (!element || !renderer.current) return;
            const job = ({
                "useHoneycomb.useCallback[ensureTexture].job": async ()=>{
                    if (element instanceof HTMLVideoElement) {
                        if (element.readyState < 2) await waitFor(element, [
                            'loadeddata',
                            'error'
                        ]);
                        if (!renderer.current || element.readyState < 2 || textures.current.has(index)) return;
                        textures.current.set(index, {
                            texture: renderer.current.createVideoTexture(),
                            width: element.videoWidth || 16,
                            height: element.videoHeight || 9,
                            kind: 'video',
                            element
                        });
                    } else {
                        if (!element.complete) await waitFor(element, [
                            'load',
                            'error'
                        ]);
                        if (!element.naturalWidth) return;
                        if (typeof element.decode === 'function') {
                            try {
                                await element.decode();
                            } catch  {
                            // dekodiert dann beim Upload
                            }
                        }
                        if (!renderer.current || textures.current.has(index)) return;
                        textures.current.set(index, {
                            texture: renderer.current.createImageTexture(element),
                            width: element.naturalWidth,
                            height: element.naturalHeight,
                            kind: 'image',
                            element
                        });
                    }
                    evict();
                    scheduleRef.current();
                }
            })["useHoneycomb.useCallback[ensureTexture].job"]().finally({
                "useHoneycomb.useCallback[ensureTexture].job": ()=>{
                    pending.current.delete(index);
                }
            }["useHoneycomb.useCallback[ensureTexture].job"]);
            pending.current.set(index, job);
        }
    }["useHoneycomb.useCallback[ensureTexture]"], [
        evict,
        mediaRefs
    ]);
    /** Zellen eines Slides, Startzeiten ab 0 gestaffelt über `enterDuration`; die Phase verschiebt der Aufrufer */ const cellsFor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHoneycomb.useCallback[cellsFor]": (index, list, enterDuration)=>{
            const e = engine.current;
            if (!e) return [];
            const cached = cellCache.current.get(index);
            if (cached && cached.rects === list) return cached.cells;
            const cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backdropCells"])(e.grid.cells, list, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"], 0, enterDuration);
            cellCache.current.set(index, {
                rects: list,
                cells
            });
            return cells;
        }
    }["useHoneycomb.useCallback[cellsFor]"], []);
    const applyActiveBackdrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHoneycomb.useCallback[applyActiveBackdrop]": (index, start, timeline, cycle)=>{
            const e = engine.current;
            if (!e) return;
            const list = rects.current.get(index);
            if (!list) {
                pendingBackdrop.current = {
                    index,
                    start,
                    timeline,
                    cycle
                };
                return;
            }
            pendingBackdrop.current = null;
            let cells = cellsFor(index, list, timeline.backdropIn.duration).map({
                "useHoneycomb.useCallback[applyActiveBackdrop].cells": (c)=>({
                        ...c,
                        delay: c.delay + timeline.backdropIn.delay
                    })
            }["useHoneycomb.useCallback[applyActiveBackdrop].cells"]);
            let pop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$backdropCells$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["backdropPopDuration"])(timeline.backdropIn.duration);
            if (latest.current.reduced) {
                cells = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$honeycombEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withoutStagger"])(cells);
                pop = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$honeycombEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REDUCED_POP_MS"];
            }
            e.setActiveBackdrop(cells, start, pop);
            shownBackdrop.current.set(index, cycle);
        }
    }["useHoneycomb.useCallback[applyActiveBackdrop]"], [
        cellsFor
    ]);
    const reportRects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHoneycomb.useCallback[reportRects]": (index, list)=>{
            rects.current.set(index, list);
            const { active, cycle } = latest.current;
            if (index !== active) return;
            const pendingSpec = pendingBackdrop.current;
            if (pendingSpec && pendingSpec.index === index) {
                applyActiveBackdrop(index, pendingSpec.start, pendingSpec.timeline, pendingSpec.cycle);
            } else if (shownBackdrop.current.get(index) === cycle) {
                // nur Geometrie neu (Umbruch, Schriftart): steht sofort
                applyActiveBackdrop(index, now() - LONG_AGO_MS, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroTimeline"])(transitionDuration), cycle);
            } else {
                applyActiveBackdrop(index, now(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialTimeline"])(transitionDuration), cycle);
            }
            scheduleRef.current();
        }
    }["useHoneycomb.useCallback[reportRects]"], [
        applyActiveBackdrop,
        transitionDuration
    ]);
    // Renderer und Engine leben so lange wie das Canvas
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoneycomb.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$honeycombRenderer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHoneycombRenderer"])(canvas, {
                onContextLost: {
                    "useHoneycomb.useEffect.r": ()=>unsupported.current()
                }["useHoneycomb.useEffect.r"]
            });
            if (!r) {
                unsupported.current();
                return;
            }
            renderer.current = r;
            engine.current = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HoneycombSlider$2f$honeycombEngine$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoneycombEngine"]();
            const textureMap = textures.current;
            const pendingMap = pending.current;
            setReady(true);
            return ({
                "useHoneycomb.useEffect": ()=>{
                    if (raf.current !== null && typeof cancelAnimationFrame === 'function') cancelAnimationFrame(raf.current);
                    raf.current = null;
                    if (idleTimer.current !== null) clearTimeout(idleTimer.current);
                    idleTimer.current = null;
                    for (const media of textureMap.values())r.deleteTexture(media.texture);
                    textureMap.clear();
                    pendingMap.clear();
                    r.dispose();
                    renderer.current = null;
                    engine.current = null;
                    setReady(false);
                }
            })["useHoneycomb.useEffect"];
        }
    }["useHoneycomb.useEffect"], [
        canvasRef
    ]);
    // Bühnenmaße → Raster, Texturen, Randschnitt; Overlay des aktiven Slides neu aus den Rechtecken
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoneycomb.useEffect": ()=>{
            const e = engine.current;
            const r = renderer.current;
            if (!e || !r || width <= 0 || height <= 0) return;
            e.resize(width, height, columns);
            cellCache.current.clear();
            r.resize(width, height, ("TURBOPACK compile-time truthy", 1) ? window.devicePixelRatio || 1 : "TURBOPACK unreachable");
            r.setGrid(e.grid);
            e.setAccentKeys(accentKeys);
            const { active, cycle } = latest.current;
            if (rects.current.has(active)) {
                const shown = shownBackdrop.current.get(active) === cycle;
                applyActiveBackdrop(active, shown ? now() - LONG_AGO_MS : now(), shown ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroTimeline"])(transitionDuration) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialTimeline"])(transitionDuration), cycle);
            }
            scheduleRef.current();
        // accentKeys hat einen eigenen Effekt; hier nur bei neuen Maßen
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useHoneycomb.useEffect"], [
        width,
        height,
        columns,
        ready,
        applyActiveBackdrop,
        transitionDuration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoneycomb.useEffect": ()=>{
            engine.current?.setAccentKeys(accentKeys);
            scheduleRef.current();
        }
    }["useHoneycomb.useEffect"], [
        accentKeys,
        ready
    ]);
    // Randseiten: Aufrufer bauen das Objekt je Render neu — der Inhalt entscheidet
    const edgesKey = JSON.stringify(edges);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoneycomb.useEffect": ()=>{
            engine.current?.setEdges(JSON.parse(edgesKey));
            scheduleRef.current();
        }
    }["useHoneycomb.useEffect"], [
        edgesKey,
        ready
    ]);
    // Atmen der Randkacheln: aus bei reduzierter Bewegung, pausiert außerhalb des Viewports
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoneycomb.useEffect": ()=>{
            const e = engine.current;
            if (!e) return;
            e.shimmer = reducedMotion ? 0 : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIMMER_AMPLITUDE"];
            scheduleRef.current();
        }
    }["useHoneycomb.useEffect"], [
        reducedMotion,
        ready
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoneycomb.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas || typeof IntersectionObserver === 'undefined') return;
            const observer = new IntersectionObserver({
                "useHoneycomb.useEffect": ([entry])=>{
                    onScreen.current = entry?.isIntersecting ?? true;
                    if (onScreen.current) scheduleRef.current();
                }
            }["useHoneycomb.useEffect"]);
            observer.observe(canvas);
            return ({
                "useHoneycomb.useEffect": ()=>observer.disconnect()
            })["useHoneycomb.useEffect"];
        }
    }["useHoneycomb.useEffect"], [
        canvasRef,
        ready
    ]);
    // Slidewechsel: Übergang starten bzw. beenden, Overlays setzen, Texturen sichern
    const { activeIndex, previousIndex, cycle, direction } = slider;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHoneycomb.useEffect": ()=>{
            const e = engine.current;
            if (!e) return;
            const t = now();
            if (previousIndex !== null) {
                const timeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["heroTimeline"])(transitionDuration);
                const mode = reducedMotion ? 'fade' : slides[activeIndex]?.image ? 'tiles' : 'mask';
                e.startTransition({
                    mode,
                    direction,
                    start: t,
                    timeline
                });
                const leavingRects = rects.current.get(previousIndex);
                const leavingCells = leavingRects ? cellsFor(previousIndex, leavingRects, timeline.backdropIn.duration) : [];
                e.setLeavingBackdrop(leavingCells, t, timeline.textOut.delay, timeline.textOut.duration);
                applyActiveBackdrop(activeIndex, t, timeline, cycle);
            } else {
                e.endTransition();
                if (cycle === 0 && !shownBackdrop.current.has(activeIndex)) {
                    applyActiveBackdrop(activeIndex, t, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$HeroSlider$2f$heroTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialTimeline"])(transitionDuration), 0);
                }
            }
            ensureTexture(activeIndex);
            // Den Nachbarn erst im Leerlauf laden: Dekodieren und Hochladen (~100 ms auf
            // schwachen Geräten) sollen nicht in die laufende Animation fallen
            if (previousIndex === null && slides.length > 1) ensureTexture((activeIndex + 1) % slides.length);
            scheduleRef.current();
        }
    }["useHoneycomb.useEffect"], [
        activeIndex,
        previousIndex,
        cycle,
        direction,
        slides,
        transitionDuration,
        reducedMotion,
        ready,
        applyActiveBackdrop,
        cellsFor,
        ensureTexture
    ]);
    const movePointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHoneycomb.useCallback[movePointer]": (x, y)=>{
            const e = engine.current;
            if (!e || latest.current.reduced) return;
            e.setPointer(x, y, now());
            scheduleRef.current();
        }
    }["useHoneycomb.useCallback[movePointer]"], []);
    const leavePointer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useHoneycomb.useCallback[leavePointer]": ()=>{
            engine.current?.clearPointer(now());
            scheduleRef.current();
        }
    }["useHoneycomb.useCallback[leavePointer]"], []);
    return {
        ready,
        movePointer,
        leavePointer,
        reportRects
    };
};
_s(useHoneycomb, "z64o3X2pO7E7gZ36+ZJmEbZblk0=");
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
"[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Zeitfunktionen als reine Funktionen — dieselben cubic-bezier-Kurven wie in
 * den CSS-Animationen des HeroSliders, damit WebGL-Wabe und 3D-Szenen dieselbe
 * Bewegung zeigen. Lösung wie in Browsern: Newton, notfalls Bisektion.
 *
 * Seit #1454 hier in lib/motion; `Organism/HoneycombSlider/easing.ts` reicht
 * die Exporte nur noch durch.
 */ __turbopack_context__.s([
    "EASE_IN",
    ()=>EASE_IN,
    "EASE_IN_OUT",
    ()=>EASE_IN_OUT,
    "EASE_LINEAR",
    ()=>EASE_LINEAR,
    "EASE_OUT",
    ()=>EASE_OUT,
    "EASE_POP",
    ()=>EASE_POP,
    "EASE_REVEAL",
    ()=>EASE_REVEAL,
    "EASE_STANDARD",
    ()=>EASE_STANDARD,
    "clamp01",
    ()=>clamp01,
    "cubicBezier",
    ()=>cubicBezier,
    "easingTable",
    ()=>easingTable,
    "tableAt",
    ()=>tableAt
]);
const clamp01 = (t)=>t <= 0 ? 0 : t >= 1 ? 1 : t;
const NEWTON_ITERATIONS = 6;
const NEWTON_MIN_SLOPE = 0.001;
const BISECTION_ITERATIONS = 24;
const a = (a1, a2)=>1 - 3 * a2 + 3 * a1;
const b = (a1, a2)=>3 * a2 - 6 * a1;
const c = (a1)=>3 * a1;
const bezier = (t, a1, a2)=>((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
const slope = (t, a1, a2)=>3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
const cubicBezier = (x1, y1, x2, y2)=>{
    if (x1 === y1 && x2 === y2) return clamp01;
    const solveT = (x)=>{
        let t = x;
        for(let i = 0; i < NEWTON_ITERATIONS; i += 1){
            const s = slope(t, x1, x2);
            if (s < NEWTON_MIN_SLOPE) break;
            t -= (bezier(t, x1, x2) - x) / s;
            if (t <= 0) return 0;
            if (t >= 1) return 1;
        }
        if (Math.abs(bezier(t, x1, x2) - x) < 1e-5) return t;
        let lo = 0;
        let hi = 1;
        for(let i = 0; i < BISECTION_ITERATIONS; i += 1){
            t = (lo + hi) / 2;
            if (bezier(t, x1, x2) < x) lo = t;
            else hi = t;
        }
        return t;
    };
    return (x)=>{
        if (x <= 0) return 0;
        if (x >= 1) return 1;
        return bezier(solveT(x), y1, y2);
    };
};
const EASE_POP = cubicBezier(0.2, 0.8, 0.2, 1);
const EASE_REVEAL = cubicBezier(0.65, 0, 0.35, 1);
const EASE_IN = cubicBezier(0.42, 0, 1, 1);
const EASE_STANDARD = cubicBezier(0.25, 0.1, 0.25, 1);
const EASE_OUT = cubicBezier(0, 0, 0.58, 1);
const EASE_IN_OUT = cubicBezier(0.42, 0, 0.58, 1);
const EASE_LINEAR = clamp01;
const easingTable = (easing, steps = 256)=>{
    const table = new Float32Array(steps + 1);
    for(let i = 0; i <= steps; i += 1)table[i] = easing(i / steps);
    return table;
};
const tableAt = (table, t)=>{
    const steps = table.length - 1;
    const x = clamp01(t) * steps;
    const i = Math.floor(x);
    if (i >= steps) return table[steps];
    const f = x - i;
    return table[i] * (1 - f) + table[i + 1] * f;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/HeroBlock.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/HeroBlock.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_1fsd1g9s8xvk_._.js.map