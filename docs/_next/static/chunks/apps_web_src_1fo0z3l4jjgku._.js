(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Plastship Color Palette
 *
 * This file contains the color palette used across the Plastship application.
 * Use these color constants instead of hardcoding hex values to ensure consistency.
 */ /**
 * Main color palette for the Plastship application
 */ __turbopack_context__.s([
    "CHART_DARK_COLOR_MAP",
    ()=>CHART_DARK_COLOR_MAP,
    "ChartColors",
    ()=>ChartColors,
    "PlastshipChartSchemes",
    ()=>PlastshipChartSchemes,
    "PlastshipColors",
    ()=>PlastshipColors,
    "chartColorForMode",
    ()=>chartColorForMode,
    "getAlphaColor",
    ()=>getAlphaColor,
    "getColor",
    ()=>getColor
]);
const PlastshipColors = {
    // Primary colors
    PRIMARY: '#00416E',
    SECONDARY: '#37BA24',
    // Neutral colors
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    GREY_LIGHT: '#F8F8F8',
    GREY: '#D8D8D8',
    GREY_DARK: '#687074',
    // Status colors
    ERROR: '#DC0000',
    SUCCESS: '#37BA24',
    INFO: '#00416E',
    WARNING: '#FFCD00',
    // Button colors
    BUTTON_PRIMARY_BG: '#292929',
    BUTTON_PRIMARY_TEXT: '#FFFFFF',
    BUTTON_SECONDARY_BG: '#EFCD00',
    BUTTON_SECONDARY_TEXT: '#292929',
    BUTTON_TERTIARY_BORDER: '#292929',
    BUTTON_DANGER_BG: '#E22F2F',
    // Background colors
    HEADER_BG: '#F1FCFF',
    FOOTER_BG: '#1F2937',
    // Link colors
    LINK_PRIMARY: '#8A2163',
    // Additional UI colors (matched with CATEGORY_COLORS in routes.tsx)
    TEAL: '#5DE8D2',
    ORANGE: '#FF8A75',
    CORAL: '#FFBA4D',
    PURPLE: '#B97AFF',
    // Traffic light colors (field completeness)
    TRAFFIC_GREEN: '#22C55E',
    TRAFFIC_YELLOW: '#EAB308',
    TRAFFIC_RED: '#EF4444',
    TRAFFIC_GREY: '#D1D5DB',
    // #1889: Kategorie „auctions" der Seitenleiste (matched with CATEGORY_COLORS
    // in routes.tsx) — derselbe Wert wie TRAFFIC_RED, eine Quelle
    AUCTION: '#EF4444',
    // Brand colors
    MICROSOFT: '#4DA3FF'
};
const ChartColors = {
    COLOR_1: '#e8c1a0',
    COLOR_2: '#f47560',
    COLOR_3: '#f1e15b',
    COLOR_4: '#e8a838',
    COLOR_5: '#61cdbb',
    COLOR_6: '#97e3d5',
    COLOR_7: '#b5cf6b',
    COLOR_8: '#d6e685',
    COLOR_9: '#a6d854',
    COLOR_10: '#8dd1e1'
};
const PlastshipChartSchemes = {
    // Custom color scheme based on Plastship brand colors
    plastship: [
        PlastshipColors.PRIMARY,
        PlastshipColors.SECONDARY,
        PlastshipColors.WARNING,
        PlastshipColors.LINK_PRIMARY,
        PlastshipColors.BUTTON_PRIMARY_BG,
        PlastshipColors.BUTTON_SECONDARY_BG,
        PlastshipColors.GREY_DARK,
        PlastshipColors.INFO,
        PlastshipColors.SUCCESS,
        PlastshipColors.ERROR
    ],
    // #1313: kategoriale Reihen — acht Farbtoene in fester Reihenfolge, benachbarte
    // Reihen auch bei Rot-Gruen-Schwaeche unterscheidbar. Das Schema `plastship`
    // eignet sich dafuer nicht: von seinen zehn Eintraegen sind nur sieben
    // verschieden (PRIMARY = INFO, SECONDARY = SUCCESS, WARNING ≈ BUTTON_SECONDARY_BG),
    // ab der achten Reihe tragen zwei Reihen dieselbe Farbe. Reihenfolge nicht
    // umstellen — sie ist Teil der Unterscheidbarkeit.
    categorical: [
        '#2a78d6',
        '#eb6834',
        '#1baf7a',
        '#eda100',
        '#e87ba4',
        '#008300',
        '#4a3aa7',
        '#e34948'
    ],
    // Status color scheme
    status: [
        PlastshipColors.SUCCESS,
        PlastshipColors.INFO,
        PlastshipColors.WARNING,
        PlastshipColors.ERROR
    ],
    // Nivo default color scheme
    nivo: [
        ChartColors.COLOR_1,
        ChartColors.COLOR_2,
        ChartColors.COLOR_3,
        ChartColors.COLOR_4,
        ChartColors.COLOR_5,
        ChartColors.COLOR_6,
        ChartColors.COLOR_7,
        ChartColors.COLOR_8,
        ChartColors.COLOR_9,
        ChartColors.COLOR_10
    ]
};
const getColor = (color)=>{
    return PlastshipColors[color];
};
const getAlphaColor = (color, alpha)=>{
    // Convert hex to rgba
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
const CHART_DARK_COLOR_MAP = {
    '#00416e': '#60A0E8',
    '#292929': '#BDC3C7',
    '#000000': '#E5E7EB',
    '#687074': '#9CA3AF',
    '#889396': '#9CA3AF',
    '#8a2163': '#D38AB1',
    '#4a3aa7': '#8F84E8',
    '#008300': '#3FBF3F' // categorical[5]
};
const chartColorForMode = (color, dark)=>dark ? CHART_DARK_COLOR_MAP[color.toLowerCase()] ?? color : color;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/theme/mixins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userSelectNone",
    ()=>userSelectNone,
    "visuallyHidden",
    ()=>visuallyHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const userSelectNone = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const visuallyHidden = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Grid/Col/Col.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const getColWidth = (span)=>`${span / 12 * 100}%`;
// Offsets must live here, inside the same media queries as the width classes.
// The global _flexboxgrid.scss also defines col-*-offset-* rules, but behind
// @container queries on grid-row with different boundaries (768/1024/1200) —
// width and offset switched at different widths, so on tablets a col-md-6 was
// 50% wide with no offset yet, i.e. left-aligned instead of centered. These
// two-class rules also outweigh the global single-class ones.
const colOffsets = (tier)=>Array.from({
        length: 12
    }, (_, i)=>`&.col-${tier}-offset-${i} { margin-left: ${getColWidth(i)}; }`).join('\n  ');
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Col.styles__Root",
    componentId: "sc-8cb234a0-0"
})`
  container-type: inline-size;
  container-name: grid-col;
  box-sizing: border-box;
  padding: 0 12px;
  margin-bottom: 12px;

  /* XS - Mobile (default) */
  &.col-xs-1 { flex: 0 0 ${getColWidth(1)}; max-width: ${getColWidth(1)}; }
  &.col-xs-2 { flex: 0 0 ${getColWidth(2)}; max-width: ${getColWidth(2)}; }
  &.col-xs-3 { flex: 0 0 ${getColWidth(3)}; max-width: ${getColWidth(3)}; }
  &.col-xs-4 { flex: 0 0 ${getColWidth(4)}; max-width: ${getColWidth(4)}; }
  &.col-xs-5 { flex: 0 0 ${getColWidth(5)}; max-width: ${getColWidth(5)}; }
  &.col-xs-6 { flex: 0 0 ${getColWidth(6)}; max-width: ${getColWidth(6)}; }
  &.col-xs-7 { flex: 0 0 ${getColWidth(7)}; max-width: ${getColWidth(7)}; }
  &.col-xs-8 { flex: 0 0 ${getColWidth(8)}; max-width: ${getColWidth(8)}; }
  &.col-xs-9 { flex: 0 0 ${getColWidth(9)}; max-width: ${getColWidth(9)}; }
  &.col-xs-10 { flex: 0 0 ${getColWidth(10)}; max-width: ${getColWidth(10)}; }
  &.col-xs-11 { flex: 0 0 ${getColWidth(11)}; max-width: ${getColWidth(11)}; }
  &.col-xs-12 { flex: 0 0 ${getColWidth(12)}; max-width: ${getColWidth(12)}; }

  ${colOffsets('xs')}

  /* SM - Tablet (min-width: 576px) */
  @media (min-width: 576px) {
    &.col-sm-1 { flex: 0 0 ${getColWidth(1)}; max-width: ${getColWidth(1)}; }
    &.col-sm-2 { flex: 0 0 ${getColWidth(2)}; max-width: ${getColWidth(2)}; }
    &.col-sm-3 { flex: 0 0 ${getColWidth(3)}; max-width: ${getColWidth(3)}; }
    &.col-sm-4 { flex: 0 0 ${getColWidth(4)}; max-width: ${getColWidth(4)}; }
    &.col-sm-5 { flex: 0 0 ${getColWidth(5)}; max-width: ${getColWidth(5)}; }
    &.col-sm-6 { flex: 0 0 ${getColWidth(6)}; max-width: ${getColWidth(6)}; }
    &.col-sm-7 { flex: 0 0 ${getColWidth(7)}; max-width: ${getColWidth(7)}; }
    &.col-sm-8 { flex: 0 0 ${getColWidth(8)}; max-width: ${getColWidth(8)}; }
    &.col-sm-9 { flex: 0 0 ${getColWidth(9)}; max-width: ${getColWidth(9)}; }
    &.col-sm-10 { flex: 0 0 ${getColWidth(10)}; max-width: ${getColWidth(10)}; }
    &.col-sm-11 { flex: 0 0 ${getColWidth(11)}; max-width: ${getColWidth(11)}; }
    &.col-sm-12 { flex: 0 0 ${getColWidth(12)}; max-width: ${getColWidth(12)}; }

    ${colOffsets('sm')}
  }

  /* MD - Desktop (min-width: 768px) */
  @media (min-width: 768px) {
    &.col-md-1 { flex: 0 0 ${getColWidth(1)}; max-width: ${getColWidth(1)}; }
    &.col-md-2 { flex: 0 0 ${getColWidth(2)}; max-width: ${getColWidth(2)}; }
    &.col-md-3 { flex: 0 0 ${getColWidth(3)}; max-width: ${getColWidth(3)}; }
    &.col-md-4 { flex: 0 0 ${getColWidth(4)}; max-width: ${getColWidth(4)}; }
    &.col-md-5 { flex: 0 0 ${getColWidth(5)}; max-width: ${getColWidth(5)}; }
    &.col-md-6 { flex: 0 0 ${getColWidth(6)}; max-width: ${getColWidth(6)}; }
    &.col-md-7 { flex: 0 0 ${getColWidth(7)}; max-width: ${getColWidth(7)}; }
    &.col-md-8 { flex: 0 0 ${getColWidth(8)}; max-width: ${getColWidth(8)}; }
    &.col-md-9 { flex: 0 0 ${getColWidth(9)}; max-width: ${getColWidth(9)}; }
    &.col-md-10 { flex: 0 0 ${getColWidth(10)}; max-width: ${getColWidth(10)}; }
    &.col-md-11 { flex: 0 0 ${getColWidth(11)}; max-width: ${getColWidth(11)}; }
    &.col-md-12 { flex: 0 0 ${getColWidth(12)}; max-width: ${getColWidth(12)}; }

    ${colOffsets('md')}
  }

  /* LG - Large Desktop (min-width: 992px) */
  @media (min-width: 992px) {
    &.col-lg-1 { flex: 0 0 ${getColWidth(1)}; max-width: ${getColWidth(1)}; }
    &.col-lg-2 { flex: 0 0 ${getColWidth(2)}; max-width: ${getColWidth(2)}; }
    &.col-lg-3 { flex: 0 0 ${getColWidth(3)}; max-width: ${getColWidth(3)}; }
    &.col-lg-4 { flex: 0 0 ${getColWidth(4)}; max-width: ${getColWidth(4)}; }
    &.col-lg-5 { flex: 0 0 ${getColWidth(5)}; max-width: ${getColWidth(5)}; }
    &.col-lg-6 { flex: 0 0 ${getColWidth(6)}; max-width: ${getColWidth(6)}; }
    &.col-lg-7 { flex: 0 0 ${getColWidth(7)}; max-width: ${getColWidth(7)}; }
    &.col-lg-8 { flex: 0 0 ${getColWidth(8)}; max-width: ${getColWidth(8)}; }
    &.col-lg-9 { flex: 0 0 ${getColWidth(9)}; max-width: ${getColWidth(9)}; }
    &.col-lg-10 { flex: 0 0 ${getColWidth(10)}; max-width: ${getColWidth(10)}; }
    &.col-lg-11 { flex: 0 0 ${getColWidth(11)}; max-width: ${getColWidth(11)}; }
    &.col-lg-12 { flex: 0 0 ${getColWidth(12)}; max-width: ${getColWidth(12)}; }

    ${colOffsets('lg')}
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Grid/Col/Col.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Col",
    ()=>Col
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$Col$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Col/Col.styles.ts [app-client] (ecmascript)");
;
;
const Col = (props)=>{
    const { xs, xsOffset, sm, smOffset, md, mdOffset, lg, lgOffset, children, dataTestId, dataAttributes } = props;
    // Only emit classes for props that are set — unset props used to produce
    // inert garbage like `col-md-undefined`. Offset 0 is a valid value.
    const gridClasses = [
        xs !== undefined && `col-xs-${xs}`,
        xsOffset !== undefined && `col-xs-offset-${xsOffset}`,
        sm !== undefined && `col-sm-${sm}`,
        smOffset !== undefined && `col-sm-offset-${smOffset}`,
        md !== undefined && `col-md-${md}`,
        mdOffset !== undefined && `col-md-offset-${mdOffset}`,
        lg !== undefined && `col-lg-${lg}`,
        lgOffset !== undefined && `col-lg-offset-${lgOffset}`
    ].filter(Boolean);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$Col$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: [
            props.className,
            ...gridClasses
        ].filter(Boolean).join(' '),
        ...dataAttributes,
        "data-testid": dataTestId ?? 'Col-root',
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Grid/Col/Col.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Col;
;
var _c;
__turbopack_context__.k.register(_c, "Col");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Grid/Row/Row.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Row.styles__Root",
    componentId: "sc-3e89f65f-0"
})`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  container-type: inline-size;
  container-name: grid-row;

  @media (min-width: ${(props)=>props.theme.device.tablet}) {
    width: 100%;
    height: auto;
    max-width: 94%;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Grid/Row/Row.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Row",
    ()=>Row
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$Row$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Row/Row.styles.ts [app-client] (ecmascript)");
;
;
const Row = (props)=>{
    const { children, dataTestId } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$Row$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: [
            props.className,
            'row'
        ].filter(Boolean).join(' '),
        "data-testid": dataTestId ? dataTestId : 'Row-root',
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Grid/Row/Row.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Row;
;
var _c;
__turbopack_context__.k.register(_c, "Row");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Headline/Headline.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledHeadline",
    ()=>StyledHeadline,
    "headlineFont",
    ()=>headlineFont
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
'use client';
;
;
const baseHeadlineStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  word-wrap: break-word;
  width: 100%;
  margin-bottom: ${({ theme })=>theme.margin.default};
  font-family: ${({ theme })=>theme.font.primaryFamily};
  text-transform: uppercase;
  word-wrap: break-word;
`;
const getHeadlineLevel = (level)=>{
    switch(level){
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h1:
            return 'one';
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h2:
            return 'two';
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h3:
            return 'three';
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h4:
            return 'four';
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h5:
            return 'five';
        default:
            return 'one';
    }
};
const headlineFont = (level, variant = 'desktop')=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${({ theme })=>{
        const token = theme.font.headline[getHeadlineLevel(level)][variant];
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      font-size: ${token.fontSize};
      line-height: ${token.lineHeight};
      font-weight: ${token.fontWeight};
      letter-spacing: ${token.letterSpacing};
    `;
    }}
