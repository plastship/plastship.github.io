(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/components/Atom/Box/Box.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BOX_PADDING",
    ()=>BOX_PADDING,
    "BOX_RADIUS",
    ()=>BOX_RADIUS,
    "BoxBlackStyles",
    ()=>BoxBlackStyles,
    "BoxErrorStyles",
    ()=>BoxErrorStyles,
    "BoxGreyDarkStyles",
    ()=>BoxGreyDarkStyles,
    "BoxGreyLightStyles",
    ()=>BoxGreyLightStyles,
    "BoxGreyStyles",
    ()=>BoxGreyStyles,
    "BoxPrimaryStyles",
    ()=>BoxPrimaryStyles,
    "BoxSecondaryStyles",
    ()=>BoxSecondaryStyles,
    "BoxSuccessStyles",
    ()=>BoxSuccessStyles,
    "BoxTertiaryStyles",
    ()=>BoxTertiaryStyles,
    "BoxTransparentStyles",
    ()=>BoxTransparentStyles,
    "BoxWarningStyles",
    ()=>BoxWarningStyles,
    "BoxWhiteStyles",
    ()=>BoxWhiteStyles,
    "Children",
    ()=>Children,
    "Icon",
    ()=>Icon,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Box/Box.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$Row$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Row/Row.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
;
;
;
// Shared styles for all box types to reduce duplication
const createBoxStyles = (color, backgroundIcon)=>{
    const useWhite = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])(color);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    background: ${color};
    border: 0.0625rem solid ${color};
    color: ${useWhite ? 'white' : 'black'};
    a {
      color: ${useWhite ? 'white' : 'inherit'} !important;
      text-decoration: underline;
      &:hover {
        opacity: 0.8;
      }
    }
    ${Icon} {
      background: ${backgroundIcon ?? color};
      border: 0.4375rem solid ${backgroundIcon ?? 'white'};
      svg {
        path,
        circle,
        rect {
          stroke: ${useWhite ? 'white' : 'black'};
        }
      }
    }
  `;
};
const BoxPrimaryStyles = (backgroundIcon)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${(props)=>createBoxStyles(props.theme.palette.default.primary, backgroundIcon)}
  `;
};
_c = BoxPrimaryStyles;
const BoxSecondaryStyles = (backgroundIcon)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${(props)=>createBoxStyles(props.theme.palette.default.secondary, backgroundIcon)}
  `;
};
_c1 = BoxSecondaryStyles;
const BoxTertiaryStyles = (backgroundIcon)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${(props)=>createBoxStyles(props.theme.palette.default.tertiary, backgroundIcon)}
  `;
};
_c2 = BoxTertiaryStyles;
const BoxWhiteStyles = (backgroundIcon)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${(props)=>createBoxStyles(props.theme.palette.default.white, backgroundIcon)}
  `;
};
_c3 = BoxWhiteStyles;
const BoxBlackStyles = (backgroundIcon)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${(props)=>createBoxStyles(props.theme.palette.default.black, backgroundIcon)}
  `;
};
_c4 = BoxBlackStyles;
const BoxGreyStyles = (backgroundIcon)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${(props)=>createBoxStyles(props.theme.palette.default.grey, backgroundIcon)}
  `;
};
_c5 = BoxGreyStyles;
const BoxGreyLightStyles = (backgroundIcon)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${(props)=>createBoxStyles(props.theme.palette.default.greyLight, backgroundIcon)}
  `;
};
_c6 = BoxGreyLightStyles;
const BoxGreyDarkStyles = (backgroundIcon)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${(props)=>createBoxStyles(props.theme.palette.default.greyDark, backgroundIcon)}
  `;
};
_c7 = BoxGreyDarkStyles;
const BoxErrorStyles = (backgroundIcon)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${(props)=>createBoxStyles(props.theme.palette.default.error, backgroundIcon)}
    box-shadow: none;
  `;
};
_c8 = BoxErrorStyles;
const BoxWarningStyles = (backgroundIcon)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${(props)=>createBoxStyles(props.theme.palette.default.warning, backgroundIcon)}
    box-shadow: none;
  `;
};
_c9 = BoxWarningStyles;
const BoxSuccessStyles = (backgroundIcon)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    ${(props)=>createBoxStyles(props.theme.palette.default.success, backgroundIcon)}
    box-shadow: none;
  `;
};
_c10 = BoxSuccessStyles;
const BoxTransparentStyles = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
    background: transparent;
    border: none;
    color: ${(props)=>props.theme.palette.default.black};
    box-shadow: none;
    ${Icon} {
      background: ${(props)=>props.theme.palette.default.primary};
      border: 0.4375rem solid ${(props)=>props.theme.palette.default.white};
      svg {
        path,
        circle,
        rect {
          stroke: ${(props)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])(props.theme.palette.default.primary) ? 'white' : 'black'};
        }
      }
    }
  `;
};
_c11 = BoxTransparentStyles;
const getBoxStyles = (props)=>{
    const { background, backgroundIcon } = props;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidHexColor"])(background)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      background: ${background};
      border: 0.0625rem solid ${background};
      color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])(background) ? 'white' : 'black'};
      a {
        color: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])(background) ? 'white' : 'black'};
      }
      ${Icon} {
        background: ${background};
        border: 0.4375rem solid white;
        svg {
          path,
          circle,
          rect {
            stroke: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])(background) ? 'white' : 'black'};
          }
        }
      }
    `;
    }
    switch(background){
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].BLACK:
            return BoxBlackStyles(backgroundIcon);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].WHITE:
            return BoxWhiteStyles(backgroundIcon);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].GREYLIGHT:
            return BoxGreyLightStyles(backgroundIcon);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].GREY:
            return BoxGreyStyles(backgroundIcon);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].GREYDARK:
            return BoxGreyDarkStyles(backgroundIcon);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].PRIMARY:
            return BoxPrimaryStyles(backgroundIcon);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].SECONDARY:
            return BoxSecondaryStyles(backgroundIcon);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].TERTIARY:
            return BoxTertiaryStyles(backgroundIcon);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].ERROR:
            return BoxErrorStyles(backgroundIcon);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].WARNING:
            return BoxWarningStyles(backgroundIcon);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].SUCCESS:
            return BoxSuccessStyles(backgroundIcon);
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].TRANSPARENT:
            return BoxTransparentStyles();
        default:
            return BoxWhiteStyles(backgroundIcon);
    }
};
const BOX_PADDING = {
    block: '3rem',
    inline: '2rem'
};
const BOX_RADIUS = '8px';
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Box.styles__Root",
    componentId: "sc-d40c8c4-0"
})`
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  padding: ${BOX_PADDING.block} ${BOX_PADDING.inline} ${BOX_PADDING.block} ${BOX_PADDING.inline};
  max-width: 100%;
  margin: ${(props)=>props.$icon ? props.theme.margin.default : 0} 0
    ${(props)=>props.theme.margin.large} 0;
  border-radius: ${BOX_RADIUS};
  transition: box-shadow 0.15s ease-in-out;
  box-shadow: 0rem 0rem 1.875rem 0rem rgba(151, 151, 151, 0.15);
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeHost"])($edges)}
  ${(props)=>getBoxStyles({
        background: props.$background,
        backgroundIcon: props.backgroundIcon
    })}

  /* Link styles based on background */
  a {
    color: ${(props)=>{
    const bg = props.$background;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidHexColor"])(bg)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldUseWhiteText"])(bg) ? 'white' : 'inherit';
    }
    switch(bg){
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].PRIMARY:
            return 'white';
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].SECONDARY:
            return 'white';
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].BLACK:
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].GREYDARK:
            return 'white';
        default:
            return 'inherit';
    }
}};
    text-decoration: underline;
    &:hover {
      opacity: 0.8;
    }
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$Row$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"]} {
    @media (min-width: ${(props)=>props.theme.device.tablet}) {
      width: 100%;
      height: auto;
      max-width: 100%;
    }
  }
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    height: 100%;
    width: 100%;
    border-radius: 8px;
    background: ${(props)=>props.$background};
    opacity: 0.85;
    display: ${(props)=>props.backgroundImage && props.backgroundTransparency ? 'block' : 'none'};
    z-index: 10;
  }
`;
const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Box.styles__Icon",
    componentId: "sc-d40c8c4-1"
})`
  position: absolute;
  top: -2rem;
  left: 1.5rem;
  z-index: 30;
  ${(props)=>getBoxStyles({
        background: props.$background,
        backgroundIcon: props.backgroundIcon
    })}
  background: none;
  border-radius: 8px;
  padding: 0.3825rem 1.125rem;
  border: 0.1875rem solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Children = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Box.styles__Children",
    componentId: "sc-d40c8c4-2"
})`
  position: relative;
  z-index: 20;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "BoxPrimaryStyles");
__turbopack_context__.k.register(_c1, "BoxSecondaryStyles");
__turbopack_context__.k.register(_c2, "BoxTertiaryStyles");
__turbopack_context__.k.register(_c3, "BoxWhiteStyles");
__turbopack_context__.k.register(_c4, "BoxBlackStyles");
__turbopack_context__.k.register(_c5, "BoxGreyStyles");
__turbopack_context__.k.register(_c6, "BoxGreyLightStyles");
__turbopack_context__.k.register(_c7, "BoxGreyDarkStyles");
__turbopack_context__.k.register(_c8, "BoxErrorStyles");
__turbopack_context__.k.register(_c9, "BoxWarningStyles");
__turbopack_context__.k.register(_c10, "BoxSuccessStyles");
__turbopack_context__.k.register(_c11, "BoxTransparentStyles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Box/Box.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Box",
    ()=>Box,
    "BoxBackgrounds",
    ()=>BoxBackgrounds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Box/Box.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexEdge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
;
;
;
;
var BoxBackgrounds = /*#__PURE__*/ function(BoxBackgrounds) {
    BoxBackgrounds["PRIMARY"] = "primary";
    BoxBackgrounds["SECONDARY"] = "secondary";
    BoxBackgrounds["TERTIARY"] = "tertiary";
    BoxBackgrounds["WHITE"] = "white";
    BoxBackgrounds["BLACK"] = "black";
    BoxBackgrounds["GREYLIGHT"] = "greyLight";
    BoxBackgrounds["GREY"] = "grey";
    BoxBackgrounds["GREYDARK"] = "greyDark";
    BoxBackgrounds["ERROR"] = "error";
    BoxBackgrounds["WARNING"] = "warning";
    BoxBackgrounds["SUCCESS"] = "success";
    BoxBackgrounds["TRANSPARENT"] = "transparent";
    return BoxBackgrounds;
}({});
const Box = (props)=>{
    const { children, dataTestId, background, backgroundIcon, icon, backgroundImage, backgroundImageOffset, backgroundTransparency, onClick, edges } = props;
    const handleClick = ()=>{
        if (!onClick) {
            return;
        }
        onClick();
    };
    const withEdge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasEdges"])(edges);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": dataTestId ? dataTestId : 'box-root',
        $edges: withEdge ? edges : undefined,
        $background: background ? background : "white",
        backgroundIcon: backgroundIcon,
        $icon: icon,
        backgroundImage: backgroundImage,
        backgroundImageOffset: backgroundImageOffset,
        backgroundTransparency: backgroundTransparency,
        onClick: ()=>handleClick(),
        style: {
            backgroundImage: props['backgroundImage'] ? `url(${props['backgroundImage']})` : undefined,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center'
        },
        children: [
            withEdge && edges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexEdge"], {
                edges: edges,
                dataTestId: `${dataTestId ?? 'box-root'}-edge`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Box/Box.tsx",
                lineNumber: 81,
                columnNumber: 29
            }, ("TURBOPACK compile-time value", void 0)),
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                $background: background ? background : "white",
                children: icon
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Box/Box.tsx",
                lineNumber: 82,
                columnNumber: 16
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Box/Box.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Box/Box.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Box;
;
var _c;
__turbopack_context__.k.register(_c, "Box");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconFlask/IconFlask.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconFlask.styles__Root",
    componentId: "sc-94871178-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconFlask/IconFlask.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconFlask",
    ()=>IconFlask
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFlask$2f$IconFlask$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFlask/IconFlask.styles.ts [app-client] (ecmascript)");
;
;
/**
 * Laborkolben (Nucleo Sharp „flask“, 24px outline) — #1915: Testmodus / Testcharge.
 */ const IconFlask = ({ className, children: _children, ...rest })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFlask$2f$IconFlask$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ...rest,
        className: className,
        "data-testid": 'icon-flask-root',
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 16L5.80474 16.503C7.80916 17.7557 10.2963 17.9599 12.4782 17.0508C14.1043 16.3732 15.9206 16.3069 17.5918 16.8639L19.5 17.5",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconFlask/IconFlask.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 2H10V11C6.3228 12.8386 4 16.597 4 20.7082V22H20V20.7082C20 16.597 17.6772 12.8386 14 11V2H16",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "square",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconFlask/IconFlask.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconFlask/IconFlask.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconFlask;
;
var _c;
__turbopack_context__.k.register(_c, "IconFlask");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconFlask/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFlask$2f$IconFlask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFlask/IconFlask.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFlask$2f$IconFlask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFlask"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconMedal/IconMedal.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconMedal.styles__Root",
    componentId: "sc-8b555373-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconMedal/IconMedal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconMedal",
    ()=>IconMedal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMedal$2f$IconMedal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMedal/IconMedal.styles.ts [app-client] (ecmascript)");
;
;
const IconMedal = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMedal$2f$IconMedal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-medal-root',
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "award-medal"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMedal/IconMedal.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "currentColor",
                strokeLinecap: "square",
                strokeLinejoin: "miter",
                strokeMiterlimit: "10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10.1046 8.24312L8 3H3.5V3.5L6.41186 10.7406",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "butt"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMedal/IconMedal.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M13.9003 8.24312L16 3H20.5V3.5L17.5738 10.8174",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "butt"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMedal/IconMedal.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22Z",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMedal/IconMedal.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C10.3431 12 9 13.3431 9 15C9 16.6569 10.3431 18 12 18Z",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMedal/IconMedal.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMedal/IconMedal.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMedal/IconMedal.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconMedal;
;
var _c;
__turbopack_context__.k.register(_c, "IconMedal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconMedal/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMedal$2f$IconMedal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMedal/IconMedal.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMedal$2f$IconMedal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMedal"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconRecycle.styles__Root",
    componentId: "sc-64905e4d-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconRecycle",
    ()=>IconRecycle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRecycle$2f$IconRecycle$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.styles.ts [app-client] (ecmascript)");
;
;
/** Recycling-Pfeile (Nucleo „recycle") */ const IconRecycle = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRecycle$2f$IconRecycle$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-recycle-root',
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "recycle"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "currentColor",
                strokeLinecap: "square",
                strokeLinejoin: "miter",
                strokeMiterlimit: "10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20.1467 15L22.1465 18.5044C22.5269 19.171 22.0455 20 21.278 20H12H12.55",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6.29511 11.1887L6.40852 11L1.91049 18.4849C1.50995 19.1514 1.99002 20 2.76762 20H7",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16.6755 10.4375L17 11L15.6535 8.66551L12.675 3.50177C12.2902 2.83463 11.3273 2.83463 10.9425 3.50177L9 6.8695",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3.32578 11.8787L6.22354 11.1022L6.99998 14",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.7765 8.10224L17 11L14.1022 10.2235",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.1213 22.1213L12 20L14.1213 17.8787",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconRecycle;
;
var _c;
__turbopack_context__.k.register(_c, "IconRecycle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRecycle$2f$IconRecycle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/IconRecycle.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRecycle$2f$IconRecycle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconRecycle"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ImagefilmBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImagefilmBlock",
    ()=>ImagefilmBlock,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx [app-client] (ecmascript)");
;
;
const ImagefilmBlock = ({ dataTestId, dataAttributes, edges })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Imagefilm"], {
        dataTestId: dataTestId,
        dataAttributes: {
            ...dataAttributes,
            'data-page-hero-follow': 'true',
            ...edges?.bottom?.placement === 'inner' ? {
                'data-page-hero-edge': edges.bottom.depth ?? 'section'
            } : {}
        },
        edges: edges
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ImagefilmBlock.tsx",
        lineNumber: 14,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ImagefilmBlock;
const __TURBOPACK__default__export__ = ImagefilmBlock;
var _c;
__turbopack_context__.k.register(_c, "ImagefilmBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/EndLinks.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FocusRing",
    ()=>FocusRing,
    "Label",
    ()=>Label,
    "Slot",
    ()=>Slot,
    "Tile",
    ()=>Tile,
    "Tiles",
    ()=>Tiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
const frame = ({ left, top, width, height })=>[
        `left: ${left}%;`,
        `top: ${top}%;`,
        `width: ${width}%;`,
        `height: ${height}%;`
    ].join('\n');
const label = ({ label: l })=>{
    if (l.place === 'below' || l.place === 'above') return [
        `left: 50%;`,
        `right: auto;`,
        l.place === 'below' ? `top: calc(100% + ${l.gap}%); bottom: auto;` : `bottom: calc(100% + ${l.gap}%); top: auto;`,
        `width: ${l.width}%;`,
        `transform: translateX(-50%);`,
        `text-align: center;`
    ].join('\n');
    const side = l.place === 'right' ? 'left' : 'right';
    const other = l.place === 'right' ? 'right' : 'left';
    return [
        `${side}: calc(100% + ${l.gap}%);`,
        `${other}: auto;`,
        `top: 50%;`,
        `bottom: auto;`,
        `width: ${l.width}%;`,
        `transform: translateY(-50%);`,
        `text-align: ${l.place === 'right' ? 'left' : 'right'};`
    ].join('\n');
};
const Tiles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nav.withConfig({
    displayName: "EndLinks.styles__Tiles",
    componentId: "sc-c748eae-0"
})`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  /* globals.css gibt jedem nav den Grund des Theme — die Gruppe liegt durchsichtig über der Bühne */
  background-color: transparent;
`;
const Slot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EndLinks.styles__Slot",
    componentId: "sc-c748eae-1"
})`
  position: absolute;
  ${({ $landscape })=>frame($landscape)}
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: transform 0.2s ease;

  &[data-shown='false'] {
    visibility: hidden;
  }

  /* Hebt die Wabe beim Zeigen und mit Tastaturfokus — wie die Hero-Pagination eine Stufe heller, dazu ein Stück nach oben */
  &:hover,
  &:focus-within {
    transform: translate(-50%, -50%) translateY(-4px);
  }

  > a {
    position: absolute;
    inset: 0;
    display: block;
    color: ${({ $tone, theme })=>$tone === 'light' ? theme.palette.site.blue : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
    text-decoration: none;
    pointer-events: auto;
    outline: none;
  }

  /* Trefferfläche mindestens 44 px, auch wenn die Kachel kleiner gezeichnet ist */
  > a::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: max(100%, 44px);
    height: max(100%, 44px);
    transform: translate(-50%, -50%);
  }

  @media ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTRAIT_QUERY"]} {
    ${({ $portrait })=>frame($portrait)}
  }
`;
const Tile = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EndLinks.styles__Tile",
    componentId: "sc-c748eae-2"
})`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  background: ${({ $tone, theme })=>$tone === 'light' ? theme.palette.site.tint : `color-mix(in srgb, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE} 22%, transparent)`};
  transition: background 0.2s ease;

  svg {
    width: 46%;
    height: 46%;
  }

  ${Slot}:hover &,
  a:focus-visible > & {
    background: ${({ $tone, theme })=>$tone === 'light' ? theme.palette.site.blue : `color-mix(in srgb, ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE} 48%, transparent)`};
    color: ${({ $tone })=>$tone === 'light' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE : 'inherit'};
  }
`;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EndLinks.styles__Label",
    componentId: "sc-c748eae-3"
})`
  position: absolute;
  ${({ $landscape })=>label($landscape)}
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-weight: 700;
  font-size: clamp(12px, 1.4vw, 20px);
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  color: ${({ $text })=>$text};

  ${Slot}:hover &,
  a:focus-visible > & {
    text-decoration: underline;
    text-underline-offset: 3px;
  }

  @media ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTRAIT_QUERY"]} {
    ${({ $portrait })=>label($portrait)}
    font-size: clamp(10px, 3vw, 13px);
    line-height: 1.15;
  }
`;
const FocusRing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EndLinks.styles__FocusRing",
    componentId: "sc-c748eae-4"
})`
  position: absolute;
  inset: -4px;
  border: 2px solid ${({ $text })=>$text};
  border-radius: 8px;
  opacity: 0;
  pointer-events: none;

  a:focus-visible > & {
    opacity: 1;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/EndLinks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EndLinks",
    ()=>EndLinks,
    "default",
    ()=>__TURBOPACK__default__export__,
    "showEndLinks",
    ()=>showEndLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$imagefilmEndLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/imagefilmEndLinks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSearch/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMedal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMedal/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFlask$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFlask/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRecycle$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconRecycle/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconContact/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUsagePageview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$endLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/endLinks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$EndLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/EndLinks.styles.ts [app-client] (ecmascript)");
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
const ICONS = {
    search: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    monitored: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMedal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    laboratory: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFlask$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    raas: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconRecycle$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"],
    contact: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
};
const FRAMES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$imagefilmEndLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGEFILM_END_LINKS"].map(_c = (_, i)=>({
        landscape: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$endLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endLinkFrame"])(i, 'landscape'),
        portrait: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$endLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endLinkFrame"])(i, 'portrait')
    }));
_c1 = FRAMES;
const showEndLinks = (links, progress)=>links.forEach((link, i)=>{
        const slot = link?.parentElement;
        if (!link || !slot) return;
        const shown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(progress - i).toFixed(2);
        if (slot.style.opacity !== shown) slot.style.opacity = shown;
        const value = shown === '0.00' ? 'false' : 'true';
        if (slot.dataset.shown !== value) slot.dataset.shown = value;
        if (link.dataset.shown !== value) link.dataset.shown = value;
    });
const EndLinks = ({ dataTestId, labels, tone, textColor, linkRefs, pathname, navLabel })=>{
    _s();
    const track = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EndLinks.useCallback[track]": (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendeNutzungsereignis"])(pathname, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$imagefilmEndLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGEFILM_END_LINK_EVENT"], {
                link: id
            })
    }["EndLinks.useCallback[track]"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$EndLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tiles"], {
        "aria-label": navLabel,
        "data-testid": `${dataTestId}-endlinks`,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$imagefilmEndLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGEFILM_END_LINKS"].map((link, i)=>{
            const Icon = ICONS[link.id];
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$EndLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
                $landscape: FRAMES[i].landscape,
                $portrait: FRAMES[i].portrait,
                $tone: tone,
                "data-shown": "false",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"], {
                    ref: (el)=>{
                        linkRefs.current[i] = el;
                    },
                    href: link.href,
                    "data-testid": `${dataTestId}-endlink-${i}`,
                    "data-link": link.id,
                    "data-shown": "false",
                    onClick: ()=>track(link.id),
                    onAuxClick: (event)=>{
                        if (event.button === 1) track(link.id);
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$EndLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tile"], {
                            $tone: tone,
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/EndLinks.tsx",
                                lineNumber: 91,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/EndLinks.tsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$EndLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FocusRing"], {
                            $text: textColor,
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/EndLinks.tsx",
                            lineNumber: 93,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$EndLinks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            $landscape: FRAMES[i].landscape,
                            $portrait: FRAMES[i].portrait,
                            $text: textColor,
                            children: labels[link.id]
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/EndLinks.tsx",
                            lineNumber: 94,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/EndLinks.tsx",
                    lineNumber: 77,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, link.id, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/EndLinks.tsx",
                lineNumber: 76,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/EndLinks.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EndLinks, "czh4StwQrDRdb9/9O0bSsfEsOWU=");
_c2 = EndLinks;
const __TURBOPACK__default__export__ = EndLinks;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "FRAMES$IMAGEFILM_END_LINKS.map");
__turbopack_context__.k.register(_c1, "FRAMES");
__turbopack_context__.k.register(_c2, "EndLinks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Caption",
    ()=>Caption,
    "Controls",
    ()=>Controls,
    "FILM_BAND_PADDING",
    ()=>FILM_BAND_PADDING,
    "LABEL_SIZES",
    ()=>LABEL_SIZES,
    "PORTRAIT_LABEL_MIN_PX",
    ()=>PORTRAIT_LABEL_MIN_PX,
    "PlayToggle",
    ()=>PlayToggle,
    "Poster",
    ()=>Poster,
    "ProgressFill",
    ()=>ProgressFill,
    "ProgressTrack",
    ()=>ProgressTrack,
    "Replay",
    ()=>Replay,
    "SceneMark",
    ()=>SceneMark,
    "Section",
    ()=>Section,
    "Stage",
    ()=>Stage,
    "StageLabel",
    ()=>StageLabel,
    "Transcript",
    ()=>Transcript,
    "WipeLayer",
    ()=>WipeLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
/*
 * #2027: Regeln des Films je Viewport an einer Stelle. Hochformat (Handy
 * hochkant, PORTRAIT_QUERY aus scenes/layout — dieselbe Bedingung setzt
 * data-layout) bekommt die hohe Bühne, eigene Lagen und Größen der
 * Beschriftungen und einen kleineren Innenabstand des Bands; alles andere
 * richtet sich nach den Theme-Breakpoints (`theme.device`).
 */ const PORTRAIT = `@media ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTRAIT_QUERY"]}`;
const FILM_BAND_PADDING = {
    landscape: '140px',
    portrait: '4rem'
};
const Section = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "Imagefilm.styles__Section",
    componentId: "sc-2b988240-0"
})`
  /* Bezug für die Wisch-Ebene (#1513); eigener Stapelkontext, damit sie über dem Grund und unter dem Wabenrand liegt */
  position: relative;
  isolation: isolate;
  /* globals.css blendet background-color auf allen Elementen 0,3 s über —
     nach dem Wabenwischer schiene sonst die alte Folie durch (#1513) */
  transition: none;
  width: 100%;
  padding: ${FILM_BAND_PADDING.landscape} 0;
  margin-bottom: 50px;
  background: ${({ $background })=>$background};
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeHost"])($edges)}
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeInset"])('top', FILM_BAND_PADDING.landscape, $edges)}
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeInset"])('bottom', FILM_BAND_PADDING.landscape, $edges)}

  /* #2027: hochkant stand die Bühne zwischen je 140 px leerem Band — der Wabenrand behält seine Zone (hexEdgeInset) */
  ${PORTRAIT} {
    padding: ${FILM_BAND_PADDING.portrait} 0;
    ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeInset"])('top', FILM_BAND_PADDING.portrait, $edges)}
    ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeInset"])('bottom', FILM_BAND_PADDING.portrait, $edges)}
  }
`;
const WipeLayer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].canvas.withConfig({
    displayName: "Imagefilm.styles__WipeLayer",
    componentId: "sc-2b988240-1"
})`
  position: absolute;
  inset: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;
const Stage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Imagefilm.styles__Stage",
    componentId: "sc-2b988240-2"
})`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${({ $background })=>$background};

  /* Handy hochkant: höhere Bühne, die Beats stapeln ihre Motive (#1497) */
  ${PORTRAIT} {
    aspect-ratio: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTRAIT_ASPECT"]};
  }
