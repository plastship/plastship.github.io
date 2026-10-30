(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
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
"[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QRScannerModal",
    ()=>QRScannerModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/html5-qrcode/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$html5$2d$qrcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html5-qrcode/esm/html5-qrcode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/html5-qrcode/esm/core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$plastrack$2d$validation$2f$src$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/plastrack-validation/src/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$plastrack$2d$validation$2f$src$2f$container$2d$parsing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/plastrack-validation/src/container-parsing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$plastrack$2d$validation$2f$src$2f$scan$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/plastrack-validation/src/scan-validation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
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
const SCANNER_ELEMENT_ID = 'qr-scanner-reader';
const SCAN_COOLDOWN_MS = 2000;
const ModalOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QRScannerModal__ModalOverlay",
    componentId: "sc-e599c9e9-0"
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].overlay};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
_c = ModalOverlay;
const CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "QRScannerModal__CloseButton",
    componentId: "sc-e599c9e9-1"
})`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
_c1 = CloseButton;
const ScannerContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QRScannerModal__ScannerContainer",
    componentId: "sc-e599c9e9-2"
})`
  position: relative;
  width: 100%;
  max-width: 500px;
  aspect-ratio: 1;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 100%;
    aspect-ratio: auto;
  }
`;
_c2 = ScannerContainer;
const ScannerElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QRScannerModal__ScannerElement",
    componentId: "sc-e599c9e9-3"
})`
  width: 100%;
  height: 100%;

  & video {
    object-fit: cover !important;
    border-radius: 0 !important;
  }

  & #qr-shaded-region {
    border: none !important;
  }
`;
_c3 = ScannerElement;
const ViewfinderOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QRScannerModal__ViewfinderOverlay",
    componentId: "sc-e599c9e9-4"
})`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;
_c4 = ViewfinderOverlay;
const ViewfinderFrame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QRScannerModal__ViewfinderFrame",
    componentId: "sc-e599c9e9-5"
})`
  width: 250px;
  height: 250px;
  position: relative;
`;
_c5 = ViewfinderFrame;
const CornerBorder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QRScannerModal__CornerBorder",
    componentId: "sc-e599c9e9-6"
})`
  position: absolute;
  width: 40px;
  height: 40px;
  border-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
`;
const TopLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(CornerBorder).withConfig({
    displayName: "QRScannerModal__TopLeft",
    componentId: "sc-e599c9e9-7"
})`
  top: 0;
  left: 0;
  border-top: 4px solid;
  border-left: 4px solid;
`;
_c6 = TopLeft;
const TopRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(CornerBorder).withConfig({
    displayName: "QRScannerModal__TopRight",
    componentId: "sc-e599c9e9-8"
})`
  top: 0;
  right: 0;
  border-top: 4px solid;
  border-right: 4px solid;
`;
_c7 = TopRight;
const BottomLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(CornerBorder).withConfig({
    displayName: "QRScannerModal__BottomLeft",
    componentId: "sc-e599c9e9-9"
})`
  bottom: 0;
  left: 0;
  border-bottom: 4px solid;
  border-left: 4px solid;
`;
_c8 = BottomLeft;
const BottomRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(CornerBorder).withConfig({
    displayName: "QRScannerModal__BottomRight",
    componentId: "sc-e599c9e9-10"
})`
  bottom: 0;
  right: 0;
  border-bottom: 4px solid;
  border-right: 4px solid;
`;
_c9 = BottomRight;
const ScannerHint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "QRScannerModal__ScannerHint",
    componentId: "sc-e599c9e9-11"
})`
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  font-size: 16px;
  text-align: center;
  margin-top: 24px;
`;
_c10 = ScannerHint;
const ErrorContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QRScannerModal__ErrorContainer",
    componentId: "sc-e599c9e9-12"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
  text-align: center;
`;
_c11 = ErrorContainer;
const ErrorText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "QRScannerModal__ErrorText",
    componentId: "sc-e599c9e9-13"
})`
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  font-size: 16px;
  line-height: 1.5;
