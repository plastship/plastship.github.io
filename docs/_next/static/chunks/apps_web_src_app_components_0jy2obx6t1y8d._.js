(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/components/Atom/TourBadge/TourBadge.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "TourBadge.styles__Root",
    componentId: "sc-5b292160-0"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.125rem 0.5rem;
  border-radius: 1rem;
  background: ${({ theme })=>theme.palette.default.primary};
  color: ${({ theme })=>theme.palette.default.white};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  white-space: nowrap;
  user-select: none;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/TourBadge/TourBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourBadge",
    ()=>TourBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourBadge$2f$TourBadge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourBadge/TourBadge.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const TourBadge = ({ current, total, dataTestId = 'tour-badge', className })=>{
    if (total <= 0) return null;
    const displayCurrent = Math.max(1, Math.min(current, total));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourBadge$2f$TourBadge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        children: [
            displayCurrent,
            " / ",
            total
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/TourBadge/TourBadge.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TourBadge;
var _c;
__turbopack_context__.k.register(_c, "TourBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/TourBadge/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourBadge$2f$TourBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourBadge/TourBadge.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MaskRect",
    ()=>MaskRect,
    "Root",
    ()=>Root,
    "SvgOverlay",
    ()=>SvgOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourHighlight.styles__Root",
    componentId: "sc-66dacb4b-0"
})`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].tour};
  pointer-events: ${({ $isOpen })=>$isOpen ? 'auto' : 'none'};
  opacity: ${({ $isOpen })=>$isOpen ? 1 : 0};
  visibility: ${({ $isOpen })=>$isOpen ? 'visible' : 'hidden'};
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  animation: ${({ $isOpen })=>$isOpen ? fadeIn : 'none'} 0.3s ease-out;
`;
const SvgOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "TourHighlight.styles__SvgOverlay",
    componentId: "sc-66dacb4b-1"
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const MaskRect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].rect.withConfig({
    displayName: "TourHighlight.styles__MaskRect",
    componentId: "sc-66dacb4b-2"
})`
  transition:
    x 0.3s ease-in-out,
    y 0.3s ease-in-out,
    width 0.3s ease-in-out,
    height 0.3s ease-in-out,
    rx 0.3s ease-in-out,
    ry 0.3s ease-in-out;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourHighlight",
    ()=>TourHighlight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourHighlight$2f$TourHighlight$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const DEFAULT_PADDING = 10;
const DEFAULT_ROUNDED = 8;
const TourHighlight = ({ targetRect, padding = DEFAULT_PADDING, rounded = DEFAULT_ROUNDED, isOpen, onMaskClick, dataTestId = 'tour-highlight', className })=>{
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [windowSize, setWindowSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TourHighlight.useEffect": ()=>{
            setIsMounted(true);
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
            const handleResize = {
                "TourHighlight.useEffect.handleResize": ()=>{
                    setWindowSize({
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                }
            }["TourHighlight.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "TourHighlight.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["TourHighlight.useEffect"];
        }
    }["TourHighlight.useEffect"], []);
    const handleMaskClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourHighlight.useCallback[handleMaskClick]": (e)=>{
            e.stopPropagation();
            onMaskClick?.();
        }
    }["TourHighlight.useCallback[handleMaskClick]"], [
        onMaskClick
    ]);
    if (!isMounted || !isOpen) return null;
    const { width: wWidth, height: wHeight } = windowSize;
    const maskId = `tour-highlight-mask-${dataTestId}`;
    const cutout = targetRect ? {
        x: targetRect.left - padding,
        y: targetRect.top - padding,
        width: targetRect.width + padding * 2,
        height: targetRect.height + padding * 2
    } : null;
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourHighlight$2f$TourHighlight$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        $isOpen: isOpen,
        className: className,
        "data-testid": dataTestId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourHighlight$2f$TourHighlight$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SvgOverlay"], {
            "data-testid": `${dataTestId}-svg`,
            onClick: handleMaskClick,
            role: "presentation",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mask", {
                        id: maskId,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "0",
                                y: "0",
                                width: "100%",
                                height: "100%",
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            cutout && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourHighlight$2f$TourHighlight$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MaskRect"], {
                                x: cutout.x,
                                y: cutout.y,
                                width: Math.max(0, cutout.width),
                                height: Math.max(0, cutout.height),
                                rx: rounded,
                                ry: rounded,
                                fill: "black",
                                "data-testid": `${dataTestId}-cutout`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "0",
                    width: wWidth,
                    height: wHeight,
                    fill: "rgba(0, 0, 0, 0.5)",
                    mask: `url(#${maskId})`,
                    "data-testid": `${dataTestId}-overlay`
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.tsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(content, document.body);
};
_s(TourHighlight, "CMpqd4sQTM6piuQg9gAOuY//+d8=");
_c = TourHighlight;
var _c;
__turbopack_context__.k.register(_c, "TourHighlight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/TourHighlight/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourHighlight$2f$TourHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/TourProgress/TourProgress.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarContainer",
    ()=>BarContainer,
    "BarFill",
    ()=>BarFill,
    "Dot",
    ()=>Dot,
    "DotsContainer",
    ()=>DotsContainer,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourProgress.styles__Root",
    componentId: "sc-ecdae52b-0"
})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;
const DotsContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourProgress.styles__DotsContainer",
    componentId: "sc-ecdae52b-1"
})`
  display: flex;
  gap: 0.375rem;
  justify-content: center;
  align-items: center;
`;
const Dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "TourProgress.styles__Dot",
    componentId: "sc-ecdae52b-2"
})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  transition:
    background 0.2s ease-in-out,
    transform 0.2s ease-in-out;

  ${({ $isActive, $isCompleted, theme })=>{
    if ($isActive) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        background: ${theme.palette.default.primary};
        transform: scale(1.3);
      `;
    }
    if ($isCompleted) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        background: ${theme.palette.default.primary};
        opacity: 0.5;
      `;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      background: ${theme.palette.default.grey};
    `;
}}

  &:hover {
    transform: scale(1.4);
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 2px;
  }
`;
const BarContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourProgress.styles__BarContainer",
    componentId: "sc-ecdae52b-3"
})`
  width: 100%;
  height: 3px;
  background: ${({ theme })=>theme.palette.default.grey};
  border-radius: 2px;
  overflow: hidden;
`;
const BarFill = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourProgress.styles__BarFill",
    componentId: "sc-ecdae52b-4"
})`
  height: 100%;
  width: ${({ $progress })=>$progress}%;
  background: ${({ theme })=>theme.palette.default.primary};
  border-radius: 2px;
  transition: width 0.3s ease-in-out;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/TourProgress/TourProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourProgress",
    ()=>TourProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourProgress$2f$TourProgress$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourProgress/TourProgress.styles.ts [app-client] (ecmascript)");
'use client';
;
;
const TourProgress = ({ current, total, onDotClick, showDots = true, showBar = true, dataTestId = 'tour-progress', className })=>{
    if (total <= 0) return null;
    const clampedCurrent = Math.max(0, Math.min(current, total - 1));
    const progress = (clampedCurrent + 1) / total * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourProgress$2f$TourProgress$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        children: [
            showDots && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourProgress$2f$TourProgress$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotsContainer"], {
                "data-testid": `${dataTestId}-dots`,
                children: Array.from({
                    length: total
                }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourProgress$2f$TourProgress$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dot"], {
                        $isActive: i === clampedCurrent,
                        $isCompleted: i < clampedCurrent,
                        onClick: ()=>onDotClick?.(i),
                        "aria-label": `Step ${i + 1} of ${total}`,
                        "aria-current": i === clampedCurrent ? 'step' : undefined,
                        "data-testid": `${dataTestId}-dot-${i}`
                    }, i, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/TourProgress/TourProgress.tsx",
                        lineNumber: 26,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/TourProgress/TourProgress.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showBar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourProgress$2f$TourProgress$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarContainer"], {
                "data-testid": `${dataTestId}-bar`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourProgress$2f$TourProgress$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarFill"], {
                    $progress: progress,
                    role: "progressbar",
                    "aria-valuenow": clampedCurrent + 1,
                    "aria-valuemin": 1,
                    "aria-valuemax": total,
                    "data-testid": `${dataTestId}-bar-fill`
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/TourProgress/TourProgress.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/TourProgress/TourProgress.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/TourProgress/TourProgress.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TourProgress;
var _c;
__turbopack_context__.k.register(_c, "TourProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/TourProgress/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourProgress$2f$TourProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourProgress/TourProgress.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/TourTooltip/TourTooltip.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Arrow",
    ()=>Arrow,
    "Content",
    ()=>Content,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
const slideIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourTooltip.styles__Root",
    componentId: "sc-f3c8be8f-0"
})`
  position: fixed;
  top: ${({ $top })=>$top}px;
  left: ${({ $left })=>$left}px;
  max-width: ${({ $maxWidth })=>$maxWidth}px;
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].tourTooltip};
  opacity: ${({ $isOpen })=>$isOpen ? 1 : 0};
  visibility: ${({ $isOpen })=>$isOpen ? 'visible' : 'hidden'};
  transition:
    top 0.3s ease-in-out,
    left 0.3s ease-in-out,
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  animation: ${({ $isOpen })=>$isOpen ? slideIn : 'none'} 0.3s ease-out;
`;
const Content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourTooltip.styles__Content",
    componentId: "sc-f3c8be8f-1"
})`
  background: ${({ theme })=>theme.palette.default.white};
  border-radius: ${({ theme })=>theme.borderRadius.box};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: ${({ theme })=>theme.padding.default};
  font-family: ${({ theme })=>theme.font.primaryFamily};
  color: ${({ theme })=>theme.palette.default.black};
  position: relative;
