(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "TooltipWrapper",
    ()=>TooltipWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)");
'use client';
;
;
;
const sizeMap = {
    small: {
        outer: 28,
        inner: 24,
        inset: 2,
        iconScale: 0.55
    },
    medium: {
        outer: 36,
        inner: 32,
        inset: 2,
        iconScale: 0.8
    },
    large: {
        outer: 48,
        inner: 44,
        inset: 2,
        iconScale: 1
    }
};
/**
 * #1742: Kontur der Wabe mit abgerundeten Ecken wie im Logo. Der innere
 * Ausschnitt rundet konzentrisch zum äußeren (concentricHexCornerRadius).
 */ const outerClipPath = (size)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(sizeMap[size].outer);
const innerClipPath = (size)=>{
    const { outer, inner, inset } = sizeMap[size];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(inner, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concentricHexCornerRadius"])(outer, inset));
};
/**
 * #392: Schrift- und Symbolfarbe auf der gefüllten Wabe (Hover/Aktiv). Feste
 * Markenfarbe aus der color-Prop → Kontrast per Farb-Helfer (Navy → weiß,
 * Gelb → dunkel), in beiden Themes gleich. Ohne color-Prop füllt
 * default.primary, das im Dark Theme hell ist → dort der invertierte Wert
 * default.white (hell: weiß auf Navy, dunkel: dunkel auf Hellblau).
 */ const fillTextColor = (theme, color)=>{
    if (!color) return theme.palette.default.white;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidHexColor"])(color) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContrastTextColor"])(color) : theme.palette.text.onAccent;
};
const TooltipWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "IconButton.styles__TooltipWrapper",
    componentId: "sc-9416e081-0"
})`
  position: relative;
  display: inline-flex;
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "IconButton.styles__Root",
    componentId: "sc-9416e081-1"
})`
  width: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
  height: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
  min-width: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
  min-height: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  background: none;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.15s ease-in-out;

  /* All children get position and z-index */
  & > * {
    position: relative;
    z-index: 1;
  }

  /* SVG icons - use block display and scale by size */
  & > svg {
    flex-shrink: 0;
    display: block;
    transform: scale(${(props)=>sizeMap[props.$size || 'medium'].iconScale});
  }

  /* Icon components (non-SVG) and text spans, but not tooltip */
  & > :not(svg):not([data-testid='tooltip-root']) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Icon color: black by default */
  path,
  rect,
  line,
  circle,
  polyline,
  polygon {
    stroke: ${(props)=>props.theme.palette.default.black};
  }

  /* Hexagon outline - outer shape */
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
    height: ${(props)=>sizeMap[props.$size || 'medium'].outer}px;
    clip-path: ${(props)=>outerClipPath(props.$size || 'medium')};
    background: ${(props)=>props.color || props.theme.palette.default.greyDark};
    opacity: 0.6;
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Hexagon outline - inner cutout (creates outline effect) */
  &::after {
    position: absolute;
    content: '';
    top: ${(props)=>sizeMap[props.$size || 'medium'].inset}px;
    left: ${(props)=>sizeMap[props.$size || 'medium'].inset}px;
    width: ${(props)=>sizeMap[props.$size || 'medium'].inner}px;
    height: ${(props)=>sizeMap[props.$size || 'medium'].inner}px;
    clip-path: ${(props)=>innerClipPath(props.$size || 'medium')};
    background: ${(props)=>props.theme.palette.default.white};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  /* Text label for children, exclude tooltip */
  & > span:not([data-testid='tooltip-root']) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Apply the same hover styles for active state — Farben siehe fillTextColor */
  ${(props)=>props.$isActive && `
    color: ${fillTextColor(props.theme, props.color)};
    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${fillTextColor(props.theme, props.color)};
    }
    &::before {
      opacity: 1;
      background: ${props.theme.palette.default.white};
    }
    &::after {
      background: ${props.color || props.theme.palette.default.primary};
      opacity: 1;
    }
  `}

  /* #1863: Gesperrter Knopf (natives disabled) sieht gesperrt aus — Sechseck
     und Icon gedaempft, kein Zeiger, kein Hover-Effekt. Der Tooltip am
     TooltipWrapper bleibt und nennt den Grund. */
  &:disabled {
    cursor: not-allowed;
    opacity: 0.35;
    pointer-events: none;
  }

  &:hover {
    color: ${(props)=>fillTextColor(props.theme, props.color)};
    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${(props)=>fillTextColor(props.theme, props.color)};
    }
    &::before {
      opacity: 1;
      background: ${(props)=>props.theme.palette.default.white};
    }
    &::after {
      background: ${(props)=>props.color || props.theme.palette.default.primary};
      opacity: 1;
    }
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconAlign",
    ()=>IconAlign,
    "IconButton",
    ()=>IconButton,
    "IconButtonColors",
    ()=>IconButtonColors
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const IconButtonColors = {
    primary: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY,
    secondary: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
    white: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE,
    greyLight: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_LIGHT,
    grey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY,
    greyDark: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_DARK,
    black: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].BLACK,
    error: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].ERROR,
    success: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SUCCESS,
    info: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].INFO,
    warning: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WARNING,
    linkPrimary: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].LINK_PRIMARY,
    buttonPrimaryBg: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].BUTTON_PRIMARY_BG,
    buttonSecondaryBg: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].BUTTON_SECONDARY_BG,
    teal: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].TEAL,
    orange: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].ORANGE,
    coral: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].CORAL,
    purple: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PURPLE,
    microsoft: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].MICROSOFT
};
var IconAlign = /*#__PURE__*/ function(IconAlign) {
    IconAlign["LEFT"] = "left";
    IconAlign["RIGHT"] = "right";
    return IconAlign;
}({});
const IconButton = (props)=>{
    _s();
    const { icon, onClick, tooltip, tooltipPosition = 'bottom', ariaLabel, color, style, isDisabled, isActive, forceTooltip, iconAlign, children, dataTestId, dataState, size } = props;
    // Use a client-side only state for the title attribute
    // to prevent hydration mismatches between server and client
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Only enable the tooltip after client-side hydration is complete
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "IconButton.useEffect": ()=>{
            setMounted(true);
        }
    }["IconButton.useEffect"], []);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipWrapper"], {
        ref: wrapperRef,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                type: "button",
                onClick: onClick,
                className: props['className'],
                "data-testid": dataTestId || 'icon-button-root',
                "data-state": dataState,
                "data-shape": "rounded-hex",
                "data-disabled": isDisabled ? 'true' : undefined,
                "aria-label": mounted ? ariaLabel || tooltip : '',
                color: color,
                style: style,
                $isDisabled: isDisabled,
                $isActive: isActive,
                $hasChildren: !!children,
                $size: size,
                disabled: isDisabled,
                children: [
                    iconAlign === "left" && icon,
                    children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx",
                        lineNumber: 116,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0)),
                    (!iconAlign || iconAlign === "right") && icon
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            mounted && tooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                content: tooltip,
                isVisible: forceTooltip || isHovered && !isActive,
                position: tooltipPosition,
                backgroundColor: color,
                anchorRef: wrapperRef
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(IconButton, "sJCReq8U3BqkUPomRaQfgJZp9jY=");
_c = IconButton;
;
var _c;
__turbopack_context__.k.register(_c, "IconButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/IconButton/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Code",
    ()=>Code,
    "Empty",
    ()=>Empty,
    "List",
    ()=>List,
    "Option",
    ()=>Option,
    "OptionCode",
    ()=>OptionCode,
    "Panel",
    ()=>Panel,
    "Root",
    ()=>Root,
    "SearchWrap",
    ()=>SearchWrap,
    "Trigger",
    ()=>Trigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LanguageSwitcher.styles__Root",
    componentId: "sc-15df00de-0"
})`
  position: relative;
  display: inline-flex;
`;
const Trigger = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LanguageSwitcher.styles__Trigger",
    componentId: "sc-15df00de-1"
})`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 8px;
  border: none;
  border-radius: 18px;
  background: ${({ $open, theme })=>$open ? theme.palette.surface.subtle : 'transparent'};
  /* #1497: im durchsichtigen Header über blauer Folie hell (--header-fg); offen/überfahren auf hellem Grund */
  color: ${({ $open, theme })=>$open ? theme.palette.default.primary : `var(--header-fg, ${theme.palette.text.secondary})`};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme })=>theme.palette.surface.subtle};
    color: ${({ theme })=>theme.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 2px;
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
    transform: rotate(${({ $open })=>$open ? '180deg' : '0deg'});
  }
`;
const Code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "LanguageSwitcher.styles__Code",
    componentId: "sc-15df00de-2"
})`
  text-transform: uppercase;
  line-height: 1;
`;
const Panel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LanguageSwitcher.styles__Panel",
    componentId: "sc-15df00de-3"
})`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].dropdown};
  width: 280px;
  max-width: calc(100vw - 32px);
  display: flex;
  flex-direction: column;
  padding: 8px;
  background: ${({ theme })=>theme.palette.default.white};
  border: 1px solid ${({ theme })=>theme.palette.border.default};
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.14);

  /* #1561: der Link-Modus hält das Feld geschlossen im DOM — display:flex schlüge sonst hidden */
  &[hidden] {
    display: none;
  }
`;
const SearchWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LanguageSwitcher.styles__SearchWrap",
    componentId: "sc-15df00de-4"
})`
  padding: 0 4px 8px;
  border-bottom: 1px solid ${({ theme })=>theme.palette.border.default};
  margin-bottom: 4px;
`;
const List = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "LanguageSwitcher.styles__List",
    componentId: "sc-15df00de-5"
})`
  max-height: min(50vh, 360px);
  overflow-y: auto;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Empty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "LanguageSwitcher.styles__Empty",
    componentId: "sc-15df00de-6"
})`
  padding: 12px;
  color: ${({ theme })=>theme.palette.text.muted};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 13px;
  text-align: center;
`;
const Option = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "LanguageSwitcher.styles__Option",
    componentId: "sc-15df00de-7"
})`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 9px 12px;
  border: none;
  border-radius: 6px;
  background: ${({ $active, theme })=>$active ? theme.palette.surface.subtle : 'transparent'};
  color: ${({ theme })=>theme.palette.text.primary};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 13px;
  font-weight: ${({ $active })=>$active ? 600 : 500};
  text-align: left;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s;

  /* #1561: im Link-Modus ein <a> — gegen die globalen a-Regeln (Farbe, Unterstrich) */
  && {
    color: ${({ theme })=>theme.palette.text.primary};
    text-decoration: none;
  }

  &:hover,
  &:focus-visible {
    background: ${({ theme })=>theme.palette.surface.subtle};
    outline: none;
  }
`;
const OptionCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "LanguageSwitcher.styles__OptionCode",
    componentId: "sc-15df00de-8"
})`
  margin-left: auto;
  color: ${({ theme })=>theme.palette.text.muted};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LINK_SEARCH_FROM",
    ()=>LINK_SEARCH_FROM,
    "LanguageSwitcher",
    ()=>LanguageSwitcher,
    "default",
    ()=>__TURBOPACK__default__export__,
    "matchesLanguage",
    ()=>matchesLanguage,
    "orderLanguages",
    ()=>orderLanguages,
    "shortCode",
    ()=>shortCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Flag$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Flag/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Flag$2f$Flag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Flag/Flag.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$IconChevronDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconChevronDown/IconChevronDown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/settings.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.styles.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