`;
_c12 = ErrorText;
const RetryButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "QRScannerModal__RetryButton",
    componentId: "sc-e599c9e9-14"
})`
  padding: 12px 24px;
  border-radius: 12px;
  border: none;
  background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
_c13 = RetryButton;
const FallbackButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "QRScannerModal__FallbackButton",
    componentId: "sc-e599c9e9-15"
})`
  padding: 12px 24px;
  border-radius: 12px;
  border: 2px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  background: transparent;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
_c14 = FallbackButton;
const LoadingText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "QRScannerModal__LoadingText",
    componentId: "sc-e599c9e9-16"
})`
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  font-size: 16px;
`;
_c15 = LoadingText;
const QRScannerModal = ({ isOpen, onClose, onScan })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const [scannerState, setScannerState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('requesting');
    const html5QrCodeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scanCooldownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const lastScannedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stopScanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QRScannerModal.useCallback[stopScanner]": async ()=>{
            const scanner = html5QrCodeRef.current;
            if (scanner) {
                try {
                    const state = scanner.getState();
                    if (state === 2) {
                        // SCANNING
                        await scanner.stop();
                    }
                    scanner.clear();
                } catch  {
                // Ignore cleanup errors
                }
                html5QrCodeRef.current = null;
            }
        }
    }["QRScannerModal.useCallback[stopScanner]"], []);
    const handleScanSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QRScannerModal.useCallback[handleScanSuccess]": (decodedText)=>{
            if (scanCooldownRef.current) return;
            if (decodedText === lastScannedRef.current) return;
            scanCooldownRef.current = true;
            lastScannedRef.current = decodedText;
            // Try to extract container ID from URL
            let boxQRCodeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$plastrack$2d$validation$2f$src$2f$container$2d$parsing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractContainerIdFromUrl"])(decodedText);
            if (!boxQRCodeId) {
                boxQRCodeId = decodedText.trim();
            }
            // Validate
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$plastrack$2d$validation$2f$src$2f$scan$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidBoxQRCodeId"])(boxQRCodeId)) {
                const qrErrCtx = {
                    entityType: 'Plastrack',
                    entityId: boxQRCodeId,
                    action: tr('quickWheel.qrScanner.invalidFormatAction', {
                        defaultValue: 'Ungültiges QR-Code Format'
                    })
                };
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('quickWheel.qrScanner.invalidFormat', {
                    defaultValue: 'Invalid QR code format. Please scan a valid box QR code.'
                }), {
                    context: qrErrCtx
                });
                setTimeout({
                    "QRScannerModal.useCallback[handleScanSuccess]": ()=>{
                        scanCooldownRef.current = false;
                    }
                }["QRScannerModal.useCallback[handleScanSuccess]"], SCAN_COOLDOWN_MS);
                return;
            }
            // Valid scan
            onScan(boxQRCodeId);
            void stopScanner();
            onClose();
            // Reset cooldown after close
            setTimeout({
                "QRScannerModal.useCallback[handleScanSuccess]": ()=>{
                    scanCooldownRef.current = false;
                    lastScannedRef.current = null;
                }
            }["QRScannerModal.useCallback[handleScanSuccess]"], SCAN_COOLDOWN_MS);
        }
    }["QRScannerModal.useCallback[handleScanSuccess]"], [
        onScan,
        onClose,
        stopScanner,
        tr
    ]);
    const startScanner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QRScannerModal.useCallback[startScanner]": async ()=>{
            setScannerState('requesting');
            scanCooldownRef.current = false;
            lastScannedRef.current = null;
            try {
                const scanner = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$html5$2d$qrcode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5Qrcode"](SCANNER_ELEMENT_ID, {
                    formatsToSupport: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].QR_CODE,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].CODE_128,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$html5$2d$qrcode$2f$esm$2f$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Html5QrcodeSupportedFormats"].EAN_13
                    ],
                    verbose: false
                });
                html5QrCodeRef.current = scanner;
                await scanner.start({
                    facingMode: 'environment'
                }, {
                    fps: 10,
                    qrbox: {
                        width: 250,
                        height: 250
                    },
                    aspectRatio: 1.0,
                    disableFlip: false
                }, handleScanSuccess, {
                    "QRScannerModal.useCallback[startScanner]": ()=>{
                    // Ignore scan failures (no QR code in frame)
                    }
                }["QRScannerModal.useCallback[startScanner]"]);
                setScannerState('scanning');
            } catch  {
                setScannerState('error');
            }
        }
    }["QRScannerModal.useCallback[startScanner]"], [
        handleScanSuccess
    ]);
    // Start/stop scanner when modal opens/closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QRScannerModal.useEffect": ()=>{
            if (isOpen) {
                // Small delay to ensure DOM element exists
                const timer = setTimeout({
                    "QRScannerModal.useEffect.timer": ()=>{
                        void startScanner();
                    }
                }["QRScannerModal.useEffect.timer"], 100);
                return ({
                    "QRScannerModal.useEffect": ()=>clearTimeout(timer)
                })["QRScannerModal.useEffect"];
            }
            void stopScanner();
            return undefined;
        }
    }["QRScannerModal.useEffect"], [
        isOpen,
        startScanner,
        stopScanner
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QRScannerModal.useEffect": ()=>{
            return ({
                "QRScannerModal.useEffect": ()=>{
                    void stopScanner();
                }
            })["QRScannerModal.useEffect"];
        }
    }["QRScannerModal.useEffect"], [
        stopScanner
    ]);
    if (!isOpen) return null;
    const handleClose = ()=>{
        void stopScanner();
        onClose();
    };
    const handleRetry = ()=>{
        void startScanner();
    };
    const handleManualFallback = ()=>{
        void stopScanner();
        onClose();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalOverlay, {
        "data-testid": "qr-scanner-modal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseButton, {
                onClick: handleClose,
                "data-testid": "qr-scanner-close",
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                lineNumber: 348,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            scannerState === 'error' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorContainer, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorText, {
                        children: tr('quickWheel.qrScanner.cameraError', {
                            defaultValue: 'Camera access denied or unavailable. Please allow camera permissions in your browser settings and try again.'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                        lineNumber: 354,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RetryButton, {
                        onClick: handleRetry,
                        "data-testid": "qr-scanner-retry",
                        children: tr('quickWheel.qrScanner.retry', {
                            defaultValue: 'Retry Camera'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                        lineNumber: 360,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FallbackButton, {
                        onClick: handleManualFallback,
                        "data-testid": "qr-scanner-manual-fallback",
                        children: tr('quickWheel.qrScanner.manualInput', {
                            defaultValue: 'Use Manual Input'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                        lineNumber: 363,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                lineNumber: 353,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScannerContainer, {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScannerElement, {
                        id: SCANNER_ELEMENT_ID
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    scannerState === 'requesting' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewfinderOverlay, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoadingText, {
                            children: tr('quickWheel.qrScanner.requesting', {
                                defaultValue: 'Requesting camera access...'
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                            lineNumber: 372,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                        lineNumber: 371,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    scannerState === 'scanning' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewfinderOverlay, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewfinderFrame, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopLeft, {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                                        lineNumber: 380,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TopRight, {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                                        lineNumber: 381,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomLeft, {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                                        lineNumber: 382,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomRight, {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                                        lineNumber: 383,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                                lineNumber: 379,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScannerHint, {
                                children: tr('quickWheel.qrScanner.hint', {
                                    defaultValue: 'Position QR code in the frame'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                                lineNumber: 385,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                        lineNumber: 378,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
                lineNumber: 368,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx",
        lineNumber: 347,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(QRScannerModal, "uM62OX50h9mapvEetQ46ZV9Robs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c16 = QRScannerModal;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15, _c16;
__turbopack_context__.k.register(_c, "ModalOverlay");
__turbopack_context__.k.register(_c1, "CloseButton");
__turbopack_context__.k.register(_c2, "ScannerContainer");
__turbopack_context__.k.register(_c3, "ScannerElement");
__turbopack_context__.k.register(_c4, "ViewfinderOverlay");
__turbopack_context__.k.register(_c5, "ViewfinderFrame");
__turbopack_context__.k.register(_c6, "TopLeft");
__turbopack_context__.k.register(_c7, "TopRight");
__turbopack_context__.k.register(_c8, "BottomLeft");
__turbopack_context__.k.register(_c9, "BottomRight");
__turbopack_context__.k.register(_c10, "ScannerHint");
__turbopack_context__.k.register(_c11, "ErrorContainer");
__turbopack_context__.k.register(_c12, "ErrorText");
__turbopack_context__.k.register(_c13, "RetryButton");
__turbopack_context__.k.register(_c14, "FallbackButton");
__turbopack_context__.k.register(_c15, "LoadingText");
__turbopack_context__.k.register(_c16, "QRScannerModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/plastrack/components/QRScanner/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QRScannerModal",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$plastrack$2f$components$2f$QRScanner$2f$QRScannerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QRScannerModal"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$plastrack$2f$components$2f$QRScanner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/plastrack/components/QRScanner/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$plastrack$2f$components$2f$QRScanner$2f$QRScannerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx [app-client] (ecmascript)");
}),
"[project]/apps/web/src/app/plastrack/components/QRScanner/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$plastrack$2f$components$2f$QRScanner$2f$QRScannerModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/plastrack/components/QRScanner/QRScannerModal.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/plastrack-validation/src/container-parsing.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Container Parsing
 * Utilities for parsing container information from Salesforce data
 */ /**
 * Parsed container information
 */ __turbopack_context__.s([
    "extractContainerIdFromUrl",
    ()=>extractContainerIdFromUrl,
    "formatContainerInfo",
    ()=>formatContainerInfo,
    "generateContainerUrl",
    ()=>generateContainerUrl,
    "parseContainerInfo",
    ()=>parseContainerInfo
]);
function parseContainerInfo(kommentar) {
    if (!kommentar) {
        return {
            containerId: null,
            cycle: 1,
            batchId: null
        };
    }
    const containerMatch = kommentar.match(/CONTAINER:\s*([A-Z0-9-]+)/i);
    const cycleMatch = kommentar.match(/CYCLE:\s*(\d+)/i);
    const batchMatch = kommentar.match(/BATCH:\s*([A-Z0-9-]+)/i);
    return {
        containerId: containerMatch?.[1] ?? null,
        cycle: cycleMatch?.[1] ? parseInt(cycleMatch[1], 10) : 1,
        batchId: batchMatch?.[1] ?? null
    };
}
function formatContainerInfo(info) {
    const parts = [];
    if (info.containerId) {
        parts.push(`CONTAINER: ${info.containerId}`);
    }
    if (info.cycle > 1) {
        parts.push(`CYCLE: ${info.cycle}`);
    }
    if (info.batchId) {
        parts.push(`BATCH: ${info.batchId}`);
    }
    return parts.join(' ');
}
function extractContainerIdFromUrl(url) {
    if (!url) return null;
    // Try to match /plastrack/{id} pattern
    const match = url.match(/\/plastrack\/([A-Z0-9-]+)/i);
    if (match?.[1]) {
        return match[1];
    }
    // If it's just an ID without URL, return it
    if (/^[A-Z0-9-]+$/i.test(url.trim())) {
        return url.trim();
    }
    return null;
}
function generateContainerUrl(containerId, baseUrl) {
    // Ensure no trailing slash on baseUrl
    const cleanBaseUrl = baseUrl.replace(/\/$/, '');
    return `${cleanBaseUrl}/plastrack/${containerId}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/plastrack-validation/src/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