`;
const getArrowStyles = (position, arrowSize)=>{
    switch(position){
        case 'bottom':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        top: -${arrowSize}px;
        border-width: 0 ${arrowSize}px ${arrowSize}px ${arrowSize}px;
        border-color: transparent transparent ${({ theme })=>theme.palette.default.white}
          transparent;
      `;
        case 'top':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        bottom: -${arrowSize}px;
        border-width: ${arrowSize}px ${arrowSize}px 0 ${arrowSize}px;
        border-color: ${({ theme })=>theme.palette.default.white} transparent transparent
          transparent;
      `;
        case 'right':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        left: -${arrowSize}px;
        border-width: ${arrowSize}px ${arrowSize}px ${arrowSize}px 0;
        border-color: transparent ${({ theme })=>theme.palette.default.white} transparent
          transparent;
      `;
        case 'left':
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        right: -${arrowSize}px;
        border-width: ${arrowSize}px 0 ${arrowSize}px ${arrowSize}px;
        border-color: transparent transparent transparent
          ${({ theme })=>theme.palette.default.white};
      `;
        default:
            return '';
    }
};
const Arrow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourTooltip.styles__Arrow",
    componentId: "sc-f3c8be8f-2"
})`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;

  ${({ $position, $arrowSize })=>getArrowStyles($position, $arrowSize)}

  ${({ $position, $offset })=>{
    if ($position === 'top' || $position === 'bottom') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        left: ${$offset}px;
      `;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      top: ${$offset}px;
    `;
}}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/TourTooltip/TourTooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourTooltip",
    ()=>TourTooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourTooltip$2f$TourTooltip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourTooltip/TourTooltip.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const DEFAULT_ARROW_SIZE = 10;