`;
const headlineStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${baseHeadlineStyles}
  ${({ $styleLevel })=>headlineFont($styleLevel, 'mobile')}

  @media screen and (min-width: ${({ theme })=>theme.device.mobile}) {
    ${({ $styleLevel })=>headlineFont($styleLevel, 'desktop')}
  }
`;
const StyledHeadline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h1.withConfig({
    displayName: "Headline.styles__StyledHeadline",
    componentId: "sc-aba532a1-0"
})`
  ${headlineStyles}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Headline",
    ()=>Headline,
    "HeadlineImportances",
    ()=>HeadlineImportances
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.styles.ts [app-client] (ecmascript)");
;
;
var HeadlineImportances = /*#__PURE__*/ function(HeadlineImportances) {
    HeadlineImportances[HeadlineImportances["h1"] = 1] = "h1";
    HeadlineImportances[HeadlineImportances["h2"] = 2] = "h2";
    HeadlineImportances[HeadlineImportances["h3"] = 3] = "h3";
    HeadlineImportances[HeadlineImportances["h4"] = 4] = "h4";
    HeadlineImportances[HeadlineImportances["h5"] = 5] = "h5";
    return HeadlineImportances;
}({});
const Headline = (props)=>{
    const { children, className, importance, renderAs, dataTestId } = props;
    const getTagName = (importance)=>{
        switch(importance){
            case 1:
                return 'h1';
            case 2:
                return 'h2';
            case 3:
                return 'h3';
            case 4:
                return 'h4';
            case 5:
                return 'h5';
            default:
                return 'h1';
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledHeadline"], {
        as: getTagName(importance),
        $styleLevel: renderAs || importance,
        className: className,
        "data-testid": dataTestId || 'Headline-root',
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Headline;
;
var _c;
__turbopack_context__.k.register(_c, "Headline");
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
"[project]/apps/web/src/app/components/Atom/Icons/IconSearch/IconSearch.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconSearch.styles__Root",
    componentId: "sc-b6a7d21c-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconSearch/IconSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconSearch",
    ()=>IconSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$IconSearch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSearch/IconSearch.styles.ts [app-client] (ecmascript)");
;
;
const IconSearch = (props)=>{
    const defaultStrokeColor = 'currentColor';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$IconSearch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ...props,
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: props['className'],
        "data-testid": 'icon-search-root',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M16.9265 17.0401L20.3996 20.4001M11.3996 7.2001C13.3878 7.2001 14.9996 8.81187 14.9996 10.8001M19.2796 11.4401C19.2796 15.77 15.7695 19.2801 11.4396 19.2801C7.1097 19.2801 3.59961 15.77 3.59961 11.4401C3.59961 7.11018 7.1097 3.6001 11.4396 3.6001C15.7695 3.6001 19.2796 7.11018 19.2796 11.4401Z",
            stroke: props['strokeColor'] || defaultStrokeColor,
            strokeWidth: "2",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconSearch/IconSearch.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconSearch/IconSearch.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconSearch;
;
var _c;
__turbopack_context__.k.register(_c, "IconSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconSearch/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$IconSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSearch/IconSearch.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$IconSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSearch"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledLink",
    ()=>StyledLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const StyledLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "LinkButton.styles__StyledLink",
    componentId: "sc-9fe03ebd-0"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonBase"]}
  text-decoration: none;
  /* Browser-Vorgabe für fokussierte Links ist 1px Abstand — der Button hat keinen */
  outline-offset: 0;

  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonModifier"]}
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonOverrides"]}

  /*
   * Schriftfarbe der Variante halten: globale a- und a:hover-Regeln (0,1,1) schlagen eine
   * Klasse, deshalb die doppelte. Atom/Box färbt Links darin mit !important (#1519) —
   * dagegen gewinnt nur !important auf der höheren Spezifität.
   */
  &&,
  &&:hover {
    color: var(--button-fg) !important;
    text-decoration: none;
  }

  ${({ $disabled })=>$disabled ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          /* Atom/Box blendet Links darin beim Hover ab (0,2,1) — ein Knopf bleibt deckend */
          &&:hover {
            opacity: 1;
          }
        `}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkButton",
    ()=>LinkButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$LinkButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkPurpose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkPurpose/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkPurpose$2f$LinkPurpose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkPurpose/LinkPurpose.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$a11y$2f$linkPurpose$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/a11y/linkPurpose.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/externalLink.ts [app-client] (ecmascript)");
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
 * #1213: der Button als Link — gleiche Props, Varianten, Icon-Einfärbung und
 * Ladeanzeige wie `Atom/Button` (Stile aus denselben Bausteinen), nur rendert
 * er einen Next-Link. Für Seitenwechsel, damit Crawler, Mittelklick und
 * „Link kopieren" das Ziel sehen. Kein Wrapper mehr: Testid, Klasse und
 * `data-modifier` sitzen wie beim Button auf dem Element selbst.
 */ const LinkButton = ({ children, href, modifier = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY, icon, iconAlign, loading = false, disabled = false, background, target, label, tooltip, isActive, color, onClick, className, dataTestId = 'link-button-root' })=>{
    const gesperrt = disabled || loading;
    const showLoadingIcon = loading && (iconAlign || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].RIGHT);
    const showIcon = icon && !loading && iconAlign;
    const iconWithColor = icon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(icon, {
        color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonIconColor"])(modifier)
    }) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$LinkButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledLink"], {
        href: href,
        className: className,
        "data-testid": dataTestId,
        "data-modifier": modifier,
        "aria-label": label,
        "aria-disabled": gesperrt || undefined,
        tabIndex: gesperrt ? -1 : undefined,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["externalLinkProps"])(href, {
            target
        }),
        title: tooltip,
        onClick: onClick,
        $modifier: modifier,
        $background: background,
        $icon: icon !== undefined,
        $isActive: isActive,
        $color: color,
        $disabled: gesperrt,
        children: [
            (showLoadingIcon || showIcon) && iconAlign === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].LEFT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLeft"], {
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.tsx",
                    lineNumber: 91,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0)) : iconWithColor
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Span"], {
                $background: background,
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkPurpose$2f$LinkPurpose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkPurpose"], {
                text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$a11y$2f$linkPurpose$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textOfChildren"])(children),
                href: href,
                dataTestId: `${dataTestId}-purpose`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            (showLoadingIcon || showIcon) && iconAlign === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].RIGHT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconRight"], {
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.tsx",
                    lineNumber: 102,
                    columnNumber: 31
                }, ("TURBOPACK compile-time value", void 0)) : iconWithColor
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.tsx",
                lineNumber: 102,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            loading && !iconAlign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconRight"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.tsx",
                    lineNumber: 107,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.tsx",
                lineNumber: 106,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LinkButton;