/**
 * #1478: Das Suchfeld (FilterField → EditableField mit allen Eingabetypen,
 * Markdown-Editor, Datei-Upload, …) erst laden, wenn das Menü aufgeht — der
 * Sprachwechsel steht im Kopf jeder öffentlichen Seite.
 */ const FilterField = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Molecule/FilterField/index.ts [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.FilterField), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Molecule/FilterField/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = FilterField;
const LINK_SEARCH_FROM = 9;
/** Wie oft (Frames) auf das nachgeladene Suchfeld gewartet wird, um es zu fokussieren. */ const FOKUS_VERSUCHE = 120;
const matchesLanguage = (locale, query)=>{
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const info = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][locale];
    return locale.toLowerCase().includes(q) || (info?.native ?? '').toLowerCase().includes(q) || (info?.english ?? '').toLowerCase().includes(q);
};
const shortCode = (locale)=>locale.split('-')[0].toUpperCase();
const PINNED = [
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackLng"],
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackLngForMissing"],
    'en-US'
];
const orderLanguages = (locales)=>{
    const pinned = PINNED.filter((locale)=>locales.includes(locale));
    const rest = locales.filter((locale)=>!pinned.includes(locale)).sort((a, b)=>(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][a]?.english ?? a).localeCompare(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][b]?.english ?? b));
    return [
        ...pinned,
        ...rest
    ];
};
const LanguageSwitcher = ({ value, onChange, options = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["languages"], ariaLabel = 'Sprache wählen', searchPlaceholder = 'Sprache suchen…', noResultsText = 'Keine Sprache gefunden', dataTestId = 'language-switcher', className, links })=>{
    _s();
    const linkModus = links !== undefined && links.length > 0;
    // #2090: Suche im Link-Modus erst ab LINK_SEARCH_FROM Sprachen (mehr als 8)
    const linkSuche = linkModus && (links ?? []).length >= LINK_SEARCH_FROM;
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const triggerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const ordered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageSwitcher.useMemo[ordered]": ()=>linkModus ? (links ?? []).map({
                "LanguageSwitcher.useMemo[ordered]": (link)=>link.language
            }["LanguageSwitcher.useMemo[ordered]"]) : orderLanguages(options)
    }["LanguageSwitcher.useMemo[ordered]"], [
        linkModus,
        links,
        options
    ]);
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LanguageSwitcher.useMemo[visible]": ()=>ordered.filter({
                "LanguageSwitcher.useMemo[visible]": (locale)=>matchesLanguage(locale, query)
            }["LanguageSwitcher.useMemo[visible]"])
    }["LanguageSwitcher.useMemo[visible]"], [
        ordered,
        query
    ]);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "LanguageSwitcher.useCallback[close]": (refocus = false)=>{
            setOpen(false);
            setQuery('');
            if (refocus) triggerRef.current?.focus();
        }
    }["LanguageSwitcher.useCallback[close]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSwitcher.useEffect": ()=>{
            if (!open) return;
            const onPointerDown = {
                "LanguageSwitcher.useEffect.onPointerDown": (event)=>{
                    if (!rootRef.current?.contains(event.target)) close();
                }
            }["LanguageSwitcher.useEffect.onPointerDown"];
            document.addEventListener('mousedown', onPointerDown);
            document.addEventListener('touchstart', onPointerDown);
            return ({
                "LanguageSwitcher.useEffect": ()=>{
                    document.removeEventListener('mousedown', onPointerDown);
                    document.removeEventListener('touchstart', onPointerDown);
                }
            })["LanguageSwitcher.useEffect"];
        }
    }["LanguageSwitcher.useEffect"], [
        open,
        close
    ]);
    // Beim Öffnen landet der Fokus im Suchfeld
    // (#1478: das Feld wird nachgeladen — bis es da ist, je Frame erneut versuchen)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageSwitcher.useEffect": ()=>{
            if (!open) return undefined;
            let frame = 0;
            let versuche = 0;
            const fokussiere = {
                "LanguageSwitcher.useEffect.fokussiere": ()=>{
                    // #2090: mit Suche (auch im Link-Modus) zuerst ins Suchfeld
                    const input = panelRef.current?.querySelector(linkSuche ? 'input' : 'input, a');
                    if (input) {
                        input.focus();
                        return;
                    }
                    if (versuche++ < FOKUS_VERSUCHE) frame = requestAnimationFrame(fokussiere);
                }
            }["LanguageSwitcher.useEffect.fokussiere"];
            fokussiere();
            return ({
                "LanguageSwitcher.useEffect": ()=>cancelAnimationFrame(frame)
            })["LanguageSwitcher.useEffect"];
        }
    }["LanguageSwitcher.useEffect"], [
        open,
        linkSuche
    ]);
    const moveFocus = (delta)=>{
        // #2090: verborgene Links (kein Treffer der Suche) überspringen
        const items = Array.from(listRef.current?.querySelectorAll('button, a') ?? []).filter((item)=>!item.closest('li')?.hidden);
        if (items.length === 0) return;
        const index = items.findIndex((item)=>item === document.activeElement);
        // Aus dem Suchfeld (index -1) führt ArrowDown auf den ersten, ArrowUp auf den letzten Eintrag
        const next = index === -1 ? delta > 0 ? 0 : items.length - 1 : (index + delta + items.length) % items.length;
        items[next]?.focus();
    };
    const handleKeyDown = (event)=>{
        switch(event.key){
            case 'Escape':
                if (open) {
                    event.preventDefault();
                    close(true);
                }
                break;
            case 'ArrowDown':
                event.preventDefault();
                if (!open) setOpen(true);
                else moveFocus(1);
                break;
            case 'Enter':
                // Enter im Suchfeld wählt den einzigen/ersten Treffer
                if (open && event.target.tagName === 'INPUT' && visible.length > 0) {
                    event.preventDefault();
                    // #2090: im Link-Modus führt der erste Treffer auf seine Adresse
                    const treffer = linkModus ? links?.find((link)=>link.language === visible[0]) : undefined;
                    if (treffer) {
                        if (treffer.language !== value) onChange(treffer.language);
                        window.location.assign(treffer.href);
                        return;
                    }
                    select(visible[0]);
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (open) moveFocus(-1);
                break;
            default:
        }
    };
    const select = (locale)=>{
        if (locale !== value) onChange(locale);
        close(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        "data-testid": dataTestId,
        "data-value": value,
        "data-open": open ? 'true' : 'false',
        "data-mode": linkModus ? 'links' : 'select',
        "data-searchable": !linkModus || linkSuche ? 'true' : 'false',
        onKeyDown: handleKeyDown,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
                ref: triggerRef,
                type: "button",
                $open: open,
                // #1949: sichtbares Kürzel vorn im Namen (WCAG 2.5.3 Label in Name)
                "aria-label": `${shortCode(value)} – ${ariaLabel}`,
                "aria-haspopup": linkModus ? 'true' : 'listbox',
                "aria-expanded": open,
                "aria-controls": open ? listId : undefined,
                "data-testid": `${dataTestId}-trigger`,
                onClick: ()=>setOpen((current)=>!current),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Flag$2f$Flag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flag"], {
                        locale: value,
                        size: "sm",
                        decorative: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Code"], {
                        children: shortCode(value)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$IconChevronDown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconChevronDown"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                lineNumber: 217,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            linkModus && // #1561: immer im DOM (Crawler sehen die Links), geschlossen per `hidden`
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                ref: panelRef,
                "data-testid": `${dataTestId}-panel`,
                hidden: !open,
                children: [
                    linkSuche && open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchWrap"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterField, {
                            name: "language-search",
                            hideLabel: true,
                            value: query,
                            onChange: (next)=>setQuery(typeof next === 'string' ? next : ''),
                            placeholder: searchPlaceholder,
                            dataTestId: `${dataTestId}-search`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                            lineNumber: 239,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 238,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
                        ref: listRef,
                        id: listId,
                        "aria-label": ariaLabel,
                        children: [
                            linkSuche && visible.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                                "data-testid": `${dataTestId}-empty`,
                                children: noResultsText
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                lineNumber: 251,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            (links ?? []).map((link)=>{
                                const active = link.language === value;
                                const info = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][link.language];
                                // #2090: Treffer der Suche; die übrigen bleiben als Link im DOM (Crawler), nur verborgen
                                const sichtbar = !linkSuche || visible.includes(link.language);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    hidden: !sichtbar,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"], {
                                        as: "a",
                                        href: link.href,
                                        hrefLang: link.language.split('-')[0],
                                        lang: link.language,
                                        $active: active,
                                        "aria-current": active ? 'page' : undefined,
                                        "data-testid": `${dataTestId}-option-${link.language}`,
                                        "data-active": active ? 'true' : 'false',
                                        onClick: ()=>{
                                            if (!active) onChange(link.language);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Flag$2f$Flag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flag"], {
                                                locale: link.language,
                                                size: "sm"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 273,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: info?.native ?? link.language
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 274,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionCode"], {
                                                "aria-hidden": "true",
                                                children: shortCode(link.language)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 275,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                        lineNumber: 260,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, link.language, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 249,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !linkModus && open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                ref: panelRef,
                "data-testid": `${dataTestId}-panel`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchWrap"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilterField, {
                            name: "language-search",
                            hideLabel: true,
                            value: query,
                            onChange: (next)=>setQuery(typeof next === 'string' ? next : ''),
                            placeholder: searchPlaceholder,
                            dataTestId: `${dataTestId}-search`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                            lineNumber: 286,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
                        ref: listRef,
                        id: listId,
                        role: "listbox",
                        "aria-label": ariaLabel,
                        children: [
                            visible.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Empty"], {
                                "data-testid": `${dataTestId}-empty`,
                                children: noResultsText
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                lineNumber: 296,
                                columnNumber: 38
                            }, ("TURBOPACK compile-time value", void 0)),
                            visible.map((locale)=>{
                                const active = locale === value;
                                const info = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$settings$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localeInfo"][locale];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    role: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Option"], {
                                        type: "button",
                                        role: "option",
                                        "aria-selected": active,
                                        $active: active,
                                        "data-testid": `${dataTestId}-option-${locale}`,
                                        "data-active": active ? 'true' : 'false',
                                        onClick: ()=>select(locale),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Flag$2f$Flag$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flag"], {
                                                locale: locale,
                                                size: "sm",
                                                decorative: true
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 311,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: info?.native ?? locale
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 312,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionCode"], {
                                                "aria-hidden": "true",
                                                children: locale
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                                lineNumber: 313,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                        lineNumber: 302,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, locale, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                                    lineNumber: 301,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                        lineNumber: 295,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
                lineNumber: 284,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageSwitcher, "ys/XvxPYzdwqMuVGRMGmD1hKEjg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c1 = LanguageSwitcher;
const __TURBOPACK__default__export__ = LanguageSwitcher;
var _c, _c1;
__turbopack_context__.k.register(_c, "FilterField");
__turbopack_context__.k.register(_c1, "LanguageSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LanguageSwitcher$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LanguageSwitcher/LanguageSwitcher.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingContainer",
    ()=>LoadingContainer,
    "LoadingMessage",
    ()=>LoadingMessage,
    "SpinnerWrapper",
    ()=>SpinnerWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const rotate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const LoadingContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoadingSpinner.styles__LoadingContainer",
    componentId: "sc-ec6f4daf-0"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props)=>props.$padding || '2rem'};
  min-height: ${(props)=>props.$fullHeight ? '100%' : 'auto'};
`;
const LoadingMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "LoadingSpinner.styles__LoadingMessage",
    componentId: "sc-ec6f4daf-1"
})`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: ${(props)=>props.theme.palette.default.greyDark};
  text-align: center;
`;
const SpinnerWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LoadingSpinner.styles__SpinnerWrapper",
    componentId: "sc-ec6f4daf-2"
})`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props)=>props.$useLogo && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      animation: ${rotate} 3s ease-in-out infinite;
      animation-delay: 0.5s;
      /* Hardware acceleration for smooth animation */
      will-change: transform;
      transform: translateZ(0);
      backface-visibility: hidden;
      perspective: 1000px;
    `}

  svg {
    width: ${(props)=>{
    switch(props.$size){
        case 'small':
            return '16px';
        case 'large':
            return props.$useLogo ? '100px' : '48px';
        default:
            return '24px';
    }
}};
    height: ${(props)=>{
    switch(props.$size){
        case 'small':
            return '16px';
        case 'large':
            return props.$useLogo ? '112px' : '48px';
        default:
            return '24px';
    }
}};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSpinner",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/IconLoadingSpinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastshipNoText$2f$LogoPlastshipNoText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const LoadingSpinner = ({ message, size = 'medium', inverted = false, padding = '2rem', fullHeight = false, dataTestId = 'loading-spinner', className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingContainer"], {
        $padding: padding,
        $fullHeight: fullHeight,
        className: className,
        "data-testid": dataTestId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpinnerWrapper"], {
                $size: size,
                $useLogo: size === 'large',
                children: size === 'large' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastshipNoText$2f$LogoPlastshipNoText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoPlastshipNoText"], {
                    width: 100,
                    height: 112
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx",
                    lineNumber: 89,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLoadingSpinner"], {
                    inverted: inverted
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx",
                    lineNumber: 91,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingMessage"], {
                "data-testid": `${dataTestId}-message`,
                children: message
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx",
                lineNumber: 94,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LoadingSpinner;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/LoadingSpinner/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChildrenList",
    ()=>ChildrenList,
    "CountBadge",
    ()=>CountBadge,
    "FlyoutContent",
    ()=>FlyoutContent,
    "FlyoutLink",
    ()=>FlyoutLink,
    "FlyoutList",
    ()=>FlyoutList,
    "FlyoutTitle",
    ()=>FlyoutTitle,
    "GroupRoot",
    ()=>GroupRoot,
    "NavLink",
    ()=>NavLink,
    "ParentRow",
    ()=>ParentRow,
    "ToggleButton",
    ()=>ToggleButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$mixins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/mixins.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
/**
 * #1074: Der Nav-Link der Side-Navigation (vorher `StyledLink` in
 * WithSidebar.styles.ts). `$isChild` ist die eingerückte Kind-Variante
 * ohne Icon mit schmalem Farbbalken.
 */ /** Hover-Optik des Nav-Links; auch erzwungen nutzbar (`$forceHover`). */ const navLinkHoverStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  color: ${(props)=>props.$categoryColor || props.theme.palette.default.secondary};
  background-color: ${(props)=>`${props.$categoryColor || props.theme.palette.sidebar.text}20`};

  path,
  rect,
  circle,
  polyline {
    stroke: ${(props)=>props.$categoryColor || props.theme.palette.default.secondary};

    &[fill]:not([fill='none']) {
      fill: ${(props)=>props.$categoryColor || props.theme.palette.default.secondary};
    }
  }
`;
const NavLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "NavGroup.styles__NavLink",
    componentId: "sc-27bb1033-0"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextStyles"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].navigation)}
  margin-bottom: 2px;
  margin-left: 4px;
  margin-right: 4px;
  color: ${(props)=>props.$isActive ? props.$categoryColor || props.theme.palette.default.secondary : props.theme.palette.sidebar.text};
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$mixins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userSelectNone"])()}
  text-decoration: none;
  font-weight: ${(props)=>props.$isActive ? 'bold' : 'normal'};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  min-width: 30px;
  position: relative;
  transition:
    color 0.2s ease-in-out,
    background-color 0.2s ease-in-out;
  /* Kinder ohne Farbstreifen; ihr Text beginnt bündig mit dem Elternlabel:
     Streifen 3 + Innenabstand 8 + Icon 24 = 35px links (Label-Abstand 10px folgt). */
  border-left: ${(props)=>props.$isChild ? '0' : `3px solid ${props.$categoryColor || 'transparent'}`};
  padding: ${(props)=>props.$isChild ? '2px 8px 2px 35px' : '4px 8px'};
  border-radius: ${(props)=>props.$isChild ? '4px' : '0 4px 4px 0'};
  background-color: ${(props)=>props.$isActive ? `${props.$categoryColor}30` : 'transparent'};
  ${(props)=>props.$isChild && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      font-size: 0.9em;
      opacity: ${props.$isActive ? 1 : 0.85};
    `}

  & > svg {
    flex-shrink: 0;
    display: block;
  }

  path,
  rect,
  circle,
  polyline {
    stroke: ${(props)=>props.$isActive ? props.$categoryColor || props.theme.palette.default.secondary : props.theme.palette.sidebar.text};
    transition:
      stroke 0.2s ease-in-out,
      fill 0.2s ease-in-out;

    &[fill]:not([fill='none']) {
      fill: ${(props)=>props.$isActive ? props.$categoryColor || props.theme.palette.default.secondary : props.theme.palette.sidebar.text};
    }
  }

  &:hover {
    ${navLinkHoverStyles}
  }

  /* Hover-Zustand halten, solange das Flyout der Gruppe gehovert ist */
  ${(props)=>props.$forceHover && navLinkHoverStyles}
`;
const GroupRoot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NavGroup.styles__GroupRoot",
    componentId: "sc-27bb1033-1"
})`
  display: flex;
  flex-direction: column;
`;
const ParentRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NavGroup.styles__ParentRow",
    componentId: "sc-27bb1033-2"
})`
  display: flex;
  flex-direction: row;
  align-items: stretch;

  ${NavLink} {
    flex: 1;
    ${(props)=>props.$hasActiveChild && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        background-color: ${props.$categoryColor}18;
      `}
  }
`;
const ToggleButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "NavGroup.styles__ToggleButton",
    componentId: "sc-27bb1033-3"
})`
  appearance: none;
  border: 0;
  background: transparent;
  color: ${({ theme })=>theme.palette.sidebar.text};
  cursor: pointer;
  width: 28px;
  margin: 0 4px 2px 0;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.15s ease;

  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
    transform: rotate(${(props)=>props.$open ? '180deg' : '0deg'});
  }

  path {
    stroke: currentColor;
  }

  &:hover {
    background-color: ${(props)=>`${props.$categoryColor}20`};
    color: ${(props)=>props.$categoryColor};
  }

  @media (prefers-reduced-motion: reduce) {
    svg {
      transition: none;
    }
  }