`;
const Poster = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img.withConfig({
    displayName: "Imagefilm.styles__Poster",
    componentId: "sc-2b988240-3"
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
/** Höhe der Steuerleiste auf dem Handy (Knopf 44 px + Innenabstand 2 × 6 px) — die Unterschrift bleibt darüber */ const CONTROLS_HEIGHT = '56px';
/** Mindestgröße von Tippzielen auf Touch-Geräten */ const TOUCH_TARGET = '44px';
const Caption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "Imagefilm.styles__Caption",
    componentId: "sc-2b988240-4"
})`
  position: absolute;
  left: 5%;
  right: 5%;
  bottom: ${CONTROLS_HEIGHT};
  margin: 0;
  text-align: center;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headlineFont"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h5)}
  font-size: ${({ theme })=>theme.font.text.body.mobile.fontSize};
  line-height: ${({ theme })=>theme.font.text.body.mobile.lineHeight};
  -webkit-font-smoothing: antialiased;
  text-wrap: balance;
  color: ${({ $color })=>$color};
  pointer-events: none;
  z-index: 2;

  @media screen and (min-width: ${({ theme })=>theme.device.mobile}) {
    left: 10%;
    right: 10%;
    /* über der Steuerleiste (Touch: 44-px-Knopf + 2 × 10 px) */
    bottom: max(9%, 64px);
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headlineFont"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h5)}
  }

  @media screen and (min-width: ${({ theme })=>theme.device.tablet}) {
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headlineFont"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h4)}
  }

  @media screen and (min-width: ${({ theme })=>theme.device.desktop}) {
    ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headlineFont"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h3)}
  }

  &[data-typing='true']::after {
    content: '';
    display: inline-block;
    width: 0.5em;
    height: 1.05em;
    margin-left: 0.08em;
    vertical-align: text-bottom;
    background: currentColor;
    animation: imagefilm-caret 0.8s steps(1) infinite;
  }

  @keyframes imagefilm-caret {
    50% {
      opacity: 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &[data-typing='true']::after {
      animation: none;
    }
  }
`;
/** Lage einer Beschriftung zu ihrem Ankerpunkt: daneben (rechts/links), mittig darunter oder darüber */ const placed = ({ left, top, width, place })=>{
    const beside = place === 'right' || place === 'left';
    return [
        `left: ${place === 'left' ? left - width : left}%;`,
        `top: ${top}%;`,
        `width: ${width}%;`,
        `transform: ${beside ? 'translateY(-50%)' : place === 'above' ? 'translate(-50%, -100%)' : 'translateX(-50%)'};`,
        `text-align: ${beside ? place === 'left' ? 'right' : 'left' : 'center'};`
    ].join('\n');
};
const PORTRAIT_LABEL_MIN_PX = 11;
const LABEL_SIZES = {
    small: [
        'clamp(11px, 1.55vw, 22px)',
        `clamp(${PORTRAIT_LABEL_MIN_PX}px, 3.1vw, 13px)`
    ],
    medium: [
        'clamp(12px, 1.8vw, 26px)',
        `clamp(${PORTRAIT_LABEL_MIN_PX}px, 3.1vw, 13px)`
    ],
    large: [
        'clamp(14px, 2.3vw, 34px)',
        'clamp(13px, 3.8vw, 17px)'
    ],
    // Kreislauf (#2117): quer wie medium, hochkant knapper — „Inverkehrbringen" links neben der Wabe hält so Abstand zum Rand
    cycle: [
        'clamp(12px, 1.8vw, 26px)',
        `clamp(${PORTRAIT_LABEL_MIN_PX}px, 2.9vw, 12px)`
    ],
    // Überschrift auf dem Blatt der Urkunde: in einer Zeile, so groß, wie das Blatt breit ist (rankLayout.certScale)
    sheet: [
        'clamp(12px, 1.85vw, 34px)',
        `clamp(${PORTRAIT_LABEL_MIN_PX}px, 3vw, 14px)`
    ]
};
/*
 * Folien tragen feste Farben aus dem hellen Theme (scenes/slides.ts) — im
 * Dark Theme wäre text.primary hell und default.white dunkelgrau.
 */ const SLIDE_LABEL_DARK = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.text.primary;
const SLIDE_LABEL_WHITE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.default.white;
/** Ausrichtung eines Namens im Hochformat je Lage zum Motiv (#2117) */ const PORTRAIT_JUSTIFY = {
    right: 'flex-start',
    left: 'flex-end',
    below: 'center',
    above: 'center'
};
/** Beschriftung auf der grünen Folie (data-bg am Wurzelelement, #1513) */ const onGreenSlideLabel = "[data-bg='secondary'] &";
/** Begriff mit eigener Farbe (data-name-tone='term') auf dem blauen Band */ const onBlueSlideTerm = "[data-bg='primary'] &[data-name-tone='term']";
const StageLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Imagefilm.styles__StageLabel",
    componentId: "sc-2b988240-5"
})`
  position: absolute;
  ${({ $landscape })=>placed($landscape)}
  opacity: 0;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  font-weight: 700;
  font-size: ${({ $size = 'small' })=>LABEL_SIZES[$size][0]};
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  hyphens: auto;
  overflow-wrap: anywhere;
  color: ${({ $color })=>$color};
  pointer-events: none;
  z-index: 2;

  /* Überschrift auf einem Blatt: nie umbrechen, nie trennen */
  ${({ $size })=>$size === 'sheet' ? 'white-space: nowrap; hyphens: none;' : ''}

  &[data-shown='false'] {
    visibility: hidden;
  }

  ${PORTRAIT} {
    ${({ $portrait })=>placed($portrait)}
    font-size: ${({ $size = 'small' })=>LABEL_SIZES[$size][1]};
    line-height: 1.15;
    /* #2107: hochkant keine Silbentrennung („Werksent-sorgung") — die Rahmen
       sind dort so breit wie das längste Wort; umbrochen wird nur an Leerzeichen */
    hyphens: manual;
    overflow-wrap: normal;
    /* reicht ein einzelnes Wort doch über den Rahmen, ragt es zur Seite ohne
       Motiv hinaus (links stehende Namen nach links, mittige gleichmäßig) —
       nie in die eigene Wabe */
    display: flex;
    justify-content: ${({ $portrait })=>PORTRAIT_JUSTIFY[$portrait.place]};

    /* #2114: auf der grünen Folie (Partner) dunkle Schrift statt Weiß — Weiß hat
       auf Markengrün nur 2,6:1, text.primary 6:1 (WCAG AA für kleine Schrift) */
    ${onGreenSlideLabel} {
      color: ${SLIDE_LABEL_DARK};
    }

    /* #2117: Begriffe mit eigener Farbe auf dem blauen Band (Kreislauf) in Weiß —
       das helle Cyan von „Rücknahme" stand auf Markenblau zu schwach; die Waben
       tragen die Farbe des Begriffs weiter */
    ${onBlueSlideTerm} {
      color: ${SLIDE_LABEL_WHITE};
    }
  }
`;
const Controls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Imagefilm.styles__Controls",
    componentId: "sc-2b988240-6"
})`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 10px;
  z-index: 3;
  opacity: 0;
  transition: opacity 0.25s ease;

  @media screen and (min-width: ${({ theme })=>theme.device.mobile}) {
    padding: 10px 14px;
  }

  ${Stage}:hover &,
  &:focus-within {
    opacity: 1;
  }

  /* Touch-Geräte kennen kein Hover: Steuerung immer zeigen */
  @media (hover: none) {
    opacity: 1;
  }
`;
/**
 * Helle Folien (#1497): Leiste und Marken in Markenblau statt Weiß, Grün in
 * der dunklen Variante (Markengrün hat auf Weiß nur 2,6:1)
 */ const onLightSlide = "[data-bg='white'] &, [data-bg='greyLight'] &";
/** Grüne Folie (#1513): alles in Weiß — Knopf weiß mit grünem Symbol, Füllung und Marken weiß */ const onGreenSlide = "[data-bg='secondary'] &";
const PlayToggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Imagefilm.styles__PlayToggle",
    componentId: "sc-2b988240-7"
})`
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({ theme })=>theme.palette.default.secondary};

  ${onLightSlide} {
    background: ${({ theme })=>theme.palette.site.greenDark};
  }

  ${onGreenSlide} {
    background: ${({ theme })=>theme.palette.default.white};

    svg path {
      stroke: ${({ theme })=>theme.palette.default.secondary};
    }
  }

  /* Touch: Tippziel mindestens 44 px */
  @media (hover: none) {
    width: ${TOUCH_TARGET};
    height: ${TOUCH_TARGET};
    flex-basis: ${TOUCH_TARGET};
  }

  svg {
    width: 18px;
    height: 18px;

    path {
      stroke: ${({ theme })=>theme.palette.default.white};
    }
  }
`;
const REPLAY_LANDSCAPE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replayFrame"])('landscape');
const REPLAY_PORTRAIT = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replayFrame"])('portrait');
const Replay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Imagefilm.styles__Replay",
    componentId: "sc-2b988240-8"
})`
  position: absolute;
  left: 50%;
  top: ${REPLAY_LANDSCAPE.top}%;
  height: ${REPLAY_LANDSCAPE.size}%;
  aspect-ratio: 1;
  min-height: 28px;
  padding: 0;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: translate(-50%, -50%);
  background: ${({ theme })=>theme.palette.default.secondary};
  z-index: 3;
  animation: imagefilm-replay-in 0.5s ease both;
  transition: transform 0.2s ease;

  ${PORTRAIT} {
    top: ${REPLAY_PORTRAIT.top}%;
    height: ${REPLAY_PORTRAIT.size}%;
  }

  /* Tippziel mindestens 44 px, auch wenn der Knopf kleiner gezeichnet ist */
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: max(100%, ${TOUCH_TARGET});
    height: max(100%, ${TOUCH_TARGET});
    transform: translate(-50%, -50%);
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
  }

  &:focus-visible {
    outline: 3px solid ${({ theme })=>theme.palette.default.white};
    outline-offset: 3px;
  }

  svg {
    width: 50%;
    height: 50%;
    /* optische Mitte des Dreiecks */
    margin-left: 8%;

    path {
      stroke: ${({ theme })=>theme.palette.default.white};
    }
  }

  @keyframes imagefilm-replay-in {
    from {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.6);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    transition: none;
  }
`;
const ProgressTrack = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Imagefilm.styles__ProgressTrack",
    componentId: "sc-2b988240-9"
})`
  position: relative;
  flex: 1 1 auto;
  height: 6px;
  border-radius: 3px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.28);
  transition: background-color 0.4s ease;

  /* unsichtbare Trefferfläche: 44 px hoch trotz 6-px-Leiste */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: ${TOUCH_TARGET};
    transform: translateY(-50%);
  }

  ${onLightSlide} {
    background: rgba(0, 65, 110, 0.18);
  }

  ${onGreenSlide} {
    background: rgba(255, 255, 255, 0.35);
  }
`;
const ProgressFill = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.attrs(({ $progress })=>({
        style: {
            width: `${Math.round($progress * 1000) / 10}%`
        }
    })).withConfig({
    displayName: "Imagefilm.styles__ProgressFill",
    componentId: "sc-2b988240-10"
})`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-radius: 3px;
  background: ${({ theme })=>theme.palette.default.secondary};

  ${onLightSlide} {
    background: ${({ theme })=>theme.palette.site.greenDark};
  }

  ${onGreenSlide} {
    background: ${({ theme })=>theme.palette.default.white};
  }
`;
const SceneMark = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Imagefilm.styles__SceneMark",
    componentId: "sc-2b988240-11"
})`
  position: absolute;
  top: -3px;
  bottom: -3px;
  width: 2px;
  left: ${({ $at })=>`${$at * 100}%`};
  background: ${({ theme })=>theme.palette.default.white};
  opacity: 0.6;

  ${onLightSlide} {
    background: ${({ theme })=>theme.palette.default.primary};
    opacity: 0.45;
  }
`;
const Transcript = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ol.withConfig({
    displayName: "Imagefilm.styles__Transcript",
    componentId: "sc-2b988240-12"
})`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  border: 0;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IMAGEFILM_CAPTION_IDS",
    ()=>IMAGEFILM_CAPTION_IDS,
    "Imagefilm",
    ()=>Imagefilm,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/ThemeMode.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Box/Box.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Row/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Col/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexEdge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlay/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$IconPlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlay/IconPlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPause/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useTimeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useMediaQuery.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$theme3d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/theme3d.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$useSaveData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/useSaveData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$imagefilm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/imagefilm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/SceneCanvas/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$SceneCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/film.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$filmClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/filmClock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/wayLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$streamLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/streamLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/partnerLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$wipeOrigins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/wipeOrigins.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/slides.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/imagefilmPalette.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$imagefilmEndLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/imagefilmEndLinks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$EndLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/EndLinks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$hexWipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/hexWipe.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.styles.ts [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
// Szenen und three erst im Canvas laden — nicht im Seiten-Bundle
const FilmStage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/FilmStage.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = FilmStage;
const NO_BLEED = {
    x: 0,
    y: 0
};
const CAMERA = {
    position: [
        0,
        0,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAMERA_Z"]
    ],
    fov: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FOV"],
    near: 0.1,
    far: 200
};
/** Standbild: Platzhalter beim Laden und Rückfall ohne WebGL — dasselbe Bild wie der erste Frame des Films */ const POSTER = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$imagefilm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGEFILM_POSTER_SET"];
const PORTRAIT_POSTER = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$imagefilm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGEFILM_PORTRAIT_POSTER_SET"];
/** #1950: das Standbild füllt die Bühne in voller Breite — der Browser wählt die Fassung danach */ const POSTER_SIZES = '100vw';
/** Fortschritt eines Wischers von der Charge aus, ab dem sie auf der neuen Folie steht */ const CHARGE_SWITCH_AT = 0.15;
/** Frames zwischen „Bühne bereit“ und dem Abnehmen des Standbilds: bis dahin ist das erste Filmbild gezeichnet */ const FIRST_FRAMES = 3;
/** Trenner der Zeilen im Memo-Schlüssel (kommt in keiner Übersetzung vor) */ const LINE_SEPARATOR = '\u0000';
/** Spuren, denen die Namen der vier Wege folgen (bw, #1513) */ const trackOf = (id)=>{
    const found = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILM"].tracks.find((t)=>t.id === id);
    if (!found) throw new Error(`Unbekannte Spur im Drehbuch: ${id}`);
    return found;
};
const framesOf = (count, frame)=>Array.from({
        length: count
    }, (_, i)=>({
            landscape: frame(i, 'landscape'),
            portrait: frame(i, 'portrait')
        }));
const LABEL_GROUPS = [
    // Vier Wege zum Rohstoff (bw)
    {
        id: 'way',
        frames: framesOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAY_COUNT"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wayLabelFrame"]),
        progress: trackOf('bw.ways'),
        gain: 1,
        opacity: trackOf('bw.opacity'),
        size: 'small',
        beat: 'bw',
        white: true
    },
    // Stoffstrom (b1): Rücknahme, Sortierung, Aufbereitung — dieselben Namen wie im Kreislauf am Schluss
    {
        id: 'stream',
        frames: framesOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$streamLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STREAM_COUNT"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$streamLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["streamLabelFrame"]),
        progress: trackOf('b1.stations'),
        gain: 1,
        opacity: trackOf('b1.stream.opacity'),
        size: 'small',
        beat: 'b1',
        white: true
    },
    // Labor (b3): die vier Dimensionen, dazu die Norm unter dem Kolben
    {
        id: 'dim',
        frames: framesOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAB_DIM_COUNT"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labDimLabelFrame"]),
        progress: trackOf('b3.dims'),
        gain: 1,
        opacity: trackOf('b3.opacity'),
        size: 'large'
    },
    {
        id: 'norm',
        frames: framesOf(1, (_, layout)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labNormFrame"])(layout)),
        progress: trackOf('b3.norm'),
        gain: 1,
        opacity: trackOf('b3.opacity'),
        size: 'small'
    },
    // Rating (b2): die vier Metriken, eine nach der anderen mit ihrem Balken; sie gehen mit den Balken, bevor die Urkunde kommt
    {
        id: 'legend',
        frames: framesOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAB_DIM_COUNT"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["legendLabelFrame"]),
        progress: trackOf('b2.metrics'),
        gain: 1,
        opacity: trackOf('b2.others'),
        size: 'large'
    },
    // Rating (b2): die drei Klassen unter der Treppe; sie gehen mit den übrigen Materialien
    {
        id: 'class',
        frames: framesOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_CLASS_COUNT"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["classLabelFrame"]),
        progress: trackOf('b2.classes'),
        gain: 1,
        opacity: trackOf('b2.others'),
        size: 'large'
    },
    // Rating (b2): Überschrift der Urkunde — erscheint, sobald das Blatt steht (erstes Drittel des Zeichnens)
    {
        id: 'cert',
        frames: framesOf(1, (_, layout)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["certTitleFrame"])(layout)),
        progress: trackOf('b2.cert'),
        gain: 3,
        opacity: trackOf('b2.opacity'),
        size: 'sheet'
    },
    // Partner (b5): die vier Gruppen, dazu „Ein Ansprechpartner" an der Mitte
    {
        id: 'partner',
        frames: framesOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARTNER_COUNT"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["partnerLabelFrame"]),
        progress: trackOf('b5.partners'),
        gain: 1,
        opacity: trackOf('b5.opacity'),
        size: 'medium'
    },
    {
        id: 'contact',
        frames: framesOf(1, (_, layout)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$partnerLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactLabelFrame"])(layout)),
        progress: trackOf('b5.contact'),
        gain: 1,
        opacity: trackOf('b5.opacity'),
        size: 'large'
    },
    // ISO (b7) und Server (bs): je drei Punkte
    {
        id: 'iso',
        frames: framesOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ISO_POINT_COUNT"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isoLabelFrame"]),
        progress: trackOf('b7.points'),
        gain: 1,
        opacity: trackOf('b7.opacity'),
        size: 'large'
    },
    {
        id: 'server',
        frames: framesOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVER_POINT_COUNT"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverLabelFrame"]),
        progress: trackOf('bs.points'),
        gain: 1,
        opacity: trackOf('bs.opacity'),
        size: 'large'
    },
    // Kreislauf (b8): die sechs Stationen
    {
        id: 'cycle',
        frames: framesOf(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CYCLE_COUNT"], __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cycleLabelFrame"]),
        progress: trackOf('b8.names'),
        gain: 1,
        opacity: trackOf('b8.names.opacity'),
        size: 'cycle',
        beat: 'b8'
    }
];
/**
 * Link-Waben im Schlussbild (#1993): erscheinen nach Zeichen und Schriftzug
 * und bleiben stehen, solange der Film beendet ist — keine Beschriftung mit
 * Lesezeit (LABEL_GROUPS), sondern Bedienelemente; eigene Prüfung in
 * scenes/timing.test.ts.
 */ const END_LINKS_TRACK = trackOf('b8.endlinks');
/** Überschrift der Verifizierungsurkunde: ein geprüftes Material, im Singular — ein Eigenname, nicht übersetzt */ const CERT_TITLE = 'Monitored Material';
/** Klassen von Monitored Materials — Eigennamen wie auf den Siegeln, nicht übersetzt */ const CLASS_NAMES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_CLASSES"].map(_c1 = (tier)=>tier.name);
_c2 = CLASS_NAMES;
/** Norm, nach deren Datenqualitätslevel sich der Prüfumfang richtet — ein Eigenname, nicht übersetzt */ const LAB_NORM = 'ISO · DIN EN 18065';
/** Beschriftungen nacheinander einblenden: `progress` zählt sie hoch, `opacity` blendet die Folie */ const showLabels = (labels, progress, opacity)=>labels.forEach((label, i)=>{
        if (!label) return;
        const shown = ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(progress - i) * opacity).toFixed(2);
        if (label.style.opacity !== shown) label.style.opacity = shown;
        setData(label, 'shown', shown === '0.00' ? 'false' : 'true');
    });