;
var _c;
__turbopack_context__.k.register(_c, "LinkButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/LinkButton/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$LinkButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkButton/LinkButton.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$LinkButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkButton"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/LinkPurpose/LinkPurpose.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hint",
    ()=>Hint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$mixins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/mixins.ts [app-client] (ecmascript)");
'use client';
;
;
const Hint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "LinkPurpose.styles__Hint",
    componentId: "sc-bae58da4-0"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$mixins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visuallyHidden"]}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/LinkPurpose/LinkPurpose.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LinkPurpose",
    ()=>LinkPurpose,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$a11y$2f$linkPurpose$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/a11y/linkPurpose.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkPurpose$2f$LinkPurpose$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkPurpose/LinkPurpose.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
function LinkPurpose({ text, href, dataTestId = 'link-purpose' }) {
    const hint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$a11y$2f$linkPurpose$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["linkPurposeHint"])(text, href);
    if (!hint) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkPurpose$2f$LinkPurpose$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
        "data-testid": dataTestId,
        children: ` (${hint})`
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/LinkPurpose/LinkPurpose.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
_c = LinkPurpose;
const __TURBOPACK__default__export__ = LinkPurpose;
var _c;
__turbopack_context__.k.register(_c, "LinkPurpose");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/LinkPurpose/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkPurpose$2f$LinkPurpose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkPurpose/LinkPurpose.tsx [app-client] (ecmascript)");
;
;
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
"[project]/apps/web/src/app/components/Template/Default/DefaultLazy.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DefaultLazy",
    ()=>DefaultLazy,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
'use client';
;
const DefaultLazy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Template/Default/Default.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.Default), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Template/Default/Default.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c1 = DefaultLazy;
const __TURBOPACK__default__export__ = DefaultLazy;
var _c, _c1;
__turbopack_context__.k.register(_c, "DefaultLazy$dynamic");
__turbopack_context__.k.register(_c1, "DefaultLazy");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/not-found-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotFoundContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Row/Row.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$Col$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Col/Col.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.tsx [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/LinkButton/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSearch/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
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
const ErrorContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "not-found-content__ErrorContainer",
    componentId: "sc-5dc3d51f-0"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-top: 2rem;
`;
_c = ErrorContainer;
const IconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "not-found-content__IconWrapper",
    componentId: "sc-5dc3d51f-1"
})`
  margin-bottom: 1.5rem;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_DARK};
  background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_LIGHT};
  border-radius: 50%;
  padding: 1rem;