`;
const ChildrenList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "NavGroup.styles__ChildrenList",
    componentId: "sc-27bb1033-4"
})`
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style: none;
  min-height: 0;
`;
const FlyoutContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NavGroup.styles__FlyoutContent",
    componentId: "sc-27bb1033-5"
})`
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const FlyoutTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "NavGroup.styles__FlyoutTitle",
    componentId: "sc-27bb1033-6"
})`
  color: ${(props)=>props.$categoryColor};
  font-weight: bold;
  text-decoration: none;
  padding: 2px 4px 6px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 4px;

  &:hover {
    text-decoration: underline;
  }
`;
const FlyoutList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "NavGroup.styles__FlyoutList",
    componentId: "sc-27bb1033-7"
})`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const FlyoutLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "NavGroup.styles__FlyoutLink",
    componentId: "sc-27bb1033-8"
})`
  display: block;
  color: ${(props)=>props.$isActive ? props.$categoryColor : props.theme.palette.sidebar.text};
  font-weight: ${(props)=>props.$isActive ? 'bold' : 'normal'};
  text-decoration: none;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }
`;
const CountBadge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "NavGroup.styles__CountBadge",
    componentId: "sc-27bb1033-9"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  margin-left: 6px;
  padding: 0 5px;
  border-radius: 9px;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  vertical-align: middle;
  color: ${({ theme })=>theme.palette.status.info.text};
  background: ${({ theme })=>theme.palette.status.info.bg};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavGroup",
    ()=>NavGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconChevronDown/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/** #1593: Zähler an einer Unterseite — `<testId>-badge` mit `data-count`. */ function ChildBadge({ count, testId }) {
    if (!count || count <= 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CountBadge"], {
        "data-testid": `${testId}-badge`,
        "data-count": count,
        children: count > 99 ? '99+' : count
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = ChildBadge;
const OPEN_DELAY_MS = 120;
const CLOSE_DELAY_MS = 150;
const NavGroup = ({ href, label, icon, categoryColor, isActive, hasActiveChild, isOpen, onToggle, isSidebarOpen, children, testId, slug, toggleLabel, onNavigate })=>{
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const anchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Anker des Flyouts ist die ganze Gruppenzeile (Link + Chevron), nicht der Link:
    // aufgeklappt endet der Link vor dem Chevron, das Flyout läge sonst über
    // Chevron und Sidebar-Rand statt rechts daneben.
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flyoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Solange das Flyout gehovert ist, bleibt der Hauptpunkt im Hover-Zustand.
    const [flyoutHovered, setFlyoutHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [flyoutVisible, setFlyoutVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Das Flyout wird erst beim Hover-/Fokus-Intent gemountet und beim Schließen
    // wieder entfernt: sonst stünden seine Unterpunkt-Links (gleiche Testids wie
    // im Accordion) dauerhaft unsichtbar im DOM.
    const [flyoutMounted, setFlyoutMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [noHover, setNoHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const closeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavGroup.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || typeof window.matchMedia !== 'function') return;
            setNoHover(window.matchMedia('(hover: none)').matches);
        }
    }["NavGroup.useEffect"], []);
    const clearTimers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavGroup.useCallback[clearTimers]": ()=>{
            if (openTimer.current) clearTimeout(openTimer.current);
            if (closeTimer.current) clearTimeout(closeTimer.current);
            openTimer.current = null;
            closeTimer.current = null;
        }
    }["NavGroup.useCallback[clearTimers]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavGroup.useEffect": ()=>clearTimers
    }["NavGroup.useEffect"], [
        clearTimers
    ]);
    // Flyout immer dann, wenn die Kinder nicht inline sichtbar sind: Sidebar
    // eingeklappt ODER Gruppe zugeklappt (Moritz, 14.09.2026).
    const showFlyout = !isSidebarOpen || !isOpen;
    const scheduleOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavGroup.useCallback[scheduleOpen]": ()=>{
            if (!showFlyout) return;
            clearTimers();
            setFlyoutMounted(true);
            openTimer.current = setTimeout({
                "NavGroup.useCallback[scheduleOpen]": ()=>setFlyoutVisible(true)
            }["NavGroup.useCallback[scheduleOpen]"], OPEN_DELAY_MS);
        }
    }["NavGroup.useCallback[scheduleOpen]"], [
        showFlyout,
        clearTimers
    ]);
    const scheduleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavGroup.useCallback[scheduleClose]": ()=>{
            clearTimers();
            closeTimer.current = setTimeout({
                "NavGroup.useCallback[scheduleClose]": ()=>{
                    setFlyoutVisible(false);
                    setFlyoutMounted(false);
                }
            }["NavGroup.useCallback[scheduleClose]"], CLOSE_DELAY_MS);
        }
    }["NavGroup.useCallback[scheduleClose]"], [
        clearTimers
    ]);
    const closeNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NavGroup.useCallback[closeNow]": ()=>{
            clearTimers();
            setFlyoutVisible(false);
            setFlyoutMounted(false);
            setFlyoutHovered(false);
        }
    }["NavGroup.useCallback[closeNow]"], [
        clearTimers
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavGroup.useEffect": ()=>{
            if (!flyoutVisible) return;
            const onKey = {
                "NavGroup.useEffect.onKey": (event)=>{
                    if (event.key === 'Escape') closeNow();
                }
            }["NavGroup.useEffect.onKey"];
            document.addEventListener('keydown', onKey);
            return ({
                "NavGroup.useEffect": ()=>document.removeEventListener('keydown', onKey)
            })["NavGroup.useEffect"];
        }
    }["NavGroup.useEffect"], [
        flyoutVisible,
        closeNow
    ]);
    // Kinder werden inline sichtbar (Sidebar auf + Gruppe auf) → Flyout darf
    // nicht hängen bleiben
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavGroup.useEffect": ()=>{
            if (!showFlyout) closeNow();
        }
    }["NavGroup.useEffect"], [
        showFlyout,
        closeNow
    ]);
    // #1074 Spec §4.3: Klick außerhalb (auch bei hover: none, wo kein Leave
    // feuert) schließt das Flyout.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavGroup.useEffect": ()=>{
            if (!flyoutVisible) return;
            const onOutside = {
                "NavGroup.useEffect.onOutside": (event)=>{
                    const target = event.target;
                    if (rootRef.current?.contains(target)) return;
                    if (flyoutRef.current?.contains(target)) return;
                    closeNow();
                }
            }["NavGroup.useEffect.onOutside"];
            document.addEventListener('mousedown', onOutside);
            document.addEventListener('touchstart', onOutside);
            return ({
                "NavGroup.useEffect": ()=>{
                    document.removeEventListener('mousedown', onOutside);
                    document.removeEventListener('touchstart', onOutside);
                }
            })["NavGroup.useEffect"];
        }
    }["NavGroup.useEffect"], [
        flyoutVisible,
        closeNow
    ]);
    const handleToggle = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        onToggle();
    };
    const handleParentClick = (event)=>{
        if (!isSidebarOpen && noHover && !flyoutVisible) {
            event.preventDefault();
            setFlyoutMounted(true);
            setFlyoutVisible(true);
            return;
        }
        closeNow();
        onNavigate?.();
    };
    const handleChildClick = ()=>{
        closeNow();
        onNavigate?.();
    };
    const childrenId = `nav-group-children-${slug}`;
    // Eigene Konstante statt inline im `content={…}` des Tooltips: der
    // #507-Wächter (tests/components/testid-schlucker) liest jedes data-testid
    // innerhalb der Tag-Spanne als Attribut des Tooltips selbst.
    const flyoutContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyoutContent"], {
        ref: flyoutRef,
        role: "group",
        "aria-label": label,
        onFocus: clearTimers,
        onBlur: scheduleClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyoutTitle"], {
                href: href,
                $categoryColor: categoryColor,
                "data-testid": `nav-flyout-title-${slug}`,
                onClick: handleChildClick,
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyoutList"], {
                children: children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyoutLink"], {
                            href: child.href,
                            $isActive: child.isActive,
                            $categoryColor: categoryColor,
                            "data-testid": child.testId,
                            onClick: handleChildClick,
                            children: [
                                child.label,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChildBadge, {
                                    count: child.badge,
                                    testId: child.testId
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                            lineNumber: 222,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, child.href, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
        lineNumber: 204,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GroupRoot"], {
        ref: rootRef,
        "data-testid": `nav-group-${slug}`,
        "data-open": isSidebarOpen && isOpen ? 'true' : 'false',
        "data-active-child": hasActiveChild ? 'true' : 'false',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ParentRow"], {
                $hasActiveChild: hasActiveChild,
                $categoryColor: categoryColor,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                        ref: anchorRef,
                        $forceHover: flyoutHovered,
                        href: href,
                        $isActive: isActive,
                        $categoryColor: categoryColor,
                        "data-testid": testId,
                        "data-active": isActive ? 'true' : 'false',
                        onClick: handleParentClick,
                        onMouseEnter: scheduleOpen,
                        onMouseLeave: scheduleClose,
                        onFocus: scheduleOpen,
                        onBlur: scheduleClose,
                        children: [
                            icon,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                suppressHydrationWarning: true,
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    isSidebarOpen && // Übersetzung (toggleLabel) lädt clientseitig nach; suppressHydrationWarning
                    // hält das serverseitig gerenderte aria-label (wie bei den Nav-Labels) — sonst
                    // schlägt die Hydration wegen "nav.toggleGroup" vs. übersetztem Text fehl.
                    // Das Flyout (Tooltip-Portal, Zeilen 258-270) rendert erst nach `mounted`
                    // (useEffect) und braucht daher keine eigene suppressHydrationWarning.
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
                        type: "button",
                        $open: isOpen,
                        $categoryColor: categoryColor,
                        "aria-expanded": isOpen,
                        "aria-controls": childrenId,
                        "aria-label": toggleLabel,
                        "data-testid": `nav-group-toggle-${slug}`,
                        onClick: handleToggle,
                        suppressHydrationWarning: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                            lineNumber: 280,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                        lineNumber: 269,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isSidebarOpen && isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChildrenList"], {
                id: childrenId,
                "aria-label": label,
                children: children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                            href: child.href,
                            $isActive: child.isActive,
                            $categoryColor: categoryColor,
                            $isChild: true,
                            "data-testid": child.testId,
                            "data-active": child.isActive ? 'true' : 'false',
                            onClick: handleChildClick,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    suppressHydrationWarning: true,
                                    children: child.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                                    lineNumber: 298,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChildBadge, {
                                    count: child.badge,
                                    testId: child.testId
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                                    lineNumber: 299,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                            lineNumber: 289,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, child.href, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                        lineNumber: 288,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                lineNumber: 286,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            showFlyout && flyoutMounted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                isVisible: flyoutVisible,
                position: "right",
                align: "start",
                interactive: true,
                anchorRef: rootRef,
                backgroundColor: theme.palette.sidebar.flyout,
                textColor: theme.palette.sidebar.text,
                dataTestId: `nav-flyout-${slug}`,
                onMouseEnter: ()=>{
                    clearTimers();
                    setFlyoutHovered(true);
                },
                onMouseLeave: ()=>{
                    setFlyoutHovered(false);
                    scheduleClose();
                },
                content: flyoutContent
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
                lineNumber: 307,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx",
        lineNumber: 239,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NavGroup, "KsRp1a/V/hqrlaVozqgi6Vp1bMg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c1 = NavGroup;
var _c, _c1;
__turbopack_context__.k.register(_c, "ChildBadge");
__turbopack_context__.k.register(_c1, "NavGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/NavGroup/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NavGroup$2f$NavGroup$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NavGroup/NavGroup.styles.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Flyout",
    ()=>Flyout,
    "FlyoutItem",
    ()=>FlyoutItem,
    "FlyoutLink",
    ()=>FlyoutLink,
    "FlyoutList",
    ()=>FlyoutList,
    "Item",
    ()=>Item,
    "ItemLink",
    ()=>ItemLink,
    "List",
    ()=>List,
    "Root",
    ()=>Root,
    "Row",
    ()=>Row,
    "Toggle",
    ()=>Toggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/site.ts [app-client] (ecmascript)");
'use client';
;
;
;
/*
 * #1211: wie das Hauptmenü auf plastship.com, gemessen an den berechneten
 * Stilen der Quelle (Tailwind-Vorbild jeweils dabei, Farben in
 * `theme.palette.site`: text = grey-500, tint = blue-50, border = blue-100).
 *
 * `bar`: waagerechte Liste im Header, Kinder als Flyout unter dem Eintrag.
 * `stacked`: mittige Liste im mobilen Gästemenü, Kinder klappen darunter auf
 * einem Band in blue-50 über die volle Breite auf.
 */ /** Die globalen Regeln a:hover und [data-theme='dark'] a wiegen mehr als eine Klasse */ const linkfarbe = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  &&,
  &&:hover {
    color: ${({ theme })=>theme.palette.site.text};
  }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "PublicNav.styles__Root",
    componentId: "sc-e3587ca3-0"
})`
  /* globals.css gibt jedem nav den Seitengrund — über dem Hero muss er durchsichtig sein */
  background: transparent;
  ${({ $variant })=>$variant === 'bar' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      display: flex;
      align-items: center;
    `}
`;
const listReset = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  margin: 0;
  padding: 0;
  list-style: none;
`;
const List = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "PublicNav.styles__List",
    componentId: "sc-e3587ca3-1"
})`
  ${listReset}
  ${({ $variant })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          display: flex;
          align-items: center;
          gap: 8px;

          ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
            gap: 2px;
          }
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          display: flex;
          flex-direction: column;
        `}
`;
const Item = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "PublicNav.styles__Item",
    componentId: "sc-e3587ca3-2"
})`
  position: relative;
  ${({ $variant, theme })=>$variant === 'stacked' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      margin: 0 24px;
      padding: 8px 0;

      /* nicht "& + &": das setzt styled-components auf die Komponentenklasse um und träfe auch die andere Variante */
      &:not(:first-child) {
        border-top: 1px solid ${theme.palette.site.tint};
      }
    `}