/**
 * Äußere Wabenränder tragen die eigene Fläche des Films in den Nachbarblock —
 * mit Folien die aktuelle Folie, aus derselben CSS-Variable wie Band und
 * Bühne (#1497): Rand, Band und Bühne wechseln im selben Frame, der Film
 * wirkt als ein Stück von Wabenkante zu Wabenkante. Innere Ränder zeigen die
 * Farbe des Nachbarn und bleiben.
 */ const SLIDE_EDGE_FILL = {
    outer: 'var(--film-bg)'
};
/** data-Attribut nur bei Änderung schreiben — spart Style-Neuberechnung je Frame */ const setData = (el, key, value)=>{
    if (el.dataset[key] !== value) el.dataset[key] = value;
};
const backgroundColor = (background, palette)=>{
    switch(background){
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].PRIMARY:
            return palette.primary;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].GREYLIGHT:
            return palette.greyLight;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].WHITE:
            return palette.white;
        default:
            return 'transparent';
    }
};
const Imagefilm = ({ autoplay = true, startAt = 0, background = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].PRIMARY, dataTestId = 'imagefilm', dataAttributes, edges, className })=>{
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const { themeMode, language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])(language);
    // Zeilen je Beat aus i18n (#1497; v2-Texte nach „Das System für Rezyklateinsatz“, #1513) — als feste Keys, damit der Key-Wächter sie
    // findet. Bei jedem Render lesen: `tr` behält seine Identität, wenn das
    // Sprachpaket nachlädt, ein Memo auf `tr` hielte sonst den deutschen Rückfall.
    const lines = [
        // Auftakt: dasselbe Bild wie am Schluss, Claim unter Bildmarke und Schriftzug (#1513)
        tr('imagefilm.claim'),
        tr('imagefilm.beat.bw'),
        tr('imagefilm.beat.b1v2'),
        tr('imagefilm.beat.bmv2'),
        // erst das Labor mit den vier Dimensionen, dann Score und Klasse
        tr('imagefilm.beat.b3v3'),
        tr('imagefilm.beat.b2v4'),
        // Versand in zwei Zeilen: Box und Scan (PLASTRACK), dann die Lieferung
        tr('imagefilm.beat.b4'),
        tr('imagefilm.beat.b4v2'),
        // auf die Lieferung folgt der Nachweis, dann die drei Folien über plastship selbst
        tr('imagefilm.beat.b6v2'),
        tr('imagefilm.beat.b5'),
        tr('imagefilm.beat.b7v2'),
        tr('imagefilm.beat.bs'),
        // Schluss: der Kreislauf schließt sich, dann das Schlussbild mit dem Claim
        tr('imagefilm.beat.b0'),
        tr('imagefilm.claim')
    ];
    // Texte der Beschriftungen je Gruppe — wie die Zeilen je Render gelesen
    const dimensions = [
        tr('imagefilm.dim.mechanics', {
            defaultValue: 'Mechanik'
        }),
        tr('imagefilm.dim.optics', {
            defaultValue: 'Optik'
        }),
        tr('imagefilm.dim.odor', {
            defaultValue: 'Geruch'
        }),
        tr('imagefilm.dim.purity', {
            defaultValue: 'Reinheit'
        })
    ];
    const cycle = [
        tr('imagefilm.cycle.production', {
            defaultValue: 'Herstellung'
        }),
        tr('imagefilm.cycle.market', {
            defaultValue: 'Inverkehrbringen'
        }),
        tr('imagefilm.cycle.takeback', {
            defaultValue: 'Rücknahme'
        }),
        tr('imagefilm.cycle.sorting', {
            defaultValue: 'Sortierung'
        }),
        tr('imagefilm.cycle.reprocessing', {
            defaultValue: 'Aufbereitung'
        }),
        tr('imagefilm.cycle.use', {
            defaultValue: 'Vermarktung und Einsatz'
        })
    ];
    // Link-Waben im Schlussbild (#1993): Texte aus der Konfiguration, übersetzt
    const endLinkLabels = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$imagefilmEndLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IMAGEFILM_END_LINKS"].map((link)=>[
            link.id,
            tr(link.labelKey, {
                defaultValue: link.defaultLabel
            })
        ]));
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const labelTexts = {
        // der Stoffstrom nennt drei Stationen des Kreislaufs: Rücknahme, Sortierung, Aufbereitung
        stream: cycle.slice(2, 5),
        way: [
            tr('imagefilm.way.market', {
                defaultValue: 'Markt'
            }),
            tr('imagefilm.way.collection', {
                defaultValue: 'Werksentsorgung'
            }),
            tr('imagefilm.way.custom', {
                defaultValue: 'Produktion nach Maß'
            }),
            tr('imagefilm.way.system', {
                defaultValue: 'Systemmengen'
            })
        ],
        dim: dimensions,
        norm: [
            LAB_NORM
        ],
        legend: dimensions,
        class: CLASS_NAMES,
        cert: [
            CERT_TITLE
        ],
        partner: [
            tr('imagefilm.partner.recycler', {
                defaultValue: 'Recycler'
            }),
            tr('imagefilm.partner.sorters', {
                defaultValue: 'Sortierer'
            }),
            tr('imagefilm.partner.labs', {
                defaultValue: 'Prüflabore'
            }),
            tr('imagefilm.partner.logistics', {
                defaultValue: 'Logistik'
            })
        ],
        contact: [
            tr('imagefilm.partner.contact', {
                defaultValue: 'Ein Ansprechpartner'
            })
        ],
        iso: [
            tr('imagefilm.iso.documented', {
                defaultValue: 'Dokumentierte Prozesse'
            }),
            tr('imagefilm.iso.audited', {
                defaultValue: 'Unabhängig auditiert'
            }),
            tr('imagefilm.iso.improved', {
                defaultValue: 'Laufend verbessert'
            })
        ],
        server: [
            tr('imagefilm.server.datacenters', {
                defaultValue: 'Rechenzentren in Deutschland'
            }),
            tr('imagefilm.server.backups', {
                defaultValue: 'Sicherungen in der EU'
            }),
            tr('imagefilm.server.privacy', {
                defaultValue: 'Europäischer Datenschutz'
            })
        ],
        cycle
    };
    // Stabil, bis sich ein Text ändert — Unterschrift, Transkript und Rückfall rendern sonst je Frame neu
    const linesKey = lines.join(LINE_SEPARATOR);
    const captions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Imagefilm.useMemo[captions]": ()=>Object.fromEntries(linesKey.split(LINE_SEPARATOR).map({
                "Imagefilm.useMemo[captions]": (text, i)=>[
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAPTIONS"][i].id,
                        text
                    ]
            }["Imagefilm.useMemo[captions]"]))
    }["Imagefilm.useMemo[captions]"], [
        linesKey
    ]);
    // Auf dem blauen Band läuft der Film in Weiß auf Blau, sonst im Theme-Schema
    const colorScheme = background === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].PRIMARY ? 'onPrimary' : themeMode === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$ThemeMode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeMode"].DARK ? 'dark' : 'light';
    const colors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Imagefilm.useMemo[colors]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$theme3d$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sceneColors"])(colorScheme)
    }["Imagefilm.useMemo[colors]"], [
        colorScheme
    ]);
    // Auf dem blauen Band wechselt der Film die Folie je Beat (#1497): Blau,
    // Weiß, Blaugrau — Band, Bühne und Unterschrift folgen per CSS-Variable
    const slides = background === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].PRIMARY;
    // Handy hochkant: hohe Bühne (CSS) — die Szene erkennt das Format selbst an der Canvas-Größe
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTRAIT_QUERY"]) ? 'portrait' : 'landscape';
    // #2027: Datensparmodus oder 2G — Standbild statt 3D (reduzierte Bewegung erledigt SceneCanvas selbst)
    const saveData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$useSaveData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveData"])();
    const [sceneState, setSceneState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Bereit ist der Film erst, wenn neben dem Canvas auch die Szenen eingehängt sind
    const [stageReady, setStageReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Bühne neu zeichnen, wenn der Takt steht (Seek, Pause) — frameloop ist dann 'demand'
    const invalidateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Standbild bleibt über der Bühne, bis ihr erstes Bild gezeichnet ist (#1513):
    // es zeigt dasselbe wie der erste Frame, der Film beginnt so ohne Flackern
    const [firstFrameDrawn, setFirstFrameDrawn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleStageReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Imagefilm.useCallback[handleStageReady]": (invalidate)=>{
            invalidateRef.current = invalidate;
            setStageReady(true);
            invalidateRef.current?.();
            let left = FIRST_FRAMES;
            const wait = {
                "Imagefilm.useCallback[handleStageReady].wait": ()=>{
                    left -= 1;
                    if (left > 0) requestAnimationFrame(wait);
                    else setFirstFrameDrawn(true);
                }
            }["Imagefilm.useCallback[handleStageReady].wait"];
            requestAnimationFrame(wait);
        }
    }["Imagefilm.useCallback[handleStageReady]"], []);
    const running = sceneState === 'ready' && stageReady;
    // Takt in Wiedergabezeit (Farbwechsel gedehnt, #1513); Szenen, Zeilen und
    // Folien lesen Filmzeit über filmTimeRef
    const timeline = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeline"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$filmClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAY_DURATION"], {
        hold: !visible || !running
    });
    const { timeRef: playRef, playing, progress, play, toggle, seek: seekTime } = timeline;
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Imagefilm.useMemo[timeRef]": ()=>({
                get current () {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$filmClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFilm"])(playRef.current);
                },
                set current (_value){
                // nur lesend — der Takt schreibt playRef
                }
            })
    }["Imagefilm.useMemo[timeRef]"], [
        playRef
    ]);
    /** Sprung zu einer Stelle in Filmzeit */ const seek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Imagefilm.useCallback[seek]": (filmSeconds)=>{
            seekTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$filmClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlayback"])(filmSeconds));
            invalidateRef.current?.();
        }
    }["Imagefilm.useCallback[seek]"], [
        seekTime
    ]);
    // Startzeit einmalig setzen
    const startRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(startAt);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Imagefilm.useEffect": ()=>{
            if (startRef.current > 0) seek(startRef.current);
        }
    }["Imagefilm.useEffect"], [
        seek
    ]);
    // Beim ersten Sichtbarwerden abspielen
    const autoplayed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Imagefilm.useEffect": ()=>{
            if (autoplay && visible && running && !autoplayed.current) {
                autoplayed.current = true;
                play();
            }
        }
    }["Imagefilm.useEffect"], [
        autoplay,
        visible,
        running,
        play
    ]);
    // Bildunterschrift und Szene direkt ins DOM, ohne React-Render: je Frame nur
    // beim Abspielen im Sichtfeld, sonst einmal je Änderung (Seek, Pause, Laden)
    const shownEdges = edges && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasEdges"])(edges) ? edges : undefined;
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const captionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const labelRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const endLinkRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Folienwechsel als Wabenwischer (#1513): Raster beim Start eines Wechsels
    // einmal aus der Bandgröße, danach je Frame nur zeichnen
    const wipeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Schattenstärke der Bühne: folgt der Folie, im Wischer ihrem Fortschritt (#1513)
    const shadowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHADOW_OF_SLIDE"].white);
    // Folie unter der Charge: sie richtet Grund und Rand danach (#1513)
    const chargeSlideRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])('primary');
    const wipeGridRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Ursprung eines radialen Wischers in Pixeln des Bands (#1513), je Wechsel einmal aus der Lage der Bühne
    const wipeOriginRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Die 3D-Szene füllt das ganze Band, nicht nur die Bühne (#1513): Überstand je
    // Seite = Abstand der Bühne zum Rand des Bands (Innenabstand oben/unten, Seitenränder)
    const [bleed, setBleed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(NO_BLEED);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Imagefilm.useEffect": ()=>{
            const root = rootRef.current;
            const stage = stageRef.current;
            if (!root || !stage || typeof ResizeObserver === 'undefined') return;
            const measure = {
                "Imagefilm.useEffect.measure": ()=>{
                    const band = root.getBoundingClientRect();
                    const box = stage.getBoundingClientRect();
                    // gleich je Seite, damit die Bühne in der Mitte des Canvas bleibt
                    const x = Math.max(0, Math.floor(Math.min(box.left - band.left, band.right - box.right)));
                    const y = Math.max(0, Math.floor(Math.min(box.top - band.top, band.bottom - box.bottom)));
                    stage.style.setProperty('--scene-bleed-x', `${x}px`);
                    stage.style.setProperty('--scene-bleed-y', `${y}px`);
                    setBleed({
                        "Imagefilm.useEffect.measure": (prev)=>prev.x === x && prev.y === y ? prev : {
                                x,
                                y
                            }
                    }["Imagefilm.useEffect.measure"]);
                }
            }["Imagefilm.useEffect.measure"];
            measure();
            const observer = new ResizeObserver(measure);
            observer.observe(root);
            observer.observe(stage);
            return ({
                "Imagefilm.useEffect": ()=>observer.disconnect()
            })["Imagefilm.useEffect"];
        }
    }["Imagefilm.useEffect"], []);
    // Kacheln des äußeren Wabenrands: ragen über das Band hinaus, schalten im Wischer einzeln die Farbe um (#1513)
    const wipeTilesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const drawWipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Imagefilm.useCallback[drawWipe]": (progress, color, cut)=>{
            const canvas = wipeRef.current;
            const root = rootRef.current;
            if (!canvas || !root) return;
            if (progress < 0) {
                if (wipeGridRef.current) {
                    // Erst leeren, wenn der neue Grund sicher gemalt ist: Canvas und
                    // CSS-Hintergrund landen nicht immer im selben Bild — sonst blitzt
                    // die alte Folie für einen Frame durch
                    const grid = wipeGridRef.current;
                    wipeGridRef.current = null;
                    // der Rand folgt wieder --film-bg (im selben Bild auf die neue Folie gesetzt)
                    for (const tile of wipeTilesRef.current){
                        if (tile.full) tile.full.overlay?.remove();
                        else {
                            tile.el.style.color = '';
                            tile.el.style.fill = '';
                        }
                    }
                    wipeTilesRef.current = [];
                    requestAnimationFrame({
                        "Imagefilm.useCallback[drawWipe]": ()=>requestAnimationFrame({
                                "Imagefilm.useCallback[drawWipe]": ()=>{
                                    if (!wipeGridRef.current) canvas.getContext('2d')?.clearRect(0, 0, grid.width, grid.height);
                                }
                            }["Imagefilm.useCallback[drawWipe]"])
                    }["Imagefilm.useCallback[drawWipe]"]);
                }
                return;
            }
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            if (!wipeGridRef.current) {
                const dpr = Math.min(2, window.devicePixelRatio || 1);
                const grid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$hexWipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexWipeGrid"])(root.clientWidth, root.clientHeight);
                canvas.width = Math.round(grid.width * dpr);
                canvas.height = Math.round(grid.height * dpr);
                ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                wipeGridRef.current = grid;
                wipeOriginRef.current = null;
                const origin = cut ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$wipeOrigins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WIPE_ORIGIN_OF_BEAT"][cut.beat] : undefined;
                const stage = stageRef.current;
                const band = root.getBoundingClientRect();
                wipeTilesRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$hexWipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collectWipeTiles"])(root, dataTestId, band);
                if (origin && stage) {
                    // Weltpunkt → Lage in der Bühne → Pixel im Band (die Bühne sitzt mit Innenabstand im Band)
                    const box = stage.getBoundingClientRect();
                    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stageLayout"])(box.width / Math.max(1, box.height));
                    const [x, y] = origin.at(layout === 'portrait');
                    const spot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["worldToStage"])(x, y, layout);
                    wipeOriginRef.current = {
                        x: box.left - band.left + spot.left / 100 * box.width,
                        y: box.top - band.top + spot.top / 100 * box.height
                    };
                }
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$hexWipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["drawHexWipe"])(ctx, wipeGridRef.current, progress, color, wipeOriginRef.current);
            const tiles = wipeTilesRef.current;
            if (tiles.length > 0) {
                const flipped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$hexWipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flippedEdgeTiles"])(tiles, wipeGridRef.current, progress, wipeOriginRef.current);
                const dirty = new Set();
                tiles.forEach({
                    "Imagefilm.useCallback[drawWipe]": (tile, i)=>{
                        if (tile.flipped === flipped[i]) return;
                        tile.flipped = flipped[i];
                        if (tile.full) {
                            dirty.add(tile.full);
                            return;
                        }
                        // Füllung und Kontur der Kachel hängen an ihrer Farbe (currentColor)
                        tile.el.style.color = flipped[i] ? color : '';
                        tile.el.style.fill = flipped[i] ? color : '';
                    }
                }["Imagefilm.useCallback[drawWipe]"]);
                // #1952: gewechselte volle Kacheln liegen als eigener Pfad über ihrem Gruppenpfad
                for (const full of dirty)(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$hexWipe$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["paintFlippedFullTiles"])(full, tiles, color);
            }
        }
    }["Imagefilm.useCallback[drawWipe]"], [
        dataTestId
    ]);
    const syncCaption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Imagefilm.useCallback[syncCaption]": ()=>{
            const t = timeRef.current;
            const caption = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captionAt"])(t);
            const el = captionRef.current;
            if (el) {
                const text = caption ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visibleCaptionText"])(caption, captions[caption.id] ?? '', t) : '';
                if (el.textContent !== text) el.textContent = text;
                const full = caption ? (captions[caption.id] ?? '').length : 0;
                // Schreibmaschinen-Cursor, solange getippt wird
                setData(el, 'captionId', caption?.id ?? '');
                setData(el, 'visibleChars', String(text.length));
                setData(el, 'typing', caption && text.length < full ? 'true' : 'false');
            }
            // Namen der vier Wege: erscheinen mit ihrer Wabe, blenden mit der Folie aus
            for (const group of LABEL_GROUPS){
                const labels = labelRefs.current[group.id];
                if (labels) showLabels(labels, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(group.progress, t) * group.gain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(group.opacity, t));
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$EndLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["showEndLinks"])(endLinkRefs.current, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(END_LINKS_TRACK, t));
            const root = rootRef.current;
            if (root) {
                setData(root, 'sceneId', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markerAt"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILM"], t)?.id ?? '');
                if (slides) {
                    // Im Farbwechsel steht die Filmzeit, der Wabenwischer läuft in Wiedergabezeit (#1513)
                    const wipe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$filmClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wipeAt"])(playRef.current);
                    const slide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slideAt"])(t);
                    const shown = wipe ? wipe.progress >= 0.5 ? wipe.cut.to : wipe.cut.from : slide.slide;
                    const background = wipe ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_COLORS"][wipe.cut.from].background : slide.background;
                    const text = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_COLORS"][shown].text;
                    drawWipe(wipe ? wipe.progress : -1, wipe ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_COLORS"][wipe.cut.to].background : background, wipe?.cut);
                    shadowRef.current = wipe ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHADOW_OF_SLIDE"][wipe.cut.from] + (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHADOW_OF_SLIDE"][wipe.cut.to] - __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHADOW_OF_SLIDE"][wipe.cut.from]) * wipe.progress : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHADOW_OF_SLIDE"][slide.slide];
                    setData(root, 'bg', shown);
                    // #2175: die Folien stehen in beiden Themes in den Markenfarben — der Kopf liest den echten Wert
                    setData(root, 'headerHex', __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_COLORS"][shown].background);
                    setData(root, 'wipe', wipe ? 'true' : 'false');
                    const wipeFrom = wipe ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$wipeOrigins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WIPE_ORIGIN_OF_BEAT"][wipe.cut.beat]?.from ?? 'edge' : '';
                    setData(root, 'wipeFrom', wipeFrom);
                    // geht der Wischer von der Charge aus, steht sie fast sofort auf der neuen Folie
                    chargeSlideRef.current = wipe ? wipe.progress >= (wipeFrom === 'charge' ? CHARGE_SWITCH_AT : 0.5) ? wipe.cut.to : wipe.cut.from : slide.slide;
                    if (shownEdges) setData(root, 'edgeColor', shown);
                    if (root.style.getPropertyValue('--film-bg') !== background) root.style.setProperty('--film-bg', background);
                    if (root.style.getPropertyValue('--film-text') !== text) root.style.setProperty('--film-text', text);
                }
            }
        }
    }["Imagefilm.useCallback[syncCaption]"], [
        timeRef,
        playRef,
        captions,
        slides,
        shownEdges,
        drawWipe
    ]);
    const fallbackState = sceneState === 'fallback' || sceneState === 'lost';
    // Am Ende steht der Takt auf voller Länge (#1513): dann liegt der Neustart im Zeichen
    const ended = running && !playing && progress >= 1;
    const animating = playing && visible && running;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Imagefilm.useEffect": ()=>{
            if (fallbackState || !animating) return;
            let frame = 0;
            const loop = {
                "Imagefilm.useEffect.loop": ()=>{
                    syncCaption();
                    frame = requestAnimationFrame(loop);
                }
            }["Imagefilm.useEffect.loop"];
            frame = requestAnimationFrame(loop);
            return ({
                "Imagefilm.useEffect": ()=>cancelAnimationFrame(frame)
            })["Imagefilm.useEffect"];
        }
    }["Imagefilm.useEffect"], [
        fallbackState,
        animating,
        syncCaption
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Imagefilm.useEffect": ()=>{
            if (!fallbackState && !animating) syncCaption();
        }
    }["Imagefilm.useEffect"], [
        fallbackState,
        animating,
        progress,
        syncCaption
    ]);
    const handleSeek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Imagefilm.useCallback[handleSeek]": (event)=>{
            const rect = event.currentTarget.getBoundingClientRect();
            if (rect.width <= 0) return;
            const share = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
            // immer an den Anfang des angeklickten Beats (#1513)
            seek((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beatStartAt"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$filmClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toFilm"])(share * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$filmClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAY_DURATION"])));
        }
    }["Imagefilm.useCallback[handleSeek]"], [
        seek
    ]);
    const fallback = fallbackState;
    // Rückfall: Schlusszeile sichtbar, alle Zeilen für Screenreader
    // der Claim steht am Anfang und am Schluss — im Transkript einmal
    const transcript = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Imagefilm.useMemo[transcript]": ()=>[
                ...new Set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAPTIONS"].map({
                    "Imagefilm.useMemo[transcript]": (c)=>captions[c.id]
                }["Imagefilm.useMemo[transcript]"]).filter(Boolean))
            ]
    }["Imagefilm.useMemo[transcript]"], [
        captions
    ]);
    const lastCaption = captions[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAPTIONS"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAPTIONS"].length - 1].id] ?? '';
    const palette = theme.palette.default;
    // Mit Folien kommen Band- und Textfarbe aus den CSS-Variablen, die syncCaption setzt
    const bandColor = slides ? `var(--film-bg, ${colors.background})` : backgroundColor(background, palette);
    const stageColor = slides ? 'transparent' : colors.background;
    const captionColor = slides ? `var(--film-text, ${colors.text})` : colors.text;
    // Stabile Props für die memoisierte Bühne (#1496): der Fortschritt rendert
    // den Organismus 20×/s neu, die Szene darf dabei nicht mitrendern
    const placeholder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Imagefilm.useMemo[placeholder]": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                        media: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTRAIT_QUERY"],
                        srcSet: PORTRAIT_POSTER.srcSet,
                        sizes: POSTER_SIZES
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                        lineNumber: 611,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Poster"], {
                        src: POSTER.src,
                        srcSet: POSTER.srcSet,
                        sizes: POSTER_SIZES,
                        width: POSTER.width,
                        height: POSTER.height,
                        decoding: "async",
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                        lineNumber: 612,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                lineNumber: 610,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    }["Imagefilm.useMemo[placeholder]"], []);
    const fallbackNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Imagefilm.useMemo[fallbackNode]": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                media: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PORTRAIT_QUERY"],
                                srcSet: PORTRAIT_POSTER.srcSet,
                                sizes: POSTER_SIZES,
                                "data-testid": `${dataTestId}-fallback-poster-portrait`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                lineNumber: 629,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Poster"], {
                                "data-testid": `${dataTestId}-fallback-poster`,
                                src: POSTER.src,
                                srcSet: POSTER.srcSet,
                                sizes: POSTER_SIZES,
                                width: POSTER.width,
                                height: POSTER.height,
                                decoding: "async",
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                lineNumber: 635,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                        lineNumber: 628,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Caption"], {
                        as: "p",
                        $color: captionColor,
                        "data-testid": `${dataTestId}-fallback-caption`,
                        children: lastCaption
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                        lineNumber: 646,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transcript"], {
                        "data-testid": `${dataTestId}-fallback-transcript`,
                        "data-captions": transcript.length,
                        children: transcript.map({
                            "Imagefilm.useMemo[fallbackNode]": (text, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: text
                                }, i, false, {
                                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                    lineNumber: 651,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                        }["Imagefilm.useMemo[fallbackNode]"])
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                        lineNumber: 649,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                lineNumber: 627,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    }["Imagefilm.useMemo[fallbackNode]"], [
        dataTestId,
        captionColor,
        lastCaption,
        transcript
    ]);
    const stage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Imagefilm.useMemo[stage]": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmStage, {
                timeRef: timeRef,
                colors: colors,
                playing: playing,
                slides: slides,
                onReady: handleStageReady,
                shadowRef: shadowRef,
                bleed: bleed,
                chargeSlideRef: chargeSlideRef
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                lineNumber: 660,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    }["Imagefilm.useMemo[stage]"], [
        timeRef,
        colors,
        playing,
        slides,
        handleStageReady,
        bleed
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        ref: rootRef,
        className: className,
        ...dataAttributes,
        "data-testid": dataTestId,
        "data-playing": playing ? 'true' : 'false',
        "data-scene-state": sceneState,
        "data-color-scheme": colorScheme,
        "data-slides": slides ? 'true' : 'false',
        "data-layout": layout,
        "data-save-data": saveData ? 'true' : 'false',
        "data-ended": ended ? 'true' : 'false',
        $background: bandColor,
        $edges: shownEdges,
        children: [
            slides && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WipeLayer"], {
                ref: wipeRef,
                "aria-hidden": "true",
                "data-testid": `${dataTestId}-wipe`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                lineNumber: 690,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)),
            shownEdges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexEdge"], {
                edges: shownEdges,
                fill: slides ? SLIDE_EDGE_FILL : undefined,
                dataTestId: `${dataTestId}-edge`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                lineNumber: 692,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    xs: 12,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage"], {
                        ref: stageRef,
                        $background: stageColor,
                        "data-layout": layout,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$SceneCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneCanvas"], {
                                dataTestId: `${dataTestId}-stage`,
                                camera: CAMERA,
                                shadows: true,
                                frameloop: playing ? 'always' : 'demand',
                                onStateChange: setSceneState,
                                onVisibilityChange: setVisible,
                                placeholder: placeholder,
                                holdPlaceholder: !firstFrameDrawn,
                                bleed: true,
                                deferPreload: true,
                                still: saveData,
                                fallback: fallbackNode,
                                children: stage
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                lineNumber: 697,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            !fallback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Caption"], {
                                        ref: captionRef,
                                        $color: captionColor,
                                        "data-testid": `${dataTestId}-caption`,
                                        "data-typing": "false",
                                        "aria-live": "off"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                        lineNumber: 715,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    LABEL_GROUPS.map((group)=>group.frames.map((frame, i)=>{
                                            // Begriffe mit fester Farbe (#1964): Kontrast zum Grund ihrer Folie bzw. des Theme-Schemas
                                            const term = group.beat ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TERMS_OF_BEAT"][group.beat]?.[i] ?? null : null;
                                            const ground = slides && group.beat ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["beatColors"])(group.beat).background : colors.background;
                                            // Folie 2 und 3 (#1975): Name weiß auf der Folie, ohne Folien in der Schriftfarbe des Grunds
                                            const termText = group.white ? slides ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ON_TERM"] : captionColor : term ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["termColor"])(term, ground) : captionColor;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StageLabel"], {
                                                ref: (el)=>{
                                                    const labels = labelRefs.current[group.id] ?? [];
                                                    labels[i] = el;
                                                    labelRefs.current[group.id] = labels;
                                                },
                                                $landscape: frame.landscape,
                                                $portrait: frame.portrait,
                                                $size: group.size,
                                                $color: termText,
                                                "data-testid": `${dataTestId}-${group.id}-${i}`,
                                                "data-term": term ?? undefined,
                                                "data-name-tone": group.white ? 'white' : term ? 'term' : undefined,
                                                "data-shown": "false",
                                                children: labelTexts[group.id][i]
                                            }, `${group.id}-${i}`, false, {
                                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                                lineNumber: 730,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$EndLinks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EndLinks"], {
                                        dataTestId: dataTestId,
                                        labels: endLinkLabels,
                                        navLabel: tr('imagefilm.endlinks', {
                                            defaultValue: 'Weiter auf plastship'
                                        }),
                                        tone: slides || colorScheme === 'dark' ? 'overlay' : 'light',
                                        textColor: slides ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$imagefilmPalette$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ON_TERM"] : captionColor,
                                        linkRefs: endLinkRefs,
                                        pathname: pathname ?? '/'
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                        lineNumber: 751,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Replay"], {
                                        type: "button",
                                        onClick: play,
                                        "data-testid": `${dataTestId}-replay`,
                                        "aria-label": tr('imagefilm.replay', {
                                            defaultValue: 'Noch einmal abspielen'
                                        }),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$IconPlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlay"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                            lineNumber: 767,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                        lineNumber: 761,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayToggle"], {
                                                type: "button",
                                                $playing: playing,
                                                onClick: toggle,
                                                "data-testid": `${dataTestId}-play-toggle`,
                                                "data-playing": playing ? 'true' : 'false',
                                                "aria-label": playing ? tr('imagefilm.pause', {
                                                    defaultValue: 'Pause'
                                                }) : tr('imagefilm.play', {
                                                    defaultValue: 'Abspielen'
                                                }),
                                                children: playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPause"], {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$IconPlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlay"], {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                                    lineNumber: 783,
                                                    columnNumber: 48
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                                lineNumber: 771,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressTrack"], {
                                                role: "slider",
                                                tabIndex: 0,
                                                "aria-label": tr('imagefilm.progress', {
                                                    defaultValue: 'Fortschritt'
                                                }),
                                                "aria-valuemin": 0,
                                                "aria-valuemax": Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$filmClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAY_DURATION"]),
                                                "aria-valuenow": Math.round(progress * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$filmClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAY_DURATION"]),
                                                "data-testid": `${dataTestId}-progress`,
                                                "data-progress": progress.toFixed(3),
                                                onClick: handleSeek,
                                                onKeyDown: (event)=>{
                                                    if (event.key === 'ArrowRight') seek((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepBeat"])(timeRef.current, 1));
                                                    if (event.key === 'ArrowLeft') seek((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepBeat"])(timeRef.current, -1));
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressFill"], {
                                                        $progress: progress
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                                        lineNumber: 800,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILM"].markers.slice(1).map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SceneMark"], {
                                                            $at: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$filmClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPlayback"])(m.at) / __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$filmClock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAY_DURATION"],
                                                            "data-testid": `${dataTestId}-mark-${m.id}`
                                                        }, m.id, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                                            lineNumber: 802,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                                lineNumber: 785,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                        lineNumber: 770,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                                lineNumber: 714,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                        lineNumber: 696,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                    lineNumber: 695,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
                lineNumber: 694,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx",
        lineNumber: 675,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Imagefilm, "1FhPanDno4dig0s7fMCxOvKX+Qw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useMediaQuery$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$useSaveData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveData"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useTimeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTimeline"]
    ];
});
_c3 = Imagefilm;
const IMAGEFILM_CAPTION_IDS = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAPTIONS"].map(_c4 = (c)=>c.id);
_c5 = IMAGEFILM_CAPTION_IDS;
const __TURBOPACK__default__export__ = Imagefilm;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "FilmStage");
__turbopack_context__.k.register(_c1, "CLASS_NAMES$RANK_CLASSES.map");
__turbopack_context__.k.register(_c2, "CLASS_NAMES");
__turbopack_context__.k.register(_c3, "Imagefilm");
__turbopack_context__.k.register(_c4, "IMAGEFILM_CAPTION_IDS$CAPTIONS.map");
__turbopack_context__.k.register(_c5, "IMAGEFILM_CAPTION_IDS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/hexWipe.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WIPE_FILL_AT",
    ()=>WIPE_FILL_AT,
    "WIPE_FLIP_AT",
    ()=>WIPE_FLIP_AT,
    "WIPE_OVERLAP",
    ()=>WIPE_OVERLAP,
    "WIPE_TILT",
    ()=>WIPE_TILT,
    "cellProgress",
    ()=>cellProgress,
    "collectWipeTiles",
    ()=>collectWipeTiles,
    "drawHexWipe",
    ()=>drawHexWipe,
    "flippedEdgeTiles",
    ()=>flippedEdgeTiles,
    "hexWipeGrid",
    ()=>hexWipeGrid,
    "orderEdgeTiles",
    ()=>orderEdgeTiles,
    "paintFlippedFullTiles",
    ()=>paintFlippedFullTiles,
    "subpathBoxes",
    ()=>subpathBoxes,
    "wipeReach",
    ()=>wipeReach
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
;
const WIPE_TILT = -14 * Math.PI / 180;
const WIPE_FILL_AT = 0.9;
/** Anteil des Fortschritts, über den sich der Einsatz über die Fläche verteilt (von rechts nach links bzw. vom Ursprung nach außen) */ const SPREAD = 0.5;
/** Zufälliger Versatz je Kachel, damit die Front nicht als gerade Linie läuft */ const JITTER = 0.1;
/** Wachsdauer einer Kachel (Anteil des Fortschritts) */ const GROW = WIPE_FILL_AT - SPREAD - JITTER;
/** Überstand je Seite in px gegen Haarlinien zwischen fertigen Kacheln */ const BLEED = 1;
const WIPE_OVERLAP = 1.25;
const WIPE_FLIP_AT = 0.5;
/** Zufall 0…1 je Zelle, stabil */ const cellSeed = (row, col)=>{
    const v = Math.sin(row * 12.9898 + col * 78.233) * 43758.5453;
    return v - Math.floor(v);
};
const easeOut = (x)=>1 - (1 - x) ** 3;
const wipeReach = (width, height, origin)=>Math.max(Math.hypot(origin.x, origin.y), Math.hypot(width - origin.x, origin.y), Math.hypot(origin.x, height - origin.y), Math.hypot(width - origin.x, height - origin.y));
const cellProgress = (cell, width, p, origin, reach = 0)=>{
    if (p <= 0) return 0;
    if (p >= WIPE_FILL_AT) return 1;
    const fromRight = width > 0 ? 1 - Math.min(1, Math.max(0, cell.cx / width)) : 0;
    const lag = origin ? reach > 0 ? Math.min(1, Math.hypot(cell.cx - origin.x, cell.cy - origin.y) / reach) : 0 : fromRight;
    const delay = lag * SPREAD + cellSeed(cell.row, cell.col) * JITTER;
    const local = (p - delay) / GROW;
    return local <= 0 ? 0 : local >= 1 ? 1 : easeOut(local);
};
const hexWipeGrid = (width, height)=>({
        width,
        height,
        cells: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexGridCells"])(width, height, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnsForWidth"])(width))
    });
