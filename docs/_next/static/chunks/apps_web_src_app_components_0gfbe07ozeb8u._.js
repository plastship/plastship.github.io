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
"[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/IconFullscreen.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconFullscreen.styles__Root",
    componentId: "sc-397f37a3-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/IconFullscreen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconFullscreen",
    ()=>IconFullscreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFullscreen$2f$IconFullscreen$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/IconFullscreen.styles.ts [app-client] (ecmascript)");
;
;
const IconFullscreen = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFullscreen$2f$IconFullscreen$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        className: props['className'],
        "data-testid": 'icon-fullscreen-root',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "6",
                y: "8",
                width: "12",
                height: "8",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "square",
                strokeLinejoin: "miter"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/IconFullscreen.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m2,9v-3c0-1.105.895-2,2-2h3",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "square",
                strokeLinejoin: "miter"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/IconFullscreen.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m17,4h3c1.105,0,2,.895,2,2v3",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "square",
                strokeLinejoin: "miter"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/IconFullscreen.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m22,15v3c0,1.105-.895,2-2,2h-3",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "square",
                strokeLinejoin: "miter"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/IconFullscreen.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m7,20h-3c-1.105,0-2-.895-2-2v-3",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "square",
                strokeLinejoin: "miter"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/IconFullscreen.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/IconFullscreen.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconFullscreen;