`;
_c1 = IconWrapper;
const ErrorCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "not-found-content__ErrorCode",
    componentId: "sc-5dc3d51f-2"
})`
  font-size: 4rem;
  font-weight: 700;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_DARK};
  margin-bottom: 0.5rem;
`;
_c2 = ErrorCode;
const StyledText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "not-found-content__StyledText",
    componentId: "sc-5dc3d51f-3"
})`
  margin: 1rem 0 2rem;
  max-width: 400px;
`;
_c3 = StyledText;
const ButtonGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "not-found-content__ButtonGroup",
    componentId: "sc-5dc3d51f-4"
})`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;
_c4 = ButtonGroup;
function NotFoundContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const handleBack = ()=>{
        router.back();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$Row$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$Col$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Col"], {
            xs: 12,
            sm: 12,
            mdOffset: 3,
            md: 6,
            lgOffset: 4,
            lg: 4,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorContainer, {
                "data-testid": "not-found-error-page",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconWrapper, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            size: 64
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/not-found-content.tsx",
                            lineNumber: 71,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/not-found-content.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorCode, {
                        "data-testid": "error-code",
                        children: "404"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/not-found-content.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                        importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h1,
                        renderAs: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h2,
                        dataTestId: "not-found-heading",
                        children: tr('common.errorPage.notFound.title', {
                            defaultValue: 'Seite nicht gefunden'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/not-found-content.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledText, {
                        "data-testid": "not-found-text",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                            variant: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].body,
                            children: tr('common.errorPage.notFound.text', {
                                defaultValue: 'Die angeforderte Seite konnte nicht gefunden werden. Möglicherweise wurde sie verschoben oder existiert nicht mehr.'
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/not-found-content.tsx",
                            lineNumber: 83,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/not-found-content.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ButtonGroup, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard/",
                                modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY,
                                dataTestId: "dashboard-button",
                                children: tr('common.errorPage.toDashboard', {
                                    defaultValue: 'Zum Dashboard'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/not-found-content.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$LinkButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].SECONDARY,
                                dataTestId: "home-button",
                                children: tr('common.errorPage.toHome', {
                                    defaultValue: 'Zur Startseite'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/not-found-content.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].SECONDARY,
                                onClick: handleBack,
                                dataTestId: "back-button",
                                children: tr('common.back', {
                                    defaultValue: 'Zurück'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/not-found-content.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/not-found-content.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/not-found-content.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/not-found-content.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/not-found-content.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(NotFoundContent, "ZYAidAl7U5zOC1J3ZbZj5mV1w38=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
});
_c5 = NotFoundContent;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ErrorContainer");
__turbopack_context__.k.register(_c1, "IconWrapper");
__turbopack_context__.k.register(_c2, "ErrorCode");
__turbopack_context__.k.register(_c3, "StyledText");
__turbopack_context__.k.register(_c4, "ButtonGroup");
__turbopack_context__.k.register(_c5, "NotFoundContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/a11y/linkPurpose.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describeLinkTarget",
    ()=>describeLinkTarget,
    "isNonDescriptiveLinkText",
    ()=>isNonDescriptiveLinkText,
    "linkPurposeHint",
    ()=>linkPurposeHint,
    "normalizeLinkText",
    ()=>normalizeLinkText,
    "textOfChildren",
    ()=>textOfChildren
]);
/**
 * #2131: Zweck eines Links mit nichtssagendem Text („hier“, „here“, „Learn
 * more“). Solche Texte kommen auf der öffentlichen Seite aus dem CMS (Fließtext
 * und Knopf-Beschriftungen der Redaktion); geändert werden sie dort. Bis dahin
 * hängt der Renderer einen nur für Screenreader sichtbaren Zusatz an, der das
 * Ziel nennt (Atom `LinkPurpose`) — er steht im `innerText` des Links und damit
 * auch in dem, was Suchmaschinen und Lighthouse (`link-text`) lesen.
 *
 * Rein, ohne React und ohne Browser-API: läuft im Server-Renderer des
 * Fließtexts (SiteMarkdownContent) genauso wie im Browser.
 */ /**
 * Nichtssagende Linktexte, Deutsch und Englisch, kleingeschrieben. Abgeleitet
 * aus der Liste von Lighthouse (`link-text`, Sprachen de und en) plus den
 * Varianten, die die Redaktion nutzt.
 */ const NICHTSSAGEND = new Set([
    // Deutsch
    'hier',
    'hier klicken',
    'klicken sie hier',
    'hier entlang',
    'mehr',
    'mehr dazu',
    'mehr erfahren',
    'mehr infos',
    'mehr informationen',
    'weiter',
    'weiterlesen',
    'link',
    'dieser link',
    'zum link',
    // Englisch
    'here',
    'click here',
    'click this',
    'go',
    'learn more',
    'more',
    'more info',
    'more information',
    'read more',
    'right here',
    'start',
    'this',
    'this link'
]);
function normalizeLinkText(text) {
    return text.replace(/\s+/g, ' ').trim().replace(/^[\s.,;:!?»«„“”"'()[\]…→>-]+|[\s.,;:!?»«„“”"'()[\]…→>-]+$/g, '').toLowerCase();
}
function isNonDescriptiveLinkText(text) {
    const norm = normalizeLinkText(text);
    return norm !== '' && NICHTSSAGEND.has(norm);
}
function textOfChildren(children) {
    if (children === null || children === undefined || typeof children === 'boolean') return '';
    if (typeof children === 'string' || typeof children === 'number') return String(children);
    if (Array.isArray(children)) return children.map(textOfChildren).join('');
    if (typeof children === 'object' && 'props' in children) {
        const props = children.props;
        return textOfChildren(props?.children);
    }
    return '';
}
/** Basis für relative Ziele — nur zum Zerlegen, der Host erscheint nie im Zusatz */ const BASIS = 'https://plastship.invalid';
/** Dateiendungen, die als Art des Ziels genannt werden */ const DATEIARTEN = {
    pdf: 'PDF',
    doc: 'DOC',
    docx: 'DOCX',
    xls: 'XLS',
    xlsx: 'XLSX',
    csv: 'CSV',
    zip: 'ZIP',
    ppt: 'PPT',
    pptx: 'PPTX'
};
function describeLinkTarget(href) {
    if (!href) return null;
    const ziel = href.trim();
    if (ziel === '' || ziel.startsWith('#') || /^(mailto|tel|javascript):/i.test(ziel)) return null;
    let url;
    try {
        url = new URL(ziel, BASIS);
    } catch  {
        return null;
    }
    const teile = url.pathname.split('/').filter(Boolean);
    const letzter = teile.length > 0 ? decodeURIComponent(teile[teile.length - 1]) : '';
    const endung = /\.([a-z0-9]{2,5})$/i.exec(letzter)?.[1]?.toLowerCase();
    const dateiart = endung ? DATEIARTEN[endung] : undefined;
    const extern = url.origin !== BASIS && !/(^|\.)plastship\.(com|de|org)$/i.test(url.hostname);
    const host = url.hostname.replace(/^www\./i, '');
    const teileText = [];
    if (dateiart) teileText.push(dateiart);
    if (extern) {
        teileText.push(host);
    } else if (!dateiart && letzter) {
        teileText.push(letzter.replace(/\.[a-z0-9]{2,5}$/i, '').replace(/[-_]+/g, ' ').trim());
    }
    const text = teileText.filter(Boolean).join(', ');
    return text === '' ? null : text;
}
function linkPurposeHint(text, href) {
    if (!isNonDescriptiveLinkText(text)) return null;
    return describeLinkTarget(href);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_1fo0z3l4jjgku._.js.map