const drawHexWipe = (ctx, grid, p, color, origin)=>{
    ctx.clearRect(0, 0, grid.width, grid.height);
    if (p <= 0) return;
    ctx.fillStyle = color;
    if (p >= WIPE_FILL_AT) {
        ctx.fillRect(0, 0, grid.width, grid.height);
        return;
    }
    const reach = origin ? wipeReach(grid.width, grid.height, origin) : 0;
    ctx.beginPath();
    for (const cell of grid.cells){
        const t = cellProgress(cell, grid.width, p, origin, reach);
        if (t <= 0) continue;
        const h = (cell.size / 2 + BLEED) * t * WIPE_OVERLAP;
        const a = WIPE_TILT * (1 - t);
        const c = Math.cos(a);
        const s = Math.sin(a);
        // Sechseck mit Spitze oben in einem Quadrat der halben Kantenlänge h (wie die Slider-Kacheln)
        const pts = [
            [
                0,
                -h
            ],
            [
                h,
                -h / 2
            ],
            [
                h,
                h / 2
            ],
            [
                0,
                h
            ],
            [
                -h,
                h / 2
            ],
            [
                -h,
                -h / 2
            ]
        ];
        pts.forEach(([x, y], i)=>{
            const px = cell.cx + c * x - s * y;
            const py = cell.cy + s * x + c * y;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        });
        ctx.closePath();
    }
    ctx.fill();
};
const flippedEdgeTiles = (tiles, grid, p, origin)=>{
    const reach = origin ? wipeReach(grid.width, grid.height, origin) : 0;
    return tiles.map((tile)=>cellProgress(tile, grid.width, p, origin, reach) >= WIPE_FLIP_AT);
};
const subpathBoxes = (d)=>(d.match(/M[^M]*/g) ?? []).map((part)=>{
        const sub = part.trim();
        const n = (sub.match(/-?\d+(?:\.\d+)?(?:e-?\d+)?/gi) ?? []).map(Number);
        let left = Infinity;
        let top = Infinity;
        let right = -Infinity;
        let bottom = -Infinity;
        for(let i = 0; i + 1 < n.length; i += 2){
            left = Math.min(left, n[i]);
            right = Math.max(right, n[i]);
            top = Math.min(top, n[i + 1]);
            bottom = Math.max(bottom, n[i + 1]);
        }
        return {
            d: sub,
            left,
            top,
            right,
            bottom
        };
    });
const orderEdgeTiles = (tiles)=>[
        ...tiles
    ].sort((a, b)=>Math.abs(a.cy - b.cy) > 1 ? a.cy - b.cy : a.cx - b.cx);
const SVG_NS = 'http://www.w3.org/2000/svg';
const collectWipeTiles = (root, dataTestId, band)=>{
    const tiles = [];
    for (const group of Array.from(root.querySelectorAll(`[data-testid^="${dataTestId}-edge-outer-"]`))){
        const own = [];
        for (const el of Array.from(group.querySelectorAll(':scope > path'))){
            if (el.getAttribute('data-wipe') === 'true') continue;
            if (el.getAttribute('data-full') === 'true') {
                const svg = el.ownerSVGElement?.getBoundingClientRect();
                const left = (svg?.left ?? 0) - band.left;
                const top = (svg?.top ?? 0) - band.top;
                const full = {
                    path: el,
                    overlay: null
                };
                for (const box of subpathBoxes(el.getAttribute('d') ?? '')){
                    own.push({
                        el,
                        full,
                        d: box.d,
                        flipped: false,
                        cx: left + (box.left + box.right) / 2,
                        cy: top + (box.top + box.bottom) / 2,
                        top: top + box.top
                    });
                }
            } else {
                const box = el.getBoundingClientRect();
                own.push({
                    el,
                    flipped: false,
                    cx: box.left - band.left + box.width / 2,
                    cy: box.top - band.top + box.height / 2,
                    top: box.top - band.top
                });
            }
        }
        for (const { top, ...tile } of orderEdgeTiles(own)){
            tiles.push({
                ...tile,
                row: Math.round(top),
                col: tiles.length
            });
        }
    }
    return tiles;
};
const paintFlippedFullTiles = (full, tiles, color)=>{
    const d = tiles.filter((tile)=>tile.full === full && tile.flipped).map((tile)=>tile.d).join(' ');
    if (!full.overlay) {
        const overlay = full.path.ownerDocument.createElementNS(SVG_NS, 'path');
        overlay.setAttribute('data-full', 'true');
        overlay.setAttribute('data-wipe', 'true');
        overlay.setAttribute('fill-rule', 'nonzero');
        overlay.style.setProperty('--alpha', full.path.style.getPropertyValue('--alpha') || '1');
        full.path.parentNode?.appendChild(overlay);
        full.overlay = overlay;
    }
    full.overlay.setAttribute('d', d);
    full.overlay.style.color = color;
    full.overlay.style.fill = color;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/imagefilmPalette.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CYCLE_TERMS",
    ()=>CYCLE_TERMS,
    "DIMENSION_COLORS",
    ()=>DIMENSION_COLORS,
    "DIMENSION_TONES",
    ()=>DIMENSION_TONES,
    "FILM_DIMENSIONS",
    ()=>FILM_DIMENSIONS,
    "FILM_TERMS",
    ()=>FILM_TERMS,
    "MATCH_EDGE",
    ()=>MATCH_EDGE,
    "ON_DIMENSION",
    ()=>ON_DIMENSION,
    "ON_TERM",
    ()=>ON_TERM,
    "STREAM_TERMS",
    ()=>STREAM_TERMS,
    "SURFACE_ICON_CONTRAST",
    ()=>SURFACE_ICON_CONTRAST,
    "SURFACE_LIGHTNESS_STEP",
    ()=>SURFACE_LIGHTNESS_STEP,
    "SURFACE_TEXT_CONTRAST",
    ()=>SURFACE_TEXT_CONTRAST,
    "TERMS_OF_BEAT",
    ()=>TERMS_OF_BEAT,
    "TERM_COLORS",
    ()=>TERM_COLORS,
    "WAY_TERMS",
    ()=>WAY_TERMS,
    "dimensionColor",
    ()=>dimensionColor,
    "hslOf",
    ()=>hslOf,
    "hslToHex",
    ()=>hslToHex,
    "surfaceFor",
    ()=>surfaceFor,
    "termColor",
    ()=>termColor,
    "termSurface",
    ()=>termSurface,
    "toneFor",
    ()=>toneFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/darkTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/color.ts [app-client] (ecmascript)");
;
;
;
/*
 * Feste Farbe je Begriff im Imagefilm (#1964): die einzige Stelle, an der ein
 * Begriff seine Farbe bekommt. Trägt ein Begriff auf einer Folie eine Farbe,
 * trägt er sie auf jeder späteren auch (Rücknahme, Sortierung, Aufbereitung
 * auf Folie 3 und im Kreislauf am Schluss). Alle Werte kommen aus dem Theme.
 *
 * Jede Farbe ist eine Familie mit zwei Tönen: hell für dunklen Grund
 * (Markenblau, Dark Theme), dunkel für hellen Grund (weißes Band im Light
 * Theme). Welcher Ton gilt, entscheidet der Kontrast zum Grund (toneFor).
 * imagefilmPalette.test.ts prüft Name ≥ 4,5:1 und Rand ≥ 3:1 auf jedem Grund.
 *
 * Folie 2 und 3 (#1975): die Wabe eines Begriffs ist eine Fläche in seiner
 * Farbe, Motiv und Name darauf sind Weiß (ON_TERM). Ist der Ton für Weiß zu
 * hell, wird die Fläche abgedunkelt, nie das Weiß eingefärbt (termSurface).
 */ const light = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette;
const dark = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastshipDark"].palette;
const FILM_TERMS = [
    'market',
    'collection',
    'custom',
    'system',
    'takeback',
    'sorting',
    'reprocessing'
];
const TERM_COLORS = {
    // Markt: Gelb — Handel und Wert
    market: {
        onDark: light.default.tertiary,
        onLight: light.status.warning.text
    },
    // Werksentsorgung: Hellblau — Werk und Abholung
    collection: {
        onDark: dark.status.info.text,
        onLight: light.status.info.text
    },
    // Produktion nach Maß: Rosé — Fertigung
    custom: {
        onDark: dark.status.error.text,
        onLight: light.status.error.text
    },
    // Systemmengen: Mint — die Systeme im RIGK-Verbund
    system: {
        onDark: dark.status.success.text,
        onLight: light.status.success.text
    },
    // Rücknahme: Cyan — Sammlung
    takeback: {
        onDark: dark.default.info,
        onLight: light.default.info
    },
    // Sortierung: Silber — Trennen
    sorting: {
        onDark: dark.status.neutral.text,
        onLight: light.status.neutral.text
    },
    // Aufbereitung: Grün — daraus wird Rezyklat, der grüne Rand der Charge folgt
    reprocessing: {
        onDark: dark.default.secondary,
        onLight: light.site.greenText
    }
};
const MATCH_EDGE = {
    onDark: light.default.secondary,
    onLight: light.site.greenDark
};
const WAY_TERMS = [
    'market',
    'collection',
    'custom',
    'system'
];
const STREAM_TERMS = [
    'takeback',
    'sorting',
    'reprocessing'
];
const CYCLE_TERMS = [
    null,
    null,
    ...STREAM_TERMS,
    null
];
const TERMS_OF_BEAT = {
    bw: WAY_TERMS,
    b1: STREAM_TERMS,
    b8: CYCLE_TERMS
};
const toneFor = (tone, ground)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(tone.onDark, ground) >= (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(tone.onLight, ground) ? tone.onDark : tone.onLight;
const termColor = (term, ground)=>toneFor(TERM_COLORS[term], ground);
const ON_TERM = light.default.white;
const SURFACE_TEXT_CONTRAST = 4.5;
const SURFACE_ICON_CONTRAST = 3;
/** Schritt der Abdunklung in HSL-Helligkeit */ const SURFACE_STEP = 0.01;
const toHsl = (hex)=>{
    const [r, g, b] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToRgb"])(hex).map((v)=>v / 255);
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    if (max === min) return [
        0,
        0,
        l
    ];
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    const h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return [
        h / 6,
        s,
        l
    ];
};
const fromHsl = ([h, s, l])=>{
    if (s === 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbToHex"])([
        l,
        l,
        l
    ].map((v)=>Math.round(v * 255)));
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const channel = (t)=>{
        const u = t < 0 ? t + 1 : t > 1 ? t - 1 : t;
        if (u < 1 / 6) return p + (q - p) * 6 * u;
        if (u < 1 / 2) return q;
        if (u < 2 / 3) return p + (q - p) * (2 / 3 - u) * 6;
        return p;
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rgbToHex"])([
        channel(h + 1 / 3),
        channel(h),
        channel(h - 1 / 3)
    ].map((v)=>Math.round(v * 255)));
};
const surfaceFor = (color)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(ON_TERM, color) >= SURFACE_TEXT_CONTRAST) return color;
    const [h, s, l] = toHsl(color);
    for(let step = 1; l - step * SURFACE_STEP > 0; step++){
        const next = fromHsl([
            h,
            s,
            l - step * SURFACE_STEP
        ]);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$color$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateContrast"])(ON_TERM, next) >= SURFACE_TEXT_CONTRAST) return next;
    }
    return fromHsl([
        h,
        s,
        0
    ]);
};
const termSurface = (term, ground)=>surfaceFor(termColor(term, ground));
const hslOf = toHsl;
const hslToHex = fromHsl;
const SURFACE_LIGHTNESS_STEP = SURFACE_STEP;
const FILM_DIMENSIONS = [
    'wrench',
    'optics',
    'odor',
    'purity'
];
const DIMENSION_TONES = {
    // Mechanik: Blau (status.info.text) — kräftiger und heller als das Markenblau
    wrench: light.status.info.text,
    // Optik: Himmelblau (Dark Theme default.info), abgedunkelt zu Cyan
    optics: dark.default.info,
    // Geruch: Beere (link.primary)
    odor: light.link.primary,
    // Reinheit: Smaragd (Dark Theme status.success.border) — bläulicher und dunkler als das Markengrün
    purity: dark.status.success.border
};
const DIMENSION_COLORS = Object.fromEntries(_c1 = FILM_DIMENSIONS.map(_c = (d)=>[
        d,
        surfaceFor(DIMENSION_TONES[d])
    ]));
_c2 = DIMENSION_COLORS;
const dimensionColor = (dimension)=>DIMENSION_COLORS[dimension];
const ON_DIMENSION = ON_TERM;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DIMENSION_COLORS$Object.fromEntries$FILM_DIMENSIONS.map");
__turbopack_context__.k.register(_c1, "DIMENSION_COLORS$Object.fromEntries");
__turbopack_context__.k.register(_c2, "DIMENSION_COLORS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$Imagefilm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/Imagefilm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/film.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/beats.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B0",
    ()=>B0,
    "B1",
    ()=>B1,
    "B2",
    ()=>B2,
    "B3",
    ()=>B3,
    "B4",
    ()=>B4,
    "B5",
    ()=>B5,
    "B6",
    ()=>B6,
    "B7",
    ()=>B7,
    "B8",
    ()=>B8,
    "BEATS",
    ()=>BEATS,
    "BM",
    ()=>BM,
    "BS",
    ()=>BS,
    "BW",
    ()=>BW,
    "PLATE_HANDOVER",
    ()=>PLATE_HANDOVER,
    "SHARED_TRACKS",
    ()=>SHARED_TRACKS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/types.ts [app-client] (ecmascript)");
;
;
;
;
/*
 * Drehbuch (#1497), seit #1513 mit rotem Faden: das plastship-Zeichen wird
 * zur Wabe und füllt sich mit Pellets — diese Charge erlebt, was plastship
 * mit einem Material tut, und wird am Ende wieder zum Zeichen.
 * Materialgeschichte mit der Charge: Auftakt (b0), vier Wege (bw), Rezyklat
 * (b1), Marktplatz (bm), Labor mit den vier Dimensionen (b3), Rating mit
 * Urkunde (b2), Box und Versand (b4). Dann vier Folien über plastship selbst,
 * ohne die Charge: Portal mit Nachweisen (b6), Partner (b5), ISO (b7), Server
 * in Deutschland (bs). Zum Schluss schließt ein Wabenweg den Kreislauf (b8),
 * die Wabe von plastship wird wieder zum Zeichen. Die Kennungen sind
 * historisch, die Reihenfolge steht in BEATS.
 *
 * Zeiten absolut, nach Lesezeit gesetzt (#1513): rund 15 Zeichen je Sekunde,
 * jeder Text steht mindestens 1 s, und solange die Zeile tippt, erscheint
 * nichts Neues, das man lesen müsste. Listen zählen in Stufen hoch (ein
 * Eintrag blendet 0,3 s ein, steht, dann der nächste), nach jedem
 * abgeschlossenen Schritt eine kurze Pause. Nach jeder Änderung an einer
 * Folie die Zeiten aller Folien prüfen (timing.test.ts).
 * Spur-Präfixe: b0…b8 je Beat; `monitor.*` für den Monitor aus b6;
 * `camera.*` für leichte Kamerafahrten (b4, b6 schräg für Tiefe).
 */ const t = (id, ...keys)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])(id, keys.map((a)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["k"])(...a)));
const HOME = [
    0,
    0,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAMERA_Z"]
];
const LOOK = [
    0,
    0,
    0
];
const TILT_SHIP = [
    1.2,
    -0.6,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAMERA_Z"] * 0.95
];
const TILT_PORTAL = [
    -1.0,
    -0.4,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CAMERA_Z"] * 0.97
];
/**
 * Stufen einer Liste: Eintrag i blendet ab `from + i · every` über `fade`
 * Sekunden ein und steht dann, bis der nächste kommt — so hat jeder Eintrag
 * Zeit, gelesen zu werden.
 */ const steps = (from, count, every, fade = 0.3)=>Array.from({
        length: count
    }, (_, i)=>[
            [
                from + i * every,
                i
            ],
            [
                from + i * every + fade,
                i + 1
            ]
        ]).flat();
const PLATE_HANDOVER = 2.5;
const SHARED_TRACKS = [
    t('monitor.opacity', [
        66.5,
        0
    ], [
        66.6,
        1
    ], [
        73.7,
        1
    ], [
        74,
        0
    ]),
    t('monitor.progress', [
        66.6,
        0
    ], [
        67.4,
        1,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
    ]),
    t('camera.position', [
        13.5,
        HOME
    ], [
        57.5,
        HOME
    ], [
        58.5,
        TILT_SHIP,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
    ], [
        65.7,
        TILT_SHIP
    ], [
        66.5,
        HOME,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
    ], [
        67.4,
        TILT_PORTAL,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
    ], [
        73.2,
        TILT_PORTAL
    ], [
        74,
        HOME,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
    ]),
    t('camera.lookAt', [
        13.5,
        LOOK
    ])
];
const B0 = {
    id: 'b0',
    from: 0,
    to: 4.5,
    tracks: [
        /** Schriftzug unter der Bildmarke */ t('b0.word', [
            0,
            1
        ], [
            2.6,
            1
        ], [
            3,
            0
        ]),
        /** das Zeichen bleibt stehen: erst das Prüfzeichen der vier Wege löst es ab (bw.logo) */ t('b0.logo', [
            0,
            1
        ], [
            4.5,
            1
        ]),
        /** die weiße Wabe bleibt stehen: ab PLATE_HANDOVER zeichnet Beat1 sie als Grund der Charge (harte Übergabe, gleiche Fläche) */ t('b0.plate', [
            0,
            1
        ], [
            PLATE_HANDOVER,
            1
        ], [
            PLATE_HANDOVER + 0.0001,
            0
        ]),
        /** grüne Welle, wenn der Schriftzug gegangen ist */ t('b0.wave', [
            3.2,
            0
        ], [
            4.3,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ])
    ]
};
/*
 * bw Vier Wege (#1513): jeder Weg kommt mit seinem Namen und zeichnet gleich
 * darauf seine Route zur großen Wabe — erst dann kommt der nächste. Sind alle
 * vier angekommen, löst das Prüfzeichen das plastship-Zeichen ab.
 */ /** Abstand zwischen zwei Wegen und Dauer einer Route */ const WAY_EVERY = 1.1;
const WAY_ROUTE = 0.7;
const BW = {
    id: 'bw',
    from: 4.5,
    to: 13.5,
    tracks: [
        t('bw.opacity', [
            4.5,
            0
        ], [
            4.8,
            1
        ], [
            13.1,
            1
        ], [
            13.5,
            0
        ]),
        /** vier Wege zum Rohstoff, einer nach dem anderen mit seinem Namen — erst wenn die Zeile getippt ist (0–4) */ t('bw.ways', ...steps(6.9, 4, WAY_EVERY)),
        /** Routen (0–4): sobald ein Weg da ist, läuft seine Route in die Wabe von plastship; Route i zeichnet sich von i bis i + 1 */ t('bw.flow', ...steps(7.25, 4, WAY_EVERY, WAY_ROUTE)),
        /** das plastship-Zeichen steht weiter auf der Wabe, bis das Prüfzeichen es ablöst */ t('bw.logo', [
            4.5,
            1
        ], [
            11.3,
            1
        ], [
            11.7,
            0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN"]
        ]),
        /** … alle geprüft */ t('bw.check', [
            11.4,
            0
        ], [
            12,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ], [
            13.1,
            1
        ], [
            13.5,
            0
        ])
    ]
};
/*
 * b1 Rezyklat aus gesicherten Stoffströmen (#1513): rechts der großen Wabe
 * erscheinen die drei Stationen, aus denen das Rezyklat kommt; der Strom
 * läuft von einer zur nächsten und in die Wabe, dann fallen die Pellets.
 */ /** Abstand zwischen zwei Stationen und Dauer einer Strecke des Stroms */ const STREAM_EVERY = 1;