`;
const Row = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PublicNav.styles__Row",
    componentId: "sc-e3587ca3-3"
})`
  display: flex;
  gap: 1px;
  ${({ $variant })=>$variant === 'stacked' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      position: relative;
      display: block;
    `}
`;
const zeile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  text-decoration: none;
  transition: background-color 150ms ease;
`;
const ItemLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "PublicNav.styles__ItemLink",
    componentId: "sc-e3587ca3-4"
})`
  ${zeile}
  ${linkfarbe}
  /* #1497: oberste Ebene im Header folgt --header-fg (helle Schrift über blauer
     Folie); überfahren/offen liegt sie auf dem hellen Tint und nimmt die Themefarbe */
  ${({ $variant, theme })=>$variant === 'bar' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      && {
        color: var(--header-fg, ${theme.palette.site.text});
      }
      ${Item}:hover &&,
      ${Item}[data-open='true'] && {
        color: ${theme.palette.site.text};
      }
    `}
  display: flex;
  align-items: center;
  ${({ $variant, $withToggle, theme })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: ${$withToggle ? '12px 8px 12px 12px' : '12px'};
          border-radius: ${$withToggle ? '12px 0 0 12px' : '12px'};
          white-space: nowrap;

          ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
            padding: ${$withToggle ? '12px 4px 12px 8px' : '12px 8px'};
          }

          ${Item}:hover &,
          ${Item}[data-open='true'] & {
            background: ${theme.palette.site.tint};
          }
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          justify-content: center;
          padding: 16px 48px;
          border-radius: 12px;
          text-align: center;

          &:hover,
          &:focus-visible {
            background: ${theme.palette.site.border};
          }
        `}
`;
const Toggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PublicNav.styles__Toggle",
    componentId: "sc-e3587ca3-5"
})`
  display: grid;
  place-items: center;
  border: 0;
  background: transparent;
  color: ${({ theme, $variant })=>$variant === 'bar' ? `var(--header-fg, ${theme.palette.site.heading})` : theme.palette.site.heading};
  cursor: pointer;
  transition: background-color 150ms ease;

  svg {
    display: block;
    transition: transform 150ms ease;
    transform: rotate(${({ $open })=>$open ? '-180deg' : '0deg'});
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.site.blue};
    outline-offset: -2px;
  }

  ${({ $variant, theme })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          /* p-3 pl-2 rounded-r-xl, Pfeil 12 × 7 */
          padding: 12px 12px 12px 8px;
          border-radius: 0 12px 12px 0;

          ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guestNavCompact"]} {
            padding: 12px 8px 12px 4px;
          }

          svg {
            width: 14px;
            height: 14px;
          }

          ${Item}:hover &,
          ${Item}[data-open='true'] & {
            background: ${theme.palette.site.tint};
            color: ${theme.palette.site.heading};
          }
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          /* absolute right-0 top-0 p-4 rounded-xl, Pfeil 16 × 16 */
          position: absolute;
          top: 0;
          right: 0;
          padding: 16px;
          border-radius: 12px;

          svg {
            width: 18px;
            height: 18px;
          }

          &:hover,
          &:focus-visible,
          &[aria-expanded='true'] {
            background: ${theme.palette.site.tint};
          }
        `}
`;
const Flyout = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PublicNav.styles__Flyout",
    componentId: "sc-e3587ca3-6"
})`
  ${({ $variant, $open })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 210;
          min-width: 100%;
          width: max-content;
          max-width: 300px;
          padding-top: 8px;
          visibility: ${$open ? 'visible' : 'hidden'};
          opacity: ${$open ? 1 : 0};
          transform: translateY(${$open ? '0' : '-8px'});
          transition:
            opacity 150ms ease,
            transform 150ms ease,
            visibility 150ms;
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          display: ${$open ? 'block' : 'none'};
          padding-top: 8px;
        `}