const DEFAULT_MAX_WIDTH = 380;
const VIEWPORT_MARGIN = 16;
const TourTooltip = ({ targetRect, position = 'bottom', children, isOpen, arrowSize = DEFAULT_ARROW_SIZE, maxWidth = DEFAULT_MAX_WIDTH, dataTestId = 'tour-tooltip', className })=>{
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [resolvedPosition, setResolvedPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(position);
    const [arrowOffset, setArrowOffset] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TourTooltip.useEffect": ()=>{
            setIsMounted(true);
        }
    }["TourTooltip.useEffect"], []);
    const calculatePosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourTooltip.useCallback[calculatePosition]": ()=>{
            if (!targetRect || !contentRef.current) return;
            const tooltip = contentRef.current.getBoundingClientRect();
            const gap = arrowSize + 8;
            let top = 0;
            let left = 0;
            let pos = position;
            let aOffset = tooltip.width / 2 - arrowSize;
            const positions = {
                bottom: {
                    top: targetRect.top + targetRect.height + gap,
                    left: targetRect.left + targetRect.width / 2 - tooltip.width / 2
                },
                top: {
                    top: targetRect.top - tooltip.height - gap,
                    left: targetRect.left + targetRect.width / 2 - tooltip.width / 2
                },
                right: {
                    top: targetRect.top + targetRect.height / 2 - tooltip.height / 2,
                    left: targetRect.left + targetRect.width + gap
                },
                left: {
                    top: targetRect.top + targetRect.height / 2 - tooltip.height / 2,
                    left: targetRect.left - tooltip.width - gap
                },
                center: {
                    top: window.innerHeight / 2 - tooltip.height / 2,
                    left: window.innerWidth / 2 - tooltip.width / 2
                }
            };
            const preferred = positions[position];
            top = preferred.top;
            left = preferred.left;
            // Viewport collision detection - flip if needed
            if (position === 'bottom' && top + tooltip.height > window.innerHeight - VIEWPORT_MARGIN) {
                pos = 'top';
                top = positions.top.top;
                left = positions.top.left;
            } else if (position === 'top' && top < VIEWPORT_MARGIN) {
                pos = 'bottom';
                top = positions.bottom.top;
                left = positions.bottom.left;
            } else if (position === 'right' && left + tooltip.width > window.innerWidth - VIEWPORT_MARGIN) {
                pos = 'left';
                top = positions.left.top;
                left = positions.left.left;
            } else if (position === 'left' && left < VIEWPORT_MARGIN) {
                pos = 'right';
                top = positions.right.top;
                left = positions.right.left;
            }
            // Clamp horizontal position within viewport
            if (left < VIEWPORT_MARGIN) {
                const diff = VIEWPORT_MARGIN - left;
                left = VIEWPORT_MARGIN;
                if (pos === 'top' || pos === 'bottom') {
                    aOffset = Math.max(arrowSize, aOffset - diff);
                }
            }
            if (left + tooltip.width > window.innerWidth - VIEWPORT_MARGIN) {
                const diff = left + tooltip.width - (window.innerWidth - VIEWPORT_MARGIN);
                left = window.innerWidth - VIEWPORT_MARGIN - tooltip.width;
                if (pos === 'top' || pos === 'bottom') {
                    aOffset = Math.min(tooltip.width - arrowSize * 3, aOffset + diff);
                }
            }
            // Clamp vertical position within viewport
            top = Math.max(VIEWPORT_MARGIN, Math.min(top, window.innerHeight - tooltip.height - VIEWPORT_MARGIN));
            setCoords({
                top,
                left
            });
            setResolvedPosition(pos);
            setArrowOffset(aOffset);
        }
    }["TourTooltip.useCallback[calculatePosition]"], [
        targetRect,
        position,
        arrowSize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TourTooltip.useEffect": ()=>{
            if (isOpen && targetRect) {
                requestAnimationFrame(calculatePosition);
            }
        }
    }["TourTooltip.useEffect"], [
        isOpen,
        targetRect,
        calculatePosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TourTooltip.useEffect": ()=>{
            if (!isOpen) return;
            const handleResize = {
                "TourTooltip.useEffect.handleResize": ()=>requestAnimationFrame(calculatePosition)
            }["TourTooltip.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleResize, true);
            return ({
                "TourTooltip.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    window.removeEventListener('scroll', handleResize, true);
                }
            })["TourTooltip.useEffect"];
        }
    }["TourTooltip.useEffect"], [
        isOpen,
        calculatePosition
    ]);
    if (!isMounted || !isOpen) return null;
    const showArrow = resolvedPosition !== 'center' && targetRect !== null;
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourTooltip$2f$TourTooltip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        $isOpen: isOpen,
        $top: coords.top,
        $left: coords.left,
        $maxWidth: maxWidth,
        className: className,
        "data-testid": dataTestId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourTooltip$2f$TourTooltip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            ref: contentRef,
            "data-testid": `${dataTestId}-content`,
            children: [
                showArrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourTooltip$2f$TourTooltip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Arrow"], {
                    $position: resolvedPosition,
                    $arrowSize: arrowSize,
                    $offset: arrowOffset,
                    "data-testid": `${dataTestId}-arrow`
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/TourTooltip/TourTooltip.tsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/TourTooltip/TourTooltip.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/TourTooltip/TourTooltip.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(content, document.body);
};
_s(TourTooltip, "IKnPEoBTN9f+gPgGCvI+4iK1y1A=");
_c = TourTooltip;
var _c;
__turbopack_context__.k.register(_c, "TourTooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/TourTooltip/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourTooltip$2f$TourTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourTooltip/TourTooltip.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/TourOverlay/TourOverlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourOverlay",
    ()=>TourOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourHighlight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourHighlight/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourHighlight$2f$TourHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourHighlight/TourHighlight.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TourStep/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const SCROLL_DELAY = 300;
const TourOverlay = ({ tour, currentStep, isOpen, onNext, onPrev, onSkip, onClose, onDotClick, t, dataTestId = 'tour-overlay' })=>{
    _s();
    const [targetRect, setTargetRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const previousOverflow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('');
    const observerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const step = tour.steps[currentStep];
    // Translate step title and content
    const translateKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourOverlay.useCallback[translateKey]": (key, fallback = key)=>{
            if (t) {
                const translated = t(key);
                return translated !== key ? translated : fallback;
            }
            return fallback;
        }
    }["TourOverlay.useCallback[translateKey]"], [
        t
    ]);
    // Find and track target element
    const updateTargetRect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourOverlay.useCallback[updateTargetRect]": ()=>{
            if (!step?.selector) {
                setTargetRect(null);
                setIsReady(true);
                return;
            }
            const element = document.querySelector(step.selector);
            if (element) {
                const rect = element.getBoundingClientRect();
                setTargetRect({
                    top: rect.top,
                    left: rect.left,
                    width: rect.width,
                    height: rect.height
                });
                setIsReady(true);
            } else {
                setTargetRect(null);
                setIsReady(true);
            }
        }
    }["TourOverlay.useCallback[updateTargetRect]"], [
        step?.selector
    ]);
    // Scroll target into view and update rect
    const scrollToTarget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourOverlay.useCallback[scrollToTarget]": ()=>{
            if (!step?.selector) {
                setIsReady(true);
                return;
            }
            const element = document.querySelector(step.selector);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
                // Wait for scroll to complete, then update rect
                setTimeout({
                    "TourOverlay.useCallback[scrollToTarget]": ()=>{
                        updateTargetRect();
                    }
                }["TourOverlay.useCallback[scrollToTarget]"], SCROLL_DELAY);
            } else if (step.waitForSelector) {
                // Wait for element to appear in DOM
                const mutationObserver = new MutationObserver({
                    "TourOverlay.useCallback[scrollToTarget]": ()=>{
                        const el = document.querySelector(step.selector);
                        if (el) {
                            mutationObserver.disconnect();
                            el.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                            setTimeout(updateTargetRect, SCROLL_DELAY);
                        }
                    }
                }["TourOverlay.useCallback[scrollToTarget]"]);
                mutationObserver.observe(document.body, {
                    childList: true,
                    subtree: true
                });
                // Timeout after 5 seconds
                setTimeout({
                    "TourOverlay.useCallback[scrollToTarget]": ()=>{
                        mutationObserver.disconnect();
                        setIsReady(true);
                    }
                }["TourOverlay.useCallback[scrollToTarget]"], 5000);
            } else {
                setIsReady(true);
            }
        }
    }["TourOverlay.useCallback[scrollToTarget]"], [
        step?.selector,
        step?.waitForSelector,
        updateTargetRect
    ]);
    // Body scroll lock
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TourOverlay.useEffect": ()=>{
            if (isOpen) {
                previousOverflow.current = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
            }
            return ({
                "TourOverlay.useEffect": ()=>{
                    document.body.style.overflow = previousOverflow.current;
                }
            })["TourOverlay.useEffect"];
        }
    }["TourOverlay.useEffect"], [
        isOpen
    ]);
    // Track target element with ResizeObserver
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TourOverlay.useEffect": ()=>{
            if (!isOpen || !step?.selector) return;
            const element = document.querySelector(step.selector);
            if (!element) return;
            // Disconnect previous observer
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            observerRef.current = new ResizeObserver({
                "TourOverlay.useEffect": ()=>{
                    updateTargetRect();
                }
            }["TourOverlay.useEffect"]);
            observerRef.current.observe(element);
            return ({
                "TourOverlay.useEffect": ()=>{
                    observerRef.current?.disconnect();
                }
            })["TourOverlay.useEffect"];
        }
    }["TourOverlay.useEffect"], [
        isOpen,
        step?.selector,
        updateTargetRect
    ]);
    // Scroll to target when step changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TourOverlay.useEffect": ()=>{
            if (isOpen) {
                setIsReady(false);
                scrollToTarget();
            }
        }
    }["TourOverlay.useEffect"], [
        isOpen,
        currentStep,
        scrollToTarget
    ]);
    // Update rect on scroll and resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TourOverlay.useEffect": ()=>{
            if (!isOpen) return;
            const handleUpdate = {
                "TourOverlay.useEffect.handleUpdate": ()=>updateTargetRect()
            }["TourOverlay.useEffect.handleUpdate"];
            window.addEventListener('resize', handleUpdate);
            window.addEventListener('scroll', handleUpdate, true);
            return ({
                "TourOverlay.useEffect": ()=>{
                    window.removeEventListener('resize', handleUpdate);
                    window.removeEventListener('scroll', handleUpdate, true);
                }
            })["TourOverlay.useEffect"];
        }
    }["TourOverlay.useEffect"], [
        isOpen,
        updateTargetRect
    ]);
    // Execute step action when step becomes active
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TourOverlay.useEffect": ()=>{
            if (isOpen && isReady && step?.action) {
                step.action();
            }
        }
    }["TourOverlay.useEffect"], [
        isOpen,
        isReady,
        currentStep,
        step?.action,
        step
    ]);
    if (!isOpen || !step) return null;
    const title = translateKey(step.titleKey, step.titleKey.split('.').pop() || '');
    const content = translateKey(step.contentKey, step.contentKey.split('.').pop() || '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourHighlight$2f$TourHighlight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourHighlight"], {
                targetRect: targetRect,
                isOpen: isOpen && isReady,
                onMaskClick: onClose,
                dataTestId: `${dataTestId}-highlight`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/TourOverlay/TourOverlay.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isReady && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourStep"], {
                step: step,
                current: currentStep,
                total: tour.steps.length,
                title: title,
                content: content,
                onNext: onNext,
                onPrev: onPrev,
                onSkip: onSkip,
                onClose: onClose,
                onDotClick: onDotClick,
                isFirst: currentStep === 0,
                isLast: currentStep === tour.steps.length - 1,
                targetRect: targetRect,
                dataTestId: `${dataTestId}-step`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/TourOverlay/TourOverlay.tsx",
                lineNumber: 177,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/TourOverlay/TourOverlay.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TourOverlay, "gFzwDoI9+HFZ1Xds/qdKbI3om4A=");