/**
 * @plastship/plastrack-validation
 * Shared validation and business logic for Plastrack
 */ // Scan validation
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$plastrack$2d$validation$2f$src$2f$scan$2d$validation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/plastrack-validation/src/scan-validation.ts [app-client] (ecmascript)");
// Container parsing
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$plastrack$2d$validation$2f$src$2f$container$2d$parsing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/plastrack-validation/src/container-parsing.ts [app-client] (ecmascript)");
// Scan logic
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$plastrack$2d$validation$2f$src$2f$scan$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/plastrack-validation/src/scan-logic.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/plastrack-validation/src/scan-logic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Scan Logic
 * Business logic for scan operations. This module is the single source of truth
 * for the scan state machine (#341) — usePlastrackScan imports from here rather
 * than carrying its own copy.
 *
 * The types below are duplicated from @plastship/plastrack-constants rather than
 * imported. That is deliberate and load-bearing: this package DECLARES
 * plastrack-constants as a dependency but has never actually imported it, and a
 * real import does not survive a cold CI build — `turbo run type-check` starts
 * this package's type-check before the constants `build` has emitted its dist/,
 * and the package resolves its workspace deps through node_modules -> dist (its
 * own tsconfig has no `paths`, and adding one would break `build`, whose rootDir
 * is src). See the #341 note for the follow-up. Until the workspace build graph
 * is fixed, cross-package imports here are a CI landmine.
 *
 * KEEP IN SYNC with packages/plastrack-constants/src/box-status.ts and
 * scan-type.ts. The test suite (apps/web/src/tests/plastrack/scan-logic.test.ts)
 * imports the real BOX_STATUSES from the constants package and asserts this
 * module handles every one of them, so drift between the two fails the build.
 */ __turbopack_context__.s([
    "buildScanPayload",
    ()=>buildScanPayload,
    "canSubmitScan",
    ()=>canSubmitScan,
    "getDefaultScanType",
    ()=>getDefaultScanType,
    "getExpectedStatusAfterScan",
    ()=>getExpectedStatusAfterScan,
    "isScanTypeValidForStatus",
    ()=>isScanTypeValidForStatus
]);
const isFull = (status)=>status === 'At Customer - Full' || status === 'At Recycler - Full';
const isEmpty = (status)=>status === 'At Customer - Empty' || status === 'At Recycler - Empty';
function canSubmitScan(state) {
    // Must have a box
    if (!state.currentBox) {
        return false;
    }
    // Fill scans require additional data
    if (state.scanType === 'Fill') {
        return !!(state.selectedOrderId && state.selectedMaterialId && state.weight !== null && state.weight > 0);
    }
    // Empty scans only need the box
    return true;
}
function buildScanPayload(state, boxQRCode, location) {
    const payload = {
        boxQRCodeId: boxQRCode,
        scanType: state.scanType
    };
    if (state.scanType === 'Fill') {
        if (state.selectedOrderId) {
            payload.orderId = state.selectedOrderId;
        }
        if (state.selectedMaterialId) {
            payload.materialId = state.selectedMaterialId;
        }
        if (state.weight !== null) {
            payload.weightKg = state.weight;
        }
    }
    if (location) {
        payload.location = location;
    }
    return payload;
}
function getDefaultScanType(boxStatus) {
    if (!boxStatus) return null;
    if (boxStatus === 'Out of Service') return null;
    const status = boxStatus;
    if (isFull(status) || status === 'In Transit to Recycler') return 'Empty';
    if (isEmpty(status) || status === 'In Transit to Customer') return 'Fill';
    // Unrecognised status: make no claim rather than guessing.
    return null;
}
function isScanTypeValidForStatus(scanType, boxStatus) {
    if (!boxStatus) {
        return {
            valid: true
        };
    }
    // Out of service box. Checked FIRST: this is the only hard rejection, and the
    // substring checks below must not shadow it.
    if (boxStatus === 'Out of Service') {
        return {
            valid: false,
            warning: 'This box is out of service and cannot be scanned.'
        };
    }
    const status = boxStatus;
    // Fill scan on a full box
    if (scanType === 'Fill' && isFull(status)) {
        return {
            valid: true,
            warning: 'Box is already marked as full. Are you sure you want to fill again?'
        };
    }
    // Empty scan on an empty box
    if (scanType === 'Empty' && isEmpty(status)) {
        return {
            valid: true,
            warning: 'Box is already marked as empty. Are you sure you want to empty again?'
        };
    }
    return {
        valid: true
    };
}
function getExpectedStatusAfterScan(currentStatus, scanType) {
    if (scanType === 'Fill') {
        // After fill, box should be at customer - full
        return 'At Customer - Full';
    }
    // After empty, box should be at recycler - empty
    return 'At Recycler - Empty';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/plastrack-validation/src/scan-validation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Scan Validation
 * Validation logic for scan operations
 */ // Inline types to avoid circular dependencies
__turbopack_context__.s([
    "isValidBoxQRCodeId",
    ()=>isValidBoxQRCodeId,
    "validateCreateScanRequest",
    ()=>validateCreateScanRequest,
    "validateQRCode",
    ()=>validateQRCode,
    "validateVoidScanRequest",
    ()=>validateVoidScanRequest,
    "validateWeight",
    ()=>validateWeight
]);
const SCAN_TYPES = [
    "Fill",
    "Empty"
];
function validateCreateScanRequest(request) {
    const errors = [];
    // Box QR Code is always required
    if (!request.boxQRCodeId || request.boxQRCodeId.trim() === "") {
        errors.push("Box QR Code ID is required");
    }
    // Scan type must be valid
    if (!request.scanType || !SCAN_TYPES.includes(request.scanType)) {
        errors.push('Scan type must be "Fill" or "Empty"');
    }
    // For Fill scans, additional fields are required
    if (request.scanType === "Fill") {
        if (!request.orderId || request.orderId.trim() === "") {
            errors.push("Order ID is required for Fill scans");
        }
        if (!request.materialId || request.materialId.trim() === "") {
            errors.push("Material ID is required for Fill scans");
        }
        if (request.weightKg === undefined || request.weightKg === null) {
            errors.push("Weight is required for Fill scans");
        } else if (typeof request.weightKg !== "number" || isNaN(request.weightKg)) {
            errors.push("Weight must be a valid number");
        } else if (request.weightKg <= 0) {
            errors.push("Weight must be greater than 0");
        } else if (request.weightKg > 100000) {
            errors.push("Weight exceeds maximum allowed (100,000 kg)");
        }
    }
    // Validate location if provided
    if (request.location) {
        if (typeof request.location.latitude !== "number" || request.location.latitude < -90 || request.location.latitude > 90) {
            errors.push("Invalid latitude");
        }
        if (typeof request.location.longitude !== "number" || request.location.longitude < -180 || request.location.longitude > 180) {
            errors.push("Invalid longitude");
        }
    }
    return {
        valid: errors.length === 0,
        errors
    };
}
function validateVoidScanRequest(scanId) {
    const errors = [];
    if (!scanId || scanId.trim() === "") {
        errors.push("Scan ID is required");
    }
    return {
        valid: errors.length === 0,
        errors
    };
}
function validateWeight(weight) {
    const errors = [];
    if (weight === undefined || weight === null || weight === "") {
        errors.push("Weight is required");
        return {
            valid: false,
            errors
        };
    }
    const numWeight = typeof weight === "string" ? parseFloat(weight) : weight;
    if (isNaN(numWeight)) {
        errors.push("Weight must be a valid number");
    } else if (numWeight <= 0) {
        errors.push("Weight must be greater than 0");
    } else if (numWeight > 100000) {
        errors.push("Weight exceeds maximum allowed (100,000 kg)");
    }
    return {
        valid: errors.length === 0,
        errors
    };
}
function validateQRCode(qrCode) {
    const errors = [];
    if (!qrCode || qrCode.trim() === "") {
        errors.push("QR Code is required");
        return {
            valid: false,
            errors
        };
    }
    // QR codes should match expected format (e.g., BOX-2024-001)
    const qrPattern = /^[A-Z0-9-]+$/i;
    if (!qrPattern.test(qrCode.trim())) {
        errors.push("Invalid QR Code format");
    }
    return {
        valid: errors.length === 0,
        errors
    };
}
function isValidBoxQRCodeId(qrCodeId) {
    return validateQRCode(qrCodeId).valid;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/plastrack/components/QRScanner/index.ts [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/plastrack/components/QRScanner/index.ts [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=_1n4ibxql1zbnl._.js.map