`;
const FlyoutList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "PublicNav.styles__FlyoutList",
    componentId: "sc-e3587ca3-7"
})`
  ${listReset}
  ${({ $variant, theme })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: 16px;
          border: 1px solid ${theme.palette.site.tint};
          border-radius: 12px;
          background: ${theme.palette.site.card};
          box-shadow: ${theme.palette.site.shadow};
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 0 -24px;
          padding: 16px 24px;
          background: ${theme.palette.site.tint};
        `}
`;
const FlyoutItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "PublicNav.styles__FlyoutItem",
    componentId: "sc-e3587ca3-8"
})`
  ${({ $variant, theme })=>$variant === 'bar' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      padding: 8px 0;

      &:not(:first-child) {
        border-top: 1px solid ${theme.palette.site.tint};
      }
    `}
`;
const FlyoutLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "PublicNav.styles__FlyoutLink",
    componentId: "sc-e3587ca3-9"
})`
  ${zeile}
  ${linkfarbe}
  display: flex;
  border-radius: 12px;
  ${({ $variant })=>$variant === 'bar' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          padding: 8px 16px;
          line-height: 24px;
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          justify-content: center;
          padding: 16px 0;
          text-align: center;
        `}

  &:hover,
  &:focus-visible {
    background: ${({ theme })=>theme.palette.site.border};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CmsPublicNav",
    ()=>CmsPublicNav,
    "PublicNav",
    ()=>PublicNav,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconChevronDown/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useCmsNavigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$headerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/headerNavigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsContentLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/CmsContentLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.styles.ts [app-client] (ecmascript)");
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
const PublicNav = ({ items, locale, variant = 'bar', ariaLabel, toggleLabel = 'Unterseiten', source, dataTestId = 'public-nav', className })=>{
    _s();
    const [offen, setOffen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const bar = variant === 'bar';
    // Kopfleiste: höchstens ein Flyout; gestapelt: jeder Eintrag für sich
    const schalte = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PublicNav.useCallback[schalte]": (i)=>setOffen({
                "PublicNav.useCallback[schalte]": (prev)=>prev.includes(i) ? prev.filter({
                        "PublicNav.useCallback[schalte]": (x)=>x !== i
                    }["PublicNav.useCallback[schalte]"]) : bar ? [
                        i
                    ] : [
                        ...prev,
                        i
                    ]
            }["PublicNav.useCallback[schalte]"])
    }["PublicNav.useCallback[schalte]"], [
        bar
    ]);
    const schliesse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PublicNav.useCallback[schliesse]": (i)=>setOffen({
                "PublicNav.useCallback[schliesse]": (prev)=>prev.filter({
                        "PublicNav.useCallback[schliesse]": (x)=>x !== i
                    }["PublicNav.useCallback[schliesse]"])
            }["PublicNav.useCallback[schliesse]"])
    }["PublicNav.useCallback[schliesse]"], []);
    if (items.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        $variant: variant,
        "aria-label": ariaLabel,
        "data-testid": dataTestId,
        "data-variant": variant,
        "data-count": items.length,
        "data-source": source,
        onKeyDown: (e)=>{
            if (e.key === 'Escape') setOffen([]);
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
            $variant: variant,
            children: items.map((item, i)=>{
                const kinder = item.children ?? [];
                const hatKinder = kinder.length > 0;
                const istOffen = offen.includes(i);
                const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(item.label, locale);
                const flyoutId = `${dataTestId}-flyout-${i}`;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
                    $variant: variant,
                    $open: istOffen,
                    "data-testid": `${dataTestId}-item-${i}`,
                    "data-href": item.href,
                    "data-children": kinder.length,
                    "data-open": hatKinder ? istOffen ? 'true' : 'false' : undefined,
                    // Nur die Maus öffnet beim Überfahren — ein Tipp auf dem Tablet
                    // löst pointerenter und click aus und schlösse sofort wieder.
                    onPointerEnter: bar && hatKinder ? (e)=>{
                        if (e.pointerType === 'mouse') setOffen([
                            i
                        ]);
                    } : undefined,
                    onPointerLeave: bar && hatKinder ? (e)=>{
                        if (e.pointerType === 'mouse') schliesse(i);
                    } : undefined,
                    onBlur: bar && hatKinder ? (e)=>{
                        if (!e.currentTarget.contains(e.relatedTarget)) schliesse(i);
                    } : undefined,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                            $variant: variant,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemLink"], {
                                    href: item.href,
                                    $variant: variant,
                                    $withToggle: hatKinder,
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                hatKinder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toggle"], {
                                    type: "button",
                                    $variant: variant,
                                    $open: istOffen,
                                    "aria-expanded": istOffen,
                                    "aria-controls": flyoutId,
                                    "aria-label": `${toggleLabel}: ${label}`,
                                    "data-testid": `${dataTestId}-item-${i}-toggle`,
                                    onClick: ()=>schalte(i),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconChevronDown$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                        lineNumber: 143,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                    lineNumber: 133,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                            lineNumber: 128,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        hatKinder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flyout"], {
                            id: flyoutId,
                            $variant: variant,
                            $open: istOffen,
                            "data-testid": `${dataTestId}-item-${i}-children`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyoutList"], {
                                $variant: variant,
                                children: kinder.map((kind, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyoutItem"], {
                                        $variant: variant,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FlyoutLink"], {
                                            href: kind.href,
                                            $variant: variant,
                                            "data-testid": `${dataTestId}-item-${i}-child-${j}`,
                                            // Kopfleiste: Flyout weg, bevor die nächste Seite kommt
                                            onClick: bar ? ()=>setOffen([]) : undefined,
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(kind.label, locale)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                            lineNumber: 157,
                                            columnNumber: 25
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, `${kind.href}-${j}`, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                        lineNumber: 156,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                                lineNumber: 154,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                            lineNumber: 148,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, `${item.href}-${i}`, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
                    lineNumber: 96,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PublicNav, "3BXNMtFFj/Mdz4N5CX4PCUutrbI=");
_c = PublicNav;
const CmsPublicNav = ({ variant, dataTestId, className })=>{
    _s1();
    const { header } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsNavigation"])();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    // #2083: Inhaltssprache (Vorschau `?lang=` der Redaktion vor der Oberflächensprache)
    const contentLocale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsContentLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsContentLocale"])();
    const ausCms = header.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PublicNav, {
        items: ausCms ? header : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$headerNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEADER_NAV_ITEMS"],
        source: ausCms ? 'cms' : 'default',
        locale: contentLocale,
        variant: variant,
        ariaLabel: tr('cms.nav.ariaLabel', {
            defaultValue: 'Hauptmenü'
        }),
        toggleLabel: tr('nav.expand', {
            defaultValue: 'Ausklappen'
        }),
        dataTestId: dataTestId,
        className: className
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(CmsPublicNav, "TXRU3nfqVbEVcHcuShJoMAPgPu4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useCmsNavigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsNavigation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsContentLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsContentLocale"]
    ];
});
_c1 = CmsPublicNav;
const __TURBOPACK__default__export__ = PublicNav;
var _c, _c1;
__turbopack_context__.k.register(_c, "PublicNav");
__turbopack_context__.k.register(_c1, "CmsPublicNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PublicNav/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PublicNav$2f$PublicNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PublicNav/PublicNav.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionWrapper",
    ()=>ActionWrapper,
    "CenterElement",
    ()=>CenterElement,
    "CenterLabel",
    ()=>CenterLabel,
    "LoadingSpinner",
    ()=>LoadingSpinner,
    "OuterRingWrapper",
    ()=>OuterRingWrapper,
    "Overlay",
    ()=>Overlay,
    "WheelContainer",
    ()=>WheelContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
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
const scaleIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;
const spin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Overlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QuickWheel.styles__Overlay",
    componentId: "sc-9d3611c5-0"
})`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].floating};
  pointer-events: ${({ $isOpen })=>$isOpen ? 'auto' : 'none'};
  opacity: ${({ $isOpen })=>$isOpen ? 1 : 0};
  background: ${({ $isOpen })=>$isOpen ? 'rgba(0, 0, 0, 0.4)' : 'transparent'};
  outline: none;
  transition:
    opacity 0.15s ease-out,
    background 0.15s ease-out;