_c = TourOverlay;
var _c;
__turbopack_context__.k.register(_c, "TourOverlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/TourOverlay/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourOverlay",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourOverlay$2f$TourOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourOverlay"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourOverlay$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TourOverlay/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourOverlay$2f$TourOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TourOverlay/TourOverlay.tsx [app-client] (ecmascript)");
}),
"[project]/apps/web/src/app/components/Molecule/TourOverlay/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourOverlay$2f$TourOverlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TourOverlay/TourOverlay.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloseButton",
    ()=>CloseButton,
    "NavButton",
    ()=>NavButton,
    "NavigationContainer",
    ()=>NavigationContainer,
    "NavigationLeft",
    ()=>NavigationLeft,
    "NavigationRight",
    ()=>NavigationRight,
    "StepContainer",
    ()=>StepContainer,
    "StepContent",
    ()=>StepContent,
    "StepHeader",
    ()=>StepHeader,
    "StepTitle",
    ()=>StepTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const StepContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourStep.styles__StepContainer",
    componentId: "sc-8d29aee6-0"
})`
  display: flex;
  flex-direction: column;
  gap: ${({ theme })=>theme.margin.small};
  min-width: 280px;
  max-width: 100%;
`;
const StepHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourStep.styles__StepHeader",
    componentId: "sc-8d29aee6-1"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme })=>theme.margin.small};