;
var _c;
__turbopack_context__.k.register(_c, "IconFullscreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFullscreen$2f$IconFullscreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/IconFullscreen.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFullscreen$2f$IconFullscreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFullscreen"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconMute/IconMute.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconMute.styles__Root",
    componentId: "sc-8a27c83-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconMute/IconMute.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconMute",
    ()=>IconMute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMute$2f$IconMute$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMute/IconMute.styles.ts [app-client] (ecmascript)");
;
;
const IconMute = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMute$2f$IconMute$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-mute-root',
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "volume-mute"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMute/IconMute.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                strokeLinecap: "square",
                strokeLinejoin: "miter",
                strokeMiterlimit: "10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 21L8 16H4C2.89543 16 2 15.1046 2 14V10C2 8.89543 2.89543 8 4 8H8L14 3V21Z",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMute/IconMute.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18 10L22 14",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMute/IconMute.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M22 10L18 14",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMute/IconMute.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMute/IconMute.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMute/IconMute.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconMute;
;
var _c;
__turbopack_context__.k.register(_c, "IconMute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconMute/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMute$2f$IconMute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMute/IconMute.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMute$2f$IconMute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMute"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconShare/IconShare.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconShare.styles__Root",
    componentId: "sc-daf5445-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconShare/IconShare.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconShare",
    ()=>IconShare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconShare$2f$IconShare$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconShare/IconShare.styles.ts [app-client] (ecmascript)");
;
;
const IconShare = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconShare$2f$IconShare$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-share-root',
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "7.6",
                y1: "10.5",
                x2: "16.4",
                y2: "5.5",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconShare/IconShare.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                x1: "7.6",
                y1: "13.5",
                x2: "16.4",
                y2: "18.5",
                stroke: "currentColor",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconShare/IconShare.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "5",
                cy: "12",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconShare/IconShare.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19",
                cy: "4",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconShare/IconShare.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "19",
                cy: "20",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "2",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconShare/IconShare.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconShare/IconShare.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconShare;
;
var _c;
__turbopack_context__.k.register(_c, "IconShare");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconShare/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconShare$2f$IconShare$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconShare/IconShare.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconShare$2f$IconShare$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconShare"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconVolume/IconVolume.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconVolume.styles__Root",
    componentId: "sc-e7c1eb72-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconVolume/IconVolume.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconVolume",
    ()=>IconVolume
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVolume$2f$IconVolume$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconVolume/IconVolume.styles.ts [app-client] (ecmascript)");
;
;
const IconVolume = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVolume$2f$IconVolume$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-volume-root',
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "volume-up"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconVolume/IconVolume.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                strokeLinecap: "square",
                strokeLinejoin: "miter",
                strokeMiterlimit: "10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 21L8 16H4C2.89543 16 2 15.1046 2 14V10C2 8.89543 2.89543 8 4 8H8L14 3V21Z",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconVolume/IconVolume.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.5355 8.46448C18.4403 9.3693 19 10.6193 19 12C19 13.3807 18.4403 14.6307 17.5355 15.5355",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconVolume/IconVolume.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20.364 5.63605C21.9926 7.26473 23 9.51473 23 12C23 14.4853 21.9926 16.7353 20.364 18.364",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconVolume/IconVolume.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconVolume/IconVolume.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconVolume/IconVolume.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconVolume;
;
var _c;
__turbopack_context__.k.register(_c, "IconVolume");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconVolume/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVolume$2f$IconVolume$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconVolume/IconVolume.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVolume$2f$IconVolume$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconVolume"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Video/Video.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ControlsWrapper",
    ()=>ControlsWrapper,
    "PlayPauseOverlay",
    ()=>PlayPauseOverlay,
    "ProgressBarContainer",
    ()=>ProgressBarContainer,
    "ProgressBarFill",
    ()=>ProgressBarFill,
    "ProgressBarHandle",
    ()=>ProgressBarHandle,
    "ProgressBarTrack",
    ()=>ProgressBarTrack,
    "StyledVideo",
    ()=>StyledVideo,
    "VideoContainer",
    ()=>VideoContainer,
    "VideoControlButton",
    ()=>VideoControlButton,
    "VideoSection",
    ()=>VideoSection,
    "VolumeBarContainer",
    ()=>VolumeBarContainer,
    "VolumeBarFill",
    ()=>VolumeBarFill,
    "VolumeBarHandle",
    ()=>VolumeBarHandle,
    "VolumeBarTrack",
    ()=>VolumeBarTrack,
    "VolumeControlWrapper",
    ()=>VolumeControlWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Box/Box.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
;
const getBackgroundColor = (background, theme)=>{
    if (!background) return 'transparent';
    switch(background){
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].PRIMARY:
            return theme.palette.default.primary;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].SECONDARY:
            return theme.palette.default.secondary;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].TERTIARY:
            return theme.palette.default.tertiary;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].WHITE:
            return theme.palette.default.white;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].BLACK:
            return theme.palette.default.black;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].GREY:
            return theme.palette.default.grey;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].GREYLIGHT:
            return theme.palette.default.greyLight;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].GREYDARK:
            return theme.palette.default.greyDark;
        case __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].TRANSPARENT:
            return 'transparent';
        default:
            return 'transparent';
    }
};
const VideoSection = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "Video.styles__VideoSection",
    componentId: "sc-574ba49a-0"
})`
  width: 100%;
  padding: 140px 0;
  /* #1213: Abstand zum nächsten Element */
  margin-bottom: 50px;
  background: ${({ $background, theme })=>getBackgroundColor($background, theme)};
  /* Wabenrand (#1188): das Band ist Host; oben/unten mindestens so viel Polster wie die Randzone */
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeHost"])($edges)}
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeInset"])('top', '140px', $edges)}
  ${({ $edges })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hexEdgeInset"])('bottom', '140px', $edges)}
`;
const VideoContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Video.styles__VideoContainer",
    componentId: "sc-574ba49a-1"
})`
  width: 100%;
  position: relative;
  cursor: pointer;
  border-radius: 8px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 100%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 5;
  }

  &:hover::after {
    opacity: 1;
  }
`;
const StyledVideo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].video.withConfig({
    displayName: "Video.styles__StyledVideo",
    componentId: "sc-574ba49a-2"
})`
  width: 100%;
  height: auto;
  display: block;
`;
const PlayPauseOverlay = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Video.styles__PlayPauseOverlay",
    componentId: "sc-574ba49a-3"
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    opacity 0.3s ease,
    transform 0.2s ease;
  opacity: ${({ $isPlaying })=>$isPlaying ? 0 : 1};
  z-index: 10;

  ${VideoContainer}:hover & {
    opacity: 1;
  }

  &:hover {
    transform: translate(-50%, -50%) scale(1.1);
  }

  svg {
    width: 40px;
    height: 40px;

    path {
      stroke: ${({ theme })=>theme.palette.default.white};
    }
  }
`;
const ControlsWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Video.styles__ControlsWrapper",
    componentId: "sc-574ba49a-4"
})`
  position: absolute;
  bottom: 43px;
  right: 16px;
  display: flex;
  align-items: flex-end;
  gap: 8px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${VideoContainer}:hover & {
    opacity: 1;
  }
`;
const VideoControlButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "Video.styles__VideoControlButton",
    componentId: "sc-574ba49a-5"
})`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: none;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme })=>theme.palette.default.white};

    path,
    rect,
    line,
    circle {
      stroke: ${({ theme })=>theme.palette.default.white};
    }
  }
`;
const ProgressBarContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Video.styles__ProgressBarContainer",
    componentId: "sc-574ba49a-6"
})`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 24px;
  padding: 3px 12px 13px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;

  ${VideoContainer}:hover & {
    opacity: 1;
  }