const STREAM_LEG = 0.6;
const B1 = {
    id: 'b1',
    from: 13.5,
    to: 23.5,
    tracks: [
        /**
     * Der gesicherte Stoffstrom: Rücknahme, Sortierung, Aufbereitung erscheinen nacheinander mit ihrem
     * Namen (0–3) — erst wenn die Zeile getippt ist
     */ t('b1.stations', ...steps(15.4, 3, STREAM_EVERY)),
        /** der Strom läuft von jeder Station zur nächsten, von der letzten in die große Wabe (0–3; Strecke k von k bis k + 1) */ t('b1.stream', ...steps(15.75, 3, STREAM_EVERY, STREAM_LEG)),
        /** Stationen und Strom gehen, bevor die Charge in den Marktplatz schrumpft */ t('b1.stream.opacity', [
            13.5,
            1
        ], [
            22.3,
            1
        ], [
            22.7,
            0
        ]),
        /** der grüne Rand zeichnet sich, wenn der Strom ankommt: aus der weißen Wabe des Zeichens wird die Charge */ t('b1.hex.progress', [
            18.1,
            0
        ], [
            18.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** Sekunden der vorausgerechneten Schüttung (#1513), etwas gerafft: die Pellets fallen, sobald der Strom in der Wabe ist */ t('b1.pour.clock', [
            18.35,
            0
        ], [
            22.35,
            4.4
        ]),
        /**
     * Schon in bw, während die vier Wege erscheinen, wandert die große Wabe nach links an ihren
     * späteren Platz im Marktplatz (Querformat) — der Wechsel dorthin ist dann nur noch ein Schrumpfen
     */ t('b1.shift', [
            6.2,
            0
        ], [
            7.2,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** Die Charge reist durch den Film (#1513): 0 = große Wabe, 1 = Angebot im Marktplatz-Raster (Hochformat: auch der Weg dorthin) */ t('b1.move', [
            22.75,
            0
        ], [
            23.45,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** … ins Labor (nach dem Schnitt bm → b3) … */ t('b1.toLab', [
            32.1,
            0
        ], [
            32.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** … auf ihren Platz in der Treppe des Ratings (nach dem Schnitt b3 → b2) … */ t('b1.toRank', [
            41.1,
            0
        ], [
            41.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** … und in die Gitterbox (nach dem Schnitt b2 → b4): verpackt und verschickt */ t('b1.toBox', [
            57.6,
            0
        ], [
            58.4,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ])
    ]
};
const BM = {
    id: 'bm',
    from: 23.5,
    to: 32,
    tracks: [
        t('bm.opacity', [
            23.5,
            0
        ], [
            23.8,
            1
        ], [
            31.7,
            1
        ], [
            32,
            0
        ]),
        /** eins nach dem anderen: erst zeichnen sich die Angebote … */ t('bm.grow', [
            23.7,
            0
        ], [
            24.5,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        /** … dann fällt das Material hinein (vorausgerechnete Physik wie b1, leicht gerafft) … */ t('bm.pour.clock', [
            24.6,
            0
        ], [
            26.6,
            2.4
        ]),
        /** … dann erscheint plastship (die Zeile steht längst), und sein Suchstrahl läuft über die Angebote */ t('bm.buyer', [
            26.7,
            0
        ], [
            27.3,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        t('bm.search', [
            27.5,
            0
        ], [
            28.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** Verbindung plastship ↔ passende Angebote, die übrigen verblassen — dann steht das Ergebnis gut 1 s */ t('bm.links', [
            28.9,
            0
        ], [
            29.3,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ], [
            31.1,
            1
        ], [
            31.4,
            0
        ]),
        t('bm.others', [
            13.5,
            1
        ], [
            29.3,
            1
        ], [
            29.9,
            0
        ]),
        /** Platz der passenden Angebote: 0 = Raster des Marktplatzes, 1 = Treppe des Ratings — springt verdeckt, während das Labor läuft */ t('bm.gather', [
            32,
            0
        ], [
            32.05,
            1
        ])
    ]
};
const B3 = {
    id: 'b3',
    from: 32,
    to: 41,
    tracks: [
        t('b3.opacity', [
            32,
            0
        ], [
            32.3,
            1
        ], [
            40.7,
            1
        ], [
            41,
            0
        ]),
        t('b3.flask.opacity', [
            32.4,
            0
        ], [
            32.8,
            1
        ]),
        /** die Probe wandert aus der Charge in den Kolben, wenn die Zeile steht */ t('b3.sample.t', [
            34.3,
            0
        ], [
            35.1,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** die vier Dimensionen erscheinen nacheinander: Mechanik, Optik, Geruch, Reinheit (0–4) */ t('b3.dims', ...steps(35.1, 4, 0.9)),
        /** jede Dimension füllt sich kurz nach ihrem Erscheinen in ihrer Farbe: gemessen (0–4, gefüllt ab i + 1, #1993) */ t('b3.checks', [
            35,
            0
        ], [
            38.6,
            4
        ]),
        /** die Norm unter dem Kolben, wenn alle vier gemessen sind */ t('b3.norm', [
            38.9,
            0
        ], [
            39.2,
            1
        ])
    ]
};
/** Abstand zwischen zwei Metriken im Rating und Dauer, in der eine erscheint (Wabe, Name, Balken) */ const METRIC_EVERY = 0.75;
const METRIC_FADE = 0.4;
const B2 = {
    id: 'b2',
    from: 41,
    to: 57.5,
    tracks: [
        /** Die passenden Angebote stehen im Marktplatz (bm), treten für das Labor ab und kommen im Rating wieder, alle auf einer Höhe — erst wenn die Charge aus dem Labor auf ihrem Platz links ankommt, sonst überlagern sie sich */ t('b2.opacity', [
            23.5,
            0
        ], [
            23.8,
            1
        ], [
            31.1,
            1
        ], [
            31.7,
            0
        ], [
            41.4,
            0
        ], [
            41.8,
            1
        ], [
            57.2,
            1
        ], [
            57.5,
            0
        ]),
        t('b2.material', [
            13.5,
            1
        ], [
            31.1,
            1
        ], [
            31.7,
            0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ], [
            41.4,
            0
        ], [
            41.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ], [
            57,
            1
        ], [
            57.4,
            0,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /**
     * 1. Die vier Metriken kommen nacheinander (0–4), wenn die Zeile steht: oben die Wabe mit Namen,
     * in jeder Material-Wabe wächst zugleich ihr Balken — Metrik k von k bis k + 1
     */ t('b2.metrics', ...steps(42.9, 4, METRIC_EVERY, METRIC_FADE)),
        /** 2. Marktvergleich: die Messwerte ändern sich, steigende grün, fallende rot — 0 = Start-, 1 = neue Werte */ t('b2.values', [
            46.4,
            0
        ], [
            47.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** 3. Die Balken bleiben stehen, dann wird eingestuft: 0 = alle auf einer Höhe, 1 = aufsteigende Treppe nach den neuen Werten */ t('b2.rank.t', [
            48.6,
            0
        ], [
            50.2,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** Sprung statt Rampe: sonst färbt RankingBars je Frame alle Instanzen neu */ t('b2.highlight', [
            13.5,
            -1
        ], [
            50.24,
            -1
        ], [
            50.25,
            4
        ]),
        /** 4. Drei Klassen: Proven, Plus, Premium — je zwei Stufen der Treppe bekommen Farbe und Namen ihrer Klasse (0–3) */ t('b2.classes', ...steps(50.6, 3, 0.8)),
        /** die Siegerin bekommt das Klassen-Abzeichen (Monitored Materials), wenn ihre Klasse genannt ist, und trägt es weiter (#1513) */ t('b2.badge', [
            52.3,
            0
        ], [
            52.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        /** die übrigen Materialien, die Messbalken und die Klassen treten zurück … */ t('b2.others', [
            13.5,
            1
        ], [
            54.1,
            1
        ], [
            54.6,
            0
        ]),
        /** … die Verifizierungsurkunde von Monitored Materials skizziert sich (#1513) */ t('b2.cert', [
            54.5,
            0
        ], [
            55.7,
            1
        ])
    ]
};
const B4 = {
    id: 'b4',
    from: 57.5,
    to: 66.5,
    tracks: [
        t('b4.opacity', [
            57.5,
            0
        ], [
            57.8,
            1
        ], [
            66.2,
            1
        ], [
            66.5,
            0
        ]),
        /** Box steht, die Charge aus dem Rating wird hineingepackt (b1.toBox), dann Scan */ t('b4.box.opacity', [
            57.5,
            0
        ], [
            57.9,
            1
        ]),
        t('b4.scan.t', [
            59,
            0
        ], [
            60.2,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** die Karte baut sich auf, bevor die zweite Zeile tippt; Plaketten und Routen danach */ t('b4.map.reveal', [
            60.5,
            0
        ], [
            61.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        t('b4.pins', [
            61.7,
            0
        ], [
            62.5,
            1
        ]),
        t('b4.route', [
            62.9,
            0
        ], [
            64.4,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** eine zweite Lieferung quer dazu, kurz versetzt und in die Gegenrichtung (#1993): Ware fließt in beide Richtungen */ t('b4.route2', [
            63.3,
            0
        ], [
            64.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ])
    ]
};
const B6 = {
    id: 'b6',
    from: 66.5,
    to: 74,
    tracks: [
        /** Flugfortschritt der drei Karten, versetzt — ab dem Ende der Zeile */ t('b6.cards', [
            68.6,
            [
                0,
                0,
                0
            ]
        ], [
            69.4,
            [
                1,
                0,
                0
            ]
        ], [
            70.2,
            [
                1,
                1,
                0
            ]
        ], [
            71,
            [
                1,
                1,
                1
            ]
        ]),
        /** Nachhaltung: die Nachweise bleiben gültig, das Zeichen dreht sich (#1513) */ t('b6.refresh', [
            71.2,
            0
        ], [
            71.7,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ], [
            73.8,
            1
        ], [
            74,
            0
        ]),
        t('b6.ai.scale', [
            72,
            0
        ], [
            72.6,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ], [
            73.8,
            1
        ], [
            74,
            0
        ]),
        /** Laptop, Tablet, Handy zeichnen sich nach dem Monitor versetzt ein („geht überall“) */ t('b6.laptop', [
            67.3,
            0
        ], [
            68.1,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        t('b6.tablet', [
            67.6,
            0
        ], [
            68.4,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        t('b6.phone', [
            67.9,
            0
        ], [
            68.7,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ])
    ]
};
const B5 = {
    id: 'b5',
    from: 74,
    to: 82,
    tracks: [
        t('b5.opacity', [
            74,
            0
        ], [
            74.3,
            1
        ], [
            81.7,
            1
        ], [
            82,
            0
        ]),
        /** der Ansprechpartner steht in der Mitte */ t('b5.reveal', [
            74.1,
            0
        ], [
            74.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        /** vier Partnergruppen, eine nach der anderen mit ihrem Namen — erst wenn die Zeile getippt ist (0–4) */ t('b5.partners', ...steps(75.7, 4, 0.9)),
        /** je Gruppe: die Route vom Ansprechpartner läuft zu ihr, dann das Prüfzeichen (gebrochen 0–4, Beat5 teilt es auf) */ t('b5.checks', [
            76,
            0
        ], [
            79.6,
            4
        ]),
        /** „Ein Ansprechpartner" unter der Mitte, wenn alle vier geprüft sind */ t('b5.contact', [
            79.8,
            0
        ], [
            80.1,
            1
        ])
    ]
};
const B7 = {
    id: 'b7',
    from: 82,
    to: 90,
    tracks: [
        t('b7.opacity', [
            82,
            0
        ], [
            82.3,
            1
        ], [
            89.7,
            1
        ], [
            90,
            0
        ]),
        /** ISO 9001: Siegel prägt sich ein */ t('b7.seal', [
            82.3,
            0
        ], [
            83.5,
            1
        ]),
        /** drei kurze Punkte, was die Norm bedeutet, einer nach dem anderen (0–3) */ t('b7.points', ...steps(85, 3, 1.3))
    ]
};
const BS = {
    id: 'bs',
    from: 90,
    to: 98.5,
    tracks: [
        t('bs.opacity', [
            90,
            0
        ], [
            90.3,
            1
        ], [
            98.2,
            1
        ], [
            98.5,
            0
        ]),
        /** Deutschland: Waben von innen nach außen, dann zieht sich die Grenze darum */ t('bs.map.reveal', [
            90.3,
            0
        ], [
            91.7,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        t('bs.map.outline', [
            91.3,
            0
        ], [
            92.4,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        t('bs.pin', [
            92.4,
            0
        ], [
            92.9,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        /** drei Punkte, was gemeint ist und warum, einer nach dem anderen (0–3) */ t('bs.points', ...steps(93.2, 3, 1.3))
    ]
};
const B8 = {
    id: 'b8',
    from: 98.5,
    to: 111,
    tracks: [
        /** die Stationen erscheinen reihum, je Wabe versetzt (Beat8 verteilt den Fortschritt) */ t('b8.gather', [
            98.5,
            0
        ], [
            99.8,
            1
        ]),
        /** das RIGK-Zeichen in der Mitte */ t('b8.rigk', [
            98.6,
            0
        ], [
            99.2,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        /** eine Runde durch den Kreislauf (0–6): je Schritt eine Strecke, von plastship reihum zurück zu plastship */ t('b8.lap', [
            100.5,
            0
        ], [
            105.3,
            6
        ]),
        /** die Namen der Stationen (0–6): jeder erscheint, wenn der Weg bei seiner Station ankommt */ t('b8.names', ...steps(101.15, 6, 0.8)),
        /** die Namen gehen, bevor sich der Kreislauf zusammenzieht */ t('b8.names.opacity', [
            98.5,
            1
        ], [
            107,
            1
        ], [
            107.3,
            0
        ]),
        /** der Kreislauf zieht sich in die Mitte zusammen */ t('b8.merge', [
            107.2,
            0
        ], [
            107.8,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN"]
        ]),
        /** die weiße Wabe von plastship wächst zur weißen Wabe des Schlussbilds */ t('b8.grow', [
            107.5,
            0
        ], [
            108.05,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_IN_OUT"]
        ]),
        /** weiße Wabe springt aus dem zusammengezogenen Kreislauf, darauf das Zeichen in Blau und Grün */ t('b8.plate', [
            107.65,
            0
        ], [
            108.25,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        t('b8.logo', [
            108,
            0
        ], [
            108.65,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_POP"]
        ]),
        /** Schriftzug unter der Bildmarke */ t('b8.word', [
            108.4,
            0
        ], [
            109.1,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        /** zwei grüne Wellen als Wabenrand nach außen */ t('b8.wave', [
            107.75,
            0
        ], [
            109,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        t('b8.wave2', [
            108,
            0
        ], [
            109.2,
            1,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EASE_OUT"]
        ]),
        /**
     * Link-Waben um das Zeichen (#1993), nach Zeichen und Schriftzug reihum im Uhrzeigersinn (0–5):
     * kurz versetzt, alle vor dem Filmende; sie bleiben stehen, solange der Film beendet ist
     */ t('b8.endlinks', ...steps(109.2, 5, 0.3, 0.25))
    ]
};
const BEATS = [
    B0,
    BW,
    B1,
    BM,
    B3,
    B2,
    B4,
    B6,
    B5,
    B7,
    BS,
    B8
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/endLinks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "END_LINK_CELL_R",
    ()=>END_LINK_CELL_R,
    "END_LINK_FREE_SLOT",
    ()=>END_LINK_FREE_SLOT,
    "END_LINK_SLOTS",
    ()=>END_LINK_SLOTS,
    "END_LINK_STEPS",
    ()=>END_LINK_STEPS,
    "END_LINK_USED_SLOTS",
    ()=>END_LINK_USED_SLOTS,
    "endLinkAt",
    ()=>endLinkAt,
    "endLinkFrame",
    ()=>endLinkFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
;
const END_LINK_CELL_R = {
    landscape: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HEX_RADIUS"] / 4,
    portrait: 0.6
};
const END_LINK_STEPS = 2;
const END_LINK_SLOTS = [
    90,
    30,
    -30,
    -90,
    -150,
    150
];
const END_LINK_FREE_SLOT = 3;
const END_LINK_USED_SLOTS = END_LINK_SLOTS.map((_, i)=>i).filter(_c = (i)=>i !== END_LINK_FREE_SLOT);
_c1 = END_LINK_USED_SLOTS;
const endLinkAt = (slot, layout)=>{
    const r = END_LINK_CELL_R[layout];
    const a = END_LINK_SLOTS[slot] * Math.PI / 180;
    const d = 3 * r * END_LINK_STEPS;
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][0] + Math.cos(a) * d,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + Math.sin(a) * d
    ];
};
const percent = (value)=>Math.round(value * 1000) / 1000;
/** Abstand der Beschriftung zur Kachel (Welteinheiten) und ihre Breite */ const LABEL_GAP = 0.18;
const LABEL_WIDTH = {
    landscape: 3.6,
    portrait: 2.8
};
/**
 * Beschriftung: im Querformat rechts der Kacheln rechts und oben, links der
 * Kacheln links; im Hochformat ist neben den seitlichen Kacheln kein Platz —
 * dort steht der Text der oberen Kacheln darunter, der unteren darüber (unter
 * ihnen steht der Schriftzug), die obere Kachel trägt ihn rechts.
 */ const placeOf = (slot, layout)=>{
    const angle = END_LINK_SLOTS[slot];
    if (angle === 90) return 'right';
    if (layout === 'portrait') return angle > 0 ? 'below' : 'above';
    return Math.abs(angle) < 90 ? 'right' : 'left';
};
const endLinkFrame = (i, layout)=>{
    const slot = END_LINK_USED_SLOTS[i];
    const [x, y] = endLinkAt(slot, layout);
    const r = END_LINK_CELL_R[layout];
    const view = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stageView"])(layout);
    const spot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["worldToStage"])(x, y, layout);
    const place = placeOf(slot, layout);
    const half = Math.sqrt(3) / 2 * r;
    const tileWidth = 2 * half;
    const label = {
        place,
        gap: percent(place === 'below' || place === 'above' ? LABEL_GAP / 2 / (2 * r) * 100 : LABEL_GAP / tileWidth * 100),
        width: percent(LABEL_WIDTH[layout] / tileWidth * 100)
    };
    return {
        left: percent(spot.left),
        top: percent(spot.top),
        width: percent(tileWidth / view.width * 100),
        height: percent(2 * r / view.height * 100),
        label
    };
};
var _c, _c1;
__turbopack_context__.k.register(_c, "END_LINK_USED_SLOTS$END_LINK_SLOTS.map((_, i) => i).filter");
__turbopack_context__.k.register(_c1, "END_LINK_USED_SLOTS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/film.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAPTIONS",
    ()=>CAPTIONS,
    "FILM",
    ()=>FILM,
    "FILM_DURATION",
    ()=>FILM_DURATION,
    "SCENES",
    ()=>SCENES,
    "beatOf",
    ()=>beatOf,
    "beatStartAt",
    ()=>beatStartAt,
    "beatTime",
    ()=>beatTime,
    "captionAt",
    ()=>captionAt,
    "stepBeat",
    ()=>stepBeat,
    "visibleCaptionText",
    ()=>visibleCaptionText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$typewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/typewriter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/beats.ts [app-client] (ecmascript)");
;
;
const FILM_DURATION = 111;
const SCENES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"];
const FILM = {
    duration: FILM_DURATION,
    tracks: [
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SHARED_TRACKS"],
        ...SCENES.flatMap((s)=>s.tracks)
    ],
    markers: SCENES.map((s)=>({
            id: s.id,
            at: s.from
        }))
};
const beatOf = (id)=>{
    const beat = SCENES.find((s)=>s.id === id);
    if (!beat) throw new Error(`Unbekannter Beat: ${id}`);
    return beat;
};
const beatTime = (id, seconds = 0)=>beatOf(id).from + seconds;
const beatStartAt = (time)=>{
    const t = Math.min(FILM_DURATION, Math.max(0, Number.isFinite(time) ? time : 0));
    const beat = SCENES.find((s)=>t >= s.from && t < s.to) ?? SCENES[SCENES.length - 1];
    return beat.from;
};
const stepBeat = (time, direction)=>{
    const start = beatStartAt(time);
    const index = SCENES.findIndex((s)=>s.from === start);
    if (direction > 0) return index + 1 < SCENES.length ? SCENES[index + 1].from : start;
    const nearStart = time - start < 1;
    return nearStart && index > 0 ? SCENES[index - 1].from : start;
};
const CAPTIONS = [
    // steht sofort ganz da (typeSeconds 0): derselbe Claim wie im Schlussbild, der Neustart zeigt keinen Schnitt
    {
        id: 'b0',
        from: 0,
        to: 3.7,
        typeSeconds: 0
    },
    {
        id: 'bw',
        from: 4.9,
        to: 13.3,
        typeSeconds: 1.4
    },
    {
        id: 'b1',
        from: 13.9,
        to: 23.3,
        typeSeconds: 1.4
    },
    {
        id: 'bm',
        from: 23.8,
        to: 31.8,
        typeSeconds: 1.4
    },
    {
        id: 'b3',
        from: 32.3,
        to: 40.8,
        typeSeconds: 1.4
    },
    {
        id: 'b2',
        from: 41.3,
        to: 57.3,
        typeSeconds: 1.2
    },
    {
        id: 'b4s',
        from: 57.8,
        to: 60.8,
        typeSeconds: 1.0
    },
    {
        id: 'b4',
        from: 61.1,
        to: 66.3,
        typeSeconds: 1.4
    },
    {
        id: 'b6',
        from: 66.8,
        to: 73.8,
        typeSeconds: 1.4
    },
    {
        id: 'b5',
        from: 74.3,
        to: 81.8,
        typeSeconds: 1.0
    },
    {
        id: 'b7',
        from: 82.3,
        to: 89.8,
        typeSeconds: 1.4
    },
    {
        id: 'bs',
        from: 90.3,
        to: 98.3,
        typeSeconds: 1.2
    },
    {
        id: 'b8k',
        from: 98.8,
        to: 107.3,
        typeSeconds: 1.2
    },
    {
        id: 'b8',
        from: 108.3,
        to: 111,
        typeSeconds: 1.0
    }
];
/** Bildunterschriften auf der Bühne (onScreen: false nur im Transkript) */ const ON_SCREEN = CAPTIONS.filter(_c = (c)=>c.onScreen !== false);
_c1 = ON_SCREEN;
const captionAt = (time)=>{
    if (time >= FILM_DURATION) return ON_SCREEN[ON_SCREEN.length - 1] ?? null;
    return ON_SCREEN.find((c)=>time >= c.from && time < c.to) ?? null;
};
const schedules = new Map();
const visibleCaptionText = (caption, text, time)=>{
    if (!Number.isFinite(time) || time < caption.from) return '';
    // ohne Tippdauer steht die Zeile sofort
    if (caption.typeSeconds <= 0) return text;
    const key = `${caption.typeSeconds}|${text}`;
    let schedule = schedules.get(key);
    if (!schedule) {
        schedule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$typewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typingSchedule"])(text, caption.typeSeconds);
        schedules.set(key, schedule);
    }
    return text.slice(0, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$typewriter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["typedChars"])(schedule, time - caption.from));
};
var _c, _c1;
__turbopack_context__.k.register(_c, "ON_SCREEN$CAPTIONS.filter");
__turbopack_context__.k.register(_c1, "ON_SCREEN");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/filmClock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLAY_DURATION",
    ()=>PLAY_DURATION,
    "WIPE_PLAY",
    ()=>WIPE_PLAY,
    "toFilm",
    ()=>toFilm,
    "toPlayback",
    ()=>toPlayback,
    "wipeAt",
    ()=>wipeAt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/film.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/slides.ts [app-client] (ecmascript)");
;
;
const WIPE_PLAY = 1;
/** Filmzeit, auf der die Wiedergabe während eines Wechsels steht: knapp vor dem Schnitt */ const HOLD = 1e-4;
/** Rechentoleranz der Umrechnung (Gleitkomma) */ const EPS = 1e-6;
const toPlayback = (film)=>{
    let out = film;
    for (const cut of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_CUTS"])if (film >= cut.at) out += WIPE_PLAY;
    return out;
};
const toFilm = (playback)=>{
    let shift = 0;
    let floor = 0;
    for (const cut of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_CUTS"]){
        const start = cut.at + shift;
        // Toleranz: toPlayback summiert die Wischer in anderer Reihenfolge — ohne sie
        // landet toFilm(toPlayback(cut.at)) bei 58,99999… statt 59, im alten Beat
        if (playback < start - EPS) break;
        if (playback < start + WIPE_PLAY - EPS) return cut.at - HOLD;
        shift += WIPE_PLAY;
        floor = cut.at;
    }
    return Math.max(floor, playback - shift);
};
const wipeAt = (playback)=>{
    let shift = 0;
    for (const cut of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$slides$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_CUTS"]){
        const start = cut.at + shift;
        if (playback < start) return null;
        if (playback < start + WIPE_PLAY) return {
            cut,
            progress: (playback - start) / WIPE_PLAY
        };
        shift += WIPE_PLAY;
    }
    return null;
};
const PLAY_DURATION = toPlayback(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILM_DURATION"]);
_c = PLAY_DURATION;
var _c;
__turbopack_context__.k.register(_c, "PLAY_DURATION");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CAMERA_Z",
    ()=>CAMERA_Z,
    "CENTER",
    ()=>CENTER,
    "CYCLE_COUNT",
    ()=>CYCLE_COUNT,
    "CYCLE_HUB_R",
    ()=>CYCLE_HUB_R,
    "CYCLE_TILE_R",
    ()=>CYCLE_TILE_R,
    "FOV",
    ()=>FOV,
    "HEX_RADIUS",
    ()=>HEX_RADIUS,
    "ISO_POINT_COUNT",
    ()=>ISO_POINT_COUNT,
    "ISO_POINT_R",
    ()=>ISO_POINT_R,
    "LAB_DIM_COUNT",
    ()=>LAB_DIM_COUNT,
    "LAB_DIM_PORTRAIT_SCALE",
    ()=>LAB_DIM_PORTRAIT_SCALE,
    "LAB_DIM_R",
    ()=>LAB_DIM_R,
    "LAB_PORTRAIT_SCALE",
    ()=>LAB_PORTRAIT_SCALE,
    "LAB_TILE_R",
    ()=>LAB_TILE_R,
    "LEGEND_R",
    ()=>LEGEND_R,
    "LINE",
    ()=>LINE,
    "MONITOR",
    ()=>MONITOR,
    "PLATE_DEPTH",
    ()=>PLATE_DEPTH,
    "PORTAL",
    ()=>PORTAL,
    "PORTRAIT_ASPECT",
    ()=>PORTRAIT_ASPECT,
    "PORTRAIT_MAX_ASPECT",
    ()=>PORTRAIT_MAX_ASPECT,
    "PORTRAIT_QUERY",
    ()=>PORTRAIT_QUERY,
    "PORTRAIT_VIEW",
    ()=>PORTRAIT_VIEW,
    "REPLAY_SIZE",
    ()=>REPLAY_SIZE,
    "SEAL_PORTRAIT_SCALE",
    ()=>SEAL_PORTRAIT_SCALE,
    "SERVER_POINT_COUNT",
    ()=>SERVER_POINT_COUNT,
    "STAGE",
    ()=>STAGE,
    "cycleLabelFrame",
    ()=>cycleLabelFrame,
    "cycleStationAt",
    ()=>cycleStationAt,
    "isoLabelFrame",
    ()=>isoLabelFrame,
    "isoPointAt",
    ()=>isoPointAt,
    "labDimAt",
    ()=>labDimAt,
    "labDimLabelFrame",
    ()=>labDimLabelFrame,
    "labDimScale",
    ()=>labDimScale,
    "labFlaskAt",
    ()=>labFlaskAt,
    "labFlowFrom",
    ()=>labFlowFrom,
    "labMaterialAt",
    ()=>labMaterialAt,
    "labNormFrame",
    ()=>labNormFrame,
    "labelFrame",
    ()=>labelFrame,
    "legendAt",
    ()=>legendAt,
    "legendLabelFrame",
    ()=>legendLabelFrame,
    "replayFrame",
    ()=>replayFrame,
    "sealAt",
    ()=>sealAt,
    "serverLabelFrame",
    ()=>serverLabelFrame,
    "serverMapAt",
    ()=>serverMapAt,
    "serverPointAt",
    ()=>serverPointAt,
    "stageLayout",
    ()=>stageLayout,
    "stageView",
    ()=>stageView,
    "stageZoom",
    ()=>stageZoom,
    "worldToStage",
    ()=>worldToStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$cameraFraming$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/cameraFraming.ts [app-client] (ecmascript)");
;
const STAGE = {
    width: 16,
    height: 9
};
const FOV = 20;
const CAMERA_Z = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$cameraFraming$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["distanceForWidth"])(STAGE.width, FOV, STAGE.width / STAGE.height);
const CENTER = [
    0,
    0.9,
    0
];
const MONITOR = {
    width: 5.4,
    height: 3.3
};
const HEX_RADIUS = 2;
const PLATE_DEPTH = 0.08;
const LINE = {
    bold: 0.06,
    regular: 0.045,
    thin: 0.02
};
const PORTAL = {
    from: [
        [
            -7,
            2.5,
            0
        ],
        [
            7,
            2.2,
            0
        ],
        [
            -6.5,
            -1.5,
            0
        ]
    ],
    to: [
        -1.1,
        CENTER[1] + 0.2,
        0.05
    ],
    stack: [
        1.1,
        -0.05,
        0.01
    ]
};
const PORTRAIT_QUERY = '(max-width: 767px) and (orientation: portrait)';
const PORTRAIT_ASPECT = 4 / 5;
const PORTRAIT_MAX_ASPECT = 1.2;
const PORTRAIT_VIEW = {
    width: 9.6,
    height: 12
};
const stageLayout = (aspect)=>Number.isFinite(aspect) && aspect > 0 && aspect < PORTRAIT_MAX_ASPECT ? 'portrait' : 'landscape';
const stageZoom = (aspect)=>stageLayout(aspect) === 'landscape' ? 1 : Math.min(1, STAGE.height * aspect / PORTRAIT_VIEW.width, STAGE.height / PORTRAIT_VIEW.height);
const stageView = (layout)=>{
    if (layout === 'landscape') return STAGE;
    const height = STAGE.height / stageZoom(PORTRAIT_ASPECT);
    return {
        width: height * PORTRAIT_ASPECT,
        height
    };
};
const worldToStage = (x, y, layout)=>{
    const view = stageView(layout);
    return {
        left: 50 + x / view.width * 100,
        top: 50 - y / view.height * 100
    };
};
/**
 * Prozentwert auf drei Nachkommastellen. Die Lagen entstehen aus Sinus und
 * Kosinus; Server und Browser treffen dabei nicht immer dieselbe letzte
 * Stelle, das CSS (und damit der Klassenname) wäre verschieden und React
 * meldete beim Hydrieren einen Unterschied.
 */ const percent = (value)=>Math.round(value * 1000) / 1000;
const labelFrame = (x, y, layout, place, width)=>{
    const spot = worldToStage(x, y, layout);
    const view = stageView(layout);
    const free = place === 'right' ? 98 - spot.left : place === 'left' ? spot.left - 2 : Math.min(spot.left, 100 - spot.left) * 2 - 2;
    const wanted = width === undefined ? free : width / view.width * 100;
    return {
        left: percent(spot.left),
        top: percent(spot.top),
        width: percent(Math.max(0, Math.min(free, wanted))),
        place
    };
};
const SEAL_PORTRAIT_SCALE = 0.8;
const sealAt = (portrait)=>portrait ? [
        0,
        CENTER[1] + 2.3,
        0
    ] : [
        -2.9,
        CENTER[1],
        0
    ];
const ISO_POINT_COUNT = 3;
const ISO_POINT_R = 0.16;
const isoPointAt = (i, portrait)=>portrait ? [
        -2.9,
        CENTER[1] - 1.3 - i * 1.0,
        0
    ] : [
        0.5,
        CENTER[1] + (1 - i) * 1.05,
        0
    ];
const isoLabelFrame = (i, layout)=>{
    const [x, y] = isoPointAt(i, layout === 'portrait');
    return labelFrame(x + ISO_POINT_R + 0.3, y, layout, 'right');
};
const LAB_PORTRAIT_SCALE = 1;
const LAB_DIM_PORTRAIT_SCALE = 1.3;
const labDimScale = (portrait)=>portrait ? LAB_DIM_PORTRAIT_SCALE : 1;
const labMaterialAt = (portrait)=>portrait ? [
        -2.4,
        3.6,
        0
    ] : [
        -5.6,
        CENTER[1],
        0
    ];
const labFlaskAt = (portrait)=>portrait ? [
        1.9,
        3.6,
        0
    ] : [
        -1.7,
        CENTER[1],
        0
    ];
const LAB_DIM_COUNT = 4;
const LAB_DIM_R = 0.52;
const labDimAt = (i, portrait)=>portrait ? [
        i % 2 === 0 ? -3.6 : 0.6,
        i < 2 ? 1.0 : -1.2,
        0
    ] : [
        2.6,
        CENTER[1] + (1.5 - i) * 1.3,
        0
    ];
const labFlowFrom = (i, portrait)=>portrait && i >= 2 ? labDimAt(i - 2, portrait) : labFlaskAt(portrait);
const labDimLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = labDimAt(i, portrait);
    // Hochformat: linke Spalte bis vor die Wabe der rechten, rechte bis an den Rand
    return labelFrame(x + LAB_DIM_R * labDimScale(portrait) * (Math.sqrt(3) / 2) + 0.28, y, layout, 'right', portrait ? i % 2 === 0 ? 2.6 : 3.2 : undefined);
};
const LAB_TILE_R = 1.5;
const labNormFrame = (layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = labFlaskAt(portrait);
    // Hochformat: über der Wabe — darunter laufen die Ströme zu den Dimensionen
    return portrait ? labelFrame(x, y + LAB_TILE_R * LAB_PORTRAIT_SCALE + 0.12, layout, 'above', 3.6) : labelFrame(x, y - LAB_TILE_R - 0.15, layout, 'below', 4.2);
};
const LEGEND_R = 0.4;
const legendAt = (i, portrait)=>portrait ? [
        i % 2 === 0 ? -4.2 : 0.3,
        i < 2 ? 5.15 : 4.2,
        0
    ] : [
        -6.6 + i * 3.6,
        CENTER[1] + 2.95,
        0
    ];
const legendLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = legendAt(i, portrait);
    return labelFrame(x + LEGEND_R * (Math.sqrt(3) / 2) + 0.22, y, layout, 'right', portrait ? 3.3 : 2.5);
};
const serverMapAt = (portrait)=>portrait ? [
        0,
        2.9,
        0
    ] : [
        -2.9,
        CENTER[1],
        0
    ];
const SERVER_POINT_COUNT = 3;
const serverPointAt = (i, portrait)=>portrait ? [
        -3.2,
        -0.5 - i * 0.95,
        0
    ] : [
        1.2,
        CENTER[1] + (1 - i) * 1.05,
        0
    ];
const serverLabelFrame = (i, layout)=>{
    const [x, y] = serverPointAt(i, layout === 'portrait');
    return labelFrame(x + ISO_POINT_R + 0.3, y, layout, 'right');
};
const CYCLE_COUNT = 6;
const CYCLE_TILE_R = 0.68;
const CYCLE_HUB_R = 1.15;
/** Halbachsen der Ellipse [waagerecht, senkrecht] */ // Hochformat (#2117): waagerecht 1,3 statt 1,5 — die Namen links und rechts behalten Abstand zum Rand
const CYCLE_AXES = {
    landscape: [
        3.6,
        1.79
    ],
    portrait: [
        1.3,
        2.75
    ]
};
const cycleStationAt = (i, portrait = false)=>{
    const [rx, ry] = CYCLE_AXES[portrait ? 'portrait' : 'landscape'];
    // Hochformat: um eine Viertelrunde gedreht, Station 0 steht oben
    const a = Math.PI / 3 * i + (portrait ? Math.PI / 2 : 0);
    return [
        CENTER[0] + Math.cos(a) * rx,
        CENTER[1] + Math.sin(a) * ry,
        0
    ];
};
const cycleLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = cycleStationAt(i, portrait);
    // auf der Mittelachse (Hochformat oben und unten): Name über bzw. unter der Wabe
    if (Math.abs(x - CENTER[0]) < 0.01) {
        const above = y > CENTER[1];
        return labelFrame(x, y + (above ? 1 : -1) * (CYCLE_TILE_R + 0.12), layout, above ? 'above' : 'below', 4);
    }
    const right = x > CENTER[0];
    // Hochformat (#2117): Namen dichter an der Wabe, damit „Inverkehrbringen" in größerer Schrift Abstand zum Rand behält
    const reach = CYCLE_TILE_R * (Math.sqrt(3) / 2) + (portrait ? 0.12 : 0.2);
    return labelFrame(x + (right ? reach : -reach), y, layout, right ? 'right' : 'left', portrait ? undefined : 3.6);
};
const REPLAY_SIZE = 0.6;
const replayFrame = (layout)=>{
    const visibleHeight = layout === 'portrait' ? STAGE.height / stageZoom(PORTRAIT_ASPECT) : STAGE.height;
    return {
        top: 50 - CENTER[1] / visibleHeight * 100,
        size: REPLAY_SIZE / visibleHeight * 100
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/slides.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CHARGE_LOOK",
    ()=>CHARGE_LOOK,
    "SHADOW_OF_SLIDE",
    ()=>SHADOW_OF_SLIDE,
    "SLIDE_COLORS",
    ()=>SLIDE_COLORS,
    "SLIDE_CUTS",
    ()=>SLIDE_CUTS,
    "SLIDE_OF_BEAT",
    ()=>SLIDE_OF_BEAT,
    "beatColors",
    ()=>beatColors,
    "slideAt",
    ()=>slideAt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/darkTheme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/beats.ts [app-client] (ecmascript)");
;
;
;
const light = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette;
const dark = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastshipDark"].palette;
/** Auf Blau: weiße Linien, Markengrün, Wabenflächen im hellen Blau des Dark Themes (3,9:1) */ const BLUE = {
    primary: light.default.white,
    secondary: light.default.secondary,
    line: light.default.white,
    background: light.default.primary,
    muted: dark.default.primary,
    text: light.text.onAccent
};
/**
 * Auf Weiß: Linien und Text in Markenblau (text.onLight), Grün in der dunklen
 * Variante (#37BA24 hat auf Weiß nur 2,6:1), Flächen in text.secondary
 * (6,4:1).
 */ const WHITE = {
    primary: light.default.primary,
    secondary: light.site.greenDark,
    line: light.text.onLight,
    background: light.default.white,
    muted: light.text.secondary,
    text: light.text.onLight
};
/** Hellgrau der Seite (default.greyLight), sonst wie Weiß */ const GREY = {
    ...WHITE,
    background: light.default.greyLight
};
/**
 * Auf Markengrün (#1513): alles in Weiß — bewusste Gestaltungsentscheidung.
 * Blau auf Grün wirkt unruhig; Weiß hat dort nur 2,6:1, deshalb trägt die
 * grüne Folie nur kurze, große Zeilen (Headline-Typografie) und keine Flächen.
 */ const GREEN = {
    primary: light.default.white,
    secondary: light.default.white,
    line: light.default.white,
    background: light.default.secondary,
    muted: light.default.white,
    text: light.text.onAccent
};
const SLIDE_COLORS = {
    primary: BLUE,
    white: WHITE,
    greyLight: GREY,
    secondary: GREEN
};
const CHARGE_LOOK = {
    primary: {
        plate: light.default.white,
        border: light.default.secondary
    },
    white: {
        plate: light.default.greyLight,
        border: light.site.greenDark
    },
    greyLight: {
        plate: light.default.white,
        border: light.site.greenDark
    },
    // auf Grün steht derzeit keine Charge — für den Fall: weiß mit blauem Rand
    secondary: {
        plate: light.default.white,
        border: light.default.primary
    }
};
const SLIDE_OF_BEAT = {
    // Kreislauf, vier Wege und Rezyklat auf derselben Folie: Markenblau zu Beginn,
    // die Prüf-Wabe wird nahtlos zur Wabe von b1 (#1513)
    b0: 'primary',
    bw: 'primary',
    b1: 'primary',
    // Marktplatz und Überwachung auf derselben Folie: kein Wischer, die Angebote gehen nahtlos über (#1513)
    bm: 'white',
    b2: 'white',
    b3: 'primary',
    b4: 'greyLight',
    b5: 'secondary',
    b6: 'white',
    b7: 'primary',
    bs: 'greyLight',
    b8: 'primary'
};
const SLIDE_CUTS = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].slice(1).map((beat, i)=>({
        beat: beat.id,
        at: beat.from,
        from: SLIDE_OF_BEAT[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"][i].id],
        to: SLIDE_OF_BEAT[beat.id]
    })).filter(_c = (c)=>c.from !== c.to);
_c1 = SLIDE_CUTS;
/** Ein Objekt, das je Aufruf überschrieben wird — kein Anlegen je Frame */ const STATE = {
    slide: 'primary',
    background: BLUE.background,
    text: BLUE.text
};
const slideAt = (time)=>{
    const beat = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].find((b)=>time >= b.from && time < b.to) ?? (time < 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"][0] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].length - 1]);
    const slide = SLIDE_OF_BEAT[beat.id];
    STATE.slide = slide;
    STATE.background = SLIDE_COLORS[slide].background;
    STATE.text = SLIDE_COLORS[slide].text;
    return STATE;
};
const SHADOW_OF_SLIDE = {
    primary: 0.22,
    white: 0.09,
    greyLight: 0.09,
    secondary: 0.1
};
const beatColors = (beatId)=>SLIDE_COLORS[SLIDE_OF_BEAT[beatId] ?? 'primary'];
var _c, _c1;
__turbopack_context__.k.register(_c, "SLIDE_CUTS$BEATS.slice(1)\n  .map((beat, i) => ({ beat: beat.id, at: beat.from, from: SLIDE_OF_BEAT[BEATS[i].id], to: SLIDE_OF_BEAT[beat.id] }))\n  .filter");
__turbopack_context__.k.register(_c1, "SLIDE_CUTS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "k",
    ()=>k
]);
const k = (at, value, ease)=>({
        at,
        value,
        ease
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/wipeOrigins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WIPE_ORIGIN_OF_BEAT",
    ()=>WIPE_ORIGIN_OF_BEAT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$routeLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/routeLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/beats.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
;
;
;
;
/** knapp vor dem Schnitt: dort steht die Filmzeit während des Wischers */ const before = (beatId)=>(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$beats$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BEATS"].find((b)=>b.id === beatId)?.from ?? 0) - 1e-4;
const charge = (beatId)=>({
        from: 'charge',
        at: (portrait)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chargeAt"])(before(beatId), portrait)
    });
const center = {
    from: 'focus',
    at: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"]
};
const WIPE_ORIGIN_OF_BEAT = {
    // die Charge wird weitergereicht: Rezyklat → Marktplatz → Labor → Rating → Versand
    bm: charge('bm'),
    b3: charge('b3'),
    b2: charge('b2'),
    b4: charge('b4'),
    // geliefert: vom Abnehmer am Ziel der Route geht das Portal auf
    b6: {
        from: 'focus',
        at: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$routeLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["destinationAt"]
    },
    // Monitor → Partner und Team → Siegel: beide Motive stehen in der Mitte
    b5: center,
    b7: center
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B3_PORTRAIT_SCALE",
    ()=>B3_PORTRAIT_SCALE,
    "BOX_AT",
    ()=>BOX_AT,
    "BOX_AT_PORTRAIT",
    ()=>BOX_AT_PORTRAIT,
    "HUB_PORTRAIT",
    ()=>HUB_PORTRAIT,
    "chargeAt",
    ()=>chargeAt,
    "chargePosition",
    ()=>chargePosition,
    "hubAt",
    ()=>hubAt
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/timeline.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/film.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/marketLayout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)");
;
;
;
;
;
const B3_PORTRAIT_SCALE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LAB_PORTRAIT_SCALE"];
const BOX_AT = [
    -4.4,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1],
    0
];
const BOX_AT_PORTRAIT = [
    0,
    4.3,
    0
];
// Scratch auf Modulebene: je Aufruf überschrieben, nie neu angelegt
const RANKED = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_VALUES"].map(_c = ()=>[
        0,
        0,
        0
    ]);
_c1 = RANKED;
const lerp = (a, b, t)=>a + (b - a) * t;
const MARKET_PLACE = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MARKET_SLOTS"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$marketLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MATCH_SLOT"][__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_FROM_B1"]]];
const HUB_PORTRAIT = [
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][0],
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + 0.4,
    0
];
const hubAt = (portrait)=>portrait ? HUB_PORTRAIT : MARKET_PLACE;
const chargePosition = (t, portrait, out)=>{
    // Marktplatz und Reihe des Ratings stehen im Hochformat in eigenen Räumen (#2111)
    const marketXf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketSpace"])(portrait);
    const rankXf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankSpace"])(portrait);
    const market = MARKET_PLACE;
    const hub = hubAt(portrait);
    const lab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labMaterialAt"])(portrait);
    const rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankAnchors"])(t.rankT, RANKED, portrait)[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_FROM_B1"]];
    const boxAt = portrait ? BOX_AT_PORTRAIT : BOX_AT;
    for(let k = 0; k < 3; k = k + 1){
        let p = lerp(lerp(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][k], hub[k], t.shift), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceToStage"])(marketXf, market[k], k), t.move);
        if (t.toLab > 0) p = lerp(p, lab[k], t.toLab);
        if (t.toRank > 0) p = lerp(p, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceToStage"])(rankXf, rank[k], k), t.toRank);
        if (t.toBox > 0) p = lerp(p, boxAt[k], t.toBox);
        out[k] = p;
    }
    return out;
};
const trackOf = (id)=>{
    const found = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$film$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FILM"].tracks.find((t)=>t.id === id);
    if (!found) throw new Error(`Unbekannte Spur im Drehbuch: ${id}`);
    return found;
};
const LEG_TRACKS = {
    shift: trackOf('b1.shift'),
    move: trackOf('b1.move'),
    toLab: trackOf('b1.toLab'),
    toRank: trackOf('b1.toRank'),
    rankT: trackOf('b2.rank.t'),
    toBox: trackOf('b1.toBox')
};
const chargeAt = (time, portrait)=>chargePosition({
        shift: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.shift, time),
        move: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.move, time),
        toLab: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.toLab, time),
        toRank: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.toRank, time),
        rankT: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.rankT, time),
        toBox: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$timeline$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sample"])(LEG_TRACKS.toBox, time)
    }, portrait, [
        0,
        0,
        0
    ]);
var _c, _c1;
__turbopack_context__.k.register(_c, "RANKED$RANK_VALUES.map");
__turbopack_context__.k.register(_c1, "RANKED");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/marketLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BUYER_AT",
    ()=>BUYER_AT,
    "MARKET_FRAY",
    ()=>MARKET_FRAY,
    "MARKET_HEX_R",
    ()=>MARKET_HEX_R,
    "MARKET_SLOTS",
    ()=>MARKET_SLOTS,
    "MATCH_SLOT",
    ()=>MATCH_SLOT,
    "MIDDLE_ROW_SLOTS",
    ()=>MIDDLE_ROW_SLOTS,
    "OTHER_SLOTS",
    ()=>OTHER_SLOTS,
    "SCAN_FADE",
    ()=>SCAN_FADE,
    "SEARCH_BEAM_HALF",
    ()=>SEARCH_BEAM_HALF,
    "SEARCH_FROM",
    ()=>SEARCH_FROM,
    "SEARCH_TO",
    ()=>SEARCH_TO,
    "beamAt",
    ()=>beamAt,
    "matchFound",
    ()=>matchFound,
    "offerAnchors",
    ()=>offerAnchors,
    "offerScale",
    ()=>offerScale,
    "scanFade",
    ()=>scanFade,
    "searched",
    ()=>searched
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)");
;
;
;
const MARKET_HEX_R = 0.72;
const GAP = 0.14;
const COLS = 5;
const ROWS = [
    -1,
    0,
    1
];
/** Das Raster steht etwas links, rechts ist Platz für den Abnehmer */ const ORIGIN_X = -1.2;
const BUYER_AT = [
    5.4,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + 0.2,
    0
];
const SEARCH_FROM = 4.2;
const SEARCH_TO = -5.4;
const W = Math.sqrt(3) * MARKET_HEX_R + GAP;
const H = 1.5 * MARKET_HEX_R + GAP * 0.87;
const MARKET_SLOTS = ROWS.flatMap(_c = (row)=>Array.from({
        length: COLS
    }, (_, col)=>[
            ORIGIN_X + (col - (COLS - 1) / 2) * W + (row !== 0 ? W / 2 : 0),
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] - row * H,
            0
        ]));
_c1 = MARKET_SLOTS;
const MATCH_SLOT = [
    1,
    3,
    10,
    12,
    6,
    14
];
const MIDDLE_ROW_SLOTS = Array.from({
    length: COLS
}, (_, col)=>COLS + col);
const FRAY = [
    [
        -2,
        0,
        0.5,
        0.3
    ],
    [
        -2,
        1,
        0.8,
        0.55
    ],
    [
        -2,
        2,
        0.6,
        0.4
    ],
    [
        -2,
        3,
        0.85,
        0.6
    ],
    [
        -2,
        4,
        0.45,
        0.25
    ],
    [
        2,
        0,
        0.75,
        0.5
    ],
    [
        2,
        1,
        0.5,
        0.3
    ],
    [
        2,
        2,
        0.85,
        0.6
    ],
    [
        2,
        3,
        0.55,
        0.35
    ],
    [
        2,
        4,
        0.7,
        0.45
    ]
];
const MARKET_FRAY = FRAY.map(_c2 = ([row, col, scale, alpha])=>({
        at: [
            ORIGIN_X + (col - (COLS - 1) / 2) * W,
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] - row * H,
            0
        ],
        scale,
        alpha
    }));
_c3 = MARKET_FRAY;
const SEARCH_BEAM_HALF = 2 * H + MARKET_HEX_R * 0.9;
const OTHER_SLOTS = MARKET_SLOTS.map((_, i)=>i).filter(_c4 = (i)=>!MATCH_SLOT.includes(i));
_c5 = OTHER_SLOTS;
if (MATCH_SLOT.length !== __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RANK_VALUES"].length) throw new Error('MATCH_SLOT braucht einen Platz je Material-Wabe');
const searched = (slot, beamX)=>MARKET_SLOTS[slot][0] + MARKET_HEX_R * 0.5 >= beamX;
const SCAN_FADE = 1.6;
const scanFade = (x, beamX)=>1 - (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])((x + MARKET_HEX_R * 0.5 - beamX) / SCAN_FADE);
const beamAt = (search)=>SEARCH_FROM + (SEARCH_TO - SEARCH_FROM) * search;
const matchFound = (i, search)=>search > 0 ? 1 - scanFade(MARKET_SLOTS[MATCH_SLOT[i]][0], beamAt(search)) : 0;
const offerAnchors = (gather, ranked, out, portrait = false)=>{
    // #2111: im Hochformat haben Marktplatz und Reihe des Ratings eigene Räume
    // (MARKET_SPACE, RANK_SPACE) — der Platz im Raster wird in den Raum der Reihe umgerechnet
    const market = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketSpace"])(portrait);
    const rank = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankSpace"])(portrait);
    for(let i = 0; i < out.length; i++){
        const slot = MARKET_SLOTS[MATCH_SLOT[i]];
        const to = ranked[i];
        for(let k = 0; k < 3; k = k + 1){
            const from = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stageToSpace"])(rank, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceToStage"])(market, slot[k], k), k);
            out[i][k] = from + (to[k] - from) * gather;
        }
    }
    return out;
};
const offerScale = (gather, rankHexR, portrait = false)=>{
    const start = MARKET_HEX_R / rankHexR * ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marketSpace"])(portrait).scale / (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$rankLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rankSpace"])(portrait).scale);
    return start + (1 - start) * gather;
};
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "MARKET_SLOTS$ROWS.flatMap");
__turbopack_context__.k.register(_c1, "MARKET_SLOTS");
__turbopack_context__.k.register(_c2, "MARKET_FRAY$FRAY.map");
__turbopack_context__.k.register(_c3, "MARKET_FRAY");
__turbopack_context__.k.register(_c4, "OTHER_SLOTS$MARKET_SLOTS.map((_, i) => i).filter");
__turbopack_context__.k.register(_c5, "OTHER_SLOTS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/partnerLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTACT_R",
    ()=>CONTACT_R,
    "PARTNER_CELL_R",
    ()=>PARTNER_CELL_R,
    "PARTNER_COUNT",
    ()=>PARTNER_COUNT,
    "PARTNER_R",
    ()=>PARTNER_R,
    "contactAt",
    ()=>contactAt,
    "contactLabelFrame",
    ()=>contactLabelFrame,
    "partnerAt",
    ()=>partnerAt,
    "partnerCell",
    ()=>partnerCell,
    "partnerLabelFrame",
    ()=>partnerLabelFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
;
;
const PARTNER_COUNT = 4;
const CONTACT_R = 1.05;
const PARTNER_R = 0.8;
const PARTNER_CELL_R = 1.6 / 6;
const contactAt = (portrait)=>portrait ? [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][0],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + 2,
        0
    ] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"];
/** Zelle [Spalte, Reihe] je Gruppe: oben links, oben rechts, unten links, unten rechts */ const CELLS = {
    // ungerade Reihen sind um eine halbe Wabe versetzt: −9 und 8 liegen gleich weit links und rechts
    landscape: [
        [
            -9,
            -3
        ],
        [
            8,
            -3
        ],
        [
            -9,
            3
        ],
        [
            8,
            3
        ]
    ],
    // oben weit außen, unten eng: die Routen zu den unteren Gruppen laufen zwischen den oberen hindurch
    portrait: [
        [
            -6,
            6
        ],
        [
            6,
            6
        ],
        [
            -2,
            12
        ],
        [
            2,
            12
        ]
    ]
};
const partnerCell = (i, portrait)=>CELLS[portrait ? 'portrait' : 'landscape'][i];
const partnerAt = (i, portrait)=>{
    const origin = contactAt(portrait);
    const [x, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latticeXY"])(...partnerCell(i, portrait), PARTNER_CELL_R);
    return [
        origin[0] + x,
        origin[1] + y,
        0
    ];
};
const partnerLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = partnerAt(i, portrait);
    if (portrait) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x, y - PARTNER_R - 0.12, layout, 'below', 1.8);
    const right = x >= contactAt(false)[0];
    const reach = PARTNER_R * (Math.sqrt(3) / 2) + 0.22;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x + (right ? reach : -reach), y, layout, right ? 'right' : 'left');
};
const contactLabelFrame = (layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = contactAt(portrait);
    return portrait ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x, y + CONTACT_R + 0.15, layout, 'above', 5) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x, y - CONTACT_R - 0.5, layout, 'below', 5);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/rankLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CERT",
    ()=>CERT,
    "CERT_AT",
    ()=>CERT_AT,
    "CERT_TITLE_TOP",
    ()=>CERT_TITLE_TOP,
    "MARKET_SPACE",
    ()=>MARKET_SPACE,
    "RANK_AFTER",
    ()=>RANK_AFTER,
    "RANK_BEFORE",
    ()=>RANK_BEFORE,
    "RANK_CLASSES",
    ()=>RANK_CLASSES,
    "RANK_CLASS_COUNT",
    ()=>RANK_CLASS_COUNT,
    "RANK_DIMENSIONS",
    ()=>RANK_DIMENSIONS,
    "RANK_END",
    ()=>RANK_END,
    "RANK_FROM_B1",
    ()=>RANK_FROM_B1,
    "RANK_HEX_R",
    ()=>RANK_HEX_R,
    "RANK_ROW",
    ()=>RANK_ROW,
    "RANK_ROW_PORTRAIT",
    ()=>RANK_ROW_PORTRAIT,
    "RANK_SLOTS",
    ()=>RANK_SLOTS,
    "RANK_SLOTS_PORTRAIT",
    ()=>RANK_SLOTS_PORTRAIT,
    "RANK_SPACE",
    ()=>RANK_SPACE,
    "RANK_START",
    ()=>RANK_START,
    "RANK_TOP",
    ()=>RANK_TOP,
    "RANK_VALUES",
    ()=>RANK_VALUES,
    "certScale",
    ()=>certScale,
    "certTitleFrame",
    ()=>certTitleFrame,
    "classBar",
    ()=>classBar,
    "classLabelFrame",
    ()=>classLabelFrame,
    "classOfMaterial",
    ()=>classOfMaterial,
    "classOfSlot",
    ()=>classOfSlot,
    "marketSpace",
    ()=>marketSpace,
    "rankAnchors",
    ()=>rankAnchors,
    "rankScale",
    ()=>rankScale,
    "rankSpace",
    ()=>rankSpace,
    "spaceToStage",
    ()=>spaceToStage,
    "stageToSpace",
    ()=>stageToSpace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$sealTiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/sealTiers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
;
;
const RANK_START = [
    [
        0.75,
        0.7,
        0.8,
        0.75
    ],
    [
        0.55,
        0.5,
        0.6,
        0.55
    ],
    [
        0.4,
        0.45,
        0.35,
        0.4
    ],
    [
        0.65,
        0.6,
        0.62,
        0.62
    ],
    // die Charge aus b1 beginnt ganz links: sie kommt von links aus dem Labor und kreuzt so keine andere Wabe
    [
        0.3,
        0.25,
        0.35,
        0.3
    ],
    [
        0.5,
        0.45,
        0.48,
        0.48
    ]
];
const RANK_END = [
    [
        0.6,
        0.55,
        0.65,
        0.6
    ],
    [
        0.7,
        0.75,
        0.68,
        0.71
    ],
    [
        0.35,
        0.3,
        0.4,
        0.35
    ],
    [
        0.5,
        0.45,
        0.55,
        0.5
    ],
    [
        0.95,
        0.9,
        0.92,
        0.94
    ],
    [
        0.42,
        0.38,
        0.45,
        0.42
    ]
];
const RANK_FROM_B1 = 4;
const RANK_DIMENSIONS = RANK_START[0].length;
const RANK_VALUES = RANK_START;
const mean = (v)=>v.reduce((a, b)=>a + b, 0) / v.length;
/** Platz je Material, aufsteigend nach Mittelwert: 0 = links unten (schwächstes) */ const ascendingSlots = (values)=>{
    const order = values.map((v, i)=>({
            i,
            m: mean(v)
        })).sort((a, b)=>a.m - b.m);
    const slots = new Array(values.length);
    order.forEach(({ i }, slot)=>slots[i] = slot);
    return slots;
};
const RANK_BEFORE = ascendingSlots(RANK_START);
_c = RANK_BEFORE;
const RANK_AFTER = ascendingSlots(RANK_END);
_c1 = RANK_AFTER;
const RANK_TOP = RANK_START.length - 1;
/** Treppenstufe je Platz */ const STEP = 0.25;
const RANK_SLOTS = RANK_START.map(_c2 = (_, i)=>[
        (i - (RANK_START.length - 1) / 2) * 2.3,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + (i - (RANK_START.length - 1) / 2) * STEP,
        0
    ]);
_c3 = RANK_SLOTS;
const RANK_ROW = RANK_SLOTS.map(_c4 = ([x, , z])=>[
        x,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1],
        z
    ]);
_c5 = RANK_ROW;
/*
 * Hochformat (#2027, Kind-Task #2111): sechs Waben in einer Reihe waren auf
 * dem Handy zu klein, die Balken nicht lesbar. Hochkant stehen sie in zwei
 * Reihen à drei — jede Spalte ist eine Klasse (zwei Stufen übereinander:
 * unten die schwächere), die Spalten steigen von links nach rechts wie die
 * Treppe. Koordinaten im Raum der Reihe (vor RANK_SPACE.portrait).
 */ /** Abstand der Spalten und der zwei Reihen im Hochformat */ const PORTRAIT_COL = 2.3;
const PORTRAIT_ROW = 2.2;
/** Stufe je Spalte (Klasse) im Hochformat */ const PORTRAIT_STEP = 0.3;
const portraitSlot = (slot, step)=>{
    const col = Math.floor(slot / 2);
    const row = slot % 2;
    return [
        (col - 1) * PORTRAIT_COL,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + (row - 0.5) * PORTRAIT_ROW + (col - 1) * step,
        0
    ];
};
const RANK_SLOTS_PORTRAIT = RANK_START.map(_c6 = (_, i)=>portraitSlot(i, PORTRAIT_STEP));
_c7 = RANK_SLOTS_PORTRAIT;
const RANK_ROW_PORTRAIT = RANK_START.map(_c8 = (_, i)=>portraitSlot(i, 0));
_c9 = RANK_ROW_PORTRAIT;
const STAGE_SPACE = {
    scale: 1,
    offset: [
        0,
        0,
        0
    ]
};
const RANK_SPACE = {
    landscape: STAGE_SPACE,
    portrait: {
        scale: 1.15,
        offset: [
            0,
            -0.34,
            0
        ]
    }
};
const MARKET_SPACE = {
    landscape: STAGE_SPACE,
    portrait: {
        scale: 0.83,
        offset: [
            -0.73,
            -0.15,
            0
        ]
    }
};
const rankSpace = (portrait)=>RANK_SPACE[portrait ? 'portrait' : 'landscape'];
const marketSpace = (portrait)=>MARKET_SPACE[portrait ? 'portrait' : 'landscape'];
const spaceToStage = (space, value, axis)=>space.offset[axis] + space.scale * value;
const stageToSpace = (space, value, axis)=>(value - space.offset[axis]) / space.scale;
const RANK_HEX_R = 1.0;
const CERT = {
    width: 3.0,
    height: 4.2
};
const certScale = (portrait)=>portrait ? CERT_PORTRAIT_STAGE_SCALE / RANK_SPACE.portrait.scale : 1.4;
const CERT_AT = [
    0,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1] + 0.1,
    0.2
];
const CERT_TITLE_TOP = 1.18;
/**
 * Hochformat: Maßstab des Blatts auf der Bühne (wie vor #2111: 2 × 0,66) — die
 * Reihe ist hochkant größer geworden, das Blatt bleibt so groß wie bisher
 */ const CERT_PORTRAIT_STAGE_SCALE = 1.32;
const RANK_CLASSES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$sealTiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEAL_TIERS"];
const RANK_CLASS_COUNT = RANK_CLASSES.length;
/** Stufen je Klasse */ const CLASS_SPAN = RANK_START.length / RANK_CLASS_COUNT;
const classOfSlot = (slot)=>Math.min(RANK_CLASS_COUNT - 1, Math.floor(slot / CLASS_SPAN));
const classOfMaterial = (i)=>classOfSlot(RANK_AFTER[i]);
/** Abstand des Balkens unter den Waben und halbe Länge über die Wabenmitten hinaus */ const CLASS_BAR_DROP = RANK_HEX_R + 0.28;
const CLASS_BAR_REACH = 0.72;
/** Halbe Länge des Balkens unter einer Spalte im Hochformat */ const CLASS_BAR_HALF_PORTRAIT = 0.85;
const classBar = (tier, portrait = false)=>{
    if (portrait) {
        const [x, y] = RANK_SLOTS_PORTRAIT[tier * CLASS_SPAN];
        const bar = y - CLASS_BAR_DROP;
        return [
            [
                x - CLASS_BAR_HALF_PORTRAIT,
                bar,
                0
            ],
            [
                x + CLASS_BAR_HALF_PORTRAIT,
                bar,
                0
            ]
        ];
    }
    const first = RANK_SLOTS[tier * CLASS_SPAN];
    const last = RANK_SLOTS[(tier + 1) * CLASS_SPAN - 1];
    const slope = (last[1] - first[1]) / (last[0] - first[0]);
    return [
        [
            first[0] - CLASS_BAR_REACH,
            first[1] - CLASS_BAR_REACH * slope - CLASS_BAR_DROP,
            0
        ],
        [
            last[0] + CLASS_BAR_REACH,
            last[1] + CLASS_BAR_REACH * slope - CLASS_BAR_DROP,
            0
        ]
    ];
};
const certTitleFrame = (layout)=>{
    const portrait = layout === 'portrait';
    const space = rankSpace(portrait);
    const sheet = certScale(portrait);
    // so breit wie das Blatt: die Überschrift steht in einer Zeile mittig darauf
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(spaceToStage(space, CERT_AT[0], 0), spaceToStage(space, CERT_AT[1] + CERT_TITLE_TOP * sheet, 1), layout, 'below', CERT.width * sheet * space.scale);
};
const classLabelFrame = (tier, layout)=>{
    const portrait = layout === 'portrait';
    const space = rankSpace(portrait);
    const [a, b] = classBar(tier, portrait);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(spaceToStage(space, (a[0] + b[0]) / 2, 0), spaceToStage(space, (a[1] + b[1]) / 2 - 0.22, 1), layout, 'below', (portrait ? PORTRAIT_COL : 4.2) * space.scale);
};
/** Bogenhöhe je gewandertem Platz (Aufsteiger oben, Absteiger unten) */ const ARC = 0.42;
/** Tiefe je gewandertem Platz: Aufsteiger kommen nach vorn, Absteiger gehen zurück */ const DEPTH = 1.0;
/** Wandernde Waben schrumpfen unterwegs um diesen Anteil — auf dem Bildschirm überdecken sie sich so kaum */ const SHRINK = 0.3;
/**
 * Weiter als so viele Plätze schwingt keine Wabe aus: die Charge steigt vom
 * ersten auf den letzten Platz und flöge sonst über die Legende und aus dem Bild
 */ const MAX_LANE = 3;
/** Bahn einer Wabe: gewanderte Plätze mit Vorzeichen, gedeckelt */ const lane = (moved)=>Math.sign(moved) * Math.min(Math.abs(moved), MAX_LANE);
/**
 * Hochformat (#2111): im Raster 2 × 3 kreuzen sich die Wege anders als in der
 * Reihe — die Bahn je Material ist fest gewählt (Aufsteiger vorn, Absteiger
 * hinten), so dass sich unterwegs keine zwei Waben überlappen (Wächtertest).
 */ const RANK_LANES_PORTRAIT = [
    -1,
    3,
    -1,
    -1,
    1,
    -3
];
/** Anteil von t, in dem die Waben zuerst nur ausweichen (bzw. am Ende nur einsinken) */ const LEAD = 0.2;
const smoothstep = (x)=>{
    const c = x <= 0 ? 0 : x >= 1 ? 1 : x;
    return c * c * (3 - 2 * c);
};
const rankAnchors = (t, out, portrait = false)=>{
    const u = smoothstep((t - LEAD) / (1 - 2 * LEAD));
    // an den Enden exakt auf den Plätzen (sin(π) ist in Gleitkomma nicht 0)
    const swing = t <= 0 || t >= 1 ? 0 : Math.sin(Math.PI * t);
    const row = portrait ? RANK_ROW_PORTRAIT : RANK_ROW;
    const slots = portrait ? RANK_SLOTS_PORTRAIT : RANK_SLOTS;
    for(let i = 0; i < out.length; i += 1){
        const from = row[RANK_BEFORE[i]];
        const to = slots[RANK_AFTER[i]];
        const moved = portrait ? RANK_LANES_PORTRAIT[i] : lane(RANK_AFTER[i] - RANK_BEFORE[i]);
        const p = out[i];
        // an den Enden exakt auf den Plätzen
        const base = u <= 0 ? from : u >= 1 ? to : null;
        p[0] = base ? base[0] : from[0] + (to[0] - from[0]) * u;
        p[1] = (base ? base[1] : from[1] + (to[1] - from[1]) * u) + ARC * moved * swing;
        p[2] = (base ? base[2] : from[2] + (to[2] - from[2]) * u) + DEPTH * moved * swing;
    }
    return out;
};
const rankScale = (t, i)=>{
    if (t <= 0 || t >= 1 || RANK_AFTER[i] === RANK_BEFORE[i]) return 1;
    return 1 - SHRINK * Math.sin(Math.PI * t);
};
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "RANK_BEFORE");
__turbopack_context__.k.register(_c1, "RANK_AFTER");
__turbopack_context__.k.register(_c2, "RANK_SLOTS$RANK_START.map");
__turbopack_context__.k.register(_c3, "RANK_SLOTS");
__turbopack_context__.k.register(_c4, "RANK_ROW$RANK_SLOTS.map");
__turbopack_context__.k.register(_c5, "RANK_ROW");
__turbopack_context__.k.register(_c6, "RANK_SLOTS_PORTRAIT$RANK_START.map");
__turbopack_context__.k.register(_c7, "RANK_SLOTS_PORTRAIT");
__turbopack_context__.k.register(_c8, "RANK_ROW_PORTRAIT$RANK_START.map");
__turbopack_context__.k.register(_c9, "RANK_ROW_PORTRAIT");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/routeLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "B4_CELL",
    ()=>B4_CELL,
    "B4_ROUTE",
    ()=>B4_ROUTE,
    "B4_ROUTES",
    ()=>B4_ROUTES,
    "B4_ROUTE_2",
    ()=>B4_ROUTE_2,
    "MAP_AT",
    ()=>MAP_AT,
    "MAP_AT_PORTRAIT",
    ()=>MAP_AT_PORTRAIT,
    "MARKER_LIFT",
    ()=>MARKER_LIFT,
    "MARKER_PORTRAIT_SCALE",
    ()=>MARKER_PORTRAIT_SCALE,
    "MARKER_R",
    ()=>MARKER_R,
    "destinationAt",
    ()=>destinationAt,
    "markerSize",
    ()=>markerSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexMosaic.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
;
;
const B4_ROUTE = [
    [
        6,
        11
    ],
    [
        15,
        9
    ]
];
const B4_ROUTE_2 = [
    [
        17,
        14
    ],
    [
        8,
        5
    ]
];
const B4_ROUTES = [
    {
        route: B4_ROUTE,
        start: 'truck',
        finish: 'factory'
    },
    {
        route: B4_ROUTE_2,
        start: 'factory',
        finish: 'truck'
    }
];
const B4_CELL = 0.2;
const MARKER_R = 0.3;
const MARKER_LIFT = 0.62;
const MARKER_PORTRAIT_SCALE = 1.3;
const markerSize = (portrait)=>{
    const s = portrait ? MARKER_PORTRAIT_SCALE : 1;
    return {
        radius: MARKER_R * s,
        lift: MARKER_LIFT * s
    };
};
const MAP_AT = [
    2.4,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CENTER"][1],
    0
];
const MAP_AT_PORTRAIT = [
    0,
    -0.2,
    0
];
const FINISH = B4_ROUTE[B4_ROUTE.length - 1];
const FINISH_CELL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellCenter"])(_c = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mosaicCells"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexMosaic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EUROPE_MASK"], B4_CELL), FINISH[0], FINISH[1]);
_c1 = FINISH_CELL;
const destinationAt = (portrait)=>{
    const map = portrait ? MAP_AT_PORTRAIT : MAP_AT;
    return [
        map[0] + FINISH_CELL[0],
        map[1] + FINISH_CELL[1] + markerSize(portrait).lift,
        0
    ];
};
var _c, _c1;
__turbopack_context__.k.register(_c, "FINISH_CELL$cellCenter");
__turbopack_context__.k.register(_c1, "FINISH_CELL");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/streamLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STREAM_CELL_R",
    ()=>STREAM_CELL_R,
    "STREAM_COUNT",
    ()=>STREAM_COUNT,
    "STREAM_HUB",
    ()=>STREAM_HUB,
    "STREAM_PORTRAIT_SCALE",
    ()=>STREAM_PORTRAIT_SCALE,
    "STREAM_R",
    ()=>STREAM_R,
    "streamAt",
    ()=>streamAt,
    "streamCell",
    ()=>streamCell,
    "streamLabelFrame",
    ()=>streamLabelFrame,
    "streamLeg",
    ()=>streamLeg,
    "streamScale",
    ()=>streamScale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/wayLayout.ts [app-client] (ecmascript)");
;
;
;
;
const STREAM_COUNT = 3;
const STREAM_R = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAY_R"];
const STREAM_CELL_R = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$wayLayout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WAY_CELL_R"];
const STREAM_HUB = [
    0,
    0
];
const CELLS = {
    landscape: [
        [
            15,
            -4
        ],
        [
            11,
            0
        ],
        [
            7,
            4
        ]
    ],
    // über der Wabe: der Strom kommt von oben, wie die Pellets
    portrait: [
        [
            -6,
            -8
        ],
        [
            0,
            -8
        ],
        [
            6,
            -8
        ]
    ]
};
const STREAM_PORTRAIT_SCALE = 1.35;
const streamScale = (portrait)=>portrait ? STREAM_PORTRAIT_SCALE : 1;
const streamCell = (i, portrait)=>CELLS[portrait ? 'portrait' : 'landscape'][i];
const streamAt = (i, portrait)=>{
    const hub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hubAt"])(portrait);
    const [x, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latticeXY"])(...streamCell(i, portrait), STREAM_CELL_R);
    return [
        hub[0] + x,
        hub[1] + y,
        0
    ];
};
const streamLeg = (k, portrait)=>({
        from: streamCell(k, portrait),
        to: k + 1 < STREAM_COUNT ? streamCell(k + 1, portrait) : STREAM_HUB
    });
const streamLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = streamAt(i, portrait);
    return portrait ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x, y + STREAM_R * STREAM_PORTRAIT_SCALE + 0.12, layout, 'above', 2.6) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x + STREAM_R * (Math.sqrt(3) / 2) + 0.22, y, layout, 'right');
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/wayLayout.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WAY_CELL_R",
    ()=>WAY_CELL_R,
    "WAY_COUNT",
    ()=>WAY_COUNT,
    "WAY_LABEL_WIDTH_PORTRAIT",
    ()=>WAY_LABEL_WIDTH_PORTRAIT,
    "WAY_R",
    ()=>WAY_R,
    "wayAt",
    ()=>wayAt,
    "wayCell",
    ()=>wayCell,
    "wayLabelFrame",
    ()=>wayLabelFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/scenes/layout.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/stage/chargePath.ts [app-client] (ecmascript)");
;
;
;
const WAY_R = 0.6;
const WAY_COUNT = 4;
const WAY_CELL_R = 1.6 / 6;
const WAY_SPREAD = [
    -6,
    -2,
    2,
    6
];
/**
 * Hochformat (#2107): die vier Wege im Bogen unter der großen Wabe — außen
 * höher, innen tiefer. In einer Reihe blieb für „Werksentsorgung" kein Platz,
 * der Name wurde getrennt bzw. stieß an den Nachbarn; im Bogen stehen die
 * Namen benachbarter Wege auf verschiedenen Höhen. Ungerade Reihen: dort
 * liegen die Spalten um eine halbe Wabe versetzt, der Bogen ist symmetrisch.
 */ const WAY_CELLS_PORTRAIT = [
    [
        -7,
        3
    ],
    [
        -4,
        7
    ],
    [
        3,
        7
    ],
    [
        6,
        3
    ]
];
const wayCell = (i, portrait)=>portrait ? WAY_CELLS_PORTRAIT[i] : [
        15,
        WAY_SPREAD[i]
    ];
const WAY_LABEL_WIDTH_PORTRAIT = 2.6;
const wayAt = (i, portrait)=>{
    const hub = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$stage$2f$chargePath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hubAt"])(portrait);
    const [x, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["latticeXY"])(...wayCell(i, portrait), WAY_CELL_R);
    return [
        hub[0] + x,
        hub[1] + y,
        0
    ];
};
const wayLabelFrame = (i, layout)=>{
    const portrait = layout === 'portrait';
    const [x, y] = wayAt(i, portrait);
    return portrait ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x, y - WAY_R - 0.12, layout, 'below', WAY_LABEL_WIDTH_PORTRAIT) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$scenes$2f$layout$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["labelFrame"])(x + WAY_R * (Math.sqrt(3) / 2) + 0.22, y, layout, 'right');
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasLayer",
    ()=>CanvasLayer,
    "Layer",
    ()=>Layer,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SceneCanvas.styles__Root",
    componentId: "sc-b7d05beb-0"
})`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: ${({ $bleed })=>$bleed ? 'visible' : 'hidden'};
`;
const Layer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SceneCanvas.styles__Layer",
    componentId: "sc-b7d05beb-1"
})`
  position: absolute;
  inset: 0;
`;
const CanvasLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(Layer).withConfig({
    displayName: "SceneCanvas.styles__CanvasLayer",
    componentId: "sc-b7d05beb-2"
})`
  ${({ $bleed })=>$bleed ? 'inset: calc(-1 * var(--scene-bleed-y, 0px)) calc(-1 * var(--scene-bleed-x, 0px));' : ''}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SceneCanvas",
    ()=>SceneCanvas,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSceneVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSceneVisibility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFirstInteraction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useFirstInteraction.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$webgl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/SceneCanvas/webgl.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$SceneCanvas$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.styles.ts [app-client] (ecmascript)");
;
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
;
/** Fängt Fehler beim Aufbau der Bühne (Renderer, Chunk, Szene) — die Seite fällt auf den Rückfall zurück */ class StageBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    state = {
        failed: false
    };
    static getDerivedStateFromError() {
        return {
            failed: true
        };
    }
    componentDidCatch(error) {
        this.props.onError();
        if ("TURBOPACK compile-time truthy", 1) console.warn('[SceneCanvas] Bühne fällt zurück:', error);
    }
    render() {
        return this.state.failed ? null : this.props.children;
    }
}
// Einzige Stelle, an der Scene3D den r3f-Canvas lädt — ohne SSR, erst im Browser
const CanvasDynamic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.Canvas), {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = CanvasDynamic;
// Senkt die Auflösung, wenn die Bildrate einbricht (#1496) — nur im Canvas-Chunk
const AdaptiveQuality = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Scene3D/SceneCanvas/AdaptiveQuality.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Scene3D/SceneCanvas/AdaptiveQuality.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = AdaptiveQuality;
// Stabile Objekte: der r3f-Canvas konfiguriert bei jedem Render neu
const GL_OPTIONS = {
    antialias: true,
    alpha: true,
    powerPreference: 'default'
};
const DEFAULT_DPR = [
    1,
    1.5
];
/** Vorlauf, ab dem Canvas, three und Szenen geladen werden */ const PRELOAD_MARGIN = '400px';
/** So lange muss die Bühne mit deferPreload im Sichtfeld bleiben, bevor sie ohne Eingabe lädt */ const VISIBLE_HOLD_MS = 600;
/**
 * DOM-Hülle für alle Scene3D-Organismen (#1457): lädt den Canvas erst im
 * Browser, prüft WebGL2 und reduzierte Bewegung, hält die Bühne außerhalb des
 * Sichtfelds an und fällt bei Kontextverlust auf den Rückfall zurück.
 * Zustand und Sichtbarkeit stehen als data-Attribute an der Wurzel.
 */ const SceneCanvasImpl = ({ children, fallback, placeholder, holdPlaceholder = false, bleed = false, deferPreload = false, still = false, dataTestId, className, camera, shadows = true, frameloop = 'always', dpr = DEFAULT_DPR, flat = true, onStateChange, onVisibilityChange })=>{
    _s();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSceneVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneVisibility"])(rootRef);
    // Erst in der Nähe des Sichtfelds laden, danach eingehängt lassen
    const near = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSceneVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneVisibility"])(rootRef, 0, PRELOAD_MARGIN);
    // mit deferPreload zählt der Vorlauf erst, wenn die Seite bedient wird
    const interacted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFirstInteraction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirstInteraction"])(deferPreload);
    const [armed, setArmed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SceneCanvasImpl.useEffect": ()=>{
            if (armed) return;
            if (near && interacted || visible && !deferPreload) {
                setArmed(true);
                return;
            }
            if (!visible) return;
            // Ohne Eingabe zählt nur, was im Sichtfeld bleibt: beim Seitenstart kann ein
            // Block darüber noch wachsen (Hero der Startseite: Wabenrand kommt erst im
            // Browser) — die Bühne liegt dann nur für ein paar Bilder im Sichtfeld.
            const timer = setTimeout({
                "SceneCanvasImpl.useEffect.timer": ()=>setArmed(true)
            }["SceneCanvasImpl.useEffect.timer"], VISIBLE_HOLD_MS);
            return ({
                "SceneCanvasImpl.useEffect": ()=>clearTimeout(timer)
            })["SceneCanvasImpl.useEffect"];
        }
    }["SceneCanvasImpl.useEffect"], [
        armed,
        near,
        interacted,
        visible,
        deferPreload
    ]);
    // null = noch nicht geprüft (Server und erster Client-Render)
    const [supported, setSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phase, setPhase] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('loading');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SceneCanvasImpl.useEffect": ()=>{
            const probe = {
                "SceneCanvasImpl.useEffect.probe": ()=>setSupported((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$webgl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasWebGL2"])())
            }["SceneCanvasImpl.useEffect.probe"];
            probe();
        }
    }["SceneCanvasImpl.useEffect"], []);
    const state = phase === 'lost' ? 'lost' : supported === false || reducedMotion || still ? 'fallback' : phase;
    const showCanvas = armed && supported === true && !reducedMotion && !still && phase !== 'lost';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SceneCanvasImpl.useEffect": ()=>{
            onStateChange?.(state);
        }
    }["SceneCanvasImpl.useEffect"], [
        state,
        onStateChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SceneCanvasImpl.useEffect": ()=>{
            onVisibilityChange?.(visible);
        }
    }["SceneCanvasImpl.useEffect"], [
        visible,
        onVisibilityChange
    ]);
    // Kontextverlust zählt nur für den Canvas, der gerade steht — r3f verwirft den
    // Kontext beim eigenen Abbau (z. B. Wechsel auf reduzierte Bewegung) ebenfalls.
    const liveCanvas = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SceneCanvasImpl.useEffect": ()=>{
            if (!showCanvas) liveCanvas.current = null;
        }
    }["SceneCanvasImpl.useEffect"], [
        showCanvas
    ]);
    const handleCreated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SceneCanvasImpl.useCallback[handleCreated]": ({ gl })=>{
            const element = gl.domElement;
            liveCanvas.current = element;
            setPhase('ready');
            element.addEventListener('webglcontextlost', {
                "SceneCanvasImpl.useCallback[handleCreated]": ()=>{
                    if (liveCanvas.current === element) setPhase('lost');
                }
            }["SceneCanvasImpl.useCallback[handleCreated]"], {
                once: true
            });
        }
    }["SceneCanvasImpl.useCallback[handleCreated]"], []);
    const handleStageError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SceneCanvasImpl.useCallback[handleStageError]": ()=>setPhase('lost')
    }["SceneCanvasImpl.useCallback[handleStageError]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$SceneCanvas$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        className: className,
        $bleed: bleed,
        "data-testid": dataTestId,
        "data-scene": state,
        "data-visible": visible ? 'true' : 'false',
        "data-armed": armed ? 'true' : 'false',
        children: [
            showCanvas && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$SceneCanvas$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasLayer"], {
                $bleed: bleed,
                "data-testid": `${dataTestId}-canvas`,
                "data-bleed": bleed ? 'true' : 'false',
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StageBoundary, {
                    onError: handleStageError,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CanvasDynamic, {
                        camera: camera,
                        shadows: shadows,
                        frameloop: visible ? frameloop : 'never',
                        dpr: dpr,
                        flat: flat,
                        gl: GL_OPTIONS,
                        onCreated: handleCreated,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdaptiveQuality, {
                                max: Array.isArray(dpr) ? dpr[1] : dpr
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.tsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            children
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.tsx",
                        lineNumber: 197,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.tsx",
                    lineNumber: 196,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            (state === 'loading' || holdPlaceholder && state === 'ready') && placeholder && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$SceneCanvas$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
                "data-testid": `${dataTestId}-placeholder`,
                children: placeholder
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            (state === 'fallback' || state === 'lost') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$SceneCanvas$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
                "data-testid": `${dataTestId}-fallback`,
                children: fallback
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.tsx",
                lineNumber: 216,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SceneCanvasImpl, "1mMl/I2hmktW4ITyJXOJpEzi9Ic=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSceneVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneVisibility"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSceneVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneVisibility"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFirstInteraction$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFirstInteraction"]
    ];
});
_c2 = SceneCanvasImpl;
const SceneCanvas = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(SceneCanvasImpl);
_c3 = SceneCanvas;
const __TURBOPACK__default__export__ = SceneCanvas;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "CanvasDynamic");
__turbopack_context__.k.register(_c1, "AdaptiveQuality");
__turbopack_context__.k.register(_c2, "SceneCanvasImpl");
__turbopack_context__.k.register(_c3, "SceneCanvas");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/SceneCanvas/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$SceneCanvas$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/SceneCanvas/SceneCanvas.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$SceneCanvas$2f$webgl$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/SceneCanvas/webgl.ts [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Scene3D/SceneCanvas/webgl.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Ob der Browser einen WebGL2-Kontext anlegen kann (#1457). */ __turbopack_context__.s([
    "hasWebGL2",
    ()=>hasWebGL2
]);
const hasWebGL2 = ()=>{
    if (typeof document === 'undefined') return false;
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2');
        // Probe-Kontext sofort freigeben — Browser erlauben nur etwa 16 gleichzeitig
        gl?.getExtension('WEBGL_lose_context')?.loseContext();
        return !!gl;
    } catch  {
        return false;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useFirstInteraction.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useFirstInteraction",
    ()=>useFirstInteraction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 * Eingaben, die zeigen, dass jemand die Seite benutzt. Sie werden schon in der
 * Capture-Phase gehört, damit ein stopPropagation() weiter unten sie nicht
 * verschluckt.
 */ const INPUTS = [
    'wheel',
    'pointerdown',
    'touchstart',
    'keydown'
];
const useFirstInteraction = (enabled = true)=>{
    _s();
    const [interacted, setInteracted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFirstInteraction.useEffect": ()=>{
            if (!enabled) return;
            const done = {
                "useFirstInteraction.useEffect.done": ()=>setInteracted(true)
            }["useFirstInteraction.useEffect.done"];
            const options = {
                once: true,
                passive: true,
                capture: true
            };
            for (const name of INPUTS)window.addEventListener(name, done, options);
            // Scrollen nur der Seite selbst, deshalb ohne Capture: das Ereignis eines
            // Elements steigt nicht auf, in der Capture-Phase käme es hier aber an —
            // ein Slider, der von allein weiterblättert, gälte dann als Eingabe.
            window.addEventListener('scroll', done, {
                once: true,
                passive: true
            });
            return ({
                "useFirstInteraction.useEffect": ()=>{
                    for (const name of INPUTS)window.removeEventListener(name, done, options);
                    window.removeEventListener('scroll', done);
                }
            })["useFirstInteraction.useEffect"];
        }
    }["useFirstInteraction.useEffect"], [
        enabled
    ]);
    return interacted || !enabled;
};
_s(useFirstInteraction, "KX/IG1TmAm9NPxwqdCF8Zp048+o=");
const __TURBOPACK__default__export__ = useFirstInteraction;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useTimeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useTimeline",
    ()=>useTimeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
/** Abstand, ab dem der Fortschritt als State neu gemeldet wird (Sekunden) */ const REPORT_EVERY = 0.05;
/** Größter Zeitschritt je Frame — nach einer Frame-Pause (Tab im Hintergrund) springt der Film nicht */ const MAX_STEP = 0.1;
const useTimeline = (duration, { autoplay = false, rate = 1, hold = false } = {})=>{
    _s();
    const timeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const reportedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(autoplay);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [documentHidden, setDocumentHidden] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimeline.useEffect": ()=>{
            if (typeof document === 'undefined') return;
            const update = {
                "useTimeline.useEffect.update": ()=>setDocumentHidden(document.hidden)
            }["useTimeline.useEffect.update"];
            document.addEventListener('visibilitychange', update);
            return ({
                "useTimeline.useEffect": ()=>document.removeEventListener('visibilitychange', update)
            })["useTimeline.useEffect"];
        }
    }["useTimeline.useEffect"], []);
    const report = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimeline.useCallback[report]": ()=>{
            reportedRef.current = timeRef.current;
            setProgress(duration > 0 ? timeRef.current / duration : 0);
        }
    }["useTimeline.useCallback[report]"], [
        duration
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTimeline.useEffect": ()=>{
            if (!playing || hold || documentHidden) return;
            let frame = 0;
            let last = null;
            const tick = {
                "useTimeline.useEffect.tick": (now)=>{
                    if (last !== null) {
                        const next = timeRef.current + Math.min(MAX_STEP, (now - last) / 1000) * rate;
                        if (next >= duration) {
                            timeRef.current = duration;
                            report();
                            setPlaying(false);
                            return;
                        }
                        timeRef.current = next;
                        if (Math.abs(next - reportedRef.current) >= REPORT_EVERY - 1e-9) report();
                    }
                    last = now;
                    frame = requestAnimationFrame(tick);
                }
            }["useTimeline.useEffect.tick"];
            frame = requestAnimationFrame(tick);
            return ({
                "useTimeline.useEffect": ()=>cancelAnimationFrame(frame)
            })["useTimeline.useEffect"];
        }
    }["useTimeline.useEffect"], [
        playing,
        hold,
        documentHidden,
        duration,
        rate,
        report
    ]);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimeline.useCallback[play]": ()=>{
            if (timeRef.current >= duration) {
                timeRef.current = 0;
                report();
            }
            setPlaying(true);
        }
    }["useTimeline.useCallback[play]"], [
        duration,
        report
    ]);
    const pause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimeline.useCallback[pause]": ()=>{
            setPlaying(false);
            report();
        }
    }["useTimeline.useCallback[pause]"], [
        report
    ]);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimeline.useCallback[toggle]": ()=>playing ? pause() : play()
    }["useTimeline.useCallback[toggle]"], [
        playing,
        pause,
        play
    ]);
    const seek = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTimeline.useCallback[seek]": (seconds)=>{
            if (!Number.isFinite(seconds)) return;
            timeRef.current = Math.min(duration, Math.max(0, seconds));
            report();
        }
    }["useTimeline.useCallback[seek]"], [
        duration,
        report
    ]);
    return {
        timeRef,
        playing,
        progress,
        play,
        pause,
        toggle,
        seek
    };
};
_s(useTimeline, "o3unL68a3Db/5DU8fjTrk1CQlAc=");
const __TURBOPACK__default__export__ = useTimeline;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/cmsBlocks/imagefilm.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IMAGEFILM_BLOCK_ID",
    ()=>IMAGEFILM_BLOCK_ID,
    "IMAGEFILM_DEFAULT_POSTER",
    ()=>IMAGEFILM_DEFAULT_POSTER,
    "IMAGEFILM_DEFAULT_VIDEO",
    ()=>IMAGEFILM_DEFAULT_VIDEO,
    "IMAGEFILM_PORTRAIT_POSTER",
    ()=>IMAGEFILM_PORTRAIT_POSTER,
    "IMAGEFILM_PORTRAIT_POSTER_SET",
    ()=>IMAGEFILM_PORTRAIT_POSTER_SET,
    "IMAGEFILM_POSTER_SET",
    ()=>IMAGEFILM_POSTER_SET,
    "START_HERO_BLOCK_ID",
    ()=>START_HERO_BLOCK_ID,
    "imagefilmFromVideo",
    ()=>imagefilmFromVideo,
    "patchImagefilmBlock",
    ()=>patchImagefilmBlock,
    "patchStartEdges",
    ()=>patchStartEdges
]);
const IMAGEFILM_BLOCK_ID = 'start-imagefilm';
const IMAGEFILM_DEFAULT_VIDEO = '/video/imagefilm.mp4';
const IMAGEFILM_POSTER_SET = {
    src: '/images/cms/imagefilm/poster-2360-b6bc60.webp',
    srcSet: '/images/cms/imagefilm/poster-1280-f03b24.webp 1280w, /images/cms/imagefilm/poster-2360-b6bc60.webp 2360w',
    width: 2360,
    height: 1328
};
const IMAGEFILM_PORTRAIT_POSTER_SET = {
    src: '/images/cms/imagefilm/poster-portrait-1098-a46a99.webp',
    srcSet: '/images/cms/imagefilm/poster-portrait-640-40f465.webp 640w, /images/cms/imagefilm/poster-portrait-1098-a46a99.webp 1098w',
    width: 1098,
    height: 1377
};
const IMAGEFILM_DEFAULT_POSTER = IMAGEFILM_POSTER_SET.src;
const IMAGEFILM_PORTRAIT_POSTER = IMAGEFILM_PORTRAIT_POSTER_SET.src;
function imagefilmFromVideo(video) {
    return {
        id: video.id,
        type: 'imagefilm',
        props: {},
        ...video.layout ? {
            layout: video.layout
        } : {},
        ...video.edge ? {
            edge: video.edge
        } : {}
    };
}
function patchImagefilmBlock(blocks) {
    const index = blocks.findIndex((b)=>b?.id === IMAGEFILM_BLOCK_ID);
    if (index < 0) return {
        blocks,
        changed: false,
        reason: 'fehlt'
    };
    const block = blocks[index];
    if (block.type === 'imagefilm') {
        if (Object.keys(block.props ?? {}).length === 0) {
            return {
                blocks,
                changed: false,
                reason: 'schon umgestellt'
            };
        }
        const next = [
            ...blocks
        ];
        next[index] = {
            ...block,
            props: {}
        };
        return {
            blocks: next,
            changed: true,
            reason: 'bereinigt'
        };
    }
    if (block.type !== 'video' || block.props.src !== IMAGEFILM_DEFAULT_VIDEO) {
        return {
            blocks,
            changed: false,
            reason: 'geändert'
        };
    }
    const next = [
        ...blocks
    ];
    next[index] = imagefilmFromVideo(block);
    return {
        blocks: next,
        changed: true,
        reason: 'umgestellt'
    };
}
const START_HERO_BLOCK_ID = 'start-hero';
/** Randangaben gleich, unabhängig von der Schlüsselreihenfolge (jsonb sortiert um) */ const gleich = (a, b)=>{
    const eintraege = (x)=>JSON.stringify(Object.entries(x).sort(([k1], [k2])=>k1.localeCompare(k2)));
    return !!a && eintraege(a) === eintraege(b);
};
/** Stand der Charge 1208: Hero mit Vorgaberand (kein `edge`), Film mit Innenrand unten */ const ALT_FILM_EDGE = {
    bottom: 'inner'
};
const NEU_HERO_EDGE = {
    bottom: 'none'
};
const NEU_FILM_EDGE = {
    top: 'outer',
    bottom: 'inner'
};
function patchStartEdges(blocks) {
    const heroIndex = blocks.findIndex((b)=>b?.id === START_HERO_BLOCK_ID);
    const film = blocks[heroIndex + 1];
    if (heroIndex < 0 || film?.id !== IMAGEFILM_BLOCK_ID || film.type !== 'imagefilm') {
        return {
            blocks,
            changed: false,
            reason: 'fehlt'
        };
    }
    const hero = blocks[heroIndex];
    if (gleich(hero.edge, NEU_HERO_EDGE) && gleich(film.edge, NEU_FILM_EDGE)) {
        return {
            blocks,
            changed: false,
            reason: 'schon umgestellt'
        };
    }
    if (hero.edge !== undefined || !gleich(film.edge, ALT_FILM_EDGE)) {
        return {
            blocks,
            changed: false,
            reason: 'geändert'
        };
    }
    const next = [
        ...blocks
    ];
    next[heroIndex] = {
        ...hero,
        edge: NEU_HERO_EDGE
    };
    next[heroIndex + 1] = {
        ...film,
        edge: NEU_FILM_EDGE
    };
    return {
        blocks: next,
        changed: true,
        reason: 'umgestellt'
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/imagefilmEndLinks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IMAGEFILM_END_LINKS",
    ()=>IMAGEFILM_END_LINKS,
    "IMAGEFILM_END_LINK_EVENT",
    ()=>IMAGEFILM_END_LINK_EVENT,
    "IMAGEFILM_END_LINK_IDS",
    ()=>IMAGEFILM_END_LINK_IDS,
    "isImagefilmEndLinkId",
    ()=>isImagefilmEndLinkId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/contact/contactTopics.ts [app-client] (ecmascript)");
;
const IMAGEFILM_END_LINK_IDS = [
    'search',
    'monitored',
    'laboratory',
    'raas',
    'contact'
];
const IMAGEFILM_END_LINKS = [
    {
        id: 'search',
        href: '/material-search/',
        labelKey: 'imagefilm.endlink.search',
        defaultLabel: 'Rezyklate finden'
    },
    {
        id: 'monitored',
        href: '/monitored-material-system/',
        labelKey: 'imagefilm.endlink.monitored',
        defaultLabel: 'Monitored Materials'
    },
    {
        id: 'laboratory',
        href: '/laboratory-services/',
        labelKey: 'imagefilm.endlink.laboratory',
        defaultLabel: 'Laborleistungen'
    },
    {
        id: 'raas',
        href: '/end-to-end-supply/',
        labelKey: 'imagefilm.endlink.raas',
        defaultLabel: 'Recycling as a Service'
    },
    {
        id: 'contact',
        href: `/contact-us/?${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$contact$2f$contactTopics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTACT_TOPIC_QUERY_PARAM"]}=buy_recyclate`,
        labelKey: 'imagefilm.endlink.contact',
        defaultLabel: 'Kontakt aufnehmen'
    }
];
const isImagefilmEndLinkId = (value)=>typeof value === 'string' && IMAGEFILM_END_LINK_IDS.includes(value);
const IMAGEFILM_END_LINK_EVENT = 'imagefilm_endlink';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/sealTiers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * Klassen von Monitored Materials (#1513): Proven, Plus, Premium — vom
 * Einstieg zur Spitze. Die Farben sind die der Siegel (Bronze, Silber, Gold;
 * public/images/siegel/siegel-*.svg, dieselben Dateien nutzt die
 * Verifizierungsurkunde). Die Namen sind Eigennamen und werden nicht
 * übersetzt. Schwellen des Scores: app/helper/materialGrades.ts.
 */ __turbopack_context__.s([
    "SEAL_TIERS",
    ()=>SEAL_TIERS
]);
const SEAL_TIERS = [
    {
        id: 'proven',
        name: 'Proven',
        color: '#CD7F32'
    },
    // im Siegel steht das CSS-Schlüsselwort „silver"
    {
        id: 'plus',
        name: 'Plus',
        color: '#C0C0C0'
    },
    {
        id: 'premium',
        name: 'Premium',
        color: '#D3AF37'
    }
];
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
"[project]/apps/web/src/lib/motion/timeline.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "lerpArray",
    ()=>lerpArray,
    "lerpHex",
    ()=>lerpHex,
    "lerpNumber",
    ()=>lerpNumber,
    "markerAt",
    ()=>markerAt,
    "offsetTrack",
    ()=>offsetTrack,
    "sample",
    ()=>sample,
    "sampleAll",
    ()=>sampleAll,
    "track",
    ()=>track,
    "typewriter",
    ()=>typewriter
]);
/**
 * Zeitachsen-Motor (#1454): Keyframes, Spuren und Marker als reine Daten,
 * ohne Uhr, ohne React, ohne WebGL. Eine Szene baut ihre Spuren relativ zu
 * ihrem Anfang und hängt sie mit `offsetTrack` absolut in den Film ein; der
 * Organismus sampelt je Frame mit `sampleAll`.
 *
 * Regeln: Werte halten vor dem ersten und nach dem letzten Key. Zwischen zwei
 * Keys wirkt das Easing des Ziel-Keys auf den Anteil, dann der Lerp der Spur
 * (Standard: Zahlen linear, Zahlenfelder elementweise, Hex-Farben über RGB,
 * alles andere hält bis zum nächsten Key).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
;
const lerpNumber = (a, b, t)=>a + (b - a) * t;
const lerpArray = (a, b, t)=>a.map((v, i)=>v + ((b[i] ?? v) - v) * t);
const hexToRgb = (hex)=>{
    const h = hex.replace('#', '');
    const full = h.length === 3 ? h.split('').map((ch)=>ch + ch).join('') : h;
    return [
        parseInt(full.slice(0, 2), 16),
        parseInt(full.slice(2, 4), 16),
        parseInt(full.slice(4, 6), 16)
    ];
};
const rgbToHex = (r, g, b)=>'#' + [
        r,
        g,
        b
    ].map((v)=>Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
const lerpHex = (a, b, t)=>{
    const [r1, g1, b1] = hexToRgb(a);
    const [r2, g2, b2] = hexToRgb(b);
    return rgbToHex(r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t);
};
const isHex = (v)=>typeof v === 'string' && /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v);
const isNumberArray = (v)=>Array.isArray(v) && v.every((x)=>typeof x === 'number');
/** Standard-Lerp nach Wertetyp; unbekannte Typen halten den Startwert. */ const defaultLerp = (a, b, t)=>{
    if (typeof a === 'number' && typeof b === 'number') return lerpNumber(a, b, t);
    if (isNumberArray(a) && isNumberArray(b)) return lerpArray(a, b, t);
    if (isHex(a) && isHex(b)) return lerpHex(a, b, t);
    return a;
};
const track = (id, keys, lerp)=>{
    if (keys.length === 0) throw new Error(`Spur "${id}" hat keine Keys`);
    const sorted = [
        ...keys
    ].sort((x, y)=>x.at - y.at);
    for(let i = 1; i < sorted.length; i += 1){
        if (!(sorted[i].at > sorted[i - 1].at)) {
            throw new Error(`Spur "${id}": doppelte Zeit ${sorted[i].at}`);
        }
    }
    for (const k of sorted){
        if (!Number.isFinite(k.at)) throw new Error(`Spur "${id}": ungültige Zeit ${k.at}`);
    }
    return {
        id,
        keys: sorted,
        lerp
    };
};
const sample = (t, time)=>{
    const { keys } = t;
    const first = keys[0];
    if (!Number.isFinite(time) || time <= first.at) return first.value;
    const last = keys[keys.length - 1];
    if (time >= last.at) return last.value;
    // Ziel-Key: erster Key mit at > time
    let hi = 1;
    while(keys[hi].at <= time)hi += 1;
    const from = keys[hi - 1];
    const to = keys[hi];
    const raw = (time - from.at) / (to.at - from.at);
    const eased = to.ease ? to.ease((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(raw)) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(raw);
    const lerp = t.lerp ?? defaultLerp;
    return lerp(from.value, to.value, eased);
};
const sampleAll = (tl, time)=>{
    const out = {};
    for (const t of tl.tracks)out[t.id] = sample(t, time);
    return out;
};
const markerAt = (tl, time)=>{
    if (!Number.isFinite(time)) return null;
    let found = null;
    for (const m of tl.markers){
        if (m.at <= time && (found === null || m.at >= found.at)) found = m;
    }
    return found;
};
const typewriter = (text, from, cps, time)=>{
    if (!Number.isFinite(time) || time < from) return 0;
    return Math.min(text.length, Math.floor((time - from) * cps));
};
const offsetTrack = (t, seconds)=>({
        ...t,
        keys: t.keys.map((k)=>({
                ...k,
                at: k.at + seconds
            }))
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/motion/typewriter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "typedChars",
    ()=>typedChars,
    "typingSchedule",
    ()=>typingSchedule
]);
/**
 * Menschlicher Tipprhythmus (#1463): statt gleichmäßiger Zeichenrate schwanken
 * die Abstände je Zeichen, nach Wortende, Komma, Gedankenstrich und Satzende
 * gibt es Lesepausen. Der Rhythmus ist deterministisch (Pseudozufall aus der
 * Zeichenposition) und wird auf die vorgegebene Tippdauer skaliert, damit das
 * Drehbuch seine Zeitfenster behält.
 */ /** Relative Dauer je Zeichen, bevor auf die Tippdauer skaliert wird */ const BASE = 1;
const AFTER_SPACE = 0.9;
const AFTER_COMMA = 5;
const AFTER_DASH = 4;
const AFTER_SENTENCE = 9;
/** Schwankung je Buchstabe (± Anteil) */ const JITTER = 0.45;
/** Pseudozufall 0–1 aus einer Ganzzahl (Hash), gleich bei jedem Aufruf */ const noise = (i)=>{
    let h = Math.imul(i ^ 0x9e3779b9, 0x85ebca6b);
    h ^= h >>> 13;
    h = Math.imul(h, 0xc2b2ae35);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
};
const pauseAfter = (ch)=>{
    if (ch === '.' || ch === '!' || ch === '?' || ch === ':') return AFTER_SENTENCE;
    if (ch === ',' || ch === ';') return AFTER_COMMA;
    if (ch === '–' || ch === '—') return AFTER_DASH;
    if (ch === ' ') return AFTER_SPACE;
    return 0;
};
const typingSchedule = (text, seconds)=>{
    if (text.length === 0) return [];
    const weights = [];
    for(let i = 0; i < text.length; i += 1){
        const jitter = 1 + (noise(i + text.length * 31) * 2 - 1) * JITTER;
        // die Pause gehört vor das nächste Zeichen: erst lesen, dann weitertippen
        const pause = i > 0 ? pauseAfter(text[i - 1]) : 0;
        weights.push(BASE * jitter + pause);
    }
    const total = weights.reduce((a, b)=>a + b, 0);
    const scale = seconds / total;
    const out = [];
    let t = 0;
    for (const w of weights){
        t += w * scale;
        out.push(t);
    }
    out[out.length - 1] = seconds;
    return out;
};
const typedChars = (schedule, elapsed)=>{
    if (!Number.isFinite(elapsed) || elapsed <= 0) return 0;
    let lo = 0;
    let hi = schedule.length;
    while(lo < hi){
        const mid = lo + hi >> 1;
        if (schedule[mid] <= elapsed) lo = mid + 1;
        else hi = mid;
    }
    return lo;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/cameraFraming.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "distanceForHeight",
    ()=>distanceForHeight,
    "distanceForWidth",
    ()=>distanceForWidth
]);
/**
 * Kamera-Rahmung (#1455): welcher Abstand füllt bei gegebenem vertikalem
 * Öffnungswinkel eine Höhe bzw. Breite in Weltmaßen. Reine Mathematik.
 */ const toRad = (deg)=>deg * Math.PI / 180;
const distanceForHeight = (heightUnits, fovDeg)=>heightUnits / 2 / Math.tan(toRad(fovDeg) / 2);
const distanceForWidth = (widthUnits, fovDeg, aspect)=>distanceForHeight(widthUnits / aspect, fovDeg);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/hexMosaic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EUROPE_MASK",
    ()=>EUROPE_MASK,
    "GERMANY_MASK",
    ()=>GERMANY_MASK,
    "cellCenter",
    ()=>cellCenter,
    "cellNeighbors",
    ()=>cellNeighbors,
    "mosaicCells",
    ()=>mosaicCells,
    "mosaicOutline",
    ()=>mosaicOutline,
    "offsetOutline",
    ()=>offsetOutline,
    "routeCells",
    ()=>routeCells
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)");
;
const EUROPE_MASK = [
    '...........##.........',
    '..........##..........',
    '..........##..........',
    '........##............',
    '........###...#.......',
    '.......###..##........',
    '.......####..##.......',
    '....#..###..###.......',
    '...###...####.######..',
    '..###..#############..',
    '.......#############..',
    '.....##############...',
    '......##############..',
    '...#####.##.####.#....',
    '....####...#...###....',
    '....##....##...##.....',
    '....#......#...#......'
];
const GERMANY_MASK = [
    '...##.......',
    '...##..#....',
    '.##.######..',
    '.##########.',
    '.##########.',
    '###########.',
    '###########.',
    '###########.',
    '##########..',
    '.########...',
    '.########...',
    '..#######...',
    '..########..',
    '..########..',
    '..########..',
    '..##.####...'
];
const mosaicCells = (mask, radius)=>{
    const w = Math.sqrt(3) * radius;
    const h = 1.5 * radius;
    const raw = [];
    mask.forEach((line, row)=>{
        ;
        [
            ...line
        ].forEach((ch, col)=>{
            if (ch !== '#') return;
            raw.push({
                col,
                row,
                x: col * w + (row % 2 === 1 ? w / 2 : 0),
                y: -row * h
            });
        });
    });
    const xs = raw.map((c)=>c.x);
    const ys = raw.map((c)=>c.y);
    const cx = (Math.min(...xs) + Math.max(...xs)) / 2;
    const cy = (Math.min(...ys) + Math.max(...ys)) / 2;
    const centered = raw.map((c)=>({
            ...c,
            x: c.x - cx,
            y: c.y - cy
        }));
    const ranked = [
        ...centered
    ].sort((a, b)=>Math.hypot(a.x, a.y) - Math.hypot(b.x, b.y));
    return centered.map((c)=>({
            ...c,
            order: ranked.indexOf(c)
        }));
};
const cellCenter = (cells, col, row)=>{
    const c = cells.find((cell)=>cell.col === col && cell.row === row);
    if (!c) throw new Error(`Keine Wabe bei Spalte ${col}, Reihe ${row}`);
    return [
        c.x,
        c.y
    ];
};
const cellNeighbors = (col, row)=>{
    const shift = row % 2 === 1 ? 0 : -1;
    return [
        [
            col - 1,
            row
        ],
        [
            col + 1,
            row
        ],
        [
            col + shift,
            row - 1
        ],
        [
            col + shift + 1,
            row - 1
        ],
        [
            col + shift,
            row + 1
        ],
        [
            col + shift + 1,
            row + 1
        ]
    ];
};
const routeCells = (cells, waypoints)=>{
    const key = (col, row)=>`${col},${row}`;
    const byKey = new Map(cells.map((c)=>[
            key(c.col, c.row),
            c
        ]));
    const at = (col, row)=>{
        const c = byKey.get(key(col, row));
        if (!c) throw new Error(`Keine Wabe bei Spalte ${col}, Reihe ${row}`);
        return c;
    };
    const leg = (from, to)=>{
        const straight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$scene3d$2f$hexRoute$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexLine"])(from, to).map(([c, r])=>byKey.get(key(c, r)));
        if (straight.every((c)=>c !== undefined)) return straight;
        const prev = new Map([
            [
                key(from.col, from.row),
                null
            ]
        ]);
        const queue = [
            from
        ];
        for(let i = 0; i < queue.length; i++){
            const cur = queue[i];
            if (cur === to) break;
            const next = cellNeighbors(cur.col, cur.row).map(([c, r])=>byKey.get(key(c, r))).filter((c)=>c !== undefined && !prev.has(key(c.col, c.row))).sort((a, b)=>Math.hypot(a.x - to.x, a.y - to.y) - Math.hypot(b.x - to.x, b.y - to.y));
            for (const n of next){
                prev.set(key(n.col, n.row), cur);
                queue.push(n);
            }
        }
        if (!prev.has(key(to.col, to.row))) return [
            from,
            to
        ];
        const path = [];
        for(let c = to; c; c = prev.get(key(c.col, c.row)))path.unshift(c);
        return path;
    };
    const stops = waypoints.map(([c, r])=>at(c, r));
    const out = stops.slice(0, 1);
    for(let i = 1; i < stops.length; i++)out.push(...leg(stops[i - 1], stops[i]).slice(1));
    return out;
};
/** Höhe der Kontur über den Waben (die liegen bei z = 0) */ const OUTLINE_Z = 0.01;
const mosaicOutline = (cells, radius)=>{
    // Ecken liegen auf einem festen Gitter (x in Viertel-Wabenbreiten, y in
    // Viertelradien — das Zentrieren verschiebt um halbe Schritte) — auf das Gitter runden statt auf
    // feste Nachkommastellen: dort fiel je nach Radius eine Ecke auf die
    // Rundungsgrenze und die Kontur zerfiel in Stücke (#1513, Radius 0,175)
    const stepX = Math.sqrt(3) * radius / 4;
    const stepY = radius / 4;
    const key = (x, y)=>`${Math.round(x / stepX)},${Math.round(y / stepY)}`;
    const points = new Map();
    const edges = new Map();
    for (const c of cells){
        const ids = [];
        for(let i = 0; i < 6; i++){
            const a = Math.PI / 6 + Math.PI / 3 * i;
            const x = c.x + Math.cos(a) * radius;
            const y = c.y + Math.sin(a) * radius;
            const id = key(x, y);
            if (!points.has(id)) points.set(id, [
                x,
                y,
                OUTLINE_Z
            ]);
            ids.push(id);
        }
        for(let i = 0; i < 6; i++){
            const from = ids[i];
            const to = ids[(i + 1) % 6];
            const undirected = from < to ? `${from}|${to}` : `${to}|${from}`;
            const edge = edges.get(undirected);
            if (edge) edge.count++;
            else edges.set(undirected, {
                from,
                to,
                count: 1
            });
        }
    }
    // Randkanten gerichtet: Startecke → Endecke
    const next = new Map();
    for (const e of edges.values())if (e.count === 1) next.set(e.from, e.to);
    const loops = [];
    const done = new Set();
    for (const start of next.keys()){
        if (done.has(start)) continue;
        const loop = [];
        let at = start;
        while(at !== undefined && !done.has(at)){
            done.add(at);
            loop.push(points.get(at));
            at = next.get(at);
        }
        loop.push(loop[0]);
        loops.push(loop);
    }
    return loops;
};
const offsetOutline = (loop, distance)=>{
    const pts = loop.slice(0, -1);
    const n = pts.length;
    if (n < 3 || distance === 0) return loop.map((p)=>[
            ...p
        ]);
    let area = 0;
    for(let i = 0; i < n; i++){
        const [x1, y1] = pts[i];
        const [x2, y2] = pts[(i + 1) % n];
        area += x1 * y2 - x2 * y1;
    }
    // gegen den Uhrzeigersinn: außen liegt rechts der Laufrichtung
    const side = area > 0 ? 1 : -1;
    const normal = (a, b)=>{
        const dx = b[0] - a[0];
        const dy = b[1] - a[1];
        const len = Math.hypot(dx, dy) || 1;
        return [
            dy / len * side,
            -dx / len * side
        ];
    };
    const out = pts.map((p, i)=>{
        const [ax, ay] = normal(pts[(i - 1 + n) % n], p);
        const [bx, by] = normal(p, pts[(i + 1) % n]);
        const k = distance / (1 + ax * bx + ay * by);
        return [
            p[0] + (ax + bx) * k,
            p[1] + (ay + by) * k,
            p[2]
        ];
    });
    out.push(out[0]);
    return out;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/hexRoute.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEX_TILE_SHARE",
    ()=>HEX_TILE_SHARE,
    "PULSE_PERIOD",
    ()=>PULSE_PERIOD,
    "hexLine",
    ()=>hexLine,
    "latticeCellAt",
    ()=>latticeCellAt,
    "latticeXY",
    ()=>latticeXY,
    "routeArrived",
    ()=>routeArrived,
    "routePulse",
    ()=>routePulse,
    "routeReached",
    ()=>routeReached,
    "routeReveal",
    ()=>routeReveal,
    "routeSteps",
    ()=>routeSteps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/fray.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/easing.ts [app-client] (ecmascript)");
;
;
const HEX_TILE_SHARE = 0.86;
const latticeXY = (col, row, radius)=>{
    const w = Math.sqrt(3) * radius;
    // 0 − … statt −…: sonst steht in Reihe 0 eine negative Null
    return [
        col * w + ((row & 1) === 1 ? w / 2 : 0),
        0 - row * 1.5 * radius
    ];
};
const latticeCellAt = (x, y, radius)=>{
    const row = Math.round(-y / (1.5 * radius));
    const w = Math.sqrt(3) * radius;
    const col = Math.round((x - ((row & 1) === 1 ? w / 2 : 0)) / w);
    // + 0: keine negative Null
    return [
        col + 0,
        row + 0
    ];
};
const hexLine = (a, b)=>{
    const cube = (col, row)=>{
        const x = col - (row - (row & 1)) / 2;
        return [
            x,
            -x - row,
            row
        ];
    };
    const [ax, ay, az] = cube(a.col, a.row);
    const [bx, by, bz] = cube(b.col, b.row);
    const n = Math.max(Math.abs(ax - bx), Math.abs(ay - by), Math.abs(az - bz));
    const out = [];
    for(let i = 0; i <= n; i++){
        const t = n === 0 ? 0 : i / n;
        // kleiner Versatz: Punkte genau auf einer Kante fallen immer auf dieselbe Seite
        const fx = ax + (bx - ax) * t + 1e-6;
        const fy = ay + (by - ay) * t + 2e-6;
        const fz = az + (bz - az) * t - 3e-6;
        let rx = Math.round(fx);
        let ry = Math.round(fy);
        let rz = Math.round(fz);
        const dx = Math.abs(rx - fx);
        const dy = Math.abs(ry - fy);
        const dz = Math.abs(rz - fz);
        if (dx > dy && dx > dz) rx = -ry - rz;
        else if (dy > dz) ry = -rx - rz;
        else rz = -rx - ry;
        // + 0: keine negative Null in den Zellkoordinaten
        out.push([
            rx + (rz - (rz & 1)) / 2 + 0,
            rz + 0
        ]);
    }
    return out;
};
const routeSteps = (progress, count)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$easing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clamp01"])(progress) * Math.max(0, count - 1);
const routeReached = (progress, k, count)=>progress > 0 && k <= routeSteps(progress, count) + 1e-6;
const routeReveal = (k, steps, cell)=>{
    const ahead = k - steps;
    if (ahead <= 0) return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"][0];
    // der Versatz wächst mit dem Abstand zur Front: direkt an ihr reißt die Deckung nicht ab
    const jitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cellNoise"])({
        col: cell[0],
        row: cell[1]
    }) * __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_JITTER"] * Math.min(1, ahead);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepAt"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$fray$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_FRAY_STEPS"], Math.max(0, ahead + jitter));
};
const PULSE_PERIOD = 4;
const routePulse = (k, phase, period = PULSE_PERIOD)=>{
    const wave = 0.5 + 0.5 * Math.cos(2 * Math.PI * (k - phase) / period);
    // quadriert: kürzere helle Striche, längere Lücken
    return wave * wave;
};
const routeArrived = (progress)=>progress >= 1 - 1e-6;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/scene3d/theme3d.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sceneColors",
    ()=>sceneColors
]);
/**
 * Theme-Brücke für 3D-Szenen (#1455): Markenfarben und Dark-Mode-Palette als
 * Hex-Strings, damit Materialien dieselben Werte tragen wie die DOM-Oberfläche.
 * Bewusst nur Daten aus dem Farbmodul, keine three-Objekte, kein React.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/darkTheme.ts [app-client] (ecmascript)");
;
;
;
const light = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette;
const dark = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$darkTheme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastshipDark"].palette;
const LIGHT = {
    primary: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY,
    secondary: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
    line: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY,
    background: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE,
    muted: light.site.border,
    text: light.text.secondary
};
/** Werte der Dark-Palette aus assets/theme/darkTheme.ts */ const DARK = {
    primary: dark.default.primary,
    secondary: dark.default.secondary,
    line: dark.default.primary,
    background: dark.default.white,
    muted: dark.default.grey,
    text: light.border.default
};
/** Auf dem Markenblau: weiße Linien, Grün als Akzent, gedämpftes Blaugrau für Nebenmotive */ const ON_PRIMARY = {
    primary: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE,
    secondary: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SECONDARY,
    line: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE,
    background: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY,
    muted: dark.default.primary,
    text: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE
};
const sceneColors = (mode)=>mode === 'onPrimary' ? ON_PRIMARY : mode === 'dark' ? DARK : LIGHT;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ImagefilmBlock.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/ImagefilmBlock.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_0j9z8-8vl351q._.js.map