`;
const StepTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h4.withConfig({
    displayName: "TourStep.styles__StepTitle",
    componentId: "sc-8d29aee6-2"
})`
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  color: ${({ theme })=>theme.palette.default.black};
  margin: 0;
`;
const StepContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourStep.styles__StepContent",
    componentId: "sc-8d29aee6-3"
})`
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 14px;
  line-height: 22px;
  color: ${({ theme })=>theme.palette.default.greyDark};
  margin: 0;
`;
const CloseButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "TourStep.styles__CloseButton",
    componentId: "sc-8d29aee6-4"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: ${({ theme })=>theme.palette.default.greyDark};
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;
  transition:
    background 0.2s ease-in-out,
    color 0.2s ease-in-out;

  &:hover {
    background: ${({ theme })=>theme.palette.default.greyLight};
    color: ${({ theme })=>theme.palette.default.black};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
const NavigationContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourStep.styles__NavigationContainer",
    componentId: "sc-8d29aee6-5"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme })=>theme.margin.small};
  margin-top: ${({ theme })=>theme.margin.extrasmall};
`;
const NavigationLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourStep.styles__NavigationLeft",
    componentId: "sc-8d29aee6-6"
})`
  flex-shrink: 0;
`;
const NavigationRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "TourStep.styles__NavigationRight",
    componentId: "sc-8d29aee6-7"
})`
  display: flex;
  align-items: center;
  gap: ${({ theme })=>theme.margin.extrasmall};
`;
const NavButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "TourStep.styles__NavButton",
    componentId: "sc-8d29aee6-8"
})`
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  border: none;
  border-radius: ${({ theme })=>theme.borderRadius.input};
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition:
    background 0.2s ease-in-out,
    color 0.2s ease-in-out;

  ${({ $variant, theme })=>{
    switch($variant){
        case 'primary':
            return `
          background: ${theme.palette.default.primary};
          color: ${theme.palette.default.white};
          &:hover { opacity: 0.9; }
        `;
        case 'secondary':
            return `
          background: ${theme.palette.default.greyLight};
          color: ${theme.palette.default.black};
          &:hover { background: ${theme.palette.default.grey}; }
        `;
        case 'skip':
            return `
          background: transparent;
          color: ${theme.palette.default.greyDark};
          padding: 0.5rem 0.5rem;
          &:hover { color: ${theme.palette.default.black}; }
        `;
    }
}}

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourStep",
    ()=>TourStep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourTooltip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourTooltip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourTooltip$2f$TourTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourTooltip/TourTooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourBadge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourBadge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourBadge$2f$TourBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourBadge/TourBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourProgress$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourProgress/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourProgress$2f$TourProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TourProgress/TourProgress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const CloseIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
        lineNumber: 22,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = CloseIcon;
const TourStep = ({ step, current, total, title, content, onNext, onPrev, onSkip, onClose, onDotClick, isFirst, isLast, targetRect, dataTestId = 'tour-step', className })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourStep.useCallback[handleKeyDown]": (e)=>{
            switch(e.key){
                case 'ArrowRight':
                case 'Enter':
                    e.preventDefault();
                    if (isLast) {
                        onClose();
                    } else {
                        onNext();
                    }
                    break;
                case 'ArrowLeft':
                    e.preventDefault();
                    if (!isFirst) {
                        onPrev();
                    }
                    break;
                case 'Escape':
                    e.preventDefault();
                    onClose();
                    break;
            }
        }
    }["TourStep.useCallback[handleKeyDown]"], [
        isFirst,
        isLast,
        onNext,
        onPrev,
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TourStep.useEffect": ()=>{
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "TourStep.useEffect": ()=>document.removeEventListener('keydown', handleKeyDown)
            })["TourStep.useEffect"];
        }
    }["TourStep.useEffect"], [
        handleKeyDown
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourTooltip$2f$TourTooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourTooltip"], {
        targetRect: targetRect,
        position: step.position || 'bottom',
        isOpen: true,
        dataTestId: `${dataTestId}-tooltip`,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepContainer"], {
            "data-testid": dataTestId,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepHeader"], {
                    "data-testid": `${dataTestId}-header`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourBadge$2f$TourBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourBadge"], {
                            current: current + 1,
                            total: total,
                            dataTestId: `${dataTestId}-badge`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseButton"], {
                            onClick: onClose,
                            "aria-label": tr('common.tour.close', {
                                defaultValue: 'Close tour'
                            }),
                            "data-testid": `${dataTestId}-close`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CloseIcon, {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepTitle"], {
                    "data-testid": `${dataTestId}-title`,
                    children: title
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StepContent"], {
                    "data-testid": `${dataTestId}-content`,
                    children: content
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TourProgress$2f$TourProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourProgress"], {
                    current: current,
                    total: total,
                    onDotClick: onDotClick,
                    showDots: total <= 12,
                    showBar: true,
                    dataTestId: `${dataTestId}-progress`
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationContainer"], {
                    "data-testid": `${dataTestId}-navigation`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationLeft"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavButton"], {
                                $variant: "skip",
                                onClick: onSkip,
                                "data-testid": `${dataTestId}-skip`,
                                children: tr('common.tour.skip', {
                                    defaultValue: 'Skip'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationRight"], {
                            children: [
                                !isFirst && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavButton"], {
                                    $variant: "secondary",
                                    onClick: onPrev,
                                    "data-testid": `${dataTestId}-prev`,
                                    children: tr('common.back', {
                                        defaultValue: 'Back'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                                    lineNumber: 120,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavButton"], {
                                    $variant: "primary",
                                    onClick: isLast ? onClose : onNext,
                                    "data-testid": `${dataTestId}-next`,
                                    children: isLast ? tr('common.tour.done', {
                                        defaultValue: 'Done'
                                    }) : tr('common.tour.next', {
                                        defaultValue: 'Next'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                            lineNumber: 118,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
            lineNumber: 86,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TourStep, "ILvHjY6XXRPp9AEcNbJGGPNJsGE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c1 = TourStep;
var _c, _c1;
__turbopack_context__.k.register(_c, "CloseIcon");
__turbopack_context__.k.register(_c1, "TourStep");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/TourStep/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$TourStep$2f$TourStep$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TourStep/TourStep.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Molecule/TourOverlay/index.ts [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/TourOverlay/index.ts [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_app_components_0jy2obx6t1y8d._.js.map