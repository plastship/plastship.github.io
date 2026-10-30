(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeMode",
    ()=>ThemeMode
]);
'use client';
var ThemeMode = /*#__PURE__*/ function(ThemeMode) {
    ThemeMode["LIGHT"] = "light";
    ThemeMode["DARK"] = "dark";
    return ThemeMode;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/theme/darkTheme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "themePlastshipDark",
    ()=>themePlastshipDark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
;
const themePlastshipDark = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"],
    key: 'plastship-dark',
    boxShadow: '0rem 0.125rem 0.5rem 0rem rgba(255, 255, 255, 0.05)',
    palette: {
        background: {
            header: '#1F2937',
            footer: '#0F1623' // Darker version of header
        },
        // #2164: dunkle Navy-Fläche auch im Dark Mode (vorher primary #60A0E8 als
        // Verlaufsende mit default.white #1F2937 als Text — dunkel auf hell/dunkel)
        footer: {
            background: '#0B1622',
            backgroundEnd: '#163A5C'
        },
        link: {
            primary: '#D38AB1' // Lighter version of the primary link color
        },
        button: {
            primary: {
                background: '#FFFFFF',
                border: '#FFFFFF',
                text: '#1F2937'
            },
            secondary: {
                background: '#FFCD00',
                border: '#FFCD00',
                text: '#1F2937'
            },
            tertiary: {
                background: 'transparent',
                border: '#FFFFFF',
                text: '#FFFFFF'
            },
            danger: {
                background: '#FF5252',
                border: 'none',
                text: '#FFFFFF'
            }
        },
        default: {
            // #392: hell genug, dass dunkler Text (`default.white` = #1F2937) 5,4:1 erreicht und
            // Primär als Text auf `surface.subtle` 4,6:1 (vorher #4A90E2: 4,46 / 3,83)
            primary: '#60A0E8',
            secondary: '#4CD964',
            tertiary: '#FFD700',
            white: '#1F2937',
            greyLight: '#2C3E50',
            grey: '#34495E',
            greyDark: '#BDC3C7',
            black: '#FFFFFF',
            error: '#FF5252',
            success: '#4CD964',
            info: '#5AC8FA',
            warning: '#FFCC00' // Same warning color
        },
        status: {
            success: {
                bg: '#064e3b',
                text: '#6ee7b7',
                border: '#047857'
            },
            error: {
                bg: '#450a0a',
                text: '#fca5a5',
                border: '#991b1b'
            },
            warning: {
                bg: '#451a03',
                text: '#fde68a',
                border: '#92400e'
            },
            info: {
                bg: '#1e3a5f',
                text: '#93c5fd',
                border: '#1e40af'
            },
            neutral: {
                bg: '#374151',
                text: '#d1d5db',
                border: '#4b5563'
            }
        },
        surface: {
            subtle: '#283444',
            muted: '#1e293b',
            // #1749: bewusst weiß wie im hellen Theme (`default.white` ist hier invertiert)
            floating: '#ffffff'
        },
        // Inline-Code: vorher fest hell (#f1f3f5) unter dunkler Seite — jetzt dunkler
        // Grund, helle Schrift; Rosa aufgehellt, damit es auf #1e293b lesbar bleibt (7,2:1)
        code: {
            background: '#1e293b',
            text: '#f9a8d4'
        },
        border: {
            default: '#374151',
            strong: '#4b5563'
        },
        // #392: bewusst identisch zum hellen Theme — der Navy-Verlauf bleibt
        sidebar: {
            gradientStart: '#001a2c',
            gradientEnd: '#00416e',
            text: '#ffffff',
            flyout: '#00416e'
        },
        text: {
            primary: '#f9fafb',
            secondary: '#d1d5db',
            muted: '#9ca3af',
            onAccent: '#ffffff',
            onLight: '#00416e'
        },
        // #1199: öffentliche Seiten — dunkle Entsprechung der plastship.com-Skala
        site: {
            heading: '#f1f5f9',
            text: '#cbd5e1',
            muted: '#94a3b8',
            border: '#334155',
            tint: '#2b3a4f',
            card: '#111827',
            blue: '#7fb3d9',
            blueDark: '#00416E',
            green: '#37BA24',
            greenDark: '#2C951D',
            // #1537: hell genug für 4,5 : 1 auf allen dunklen Flächen (#1F2937: 7,98; site.tint: 6,27)
            greenText: '#4CD964',
            // #2129: die Chip-Fläche ist im Dunkelmodus dunkel — helles Grün wie greenText
            greenOnTint: '#4CD964',
            greenTint: '#14532d',
            // #1957: gedämpftes Weiß — Logos bleiben lesbar, ohne auf dem dunklen Grund zu blenden
            logoPlate: '#e2e8f0',
            // #1954: bewusst dasselbe Navy wie hell — die Primärfarbe ist hier hell (#60A0E8),
            // weiße Schrift darauf nur 2,8 : 1; auf Navy 10,6 : 1
            navy: '#00416E',
            red: '#f87171',
            shadow: '0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5)',
            shadowHover: '0 20px 25px -5px rgb(0 0 0 / 0.6), 0 8px 10px -6px rgb(0 0 0 / 0.6)'
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEXAGON_CLIP_PATH",
    ()=>HEXAGON_CLIP_PATH,
    "HEXAGON_PORTRAIT_MASK_URL",
    ()=>HEXAGON_PORTRAIT_MASK_URL,
    "HEXAGON_ROUNDED_MASK_URL",
    ()=>HEXAGON_ROUNDED_MASK_URL,
    "HEX_REVEAL_EASING",
    ()=>HEX_REVEAL_EASING,
    "HEX_SETTLE_EASING",
    ()=>HEX_SETTLE_EASING,
    "MIN_INNER_CORNER_PX",
    ()=>MIN_INNER_CORNER_PX,
    "PORTRAIT_HEX_ASPECT_RATIO",
    ()=>PORTRAIT_HEX_ASPECT_RATIO,
    "PORTRAIT_HEX_WIDTH_IN_SQUARE",
    ()=>PORTRAIT_HEX_WIDTH_IN_SQUARE,
    "concentricHexCornerRadius",
    ()=>concentricHexCornerRadius,
    "hexEdgeColorValue",
    ()=>hexEdgeColorValue,
    "hexEdgeHost",
    ()=>hexEdgeHost,
    "hexEdgeInset",
    ()=>hexEdgeInset,
    "hexMaskReveal",
    ()=>hexMaskReveal,
    "hexRecede",
    ()=>hexRecede,
    "hexRevealMask",
    ()=>hexRevealMask,
    "hexRevealRecede",
    ()=>hexRevealRecede,
    "hexRevealSettle",
    ()=>hexRevealSettle,
    "hexSettle",
    ()=>hexSettle,
    "hexShimmer",
    ()=>hexShimmer,
    "hexShimmerAnimation",
    ()=>hexShimmerAnimation,
    "portraitHexagonMask",
    ()=>portraitHexagonMask,
    "roundedHexagonClipPath",
    ()=>roundedHexagonClipPath,
    "roundedHexagonMask",
    ()=>roundedHexagonMask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/shape.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hexagonMask$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hexagonMask.ts [app-client] (ecmascript)");
;
;
;
;
;
const HEXAGON_CLIP_PATH = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)';
;
const roundedHexagonClipPath = (size, radius = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCornerRadius"])(size))=>`path('${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedHexagonPath"])({
        width: size,
        height: size
    }, radius)}')`;
const MIN_INNER_CORNER_PX = 0.5;
const concentricHexCornerRadius = (outer, inset)=>Math.max(MIN_INNER_CORNER_PX, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCornerRadius"])(outer) - inset);
/**
 * #1742: dieselbe Form als Masken-URL für beliebige Größen (Verwender setzt
 * `mask-size: 100% 100%`). Harte Kante, kein Weichzeichner — anders als
 * HEXAGON_MASK_URL für den Slide-Übergang. Für Waben-Kacheln und -Deko;
 * Personenbilder nehmen portraitHexagonMask (#1871).
 */ const HEXAGON_ROUNDED_MASK_SVG = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>" + `<path d='${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedHexagonPath"])({
    width: 100,
    height: 100
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCornerRadius"])(100))}' fill='#000'/>` + '</svg>';
const HEXAGON_ROUNDED_MASK_URL = `url("data:image/svg+xml,${encodeURIComponent(HEXAGON_ROUNDED_MASK_SVG)}")`;
const roundedHexagonMask = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  -webkit-mask-image: ${HEXAGON_ROUNDED_MASK_URL};
  mask-image: ${HEXAGON_ROUNDED_MASK_URL};
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
`;
/**
 * #1871: Form der PERSONENBILDER (Avatare, Profilbild, PIA, Mail, Kanban) —
 * regelmäßiges Sechseck mit Spitze oben wie das Logo (LogoPlastshipNoText:
 * 88,13 × 100, also fast genau Höhe = Breite × 2/√3), runde Ecken mit
 * HEX_CORNER_RATIO. Die Waben-Kacheln und -Deko (roundedHexagonMask,
 * roundedHexagonClipPath) bleiben im quadratischen Rahmen, weil sie lückenlos
 * aneinanderliegen müssen.
 */ const PORTRAIT_MASK_W = 100;
const PORTRAIT_MASK_H = Math.round(PORTRAIT_MASK_W * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_REGULAR_HEIGHT_RATIO"] * 100) / 100;
const HEXAGON_PORTRAIT_MASK_SVG = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${PORTRAIT_MASK_W} ${PORTRAIT_MASK_H}'>` + `<path d='${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["roundedHexagonPath"])({
    width: PORTRAIT_MASK_W,
    height: PORTRAIT_MASK_H
}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexCornerRadius"])(PORTRAIT_MASK_W))}' fill='#000'/>` + '</svg>';
const HEXAGON_PORTRAIT_MASK_URL = `url("data:image/svg+xml,${encodeURIComponent(HEXAGON_PORTRAIT_MASK_SVG)}")`;
const PORTRAIT_HEX_ASPECT_RATIO = `${PORTRAIT_MASK_W} / ${PORTRAIT_MASK_H}`;
const PORTRAIT_HEX_WIDTH_IN_SQUARE = 1 / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_REGULAR_HEIGHT_RATIO"];
const portraitHexagonMask = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  -webkit-mask-image: ${HEXAGON_PORTRAIT_MASK_URL};
  mask-image: ${HEXAGON_PORTRAIT_MASK_URL};
  -webkit-mask-size: contain;
  mask-size: contain;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
`;
const hexShimmer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0%, 100% { opacity: var(--alpha); }
  25% { opacity: calc(var(--alpha) * ${1 + __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIMMER_AMPLITUDE"]}); }
  75% { opacity: calc(var(--alpha) * ${1 - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHIMMER_AMPLITUDE"]}); }
`;
const hexShimmerAnimation = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  animation: ${hexShimmer} var(--shimmer-period) ease-in-out var(--shimmer-offset) infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
const HEX_REVEAL_EASING = 'cubic-bezier(0.65, 0, 0.35, 1)';
const HEX_SETTLE_EASING = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
const hexRevealMask = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    -webkit-mask-size: 0% auto;
    mask-size: 0% auto;
  }
  to {
    -webkit-mask-size: 320% auto;
    mask-size: 320% auto;
  }
`;
const hexSettle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: scale(1.08); }
  to { transform: scale(1); }
`;
const hexRecede = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { transform: scale(1); filter: brightness(1); }
  to { transform: scale(1.06); filter: brightness(0.55); }
`;
const hexMaskReveal = (durationMs, delayMs = 0)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  -webkit-mask-image: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hexagonMask$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEXAGON_MASK_URL"]};
  mask-image: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hexagonMask$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEXAGON_MASK_URL"]};
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: 320% auto;
  mask-size: 320% auto;
  animation: ${hexRevealMask} ${durationMs}ms ${HEX_REVEAL_EASING} ${delayMs}ms both;
`;
const hexRevealSettle = (durationMs, delayMs = 0)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  animation: ${hexSettle} ${Math.round(durationMs * 1.4)}ms ${HEX_SETTLE_EASING} ${delayMs}ms both;
`;
const hexRevealRecede = (durationMs, delayMs = 0)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  animation: ${hexRecede} ${durationMs}ms ${HEX_REVEAL_EASING} ${delayMs}ms both;
`;
const hexEdgeHost = (edges)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasEdges"])(edges)) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]``;
    const margin = (side)=>{
        const spec = edges?.[side];
        return spec?.placement === 'outer' && !spec.overlap ? `margin-${side}: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDGE_OUTER_ZONE_MAX_PX"][spec.depth ?? 'section']}px;` : '';
    };
    // Seitlicher Außenrand: Breite aus dem Elternelement minus Abstand, sonst ragt 100 % + Abstand hinaus.
    // Bis zur Tablet-Breite zeichnet HexEdge seitlich nichts — dann auch kein Abstand.
    const sideways = edges?.left?.placement === 'outer' || edges?.right?.placement === 'outer';
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    position: relative;
    isolation: isolate;
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOuterEdges"])(edges) ? 'z-index: 1;' : ''}
    ${margin('top')}
    ${margin('bottom')}
    ${sideways ? `@media (min-width: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devices"].tabletportrait + 1}px) { width: auto; ${margin('left')} ${margin('right')} }` : ''}
  `;
};
const hexEdgeColorValue = (theme, color)=>color === 'tint' ? theme.palette.site.tint : color === 'navy' ? theme.palette.site.navy : theme.palette.default[color];
const hexEdgeInset = (side, base, edges)=>{
    const spec = edges?.[side];
    if (spec?.placement !== 'inner') return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]``;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    padding-${side}: max(${base}, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDGE_ZONE_MAX_PX"][spec.depth ?? 'section']}px);
  `;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/theme/hexagonMask.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEXAGON_MASK_URL",
    ()=>HEXAGON_MASK_URL
]);
/**
 * Sechseck-Maske für den Slide-Übergang — dieselbe Form wie der `IconButton`
 * (pointy-top hexagon). Der Gauß-Weichzeichner im SVG erzeugt den weichen
 * Rand, über den der neue Slide in den alten hineinblendet. Die viewBox ist um
 * 20 Einheiten gepolstert, damit der Weichzeichner nicht abgeschnitten wird.
 */ const HEXAGON_MASK_SVG = [
    "<svg xmlns='http://www.w3.org/2000/svg' viewBox='-20 -20 140 140'>",
    "<filter id='b' x='-30%' y='-30%' width='160%' height='160%'>",
    "<feGaussianBlur stdDeviation='5'/>",
    '</filter>',
    "<polygon points='50,0 100,25 100,75 50,100 0,75 0,25' fill='%23000' filter='url(%23b)'/>",
    '</svg>'
].join('');
const HEXAGON_MASK_URL = `url("data:image/svg+xml,${HEXAGON_MASK_SVG}")`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GUEST_NAV_MIN_WIDTH_PX",
    ()=>GUEST_NAV_MIN_WIDTH_PX,
    "GUEST_NAV_ROOMY_WIDTH_PX",
    ()=>GUEST_NAV_ROOMY_WIDTH_PX,
    "SITE_HEADER_HEIGHT_PX",
    ()=>SITE_HEADER_HEIGHT_PX,
    "SITE_TEXT_MAX_WIDTH",
    ()=>SITE_TEXT_MAX_WIDTH,
    "guestNavCompact",
    ()=>guestNavCompact,
    "headlineStepBelow",
    ()=>headlineStepBelow,
    "siteArrowLink",
    ()=>siteArrowLink,
    "siteCard",
    ()=>siteCard,
    "siteCardBody",
    ()=>siteCardBody,
    "siteCardImage",
    ()=>siteCardImage,
    "siteH2",
    ()=>siteH2,
    "siteH3",
    ()=>siteH3,
    "siteHexBullets",
    ()=>siteHexBullets,
    "siteLinkedCard",
    ()=>siteLinkedCard,
    "siteMuted",
    ()=>siteMuted,
    "sitePhoneHeadingStepDown",
    ()=>sitePhoneHeadingStepDown,
    "sitePrimaryButton",
    ()=>sitePrimaryButton,
    "siteProse",
    ()=>siteProse,
    "siteSection",
    ()=>siteSection,
    "siteSectionCompact",
    ()=>siteSectionCompact,
    "siteStretchedLink",
    ()=>siteStretchedLink,
    "siteTag",
    ()=>siteTag,
    "siteVar",
    ()=>siteVar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
;
;
const bp = {
    sm: '640px',
    md: '768px',
    lg: '1024px'
};
/** Stufen der Theme-Skala (theme.font.headline), groß nach klein */ const HEADLINE_STUFEN = [
    'one',
    'two',
    'three',
    'four',
    'five'
];
const headlineStepBelow = (theme, px)=>HEADLINE_STUFEN.map((stufe)=>theme.font.headline[stufe].desktop).find((token)=>parseFloat(token.fontSize) < px);
const sitePhoneHeadingStepDown = (bereiche)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${({ theme })=>bereiche.map(({ ab, px })=>{
            const stufe = headlineStepBelow(theme, px);
            if (!stufe) return '';
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        @media (${ab}px <= width < ${theme.device.mobile}) {
          font-size: ${stufe.fontSize};
          line-height: ${stufe.lineHeight};
        }
      `;
        })}
`;
const SITE_HEADER_HEIGHT_PX = 80;
const GUEST_NAV_MIN_WIDTH_PX = 1280;
const GUEST_NAV_ROOMY_WIDTH_PX = 1440;
const guestNavCompact = `@media only screen and (min-width: ${GUEST_NAV_MIN_WIDTH_PX}px) and (max-width: ${GUEST_NAV_ROOMY_WIDTH_PX - 1}px)`;
const SITE_TEXT_MAX_WIDTH = '768px';
const siteVar = (name, fallback)=>`var(--site-${name}, ${fallback})`;
const siteSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  /* #2187 (Abnahme Moritz 29.10.): Außenluft auf das Theme-Maß — vorher
     48/64/128 px wie plastship.com, der Inhalt schwamm (128 px über der
     Überschrift, 32 px zur Karte). Jetzt eine Stufe kleiner aus der Skala:
     Telefon margin.large (32 px), ab md padding.large (64 px); zwei Blöcke
     stehen damit 128 px auseinander. */
  padding-block: ${({ theme })=>theme.margin.large};

  @media (min-width: ${bp.md}) {
    padding-block: ${({ theme })=>theme.padding.large};
  }
`;
const siteSectionCompact = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  padding-block: ${({ theme })=>theme.padding.default};

  @media (min-width: ${bp.sm}) {
    padding-block: ${({ theme })=>theme.margin.large};
  }

  @media (min-width: ${bp.md}) {
    padding-block: ${({ theme })=>theme.padding.large};
  }
`;
const siteH2 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  margin: 0;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0;
  text-transform: uppercase;
  color: ${({ theme })=>siteVar('heading', theme.palette.site.heading)};
  /*
   * Die Quelle trennt nicht, läuft aber mit langen Versalwörtern über schmale
   * Spalten (Media-Text zweispaltig ab 768px). Trennen ja, doch erst ab zehn
   * Zeichen und mit je fünf davor und danach — kein „IN-DUSTRIE…" mehr.
   */
  hyphens: auto;
  hyphenate-limit-chars: 10 5 5;

  @media (min-width: ${bp.sm}) {
    font-size: 36px;
    line-height: 40px;
  }

  /* #2127: am Telefon eine Stufe kleiner (30 → 24 px, ab sm 36 → 32 px) */
  ${sitePhoneHeadingStepDown([
    {
        ab: 0,
        px: 30
    },
    {
        ab: 640,
        px: 36
    }
])}
`;
const siteH3 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  margin: 0;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0;
  text-transform: none;
  color: ${({ theme })=>siteVar('heading', theme.palette.site.text)};

  @media (min-width: ${bp.lg}) {
    font-size: 20px;
  }
`;
const siteHexBullets = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ul {
    list-style: none;
  }

  ul > li {
    position: relative;
  }

  ul > li::before {
    content: '';
    position: absolute;
    left: -1.25em;
    top: 0.65em;
    width: 0.5em;
    height: 0.5em;
    background: var(--site-accent, ${({ theme })=>theme.palette.site.green});
    ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  }
`;
const siteProse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 16px;
  line-height: 28px;
  color: ${({ theme })=>siteVar('text', theme.palette.site.text)};

  p,
  ul,
  ol {
    margin: 0;
  }

  p + p,
  p + ul,
  ul + p,
  p + ol,
  ol + p {
    margin-top: 1.25em;
  }

  ul,
  ol {
    padding-left: 1.25em;
  }

  li + li {
    margin-top: 0.25em;
  }

  ${siteHexBullets}

  strong,
  b {
    font-weight: 700;
    color: inherit;
  }

  a {
    font-weight: 700;
    color: ${({ theme })=>siteVar('accent', theme.palette.site.greenText)};
    text-decoration: none;

    /* Farbe ausdrücklich: die globale Regel a:hover (Markengrün) wiegt so viel wie die Regel oben */
    &:hover,
    &:focus-visible {
      color: ${({ theme })=>siteVar('accent', theme.palette.site.greenText)};
      text-decoration: underline;
    }
  }
`;
const siteMuted = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme })=>siteVar('muted', theme.palette.site.text)};
`;
const siteCard = (shadow = false)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: relative;
  box-sizing: border-box;
  height: 100%;
  padding: 16px;
  border: 1px solid ${({ theme })=>siteVar('card-border', theme.palette.site.border)};
  /* #1954: die Karte bleibt hell — Schriftfarben des Bands gelten in ihr nicht (initial = Rückfall greift) */
  --site-heading: initial;
  --site-text: initial;
  --site-muted: initial;
  --site-accent: initial;
  border-radius: 24px;
  background: ${({ theme })=>theme.palette.site.card};
  ${shadow && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    box-shadow: ${({ theme })=>theme.palette.site.shadow};
    transition: box-shadow 150ms ease;

    &:hover,
    &:focus-within {
      box-shadow: ${({ theme })=>theme.palette.site.shadowHover};
    }
  `}
`;
const siteCardBody = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  padding: 16px 8px;
`;
const siteCardImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px 12px 0 0;
  object-fit: cover;
`;
const siteTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  display: inline-flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 8px;
  background: ${({ theme })=>theme.palette.site.tint};
  color: ${({ theme })=>theme.palette.site.blue};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
`;
const sitePrimaryButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  --button-primary-bg: ${({ theme })=>theme.palette.site.greenText};
  --button-primary-bg-hover: color-mix(
    in srgb,
    ${({ theme })=>theme.palette.site.greenText} 85%,
    #000000
  );
`;
const siteArrowLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  text-decoration: none;
  /* #1538: Zielfläche mindestens 24 px hoch. Der Link steht inline in der
     Überschrift — senkrechter Innenabstand vergrößert dort nur die Klickfläche,
     nicht die Zeile. */
  padding-block: 4px;

  /* Doppelte Klasse: die globalen Regeln a:hover und [data-theme='dark'] a wiegen mehr als eine */
  &&,
  &&:hover {
    color: inherit;
  }

  svg {
    display: inline-block;
    position: relative;
    top: -2px;
    margin-left: 4px;
    color: ${({ theme })=>theme.palette.site.blue};
    transition: transform 150ms ease;
  }

  &:hover svg,
  &:focus-visible svg {
    transform: translateX(4px);
  }
`;
const siteStretchedLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 1;
    border-radius: 24px;
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible::after {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 2px;
  }
`;
const siteLinkedCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  &:has(a[data-stretched='true']) {
    cursor: pointer;
  }

  &:hover a[data-stretched='true'] svg,
  &:focus-within a[data-stretched='true'] svg {
    transform: translateX(4px);
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "devices",
    ()=>devices,
    "themePlastship",
    ()=>themePlastship
]);
const devices = {
    smartphoneportrait: 320,
    smartphonelandscape: 480,
    tabletportrait: 768,
    tabletlandscape: 1024,
    desktop: 1200,
    desktoplarge: 1440
};
const themePlastship = {
    key: 'plastship',
    borderRadius: {
        button: '1.5rem',
        icon: '50%',
        box: '0.625rem',
        input: '4px'
    },
    boxShadow: '0rem 0.125rem 0.5rem 0rem rgba(0, 0, 0, 0.05)',
    device: {
        smartphone: '480px',
        mobile: '768px',
        tablet: '1024px',
        desktop: '1200px'
    },
    row: {
        maxWidth: '90rem',
        padding: '4.375rem'
    },
    font: {
        primaryFamily: 'var(--font-montserrat, "Montserrat"), sans-serif',
        secondaryFamily: 'var(--font-roboto, "Roboto"), sans-serif',
        /*
     * #2127 (Entscheidung 25.10.): unter theme.device.mobile steht jede Stufe in
     * der Größe der nächstkleineren (h1 wie h2, h2 wie h3 …, h5 bleibt h5);
     * Semantik unverändert. Tablet und Desktop nutzen `desktop`.
     */ headline: {
            one: {
                desktop: {
                    fontSize: '64px',
                    fontWeight: 'bold',
                    lineHeight: '80px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '40px',
                    fontWeight: 'bold',
                    lineHeight: '52px',
                    letterSpacing: '0'
                }
            },
            two: {
                desktop: {
                    fontSize: '40px',
                    fontWeight: 'bold',
                    lineHeight: '52px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '32px',
                    fontWeight: 'bold',
                    lineHeight: '44px',
                    letterSpacing: '0'
                }
            },
            three: {
                desktop: {
                    fontSize: '32px',
                    fontWeight: 'bold',
                    lineHeight: '44px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    lineHeight: '36px',
                    letterSpacing: '0'
                }
            },
            four: {
                desktop: {
                    fontSize: '24px',
                    fontWeight: 'bold',
                    lineHeight: '36px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '20px',
                    fontWeight: 'bold',
                    lineHeight: '26px',
                    letterSpacing: '0'
                }
            },
            five: {
                desktop: {
                    fontSize: '20px',
                    fontWeight: 'bold',
                    lineHeight: '26px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '20px',
                    fontWeight: 'bold',
                    lineHeight: '26px',
                    letterSpacing: '0'
                }
            }
        },
        text: {
            bodybig: {
                desktop: {
                    fontSize: '24px',
                    fontWeight: 'regular',
                    lineHeight: '36px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '24px',
                    fontWeight: 'regular',
                    lineHeight: '36px',
                    letterSpacing: '0'
                }
            },
            body: {
                desktop: {
                    fontSize: '16px',
                    fontWeight: 'regular',
                    lineHeight: '26px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '16px',
                    fontWeight: 'regular',
                    lineHeight: '26px',
                    letterSpacing: '0'
                }
            },
            bodysmall: {
                desktop: {
                    fontSize: '14px',
                    fontWeight: 'regular',
                    lineHeight: '22px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '14px',
                    fontWeight: 'regular',
                    lineHeight: '22px',
                    letterSpacing: '0'
                }
            },
            button: {
                desktop: {
                    fontSize: '16px',
                    fontWeight: 'regular',
                    lineHeight: '24px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '16px',
                    fontWeight: 'regular',
                    lineHeight: '24px',
                    letterSpacing: '0'
                }
            },
            caption: {
                desktop: {
                    fontSize: '12px',
                    fontWeight: 'regular',
                    lineHeight: '18px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '12px',
                    fontWeight: 'regular',
                    lineHeight: '18px',
                    letterSpacing: '0'
                }
            },
            navigation: {
                desktop: {
                    fontSize: '16px',
                    fontWeight: 'regular',
                    lineHeight: '24px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '16px',
                    fontWeight: 'regular',
                    lineHeight: '24px',
                    letterSpacing: '0'
                }
            },
            label: {
                desktop: {
                    fontSize: '16px',
                    fontWeight: 'bold',
                    lineHeight: '24px',
                    letterSpacing: '0'
                },
                mobile: {
                    fontSize: '16px',
                    fontWeight: 'bold',
                    lineHeight: '24px',
                    letterSpacing: '0'
                }
            }
        }
    },
    margin: {
        extrasmall: '0.5rem',
        small: '1rem',
        default: '1.5rem',
        large: '2rem',
        big: '4rem'
    },
    padding: {
        extrasmall: '0.5rem',
        small: '1rem',
        default: '1.5rem',
        large: '4rem',
        big: '8rem'
    },
    palette: {
        background: {
            header: '#f1fcff',
            footer: '#1F2937'
        },
        // #2164: Fußverlauf; Textfarbe leitet Footer.styles daraus ab (getContrastTextColor)
        footer: {
            background: '#001a2c',
            backgroundEnd: '#00416E'
        },
        link: {
            primary: '#8A2163'
        },
        button: {
            primary: {
                background: '#292929',
                border: '#292929',
                text: '#FFFFFF'
            },
            secondary: {
                background: '#EFCD00',
                border: '#EFCD00',
                text: '#292929'
            },
            tertiary: {
                background: 'transparent',
                border: '#292929',
                text: '#292929'
            },
            danger: {
                background: '#E22F2F',
                border: 'none',
                text: '#FFFFFF'
            }
        },
        default: {
            primary: '#00416E',
            secondary: '#37BA24',
            tertiary: '#EFCD00',
            white: '#ffffff',
            greyLight: '#f8f8f8',
            grey: '#d8d8d8',
            greyDark: '#687074',
            black: '#000000',
            error: '#DC0000',
            success: '#37BA24',
            info: '#00416E',
            warning: '#FFCD00'
        },
        status: {
            success: {
                bg: '#dcfce7',
                text: '#116b33',
                border: '#86efac'
            },
            error: {
                bg: '#fee2e2',
                text: '#b91c1c',
                border: '#fca5a5'
            },
            warning: {
                bg: '#fef9c3',
                text: '#854d0e',
                border: '#fde68a'
            },
            info: {
                bg: '#dbeafe',
                text: '#1d4ed8',
                border: '#93c5fd'
            },
            neutral: {
                bg: '#f3f4f6',
                text: '#4b5563',
                border: '#d1d5db'
            }
        },
        surface: {
            subtle: '#f9fafb',
            muted: '#f1f5f9',
            // #1749: Grund der schwebenden Knöpfe unten rechts — bleibt auch dunkel weiß
            floating: '#ffffff'
        },
        // Inline-Code: Rosa leicht abgedunkelt (vorher #d63384: 4,05:1 auf dem Grund, jetzt 5,3:1)
        code: {
            background: '#f1f3f5',
            text: '#c2255c'
        },
        border: {
            default: '#e5e7eb',
            strong: '#d1d5db'
        },
        sidebar: {
            gradientStart: '#001a2c',
            gradientEnd: '#00416e',
            text: '#ffffff',
            flyout: '#00416e'
        },
        text: {
            primary: '#212529',
            secondary: '#566069',
            muted: '#6b7280',
            onAccent: '#ffffff',
            onLight: '#00416e'
        },
        // #1199: Werte gemessen auf plastship.com (berechnete Stile der Tailwind-Klassen)
        site: {
            heading: '#222222',
            text: '#525252',
            muted: '#6C6C6C',
            border: '#CCD9E2',
            tint: '#E5ECF0',
            card: '#ffffff',
            blue: '#00416E',
            blueDark: '#003458',
            green: '#37BA24',
            greenDark: '#2C951D',
            greenText: '#278518',
            // #2129: Schrift auf grüner Chip-Fläche, 5,5 : 1 auf #C7ECC2
            greenOnTint: '#1E6612',
            greenTint: '#EBF8E9',
            logoPlate: '#ffffff',
            // #1954: dunkles Band = Primärblau; weiße Schrift 10,6 : 1
            navy: '#00416E',
            red: '#EF4444',
            shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            shadowHover: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #914: Zentrale z-Index-Skala.
 *
 * Vorher waren Werte über ~20 Komponenten verstreut (Modal 1000, QuickWheel/
 * Toast/ImageGallery 9999, Picker 10000, Tour 99999/100000) — jeder lokale
 * „eins höher"-Fix erzeugte den nächsten Wettlauf (Lookup-Dropdown 9999 lag
 * hinter dem Picker 10000). Alle Ebenen ≥ 100 kommen aus dieser Datei; der
 * Drift-Guard (tests/lib/zIndexScale.test.ts) lehnt Hardcodes ≥ 1000 ab.
 *
 * Ebenen von unten nach oben:
 */ __turbopack_context__.s([
    "Z_INDEX",
    ()=>Z_INDEX
]);
const Z_INDEX = {
    /** normale Inhalte, die nur ihre Nachbarn überlagern */ base: 1,
    /** sticky Header/Leisten im Seitenfluss */ sticky: 100,
    /**
   * #1149: nicht modale Dokument-Vorschau über der Inhaltsspalte — UNTER dem
   * mobilen Drawer (200, WithSidebar), damit der Drawer neben der Vorschau
   * bedienbar bleibt und sie ihn nie verdeckt
   */ viewer: 150,
    /** nicht portalierte Dropdown-Panels innerhalb der Seite */ dropdown: 500,
    /** schwebende Trigger (QuickWheel, BottomTabBar, Chat-Launcher) — UNTER Overlays */ floating: 900,
    /** Modale, Overlays, Side-Panels, Formular-Overlays */ overlay: 1000,
    /** Dialoge, die über anderen Overlays liegen müssen (Related-List-Picker, Lightbox) */ overlayTop: 1100,
    /** portalierte Dropdown-/Autocomplete-Panels — über jedem Dialog, unter Toasts */ popover: 1200,
    /** Toasts */ toast: 2000,
    /** Onboarding-Tour: Highlight und Tooltip ganz oben */ tour: 9000,
    tourTooltip: 9001
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/AppLink/AppLink.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
const Root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "AppLink.styles__Root",
    componentId: "sc-4d47490-0"
})`
  color: ${(props)=>props.theme.palette.link.primary};
  text-decoration: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:visited {
    color: ${(props)=>props.theme.palette.link.primary};
  }

  &:active {
    color: ${(props)=>props.theme.palette.link.primary};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/AppLink/AppLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppLink",
    ()=>AppLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AppLink$2f$AppLink$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/AppLink/AppLink.styles.ts [app-client] (ecmascript)");
;
;
const AppLink = (props)=>{
    const { children, href, dataTestId, className, dataUnnamed } = props;
    const unnamed = Boolean(dataUnnamed || props['data-unnamed']);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AppLink$2f$AppLink$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        href: href,
        className: className,
        "data-testid": dataTestId || 'app-link-root',
        "data-unnamed": unnamed ? 'true' : undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/AppLink/AppLink.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = AppLink;
;
var _c;
__turbopack_context__.k.register(_c, "AppLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Button/Button.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconLeft",
    ()=>IconLeft,
    "IconRight",
    ()=>IconRight,
    "Root",
    ()=>Root,
    "Span",
    ()=>Span,
    "buttonBase",
    ()=>buttonBase,
    "buttonModifier",
    ()=>buttonModifier,
    "buttonOverrides",
    ()=>buttonOverrides
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
'use client';
;
;
const buttonBase = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-sizing: border-box;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-family: Arial, sans-serif;
  font-size: 13.3333px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: normal;
  text-transform: none;
  text-align: center;
  transition: all 0.2s ease-in-out;
`;
const buttonModifier = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${({ $modifier })=>{
    switch($modifier){
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY:
            // #1537: öffentliche Flächen setzen --button-primary-bg (sitePrimaryButton in
            // theme/site.ts) — dort ist die Fläche dunkler, damit die weiße Schrift 4,5 : 1
            // erreicht. Ohne die Variablen gelten die bisherigen Farben.
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: var(--button-primary-bg, ${({ theme })=>theme.palette.default.secondary});
          color: ${({ theme })=>theme.palette.default.white};
          --button-fg: ${({ theme })=>theme.palette.default.white};
          &:hover:not(:disabled) {
            background-color: var(--button-primary-bg-hover, #2da01d);
          }
        `;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].SECONDARY:
            // #392: Navy bleibt in beiden Themes — Text darf nicht mit `default.white` invertieren
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: #003458;
          color: ${({ theme })=>theme.palette.text.onAccent};
          --button-fg: ${({ theme })=>theme.palette.text.onAccent};
          &:hover:not(:disabled) {
            background-color: #002a47;
          }
        `;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].TERTIARY:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: transparent;
          color: ${({ theme })=>theme.palette.default.primary};
          --button-fg: ${({ theme })=>theme.palette.default.primary};
          &:hover:not(:disabled) {
            background-color: ${({ theme })=>`${theme.palette.default.primary}1A`};
          }
        `;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].DANGER:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: #e22f2f;
          color: ${({ theme })=>theme.palette.text.onAccent};
          --button-fg: ${({ theme })=>theme.palette.text.onAccent};
          &:hover:not(:disabled) {
            background-color: #c72727;
          }
        `;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].WARNING:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: ${({ theme })=>theme.palette.default.warning};
          color: #292929;
          --button-fg: #292929;
          &:hover:not(:disabled) {
            background-color: #e6b800;
          }
        `;
        default:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          background-color: ${({ theme })=>theme.palette.default.secondary};
          color: ${({ theme })=>theme.palette.default.white};
          --button-fg: ${({ theme })=>theme.palette.default.white};
        `;
    }
}}
`;
const buttonOverrides = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  ${({ $background })=>$background && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      background-color: ${$background};
    `}

  ${({ $color })=>$color && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      background-color: ${$color};
    `}

  ${({ $isActive, $color })=>$isActive && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      position: relative;
      background-color: ${$color || '#003458'};
      opacity: 1;

      &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 3px;
        background-color: ${$color || '#003458'};
        border-radius: 2px;
      }
    `}
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Button.styles__Root",
    componentId: "sc-1d3302a1-0"
})`
  ${buttonBase}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${buttonModifier}
  ${buttonOverrides}
`;
const Span = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Button.styles__Span",
    componentId: "sc-1d3302a1-1"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: inherit;
`;
const IconLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Button.styles__IconLeft",
    componentId: "sc-1d3302a1-2"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
const IconRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Button.styles__IconRight",
    componentId: "sc-1d3302a1-3"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Button/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buttonIconColor",
    ()=>buttonIconColor,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const buttonIconColor = (modifier)=>{
    switch(modifier){
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])('#37ba24') ? '#ffffff' : '#000000';
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].SECONDARY:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])('#003458') ? '#ffffff' : '#000000';
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].TERTIARY:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])('#ffffff') ? '#ffffff' : '#000000';
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].DANGER:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])('#e22f2f') ? '#ffffff' : '#000000';
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].WARNING:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])('#ffcd00') ? '#ffffff' : '#000000';
        default:
            return '#000000';
    }
};
const Button = ({ children, modifier = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY, buttonType = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonTypes"].BUTTON, icon, iconAlign, loading = false, disabled = false, background, onClick, className, dataTestId = 'button-root', isActive, tooltip, color })=>{
    const showLoadingIcon = loading && (iconAlign || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].RIGHT);
    const showIcon = icon && !loading && iconAlign;
    const iconWithColor = icon ? /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(icon, {
        color: buttonIconColor(modifier)
    }) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        "data-modifier": modifier,
        disabled: disabled || loading,
        type: buttonType,
        $modifier: modifier,
        onClick: onClick,
        $background: background,
        $icon: icon !== undefined,
        $isActive: isActive,
        $color: color,
        title: tooltip,
        children: [
            (showLoadingIcon || showIcon) && iconAlign === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].LEFT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLeft"], {
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Button/Button.tsx",
                    lineNumber: 67,
                    columnNumber: 30
                }, ("TURBOPACK compile-time value", void 0)) : iconWithColor
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Button/Button.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Span"], {
                $background: background,
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Button/Button.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            (showLoadingIcon || showIcon) && iconAlign === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAligns"].RIGHT && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconRight"], {
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Button/Button.tsx",
                    lineNumber: 73,
                    columnNumber: 31
                }, ("TURBOPACK compile-time value", void 0)) : iconWithColor
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Button/Button.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            loading && !iconAlign && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconRight"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Button/Button.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Button/Button.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Button/Button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
const __TURBOPACK__default__export__ = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Button/Button.tsx [app-client] (ecmascript) <export default as Button>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.tsx [app-client] (ecmascript)");
}),
"[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonModifier",
    ()=>ButtonModifier,
    "ButtonTypes",
    ()=>ButtonTypes,
    "IconAligns",
    ()=>IconAligns
]);
var ButtonTypes = /*#__PURE__*/ function(ButtonTypes) {
    ButtonTypes["BUTTON"] = "button";
    ButtonTypes["SUBMIT"] = "submit";
    ButtonTypes["RESET"] = "reset";
    return ButtonTypes;
}({});
var ButtonModifier = /*#__PURE__*/ function(ButtonModifier) {
    ButtonModifier["PRIMARY"] = "primary";
    ButtonModifier["SECONDARY"] = "secondary";
    ButtonModifier["TERTIARY"] = "tertiary";
    ButtonModifier["DANGER"] = "danger";
    ButtonModifier["WARNING"] = "warning";
    return ButtonModifier;
}({});
var IconAligns = /*#__PURE__*/ function(IconAligns) {
    IconAligns["LEFT"] = "left";
    IconAligns["RIGHT"] = "right";
    return IconAligns;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Button/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/IconLoadingSpinner.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Circle",
    ()=>Circle,
    "Root",
    ()=>Root,
    "Spinner",
    ()=>Spinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconLoadingSpinner.styles__Root",
    componentId: "sc-d3f00ce6-0"
})`
  @keyframes spinner_YpZS {
    0% {
      stroke-dasharray: 0 150;
      stroke-dashoffset: 0;
    }
    47.5% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -16;
    }
    95%,
    100% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -59;
    }
  }
`;
const Spinner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].g.withConfig({
    displayName: "IconLoadingSpinner.styles__Spinner",
    componentId: "sc-d3f00ce6-1"
})`
  transform-origin: center;
  animation: spinner 2s linear infinite;
  @keyframes spinner {
    100% {
      transform: rotate(360deg);
    }
  }
`;
const Circle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].circle.withConfig({
    displayName: "IconLoadingSpinner.styles__Circle",
    componentId: "sc-d3f00ce6-2"
})`
  stroke-linecap: round;
  animation: spinnercircle 1.5s ease-in-out infinite;
  @keyframes spinnercircle {
    0% {
      stroke-dasharray: 0 150;
      stroke-dashoffset: 0;
    }
    47.5% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -16;
    }
    95%,
    100% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -59;
    }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/IconLoadingSpinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconLoadingSpinner",
    ()=>IconLoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/IconLoadingSpinner.styles.ts [app-client] (ecmascript)");
;
;
const IconLoadingSpinner = (props)=>{
    const { inverted = false } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        className: props['className'],
        "data-testid": 'icon-loading-spinner-root',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {
            stroke: inverted ? '#ffffff' : 'currentColor',
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                cx: "12",
                cy: "12",
                r: "9.5",
                fill: "none",
                strokeWidth: "3",
                stroke: inverted ? '#ffffff' : 'currentColor'
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/IconLoadingSpinner.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/IconLoadingSpinner.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/IconLoadingSpinner.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconLoadingSpinner;
;
var _c;
__turbopack_context__.k.register(_c, "IconLoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/IconLoadingSpinner.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLoadingSpinner"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavLink",
    ()=>NavLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SiteLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localizeHref$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/localizeHref.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/externalLink.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const NavLink = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef(_c = _s(function NavLink({ prefetch = false, href, target, rel, referrerPolicy, ...rest }, ref) {
    _s();
    const { locale, missing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteLocaleContext"])();
    const fehlt = locale ? missing[locale] : undefined;
    const ziel = typeof href === 'string' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localizeHref$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeHref"])(href, locale, fehlt) : href && typeof href.pathname === 'string' ? {
        ...href,
        pathname: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localizeHref$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeHref"])(href.pathname, locale, fehlt)
    } : href;
    const linkZiel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["externalLinkProps"])(typeof href === 'string' ? href : undefined, {
        target,
        rel,
        referrerPolicy
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        ref: ref,
        prefetch: prefetch,
        href: ziel,
        ...linkZiel,
        ...rest
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx",
        lineNumber: 43,
        columnNumber: 10
    }, this);
}, "1V8NwtYMBoYtBfBdP42EPdVyncI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteLocaleContext"]
    ];
})), "1V8NwtYMBoYtBfBdP42EPdVyncI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteLocaleContext"]
    ];
});
_c1 = NavLink;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavLink$React.forwardRef");
__turbopack_context__.k.register(_c1, "NavLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Aktionen",
    ()=>Aktionen,
    "Inhalt",
    ()=>Inhalt,
    "Root",
    ()=>Root,
    "Text",
    ()=>Text,
    "Texte",
    ()=>Texte,
    "Titel",
    ()=>Titel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/consent/consent.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CookieBanner.styles__Root",
    componentId: "sc-2de89d67-0"
})`
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sitePrimaryButton"]}
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].floating + 1};
  max-height: 33vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding: ${({ theme })=>theme.padding.extrasmall} ${({ theme })=>theme.padding.default};
  padding-bottom: calc(${({ theme })=>theme.padding.extrasmall} + env(safe-area-inset-bottom, 0px));
  background: ${({ theme })=>theme.palette.default.white};
  color: ${({ theme })=>theme.palette.default.black};
  border-top: 1px solid ${({ theme })=>theme.palette.default.grey};
  box-shadow: 0 -0.25rem 1rem rgba(0, 0, 0, 0.08);

  :root[data-theme='dark'] & {
    background: #1f2937;
    color: #ffffff;
    border-top-color: #4a5568;
  }

  /* #1473: Entscheidung steht schon im Cookie — Server-HTML des Banners nie zeigen */
  html[${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_MARKER_ATTRIBUTE"]}] & {
    display: none;
  }

  @media (max-width: 800px) {
    padding-inline: ${({ theme })=>theme.padding.small};
  }
`;
const Inhalt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CookieBanner.styles__Inhalt",
    componentId: "sc-2de89d67-1"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme })=>theme.margin.small};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: stretch;
    gap: ${({ theme })=>theme.margin.extrasmall};
  }
`;
const Texte = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "CookieBanner.styles__Texte",
    componentId: "sc-2de89d67-2"
})`
  min-width: 0;
  flex: 1 1 auto;
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.4;
`;
const Titel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].strong.withConfig({
    displayName: "CookieBanner.styles__Titel",
    componentId: "sc-2de89d67-3"
})`
  font-weight: 600;
  margin-right: ${({ theme })=>theme.margin.extrasmall};
`;
const Text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "CookieBanner.styles__Text",
    componentId: "sc-2de89d67-4"
})`
  a {
    color: ${({ theme })=>theme.palette.default.primary};
    text-decoration: underline;
  }

  :root[data-theme='dark'] & a {
    color: #93c5fd;
  }
`;
const Aktionen = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CookieBanner.styles__Aktionen",
    componentId: "sc-2de89d67-5"
})`
  display: flex;
  gap: ${({ theme })=>theme.margin.extrasmall};
  flex: 0 0 auto;

  > * {
    flex: 1 1 0;
    white-space: nowrap;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COOKIE_BUTTON_MODIFIER",
    ()=>COOKIE_BUTTON_MODIFIER,
    "CookieBanner",
    ()=>CookieBanner,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.tsx [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$CookieBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const COOKIE_BUTTON_MODIFIER = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY;
function CookieBanner({ title, text, acceptAllLabel, necessaryOnlyLabel, onAcceptAll, onNecessaryOnly, dataTestId = 'cookie-banner' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$CookieBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        role: "dialog",
        "aria-live": "polite",
        "aria-label": typeof title === 'string' ? title : undefined,
        "data-testid": dataTestId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$CookieBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Inhalt"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$CookieBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Texte"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$CookieBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Titel"], {
                            "data-testid": `${dataTestId}-title`,
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$CookieBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                            "data-testid": `${dataTestId}-text`,
                            children: text
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$CookieBanner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Aktionen"], {
                    "data-testid": `${dataTestId}-actions`,
                    "data-equal-weight": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            modifier: COOKIE_BUTTON_MODIFIER,
                            onClick: onNecessaryOnly,
                            dataTestId: `${dataTestId}-necessary`,
                            children: necessaryOnlyLabel
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                            modifier: COOKIE_BUTTON_MODIFIER,
                            onClick: onAcceptAll,
                            dataTestId: `${dataTestId}-accept`,
                            children: acceptAllLabel
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c = CookieBanner;
const __TURBOPACK__default__export__ = CookieBanner;
var _c;
__turbopack_context__.k.register(_c, "CookieBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieConsent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookieConsent",
    ()=>CookieConsent,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AppLink$2f$AppLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/AppLink/AppLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$CookieBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieBanner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CookieBanner/consent.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/consent/consent.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CookieConsent() {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const [offen, setOffen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookieConsent.useEffect": ()=>{
            setOffen((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["leseConsent"])() === null);
            // #2141: „Cookie-Einstellungen“ im Footer öffnet den Hinweis erneut (Widerruf)
            const oeffnen = {
                "CookieConsent.useEffect.oeffnen": ()=>setOffen(true)
            }["CookieConsent.useEffect.oeffnen"];
            window.addEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_OPEN_EVENT"], oeffnen);
            return ({
                "CookieConsent.useEffect": ()=>window.removeEventListener(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_OPEN_EVENT"], oeffnen)
            })["CookieConsent.useEffect"];
        }
    }["CookieConsent.useEffect"], []);
    const entscheiden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CookieConsent.useCallback[entscheiden]": (consent)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["schreibeConsent"])(consent);
            setOffen(false);
        }
    }["CookieConsent.useCallback[entscheiden]"], []);
    if (!offen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CookieBanner$2f$CookieBanner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CookieBanner"], {
        title: tr('cookieBanner.title', {
            defaultValue: 'Cookies auf plastship'
        }),
        text: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                tr('cookieBanner.consentText', {
                    defaultValue: 'Notwendige Cookies für Anmeldung, Sicherheit und Sprache. Mit „Alle akzeptieren“ zählen wir zusätzlich Seitenaufrufe anonym und messen Ladezeiten. Änderbar unter „Cookie-Einstellungen“.'
                }),
                ' ',
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AppLink$2f$AppLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppLink"], {
                    href: "/privacy",
                    dataTestId: "cookie-banner-privacy",
                    children: tr('cookieBanner.privacy', {
                        defaultValue: 'Datenschutzerklärung'
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieConsent.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieConsent.tsx",
            lineNumber: 45,
            columnNumber: 9
        }, this),
        acceptAllLabel: tr('cookieBanner.acceptAll', {
            defaultValue: 'Alle akzeptieren'
        }),
        necessaryOnlyLabel: tr('cookieBanner.necessaryOnly', {
            defaultValue: 'Nur notwendige'
        }),
        onAcceptAll: ()=>entscheiden('all'),
        onNecessaryOnly: ()=>entscheiden('necessary')
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/CookieBanner/CookieConsent.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_s(CookieConsent, "trYlPIIDplRE5YbUo7QBbhGF/tw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = CookieConsent;
const __TURBOPACK__default__export__ = CookieConsent;
var _c;
__turbopack_context__.k.register(_c, "CookieConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CookieBanner/consent.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "leseConsent",
    ()=>leseConsent,
    "oeffneConsentEinstellungen",
    ()=>oeffneConsentEinstellungen,
    "schreibeConsent",
    ()=>schreibeConsent
]);
/**
 * #1133: Browser-Seite der Einwilligung — liest/schreibt den Cookie. Der
 * Kern (Name, Parsen, Zwecke) liegt in lib/consent, damit Middleware, API
 * und Sentry-Init dieselbe Quelle nutzen (#1142).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/consent/consent.ts [app-client] (ecmascript)");
;
;
function leseConsent() {
    if (typeof document === 'undefined') return null;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentAusCookieHeader"])(document.cookie);
    } catch  {
        return null;
    }
}
function schreibeConsent(consent) {
    if (typeof document === 'undefined') return;
    const sicher = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_COOKIE"]}=${consent}; Max-Age=${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_MAX_AGE_SEKUNDEN"]}; Path=/; SameSite=Lax${sicher}`;
}
function oeffneConsentEinstellungen() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    document.documentElement.removeAttribute(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_MARKER_ATTRIBUTE"]);
    window.dispatchEvent(new Event(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONSENT_OPEN_EVENT"]));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ToastContainer/ToastContainer.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ToastContainer.styles__Root",
    componentId: "sc-b5ecfd62-0"
})`
  position: fixed;
  top: 16px;
  right: 16px;
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].toast};
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;

  > * {
    pointer-events: auto;
  }

  @media screen and (max-width: ${(props)=>props.theme.device.smartphone}) {
    top: 0;
    right: 0;
    left: 0;
    align-items: center;
    padding: 16px;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ToastContainer/ToastContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastContainer",
    ()=>ToastContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/ToastContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ToastContainer$2f$ToastContainer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ToastContainer/ToastContainer.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// #1478: Toast-Ansicht als eigener Chunk — nicht im ersten JavaScript jeder
// Seite, aber im Leerlauf nach dem Laden vorgeladen, damit auch ein kurzer
// Toast gleich nach dem Seitenaufruf nicht auf den Chunk wartet
const ladeToast = ()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Atom/Toast/index.ts [app-client] (ecmascript, async loader)").then((m)=>m.Toast);
const Toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ladeToast, {
    ssr: false
});
_c = Toast;
/** Rückfall für Browser ohne requestIdleCallback (Safari). */ const LEERLAUF_ERSATZ_MS = 1500;
const EXIT_ANIMATION_DURATION = 300;
const ToastContainer = ({ dataTestId = 'toast-container-root', className })=>{
    _s();
    const { toasts, dismissToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [exitingIds, setExitingIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const exitTimersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastContainer.useEffect": ()=>{
            const w = window;
            const vorladen = {
                "ToastContainer.useEffect.vorladen": ()=>void ladeToast().catch({
                        "ToastContainer.useEffect.vorladen": ()=>undefined
                    }["ToastContainer.useEffect.vorladen"])
            }["ToastContainer.useEffect.vorladen"];
            if (w.requestIdleCallback && w.cancelIdleCallback) {
                const id = w.requestIdleCallback(vorladen, {
                    timeout: 5000
                });
                return ({
                    "ToastContainer.useEffect": ()=>w.cancelIdleCallback?.(id)
                })["ToastContainer.useEffect"];
            }
            const timer = setTimeout(vorladen, LEERLAUF_ERSATZ_MS);
            return ({
                "ToastContainer.useEffect": ()=>clearTimeout(timer)
            })["ToastContainer.useEffect"];
        }
    }["ToastContainer.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastContainer.useEffect": ()=>{
            setMounted(true);
            const timers = exitTimersRef.current;
            return ({
                "ToastContainer.useEffect": ()=>{
                    timers.forEach({
                        "ToastContainer.useEffect": (timer)=>clearTimeout(timer)
                    }["ToastContainer.useEffect"]);
                    timers.clear();
                }
            })["ToastContainer.useEffect"];
        }
    }["ToastContainer.useEffect"], []);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastContainer.useCallback[handleClose]": (id)=>{
            // Start exit animation
            setExitingIds({
                "ToastContainer.useCallback[handleClose]": (prev)=>new Set(prev).add(id)
            }["ToastContainer.useCallback[handleClose]"]);
            // After animation completes, actually remove the toast
            const timer = setTimeout({
                "ToastContainer.useCallback[handleClose].timer": ()=>{
                    setExitingIds({
                        "ToastContainer.useCallback[handleClose].timer": (prev)=>{
                            const next = new Set(prev);
                            next.delete(id);
                            return next;
                        }
                    }["ToastContainer.useCallback[handleClose].timer"]);
                    dismissToast(id);
                    exitTimersRef.current.delete(id);
                }
            }["ToastContainer.useCallback[handleClose].timer"], EXIT_ANIMATION_DURATION);
            exitTimersRef.current.set(id, timer);
        }
    }["ToastContainer.useCallback[handleClose]"], [
        dismissToast
    ]);
    if (!mounted) return null;
    if (toasts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ToastContainer$2f$ToastContainer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-testid": dataTestId,
        className: className,
        children: toasts.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toast, {
                item: item,
                onClose: handleClose,
                isExiting: exitingIds.has(item.id),
                dataTestId: `toast-item-${item.id}`
            }, item.id, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/ToastContainer/ToastContainer.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/ToastContainer/ToastContainer.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)), document.body);
};
_s(ToastContainer, "o5DMU2cuCwxtqjtJ23XAAuj55wI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c1 = ToastContainer;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Toast");
__turbopack_context__.k.register(_c1, "ToastContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Utility/ClientOnly.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientOnly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
function ClientOnly({ children, fallback = null }) {
    _s();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientOnly.useEffect": ()=>{
            setIsClient(true);
        }
    }["ClientOnly.useEffect"], []);
    // Return fallback (or null) during SSR and initial hydration
    if (!isClient) {
        return fallback ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: fallback
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Utility/ClientOnly.tsx",
            lineNumber: 28,
            columnNumber: 23
        }, this) : null;
    }
    // After hydration is complete, render the actual content
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Utility/ClientOnly.tsx",
        lineNumber: 32,
        columnNumber: 10
    }, this);
}
_s(ClientOnly, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = ClientOnly;
var _c;
__turbopack_context__.k.register(_c, "ClientOnly");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/entityHelpers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTITY_TYPE_LABELS_DE",
    ()=>ENTITY_TYPE_LABELS_DE,
    "OWN_PROFILE_PATH",
    ()=>OWN_PROFILE_PATH,
    "SELF_USER_ID",
    ()=>SELF_USER_ID,
    "getEntityDetailPath",
    ()=>getEntityDetailPath,
    "getEntityDisplayName",
    ()=>getEntityDisplayName,
    "getEntityTypeLabel",
    ()=>getEntityTypeLabel
]);
/**
 * Entity Helper Utilities
 *
 * Provides utilities for extracting display names and building detail page URLs
 * for all entity types (Salesforce + Postgres).
 *
 * Used by the toast notification system to enrich notifications with entity context.
 */ // ============================================================================
// Entity Detail Path Map
// ============================================================================
/**
 * Maps entity type to its detail page URL prefix.
 * The full detail URL is `${prefix}/${entityId}/`.
 *
 * IMPORTANT: These are the ACTUAL Next.js page routes (singular form),
 * NOT the list page paths (which are plural). Keep in sync with `app/` directory structure.
 */ const ENTITY_DETAIL_PATH_MAP = {
    // Salesforce entities
    Account: '/account',
    Contact: '/contact',
    Opportunity: '/opportunity',
    Case: '/case',
    Task: '/task',
    Order: '/order',
    OrderItem: '/orderitem',
    Project: '/project',
    Invoice: '/invoice',
    MaterialAnalysis: '/material-analysis',
    MaterialProposal: '/material-proposal',
    MonitoredMaterial: '/monitored-material',
    Requirement: '/requirement',
    SampleFeedback: '/sample-feedback',
    SampleSending: '/sample-sending',
    SupplierAudit: '/supplier-audit',
    Onboarding: '/onboarding',
    ContactHandover: '/contact-handover',
    CompanyCertificate: '/company-certificate',
    ProductionSite: '/production-site',
    Product: '/product',
    RecyclateGrade: '/recyclate-grade',
    RecyclateCompatibility: '/recyclate-compatibility',
    AktuellerPreisUndVerfugbarkeit: '/aktueller-preis-und-verfugbarkeit',
    Prozessfeedback: '/process-feedback',
    // Postgres entities
    Notification: '/notification-management',
    // Non-Salesforce special entities
    User: '/user',
    RIGKAccount: '/rigk',
    Verification: '/verification'
};
const SELF_USER_ID = 'self';
const OWN_PROFILE_PATH = '/profile/';
function getEntityDetailPath(entityType, entityId) {
    if (entityType === 'User' && entityId === SELF_USER_ID) return OWN_PROFILE_PATH;
    const prefix = ENTITY_DETAIL_PATH_MAP[entityType];
    if (!prefix) return null;
    return `${prefix}/${entityId}/`;
}
// ============================================================================
// Entity Display Name Extraction
// ============================================================================
/**
 * Maps entity type to the field(s) used for display name.
 * First match wins. Falls back to 'Name' if not listed.
 */ const ENTITY_NAME_FIELDS = {
    Case: [
        'CaseNumber',
        'Subject'
    ],
    Task: [
        'Subject'
    ],
    Order: [
        'OrderNumber',
        'Name'
    ],
    OrderItem: [
        'OrderItemNumber',
        'Name'
    ],
    Contact: [
        'Name',
        'LastName'
    ],
    Invoice: [
        'Name',
        'Rechnungsnummer__c'
    ],
    Notification: [
        'titleDefault'
    ],
    User: [
        'name',
        'email'
    ],
    RIGKAccount: [
        'Name'
    ]
};
function getEntityDisplayName(entityType, data) {
    if (!data) return entityType;
    const nameFields = ENTITY_NAME_FIELDS[entityType] || [
        'Name'
    ];
    for (const field of nameFields){
        const value = data[field];
        if (value && typeof value === 'string' && value.trim()) {
            return value.trim();
        }
    }
    // Fallback: try 'Name' if not already tried
    if (!nameFields.includes('Name') && data.Name && typeof data.Name === 'string') {
        return data.Name;
    }
    return entityType;
}
const ENTITY_TYPE_LABELS_DE = {
    Account: 'Account',
    Contact: 'Kontakt',
    Opportunity: 'Opportunity',
    Case: 'Kundenvorgang',
    Task: 'Aufgabe',
    Order: 'Auftrag',
    OrderItem: 'Auftragsposition',
    Project: 'Projekt',
    Invoice: 'Rechnung',
    MaterialAnalysis: 'Materialanalyse',
    MaterialProposal: 'Materialvorschlag',
    MonitoredMaterial: 'Überwachtes Material',
    Requirement: 'Bedarf',
    SampleFeedback: 'Musterfeedback',
    SampleSending: 'Musterversand',
    SupplierAudit: 'Lieferantenaudit',
    Onboarding: 'Onboarding',
    ContactHandover: 'Kontaktübergabe',
    CompanyCertificate: 'Firmenzertifikat',
    ProductionSite: 'Produktionsstätte',
    Product: 'Produkt',
    RecyclateGrade: 'Rezyklat-Grade',
    RecyclateCompatibility: 'Rezyklat-Kompatibilität',
    AktuellerPreisUndVerfugbarkeit: 'Aktueller Preis',
    Notification: 'Benachrichtigung',
    User: 'Benutzer',
    RIGKAccount: 'RIGK-Account',
    Verification: 'Verifizierung'
};
function getEntityTypeLabel(entityType) {
    return ENTITY_TYPE_LABELS_DE[entityType] || entityType;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/AppShellActiveContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellActiveContext",
    ()=>AppShellActiveContext,
    "useAppShellActive",
    ()=>useAppShellActive
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const AppShellActiveContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(true);
function useAppShellActive() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AppShellActiveContext);
}
_s(useAppShellActive, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/CmsNavigationSeedContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CmsNavigationSeedProvider",
    ()=>CmsNavigationSeedProvider,
    "useCmsNavigationSeed",
    ()=>useCmsNavigationSeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 * #1563: Menüs der öffentlichen Seiten vom Server — das Root-Layout liest
 * `cms_navigation` (Kurzzeit-Cache) und reicht sie hierüber an Header, Gästemenü
 * und Footer. So stehen im Server-HTML die Links, die die Redaktion gepflegt
 * hat, nicht die eingebauten Vorgaben, und der Browser spart die Abfrage.
 * `null` (App-Routen, Datenbank nicht erreichbar): der Hook fragt wie bisher
 * `/api/cms/navigation/public/` ab.
 */ const CmsNavigationSeedContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function CmsNavigationSeedProvider({ seed, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CmsNavigationSeedContext.Provider, {
        value: seed,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/CmsNavigationSeedContext.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = CmsNavigationSeedProvider;
function useCmsNavigationSeed() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CmsNavigationSeedContext);
}
_s(useCmsNavigationSeed, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "CmsNavigationSeedProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/PublicShellProviders.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PublicShellProviders",
    ()=>PublicShellProviders,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$routeProtection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth/routeProtection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/AppShellActiveContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/**
 * App-Shell nachladen. Kein next/dynamic: dessen Suspense-Grenze zeigte beim
 * Umschalten kurz eine leere Seite. So bleibt der bisherige Baum stehen, bis
 * das Modul da ist, und wird dann in einem Schritt ersetzt. (Das Modul cacht
 * der Bundler; ein zweiter Aufruf kostet keine Anfrage.)
 */ function ladeAppShell() {
    return __turbopack_context__.A("[project]/apps/web/src/app/context/AppShellProviders.tsx [app-client] (ecmascript, async loader)").then((m)=>m.AppShellProviders);
}
function PublicShellProviders({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? '/';
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const oeffentlich = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$routeProtection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPublicRoute"])(pathname);
    // Pfad, auf dem die Sitzung zuerst gesehen wurde (null = noch keine)
    const [sitzungSeit, setSitzungSeit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    if (status === 'authenticated' && sitzungSeit === null) setSitzungSeit(pathname);
    const brauchtApp = !oeffentlich || sitzungSeit !== null && sitzungSeit !== pathname;
    const [AppShell, setAppShell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Mit Sitzung den Chunk schon vorladen — umgeschaltet wird erst beim Navigieren
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PublicShellProviders.useEffect": ()=>{
            if (status === 'authenticated') void ladeAppShell().catch({
                "PublicShellProviders.useEffect": ()=>undefined
            }["PublicShellProviders.useEffect"]);
        }
    }["PublicShellProviders.useEffect"], [
        status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PublicShellProviders.useEffect": ()=>{
            if (!brauchtApp || AppShell) return undefined;
            let aktiv = true;
            void ladeAppShell().then({
                "PublicShellProviders.useEffect": (shell)=>{
                    if (aktiv) setAppShell({
                        "PublicShellProviders.useEffect": ()=>shell
                    }["PublicShellProviders.useEffect"]);
                }
            }["PublicShellProviders.useEffect"]);
            return ({
                "PublicShellProviders.useEffect": ()=>{
                    aktiv = false;
                }
            })["PublicShellProviders.useEffect"];
        }
    }["PublicShellProviders.useEffect"], [
        brauchtApp,
        AppShell
    ]);
    if (AppShell) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppShell, {
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/PublicShellProviders.tsx",
        lineNumber: 64,
        columnNumber: 24
    }, this);
    if (!oeffentlich) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShellActiveContext"].Provider, {
        value: false,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/PublicShellProviders.tsx",
        lineNumber: 66,
        columnNumber: 10
    }, this);
}
_s(PublicShellProviders, "bo1YTExLV/kX1u9mFTqXjxh/AXY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = PublicShellProviders;
const __TURBOPACK__default__export__ = PublicShellProviders;
var _c;
__turbopack_context__.k.register(_c, "PublicShellProviders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/ShellProviders.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShellProviders",
    ()=>ShellProviders,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PublicShellProviders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/PublicShellProviders.tsx [app-client] (ecmascript)");
;
'use client';
;
;
;
/**
 * #1478: App-Shell als eigener Chunk. Das Root-Layout darf AppShellProviders
 * nicht direkt importieren: Next lädt alle Client-Module, die ein Layout
 * importiert, auf jeder Seite — gerendert oder nicht (gemessen). next/dynamic
 * dagegen bindet den Chunk nur ein, wenn er beim Server-Rendering tatsächlich
 * gerendert wurde; für App-Routen also wie bisher vor der Hydration.
 */ const AppShellProviders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/context/AppShellProviders.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/context/AppShellProviders.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c = AppShellProviders;
function ShellProviders({ kind, children, initialUserContext = null }) {
    if (kind === 'app') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AppShellProviders, {
        initialUserContext: initialUserContext,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/ShellProviders.tsx",
        lineNumber: 31,
        columnNumber: 12
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PublicShellProviders$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PublicShellProviders"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/ShellProviders.tsx",
        lineNumber: 32,
        columnNumber: 10
    }, this);
}
_c1 = ShellProviders;
const __TURBOPACK__default__export__ = ShellProviders;
var _c, _c1;
__turbopack_context__.k.register(_c, "AppShellProviders");
__turbopack_context__.k.register(_c1, "ShellProviders");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/SidebarContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarProvider",
    ()=>SidebarProvider,
    "useOptionalSidebar",
    ()=>useOptionalSidebar,
    "useSidebar",
    ()=>useSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
const SidebarContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
/** #1074: localStorage-Schlüssel der offenen Nav-Gruppen (JSON-Array von Pfaden). */ const NAV_GROUPS_STORAGE_KEY = 'plastship.sidebar.openGroups';
/** #1074: Zuletzt automatisch geöffnete Route (roher Pfad). */ const NAV_AUTO_OPEN_STORAGE_KEY = 'plastship.sidebar.autoOpenPath';
function SidebarProvider({ children }) {
    _s();
    // Left sidebar state
    const [isLeftSidebarOpen, setIsLeftSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [leftSidebarContent, setLeftSidebarContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Persist sidebar scroll position across page navigations
    const leftSidebarScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    // #1074: Gruppenzustand. Initial leer, damit Server und Client gleich
    // rendern; der gespeicherte Stand kommt erst nach dem Mount aus localStorage.
    const [openNavGroups, setOpenNavGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SidebarProvider.useState": ()=>new Set()
    }["SidebarProvider.useState"]);
    const [navGroupsHydrated, setNavGroupsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [navAutoOpenPath, setNavAutoOpenPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SidebarProvider.useEffect": ()=>{
            try {
                const raw = window.localStorage.getItem(NAV_GROUPS_STORAGE_KEY);
                const parsed = raw ? JSON.parse(raw) : null;
                if (Array.isArray(parsed)) {
                    setOpenNavGroups(new Set(parsed.filter({
                        "SidebarProvider.useEffect": (p)=>typeof p === 'string'
                    }["SidebarProvider.useEffect"])));
                }
                setNavAutoOpenPath(window.localStorage.getItem(NAV_AUTO_OPEN_STORAGE_KEY));
            } catch  {
            // Private Mode, gesperrter Storage, kaputter Inhalt: leer starten
            } finally{
                // Auch ohne lesbaren Storage ist der Startzustand jetzt endgültig —
                // sonst bliebe Auto-Open für immer gesperrt.
                setNavGroupsHydrated(true);
            }
        }
    }["SidebarProvider.useEffect"], []);
    const persistNavGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[persistNavGroups]": (next)=>{
            try {
                window.localStorage.setItem(NAV_GROUPS_STORAGE_KEY, JSON.stringify(Array.from(next)));
            } catch  {
            // Schreiben darf scheitern, der Zustand lebt weiter im Speicher
            }
        }
    }["SidebarProvider.useCallback[persistNavGroups]"], []);
    const toggleNavGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[toggleNavGroup]": (href)=>{
            setOpenNavGroups({
                "SidebarProvider.useCallback[toggleNavGroup]": (prev)=>{
                    const next = new Set(prev);
                    if (next.has(href)) next.delete(href);
                    else next.add(href);
                    persistNavGroups(next);
                    return next;
                }
            }["SidebarProvider.useCallback[toggleNavGroup]"]);
        }
    }["SidebarProvider.useCallback[toggleNavGroup]"], [
        persistNavGroups
    ]);
    const openNavGroup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[openNavGroup]": (href)=>{
            setOpenNavGroups({
                "SidebarProvider.useCallback[openNavGroup]": (prev)=>{
                    if (prev.has(href)) return prev;
                    const next = new Set(prev);
                    next.add(href);
                    persistNavGroups(next);
                    return next;
                }
            }["SidebarProvider.useCallback[openNavGroup]"]);
        }
    }["SidebarProvider.useCallback[openNavGroup]"], [
        persistNavGroups
    ]);
    const markNavAutoOpened = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[markNavAutoOpened]": (path)=>{
            setNavAutoOpenPath(path);
            try {
                window.localStorage.setItem(NAV_AUTO_OPEN_STORAGE_KEY, path);
            } catch  {
            // Schreiben darf scheitern, der Zustand lebt weiter im Speicher
            }
        }
    }["SidebarProvider.useCallback[markNavAutoOpened]"], []);
    const openLeftSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[openLeftSidebar]": ()=>setIsLeftSidebarOpen(true)
    }["SidebarProvider.useCallback[openLeftSidebar]"], []);
    const closeLeftSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[closeLeftSidebar]": ()=>setIsLeftSidebarOpen(false)
    }["SidebarProvider.useCallback[closeLeftSidebar]"], []);
    const toggleLeftSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[toggleLeftSidebar]": ()=>setIsLeftSidebarOpen({
                "SidebarProvider.useCallback[toggleLeftSidebar]": (prev)=>!prev
            }["SidebarProvider.useCallback[toggleLeftSidebar]"])
    }["SidebarProvider.useCallback[toggleLeftSidebar]"], []);
    // Right sidebar state
    const [isRightSidebarOpen, setIsRightSidebarOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rightSidebarData, setRightSidebarData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openRightSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[openRightSidebar]": (data)=>{
            setRightSidebarData(data);
            setIsRightSidebarOpen(true);
        }
    }["SidebarProvider.useCallback[openRightSidebar]"], []);
    const closeRightSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SidebarProvider.useCallback[closeRightSidebar]": ()=>{
            setIsRightSidebarOpen(false);
            // Delay clearing data so close animation can complete
            setTimeout({
                "SidebarProvider.useCallback[closeRightSidebar]": ()=>setRightSidebarData(null)
            }["SidebarProvider.useCallback[closeRightSidebar]"], 300);
        }
    }["SidebarProvider.useCallback[closeRightSidebar]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SidebarContext.Provider, {
        value: {
            isLeftSidebarOpen,
            openLeftSidebar,
            closeLeftSidebar,
            toggleLeftSidebar,
            leftSidebarContent,
            setLeftSidebarContent,
            leftSidebarScrollRef,
            openNavGroups,
            toggleNavGroup,
            openNavGroup,
            navGroupsHydrated,
            navAutoOpenPath,
            markNavAutoOpened,
            isRightSidebarOpen,
            openRightSidebar,
            closeRightSidebar,
            rightSidebarData
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/SidebarContext.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_s(SidebarProvider, "hY74tYHNmuSDQAgZ4PnRv+vkzU8=");
_c = SidebarProvider;
function useSidebar() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SidebarContext);
    if (context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
}
_s1(useSidebar, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function useOptionalSidebar() {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SidebarContext);
}
_s2(useOptionalSidebar, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "SidebarProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/SiteLocaleContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteLocaleProvider",
    ()=>SiteLocaleProvider,
    "useLanguageCookieAtLoad",
    ()=>useLanguageCookieAtLoad,
    "useLanguageSwitcherLinks",
    ()=>useLanguageSwitcherLinks,
    "useSiteLocale",
    ()=>useSiteLocale,
    "useSiteLocaleContext",
    ()=>useSiteLocaleContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localizablePaths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/localizablePaths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localizeHref$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/localizeHref.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocaleHint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocaleHint.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const SiteLocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    locale: null,
    missing: {}
});
function SiteLocaleProvider({ initialLocale, missing, children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [ersterPfad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(pathname);
    // Erster Render: Wert des Servers (die Adresse im Browser kann vor der
    // Hydration noch der umgeschriebene Pfad sein); danach die Adresse selbst
    const locale = pathname === ersterPfad ? initialLocale : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localizablePaths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteLocaleOfPath"])(pathname ?? '/');
    const mengen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SiteLocaleProvider.useMemo[mengen]": ()=>{
            const ergebnis = {};
            for (const [sprache, pfade] of Object.entries(missing ?? {})){
                ergebnis[sprache] = new Set(pfade);
            }
            return ergebnis;
        }
    }["SiteLocaleProvider.useMemo[mengen]"], [
        missing
    ]);
    // <html lang> steht im Root-Layout und bleibt bei Client-Navigation stehen
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteLocaleProvider.useEffect": ()=>{
            if (locale) document.documentElement.lang = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_LOCALE_INFO"][locale].hreflang;
        }
    }["SiteLocaleProvider.useEffect"], [
        locale
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SiteLocaleProvider.useMemo[value]": ()=>({
                locale,
                missing: mengen
            })
    }["SiteLocaleProvider.useMemo[value]"], [
        locale,
        mengen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteLocaleContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/SiteLocaleContext.tsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
_s(SiteLocaleProvider, "zZVE115V3nt+prG6n5ijJc6j6FI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteLocaleProvider;
function useSiteLocale() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SiteLocaleContext).locale;
}
_s1(useSiteLocale, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function useSiteLocaleContext() {
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(SiteLocaleContext);
}
_s2(useSiteLocaleContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function useLanguageSwitcherLinks() {
    _s3();
    const { locale, missing } = useSiteLocaleContext();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // Angemeldete wählen weiter aus allen Sprachen der Oberfläche (Profil)
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const pfadSprache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pathLocaleFor"])(locale, status);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLanguageSwitcherLinks.useMemo": ()=>pfadSprache ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localizeHref$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languageLinks"])(pathname ?? '/', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_LOCALES"], missing).map({
                "useLanguageSwitcherLinks.useMemo": (link)=>({
                        language: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uiLanguageFor"])(link.locale),
                        href: link.href
                    })
            }["useLanguageSwitcherLinks.useMemo"]) : undefined
    }["useLanguageSwitcherLinks.useMemo"], [
        pfadSprache,
        missing,
        pathname
    ]);
}
_s3(useLanguageSwitcherLinks, "FrGWupo9a4v6Zj4iSAHGIV/p/DE=", false, function() {
    return [
        useSiteLocaleContext,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
function useLanguageCookieAtLoad() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocaleHint$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LANGUAGE_COOKIE_AT_LOAD"];
}
var _c;
__turbopack_context__.k.register(_c, "SiteLocaleProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/ToastContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const MAX_TOASTS = 5;
const DEFAULT_AUTO_CLOSE = 5000;
let toastCounter = 0;
function generateToastId() {
    toastCounter += 1;
    return `toast-${Date.now()}-${toastCounter}`;
}
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ToastProvider({ children }) {
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const timersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const dismissToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[dismissToast]": (id)=>{
            const timer = timersRef.current.get(id);
            if (timer) {
                clearTimeout(timer);
                timersRef.current.delete(id);
            }
            setToasts({
                "ToastProvider.useCallback[dismissToast]": (prev)=>prev.filter({
                        "ToastProvider.useCallback[dismissToast]": (t)=>t.id !== id
                    }["ToastProvider.useCallback[dismissToast]"])
            }["ToastProvider.useCallback[dismissToast]"]);
        }
    }["ToastProvider.useCallback[dismissToast]"], []);
    const dismissAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[dismissAll]": ()=>{
            timersRef.current.forEach({
                "ToastProvider.useCallback[dismissAll]": (timer)=>clearTimeout(timer)
            }["ToastProvider.useCallback[dismissAll]"]);
            timersRef.current.clear();
            setToasts([]);
        }
    }["ToastProvider.useCallback[dismissAll]"], []);
    const addToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[addToast]": (type, content, options)=>{
            const id = generateToastId();
            const autoClose = options?.autoClose !== undefined ? options.autoClose : DEFAULT_AUTO_CLOSE;
            const newToast = {
                id,
                type,
                content,
                autoClose,
                onClick: options?.onClick,
                createdAt: Date.now()
            };
            setToasts({
                "ToastProvider.useCallback[addToast]": (prev)=>{
                    const updated = [
                        newToast,
                        ...prev
                    ];
                    // Remove oldest toasts beyond max limit
                    if (updated.length > MAX_TOASTS) {
                        const removed = updated.slice(MAX_TOASTS);
                        removed.forEach({
                            "ToastProvider.useCallback[addToast]": (t)=>{
                                const timer = timersRef.current.get(t.id);
                                if (timer) {
                                    clearTimeout(timer);
                                    timersRef.current.delete(t.id);
                                }
                            }
                        }["ToastProvider.useCallback[addToast]"]);
                        return updated.slice(0, MAX_TOASTS);
                    }
                    return updated;
                }
            }["ToastProvider.useCallback[addToast]"]);
            // Set auto-dismiss timer
            if (autoClose !== false && autoClose > 0) {
                const timer = setTimeout({
                    "ToastProvider.useCallback[addToast].timer": ()=>{
                        dismissToast(id);
                    }
                }["ToastProvider.useCallback[addToast].timer"], autoClose);
                timersRef.current.set(id, timer);
            }
            return id;
        }
    }["ToastProvider.useCallback[addToast]"], [
        dismissToast
    ]);
    // Register the dispatch for standalone toast API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastProvider.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setToastDispatch"])({
                addToast,
                dismissToast,
                dismissAll
            });
            return ({
                "ToastProvider.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setToastDispatch"])(null);
                }
            })["ToastProvider.useEffect"];
        }
    }["ToastProvider.useEffect"], [
        addToast,
        dismissToast,
        dismissAll
    ]);
    // Clean up all timers on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastProvider.useEffect": ()=>{
            const timers = timersRef.current;
            return ({
                "ToastProvider.useEffect": ()=>{
                    timers.forEach({
                        "ToastProvider.useEffect": (timer)=>clearTimeout(timer)
                    }["ToastProvider.useEffect"]);
                    timers.clear();
                }
            })["ToastProvider.useEffect"];
        }
    }["ToastProvider.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            toasts,
            addToast,
            dismissToast,
            dismissAll
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/ToastContext.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
_s(ToastProvider, "eonk/6vlDTz79FFFwqQ7rilKAzg=");
_c = ToastProvider;
function useToast() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}
_s1(useToast, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserPreferencesProvider",
    ()=>UserPreferencesProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useUserPreferences",
    ()=>useUserPreferences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/darkTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)");
// 🎯 IMPORT: Use centralized validation from i18n settings
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$themeSwitching$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/themeSwitching.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$authGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth/authGates.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SiteLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$theme$2f$themePreference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/theme/themePreference.ts [app-client] (ecmascript)");
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
// Create the context with default values
const UserPreferencesContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    themeMode: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].LIGHT,
    language: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackLng"],
    setThemeMode: ()=>{},
    setLanguage: ()=>{},
    theme: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"],
    isHydrated: false
});
const UserPreferencesProvider = ({ children })=>{
    _s();
    const { data: session, status, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    // Refs to track previous values for comparison (avoids dependency array issues)
    const prevThemeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].LIGHT);
    const prevLanguageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackLng"]);
    // Hydration-safe state initialization - always start with defaults on server
    const [themeMode, setThemeModeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].LIGHT);
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackLng"]);
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hydration detection - runs only on client after mount.
    // #2029: Layout-Effekt, damit die Darstellung vor dem ersten Zeichnen nach
    // der Hydration stimmt (das Inline-Skript im Layout hat `data-theme` schon
    // gesetzt). Ohne gespeicherte Wahl gilt die Geräte-Einstellung.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "UserPreferencesProvider.useLayoutEffect": ()=>{
            setIsHydrated(true);
            // Load from localStorage after hydration to avoid SSR mismatch
            if ("TURBOPACK compile-time truthy", 1) {
                const storedLanguage = localStorage.getItem('language');
                const startTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$theme$2f$themePreference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialThemePreference"])();
                if (startTheme !== prevThemeRef.current) {
                    setThemeModeState(startTheme);
                    prevThemeRef.current = startTheme;
                }
                if (storedLanguage) {
                    const normalizedLang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLanguageCode"])(storedLanguage);
                    setLanguageState(normalizedLang);
                    prevLanguageRef.current = normalizedLang;
                }
            }
        }
    }["UserPreferencesProvider.useLayoutEffect"], []);
    // Effect to sync state from session or localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserPreferencesProvider.useEffect": ()=>{
            if (status === 'loading' || !isHydrated) return; // Wait for session and hydration
            let newTheme;
            let newLanguage;
            if (status === 'authenticated' && session?.user) {
                // 🎯 AUTHENTICATED: Use session data as source of truth
                const sessionUser = session.user;
                // 🎯 VALIDATION: Ensure theme mode is valid
                const sessionTheme = sessionUser.themeMode;
                newTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidThemeMode"])(sessionTheme) ? sessionTheme : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].LIGHT;
                // 🎯 VALIDATION: Normalize and validate language code from database
                newLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLanguageCode"])(sessionUser.language);
                // Update localStorage immediately when session loads
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem('themeMode', newTheme); // ThemeMode enum values are strings
                    localStorage.setItem('language', newLanguage);
                }
                // 🎯 GUARD: Only process if values are actually different (prevents React Strict Mode duplicates)
                const hasChanges = newTheme !== prevThemeRef.current || newLanguage !== prevLanguageRef.current;
                if (!hasChanges) return;
                // 🎯 AUTO-CORRECT: If the normalized code is different from original, update database
                // #1548: nur mit vollständiger Sitzung — davor antwortet die API 401
                if (sessionUser.language && sessionUser.language !== newLanguage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$authGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSessionComplete"])(session.user)) {
                    // Silently update the database with the correct code
                    // #1478: HTTP-Client erst hier laden (nur mit Sitzung) — der Provider
                    // steht auf jeder öffentlichen Seite
                    __turbopack_context__.A("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript, async loader)").then({
                        "UserPreferencesProvider.useEffect": ({ api })=>api.put('/plastship/user/profile', {
                                language: newLanguage
                            })
                    }["UserPreferencesProvider.useEffect"]).catch({
                        "UserPreferencesProvider.useEffect": (error)=>{
                            console.error('[UserPreferencesContext] Error correcting language code:', error);
                        }
                    }["UserPreferencesProvider.useEffect"]);
                }
            } else {
                if ("TURBOPACK compile-time truthy", 1) {
                    const storedLanguage = localStorage.getItem('language');
                    // #2029: gespeicherte Wahl, sonst Geräte-Einstellung (auch ausgeloggt)
                    newTheme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$theme$2f$themePreference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialThemePreference"])();
                    newLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeLanguageCode"])(storedLanguage);
                } else //TURBOPACK unreachable
                ;
            }
            // Update state if different from previous values
            if (newTheme !== prevThemeRef.current) {
                setThemeModeState(newTheme);
                prevThemeRef.current = newTheme;
            }
            if (newLanguage !== prevLanguageRef.current) {
                setLanguageState(newLanguage);
                prevLanguageRef.current = newLanguage;
            }
        }
    }["UserPreferencesProvider.useEffect"], [
        session,
        status,
        isHydrated
    ]);
    // Refs for stable callback references (avoid re-creating callbacks on every render)
    const statusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(status);
    const sessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(session);
    const updateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(update);
    const themeModeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(themeMode);
    const languageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(language);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserPreferencesProvider.useEffect": ()=>{
            statusRef.current = status;
            sessionRef.current = session;
            updateRef.current = update;
            themeModeRef.current = themeMode;
            languageRef.current = language;
        }
    }["UserPreferencesProvider.useEffect"], [
        status,
        session,
        update,
        themeMode,
        language
    ]);
    // Update theme mode - this updates both session and localStorage
    const setThemeMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserPreferencesProvider.useCallback[setThemeMode]": async (newMode)=>{
            // Convert string to enum if necessary
            const themeEnum = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidThemeMode"])(newMode) ? newMode : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].LIGHT;
            if (themeEnum === themeModeRef.current) return; // Skip if no change
            setThemeModeState(themeEnum);
            if (statusRef.current === 'authenticated' && sessionRef.current?.user) {
                try {
                    await updateRef.current({
                        themeMode: themeEnum,
                        refreshFromDb: true
                    });
                    setTimeout({
                        "UserPreferencesProvider.useCallback[setThemeMode]": async ()=>{
                            try {
                                await updateRef.current({});
                            } catch (error) {
                                console.error('[UserPreferencesContext] Failed to refresh session:', error);
                            }
                        }
                    }["UserPreferencesProvider.useCallback[setThemeMode]"], 100);
                } catch (error) {
                    console.error('[UserPreferencesContext] Failed to update session themeMode:', error);
                }
            } else {
                // 🎯 NOT AUTHENTICATED: Update localStorage
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem('themeMode', themeEnum); // Store enum value (which is a string)
                }
            }
            // Always update document for immediate visual feedback
            if ("TURBOPACK compile-time truthy", 1) {
                // #1216: nur beim Umschalten durch den Nutzer weich überblenden (nicht beim Laden)
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$themeSwitching$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markThemeSwitching"])();
                document.documentElement.setAttribute('data-theme', themeEnum);
            }
        }
    }["UserPreferencesProvider.useCallback[setThemeMode]"], []);
    // Update language - this updates both session and localStorage
    const setLanguage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "UserPreferencesProvider.useCallback[setLanguage]": async (newLang)=>{
            if (newLang === languageRef.current) return; // Skip if no change
            setLanguageState(newLang);
            if (statusRef.current === 'authenticated' && sessionRef.current?.user) {
                // 🎯 AUTHENTICATED: Update session token with force refresh
                try {
                    await updateRef.current({
                        language: newLang,
                        refreshFromDb: true // Force refresh from database
                    });
                    // Additional session refresh to ensure components get updated values
                    setTimeout({
                        "UserPreferencesProvider.useCallback[setLanguage]": async ()=>{
                            try {
                                await updateRef.current({});
                            } catch (error) {
                                console.error('[UserPreferencesContext] Failed to refresh session:', error);
                            }
                        }
                    }["UserPreferencesProvider.useCallback[setLanguage]"], 100);
                } catch (error) {
                    console.error('[UserPreferencesContext] Failed to update session language:', error);
                }
            } else {
                // 🎯 NOT AUTHENTICATED: Update localStorage
                if ("TURBOPACK compile-time truthy", 1) {
                    localStorage.setItem('language', newLang);
                }
            }
            // Always update document and cookie for immediate effect
            if ("TURBOPACK compile-time truthy", 1) {
                document.documentElement.setAttribute('data-language', newLang);
                document.cookie = `NEXT_LOCALE=${newLang}; path=/; max-age=31536000; SameSite=Lax`;
            }
        }
    }["UserPreferencesProvider.useCallback[setLanguage]"], []);
    // 🎯 FIXED: Use ThemeMode enum comparison for theme selection
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserPreferencesProvider.useMemo[theme]": ()=>themeMode === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastshipDark"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"]
    }["UserPreferencesProvider.useMemo[theme]"], [
        themeMode
    ]);
    // #2029: Ohne gespeicherte Wahl folgt die Darstellung der Geräte-Einstellung,
    // auch wenn sie sich bei offener Seite ändert (nur ohne Sitzung — Angemeldete
    // haben ihre Wahl im Profil).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserPreferencesProvider.useEffect": ()=>{
            if (!isHydrated || status === 'authenticated' || ("TURBOPACK compile-time value", "object") === 'undefined') return;
            if (typeof window.matchMedia !== 'function') return;
            const abfrage = window.matchMedia(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$theme$2f$themePreference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREFERS_DARK_QUERY"]);
            const beiWechsel = {
                "UserPreferencesProvider.useEffect.beiWechsel": (event)=>{
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$theme$2f$themePreference$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readStoredThemePreference"])()) return;
                    const neu = event.matches ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].LIGHT;
                    prevThemeRef.current = neu;
                    setThemeModeState(neu);
                }
            }["UserPreferencesProvider.useEffect.beiWechsel"];
            abfrage.addEventListener?.('change', beiWechsel);
            return ({
                "UserPreferencesProvider.useEffect": ()=>abfrage.removeEventListener?.('change', beiWechsel)
            })["UserPreferencesProvider.useEffect"];
        }
    }["UserPreferencesProvider.useEffect"], [
        isHydrated,
        status
    ]);
    // Apply theme changes to document (both on mount and change).
    // #2029: erst nach der Hydration — vorher steht der Zustand noch auf der
    // Server-Vorgabe hell und würde das `data-theme` des Inline-Skripts
    // überschreiben (Aufblitzen im Dark Mode). Layout-Effekt: vor dem Zeichnen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "UserPreferencesProvider.useLayoutEffect": ()=>{
            if (!isHydrated) return;
            if ("TURBOPACK compile-time truthy", 1) {
                // themeMode is already the correct string value from enum
                // Set data-theme attribute
                document.documentElement.setAttribute('data-theme', themeMode);
                // Remove old theme classes and add new one
                document.documentElement.className = document.documentElement.className.replace(/\btheme-\w+\b/g, '') + ` theme-${themeMode}`;
                // Also set a CSS variable for maximum compatibility
                document.documentElement.style.setProperty('--current-theme', themeMode);
                // Force a reflow to ensure styles are applied immediately
                void document.documentElement.offsetHeight;
            }
        }
    }["UserPreferencesProvider.useLayoutEffect"], [
        themeMode,
        isHydrated
    ]); // React to themeMode changes
    // #1561: Auf Sprachseiten (öffentlich, `/en/…` bzw. ohne Präfix) gewinnt der
    // Pfad gegen Profil, localStorage und Cookie — schon beim Server-Rendern und
    // ohne Rücksprung nach der Hydration. Die eigene Wahl bleibt gespeichert und
    // gilt wieder in der App. setLanguage merkt sie weiter (Sprachumschalter).
    const siteLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteLocale"])();
    // #1561: Auf Sprachseiten gewinnt der Pfad — für Besucher. Angemeldete
    // behalten überall die Sprache ihres Profils, wie vor den Sprachpfaden: der
    // Server liefert die Seite in der Sprache des Pfads, nach dem Laden der
    // Sitzung gilt wieder die eigene.
    const pfadSprache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pathLocaleFor"])(siteLocale, status);
    const effectiveLanguage = pfadSprache ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uiLanguageFor"])(pfadSprache) : language;
    // Apply language changes to document
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserPreferencesProvider.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                document.documentElement.setAttribute('data-language', effectiveLanguage);
            }
        }
    }["UserPreferencesProvider.useEffect"], [
        effectiveLanguage
    ]);
    // Memoize context value to prevent unnecessary re-renders of all consumers
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserPreferencesProvider.useMemo[contextValue]": ()=>({
                themeMode,
                language: effectiveLanguage,
                setThemeMode,
                setLanguage,
                theme,
                isHydrated
            })
    }["UserPreferencesProvider.useMemo[contextValue]"], [
        themeMode,
        effectiveLanguage,
        setThemeMode,
        setLanguage,
        theme,
        isHydrated
    ]);
    // Provide the context values
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserPreferencesContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/UserPreferencesContext.tsx",
        lineNumber: 357,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserPreferencesProvider, "n44d3baR73AuXGX8nsKedXk0dyU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SiteLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSiteLocale"]
    ];
});
_c = UserPreferencesProvider;
const useUserPreferences = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UserPreferencesContext);
    if (!context) {
        throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
    }
    return context;
};
_s1(useUserPreferences, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const __TURBOPACK__default__export__ = UserPreferencesContext;
var _c;
__turbopack_context__.k.register(_c, "UserPreferencesProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KANBAN_COLORS",
    ()=>KANBAN_COLORS,
    "calculateContrast",
    ()=>calculateContrast,
    "calculateRelativeLuminance",
    ()=>calculateRelativeLuminance,
    "getColorsBetweenColors",
    ()=>getColorsBetweenColors,
    "getContrastTextColor",
    ()=>getContrastTextColor,
    "getKanbanGradientColor",
    ()=>getKanbanGradientColor,
    "hexToRgb",
    ()=>hexToRgb,
    "interpolateColor",
    ()=>interpolateColor,
    "isValidHexColor",
    ()=>isValidHexColor,
    "rgbToHex",
    ()=>rgbToHex,
    "shouldUseWhiteText",
    ()=>shouldUseWhiteText
]);
function rgbToHex(rgb) {
    return '#' + (1 << 24 | (rgb[0] ?? 0) << 16 | (rgb[1] ?? 0) << 8 | (rgb[2] ?? 0)).toString(16).slice(1).toUpperCase();
}
function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [
        r,
        g,
        b
    ];
}
function isValidHexColor(hex) {
    const pattern = /^#[0-9A-Fa-f]{6}$/;
    return pattern.test(hex);
}
function getColorsBetweenColors(startColor, endColor, colorCount) {
    const s = hexToRgb(startColor);
    const e = hexToRgb(endColor);
    const rStep = ((e[0] ?? 0) - (s[0] ?? 0)) / (colorCount + 1);
    const gStep = ((e[1] ?? 0) - (s[1] ?? 0)) / (colorCount + 1);
    const bStep = ((e[2] ?? 0) - (s[2] ?? 0)) / (colorCount + 1);
    const colors = [];
    for(let i = 1; i <= colorCount; i++){
        const rgb = [
            Math.round((s[0] ?? 0) + i * rStep),
            Math.round((s[1] ?? 0) + i * gStep),
            Math.round((s[2] ?? 0) + i * bStep)
        ];
        colors.push(rgbToHex(rgb));
    }
    return colors;
}
function calculateRelativeLuminance(rgb) {
    const rsrgb = (rgb[0] ?? 0) / 255;
    const gsrgb = (rgb[1] ?? 0) / 255;
    const bsrgb = (rgb[2] ?? 0) / 255;
    const rLuminance = rsrgb <= 0.03928 ? rsrgb / 12.92 : Math.pow((rsrgb + 0.055) / 1.055, 2.4);
    const gLuminance = gsrgb <= 0.03928 ? gsrgb / 12.92 : Math.pow((gsrgb + 0.055) / 1.055, 2.4);
    const bLuminance = bsrgb <= 0.03928 ? bsrgb / 12.92 : Math.pow((bsrgb + 0.055) / 1.055, 2.4);
    return 0.2126 * rLuminance + 0.7152 * gLuminance + 0.0722 * bLuminance;
}
function shouldUseWhiteText(hexColor) {
    const contrastWithBlack = calculateContrast(hexColor, '#000000');
    // Threshold adjusted to ensure primary (#00416E) and secondary (#37BA24) get white text
    return contrastWithBlack < 9;
}
function calculateContrast(hexColor1, hexColor2) {
    const rgb1 = hexToRgb(hexColor1);
    const rgb2 = hexToRgb(hexColor2);
    const luminance1 = calculateRelativeLuminance(rgb1);
    const luminance2 = calculateRelativeLuminance(rgb2);
    const contrast = (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05);
    return contrast;
}
const KANBAN_COLORS = {
    primary: '#00416E',
    secondary: '#37BA24',
    error: '#DC0000',
    warning: '#FFCD00',
    success: '#37BA24',
    info: '#00416E'
};
function interpolateColor(color1, color2, factor) {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    const r = Math.round((rgb1[0] ?? 0) + ((rgb2[0] ?? 0) - (rgb1[0] ?? 0)) * factor);
    const g = Math.round((rgb1[1] ?? 0) + ((rgb2[1] ?? 0) - (rgb1[1] ?? 0)) * factor);
    const b = Math.round((rgb1[2] ?? 0) + ((rgb2[2] ?? 0) - (rgb1[2] ?? 0)) * factor);
    return rgbToHex([
        r,
        g,
        b
    ]);
}
function getKanbanGradientColor(colorType, index = 0, totalLanes = 1, customColor) {
    switch(colorType){
        case 'error':
            return KANBAN_COLORS.error;
        case 'warning':
            return KANBAN_COLORS.warning;
        case 'success':
            return KANBAN_COLORS.success;
        case 'info':
            return KANBAN_COLORS.info;
        case 'custom':
            return customColor || KANBAN_COLORS.primary;
        case 'gradient':
        default:
            // Calculate gradient position (0 to 1)
            const factor = totalLanes > 1 ? index / (totalLanes - 1) : 0;
            return interpolateColor(KANBAN_COLORS.primary, KANBAN_COLORS.secondary, factor);
    }
}
function getContrastTextColor(bgColor) {
    return shouldUseWhiteText(bgColor) ? '#ffffff' : '#212529';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTITY_LABELS",
    ()=>ENTITY_LABELS,
    "ENTITY_TYPE_MAPPINGS",
    ()=>ENTITY_TYPE_MAPPINGS,
    "ENTITY_URLS",
    ()=>ENTITY_URLS,
    "RELATIONSHIP_TO_ENTITY",
    ()=>RELATIONSHIP_TO_ENTITY,
    "getEntityLabel",
    ()=>getEntityLabel,
    "getEntityTypeFromId",
    ()=>getEntityTypeFromId,
    "getEntityTypeFromRelationship",
    ()=>getEntityTypeFromRelationship,
    "getEntityUrl",
    ()=>getEntityUrl,
    "getUrlFromId",
    ()=>getUrlFromId
]);
/**
 * Shared helpers for Salesforce entity operations
 * Used by EntityDetailLayout, RelatedListTable and other components
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
;
const ENTITY_TYPE_MAPPINGS = {
    // Standard Objects
    '001': 'Account',
    '003': 'Contact',
    '006': 'Opportunity',
    '500': 'Case',
    '00T': 'Task',
    '00U': 'Event',
    '801': 'Order',
    '802': 'OrderItem',
    '01t': 'Product2',
    '00Q': 'Lead',
    '005': 'User',
    '701': 'Campaign',
    '00v': 'CampaignMember',
    '800': 'Contract',
    '01s': 'Pricebook2',
    '01u': 'PricebookEntry',
    '0Q0': 'Quote',
    '0QL': 'QuoteLineItem',
    '00k': 'OpportunityLineItem',
    // #1248: aus der früheren Lookup-Tabelle übernommen (nur Präfix → SObject,
    // keine Detailseite)
    '00K': 'OpportunityContactRole',
    '02i': 'Asset',
    '02s': 'EmailMessage',
    '068': 'ContentVersion',
    '087': 'Idea',
    '131': 'Location',
    '501': 'Solution',
    '574': 'QuickText',
    '0WO': 'WorkOrder',
    '1WL': 'WorkOrderLineItem',
    '0Hn': 'ServiceResource',
    // Custom Objects
    // #330: hiess 'Bedarf__c' — kanonischer API-Name ist Bedarfe__c. Der falsche
    // Name traf keine ENTITY_URLS-/EntityType-Maps: Bedarfe-Zeilen in Related
    // Lists hatten dadurch nie einen Quick-Open/Drawer-Link (analog #469).
    a0K: 'Bedarfe__c',
    a0V: 'Onboarding__c',
    a0J: 'Abrechnung__c',
    a0X: 'Projekt__c',
    // #330: SF-API-Name traegt kein Umlaut-U (Kontakt_bergaben__c) — wie a0K.
    a0U: 'Kontakt_bergaben__c',
    a0W: 'Materialanalyse__c',
    a07: 'Sample_Sending__c',
    a01: 'Sample_Feedback__c',
    a0Z: 'Reklamation__c',
    a0Y: 'News__c',
    a0E: 'Facilities_and_Capabilities__c',
    a0D: 'Laboratory_Equipment__c',
    a0G: 'Material_qualification_process__c',
    // sf_prefixes.txt schreibt Supplier_audit__c. Salesforce-API-Namen sind
    // case-insensitiv, es ist dasselbe Objekt; die App führt es unter
    // Supplier_Audit__c (RBAC-Resource, Routen, Config-Registry — #369).
    a0H: 'Supplier_Audit__c',
    a10: 'Monitored_Material__c',
    a0m: 'Zertifikate__c',
    a0x: 'Unternehmenszertifikat__c',
    a0b: 'AuditProperty__c',
    a0c: 'Lohn__c',
    a04: 'Transportpreis__c',
    a05: 'Produktionsstandort__c',
    a06: 'Opportunity_Transportpreis__c',
    a0F: 'Beziehung__c',
    a0I: 'Agreement__c',
    a13: 'Material_Proposal__c',
    a1E: 'Prozessfeedback__c',
    a0n: 'Kostenstelle_plastship__c',
    a1T: 'DATEV_Sachkonto__c',
    // #1248: aus der früheren Lookup-Tabelle übernommen (nur Präfix → SObject,
    // keine Detailseite)
    a0a: 'AuditPropertyType__c',
    a0d: 'Textvorlagen_Dokumente__c',
    a0e: 'Musterlager__c',
    a0f: 'Muster_Lagerbewegung__c',
    a0g: 'Zus_tzliche_Produkte__c',
    a0h: 'Warenlager__c',
    a0i: 'Waren_Lagerbewegung__c',
    a0j: 'Inventarliste__c',
    a0k: 'cloudworx_Console__c',
    a0l: 'Bonus__c',
    a0o: 'Agreement_Templates__c',
    a0p: 'Mengenstaffel_Einkauf__c',
    a0q: 'Bonus_Ausschuettung__c',
    a0r: 'Knowledge__c',
    a0s: 'Abfallfraktionen__c',
    a0t: 'Aktueller_Preis_und_Verf_gbarkeit__c',
    a0u: 'Material_Segment__c',
    a0v: 'Polymere__c',
    a0w: 'Abfallqualit_t__c',
    a0y: 'Audit_Parameter__c',
    a0z: 'Audit_ParameterType__c',
    a11: 'PEintrag__c'
};
const ENTITY_LABELS = {
    Account: 'Account',
    Contact: 'Contact',
    Opportunity: 'Opportunity',
    Case: 'Case',
    Task: 'Task',
    Event: 'Event',
    Order: 'Order',
    OrderItem: 'Order Item',
    Product2: 'Product',
    Lead: 'Lead',
    User: 'Benutzer',
    Bedarfe__c: 'Requirements',
    Onboarding__c: 'Onboarding',
    Abrechnung__c: 'Invoice',
    Projekt__c: 'Project',
    Kontakt_bergaben__c: 'Contact Handover',
    Materialanalyse__c: 'Material Analysis',
    Sample_Sending__c: 'Sample Sending',
    Sample_Feedback__c: 'Sample Feedback',
    Reklamation__c: 'Claim',
    Kostenstelle_plastship__c: 'Kostenstelle',
    DATEV_Sachkonto__c: 'DATEV-Sachkonto',
    News__c: 'News',
    Facilities_and_Capabilities__c: 'Facilities & Capabilities',
    Laboratory_Equipment__c: 'Laboratory Equipment',
    Material_qualification_process__c: 'Material Qualification Process',
    Supplier_Audit__c: 'Supplier Audit',
    Monitored_Material__c: 'Monitored Material',
    Zertifikate__c: 'Certificate',
    Unternehmenszertifikat__c: 'Company Certificate',
    AuditProperty__c: 'Prüfparameter',
    Lohn__c: 'Lohndienstleistung',
    Material_Proposal__c: 'Material Proposal',
    Produktionsstandort__c: 'Production Site',
    Prozessfeedback__c: 'Prozessfeedback' // #384
};
const RELATIONSHIP_TO_ENTITY = {
    // Standard relationships (with form configs)
    Contacts: 'Contact',
    Opportunities: 'Opportunity',
    Opportunities__r: 'Opportunity',
    Cases: 'Case',
    Kundenvorg_nge__r: 'Case',
    Tasks: 'Task',
    Orders: 'Order',
    Auftr_ge__r: 'Order',
    OrderItems: 'OrderItem',
    // #1184 Modell v5: Auftragsprodukte, die einer Abrechnung zugeordnet sind
    Abgerechnete_Positionen__r: 'OrderItem',
    Products: 'Product',
    Produkte: 'Product',
    Produkte__r: 'Product',
    // Custom object relationships (with __r suffix) - only those with form configs
    Abrechnungen__r: 'Invoice',
    Aktuelle_Preise_und_Verf_gbarkeiten__r: 'AktuellerPreisUndVerfugbarkeit',
    Angebotene_Lohndienstleistungen__r: 'Lohn',
    Bedarfe__r: 'Requirement',
    // Feedbacks__r is Prozessfeedback__c (CAPA), NOT the legacy Sample_Feedback__c.
    Feedbacks__r: 'Prozessfeedback',
    Kontakt_bergaben__r: 'ContactHandover',
    Material_Proposals__r: 'MaterialProposal',
    Material_Proposals1__r: 'MaterialProposal',
    Material_Proposals2__r: 'MaterialProposal',
    Materialanalysen__r: 'MaterialAnalysis',
    Monitored_Materials__r: 'MonitoredMaterial',
    Onboardings__r: 'Onboarding',
    Projekte__r: 'Project',
    Reklamationen__r: 'Reklamation',
    Reklamationen1__r: 'Reklamation',
    Sample_Feedbacks__r: 'SampleFeedback',
    Sample_Sendings__r: 'SampleSending',
    Supplier_audits__r: 'SupplierAudit',
    Unternehmenszertifikate__r: 'CompanyCertificate',
    AuditProperties__r: 'AuditProperty',
    Produktionsstandorte__r: 'ProductionSite',
    // Custom object relationships (without __r suffix - used in labels)
    Abrechnungen: 'Invoice',
    Bedarfe: 'Requirement',
    Materialanalysen: 'MaterialAnalysis',
    Onboardings: 'Onboarding',
    Projekte: 'Project'
};
function getEntityTypeFromRelationship(relationshipName) {
    return RELATIONSHIP_TO_ENTITY[relationshipName];
}
const ENTITY_URLS = {
    Account: '/account',
    Contact: '/contact',
    Opportunity: '/opportunity',
    Case: '/case',
    Task: '/task',
    Order: '/order',
    OrderItem: '/orderitem',
    // #325/#449: Contract ist App-Objekt (Route + Detail seit #449)
    Contract: '/contract',
    Product2: '/product',
    // #1765: kein Eintrag für User (005-Ids) — die Salesforce-Nutzerseite ist
    // entfernt, /user/[id] ist Postgres-keyed (Registry-Review m-1). Lookups auf
    // User zeigen daher nur den Namen als Text.
    // #469: hiess 'Bedarf__c' — das Objekt heisst Bedarfe__c. Jeder Link auf
    // einen Bedarf, der ueber diese Map lief, kam als undefined zurueck.
    Bedarfe__c: '/requirement',
    Onboarding__c: '/onboarding',
    Abrechnung__c: '/invoice',
    Projekt__c: '/project',
    // #469: der API-Name traegt kein Umlaut-U (Salesforce ersetzt es):
    // Kontakt_bergaben__c.
    Kontakt_bergaben__c: '/contact-handover',
    Materialanalyse__c: '/material-analysis',
    Sample_Sending__c: '/sample-sending',
    Sample_Feedback__c: '/sample-feedback',
    // #325: Kostenstelle ist App-Objekt (Detail-Route, kein Listing)
    Kostenstelle_plastship__c: '/cost-center',
    Supplier_Audit__c: '/supplier-audit',
    Monitored_Material__c: '/monitored-material',
    Zertifikate__c: '/certificate',
    Unternehmenszertifikat__c: '/company-certificate',
    AuditProperty__c: '/audit-property',
    Lohn__c: '/toll-service',
    Material_Proposal__c: '/material-proposal',
    Produktionsstandort__c: '/production-site',
    Prozessfeedback__c: '/process-feedback' // #384
};
function getEntityTypeFromId(id) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"])(id)) {
        return undefined;
    }
    const prefix = id.substring(0, 3);
    return ENTITY_TYPE_MAPPINGS[prefix];
}
function getEntityLabel(entityType) {
    return ENTITY_LABELS[entityType] || entityType;
}
function getEntityUrl(entityType, recordId) {
    const basePath = ENTITY_URLS[entityType];
    if (!basePath) return undefined;
    return `${basePath}/${recordId}`;
}
function getUrlFromId(recordId) {
    if (!recordId) return undefined;
    const entityType = getEntityTypeFromId(recordId);
    if (!entityType) return undefined;
    return getEntityUrl(entityType, recordId);
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/formatCurrency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatLocale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/formatLocale.ts [app-client] (ecmascript)");
;
const formatCurrency = (value, currencyOrOptions = {})=>{
    const opts = typeof currencyOrOptions === 'string' ? {
        currency: currencyOrOptions
    } : currencyOrOptions;
    const { currency = 'EUR', minimumFractionDigits = 2, maximumFractionDigits = 2, emptyValue = '-', locale = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatLocale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FORMAT_LOCALE"] } = opts;
    if (value === undefined || value === null || Number.isNaN(value)) {
        return emptyValue;
    }
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits,
        maximumFractionDigits
    }).format(value);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/formatDate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatDate",
    ()=>formatDate,
    "formatDateLong",
    ()=>formatDateLong,
    "formatDateRelative",
    ()=>formatDateRelative,
    "formatDateShort",
    ()=>formatDateShort,
    "formatDateTime",
    ()=>formatDateTime,
    "formatDateTimeShort",
    ()=>formatDateTimeShort,
    "formatSalesforceDate",
    ()=>formatSalesforceDate,
    "renderDateCell",
    ()=>renderDateCell,
    "renderDateTimeCell",
    ()=>renderDateTimeCell
]);
/**
 * Date formatting utilities for consistent date display across the application
 *
 * #1640: Jeder Helfer nimmt optional eine `Intl`-Locale (`formatLocaleFor`).
 * Ohne Locale bleibt es beim bisherigen Deutsch — Server, Dokumente und
 * Altaufrufe sind davon unberührt. Die Oberfläche bindet die Sprache des
 * Nutzers über `useFormatters()`.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatLocale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/formatLocale.ts [app-client] (ecmascript)");
;
/** Erster Buchstabe groß, passend zur Sprache ("heute" → "Heute"). */ const capitalizeFirst = (text, locale)=>text ? text.charAt(0).toLocaleUpperCase(locale) + text.slice(1) : text;
const formatDate = (value, options = {})=>{
    if (!value) return '-';
    try {
        const date = value instanceof Date ? value : new Date(value);
        // Check if date is valid
        if (isNaN(date.getTime())) return '-';
        const { includeTime = false, style = 'medium', relative = false, locale } = options;
        // Relative formatting for recent dates (within 7 days)
        if (relative) {
            const now = new Date();
            const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
            if (diffInDays >= 0 && diffInDays < 7) {
                // #1640: mit Locale aus Intl ("Today", "3 days ago"), ohne wie bisher
                if (locale) {
                    const text = new Intl.RelativeTimeFormat(locale, {
                        numeric: 'auto'
                    }).format(-diffInDays, 'day');
                    return capitalizeFirst(text, locale);
                }
                if (diffInDays === 0) return 'Heute';
                if (diffInDays === 1) return 'Gestern';
                return `vor ${diffInDays} Tagen`;
            }
        }
        // Base date formatting options
        const baseOptions = {
            year: 'numeric',
            month: style === 'short' ? 'numeric' : style === 'long' ? 'long' : '2-digit',
            // #339: Tag ebenfalls zweistellig. Vorher stand hier 'numeric', was die
            // Mischform "1.08.2026" ergab — Monat aufgefuellt, Tag nicht. Im
            // Deutschen ist entweder "01.08.2026" oder "1.8.2026" ueblich, nicht
            // beides gemischt; formatDateTimeShort im selben Modul fuellt ebenfalls
            // auf ("05.03.24").
            day: style === 'long' ? 'numeric' : '2-digit'
        };
        // Add time formatting if requested
        if (includeTime) {
            baseOptions.hour = '2-digit';
            baseOptions.minute = '2-digit';
        }
        return date.toLocaleDateString(locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatLocale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FORMAT_LOCALE"], baseOptions);
    } catch (error) {
        console.warn('Error formatting date:', error);
        return '-';
    }
};
const formatDateTime = (value, locale)=>{
    return formatDate(value, {
        includeTime: true,
        locale
    });
};
const formatDateTimeShort = (value, locale)=>{
    if (!value) return '-';
    try {
        const date = value instanceof Date ? value : new Date(value);
        if (isNaN(date.getTime())) return '-';
        return date.toLocaleString(locale ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatLocale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FORMAT_LOCALE"], {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (error) {
        console.warn('Error formatting date:', error);
        return '-';
    }
};
const formatDateShort = (value, locale)=>{
    return formatDate(value, {
        style: 'short',
        locale
    });
};
const formatDateLong = (value, locale)=>{
    return formatDate(value, {
        style: 'long',
        locale
    });
};
const formatDateRelative = (value, locale)=>{
    return formatDate(value, {
        relative: true,
        locale
    });
};
const formatSalesforceDate = (value, includeTime = false, locale)=>{
    if (!value) return '-';
    // Handle Salesforce datetime format
    const salesforceDate = value.includes('T') ? value.split('T')[0] : value;
    return formatDate(salesforceDate, {
        includeTime,
        locale
    });
};
const renderDateCell = (value, locale)=>formatDate(value == null ? null : String(value), {
        locale
    });
const renderDateTimeCell = (value, locale)=>formatDateTime(value == null ? null : String(value), locale);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/formatPercent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatPercent",
    ()=>formatPercent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatLocale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/formatLocale.ts [app-client] (ecmascript)");
;
const formatPercent = (value, options = {})=>{
    const { decimals, emptyValue = '-', locale } = options;
    if (value === undefined || value === null || Number.isNaN(value)) {
        return emptyValue;
    }
    const digits = decimals === undefined ? {
        maximumFractionDigits: 2
    } : {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    };
    // #1640: Zahl in der Locale, Stellung des Prozentzeichens aus dem Muster der
    // Sprache ("42,5 %", "42.5%", "%42,5"). Nicht `format(value / 100)`: die
    // Division verschiebt Rundungsgrenzen (42.5 / 100 = 0.42499…).
    if (locale) {
        const number = new Intl.NumberFormat(locale, digits).format(value);
        let placed = false;
        return new Intl.NumberFormat(locale, {
            style: 'percent'
        }).formatToParts(1).map((part)=>{
            if (![
                'integer',
                'group',
                'decimal',
                'fraction'
            ].includes(part.type)) return part.value;
            if (placed) return '';
            placed = true;
            return number;
        }).join('');
    }
    const formatted = new Intl.NumberFormat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatLocale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FORMAT_LOCALE"], digits).format(value);
    return `${formatted} %`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/themeSwitching.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1216: Weicher Hell/Dunkel-Wechsel nur im Moment des Umschaltens.
 *
 * globals.css animiert unter `html[data-theme-switching]` Hintergrund-, Schrift-
 * und Rahmenfarbe aller Elemente (mit !important, damit auch Elemente mit
 * eigener Transition mitziehen). Früher galt die Regel unter `html[data-theme]`
 * — also immer — und schaltete jede Komponenten-Transition auf transform,
 * opacity, visibility usw. stumm. Jetzt setzt der Umschalter das Attribut
 * für THEME_SWITCH_MS und nimmt es danach wieder weg.
 */ __turbopack_context__.s([
    "THEME_SWITCH_ATTRIBUTE",
    ()=>THEME_SWITCH_ATTRIBUTE,
    "THEME_SWITCH_MS",
    ()=>THEME_SWITCH_MS,
    "markThemeSwitching",
    ()=>markThemeSwitching
]);
const THEME_SWITCH_ATTRIBUTE = 'data-theme-switching';
const THEME_SWITCH_MS = 300;
let timer;
function markThemeSwitching(root = document.documentElement) {
    root.setAttribute(THEME_SWITCH_ATTRIBUTE, '');
    if (timer) clearTimeout(timer);
    timer = setTimeout(()=>{
        root.removeAttribute(THEME_SWITCH_ATTRIBUTE);
        timer = undefined;
    }, THEME_SWITCH_MS);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TranslateText",
    ()=>TranslateText,
    "useClientSafeTranslation",
    ()=>useClientSafeTranslation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Utility$2f$ClientOnly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Utility/ClientOnly.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
function TranslateText({ text, options }) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Utility$2f$ClientOnly$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        fallback: text,
        children: tr(text, options)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/i18n/ClientTranslation.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
_s(TranslateText, "9eWAcQ+hYfJAaQDurFag27/1OU8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = TranslateText;
function useClientSafeTranslation(lng) {
    _s1();
    const translation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])(lng);
    // Set SSR cookie for Next.js locale
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "useClientSafeTranslation.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && translation.i18n?.language) {
                // Set a cookie for Next.js to use in SSR
                const language = translation.i18n.language;
                document.cookie = `NEXT_LOCALE=${language}; path=/; max-age=31536000; SameSite=Lax`;
            }
        }
    }["useClientSafeTranslation.useEffect"], [
        translation.i18n?.language
    ]);
    return {
        // JSX component for translated text (hydration-safe)
        TranslateText,
        // Regular translation function (use for non-UI values)
        tr: translation.tr,
        // i18n object with language info
        i18n: translation.i18n
    };
}
_s1(useClientSafeTranslation, "zk1vnksBoSEg67a/ScCDeWpD26c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
var _c;
__turbopack_context__.k.register(_c, "TranslateText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useClientTranslation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientSafeTranslation"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript)");
}),
"[project]/apps/web/src/app/i18n/I18nSeed.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nSeed",
    ()=>I18nSeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$locales$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/locales/index.ts [app-client] (ecmascript)");
'use client';
;
;
function I18nSeed({ seed, partial, children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$locales$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedClientTranslations"])(seed, partial);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                id: "__i18n_seed__",
                type: "application/json",
                "data-testid": "i18n-seed",
                "data-scope": partial ? 'public' : undefined,
                "data-langs": Object.keys(seed).join(',')
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/i18n/I18nSeed.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/i18n/I18nSeed.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_c = I18nSeed;
var _c;
__turbopack_context__.k.register(_c, "I18nSeed");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/i18n/I18nSessionPreload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nSessionPreload",
    ()=>I18nSessionPreload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$locales$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/locales/index.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
/** Rückfall für Browser ohne requestIdleCallback (Safari). */ const LEERLAUF_ERSATZ_MS = 1500;
function I18nSessionPreload() {
    _s();
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "I18nSessionPreload.useEffect": ()=>{
            if (status !== 'authenticated' || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$locales$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPartialLocale"])('de')) return undefined;
            const w = window;
            if (w.requestIdleCallback && w.cancelIdleCallback) {
                const id = w.requestIdleCallback({
                    "I18nSessionPreload.useEffect.id": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$locales$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preloadFullLocale"])('de')
                }["I18nSessionPreload.useEffect.id"], {
                    timeout: 3000
                });
                return ({
                    "I18nSessionPreload.useEffect": ()=>w.cancelIdleCallback?.(id)
                })["I18nSessionPreload.useEffect"];
            }
            const timer = setTimeout({
                "I18nSessionPreload.useEffect.timer": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$locales$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preloadFullLocale"])('de')
            }["I18nSessionPreload.useEffect.timer"], LEERLAUF_ERSATZ_MS);
            return ({
                "I18nSessionPreload.useEffect": ()=>clearTimeout(timer)
            })["I18nSessionPreload.useEffect"];
        }
    }["I18nSessionPreload.useEffect"], [
        status
    ]);
    return null;
}
_s(I18nSessionPreload, "0QYjDgLuUUKh7FVzeXPR8PD9xwA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = I18nSessionPreload;
var _c;
__turbopack_context__.k.register(_c, "I18nSessionPreload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "setSsrCookie",
    ()=>setSsrCookie,
    "useClientTranslation",
    ()=>useClientTranslation,
    "useTranslation",
    ()=>useTranslation
]);
// Import React hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$locales$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/locales/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$plural$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/plural.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$translationOrigin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/translationOrigin.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function useTranslation(lng) {
    _s();
    // 🎯 FIX: Get context language for proper fallback when lng is undefined
    const { language: contextLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    // 🎯 FIX: Use context language as fallback instead of just localStorage
    const effectiveLanguage = lng || contextLanguage || 'de';
    // Track current language with state to enable reactivity
    const [currentLang, setCurrentLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useTranslation.useState": ()=>{
            // Initial language determination logic
            let defaultLang = 'de';
            if ("TURBOPACK compile-time truthy", 1) {
                const storedLang = localStorage.getItem('language');
                if (storedLang) {
                    defaultLang = storedLang;
                }
            }
            return effectiveLanguage || defaultLang;
        }
    }["useTranslation.useState"]);
    // 🎯 FIX: Effect to update language when lng prop changes, context changes, or localStorage changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranslation.useEffect": ()=>{
            if (effectiveLanguage !== currentLang) {
                setCurrentLang(effectiveLanguage);
            }
            // Listen for localStorage changes only if no explicit language is provided
            if (!lng && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                const handleStorageChange = {
                    "useTranslation.useEffect.handleStorageChange": (e)=>{
                        if (e.key === 'language' && e.newValue && e.newValue !== currentLang) {
                            setCurrentLang(e.newValue);
                        }
                    }
                }["useTranslation.useEffect.handleStorageChange"];
                window.addEventListener('storage', handleStorageChange);
                return ({
                    "useTranslation.useEffect": ()=>{
                        window.removeEventListener('storage', handleStorageChange);
                    }
                })["useTranslation.useEffect"];
            }
            return undefined;
        }
    }["useTranslation.useEffect"], [
        lng,
        contextLanguage,
        effectiveLanguage,
        currentLang
    ]); // 🎯 FIX: Add contextLanguage and effectiveLanguage as dependencies
    // Re-render when client-side translations load
    const [, setTranslationsVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranslation.useEffect": ()=>{
            const handler = {
                "useTranslation.useEffect.handler": ()=>setTranslationsVersion({
                        "useTranslation.useEffect.handler": (v)=>v + 1
                    }["useTranslation.useEffect.handler"])
            }["useTranslation.useEffect.handler"];
            window.addEventListener('translations-loaded', handler);
            return ({
                "useTranslation.useEffect": ()=>window.removeEventListener('translations-loaded', handler)
            })["useTranslation.useEffect"];
        }
    }["useTranslation.useEffect"], []);
    // Always pass the active locale to getTranslation — it triggers a lazy
    // fetch of the bundle when not yet cached AND falls back through
    // en-GB → de in the meantime. The previous guard (`currentLang in
    // translations ? currentLang : 'de'`) used proxy.has, which doesn't
    // request a load, so non-default locales never showed up — the UI stayed
    // German even after the user picked English.
    const langKey = currentLang;
    // Translation function
    const translateFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTranslation.useCallback[translateFn]": (key, options)=>{
            // Get translation — Plural-Auswahl mit Rückfall auf den Grundschlüssel (#1477, wie server.ts)
            let translation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$plural$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePlural"])({
                "useTranslation.useCallback[translateFn].translation": (k)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$locales$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslation"])(langKey, k)
            }["useTranslation.useCallback[translateFn].translation"], key, options?.count);
            // Use defaultValue when the translation is the key itself (not found)
            if (translation === key && options?.defaultValue && typeof options.defaultValue === 'string') {
                translation = options.defaultValue;
            }
            // Handle variable replacement (including count)
            if (options) {
                Object.keys(options).forEach({
                    "useTranslation.useCallback[translateFn]": (optionKey)=>{
                        if (optionKey === 'defaultValue') return; // Skip defaultValue in replacement
                        const value = options[optionKey];
                        if (value !== undefined) {
                            translation = translation.replace(new RegExp(`\\{\\{${optionKey}\\}\\}`, 'g'), String(value));
                        }
                    }
                }["useTranslation.useCallback[translateFn]"]);
            }
            // #1626: Herkunft merken — gespeicherte Toasts tragen so Schlüssel statt Text
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$translationOrigin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rememberTranslation"])(translation, key, options);
            return translation;
        }
    }["useTranslation.useCallback[translateFn]"], [
        langKey
    ]);
    return {
        tr: translateFn,
        i18n: {
            language: currentLang,
            langKey
        }
    };
}
_s(useTranslation, "pTNhAfUUZ1x2sHv5q8Qpo+yaWuU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"]
    ];
});
const setSsrCookie = (language)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        document.cookie = `NEXT_LOCALE=${language}; path=/; max-age=31536000; SameSite=Lax`;
    }
};
function useClientTranslation(lng) {
    _s1();
    // Get language from context if not explicitly provided
    const { language: contextLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    // IMPORTANT: For consistent reactivity, always prioritize explicitly passed language
    // This ensures components that need to respond immediately to language changes can do so
    const languageToUse = lng || contextLanguage || 'de';
    // Get the translation instance - useTranslation is reactive to language changes
    const translation = useTranslation(languageToUse);
    // Set SSR cookie on client initialization or language change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useClientTranslation.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                setSsrCookie(languageToUse);
            }
        }
    }["useClientTranslation.useEffect"], [
        languageToUse
    ]); // Depend on the final language used, not just context
    // Return the translation with a timestamp to help debug freshness
    return {
        tr: translation.tr,
        i18n: {
            ...translation.i18n,
            timestamp: Date.now() // Add timestamp to detect staleness
        }
    };
}
_s1(useClientTranslation, "/3S12DEejntAMK2rFy+hM8H+HUs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        useTranslation
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// Original translation hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
// `useServerTranslation` is intentionally not re-exported. The barrel is imported
// from client components; re-exporting the server hook drags @/lib/prisma (and pg)
// into the browser bundle. Server-side pages can import directly from `@/app/i18n/server`.
// New hydration-safe translation components and hooks
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript)");
// Settings and configuration
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/settings.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/i18n/locales/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getTranslation",
    ()=>getTranslation,
    "hasTranslation",
    ()=>hasTranslation,
    "isPartialLocale",
    ()=>isPartialLocale,
    "preloadFullLocale",
    ()=>preloadFullLocale,
    "seedClientTranslations",
    ()=>seedClientTranslations,
    "translations",
    ()=>translations
]);
/**
 * Translation access layer.
 *
 * Server: translationCache (in-memory Map from DB) provides instant lookups.
 * Client: fetches translations from /api/plastship/translations/locale?lang=xx
 *         and caches in a Map. Falls back to key string until loaded.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$publicNamespaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/publicNamespaces.ts [app-client] (ecmascript)");
;
function getServerCache() {
    if ("TURBOPACK compile-time truthy", 1) return null;
    //TURBOPACK unreachable
    ;
}
const getDbTranslation = (lang, key)=>getServerCache()?.getTranslation(lang, key) ?? key;
const hasDbTranslation = (lang, key)=>getServerCache()?.hasTranslation(lang, key) ?? false;
const getLocaleTranslations = (lang)=>getServerCache()?.getLocaleTranslations(lang) ?? {};
const getCachedLocales = ()=>getServerCache()?.getCachedLocales() ?? [];
// ---------------------------------------------------------------------------
// Client-side translation cache
// ---------------------------------------------------------------------------
const clientCache = new Map();
const clientCacheLoading = new Set();
// Negative cache: timestamp of the last failed load per locale. Prevents a
// not-yet-ready endpoint (e.g. during a dev recompile, which returns an HTML
// 404 that fails JSON parsing) from being re-fetched on every render.
const clientCacheFailedAt = new Map();
const FAILURE_BACKOFF_MS = 5000;
// #1477: Sprachen, deren Cache nur einen Teil-Seed hält (öffentliche Seiten,
// `data-scope="public"`). Fehlt dort ein Schlüssel, wird die volle Sprache
// nachgeladen und in den Cache gemischt.
const partialLocales = new Set();
const PUBLIC_NAMESPACES = new Set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$publicNamespaces$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PUBLIC_I18N_NAMESPACES"]);
/**
 * Fehlt `key` nur, weil der Teil-Seed seinen Namespace nicht trägt? Schlüssel
 * aus öffentlichen Namespaces (und ohne Punkt) sind im Seed vollständig — fehlt
 * dort einer, fehlt er auch in der vollen Tabelle, Nachladen brächte nichts.
 */ function missingFromPartialSeed(lang, key) {
    if (!partialLocales.has(lang)) return false;
    const dot = key.indexOf('.');
    return dot !== -1 && !PUBLIC_NAMESPACES.has(key.slice(0, dot));
}
// Hydration seed (#1477/#1494): RootLayout gibt die SSR-Sprache als Prop an
// <I18nSeed> (app/i18n/I18nSeed.tsx), das diesen Cache SYNCHRON beim ersten
// Rendern füllt — vor jedem Kind, also vor dem ersten tr(). Damit stimmt der
// erste Client-Render mit dem übersetzten Server-HTML überein (keine
// i18n-Hydration-Fehler). Früher stand der Seed zusätzlich als
// <script id="__i18n_seed__"> im HTML und kam damit doppelt (#1494).
// Fehlt der Seed, greift der asynchrone Lader unten — wie bisher.
let seeded = false;
function seedClientTranslations(seed, partial) {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || seeded) return;
    seeded = true;
    for (const [lang, map] of Object.entries(seed)){
        if (map && typeof map === 'object' && Object.keys(map).length > 0 && !clientCache.has(lang)) {
            clientCache.set(lang, map);
            if (partial) partialLocales.add(lang);
        }
    }
}
// Plausible BCP-47-ish locale codes only. Guards against the translations
// Proxy firing a network fetch for non-locale property probes such as
// `$$typeof` (React element check), `then`, framework internals, etc.
const LOCALE_RE = /^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*$/;
function loadClientTranslations(lang) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!LOCALE_RE.test(lang)) return;
    if (clientCache.has(lang) && !partialLocales.has(lang) || clientCacheLoading.has(lang)) return;
    const failedAt = clientCacheFailedAt.get(lang);
    if (failedAt && Date.now() - failedAt < FAILURE_BACKOFF_MS) return;
    clientCacheLoading.add(lang);
    fetch(`/api/plastship/translations/locale/?lang=${encodeURIComponent(lang)}`).then((res)=>{
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
    }).then((data)=>{
        // Teil-Seed bleibt als Grundlage, die volle Tabelle gewinnt
        clientCache.set(lang, {
            ...clientCache.get(lang),
            ...data
        });
        partialLocales.delete(lang);
        clientCacheLoading.delete(lang);
        clientCacheFailedAt.delete(lang);
        // Trigger re-render in components listening for translations
        window.dispatchEvent(new CustomEvent('translations-loaded', {
            detail: {
                lang
            }
        }));
    }).catch(()=>{
        clientCacheLoading.delete(lang);
        // Back off before retrying so a transient failure doesn't storm the
        // endpoint every render; cleared on the next successful load.
        clientCacheFailedAt.set(lang, Date.now());
    });
}
const translationsProxy = typeof Proxy !== 'undefined' ? new Proxy({}, {
    get (_target, prop) {
        if (prop === 'then' || prop === 'toJSON' || typeof prop === 'symbol') return undefined;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        // Ignore non-locale property probes (e.g. `$$typeof`) so they never
        // trigger a network fetch.
        if (!LOCALE_RE.test(prop)) return {};
        if (!clientCache.has(prop)) loadClientTranslations(prop);
        return clientCache.get(prop) || {};
    },
    has (_target, prop) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return clientCache.has(prop);
    },
    ownKeys () {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return Array.from(clientCache.keys());
    },
    getOwnPropertyDescriptor (_target, prop) {
        const locales = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : Array.from(clientCache.keys());
        if (locales.includes(prop)) {
            const value = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : clientCache.get(prop) || {};
            return {
                configurable: true,
                enumerable: true,
                value
            };
        }
        return undefined;
    }
}) : {};
const translations = translationsProxy;
function isPartialLocale(lang) {
    return partialLocales.has(lang);
}
function preloadFullLocale(lang) {
    if (partialLocales.has(lang)) loadClientTranslations(lang);
}
function hasTranslation(lang, key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const cache = clientCache.get(lang);
    return cache ? key in cache : false;
}
function getTranslation(lang, key) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    if (!clientCache.has(lang)) loadClientTranslations(lang);
    const cache = clientCache.get(lang);
    if (cache?.[key]) return cache[key];
    // #1477: Teil-Seed ohne diesen Schlüssel → volle Sprache nachladen
    if (missingFromPartialSeed(lang, key)) loadClientTranslations(lang);
    // Fallback chain
    const enCache = clientCache.get('en-GB');
    if (enCache?.[key]) return enCache[key];
    const deCache = clientCache.get('de');
    if (deCache?.[key]) return deCache[key];
    if (lang !== 'de' && missingFromPartialSeed('de', key)) loadClientTranslations('de');
    return key;
}
const __TURBOPACK__default__export__ = translations;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/i18n/plural.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Plural-Auswahl für tr(key, { count }) — gemeinsam für Client (client.ts)
 * und Server (server.ts), #1477.
 *
 * count fehlt oder ist 1 → Grundschlüssel; sonst `<key>_plural`. Fehlt der
 * Plural-Schlüssel, gilt der Grundschlüssel — nie der rohe `<key>_plural`
 * (die Slider übergeben count = Anzahl Folien und haben keinen Plural).
 *
 * `lookup` liefert wie getTranslation den Schlüssel selbst, wenn er fehlt.
 */ __turbopack_context__.s([
    "resolvePlural",
    ()=>resolvePlural
]);
function resolvePlural(lookup, key, count) {
    const grund = lookup(key);
    if (count === undefined || count === 1) return grund;
    const pluralKey = `${key}_plural`;
    const plural = lookup(pluralKey);
    return plural === pluralKey ? grund : plural;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/i18n/publicNamespaces.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Namespaces des i18n-Seeds auf öffentlichen Seiten (#1477).
 *
 * Das Root-Layout inlinet die deutsche Sprachtabelle als Hydration-Seed
 * (Prop von `<I18nSeed>`, #1494). Voll sind das alle ~140 Namespaces
 * (~240 KB) — auf Marketing-Seiten also Finance-, Git- und CMS-Admin-Texte in
 * jedem HTML. Öffentliche Routen (Middleware-Header, lib/routing/routeKind.ts)
 * bekommen nur diese Namespaces; interne Routen weiterhin alles.
 *
 * Abgeleitet aus dem Import-Graphen ab jeder öffentlichen Seite (Startseite,
 * CMS-Catch-all, /news, /services, /design-for-recycling, /login, 2FA,
 * Passwort-Reset, E-Mail-Bestätigung, Partner, 404) plus Root-Layout
 * (Cookie-Banner, Provider: QuickWheel, PIA, Prozessfeedback — die berechnen
 * ihre Beschriftungen auch ausgeloggt). Header-Teile für Angemeldete (Suche,
 * Benachrichtigungen, Profil, Arbeitszeit) sind dabei, weil
 * der Header sie importiert. Ausgenommen ist, was erst im Browser nachlädt
 * (`dynamic(…, { ssr: false })`, z. B. die Rollen-Vorschau, #1869): es steht
 * nicht im Server-HTML, ein fehlender Schlüssel lädt die volle Sprache nach.
 *
 * Wächter: tests/i18n/publicNamespacesGuard.test.ts — rendert eine
 * öffentliche Seite einen Namespace, der hier fehlt, schlägt er fehl. Fehlt
 * zur Laufzeit doch ein Schlüssel, lädt der Client die volle Sprache nach
 * (app/i18n/locales/index.ts, `data-scope="public"`).
 *
 * Sortiert nach Code-Einheiten (Array.prototype.sort) — der Test hält das.
 */ __turbopack_context__.s([
    "PUBLIC_I18N_NAMESPACES",
    ()=>PUBLIC_I18N_NAMESPACES,
    "pickNamespaces",
    ()=>pickNamespaces
]);
const PUBLIC_I18N_NAMESPACES = [
    '2fa',
    // #2141: KI-Kennzeichnung (Atom/AiLabel) auf öffentlichen Seiten
    'ai',
    'cms',
    'common',
    'contact',
    'contactLink',
    'cookieBanner',
    'designForRecycling',
    'editableField',
    'entityDetail',
    'entityForm',
    'footer',
    'form',
    'header',
    'heroSlider',
    'imagefilm',
    'login',
    'mapPage',
    'maps',
    'masthead',
    'nav',
    'news',
    'newsCategory',
    'newsDetail',
    'notificationMgmt',
    'notifications',
    'partnerShowroom',
    'passwordReset',
    'passwordResetConfirm',
    'pia',
    'profile',
    'prozessfeedback',
    'quickWheel',
    'salesforceErrors',
    'search',
    'services',
    'team',
    'usage',
    'user',
    'verifyEmail',
    'viewAs',
    'workingHoursTimer'
];
function pickNamespaces(map, namespaces) {
    const erlaubt = new Set(namespaces);
    const auswahl = {};
    for (const [schluessel, text] of Object.entries(map)){
        const punkt = schluessel.indexOf('.');
        if (punkt === -1 || erlaubt.has(schluessel.slice(0, punkt))) auswahl[schluessel] = text;
    }
    return auswahl;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/i18n/settings.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allLocales",
    ()=>allLocales,
    "defaultNS",
    ()=>defaultNS,
    "fallbackLng",
    ()=>fallbackLng,
    "fallbackLngForMissing",
    ()=>fallbackLngForMissing,
    "getOptions",
    ()=>getOptions,
    "isValidLanguage",
    ()=>isValidLanguage,
    "isValidThemeMode",
    ()=>isValidThemeMode,
    "languageNames",
    ()=>languageNames,
    "languages",
    ()=>languages,
    "localeInfo",
    ()=>localeInfo,
    "normalizeLanguageCode",
    ()=>normalizeLanguageCode,
    "validThemeModes",
    ()=>validThemeModes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)");
;
const fallbackLng = 'de';
const fallbackLngForMissing = 'en-GB';
const allLocales = [
    'af',
    'am',
    'ar',
    'az',
    'be',
    'bg',
    'bn',
    'bs',
    'ca',
    'cs',
    'cy',
    'da',
    'de',
    'el',
    'en-GB',
    'en-US',
    'es',
    'et',
    'eu',
    'fa',
    'fi',
    'fr',
    'ga',
    'gl',
    'gu',
    'ha',
    'he',
    'hi',
    'hr',
    'hu',
    'id',
    'ig',
    'is',
    'it',
    'ja',
    'kk',
    'ko',
    'lb',
    'lt',
    'lv',
    'mk',
    'mr',
    'ms',
    'mt',
    'my',
    'ne',
    'nl',
    'no',
    'pa',
    'pl',
    'pt-BR',
    'pt-PT',
    'ro',
    'ru',
    'sk',
    'sl',
    'sq',
    'sr',
    'sv',
    'sw',
    'ta',
    'te',
    'th',
    'tl',
    'tr',
    'uk',
    'ur',
    'uz',
    'vi',
    'yo',
    'zh',
    'zh-CN',
    'zu'
];
const languages = allLocales;
const validThemeModes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].LIGHT,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK
];
const isValidLanguage = (lang)=>{
    return lang !== null && lang !== undefined && languages.includes(lang);
};
const isValidThemeMode = (theme)=>{
    return theme !== null && theme !== undefined && Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"]).includes(theme);
};
const normalizeLanguageCode = (code)=>{
    if (!code) return fallbackLng;
    // First check if it's already valid
    if (isValidLanguage(code)) return code;
    const normalizedCode = code.toLowerCase().trim();
    // Common mappings for invalid codes
    const languageMapping = {
        // English variations - map to UK English as standard
        en: 'en-GB',
        english: 'en-GB',
        // Spanish variations
        espanol: 'es',
        español: 'es',
        spanish: 'es',
        // German variations
        deutsch: 'de',
        german: 'de',
        // French variations
        francais: 'fr',
        français: 'fr',
        french: 'fr',
        // Italian variations
        italiano: 'it',
        italian: 'it',
        // Portuguese variations
        portugues: 'pt-BR',
        português: 'pt-BR',
        portuguese: 'pt-BR',
        // Other common variations
        chinese: 'zh-CN',
        japanese: 'ja',
        arabic: 'ar',
        russian: 'ru',
        dutch: 'nl',
        polish: 'pl',
        turkish: 'tr',
        korean: 'ko',
        hindi: 'hi'
    };
    return languageMapping[normalizedCode] || fallbackLng;
};
const defaultNS = 'common';
const localeInfo = {
    af: {
        english: 'Afrikaans',
        native: 'Afrikaans'
    },
    am: {
        english: 'Amharic',
        native: 'አማርኛ'
    },
    ar: {
        english: 'Arabic',
        native: 'العربية'
    },
    az: {
        english: 'Azerbaijani',
        native: 'Azərbaycan'
    },
    be: {
        english: 'Belarusian',
        native: 'Беларуская'
    },
    bg: {
        english: 'Bulgarian',
        native: 'Български'
    },
    bn: {
        english: 'Bengali',
        native: 'বাংলা'
    },
    bs: {
        english: 'Bosnian',
        native: 'Bosanski'
    },
    ca: {
        english: 'Catalan',
        native: 'Català'
    },
    cs: {
        english: 'Czech',
        native: 'Čeština'
    },
    cy: {
        english: 'Welsh',
        native: 'Cymraeg'
    },
    da: {
        english: 'Danish',
        native: 'Dansk'
    },
    de: {
        english: 'German',
        native: 'Deutsch'
    },
    el: {
        english: 'Greek',
        native: 'Ελληνικά'
    },
    'en-GB': {
        english: 'English (UK)',
        native: 'English (UK)'
    },
    'en-US': {
        english: 'English (US)',
        native: 'English (US)'
    },
    es: {
        english: 'Spanish',
        native: 'Español'
    },
    et: {
        english: 'Estonian',
        native: 'Eesti'
    },
    eu: {
        english: 'Basque',
        native: 'Euskara'
    },
    fa: {
        english: 'Persian',
        native: 'فارسی'
    },
    fi: {
        english: 'Finnish',
        native: 'Suomi'
    },
    fr: {
        english: 'French',
        native: 'Français'
    },
    ga: {
        english: 'Irish',
        native: 'Gaeilge'
    },
    gl: {
        english: 'Galician',
        native: 'Galego'
    },
    gu: {
        english: 'Gujarati',
        native: 'ગુજરાતી'
    },
    ha: {
        english: 'Hausa',
        native: 'Hausa'
    },
    he: {
        english: 'Hebrew',
        native: 'עברית'
    },
    hi: {
        english: 'Hindi',
        native: 'हिन्दी'
    },
    hr: {
        english: 'Croatian',
        native: 'Hrvatski'
    },
    hu: {
        english: 'Hungarian',
        native: 'Magyar'
    },
    id: {
        english: 'Indonesian',
        native: 'Bahasa Indonesia'
    },
    ig: {
        english: 'Igbo',
        native: 'Igbo'
    },
    is: {
        english: 'Icelandic',
        native: 'Íslenska'
    },
    it: {
        english: 'Italian',
        native: 'Italiano'
    },
    ja: {
        english: 'Japanese',
        native: '日本語'
    },
    kk: {
        english: 'Kazakh',
        native: 'Қазақша'
    },
    ko: {
        english: 'Korean',
        native: '한국어'
    },
    lb: {
        english: 'Luxembourgish',
        native: 'Lëtzebuergesch'
    },
    lt: {
        english: 'Lithuanian',
        native: 'Lietuvių'
    },
    lv: {
        english: 'Latvian',
        native: 'Latviešu'
    },
    mk: {
        english: 'Macedonian',
        native: 'Македонски'
    },
    mr: {
        english: 'Marathi',
        native: 'मराठी'
    },
    ms: {
        english: 'Malay',
        native: 'Bahasa Melayu'
    },
    mt: {
        english: 'Maltese',
        native: 'Malti'
    },
    my: {
        english: 'Burmese',
        native: 'မြန်မာ'
    },
    ne: {
        english: 'Nepali',
        native: 'नेपाली'
    },
    nl: {
        english: 'Dutch',
        native: 'Nederlands'
    },
    no: {
        english: 'Norwegian',
        native: 'Norsk'
    },
    pa: {
        english: 'Punjabi',
        native: 'ਪੰਜਾਬੀ'
    },
    pl: {
        english: 'Polish',
        native: 'Polski'
    },
    'pt-BR': {
        english: 'Portuguese (Brazil)',
        native: 'Português (Brasil)'
    },
    'pt-PT': {
        english: 'Portuguese (Portugal)',
        native: 'Português (Portugal)'
    },
    ro: {
        english: 'Romanian',
        native: 'Română'
    },
    ru: {
        english: 'Russian',
        native: 'Русский'
    },
    sk: {
        english: 'Slovak',
        native: 'Slovenčina'
    },
    sl: {
        english: 'Slovenian',
        native: 'Slovenščina'
    },
    sq: {
        english: 'Albanian',
        native: 'Shqip'
    },
    sr: {
        english: 'Serbian',
        native: 'Српски'
    },
    sv: {
        english: 'Swedish',
        native: 'Svenska'
    },
    sw: {
        english: 'Swahili',
        native: 'Kiswahili'
    },
    ta: {
        english: 'Tamil',
        native: 'தமிழ்'
    },
    te: {
        english: 'Telugu',
        native: 'తెలుగు'
    },
    th: {
        english: 'Thai',
        native: 'ไทย'
    },
    tl: {
        english: 'Filipino',
        native: 'Filipino'
    },
    tr: {
        english: 'Turkish',
        native: 'Türkçe'
    },
    uk: {
        english: 'Ukrainian',
        native: 'Українська'
    },
    ur: {
        english: 'Urdu',
        native: 'اردو'
    },
    uz: {
        english: 'Uzbek',
        native: 'Oʻzbek'
    },
    vi: {
        english: 'Vietnamese',
        native: 'Tiếng Việt'
    },
    yo: {
        english: 'Yoruba',
        native: 'Yorùbá'
    },
    zh: {
        english: 'Chinese (Traditional)',
        native: '中文 (繁體)'
    },
    'zh-CN': {
        english: 'Chinese (Simplified)',
        native: '中文 (简体)'
    },
    zu: {
        english: 'Zulu',
        native: 'isiZulu'
    }
};
const languageNames = Object.fromEntries(Object.entries(localeInfo).map(([k, v])=>[
        k,
        v.native
    ]));
function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        supportedLngs: languages,
        fallbackLng: [
            fallbackLng,
            fallbackLngForMissing
        ],
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns,
        load: 'currentOnly',
        interpolation: {
            escapeValue: false // React already escapes values
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/apiCapture.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1137: true, wenn der axios-Interceptor (lib/axios.ts) diesen Fehler schon an
 * Sentry gemeldet hat (`sentryCaptured` am Fehler). Die globalen
 * react-query-Handler (providers.tsx) überspringen solche Fehler, sonst
 * erschiene jeder fehlgeschlagene Query zweimal.
 *
 * #1478: eigene Datei ohne axios-Import — die Basis-Provider jeder Seite
 * brauchen nur diese Prüfung, nicht den HTTP-Client.
 */ __turbopack_context__.s([
    "wasCapturedByApiClient",
    ()=>wasCapturedByApiClient
]);
function wasCapturedByApiClient(error) {
    return error?.sentryCaptured === true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/currentLanguageTr.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "currentLanguage",
    ()=>currentLanguage,
    "trCurrentLanguage",
    ()=>trCurrentLanguage
]);
/**
 * #1636: `tr` für Code außerhalb von React-Hooks (z. B. `getApiErrorMessage`).
 *
 * Die Sprache, die die Oberfläche gerade zeigt, schreibt der
 * `UserPreferencesProvider` als `data-language` ans `<html>` (inkl. Pfad-Sprache
 * öffentlicher Seiten). Fehlt das Attribut (noch nicht hydriert), gilt wie in
 * `useTranslation` die gespeicherte Wahl, sonst Deutsch. Nachschlagen,
 * Plural-Auswahl, `defaultValue` und Platzhalter wie in `i18n/client.ts`.
 *
 * Nur für einmalige Texte (Toasts) — ein Hook rendert bei Sprachwechsel neu,
 * diese Funktion nicht.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$locales$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/locales/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$plural$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/plural.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$translationOrigin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/translationOrigin.ts [app-client] (ecmascript)");
;
;
;
;
function currentLanguage() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const fromDocument = document.documentElement?.getAttribute('data-language');
    if (fromDocument) return fromDocument;
    try {
        return window.localStorage.getItem('language') || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackLng"];
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackLng"];
    }
}
function trCurrentLanguage(key, options) {
    const lang = currentLanguage();
    // Das Nachschlagen stößt bei Bedarf das Nachladen der Sprache an. Scheitert
    // das (kein fetch, Netz weg), bleibt es beim defaultValue — diese Funktion
    // läuft in Fehlerpfaden und darf dort nicht selbst werfen.
    let translation = key;
    try {
        translation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$plural$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolvePlural"])((k)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$locales$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTranslation"])(lang, k), key, options?.count);
    } catch  {
        translation = key;
    }
    if (translation === key && typeof options?.defaultValue === 'string') {
        translation = options.defaultValue;
    }
    for (const [name, value] of Object.entries(options ?? {})){
        if (name === 'defaultValue' || value === undefined) continue;
        // Funktion als Ersatz: `$&` u. Ä. im Wert bleibt wörtlich
        translation = translation.replace(new RegExp(`\\{\\{${name}\\}\\}`, 'g'), ()=>String(value));
    }
    // #1626: Herkunft merken (gespeicherte Toasts, app/lib/translationOrigin.ts)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$translationOrigin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rememberTranslation"])(translation, key, options);
    return translation;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/formatLocale.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1640: welche `Intl`-Locale gehört zur Sprache der Oberfläche?
 *
 * Die eine Stelle für die Zuordnung App-Sprache (`app/i18n/settings.ts`,
 * 73 Codes) → BCP-47-Locale für `Intl.DateTimeFormat`, `Intl.NumberFormat`,
 * `Intl.RelativeTimeFormat` und `toLocale…String`. Rein, ohne React, auch auf
 * dem Server lauffähig.
 *
 * Nur Codes, deren Region für Datum/Zahl einen Unterschied macht oder die
 * `Intl` anders schreibt, stehen in der Tabelle; alle übrigen Codes sind
 * bereits gültige Sprach-Tags und gehen unverändert durch. Unbekanntes oder
 * Ungültiges fällt auf Deutsch zurück — wie die Übersetzungen.
 */ /** Locale, wenn keine Sprache bekannt ist (Server, Dokumente, Altaufrufe). */ __turbopack_context__.s([
    "DEFAULT_FORMAT_LOCALE",
    ()=>DEFAULT_FORMAT_LOCALE,
    "formatLocaleFor",
    ()=>formatLocaleFor
]);
const DEFAULT_FORMAT_LOCALE = 'de-DE';
const LOCALE_BY_LANGUAGE = {
    de: 'de-DE',
    // Englisch der App ist britisch (`normalizeLanguageCode`: en → en-GB)
    en: 'en-GB',
    'en-GB': 'en-GB',
    'en-US': 'en-US',
    fr: 'fr-FR',
    es: 'es-ES',
    it: 'it-IT',
    nl: 'nl-NL',
    pl: 'pl-PL',
    pt: 'pt-PT',
    'pt-BR': 'pt-BR',
    'pt-PT': 'pt-PT',
    // `no` kennt ICU nur als Makrosprache; Bokmål ist die Schriftsprache
    no: 'nb-NO',
    // `tl` ist in CLDR ein Alias für Filipino
    tl: 'fil',
    zh: 'zh-CN',
    'zh-CN': 'zh-CN'
};
function isSupported(locale) {
    try {
        return Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]).length > 0;
    } catch  {
        return false;
    }
}
function formatLocaleFor(language) {
    const code = language?.trim();
    if (!code) return DEFAULT_FORMAT_LOCALE;
    const mapped = LOCALE_BY_LANGUAGE[code] ?? LOCALE_BY_LANGUAGE[code.toLowerCase()] ?? code;
    let canonical;
    try {
        canonical = Intl.getCanonicalLocales(mapped)[0];
    } catch  {
        return DEFAULT_FORMAT_LOCALE;
    }
    if (!canonical || !isSupported(canonical)) return DEFAULT_FORMAT_LOCALE;
    return canonical;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/formatters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dateTimeFormat",
    ()=>dateTimeFormat,
    "formattersFor",
    ()=>formattersFor,
    "numberFormat",
    ()=>numberFormat
]);
/**
 * #1640: Anzeigeformate in der Sprache der Oberfläche.
 *
 * `formattersFor(language)` bindet die reinen Helfer (`formatDate`,
 * `formatCurrency`, `formatPercent`, `formatIsoDate`) und `Intl` an die
 * Locale der App-Sprache (`formatLocaleFor`). Je Sprache gibt es genau ein
 * Objekt mit stabilen Funktionen; `Intl`-Instanzen werden je Locale und
 * Optionen wiederverwendet.
 *
 * In Komponenten: `useFormatters()` (`app/hooks/useFormatters`). Außerhalb von
 * React-Hooks: `formattersFor(currentLanguage())`.
 *
 * Nur Anzeige — was ein Nutzer in ein Feld tippt und was geparst oder
 * gesendet wird, bleibt bei seinem eigenen Format.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/formatDate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/formatCurrency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatPercent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/formatPercent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$time$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/time/format.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatLocale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/formatLocale.ts [app-client] (ecmascript)");
;
;
;
;
;
const dateTimeFormats = new Map();
const numberFormats = new Map();
const relativeFormats = new Map();
function cached(cache, locale, options, create) {
    const key = `${locale}|${JSON.stringify(options)}`;
    let instance = cache.get(key);
    if (!instance) {
        instance = create();
        cache.set(key, instance);
    }
    return instance;
}
function dateTimeFormat(locale, options = {}) {
    return cached(dateTimeFormats, locale, options, ()=>new Intl.DateTimeFormat(locale, options));
}
function numberFormat(locale, options = {}) {
    return cached(numberFormats, locale, options, ()=>new Intl.NumberFormat(locale, options));
}
function relativeFormat(locale, options) {
    return cached(relativeFormats, locale, options, ()=>new Intl.RelativeTimeFormat(locale, options));
}
function toDate(value) {
    if (value === null || value === undefined || value === '') return null;
    const date = value instanceof Date ? value : new Date(value);
    return Number.isNaN(date.getTime()) ? null : date;
}
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
/** Größte sinnvolle Einheit für einen Abstand in Millisekunden. */ function relativeUnit(diffMs) {
    const abs = Math.abs(diffMs);
    const sign = diffMs < 0 ? -1 : 1;
    const whole = (unit)=>sign * Math.floor(abs / unit);
    if (abs < MINUTE) return [
        whole(SECOND),
        'second'
    ];
    if (abs < HOUR) return [
        whole(MINUTE),
        'minute'
    ];
    if (abs < DAY) return [
        whole(HOUR),
        'hour'
    ];
    if (abs < 7 * DAY) return [
        whole(DAY),
        'day'
    ];
    if (abs < 30 * DAY) return [
        whole(7 * DAY),
        'week'
    ];
    if (abs < 365 * DAY) return [
        whole(30 * DAY),
        'month'
    ];
    return [
        whole(365 * DAY),
        'year'
    ];
}
/** Wochentag 0 = Montag (wie `weekdayIndex` in `lib/time`). 2024-01-01 war ein Montag. */ const MONDAY_UTC = Date.UTC(2024, 0, 1);
function createFormatters(language) {
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatLocale$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatLocaleFor"])(language);
    return {
        /** App-Sprache, für die diese Formate gelten. */ language,
        /** `Intl`-Locale der App-Sprache (z. B. 'de-DE', 'en-GB'). */ locale,
        // ── Datum / Zeit ───────────────────────────────────────────────────────
        /** `formatDate` in der Locale ('-' bei leer/ungültig). */ date: (value, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDate"])(value, {
                ...options,
                locale
            }),
        dateTime: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTime"])(value, locale),
        /** Kompakt: Datum mit zweistelligem Jahr und Uhrzeit. */ dateTimeShort: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateTimeShort"])(value, locale),
        dateShort: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateShort"])(value, locale),
        dateLong: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateLong"])(value, locale),
        /** Heute / Gestern / vor n Tagen, sonst Datum. */ dateRelative: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatDateRelative"])(value, locale),
        salesforceDate: (value, includeTime = false)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatDate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSalesforceDate"])(value, includeTime, locale),
        /** Kalendertag 'YYYY-MM-DD' ohne Zeitzonenverschiebung ('' bei leer). */ isoDate: (value, options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$time$2f$format$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIsoDate"])(value, locale, options),
        /**
     * Freies `Intl.DateTimeFormat` mit eigenen Optionen; `fallback` (Standard
     * '') bei leer/ungültig.
     */ dateWith: (value, options, fallback = '')=>{
            const date = toDate(value);
            return date ? dateTimeFormat(locale, options).format(date) : fallback;
        },
        /** Uhrzeit, Standard Stunde:Minute. */ time: (value, options = {
            hour: '2-digit',
            minute: '2-digit'
        }, fallback = '')=>{
            const date = toDate(value);
            return date ? dateTimeFormat(locale, options).format(date) : fallback;
        },
        /** Monatsname, `month` 0 = Januar. */ monthName: (month, width = 'long')=>dateTimeFormat(locale, {
                month: width,
                timeZone: 'UTC'
            }).format(Date.UTC(2024, month, 1)),
        /** Wochentagsname, `weekday` 0 = Montag. */ weekdayName: (weekday, width = 'short')=>dateTimeFormat(locale, {
                weekday: width,
                timeZone: 'UTC'
            }).format(MONDAY_UTC + weekday * DAY),
        // ── Relative Zeit ──────────────────────────────────────────────────────
        /** `Intl.RelativeTimeFormat`: (-3, 'day') → "vor 3 Tagen" / "3 days ago". */ relative: (amount, unit, options = {
            numeric: 'auto'
        })=>relativeFormat(locale, options).format(amount, unit),
        /**
     * Abstand eines Zeitpunkts zu `now` in der größten passenden Einheit
     * ("vor 5 Minuten", "in 2 days"); `fallback` bei leer/ungültig.
     */ relativeTime: (value, now = Date.now(), options = {
            numeric: 'auto'
        }, fallback = '')=>{
            const date = toDate(value);
            if (!date) return fallback;
            const [amount, unit] = relativeUnit(date.getTime() - (now instanceof Date ? now.getTime() : now));
            return relativeFormat(locale, options).format(amount, unit);
        },
        // ── Zahlen ─────────────────────────────────────────────────────────────
        /** Zahl in der Locale; `emptyValue` (Standard '-') bei null/undefined/NaN. */ number: (value, options = {})=>{
            const { emptyValue = '-', ...intl } = options;
            if (value === null || value === undefined || Number.isNaN(value)) return emptyValue;
            return numberFormat(locale, intl).format(value);
        },
        /** `formatCurrency` in der Locale (Währung Standard EUR). */ currency: (value, currencyOrOptions = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatCurrency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(value, {
                ...typeof currencyOrOptions === 'string' ? {
                    currency: currencyOrOptions
                } : currencyOrOptions,
                locale
            }),
        /** `formatPercent` in der Locale — Wert auf der 0–100-Skala. */ percent: (value, options = {})=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$formatPercent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercent"])(value, {
                ...options,
                locale
            }),
        /** Dateigröße mit Einheitensymbol (B, KB, MB, GB; Basis 1024). */ fileSize: (bytes, maximumFractionDigits = 1, emptyValue = '-')=>{
            if (bytes === null || bytes === undefined || Number.isNaN(bytes)) return emptyValue;
            const units = [
                'B',
                'KB',
                'MB',
                'GB',
                'TB'
            ];
            let size = bytes;
            let unit = 0;
            while(Math.abs(size) >= 1024 && unit < units.length - 1){
                size /= 1024;
                unit += 1;
            }
            return `${numberFormat(locale, {
                maximumFractionDigits: unit === 0 ? 0 : maximumFractionDigits
            }).format(size)} ${units[unit]}`;
        }
    };
}
const byLanguage = new Map();
function formattersFor(language) {
    const key = language?.trim() || '';
    let formatters = byLanguage.get(key);
    if (!formatters) {
        formatters = createFormatters(key);
        byLanguage.set(key, formatters);
    }
    return formatters;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/notificationText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MESSAGE_ROOT",
    ()=>MESSAGE_ROOT,
    "TITLE_ROOT",
    ()=>TITLE_ROOT,
    "encodeDate",
    ()=>encodeDate,
    "encodeDay",
    ()=>encodeDay,
    "encodeEntityText",
    ()=>encodeEntityText,
    "encodeParams",
    ()=>encodeParams,
    "encodeText",
    ()=>encodeText,
    "formatNotificationDate",
    ()=>formatNotificationDate,
    "formatNotificationDay",
    ()=>formatNotificationDay,
    "resolveNotificationText",
    ()=>resolveNotificationText
]);
/**
 * #1626: Gespeicherte Benachrichtigungen in der Sprache des LESERS.
 *
 * Eine Benachrichtigung speichert `titleKey`/`titleDefault`,
 * `messageKey`/`messageDefault` und ein flaches `params` (Json). Platzhalter,
 * die selbst übersetzt werden müssen (Status, Feldname, Aktion „Gespeichert",
 * Zeitpunkt), legt `encodeText` in `params` unter Pfadnamen ab — ohne neue
 * Spalten:
 *
 *   <pfad>            fertiger Text in der Sprache des Absenders (Rückfall)
 *   <pfad>~key        Übersetzungsschlüssel
 *   <pfad>~date       ISO-Zeitpunkt, beim Lesen im Format der Lesersprache
 *   <pfad>~et         Daten-Text (Objekt-Label, Status): beim Lesen über den
 *                     aus dem Text abgeleiteten Schlüssel (`translateEntityText`)
 *   <pfad>~p.<name>   Platzhalter <name> des Schlüssels (rekursiv gleich)
 *
 * Titel und Nachricht hängen unter den Wurzeln `~t` und `~m`; ihr Schlüssel
 * steht in `titleKey`/`messageKey`. Einfache Einträge ohne `~` (bisheriges
 * `persistParams`) gelten wie bisher für beide.
 *
 * Bereits gespeicherte Benachrichtigungen haben keine `~`-Einträge und
 * erscheinen unverändert.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$translationOrigin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/translationOrigin.ts [app-client] (ecmascript)");
;
const TITLE_ROOT = '~t';
const MESSAGE_ROOT = '~m';
const KEY = '~key';
const DATE = '~date';
const DAY = '~day';
const ENTITY_TEXT = '~et';
const PARAM = '~p.';
const MAX_TIEFE = 3;
function encodeParams(params, path, options, depth = 0) {
    for (const [name, wert] of Object.entries(options ?? {})){
        if (name === 'defaultValue' || wert === undefined || wert === null) continue;
        const child = `${path}${PARAM}${name}`;
        if (typeof wert === 'number') params[child] = wert;
        else encodeText(params, child, String(wert), depth + 1);
    }
}
function encodeText(params, path, text, depth = 0) {
    params[path] = text;
    if (depth > MAX_TIEFE) return;
    const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$translationOrigin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translationOrigin"])(text);
    if (!origin) return;
    params[`${path}${KEY}`] = origin.key;
    encodeParams(params, path, origin.options, depth);
}
function encodeEntityText(params, path, text) {
    params[path] = text;
    params[`${path}${ENTITY_TEXT}`] = 1;
}
function encodeDate(params, path, text, date) {
    params[path] = text;
    params[`${path}${DATE}`] = date.toISOString();
}
function encodeDay(params, root, name, isoDate, text = isoDate) {
    const path = `${root}${PARAM}${name}`;
    params[path] = text;
    params[`${path}${DAY}`] = isoDate;
}
function formatNotificationDay(isoDate, language) {
    const date = new Date(`${isoDate.slice(0, 10)}T00:00:00Z`);
    if (Number.isNaN(date.getTime())) return null;
    try {
        return date.toLocaleDateString(localeOf(language), {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            timeZone: 'UTC'
        });
    } catch  {
        return null;
    }
}
/** Namen der direkten Platzhalter unter `path`. */ function childNames(params, path) {
    const prefix = `${path}${PARAM}`;
    const names = new Set();
    for (const name of Object.keys(params)){
        if (!name.startsWith(prefix)) continue;
        const rest = name.slice(prefix.length);
        const ende = rest.indexOf('~');
        names.add(ende === -1 ? rest : rest.slice(0, ende));
    }
    return [
        ...names
    ];
}
/** Gebräuchliche Locale zum Sprachcode (`de` → `de-DE`). */ function localeOf(language) {
    if (!language || /^de$/i.test(language)) return 'de-DE';
    if (/^en$/i.test(language)) return 'en-GB';
    return language;
}
function formatNotificationDate(iso, language) {
    const date = new Date(iso);
    if (Number.isNaN(date.getTime())) return null;
    try {
        return date.toLocaleString(localeOf(language), {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch  {
        return null;
    }
}
function resolveChildren(params, path, ctx) {
    const result = {};
    for (const name of childNames(params, path)){
        const child = `${path}${PARAM}${name}`;
        const wert = params[child];
        result[name] = typeof wert === 'number' ? wert : resolveNode(params, child, ctx);
    }
    return result;
}
/** Einen abgelegten Text in der Lesersprache; Rückfall der fertige Text. */ function resolveNode(params, path, ctx) {
    const fallback = params[path] == null ? '' : String(params[path]);
    const iso = params[`${path}${DATE}`];
    if (typeof iso === 'string') return formatNotificationDate(iso, ctx.language) ?? fallback;
    const day = params[`${path}${DAY}`];
    if (typeof day === 'string') return formatNotificationDay(day, ctx.language) ?? fallback;
    if (params[`${path}${ENTITY_TEXT}`] != null && ctx.entityText && fallback) {
        try {
            return ctx.entityText(fallback) || fallback;
        } catch  {
            return fallback;
        }
    }
    const key = params[`${path}${KEY}`];
    if (typeof key !== 'string' || !key) return fallback;
    try {
        const text = ctx.tr(key, {
            ...resolveChildren(params, path, ctx),
            defaultValue: fallback
        });
        return text && text !== key ? text : fallback;
    } catch  {
        return fallback;
    }
}
/** Einfache Platzhalter (bisheriges `persistParams`) — gelten für Titel und Nachricht. */ function plainParams(params) {
    const result = {};
    for (const [name, wert] of Object.entries(params)){
        if (!name.startsWith('~')) result[name] = wert;
    }
    return result;
}
function resolveRoot(params, root, key, fallback, ctx) {
    const options = {
        ...plainParams(params),
        ...resolveChildren(params, root, ctx)
    };
    try {
        const text = ctx.tr(key, {
            ...options,
            defaultValue: fallback
        });
        return text && text !== key ? text : fallback;
    } catch  {
        return fallback;
    }
}
function resolveNotificationText(notification, tr, language, entityText) {
    const ctx = {
        tr,
        language,
        entityText
    };
    const params = {};
    for (const [name, wert] of Object.entries(notification.params ?? {})){
        if (typeof wert === 'string' || typeof wert === 'number') params[name] = wert;
    }
    const title = notification.titleKey ? resolveRoot(params, TITLE_ROOT, notification.titleKey, notification.titleDefault, ctx) : notification.titleDefault;
    let message = null;
    if (notification.messageKey) {
        message = resolveRoot(params, MESSAGE_ROOT, notification.messageKey, notification.messageDefault ?? '', ctx);
    } else if (notification.messageDefault) {
        message = notification.messageDefault;
    }
    return {
        title,
        message: message || null
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTEXT_MESSAGE_KEY",
    ()=>CONTEXT_MESSAGE_KEY,
    "CONTEXT_MESSAGE_NO_ACTION_KEY",
    ()=>CONTEXT_MESSAGE_NO_ACTION_KEY,
    "setToastDispatch",
    ()=>setToastDispatch,
    "setToastPersistence",
    ()=>setToastPersistence,
    "toast",
    ()=>toast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityHelpers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/currentLanguageTr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/formatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$translationOrigin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/translationOrigin.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/notificationText.ts [app-client] (ecmascript)");
;
;
;
;
;
;
// Module-level dispatch reference, set by ToastContext on mount
let dispatch = null;
function setToastDispatch(d) {
    dispatch = d;
}
// #1548: Speichern als Benachrichtigung nur, wenn die API auch antwortet. Ohne
// Sitzung (Login, öffentliche Seiten) und in der Teil-Sitzung (Startpasswort,
// offener zweiter Faktor) gibt POST /api/notifications/ 401 — jede Meldung am
// Bildschirm erzeugte so eine 401 im Caddy-Protokoll. Den Schalter stellt der
// NotificationProvider, sobald die Sitzung vollständig ist.
let persistenceEnabled = false;
function setToastPersistence(enabled) {
    persistenceEnabled = enabled;
}
/**
 * Extract plain text from ReactNode content for DB persistence.
 * Handles strings directly; for JSX/object content returns empty string
 * (callers should use persistTitleKey/persistTitleDefault instead).
 */ function extractText(content) {
    if (typeof content === 'string') return content;
    if (typeof content === 'number') return String(content);
    // JSX elements, null, undefined, boolean — cannot extract meaningful text
    return '';
}
/**
 * Map ToastType to notification type string for the DB.
 */ function mapToNotificationType(type) {
    switch(type){
        case 'success':
            return 'success';
        case 'error':
            return 'error';
        case 'warning':
            return 'warning';
        case 'info':
            return 'info';
        default:
            return 'system';
    }
}
/**
 * Format a timestamp as date + HH:mm in the language of the UI (#1640; ohne
 * Hook, die Meldung entsteht außerhalb von React).
 */ function formatTimestamp(now = new Date()) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formattersFor"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["currentLanguage"])()).dateWith(now, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}
/**
 * Build a rich messageDefault from entity context.
 *
 * Format: "{entityName} — {timestamp} — {action}"
 * Example: "Case #00012345 — 26.02.2026, 14:32 — Status → Closed"
 *
 * #1241 (M-19/E-2): keine Record-Id im Text — die Meldung landet in der
 * Benachrichtigungszentrale jeder Rolle. Die Id steckt nur im `link`
 * (Navigation), ohne Namen steht das Objekt-Label.
 */ function buildContextMessage(ctx, now = new Date()) {
    const parts = [];
    parts.push(ctx.entityName?.trim() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityLabel"])(ctx.entityType));
    // Timestamp
    parts.push(formatTimestamp(now));
    // Action
    if (ctx.action) {
        parts.push(ctx.action);
    }
    return parts.join(' — ');
}
const CONTEXT_MESSAGE_KEY = 'notifications.context.message';
const CONTEXT_MESSAGE_NO_ACTION_KEY = 'notifications.context.messageNoAction';
/**
 * #1626: Kontext-Nachricht als Schlüssel + Platzhalter — Objektname (ohne
 * Namen das Objekt-Label, übersetzt wie überall über seinen Text-Schlüssel),
 * Zeitpunkt (Format der Lesersprache) und Aktion (Schlüssel aus `tr`).
 * Die Wurzel-Platzhalter heißen entity, time, action.
 */ function encodeContextMessage(ctx, now, params) {
    const name = ctx.entityName?.trim();
    const entityPath = `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGE_ROOT"]}~p.entity`;
    if (name) (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeText"])(params, entityPath, name);
    else (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeEntityText"])(params, entityPath, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityLabel"])(ctx.entityType));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDate"])(params, `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGE_ROOT"]}~p.time`, formatTimestamp(now), now);
    if (ctx.action) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeText"])(params, `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGE_ROOT"]}~p.action`, ctx.action);
        return CONTEXT_MESSAGE_KEY;
    }
    return CONTEXT_MESSAGE_NO_ACTION_KEY;
}
/**
 * Persist notification to the database via POST /api/notifications.
 * Now stores i18n keys + params instead of rendered text.
 * Fire-and-forget — does not block the toast from showing.
 */ function persistNotification(type, content, options) {
    // Determine titleKey and titleDefault
    let titleKey = options?.persistTitleKey;
    let titleDefault = options?.persistTitleDefault;
    // #1626: Platzhalter, die beim Lesen selbst übersetzt werden (app/lib/notificationText.ts)
    const encoded = {};
    // If no explicit key/default provided, try extracting from plain text content
    if (!titleKey && !titleDefault) {
        const text = extractText(content);
        if (!text) return; // JSX content with no persist options → skip persistence
        // #1626: Text aus `tr(…)` → dessen Schlüssel + Platzhalter, Text als Rückfall
        const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$translationOrigin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translationOrigin"])(text);
        if (origin) {
            titleKey = origin.key;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeParams"])(encoded, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TITLE_ROOT"], origin.options);
        } else {
            // Use the text itself as both key and default (legacy/simple mode)
            titleKey = text;
        }
        titleDefault = text;
    }
    // #1626: eigener Titeltext ohne Schlüssel — ebenfalls über seine Herkunft
    if (!titleKey && titleDefault) {
        const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$translationOrigin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translationOrigin"])(titleDefault);
        if (origin) {
            titleKey = origin.key;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeParams"])(encoded, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TITLE_ROOT"], origin.options);
        }
    }
    // Ensure we have at least a titleDefault
    if (!titleDefault) titleDefault = titleKey || '';
    if (!titleKey) titleKey = titleDefault;
    // Build messageDefault from entity context if provided
    let messageDefault = options?.persistMessageDefault || null;
    let messageKey = options?.persistMessageKey || null;
    let link = options?.link || null;
    // #1626: Nachrichtentext ohne Schlüssel (z. B. übersetzte Server-Meldung) — über seine Herkunft
    if (messageDefault && !messageKey) {
        const origin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$translationOrigin$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translationOrigin"])(messageDefault);
        if (origin) {
            messageKey = origin.key;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeParams"])(encoded, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGE_ROOT"], origin.options);
        }
    }
    const ctx = options?.context;
    if (ctx) {
        // Auto-build messageDefault from context (unless explicitly provided)
        if (!messageDefault) {
            const now = new Date();
            messageDefault = buildContextMessage(ctx, now);
            if (!messageKey) messageKey = encodeContextMessage(ctx, now, encoded);
        }
        // Auto-build link from context (unless explicitly provided)
        if (!link) {
            link = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEntityDetailPath"])(ctx.entityType, ctx.entityId);
        }
    }
    const hasEncoded = Object.keys(encoded).length > 0;
    const params = options?.persistParams || hasEncoded ? {
        ...options?.persistParams ?? {},
        ...encoded
    } : null;
    const body = {
        type: mapToNotificationType(type),
        titleKey,
        titleDefault,
        messageKey,
        messageDefault,
        params
    };
    if (link) {
        body.link = link;
    }
    // #1478: HTTP-Client erst beim Speichern laden — Toasts gibt es auf jeder
    // Seite, gespeicherte Benachrichtigungen nur in der App
    __turbopack_context__.A("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript, async loader)").then(({ api })=>api.post('/notifications/', body)).catch((err)=>{
        console.warn('[toast] Notification persist error:', err?.response?.status || err);
    });
}
function createToast(type, content, options) {
    // #1554: gespeichert werden nur Fehler, sonst nur auf ausdrücklichen Wunsch
    // (Ergebnis eines Hintergrundjobs) — und nur mit vollständiger Sitzung (#1548)
    const shouldPersist = persistenceEnabled && (options?.persist ?? type === 'error');
    if (shouldPersist) {
        persistNotification(type, content, options);
    }
    if (!dispatch) {
        console.warn('[toast] ToastProvider not mounted. Toast will not be shown.');
        return '';
    }
    return dispatch.addToast(type, content, options);
}
const toast = {
    success: (content, options)=>createToast('success', content, options),
    error: (content, options)=>createToast('error', content, options),
    warning: (content, options)=>createToast('warning', content, options),
    info: (content, options)=>createToast('info', content, options),
    dismiss: (id)=>{
        if (!dispatch) return;
        if (id) {
            dispatch.dismissToast(id);
        } else {
            dispatch.dismissAll();
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/translationOrigin.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1626: Woher ein übersetzter Text stammt — für gespeicherte Benachrichtigungen.
 *
 * Toasts bekommen fertigen Text (`toast.error(tr('x.y', { … }))`). Wird der
 * Toast als Benachrichtigung gespeichert (lib/toast.ts), stünde dort der Text
 * in der Sprache des Absenders. Damit die Benachrichtigung in der Sprache des
 * Lesers erscheint, merken sich die Client-Übersetzer (`tr` aus
 * `i18n/client.ts`, `trCurrentLanguage`) zu jedem erzeugten Text Schlüssel und
 * Platzhalter. `toast.ts` schlägt den Text beim Speichern hier nach und
 * speichert Schlüssel + Platzhalter statt des fertigen Texts.
 *
 * - Nur im Browser (auf dem Server würde die Tabelle Texte verschiedener
 *   Anfragen mischen und nie gelesen).
 * - Begrenzt auf die zuletzt erzeugten Texte: Der Toast-Text entsteht
 *   unmittelbar vor dem Toast, ältere Einträge braucht niemand.
 * - Gleicher Text aus zwei Schlüsseln: der jüngere gilt — der Text ist in
 *   dieser Sprache ohnehin derselbe.
 */ __turbopack_context__.s([
    "rememberTranslation",
    ()=>rememberTranslation,
    "resetTranslationOrigins",
    ()=>resetTranslationOrigins,
    "translationOrigin",
    ()=>translationOrigin
]);
const MAX_EINTRAEGE = 500;
const store = globalThis;
function origins() {
    if (!store.__translationOrigins) store.__translationOrigins = new Map();
    return store.__translationOrigins;
}
function rememberTranslation(text, key, options) {
    if (("TURBOPACK compile-time value", "object") === 'undefined' || !text || !key) return;
    try {
        const map = origins();
        // jüngster Eintrag ans Ende (Map hält die Einfügereihenfolge)
        map.delete(text);
        map.set(text, options ? {
            key,
            options
        } : {
            key
        });
        if (map.size > MAX_EINTRAEGE) {
            const aeltester = map.keys().next().value;
            if (aeltester !== undefined) map.delete(aeltester);
        }
    } catch  {
    // Herkunft ist nur Komfort — nie den Übersetzer stören
    }
}
function translationOrigin(text) {
    if (!text) return null;
    return origins().get(text) ?? null;
}
function resetTranslationOrigins() {
    origins().clear();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// #1494: über die Brücke — das SDK lädt erst nach dem ersten Rendern
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/ToastContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$sentryUserSync$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/sentryUserSync.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$I18nSessionPreload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/I18nSessionPreload.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiCapture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiCapture.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$SentryErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/SentryErrorBoundary.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
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
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
    // #636: Queries hatten — anders als Mutations — kein globales onError;
    // fehlgeschlagene GETs (der Grossteil des Datenverkehrs) blieben
    // client-seitig unsichtbar. 401/403 sind bewusst ausgenommen: das sind
    // Zustandswechsel (Abmeldung, Widerruf, 2FA-Rueckstufung), kein Defekt —
    // sie wuerden bei jedem Sitzungsende einen Schwall Pseudo-Fehler senden.
    queryCache: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryCache"]({
        onError: (error, query)=>{
            // #1137: axios-Fehler meldet der Interceptor selbst (mit requestId und
            // Fingerprint) — hier nur, was nicht über die api-Instanz lief.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiCapture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wasCapturedByApiClient"])(error)) return;
            const meldung = error instanceof Error ? error.message : String(error);
            if (/\b40[13]\b|unauthorized|forbidden|abort/i.test(meldung)) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
                tags: {
                    source: 'react-query-query'
                },
                extra: {
                    queryKey: JSON.stringify(query.queryKey).slice(0, 200)
                }
            });
        }
    }),
    defaultOptions: {
        queries: {
            retry: 2
        },
        mutations: {
            onError: (error)=>{
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiCapture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wasCapturedByApiClient"])(error)) return;
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
                    tags: {
                        source: 'react-query-mutation'
                    }
                });
            }
        }
    }
});
// Styled Components Theme Provider that uses UserPreferencesContext
function StyledComponentsThemeProvider({ children }) {
    _s();
    const { theme, themeMode } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    // styled-components ThemeProvider propagates theme changes reactively via context.
    // No key prop needed — using key={themeMode} would remount the entire app tree.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        theme: theme,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/providers.tsx",
        lineNumber: 57,
        columnNumber: 10
    }, this);
}
_s(StyledComponentsThemeProvider, "5s4GhHRYIBYSulGdiAAE0T1TgVI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"]
    ];
});
_c = StyledComponentsThemeProvider;
/**
 * Basis-Provider jeder Seite (#1478): Sitzung, react-query, Sprache, Theme,
 * Sidebar (Header-Burger und Gast-Menü), Toasts. Die App-Shell (UserContext,
 * Modals, QuickWheel, PIA, Timer, Notifications, …) liegt in
 * context/AppShellProviders.tsx; das Root-Layout setzt sie für App-Routen
 * direkt ein, öffentliche Seiten laden sie erst bei Bedarf nach
 * (context/PublicShellProviders.tsx).
 */ /** Rückfall der Fehlergrenze in der Sprache des Nutzers */ function ErrorFallback() {
    _s1();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: tr('common.errorOccurred', {
            defaultValue: 'An error occurred'
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/providers.tsx",
        lineNumber: 71,
        columnNumber: 10
    }, this);
}
_s1(ErrorFallback, "A48qdLdlHx0As3VD+PF2fl+BV48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c1 = ErrorFallback;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: queryClient,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$I18nSessionPreload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["I18nSessionPreload"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/providers.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$sentryUserSync$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryUserSync"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserPreferencesProvider"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StyledComponentsThemeProvider, {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidebarProvider"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ToastContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastProvider"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$SentryErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SentryErrorBoundary"], {
                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorFallback, {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/providers.tsx",
                                            lineNumber: 87,
                                            columnNumber: 50
                                        }, this),
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/providers.tsx",
                                        lineNumber: 87,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/providers.tsx",
                                    lineNumber: 86,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/providers.tsx",
                                lineNumber: 85,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/providers.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/providers.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/providers.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/providers.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/providers.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c2 = Providers;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StyledComponentsThemeProvider");
__turbopack_context__.k.register(_c1, "ErrorFallback");
__turbopack_context__.k.register(_c2, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/registry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StyledComponentsRegistry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function StyledComponentsRegistry({ children }) {
    _s();
    const [styledComponentsStyleSheet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "StyledComponentsRegistry.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ServerStyleSheet"]()
    }["StyledComponentsRegistry.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerInsertedHTML"])({
        "StyledComponentsRegistry.useServerInsertedHTML": ()=>{
            const styles = styledComponentsStyleSheet.getStyleElement();
            styledComponentsStyleSheet.instance.clearTag();
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: styles
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/registry.tsx",
                lineNumber: 13,
                columnNumber: 12
            }, this);
        }
    }["StyledComponentsRegistry.useServerInsertedHTML"]);
    if ("TURBOPACK compile-time truthy", 1) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/registry.tsx",
        lineNumber: 16,
        columnNumber: 45
    }, this);
    //TURBOPACK unreachable
    ;
}
_s(StyledComponentsRegistry, "JO0TVXMWaWpk04kGnSFOnr+4ipc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useServerInsertedHTML"]
    ];
});
_c = StyledComponentsRegistry;
var _c;
__turbopack_context__.k.register(_c, "StyledComponentsRegistry");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/sentryUserSync.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SentryUserSync",
    ()=>SentryUserSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// #1494: über die Brücke — das SDK lädt erst nach dem ersten Rendern
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function SentryUserSync({ children }) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "SentryUserSync.useEffect": ()=>{
            const nutzer = session?.user;
            if (nutzer?.id) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUser"]({
                    id: nutzer.id
                });
                // #1194: in der Rollen-Vorschau traegt role die Vorschaurolle — Fehler
                // gehoeren zur echten Rolle, die Vorschau steht als eigener Tag daneben.
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTag"]('user.role', nutzer.realRole ?? nutzer.role);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTag"]('view_as', session?.viewAs?.role);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUser"](null);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTag"]('user.role', undefined);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTag"]('view_as', undefined);
            }
        }
    }["SentryUserSync.useEffect"], [
        session
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/sentryUserSync.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, this);
}
_s(SentryUserSync, "BVvivrSRe8/FL3eVGyG/GYgr2vQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = SentryUserSync;
var _c;
__turbopack_context__.k.register(_c, "SentryUserSync");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildEqualityCondition",
    ()=>buildEqualityCondition,
    "buildIdCondition",
    ()=>buildIdCondition,
    "buildIncludesCondition",
    ()=>buildIncludesCondition,
    "buildLikeCondition",
    ()=>buildLikeCondition,
    "buildMultiFieldSearch",
    ()=>buildMultiFieldSearch,
    "computeSalesforceIdChecksum",
    ()=>computeSalesforceIdChecksum,
    "isSalesforceId18",
    ()=>isSalesforceId18,
    "isValidSalesforceId",
    ()=>isValidSalesforceId,
    "normalizeSalesforceUserId",
    ()=>normalizeSalesforceUserId,
    "sameSalesforceId",
    ()=>sameSalesforceId,
    "sanitizeForSOQL",
    ()=>sanitizeForSOQL,
    "sanitizeForSOQLLike",
    ()=>sanitizeForSOQLLike,
    "toSalesforceId18",
    ()=>toSalesforceId18,
    "validateEnumValue",
    ()=>validateEnumValue,
    "validateEnumValueCaseInsensitive",
    ()=>validateEnumValueCaseInsensitive,
    "validateSalesforceId",
    ()=>validateSalesforceId
]);
/**
 * SOQL Sanitization Utilities
 *
 * Provides functions to prevent SOQL injection attacks by sanitizing
 * user input before use in Salesforce queries.
 *
 * @see https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm
 */ /**
 * Special characters that have meaning in SOQL and need escaping
 * - Single quote (') - String delimiter
 * - Backslash (\) - Escape character
 * - Percent (%) - LIKE wildcard (matches zero or more characters)
 * - Underscore (_) - LIKE wildcard (matches exactly one character)
 */ const SOQL_SPECIAL_CHARS = /['\\\n\r]/g;
const SOQL_LIKE_WILDCARDS = /[%_]/g;
/**
 * Salesforce ID pattern: 15 or 18 alphanumeric characters
 * 15-char: case-sensitive ID
 * 18-char: case-insensitive ID with checksum suffix
 */ const SALESFORCE_ID_PATTERN = /^[a-zA-Z0-9]{15}([a-zA-Z0-9]{3})?$/;
function sanitizeForSOQL(input) {
    if (!input || typeof input !== 'string') {
        return '';
    }
    // Limit input length to prevent DoS
    const trimmed = input.slice(0, 1000);
    // Escape special characters
    return trimmed.replace(SOQL_SPECIAL_CHARS, (char)=>{
        switch(char){
            case "'":
                return "\\'";
            case '\\':
                return '\\\\';
            case '\n':
                return '\\n';
            case '\r':
                return '\\r';
            default:
                return char;
        }
    });
}
function sanitizeForSOQLLike(input, preserveWildcards = false) {
    if (!input || typeof input !== 'string') {
        return '';
    }
    // First apply standard SOQL sanitization
    let sanitized = sanitizeForSOQL(input);
    // Escape LIKE wildcards unless preserving them
    if (!preserveWildcards) {
        sanitized = sanitized.replace(SOQL_LIKE_WILDCARDS, (char)=>`\\${char}`);
    }
    return sanitized;
}
/**
 * Salesforce's 18-char checksum suffix encodes which of the first 15 chars are
 * uppercase. Bytes 16-18 are 5-bit values (0-31) mapped to `ABCDEFGHIJKLMNOPQRSTUVWXYZ012345`,
 * each derived from a 5-char window of the prefix. We use this to reject mock
 * IDs whose shape happens to match but whose checksum doesn't — those would
 * otherwise round-trip into Salesforce and get rejected as MALFORMED_ID.
 */ const SF_CHECKSUM_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345';
function computeSalesforceIdChecksum(id15) {
    let suffix = '';
    for(let chunk = 0; chunk < 3; chunk++){
        let bits = 0;
        for(let i = 0; i < 5; i++){
            const c = id15.charCodeAt(chunk * 5 + i);
            // A-Z = 65-90
            if (c >= 65 && c <= 90) bits |= 1 << i;
        }
        suffix += SF_CHECKSUM_ALPHABET[bits];
    }
    return suffix;
}
function isValidSalesforceId(id) {
    if (!id || typeof id !== 'string') {
        return false;
    }
    if (!SALESFORCE_ID_PATTERN.test(id)) {
        return false;
    }
    if (id.length === 18) {
        return computeSalesforceIdChecksum(id.slice(0, 15)) === id.slice(15);
    }
    return true;
}
function isSalesforceId18(value) {
    return typeof value === 'string' && value.length === 18 && isValidSalesforceId(value);
}
function validateSalesforceId(id) {
    return isValidSalesforceId(id) ? id : null;
}
function toSalesforceId18(id) {
    if (!isValidSalesforceId(id)) return undefined;
    return id.length === 18 ? id : id + computeSalesforceIdChecksum(id);
}
function sameSalesforceId(a, b) {
    const left = toSalesforceId18(a);
    return left !== undefined && left === toSalesforceId18(b);
}
/** Präfix des Salesforce-Objekts User */ const SF_USER_PREFIX = '005';
function normalizeSalesforceUserId(value) {
    if (typeof value !== 'string') {
        return undefined;
    }
    const trimmed = value.trim();
    if (trimmed === '') {
        return undefined;
    }
    // Identitäts-URL: die User-Id ist das letzte Pfadsegment
    const candidate = /^https?:\/\//i.test(trimmed) ? trimmed.split('?')[0]?.split('/').filter(Boolean).pop() ?? '' : trimmed;
    if (!candidate.startsWith(SF_USER_PREFIX)) {
        return undefined;
    }
    return isValidSalesforceId(candidate) ? candidate : undefined;
}
function validateEnumValue(value, allowedValues) {
    if (!value || typeof value !== 'string') {
        return null;
    }
    return allowedValues.includes(value) ? value : null;
}
function validateEnumValueCaseInsensitive(value, allowedValues) {
    if (!value || typeof value !== 'string') {
        return null;
    }
    const lowerValue = value.toLowerCase();
    return allowedValues.find((v)=>v.toLowerCase() === lowerValue) ?? null;
}
function buildLikeCondition(field, value, matchType = 'contains') {
    if (!value || typeof value !== 'string' || value.trim() === '') {
        return null;
    }
    const sanitized = sanitizeForSOQLLike(value.trim());
    switch(matchType){
        case 'contains':
            return `${field} LIKE '%${sanitized}%'`;
        case 'startsWith':
            return `${field} LIKE '${sanitized}%'`;
        case 'endsWith':
            return `${field} LIKE '%${sanitized}'`;
        case 'exact':
            return `${field} = '${sanitizeForSOQL(value.trim())}'`;
        default:
            return `${field} LIKE '%${sanitized}%'`;
    }
}
function buildMultiFieldSearch(fields, value, matchType = 'contains') {
    if (!value || typeof value !== 'string' || value.trim() === '' || fields.length === 0) {
        return null;
    }
    const conditions = fields.map((field)=>buildLikeCondition(field, value, matchType)).filter((c)=>c !== null);
    if (conditions.length === 0) {
        return null;
    }
    return conditions.length === 1 ? conditions[0] : `(${conditions.join(' OR ')})`;
}
function buildEqualityCondition(field, value) {
    if (!value || typeof value !== 'string' || value.trim() === '') {
        return null;
    }
    const sanitized = sanitizeForSOQL(value.trim());
    return `${field} = '${sanitized}'`;
}
function buildIncludesCondition(field, value) {
    if (!value || typeof value !== 'string' || value.trim() === '') {
        return null;
    }
    const sanitized = sanitizeForSOQL(value.trim());
    return `${field} INCLUDES ('${sanitized}')`;
}
function buildIdCondition(field, id) {
    if (!isValidSalesforceId(id)) {
        return null;
    }
    return `${field} = '${id}'`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cms/legacyRedirects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Weiterleitungen der alten plastship.com-Pfade (Craft CMS) auf die App (#1153).
 *
 * Quelle: Sitemap-Abgleich vom 2026-09-16 (docs/plans/PUBLIC_SITE_PARITY.md) —
 * 26 Marketing-Seiten (DE + EN-Slugs aus der /en/-Navigation), 13 Showroom-
 * Produkte (`/partner/<marke>/<alt>` → `/partners/<marke>/<neu>`), 46 Artikel
 * (`/aktuelles/<alt>` → `/news/<neu>`, Zuordnung über die Titel) und 15
 * Kategorien. Ohne diese Tabelle verliert der Domain-Umzug das gesamte Ranking.
 * Seit #1210 sind alle Artikel und Kategorien importiert — jede Zeile ist 301.
 *
 * Regeln:
 * - `from` ist der dekodierte Pfad ohne Schluss-Slash; Umlaute stehen als
 *   Zeichen, nicht prozentkodiert (`normalizeLegacyPath` dekodiert eingehende URLs).
 * - 301 nur, wenn das Ziel den Inhalt dauerhaft trägt; 302, wenn die Seite in der
 *   App noch fehlt (#1162 Import, #1163 Inhalte) und der Nutzer vorerst auf die
 *   nächstliegende Seite landet — so bleibt der alte Pfad für Suchmaschinen offen.
 * - Pfade, die es in der App unverändert gibt (/agb, /faq), brauchen keinen Eintrag.
 * - `/monitored-materials` fehlt bewusst: derselbe Pfad ist in der App die
 *   RBAC-geschützte Anwendungsseite. Besucher ohne Anmeldung schickt die
 *   Middleware auf `/recyclate-performance` (ANONYMOUS_LEGACY_REDIRECTS unten,
 *   #1205; seit #2096 auch `/search`).
 * - #1561: englische Quellen (`/en/…`) zeigen auf die englische Fassung
 *   `/en/<slug>` (dieselben Slugs wie Deutsch), außer das Ziel hat keine
 *   (LEGACY_TARGETS_WITHOUT_ENGLISH). Ist der alte Pfad selbst die englische
 *   Fassung, entfällt die Zeile (RETIRED_LEGACY_REDIRECTS).
 *
 * React-frei: Seed-Skript (scripts/seed-cms-redirects.ts), Unit-Test und die
 * Auflösung lesen dieselbe Liste. Seit #1558 beantwortet die Middleware jede
 * Zeile dieser Liste selbst, Ziel mit Slash und Query (lib/routing/edgeRedirects.ts),
 * der Proxy davor dieselben Paare aus `legacyRedirectPairs()`;
 * der Catch-all [...slug] löst nur noch Zeilen auf, die allein in der Tabelle
 * stehen (Redaktion). Eine Zeile hier gewinnt deshalb auch gegen eine
 * gleichnamige Seite der App — `from` darf keine App-Route und keine
 * CMS-Seite sein (Wächter im Unit-Test).
 */ __turbopack_context__.s([
    "ANONYMOUS_LEGACY_REDIRECTS",
    ()=>ANONYMOUS_LEGACY_REDIRECTS,
    "LEGACY_REDIRECTS",
    ()=>LEGACY_REDIRECTS,
    "LEGACY_TARGETS_WITHOUT_ENGLISH",
    ()=>LEGACY_TARGETS_WITHOUT_ENGLISH,
    "RETIRED_LEGACY_REDIRECTS",
    ()=>RETIRED_LEGACY_REDIRECTS,
    "anonymousLegacyRedirectPairs",
    ()=>anonymousLegacyRedirectPairs,
    "legacyProxyOnlyPairs",
    ()=>legacyProxyOnlyPairs,
    "legacyRedirectFor",
    ()=>legacyRedirectFor,
    "legacyRedirectPairs",
    ()=>legacyRedirectPairs,
    "normalizeLegacyPath",
    ()=>normalizeLegacyPath
]);
const permanent = (from, to)=>({
        from,
        to,
        statusCode: 301
    });
const LEGACY_TARGETS_WITHOUT_ENGLISH = new Set([
    '/news/pre-initiative-zirkulaere-kunststoffe',
    '/news/1922-pp-h-post-consumer',
    '/news/pp-regranulat-mfr-20'
]);
/**
 * #1561: Ziel einer englischen alten Adresse — die englische Fassung unter
 * `/en/<slug>` (dieselben Slugs wie Deutsch), sonst die deutsche Seite. Ohne
 * Import aus lib/i18n: die Datei bleibt ohne Imports (legacyRedirectPairs).
 */ const englischesZiel = (to)=>LEGACY_TARGETS_WITHOUT_ENGLISH.has(to) ? to : to === '/' ? '/en' : `/en${to}`;
/**
 * #1561: Zeile einer englischen alten Adresse. Ist der alte Pfad selbst die
 * englische Fassung (`/en/whitepaper`, `/en/faq`, `/en/partners/trinamix`),
 * entfällt die Zeile: die Seite antwortet dort direkt.
 */ const englisch = (eintrag)=>({
        ...eintrag,
        to: englischesZiel(eintrag.to)
    });
// #1163: alle Marketing-Seiten sind als CMS-Seiten importiert — die vorläufigen
// Seiten-Ziele (302) sind dauerhaft (301). Einzige Ausnahme bleibt
// /monitored-materials (DE): derselbe Pfad ist die RBAC-geschützte App-Seite,
// der Marketing-Inhalt liegt unter /recyclate-performance (EN-Pfad leitet dorthin).
// #1210: die letzten vier Artikel und die Kategorie `bedarfe` sind importiert
// (prisma/seed-cms-content-1210.json) — keine vorläufige Weiterleitung mehr.
/** Marketing-Seiten, deutsche Pfade. */ const SEITEN_DE = [
    permanent('/rezyklatversorgung', '/procurement'),
    permanent('/end-to-end-rezyklatversorgung', '/end-to-end-supply'),
    permanent('/plattform-materialsuche-rezyklate', '/material-search'),
    permanent('/top-rezyklate', '/top-recyclates'),
    permanent('/rezyklat-qualitaet-material-analysen', '/material-quality'),
    // /whitepaper und /team heißen in der App genauso — kein Eintrag nötig (#1163)
    permanent('/labordienstleistungen-materialanalysen', '/laboratory-services'),
    permanent('/recycling-as-a-service-kunststoffabfaelle', '/waste-disposal'),
    permanent('/netzwerk-kreislaufwirtschaft', '/partners'),
    permanent('/entsorger-circle-recycling-netzwerk', '/recycler-circle'),
    permanent('/strategiemix-in-der-kunststoffindustrie', '/strategy-mix'),
    permanent('/aktuelles-kreislaufwirtschaft-recycling', '/news'),
    permanent('/aktuelles-kiss-ki-kunststoffkreislauf', '/benchmark'),
    permanent('/plastship-story-kunststoff-kreislauf', '/story'),
    permanent('/branchen-umfrage-2', '/industry-survey'),
    permanent('/ueber-plastship', '/about'),
    permanent('/kontakt-rezyklatversorgung', '/contact-us'),
    permanent('/impressum', '/imprint'),
    permanent('/datenschutz', '/privacy'),
    permanent('/e-mail-disclaimer', '/email-disclaimer'),
    permanent('/plastship-monitored-material-system', '/monitored-material-system'),
    permanent('/aktuelles', '/news'),
    permanent('/partner', '/partners')
];
/** Marketing-Seiten, englische Pfade (Slugs aus der /en/-Navigation); Ziel seit #1561 die englische Fassung. */ const SEITEN_EN = [
    permanent('/en', '/'),
    permanent('/en/recycled-plastics-supply', '/procurement'),
    permanent('/en/end-to-end-recyclate-supply', '/end-to-end-supply'),
    permanent('/en/recyclate-platform-material-search', '/material-search'),
    permanent('/en/top-recyclates', '/top-recyclates'),
    permanent('/en/recyclate-quality-material-analysis', '/material-quality'),
    permanent('/en/monitored-materials', '/recyclate-performance'),
    permanent('/en/whitepaper', '/whitepaper'),
    permanent('/en/laboratory-services-material-analysis', '/laboratory-services'),
    permanent('/en/recycling-as-a-service-plastic-waste', '/waste-disposal'),
    permanent('/en/network-circular-economy-recyclates', '/partners'),
    permanent('/en/entsorger-circle-recycling-network', '/recycler-circle'),
    permanent('/en/eintrag-14712', '/strategy-mix'),
    permanent('/en/news-circular-economy-plastics', '/news'),
    permanent('/en/plastship-benchmark-2', '/benchmark'),
    permanent('/en/industry-survey-2', '/industry-survey'),
    permanent('/en/about-plastship', '/about'),
    permanent('/en/team-plastship', '/team'),
    permanent('/en/plastship-monitored-material-system', '/monitored-material-system'),
    permanent('/en/contact-plastship', '/contact-us'),
    permanent('/en/tac', '/agb'),
    permanent('/en/imprint', '/imprint'),
    permanent('/en/data-protection', '/privacy'),
    permanent('/en/faq', '/faq'),
    permanent('/en/news', '/news'),
    permanent('/en/news/category/latest-news', '/news/category/aktuelle-nachrichten'),
    permanent('/en/partner', '/partners'),
    // #1205: im Abgleich per hreflang gefunden, fehlten in der /en/-Navigation
    permanent('/en/life-in-plastic-how-plastship-enables-new-circular-pathways-for-plastics', '/story'),
    permanent('/en/e-mail-disclaimer', '/email-disclaimer')
];
/** Showroom: alter Pfad `/partner/<marke>/<slug>` → App `/partners/<marke>/<produkt>`. */ const SHOWROOM = [
    [
        'trinamix',
        'identifikation-von-mono-und-multi-materialfolien-fuer-verbesserte-recyclingfaehigkeit',
        'film-identification'
    ],
    [
        'trinamix',
        'design-for-recycling-mit-trinamix-mobile-nir-spectroscopy-solutions',
        'design-for-recycling'
    ],
    [
        'trinamix',
        'trinamix-mobile-nir-spectroscopy-solution-innovative-plastic-identification-anytime-anywhere',
        'nir-spectroscopy'
    ],
    [
        'hpf',
        'tremin-939-verbesserte-technische-eigenschaften-von-rezyklaten-und-neuwarenkunststoffen-durch-hpf',
        'tremin-939'
    ],
    [
        'hpf',
        'rescofil-effektive-geruchsoptimierung-von-kunststoffrezyklaten-durch-hpf',
        'rescofil'
    ],
    [
        'hpf',
        'hpf-the-mineral-engineers-hochwertige-fuellstoffe-fuer-kunststoffrezyklate',
        'mineral-engineers'
    ],
    [
        'plastcert',
        'recycling-process-certification',
        'recycling-process'
    ],
    [
        'plastcert',
        'recyclass-recycled-plastic-certification',
        'recycled-plastic'
    ],
    [
        'plastcert',
        'zertifizierung-der-recyclingfaehigkeit',
        'recyclability'
    ],
    [
        'r-a-m',
        'pq-mex',
        'pq-mex'
    ],
    [
        '3s',
        'odorcheckerspot',
        'odorcheckerspot'
    ],
    [
        'r-a-m',
        'itg-500-bench',
        'itg-500-bench'
    ],
    [
        'veridis',
        'madscan',
        'madscan'
    ]
];
/** Artikel: alter Craft-Slug → Slug des CMS-Artikels (Charge 1 #1162, die letzten vier #1210). */ const ARTIKEL = [
    [
        'monitored-materials-rezyklate-schuetz-premium',
        'monitored-materials-rezyklate-schuetz-premium'
    ],
    [
        'kreislaufwirtschaft-kunststoffindustrie-rezyklateinsatz-strategie',
        'kreislaufwirtschaft-rezyklateinsatz-strategie'
    ],
    [
        'plastship-auf-der-prse-ifat-2026-rezyklatqualitaet-monitored-materials',
        'plastship-prse-ifat-2026'
    ],
    [
        'kreislaufwirtschaft-zwischen-regulierung-und-realitaet',
        'kreislaufwirtschaft-zwischen-regulierung-und-realitaet'
    ],
    [
        'eu-verpackungsabfaelle-2023-rueckgang-pro-kopf-doch-kunststoff-bleibt-groesste-herausforderung',
        'eu-verpackungsabfaelle-2023'
    ],
    [
        'plastship-erhält-tüv-nord-cert-zertifizierung-nach-din-en-iso-90012015',
        'plastship-tuev-nord-cert-zertifizierung'
    ],
    [
        'plastship-engagiert-sich-im-entsorger-circle-digitalisierung-ki-und-vernetzung-fuer-die-kreislaufwirtschaft',
        'plastship-entsorger-circle-digitalisierung'
    ],
    [
        'plastship-auf-der-k-messe-2025-digitale-lösungen-und-ki-als-motor-für-kreislaufwirtschaft',
        'plastship-k-messe-2025'
    ],
    [
        'plastship-auf-der-k-messe-2025-kiss-digitale-lösungen-für-die-kunststoffkreislaufwirtschaft-erleben-2',
        'plastship-k-messe-2025-kiss'
    ],
    [
        'ruckblick-auf-die-fachpack-2025-plastship-und-rigk-mit-starkem-auftritt-losungen-fur-eine-kreislaufwirtschaft-im-zeichen-der-ppwr',
        'fachpack-2025-rueckblick'
    ],
    [
        'plastship-material-stories-auf-dem-weg-zur-fachpack-k-messe-top-rezyklate-im-fokus-2',
        'material-stories-fachpack-k-messe-2'
    ],
    [
        'plastship-material-stories-auf-dem-weg-zur-fachpack-k-messe-top-rezyklate-im-fokus',
        'material-stories-fachpack-k-messe'
    ],
    [
        'eine-zukunft-fuer-zirkulaere-kunststoffe-in-europa-sichern---plastship-unterstuetzt-die-pre-initiative',
        'pre-initiative-zirkulaere-kunststoffe'
    ],
    [
        'plastship-auf-der-fachpack-2025-kiss-digitale-loesungen-fuer-die-kreislaufwirtschaft-live-erleben-2',
        'plastship-fachpack-2025-kiss'
    ],
    [
        'rezyklateinsatz-vorantreiben-bvse-fordert-faire-marktbedingungen-und-warnt-vor-strukturbruch-in-der-kunststoffbranche',
        'bvse-rezyklateinsatz-marktbedingungen'
    ],
    [
        'ab-heute-leben-wir-auf-kredit-earth-overshoot-day-2025-faellt-auf-den-24-juli-wie-die-kunststoffbranche-mit-kreislaufwirtschaft-gegensteuern-kann',
        'earth-overshoot-day-2025'
    ],
    [
        'kiss-ki-gestuetzte-kreislaufwirtschaft-trifft-praxis-plastship-auf-der-fachpack-und-k-2025',
        'kiss-kreislaufwirtschaft-praxis-fachpack-k'
    ],
    [
        '1922-pp-h-post-consumer',
        '1922-pp-h-post-consumer'
    ],
    [
        'efficient-use-of-recyclates-challenges-solutions-plastship-laedt-zum-webinar-ein',
        'efficient-use-of-recyclates-webinar'
    ],
    [
        'mehr-qualitaet-mehr-transparenz-mehr-kreislauf-ein-rueckblick-auf-die-prse-2025',
        'prse-2025-rueckblick'
    ],
    [
        'optimierte-kunststoffrezyklate-durch-spezialisierte-fuellstoffe',
        'optimierte-kunststoffrezyklate-fuellstoffe'
    ],
    [
        'plastship-tritt-dem-bvse-bei',
        'plastship-bvse-beitritt'
    ],
    [
        'plastship-auf-der-prse-2025-loesungen-fuer-eine-nachhaltige-kunststoffkreislaufwirtschaft',
        'plastship-prse-2025'
    ],
    [
        'kiss-projekt-ki-gestuetzte-optimierung-der-kreislaufwirtschaft-fuer-kunststoffe',
        'kiss-projekt-ki-kreislaufwirtschaft'
    ],
    [
        'plastship-setzt-2025-klare-prioritaeten-innovationen-und-partnerschaften-fuer-eine-zirkulaere-kunststoffwirtschaft',
        'plastship-2025-prioritaeten-innovationen'
    ],
    [
        'our-goal-is-always-to-contribute-to-high-quality-recycled-plastics-and-ensure-that-the-highest-volumes-are-used-appropriately',
        'interview-jeroen-glansdorp'
    ],
    [
        'jetzt-anmelden-ihre-chance-auf-dem-4-internationalen-recycling-forum-innovationen-einblicke-und-vernetzung-fuer-die-kreislaufwirtschaft',
        '4-internationales-recycling-forum'
    ],
    [
        'plastship-und-trinamix-neue-partnerschaft-fuer-eine-kunststoffidentifikation-und-effektive-kreislaufwirtschaft',
        'plastship-trinamix-partnerschaft'
    ],
    [
        'plastship-tritt-tecpart-bei',
        'plastship-tecpart-beitritt'
    ],
    [
        'pp-regranulat-mfr-20',
        'pp-regranulat-mfr-20'
    ],
    [
        'test',
        'plastship-fachpack-2024'
    ],
    [
        'neue-partnerschaft-zwischen-plastship-und-hpf-hochspezialisierte-fuellstoffe-fuer-verbesserte-kunststoffrezyklate',
        'plastship-hpf-partnerschaft'
    ],
    [
        'rezy-spezi-innovative-loesungen-fuer-rezyklateinsatz-und-nachhaltigkeit-in-der-kreislaufwirtschaft',
        'rezy-spezi-rezyklateinsatz'
    ],
    [
        'plastship-auf-der-fachpack-2024-save-the-date',
        'plastship-fachpack-2024-save-the-date'
    ],
    [
        'internationales-recycling-forum-2024-plastship-ist-dabei',
        'internationales-recycling-forum-2024'
    ],
    [
        'was-ist-eucertplast',
        'was-ist-eucertplast'
    ],
    [
        'gemeinsam-stark-plastship-und-partner-setzen-auf-der-prse-neue-massstaebe-in-der-kreislaufwirtschaft',
        'prse-2024-kreislaufwirtschaft'
    ],
    [
        'eintrag-6365',
        'veridis-plastship-praezision'
    ],
    [
        'wie-sich-der-rezyklateinsatz-in-der-kunststoffindustrie-erhoehen-laesst',
        'rezyklateinsatz-kunststoffindustrie'
    ],
    [
        'plastship-nimmt-odorcheckerspot-ocs-von-3s-in-betrieb',
        'plastship-odorcheckerspot-3s'
    ],
    [
        'die-supernase-gegen-lebensmittelverschwendung',
        'supernase-lebensmittelverschwendung'
    ],
    [
        'experteninterview-kunststoffindustrie-und-kreislaufwirtschaft-im-fokus-fuer-2024',
        'interview-kunststoffindustrie-2024'
    ],
    [
        'experteninterview-kunststoffindustrie-und-kreislaufwirtschaft-im-fokus-fuer-2024-2',
        'interview-kunststoffindustrie-2024-2'
    ],
    [
        'es-ist-entscheidend-zu-erkennen-dass-wir-die-moeglichkeit-haben-und-dass-es-uns-gelingen-koennte',
        'interview-kreislaufwirtschaft-moeglichkeit'
    ],
    [
        'kunststoffrezyklate-skz-und-plastship-starten-gemeinsames-projekt',
        'skz-plastship-gemeinsames-projekt'
    ],
    [
        'interview-mit-jan-bauer-kreislaufwirtschaft-fuer-kunststoffe',
        'interview-jan-bauer'
    ]
];
/** Kategorien: acht gibt es in der App (`bedarfe` seit #1210), die `top-rezyklate-*`-Unterkategorien werden Tags. */ const KATEGORIEN = [
    [
        'aktuelle-nachrichten',
        'aktuelle-nachrichten'
    ],
    [
        'messen-und-webinare',
        'messen-und-webinare'
    ],
    [
        'interviews',
        'interviews'
    ],
    [
        'forschungsprojekte',
        'forschungsprojekte'
    ],
    [
        'best-practices',
        'best-practices'
    ],
    [
        'partner-news',
        'partner-news'
    ],
    [
        'bedarfe',
        'bedarfe'
    ],
    [
        'top-rezyklate',
        'top-rezyklate'
    ],
    [
        'top-rezyklate-pp-sg',
        'top-rezyklate'
    ],
    [
        'top-rezyklate-pp-ex',
        'top-rezyklate'
    ],
    [
        'top-rezyklate-hdpe-bm',
        'top-rezyklate'
    ],
    [
        'top-rezyklate-hdpe-sg',
        'top-rezyklate'
    ],
    [
        'top-rezyklate-pet',
        'top-rezyklate'
    ],
    [
        'top-rezyklate-andere',
        'top-rezyklate'
    ],
    [
        'top-rezyklate-ps',
        'top-rezyklate'
    ]
];
/**
 * #1205: englische Craft-Pfade der Artikel, Kategorien und Showroom-Produkte
 * (`hreflang="en"` je deutscher Seite, Abgleich 2026-09-21) → deutscher Craft-Slug;
 * das Ziel kommt aus den Tabellen oben; seit #1561 dessen englische Fassung
 * (`englisch` in LEGACY_REDIRECTS).
 */ const ARTIKEL_EN = [
    [
        'monitored-materials-recyclates-schuetz-premium',
        'monitored-materials-rezyklate-schuetz-premium'
    ],
    [
        'circular-economy-recyclates-strategy-plastics',
        'kreislaufwirtschaft-kunststoffindustrie-rezyklateinsatz-strategie'
    ],
    [
        'plastship-at-prse-ifat-2026-making-recyclate-quality',
        'plastship-auf-der-prse-ifat-2026-rezyklatqualitaet-monitored-materials'
    ],
    [
        'kreislaufwirtschaft-zwischen-regulierung-und-realitaet',
        'kreislaufwirtschaft-zwischen-regulierung-und-realitaet'
    ],
    [
        'eu-packaging-waste-2023-per-capita-decline-but-plastics-remain-the-greatest-challenge',
        'eu-verpackungsabfaelle-2023-rueckgang-pro-kopf-doch-kunststoff-bleibt-groesste-herausforderung'
    ],
    [
        'plastship-awarded-tüv-nord-cert-certification-according-to-din-en-iso-90012015',
        'plastship-erhält-tüv-nord-cert-zertifizierung-nach-din-en-iso-90012015'
    ],
    [
        'plastship-joins-the-entsorger-circle-driving-digitalisation-ai-and-connectivity-for-the-circular-economy',
        'plastship-engagiert-sich-im-entsorger-circle-digitalisierung-ki-und-vernetzung-fuer-die-kreislaufwirtschaft'
    ],
    [
        'plastship-at-k-2025-digital-solutions-and-ai-driving-the-circular-plastics-economy',
        'plastship-auf-der-k-messe-2025-digitale-lösungen-und-ki-als-motor-für-kreislaufwirtschaft'
    ],
    [
        'plastship-at-k-2025-experience-kiss-digital-solutions-for-the-circular-plastics-economy-2',
        'plastship-auf-der-k-messe-2025-kiss-digitale-lösungen-für-die-kunststoffkreislaufwirtschaft-erleben-2'
    ],
    [
        'ruckblick-auf-die-fachpack-2025-plastship-und-rigk-mit-starkem-auftritt-losungen-fur-eine-kreislaufwirtschaft-im-zeichen-der-ppwr',
        'ruckblick-auf-die-fachpack-2025-plastship-und-rigk-mit-starkem-auftritt-losungen-fur-eine-kreislaufwirtschaft-im-zeichen-der-ppwr'
    ],
    [
        'plastship-material-stories-auf-dem-weg-zur-fachpack-k-messe-top-rezyklate-im-fokus-2',
        'plastship-material-stories-auf-dem-weg-zur-fachpack-k-messe-top-rezyklate-im-fokus-2'
    ],
    [
        'plastship-material-stories-auf-dem-weg-zur-fachpack-k-messe-top-rezyklate-im-fokus',
        'plastship-material-stories-auf-dem-weg-zur-fachpack-k-messe-top-rezyklate-im-fokus'
    ],
    [
        'eintrag-11586',
        'eine-zukunft-fuer-zirkulaere-kunststoffe-in-europa-sichern---plastship-unterstuetzt-die-pre-initiative'
    ],
    [
        'plastship-auf-der-fachpack-2025-kiss-digitale-loesungen-fuer-die-kreislaufwirtschaft-live-erleben-2',
        'plastship-auf-der-fachpack-2025-kiss-digitale-loesungen-fuer-die-kreislaufwirtschaft-live-erleben-2'
    ],
    [
        'rezyklateinsatz-vorantreiben-bvse-fordert-faire-marktbedingungen-und-warnt-vor-strukturbruch-in-der-kunststoffbranche',
        'rezyklateinsatz-vorantreiben-bvse-fordert-faire-marktbedingungen-und-warnt-vor-strukturbruch-in-der-kunststoffbranche'
    ],
    [
        'ab-heute-leben-wir-auf-kredit-earth-overshoot-day-2025-faellt-auf-den-24-juli-wie-die-kunststoffbranche-mit-kreislaufwirtschaft-gegensteuern-kann',
        'ab-heute-leben-wir-auf-kredit-earth-overshoot-day-2025-faellt-auf-den-24-juli-wie-die-kunststoffbranche-mit-kreislaufwirtschaft-gegensteuern-kann'
    ],
    [
        'kiss-ki-gestuetzte-kreislaufwirtschaft-trifft-praxis-plastship-auf-der-fachpack-und-k-2025',
        'kiss-ki-gestuetzte-kreislaufwirtschaft-trifft-praxis-plastship-auf-der-fachpack-und-k-2025'
    ],
    [
        '1922-pp-h-post-consumer',
        '1922-pp-h-post-consumer'
    ],
    [
        'efficient-use-of-recyclates-challenges-solutions-plastship-laedt-zum-webinar-ein',
        'efficient-use-of-recyclates-challenges-solutions-plastship-laedt-zum-webinar-ein'
    ],
    [
        'mehr-qualitaet-mehr-transparenz-mehr-kreislauf-ein-rueckblick-auf-die-prse-2025',
        'mehr-qualitaet-mehr-transparenz-mehr-kreislauf-ein-rueckblick-auf-die-prse-2025'
    ],
    [
        'optimierte-kunststoffrezyklate-durch-spezialisierte-fuellstoffe',
        'optimierte-kunststoffrezyklate-durch-spezialisierte-fuellstoffe'
    ],
    [
        'plastship-tritt-dem-bvse-bei',
        'plastship-tritt-dem-bvse-bei'
    ],
    [
        'plastship-auf-der-prse-2025-loesungen-fuer-eine-nachhaltige-kunststoffkreislaufwirtschaft',
        'plastship-auf-der-prse-2025-loesungen-fuer-eine-nachhaltige-kunststoffkreislaufwirtschaft'
    ],
    [
        'kiss-projekt-ki-gestuetzte-optimierung-der-kreislaufwirtschaft-fuer-kunststoffe',
        'kiss-projekt-ki-gestuetzte-optimierung-der-kreislaufwirtschaft-fuer-kunststoffe'
    ],
    [
        'plastship-setzt-2025-klare-prioritaeten-innovationen-und-partnerschaften-fuer-eine-zirkulaere-kunststoffwirtschaft',
        'plastship-setzt-2025-klare-prioritaeten-innovationen-und-partnerschaften-fuer-eine-zirkulaere-kunststoffwirtschaft'
    ],
    [
        'our-goal-is-always-to-contribute-to-high-quality-recycled-plastics-and-ensure-that-the-highest-volumes-are-used-appropriately',
        'our-goal-is-always-to-contribute-to-high-quality-recycled-plastics-and-ensure-that-the-highest-volumes-are-used-appropriately'
    ],
    [
        'jetzt-anmelden-ihre-chance-auf-dem-4-internationalen-recycling-forum-innovationen-einblicke-und-vernetzung-fuer-die-kreislaufwirtschaft',
        'jetzt-anmelden-ihre-chance-auf-dem-4-internationalen-recycling-forum-innovationen-einblicke-und-vernetzung-fuer-die-kreislaufwirtschaft'
    ],
    [
        'plastship-und-trinamix-neue-partnerschaft-fuer-eine-kunststoffidentifikation-und-effektive-kreislaufwirtschaft',
        'plastship-und-trinamix-neue-partnerschaft-fuer-eine-kunststoffidentifikation-und-effektive-kreislaufwirtschaft'
    ],
    [
        'plastship-tritt-tecpart-bei',
        'plastship-tritt-tecpart-bei'
    ],
    [
        'pp-regranulat-mfr-20',
        'pp-regranulat-mfr-20'
    ],
    [
        'test',
        'test'
    ],
    [
        'neue-partnerschaft-zwischen-plastship-und-hpf-hochspezialisierte-fuellstoffe-fuer-verbesserte-kunststoffrezyklate',
        'neue-partnerschaft-zwischen-plastship-und-hpf-hochspezialisierte-fuellstoffe-fuer-verbesserte-kunststoffrezyklate'
    ],
    [
        'rezy-spezi-innovative-loesungen-fuer-rezyklateinsatz-und-nachhaltigkeit-in-der-kreislaufwirtschaft',
        'rezy-spezi-innovative-loesungen-fuer-rezyklateinsatz-und-nachhaltigkeit-in-der-kreislaufwirtschaft'
    ],
    [
        'plastship-auf-der-fachpack-2024-save-the-date',
        'plastship-auf-der-fachpack-2024-save-the-date'
    ],
    [
        'internationales-recycling-forum-2024-plastship-ist-dabei',
        'internationales-recycling-forum-2024-plastship-ist-dabei'
    ],
    [
        'what-is-eucertplast',
        'was-ist-eucertplast'
    ],
    [
        'gemeinsam-stark-plastship-und-partner-setzen-auf-der-prse-neue-massstaebe-in-der-kreislaufwirtschaft',
        'gemeinsam-stark-plastship-und-partner-setzen-auf-der-prse-neue-massstaebe-in-der-kreislaufwirtschaft'
    ],
    [
        'precision-in-plastic-recycling-veridis-and-plastship-promote-quality-of-recyclates',
        'eintrag-6365'
    ],
    [
        'wie-sich-der-rezyklateinsatz-in-der-kunststoffindustrie-erhoehen-laesst',
        'wie-sich-der-rezyklateinsatz-in-der-kunststoffindustrie-erhoehen-laesst'
    ],
    [
        'plastship-nimmt-odorcheckerspot-ocs-von-3s-in-betrieb',
        'plastship-nimmt-odorcheckerspot-ocs-von-3s-in-betrieb'
    ],
    [
        'die-supernase-gegen-lebensmittelverschwendung',
        'die-supernase-gegen-lebensmittelverschwendung'
    ],
    [
        'experteninterview-kunststoffindustrie-und-kreislaufwirtschaft-im-fokus-fuer-2024',
        'experteninterview-kunststoffindustrie-und-kreislaufwirtschaft-im-fokus-fuer-2024'
    ],
    [
        'experteninterview-kunststoffindustrie-und-kreislaufwirtschaft-im-fokus-fuer-2024-2',
        'experteninterview-kunststoffindustrie-und-kreislaufwirtschaft-im-fokus-fuer-2024-2'
    ],
    [
        'es-ist-entscheidend-zu-erkennen-dass-wir-die-moeglichkeit-haben-und-dass-es-uns-gelingen-koennte',
        'es-ist-entscheidend-zu-erkennen-dass-wir-die-moeglichkeit-haben-und-dass-es-uns-gelingen-koennte'
    ],
    [
        'kunststoffrezyklate-skz-und-plastship-starten-gemeinsames-projekt',
        'kunststoffrezyklate-skz-und-plastship-starten-gemeinsames-projekt'
    ],
    [
        'interview-mit-jan-bauer-kreislaufwirtschaft-fuer-kunststoffe',
        'interview-mit-jan-bauer-kreislaufwirtschaft-fuer-kunststoffe'
    ]
];
const KATEGORIEN_EN = [
    [
        'trade-shows-and-webinars',
        'messen-und-webinare'
    ],
    [
        'interviews',
        'interviews'
    ],
    [
        'research-projects',
        'forschungsprojekte'
    ],
    [
        'best-practices',
        'best-practices'
    ],
    [
        'partner-news',
        'partner-news'
    ],
    [
        'bedarfe',
        'bedarfe'
    ],
    [
        'top-rezyklate',
        'top-rezyklate'
    ],
    [
        'top-rezyklate-pp-sg',
        'top-rezyklate-pp-sg'
    ],
    [
        'top-rezyklate-pp-ex',
        'top-rezyklate-pp-ex'
    ],
    [
        'top-rezyklate-hdpe-bm',
        'top-rezyklate-hdpe-bm'
    ],
    [
        'top-rezyklate-hdpe-sg',
        'top-rezyklate-hdpe-sg'
    ],
    [
        'top-rezyklate-pet',
        'top-rezyklate-pet'
    ],
    [
        'top-rezyklate-andere',
        'top-rezyklate-andere'
    ],
    [
        'top-rezyklate-ps',
        'top-rezyklate-ps'
    ]
];
/** [marke, englischer Slug, deutscher Slug] */ const SHOWROOM_EN = [
    [
        'trinamix',
        'identifikation-von-mono-und-multi-materialfolien-fuer-verbesserte-recyclingfaehigkeit',
        'identifikation-von-mono-und-multi-materialfolien-fuer-verbesserte-recyclingfaehigkeit'
    ],
    [
        'trinamix',
        'design-for-recycling-mit-trinamix-mobile-nir-spectroscopy-solutions',
        'design-for-recycling-mit-trinamix-mobile-nir-spectroscopy-solutions'
    ],
    [
        'trinamix',
        'trinamix-mobile-nir-spectroscopy-solution-innovative-plastic-identification-anytime-anywhere',
        'trinamix-mobile-nir-spectroscopy-solution-innovative-plastic-identification-anytime-anywhere'
    ],
    [
        'hpf',
        'tremin-939-verbesserte-technische-eigenschaften-von-rezyklaten-und-neuwarenkunststoffen-durch-hpf',
        'tremin-939-verbesserte-technische-eigenschaften-von-rezyklaten-und-neuwarenkunststoffen-durch-hpf'
    ],
    [
        'hpf',
        'rescofil-effective-odor-optimization-for-recycled-plastics-by-hpf',
        'rescofil-effektive-geruchsoptimierung-von-kunststoffrezyklaten-durch-hpf'
    ],
    [
        'hpf',
        'hpf-the-mineral-engineers-hochwertige-fuellstoffe-fuer-kunststoffrezyklate',
        'hpf-the-mineral-engineers-hochwertige-fuellstoffe-fuer-kunststoffrezyklate'
    ],
    [
        'plastcert',
        'recycling-process-certification',
        'recycling-process-certification'
    ],
    [
        'plastcert',
        'recyclass-recycled-plastic-certification',
        'recyclass-recycled-plastic-certification'
    ],
    [
        'plastcert',
        'zertifizierung-der-recyclingfaehigkeit',
        'zertifizierung-der-recyclingfaehigkeit'
    ],
    [
        'r-a-m',
        'pq-mex',
        'pq-mex'
    ],
    [
        '3s',
        'odorcheckerspot',
        'odorcheckerspot'
    ],
    [
        'r-a-m',
        'itg-500-bench',
        'itg-500-bench'
    ],
    [
        'veridis',
        'madscan',
        'madscan'
    ]
];
/**
 * #1559: Marken-Seiten. Die sechs Marken mit Showroom (seed-cms-content.json,
 * `partners`) haben in der App eine eigene Seite `/partners/<marke>`; die
 * übrigen Marken der alten Netzwerk-Seite gibt es in der App nicht — sie
 * landen auf der Netzwerk-Seite.
 */ const MARKEN_MIT_SEITE = [
    'trinamix',
    'hpf',
    'plastcert',
    'r-a-m',
    '3s',
    'veridis'
];
const MARKEN_OHNE_SEITE = [
    'rigk-gmbh',
    'hannawald',
    'baerlocher-gmbh',
    'chemetall',
    'evonik',
    'kraton-polymers'
];
const MARKEN = [
    ...MARKEN_MIT_SEITE.flatMap((marke)=>[
            permanent(`/partner/${marke}`, `/partners/${marke}`),
            permanent(`/en/partners/${marke}`, `/partners/${marke}`)
        ]),
    ...MARKEN_OHNE_SEITE.flatMap((marke)=>[
            {
                ...permanent(`/partner/${marke}`, '/partners'),
                note: '#1559: Marke ohne Seite in der App'
            },
            {
                ...permanent(`/en/partners/${marke}`, '/partners'),
                note: '#1559: Marke ohne Seite in der App'
            }
        ]),
    permanent('/en/partners', '/partners'),
    // Craft verlinkte die Marke auch in dieser Schreibweise (200 auf der alten Seite)
    permanent('/en/partners/PlastCert', '/partners/plastcert')
];
/**
 * #1559: Reste aus Sitemap und internen Links von plastship.com, die in der
 * App bisher 404 waren (Abgleich 2026-10-02, redirects.json). Die alten
 * Sitemap-Dateien (`/sitemaps-1-*.xml`) stehen in next.config.js — der
 * Middleware-Matcher sieht keine `.xml`-Pfade.
 */ const REST = [
    // EN-Dublette desselben Artikels (Craft legte beim Übersetzen eine Kopie an)
    permanent('/en/news/plastship-setzt-2025-klare-prioritaeten-innovationen-und-partnerschaften-fuer-eine-zirkulaere-kunststoffwirtschaft-2', '/news/plastship-2025-prioritaeten-innovationen'),
    {
        from: '/en/news/ppwr-erhoeht-den-rezyklatdruck-doch-der-markt-muss-erst-lieferfaehig-werden',
        to: '/news',
        statusCode: 302,
        note: '#1559: Artikel noch nicht importiert — vorläufig die Übersicht'
    },
    // Produkt „The PlastCert Laboratory" gibt es im Showroom der App nicht;
    // Craft führte es unter beiden Schreibweisen der Marke
    ...[
        'PlastCert',
        'plastcert'
    ].map((marke)=>({
            from: `/en/partner/${marke}/the-plastcert-laboratory`,
            to: '/partners/plastcert',
            statusCode: 302,
            note: '#1559: Produkt fehlt im Showroom — vorläufig die Marken-Seite'
        })),
    // Suche leitete auf der alten Seite auf die Plattform
    permanent('/suche', '/material-search')
];
/** Deutscher Craft-Pfad → Ziel in der App, aus den deutschen Tabellen */ const artikelZiel = new Map(ARTIKEL);
const kategorieZiel = new Map(KATEGORIEN);
const showroomZiel = new Map(SHOWROOM.map(([marke, alt, neu])=>[
        `${marke}/${alt}`,
        neu
    ]));
const ziel = (karte, schluessel)=>{
    const wert = karte.get(schluessel);
    if (wert === undefined) throw new Error(`legacyRedirects: kein deutsches Ziel für ${schluessel}`);
    return wert;
};
/** Alle Zeilen vor #1561 — englische Quellen noch mit deutschem Ziel. */ const ALLE_ZEILEN = [
    ...SEITEN_DE,
    ...SEITEN_EN,
    ...SHOWROOM.map(([marke, alt, neu])=>permanent(`/partner/${marke}/${alt}`, `/partners/${marke}/${neu}`)),
    ...ARTIKEL.map(([alt, neu])=>permanent(`/aktuelles/${alt}`, `/news/${neu}`)),
    ...KATEGORIEN.map(([alt, neu])=>permanent(`/aktuelles/kategorie/${alt}`, `/news/category/${neu}`)),
    // #1205: englische Pfade derselben Inhalte
    ...ARTIKEL_EN.map(([en, de])=>permanent(`/en/news/${en}`, `/news/${ziel(artikelZiel, de)}`)),
    ...KATEGORIEN_EN.map(([en, de])=>permanent(`/en/news/category/${en}`, `/news/category/${ziel(kategorieZiel, de)}`)),
    ...SHOWROOM_EN.map(([marke, en, de])=>permanent(`/en/partner/${marke}/${en}`, `/partners/${marke}/${ziel(showroomZiel, `${marke}/${de}`)}`)),
    ...MARKEN,
    ...REST
];
const istEnglisch = (from)=>from === '/en' || from.startsWith('/en/');
/**
 * Adresse der englischen Fassung eines Ziels — unabhängig davon, ob es sie
 * heute gibt. Ist der alte Pfad genau diese Adresse, entfällt die Zeile auch
 * dann, wenn das Ziel (noch) keinen englischen Text hat: Die Seite selbst
 * leitet dort auf Deutsch (308, nicht speicherbar) und antwortet englisch,
 * sobald es die Fassung gibt. Eine feste 301-Zeile würde die Adresse dauerhaft
 * auf Deutsch festlegen und der späteren englischen Seite im Weg stehen.
 */ const englischeAdresse = (to)=>to === '/' ? '/en' : `/en${to}`;
const istSelbstDieSeite = (eintrag)=>istEnglisch(eintrag.from) && englischeAdresse(eintrag.to) === eintrag.from;
const LEGACY_REDIRECTS = ALLE_ZEILEN.flatMap(_c = (eintrag)=>{
    if (!istEnglisch(eintrag.from)) return [
        eintrag
    ];
    return istSelbstDieSeite(eintrag) ? [] : [
        englisch(eintrag)
    ];
});
_c1 = LEGACY_REDIRECTS;
const RETIRED_LEGACY_REDIRECTS = ALLE_ZEILEN.filter(istSelbstDieSeite);
function normalizeLegacyPath(pathname) {
    let pfad = pathname.split('?')[0] ?? '';
    try {
        pfad = decodeURIComponent(pfad);
    } catch  {
    /* ungültige Kodierung: Pfad so lassen, er trifft dann keinen Eintrag */ }
    if (pfad.length > 1 && pfad.endsWith('/')) pfad = pfad.slice(0, -1);
    return pfad;
}
const NACH_PFAD = new Map(LEGACY_REDIRECTS.map((eintrag)=>[
        eintrag.from,
        eintrag
    ]));
function legacyRedirectFor(pathname) {
    return NACH_PFAD.get(normalizeLegacyPath(pathname));
}
function legacyRedirectPairs() {
    return LEGACY_REDIRECTS.map(({ from, to, statusCode })=>{
        const letztes = to.slice(to.lastIndexOf('/') + 1);
        const datei = letztes.includes('.');
        return {
            from,
            to: to.endsWith('/') || datei ? to : `${to}/`,
            statusCode
        };
    });
}
const ANONYMOUS_LEGACY_REDIRECTS = {
    '/monitored-materials': '/recyclate-performance',
    '/search': '/material-search'
};
function legacyProxyOnlyPairs() {
    return RETIRED_LEGACY_REDIRECTS.filter((eintrag)=>LEGACY_TARGETS_WITHOUT_ENGLISH.has(eintrag.to)).map(({ from, to })=>({
            from,
            to: to.endsWith('/') ? to : `${to}/`,
            statusCode: 301
        }));
}
function anonymousLegacyRedirectPairs() {
    return Object.entries(ANONYMOUS_LEGACY_REDIRECTS).map(([from, to])=>({
            from,
            to: to.endsWith('/') ? to : `${to}/`,
            statusCode: 301
        }));
}
var _c, _c1;
__turbopack_context__.k.register(_c, "LEGACY_REDIRECTS$ALLE_ZEILEN.flatMap");
__turbopack_context__.k.register(_c1, "LEGACY_REDIRECTS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cmsBlockTypesOf",
    ()=>cmsBlockTypesOf,
    "cmsFallbackOrder",
    ()=>cmsFallbackOrder,
    "cmsLocaleFor",
    ()=>cmsLocaleFor,
    "cmsSourceLocaleOf",
    ()=>cmsSourceLocaleOf,
    "cmsText",
    ()=>cmsText,
    "cmsTexts",
    ()=>cmsTexts,
    "formatCmsDate",
    ()=>formatCmsDate,
    "formatCmsDateBadge",
    ()=>formatCmsDateBadge,
    "hasAnyCmsText",
    ()=>hasAnyCmsText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)");
;
function cmsLocaleFor(language) {
    const basis = (language ?? '').toLowerCase().split('-')[0];
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_LOCALES"].find((locale)=>locale === basis) ?? 'en';
}
function cmsSourceLocaleOf(record) {
    if (!record || typeof record !== 'object') return null;
    const wert = record.sourceLocale;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContentLocale"])(wert) ? wert : null;
}
/** Nicht leerer Text (Leerzeichen allein zählen nicht). */ const mitText = (wert)=>typeof wert === 'string' && wert.trim() !== '';
function hasAnyCmsText(value) {
    return !!value && Object.values(value).some(mitText);
}
function cmsFallbackOrder(locale, sourceLocale) {
    const reihe = [];
    for (const kandidat of [
        locale,
        sourceLocale,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"],
        'en'
    ]){
        if (kandidat && !reihe.includes(kandidat)) reihe.push(kandidat);
    }
    return reihe;
}
function cmsText(value, locale, sourceLocale) {
    if (!value) return '';
    for (const kandidat of cmsFallbackOrder(locale, sourceLocale)){
        const text = value[kandidat];
        if (mitText(text)) return text;
    }
    return Object.values(value).find(mitText) ?? '';
}
function cmsTexts(values, locale, sourceLocale) {
    return (values ?? []).map((value)=>cmsText(value, locale, sourceLocale));
}
function cmsBlockTypesOf(blocks) {
    const gesehen = [];
    for (const block of blocks){
        if (!gesehen.includes(block.type)) gesehen.push(block.type);
    }
    return gesehen;
}
function formatCmsDate(isoDate, locale) {
    if (!isoDate) return '';
    const datum = parseCmsDate(isoDate);
    if (!datum) return isoDate;
    return datum.toLocaleDateString(cmsDateLocale(locale), {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
    });
}
/** JJJJ-MM-TT als Mitternacht UTC, sonst ISO-Zeitstempel; ungültig → undefined */ function parseCmsDate(isoDate) {
    const datum = new Date(/^\d{4}-\d{2}-\d{2}$/.test(isoDate) ? `${isoDate}T00:00:00Z` : isoDate);
    return Number.isNaN(datum.getTime()) ? undefined : datum;
}
/** Sprache für Intl: de → de-DE, en → en-GB wie bisher, weitere Sprachen mit ihrem Code (#2083) */ const cmsDateLocale = (locale)=>locale === 'de' ? 'de-DE' : locale === 'en' ? 'en-GB' : locale;
function formatCmsDateBadge(isoDate, locale) {
    if (!isoDate) return undefined;
    const datum = parseCmsDate(isoDate);
    if (!datum) return undefined;
    const sprache = cmsDateLocale(locale);
    const day = new Intl.DateTimeFormat(sprache, {
        day: '2-digit',
        timeZone: 'UTC'
    }).format(datum);
    const month = new Intl.DateTimeFormat(sprache, {
        month: 'short',
        timeZone: 'UTC'
    }).format(datum).replace(/\.$/, '');
    return {
        day,
        month
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/auth/authGates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Zwischenschritte nach dem Passwort-Login (#1330) — die eine Stelle, an der
 * ihre Reihenfolge steht.
 *
 * Bis #1330 gab es nur die 2FA-Schritte, und die Middleware entschied sie
 * selbst. Mit dem erzwungenen Passwortwechsel kommt ein dritter dazu, und die
 * Reihenfolge ist nicht beliebig:
 *
 *   1. Code abfragen   — das Konto HAT einen zweiten Faktor. Er kommt zuerst:
 *                        wer nur das Startpasswort kennt, soll damit nicht das
 *                        Passwort eines fremden Kontos neu setzen können.
 *   2. Passwort ändern — `mustChangePassword` am Nutzer.
 *   3. 2FA einrichten  — Rolle verlangt 2FA, das Konto hat noch keine. Beim
 *                        Erstlogin also: erst das eigene Passwort, dann 2FA.
 *
 * Edge-tauglich (Middleware): keine Node-APIs, kein Prisma. Gelesen werden
 * nur Claims aus dem JWT.
 */ __turbopack_context__.s([
    "PASSWORD_CHANGE_PATH",
    ()=>PASSWORD_CHANGE_PATH,
    "authStepRedirect",
    ()=>authStepRedirect,
    "isSessionComplete",
    ()=>isSessionComplete,
    "mayChangePassword",
    ()=>mayChangePassword,
    "pendingAuthStep",
    ()=>pendingAuthStep
]);
const PASSWORD_CHANGE_PATH = '/password-change';
const ZIEL = {
    '2fa-verify': '/2fa/verify',
    'password-change': PASSWORD_CHANGE_PATH,
    '2fa-setup': '/2fa/setup'
};
function pendingAuthStep(token) {
    const zweiterFaktorOffen = token.twoFactorVerified === false;
    if (zweiterFaktorOffen && token.twoFactorEnabled) return '2fa-verify';
    if (token.mustChangePassword === true) return 'password-change';
    if (zweiterFaktorOffen && token.twoFactorRequired) return '2fa-setup';
    return null;
}
function isSessionComplete(user) {
    if (!user) return false;
    return user.twoFactorVerified !== false && user.mustChangePassword !== true;
}
function authStepRedirect(token, pathname) {
    const schritt = pendingAuthStep(token);
    if (!schritt) return null;
    const ziel = ZIEL[schritt];
    return pathname === ziel || pathname.startsWith(`${ziel}/`) ? null : ziel;
}
function mayChangePassword(token, konto) {
    if (!konto.isActive) return false;
    if (token.twoFactorVerified !== false) return true;
    return konto.mustChangePassword && !konto.totpEnabled;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/auth/routeProtection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ADMIN_ONLY_PREFIXES",
    ()=>ADMIN_ONLY_PREFIXES,
    "ANONYMOUS_REDIRECTS",
    ()=>ANONYMOUS_REDIRECTS,
    "EDITOR_PREFIXES",
    ()=>EDITOR_PREFIXES,
    "EDITOR_TAG",
    ()=>EDITOR_TAG,
    "MAILBOX_PREFIXES",
    ()=>MAILBOX_PREFIXES,
    "PUBLIC_PREFIXES",
    ()=>PUBLIC_PREFIXES,
    "anonymousRedirectFor",
    ()=>anonymousRedirectFor,
    "canEditCms",
    ()=>canEditCms,
    "createRouteAccess",
    ()=>createRouteAccess,
    "isAppRoute",
    ()=>isAppRoute,
    "isPublicRoute",
    ()=>isPublicRoute,
    "routeAccess",
    ()=>routeAccess,
    "routenmusterZuRegex",
    ()=>routenmusterZuRegex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$routeInventory$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/usage/routeInventory.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cms$2f$legacyRedirects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cms/legacyRedirects.ts [app-client] (ecmascript)");
;
;
const PUBLIC_PREFIXES = [
    '/login',
    '/2fa',
    '/password-reset',
    // #1429: Ziel des Links aus der Bestätigungs-Mail.
    '/verify-email',
    '/unauthorized',
    '/forbidden',
    '/about',
    '/contact-us',
    '/news',
    '/partners',
    '/services',
    '/health',
    // #2137: eigene Kartenseite — Ziel aller Anschriftenlinks, auch der
    // Footer-Anschrift ohne Anmeldung. Die Adresssuche dort bleibt angemeldet
    // (/api/geo/*), ohne Anmeldung nur Koordinaten aus dem Link.
    '/map',
    // #1205: /privacy, /imprint, /agb, /cookies, /email-disclaimer, /accessibility (#2141), /faq und
    // /industry-survey sind CMS-Seiten — keine App-Route, also ohnehin öffentlich.
    // #1157 (Block A der Paritätsanalyse): die Marketing-Seiten, die der Footer
    // verlinkt — bis dahin schickte die Middleware Besucher von dort zum Login.
    // Wächter: tests/config/footerNavigation.test.ts (jeder Footer-Link ⇒ public).
    '/story',
    '/recycler-circle',
    '/procurement',
    '/waste-disposal',
    '/design-for-recycling',
    '/top-recyclates',
    '/material-quality',
    '/material-search',
    '/benchmark'
];
const ANONYMOUS_REDIRECTS = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cms$2f$legacyRedirects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ANONYMOUS_LEGACY_REDIRECTS"];
function anonymousRedirectFor(pathname) {
    const pfad = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    return ANONYMOUS_REDIRECTS[pfad];
}
const ADMIN_ONLY_PREFIXES = [
    '/rbac-management',
    '/security',
    '/usage',
    '/process-feedbacks',
    '/mailing',
    '/jobs',
    // #1759: Zertifikats-Katalog (Liste; Detailseite bleibt offen)
    '/certificates',
    // #1760: Prüfparameter (Liste; Detailseite bleibt offen)
    '/audit-properties',
    // #1761: Lohndienstleistungen (Liste; Detailseite bleibt offen)
    '/toll-services',
    // #1762: Kostenstellen (Liste; Detailseite bleibt offen)
    '/cost-centers'
];
const EDITOR_PREFIXES = [
    '/cms'
];
const EDITOR_TAG = 'editor';
/** `management` ist per Definition die Vereinigung aller Tags und schließt editor ein. */ const TAGS_MIT_REDAKTION = [
    EDITOR_TAG,
    'management'
];
const MAILBOX_PREFIXES = [
    '/mailing/postfaecher'
];
function canEditCms(role, staffTags) {
    if (role === 'admin') return true;
    if (role !== 'staff' || !Array.isArray(staffTags)) return false;
    return staffTags.some((tag)=>TAGS_MIT_REDAKTION.includes(String(tag)));
}
function normalisiere(pathname) {
    const ohneQuery = pathname.split('?')[0] ?? '/';
    if (ohneQuery.length > 1 && ohneQuery.endsWith('/')) return ohneQuery.slice(0, -1);
    return ohneQuery || '/';
}
function trifftPraefix(pfad, praefixe) {
    return praefixe.some((praefix)=>pfad === praefix || pfad.startsWith(`${praefix}/`));
}
const REGEX_SONDERZEICHEN = /[.*+?^${}()|[\]\\]/g;
function routenmusterZuRegex(route) {
    if (route.includes('[...') || route.includes('[[...')) return null;
    const quelle = route.split('/').map((segment)=>segment.startsWith('[') && segment.endsWith(']') ? '[^/]+' : segment.replace(REGEX_SONDERZEICHEN, '\\$&')).join('/');
    return new RegExp(`^${quelle}$`) // nosemgrep: javascript.lang.security.audit.detect-non-literal-regexp.detect-non-literal-regexp — Routen aus der Code-Konfiguration, Sonderzeichen maskiert
    ;
}
function createRouteAccess(routen) {
    const muster = routen.map(routenmusterZuRegex).filter((regex)=>regex !== null);
    const isAppRoute = (pathname)=>{
        const pfad = normalisiere(pathname);
        return muster.some((regex)=>regex.test(pfad));
    };
    const routeAccess = (pathname)=>{
        const pfad = normalisiere(pathname);
        if (pfad === '/') return 'public';
        if (trifftPraefix(pfad, PUBLIC_PREFIXES)) return 'public';
        // #1892: vor dem admin-Präfix /mailing, sonst gewänne der
        if (trifftPraefix(pfad, MAILBOX_PREFIXES)) return 'mailboxes';
        if (trifftPraefix(pfad, ADMIN_ONLY_PREFIXES)) return 'admin';
        if (trifftPraefix(pfad, EDITOR_PREFIXES)) return 'editor';
        return isAppRoute(pfad) ? 'session' : 'public';
    };
    return {
        isAppRoute,
        isPublicRoute: (pathname)=>routeAccess(pathname) === 'public',
        routeAccess
    };
}
const standard = createRouteAccess(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$routeInventory$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const isAppRoute = standard.isAppRoute;
const isPublicRoute = standard.isPublicRoute;
const routeAccess = standard.routeAccess;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/consent/consent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1133/#1142: Einwilligungs-Kern — ohne React, ohne DOM, damit Middleware
 * (Edge), API-Routen und der Sentry-Browser-Init dasselbe lesen wie der
 * Banner (Molecule/CookieBanner).
 *
 * `necessary` = nur technisch notwendige Cookies (Session, CSRF, Sprache),
 * `all` = zusätzlich Nutzungsanalyse: anonymes Zählen öffentlicher Seiten
 * und Sentry-Performance-Traces. Fehlerberichte bleiben unabhängig davon
 * (berechtigtes Interesse, ohne Nutzeridentität vor dem Login).
 */ __turbopack_context__.s([
    "CONSENT_COOKIE",
    ()=>CONSENT_COOKIE,
    "CONSENT_MARKER_ATTRIBUTE",
    ()=>CONSENT_MARKER_ATTRIBUTE,
    "CONSENT_MAX_AGE_SEKUNDEN",
    ()=>CONSENT_MAX_AGE_SEKUNDEN,
    "CONSENT_OPEN_EVENT",
    ()=>CONSENT_OPEN_EVENT,
    "consentAusCookieHeader",
    ()=>consentAusCookieHeader,
    "consentMarkerScript",
    ()=>consentMarkerScript,
    "hatEinwilligung",
    ()=>hatEinwilligung,
    "parseConsent",
    ()=>parseConsent,
    "traceSampleRateMitConsent",
    ()=>traceSampleRateMitConsent
]);
const CONSENT_COOKIE = 'plastship_consent';
const CONSENT_MAX_AGE_SEKUNDEN = 60 * 60 * 24 * 365;
const CONSENT_OPEN_EVENT = 'plastship:consent-open';
function parseConsent(wert) {
    return wert === 'all' || wert === 'necessary' ? wert : null;
}
function consentAusCookieHeader(header) {
    if (!header) return null;
    for (const teil of header.split(';')){
        const [name, ...rest] = teil.trim().split('=');
        if (name === CONSENT_COOKIE) {
            try {
                return parseConsent(decodeURIComponent(rest.join('=')));
            } catch  {
                return null;
            }
        }
    }
    return null;
}
function hatEinwilligung(zweck, consent) {
    if (zweck === 'analytics') return consent === 'all';
    return false;
}
function traceSampleRateMitConsent(rate, consent) {
    if (!Number.isFinite(rate) || rate <= 0) return 0;
    return hatEinwilligung('analytics', consent) ? Math.min(1, rate) : 0;
}
const CONSENT_MARKER_ATTRIBUTE = 'data-consent';
function consentMarkerScript() {
    const pattern = `(?:^|;)\\s*${CONSENT_COOKIE}=(?:all|necessary)(?:;|$)`;
    return `try{if(new RegExp(${JSON.stringify(pattern)}).test(document.cookie))document.documentElement.setAttribute(${JSON.stringify(CONSENT_MARKER_ATTRIBUTE)},'')}catch(e){}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EDGE_OUTER_ZONE_MAX_PX",
    ()=>EDGE_OUTER_ZONE_MAX_PX,
    "EDGE_WAVES",
    ()=>EDGE_WAVES,
    "EDGE_ZONE_MAX_PX",
    ()=>EDGE_ZONE_MAX_PX,
    "HEX_EDGE_DEPTHS",
    ()=>HEX_EDGE_DEPTHS,
    "HEX_EDGE_SIDES",
    ()=>HEX_EDGE_SIDES,
    "describeEdges",
    ()=>describeEdges,
    "edgeCells",
    ()=>edgeCells,
    "edgeHalfPx",
    ()=>edgeHalfPx,
    "edgeLevel",
    ()=>edgeLevel,
    "edgeOuterZonePx",
    ()=>edgeOuterZonePx,
    "edgePaddingPx",
    ()=>edgePaddingPx,
    "edgeSolidPx",
    ()=>edgeSolidPx,
    "edgeZonePx",
    ()=>edgeZonePx,
    "edgeZoneRows",
    ()=>edgeZoneRows,
    "hasEdges",
    ()=>hasEdges,
    "hasOuterEdges",
    ()=>hasOuterEdges,
    "innerEdges",
    ()=>innerEdges,
    "verticalEdges",
    ()=>verticalEdges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
;
;
const HEX_EDGE_SIDES = [
    'top',
    'right',
    'bottom',
    'left'
];
const HEX_EDGE_DEPTHS = [
    'hero',
    'section',
    'swell'
];
const EDGE_WAVES = {
    hero: {
        depth: 2,
        amplitude: 1.5,
        periods: 1,
        phase: 0.6
    },
    section: {
        depth: 1,
        amplitude: 0.5,
        periods: 1,
        phase: 0.6
    },
    swell: {
        depth: 1.5,
        amplitude: 1,
        periods: 2,
        phase: 0.3
    }
};
/** Eigene Phase je Seite, damit gegenüberliegende Kanten nicht spiegelgleich laufen; unten wie bisher. */ const SIDE_PHASE = {
    bottom: 0,
    top: 2.1,
    right: 1.05,
    left: 4.2
};
const edgeZoneRows = (depth = 'section', steps = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"])=>EDGE_WAVES[depth].depth + EDGE_WAVES[depth].amplitude + steps.length;
const edgeZonePx = (tileSize, depth = 'section')=>tileSize > 0 ? Math.round(tileSize * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_STEP"] * edgeZoneRows(depth)) : 0;
const edgeOuterZonePx = (tileSize, depth = 'section')=>tileSize > 0 ? Math.round(tileSize * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_STEP"] * (edgeZoneRows(depth) + 1)) : 0;
const edgePaddingPx = (width, columns, depth = 'hero')=>width > 0 && columns > 0 ? edgeZonePx(width / columns, depth) : 0;
const EDGE_ZONE_MAX_PX = Object.fromEntries(_c1 = HEX_EDGE_DEPTHS.map(_c = (depth)=>[
        depth,
        Math.ceil(38 * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_STEP"] * edgeZoneRows(depth))
    ]));
_c2 = EDGE_ZONE_MAX_PX;
const EDGE_OUTER_ZONE_MAX_PX = Object.fromEntries(_c4 = HEX_EDGE_DEPTHS.map(_c3 = (depth)=>[
        depth,
        Math.ceil(38 * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_STEP"] * (edgeZoneRows(depth) + 1))
    ]));
_c5 = EDGE_OUTER_ZONE_MAX_PX;
/** Kacheln sind je nach Breite 34…38 px (columnsForWidth rundet) */ const TILE_MIN_PX = 34;
const TILE_MID_PX = 36;
const edgeSolidPx = (depth = 'section')=>Math.floor(TILE_MIN_PX * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_STEP"] * Math.max(0, EDGE_WAVES[depth].depth - EDGE_WAVES[depth].amplitude + 0.5));
const edgeHalfPx = (depth = 'section')=>Math.round(TILE_MID_PX * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_STEP"] * (EDGE_WAVES[depth].depth + 0.5));
const edgeLevel = (cell, side, width, height, wave, steps = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"], jitter = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_JITTER"])=>{
    const rowStep = cell.size * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROW_STEP"];
    const along = side === 'top' || side === 'bottom' ? cell.cx / width : cell.cy / height;
    const swing = wave.amplitude * Math.sin(2 * Math.PI * along * wave.periods + wave.phase + SIDE_PHASE[side]);
    const distance = side === 'bottom' ? height - cell.cy : side === 'top' ? cell.cy : side === 'left' ? cell.cx : width - cell.cx;
    const rows = (distance - rowStep * (wave.depth + swing)) / rowStep;
    const touches = side === 'bottom' ? cell.y + cell.size > height - 1 : side === 'top' ? cell.y < 1 : side === 'left' ? cell.x < 1 : cell.x + cell.size > width - 1;
    const index = touches || rows <= 0 ? 0 : Math.ceil(rows);
    if (index > steps.length) return {
        level: 0,
        wave: index
    };
    return {
        level: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["frayedLevel"])(cell, index, steps, jitter),
        wave: index
    };
};
const round3 = (v)=>Math.round(v * 1000) / 1000;
const sidesOf = (edges, placement)=>HEX_EDGE_SIDES.filter((side)=>edges[side]?.placement === placement);
const waveOf = (spec)=>EDGE_WAVES[spec.depth ?? 'section'];
/** Ragt die Zelle an Seite `side` über den Host hinaus? */ const reachesOut = (cell, side, width, height)=>side === 'top' ? cell.y < 0 : side === 'bottom' ? cell.y + cell.size > height : side === 'left' ? cell.x < 0 : cell.x + cell.size > width;
const edgeCells = (width, height, columns, edges)=>{
    const empty = {
        width: Math.max(0, width),
        height: Math.max(0, height),
        offsetX: 0,
        offsetY: 0,
        cells: []
    };
    if (width <= 0 || height <= 0 || columns < 1) return empty;
    const inner = sidesOf(edges, 'inner');
    const outer = sidesOf(edges, 'outer');
    if (inner.length === 0 && outer.length === 0) return empty;
    const size = width / columns;
    const zone = (side)=>edges[side]?.placement === 'outer' ? edgeOuterZonePx(size, edges[side]?.depth) : 0;
    const left = zone('left');
    const top = zone('top');
    const layoutWidth = width + left + zone('right');
    const layoutHeight = height + top + zone('bottom');
    const cells = [];
    if (inner.length > 0) {
        for (const cell of (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(width, height, columns)){
            let best = null;
            for (const side of inner){
                const result = edgeLevel(cell, side, width, height, waveOf(edges[side]));
                if (!best || result.level > best.level) best = {
                    ...result,
                    side
                };
            }
            if (!best || best.level <= 0.005) continue;
            const spec = edges[best.side];
            cells.push({
                ...cell,
                alpha: round3(best.level),
                color: spec.color,
                placement: 'inner',
                side: best.side,
                wave: best.wave
            });
        }
    }
    if (outer.length > 0) {
        const bounds = {
            left: -left,
            top: -top,
            right: width + zone('right'),
            bottom: height + zone('bottom')
        };
        for (const cell of (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCellsInRect"])(width, height, columns, bounds)){
            const out = outer.filter((side)=>reachesOut(cell, side, width, height));
            if (out.length === 0) continue;
            // im vergrößerten Rahmen gerechnet: dessen Kante ist die Außenlinie
            const shifted = {
                ...cell,
                x: cell.x + left,
                y: cell.y + top,
                cx: cell.cx + left,
                cy: cell.cy + top
            };
            let cut = 0;
            let side = out[0];
            let wave = Number.POSITIVE_INFINITY;
            for (const candidate of outer){
                const result = edgeLevel(shifted, candidate, layoutWidth, layoutHeight, waveOf(edges[candidate]));
                if (result.level > cut) {
                    cut = result.level;
                    side = candidate;
                }
                wave = Math.min(wave, result.wave);
            }
            const alpha = 1 - cut;
            if (alpha <= 0.005) continue;
            const spec = edges[side];
            cells.push({
                ...cell,
                alpha: round3(alpha),
                color: spec.color,
                placement: 'outer',
                side,
                wave: Number.isFinite(wave) ? wave : 0
            });
        }
    }
    return {
        width: layoutWidth,
        height: layoutHeight,
        offsetX: left,
        offsetY: top,
        cells
    };
};
const innerEdges = (edges)=>{
    const result = {};
    for (const side of HEX_EDGE_SIDES){
        const spec = edges?.[side];
        if (spec?.placement === 'inner') result[side] = spec;
    }
    return result;
};
const verticalEdges = (edges)=>{
    const result = {};
    if (edges?.top) result.top = edges.top;
    if (edges?.bottom) result.bottom = edges.bottom;
    return result;
};
const hasEdges = (edges)=>HEX_EDGE_SIDES.some((side)=>Boolean(edges?.[side]));
const hasOuterEdges = (edges)=>HEX_EDGE_SIDES.some((side)=>edges?.[side]?.placement === 'outer');
const describeEdges = (edges)=>HEX_EDGE_SIDES.filter((side)=>edges?.[side]).map((side)=>`${side}:${edges?.[side]?.placement}`).join(',');
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "EDGE_ZONE_MAX_PX$Object.fromEntries$HEX_EDGE_DEPTHS.map");
__turbopack_context__.k.register(_c1, "EDGE_ZONE_MAX_PX$Object.fromEntries");
__turbopack_context__.k.register(_c2, "EDGE_ZONE_MAX_PX");
__turbopack_context__.k.register(_c3, "EDGE_OUTER_ZONE_MAX_PX$Object.fromEntries$HEX_EDGE_DEPTHS.map");
__turbopack_context__.k.register(_c4, "EDGE_OUTER_ZONE_MAX_PX$Object.fromEntries");
__turbopack_context__.k.register(_c5, "EDGE_OUTER_ZONE_MAX_PX");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/hex/edgeFallback.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEX_EDGE_FALLBACK_HEIGHT",
    ()=>HEX_EDGE_FALLBACK_HEIGHT,
    "HEX_EDGE_FALLBACK_WIDTH",
    ()=>HEX_EDGE_FALLBACK_WIDTH,
    "cachedHexEdgeFallbackStrips",
    ()=>cachedHexEdgeFallbackStrips,
    "hexEdgeFallbackStrips",
    ()=>hexEdgeFallbackStrips
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
;
;
const HEX_EDGE_FALLBACK_WIDTH = 2304;
const HEX_EDGE_FALLBACK_HEIGHT = 1600;
const runden = (v)=>Math.round(v * 10) / 10;
function hexEdgeFallbackStrips(edges, tileSize = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TILE_SIZE_PX"]) {
    const W = HEX_EDGE_FALLBACK_WIDTH;
    const H = HEX_EDGE_FALLBACK_HEIGHT;
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgeCells"])(W, H, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnsForWidth"])(W, tileSize), edges);
    const gruppen = new Map();
    for (const cell of layout.cells){
        const key = `${cell.side}-${cell.placement}`;
        gruppen.set(key, [
            ...gruppen.get(key) ?? [],
            cell
        ]);
    }
    const streifen = [];
    for (const [key, cells] of gruppen){
        const { side, placement } = cells[0];
        const innen = placement === 'inner';
        const minX = Math.min(...cells.map((c)=>c.x));
        const maxX = Math.max(...cells.map((c)=>c.x + c.size));
        const minY = Math.min(...cells.map((c)=>c.y));
        const maxY = Math.max(...cells.map((c)=>c.y + c.size));
        let box;
        if (side === 'bottom') {
            const y0 = innen ? Math.max(0, minY) : H;
            const y1 = innen ? H : maxY;
            box = {
                x: 0,
                y: y0,
                width: W,
                height: y1 - y0
            };
        } else if (side === 'top') {
            const y0 = innen ? 0 : minY;
            const y1 = innen ? Math.min(H, maxY) : 0;
            box = {
                x: 0,
                y: y0,
                width: W,
                height: y1 - y0
            };
        } else if (side === 'right') {
            const x0 = innen ? Math.max(0, minX) : W;
            const x1 = innen ? W : maxX;
            box = {
                x: x0,
                y: 0,
                width: x1 - x0,
                height: H
            };
        } else {
            const x0 = innen ? 0 : minX;
            const x1 = innen ? Math.min(W, maxX) : 0;
            box = {
                x: x0,
                y: 0,
                width: x1 - x0,
                height: H
            };
        }
        if (box.width <= 0 || box.height <= 0) continue;
        const viewBox = {
            x: runden(box.x),
            y: runden(box.y),
            width: runden(box.width),
            height: runden(box.height)
        };
        const depth = side === 'top' || side === 'bottom' ? viewBox.height : viewBox.width;
        streifen.push({
            key,
            side,
            placement,
            viewBox,
            depth,
            cells
        });
    }
    return streifen;
}
/** Wenige Kombinationen je Seite — die Rechnung (≈ 4000 Zellen) einmal je Server-Prozess */ const cache = new Map();
const CACHE_MAX = 64;
function cachedHexEdgeFallbackStrips(edges, tileSize = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TILE_SIZE_PX"]) {
    const key = `${tileSize}|${JSON.stringify(edges)}`;
    const hit = cache.get(key);
    if (hit) return hit;
    const strips = hexEdgeFallbackStrips(edges, tileSize);
    if (cache.size >= CACHE_MAX) cache.delete(cache.keys().next().value);
    cache.set(key, strips);
    return strips;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_FRAY_JITTER",
    ()=>DEFAULT_FRAY_JITTER,
    "DEFAULT_FRAY_STEPS",
    ()=>DEFAULT_FRAY_STEPS,
    "SHIMMER_AMPLITUDE",
    ()=>SHIMMER_AMPLITUDE,
    "SHIMMER_PERIOD_MS",
    ()=>SHIMMER_PERIOD_MS,
    "cellNoise",
    ()=>cellNoise,
    "frayJitter",
    ()=>frayJitter,
    "frayedLevel",
    ()=>frayedLevel,
    "isPartial",
    ()=>isPartial,
    "shimmerTiming",
    ()=>shimmerTiming,
    "stepAt",
    ()=>stepAt
]);
const DEFAULT_FRAY_STEPS = [
    1,
    0.5,
    0.1
];
const DEFAULT_FRAY_JITTER = 0.35;
const frayJitter = (strength)=>DEFAULT_FRAY_JITTER * Math.max(0, strength);
const cellNoise = (cell)=>{
    const h = (Math.abs(cell.row) * 31 + Math.abs(cell.col) * 17 + (cell.col < 0 ? 5 : 0)) % 13;
    return h / 12 * 2 - 1;
};
const stepAt = (steps, wave)=>{
    const curve = [
        ...steps,
        0
    ];
    const w = Math.max(0, Math.min(curve.length - 1, wave));
    const lo = Math.floor(w);
    const hi = Math.min(curve.length - 1, lo + 1);
    const t = w - lo;
    return curve[lo] * (1 - t) + curve[hi] * t;
};
const frayedLevel = (cell, wave, steps = DEFAULT_FRAY_STEPS, jitter = DEFAULT_FRAY_JITTER)=>wave === 0 ? steps[0] : stepAt(steps, wave + cellNoise(cell) * jitter);
const SHIMMER_AMPLITUDE = 0.15;
const SHIMMER_PERIOD_MS = [
    12000,
    20000
];
const isPartial = (alpha)=>alpha > 0.005 && alpha < 0.995;
const shimmerTiming = (cell)=>{
    const [min, max] = SHIMMER_PERIOD_MS;
    const n = (cellNoise(cell) + 1) / 2;
    const period = Math.round(min + n * (max - min));
    // zweite, von der Periode entkoppelte Streuung für die Phase
    const phase = (cellNoise({
        row: cell.col,
        col: cell.row + 3
    }) + 1) / 2;
    return {
        period,
        offset: -Math.round(phase * period)
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_TILE_SIZE_PX",
    ()=>DEFAULT_TILE_SIZE_PX,
    "MAX_COLUMNS",
    ()=>MAX_COLUMNS,
    "MIN_COLUMNS",
    ()=>MIN_COLUMNS,
    "ROW_STEP",
    ()=>ROW_STEP,
    "columnsForWidth",
    ()=>columnsForWidth,
    "hexCellBox",
    ()=>hexCellBox,
    "hexCellSize",
    ()=>hexCellSize,
    "hexGridCells",
    ()=>hexGridCells,
    "hexGridCellsInRect",
    ()=>hexGridCellsInRect,
    "hexGridOrigin",
    ()=>hexGridOrigin,
    "hexIntersectsRect",
    ()=>hexIntersectsRect,
    "hexPolygonPoints",
    ()=>hexPolygonPoints,
    "hexSubpath",
    ()=>hexSubpath,
    "hexVertices",
    ()=>hexVertices,
    "litLevel",
    ()=>litLevel,
    "nearestHexCell",
    ()=>nearestHexCell,
    "rectLitLevel",
    ()=>rectLitLevel,
    "waveCoverage",
    ()=>waveCoverage,
    "waveDistances",
    ()=>waveDistances
]);
const ROW_STEP = 0.75;
const DEFAULT_TILE_SIZE_PX = 36;
const MIN_COLUMNS = 6;
const MAX_COLUMNS = 64;
const columnsForWidth = (width, tileSize = DEFAULT_TILE_SIZE_PX)=>Math.min(MAX_COLUMNS, Math.max(MIN_COLUMNS, Math.round(width / tileSize)));
const hexGridOrigin = (width, height, columns)=>{
    const size = width / columns;
    const rowStep = size * ROW_STEP;
    const shiftOf = (row)=>Math.abs(row) % 2 === 1 ? size / 2 : 0;
    const baseCenterX = (row, col)=>col * size - shiftOf(row) + size / 2;
    const baseCenterY = (row)=>row * rowStep - size * 0.25 + size / 2;
    const centerRow = Math.round((height / 2 - size * 0.25) / rowStep);
    const centerCol = Math.round((width / 2 - size / 2 + shiftOf(centerRow)) / size);
    const originX = width / 2 - baseCenterX(centerRow, centerCol);
    const originY = height / 2 - baseCenterY(centerRow);
    return {
        size,
        rowStep,
        originX,
        originY,
        patternX: originX,
        patternY: originY - size * 0.25,
        shiftOf,
        baseCenterX,
        baseCenterY
    };
};
const hexCellSize = (width, columns)=>width > 0 && columns > 0 ? width / columns : DEFAULT_TILE_SIZE_PX;
const nearestHexCell = (width, height, columns, x, y)=>{
    if (width <= 0 || height <= 0 || columns < 1) return null;
    const { size, rowStep, originX, originY, shiftOf, baseCenterX, baseCenterY } = hexGridOrigin(width, height, columns);
    const around = Math.round((y - originY - baseCenterY(0)) / rowStep);
    let best = null;
    let bestDistance = Infinity;
    for(let row = around - 1; row <= around + 1; row += 1){
        const col = Math.round((x - originX - size / 2 + shiftOf(row)) / size);
        const cx = baseCenterX(row, col) + originX;
        const cy = baseCenterY(row) + originY;
        const distance = Math.hypot(cx - x, cy - y);
        if (distance < bestDistance) {
            bestDistance = distance;
            best = {
                key: `${row}-${col}`,
                row,
                col,
                x: cx - size / 2,
                y: cy - size / 2,
                size,
                cx,
                cy
            };
        }
    }
    return best;
};
const hexGridCells = (width, height, columns)=>{
    if (width <= 0 || height <= 0 || columns < 1) return [];
    const { size, rowStep, originX, originY, baseCenterX, baseCenterY } = hexGridOrigin(width, height, columns);
    const rows = Math.ceil(height / rowStep) + 1;
    const cells = [];
    for(let row = -1; row <= rows; row += 1){
        for(let col = -1; col <= columns + 1; col += 1){
            const cx = baseCenterX(row, col) + originX;
            const cy = baseCenterY(row) + originY;
            const x = cx - size / 2;
            const y = cy - size / 2;
            if (x >= width || y >= height || x + size <= 0 || y + size <= 0) continue;
            cells.push({
                key: `${row}-${col}`,
                row,
                col,
                x,
                y,
                size,
                cx,
                cy
            });
        }
    }
    return cells;
};
const hexGridCellsInRect = (width, height, columns, rect)=>{
    if (width <= 0 || height <= 0 || columns < 1) return [];
    if (rect.right <= rect.left || rect.bottom <= rect.top) return [];
    const { size, rowStep, originX, originY, baseCenterX, baseCenterY } = hexGridOrigin(width, height, columns);
    const rowMin = Math.floor((rect.top - size - originY) / rowStep) - 1;
    const rowMax = Math.ceil((rect.bottom + size - originY) / rowStep) + 1;
    const colMin = Math.floor((rect.left - size - originX) / size) - 1;
    const colMax = Math.ceil((rect.right + size - originX) / size) + 1;
    const cells = [];
    for(let row = rowMin; row <= rowMax; row += 1){
        for(let col = colMin; col <= colMax; col += 1){
            const cx = baseCenterX(row, col) + originX;
            const cy = baseCenterY(row) + originY;
            const x = cx - size / 2;
            const y = cy - size / 2;
            if (x >= rect.right || y >= rect.bottom || x + size <= rect.left || y + size <= rect.top) continue;
            cells.push({
                key: `${row}-${col}`,
                row,
                col,
                x,
                y,
                size,
                cx,
                cy
            });
        }
    }
    return cells;
};
const litLevel = (cell, px, py, radius)=>{
    const d = Math.hypot(cell.cx - px, cell.cy - py);
    if (d >= radius) return 0;
    return 1 - d / radius;
};
const hexVertices = (cell)=>{
    const { x, y, size } = cell;
    return [
        [
            x + size / 2,
            y
        ],
        [
            x + size,
            y + size * 0.25
        ],
        [
            x + size,
            y + size * 0.75
        ],
        [
            x + size / 2,
            y + size
        ],
        [
            x,
            y + size * 0.75
        ],
        [
            x,
            y + size * 0.25
        ]
    ];
};
const pointInRect = (px, py, r)=>px >= r.left && px <= r.right && py >= r.top && py <= r.bottom;
const pointInConvex = (px, py, poly)=>{
    let sign = 0;
    for(let i = 0; i < poly.length; i += 1){
        const [ax, ay] = poly[i];
        const [bx, by] = poly[(i + 1) % poly.length];
        const cross = (bx - ax) * (py - ay) - (by - ay) * (px - ax);
        if (cross === 0) continue;
        const s = cross > 0 ? 1 : -1;
        if (sign === 0) sign = s;
        else if (s !== sign) return false;
    }
    return true;
};
const segmentsIntersect = (a, b, c, d)=>{
    const orient = (p, q, r)=>Math.sign((q[0] - p[0]) * (r[1] - p[1]) - (q[1] - p[1]) * (r[0] - p[0]));
    const o1 = orient(a, b, c);
    const o2 = orient(a, b, d);
    const o3 = orient(c, d, a);
    const o4 = orient(c, d, b);
    return o1 !== o2 && o3 !== o4;
};
const hexIntersectsRect = (cell, rect)=>{
    if (rect.right < cell.x || rect.left > cell.x + cell.size || rect.bottom < cell.y || rect.top > cell.y + cell.size) {
        return false;
    }
    const hex = hexVertices(cell);
    if (hex.some(([px, py])=>pointInRect(px, py, rect))) return true;
    const corners = [
        [
            rect.left,
            rect.top
        ],
        [
            rect.right,
            rect.top
        ],
        [
            rect.right,
            rect.bottom
        ],
        [
            rect.left,
            rect.bottom
        ]
    ];
    if (corners.some(([px, py])=>pointInConvex(px, py, hex))) return true;
    for(let i = 0; i < hex.length; i += 1){
        const a = hex[i];
        const b = hex[(i + 1) % hex.length];
        for(let j = 0; j < corners.length; j += 1){
            if (segmentsIntersect(a, b, corners[j], corners[(j + 1) % corners.length])) return true;
        }
    }
    return false;
};
const waveDistances = (cells, isSeed, maxWave)=>{
    const result = new Map();
    if (cells.length === 0 || maxWave < 0) return result;
    const neighbourRadius = cells[0].size * 1.05;
    let frontier = cells.filter(isSeed);
    frontier.forEach((c)=>result.set(c.key, 0));
    for(let wave = 1; wave <= maxWave && frontier.length > 0; wave += 1){
        const next = [];
        for (const cell of cells){
            if (result.has(cell.key)) continue;
            if (frontier.some((f)=>Math.hypot(f.cx - cell.cx, f.cy - cell.cy) <= neighbourRadius)) {
                result.set(cell.key, wave);
                next.push(cell);
            }
        }
        frontier = next;
    }
    return result;
};
const waveCoverage = (cells, rects, alphas)=>{
    const result = new Map();
    if (rects.length === 0 || alphas.length === 0) return result;
    const waves = waveDistances(cells, (cell)=>rects.some((r)=>hexIntersectsRect(cell, r)), alphas.length - 1);
    for (const [key, wave] of waves)result.set(key, alphas[wave]);
    return result;
};
const rectLitLevel = (cell, rect, feather)=>{
    const dx = Math.max(rect.left - cell.cx, 0, cell.cx - rect.right);
    const dy = Math.max(rect.top - cell.cy, 0, cell.cy - rect.bottom);
    const d = Math.hypot(dx, dy);
    if (d <= 0) return 1;
    if (feather <= 0 || d >= feather) return 0;
    return 1 - d / feather;
};
const hexPolygonPoints = (cell, dx = 0, dy = 0)=>{
    const x = cell.x + dx;
    const y = cell.y + dy;
    const s = cell.size;
    return [
        [
            x + s / 2,
            y
        ],
        [
            x + s,
            y + s / 4
        ],
        [
            x + s,
            y + 3 * s / 4
        ],
        [
            x + s / 2,
            y + s
        ],
        [
            x,
            y + 3 * s / 4
        ],
        [
            x,
            y + s / 4
        ]
    ].map(([px, py])=>`${Math.round(px * 10) / 10},${Math.round(py * 10) / 10}`).join(' ');
};
const hexSubpath = (cell, dx = 0, dy = 0)=>`M${hexPolygonPoints(cell, dx, dy).replace(/ /g, ' L')} Z`;
const hexCellBox = (cell, dx = 0, dy = 0)=>({
        x: cell.x + dx,
        y: cell.y + dy,
        width: cell.size,
        height: cell.size
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/hex/heroEdges.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HERO_DEFAULT_EDGES",
    ()=>HERO_DEFAULT_EDGES,
    "heroEdgeColor",
    ()=>heroEdgeColor,
    "heroEdgePadding",
    ()=>heroEdgePadding,
    "heroEdgePaddingFallback",
    ()=>heroEdgePaddingFallback,
    "heroEdges",
    ()=>heroEdges
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
;
const HERO_DEFAULT_EDGES = {
    bottom: {
        placement: 'inner',
        color: 'primary',
        depth: 'hero'
    }
};
const heroEdges = (edges)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["innerEdges"])(edges ?? HERO_DEFAULT_EDGES);
const heroEdgePadding = (edges, width, columns)=>{
    const bottom = edges.bottom;
    if (bottom?.placement === 'inner') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgePaddingPx"])(width, columns, bottom.depth ?? 'hero');
    return width > 0 && columns > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["edgeOuterZonePx"])(width / columns, 'hero') : 0;
};
const heroEdgePaddingFallback = (edges)=>{
    const bottom = edges.bottom;
    return bottom?.placement === 'inner' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDGE_ZONE_MAX_PX"][bottom.depth ?? 'hero'] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EDGE_OUTER_ZONE_MAX_PX"].hero;
};
const heroEdgeColor = (edges)=>(edges.bottom ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_EDGE_SIDES"].map((side)=>edges[side]).find(Boolean))?.color ?? 'primary';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$heroEdges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/heroEdges.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$shape$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/shape.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edgeFallback$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edgeFallback.ts [app-client] (ecmascript)");
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/hex/shape.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1742: Sechseck mit abgerundeten Ecken. Die App zeichnet ihr Sechseck mit
 * Spitze oben in einem quadratischen Rahmen (hexPolygonPoints): die Schrägen
 * haben Steigung 0,5, die Innenwinkel sind 126,87° (oben/unten) und 116,57°
 * (Seiten) — kein regelmäßiges Sechseck. Deshalb werden die Bögen je Ecke aus
 * dem echten Innenwinkel gerechnet: Tangentenlänge t = r / tan(θ/2).
 * Der Radius folgt dem Logo (LogoPlastship: r 5,79 bei Breite 88,13).
 */ __turbopack_context__.s([
    "HEX_CORNER_RATIO",
    ()=>HEX_CORNER_RATIO,
    "HEX_REGULAR_HEIGHT_RATIO",
    ()=>HEX_REGULAR_HEIGHT_RATIO,
    "hexCornerRadius",
    ()=>hexCornerRadius,
    "hexagonVertices",
    ()=>hexagonVertices,
    "roundedHexagonPath",
    ()=>roundedHexagonPath
]);
const HEX_CORNER_RATIO = 0.066;
const HEX_REGULAR_HEIGHT_RATIO = 2 / Math.sqrt(3);
const hexCornerRadius = (width, ratio = HEX_CORNER_RATIO)=>Math.round(width * ratio * 10) / 10;
/** Anteil der kürzesten Kante, den eine Tangentenlänge höchstens belegen darf (zwei Ecken je Kante bleiben getrennt) */ const MAX_TANGENT_SHARE = 0.45;
const fmt = (n)=>Math.round(n * 100) / 100 + 0 // + 0 macht aus -0 eine 0
;
function hexagonVertices({ x = 0, y = 0, width: w, height: h }) {
    return [
        [
            x + w / 2,
            y
        ],
        [
            x + w,
            y + h / 4
        ],
        [
            x + w,
            y + 3 * h / 4
        ],
        [
            x + w / 2,
            y + h
        ],
        [
            x,
            y + 3 * h / 4
        ],
        [
            x,
            y + h / 4
        ]
    ];
}
function roundedHexagonPath(box, radius, /** #2177: je Ecke (Index wie hexagonVertices) `true` = ohne Rundung */ sharp) {
    const x = box.x ?? 0;
    const y = box.y ?? 0;
    const w = box.width;
    const h = box.height;
    // Eckkoordinaten ohne Zwischen-Arrays (läuft für viele Kacheln)
    const vx0 = x + w / 2, vy0 = y;
    const vx1 = x + w, vy1 = y + h / 4;
    const vx2 = x + w, vy2 = y + 3 * h / 4;
    const vx3 = x + w / 2, vy3 = y + h;
    const vx4 = x, vy4 = y + 3 * h / 4;
    const vx5 = x, vy5 = y + h / 4;
    if (!(radius > 0)) {
        return `M${fmt(vx0)} ${fmt(vy0)} L${fmt(vx1)} ${fmt(vy1)} L${fmt(vx2)} ${fmt(vy2)} ` + `L${fmt(vx3)} ${fmt(vy3)} L${fmt(vx4)} ${fmt(vy4)} L${fmt(vx5)} ${fmt(vy5)} Z`;
    }
    // Kanten: schräg (vier, gleich lang) und senkrecht (zwei, Länge h/2)
    const slant = Math.hypot(w / 2, h / 4);
    const side = h / 2;
    const tMax = MAX_TANGENT_SHARE * Math.min(slant, side);
    // Innenwinkel: Spitzen (oben/unten) zwischen zwei Schrägen, Seiten zwischen Schräge und Senkrechter.
    // tan(θ/2) über die Einheitsvektoren: tan(θ/2) = |a×b| / (1 + a·b)
    let tanTip = 0;
    let tanSide = 0;
    if (slant > 0) {
        const sx = w / 2 / slant // Einheitsvektor der Schräge
        ;
        const sy = h / 4 / slant;
        // Spitze oben: Richtungen (-sx, sy) und (sx, sy)
        tanTip = 2 * sx * sy / (1 + (sy * sy - sx * sx));
        // Seite rechts oben: Richtungen (-sx, -sy) und (0, 1)
        tanSide = sx / (1 - sy);
        // Entartete Rahmen (Breite oder Höhe 0) ergeben 0/0 — dann keine Rundung
        if (!Number.isFinite(tanTip)) tanTip = 0;
        if (!Number.isFinite(tanSide)) tanSide = 0;
    }
    // Tangentenlänge und tatsächlicher Radius je Ecktyp (geklemmt)
    const tipT = Math.min(tanTip > 0 ? radius / tanTip : 0, tMax);
    const tipR = tipT * tanTip;
    const sideT = Math.min(tanSide > 0 ? radius / tanSide : 0, tMax);
    const sideR = sideT * tanSide;
    // Einheitsvektoren der Kanten (Richtung des Umlaufs)
    const ex = slant > 0 ? w / 2 / slant : 0;
    const ey = slant > 0 ? h / 4 / slant : 0;
    const tr = fmt(tipR);
    const sr = fmt(sideR);
    const tipArc = `A${tr} ${tr} 0 0 1 `;
    const sideArc = `A${sr} ${sr} 0 0 1 `;
    const p = (px, py)=>`${fmt(px)} ${fmt(py)}`;
    // Ecken im Uhrzeigersinn ab der Spitze oben: Eckpunkt, Richtung der Kante hinein und hinaus
    const ecken = [
        {
            vx: vx0,
            vy: vy0,
            inX: ex,
            inY: -ey,
            outX: ex,
            outY: ey,
            tip: true
        },
        {
            vx: vx1,
            vy: vy1,
            inX: ex,
            inY: ey,
            outX: 0,
            outY: 1,
            tip: false
        },
        {
            vx: vx2,
            vy: vy2,
            inX: 0,
            inY: 1,
            outX: -ex,
            outY: ey,
            tip: false
        },
        {
            vx: vx3,
            vy: vy3,
            inX: -ex,
            inY: ey,
            outX: -ex,
            outY: -ey,
            tip: true
        },
        {
            vx: vx4,
            vy: vy4,
            inX: -ex,
            inY: -ey,
            outX: 0,
            outY: -1,
            tip: false
        },
        {
            vx: vx5,
            vy: vy5,
            inX: 0,
            inY: -1,
            outX: ex,
            outY: -ey,
            tip: false
        }
    ];
    // #2177: spitze Ecke, wo eine volle Nachbarkachel anliegt — eine Rundung ließe dort ein Loch
    const spitz = (k)=>sharp?.[k] === true;
    const aus = (k)=>{
        const e = ecken[k];
        const t = spitz(k) ? 0 : e.tip ? tipT : sideT;
        return p(e.vx + e.outX * t, e.vy + e.outY * t);
    };
    const ecke = (k)=>{
        const e = ecken[k];
        if (spitz(k)) return `L${p(e.vx, e.vy)} `;
        const t = e.tip ? tipT : sideT;
        return `L${p(e.vx - e.inX * t, e.vy - e.inY * t)} ${e.tip ? tipArc : sideArc}${aus(k)} `;
    };
    // Start hinter der oberen Spitze auf Kante 0→1, Ecken 1…5, Ecke 0 schließt den Umlauf
    return `M${aus(0)} ${ecke(1)}${ecke(2)}${ecke(3)}${ecke(4)}${ecke(5)}${ecke(0)}Z`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/i18n/localeAvailability.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_SITE_LOCALES",
    ()=>ALL_SITE_LOCALES,
    "articleHasLocale",
    ()=>articleHasLocale,
    "availabilityKey",
    ()=>availabilityKey,
    "blockHasLocale",
    ()=>blockHasLocale,
    "categoryHasLocale",
    ()=>categoryHasLocale,
    "cmsDeliveredLocales",
    ()=>cmsDeliveredLocales,
    "cmsLocalizedTitle",
    ()=>cmsLocalizedTitle,
    "cmsPreviewLocaleDecision",
    ()=>cmsPreviewLocaleDecision,
    "cmsRenderLocales",
    ()=>cmsRenderLocales,
    "hasLocalizedText",
    ()=>hasLocalizedText,
    "istLokalisiert",
    ()=>istLokalisiert,
    "localesForPath",
    ()=>localesForPath,
    "localesWhere",
    ()=>localesWhere,
    "pageHasLocale",
    ()=>pageHasLocale,
    "partnerHasLocale",
    ()=>partnerHasLocale,
    "productHasLocale",
    ()=>productHasLocale,
    "resolveCmsLocales",
    ()=>resolveCmsLocales
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)");
;
;
function hasLocalizedText(value, locale) {
    const text = value?.[locale];
    return typeof text === 'string' && text.trim() !== '';
}
function istLokalisiert(wert) {
    if (Array.isArray(wert)) return false;
    const eintraege = Object.entries(wert);
    return eintraege.length > 0 && eintraege.every(([schluessel])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContentLocale"])(schluessel)) && eintraege.some(([, text])=>typeof text === 'string');
}
function blockHasLocale(block, locale) {
    if (Array.isArray(block)) return block.some((eintrag)=>blockHasLocale(eintrag, locale));
    if (!block || typeof block !== 'object') return false;
    if (istLokalisiert(block) && hasLocalizedText(block, locale)) return true;
    return Object.values(block).some((wert)=>blockHasLocale(wert, locale));
}
function pageHasLocale(page, locale) {
    if (locale === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"]) return true;
    if (!hasLocalizedText(page.title, locale)) return false;
    return Array.isArray(page.blocks) && page.blocks.some((block)=>blockHasLocale(block, locale));
}
function articleHasLocale(article, locale) {
    if (locale === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"]) return true;
    return hasLocalizedText(article.title, locale) && hasLocalizedText(article.body, locale);
}
function productHasLocale(product, locale) {
    if (locale === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"]) return true;
    return hasLocalizedText(product.title, locale) && (hasLocalizedText(product.body, locale) || hasLocalizedText(product.description, locale));
}
function categoryHasLocale(category, locale) {
    if (locale === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"]) return true;
    return hasLocalizedText(category.label, locale);
}
function partnerHasLocale(partner, locale) {
    if (locale === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"]) return true;
    return partner.products.some((produkt)=>hasLocalizedText(produkt.title, locale));
}
function localesWhere(vorhanden) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_LOCALES"].filter((locale)=>locale === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"] || vorhanden(locale));
}
const ALL_SITE_LOCALES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_LOCALES"];
function availabilityKey(path) {
    const pfad = path.split(/[?#]/)[0] || '/';
    return pfad.length > 1 && pfad.endsWith('/') ? pfad.slice(0, -1) : pfad;
}
function localesForPath(path, missing) {
    const key = availabilityKey(path);
    return localesWhere((locale)=>{
        const liste = missing[locale];
        if (!liste) return true;
        return Array.isArray(liste) ? !liste.includes(key) : !liste.has(key);
    });
}
function cmsLocalizedTitle(primary, secondary, locale) {
    const kandidaten = [
        primary?.[locale],
        secondary?.[locale],
        primary?.de,
        secondary?.de
    ];
    return kandidaten.find((text)=>typeof text === 'string' && text.trim() !== '') ?? '';
}
function cmsDeliveredLocales(preview) {
    const sprachen = [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_LOCALES"]
    ];
    if (preview && !sprachen.includes(preview)) sprachen.push(preview);
    return sprachen;
}
function cmsRenderLocales(pathLocale, profileLocale, preview) {
    if (preview) return [
        preview
    ];
    return profileLocale && profileLocale !== pathLocale ? [
        pathLocale,
        profileLocale
    ] : [
        pathLocale
    ];
}
function cmsPreviewLocaleDecision(lang, mayEdit) {
    const wert = Array.isArray(lang) ? lang[0] : lang;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isContentLocale"])(wert)) return {
        kind: 'none'
    };
    if (mayEdit) return {
        kind: 'preview',
        locale: wert
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_LOCALE_INFO"][wert].stage === 'public' ? {
        kind: 'none'
    } : {
        kind: 'notFound'
    };
}
const istSchlichtesObjekt = (wert)=>{
    if (!wert || typeof wert !== 'object' || Array.isArray(wert)) return false;
    const proto = Object.getPrototypeOf(wert);
    return proto === Object.prototype || proto === null;
};
function resolveCmsLocales(daten, locales, sourceLocale) {
    const aufloesen = (wert)=>{
        if (Array.isArray(wert)) return wert.map(aufloesen);
        if (!istSchlichtesObjekt(wert)) return wert;
        if (istLokalisiert(wert)) {
            const ergebnis = {};
            for (const locale of locales)ergebnis[locale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(wert, locale, sourceLocale);
            return ergebnis;
        }
        const kopie = {};
        for (const [schluessel, inhalt] of Object.entries(wert))kopie[schluessel] = aufloesen(inhalt);
        return kopie;
    };
    return aufloesen(daten);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/i18n/localizablePaths.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLocalizablePath",
    ()=>isLocalizablePath,
    "siteLocaleOfPath",
    ()=>siteLocaleOfPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$routeProtection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth/routeProtection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)");
;
;
/**
 * Welche Pfade eine Sprachfassung unter `/<präfix>/…` haben können (#1561).
 *
 * Sprachpfade gibt es nur für öffentliche Seiten (lib/auth/routeProtection).
 * Ausgenommen sind die öffentlichen Seiten der Anmeldung (Login, 2FA,
 * Passwort, E-Mail-Bestätigung, Fehlerseiten): sie gehören zur App, sind
 * noindex und bleiben bei der Cookie-Sprache. `/en/login/` leitet deshalb wie
 * `/en/dashboard/` auf den Pfad ohne Präfix.
 *
 * Ob es die englische Fassung einer bestimmten Seite tatsächlich gibt, hängt
 * am Inhalt (lib/i18n/localeAvailability.ts) — hier steht nur, ob der Pfad
 * überhaupt eine haben kann.
 *
 * Edge-tauglich (Middleware) und im Browser nutzbar (NavLink, Sprachumschalter).
 */ const OHNE_SPRACHPFAD = [
    '/api',
    '/_next',
    '/login',
    '/2fa',
    '/password-reset',
    '/password-change',
    '/verify-email',
    '/signup',
    '/unauthorized',
    '/forbidden',
    '/health'
];
function ohneSchlussSlash(pfad) {
    return pfad.length > 1 && pfad.endsWith('/') ? pfad.slice(0, -1) : pfad;
}
function isLocalizablePath(pathname) {
    const pfad = ohneSchlussSlash(pathname.split(/[?#]/)[0] || '/');
    // ein zweites Präfix (`/en/en/x`) ist keine Seite
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitLocalePrefix"])(pfad).prefixed) return false;
    if (OHNE_SPRACHPFAD.some((p)=>pfad === p || pfad.startsWith(`${p}/`))) return false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$routeProtection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeAccess"])(pfad) === 'public';
}
function siteLocaleOfPath(pathname) {
    const { locale, path, prefixed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitLocalePrefix"])(pathname);
    if (!isLocalizablePath(path)) return null;
    return prefixed ? locale : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/i18n/localizeHref.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "languageLinks",
    ()=>languageLinks,
    "localizeHref",
    ()=>localizeHref
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localeAvailability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/localeAvailability.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localizablePaths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/localizablePaths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)");
;
;
;
function localizeHref(href, locale, missing) {
    if (!locale || locale === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"]) return href;
    if (!href.startsWith('/') || href.startsWith('//')) return href;
    const ende = href.search(/[?#]/);
    const pfad = ende === -1 ? href : href.slice(0, ende);
    const rest = ende === -1 ? '' : href.slice(ende);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitLocalePrefix"])(pfad).prefixed) return href;
    const letztes = pfad.slice(pfad.lastIndexOf('/') + 1);
    if (letztes.includes('.')) return href;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localizablePaths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLocalizablePath"])(pfad)) return href;
    if (missing?.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localeAvailability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["availabilityKey"])(pfad))) return href;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePath"])(pfad, locale) + rest;
}
function languageLinks(pathname, locales, missing) {
    const { path } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitLocalePrefix"])(pathname);
    return locales.map((locale)=>{
        const fehlt = locale !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"] && missing[locale]?.has((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$localeAvailability$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["availabilityKey"])(path));
        return fehlt ? {
            locale,
            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePath"])('/', locale),
            counterpart: false
        } : {
            locale,
            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePath"])(path, locale),
            counterpart: true
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/i18n/siteLocaleHint.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LANGUAGE_COOKIE",
    ()=>LANGUAGE_COOKIE,
    "LANGUAGE_COOKIE_AT_LOAD",
    ()=>LANGUAGE_COOKIE_AT_LOAD,
    "SITE_LOCALE_HINT_EVENT",
    ()=>SITE_LOCALE_HINT_EVENT,
    "isSiteLocaleHintProps",
    ()=>isSiteLocaleHintProps,
    "languageFromCookie",
    ()=>languageFromCookie,
    "siteLocaleHintTarget",
    ()=>siteLocaleHintTarget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)");
;
const LANGUAGE_COOKIE = 'NEXT_LOCALE';
const SITE_LOCALE_HINT_EVENT = 'site_locale_hint';
function languageFromCookie(cookie) {
    for (const teil of (cookie ?? '').split(';')){
        const [name, ...wert] = teil.trim().split('=');
        if (name === LANGUAGE_COOKIE) {
            const roh = wert.join('=');
            try {
                return decodeURIComponent(roh) || null;
            } catch  {
                return roh || null;
            }
        }
    }
    return null;
}
const LANGUAGE_COOKIE_AT_LOAD = typeof document === 'undefined' ? null : languageFromCookie(document.cookie);
function siteLocaleHintTarget(input) {
    const { pathname, pathLocale, cookieLanguage, missingStart } = input;
    if (pathname !== '/' || pathLocale !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"] || !cookieLanguage) return null;
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteLocaleForUiLanguage"])(cookieLanguage);
    if (locale === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_SITE_LOCALE"] || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSiteLocale"])(locale)) return null;
    if (missingStart?.(locale)) return null;
    return {
        locale,
        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePath"])('/', locale)
    };
}
function isSiteLocaleHintProps(props) {
    return Boolean(props && Object.keys(props).length === 1 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$siteLocales$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSiteLocale"])(props['locale']));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/i18n/siteLocales.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Sprachfassungen der öffentlichen Seiten (#1561) — die eine Liste.
 *
 * Deutsch ohne Präfix (`/procurement/`), jede weitere Sprache unter
 * `/<präfix>/` mit denselben Slugs (`/en/procurement/`). Öffentlich sind `de`
 * und `en`; alle übrigen Sprachen der App stehen in Vorbereitung (#2083,
 * #2080: 72 Inhaltssprachen, en-GB/en-US = `en`). Eine neue
 * Sprache ist ein Eintrag mehr in LOCALE_TABLE, zuerst mit `stage:
 * 'preparing'`, nach der Übersetzung mit `stage: 'public'`.
 *
 * Nur öffentliche Seiten tragen eine Sprache im Pfad. Der angemeldete Bereich
 * bleibt bei der Sprache aus Profil bzw. Cookie (UserPreferencesContext);
 * welche Pfade eine Sprachfassung haben können, steht in localizablePaths.ts.
 *
 * Die Middleware erkennt das Präfix, schreibt intern auf den Pfad ohne Präfix
 * um und reicht die Sprache als Anfrage-Header weiter (SITE_LOCALE_HEADER);
 * Root-Layout und Seiten lesen ihn. Wie beim Header der Route-Art gilt: nie
 * für Autorisierung — er steuert nur die Sprache des Renderns.
 *
 * Edge-tauglich und React-frei: Middleware, Server, Browser und Jest lesen
 * dieselbe Liste.
 */ /**
 * #1573: Stufe einer Sprache. `public` = eigener Pfad, hreflang, Sitemap;
 * `preparing` = Inhalte werden schon gepflegt und übersetzt (CMS), aber noch
 * keine öffentliche Fassung. Eine neue Sprache kommt als `preparing` hinein
 * und wird `public`, wenn ihre Übersetzungen vorliegen.
 */ __turbopack_context__.s([
    "CONTENT_LOCALES",
    ()=>CONTENT_LOCALES,
    "DEFAULT_SITE_LOCALE",
    ()=>DEFAULT_SITE_LOCALE,
    "PREPARING_LOCALES",
    ()=>PREPARING_LOCALES,
    "SITE_LOCALES",
    ()=>SITE_LOCALES,
    "SITE_LOCALE_HEADER",
    ()=>SITE_LOCALE_HEADER,
    "SITE_LOCALE_INFO",
    ()=>SITE_LOCALE_INFO,
    "isContentLocale",
    ()=>isContentLocale,
    "isSiteLocale",
    ()=>isSiteLocale,
    "localeStage",
    ()=>localeStage,
    "localizePath",
    ()=>localizePath,
    "pathLocaleFor",
    ()=>pathLocaleFor,
    "readSiteLocale",
    ()=>readSiteLocale,
    "siteLocaleForUiLanguage",
    ()=>siteLocaleForUiLanguage,
    "sitePathPrefix",
    ()=>sitePathPrefix,
    "splitLocalePrefix",
    ()=>splitLocalePrefix,
    "uiLanguageFor",
    ()=>uiLanguageFor,
    "withSiteLocale",
    ()=>withSiteLocale
]);
/**
 * #1573: die eine Tabelle aller Sprachen — Inhaltssprachen des CMS
 * (CONTENT_LOCALES) und, mit `stage: 'public'`, die Sprachfassungen der
 * öffentlichen Seiten (SITE_LOCALES).
 */ const LOCALE_TABLE = {
    de: {
        prefix: null,
        hreflang: 'de',
        ogLocale: 'de_DE',
        uiLanguage: 'de',
        stage: 'public'
    },
    // en-GB wie normalizeLanguageCode('en') — dieselbe Tabelle, die Besucher mit
    // englischer Cookie-Sprache schon heute sehen
    en: {
        prefix: 'en',
        hreflang: 'en',
        ogLocale: 'en_US',
        uiLanguage: 'en-GB',
        stage: 'public'
    },
    // #2083/#2080 (Entscheidung 25.10.): alle übrigen Sprachen der App
    // (`languages`, app/i18n/settings) sind Inhaltssprachen in Vorbereitung —
    // Inhalte werden im CMS gepflegt und übersetzt, öffentlich gibt es sie noch
    // nicht (kein Pfad, kein hreflang, keine Sitemap; Vorschau nur für die
    // Redaktion mit `?lang=xx`). en-GB und en-US teilen sich `en`. Präfix =
    // sitePathPrefix(Kürzel), uiLanguage = Kürzel. Öffentlich schalten:
    // `stage: 'public'` setzen (docs/features/PUBLIC_SITE_LANGUAGES.md).
    af: {
        prefix: 'af',
        hreflang: 'af',
        ogLocale: 'af_ZA',
        uiLanguage: 'af',
        stage: 'preparing'
    },
    am: {
        prefix: 'am',
        hreflang: 'am',
        ogLocale: 'am_ET',
        uiLanguage: 'am',
        stage: 'preparing'
    },
    ar: {
        prefix: 'ar',
        hreflang: 'ar',
        ogLocale: 'ar_AR',
        uiLanguage: 'ar',
        stage: 'preparing'
    },
    az: {
        prefix: 'az',
        hreflang: 'az',
        ogLocale: 'az_AZ',
        uiLanguage: 'az',
        stage: 'preparing'
    },
    be: {
        prefix: 'be',
        hreflang: 'be',
        ogLocale: 'be_BY',
        uiLanguage: 'be',
        stage: 'preparing'
    },
    bg: {
        prefix: 'bg',
        hreflang: 'bg',
        ogLocale: 'bg_BG',
        uiLanguage: 'bg',
        stage: 'preparing'
    },
    bn: {
        prefix: 'bn',
        hreflang: 'bn',
        ogLocale: 'bn_IN',
        uiLanguage: 'bn',
        stage: 'preparing'
    },
    bs: {
        prefix: 'bs',
        hreflang: 'bs',
        ogLocale: 'bs_BA',
        uiLanguage: 'bs',
        stage: 'preparing'
    },
    ca: {
        prefix: 'ca',
        hreflang: 'ca',
        ogLocale: 'ca_ES',
        uiLanguage: 'ca',
        stage: 'preparing'
    },
    cs: {
        prefix: 'cs',
        hreflang: 'cs',
        ogLocale: 'cs_CZ',
        uiLanguage: 'cs',
        stage: 'preparing'
    },
    cy: {
        prefix: 'cy',
        hreflang: 'cy',
        ogLocale: 'cy_GB',
        uiLanguage: 'cy',
        stage: 'preparing'
    },
    da: {
        prefix: 'da',
        hreflang: 'da',
        ogLocale: 'da_DK',
        uiLanguage: 'da',
        stage: 'preparing'
    },
    el: {
        prefix: 'el',
        hreflang: 'el',
        ogLocale: 'el_GR',
        uiLanguage: 'el',
        stage: 'preparing'
    },
    es: {
        prefix: 'es',
        hreflang: 'es',
        ogLocale: 'es_ES',
        uiLanguage: 'es',
        stage: 'preparing'
    },
    et: {
        prefix: 'et',
        hreflang: 'et',
        ogLocale: 'et_EE',
        uiLanguage: 'et',
        stage: 'preparing'
    },
    eu: {
        prefix: 'eu',
        hreflang: 'eu',
        ogLocale: 'eu_ES',
        uiLanguage: 'eu',
        stage: 'preparing'
    },
    fa: {
        prefix: 'fa',
        hreflang: 'fa',
        ogLocale: 'fa_IR',
        uiLanguage: 'fa',
        stage: 'preparing'
    },
    fi: {
        prefix: 'fi',
        hreflang: 'fi',
        ogLocale: 'fi_FI',
        uiLanguage: 'fi',
        stage: 'preparing'
    },
    fr: {
        prefix: 'fr',
        hreflang: 'fr',
        ogLocale: 'fr_FR',
        uiLanguage: 'fr',
        stage: 'preparing'
    },
    ga: {
        prefix: 'ga',
        hreflang: 'ga',
        ogLocale: 'ga_IE',
        uiLanguage: 'ga',
        stage: 'preparing'
    },
    gl: {
        prefix: 'gl',
        hreflang: 'gl',
        ogLocale: 'gl_ES',
        uiLanguage: 'gl',
        stage: 'preparing'
    },
    gu: {
        prefix: 'gu',
        hreflang: 'gu',
        ogLocale: 'gu_IN',
        uiLanguage: 'gu',
        stage: 'preparing'
    },
    ha: {
        prefix: 'ha',
        hreflang: 'ha',
        ogLocale: 'ha_NG',
        uiLanguage: 'ha',
        stage: 'preparing'
    },
    he: {
        prefix: 'he',
        hreflang: 'he',
        ogLocale: 'he_IL',
        uiLanguage: 'he',
        stage: 'preparing'
    },
    hi: {
        prefix: 'hi',
        hreflang: 'hi',
        ogLocale: 'hi_IN',
        uiLanguage: 'hi',
        stage: 'preparing'
    },
    hr: {
        prefix: 'hr',
        hreflang: 'hr',
        ogLocale: 'hr_HR',
        uiLanguage: 'hr',
        stage: 'preparing'
    },
    hu: {
        prefix: 'hu',
        hreflang: 'hu',
        ogLocale: 'hu_HU',
        uiLanguage: 'hu',
        stage: 'preparing'
    },
    id: {
        prefix: 'id',
        hreflang: 'id',
        ogLocale: 'id_ID',
        uiLanguage: 'id',
        stage: 'preparing'
    },
    ig: {
        prefix: 'ig',
        hreflang: 'ig',
        ogLocale: 'ig_NG',
        uiLanguage: 'ig',
        stage: 'preparing'
    },
    is: {
        prefix: 'is',
        hreflang: 'is',
        ogLocale: 'is_IS',
        uiLanguage: 'is',
        stage: 'preparing'
    },
    it: {
        prefix: 'it',
        hreflang: 'it',
        ogLocale: 'it_IT',
        uiLanguage: 'it',
        stage: 'preparing'
    },
    ja: {
        prefix: 'ja',
        hreflang: 'ja',
        ogLocale: 'ja_JP',
        uiLanguage: 'ja',
        stage: 'preparing'
    },
    kk: {
        prefix: 'kk',
        hreflang: 'kk',
        ogLocale: 'kk_KZ',
        uiLanguage: 'kk',
        stage: 'preparing'
    },
    ko: {
        prefix: 'ko',
        hreflang: 'ko',
        ogLocale: 'ko_KR',
        uiLanguage: 'ko',
        stage: 'preparing'
    },
    lb: {
        prefix: 'lb',
        hreflang: 'lb',
        ogLocale: 'lb_LU',
        uiLanguage: 'lb',
        stage: 'preparing'
    },
    lt: {
        prefix: 'lt',
        hreflang: 'lt',
        ogLocale: 'lt_LT',
        uiLanguage: 'lt',
        stage: 'preparing'
    },
    lv: {
        prefix: 'lv',
        hreflang: 'lv',
        ogLocale: 'lv_LV',
        uiLanguage: 'lv',
        stage: 'preparing'
    },
    mk: {
        prefix: 'mk',
        hreflang: 'mk',
        ogLocale: 'mk_MK',
        uiLanguage: 'mk',
        stage: 'preparing'
    },
    mr: {
        prefix: 'mr',
        hreflang: 'mr',
        ogLocale: 'mr_IN',
        uiLanguage: 'mr',
        stage: 'preparing'
    },
    ms: {
        prefix: 'ms',
        hreflang: 'ms',
        ogLocale: 'ms_MY',
        uiLanguage: 'ms',
        stage: 'preparing'
    },
    mt: {
        prefix: 'mt',
        hreflang: 'mt',
        ogLocale: 'mt_MT',
        uiLanguage: 'mt',
        stage: 'preparing'
    },
    my: {
        prefix: 'my',
        hreflang: 'my',
        ogLocale: 'my_MM',
        uiLanguage: 'my',
        stage: 'preparing'
    },
    ne: {
        prefix: 'ne',
        hreflang: 'ne',
        ogLocale: 'ne_NP',
        uiLanguage: 'ne',
        stage: 'preparing'
    },
    nl: {
        prefix: 'nl',
        hreflang: 'nl',
        ogLocale: 'nl_NL',
        uiLanguage: 'nl',
        stage: 'preparing'
    },
    no: {
        prefix: 'no',
        hreflang: 'no',
        ogLocale: 'nb_NO',
        uiLanguage: 'no',
        stage: 'preparing'
    },
    pa: {
        prefix: 'pa',
        hreflang: 'pa',
        ogLocale: 'pa_IN',
        uiLanguage: 'pa',
        stage: 'preparing'
    },
    pl: {
        prefix: 'pl',
        hreflang: 'pl',
        ogLocale: 'pl_PL',
        uiLanguage: 'pl',
        stage: 'preparing'
    },
    'pt-BR': {
        prefix: 'pt-br',
        hreflang: 'pt-BR',
        ogLocale: 'pt_BR',
        uiLanguage: 'pt-BR',
        stage: 'preparing'
    },
    'pt-PT': {
        prefix: 'pt-pt',
        hreflang: 'pt-PT',
        ogLocale: 'pt_PT',
        uiLanguage: 'pt-PT',
        stage: 'preparing'
    },
    ro: {
        prefix: 'ro',
        hreflang: 'ro',
        ogLocale: 'ro_RO',
        uiLanguage: 'ro',
        stage: 'preparing'
    },
    ru: {
        prefix: 'ru',
        hreflang: 'ru',
        ogLocale: 'ru_RU',
        uiLanguage: 'ru',
        stage: 'preparing'
    },
    sk: {
        prefix: 'sk',
        hreflang: 'sk',
        ogLocale: 'sk_SK',
        uiLanguage: 'sk',
        stage: 'preparing'
    },
    sl: {
        prefix: 'sl',
        hreflang: 'sl',
        ogLocale: 'sl_SI',
        uiLanguage: 'sl',
        stage: 'preparing'
    },
    sq: {
        prefix: 'sq',
        hreflang: 'sq',
        ogLocale: 'sq_AL',
        uiLanguage: 'sq',
        stage: 'preparing'
    },
    sr: {
        prefix: 'sr',
        hreflang: 'sr',
        ogLocale: 'sr_RS',
        uiLanguage: 'sr',
        stage: 'preparing'
    },
    sv: {
        prefix: 'sv',
        hreflang: 'sv',
        ogLocale: 'sv_SE',
        uiLanguage: 'sv',
        stage: 'preparing'
    },
    sw: {
        prefix: 'sw',
        hreflang: 'sw',
        ogLocale: 'sw_KE',
        uiLanguage: 'sw',
        stage: 'preparing'
    },
    ta: {
        prefix: 'ta',
        hreflang: 'ta',
        ogLocale: 'ta_IN',
        uiLanguage: 'ta',
        stage: 'preparing'
    },
    te: {
        prefix: 'te',
        hreflang: 'te',
        ogLocale: 'te_IN',
        uiLanguage: 'te',
        stage: 'preparing'
    },
    th: {
        prefix: 'th',
        hreflang: 'th',
        ogLocale: 'th_TH',
        uiLanguage: 'th',
        stage: 'preparing'
    },
    tl: {
        prefix: 'tl',
        hreflang: 'tl',
        ogLocale: 'tl_PH',
        uiLanguage: 'tl',
        stage: 'preparing'
    },
    tr: {
        prefix: 'tr',
        hreflang: 'tr',
        ogLocale: 'tr_TR',
        uiLanguage: 'tr',
        stage: 'preparing'
    },
    uk: {
        prefix: 'uk',
        hreflang: 'uk',
        ogLocale: 'uk_UA',
        uiLanguage: 'uk',
        stage: 'preparing'
    },
    ur: {
        prefix: 'ur',
        hreflang: 'ur',
        ogLocale: 'ur_PK',
        uiLanguage: 'ur',
        stage: 'preparing'
    },
    uz: {
        prefix: 'uz',
        hreflang: 'uz',
        ogLocale: 'uz_UZ',
        uiLanguage: 'uz',
        stage: 'preparing'
    },
    vi: {
        prefix: 'vi',
        hreflang: 'vi',
        ogLocale: 'vi_VN',
        uiLanguage: 'vi',
        stage: 'preparing'
    },
    yo: {
        prefix: 'yo',
        hreflang: 'yo',
        ogLocale: 'yo_NG',
        uiLanguage: 'yo',
        stage: 'preparing'
    },
    zh: {
        prefix: 'zh',
        hreflang: 'zh',
        ogLocale: 'zh_CN',
        uiLanguage: 'zh',
        stage: 'preparing'
    },
    'zh-CN': {
        prefix: 'zh-cn',
        hreflang: 'zh-CN',
        ogLocale: 'zh_CN',
        uiLanguage: 'zh-CN',
        stage: 'preparing'
    },
    zu: {
        prefix: 'zu',
        hreflang: 'zu',
        ogLocale: 'zu_ZA',
        uiLanguage: 'zu',
        stage: 'preparing'
    }
};
const CONTENT_LOCALES = Object.keys(LOCALE_TABLE);
_c = CONTENT_LOCALES;
const SITE_LOCALES = CONTENT_LOCALES.filter(_c1 = (locale)=>LOCALE_TABLE[locale].stage === 'public');
_c2 = SITE_LOCALES;
const DEFAULT_SITE_LOCALE = 'de';
const SITE_LOCALE_INFO = LOCALE_TABLE;
function isContentLocale(wert) {
    return typeof wert === 'string' && CONTENT_LOCALES.includes(wert);
}
const PREPARING_LOCALES = CONTENT_LOCALES.filter(_c3 = (locale)=>SITE_LOCALE_INFO[locale].stage === 'preparing');
_c4 = PREPARING_LOCALES;
function localeStage(locale) {
    return SITE_LOCALE_INFO[locale].stage;
}
const SITE_LOCALE_HEADER = 'x-plastship-locale';
function isSiteLocale(wert) {
    return typeof wert === 'string' && SITE_LOCALES.includes(wert);
}
function uiLanguageFor(locale) {
    return SITE_LOCALE_INFO[locale].uiLanguage;
}
function sitePathPrefix(language) {
    const klein = language.trim().toLowerCase();
    return klein === 'en' || klein.startsWith('en-') ? 'en' : klein;
}
function siteLocaleForUiLanguage(language) {
    const praefix = sitePathPrefix(language ?? '');
    return PRAEFIX_ZU_SPRACHE.get(praefix) ?? PRAEFIX_ZU_SPRACHE.get(praefix.split('-')[0]) ?? DEFAULT_SITE_LOCALE;
}
/** Präfix → öffentliche Sprache; nur Sprachen mit Stufe `public` bekommen einen Pfad. */ const PRAEFIX_ZU_SPRACHE = new Map(SITE_LOCALES.flatMap((locale)=>{
    const prefix = SITE_LOCALE_INFO[locale].prefix;
    return prefix ? [
        [
            prefix,
            locale
        ]
    ] : [];
}));
function splitLocalePrefix(pathname) {
    const zweiter = pathname.indexOf('/', 1);
    const segment = zweiter === -1 ? pathname.slice(1) : pathname.slice(1, zweiter);
    const praefix = segment.toLowerCase();
    const locale = PRAEFIX_ZU_SPRACHE.get(praefix);
    if (!locale) {
        return {
            locale: DEFAULT_SITE_LOCALE,
            path: pathname || '/',
            prefixed: false,
            nonCanonical: false
        };
    }
    const rest = zweiter === -1 ? '/' : pathname.slice(zweiter);
    return {
        locale,
        path: rest || '/',
        prefixed: true,
        nonCanonical: segment !== praefix
    };
}
function localizePath(path, locale) {
    const prefix = SITE_LOCALE_INFO[locale].prefix;
    if (!prefix) return path;
    const ende = path.search(/[?#]/);
    const pfad = ende === -1 ? path : path.slice(0, ende);
    const rest = ende === -1 ? '' : path.slice(ende);
    return pfad === '/' || pfad === '' ? `/${prefix}/${rest}` : `/${prefix}${pfad}${rest}`;
}
function withSiteLocale(headers, locale) {
    const kopie = new Headers(headers);
    if (locale) kopie.set(SITE_LOCALE_HEADER, locale);
    else kopie.delete(SITE_LOCALE_HEADER);
    return kopie;
}
function readSiteLocale(headers) {
    const wert = headers.get(SITE_LOCALE_HEADER);
    return isSiteLocale(wert) ? wert : null;
}
function pathLocaleFor(siteLocale, sessionStatus) {
    return sessionStatus === 'authenticated' ? null : siteLocale;
}
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "CONTENT_LOCALES");
__turbopack_context__.k.register(_c1, "SITE_LOCALES$CONTENT_LOCALES.filter");
__turbopack_context__.k.register(_c2, "SITE_LOCALES");
__turbopack_context__.k.register(_c3, "PREPARING_LOCALES$CONTENT_LOCALES.filter");
__turbopack_context__.k.register(_c4, "PREPARING_LOCALES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/sentry/SentryErrorBoundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SentryErrorBoundary",
    ()=>SentryErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
'use client';
;
;
class SentryErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    state = {
        fehler: false
    };
    static getDerivedStateFromError() {
        return {
            fehler: true
        };
    }
    componentDidCatch(error, info) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureReactException"])(error, {
            componentStack: info.componentStack
        });
    }
    render() {
        return this.state.fehler ? this.props.fallback : this.props.children;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/theme/themePreference.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2029: Vorgabe der Darstellung (hell/dunkel).
 *
 * Reihenfolge: gespeicherte Wahl (Profil bzw. `localStorage`), sonst die
 * Geräte-Einstellung (`prefers-color-scheme`), sonst hell. Gilt auch für
 * Besucher ohne Konto.
 *
 * Rein und ohne `'use client'`: das Root-Layout (Server) bettet
 * `themeMarkerScript()` mit Nonce vor dem ersten Zeichnen ein, der Provider
 * (Client) nutzt dieselbe Regel nach der Hydration.
 */ __turbopack_context__.s([
    "PREFERS_DARK_QUERY",
    ()=>PREFERS_DARK_QUERY,
    "THEME_STORAGE_KEY",
    ()=>THEME_STORAGE_KEY,
    "devicePrefersDark",
    ()=>devicePrefersDark,
    "initialThemePreference",
    ()=>initialThemePreference,
    "isThemePreference",
    ()=>isThemePreference,
    "readStoredThemePreference",
    ()=>readStoredThemePreference,
    "resolveThemePreference",
    ()=>resolveThemePreference,
    "themeMarkerScript",
    ()=>themeMarkerScript
]);
const THEME_STORAGE_KEY = 'themeMode';
const PREFERS_DARK_QUERY = '(prefers-color-scheme: dark)';
const isThemePreference = (value)=>value === 'light' || value === 'dark';
function resolveThemePreference(stored, prefersDark) {
    if (isThemePreference(stored)) return stored;
    return prefersDark ? 'dark' : 'light';
}
function devicePrefersDark() {
    try {
        return ("TURBOPACK compile-time value", "object") !== 'undefined' && typeof window.matchMedia === 'function' ? window.matchMedia(PREFERS_DARK_QUERY).matches : false;
    } catch  {
        return false;
    }
}
function readStoredThemePreference() {
    try {
        const wert = ("TURBOPACK compile-time truthy", 1) ? window.localStorage.getItem(THEME_STORAGE_KEY) : "TURBOPACK unreachable";
        return isThemePreference(wert) ? wert : null;
    } catch  {
        return null;
    }
}
function initialThemePreference() {
    return resolveThemePreference(readStoredThemePreference(), devicePrefersDark());
}
function themeMarkerScript() {
    const key = JSON.stringify(THEME_STORAGE_KEY);
    const query = JSON.stringify(PREFERS_DARK_QUERY);
    return `try{var s=null;try{s=localStorage.getItem(${key})}catch(e){}` + `var t=s==='dark'||s==='light'?s:(window.matchMedia&&window.matchMedia(${query}).matches?'dark':'light');` + `document.documentElement.setAttribute('data-theme',t)}catch(e){}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/time/format.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1576 Anzeigeformate Zeit & Abwesenheit — die eine Stelle für Server (Hinweistexte,
 * Benachrichtigungen, CSV, PDF) und Oberfläche. Ohne Prisma und ohne Zeitzone: ein
 * Kalendertag wird als Text zerlegt.
 */ __turbopack_context__.s([
    "formatDateDe",
    ()=>formatDateDe,
    "formatIsoDate",
    ()=>formatIsoDate,
    "formatMinutes",
    ()=>formatMinutes,
    "formatSignedMinutes",
    ()=>formatSignedMinutes
]);
function formatDateDe(date) {
    if (!date) return '';
    const [year, month, day] = date.split('-');
    if (!year || !month || !day) return date;
    return `${day}.${month}.${year}`;
}
function formatIsoDate(date, locale, options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
}) {
    if (!locale) return formatDateDe(date);
    if (!date) return '';
    const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(date);
    if (!match) return date;
    const utc = Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
    return new Intl.DateTimeFormat(locale, {
        ...options,
        timeZone: 'UTC'
    }).format(utc);
}
function formatMinutes(minutes) {
    const sign = minutes < 0 ? '−' : '';
    const abs = Math.abs(Math.round(minutes));
    return `${sign}${Math.floor(abs / 60)}:${String(abs % 60).padStart(2, '0')}`;
}
function formatSignedMinutes(minutes) {
    return minutes > 0 ? `+${formatMinutes(minutes)}` : formatMinutes(minutes);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/url/externalLink.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2158: Kein Referrer verlässt die Site in Richtung fremder Domains.
 *
 * Eine Quelle für „ist dieses Linkziel extern?" und für die Attribute, die
 * ein externer Link trägt. Die Link-Atome (NavLink und alles, was darauf
 * aufsetzt: AppLink, LinkButton, ArrowLink, HexCta, Footer …, dazu
 * InlineLink), die Markdown-Pipelines (`lib/markdown/rehypeExternalLinks`)
 * und einzelne rohe `<a>` (Spread `{...EXTERNAL_LINK_PROPS}`) nutzen sie.
 * Wächter: ESLint-Regel `noref/external-link-noreferrer`.
 *
 * Global setzt der Rand `Referrer-Policy: same-origin`
 * (lib/security/referrerPolicy.ts) — das hier ist die zweite Schicht am
 * einzelnen Link: `rel="noopener noreferrer"` und `referrerpolicy="no-referrer"`.
 *
 * Extern heißt: http(s) oder protokollrelativ (`//…`) auf einen Host
 * außerhalb von plastship.com/.de/.org samt Subdomains. Relative Pfade,
 * Anker, `mailto:`, `tel:`, `geo:` und Karten-App-Schemata sind NICHT
 * extern — sie verlassen die Seite nicht als Webanfrage. Die Prüfung ist
 * bewusst statisch (kein `window.location`), damit Server und Browser
 * dasselbe Markup erzeugen.
 */ __turbopack_context__.s([
    "EXTERNAL_LINK_PROPS",
    ()=>EXTERNAL_LINK_PROPS,
    "NO_REFERRER_POLICY",
    ()=>NO_REFERRER_POLICY,
    "NO_REFERRER_REL",
    ()=>NO_REFERRER_REL,
    "externalLinkProps",
    ()=>externalLinkProps,
    "isAppSchemeHref",
    ()=>isAppSchemeHref,
    "isExternalHref",
    ()=>isExternalHref,
    "newTabFeatures",
    ()=>newTabFeatures,
    "openInNewTab",
    ()=>openInNewTab,
    "withNoReferrer",
    ()=>withNoReferrer
]);
/** Eigene Domains: der Host selbst oder eine Subdomain davon */ const OWN_HOST = /(^|\.)plastship\.(com|de|org)$/i;
/** Basis nur zum Zerlegen relativer Adressen — nie ein echter Host */ const PARSE_BASE = 'https://plastship.invalid';
const NO_REFERRER_REL = 'noopener noreferrer';
const NO_REFERRER_POLICY = 'no-referrer';
const EXTERNAL_LINK_PROPS = {
    target: '_blank',
    rel: NO_REFERRER_REL,
    referrerPolicy: NO_REFERRER_POLICY
};
function isExternalHref(href) {
    if (typeof href !== 'string') return false;
    const ziel = href.trim();
    if (!/^(https?:)?\/\//i.test(ziel)) return false;
    let url;
    try {
        url = new URL(ziel, PARSE_BASE);
    } catch  {
        return false;
    }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return false;
    return !OWN_HOST.test(url.hostname);
}
/**
 * Karten-App-Schemata (#2137: `geo:` auf Android). Kein Webziel, also nicht
 * extern — der Link bekommt trotzdem `noopener noreferrer`, falls ein
 * Betriebssystem daraus doch eine Webanfrage macht.
 */ const APP_SCHEME = /^(geo|maps|comgooglemaps):/i;
function isAppSchemeHref(href) {
    return typeof href === 'string' && APP_SCHEME.test(href.trim());
}
function withNoReferrer(rel) {
    const teile = (rel ?? '').split(/\s+/).filter(Boolean);
    for (const noetig of NO_REFERRER_REL.split(' ')){
        if (!teile.some((t)=>t.toLowerCase() === noetig)) teile.push(noetig);
    }
    return teile.join(' ');
}
function externalLinkProps(href, given = {}) {
    const { target, rel, referrerPolicy } = given;
    if (isExternalHref(href)) {
        return {
            target: target ?? '_blank',
            rel: withNoReferrer(rel),
            referrerPolicy: NO_REFERRER_POLICY
        };
    }
    const aus = {};
    if (target !== undefined) aus.target = target;
    if (isAppSchemeHref(href)) {
        aus.rel = withNoReferrer(rel);
        aus.referrerPolicy = NO_REFERRER_POLICY;
        return aus;
    }
    if (target === '_blank') aus.rel = withNoReferrer(rel);
    else if (rel !== undefined) aus.rel = rel;
    if (referrerPolicy !== undefined) aus.referrerPolicy = referrerPolicy;
    return aus;
}
function newTabFeatures(url) {
    return isExternalHref(url) ? 'noopener,noreferrer' : 'noopener';
}
function openInNewTab(url) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.open(url, '_blank', newTabFeatures(url));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/lib/usage/routeInventory.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    "/",
    "/2fa/setup",
    "/2fa/verify",
    "/3drender",
    "/3drender/data",
    "/3drender/data/[id]",
    "/[...slug]",
    "/absences",
    "/absences/team",
    "/access-management",
    "/access-management/[id]",
    "/access-management/activity",
    "/access-management/grants",
    "/access-management/users",
    "/account/[id]",
    "/accounts",
    "/accounts/analytics",
    "/admin",
    "/auctions",
    "/auctions/[slug]",
    "/auctions/[slug]/[id]",
    "/auctions/[slug]/bedingungen",
    "/auctions/admin",
    "/auctions/admin/[slug]",
    "/auctions/beobachtet",
    "/auctions/einladung/[token]",
    "/auctions/historie",
    "/auctions/widget/[slug]",
    "/audit-properties",
    "/audit-property/[id]",
    "/calendar",
    "/case/[id]",
    "/cases",
    "/cases/analytics",
    "/certificate/[id]",
    "/certificates",
    "/chat",
    "/cms",
    "/cms/categories",
    "/cms/categories/[id]",
    "/cms/categories/new",
    "/cms/media",
    "/cms/media-categories",
    "/cms/media-categories/[id]",
    "/cms/media-categories/new",
    "/cms/media/[id]",
    "/cms/navigation",
    "/cms/news",
    "/cms/news/[id]",
    "/cms/news/new",
    "/cms/pages",
    "/cms/pages/[id]",
    "/cms/pages/new",
    "/cms/partners",
    "/cms/partners/[id]",
    "/cms/partners/new",
    "/cms/products",
    "/cms/products/[id]",
    "/cms/products/new",
    "/cms/redirects",
    "/cms/redirects/[id]",
    "/cms/redirects/new",
    "/cms/reviews",
    "/cms/translations",
    "/cms/translations/languages",
    "/cms/wiki",
    "/cms/wiki-categories",
    "/cms/wiki-categories/[id]",
    "/cms/wiki-categories/new",
    "/cms/wiki/[id]",
    "/cms/wiki/new",
    "/company-certificate/[id]",
    "/company-certificates",
    "/contact-handover/[id]",
    "/contact-handovers",
    "/contact-handovers/analytics",
    "/contact/[id]",
    "/contacts",
    "/contacts/analytics",
    "/contract/[id]",
    "/contracts",
    "/cost-center/[id]",
    "/cost-centers",
    "/dashboard",
    "/database",
    "/design-for-recycling",
    "/documents",
    "/documents/analytics",
    "/finance",
    "/finance/eingangsbelege",
    "/finance/forecast",
    "/finance/invoicing",
    "/finance/subscriptions",
    "/forbidden",
    "/git",
    "/git/milestones",
    "/git/pipelines",
    "/git/runners",
    "/invoice/[id]",
    "/invoices",
    "/invoices/analytics",
    "/jobs",
    "/login",
    "/mail",
    "/mailing",
    "/mailing/kampagnen",
    "/mailing/postfaecher",
    "/mailing/signatur",
    "/map",
    "/material-analyses",
    "/material-analyses/analytics",
    "/material-analysis/[id]",
    "/material-proposal/[id]",
    "/material-proposals",
    "/material-proposals/analytics",
    "/monitored-material/[id]",
    "/monitored-materials",
    "/monitored-materials/analytics",
    "/monitored-materials/application-matrix",
    "/monitored-materials/data-quality",
    "/monitored-materials/dataset-statistics",
    "/monitored-materials/fit-assessment",
    "/monitored-materials/methodology",
    "/monitored-materials/mine",
    "/monitored-materials/norm-check",
    "/monitored-materials/quality-correlations",
    "/monitored-materials/quality-rankings",
    "/monitored-materials/spec-criteria",
    "/monitored-materials/spec-profiles",
    "/monitored-materials/spec-ranking",
    "/my-auctions",
    "/my-auctions/[id]",
    "/my-auctions/anbindung",
    "/my-auctions/auswertung",
    "/my-auctions/einstellungen",
    "/my-auctions/neu",
    "/my-auctions/pool",
    "/my-auctions/protokoll",
    "/news",
    "/news/[slug]",
    "/news/category/[slug]",
    "/notification-management",
    "/notification-management/[id]",
    "/notifications",
    "/onboarding/[id]",
    "/onboardings",
    "/onboardings/analytics",
    "/operations",
    "/operations/workflow",
    "/opportunities",
    "/opportunities/analytics",
    "/opportunity/[id]",
    "/order/[id]",
    "/orderitem/[id]",
    "/orderitems",
    "/orderitems/analytics",
    "/orders",
    "/orders/analytics",
    "/partners/[brand]",
    "/partners/[brand]/[product]",
    "/password-change",
    "/password-reset",
    "/password-reset/confirm",
    "/pia-management",
    "/pia-management/audit",
    "/pia-management/revert",
    "/pia-management/tools",
    "/pia-management/tools/[name]",
    "/pia-management/tools/create",
    "/plastrack",
    "/plastrack/[boxId]",
    "/plastrack/box/[id]",
    "/plastrack/boxes",
    "/plastrack/map",
    "/plastrack/overview",
    "/plastrack/scan/[id]",
    "/plastrack/scans",
    "/process-feedback/[id]",
    "/process-feedbacks",
    "/product/[id]",
    "/production-site/[id]",
    "/production-sites",
    "/products",
    "/products/analytics",
    "/products/mine",
    "/products/search",
    "/profile",
    "/profile/travelexpenses",
    "/profile/travelexpenses/[id]",
    "/project/[id]",
    "/projects",
    "/projects/analytics",
    "/rbac-management",
    "/rbac-management/field-visibility",
    "/rbac-management/permissions",
    "/rbac-management/permissions/[resource]",
    "/rbac-management/record-visibility",
    "/rbac-management/staff-tags",
    "/rbac-management/staff-tags/[tag]",
    "/recyclate-compatibilities",
    "/recyclate-compatibility/[id]",
    "/recyclate-grade/[id]",
    "/recyclate-grades",
    "/requirement/[id]",
    "/requirements",
    "/requirements/analytics",
    "/rigk",
    "/rigk/[id]",
    "/rigk/contacts",
    "/rigk/list",
    "/rigk/map",
    "/sales",
    "/sample-feedback/[id]",
    "/sample-feedbacks",
    "/sample-feedbacks/analytics",
    "/sample-sending/[id]",
    "/sample-sendings",
    "/sample-sendings/analytics",
    "/search",
    "/security",
    "/sentry",
    "/sentry/alerts",
    "/sentry/issues",
    "/sentry/issues/[id]",
    "/sentry/logs",
    "/sentry/metrics",
    "/sentry/monitors",
    "/sentry/performance",
    "/sentry/releases",
    "/services",
    "/stockmarket",
    "/stockmarket/polymer/[type]",
    "/stockmarket/price-movements",
    "/stockmarket/prices",
    "/supplier-audit/[id]",
    "/supplier-audits",
    "/task/[id]",
    "/tasks",
    "/tasks/analytics",
    "/thumbnails",
    "/tokens",
    "/toll-service/[id]",
    "/toll-services",
    "/translation-management",
    "/translation-management/browse",
    "/translation-management/bulk",
    "/translation-management/cms/languages",
    "/translation-management/domains",
    "/translation-management/key",
    "/translation-management/languages",
    "/translation-management/matrix",
    "/translation-management/missing",
    "/translation-management/overrides",
    "/unauthorized",
    "/usage",
    "/usage/[integration]",
    "/usage/auctions",
    "/usage/integrations",
    "/usage/mailing",
    "/usage/route",
    "/user/[id]",
    "/user/[id]/travelexpenses",
    "/user/[id]/travelexpenses/[expenseId]",
    "/users",
    "/users/analytics",
    "/verification",
    "/verification/[id]",
    "/verify-email",
    "/weekly",
    "/wiki",
    "/wiki/[slug]",
    "/wiki/rubrik/[slug]",
    "/working-hours",
    "/working-hours/[id]",
    "/working-hours/approvals",
    "/working-hours/settings",
    "/working-hours/team"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_1_9elhcitribv._.js.map