`;
const ProgressBarTrack = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Video.styles__ProgressBarTrack",
    componentId: "sc-574ba49a-7"
})`
  position: relative;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
`;
const ProgressBarFill = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Video.styles__ProgressBarFill",
    componentId: "sc-574ba49a-8"
})`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({ $progress })=>$progress}%;
  background: ${({ theme })=>theme.palette.default.white};
  border-radius: 2px;
  transition: width 0.1s linear;
`;
const ProgressBarHandle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Video.styles__ProgressBarHandle",
    componentId: "sc-574ba49a-9"
})`
  position: absolute;
  top: 50%;
  left: ${({ $progress })=>$progress}%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: ${({ theme })=>theme.palette.default.white};
  border-radius: 50%;
  cursor: grab;
  transition: transform 0.2s ease;

  &:active {
    cursor: grabbing;
    transform: translate(-50%, -50%) scale(1.2);
  }
`;
const VolumeControlWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Video.styles__VolumeControlWrapper",
    componentId: "sc-574ba49a-10"
})`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover > div:first-child {
    opacity: 1;
    max-height: 150px;
    padding-bottom: 8px;
  }
`;
const VolumeBarContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Video.styles__VolumeBarContainer",
    componentId: "sc-574ba49a-11"
})`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  max-height: 0;
  overflow: hidden;
  padding: 0 14px;
  cursor: pointer;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    max-height 0.3s ease,
    padding 0.3s ease;
  display: flex;
  justify-content: center;
`;
const VolumeBarTrack = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Video.styles__VolumeBarTrack",
    componentId: "sc-574ba49a-12"
})`
  position: relative;
  width: 4px;
  height: 120px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
`;
const VolumeBarFill = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Video.styles__VolumeBarFill",
    componentId: "sc-574ba49a-13"
})`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ $volume })=>$volume}%;
  background: ${({ theme })=>theme.palette.default.white};
  border-radius: 2px;
  transition: height 0.1s linear;