`;
const WheelContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QuickWheel.styles__WheelContainer",
    componentId: "sc-9d3611c5-1"
})`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: ${({ $isOpen })=>$isOpen ? 'auto' : 'none'};
  opacity: ${({ $isOpen })=>$isOpen ? 1 : 0};
  transition: opacity 0.15s ease-out;
  outline: none;

  ${({ $isOpen })=>$isOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      animation: ${scaleIn} 0.2s ease-out;
    `}
`;
const CenterElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QuickWheel.styles__CenterElement",
    componentId: "sc-9d3611c5-2"
})`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${({ theme })=>theme.palette.default.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  outline: none;
  opacity: ${({ $isOpen })=>$isOpen ? 1 : 0};
  transition:
    opacity 0.15s ease-out,
    box-shadow 0.2s ease-out;
  box-shadow: ${({ $isLoading })=>$isLoading ? '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 3px rgba(255, 255, 255, 0.5)' : '0 4px 16px rgba(0, 0, 0, 0.2)'};

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme })=>theme.palette.default.black};
  }
`;
const CenterLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "QuickWheel.styles__CenterLabel",
    componentId: "sc-9d3611c5-3"
})`
  font-size: 12px;
  font-weight: 500;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  color: ${({ theme })=>theme.palette.default.primary};
  max-width: 80px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.2;
`;
const ActionWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QuickWheel.styles__ActionWrapper",
    componentId: "sc-9d3611c5-4"
})`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% + ${({ $x })=>$x}px), calc(-50% + ${({ $y })=>$y}px));
  transition:
    transform 0.1s ease-out,
    opacity 0.15s ease-out;
  opacity: ${({ $isLoading })=>$isLoading ? 0.4 : 1};
  pointer-events: ${({ $isLoading })=>$isLoading ? 'none' : 'auto'};

  ${({ $isOpen, $delay })=>$isOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      animation: ${fadeIn} 0.15s ease-out;
      animation-delay: ${$delay}s;
      animation-fill-mode: backwards;
    `}

  ${({ $isSelected, $x, $y, $isLoading })=>$isSelected && !$isLoading && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      transform: translate(calc(-50% + ${$x}px), calc(-50% + ${$y}px)) scale(1.15);
    `}
`;
const LoadingSpinner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QuickWheel.styles__LoadingSpinner",
    componentId: "sc-9d3611c5-5"
})`
  width: 32px;
  height: 32px;
  border: 3px solid ${({ theme })=>theme.palette.default.greyLight || '#e0e0e0'};
  border-top-color: ${({ theme })=>theme.palette.default.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;
const expandIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    transform: translate(
      calc(-50% + var(--x) * 0.5),
      calc(-50% + var(--y) * 0.5)
    ) scale(0);
    opacity: 0;
  }
  to {
    transform: translate(
      calc(-50% + var(--x)),
      calc(-50% + var(--y))
    ) scale(1);
    opacity: 1;
  }
`;
const OuterRingWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QuickWheel.styles__OuterRingWrapper",
    componentId: "sc-9d3611c5-6"
})`
  --x: ${({ $x })=>$x}px;
  --y: ${({ $y })=>$y}px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(calc(-50% + ${({ $x })=>$x}px), calc(-50% + ${({ $y })=>$y}px));
  transition:
    transform 0.1s ease-out,
    opacity 0.15s ease-out;
  opacity: ${({ $isLoading })=>$isLoading ? 0.4 : 1};
  pointer-events: ${({ $isLoading })=>$isLoading ? 'none' : 'auto'};

  ${({ $isOpen, $delay })=>$isOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      animation: ${expandIn} 0.2s ease-out;
      animation-delay: ${$delay}s;
      animation-fill-mode: backwards;
    `}

  ${({ $isSelected, $x, $y, $isLoading })=>$isSelected && !$isLoading && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      transform: translate(calc(-50% + ${$x}px), calc(-50% + ${$y}px)) scale(1.15);
    `}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuickWheel",
    ()=>QuickWheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/QuickWheelContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$isTypingContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/isTypingContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/routes.tsx [app-client] (ecmascript)");
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
const ACTION_COLORS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"].core,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"].materials,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"].orders,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"].invoices,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"].accounts,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"].suppliers,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"].samples,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CATEGORY_COLORS"].projects
];
const WHEEL_RADIUS = 100;
const OUTER_RING_RADIUS = 180 // Distance from center to outer ring items
;
const SELECTION_THRESHOLD = 30 // Minimum distance from center to select
;
const QuickWheel = ({ actions, triggerKey = 'q', centerElement, onOpen, onClose, className })=>{
    _s();
    const { isWheelOpen, openWheel, closeWheel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickWheel"])();
    const isOpen = isWheelOpen(triggerKey);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingLabel, setLoadingLabel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Outer ring state
    const [outerRingActions, setOuterRingActions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [outerRingParentIndex, setOuterRingParentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [outerSelectedIndex, setOuterSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const wheelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const centerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    const mousePositionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    // Track whether the trigger key is physically held down
    const keyHeldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Prevent wheel from reopening after intentional close while key is held
    const suppressReopenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Limit to 8 actions for full circle
    const displayActions = actions.slice(0, 8);
    // Calculate all positioning data for an action based on its index
    const getActionLayout = (index, total, radius = WHEEL_RADIUS)=>{
        // Calculate angle: spread evenly around full circle, starting from top (-90°)
        const angle = -90 + 360 / total * index;
        const angleRad = angle * Math.PI / 180;
        // Calculate x,y position on the wheel
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;
        return {
            x,
            y,
            angle
        };
    };
    // Find which action is selected based on mouse angle and distance
    const getSelectedAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheel.useCallback[getSelectedAction]": (mouseX, mouseY)=>{
            const dx = mouseX - centerRef.current.x;
            const dy = mouseY - centerRef.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            // Must be far enough from center
            if (distance < SELECTION_THRESHOLD) {
                return {
                    inner: null,
                    outer: null
                };
            }
            // Calculate mouse angle in degrees (-180 to 180)
            const mouseAngle = Math.atan2(dy, dx) * (180 / Math.PI);
            // Check outer ring first if it's open (outer ring takes priority when mouse is far from center)
            if (outerRingActions && outerRingActions.length > 0 && distance > (WHEEL_RADIUS + OUTER_RING_RADIUS) / 2) {
                let closestOuterIndex = 0;
                let smallestOuterDiff = Infinity;
                outerRingActions.forEach({
                    "QuickWheel.useCallback[getSelectedAction]": (_, index)=>{
                        const { angle: actionAngle } = getActionLayout(index, outerRingActions.length, OUTER_RING_RADIUS);
                        let diff = Math.abs(mouseAngle - actionAngle);
                        if (diff > 180) diff = 360 - diff;
                        if (diff < smallestOuterDiff) {
                            smallestOuterDiff = diff;
                            closestOuterIndex = index;
                        }
                    }
                }["QuickWheel.useCallback[getSelectedAction]"]);
                const maxOuterAngleDiff = 180 / outerRingActions.length;
                if (smallestOuterDiff <= maxOuterAngleDiff) {
                    return {
                        inner: null,
                        outer: closestOuterIndex
                    };
                }
            }
            // Check inner ring
            let closestIndex = 0;
            let smallestDiff = Infinity;
            displayActions.forEach({
                "QuickWheel.useCallback[getSelectedAction]": (_, index)=>{
                    const { angle: actionAngle } = getActionLayout(index, displayActions.length);
                    let diff = Math.abs(mouseAngle - actionAngle);
                    if (diff > 180) diff = 360 - diff;
                    if (diff < smallestDiff) {
                        smallestDiff = diff;
                        closestIndex = index;
                    }
                }
            }["QuickWheel.useCallback[getSelectedAction]"]);
            // Select if within the angle slice for this action
            const maxAngleDiff = 180 / displayActions.length;
            if (smallestDiff <= maxAngleDiff) {
                return {
                    inner: closestIndex,
                    outer: null
                };
            }
            return {
                inner: null,
                outer: null
            };
        }
    }["QuickWheel.useCallback[getSelectedAction]"], [
        displayActions,
        outerRingActions
    ]);
    const handleOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheel.useCallback[handleOpen]": ()=>{
            // Calculate center position (center of screen)
            const x = window.innerWidth / 2;
            const y = window.innerHeight / 2;
            centerRef.current = {
                x,
                y
            };
            openWheel(triggerKey);
            // Pre-select action based on current mouse position
            const initialSelection = getSelectedAction(mousePositionRef.current.x, mousePositionRef.current.y);
            setSelectedIndex(initialSelection.inner);
            setOuterSelectedIndex(initialSelection.outer);
            onOpen?.();
        }
    }["QuickWheel.useCallback[handleOpen]"], [
        triggerKey,
        openWheel,
        onOpen,
        getSelectedAction
    ]);
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheel.useCallback[handleClose]": (executeAction = false)=>{
            if (executeAction && selectedIndex !== null) {
                const action = displayActions[selectedIndex];
                if (action && !action.disabled) {
                    action.onClick();
                }
            }
            // If key is still held when closing, suppress reopening
            if (keyHeldRef.current) {
                suppressReopenRef.current = true;
            }
            closeWheel();
            setSelectedIndex(null);
            setOuterSelectedIndex(null);
            setOuterRingActions(null);
            setOuterRingParentIndex(null);
            setIsLoading(false);
            setLoadingLabel(null);
            onClose?.();
        }
    }["QuickWheel.useCallback[handleClose]"], [
        selectedIndex,
        displayActions,
        closeWheel,
        onClose
    ]);
    // Close only the outer ring (when clicking center or inner item)
    const closeOuterRing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheel.useCallback[closeOuterRing]": ()=>{
            setOuterRingActions(null);
            setOuterRingParentIndex(null);
            setOuterSelectedIndex(null);
        }
    }["QuickWheel.useCallback[closeOuterRing]"], []);
    const handleActionClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheel.useCallback[handleActionClick]": async (action, actionIndex)=>{
            if (!action.disabled && !isLoading) {
                // If action has subActions, open the outer ring instead of executing
                if (action.subActions && action.subActions.length > 0) {
                    setOuterRingActions(action.subActions);
                    setOuterRingParentIndex(actionIndex);
                    setOuterSelectedIndex(null);
                    return;
                }
                setIsLoading(true);
                setLoadingLabel(action.label);
                try {
                    await action.onClick();
                } catch (error) {
                    console.error('Quick action failed:', error);
                } finally{
                    setIsLoading(false);
                    setLoadingLabel(null);
                    handleClose(false);
                }
            }
        }
    }["QuickWheel.useCallback[handleActionClick]"], [
        handleClose,
        isLoading
    ]);
    // Handle click on outer ring action
    const handleOuterActionClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheel.useCallback[handleOuterActionClick]": async (action)=>{
            if (!action.disabled && !isLoading) {
                setIsLoading(true);
                setLoadingLabel(action.label);
                try {
                    await action.onClick();
                } catch (error) {
                    console.error('Quick action failed:', error);
                } finally{
                    setIsLoading(false);
                    setLoadingLabel(null);
                    handleClose(false);
                }
            }
        }
    }["QuickWheel.useCallback[handleOuterActionClick]"], [
        handleClose,
        isLoading
    ]);
    // Handle keyboard and mouse events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickWheel.useEffect": ()=>{
            // Document-level focus tracker — survives portaled overlays and the
            // modal autofocus race. See helper/isTypingContext.ts for rationale.
            const typingTracker = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$isTypingContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTypingContextTracker"])();
            const handleKeyDown = {
                "QuickWheel.useEffect.handleKeyDown": (event)=>{
                    // Guard against undefined event.key (e.g. IME composition events)
                    if (!event.key) return;
                    // Don't intercept when Ctrl, Cmd, or Alt are pressed - allow system shortcuts
                    if (event.ctrlKey || event.metaKey || event.altKey) {
                        return;
                    }
                    if (event.key.toLowerCase() === triggerKey.toLowerCase()) {
                        // Don't intercept when the user is typing into any input surface or
                        // when a modal owns the keyboard. preventDefault is only called once
                        // we are sure we are taking over - otherwise the character types.
                        if (typingTracker.get() || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$isTypingContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOpenModal"])()) {
                            return;
                        }
                        event.preventDefault();
                        // Ignore auto-repeat keydown events (key held down)
                        if (event.repeat) return;
                        keyHeldRef.current = true;
                        // Only open on fresh keypress, not if suppressed after intentional close
                        if (!isOpen && !suppressReopenRef.current) {
                            handleOpen();
                        }
                    }
                    // Don't allow escape to close while loading
                    if (event.key === 'Escape' && isOpen && !isLoading) {
                        handleClose(false);
                    }
                }
            }["QuickWheel.useEffect.handleKeyDown"];
            const handleKeyUp = {
                "QuickWheel.useEffect.handleKeyUp": (event)=>{
                    // Guard against undefined event.key (e.g. IME composition events)
                    if (!event.key) return;
                    if (event.key.toLowerCase() === triggerKey.toLowerCase()) {
                        // Symmetry with keydown: if the press was for typing (not for us),
                        // the release is too. Without this, releasing 'q' after typing it
                        // into an input would still fire the close path - which is a no-op
                        // when isOpen is false, but a race when isOpen flipped between
                        // events (e.g. modal opened on keydown, focus moved into modal,
                        // user releases 'q' meant for the modal's input).
                        if (!keyHeldRef.current) {
                            return;
                        }
                        keyHeldRef.current = false;
                        // Clear suppress flag on key release - next fresh press can open
                        suppressReopenRef.current = false;
                        // Don't close while loading
                        if (isOpen && !isLoading) {
                            // Don't close if outer ring is open - user needs to interact with submenu
                            if (outerRingActions && outerRingActions.length > 0) {
                                return;
                            }
                            handleClose(false);
                        }
                    }
                }
            }["QuickWheel.useEffect.handleKeyUp"];
            const handleMouseMove = {
                "QuickWheel.useEffect.handleMouseMove": (event)=>{
                    // Always track mouse position for pre-selection on open
                    mousePositionRef.current = {
                        x: event.clientX,
                        y: event.clientY
                    };
                    // Don't update selection while loading
                    if (isOpen && !isLoading) {
                        const newSelected = getSelectedAction(event.clientX, event.clientY);
                        setSelectedIndex(newSelected.inner);
                        setOuterSelectedIndex(newSelected.outer);
                    }
                }
            }["QuickWheel.useEffect.handleMouseMove"];
            // Reset state if window loses focus (keyup won't fire if user switches tabs)
            const handleBlur = {
                "QuickWheel.useEffect.handleBlur": ()=>{
                    keyHeldRef.current = false;
                    suppressReopenRef.current = false;
                    if (isOpen && !isLoading) {
                        handleClose(false);
                    }
                }
            }["QuickWheel.useEffect.handleBlur"];
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('keyup', handleKeyUp);
            document.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('blur', handleBlur);
            return ({
                "QuickWheel.useEffect": ()=>{
                    document.removeEventListener('keydown', handleKeyDown);
                    document.removeEventListener('keyup', handleKeyUp);
                    document.removeEventListener('mousemove', handleMouseMove);
                    window.removeEventListener('blur', handleBlur);
                    typingTracker.dispose();
                }
            })["QuickWheel.useEffect"];
        }
    }["QuickWheel.useEffect"], [
        isOpen,
        isLoading,
        triggerKey,
        handleOpen,
        handleClose,
        getSelectedAction,
        outerRingActions
    ]);
    // Handle click on overlay - just close the wheel (not while loading)
    const handleOverlayClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheel.useCallback[handleOverlayClick]": (event)=>{
            // Only handle clicks on the overlay itself (not children), not while loading
            if (event.target === event.currentTarget && !isLoading) {
                handleClose(false);
            }
        }
    }["QuickWheel.useCallback[handleOverlayClick]"], [
        handleClose,
        isLoading
    ]);
    // Handle click on center element - close outer ring if open, otherwise close wheel
    const handleCenterClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheel.useCallback[handleCenterClick]": (event)=>{
            event.stopPropagation();
            if (!isLoading) {
                if (outerRingActions) {
                    closeOuterRing();
                } else {
                    handleClose(false);
                }
            }
        }
    }["QuickWheel.useCallback[handleCenterClick]"], [
        handleClose,
        isLoading,
        outerRingActions,
        closeOuterRing
    ]);
    // Handle click on wheel container - just close the wheel (not while loading)
    const handleWheelClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheel.useCallback[handleWheelClick]": (event)=>{
            // Prevent bubbling to overlay
            event.stopPropagation();
            // Just close, actions only execute when directly clicked (not while loading)
            if (!isLoading) {
                handleClose(false);
            }
        }
    }["QuickWheel.useCallback[handleWheelClick]"], [
        handleClose,
        isLoading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickWheel.useEffect": ()=>{
            setMounted(true);
        }
    }["QuickWheel.useEffect"], []);
    // Don't render wheel with no actions - prevents empty tooltip
    if (!mounted || displayActions.length === 0) {
        return null;
    }
    const wheelContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Overlay"], {
        $isOpen: isOpen,
        onClick: handleOverlayClick,
        "data-testid": `quick-wheel-overlay-${triggerKey}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WheelContainer"], {
            ref: wheelRef,
            className: className,
            $isOpen: isOpen,
            onClick: handleWheelClick,
            "data-testid": `quick-wheel-root-${triggerKey}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenterElement"], {
                    $isOpen: isOpen,
                    $isLoading: isLoading,
                    onClick: handleCenterClick,
                    "data-testid": `quick-wheel-center-${triggerKey}`,
                    children: [
                        isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                            "data-testid": `quick-wheel-loading-${triggerKey}`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx",
                            lineNumber: 440,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : centerElement,
                        (()=>{
                            if (isLoading && loadingLabel) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenterLabel"], {
                                    children: loadingLabel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx",
                                    lineNumber: 446,
                                    columnNumber: 22
                                }, ("TURBOPACK compile-time value", void 0));
                            }
                            if (outerSelectedIndex !== null && outerRingActions) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenterLabel"], {
                                    children: outerRingActions[outerSelectedIndex]?.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx",
                                    lineNumber: 449,
                                    columnNumber: 22
                                }, ("TURBOPACK compile-time value", void 0));
                            }
                            if (selectedIndex !== null) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenterLabel"], {
                                    children: displayActions[selectedIndex]?.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx",
                                    lineNumber: 452,
                                    columnNumber: 22
                                }, ("TURBOPACK compile-time value", void 0));
                            }
                            return null;
                        })()
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx",
                    lineNumber: 433,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                displayActions.map((action, index)=>{
                    const { x, y } = getActionLayout(index, displayActions.length);
                    const isSelected = selectedIndex === index;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionWrapper"], {
                        $x: x,
                        $y: y,
                        $isOpen: isOpen,
                        $delay: index * 0.03,
                        $isSelected: isSelected,
                        $isLoading: isLoading,
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                            icon: action.icon,
                            onClick: ()=>handleActionClick(action, index),
                            ariaLabel: action.label,
                            isDisabled: action.disabled || isLoading,
                            isActive: isSelected && !isLoading,
                            color: ACTION_COLORS[index % ACTION_COLORS.length],
                            dataTestId: `quick-wheel-action-${action.id}`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx",
                            lineNumber: 471,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, action.id, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx",
                        lineNumber: 461,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }),
                outerRingActions && outerRingActions.map((action, index)=>{
                    const { x, y } = getActionLayout(index, outerRingActions.length, OUTER_RING_RADIUS);
                    const isSelected = outerSelectedIndex === index;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OuterRingWrapper"], {
                        $x: x,
                        $y: y,
                        $isOpen: true,
                        $delay: index * 0.03,
                        $isSelected: isSelected,
                        $isLoading: isLoading,
                        onClick: (e)=>e.stopPropagation(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                            icon: action.icon,
                            onClick: ()=>handleOuterActionClick(action),
                            ariaLabel: action.label,
                            isDisabled: action.disabled || isLoading,
                            isActive: isSelected && !isLoading,
                            color: ACTION_COLORS[index % ACTION_COLORS.length],
                            dataTestId: `quick-wheel-outer-action-${action.id}`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx",
                            lineNumber: 499,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, action.id, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx",
                        lineNumber: 489,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx",
            lineNumber: 426,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(wheelContent, document.body);
};
_s(QuickWheel, "mCgqsQJfknaWmm8pG/1necsM0Cw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickWheel"]
    ];
});
_c = QuickWheel;
;
var _c;
__turbopack_context__.k.register(_c, "QuickWheel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/QuickWheel/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/QuickWheel/QuickWheel.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickWheel$2f$QuickWheel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickWheel"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconSlot",
    ()=>IconSlot,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "ThemeToggleButton.styles__Root",
    componentId: "sc-bd651b21-0"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: ${({ theme })=>theme.borderRadius.icon};
  background: transparent;
  color: ${({ theme })=>`var(--header-fg, ${theme.palette.text.secondary})`};
  cursor: pointer;
  transition:
    background 0.15s ease,
    color 0.15s ease;

  &:hover,
  &:focus-visible {
    background: ${({ theme })=>theme.palette.surface.subtle};
    color: ${({ theme })=>theme.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 2px;
  }

  /* #2175: Standardgröße unserer Icons */
  svg {
    width: 24px;
    height: 24px;
  }
`;
const IconSlot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ThemeToggleButton.styles__IconSlot",
    componentId: "sc-bd651b21-1"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &[data-icon='sun'] {
    display: none;
  }

  :root[data-theme='dark'] &[data-icon='sun'] {
    display: inline-flex;
  }

  :root[data-theme='dark'] &[data-icon='moon'] {
    display: none;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggleButton",
    ()=>ThemeToggleButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMoon$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMoon/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMoon$2f$IconMoon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMoon/IconMoon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSun$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSun/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSun$2f$IconSun$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSun/IconSun.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
/**
 * #2164: Hell/Dunkel-Schalter als Icon-Knopf (Kopf für Besucher und neben dem
 * Profilbild). `role="switch"`, `aria-checked` = dunkel.
 *
 * Das Symbol zeigt das **Ziel** des Klicks, nicht den Zustand: im hellen Modus
 * der Mond (→ dunkel), im dunklen die Sonne (→ hell) — wie bei den meisten
 * Seiten mit solchem Knopf. Den Zustand tragen `aria-checked` und `data-mode`.
 *
 * #2175: Beide Symbole stehen im Markup, sichtbar ist eines per CSS über
 * `data-theme` an `<html>` — das setzt das Inline-Skript vor dem ersten
 * Zeichnen. Der Server kennt den Modus nicht (rendert hell); vorher sprang
 * das Symbol im Dunkelmodus nach der Hydration vom Mond zur Sonne.
 */ const ThemeToggleButton = ({ value, onChange, ariaLabel, title, dataTestId = 'theme-toggle-button', className })=>{
    const isDark = value === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        type: "button",
        role: "switch",
        "aria-checked": isDark,
        "aria-label": ariaLabel,
        title: title,
        className: className,
        "data-testid": dataTestId,
        "data-mode": value,
        onClick: ()=>onChange(isDark ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].LIGHT : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSlot"], {
                "data-icon": "moon",
                "data-testid": `${dataTestId}-icon-moon`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMoon$2f$IconMoon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMoon"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSlot"], {
                "data-icon": "sun",
                "data-testid": `${dataTestId}-icon-sun`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSun$2f$IconSun$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSun"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ThemeToggleButton;
;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggleButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/ThemeToggleButton/ThemeToggleButton.tsx [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$ThemeToggleButton$2f$ThemeToggleButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeToggleButton"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)");
'use client';
;
;
/**
 * #392: Schriftfarbe zur Fläche. Ohne feste Fläche gilt das Theme-Paar
 * default.primary / default.white (invertiert gemeinsam). Eine feste Fläche
 * (IconButton reicht seine Markenfarbe durch, z. B. Navy) bekommt die Schrift
 * aus dem Farb-Helfer — vorher stand dort default.white, im Dark Theme also
 * Dunkelgrau auf Navy (1,4:1).
 */ const tooltipTextColor = (theme, background, text)=>{
    if (text) return text;
    if (!background) return theme.palette.default.white;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidHexColor"])(background) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContrastTextColor"])(background) : theme.palette.text.onAccent;
};
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Tooltip.styles__Root",
    componentId: "sc-3975a79f-0"
})`
  position: ${(props)=>props.$fixed ? 'fixed' : 'absolute'};
  white-space: pre-line;
  padding: 8px 12px;
  background: ${(props)=>props.$backgroundColor || props.theme.palette.default.primary};
  color: ${(props)=>tooltipTextColor(props.theme, props.$backgroundColor, props.$textColor)};
  border-radius: 4px;
  font-size: 16px;
  font-family: ${(props)=>props.theme.font.secondaryFamily};
  line-height: 24px;
  opacity: ${(props)=>props.$isVisible ? 1 : 0};
  visibility: ${(props)=>props.$isVisible ? 'visible' : 'hidden'};
  transition:
    opacity 0.2s ease-in-out,
    visibility 0.2s ease-in-out;
  z-index: ${(props)=>props.$fixed ? 9999 : 100};
  pointer-events: ${(props)=>props.$interactive ? 'auto' : 'none'};

  /* Position variants with dynamic offset adjustments */
  ${(props)=>{
    if (props.$fixed) {
        return `
        top: ${props.$top || 0}px;
        left: ${props.$left || 0}px;
      `;
    }
    const offsetX = props.$offsetX || 0;
    const offsetY = props.$offsetY || 0;
    switch(props.$position){
        case 'top':
            return `
          bottom: 100%;
          left: 50%;
          transform: translateX(calc(-50% + ${offsetX}px)) translateY(${offsetY}px);
          margin-bottom: 8px;
        `;
        case 'bottom':
            return `
          top: 100%;
          left: 50%;
          transform: translateX(calc(-50% + ${offsetX}px)) translateY(${offsetY}px);
          margin-top: 8px;
        `;
        case 'left':
            return `
          right: 100%;
          top: 50%;
          transform: translateY(calc(-50% + ${offsetY}px)) translateX(${offsetX}px);
          margin-right: 8px;
        `;
        case 'right':
            return `
          left: 100%;
          top: 50%;
          transform: translateY(calc(-50% + ${offsetY}px)) translateX(${offsetX}px);
          margin-left: 8px;
        `;
        default:
            return `
          top: 100%;
          left: 50%;
          transform: translateX(calc(-50% + ${offsetX}px)) translateY(${offsetY}px);
          margin-top: 8px;
        `;
    }
}}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Tooltip = (props)=>{
    _s();
    const { content, isVisible = false, position = 'bottom', backgroundColor, textColor, anchorRef, interactive = false, onMouseEnter, onMouseLeave, align = 'center', dataTestId = 'tooltip-root' } = props;
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [adjustedPosition, setAdjustedPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(position);
    const [offsetAdjustment, setOffsetAdjustment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const [fixedCoords, setFixedCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    const [isPositioned, setIsPositioned] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tooltip.useEffect": ()=>{
            setMounted(true);
        }
    }["Tooltip.useEffect"], []);
    const usePortal = !!anchorRef;
    const contentKey = typeof content === 'string' ? content : 'node';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tooltip.useEffect": ()=>{
            if (!isVisible || !tooltipRef.current) {
                setAdjustedPosition(position);
                setOffsetAdjustment({
                    x: 0,
                    y: 0
                });
                setIsPositioned(false);
                return;
            }
            requestAnimationFrame({
                "Tooltip.useEffect": ()=>{
                    if (!tooltipRef.current) return;
                    if (usePortal && anchorRef?.current) {
                        // Portal mode: calculate fixed position from anchor element
                        const anchor = anchorRef.current;
                        const tooltip = tooltipRef.current;
                        const anchorRect = anchor.getBoundingClientRect();
                        const tooltipRect = tooltip.getBoundingClientRect();
                        const tooltipWidth = tooltipRect.width;
                        const tooltipHeight = tooltipRect.height;
                        const vw = window.innerWidth;
                        const vh = window.innerHeight;
                        const gap = 8;
                        let top = 0;
                        let left = 0;
                        switch(position){
                            case 'top':
                                top = anchorRect.top - tooltipHeight - gap;
                                left = anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2;
                                break;
                            case 'bottom':
                                top = anchorRect.bottom + gap;
                                left = anchorRect.left + anchorRect.width / 2 - tooltipWidth / 2;
                                break;
                            case 'left':
                                top = align === 'start' ? anchorRect.top : anchorRect.top + anchorRect.height / 2 - tooltipHeight / 2;
                                left = anchorRect.left - tooltipWidth - gap;
                                break;
                            case 'right':
                                top = align === 'start' ? anchorRect.top : anchorRect.top + anchorRect.height / 2 - tooltipHeight / 2;
                                left = anchorRect.right + gap;
                                break;
                        }
                        // Clamp to viewport edges
                        if (left + tooltipWidth > vw - gap) left = vw - tooltipWidth - gap;
                        if (left < gap) left = gap;
                        if (top + tooltipHeight > vh - gap && position === 'bottom') {
                            top = anchorRect.top - tooltipHeight - gap;
                        }
                        if (top < gap && position === 'top') {
                            top = anchorRect.bottom + gap;
                        }
                        if (top + tooltipHeight > vh - gap) top = Math.max(gap, vh - tooltipHeight - gap);
                        setFixedCoords({
                            top,
                            left
                        });
                        setIsPositioned(true);
                    } else {
                        // Legacy absolute positioning mode
                        const tooltip = tooltipRef.current;
                        const rect = tooltip.getBoundingClientRect();
                        const viewportWidth = window.innerWidth;
                        const viewportHeight = window.innerHeight;
                        let newPosition = position;
                        let offsetX = 0;
                        let offsetY = 0;
                        if (rect.right > viewportWidth) {
                            if (position === 'bottom' || position === 'top') {
                                offsetX = viewportWidth - rect.right - 8;
                            } else if (position === 'right') {
                                newPosition = 'left';
                            }
                        }
                        if (rect.left < 0) {
                            if (position === 'bottom' || position === 'top') {
                                offsetX = -rect.left + 8;
                            } else if (position === 'left') {
                                newPosition = 'right';
                            }
                        }
                        if (rect.bottom > viewportHeight) {
                            if (position === 'bottom') {
                                newPosition = 'top';
                            } else if (position === 'left' || position === 'right') {
                                offsetY = viewportHeight - rect.bottom - 8;
                            }
                        }
                        if (rect.top < 0) {
                            if (position === 'top') {
                                newPosition = 'bottom';
                            } else if (position === 'left' || position === 'right') {
                                offsetY = -rect.top + 8;
                            }
                        }
                        setAdjustedPosition(newPosition);
                        setOffsetAdjustment({
                            x: offsetX,
                            y: offsetY
                        });
                        setIsPositioned(true);
                    }
                }
            }["Tooltip.useEffect"]);
        }
    }["Tooltip.useEffect"], [
        isVisible,
        position,
        align,
        contentKey,
        usePortal,
        anchorRef,
        mounted
    ]);
    if (!content) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx",
        lineNumber: 159,
        columnNumber: 24
    }, ("TURBOPACK compile-time value", void 0));
    if (usePortal) {
        const tooltipElement = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            ref: tooltipRef,
            className: props['className'],
            $isVisible: isVisible && isPositioned,
            $position: position,
            $backgroundColor: backgroundColor,
            $textColor: textColor,
            $fixed: true,
            $top: fixedCoords.top,
            $left: fixedCoords.left,
            $interactive: interactive,
            as: interactive ? 'div' : 'span',
            // Mirrors $top/$left as real inline style: heavy, per-render JS-computed
            // layout (see root CLAUDE.md inline-style carve-out). Values match the
            // CSS-in-JS above 1:1, so real (unmocked) styled-components rendering is
            // unaffected. pointer-events itself lives only in Tooltip.styles.ts.
            style: {
                top: fixedCoords.top,
                left: fixedCoords.left
            },
            onMouseEnter: interactive ? onMouseEnter : undefined,
            onMouseLeave: interactive ? onMouseLeave : undefined,
            "data-testid": dataTestId,
            "data-visible": isVisible ? 'true' : 'false',
            "data-interactive": interactive ? 'true' : 'false',
            children: content
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx",
            lineNumber: 163,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
        if (mounted && typeof document !== 'undefined') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(tooltipElement, document.body);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx",
            lineNumber: 193,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: tooltipRef,
        className: props['className'],
        $isVisible: isVisible && isPositioned,
        $position: adjustedPosition,
        $backgroundColor: backgroundColor,
        $textColor: textColor,
        $offsetX: offsetAdjustment.x,
        $offsetY: offsetAdjustment.y,
        $interactive: interactive,
        onMouseEnter: interactive ? onMouseEnter : undefined,
        onMouseLeave: interactive ? onMouseLeave : undefined,
        "data-testid": dataTestId,
        "data-visible": isVisible ? 'true' : 'false',
        "data-interactive": interactive ? 'true' : 'false',
        children: content
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx",
        lineNumber: 197,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Tooltip, "bUu1XFvl/o8JeyPS1p1PDZ/KBmA=");
_c = Tooltip;
;
var _c;
__turbopack_context__.k.register(_c, "Tooltip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/Tooltip/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_app_components_Molecule_1ay14lw14rias._.js.map