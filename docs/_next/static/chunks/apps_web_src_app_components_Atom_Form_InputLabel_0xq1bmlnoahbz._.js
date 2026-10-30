(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabel.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoButton",
    ()=>InfoButton,
    "InfoPlaceholder",
    ()=>InfoPlaceholder,
    "InfoSymbol",
    ()=>InfoSymbol,
    "Root",
    ()=>Root,
    "Sup",
    ()=>Sup,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipHeadline",
    ()=>TooltipHeadline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const InfoSymbol = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputLabel.styles__InfoSymbol",
    componentId: "sc-3af739ba-0"
})`
  align-items: center;
  background-color: ${(props)=>props.theme.palette.default.black};
  border-radius: 100%;
  color: ${(props)=>props.theme.palette.default.white};
  display: inline-flex;
  font-weight: bolder;
  height: 20px;
  justify-content: center;
  width: 20px;
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "InputLabel.styles__Root",
    componentId: "sc-3af739ba-1"
})`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  cursor: ${(props)=>props.$disabled ? 'not-allowed' : 'pointer'};
  width: 100%;
  color: ${(props)=>props.$error ? props.theme.palette.default.error : props.theme.palette.default.black};
  margin-bottom: ${(props)=>props.theme.margin.small};
  user-select: none;
  display: block;

  span:not(${InfoSymbol}),
  a {
    display: inline-block;
  }
`;
const InfoButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "InputLabel.styles__InfoButton",
    componentId: "sc-3af739ba-2"
})`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 0 0 10px;
  outline: none;
  padding: 0;
`;
const InfoPlaceholder = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "InputLabel.styles__InfoPlaceholder",
    componentId: "sc-3af739ba-3"
})`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: 0 0 0 10px;
  vertical-align: middle;
`;
const TooltipHeadline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h1.withConfig({
    displayName: "InputLabel.styles__TooltipHeadline",
    componentId: "sc-3af739ba-4"
})`
  color: ${(props)=>props.theme.palette.default.white};
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 10px;
`;
const TooltipContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputLabel.styles__TooltipContent",
    componentId: "sc-3af739ba-5"
})`
  max-width: 300px;
  text-align: left;
`;
const Sup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sup.withConfig({
    displayName: "InputLabel.styles__Sup",
    componentId: "sc-3af739ba-6"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabelInfo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputLabelInfo",
    ()=>InputLabelInfo,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tooltip$2f$dist$2f$react$2d$tooltip$2e$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-tooltip/dist/react-tooltip.min.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/slugify/slugify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabel.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
function InputLabelInfo({ title, content }) {
    const tooltipId = `info-tooltip-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$slugify$2f$slugify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(title)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoButton"], {
        "data-tooltip-id": tooltipId,
        type: "button",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InfoSymbol"], {
                children: "i"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabelInfo.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$tooltip$2f$dist$2f$react$2d$tooltip$2e$min$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                id: tooltipId,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputLabel$2f$InputLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipHeadline"], {
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabelInfo.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: content
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabelInfo.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabelInfo.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabelInfo.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabelInfo.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = InputLabelInfo;
const __TURBOPACK__default__export__ = InputLabelInfo;
var _c;
__turbopack_context__.k.register(_c, "InputLabelInfo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabelInfo.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputLabel/InputLabelInfo.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_app_components_Atom_Form_InputLabel_0xq1bmlnoahbz._.js.map