`;
const VolumeBarHandle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "Video.styles__VolumeBarHandle",
    componentId: "sc-574ba49a-14"
})`
  position: absolute;
  left: 50%;
  bottom: ${({ $volume })=>$volume}%;
  transform: translate(-50%, 50%);
  width: 12px;
  height: 12px;
  background: ${({ theme })=>theme.palette.default.white};
  border-radius: 50%;
  cursor: grab;
  transition: transform 0.2s ease;

  &:active {
    cursor: grabbing;
    transform: translate(-50%, 50%) scale(1.2);
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Video/Video.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Video",
    ()=>Video,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Video/Video.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlay/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$IconPlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlay/IconPlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPause/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Box/Box.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Row/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Grid/Col/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$VideoControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HexEdge/HexEdge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/edge.ts [app-client] (ecmascript)");
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
;
;
;
;
;
const Video = ({ src, poster, autoPlay = false, muted = true, loop = false, controls = false, playsInline = true, dataTestId = 'video', dataAttributes, background = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].WHITE, className, edges })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(autoPlay);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const togglePlayPause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Video.useCallback[togglePlayPause]": ()=>{
            if (!videoRef.current) return;
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    }["Video.useCallback[togglePlayPause]"], [
        isPlaying
    ]);
    const handlePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Video.useCallback[handlePlay]": ()=>setIsPlaying(true)
    }["Video.useCallback[handlePlay]"], []);
    const handlePause = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Video.useCallback[handlePause]": ()=>setIsPlaying(false)
    }["Video.useCallback[handlePause]"], []);
    const handleTimeUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Video.useCallback[handleTimeUpdate]": ()=>{
            if (!videoRef.current || isDragging) return;
            const { currentTime, duration } = videoRef.current;
            if (duration > 0) {
                setProgress(currentTime / duration * 100);
            }
        }
    }["Video.useCallback[handleTimeUpdate]"], [
        isDragging
    ]);
    const seekToPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Video.useCallback[seekToPosition]": (clientX)=>{
            if (!videoRef.current || !progressRef.current) return;
            const rect = progressRef.current.getBoundingClientRect();
            const pos = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
            // Vor geladenen Metadaten ist duration NaN — der currentTime-Setter wirft dann.
            if (!Number.isFinite(videoRef.current.duration)) return;
            videoRef.current.currentTime = pos * videoRef.current.duration;
            setProgress(pos * 100);
        }
    }["Video.useCallback[seekToPosition]"], []);
    const handleProgressClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Video.useCallback[handleProgressClick]": (e)=>{
            seekToPosition(e.clientX);
        }
    }["Video.useCallback[handleProgressClick]"], [
        seekToPosition
    ]);
    const handleMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Video.useCallback[handleMouseDown]": (e)=>{
            e.preventDefault();
            setIsDragging(true);
            seekToPosition(e.clientX);
        }
    }["Video.useCallback[handleMouseDown]"], [
        seekToPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Video.useEffect": ()=>{
            if (!isDragging) return;
            const handleMouseMove = {
                "Video.useEffect.handleMouseMove": (e)=>{
                    seekToPosition(e.clientX);
                }
            }["Video.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "Video.useEffect.handleMouseUp": ()=>{
                    setIsDragging(false);
                }
            }["Video.useEffect.handleMouseUp"];
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return ({
                "Video.useEffect": ()=>{
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                }
            })["Video.useEffect"];
        }
    }["Video.useEffect"], [
        isDragging,
        seekToPosition
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoSection"], {
        className: className,
        ...dataAttributes,
        "data-testid": dataTestId,
        $background: background,
        $edges: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasEdges"])(edges) ? edges : undefined,
        children: [
            edges && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$edge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasEdges"])(edges) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HexEdge$2f$HexEdge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HexEdge"], {
                edges: edges,
                dataTestId: `${dataTestId}-edge`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                lineNumber: 127,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Row$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Grid$2f$Col$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    xs: 12,
                    sm: 12,
                    mdOffset: 1,
                    md: 10,
                    lgOffset: 2,
                    lg: 8,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoContainer"], {
                        ref: containerRef,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledVideo"], {
                                ref: videoRef,
                                autoPlay: autoPlay,
                                muted: muted,
                                loop: loop,
                                controls: controls,
                                playsInline: playsInline,
                                poster: poster,
                                onPlay: handlePlay,
                                onPause: handlePause,
                                onTimeUpdate: handleTimeUpdate,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                                    src: src,
                                    type: "video/mp4"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlayPauseOverlay"], {
                                $isPlaying: isPlaying,
                                onClick: togglePlayPause,
                                "aria-label": isPlaying ? tr('common.video.pause', {
                                    defaultValue: 'Pause video'
                                }) : tr('common.video.play', {
                                    defaultValue: 'Play video'
                                }),
                                "data-testid": `${dataTestId}-play-toggle`,
                                "data-playing": isPlaying ? 'true' : 'false',
                                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPause"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                                    lineNumber: 156,
                                    columnNumber: 28
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$IconPlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlay"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                                    lineNumber: 156,
                                    columnNumber: 44
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$VideoControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoControls"], {
                                videoRef: videoRef,
                                containerRef: containerRef,
                                initialMuted: muted
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBarContainer"], {
                                ref: progressRef,
                                onClick: handleProgressClick,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBarTrack"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBarFill"], {
                                            $progress: progress
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProgressBarHandle"], {
                                            $progress: progress,
                                            onMouseDown: handleMouseDown
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                                lineNumber: 163,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Video/Video.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Video, "A3kpTLKamoLgEFYTo6ZNmve219w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = Video;
const __TURBOPACK__default__export__ = Video;
var _c;
__turbopack_context__.k.register(_c, "Video");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoControls",
    ()=>VideoControls,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Video/Video.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFullscreen$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFullscreen$2f$IconFullscreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFullscreen/IconFullscreen.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconShare$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconShare/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVolume$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconVolume/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMute$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMute/index.ts [app-client] (ecmascript)");
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
;
const VideoControls = ({ videoRef, containerRef, initialMuted = true })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const volumeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [volume, setVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMuted ? 0 : 1);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMuted);
    const [isVolumeDragging, setIsVolumeDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoControls.useCallback[handleShare]": async ()=>{
            const shareData = {
                title: 'Plastship Video',
                url: window.location.href
            };
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                await navigator.clipboard.writeText(window.location.href);
            }
        }
    }["VideoControls.useCallback[handleShare]"], []);
    const toggleFullscreen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoControls.useCallback[toggleFullscreen]": ()=>{
            if (!containerRef.current) return;
            if (document.fullscreenElement) {
                document.exitFullscreen();
            } else {
                containerRef.current.requestFullscreen();
            }
        }
    }["VideoControls.useCallback[toggleFullscreen]"], [
        containerRef
    ]);
    const toggleMute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoControls.useCallback[toggleMute]": ()=>{
            if (!videoRef.current) return;
            if (isMuted) {
                videoRef.current.muted = false;
                videoRef.current.volume = volume || 1;
                setIsMuted(false);
                if (volume === 0) setVolume(1);
            } else {
                videoRef.current.muted = true;
                setIsMuted(true);
            }
        }
    }["VideoControls.useCallback[toggleMute]"], [
        isMuted,
        volume,
        videoRef
    ]);
    const setVolumeToPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoControls.useCallback[setVolumeToPosition]": (clientY)=>{
            if (!videoRef.current || !volumeRef.current) return;
            const rect = volumeRef.current.getBoundingClientRect();
            const pos = Math.max(0, Math.min(1, (rect.bottom - clientY) / rect.height));
            videoRef.current.volume = pos;
            videoRef.current.muted = pos === 0;
            setVolume(pos);
            setIsMuted(pos === 0);
        }
    }["VideoControls.useCallback[setVolumeToPosition]"], [
        videoRef
    ]);
    const handleVolumeClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoControls.useCallback[handleVolumeClick]": (e)=>{
            setVolumeToPosition(e.clientY);
        }
    }["VideoControls.useCallback[handleVolumeClick]"], [
        setVolumeToPosition
    ]);
    const handleVolumeMouseDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "VideoControls.useCallback[handleVolumeMouseDown]": (e)=>{
            e.preventDefault();
            e.stopPropagation();
            setIsVolumeDragging(true);
            setVolumeToPosition(e.clientY);
        }
    }["VideoControls.useCallback[handleVolumeMouseDown]"], [
        setVolumeToPosition
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VideoControls.useEffect": ()=>{
            if (!isVolumeDragging) return;
            const handleMouseMove = {
                "VideoControls.useEffect.handleMouseMove": (e)=>{
                    setVolumeToPosition(e.clientY);
                }
            }["VideoControls.useEffect.handleMouseMove"];
            const handleMouseUp = {
                "VideoControls.useEffect.handleMouseUp": ()=>{
                    setIsVolumeDragging(false);
                }
            }["VideoControls.useEffect.handleMouseUp"];
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return ({
                "VideoControls.useEffect": ()=>{
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);
                }
            })["VideoControls.useEffect"];
        }
    }["VideoControls.useEffect"], [
        isVolumeDragging,
        setVolumeToPosition
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControlsWrapper"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoControlButton"], {
                onClick: handleShare,
                "aria-label": tr('common.video.share', {
                    defaultValue: 'Share video'
                }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconShare$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeControlWrapper"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeBarContainer"], {
                        ref: volumeRef,
                        onClick: handleVolumeClick,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeBarTrack"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeBarFill"], {
                                    $volume: isMuted ? 0 : volume * 100
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VolumeBarHandle"], {
                                    $volume: isMuted ? 0 : volume * 100,
                                    onMouseDown: handleVolumeMouseDown
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoControlButton"], {
                        onClick: toggleMute,
                        "aria-label": isMuted ? tr('common.video.unmute', {
                            defaultValue: 'Unmute'
                        }) : tr('common.video.mute', {
                            defaultValue: 'Mute'
                        }),
                        children: isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMute$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                            lineNumber: 122,
                            columnNumber: 22
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVolume$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                            lineNumber: 122,
                            columnNumber: 37
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VideoControlButton"], {
                onClick: toggleFullscreen,
                "aria-label": tr('common.video.fullscreen', {
                    defaultValue: 'Toggle fullscreen'
                }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFullscreen$2f$IconFullscreen$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFullscreen"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(VideoControls, "ZgQNdPEfJS61k1j8ouFSxyZnaRw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = VideoControls;
const __TURBOPACK__default__export__ = VideoControls;
var _c;
__turbopack_context__.k.register(_c, "VideoControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Video/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Video/Video.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$VideoControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Video/VideoControls.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Box/Box.tsx [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/VideoBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoBlock",
    ()=>VideoBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Video/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Video/Video.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Box/Box.tsx [app-client] (ecmascript)");
;
;
;
const BACKGROUNDS = {
    primary: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].PRIMARY,
    white: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].WHITE,
    greyLight: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Box$2f$Box$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxBackgrounds"].GREYLIGHT
};
const VideoBlock = ({ block, dataTestId, dataAttributes, edges })=>{
    const { src, poster, background = 'primary' } = block.props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Video$2f$Video$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Video"], {
        src: src,
        poster: poster,
        background: BACKGROUNDS[background],
        dataTestId: dataTestId,
        dataAttributes: dataAttributes,
        edges: edges
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/VideoBlock.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = VideoBlock;
var _c;
__turbopack_context__.k.register(_c, "VideoBlock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/VideoBlock.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/blocks/VideoBlock.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_app_components_0gfbe07ozeb8u._.js.map