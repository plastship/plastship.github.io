(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/components/Atom/AiLabel/AiLabel.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "OriginalLink",
    ()=>OriginalLink,
    "Root",
    ()=>Root,
    "Text",
    ()=>Text
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "AiLabel.styles__Root",
    componentId: "sc-107ca0c3-0"
})`
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme })=>theme.margin.extrasmall};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: ${({ theme })=>theme.font.text.caption.desktop.fontSize};
  line-height: ${({ theme })=>theme.font.text.caption.desktop.lineHeight};
  color: inherit;
`;
const Badge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "AiLabel.styles__Badge",
    componentId: "sc-107ca0c3-1"
})`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme })=>theme.margin.extrasmall};
  padding: 0 ${({ theme })=>theme.padding.small};
  border: 1px solid currentColor;
  border-radius: 999px;
  font-weight: 700;
  white-space: nowrap;

  svg {
    width: 1em;
    height: 1em;
  }
`;
const Text = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "AiLabel.styles__Text",
    componentId: "sc-107ca0c3-2"
})``;
const OriginalLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "AiLabel.styles__OriginalLink",
    componentId: "sc-107ca0c3-3"
})`
  color: inherit;
  text-decoration: underline;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/AiLabel/AiLabel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiLabel",
    ()=>AiLabel,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSparkle$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2f$aiLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/ai/aiLabel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$trailingSlash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/trailingSlash.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AiLabel$2f$AiLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/AiLabel/AiLabel.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const AiLabel = ({ kind, dataTestId, compact = false, originalHref, className })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const satz = tr(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2f$aiLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AI_LABEL_TEXT"][kind].key, {
        defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2f$aiLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AI_LABEL_TEXT"][kind].defaultValue
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AiLabel$2f$AiLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId ?? `ai-label-${kind}`,
        "data-kind": kind,
        role: "note",
        title: compact ? satz : undefined,
        "aria-label": compact ? satz : undefined,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AiLabel$2f$AiLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                "data-testid": `${dataTestId ?? `ai-label-${kind}`}-badge`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSparkle$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/AiLabel/AiLabel.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    tr(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2f$aiLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AI_LABEL_BADGE"].key, {
                        defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2f$aiLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AI_LABEL_BADGE"].defaultValue
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/AiLabel/AiLabel.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            !compact && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AiLabel$2f$AiLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                children: satz
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/AiLabel/AiLabel.tsx",
                lineNumber: 41,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0)),
            originalHref && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AiLabel$2f$AiLabel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OriginalLink"], {
                href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$trailingSlash$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureTrailingSlashHref"])(originalHref),
                hrefLang: "de",
                "data-testid": `${dataTestId ?? `ai-label-${kind}`}-original`,
                children: tr(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2f$aiLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AI_LABEL_ORIGINAL"].key, {
                    defaultValue: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$ai$2f$aiLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AI_LABEL_ORIGINAL"].defaultValue
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/AiLabel/AiLabel.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/AiLabel/AiLabel.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AiLabel, "A48qdLdlHx0As3VD+PF2fl+BV48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = AiLabel;
const __TURBOPACK__default__export__ = AiLabel;
var _c;
__turbopack_context__.k.register(_c, "AiLabel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/AiLabel/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AiLabel$2f$AiLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/AiLabel/AiLabel.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AiLabel$2f$AiLabel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiLabel"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Blockqoute/Blockqoute.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].blockquote.withConfig({
    displayName: "Blockqoute.styles__Root",
    componentId: "sc-c7e2eb3-0"
})`
  font-family: ${(props)=>props.theme.font.primaryFamily};
  font-size: ${(props)=>props.theme.font.text.body.mobile.fontSize};
  line-height: ${(props)=>props.theme.font.text.body.mobile.lineHeight};
  font-weight: 300;
  letter-spacing: ${(props)=>props.theme.font.text.body.mobile.letterSpacing};
  color: ${(props)=>props.theme.palette.default.black};
  -webkit-font-smoothing: antialiased;
  word-wrap: break-word;
  margin-bottom: ${(props)=>props.theme.margin.default};
  a {
    text-decoration: underline;
    &:link {
      color: ${(props)=>props.theme.palette.default.black};
    }
    &:active {
      color: ${(props)=>props.theme.palette.default.black};
    }
    &:visited {
      color: ${(props)=>props.theme.palette.default.black};
    }
  }
  b,
  strong {
    font-weight: 700;
  }
  @media screen and (min-width: ${(props)=>props.theme.device.mobile}) {
    font-size: ${(props)=>props.theme.font.text.body.desktop.fontSize};
    line-height: ${(props)=>props.theme.font.text.body.desktop.lineHeight};
    letter-spacing: ${(props)=>props.theme.font.text.body.desktop.letterSpacing};
  }
  border-left: 0.1875rem solid ${(props)=>props.theme.palette.default.primary};
  padding: ${(props)=>props.theme.padding.small};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Blockqoute/Blockqoute.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Blockqoute",
    ()=>Blockqoute
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Blockqoute$2f$Blockqoute$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Blockqoute/Blockqoute.styles.ts [app-client] (ecmascript)");
;
;
const Blockqoute = (props)=>{
    const { children, className } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Blockqoute$2f$Blockqoute$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": 'blockqoute-root',
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Blockqoute/Blockqoute.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Blockqoute;
;
var _c;
__turbopack_context__.k.register(_c, "Blockqoute");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/CodeBlock/CodeBlock.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BlockCode",
    ()=>BlockCode,
    "InlineCode",
    ()=>InlineCode,
    "Pre",
    ()=>Pre
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const monoFamily = "'SF Mono', 'Monaco', 'Menlo', 'Consolas', monospace";
const InlineCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].code.withConfig({
    displayName: "CodeBlock.styles__InlineCode",
    componentId: "sc-82b3b1ee-0"
})`
  font-family: ${monoFamily};
  font-size: 0.875em;
  /* aus dem Theme — fest #f1f3f5/#d63384 war im Dunkelmodus ein heller Fleck im dunklen Text */
  background-color: ${(props)=>props.theme.palette.code.background};
  color: ${(props)=>props.theme.palette.code.text};
  padding: 1px 6px;
  border-radius: 3px;
  word-break: break-word;
`;
const Pre = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].pre.withConfig({
    displayName: "CodeBlock.styles__Pre",
    componentId: "sc-82b3b1ee-1"
})`
  margin: 0 0 ${(props)=>props.theme.margin.default} 0;
  padding: 12px 16px;
  /* #1886: aus dem Theme — fest #f8f9fa war im Dunkelmodus hell unter hellem Text */
  background-color: ${(props)=>props.theme.palette.surface.subtle};
  border-radius: 6px;
  overflow-x: auto;
  -webkit-font-smoothing: antialiased;
`;
const BlockCode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].code.withConfig({
    displayName: "CodeBlock.styles__BlockCode",
    componentId: "sc-82b3b1ee-2"
})`
  font-family: ${monoFamily};
  font-size: 13px;
  line-height: 1.6;
  color: ${(props)=>props.theme.palette.default.black};
  background-color: transparent;
  padding: 0;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/CodeBlock/CodeBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CodeBlock$2f$CodeBlock$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/CodeBlock/CodeBlock.styles.ts [app-client] (ecmascript)");
;
;
const CodeBlock = (props)=>{
    const { children, inline = false, dataTestId, className } = props;
    if (inline) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CodeBlock$2f$CodeBlock$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineCode"], {
            className: className,
            "data-testid": dataTestId || 'code-inline-root',
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/CodeBlock/CodeBlock.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CodeBlock$2f$CodeBlock$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pre"], {
        className: className,
        "data-testid": dataTestId || 'code-block-root',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CodeBlock$2f$CodeBlock$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BlockCode"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/CodeBlock/CodeBlock.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/CodeBlock/CodeBlock.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CodeBlock;
;
var _c;
__turbopack_context__.k.register(_c, "CodeBlock");
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
"[project]/apps/web/src/app/components/Atom/HorizontalRule/HorizontalRule.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hr.withConfig({
    displayName: "HorizontalRule.styles__Root",
    componentId: "sc-27e0583-0"
})`
  display: flex;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 0.0625rem solid ${(props)=>props.theme.palette.default.white};
  height: 0.0625rem;
  opacity: 0.3;
  background: none;
  padding: 0;
  margin: ${(props)=>props.theme.margin.large} 0 ${(props)=>props.theme.margin.large} 0;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/HorizontalRule/HorizontalRule.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HorizontalRule",
    ()=>HorizontalRule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HorizontalRule$2f$HorizontalRule$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HorizontalRule/HorizontalRule.styles.ts [app-client] (ecmascript)");
;
;
const HorizontalRule = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HorizontalRule$2f$HorizontalRule$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'horizontal-rule-root'
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/HorizontalRule/HorizontalRule.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HorizontalRule;
;
var _c;
__turbopack_context__.k.register(_c, "HorizontalRule");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/IconArrowRight.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconArrowRight.styles__Root",
    componentId: "sc-a9169b31-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/IconArrowRight.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconArrowRight",
    ()=>IconArrowRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$IconArrowRight$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/IconArrowRight.styles.ts [app-client] (ecmascript)");
;
;
const IconArrowRight = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$IconArrowRight$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        className: props['className'],
        "data-testid": 'icon-arrow-right-root',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M13.3333 5L20 12M20 12L13.3333 19M20 12L4 12",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/IconArrowRight.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/IconArrowRight.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconArrowRight;
;
var _c;
__turbopack_context__.k.register(_c, "IconArrowRight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$IconArrowRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/IconArrowRight.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$IconArrowRight$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrowRight"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconClose/IconClose.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconClose.styles__Root",
    componentId: "sc-fb408cf8-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconClose/IconClose.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconClose",
    ()=>IconClose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$IconClose$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconClose/IconClose.styles.ts [app-client] (ecmascript)");
;
;
const IconClose = (props)=>{
    const currentColor = props['color'] ?? 'currentColor';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$IconClose$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ...props,
        className: props['className'],
        "data-testid": 'icon-close-root',
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "xmark"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconClose/IconClose.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: currentColor,
                strokeLinecap: "square",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "19",
                        y1: "19",
                        x2: "5",
                        y2: "5",
                        fill: "none",
                        stroke: currentColor,
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconClose/IconClose.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "19",
                        y1: "5",
                        x2: "5",
                        y2: "19",
                        fill: "none",
                        stroke: currentColor,
                        strokeWidth: "2"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconClose/IconClose.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconClose/IconClose.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconClose/IconClose.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconClose;
;
var _c;
__turbopack_context__.k.register(_c, "IconClose");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconClose/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$IconClose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconClose/IconClose.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$IconClose$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconClose"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconDelete/IconDelete.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconDelete.styles__Root",
    componentId: "sc-5dafb3ce-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconDelete/IconDelete.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconDelete",
    ()=>IconDelete
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDelete$2f$IconDelete$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDelete/IconDelete.styles.ts [app-client] (ecmascript)");
;
;
const IconDelete = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDelete$2f$IconDelete$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-delete-root',
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M4 6.17647H20M10 16.7647V10.4118M14 16.7647V10.4118M16 21H8C6.89543 21 6 20.0519 6 18.8824V7.23529C6 6.65052 6.44772 6.17647 7 6.17647H17C17.5523 6.17647 18 6.65052 18 7.23529V18.8824C18 20.0519 17.1046 21 16 21ZM10 6.17647H14C14.5523 6.17647 15 5.70242 15 5.11765V4.05882C15 3.47405 14.5523 3 14 3H10C9.44772 3 9 3.47405 9 4.05882V5.11765C9 5.70242 9.44772 6.17647 10 6.17647Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconDelete/IconDelete.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconDelete/IconDelete.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconDelete;
;
var _c;
__turbopack_context__.k.register(_c, "IconDelete");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconDelete/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDelete$2f$IconDelete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDelete/IconDelete.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDelete$2f$IconDelete$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDelete"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/IconMicrophone.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconMicrophone.styles__Root",
    componentId: "sc-1f4590a-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/IconMicrophone.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconMicrophone",
    ()=>IconMicrophone
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMicrophone$2f$IconMicrophone$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/IconMicrophone.styles.ts [app-client] (ecmascript)");
;
;
const IconMicrophone = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMicrophone$2f$IconMicrophone$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-microphone-root',
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "microphone"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/IconMicrophone.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 1C10.3431 1 9 2.34315 9 4V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V4C15 2.34315 13.6569 1 12 1Z",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/IconMicrophone.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M19 10V12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12V10",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/IconMicrophone.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 19V23",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/IconMicrophone.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 23H16",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/IconMicrophone.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/IconMicrophone.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/IconMicrophone.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconMicrophone;
;
var _c;
__turbopack_context__.k.register(_c, "IconMicrophone");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMicrophone$2f$IconMicrophone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/IconMicrophone.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMicrophone$2f$IconMicrophone$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMicrophone"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconSparkle.styles__Root",
    componentId: "sc-21a091f9-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconSparkle",
    ()=>IconSparkle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSparkle$2f$IconSparkle$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.styles.ts [app-client] (ecmascript)");
;
;
const IconSparkle = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSparkle$2f$IconSparkle$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-sparkle-root',
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "sparkle"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: "currentColor",
                strokeLinecap: "square",
                strokeLinejoin: "miter",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M17.85 15.15L16.5 12L15.15 15.15L12 16.5L15.15 17.85L16.5 21L17.85 17.85L21 16.5L17.85 15.15Z",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "butt"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8.85 6.15L7.5 3L6.15 6.15L3 7.5L6.15 8.85L7.5 12L8.85 8.85L12 7.5L8.85 6.15Z",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "butt"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M20.2 3.8L19 1L17.8 3.8L15 5L17.8 6.2L19 9L20.2 6.2L23 5L20.2 3.8Z",
                        fill: "currentColor",
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6.2 17.8L5 15L3.8 17.8L1 19L3.8 20.2L5 23L6.2 20.2L9 19L6.2 17.8Z",
                        fill: "currentColor",
                        stroke: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconSparkle;
;
var _c;
__turbopack_context__.k.register(_c, "IconSparkle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSparkle$2f$IconSparkle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSparkle/IconSparkle.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSparkle$2f$IconSparkle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSparkle"];
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
"[project]/apps/web/src/app/components/Atom/InlineLink/InlineLink.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "InlineLink.styles__Root",
    componentId: "sc-68a2fdb5-0"
})`
  color: ${(props)=>props.theme.palette.link.primary};
  text-decoration: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
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
"[project]/apps/web/src/app/components/Atom/InlineLink/InlineLink.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InlineLink",
    ()=>InlineLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$InlineLink$2f$InlineLink$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/InlineLink/InlineLink.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/externalLink.ts [app-client] (ecmascript)");
;
;
;
const InlineLink = (props)=>{
    const { children, href, target, rel, dataTestId, className } = props;
    // #2158: externe Ziele in neuem Tab, ohne Opener und ohne Referrer
    const linkZiel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["externalLinkProps"])(href, {
        target,
        rel
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$InlineLink$2f$InlineLink$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        href: href,
        ...linkZiel,
        className: className,
        "data-testid": dataTestId || 'inline-link-root',
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/InlineLink/InlineLink.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = InlineLink;
;
var _c;
__turbopack_context__.k.register(_c, "InlineLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/ListItem/ListItem.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icon",
    ()=>Icon,
    "Root",
    ()=>Root,
    "StyledText",
    ()=>StyledText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "ListItem.styles__Root",
    componentId: "sc-c8445b7d-0"
})`
  margin-bottom: ${(props)=>props.theme.margin.small};
  position: relative;
  padding-left: ${(props)=>props.hasicon === 'true' ? '28px' : '0'};
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextStyles"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].body)}
  text-decoration: none;
  counter-increment: list-item-counter;
  text-align: left;
  p {
    margin: 0;
  }
`;
const Icon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ListItem.styles__Icon",
    componentId: "sc-c8445b7d-1"
})`
  position: absolute;
  left: 2px;
  top: 0;
`;
const StyledText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]).withConfig({
    displayName: "ListItem.styles__StyledText",
    componentId: "sc-c8445b7d-2"
})`
  margin: 0;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/ListItem/ListItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListItem",
    ()=>ListItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ListItem$2f$ListItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ListItem/ListItem.styles.ts [app-client] (ecmascript)");
;
;
const ListItem = (props)=>{
    const { children, icon, dataTestId } = props;
    const hasIcon = props['icon'] !== undefined && props['icon'] !== null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ListItem$2f$ListItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": dataTestId ?? 'list-item-root',
        hasicon: hasIcon.toString(),
        children: [
            hasIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ListItem$2f$ListItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                children: icon
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/ListItem/ListItem.tsx",
                lineNumber: 24,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/ListItem/ListItem.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ListItem;
;
var _c;
__turbopack_context__.k.register(_c, "ListItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkdownImage",
    ()=>MarkdownImage,
    "MarkdownRendererMode",
    ()=>MarkdownRendererMode,
    "Root",
    ()=>Root,
    "TableScroll",
    ()=>TableScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
var MarkdownRendererMode = /*#__PURE__*/ function(MarkdownRendererMode) {
    /** Full block rendering — headings, lists, paragraphs, code blocks */ MarkdownRendererMode["block"] = "block";
    /** Inline rendering — strips block elements, single-line truncation */ MarkdownRendererMode["inline"] = "inline";
    return MarkdownRendererMode;
}({});
const blockStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  /* Minimal spacing overrides — all visual styling comes from Atom components */
  & > *:last-child {
    margin-bottom: 0;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0 0 8px 0;

    th,
    td {
      border: 1px solid ${(props)=>props.theme.palette.default.grey};
      padding: 6px 10px;
      text-align: left;
      font-size: 13px;
    }

    th {
      background-color: ${(props)=>props.theme.palette.default.greyLight};
      font-weight: 600;
    }
  }

  /* #1330: Aufgabenlisten aus remark-gfm — das Kästchen ersetzt den Aufzählungspunkt */
  .contains-task-list {
    list-style-type: none;
    padding-left: 0;
  }

  .task-list-item input[type='checkbox'] {
    margin: 0 8px 0 0;
    vertical-align: middle;
  }
`;
const inlineStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  display: inline;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Strip all block-level rendering to inline */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  blockquote,
  pre,
  ul,
  ol,
  li,
  hr,
  table {
    display: inline;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-transform: none;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  /* Hide images in inline mode */
  img {
    display: none;
  }
`;
const TableScroll = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MarkdownRenderer.styles__TableScroll",
    componentId: "sc-e731612a-0"
})`
  max-width: 100%;
  overflow-x: auto;
  margin: 0 0 8px 0;

  table {
    margin: 0;
  }
`;
const MarkdownImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img.withConfig({
    displayName: "MarkdownRenderer.styles__MarkdownImage",
    componentId: "sc-e731612a-1"
})`
  max-width: 100%;
  height: auto;
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MarkdownRenderer.styles__Root",
    componentId: "sc-e731612a-2"
})`
  font-family: ${(props)=>props.theme.font.secondaryFamily};
  font-size: 14px;
  color: ${(props)=>props.theme.palette.default.black};
  -webkit-font-smoothing: antialiased;
  word-wrap: break-word;

  ${(props)=>props.$mode === "block" ? blockStyles : inlineStyles}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkdownRenderer",
    ()=>MarkdownRenderer,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/react-markdown/lib/index.js [app-client] (ecmascript) <export Markdown as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$OrderedList$2f$OrderedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/OrderedList/OrderedList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$UnorderedList$2f$UnorderedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/UnorderedList/UnorderedList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ListItem$2f$ListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/ListItem/ListItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Blockqoute$2f$Blockqoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Blockqoute/Blockqoute.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HorizontalRule$2f$HorizontalRule$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HorizontalRule/HorizontalRule.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$InlineLink$2f$InlineLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/InlineLink/InlineLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CodeBlock$2f$CodeBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/CodeBlock/CodeBlock.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$rehypeExternalLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/markdown/rehypeExternalLinks.ts [app-client] (ecmascript)");
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
/** Bild im Block-Modus; `resolveImage` liefert Adresse und Größe. */ const bildKomponente = (resolveImage)=>function MarkdownBild({ src, alt }) {
        const adresse = typeof src === 'string' ? src : undefined;
        const bild = adresse && resolveImage ? resolveImage(adresse) : {
            src: adresse
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownImage"], {
            src: bild.src,
            width: bild.width,
            height: bild.height,
            alt: alt ?? '',
            loading: "lazy",
            "data-testid": "markdown-image",
            "data-sized": bild.width && bild.height ? 'true' : 'false'
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this);
    };
/**
 * Block-mode component mappings — maps react-markdown HTML elements to Atom components.
 */ const blockComponents = {
    h1: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
            importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h1,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 89,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    h2: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
            importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h2,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 90,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    h3: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
            importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h3,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 91,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    h4: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
            importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h4,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 92,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    h5: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
            importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h5,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 93,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    p: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            variant: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].body,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 94,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0)),
    // #1330: className durchreichen — remark-gfm markiert Aufgabenlisten mit
    // `contains-task-list` / `task-list-item`, die Styles nehmen dort den Punkt weg
    ul: ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$UnorderedList$2f$UnorderedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnorderedList"], {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 97,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0)),
    ol: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$OrderedList$2f$OrderedList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderedList"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 98,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    li: ({ children, className })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$ListItem$2f$ListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItem"], {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 99,
            columnNumber: 36
        }, ("TURBOPACK compile-time value", void 0)),
    blockquote: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Blockqoute$2f$Blockqoute$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Blockqoute"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 100,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0)),
    hr: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HorizontalRule$2f$HorizontalRule$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HorizontalRule"], {}, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 101,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
    a: ({ href, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$InlineLink$2f$InlineLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineLink"], {
            href: href || '#',
            target: "_blank",
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 103,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    // #1330: breite Tabellen scrollen in ihrem Rahmen statt die Seite zu sprengen
    table: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableScroll"], {
            "data-testid": "markdown-table",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 109,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0)),
    img: bildKomponente(),
    code: ({ children, className })=>{
        // className contains "language-xxx" for fenced code blocks
        const isBlock = !!className;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CodeBlock$2f$CodeBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
            inline: !isBlock,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 117,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    },
    pre: ({ children })=>{
        // react-markdown wraps fenced code in <pre><code>
        // The CodeBlock component handles the <pre> rendering itself,
        // so we pass children through directly
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 123,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
};
/** #1886: Codeblöcke mit eigenem Baustein je Sprache; sonst wie bisher. */ const codeMitBaustein = (renderCodeBlock)=>function MarkdownCode({ children, className }) {
        const sprache = className ? /(?:^|\s)language-([\w-]+)/.exec(className)?.[1] : undefined;
        if (sprache) {
            const eigen = renderCodeBlock(sprache, String(children ?? ''));
            if (eigen !== null && eigen !== undefined) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: eigen
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
                lineNumber: 133,
                columnNumber: 57
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CodeBlock$2f$CodeBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
            inline: !className,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 135,
            columnNumber: 12
        }, this);
    };
/**
 * Block-Komponenten mit Bild-Auflöser — je Auflöser EIN Objekt. Ohne das
 * entstünde bei jedem Render eine neue Bild-Komponente, React hängte jedes
 * Bild aus und wieder ein, und der Browser lüde es neu. Bewusst ohne Hook:
 * der Renderer läuft auch in Server-Komponenten.
 */ const mitAufloeser = new WeakMap();
/** #1886: dasselbe je Codeblock-Baustein (und Auflöser) — sonst hinge jedes Diagramm bei jedem Render neu ein. */ const mitBaustein = new WeakMap();
const OHNE_AUFLOESER = {};
function blockKomponenten(resolveImage, renderCodeBlock) {
    let basis = blockComponents;
    if (resolveImage) {
        let komponenten = mitAufloeser.get(resolveImage);
        if (!komponenten) {
            komponenten = {
                ...blockComponents,
                img: bildKomponente(resolveImage)
            };
            mitAufloeser.set(resolveImage, komponenten);
        }
        basis = komponenten;
    }
    if (!renderCodeBlock) return basis;
    const schluessel = resolveImage ?? OHNE_AUFLOESER;
    let jeBaustein = mitBaustein.get(schluessel);
    if (!jeBaustein) {
        jeBaustein = new WeakMap();
        mitBaustein.set(schluessel, jeBaustein);
    }
    let komponenten = jeBaustein.get(renderCodeBlock);
    if (!komponenten) {
        komponenten = {
            ...basis,
            code: codeMitBaustein(renderCodeBlock)
        };
        jeBaustein.set(renderCodeBlock, komponenten);
    }
    return komponenten;
}
/**
 * Inline-mode component mappings — simplified for single-line preview rendering.
 * Block elements are rendered as plain spans; only inline formatting is preserved.
 */ const inlineComponents = {
    h1: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 182,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    h2: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 183,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    h3: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 184,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    h4: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 185,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    h5: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 186,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    p: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 187,
            columnNumber: 24
        }, ("TURBOPACK compile-time value", void 0)),
    ul: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 188,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    ol: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 189,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    li: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                children,
                " "
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 190,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)),
    blockquote: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 191,
            columnNumber: 33
        }, ("TURBOPACK compile-time value", void 0)),
    hr: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: " — "
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 192,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0)),
    a: ({ href, children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$InlineLink$2f$InlineLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineLink"], {
            href: href || '#',
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 193,
            columnNumber: 30
        }, ("TURBOPACK compile-time value", void 0)),
    code: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$CodeBlock$2f$CodeBlock$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"], {
            inline: true,
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 194,
            columnNumber: 27
        }, ("TURBOPACK compile-time value", void 0)),
    pre: ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: children
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 195,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0))
};
/**
 * #2158: externe Links ohne Referrer — das Plugin setzt die Attribute am Baum,
 * die `a`-Komponenten (InlineLink) rechnen sie über `externalLinkProps` nach.
 */ const REHYPE_PLUGINS = [
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$markdown$2f$rehypeExternalLinks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rehypeExternalLinks"]
];
/**
 * MarkdownRenderer — renders a markdown string as styled HTML using Atom components.
 *
 * Two modes:
 * - `block` (default): Full rendering with Headline, Text, OrderedList, etc.
 * - `inline`: Strips block elements, renders inline only with ellipsis truncation.
 *   Use for previews in tables, notification dropdowns, etc.
 */ const MarkdownRenderer = ({ content, mode = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownRendererMode"].block, dataTestId = 'markdown-renderer-root', className, remarkPlugins, resolveImage, renderCodeBlock })=>{
    if (!content) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            $mode: mode,
            "data-testid": dataTestId,
            className: className
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 222,
            columnNumber: 12
        }, ("TURBOPACK compile-time value", void 0));
    }
    const components = mode === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownRendererMode"].block ? blockKomponenten(resolveImage, renderCodeBlock) : inlineComponents;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        $mode: mode,
        "data-testid": dataTestId,
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$markdown$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Markdown__as__default$3e$__["default"], {
            components: components,
            remarkPlugins: remarkPlugins,
            rehypePlugins: REHYPE_PLUGINS,
            children: content
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
            lineNumber: 230,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx",
        lineNumber: 229,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MarkdownRenderer;
;
const __TURBOPACK__default__export__ = MarkdownRenderer;
var _c;
__turbopack_context__.k.register(_c, "MarkdownRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/MarkdownRenderer/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx [app-client] (ecmascript) <locals>");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MarkdownRenderer"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/OrderedList/OrderedList.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ol.withConfig({
    displayName: "OrderedList.styles__Root",
    componentId: "sc-d33153d1-0"
})`
  margin-bottom: ${(props)=>props.theme.margin.default};
  max-width: 40rem;
  list-style-type: none;
  li::before {
    content: counter(list-item-counter) '. ';
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/OrderedList/OrderedList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListItems",
    ()=>ListItems,
    "OrderedList",
    ()=>OrderedList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$OrderedList$2f$OrderedList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/OrderedList/OrderedList.styles.ts [app-client] (ecmascript)");
;
;
const ListItems = [
    'Lorem',
    'Ipsum',
    'dolor'
];
const OrderedList = (props)=>{
    const { children } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$OrderedList$2f$OrderedList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'ordered-list-root',
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/OrderedList/OrderedList.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = OrderedList;
;
var _c;
__turbopack_context__.k.register(_c, "OrderedList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaChatBubble/PiaChatBubble.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bubble",
    ()=>Bubble,
    "Dot",
    ()=>Dot,
    "TypingIndicator",
    ()=>TypingIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const dotPulse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
  40% { opacity: 1; transform: scale(1); }
`;
const Bubble = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChatBubble.styles__Bubble",
    componentId: "sc-f8a029ad-0"
})`
  max-width: 85%;
  padding: ${({ theme })=>theme.padding.small};
  border-radius: ${({ theme })=>theme.borderRadius.box};
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.5;
  font-size: 14px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};

  background: ${({ theme, $isOwn })=>$isOwn ? theme.palette.default.primary : theme.palette.default.greyLight};
  color: ${({ theme, $isOwn })=>$isOwn ? theme.palette.default.white : theme.palette.default.black};

  align-self: ${({ $isOwn })=>$isOwn ? 'flex-end' : 'flex-start'};

  /* Directional border radius */
  border-bottom-right-radius: ${({ $isOwn })=>$isOwn ? '4px' : undefined};
  border-bottom-left-radius: ${({ $isOwn })=>$isOwn ? undefined : '4px'};

  /* Links in PIA messages */
  a {
    color: ${({ theme, $isOwn })=>$isOwn ? theme.palette.default.white : theme.palette.default.primary};
    text-decoration: underline;
  }

  /* Override markdown renderer img to prevent tracking pixels */
  img {
    display: none !important;
  }

  /* Consistent spacing for all markdown elements inside chat bubbles.
     Use theme.margin.small (1rem) as the standard block spacing,
     and theme.margin.extrasmall (0.5rem) for list items. */
  p, h1, h2, h3, h4, h5, h6 {
    margin-bottom: ${({ theme })=>theme.margin.small};
    max-width: 100%;
  }

  ul, ol {
    margin-bottom: ${({ theme })=>theme.margin.small};
    max-width: 100%;
  }

  li {
    margin-bottom: ${({ theme })=>theme.margin.extrasmall};
  }

  blockquote {
    margin-bottom: ${({ theme })=>theme.margin.small};
  }

  /* Remove bottom margin from the last element to avoid double spacing with bubble padding */
  > *:last-child {
    margin-bottom: 0;

    > *:last-child {
      margin-bottom: 0;
    }
  }
`;
const TypingIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChatBubble.styles__TypingIndicator",
    componentId: "sc-f8a029ad-1"
})`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 0;
`;
const Dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaChatBubble.styles__Dot",
    componentId: "sc-f8a029ad-2"
})`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme })=>theme.palette.default.greyDark};
  animation: ${dotPulse} 1.4s infinite ease-in-out;
  animation-delay: ${({ $delay })=>$delay}s;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaChatBubble/PiaChatBubble.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PiaChatBubble",
    ()=>PiaChatBubble
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaChatBubble$2f$PiaChatBubble$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaChatBubble/PiaChatBubble.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/MarkdownRenderer/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
/**
 * PiaChatBubble - Single message bubble for the PIA chat widget.
 *
 * - User messages: rendered as plain text (React auto-escapes)
 * - PIA messages: rendered via MarkdownRenderer (react-markdown, auto-escapes HTML)
 * - Typing indicator shown while streaming before first content arrives
 */ const PiaChatBubble = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = ({ content, isOwn, isStreaming = false })=>{
    const showTypingIndicator = isStreaming && !content;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaChatBubble$2f$PiaChatBubble$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bubble"], {
        $isOwn: isOwn,
        "data-testid": isOwn ? 'pia-chat-bubble-own' : 'pia-chat-bubble',
        children: showTypingIndicator ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaChatBubble$2f$PiaChatBubble$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypingIndicator"], {
            "data-testid": "pia-chat-typing",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaChatBubble$2f$PiaChatBubble$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dot"], {
                    $delay: 0
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/PiaChatBubble/PiaChatBubble.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaChatBubble$2f$PiaChatBubble$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dot"], {
                    $delay: 0.2
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/PiaChatBubble/PiaChatBubble.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaChatBubble$2f$PiaChatBubble$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dot"], {
                    $delay: 0.4
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/PiaChatBubble/PiaChatBubble.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/PiaChatBubble/PiaChatBubble.tsx",
            lineNumber: 29,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : isOwn ? // User messages: plain text (React auto-escapes HTML)
        content : // PIA messages: markdown rendering (safe by default)
        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MarkdownRenderer"], {
            content: content,
            mode: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownRendererMode"].block
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/PiaChatBubble/PiaChatBubble.tsx",
            lineNumber: 39,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/PiaChatBubble/PiaChatBubble.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = PiaChatBubble;
PiaChatBubble.displayName = 'PiaChatBubble';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PiaChatBubble$React.memo");
__turbopack_context__.k.register(_c1, "PiaChatBubble");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaChatBubble/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaChatBubble$2f$PiaChatBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaChatBubble/PiaChatBubble.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaSopButtons/PiaSopButtons.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SopCard",
    ()=>SopCard,
    "SopContainer",
    ()=>SopContainer,
    "SopDescription",
    ()=>SopDescription,
    "SopLabel",
    ()=>SopLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const SopContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaSopButtons.styles__SopContainer",
    componentId: "sc-b854fdf8-0"
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 340px;
  margin-top: 16px;
`;
const SopCard = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PiaSopButtons.styles__SopCard",
    componentId: "sc-b854fdf8-1"
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  padding: 10px 14px;
  border: 1px solid ${({ theme })=>theme.palette.default.grey};
  border-radius: 8px;
  background: ${({ theme })=>theme.palette.default.greyLight};
  cursor: pointer;
  text-align: left;
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease,
    box-shadow 0.15s ease;
  font-family: ${({ theme })=>theme.font.secondaryFamily};

  &:hover {
    border-color: ${({ theme })=>theme.palette.default.primary};
    background: ${({ theme })=>theme.palette.default.white};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: scale(0.98);
  }
`;
const SopLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaSopButtons.styles__SopLabel",
    componentId: "sc-b854fdf8-2"
})`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme })=>theme.palette.default.black};
  line-height: 1.3;
`;
const SopDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaSopButtons.styles__SopDescription",
    componentId: "sc-b854fdf8-3"
})`
  font-size: 11px;
  color: ${({ theme })=>theme.palette.default.greyDark};
  line-height: 1.3;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaSopButtons/PiaSopButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PiaSopButtons",
    ()=>PiaSopButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PageContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/PageContextProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaToolSOPs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/piaToolSOPs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaSopButtons$2f$PiaSopButtons$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaSopButtons/PiaSopButtons.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
/**
 * PIA SOP quick-action buttons — rendered in the chat empty state.
 * Shows context-aware SOPs based on the current page entity type.
 * Filters by user role if the SOP has role restrictions.
 */ const PiaSopButtons = ({ onSend })=>{
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { pageIdentity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PageContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageContext"])();
    const userRole = session?.user?.role;
    const entityType = pageIdentity.entityType;
    const entityId = pageIdentity.entityId ?? '';
    // Get SOPs for current context, filtered by role
    const sops = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaToolSOPs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSOPsForContext"])(entityType).filter((sop)=>{
        if (!sop.roles || sop.roles.length === 0) return true;
        return userRole ? sop.roles.includes(userRole) : false;
    });
    if (sops.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaSopButtons$2f$PiaSopButtons$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SopContainer"], {
        "data-testid": "pia-sop-container",
        children: sops.map((sop)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaSopButtons$2f$PiaSopButtons$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SopCard"], {
                onClick: ()=>onSend(sop.prompt.replaceAll('{{entityId}}', entityId), sop.label),
                "data-testid": `pia-sop-button-${sop.id}`,
                type: "button",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaSopButtons$2f$PiaSopButtons$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SopLabel"], {
                        children: sop.label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/PiaSopButtons/PiaSopButtons.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaSopButtons$2f$PiaSopButtons$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SopDescription"], {
                        children: sop.description
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/PiaSopButtons/PiaSopButtons.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, sop.id, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/PiaSopButtons/PiaSopButtons.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/PiaSopButtons/PiaSopButtons.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PiaSopButtons, "IrnLTaMlrrwRzuGK9NPaAXpxGaY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PageContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageContext"]
    ];
});
_c = PiaSopButtons;
;
var _c;
__turbopack_context__.k.register(_c, "PiaSopButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaSopButtons/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaSopButtons$2f$PiaSopButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaSopButtons/PiaSopButtons.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaToggleButton/PiaToggleButton.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarImage",
    ()=>AvatarImage,
    "CloseIcon",
    ()=>CloseIcon,
    "ToggleButton",
    ()=>ToggleButton,
    "floatingHexButton",
    ()=>floatingHexButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
const pulse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0% { filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 0 rgba(55, 186, 36, 0.5)); }
  70% { filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 12px rgba(55, 186, 36, 0)); }
  100% { filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15)) drop-shadow(0 0 0 rgba(55, 186, 36, 0)); }
`;
const floatingHexButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: fixed;
  bottom: 24px;
  z-index: 998;
  width: 56px;
  height: 56px;
  border: none;
  background: none;
  color: ${({ theme })=>theme.palette.text.onLight};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15));
  transition:
    transform 0.2s ease,
    filter 0.2s ease;
  padding: 0;

  /* #1749: weiße Fläche, Symbol in festem Dunkelblau (text.onLight) — hell wie dunkel;
     das helle Dark-Primär #60A0E8 erreicht auf Weiß nur 2,7 : 1 */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: ${({ theme })=>theme.palette.surface.floating};
    ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  }

  &::after {
    content: '';
    position: absolute;
    inset: -4px;
    z-index: -2;
    background: ${({ theme })=>theme.palette.default.secondary};
    opacity: 0;
    ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  }

  &:hover {
    transform: scale(1.08);
    filter: drop-shadow(0 6px 20px rgba(0, 0, 0, 0.2));
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus-visible {
    outline: none;
  }

  &:focus-visible::after {
    opacity: 1;
  }
`;
const ToggleButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PiaToggleButton.styles__ToggleButton",
    componentId: "sc-c0d6ac9c-0"
})`
  ${floatingHexButton}
  right: 24px;

  /* Pulse animation when chat is closed (attention grabber, 3 pulses then stops) */
  ${({ $isOpen })=>!$isOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      animation: ${pulse} 2s 3;
    `}
`;
const AvatarImage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img.withConfig({
    displayName: "PiaToggleButton.styles__AvatarImage",
    componentId: "sc-c0d6ac9c-1"
})`
  width: 48px;
  height: 48px;
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonMask"]}
  object-fit: cover;
  pointer-events: none;
`;
const CloseIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaToggleButton.styles__CloseIcon",
    componentId: "sc-c0d6ac9c-2"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme })=>theme.palette.text.onLight};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaToggleButton/PiaToggleButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PiaToggleButton",
    ()=>PiaToggleButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToggleButton$2f$PiaToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaToggleButton/PiaToggleButton.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconClose/index.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const PiaToggleButton = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ isOpen, onClick, avatarSrc })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToggleButton$2f$PiaToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToggleButton"], {
        $isOpen: isOpen,
        onClick: onClick,
        "aria-label": isOpen ? tr('pia.actions.close') : tr('pia.title'),
        "data-testid": "pia-toggle-button",
        children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToggleButton$2f$PiaToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CloseIcon"], {
            "data-testid": "pia-toggle-close-icon",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/PiaToggleButton/PiaToggleButton.tsx",
                lineNumber: 26,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/PiaToggleButton/PiaToggleButton.tsx",
            lineNumber: 25,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToggleButton$2f$PiaToggleButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
            src: avatarSrc,
            alt: "PIA",
            width: 48,
            height: 48
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/PiaToggleButton/PiaToggleButton.tsx",
            lineNumber: 29,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/PiaToggleButton/PiaToggleButton.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "A48qdLdlHx0As3VD+PF2fl+BV48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
})), "A48qdLdlHx0As3VD+PF2fl+BV48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
});
_c1 = PiaToggleButton;
PiaToggleButton.displayName = 'PiaToggleButton';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PiaToggleButton$React.memo");
__turbopack_context__.k.register(_c1, "PiaToggleButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaToggleButton/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToggleButton$2f$PiaToggleButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaToggleButton/PiaToggleButton.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TraceContainer",
    ()=>TraceContainer,
    "TraceIcon",
    ()=>TraceIcon,
    "TraceItem",
    ()=>TraceItem,
    "TraceName",
    ()=>TraceName,
    "TracePending",
    ()=>TracePending,
    "TraceSpinner",
    ()=>TraceSpinner,
    "TraceSummary",
    ()=>TraceSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
`;
const spin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  to { transform: rotate(360deg); }
`;
const TraceContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaToolTrace.styles__TraceContainer",
    componentId: "sc-50c4a359-0"
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 8px;
  max-width: 85%;
  align-self: flex-start;
`;
const TraceItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaToolTrace.styles__TraceItem",
    componentId: "sc-50c4a359-1"
})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: ${({ theme })=>theme.borderRadius.box};
  background: ${({ theme })=>theme.palette.default.greyLight};
  border-left: 3px solid
    ${({ theme, $success })=>$success ? theme.palette.default.success : theme.palette.default.error};
  font-size: 12px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  color: ${({ theme })=>theme.palette.default.greyDark};
  animation: ${fadeIn} 0.2s ease-out;
  line-height: 1.4;
`;
const TraceIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaToolTrace.styles__TraceIcon",
    componentId: "sc-50c4a359-2"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  font-size: 10px;
  color: ${({ theme, $success })=>$success ? theme.palette.default.success : theme.palette.default.error};
`;
const TraceName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaToolTrace.styles__TraceName",
    componentId: "sc-50c4a359-3"
})`
  font-weight: 600;
  color: ${({ theme })=>theme.palette.default.black};
`;
const TraceSummary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaToolTrace.styles__TraceSummary",
    componentId: "sc-50c4a359-4"
})`
  color: ${({ theme })=>theme.palette.default.greyDark};
`;
const TraceSpinner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaToolTrace.styles__TraceSpinner",
    componentId: "sc-50c4a359-5"
})`
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid ${({ theme })=>theme.palette.default.grey};
  border-top-color: ${({ theme })=>theme.palette.default.primary};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
  flex-shrink: 0;
`;
const TracePending = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaToolTrace.styles__TracePending",
    componentId: "sc-50c4a359-6"
})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: ${({ theme })=>theme.borderRadius.box};
  background: ${({ theme })=>theme.palette.default.greyLight};
  border-left: 3px solid ${({ theme })=>theme.palette.default.grey};
  font-size: 12px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  color: ${({ theme })=>theme.palette.default.greyDark};
  animation: ${fadeIn} 0.2s ease-out;
  line-height: 1.4;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PiaToolTrace",
    ()=>PiaToolTrace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaSummaryTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/piaSummaryTexts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/** Map tool names to human-readable display names (übersetzt über `pia.trace.tool.<name>`) */ const TOOL_DISPLAY_NAMES = {
    searchAccounts: 'Accounts suchen',
    getAccountDetails: 'Account Details',
    searchContacts: 'Kontakte suchen',
    getContactDetails: 'Kontakt Details',
    searchCases: 'Cases suchen',
    getCaseDetails: 'Case Details',
    searchOrders: 'Bestellungen suchen',
    searchProducts: 'Produkte suchen',
    searchMaterialProposals: 'Materialangebote suchen',
    searchRequirements: 'Bedarfe suchen'
};
/**
 * PiaToolTrace - Displays tool execution traces in the PIA chat.
 *
 * Shows which Salesforce queries PIA ran, with success/failure indicators.
 * Rendered above the assistant message content when tools were called.
 */ const PiaToolTrace = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ traces, isStreaming = false })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    if (!traces.length && !isStreaming) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraceContainer"], {
        "data-testid": "pia-tool-trace",
        children: [
            traces.map((trace, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraceItem"], {
                    $success: trace.success,
                    "data-testid": "pia-tool-trace-item",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraceIcon"], {
                            $success: trace.success,
                            children: trace.success ? '\u2713' : '\u2717'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraceName"], {
                            children: TOOL_DISPLAY_NAMES[trace.toolName] ? tr(`pia.trace.tool.${trace.toolName}`, {
                                defaultValue: TOOL_DISPLAY_NAMES[trace.toolName]
                            }) : trace.toolName
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraceSummary"], {
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaSummaryTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translatePiaSummary"])(tr, trace.summary)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, `${trace.toolName}-${trace.round}-${index}`, true, {
                    fileName: "[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))),
            isStreaming && traces.length > 0 && !traces[traces.length - 1] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TracePending"], {
                "data-testid": "pia-tool-trace-pending",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraceSpinner"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TraceSummary"], {
                        children: tr('pia.trace.running', {
                            defaultValue: 'Tool wird ausgefuehrt...'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "A48qdLdlHx0As3VD+PF2fl+BV48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
})), "A48qdLdlHx0As3VD+PF2fl+BV48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c1 = PiaToolTrace;
PiaToolTrace.displayName = 'PiaToolTrace';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PiaToolTrace$React.memo");
__turbopack_context__.k.register(_c1, "PiaToolTrace");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/PiaToolTrace/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.tsx [app-client] (ecmascript)");
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
"[project]/apps/web/src/app/components/Atom/UnorderedList/UnorderedList.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "UnorderedList.styles__Root",
    componentId: "sc-54b80dbe-0"
})`
  margin-bottom: ${(props)=>props.theme.margin.default};
  max-width: 40rem;
  list-style-type: ${(props)=>props.$icon ? 'none' : 'disc'};
  padding-left: ${(props)=>props.$icon ? '0' : '1.5em'};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/UnorderedList/UnorderedList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListItems",
    ()=>ListItems,
    "UnorderedList",
    ()=>UnorderedList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$UnorderedList$2f$UnorderedList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/UnorderedList/UnorderedList.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
const ListItems = [
    'Lorem',
    'Ipsum',
    'dolor'
];
const UnorderedList = (props)=>{
    const { children, icon, dataTestId } = props;
    // When an icon is provided, clone each ListItem child to pass the icon down
    const renderedChildren = icon ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child)=>{
        if (/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isValidElement(child)) {
            return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].cloneElement(child, {
                icon
            });
        }
        return child;
    }) : children;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$UnorderedList$2f$UnorderedList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        $icon: icon ? 'true' : undefined,
        "data-testid": dataTestId ? dataTestId : 'unordered-list-root',
        children: renderedChildren
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/UnorderedList/UnorderedList.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = UnorderedList;
;
var _c;
__turbopack_context__.k.register(_c, "UnorderedList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PiaChatInput/PiaChatInput.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CharCounter",
    ()=>CharCounter,
    "InputContainer",
    ()=>InputContainer,
    "InputWrapper",
    ()=>InputWrapper,
    "SendButton",
    ()=>SendButton,
    "TextInput",
    ()=>TextInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const InputContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChatInput.styles__InputContainer",
    componentId: "sc-fbebf1c2-0"
})`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  padding: ${({ theme })=>theme.padding.small};
  border-top: 1px solid ${({ theme })=>theme.palette.default.grey};
  background: ${({ theme })=>theme.palette.default.white};
`;
const TextInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].textarea.withConfig({
    displayName: "PiaChatInput.styles__TextInput",
    componentId: "sc-fbebf1c2-1"
})`
  flex: 1;
  border: 1px solid ${({ theme })=>theme.palette.default.grey};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  padding: 0.5rem 0.75rem;
  resize: none;
  min-height: 40px;
  max-height: 120px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 0.875rem;
  line-height: 1.4;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme })=>theme.palette.default.primary};
  }

  &::placeholder {
    color: ${({ theme })=>theme.palette.default.greyDark};
  }

  &:disabled {
    background: ${({ theme })=>theme.palette.default.greyLight};
    cursor: not-allowed;
  }
`;
const SendButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PiaChatInput.styles__SendButton",
    componentId: "sc-fbebf1c2-2"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: ${({ theme })=>theme.borderRadius.box};
  background: ${({ theme, $hasContent })=>$hasContent ? theme.palette.default.secondary : theme.palette.default.grey};
  color: ${({ theme })=>theme.palette.default.white};
  cursor: ${({ $hasContent })=>$hasContent ? 'pointer' : 'not-allowed'};
  transition:
    background-color 0.2s ease,
    transform 0.1s ease;
  flex-shrink: 0;

  &:hover:not(:disabled) {
    opacity: ${({ $hasContent })=>$hasContent ? 0.9 : 1};
  }

  &:active:not(:disabled) {
    transform: scale(0.95);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
const CharCounter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaChatInput.styles__CharCounter",
    componentId: "sc-fbebf1c2-3"
})`
  font-size: 11px;
  color: ${({ theme, $isWarning })=>$isWarning ? theme.palette.default.error : theme.palette.default.greyDark};
  text-align: right;
  padding: 0 4px;
  position: absolute;
  bottom: 2px;
  right: 52px;
`;
const InputWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChatInput.styles__InputWrapper",
    componentId: "sc-fbebf1c2-4"
})`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PiaChatInput/PiaChatInput.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PiaChatInput",
    ()=>PiaChatInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/piaConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatInput$2f$PiaChatInput$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PiaChatInput/PiaChatInput.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
/** Show character counter above this threshold */ const CHAR_COUNTER_THRESHOLD = 3500;
const PiaChatInput = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ onSend, disabled = false })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const textareaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleSend = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaChatInput.useCallback[handleSend]": ()=>{
            const trimmed = message.trim();
            if (trimmed && !disabled && trimmed.length <= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIA_MAX_CONTENT_LENGTH"]) {
                onSend(trimmed);
                setMessage('');
                if (textareaRef.current) {
                    textareaRef.current.style.height = 'auto';
                }
            }
        }
    }["PiaChatInput.useCallback[handleSend]"], [
        message,
        disabled,
        onSend
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaChatInput.useCallback[handleKeyDown]": (e)=>{
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
            }
        }
    }["PiaChatInput.useCallback[handleKeyDown]"], [
        handleSend
    ]);
    const handleInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaChatInput.useCallback[handleInput]": (e)=>{
            setMessage(e.target.value);
            const textarea = e.target;
            textarea.style.height = 'auto';
            textarea.style.height = `${Math.min(textarea.scrollHeight, 120)}px`;
        }
    }["PiaChatInput.useCallback[handleInput]"], []);
    const hasContent = message.trim().length > 0;
    const charCount = message.length;
    const showCounter = charCount >= CHAR_COUNTER_THRESHOLD;
    const isOverLimit = charCount > __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIA_MAX_CONTENT_LENGTH"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatInput$2f$PiaChatInput$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputContainer"], {
        "data-testid": "pia-chat-input-bar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatInput$2f$PiaChatInput$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputWrapper"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatInput$2f$PiaChatInput$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                        ref: textareaRef,
                        value: message,
                        onChange: handleInput,
                        onKeyDown: handleKeyDown,
                        placeholder: disabled ? tr('pia.input.thinking') : tr('pia.input.placeholder'),
                        disabled: disabled,
                        rows: 1,
                        "data-testid": "pia-chat-input"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatInput/PiaChatInput.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showCounter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatInput$2f$PiaChatInput$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CharCounter"], {
                        $isWarning: isOverLimit,
                        children: [
                            charCount,
                            "/",
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIA_MAX_CONTENT_LENGTH"]
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatInput/PiaChatInput.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatInput/PiaChatInput.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatInput$2f$PiaChatInput$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SendButton"], {
                onClick: handleSend,
                disabled: disabled || !hasContent || isOverLimit,
                $hasContent: hasContent && !isOverLimit,
                "data-testid": "pia-chat-send-button",
                "aria-label": tr('pia.input.send'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatInput/PiaChatInput.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatInput/PiaChatInput.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatInput/PiaChatInput.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "vmfw9g2Q3yeVvYY13SWek5/+zWk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
})), "vmfw9g2Q3yeVvYY13SWek5/+zWk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
});
_c1 = PiaChatInput;
PiaChatInput.displayName = 'PiaChatInput';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PiaChatInput$React.memo");
__turbopack_context__.k.register(_c1, "PiaChatInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PiaChatInput/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatInput$2f$PiaChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PiaChatInput/PiaChatInput.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AvatarWrapper",
    ()=>AvatarWrapper,
    "ContentWrapper",
    ()=>ContentWrapper,
    "MessageRow",
    ()=>MessageRow,
    "ModelBadge",
    ()=>ModelBadge,
    "PiaAvatar",
    ()=>PiaAvatar,
    "Timestamp",
    ()=>Timestamp,
    "TimestampRow",
    ()=>TimestampRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
const MessageRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChatMessage.styles__MessageRow",
    componentId: "sc-2fc4eb57-0"
})`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  flex-direction: ${({ $isOwn })=>$isOwn ? 'row-reverse' : 'row'};
  margin-bottom: 12px;
`;
const AvatarWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChatMessage.styles__AvatarWrapper",
    componentId: "sc-2fc4eb57-1"
})`
  width: 32px;
  height: 32px;
  /* #1781: Personenbild als Wabe wie überall */
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["portraitHexagonMask"]}
  overflow: hidden;
  flex-shrink: 0;
`;
const PiaAvatar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img.withConfig({
    displayName: "PiaChatMessage.styles__PiaAvatar",
    componentId: "sc-2fc4eb57-2"
})`
  width: 32px;
  height: 32px;
  object-fit: cover;
`;
const ContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChatMessage.styles__ContentWrapper",
    componentId: "sc-2fc4eb57-3"
})`
  display: flex;
  flex-direction: column;
  align-items: ${({ $isOwn })=>$isOwn ? 'flex-end' : 'flex-start'};
  max-width: calc(100% - 44px);
`;
const TimestampRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChatMessage.styles__TimestampRow",
    componentId: "sc-2fc4eb57-4"
})`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  flex-direction: ${({ $isOwn })=>$isOwn ? 'row-reverse' : 'row'};
`;
const Timestamp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaChatMessage.styles__Timestamp",
    componentId: "sc-2fc4eb57-5"
})`
  font-size: 11px;
  color: ${({ theme })=>theme.palette.default.greyDark};
  padding: 0 4px;
`;
const ModelBadge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaChatMessage.styles__ModelBadge",
    componentId: "sc-2fc4eb57-6"
})`
  font-size: 10px;
  color: ${({ theme })=>theme.palette.default.grey};
  padding: 1px 6px;
  border-radius: 8px;
  background: ${({ theme })=>theme.palette.default.greyLight};
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  white-space: nowrap;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PiaChatMessage",
    ()=>PiaChatMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaChatBubble$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaChatBubble/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaChatBubble$2f$PiaChatBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaChatBubble/PiaChatBubble.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaToolTrace/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaToolTrace/PiaToolTrace.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$PiaChatMessage$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PiaChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/PiaChatContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useFormatters.ts [app-client] (ecmascript)");
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
/**
 * Format a timestamp as relative time ("now", "2m ago", "1h ago") in the
 * user's language (#1640, Intl.RelativeTimeFormat). Returns a short time
 * string (HH:MM) for older messages.
 */ function formatRelativeTime(date, fmt) {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffSeconds < 60) return fmt.relative(0, 'second');
    if (diffMinutes < 60) return fmt.relative(-diffMinutes, 'minute', {
        numeric: 'always',
        style: 'short'
    });
    if (diffHours < 24) return fmt.relative(-diffHours, 'hour', {
        numeric: 'always',
        style: 'short'
    });
    return fmt.time(date);
}
const PiaChatMessage = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ message, avatarSrc })=>{
    _s();
    const isOwn = message.role === 'user';
    const { handleToolApproval } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PiaChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePiaChat"])();
    const fmt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"])();
    // Refresh relative time every 30s so timestamps don't go stale.
    const [tick, setTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PiaChatMessage.useEffect": ()=>{
            const age = Date.now() - message.timestamp.getTime();
            if (age > 86400000) return; // >24h, static string — no need to tick
            const id = setInterval({
                "PiaChatMessage.useEffect.id": ()=>setTick({
                        "PiaChatMessage.useEffect.id": (prev)=>prev + 1
                    }["PiaChatMessage.useEffect.id"])
            }["PiaChatMessage.useEffect.id"], 30000);
            return ({
                "PiaChatMessage.useEffect": ()=>clearInterval(id)
            })["PiaChatMessage.useEffect"];
        }
    }["PiaChatMessage.useEffect"], [
        message.timestamp
    ]);
    const relativeTime = formatRelativeTime(message.timestamp, fmt);
    void tick;
    const onApproval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaChatMessage.useCallback[onApproval]": async (decisions)=>{
            await handleToolApproval(message.id, decisions);
        }
    }["PiaChatMessage.useCallback[onApproval]"], [
        handleToolApproval,
        message.id
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$PiaChatMessage$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageRow"], {
        $isOwn: isOwn,
        "data-testid": "pia-chat-message",
        children: [
            !isOwn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$PiaChatMessage$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarWrapper"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$PiaChatMessage$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiaAvatar"], {
                    src: avatarSrc,
                    alt: "PIA",
                    width: 32,
                    height: 32
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx",
                    lineNumber: 72,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$PiaChatMessage$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentWrapper"], {
                $isOwn: isOwn,
                children: [
                    !isOwn && message.toolTraces && message.toolTraces.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToolTrace$2f$PiaToolTrace$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiaToolTrace"], {
                        traces: message.toolTraces,
                        isStreaming: message.isStreaming
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaChatBubble$2f$PiaChatBubble$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiaChatBubble"], {
                        content: message.displayContent ?? message.content,
                        isOwn: isOwn,
                        isStreaming: message.isStreaming
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isOwn && message.approval && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        pendingToolCalls: message.approval.pendingToolCalls,
                        conversationId: message.approval.conversationId,
                        onApproval: onApproval,
                        status: message.approval.status === 'pending' ? undefined : message.approval.status,
                        statusMessage: message.approval.statusMessage
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !message.isStreaming && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$PiaChatMessage$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimestampRow"], {
                        $isOwn: isOwn,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$PiaChatMessage$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timestamp"], {
                                children: relativeTime
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            !isOwn && message.model && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$PiaChatMessage$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelBadge"], {
                                "data-testid": "pia-message-model-badge",
                                children: message.model
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "iRmALahqWlbt+wIHjqbkp2bxYg0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PiaChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePiaChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"]
    ];
})), "iRmALahqWlbt+wIHjqbkp2bxYg0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PiaChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePiaChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"]
    ];
});
_c1 = PiaChatMessage;
PiaChatMessage.displayName = 'PiaChatMessage';
;
var _c, _c1;
__turbopack_context__.k.register(_c, "PiaChatMessage$React.memo");
__turbopack_context__.k.register(_c1, "PiaChatMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PiaChatMessage/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$PiaChatMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApprovalContainer",
    ()=>ApprovalContainer,
    "ApprovalHeader",
    ()=>ApprovalHeader,
    "ApprovalIcon",
    ()=>ApprovalIcon,
    "ApprovalItem",
    ()=>ApprovalItem,
    "ApproveButton",
    ()=>ApproveButton,
    "ButtonRow",
    ()=>ButtonRow,
    "Checkbox",
    ()=>Checkbox,
    "ExpiryTimer",
    ()=>ExpiryTimer,
    "ItemBadge",
    ()=>ItemBadge,
    "ItemContent",
    ()=>ItemContent,
    "ItemName",
    ()=>ItemName,
    "ItemPreview",
    ()=>ItemPreview,
    "RejectButton",
    ()=>RejectButton,
    "StatusMessage",
    ()=>StatusMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const fadeIn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from { opacity: 0; transform: translateY(-4px); }
  to { opacity: 1; transform: translateY(0); }
`;
const pulse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`;
const ApprovalContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaToolApproval.styles__ApprovalContainer",
    componentId: "sc-ded01bff-0"
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  max-width: 85%;
  align-self: flex-start;
  animation: ${fadeIn} 0.3s ease-out;
`;
const ApprovalHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaToolApproval.styles__ApprovalHeader",
    componentId: "sc-ded01bff-1"
})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: ${({ theme })=>theme.borderRadius.box};
  background: ${({ theme })=>theme.palette.default.greyLight};
  border-left: 3px solid ${({ theme })=>theme.palette.default.primary};
  font-size: 12px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-weight: 600;
  color: ${({ theme })=>theme.palette.default.black};
  line-height: 1.4;
`;
const ApprovalIcon = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaToolApproval.styles__ApprovalIcon",
    componentId: "sc-ded01bff-2"
})`
  display: flex;
  align-items: center;
  font-size: 14px;
  flex-shrink: 0;
`;
const ApprovalItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "PiaToolApproval.styles__ApprovalItem",
    componentId: "sc-ded01bff-3"
})`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 10px;
  border-radius: ${({ theme })=>theme.borderRadius.box};
  background: ${({ theme })=>theme.palette.default.white};
  border: 1px solid
    ${({ theme, $checked })=>$checked ? theme.palette.default.primary : theme.palette.default.grey};
  cursor: pointer;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: ${({ theme })=>theme.palette.default.primary};
  }
`;
const Checkbox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "PiaToolApproval.styles__Checkbox",
    componentId: "sc-ded01bff-4"
})`
  margin-top: 2px;
  flex-shrink: 0;
  accent-color: ${({ theme })=>theme.palette.default.primary};
`;
const ItemContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaToolApproval.styles__ItemContent",
    componentId: "sc-ded01bff-5"
})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`;
const ItemName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaToolApproval.styles__ItemName",
    componentId: "sc-ded01bff-6"
})`
  font-size: 12px;
  font-weight: 600;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  color: ${({ theme })=>theme.palette.default.black};
`;
const ItemPreview = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaToolApproval.styles__ItemPreview",
    componentId: "sc-ded01bff-7"
})`
  font-size: 11px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  color: ${({ theme })=>theme.palette.default.greyDark};
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
`;
const ItemBadge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaToolApproval.styles__ItemBadge",
    componentId: "sc-ded01bff-8"
})`
  display: inline-flex;
  align-items: center;
  padding: 1px 6px;
  border-radius: 3px;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${({ $type })=>$type === 'sf' ? '#e3f2fd' : '#f3e5f5'};
  color: ${({ $type })=>$type === 'sf' ? '#1565c0' : '#7b1fa2'};
`;
const ButtonRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaToolApproval.styles__ButtonRow",
    componentId: "sc-ded01bff-9"
})`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;
const ApproveButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PiaToolApproval.styles__ApproveButton",
    componentId: "sc-ded01bff-10"
})`
  flex: 1;
  padding: 6px 12px;
  border: none;
  border-radius: ${({ theme })=>theme.borderRadius.box};
  background: ${({ theme })=>theme.palette.default.primary};
  color: ${({ theme })=>theme.palette.default.white};
  font-size: 12px;
  font-weight: 600;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const RejectButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PiaToolApproval.styles__RejectButton",
    componentId: "sc-ded01bff-11"
})`
  padding: 6px 12px;
  border: 1px solid ${({ theme })=>theme.palette.default.error};
  border-radius: ${({ theme })=>theme.borderRadius.box};
  background: transparent;
  color: ${({ theme })=>theme.palette.default.error};
  font-size: 12px;
  font-weight: 600;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover:not(:disabled) {
    background: ${({ theme })=>theme.palette.default.error};
    color: ${({ theme })=>theme.palette.default.white};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const ExpiryTimer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaToolApproval.styles__ExpiryTimer",
    componentId: "sc-ded01bff-12"
})`
  font-size: 10px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  color: ${({ theme, $urgent })=>$urgent ? theme.palette.default.error : theme.palette.default.greyDark};
  animation: ${({ $urgent })=>$urgent ? pulse : 'none'} 1.5s ease-in-out infinite;
`;
const StatusMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaToolApproval.styles__StatusMessage",
    componentId: "sc-ded01bff-13"
})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: ${({ theme })=>theme.borderRadius.box};
  background: ${({ theme })=>theme.palette.default.greyLight};
  border-left: 3px solid
    ${({ theme, $type })=>{
    if ($type === 'success') return theme.palette.default.success;
    if ($type === 'error') return theme.palette.default.error;
    return theme.palette.default.grey;
}};
  font-size: 12px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  color: ${({ theme })=>theme.palette.default.greyDark};
  animation: ${fadeIn} 0.2s ease-out;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaSummaryTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/piaSummaryTexts.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// ─── Component ────────────────────────────────────────────────────────────────
const PiaToolApproval = /*#__PURE__*/ _s(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(_c = _s(({ pendingToolCalls, onApproval, status, statusMessage })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const [checkedItems, setCheckedItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PiaToolApproval.useState": ()=>new Set(pendingToolCalls.map({
                "PiaToolApproval.useState": (p)=>p.pendingId
            }["PiaToolApproval.useState"]))
    }["PiaToolApproval.useState"]);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PiaToolApproval.useState": ()=>{
            if (!pendingToolCalls.length) return 0;
            const expiresAt = new Date(pendingToolCalls[0].expiresAt).getTime();
            return Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
        }
    }["PiaToolApproval.useState"]);
    // ── Expiry countdown ──────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PiaToolApproval.useEffect": ()=>{
            if (status || timeLeft <= 0) return;
            const timer = setInterval({
                "PiaToolApproval.useEffect.timer": ()=>{
                    setTimeLeft({
                        "PiaToolApproval.useEffect.timer": (prev)=>{
                            const next = prev - 1;
                            if (next <= 0) {
                                clearInterval(timer);
                                return 0;
                            }
                            return next;
                        }
                    }["PiaToolApproval.useEffect.timer"]);
                }
            }["PiaToolApproval.useEffect.timer"], 1000);
            return ({
                "PiaToolApproval.useEffect": ()=>clearInterval(timer)
            })["PiaToolApproval.useEffect"];
        }
    }["PiaToolApproval.useEffect"], [
        status,
        timeLeft
    ]);
    // Auto-expire
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PiaToolApproval.useEffect": ()=>{
            if (timeLeft === 0 && !status && !isSubmitting) {
                onApproval(pendingToolCalls.map({
                    "PiaToolApproval.useEffect": (p)=>({
                            pendingId: p.pendingId,
                            approved: false
                        })
                }["PiaToolApproval.useEffect"]));
            }
        }
    }["PiaToolApproval.useEffect"], [
        timeLeft,
        status,
        isSubmitting,
        pendingToolCalls,
        onApproval
    ]);
    const toggleItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaToolApproval.useCallback[toggleItem]": (pendingId)=>{
            setCheckedItems({
                "PiaToolApproval.useCallback[toggleItem]": (prev)=>{
                    const next = new Set(prev);
                    if (next.has(pendingId)) {
                        next.delete(pendingId);
                    } else {
                        next.add(pendingId);
                    }
                    return next;
                }
            }["PiaToolApproval.useCallback[toggleItem]"]);
        }
    }["PiaToolApproval.useCallback[toggleItem]"], []);
    const handleApprove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaToolApproval.useCallback[handleApprove]": async ()=>{
            setIsSubmitting(true);
            try {
                const decisions = pendingToolCalls.map({
                    "PiaToolApproval.useCallback[handleApprove].decisions": (p)=>({
                            pendingId: p.pendingId,
                            approved: checkedItems.has(p.pendingId)
                        })
                }["PiaToolApproval.useCallback[handleApprove].decisions"]);
                await onApproval(decisions);
            } finally{
                setIsSubmitting(false);
            }
        }
    }["PiaToolApproval.useCallback[handleApprove]"], [
        pendingToolCalls,
        checkedItems,
        onApproval
    ]);
    const handleRejectAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaToolApproval.useCallback[handleRejectAll]": async ()=>{
            setIsSubmitting(true);
            try {
                await onApproval(pendingToolCalls.map({
                    "PiaToolApproval.useCallback[handleRejectAll]": (p)=>({
                            pendingId: p.pendingId,
                            approved: false
                        })
                }["PiaToolApproval.useCallback[handleRejectAll]"]));
            } finally{
                setIsSubmitting(false);
            }
        }
    }["PiaToolApproval.useCallback[handleRejectAll]"], [
        pendingToolCalls,
        onApproval
    ]);
    // ── Render status states ──────────────────────────────────────────────
    if (status === 'expired') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApprovalContainer"], {
            "data-testid": "pia-tool-approval-expired",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusMessage"], {
                $type: "expired",
                children: tr('pia.approval.expired', {
                    defaultValue: 'Aktion abgelaufen'
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                lineNumber: 122,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
            lineNumber: 121,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (status === 'approved' || status === 'rejected') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApprovalContainer"], {
            "data-testid": "pia-tool-approval-done",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusMessage"], {
                $type: status === 'approved' ? 'success' : 'error',
                children: statusMessage || (status === 'approved' ? tr('pia.approval.approved', {
                    defaultValue: 'Aktionen ausgeführt'
                }) : tr('pia.approval.rejected', {
                    defaultValue: 'Aktionen abgelehnt'
                }))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                lineNumber: 132,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
            lineNumber: 131,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (status === 'error') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApprovalContainer"], {
            "data-testid": "pia-tool-approval-error",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusMessage"], {
                $type: "error",
                children: statusMessage || tr('pia.approval.error', {
                    defaultValue: 'Fehler bei der Ausfuhrung'
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                lineNumber: 145,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
            lineNumber: 144,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Format time
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const timeStr = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    const isUrgent = timeLeft < 60;
    const checkedCount = checkedItems.size;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApprovalContainer"], {
        "data-testid": "pia-tool-approval",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApprovalHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApprovalIcon"], {
                        children: "⚠"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    tr('pia.approval.title', {
                        defaultValue: 'Aktionen bestatigen'
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExpiryTimer"], {
                        $urgent: isUrgent,
                        children: timeStr
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                        lineNumber: 165,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            pendingToolCalls.map((tc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApprovalItem"], {
                    $checked: checkedItems.has(tc.pendingId),
                    "data-testid": "pia-tool-approval-item",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Checkbox"], {
                            type: "checkbox",
                            checked: checkedItems.has(tc.pendingId),
                            onChange: ()=>toggleItem(tc.pendingId),
                            disabled: isSubmitting,
                            "data-testid": "pia-tool-approval-checkbox"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                            lineNumber: 174,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemContent"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemName"], {
                                    children: [
                                        tc.displayName,
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemBadge"], {
                                            $type: tc.isSalesforceWrite ? 'sf' : 'pg',
                                            children: tc.isSalesforceWrite ? 'Salesforce' : tr('pia.approval.internal', {
                                                defaultValue: 'Intern'
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                                            lineNumber: 184,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemPreview"], {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaSummaryTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translatePiaPreview"])(tr, tc.preview)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                                    lineNumber: 190,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, tc.pendingId, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonRow"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ApproveButton"], {
                        onClick: handleApprove,
                        disabled: isSubmitting || checkedCount === 0,
                        "data-testid": "pia-tool-approval-confirm",
                        children: isSubmitting ? tr('pia.approval.running', {
                            defaultValue: 'Wird ausgeführt...'
                        }) : tr('pia.approval.confirmSelection', {
                            defaultValue: 'Auswahl bestatigen ({{checked}}/{{total}})',
                            checked: checkedCount,
                            total: pendingToolCalls.length
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaToolApproval$2f$PiaToolApproval$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RejectButton"], {
                        onClick: handleRejectAll,
                        disabled: isSubmitting,
                        "data-testid": "pia-tool-approval-reject",
                        children: tr('pia.approval.reject', {
                            defaultValue: 'Ablehnen'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
                lineNumber: 195,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/PiaToolApproval/PiaToolApproval.tsx",
        lineNumber: 161,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "IiuuiygS/WsqfRR4JBfyOEAqUnQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
})), "IiuuiygS/WsqfRR4JBfyOEAqUnQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c1 = PiaToolApproval;
PiaToolApproval.displayName = 'PiaToolApproval';
const __TURBOPACK__default__export__ = PiaToolApproval;
var _c, _c1;
__turbopack_context__.k.register(_c, "PiaToolApproval$React.memo");
__turbopack_context__.k.register(_c1, "PiaToolApproval");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.errors.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getErrorMessage",
    ()=>getErrorMessage,
    "piaServerMessage",
    ()=>piaServerMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiErrorText.ts [app-client] (ecmascript)");
;
/**
 * #1626: Die Fehler im Antwort-Stream (`{ type: 'error', message }`) tragen
 * keinen Code, nur einen festen englischen Satz aus app/api/pia/chat/route.ts.
 * Die bekannten Sätze bekommen hier ihren Schlüssel (Modellname als
 * Platzhalter); alles andere läuft über die Übersetzung der API-Meldungen.
 */ const PIA_STREAM_MESSAGES = [
    {
        match: /^Stream interrupted$/,
        key: 'pia.error.streamInterrupted'
    },
    {
        match: /^Response timed out$/,
        key: 'pia.error.responseTimeout'
    },
    {
        match: /^Request timed out\. Please try again\.$/,
        key: 'pia.error.requestTimeout'
    },
    {
        match: /^PIA is having trouble right now\. Please try again\.$/,
        key: 'pia.error.trouble'
    },
    {
        match: /^PIA is very busy right now\. Please try again in a moment\.$/,
        key: 'pia.error.busy'
    },
    {
        match: /^No response stream$/,
        key: 'pia.error.noStream'
    },
    {
        match: /^The selected model "(?<model>.*)" is not available\. Please try a different model\.$/,
        key: 'pia.error.modelNotAvailable'
    },
    {
        match: /^The selected model "(?<model>.*)" could not process the request\. Please try a different model\.$/,
        key: 'pia.error.modelCannotProcess'
    }
];
function piaServerMessage(message, tr) {
    for (const { match, key } of PIA_STREAM_MESSAGES){
        const treffer = match.exec(message);
        if (treffer) {
            const model = treffer.groups?.model;
            // Übersetzung mit Platzhalter; ohne Übersetzung der Satz des Servers
            const text = tr(key, {
                defaultValue: message,
                ...model !== undefined ? {
                    model
                } : {}
            });
            return text;
        }
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateApiMessage"])(tr, message);
}
function getErrorMessage(error, tr) {
    switch(error.code){
        case 'generic':
            return tr('pia.error.generic');
        case 'offline':
            return tr('pia.error.offline');
        case 'rate_limit_daily':
            return tr('pia.error.rateLimit.daily');
        case 'rate_limit_minute':
            // Ohne Wartezeit (Azure 429) gibt es keinen Wert für {{seconds}}
            return error.params?.seconds != null ? tr('pia.error.rateLimit.minute', error.params) : piaServerMessage(error.message, tr);
        case 'rate_limit_concurrent':
            // Server-Text ist fest (Englisch) — eigener Schlüssel, Server-Text als Vorgabe
            return tr('pia.error.concurrent', {
                defaultValue: error.message
            });
        case 'model_not_found':
        case 'stream_interrupted':
            // Fester Satz des Servers, ggf. mit Modellname
            return piaServerMessage(error.message, tr);
        case 'no_response':
            return tr('pia.error.noResponse', {
                defaultValue: error.message
            });
        default:
            return tr('pia.error.generic');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.hooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasPiaAccess",
    ()=>hasPiaAccess,
    "useAutoScroll",
    ()=>useAutoScroll,
    "useEscapeClose",
    ()=>useEscapeClose
]);
/**
 * PiaChat Custom Hooks
 *
 * Extracted hooks for the PIA chat widget to improve testability and reusability.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/piaConstants.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
function useAutoScroll(ref, dependencies) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useAutoScroll.useEffect": ()=>{
            if (ref.current) {
                ref.current.scrollTo({
                    top: ref.current.scrollHeight,
                    behavior: 'smooth'
                });
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useAutoScroll.useEffect"], dependencies);
}
_s(useAutoScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
function useEscapeClose(isOpen, onClose) {
    _s1();
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEscapeClose.useCallback[handleKeyDown]": (event)=>{
            if (event.key === 'Escape') {
                onClose();
            }
        }
    }["useEscapeClose.useCallback[handleKeyDown]"], [
        onClose
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEscapeClose.useEffect": ()=>{
            if (!isOpen) return;
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "useEscapeClose.useEffect": ()=>document.removeEventListener('keydown', handleKeyDown)
            })["useEscapeClose.useEffect"];
        }
    }["useEscapeClose.useEffect"], [
        isOpen,
        handleKeyDown
    ]);
}
_s1(useEscapeClose, "0JgXOssVubdPSer79HeWAJtecaU=");
function hasPiaAccess(userRole) {
    if (!userRole) return false;
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIA_ALLOWED_ROLES"].has(userRole);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AiDisclosure",
    ()=>AiDisclosure,
    "ChatPanel",
    ()=>ChatPanel,
    "EmptyAvatar",
    ()=>EmptyAvatar,
    "EmptyState",
    ()=>EmptyState,
    "EmptyText",
    ()=>EmptyText,
    "ErrorBanner",
    ()=>ErrorBanner,
    "Header",
    ()=>Header,
    "HeaderActions",
    ()=>HeaderActions,
    "HeaderAvatar",
    ()=>HeaderAvatar,
    "HeaderButton",
    ()=>HeaderButton,
    "HeaderInfo",
    ()=>HeaderInfo,
    "HeaderSubtitle",
    ()=>HeaderSubtitle,
    "HeaderTitle",
    ()=>HeaderTitle,
    "MessageList",
    ()=>MessageList,
    "ModelDropdown",
    ()=>ModelDropdown,
    "ModelOption",
    ()=>ModelOption,
    "ModelOptionDefault",
    ()=>ModelOptionDefault,
    "ModelOptionDescription",
    ()=>ModelOptionDescription,
    "ModelOptionLabel",
    ()=>ModelOptionLabel,
    "ModelSelectorButton",
    ()=>ModelSelectorButton,
    "ModelSelectorWrapper",
    ()=>ModelSelectorWrapper,
    "RateLimitInfo",
    ()=>RateLimitInfo,
    "RecordingDot",
    ()=>RecordingDot,
    "VoiceBar",
    ()=>VoiceBar,
    "VoiceHint",
    ()=>VoiceHint,
    "VoiceMicButton",
    ()=>VoiceMicButton,
    "VoiceStopButton",
    ()=>VoiceStopButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
;
const slideUp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;
const ChatPanel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__ChatPanel",
    componentId: "sc-c8451361-0"
})`
  position: fixed;
  bottom: 96px;
  right: 24px;
  z-index: 998;
  width: 45vw;
  height: 70vh;
  background: ${({ theme })=>theme.palette.default.white};
  border-radius: ${({ theme })=>theme.borderRadius.box};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: ${({ $isOpen })=>$isOpen ? 1 : 0};
  visibility: ${({ $isOpen })=>$isOpen ? 'visible' : 'hidden'};
  transform: ${({ $isOpen })=>$isOpen ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)'};
  transition:
    opacity 0.2s ease,
    visibility 0.2s ease,
    transform 0.2s ease;
  ${({ $isOpen })=>$isOpen && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      animation: ${slideUp} 0.25s ease-out;
    `}

  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    bottom: 0;
    right: 0;
    border-radius: 0;
  }
`;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__Header",
    componentId: "sc-c8451361-1"
})`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: ${({ theme })=>theme.palette.default.primary};
  color: ${({ theme })=>theme.palette.default.white};
  flex-shrink: 0;
`;
const HeaderAvatar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img.withConfig({
    displayName: "PiaChat.styles__HeaderAvatar",
    componentId: "sc-c8451361-2"
})`
  width: 36px;
  height: 36px;
  /* #1781: Personenbild als Wabe wie überall */
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["portraitHexagonMask"]}
  object-fit: cover;
`;
const HeaderInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__HeaderInfo",
    componentId: "sc-c8451361-3"
})`
  flex: 1;
  min-width: 0;
`;
const HeaderTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "PiaChat.styles__HeaderTitle",
    componentId: "sc-c8451361-4"
})`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  font-family: ${({ theme })=>theme.font.primaryFamily};
  color: ${({ theme })=>theme.palette.default.white};
`;
const HeaderSubtitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaChat.styles__HeaderSubtitle",
    componentId: "sc-c8451361-5"
})`
  font-size: 12px;
  opacity: 0.8;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
`;
const HeaderActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__HeaderActions",
    componentId: "sc-c8451361-6"
})`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const HeaderButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PiaChat.styles__HeaderButton",
    componentId: "sc-c8451361-7"
})`
  width: 32px;
  height: 32px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme })=>theme.palette.default.white};
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
const MessageList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__MessageList",
    componentId: "sc-c8451361-8"
})`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme })=>theme.palette.default.grey};
    border-radius: 2px;
  }
`;
const ErrorBanner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__ErrorBanner",
    componentId: "sc-c8451361-9"
})`
  padding: 8px 16px;
  background: ${({ theme })=>theme.palette.default.error};
  color: ${({ theme })=>theme.palette.default.white};
  font-size: 13px;
  text-align: center;
  flex-shrink: 0;
`;
const RateLimitInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__RateLimitInfo",
    componentId: "sc-c8451361-10"
})`
  padding: 4px 16px;
  background: ${({ theme })=>theme.palette.default.greyLight};
  color: ${({ theme })=>theme.palette.default.greyDark};
  font-size: 11px;
  text-align: center;
  flex-shrink: 0;
`;
const AiDisclosure = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__AiDisclosure",
    componentId: "sc-c8451361-11"
})`
  padding: ${({ theme })=>theme.padding.extrasmall} ${({ theme })=>theme.padding.default};
  background: ${({ theme })=>theme.palette.default.greyLight};
  color: ${({ theme })=>theme.palette.default.greyDark};
  flex-shrink: 0;
`;
const EmptyState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__EmptyState",
    componentId: "sc-c8451361-12"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 32px;
  text-align: center;
`;
const EmptyAvatar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].img.withConfig({
    displayName: "PiaChat.styles__EmptyAvatar",
    componentId: "sc-c8451361-13"
})`
  width: 80px;
  height: 80px;
  /* #1781: Personenbild als Wabe wie überall */
  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["portraitHexagonMask"]}
  object-fit: cover;
  margin-bottom: 16px;
  opacity: 0.9;
`;
const EmptyText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "PiaChat.styles__EmptyText",
    componentId: "sc-c8451361-14"
})`
  font-size: 14px;
  color: ${({ theme })=>theme.palette.default.greyDark};
  line-height: 1.5;
  margin: 0;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
`;
const ModelSelectorWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__ModelSelectorWrapper",
    componentId: "sc-c8451361-15"
})`
  position: relative;
  flex-shrink: 0;
`;
const ModelSelectorButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PiaChat.styles__ModelSelectorButton",
    componentId: "sc-c8451361-16"
})`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 8px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  cursor: pointer;
  color: ${({ theme })=>theme.palette.default.white};
  font-size: 11px;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  white-space: nowrap;
  transition: background-color 0.15s ease;
  line-height: 1.3;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 10px;
    height: 10px;
    opacity: 0.7;
  }
`;
const ModelDropdown = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__ModelDropdown",
    componentId: "sc-c8451361-17"
})`
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].overlay};
  min-width: 200px;
  background: ${({ theme })=>theme.palette.default.white};
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  overflow: hidden;
`;
const ModelOption = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PiaChat.styles__ModelOption",
    componentId: "sc-c8451361-18"
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: ${({ $active })=>$active ? 'rgba(0, 0, 0, 0.05)' : 'transparent'};
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease;
  font-family: ${({ theme })=>theme.font.secondaryFamily};

  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme })=>theme.palette.default.greyLight};
  }
`;
const ModelOptionLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaChat.styles__ModelOptionLabel",
    componentId: "sc-c8451361-19"
})`
  font-size: 13px;
  font-weight: ${({ $active })=>$active ? 600 : 400};
  color: ${({ theme })=>theme.palette.default.black};
`;
const ModelOptionDefault = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaChat.styles__ModelOptionDefault",
    componentId: "sc-c8451361-20"
})`
  font-weight: 400;
  color: ${({ theme })=>theme.palette.default.greyDark};
`;
const ModelOptionDescription = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaChat.styles__ModelOptionDescription",
    componentId: "sc-c8451361-21"
})`
  font-size: 11px;
  color: ${({ theme })=>theme.palette.default.greyDark};
  margin-top: 1px;
`;
const VoiceBar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PiaChat.styles__VoiceBar",
    componentId: "sc-c8451361-22"
})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-top: 1px solid ${({ theme })=>theme.palette.default.greyLight};
  background: ${({ theme })=>theme.palette.default.greyLight};
`;
const VoiceMicButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PiaChat.styles__VoiceMicButton",
    componentId: "sc-c8451361-23"
})`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: none;
  border-radius: 18px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
  touch-action: none;
  color: ${({ theme })=>theme.palette.default.white};
  background: ${({ theme, $recording })=>$recording ? theme.palette.default.error : theme.palette.default.primary};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
const VoiceStopButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "PiaChat.styles__VoiceStopButton",
    componentId: "sc-c8451361-24"
})`
  padding: 8px 12px;
  border-radius: 18px;
  border: 1px solid ${({ theme })=>theme.palette.default.grey};
  background: ${({ theme })=>theme.palette.default.white};
  color: ${({ theme })=>theme.palette.default.black};
  font-size: 13px;
  cursor: pointer;
`;
const VoiceHint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaChat.styles__VoiceHint",
    componentId: "sc-c8451361-25"
})`
  margin-left: auto;
  font-size: 11px;
  color: ${({ theme, $error })=>$error ? theme.palette.default.error : theme.palette.default.greyDark};
`;
const recPulse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
`;
const RecordingDot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PiaChat.styles__RecordingDot",
    componentId: "sc-c8451361-26"
})`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ theme })=>theme.palette.default.white};
  animation: ${recPulse} 1s ease-in-out infinite;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PiaChat",
    ()=>PiaChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PiaChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/PiaChatContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToggleButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaToggleButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToggleButton$2f$PiaToggleButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaToggleButton/PiaToggleButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PiaChatMessage/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$PiaChatMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PiaChatMessage/PiaChatMessage.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatInput$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PiaChatInput/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatInput$2f$PiaChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/PiaChatInput/PiaChatInput.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDelete$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDelete/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconClose/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMicrophone$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMicrophone/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVolume$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconVolume/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePiaVoice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/usePiaVoice.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pia$2f$speechSegments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/pia/speechSegments.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaSopButtons$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaSopButtons/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaSopButtons$2f$PiaSopButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/PiaSopButtons/PiaSopButtons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AiLabel$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/AiLabel/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.hooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$plastship$2f$User$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/types/plastship/User.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.errors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
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
// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
const PiaChat = ()=>{
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    // Modellbeschreibungen aus `lib/pia/models.ts` (Namen bleiben Eigennamen)
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    const { isOpen, messages, isStreaming, error, rateLimitInfo, availableModels, voiceEnabled: serverVoiceEnabled, selectedModel, defaultModel, defaultModelLabel, modelsLoading, toggleChat, closeChat, sendMessage, clearHistory, setSelectedModel } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PiaChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePiaChat"])();
    // Resolve avatar from user preferences
    const userAvatar = session?.user?.piaAvatar;
    const avatarPath = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$plastship$2f$User$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PIA_AVATARS"].find((a)=>a.value === userAvatar)?.image || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$types$2f$plastship$2f$User$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PIA_AVATARS"][0].image;
    const [modelDropdownOpen, setModelDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const modelDropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messageListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Voice: Feature-Flag vom Server, Modus lokal; das Transkript geht als ganz
    // normale Nachricht durch sendMessage.
    const [voiceMode, setVoiceMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const voice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePiaVoice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePiaVoice"])(sendMessage);
    // Vorlese-Fortschritt je Nachricht: bis zu welchem Zeichen wurde gesprochen
    const spokenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        id: null,
        consumed: 0,
        done: false
    });
    const lastSpokenIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Inkrementelles Vorlesen (nur im Voice-Modus): jeder abgeschlossene Absatz
    // geht sofort an die TTS-Queue, waehrend der Rest noch streamt.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PiaChat.useEffect": ()=>{
            if (!voiceMode || messages.length === 0) return;
            const last = messages[messages.length - 1];
            if (last.role !== 'assistant') return;
            // Nachricht, die beim Einschalten schon da war, nicht nachtraeglich lesen
            if (lastSpokenIdRef.current === last.id) return;
            if (spokenRef.current.id !== last.id) {
                spokenRef.current = {
                    id: last.id,
                    consumed: 0,
                    done: false
                };
            }
            if (spokenRef.current.done) return;
            // Freigabe-Karte: Details stehen auf der Karte — nur kurz ansagen
            if (last.approval?.status === 'pending') {
                spokenRef.current.done = true;
                voice.speak(tr('pia.voice.approvalAnnounce', {
                    defaultValue: 'Ich habe Aktionen vorgemerkt — bitte bestätige sie auf der Karte.'
                }));
                return;
            }
            const final = !last.isStreaming && !isStreaming;
            const { segments, consumed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pia$2f$speechSegments$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextSpeechSegments"])(last.content, spokenRef.current.consumed, final);
            for (const seg of segments)voice.speak(seg);
            spokenRef.current.consumed = consumed;
            if (final) spokenRef.current.done = true;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["PiaChat.useEffect"], [
        voiceMode,
        isStreaming,
        messages
    ]);
    // Vorlesen endet mit dem Panel — sonst spricht PIA unsichtbar weiter
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PiaChat.useEffect": ()=>{
            if (!isOpen) voice.stopSpeaking();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["PiaChat.useEffect"], [
        isOpen
    ]);
    const toggleVoiceMode = ()=>{
        setVoiceMode((prev)=>{
            if (prev) voice.stopSpeaking();
            else lastSpokenIdRef.current = messages[messages.length - 1]?.id ?? null;
            return !prev;
        });
    };
    // Hydration guard - only render portal on client
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PiaChat.useEffect": ()=>{
            setIsMounted(true);
        }
    }["PiaChat.useEffect"], []);
    // Auto-scroll to bottom when new messages arrive
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAutoScroll"])(messageListRef, [
        messages
    ]);
    // ESC key to close
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEscapeClose"])(isOpen, closeChat);
    // Close model dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PiaChat.useEffect": ()=>{
            if (!modelDropdownOpen) return;
            const handleClickOutside = {
                "PiaChat.useEffect.handleClickOutside": (e)=>{
                    if (modelDropdownRef.current && !modelDropdownRef.current.contains(e.target)) {
                        setModelDropdownOpen(false);
                    }
                }
            }["PiaChat.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "PiaChat.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["PiaChat.useEffect"];
        }
    }["PiaChat.useEffect"], [
        modelDropdownOpen
    ]);
    // Get the display label for the currently selected model
    // #1750: Liegt der Standard außerhalb der Liste, trägt der Knopf sein Label
    const selectedModelLabel = availableModels.find((m)=>m.id === selectedModel)?.label || (selectedModel && selectedModel === defaultModel ? defaultModelLabel : null) || selectedModel || '...';
    const defaultBadge = tr('pia.model.defaultBadge', {
        defaultValue: 'Default'
    });
    // Don't render on server or before client mount
    if (!isMounted) return null;
    // Access control: only render for allowed roles
    const userRole = session?.user?.role;
    const hasAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPiaAccess"])(userRole);
    if (!session?.user || !hasAccess) {
        return null;
    }
    const hasMessages = messages.length > 0;
    const widget = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatPanel"], {
                $isOpen: isOpen,
                "data-testid": "pia-chat-panel",
                role: "dialog",
                "aria-label": tr('pia.title'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                        "data-testid": "pia-chat-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderAvatar"], {
                                src: avatarPath,
                                alt: "PIA",
                                width: 36,
                                height: 36
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderInfo"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderTitle"], {
                                        children: tr('pia.title')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                        lineNumber: 222,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderSubtitle"], {
                                        children: tr('pia.subtitle')
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                        lineNumber: 223,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AiLabel$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        kind: "assistant",
                                        compact: true,
                                        dataTestId: "pia-ai-label"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                lineNumber: 221,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            !modelsLoading && availableModels.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelSelectorWrapper"], {
                                ref: modelDropdownRef,
                                "data-testid": "pia-model-selector",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelSelectorButton"], {
                                        onClick: ()=>setModelDropdownOpen((prev)=>!prev),
                                        title: tr('pia.model.select'),
                                        "data-testid": "pia-model-selector-button",
                                        "data-model": selectedModel ?? '',
                                        children: [
                                            selectedModelLabel,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 10 6",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M1 1L5 5L9 1",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                                lineNumber: 236,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    modelDropdownOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelDropdown"], {
                                        "data-testid": "pia-model-dropdown",
                                        children: availableModels.map((model)=>{
                                            const active = model.id === selectedModel;
                                            const isDefault = model.id === defaultModel;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelOption"], {
                                                $active: active,
                                                onClick: ()=>{
                                                    setSelectedModel(model.id);
                                                    setModelDropdownOpen(false);
                                                },
                                                "data-testid": `pia-model-option-${model.id}`,
                                                "data-active": active ? 'true' : 'false',
                                                "data-default": isDefault ? 'true' : 'false',
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelOptionLabel"], {
                                                        $active: active,
                                                        children: [
                                                            model.label,
                                                            isDefault ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelOptionDefault"], {
                                                                "data-testid": `pia-model-default-badge-${model.id}`,
                                                                children: [
                                                                    ' · ',
                                                                    defaultBadge
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                                                lineNumber: 266,
                                                                columnNumber: 29
                                                            }, ("TURBOPACK compile-time value", void 0)) : null
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModelOptionDescription"], {
                                                        children: entityText.text(model.description)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                                        lineNumber: 272,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, model.id, true, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                                lineNumber: 252,
                                                columnNumber: 23
                                            }, ("TURBOPACK compile-time value", void 0));
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                        lineNumber: 247,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderActions"], {
                                children: [
                                    serverVoiceEnabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderButton"], {
                                        onClick: toggleVoiceMode,
                                        "aria-label": tr('pia.voice.toggle', {
                                            defaultValue: 'Voice-Modus'
                                        }),
                                        "aria-pressed": voiceMode,
                                        "data-testid": "pia-voice-toggle",
                                        title: voiceMode ? tr('pia.voice.off', {
                                            defaultValue: 'Voice-Modus aus'
                                        }) : tr('pia.voice.on', {
                                            defaultValue: 'Voice-Modus an (Sprechen & Vorlesen)'
                                        }),
                                        style: voiceMode ? {
                                            opacity: 1
                                        } : {
                                            opacity: 0.55
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconVolume$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                            lineNumber: 294,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    hasMessages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderButton"], {
                                        onClick: clearHistory,
                                        "aria-label": tr('pia.actions.clearHistory'),
                                        "data-testid": "pia-chat-clear-button",
                                        title: tr('pia.actions.clearHistory'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDelete$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderButton"], {
                                        onClick: closeChat,
                                        "aria-label": tr('pia.actions.close'),
                                        "data-testid": "pia-chat-close-button",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            color: "#ffffff"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AiDisclosure"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AiLabel$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            kind: "assistant",
                            dataTestId: "pia-ai-disclosure"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                            lineNumber: 319,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorBanner"], {
                        "data-testid": "pia-chat-error",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$errors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getErrorMessage"])(error, tr)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                        lineNumber: 324,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    rateLimitInfo && rateLimitInfo.remainingDaily <= 20 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RateLimitInfo"], {
                        "data-testid": "pia-chat-rate-limit",
                        children: tr('pia.rateLimit.remaining', {
                            count: rateLimitInfo.remainingDaily
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                        lineNumber: 329,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageList"], {
                        ref: messageListRef,
                        "data-testid": "pia-chat-message-list",
                        children: hasMessages ? messages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatMessage$2f$PiaChatMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiaChatMessage"], {
                                message: message,
                                avatarSrc: avatarPath
                            }, message.id, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                lineNumber: 338,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyAvatar"], {
                                    src: avatarPath,
                                    alt: "PIA",
                                    width: 80,
                                    height: 80
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                    lineNumber: 342,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyText"], {
                                    children: tr('pia.greeting')
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                    lineNumber: 343,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaSopButtons$2f$PiaSopButtons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiaSopButtons"], {
                                    onSend: sendMessage
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                    lineNumber: 344,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    serverVoiceEnabled && voiceMode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceBar"], {
                        "data-testid": "pia-voice-bar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceMicButton"], {
                                type: "button",
                                $recording: voice.recording,
                                disabled: isStreaming || voice.transcribing,
                                onClick: ()=>voice.recording ? void voice.stopRecording() : void voice.startRecording(),
                                "data-testid": "pia-voice-mic",
                                title: voice.recording ? tr('pia.voice.stopRec', {
                                    defaultValue: 'Aufnahme beenden und senden'
                                }) : tr('pia.voice.startRec', {
                                    defaultValue: 'Aufnahme starten'
                                }),
                                children: [
                                    voice.recording ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecordingDot"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                        lineNumber: 366,
                                        columnNumber: 34
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMicrophone$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                        lineNumber: 366,
                                        columnNumber: 53
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    voice.recording ? tr('pia.voice.recording', {
                                        defaultValue: 'Aufnahme läuft — klicken zum Senden'
                                    }) : voice.transcribing ? tr('pia.voice.transcribing', {
                                        defaultValue: 'Erkenne …'
                                    }) : tr('pia.voice.speak', {
                                        defaultValue: 'Sprechen'
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            voice.speaking && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceStopButton"], {
                                type: "button",
                                onClick: voice.stopSpeaking,
                                "data-testid": "pia-voice-stop",
                                title: tr('pia.voice.stop', {
                                    defaultValue: 'Vorlesen stoppen'
                                }),
                                children: "⏹"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                lineNumber: 374,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$AiLabel$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                kind: "voice",
                                compact: true,
                                dataTestId: "pia-voice-ai-label"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VoiceHint"], {
                                $error: Boolean(voice.error),
                                "data-testid": "pia-voice-hint",
                                children: voice.error ?? tr('pia.voice.hint', {
                                    defaultValue: 'Antworten werden vorgelesen'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                                lineNumber: 385,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                        lineNumber: 351,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$PiaChatInput$2f$PiaChatInput$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiaChatInput"], {
                        onSend: sendMessage,
                        disabled: isStreaming
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                        lineNumber: 392,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$PiaToggleButton$2f$PiaToggleButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiaToggleButton"], {
                isOpen: isOpen,
                onClick: toggleChat,
                avatarSrc: avatarPath
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
                lineNumber: 396,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(widget, document.body);
};
_s(PiaChat, "pjQB1sx8ajm2mI43CmqRKI1fpm0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PiaChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePiaChat"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePiaVoice$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePiaVoice"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAutoScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$hooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEscapeClose"]
    ];
});
_c = PiaChat;
;
var _c;
__turbopack_context__.k.register(_c, "PiaChat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/PiaChat/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PiaChat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiaChat"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/PiaChat/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx [app-client] (ecmascript)");
}),
"[project]/apps/web/src/app/components/Organism/PiaChat/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$PiaChat$2f$PiaChat$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/PiaChat/PiaChat.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/entityFormRegistry.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTITY_CREATE_VIA",
    ()=>ENTITY_CREATE_VIA,
    "ENTITY_DISPLAY_NAMES",
    ()=>ENTITY_DISPLAY_NAMES,
    "PARENT_FIELD_MAP",
    ()=>PARENT_FIELD_MAP,
    "allowsGenericCreate",
    ()=>allowsGenericCreate,
    "getCreateVia",
    ()=>getCreateVia
]);
'use client';
const PARENT_FIELD_MAP = {
    Contact: {
        Account: 'AccountId'
    },
    Opportunity: {
        Account: 'AccountId',
        Contact: 'ContactId'
    },
    Case: {
        Account: 'AccountId',
        Contact: 'ContactId'
    },
    Task: {
        Account: 'WhatId',
        Contact: 'WhoId',
        Opportunity: 'WhatId',
        Case: 'WhatId',
        // #826/#991: Aufgabe aus dem Kontext der Kern-Objekte (Bezug = WhatId)
        Order: 'WhatId',
        Project: 'WhatId',
        Invoice: 'WhatId',
        MaterialProposal: 'WhatId',
        Requirement: 'WhatId',
        Product: 'WhatId',
        SampleSending: 'WhatId',
        Contract: 'WhatId'
    },
    Order: {
        Account: 'AccountId',
        Opportunity: 'OpportunityId',
        // #1805: „Neu" in der Related List „Aufträge" am Vertrag belegt ihn vor
        Contract: 'ContractId'
    },
    OrderItem: {
        Order: 'OrderId'
    },
    Project: {
        // Projekt__c hat KEIN Account__c — die Account-Verknüpfung läuft über
        // Hauptkunde/Hauptlieferant/Lohndienstleister. Default beim Create aus
        // Account-Kontext: Hauptkunde (#359; der alte Wert 'Account__c' warf
        // INVALID_FIELD beim Projekt-Anlegen im RIGK-Modul).
        Account: 'Hauptkunde__c'
    },
    Invoice: {
        // #469: waren 'Abnehmer__c' und 'Order__c' — beide Felder gibt es auf
        // Abrechnung__c nicht (per describe gegen die Org geprueft). Der
        // Create-Prefill aus einem Account- oder Auftrags-Kontext schrieb damit
        // ins Leere.
        Account: 'Account__c',
        Order: 'Auftrag__c'
    },
    SampleSending: {
        // #469: hier standen 'Account__c' und 'Contact__c' — beide Felder gibt es
        // auf Sample_Sending__c nicht. Das Objekt hat MEHRERE Account-Lookups mit
        // unterschiedlicher Bedeutung (Deliver_to__c, Load_from__c, Carrier__c);
        // welcher der fachliche Primaer-Elternteil ist, kann der Code nicht
        // entscheiden. Entscheidung ML (2026-07-27): der Kunde ist der EMPFAENGER,
        // also die Lieferadresse.
        Account: 'Deliver_to__c',
        // Passend dazu der Kontakt an der Anlieferung — nicht Carrier_Contact__c,
        // das ist der Spediteur.
        Contact: 'Kontakt_Anlieferung__c'
    },
    SampleFeedback: {
        SampleSending: 'Sample_Sending__c'
    },
    MaterialAnalysis: {
        // #469: 'Account__c' existiert nicht. Der einzige Account-Lookup an
        // Materialanalyse__c ist Dienstleister__c.
        Account: 'Dienstleister__c'
    },
    MaterialProposal: {
        // #469: 'Abnehmer__c' existiert nicht; der Kunde haengt an Account__c
        // (Supplier__c waere der Lieferant).
        Account: 'Account__c',
        // #1799: aus dem Kundenvorgang heraus angelegt → Vorgang vorbelegt
        Case: 'Kundenvorgang__c'
    },
    MonitoredMaterial: {
        // #469: 'Lieferant__c' existiert nicht. Der einzige Account-Lookup an
        // Monitored_Material__c ist Kunde__c.
        Account: 'Kunde__c'
    },
    Requirement: {
        Account: 'Account__c'
    },
    SupplierAudit: {
        Account: 'Account__c'
    },
    CompanyCertificate: {
        Account: 'Account__c'
    },
    ProductionSite: {
        Account: 'Account__c'
    },
    Onboarding: {
        Account: 'Account__c',
        // #1799: aus dem Kundenvorgang heraus angelegt → Vorgang vorbelegt
        Case: 'Kundenvorgang__c'
    },
    AktuellerPreisUndVerfugbarkeit: {
        MonitoredMaterial: 'Produkt__c',
        MaterialProposal: 'Material_Proposal__c',
        Requirement: 'Bedarfe__c',
        Opportunity: 'Opportunity__c',
        Order: 'Auftrag__c'
    },
    // Product (Product2) and Lohn (Lohn__c) are created against an Account__c
    // lookup in the RIGK Create/Edit flow on /rigk/account/{id} (issue #224).
    // Requirement (Bedarfe__c) already has its Account mapping at line 65.
    Product: {
        Account: 'Account__c'
    },
    Lohn: {
        Account: 'Account__c'
    },
    // Reklamation (Reklamation__c) is created from the Reklamationen__r related
    // list on an Account (Account__c) or a Case (Auslösender Kundenvorgang).
    Reklamation: {
        Account: 'Account__c',
        Contact: 'Kontakt__c',
        Case: 'Ausl_sender_Kundenvorgang__c'
    },
    // #384: Prozessfeedback__c trägt Lookups auf praktisch alle Kern-Objekte —
    // die QuickWheel-Aktion befüllt den passenden Lookup aus dem Seitenkontext.
    Prozessfeedback: {
        Account: 'Account__c',
        Contact: 'Kontakt__c',
        Case: 'Kundenvorgang__c',
        Order: 'Auftrag__c',
        Invoice: 'Abrechnung__c',
        Project: 'Projekt__c',
        Requirement: 'Bedarfe__c',
        MaterialProposal: 'Material_Proposal__c',
        MonitoredMaterial: 'Monitored_Material__c',
        MaterialAnalysis: 'Materialanalyse__c',
        Product: 'Produkt__c',
        SampleSending: 'Sample_Sending__c',
        ContactHandover: 'Kontakt_bergabe__c',
        Onboarding: 'Onboarding__c',
        Reklamation: 'Reklamation__c',
        SupplierAudit: 'Audit__c'
    }
};
const ENTITY_DISPLAY_NAMES = {
    Account: 'Account',
    Contact: 'Kontakt',
    Opportunity: 'Opportunity',
    Case: 'Kundenvorgang',
    Task: 'Aufgabe',
    Order: 'Auftrag',
    OrderItem: 'Auftragsposition',
    // #449
    Contract: 'Vertrag',
    // #325
    CostCenter: 'Kostenstelle',
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
    // #333: Zertifikats-Katalog
    Certificate: 'Zertifikat (Katalog)',
    AuditProperty: 'Prüfparameter',
    ProductionSite: 'Produktionsstätte',
    Product: 'Produkt',
    Lohn: 'Lohndienstleistung',
    AktuellerPreisUndVerfugbarkeit: 'Aktueller Preis',
    Reklamation: 'Reklamation',
    Prozessfeedback: 'Prozessfeedback',
    Notification: 'Benachrichtigung',
    User: 'Benutzer',
    TravelExpense: 'Reisekostenabrechnung'
};
const ENTITY_CREATE_VIA = {
    User: 'dialog'
};
function getCreateVia(entityType) {
    if (!entityType) return 'generic';
    return ENTITY_CREATE_VIA[entityType] ?? 'generic';
}
function allowsGenericCreate(entityType) {
    return getCreateVia(entityType) === 'generic';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Entity Types Enum
 *
 * Centralized enum for all supported entity types in the application.
 * Use this enum instead of string literals for type safety and consistency.
 */ __turbopack_context__.s([
    "EntityType",
    ()=>EntityType
]);
var EntityType = /*#__PURE__*/ function(EntityType) {
    EntityType["Account"] = "Account";
    EntityType["Contact"] = "Contact";
    EntityType["Opportunity"] = "Opportunity";
    EntityType["Case"] = "Case";
    EntityType["Task"] = "Task";
    EntityType["Order"] = "Order";
    EntityType["OrderItem"] = "OrderItem";
    EntityType["Project"] = "Project";
    EntityType["Invoice"] = "Invoice";
    EntityType["MaterialAnalysis"] = "MaterialAnalysis";
    EntityType["MaterialProposal"] = "MaterialProposal";
    EntityType["MonitoredMaterial"] = "MonitoredMaterial";
    EntityType["Requirement"] = "Requirement";
    EntityType["SampleFeedback"] = "SampleFeedback";
    EntityType["SampleSending"] = "SampleSending";
    EntityType["SupplierAudit"] = "SupplierAudit";
    EntityType["Onboarding"] = "Onboarding";
    EntityType["ContactHandover"] = "ContactHandover";
    EntityType["CompanyCertificate"] = "CompanyCertificate";
    /** #449: Verträge (Standard-Objekt Contract) — Auftrags-Management am Vertrag */ EntityType["Contract"] = "Contract";
    /** #325: Kostenstelle (Kostenstelle_plastship__c) — Lookup-Ziel von Auftrag/Abrechnung */ EntityType["CostCenter"] = "CostCenter";
    /** #333: Zertifikats-Katalog (Zertifikate__c) — bewusst NICHT CompanyCertificate */ EntityType["Certificate"] = "Certificate";
    /** #331: Prüfparameter (AuditProperty__c) an der Materialanalyse */ EntityType["AuditProperty"] = "AuditProperty";
    EntityType["ProductionSite"] = "ProductionSite";
    EntityType["Product"] = "Product";
    EntityType["Lohn"] = "Lohn";
    EntityType["AktuellerPreisUndVerfugbarkeit"] = "AktuellerPreisUndVerfugbarkeit";
    EntityType["Reklamation"] = "Reklamation";
    /** #384: Prozessfeedback/CAPA (Prozessfeedback__c) — überall anlegbar */ EntityType["Prozessfeedback"] = "Prozessfeedback";
    // Postgres entities (non-Salesforce)
    EntityType["Notification"] = "Notification";
    EntityType["User"] = "User";
    EntityType["TravelExpense"] = "TravelExpense";
    return EntityType;
}({});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/ModalContext.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModalProvider",
    ()=>ModalProvider,
    "useModal",
    ()=>useModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityFormRegistry.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ModalContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ModalProvider({ children }) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isOpen: false,
        config: null
    });
    const openCreateModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ModalProvider.useCallback[openCreateModal]": (config)=>{
            // #2071: Objekte mit eigenem Anlege-Weg (createVia 'dialog'/'none') nie ins
            // generische Formular — deren Routen-Vertrag kennt es nicht. Zentral hier,
            // damit auch künftige Einstiege abgefangen werden.
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsGenericCreate"])(config.entityType)) {
                console.warn(`[ModalContext] generic create refused for ${config.entityType} (createVia != generic)`);
                return;
            }
            setState({
                isOpen: true,
                config: {
                    ...config,
                    mode: 'create'
                }
            });
        }
    }["ModalProvider.useCallback[openCreateModal]"], []);
    const openEditModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ModalProvider.useCallback[openEditModal]": (config)=>{
            setState({
                isOpen: true,
                config: {
                    ...config,
                    mode: 'edit'
                }
            });
        }
    }["ModalProvider.useCallback[openEditModal]"], []);
    const closeModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ModalProvider.useCallback[closeModal]": ()=>{
            setState({
                "ModalProvider.useCallback[closeModal]": (prev)=>({
                        ...prev,
                        isOpen: false
                    })
            }["ModalProvider.useCallback[closeModal]"]);
            // Delay clearing config to allow for close animation
            setTimeout({
                "ModalProvider.useCallback[closeModal]": ()=>{
                    setState({
                        isOpen: false,
                        config: null
                    });
                }
            }["ModalProvider.useCallback[closeModal]"], 200);
        }
    }["ModalProvider.useCallback[closeModal]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalContext.Provider, {
        value: {
            isOpen: state.isOpen,
            config: state.config,
            openCreateModal,
            openEditModal,
            closeModal
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/ModalContext.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(ModalProvider, "OQcNrBfknORYW8TlJOmmYkTiLic=");
_c = ModalProvider;
function useModal() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
_s1(useModal, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ModalProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/PageContextProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageContextProvider",
    ()=>PageContextProvider,
    "usePageContext",
    ()=>usePageContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUsagePageview.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------
const PageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function PageContextProvider({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // #1045: Client-Uebergaenge als Seitenaufruf melden (Erstaufruf: Middleware)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUsagePageview"])();
    const [entityIdentity, setEntityIdentity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const setPageIdentity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PageContextProvider.useCallback[setPageIdentity]": (ctx)=>{
            setEntityIdentity({
                "PageContextProvider.useCallback[setPageIdentity]": (prev)=>{
                    if (prev.entityType === ctx.entityType && prev.entityId === ctx.entityId) {
                        return prev // No change, avoid re-render
                        ;
                    }
                    return {
                        entityType: ctx.entityType,
                        entityId: ctx.entityId
                    };
                }
            }["PageContextProvider.useCallback[setPageIdentity]"]);
        }
    }["PageContextProvider.useCallback[setPageIdentity]"], []);
    const clearPageIdentity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PageContextProvider.useCallback[clearPageIdentity]": ()=>{
            setEntityIdentity({});
        }
    }["PageContextProvider.useCallback[clearPageIdentity]"], []);
    const pageIdentity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PageContextProvider.useMemo[pageIdentity]": ()=>({
                ...entityIdentity,
                pathname: pathname || '/'
            })
    }["PageContextProvider.useMemo[pageIdentity]"], [
        entityIdentity,
        pathname
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PageContextProvider.useMemo[value]": ()=>({
                pageIdentity,
                setPageIdentity,
                clearPageIdentity
            })
    }["PageContextProvider.useMemo[value]"], [
        pageIdentity,
        setPageIdentity,
        clearPageIdentity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PageContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/PageContextProvider.tsx",
        lineNumber: 82,
        columnNumber: 10
    }, this);
}
_s(PageContextProvider, "ol6/nuFwYxDTyqYvniutpPaw6RE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUsagePageview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUsagePageview"]
    ];
});
_c = PageContextProvider;
function usePageContext() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PageContext);
    if (context === undefined) {
        throw new Error('usePageContext must be used within a PageContextProvider');
    }
    return context;
}
_s1(usePageContext, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "PageContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/PiaChatContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PiaChatProvider",
    ()=>PiaChatProvider,
    "usePiaChat",
    ()=>usePiaChat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/piaConstants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PageContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/PageContextProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePiaModels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/usePiaModels.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/currentLanguageTr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiErrorText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaSummaryTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/piaSummaryTexts.ts [app-client] (ecmascript)");
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
// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------
const PiaChatContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function generateId() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
        return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
}
function parseRateLimitHeaders(headers) {
    const remainingMinute = headers.get('X-RateLimit-Remaining-Minute');
    const remainingDaily = headers.get('X-RateLimit-Remaining-Daily');
    if (remainingMinute === null && remainingDaily === null) return null;
    return {
        remainingMinute: parseInt(remainingMinute || '0', 10),
        remainingDaily: parseInt(remainingDaily || '0', 10),
        resetMinute: headers.get('X-RateLimit-Reset-Minute') ? parseInt(headers.get('X-RateLimit-Reset-Minute'), 10) * 1000 : null,
        resetDaily: headers.get('X-RateLimit-Reset-Daily') ? parseInt(headers.get('X-RateLimit-Reset-Daily'), 10) * 1000 : null
    };
}
/**
 * Map an API error response to a structured PiaError.
 */ function mapApiError(errorBody) {
    if (!errorBody) {
        return {
            code: 'generic',
            message: 'Something went wrong. Please try again.'
        };
    }
    switch(errorBody.error){
        case 'rate_limit_exceeded':
            if (errorBody.type === 'daily') {
                return {
                    code: 'rate_limit_daily',
                    message: errorBody.message || 'Daily limit reached.'
                };
            }
            if (errorBody.type === 'concurrent') {
                return {
                    code: 'rate_limit_concurrent',
                    message: errorBody.message || 'Please wait for the current response to finish.'
                };
            }
            return {
                code: 'rate_limit_minute',
                message: errorBody.message || 'Rate limit exceeded.',
                params: {
                    seconds: errorBody.retryAfter || 60
                }
            };
        case 'upstream_rate_limit':
            return {
                code: 'rate_limit_minute',
                message: errorBody.message || 'PIA is very busy right now.'
            };
        case 'model_not_found':
            return {
                code: 'model_not_found',
                message: errorBody.message || 'The selected model is not available.'
            };
        case 'disabled':
            return {
                code: 'offline',
                message: errorBody.message || 'PIA is currently disabled.'
            };
        case 'timeout':
            return {
                code: 'generic',
                message: errorBody.message || 'Request timed out.'
            };
        default:
            return {
                code: 'generic',
                message: errorBody.message || 'Something went wrong. Please try again.'
            };
    }
}
// ---------------------------------------------------------------------------
// Page Context Helper
// ---------------------------------------------------------------------------
/**
 * Format the current page context from QuickWheelActions into a compact string
 * for the PIA API. Returns undefined if no meaningful context is available.
 */ function formatPageContext(pageContext) {
    const parts = [];
    if (pageContext.entityType) parts.push(`entityType=${pageContext.entityType}`);
    if (pageContext.entityId) parts.push(`entityId=${pageContext.entityId}`);
    if (pageContext.pathname) parts.push(`pathname=${pageContext.pathname}`);
    return parts.length > 0 ? parts.join(' ') : undefined;
}
function PiaChatProvider({ children }) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const userPiaModel = session?.user?.piaModel;
    const userPiaLanguage = session?.user?.piaLanguage;
    const userPiaTone = session?.user?.piaTone;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isStreaming, setIsStreaming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [rateLimitInfo, setRateLimitInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedModel, setSelectedModel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // #783-Review: Kundenrollen haben kein PIA — ohne Gate lief der Models-Fetch
    // für user/rigk in einen 403 (Konsolen-Noise auf jeder Seite).
    const piaAllowed = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaConstants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PIA_ALLOWED_ROLES"].has(session?.user?.role ?? '');
    const { data: piaModelsData, isLoading: modelsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePiaModels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePiaModels"])({
        enabled: piaAllowed
    });
    const voiceEnabled = piaModelsData?.voiceEnabled === true;
    const defaultModel = piaModelsData?.defaultModel ?? null;
    const defaultModelLabel = piaModelsData?.defaultModelLabel ?? defaultModel;
    const availableModels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PiaChatProvider.useMemo[availableModels]": ()=>piaModelsData?.models ?? []
    }["PiaChatProvider.useMemo[availableModels]"], [
        piaModelsData
    ]);
    const abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const modelSeededRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Page identity from shared PageContextProvider (tracks current entity type/ID/pathname)
    const { pageIdentity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PageContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageContext"])();
    const pageIdentityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pageIdentity);
    pageIdentityRef.current = pageIdentity;
    // Refs for stable closures in sendMessage (avoids messages/isStreaming/selectedModel in deps)
    const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(messages);
    messagesRef.current = messages;
    const isStreamingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(isStreaming);
    isStreamingRef.current = isStreaming;
    const selectedModelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(selectedModel);
    selectedModelRef.current = selectedModel;
    // Seed the selected model exactly once from the cached models list.
    // Ref-guarded so a cache refetch can't overwrite a later user selection.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PiaChatProvider.useEffect": ()=>{
            if (piaModelsData && !modelSeededRef.current) {
                modelSeededRef.current = true;
                // Gespeicherte Wahl nur, wenn der Server sie noch anbietet; sonst der
                // Standard — dasselbe, was die Chat-Route tut (#1750)
                const preferred = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePiaModels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectivePiaModel"])(userPiaModel, piaModelsData);
                if (preferred) setSelectedModel(preferred);
            }
        }
    }["PiaChatProvider.useEffect"], [
        piaModelsData,
        userPiaModel
    ]);
    const toggleChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaChatProvider.useCallback[toggleChat]": ()=>{
            setIsOpen({
                "PiaChatProvider.useCallback[toggleChat]": (prev)=>!prev
            }["PiaChatProvider.useCallback[toggleChat]"]);
            setError(null);
        }
    }["PiaChatProvider.useCallback[toggleChat]"], []);
    const openChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaChatProvider.useCallback[openChat]": ()=>{
            setIsOpen(true);
            setError(null);
        }
    }["PiaChatProvider.useCallback[openChat]"], []);
    const closeChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaChatProvider.useCallback[closeChat]": ()=>{
            setIsOpen(false);
            setError(null);
        }
    }["PiaChatProvider.useCallback[closeChat]"], []);
    const clearHistory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaChatProvider.useCallback[clearHistory]": ()=>{
            // Abort any active stream
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
                abortControllerRef.current = null;
            }
            setMessages([]);
            setIsStreaming(false);
            setError(null);
        }
    }["PiaChatProvider.useCallback[clearHistory]"], []);
    const handleSetSelectedModel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaChatProvider.useCallback[handleSetSelectedModel]": (modelId)=>{
            setSelectedModel(modelId);
        }
    }["PiaChatProvider.useCallback[handleSetSelectedModel]"], []);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaChatProvider.useCallback[sendMessage]": async (content, displayContent)=>{
            // Read from refs for stable closure
            if (isStreamingRef.current) return;
            setError(null);
            // Add user message
            const userMessage = {
                id: generateId(),
                role: 'user',
                content,
                ...displayContent ? {
                    displayContent
                } : {},
                timestamp: new Date()
            };
            // Add placeholder assistant message for streaming
            const assistantMessage = {
                id: generateId(),
                role: 'assistant',
                content: '',
                timestamp: new Date(),
                isStreaming: true
            };
            setMessages({
                "PiaChatProvider.useCallback[sendMessage]": (prev)=>[
                        ...prev,
                        userMessage,
                        assistantMessage
                    ]
            }["PiaChatProvider.useCallback[sendMessage]"]);
            setIsStreaming(true);
            // Build messages array for API from ref (includes all prior messages + the new user message)
            const apiMessages = [
                ...messagesRef.current,
                userMessage
            ].map({
                "PiaChatProvider.useCallback[sendMessage].apiMessages": (msg)=>({
                        role: msg.role,
                        content: msg.content
                    })
            }["PiaChatProvider.useCallback[sendMessage].apiMessages"]);
            const currentModel = selectedModelRef.current;
            const currentPageContext = formatPageContext(pageIdentityRef.current);
            // Create abort controller for this request
            const abortController = new AbortController();
            abortControllerRef.current = abortController;
            try {
                const response = await fetch('/api/pia/chat/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        messages: apiMessages,
                        ...currentModel ? {
                            model: currentModel
                        } : {},
                        ...currentPageContext ? {
                            pageContext: currentPageContext
                        } : {},
                        ...userPiaLanguage ? {
                            piaLanguage: userPiaLanguage
                        } : {},
                        ...userPiaTone ? {
                            piaTone: userPiaTone
                        } : {}
                    }),
                    signal: abortController.signal
                });
                // Parse rate limit headers
                const rateInfo = parseRateLimitHeaders(response.headers);
                if (rateInfo) setRateLimitInfo(rateInfo);
                // Handle pending approval response (HTTP 202)
                if (response.status === 202) {
                    let approvalBody = null;
                    try {
                        approvalBody = await response.json();
                    } catch  {
                    // Parse failed
                    }
                    if (approvalBody?.type === 'pending_approval' && approvalBody.pendingToolCalls?.length) {
                        // Build tool traces from the response
                        const traces = approvalBody.toolTraces || [];
                        // Update the assistant message with approval state and tool traces
                        setMessages({
                            "PiaChatProvider.useCallback[sendMessage]": (prev)=>prev.map({
                                    "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id === assistantMessage.id ? {
                                            ...m,
                                            content: 'Ich mochte die folgenden Aktionen durchfuhren und brauche deine Bestatigung:',
                                            isStreaming: false,
                                            toolTraces: traces.length > 0 ? traces : undefined,
                                            approval: {
                                                pendingToolCalls: approvalBody.pendingToolCalls,
                                                conversationId: approvalBody.conversationId,
                                                status: 'pending'
                                            }
                                        } : m
                                }["PiaChatProvider.useCallback[sendMessage]"])
                        }["PiaChatProvider.useCallback[sendMessage]"]);
                        setIsStreaming(false);
                        return;
                    }
                    // Fallback: treat as error if 202 but no valid approval body
                    setError({
                        code: 'generic',
                        message: 'Unexpected response format.'
                    });
                    setMessages({
                        "PiaChatProvider.useCallback[sendMessage]": (prev)=>prev.filter({
                                "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id !== assistantMessage.id
                            }["PiaChatProvider.useCallback[sendMessage]"])
                    }["PiaChatProvider.useCallback[sendMessage]"]);
                    setIsStreaming(false);
                    return;
                }
                // Handle error responses
                if (!response.ok) {
                    let errorBody = null;
                    try {
                        errorBody = await response.json();
                    } catch  {
                    // Use default error mapping
                    }
                    setError(mapApiError(errorBody));
                    // Remove the placeholder assistant message
                    setMessages({
                        "PiaChatProvider.useCallback[sendMessage]": (prev)=>prev.filter({
                                "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id !== assistantMessage.id
                            }["PiaChatProvider.useCallback[sendMessage]"])
                    }["PiaChatProvider.useCallback[sendMessage]"]);
                    setIsStreaming(false);
                    return;
                }
                // Read SSE stream
                const reader = response.body?.getReader();
                if (!reader) {
                    setError({
                        code: 'no_response',
                        message: 'No response received from PIA.'
                    });
                    setMessages({
                        "PiaChatProvider.useCallback[sendMessage]": (prev)=>prev.filter({
                                "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id !== assistantMessage.id
                            }["PiaChatProvider.useCallback[sendMessage]"])
                    }["PiaChatProvider.useCallback[sendMessage]"]);
                    setIsStreaming(false);
                    return;
                }
                const decoder = new TextDecoder();
                let buffer = '';
                let fullContent = '';
                const toolTraces = [];
                while(true){
                    const { done, value } = await reader.read();
                    if (done) break;
                    buffer += decoder.decode(value, {
                        stream: true
                    });
                    const lines = buffer.split('\n');
                    buffer = lines.pop() || '';
                    for (const line of lines){
                        const trimmed = line.trim();
                        if (!trimmed || !trimmed.startsWith('data: ')) continue;
                        try {
                            const data = JSON.parse(trimmed.slice(6));
                            if (data.type === 'tool_trace') {
                                // Collect tool trace events
                                toolTraces.push({
                                    toolName: data.toolName,
                                    args: data.args || {},
                                    success: data.success,
                                    summary: data.summary,
                                    round: data.round
                                });
                                // Update the assistant message with tool traces immediately
                                setMessages({
                                    "PiaChatProvider.useCallback[sendMessage]": (prev)=>prev.map({
                                            "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id === assistantMessage.id ? {
                                                    ...m,
                                                    toolTraces: [
                                                        ...toolTraces
                                                    ],
                                                    isStreaming: true
                                                } : m
                                        }["PiaChatProvider.useCallback[sendMessage]"])
                                }["PiaChatProvider.useCallback[sendMessage]"]);
                            } else if (data.type === 'chunk' && data.content) {
                                fullContent += data.content;
                                // Update the assistant message with accumulated content
                                setMessages({
                                    "PiaChatProvider.useCallback[sendMessage]": (prev)=>prev.map({
                                            "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id === assistantMessage.id ? {
                                                    ...m,
                                                    content: fullContent,
                                                    isStreaming: true,
                                                    ...toolTraces.length > 0 ? {
                                                        toolTraces: [
                                                            ...toolTraces
                                                        ]
                                                    } : {}
                                                } : m
                                        }["PiaChatProvider.useCallback[sendMessage]"])
                                }["PiaChatProvider.useCallback[sendMessage]"]);
                            } else if (data.type === 'done') {
                                // Mark streaming as complete, store the model that was used
                                setMessages({
                                    "PiaChatProvider.useCallback[sendMessage]": (prev)=>prev.map({
                                            "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id === assistantMessage.id ? {
                                                    ...m,
                                                    content: fullContent,
                                                    isStreaming: false,
                                                    model: data.model || undefined,
                                                    ...toolTraces.length > 0 ? {
                                                        toolTraces: [
                                                            ...toolTraces
                                                        ]
                                                    } : {}
                                                } : m
                                        }["PiaChatProvider.useCallback[sendMessage]"])
                                }["PiaChatProvider.useCallback[sendMessage]"]);
                            } else if (data.type === 'pending_approval') {
                                // Write tool approval flow via SSE
                                const pendingTraces = data.toolTraces || toolTraces;
                                setMessages({
                                    "PiaChatProvider.useCallback[sendMessage]": (prev)=>prev.map({
                                            "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id === assistantMessage.id ? {
                                                    ...m,
                                                    content: data.content || fullContent || 'Ich möchte die folgenden Aktionen durchführen und brauche deine Bestätigung:',
                                                    isStreaming: false,
                                                    toolTraces: pendingTraces.length > 0 ? [
                                                        ...pendingTraces
                                                    ] : undefined,
                                                    approval: {
                                                        pendingToolCalls: data.pendingToolCalls,
                                                        conversationId: data.conversationId,
                                                        status: 'pending'
                                                    }
                                                } : m
                                        }["PiaChatProvider.useCallback[sendMessage]"])
                                }["PiaChatProvider.useCallback[sendMessage]"]);
                                setIsStreaming(false);
                                return;
                            } else if (data.type === 'error') {
                                setError({
                                    code: 'stream_interrupted',
                                    message: data.message || 'Stream interrupted'
                                });
                                if (!fullContent) {
                                    setMessages({
                                        "PiaChatProvider.useCallback[sendMessage]": (prev)=>prev.filter({
                                                "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id !== assistantMessage.id
                                            }["PiaChatProvider.useCallback[sendMessage]"])
                                    }["PiaChatProvider.useCallback[sendMessage]"]);
                                }
                            }
                        } catch  {
                        // Skip malformed SSE lines
                        }
                    }
                }
                // Ensure streaming flag is cleared
                setMessages({
                    "PiaChatProvider.useCallback[sendMessage]": (prev)=>prev.map({
                            "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id === assistantMessage.id ? {
                                    ...m,
                                    isStreaming: false
                                } : m
                        }["PiaChatProvider.useCallback[sendMessage]"])
                }["PiaChatProvider.useCallback[sendMessage]"]);
            } catch (err) {
                if (err instanceof DOMException && err.name === 'AbortError') {
                    // User cancelled -- remove empty assistant message if no content yet
                    setMessages({
                        "PiaChatProvider.useCallback[sendMessage]": (prev)=>{
                            const msg = prev.find({
                                "PiaChatProvider.useCallback[sendMessage].msg": (m)=>m.id === assistantMessage.id
                            }["PiaChatProvider.useCallback[sendMessage].msg"]);
                            if (msg && !msg.content) {
                                return prev.filter({
                                    "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id !== assistantMessage.id
                                }["PiaChatProvider.useCallback[sendMessage]"]);
                            }
                            return prev.map({
                                "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id === assistantMessage.id ? {
                                        ...m,
                                        isStreaming: false
                                    } : m
                            }["PiaChatProvider.useCallback[sendMessage]"]);
                        }
                    }["PiaChatProvider.useCallback[sendMessage]"]);
                } else {
                    setError({
                        code: 'generic',
                        message: 'Something went wrong. Please try again.'
                    });
                    setMessages({
                        "PiaChatProvider.useCallback[sendMessage]": (prev)=>prev.filter({
                                "PiaChatProvider.useCallback[sendMessage]": (m)=>m.id !== assistantMessage.id
                            }["PiaChatProvider.useCallback[sendMessage]"])
                    }["PiaChatProvider.useCallback[sendMessage]"]);
                }
            } finally{
                setIsStreaming(false);
                abortControllerRef.current = null;
            }
        }
    }["PiaChatProvider.useCallback[sendMessage]"], [
        userPiaLanguage,
        userPiaTone
    ]) // userPiaLanguage & userPiaTone read directly; rest via refs
    ;
    // Listen for programmatic "open-chat-with-prompt" events from anywhere in the app.
    // Usage: window.dispatchEvent(new CustomEvent('open-chat-with-prompt', { detail: { prompt: '...' } }))
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PiaChatProvider.useEffect": ()=>{
            const handler = {
                "PiaChatProvider.useEffect.handler": (e)=>{
                    const customEvent = e;
                    const prompt = customEvent.detail?.prompt;
                    if (typeof prompt === 'string' && prompt.trim()) {
                        setIsOpen(true);
                        setError(null);
                        // Use a microtask to ensure the panel is open before sending
                        queueMicrotask({
                            "PiaChatProvider.useEffect.handler": ()=>{
                                sendMessage(prompt);
                            }
                        }["PiaChatProvider.useEffect.handler"]);
                    }
                }
            }["PiaChatProvider.useEffect.handler"];
            window.addEventListener('open-chat-with-prompt', handler);
            return ({
                "PiaChatProvider.useEffect": ()=>window.removeEventListener('open-chat-with-prompt', handler)
            })["PiaChatProvider.useEffect"];
        }
    }["PiaChatProvider.useEffect"], [
        sendMessage
    ]);
    /**
   * Handle tool approval decisions — calls /api/pia/tool-approval and updates
   * the relevant assistant message with the result.
   */ const handleToolApproval = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PiaChatProvider.useCallback[handleToolApproval]": async (messageId, decisions)=>{
            // Find the message to get conversation context
            const message = messagesRef.current.find({
                "PiaChatProvider.useCallback[handleToolApproval].message": (m)=>m.id === messageId
            }["PiaChatProvider.useCallback[handleToolApproval].message"]);
            if (!message?.approval) return;
            const { conversationId } = message.approval;
            // Immediately mark as submitting to prevent double-clicks
            setMessages({
                "PiaChatProvider.useCallback[handleToolApproval]": (prev)=>prev.map({
                        "PiaChatProvider.useCallback[handleToolApproval]": (m)=>m.id === messageId && m.approval ? {
                                ...m,
                                approval: {
                                    ...m.approval,
                                    status: 'pending'
                                }
                            } : m
                    }["PiaChatProvider.useCallback[handleToolApproval]"])
            }["PiaChatProvider.useCallback[handleToolApproval]"]);
            try {
                const response = await fetch('/api/pia/tool-approval/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        decisions,
                        conversationId
                    })
                });
                if (!response.ok) {
                    let errorBody = null;
                    try {
                        errorBody = await response.json();
                    } catch  {
                    // Ignore
                    }
                    // Determine status based on error type
                    let approvalStatus = 'error';
                    // #1626: feste Server-Meldung über ihren abgeleiteten Schlüssel übersetzen
                    let statusMessage = errorBody?.message && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateApiMessage"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"], errorBody.message) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.approval.processingError', {
                        defaultValue: 'Fehler bei der Verarbeitung'
                    });
                    if (response.status === 410 || errorBody?.error === 'expired') {
                        approvalStatus = 'expired';
                        statusMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.approval.expired', {
                            defaultValue: 'Aktion abgelaufen'
                        });
                    }
                    setMessages({
                        "PiaChatProvider.useCallback[handleToolApproval]": (prev)=>prev.map({
                                "PiaChatProvider.useCallback[handleToolApproval]": (m)=>m.id === messageId && m.approval ? {
                                        ...m,
                                        approval: {
                                            ...m.approval,
                                            status: approvalStatus,
                                            statusMessage
                                        }
                                    } : m
                            }["PiaChatProvider.useCallback[handleToolApproval]"])
                    }["PiaChatProvider.useCallback[handleToolApproval]"]);
                    return;
                }
                const data = await response.json();
                // Determine overall status
                const allRejected = data.results.every({
                    "PiaChatProvider.useCallback[handleToolApproval].allRejected": (r)=>!r.approved
                }["PiaChatProvider.useCallback[handleToolApproval].allRejected"]);
                const anyFailed = data.results.some({
                    "PiaChatProvider.useCallback[handleToolApproval].anyFailed": (r)=>r.approved && !r.success
                }["PiaChatProvider.useCallback[handleToolApproval].anyFailed"]);
                let approvalStatus;
                let statusMessage;
                if (allRejected) {
                    approvalStatus = 'rejected';
                    statusMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.approval.rejected', {
                        defaultValue: 'Aktionen abgelehnt'
                    });
                } else if (anyFailed) {
                    approvalStatus = 'error';
                    const failedTools = data.results.filter({
                        "PiaChatProvider.useCallback[handleToolApproval].failedTools": (r)=>r.approved && !r.success
                    }["PiaChatProvider.useCallback[handleToolApproval].failedTools"]).map({
                        "PiaChatProvider.useCallback[handleToolApproval].failedTools": (r)=>r.summary ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaSummaryTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translatePiaSummary"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"], r.summary, r.summaryText) : r.error
                    }["PiaChatProvider.useCallback[handleToolApproval].failedTools"]).join(', ');
                    statusMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.approval.partiallyFailed', {
                        defaultValue: 'Teilweise fehlgeschlagen: {{tools}}',
                        tools: failedTools
                    });
                } else {
                    approvalStatus = 'approved';
                    const summaries = data.results.filter({
                        "PiaChatProvider.useCallback[handleToolApproval].summaries": (r)=>r.approved && r.success
                    }["PiaChatProvider.useCallback[handleToolApproval].summaries"]).map({
                        "PiaChatProvider.useCallback[handleToolApproval].summaries": (r)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$piaSummaryTexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translatePiaSummary"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"], r.summary, r.summaryText)
                    }["PiaChatProvider.useCallback[handleToolApproval].summaries"]).join('; ');
                    statusMessage = summaries || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.approval.succeeded', {
                        defaultValue: 'Aktionen erfolgreich ausgefuhrt'
                    });
                }
                setMessages({
                    "PiaChatProvider.useCallback[handleToolApproval]": (prev)=>prev.map({
                            "PiaChatProvider.useCallback[handleToolApproval]": (m)=>m.id === messageId && m.approval ? {
                                    ...m,
                                    approval: {
                                        ...m.approval,
                                        status: approvalStatus,
                                        statusMessage
                                    }
                                } : m
                        }["PiaChatProvider.useCallback[handleToolApproval]"])
                }["PiaChatProvider.useCallback[handleToolApproval]"]);
            } catch  {
                setMessages({
                    "PiaChatProvider.useCallback[handleToolApproval]": (prev)=>prev.map({
                            "PiaChatProvider.useCallback[handleToolApproval]": (m)=>m.id === messageId && m.approval ? {
                                    ...m,
                                    approval: {
                                        ...m.approval,
                                        status: 'error',
                                        statusMessage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.approval.networkError', {
                                            defaultValue: 'Netzwerkfehler bei der Verarbeitung'
                                        })
                                    }
                                } : m
                        }["PiaChatProvider.useCallback[handleToolApproval]"])
                }["PiaChatProvider.useCallback[handleToolApproval]"]);
            }
        }
    }["PiaChatProvider.useCallback[handleToolApproval]"], []);
    // Memoize context value to prevent unnecessary re-renders of consumers
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PiaChatProvider.useMemo[value]": ()=>({
                isOpen,
                messages,
                isStreaming,
                error,
                rateLimitInfo,
                availableModels,
                voiceEnabled,
                selectedModel,
                defaultModel,
                defaultModelLabel,
                modelsLoading,
                toggleChat,
                openChat,
                closeChat,
                sendMessage,
                handleToolApproval,
                clearHistory,
                setSelectedModel: handleSetSelectedModel
            })
    }["PiaChatProvider.useMemo[value]"], [
        isOpen,
        messages,
        isStreaming,
        error,
        rateLimitInfo,
        availableModels,
        voiceEnabled,
        selectedModel,
        defaultModel,
        defaultModelLabel,
        modelsLoading,
        toggleChat,
        openChat,
        closeChat,
        sendMessage,
        handleToolApproval,
        clearHistory,
        handleSetSelectedModel
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PiaChatContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/PiaChatContext.tsx",
        lineNumber: 827,
        columnNumber: 10
    }, this);
}
_s(PiaChatProvider, "0DC+G4CirSC6UyVlNvRPEwow7Io=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePiaModels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePiaModels"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PageContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageContext"]
    ];
});
_c = PiaChatProvider;
function usePiaChat() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PiaChatContext);
    if (context === undefined) {
        throw new Error('usePiaChat must be used within a PiaChatProvider');
    }
    return context;
}
_s1(usePiaChat, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "PiaChatProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEntityText",
    ()=>useEntityText,
    "useLocalizedEntityFieldConfig",
    ()=>useLocalizedEntityFieldConfig
]);
/**
 * Texte der Feld-Configs in der Sprache des Nutzers (#1626)
 *
 * Bindet die reinen Funktionen aus `config/entityFields/entityFieldI18n.ts` an
 * die Übersetzung des angemeldeten Nutzers. Jede Ansicht, die Texte aus einer
 * Feld-Config oder aus `getFieldLabel` ausgibt, holt sie über diesen Hook.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/entityFieldI18n.ts [app-client] (ecmascript)");
// Über den Barrel: Tests mocken `@/config/entityFields` und erreichen so auch diesen Hook.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/useEntityFieldConfig.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
/**
 * `tr` behält seine Identität, wenn die Übersetzungen einer Sprache
 * nachgeladen sind. Wer übersetzte Configs in `useMemo` hält, braucht deshalb
 * diesen Zähler als Abhängigkeit — sonst bliebe der erste Stand stehen.
 */ const useTranslationsVersion = ()=>{
    _s();
    const [version, setVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTranslationsVersion.useEffect": ()=>{
            const handler = {
                "useTranslationsVersion.useEffect.handler": ()=>setVersion({
                        "useTranslationsVersion.useEffect.handler": (current)=>current + 1
                    }["useTranslationsVersion.useEffect.handler"])
            }["useTranslationsVersion.useEffect.handler"];
            window.addEventListener('translations-loaded', handler);
            return ({
                "useTranslationsVersion.useEffect": ()=>window.removeEventListener('translations-loaded', handler)
            })["useTranslationsVersion.useEffect"];
        }
    }["useTranslationsVersion.useEffect"], []);
    return version;
};
_s(useTranslationsVersion, "wl/odVD8wVUDLhTU0L9z9/g5EVY=");
function useEntityText() {
    _s1();
    const { tr, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const version = useTranslationsVersion();
    const language = i18n?.language;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useEntityText.useMemo": ()=>{
            const translate = tr;
            return {
                revision: `${language}:${version}`,
                text: ({
                    "useEntityText.useMemo": (text, key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateEntityText"])(translate, text, key)
                })["useEntityText.useMemo"],
                fieldLabel: ({
                    "useEntityText.useMemo": (apiName)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateFieldLabel"])(translate, apiName)
                })["useEntityText.useMemo"],
                options: ({
                    "useEntityText.useMemo": (options)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizePicklistOptions"])(options, translate)
                })["useEntityText.useMemo"],
                field: ({
                    "useEntityText.useMemo": (field)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeField"])(field, translate)
                })["useEntityText.useMemo"],
                section: ({
                    "useEntityText.useMemo": (section)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeSection"])(section, translate)
                })["useEntityText.useMemo"],
                relatedList: ({
                    "useEntityText.useMemo": (relatedList)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeRelatedList"])(relatedList, translate)
                })["useEntityText.useMemo"],
                tabGroup: ({
                    "useEntityText.useMemo": (group)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeTabGroup"])(group, translate)
                })["useEntityText.useMemo"],
                config: ({
                    "useEntityText.useMemo": (config)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["localizeEntityFieldConfig"])(config, translate)
                })["useEntityText.useMemo"]
            };
        }
    }["useEntityText.useMemo"], [
        tr,
        language,
        version
    ]);
}
_s1(useEntityText, "+D7AkRo77moGZkP0a6JXvTHeRaQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        useTranslationsVersion
    ];
});
function useLocalizedEntityFieldConfig(entityType, userContext, recordData) {
    _s2();
    // Nur `config` ist im Basis-Hook memoisiert; das umgebende Objekt entsteht
    // bei jedem Render neu und taugt nicht als Abhängigkeit.
    const { config: filtered } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityFieldConfig"])(entityType, userContext, recordData);
    const entityText = useEntityText();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useLocalizedEntityFieldConfig.useMemo": ()=>{
            if (!filtered) {
                return {
                    config: null,
                    sections: [],
                    tabGroups: [],
                    relatedLists: [],
                    relatedListTabGroups: [],
                    visibleFields: [],
                    systemFields: [],
                    originalConfig: null,
                    hasConfig: false
                };
            }
            const originalConfig = entityText.config(filtered.originalConfig);
            const config = {
                ...filtered,
                entityLabel: entityText.text(filtered.entityLabel, filtered.originalConfig.entityLabelKey),
                sections: filtered.sections.map(entityText.section),
                tabGroups: filtered.tabGroups.map(entityText.tabGroup),
                relatedLists: filtered.relatedLists.map(entityText.relatedList),
                originalConfig
            };
            return {
                config,
                sections: config.sections,
                tabGroups: config.tabGroups,
                relatedLists: config.relatedLists,
                relatedListTabGroups: originalConfig.relatedListTabGroups ?? [],
                visibleFields: filtered.visibleFieldNames,
                systemFields: filtered.systemFields,
                originalConfig,
                hasConfig: true
            };
        // `entityText` ist je Sprache und Ladezustand stabil.
        }
    }["useLocalizedEntityFieldConfig.useMemo"], [
        filtered,
        entityText
    ]);
}
_s2(useLocalizedEntityFieldConfig, "fCG7t5Ya/gucdg8whMC6pxnPCNI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityFieldConfig"],
        useEntityText
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useFormatters.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFormatters",
    ()=>useFormatters
]);
/**
 * #1640: Datum, Uhrzeit, Zahl, Währung, Prozent und relative Zeit in der
 * Sprache, die der Nutzer gewählt hat. Bindet `formattersFor`
 * (`app/lib/formatters`) an `i18n.language` von `useClientTranslation()`;
 * je Sprache dasselbe Objekt, die Funktionen sind also stabil und taugen als
 * Abhängigkeit für `useMemo`/`useCallback`.
 *
 *   const fmt = useFormatters()
 *   fmt.date(record.CreatedDate)      // 06.10.2026 · 06/10/2026
 *   fmt.currency(1234.5)              // 1.234,50 € · €1,234.50
 *   fmt.relativeTime(issue.lastSeen)  // vor 5 Minuten · 5 minutes ago
 *
 * Außerhalb von React-Hooks: `formattersFor(currentLanguage())`.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/formatters.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function useFormatters() {
    _s();
    const { i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$formatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formattersFor"])(i18n?.language);
}
_s(useFormatters, "cKGYGdtan8/tqyDjC6zXsSTP+Zo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/usePiaModels.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "effectivePiaModel",
    ()=>effectivePiaModel,
    "usePiaModels",
    ()=>usePiaModels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useShellBootstrap.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function effectivePiaModel(stored, data) {
    if (!data) return null;
    if (stored && data.models.some((m)=>m.id === stored)) return stored;
    return data.defaultModel || null;
}
function usePiaModels(options) {
    _s();
    const bootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"])();
    const enabled = options?.enabled ?? true;
    return {
        data: enabled ? bootstrap.data?.piaModels ?? undefined : undefined,
        isLoading: enabled && bootstrap.isLoading
    };
}
_s(usePiaModels, "baUoRMHseEZH3vmcqCcl3P4eYHw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/usePiaVoice.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePiaVoice",
    ()=>usePiaVoice
]);
/**
 * PIA Voice (#494) — Client-Seite der Sprach-Hülle, portiert aus der
 * Quest-Referenz (abaimanage-lite web/src/ChatPanel.tsx):
 * - Push-to-talk: Mikro → Float32-Chunks → WAV PCM 16 kHz mono → /api/pia/stt
 * - Vorlesen: Text → /api/pia/tts → MP3 → Audio-Queue (parallel laden,
 *   sequenziell abspielen), Barge-in beim neuen Aufnehmen
 * Die Chat-Logik bleibt unangetastet: das Transkript geht als ganz normale
 * Nachricht durch den bestehenden sendMessage-Pfad.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/currentLanguageTr.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
// --- WAV-Encoder: Float32-Mic-Chunks → WAV PCM 16k mono ---
function encodeWav(chunks, inRate) {
    const total = chunks.reduce((n, c)=>n + c.length, 0);
    if (!total) return null;
    const merged = new Float32Array(total);
    let o = 0;
    for (const c of chunks){
        merged.set(c, o);
        o += c.length;
    }
    const outRate = 16000;
    const ratio = inRate / outRate;
    const outLen = Math.max(1, Math.floor(merged.length / ratio));
    const pcm = new Int16Array(outLen);
    for(let i = 0; i < outLen; i++){
        // Mittelung über das Quell-Fenster (Tiefpass gegen Aliasing);
        // bei 16-kHz-Aufnahme ist ratio≈1 → verlustfrei
        const start = Math.floor(i * ratio);
        const end = Math.max(start + 1, Math.min(merged.length, Math.floor((i + 1) * ratio)));
        let sum = 0;
        for(let j = start; j < end; j++)sum += merged[j];
        const s = sum / (end - start);
        const v = Math.max(-1, Math.min(1, s));
        pcm[i] = v < 0 ? v * 0x8000 : v * 0x7fff;
    }
    const dataBytes = pcm.length * 2;
    const header = new ArrayBuffer(44);
    const dv = new DataView(header);
    const ws = (off, str)=>{
        for(let i = 0; i < str.length; i++)dv.setUint8(off + i, str.charCodeAt(i));
    };
    ws(0, 'RIFF');
    dv.setUint32(4, 36 + dataBytes, true);
    ws(8, 'WAVE');
    ws(12, 'fmt ');
    dv.setUint32(16, 16, true);
    dv.setUint16(20, 1, true);
    dv.setUint16(22, 1, true);
    dv.setUint32(24, outRate, true);
    dv.setUint32(28, outRate * 2, true);
    dv.setUint16(32, 2, true);
    dv.setUint16(34, 16, true);
    ws(36, 'data');
    dv.setUint32(40, dataBytes, true);
    return new Blob([
        header,
        pcm.buffer
    ], {
        type: 'audio/wav'
    });
}
function usePiaVoice(onTranscript) {
    _s();
    const [recording, setRecording] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transcribing, setTranscribing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [speaking, setSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePiaVoice.useCallback[clearError]": ()=>setError(null)
    }["usePiaVoice.useCallback[clearError]"], []);
    const recRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const speakRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        q: [],
        play: 0,
        active: false
    });
    const stopSpeaking = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePiaVoice.useCallback[stopSpeaking]": ()=>{
            const s = speakRef.current;
            try {
                s.audio?.pause();
            } catch  {
            // ignore
            }
            s.q.forEach({
                "usePiaVoice.useCallback[stopSpeaking]": (e)=>e.url && URL.revokeObjectURL(e.url)
            }["usePiaVoice.useCallback[stopSpeaking]"]);
            speakRef.current = {
                q: [],
                play: 0,
                active: false
            };
            setSpeaking(false);
        }
    }["usePiaVoice.useCallback[stopSpeaking]"], []);
    // Bewusst eine gehoistete Funktionsdeklaration (kein useCallback): sie
    // ruft sich aus der done-Closure selbst wieder auf, was der Lint bei einer
    // const-Zuweisung als Zugriff vor der Deklaration ablehnt.
    function playNext() {
        const s = speakRef.current;
        if (s.active) return;
        // Fehlgeschlagene (URL-lose) Einträge überspringen — Schleife statt
        // Selbstrekursion, die ginge vor Ende der const-Deklaration nicht
        let e = s.q[s.play];
        while(e && e.ready && !e.url){
            s.play++;
            e = s.q[s.play];
        }
        if (!e || !e.ready) return;
        s.play++;
        s.active = true;
        setSpeaking(true);
        const a = new Audio(e.url);
        s.audio = a;
        const done = ()=>{
            try {
                URL.revokeObjectURL(e.url);
            } catch  {
            // ignore
            }
            s.active = false;
            s.audio = undefined;
            if (s.play >= s.q.length) setSpeaking(false);
            playNext();
        };
        a.onended = done;
        a.onerror = ()=>{
            console.warn('[PIA Voice] Audio-Wiedergabe fehlgeschlagen', a.error);
            setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.voice.error.playback', {
                defaultValue: 'Vorlesen fehlgeschlagen (Wiedergabe)'
            }));
            done();
        };
        a.play().catch((err)=>{
            console.warn('[PIA Voice] audio.play() abgelehnt (Autoplay/CSP?)', err);
            setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.voice.error.playbackBlocked', {
                defaultValue: 'Wiedergabe blockiert — bitte einmal in die Seite klicken und erneut versuchen'
            }));
            done();
        });
    }
    const speak = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePiaVoice.useCallback[speak]": (text)=>{
            const clean = text.trim();
            if (!clean) return;
            const s = speakRef.current;
            const idx = s.q.length;
            s.q.push({
                ready: false
            });
            fetch('/api/pia/tts/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: clean
                })
            }).then({
                "usePiaVoice.useCallback[speak]": (r)=>r.ok ? r.blob() : Promise.reject(new Error(`tts ${r.status}`))
            }["usePiaVoice.useCallback[speak]"]).then({
                "usePiaVoice.useCallback[speak]": (b)=>{
                    s.q[idx] = {
                        ready: true,
                        url: URL.createObjectURL(b)
                    };
                    playNext();
                }
            }["usePiaVoice.useCallback[speak]"]).catch({
                "usePiaVoice.useCallback[speak]": (err)=>{
                    console.warn('[PIA Voice] TTS-Abruf fehlgeschlagen', err);
                    setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.voice.error.ttsUnavailable', {
                        defaultValue: 'Vorlesen nicht möglich (Sprachdienst antwortet nicht)'
                    }));
                    s.q[idx] = {
                        ready: true
                    };
                    playNext();
                }
            }["usePiaVoice.useCallback[speak]"]);
        }
    }["usePiaVoice.useCallback[speak]"], // playNext ist eine hoisted Deklaration im Hook-Body (siehe oben) —
    // bewusst nicht als Dependency geführt
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    const startRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePiaVoice.useCallback[startRecording]": async ()=>{
            if (recRef.current) return;
            stopSpeaking(); // Barge-in: laufendes Vorlesen abbrechen
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: {
                        echoCancellation: true,
                        noiseSuppression: true,
                        autoGainControl: true,
                        channelCount: 1
                    }
                });
                const Ctx = window.AudioContext || window.webkitAudioContext;
                // Direkt in 16 kHz aufnehmen — der Browser resampelt hochwertig
                let ctx;
                try {
                    ctx = new Ctx({
                        sampleRate: 16000
                    });
                } catch  {
                    ctx = new Ctx();
                }
                const src = ctx.createMediaStreamSource(stream);
                const chunks = [];
                // Capture bevorzugt per AudioWorklet (Audio-Thread — verliert unter
                // UI-Last keine Frames, der Haupthebel gegen lückige Transkripte);
                // ScriptProcessor nur noch als Fallback für alte Browser.
                let proc;
                try {
                    await ctx.audioWorklet.addModule('/pia-pcm-worklet.js');
                    const worklet = new AudioWorkletNode(ctx, 'pia-pcm-capture', {
                        numberOfInputs: 1,
                        numberOfOutputs: 1,
                        channelCount: 1
                    });
                    worklet.port.onmessage = ({
                        "usePiaVoice.useCallback[startRecording]": (e)=>{
                            chunks.push(e.data);
                        }
                    })["usePiaVoice.useCallback[startRecording]"];
                    proc = worklet;
                } catch (err) {
                    console.warn('[PIA Voice] AudioWorklet nicht verfügbar, Fallback ScriptProcessor', err);
                    const sp = ctx.createScriptProcessor(4096, 1, 1);
                    sp.onaudioprocess = ({
                        "usePiaVoice.useCallback[startRecording]": (e)=>{
                            chunks.push(new Float32Array(e.inputBuffer.getChannelData(0)));
                        }
                    })["usePiaVoice.useCallback[startRecording]"];
                    proc = sp;
                }
                src.connect(proc);
                proc.connect(ctx.destination); // Knoten liefern Stille → kein Echo
                recRef.current = {
                    ctx,
                    stream,
                    proc,
                    src,
                    chunks
                };
                setRecording(true);
            } catch (err) {
                console.warn('[PIA Voice] Mikrofon-Zugriff fehlgeschlagen', err);
                const name = err instanceof DOMException ? err.name : '';
                setError(name === 'NotAllowedError' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.voice.error.micDenied', {
                    defaultValue: 'Mikrofon-Zugriff verweigert — bitte im Browser für diese Seite erlauben'
                }) : name === 'NotFoundError' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.voice.error.micNotFound', {
                    defaultValue: 'Kein Mikrofon gefunden'
                }) : typeof navigator === 'undefined' || !navigator.mediaDevices ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.voice.error.micInsecure', {
                    defaultValue: 'Mikrofon nur über HTTPS oder localhost verfügbar'
                }) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.voice.error.micFailed', {
                    defaultValue: 'Mikrofon konnte nicht gestartet werden'
                }));
                setRecording(false);
            }
        }
    }["usePiaVoice.useCallback[startRecording]"], [
        stopSpeaking
    ]);
    const stopRecording = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePiaVoice.useCallback[stopRecording]": async ()=>{
            const r = recRef.current;
            if (!r) return;
            setRecording(false);
            try {
                if ('port' in r.proc) r.proc.port.onmessage = null;
                r.proc.disconnect();
                r.src.disconnect();
                r.stream.getTracks().forEach({
                    "usePiaVoice.useCallback[stopRecording]": (t)=>t.stop()
                }["usePiaVoice.useCallback[stopRecording]"]);
            } catch  {
            // ignore
            }
            const wav = encodeWav(r.chunks, r.ctx.sampleRate);
            try {
                await r.ctx.close();
            } catch  {
            // ignore
            }
            recRef.current = null;
            if (!wav) return;
            setTranscribing(true);
            try {
                const resp = await fetch('/api/pia/stt/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'audio/wav'
                    },
                    body: wav
                });
                const data = await resp.json().catch({
                    "usePiaVoice.useCallback[stopRecording]": ()=>null
                }["usePiaVoice.useCallback[stopRecording]"]);
                const text = (data?.text || '').trim();
                if (!resp.ok) setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.voice.error.sttFailed', {
                    defaultValue: 'Spracherkennung fehlgeschlagen (Status {{status}})',
                    status: resp.status
                }));
                else if (!text) setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.voice.error.nothingRecognised', {
                    defaultValue: 'Nichts erkannt — bitte noch einmal sprechen'
                }));
                else {
                    setError(null);
                    onTranscript(text);
                }
            } catch (err) {
                console.warn('[PIA Voice] STT fehlgeschlagen', err);
                setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"])('pia.voice.error.sttUnavailable', {
                    defaultValue: 'Spracherkennung nicht erreichbar'
                }));
            } finally{
                setTranscribing(false);
            }
        }
    }["usePiaVoice.useCallback[stopRecording]"], [
        onTranscript
    ]);
    return {
        recording,
        transcribing,
        speaking,
        startRecording,
        stopRecording,
        speak,
        stopSpeaking,
        error,
        clearError
    };
}
_s(usePiaVoice, "yCEHbF3IVAUVl0fqeWhVtzljAGI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useSessionComplete.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSessionComplete",
    ()=>useSessionComplete
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$authGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth/authGates.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useSessionComplete() {
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    return status === 'authenticated' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$authGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSessionComplete"])(session?.user);
}
_s(useSessionComplete, "ujwIunAD3hlHFoJLG3BNiDLiMqM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useShellBootstrap.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SHELL_BOOTSTRAP_KEY",
    ()=>SHELL_BOOTSTRAP_KEY,
    "useShellBootstrap",
    ()=>useShellBootstrap,
    "useUpdateShellBootstrap",
    ()=>useUpdateShellBootstrap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/runtimeEnv.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSessionComplete.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
const SHELL_BOOTSTRAP_KEY = [
    'me',
    'bootstrap'
];
function useShellBootstrap() {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const email = session?.user?.email ?? null;
    // #1548: erst mit vollständiger Sitzung — davor antwortet der Endpunkt 401
    const sessionComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            ...SHELL_BOOTSTRAP_KEY,
            email
        ],
        queryFn: {
            "useShellBootstrap.useQuery": async ()=>(await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/me/bootstrap/')).data
        }["useShellBootstrap.useQuery"],
        enabled: sessionComplete && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStorybookRuntime"])(),
        staleTime: Infinity,
        refetchOnWindowFocus: false
    });
}
_s(useShellBootstrap, "Ush9icAC2Tb4AOzJT8kESZTd6UM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useUpdateShellBootstrap() {
    _s1();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useUpdateShellBootstrap.useCallback": (patch)=>{
            const vorhanden = queryClient.getQueriesData({
                queryKey: SHELL_BOOTSTRAP_KEY
            }).some({
                "useUpdateShellBootstrap.useCallback.vorhanden": ([, data])=>data !== undefined
            }["useUpdateShellBootstrap.useCallback.vorhanden"]);
            if (!vorhanden) {
                void queryClient.invalidateQueries({
                    queryKey: SHELL_BOOTSTRAP_KEY
                });
                return;
            }
            queryClient.setQueriesData({
                queryKey: SHELL_BOOTSTRAP_KEY
            }, {
                "useUpdateShellBootstrap.useCallback": (current)=>current ? patch(current) : current
            }["useUpdateShellBootstrap.useCallback"]);
        }
    }["useUpdateShellBootstrap.useCallback"], [
        queryClient
    ]);
}
_s1(useUpdateShellBootstrap, "esWUSkX5QYGu6HykoNvE/x3w070=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useUsagePageview.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USAGE_INGEST_PATH",
    ()=>USAGE_INGEST_PATH,
    "sendeNutzungsereignis",
    ()=>sendeNutzungsereignis,
    "sendeSeitenaufruf",
    ()=>sendeSeitenaufruf,
    "useUsagePageview",
    ()=>useUsagePageview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const USAGE_INGEST_PATH = '/api/usage/ingest/';
function sendeSeitenaufruf(pathname, von) {
    sendeNutzungsereignis(pathname, 'pageview', von ? {
        from: von
    } : undefined);
}
function sendeNutzungsereignis(pathname, event, props) {
    const body = JSON.stringify({
        route: pathname,
        event,
        ...props ? {
            props
        } : {}
    });
    try {
        if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
            const ok = navigator.sendBeacon(USAGE_INGEST_PATH, new Blob([
                body
            ], {
                type: 'application/json'
            }));
            if (ok) return;
        }
        void fetch(USAGE_INGEST_PATH, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body,
            keepalive: true,
            credentials: 'same-origin'
        }).catch(()=>undefined);
    } catch  {
    // Analyse darf die Anwendung nie stoeren
    }
}
function useUsagePageview() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const vorher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUsagePageview.useEffect": ()=>{
            if (!pathname) return;
            if (vorher.current === null) {
                // Erstaufruf: von der Middleware gezaehlt
                vorher.current = pathname;
                return;
            }
            if (vorher.current === pathname) return;
            sendeSeitenaufruf(pathname, vorher.current);
            vorher.current = pathname;
        }
    }["useUsagePageview.useEffect"], [
        pathname
    ]);
}
_s(useUsagePageview, "3+yfLFm9PYcOAd+qergZVAeXJYo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/apiErrorText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Fehlermeldungen der API in der Sprache des Nutzers (#1626)
 *
 * Die Routen antworten mit festen Sätzen (`{ error: 'Forbidden' }`,
 * `apiErrorResponse(404, …, 'User not found')`), meist englisch, teils
 * deutsch. Der Server kennt die Sprache des Nutzers nicht; übersetzt wird
 * deshalb im Client, über einen Schlüssel, der aus dem Text selbst abgeleitet
 * ist — `apiErrors.<Kurzform>_<Hash>` — mit dem Text als `defaultValue`
 * (wie `entityTextKey` für die Feld-Configs):
 *
 * - Antworten, Statuscodes und Tests, die auf Server-Meldungen prüfen,
 *   bleiben unverändert,
 * - eine Meldung ohne Seed-Eintrag (dynamisch, mit Id oder Name darin) kommt
 *   unverändert zurück,
 * - ein geänderter Text bekommt automatisch einen neuen Schlüssel.
 *
 * Welche Meldungen es gibt, sammelt `tests/lib/helpers/collectApiErrorMessages`;
 * der Wächter `tests/lib/apiErrorTexts.test.ts` prüft, dass jede im Seed steht.
 *
 * Reine Funktionen ohne React — auch aus Tests und Skripten nutzbar.
 */ /** Signatur von `tr` / `trCurrentLanguage`, auf das Nötige reduziert. */ __turbopack_context__.s([
    "API_ERROR_PREFIX",
    ()=>API_ERROR_PREFIX,
    "apiErrorKey",
    ()=>apiErrorKey,
    "translateApiMessage",
    ()=>translateApiMessage
]);
const API_ERROR_PREFIX = 'apiErrors.';
const UMLAUTE = {
    ä: 'ae',
    ö: 'oe',
    ü: 'ue',
    Ä: 'Ae',
    Ö: 'Oe',
    Ü: 'Ue',
    ß: 'ss'
};
/** FNV-1a, 32 Bit — im Browser wie in Node gleich. */ const hash = (text)=>{
    let h = 0x811c9dc5;
    for(let i = 0; i < text.length; i++){
        h ^= text.charCodeAt(i);
        h = Math.imul(h, 0x01000193);
    }
    return (h >>> 0).toString(16).padStart(8, '0');
};
const apiErrorKey = (message)=>{
    const kurzform = message.replace(/[äöüÄÖÜß]/g, (zeichen)=>UMLAUTE[zeichen] ?? zeichen).replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 40);
    return `${API_ERROR_PREFIX}${kurzform ? `${kurzform}_` : ''}${hash(message)}`;
};
const translateApiMessage = (tr, message)=>message ? tr(apiErrorKey(message), {
        defaultValue: message
    }) : message;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>api,
    "apiDownloadBlob",
    ()=>apiDownloadBlob,
    "fingerprintPath",
    ()=>fingerprintPath,
    "getApiErrorMessage",
    ()=>getApiErrorMessage,
    "requestIdOf",
    ()=>requestIdOf
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
// #1494: über die Brücke — das SDK lädt erst nach dem ersten Rendern
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/logger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/requestId.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$contentDisposition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/contentDisposition.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$previewReadOnly$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/previewReadOnly.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/currentLanguageTr.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiErrorText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/salesforceErrorText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/entityFieldI18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$rejectionSummary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/api/rejectionSummary.ts [app-client] (ecmascript)");
// #1478: in apiCapture.ts, damit providers.tsx axios nicht mitlädt
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiCapture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiCapture.ts [app-client] (ecmascript)");
// #1478: in blobDownload.ts, damit öffentliche Blöcke (TeamMemberCard) axios nicht mitladen
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$blobDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/blobDownload.ts [app-client] (ecmascript)");
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
 * Zustandswechsel, keine Defekte: 401/403 (Abmeldung, Widerruf, Rolle ohne
 * Recht), 404 (Datensatz weg). Werden weder geloggt noch gemeldet.
 */ const EXPECTED_STATUS = new Set([
    401,
    403,
    404
]);
const ID_SEGMENT = /^([a-zA-Z0-9]{15}|[a-zA-Z0-9]{18}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}|c[a-z0-9]{24}|\d+)$/;
function fingerprintPath(url) {
    if (!url) return '(unknown)';
    const pfad = url.split('?')[0].split('#')[0].replace(/\/+$/, '');
    return pfad.split('/').map((seg)=>ID_SEGMENT.test(seg) ? ':id' : seg).join('/');
}
function requestIdOf(error) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isAxiosError(error)) return undefined;
    const fromResponse = error.response?.headers?.[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_ID_HEADER"]];
    if (typeof fromResponse === 'string' && fromResponse) return fromResponse;
    const sent = error.config?.headers?.[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_ID_HEADER"]];
    return typeof sent === 'string' && sent ? sent : undefined;
}
// Helper to check if we're in a test environment
const isTestEnvironment = ("TURBOPACK compile-time value", "development") === 'test';
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: '/api'
});
// Add request interceptor
api.interceptors.request.use((config)=>{
    // Ensure trailing slash on all API URLs to prevent 308 redirects (trailingSlash: true in next.config.js)
    if (config.url) {
        // Split URL into path and query string
        const [path, query] = config.url.split('?');
        if (path && !path.endsWith('/')) {
            config.url = query ? `${path}/?${query}` : `${path}/`;
        }
    }
    // #1136: jede Anfrage bekommt eine ID; der Server übernimmt sie
    // (getRequestId) und schreibt sie in Log, Sentry-Tag und Antwort-Header.
    if (!config.headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_ID_HEADER"])) {
        config.headers.set(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_ID_HEADER"], (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateRequestId"])());
    }
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('HTTP request initiated', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('axios-client', 'request', {
            metadata: {
                requestId: config.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$requestId$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REQUEST_ID_HEADER"]),
                method: config.method?.toUpperCase(),
                url: config.url,
                baseURL: config.baseURL,
                hasData: !!config.data,
                dataSize: config.data ? JSON.stringify(config.data).length : 0
            }
        }));
    }
    return config;
}, (error)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('HTTP request setup failed', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('axios-client', 'request-error'), error);
    }
    return Promise.reject(error);
});
// Add response interceptor
api.interceptors.response.use((response)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('HTTP response received', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('axios-client', 'response', {
            metadata: {
                status: response.status,
                statusText: response.statusText,
                url: response.config.url,
                hasData: !!response.data,
                dataSize: response.data ? JSON.stringify(response.data).length : 0
            }
        }));
    }
    return response;
}, (error)=>{
    // 404 (not found) and 403 (RBAC denied for this role) are expected outcomes for
    // data requests — not errors worth logging. A 403 just means the session's role
    // lacks `can_view` on the resource (e.g. a `user` hitting a monitored-materials
    // widget); the caller handles the empty/denied state.
    // Canceled requests are expected, not errors: the debounced lookup search in
    // EditableField aborts the previous in-flight request on every keystroke via an
    // AbortController, which rejects with a CanceledError (no response, so it would
    // otherwise slip past the status filter below and log loudly).
    const isCanceled = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].isCancel(error) || error.code === 'ERR_CANCELED';
    const status = error.response?.status;
    // #1194: gesperrter Schreibversuch in der Rollen-Vorschau — die Kopfleiste
    // erklaert es dem admin (sonst saehe er nur „Speichern fehlgeschlagen").
    if (error.response?.data?.code === 'PREVIEW_READ_ONLY') {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$previewReadOnly$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["announcePreviewReadOnly"])();
    }
    const requestId = requestIdOf(error);
    const apiError = error;
    apiError.requestId = requestId;
    if (!isCanceled && !(status !== undefined && EXPECTED_STATUS.has(status))) {
        const method = (error.config?.method ?? 'get').toUpperCase();
        const path = fingerprintPath(error.config?.url);
        const serverBody = error.response?.data;
        if ("TURBOPACK compile-time truthy", 1) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('HTTP response error', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('axios-client', 'response-error', {
                requestId,
                statusCode: status,
                metadata: {
                    method,
                    url: error.config?.url,
                    message: error.message
                }
            }));
        }
        // #1137: EIN Capture je Fehler, hier — auch für die axios-Aufrufe ohne
        // react-query, die vorher an der globalen Erfassung vorbeiliefen.
        // Fingerprint je Methode/Pfad/Status, damit Sentry nicht alles unter
        // „Request failed with status code 500" zusammenwirft.
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
            tags: {
                source: 'axios',
                requestId: requestId ?? 'none',
                http_status: status !== undefined ? String(status) : 'network',
                http_method: method
            },
            extra: {
                url: error.config?.url,
                serverError: typeof serverBody?.error === 'string' ? serverBody.error : undefined,
                serverCode: typeof serverBody?.code === 'string' ? serverBody.code : undefined,
                // #2075: beanstandete Feldnamen (nie Werte) — vorher sah Sentry bei
                // `validation` nicht, welches Feld der Server ablehnte.
                serverFields: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$api$2f$rejectionSummary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["summarizeRejection"])(serverBody).fields
            },
            fingerprint: [
                'axios',
                method,
                path,
                status !== undefined ? String(status) : 'network'
            ]
        });
        apiError.sentryCaptured = true;
    }
    return Promise.reject(error);
});
/** Redigierte 5xx-Texte des Servers (#281/#1135) — nichts für den Toast. */ const GENERIC_SERVER_MESSAGES = new Set([
    'Internal server error',
    'Upstream service error'
]);
/**
 * #1636: Salesforce-Ablehnung in der Sprache des Nutzers. Der Server schickt
 * sie strukturiert (`salesforce`, bei withApiMiddleware unter `details`);
 * daraus wird die Meldung mit der aktuellen Sprache neu gebaut. Feld-Labels
 * laufen wie überall über die Entity-Texte. `null`, wenn nichts Passendes da
 * ist oder die Übersetzung scheitert — dann gilt die deutsche Server-Meldung.
 */ function translatedSalesforceMessage(data) {
    if (!data || typeof data !== 'object') return null;
    const body = data;
    const rejection = body.salesforce ?? body.details?.salesforce;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSalesforceRejection"])(rejection)) return null;
    try {
        const message = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateSalesforceRejection"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"], {
            text: (label)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateEntityText"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"], label)
        }, rejection);
        return message.trim() ? message : null;
    } catch  {
        return null;
    }
}
function getApiErrorMessage(error, fallback) {
    const data = error?.response?.data;
    const translated = translatedSalesforceMessage(data);
    if (translated) return translated;
    const message = data?.message ?? data?.error;
    if (typeof message === 'string' && message.trim() && !GENERIC_SERVER_MESSAGES.has(message)) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateApiMessage"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$currentLanguageTr$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trCurrentLanguage"], message);
    }
    return fallback;
}
async function apiDownloadBlob(url, defaultFilename = 'download.pdf', config) {
    const response = await api.get(url, {
        ...config,
        responseType: 'blob'
    });
    const blob = response.data;
    // #1166: filename*= (RFC 5987, Umlaute) hat Vorrang vor dem ASCII-filename=
    const contentDisposition = response.headers?.['content-disposition'];
    const filename = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$contentDisposition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileNameFromContentDisposition"])(contentDisposition) ?? defaultFilename;
    return {
        blob,
        filename
    };
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/blobDownload.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Trigger a browser file download from a Blob.
 *
 * #1478: eigene Datei ohne HTTP-Client — lib/axios.ts re-exportiert sie; wer
 * nur herunterlädt (TeamMemberCard auf öffentlichen Seiten), lädt axios nicht.
 */ __turbopack_context__.s([
    "triggerBlobDownload",
    ()=>triggerBlobDownload
]);
function triggerBlobDownload(blob, filename) {
    const blobUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    window.URL.revokeObjectURL(blobUrl);
    document.body.removeChild(link);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/contentDisposition.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contentDisposition",
    ()=>contentDisposition,
    "fileNameFromContentDisposition",
    ()=>fileNameFromContentDisposition,
    "joinFileName",
    ()=>joinFileName,
    "pdfFilename",
    ()=>pdfFilename,
    "sanitizeFileName",
    ()=>sanitizeFileName,
    "toAsciiFileName",
    ()=>toAsciiFileName
]);
/**
 * Content-Disposition für Datei-Downloads (#1166).
 *
 * Lädt der Browser eine Datei per Link oder Navigation (kein `download`-Attribut,
 * kein Blob), nimmt er den Dateinamen AUSSCHLIESSLICH aus diesem Header. Fehlt
 * er, speichert er unter dem letzten URL-Segment — ohne Endung. Windows zeigt so
 * eine Datei nur als „Datei" ohne Programmzuordnung an.
 *
 * Der Header trägt immer eine ASCII-Variante (`filename=`) für alte Clients und,
 * sobald Umlaute oder andere Nicht-ASCII-Zeichen vorkommen, zusätzlich die
 * RFC-5987-Variante (`filename*=UTF-8''…`), die moderne Browser bevorzugen.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
;
const CONTROL_AND_PATH_CHARS = /[\u0000-\u001f\u007f/\\]/g;
const NON_ASCII = /[^\u0020-\u007e]/g;
const QUOTE_OR_BACKSLASH = /["\\]/g;
const TRANSLITERATIONS = {
    ä: 'ae',
    ö: 'oe',
    ü: 'ue',
    Ä: 'Ae',
    Ö: 'Oe',
    Ü: 'Ue',
    ß: 'ss'
};
function sanitizeFileName(name, fallback = 'download') {
    const cleaned = (name ?? '').replace(CONTROL_AND_PATH_CHARS, '_').trim();
    return cleaned || fallback;
}
function joinFileName(title, extension, fallback = 'download') {
    const base = sanitizeFileName(title, fallback);
    const ext = (extension ?? '').trim().replace(/^\.+/, '');
    if (!ext) return base;
    return base.toLowerCase().endsWith(`.${ext.toLowerCase()}`) ? base : `${base}.${ext}`;
}
function toAsciiFileName(name) {
    return name.replace(/[äöüÄÖÜß]/g, (char)=>TRANSLITERATIONS[char] ?? '_').replace(NON_ASCII, '_').replace(QUOTE_OR_BACKSLASH, '_');
}
/** Prozent-Kodierung nach RFC 5987 (encodeURIComponent lässt `'()*` unkodiert). */ function encodeRfc5987(value) {
    return encodeURIComponent(value).replace(/['()*]/g, (char)=>`%${char.charCodeAt(0).toString(16).toUpperCase()}`);
}
function contentDisposition(fileName, type = 'attachment') {
    const safe = sanitizeFileName(fileName);
    const ascii = toAsciiFileName(safe);
    const header = `${type}; filename="${ascii}"`;
    return ascii === safe ? header : `${header}; filename*=UTF-8''${encodeRfc5987(safe)}`;
}
/**
 * #1246 (M-08/M-09): Präfix je Objekttyp für Versand-/Download-Dateinamen —
 * klein/deutsch, wo die Objektbezeichnung das hergibt. Nur die Ausnahmen, die
 * `getEntityLabel` nicht deutsch liefert (`Abrechnung__c` → „Invoice",
 * `Order` → „Order"), stehen hier explizit.
 */ const PDF_FILENAME_PREFIXES = {
    Abrechnung__c: 'rechnung',
    Order: 'auftrag'
};
/** Sonderzeichen (inkl. Leerzeichen) zu `-`, Mehrfach-/Rand-Bindestriche weg. */ function toFileNameSlugPart(value) {
    return value.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}
function pdfFilename(entityType, name) {
    const label = PDF_FILENAME_PREFIXES[entityType] ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityLabel"])(entityType);
    const prefix = toFileNameSlugPart(label.toLowerCase());
    // Artefakte-Review M-9: erst transliterieren (ü → ue), dann slugifizieren —
    // sonst wird „Müller GmbH" zu „M-ller-GmbH".
    const cleanedName = toFileNameSlugPart(toAsciiFileName(sanitizeFileName(name, '')));
    return cleanedName ? `${prefix}-${cleanedName}.pdf` : `${prefix}.pdf`;
}
function fileNameFromContentDisposition(header) {
    if (!header) return null;
    const extended = header.match(/filename\*=(?:UTF-8|utf-8)''([^;\s]+)/);
    if (extended?.[1]) {
        try {
            return sanitizeFileName(decodeURIComponent(extended[1]));
        } catch  {
        // kaputte Prozent-Kodierung → auf filename= zurückfallen
        }
    }
    const plain = header.match(/filename="([^"]*)"|filename=([^;\s]+)/);
    const value = plain?.[1] ?? plain?.[2];
    return value ? sanitizeFileName(value) : null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/logger.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogLevel",
    ()=>LogLevel,
    "createContext",
    ()=>createContext,
    "createRequestContext",
    ()=>createRequestContext,
    "default",
    ()=>__TURBOPACK__default__export__,
    "logger",
    ()=>logger,
    "measurePerformance",
    ()=>measurePerformance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// #1494: über die Brücke — logger landet über lib/axios auch im Browser, wo das
// SDK erst nach dem ersten Rendern lädt (auf dem Server reicht sie direkt weiter)
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/logScrub.ts [app-client] (ecmascript)");
;
;
var LogLevel = /*#__PURE__*/ function(LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
    LogLevel[LogLevel["TRACE"] = 4] = "TRACE";
    return LogLevel;
}({});
class ApplicationLogger {
    logLevel;
    isDevelopment;
    constructor(){
        this.logLevel = this.getLogLevel();
        this.isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
    }
    getLogLevel() {
        const level = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['LOG_LEVEL']?.toLowerCase() || 'info';
        switch(level){
            case 'error':
                return 0;
            case 'warn':
                return 1;
            case 'info':
                return 2;
            case 'debug':
                return 3;
            case 'trace':
                return 4;
            default:
                return 2;
        }
    }
    shouldLog(level) {
        return level <= this.logLevel;
    }
    formatLogEntry(level, message, context, error) {
        // #1678: Geheimnisse stehen in keiner Logzeile — auch nicht in Nachricht,
        // URL oder Fehlertext. Das ist das Netz für alle Aufrufer (lib/logScrub.ts).
        const entry = {
            timestamp: new Date().toISOString(),
            level: LogLevel[level],
            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogString"])(message),
            context: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogValue"])({
                ...context,
                component: context.component,
                action: context.action
            })
        };
        if (error) {
            entry.error = {
                name: error.name,
                message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogString"])(error.message),
                stack: this.isDevelopment ? error.stack : undefined,
                code: 'code' in error ? error.code : undefined
            };
        }
        return entry;
    }
    outputLog(entry) {
        const logString = JSON.stringify(entry, null, this.isDevelopment ? 2 : 0);
        // Console output with colors in development
        if (this.isDevelopment) {
            const coloredLevel = this.getColoredLevel(entry.level);
            console.log(`[${entry.timestamp}] ${coloredLevel}: ${entry.message}`);
            if (entry.context.duration) {
                console.log(`  Duration: ${entry.context.duration}ms`);
            }
            if (entry.error) {
                console.error(`  Error: ${entry.error.message}`);
                if (entry.error.stack) {
                    console.error(`  Stack: ${entry.error.stack}`);
                }
            }
            if (entry.context.metadata) {
                console.log(`  Metadata:`, entry.context.metadata);
            }
        } else {
            // Production: structured JSON output
            switch(entry.level){
                case 'ERROR':
                    console.error(logString);
                    break;
                case 'WARN':
                    console.warn(logString);
                    break;
                default:
                    console.log(logString);
            }
        }
    }
    getColoredLevel(level) {
        switch(level){
            case 'ERROR':
                return '\x1b[31mERROR\x1b[0m' // Red
                ;
            case 'WARN':
                return '\x1b[33mWARN\x1b[0m' // Yellow
                ;
            case 'INFO':
                return '\x1b[36mINFO\x1b[0m' // Cyan
                ;
            case 'DEBUG':
                return '\x1b[90mDEBUG\x1b[0m' // Gray
                ;
            case 'TRACE':
                return '\x1b[35mTRACE\x1b[0m' // Magenta
                ;
            default:
                return level;
        }
    }
    log(level, message, context, error) {
        if (!this.shouldLog(level)) return;
        const entry = this.formatLogEntry(level, message, context, error);
        this.outputLog(entry);
    }
    // Public logging methods
    error(message, context, error) {
        this.log(0, message, context, error);
        // Forward to Sentry for centralized error tracking
        if (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
                tags: {
                    component: context.component,
                    action: context.action
                },
                extra: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogValue"])({
                    message,
                    ...context.metadata
                })
            });
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureMessage"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogString"])(message), {
                level: 'error',
                tags: {
                    component: context.component,
                    action: context.action
                },
                extra: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogValue"])(context.metadata)
            });
        }
    }
    /**
   * #2075: ERROR-Zeile ohne eigene Sentry-Meldung — für 5xx, die eine Route
   * selbst beantwortet (und selbst meldet, z. B. Kontaktformular abgeschaltet).
   * Sonst gäbe es je Antwort eine zweite Sentry-Meldung aus der Middleware.
   */ errorLogOnly(message, context) {
        this.log(0, message, context);
    }
    warn(message, context) {
        this.log(1, message, context);
        // Add as Sentry breadcrumb for context on future errors
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"]({
            category: context.component,
            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLogString"])(`[${context.action}] ${message}`),
            level: 'warning'
        });
    }
    info(message, context) {
        this.log(2, message, context);
    }
    debug(message, context) {
        this.log(3, message, context);
    }
    trace(message, context) {
        this.log(4, message, context);
    }
    // Performance logging helper
    performanceLog(message, context, startTime, level = 2) {
        const duration = Date.now() - startTime;
        this.log(level, message, {
            ...context,
            duration
        });
    }
    // API request logging helper
    apiRequest(message, context, request) {
        const requestContext = {
            ...context,
            method: request?.method,
            url: request?.url,
            userAgent: request?.headers.get('user-agent') || undefined,
            ip: request?.headers.get('x-forwarded-for') || request?.headers.get('x-real-ip') || undefined
        };
        this.info(message, requestContext);
    }
    // API response logging helper
    apiResponse(message, context, statusCode, duration) {
        const responseContext = {
            ...context,
            statusCode,
            duration
        };
        // 4xx sind erwartete Zustände (abgelaufene Session, fehlendes Recht, Token-
        // Ablehnung am Webhook) und keine Defekte: INFO, damit ein gehämmerter
        // Endpunkt nicht je Anfrage eine Warnung erzeugt (#1008, #1141). 5xx bleibt ERROR.
        const level = statusCode >= 500 ? 0 : 2;
        this.log(level, message, responseContext);
    }
    // Database query logging helper
    dbQuery(query, context, duration, rowCount) {
        const dbContext = {
            ...context,
            duration,
            metadata: {
                query: query.substring(0, 200) + (query.length > 200 ? '...' : ''),
                rowCount
            }
        };
        this.debug('Database query executed', dbContext);
    }
    // Salesforce API logging helper
    salesforceAPI(operation, context, duration, recordCount, error) {
        const sfContext = {
            ...context,
            duration,
            metadata: {
                operation,
                recordCount
            }
        };
        if (error) {
            this.error(`Salesforce API error: ${operation}`, sfContext, error);
        } else {
            this.info(`Salesforce API success: ${operation}`, sfContext);
        }
    }
}
const logger = new ApplicationLogger();
const createContext = (component, action, additional = {})=>({
        component,
        action,
        ...additional
    });
const createRequestContext = (component, action, request, additional = {})=>({
        component,
        action,
        method: request?.method,
        url: request?.url,
        userAgent: request?.headers.get('user-agent') || undefined,
        ip: request?.headers.get('x-forwarded-for') || request?.headers.get('x-real-ip') || undefined,
        ...additional
    });
const measurePerformance = (fn, message, context)=>{
    const startTime = Date.now();
    const result = fn();
    if (result instanceof Promise) {
        return result.then((value)=>{
            logger.performanceLog(message, context, startTime);
            return value;
        }).catch((error)=>{
            logger.performanceLog(`${message} (failed)`, context, startTime, 0);
            throw error;
        });
    } else {
        logger.performanceLog(message, context, startTime);
        return Promise.resolve(result);
    }
};
const __TURBOPACK__default__export__ = logger;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/previewReadOnly.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1194 — Brücke vom axios-Interceptor zur Oberfläche: eine Schreibanfrage
 * wurde während der Rollen-Vorschau gesperrt (403 PREVIEW_READ_ONLY).
 *
 * axios.ts kennt keinen React-Kontext; es meldet per Fenster-Ereignis, die
 * Kopfleiste (ViewAsControl) zeigt daraufhin einen Hinweis.
 */ __turbopack_context__.s([
    "PREVIEW_READ_ONLY_EVENT",
    ()=>PREVIEW_READ_ONLY_EVENT,
    "announcePreviewReadOnly",
    ()=>announcePreviewReadOnly,
    "subscribePreviewReadOnly",
    ()=>subscribePreviewReadOnly
]);
const PREVIEW_READ_ONLY_EVENT = 'plastship:preview-read-only';
function announcePreviewReadOnly() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.dispatchEvent(new Event(PREVIEW_READ_ONLY_EVENT));
}
function subscribePreviewReadOnly(listener) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.addEventListener(PREVIEW_READ_ONLY_EVENT, listener);
    return ()=>window.removeEventListener(PREVIEW_READ_ONLY_EVENT, listener);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/requestId.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REQUEST_ID_HEADER",
    ()=>REQUEST_ID_HEADER,
    "generateRequestId",
    ()=>generateRequestId,
    "getRequestId",
    ()=>getRequestId,
    "isValidRequestId",
    ()=>isValidRequestId
]);
const REQUEST_ID_HEADER = 'x-request-id';
const generateRequestId = ()=>{
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 9);
    return `req_${timestamp}_${random}`;
};
/** Nur unser eigenes Format wird übernommen — fremde Werte könnten Logs vergiften. */ const REQUEST_ID_PATTERN = /^req_[a-z0-9]{6,16}_[a-z0-9]{4,12}$/;
const isValidRequestId = (value)=>typeof value === 'string' && REQUEST_ID_PATTERN.test(value);
const getRequestId = (request)=>{
    const existingId = request.headers?.get?.(REQUEST_ID_HEADER) ?? null;
    return isValidRequestId(existingId) ? existingId : generateRequestId();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/lib/runtimeEnv.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Runtime environment helpers.
 *
 * `isStorybookRuntime()` lets app providers detect when they are mounted inside
 * the Storybook preview frame so they can skip live side effects — opening
 * EventSource/SSE connections, polling endpoints — that make no sense in
 * Storybook. The Storybook preview (apps/web/.storybook/preview.tsx) sets the
 * `__PLASTSHIP_STORYBOOK__` window flag at module-eval time, before any story
 * mounts, so the flag is reliably present by the time provider effects run.
 *
 * In the real Next.js app the flag is never set, so this always returns false
 * and provider behaviour is unchanged.
 */ __turbopack_context__.s([
    "isStorybookRuntime",
    ()=>isStorybookRuntime
]);
function isStorybookRuntime() {
    return ("TURBOPACK compile-time value", "object") !== 'undefined' && window.__PLASTSHIP_STORYBOOK__ === true;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/utils/piaConstants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PIA_ALLOWED_ROLES",
    ()=>PIA_ALLOWED_ROLES,
    "PIA_AVATAR_PATH",
    ()=>PIA_AVATAR_PATH,
    "PIA_DECIDER_MAX_TOKENS",
    ()=>PIA_DECIDER_MAX_TOKENS,
    "PIA_MAX_CONTENT_LENGTH",
    ()=>PIA_MAX_CONTENT_LENGTH,
    "PIA_TOOL_APPROVAL_EXPIRY_MINUTES",
    ()=>PIA_TOOL_APPROVAL_EXPIRY_MINUTES,
    "PIA_TOOL_DEFAULT_RATE_LIMIT_PER_DAY",
    ()=>PIA_TOOL_DEFAULT_RATE_LIMIT_PER_DAY,
    "PIA_TOOL_DEFAULT_RATE_LIMIT_PER_MINUTE",
    ()=>PIA_TOOL_DEFAULT_RATE_LIMIT_PER_MINUTE,
    "PIA_TOOL_DETAILS_RESULT_LENGTH",
    ()=>PIA_TOOL_DETAILS_RESULT_LENGTH,
    "PIA_TOOL_MAX_ARGS_LENGTH",
    ()=>PIA_TOOL_MAX_ARGS_LENGTH,
    "PIA_TOOL_MAX_RESULT_LENGTH",
    ()=>PIA_TOOL_MAX_RESULT_LENGTH,
    "PIA_TOOL_MAX_ROUNDS",
    ()=>PIA_TOOL_MAX_ROUNDS,
    "PIA_TOOL_MAX_WRITE_BATCH",
    ()=>PIA_TOOL_MAX_WRITE_BATCH,
    "PIA_TOOL_REVERT_WINDOW_DAYS",
    ()=>PIA_TOOL_REVERT_WINDOW_DAYS,
    "PIA_TOOL_TOKEN_BUDGET",
    ()=>PIA_TOOL_TOKEN_BUDGET,
    "TOOL_RESULT_END",
    ()=>TOOL_RESULT_END,
    "TOOL_RESULT_START",
    ()=>TOOL_RESULT_START,
    "USER_MESSAGE_END",
    ()=>USER_MESSAGE_END,
    "USER_MESSAGE_START",
    ()=>USER_MESSAGE_START,
    "WRITE_SECURITY_LEVELS",
    ()=>WRITE_SECURITY_LEVELS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * PIA (Plastship Intelligent Assistant) - Shared Constants
 *
 * Central location for constants used across PIA components,
 * API routes, and hooks.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$profileSections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/profileSections.ts [app-client] (ecmascript)");
;
const PIA_ALLOWED_ROLES = new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$profileSections$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rolesWithProfileSection"])('pia'));
const PIA_MAX_CONTENT_LENGTH = 4000;
const PIA_AVATAR_PATH = '/images/pia-avatar.webp';
const PIA_TOOL_MAX_ROUNDS = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.PIA_TOOL_MAX_ROUNDS || '4', 10);
/**
 * Token-Budget der Tool-Entscheidungsrunden (env: PIA_DECIDER_MAX_TOKENS).
 * Bei GPT-5 zählen die Reasoning-Tokens in dasselbe max_completion_tokens wie
 * die Ausgabe — mit den 2048 der Antwort blieb für mehrere Tool-Aufrufe nichts
 * übrig. Für die finale Antwort bleibt PIA_MAX_TOKENS maßgeblich.
 */ const rawDeciderTokens = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.PIA_DECIDER_MAX_TOKENS || '8000', 10);
const PIA_DECIDER_MAX_TOKENS = Number.isFinite(rawDeciderTokens) && rawDeciderTokens >= 1000 && rawDeciderTokens <= 32000 ? rawDeciderTokens : 8000;
const PIA_TOOL_TOKEN_BUDGET = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.PIA_TOOL_TOKEN_BUDGET || '20000', 10);
const PIA_TOOL_MAX_RESULT_LENGTH = 5000;
const PIA_TOOL_DETAILS_RESULT_LENGTH = 10000;
/**
 * Maximum write actions allowed in a single approval batch
 * (env: PIA_TOOL_MAX_WRITE_BATCH, 1–12). ACHTUNG: Wert nur erhoehen — wird er
 * gesenkt, waehrend eine groessere Karte offen ist, scheitert deren Freigabe.
 */ const rawWriteBatch = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.PIA_TOOL_MAX_WRITE_BATCH || '8', 10);
const PIA_TOOL_MAX_WRITE_BATCH = Number.isFinite(rawWriteBatch) && rawWriteBatch >= 1 && rawWriteBatch <= 12 ? rawWriteBatch : 8;
const PIA_TOOL_APPROVAL_EXPIRY_MINUTES = 15;
const PIA_TOOL_REVERT_WINDOW_DAYS = 30;
const PIA_TOOL_MAX_ARGS_LENGTH = 2000;
const TOOL_RESULT_START = '[TOOL_RESULT';
const TOOL_RESULT_END = '[/TOOL_RESULT]';
const USER_MESSAGE_START = '[USER_MESSAGE_START]';
const USER_MESSAGE_END = '[USER_MESSAGE_END]';
const WRITE_SECURITY_LEVELS = new Set([
    'write_pg',
    'write_sf'
]);
const PIA_TOOL_DEFAULT_RATE_LIMIT_PER_MINUTE = 10;
const PIA_TOOL_DEFAULT_RATE_LIMIT_PER_DAY = 100;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/utils/piaSummaryTexts.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PIA_PREVIEW_NOT_SPECIFIED",
    ()=>PIA_PREVIEW_NOT_SPECIFIED,
    "PIA_PREVIEW_TEMPLATES",
    ()=>PIA_PREVIEW_TEMPLATES,
    "PIA_SUMMARY_TEMPLATES",
    ()=>PIA_SUMMARY_TEMPLATES,
    "parsePiaSummary",
    ()=>parsePiaSummary,
    "piaSummaryText",
    ()=>piaSummaryText,
    "translatePiaPreview",
    ()=>translatePiaPreview,
    "translatePiaSummary",
    ()=>translatePiaSummary
]);
/**
 * #1626: PIA-Zusammenfassungen (Freigabe, Revert, Tool-Spur) und die Zeilen
 * der Freigabe-Vorschau in der Sprache des Lesers.
 *
 * Die Services bauen ihre Sätze je Tool, teils englisch, teils deutsch, mit
 * Ids darin. Der Satz bleibt unverändert (Audit-Log, LLM, bestehende Tests);
 * zusätzlich liefern Freigabe und Revert ein `summaryText` (Schlüssel +
 * Platzhalter). Für Texte, die schon gespeichert sind oder ohne `summaryText`
 * ankommen (Audit-Tabelle, Tool-Spur im Chat, Vorschau aus der DB), erkennt
 * `piaSummaryText` den Satz an seinem Muster wieder.
 *
 * Rein, ohne React und ohne Next: läuft auf Server und Client.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$i18nText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/i18n/i18nText.ts [app-client] (ecmascript)");
;
const SUMMARY_KEY = 'pia.summary';
const PREVIEW_KEY = 'pia.preview';
const PIA_SUMMARY_TEMPLATES = {
    // piaToolApprovalService — Freigabe
    toolMissing: 'Tool no longer exists',
    toolDisabled: 'Tool is disabled',
    salesforceWritesDisabled: 'Salesforce writes are disabled',
    roleRevoked: 'Role access revoked',
    rbacDenied: 'RBAC access denied',
    validationFailed: 'Validation failed',
    executionFailed: 'Execution failed',
    rejectedByUser: 'Rejected by user',
    noWriteHandler: 'No write handler for tool: {{tool}}',
    invalidAccountId: 'Invalid Account ID',
    invalidContactId: 'Invalid Contact ID',
    invalidCaseId: 'Invalid Case ID',
    invalidRelatedToId: 'Invalid Related-To ID',
    caseCreated: 'Case erstellt: {{id}}',
    caseCreatedWithoutAccount: 'Case erstellt ohne Account-Zuordnung: {{id}}',
    caseCreateFailed: 'Case-Erstellung fehlgeschlagen',
    caseNotFound: 'Case nicht gefunden',
    accessDenied: 'Zugriff verweigert',
    caseStatusChanged: 'Case {{id}} Status: {{from}} -> {{to}}',
    taskCreated: 'Aufgabe erstellt: {{id}}',
    notificationCreated: 'Benachrichtigung erstellt: {{id}}',
    // piaToolRevertService
    revertSucceeded: 'Successfully reverted {{tool}} ({{target}}:{{action}})',
    revertFailed: 'Revert failed for {{tool}}',
    revertLogged: 'Reverted {{tool}} (original ID: {{id}})',
    // piaToolExecutor — Lese-Tools (Tool-Spur im Chat, Audit-Tabelle)
    noExecutionHandler: 'Tool "{{tool}}" has no execution handler',
    missingArgument: 'Tool "{{tool}}" requires argument "{{argument}}"',
    unknownOperation: 'Tool "{{tool}}" has unknown operation: {{operation}}',
    recordsFound: '{{n}} {{object}} record(s) found',
    searchFailed: 'Search failed: {{error}}',
    invalidRecordId: 'Invalid record ID format',
    recordNotFound: '{{object}} not found',
    detailsRetrieved: '{{object}} details retrieved',
    fetchFailed: 'Fetch failed: {{error}}'
};
function piaSummaryText(id, params) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$i18nText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i18nText"])(`${SUMMARY_KEY}.${id}`, PIA_SUMMARY_TEMPLATES[id], params);
}
const PIA_PREVIEW_TEMPLATES = {
    createCase: 'Neuen Case erstellen',
    updateCaseStatus: 'Case Status andern',
    createTask: 'Neue Aufgabe erstellen',
    createNotification: 'Benachrichtigung erstellen',
    linkedRecords: 'Verknüpfte Datensätze:',
    subject: '- Betreff: {{value}}',
    status: '- Status: {{value}}',
    priority: '- Priorität: {{value}}',
    account: '- Account: {{value}}',
    contact: '- Kontakt: {{value}}',
    description: '- Beschreibung: {{value}}...',
    case: '- Case: {{value}}',
    newStatus: '- Neuer Status: {{value}}',
    dueDate: '- Fälligkeitsdatum: {{value}}',
    relatedTo: '- Bezug: {{value}}',
    title: '- Titel: {{value}}',
    type: '- Typ: {{value}}',
    audience: '- Zielgruppe: {{value}}',
    message: '- Nachricht: {{value}}...'
};
const PIA_PREVIEW_NOT_SPECIFIED = '(nicht angegeben)';
const escapeRegExp = (text)=>text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
function compile(prefix, templates) {
    return Object.entries(templates).map(([id, defaultValue])=>{
        const names = [];
        const source = defaultValue.split(/(\{\{\w+\}\})/).map((teil)=>{
            const name = /^\{\{(\w+)\}\}$/.exec(teil)?.[1];
            if (!name) return escapeRegExp(teil);
            names.push(name);
            return '([\\s\\S]*?)';
        }).join('');
        return {
            key: `${prefix}.${id}`,
            defaultValue,
            pattern: new RegExp(`^${source}$`),
            names
        };
    });
}
let summaryTemplates = null;
let previewTemplates = null;
function match(templates, text) {
    for (const t of templates){
        const treffer = t.pattern.exec(text);
        if (!treffer) continue;
        if (t.names.length === 0) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$i18nText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i18nText"])(t.key, t.defaultValue);
        const params = {};
        t.names.forEach((name, i)=>{
            params[name] = treffer[i + 1] ?? '';
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$i18nText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i18nText"])(t.key, t.defaultValue, params);
    }
    return null;
}
function parsePiaSummary(summary) {
    if (!summary) return null;
    summaryTemplates ??= compile(SUMMARY_KEY, PIA_SUMMARY_TEMPLATES);
    return match(summaryTemplates, summary);
}
function translatePiaSummary(tr, summary, summaryText) {
    if (summaryText) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$i18nText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveI18nText"])(tr, summaryText);
    if (!summary) return summary ?? '';
    const parsed = parsePiaSummary(summary);
    return parsed ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$i18nText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveI18nText"])(tr, parsed) : summary;
}
/** Eine Vorschau-Zeile übersetzen; Werte bleiben, unbekannte Zeilen auch. */ function translatePreviewLine(tr, line) {
    previewTemplates ??= compile(PREVIEW_KEY, PIA_PREVIEW_TEMPLATES);
    const parsed = match(previewTemplates, line);
    if (!parsed) return line;
    const value = parsed.params?.value;
    if (value === PIA_PREVIEW_NOT_SPECIFIED) {
        parsed.params = {
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$i18nText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i18nText"])(`${PREVIEW_KEY}.notSpecified`, PIA_PREVIEW_NOT_SPECIFIED)
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$i18n$2f$i18nText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveI18nText"])(tr, parsed);
}
function translatePiaPreview(tr, preview) {
    if (!preview) return preview;
    return preview.split('\n').map((line)=>translatePreviewLine(tr, line)).join('\n');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/utils/piaToolSOPs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PIA SOP (Standard Operating Procedure) Registry
 *
 * Context-aware quick-action prompts for the PIA chat assistant.
 * SOPs are pre-crafted natural-language prompts that reference tool names
 * so the LLM knows which tools to call for multi-step workflows.
 *
 * SOPs appear as clickable suggestion cards in PIA's empty state.
 * The active SOPs are determined by the current page context (entity type).
 *
 * @see docs/plans/PIA_TOOL_CALLING.md — Phase 5
 */ __turbopack_context__.s([
    "getAvailableSOPContexts",
    ()=>getAvailableSOPContexts,
    "getSOPsForContext",
    ()=>getSOPsForContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/ModalContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
;
// ---------------------------------------------------------------------------
// SOP Definitions
// ---------------------------------------------------------------------------
const PIA_TOOL_SOPS = {
    // -------------------------------------------------------------------------
    // DEFAULT — shown when no entity context is present
    // -------------------------------------------------------------------------
    DEFAULT: [
        {
            id: 'sop-default-tasks',
            label: 'Offene Aufgaben',
            description: 'Zeige meine offenen Aufgaben',
            prompt: `Zeige mir meine offenen Aufgaben:
1. Suche alle offenen Cases (searchCases, Status=New, limit=5)
2. Fasse die Ergebnisse übersichtlich zusammen: Betreff, Status, Priorität.
3. Gib eine Empfehlung, welche Aufgaben als erstes bearbeitet werden sollten.`
        },
        {
            id: 'sop-default-cases',
            label: 'Offene Cases',
            description: 'Überblick über aktuelle Cases',
            prompt: `Gib mir einen Überblick über aktuelle Cases:
1. Suche alle offenen Cases (searchCases, Status=New, limit=10)
2. Sortiere nach Priorität und erstelle eine übersichtliche Zusammenfassung.
3. Zeige für jeden Case: Betreff, Account-Name, Status und Erstelldatum.`
        },
        {
            id: 'sop-default-meeting',
            label: 'Meeting Follow-up',
            description: 'Aufgaben und Cases aus Meeting-Notizen erstellen',
            prompt: `Ich möchte aus Meeting-Notizen Aufgaben erstellen. Bitte hilf mir dabei:
1. Frage mich nach den Meeting-Notizen (Teilnehmer, besprochene Themen, offene Punkte).
2. Schlage für jeden offenen Punkt eine Aufgabe vor (createTask) mit Betreff, Beschreibung und Fälligkeitsdatum.
3. Falls ein Thema einen Case erfordert, schlage die Erstellung vor (createCase).
4. Fasse die vorgeschlagenen Aktionen zusammen und warte auf meine Bestätigung.`
        }
    ],
    // -------------------------------------------------------------------------
    // Account — shown on /account/[id]
    // -------------------------------------------------------------------------
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account]: [
        {
            id: 'sop-account-overview',
            label: 'Account-Überblick',
            description: 'Vollständiger Überblick über diesen Account',
            prompt: `Erstelle einen Überblick für diesen Account:
1. Hole die Account-Details (getAccountDetails)
2. Suche alle offenen Cases für diesen Account (searchCases, Status=New)
3. Suche die letzten 5 Bestellungen (searchOrders, limit=5)
4. Suche die Kontakte (searchContacts)
5. Fasse die Ergebnisse übersichtlich zusammen:
   - Offene Themen und Cases
   - Letzte Bestellungen und deren Status
   - Hauptansprechpartner`
        },
        {
            id: 'sop-account-activity',
            label: 'Letzte Aktivitäten',
            description: 'Kürzliche Cases und Bestellungen für diesen Account',
            prompt: `Zeige die letzten Aktivitäten für diesen Account:
1. Suche die letzten 5 Cases für diesen Account (searchCases, limit=5)
2. Suche die letzten 5 Bestellungen für diesen Account (searchOrders, limit=5)
3. Erstelle eine Zeitleiste der Aktivitäten, sortiert nach Datum.
4. Hebe offene oder kritische Punkte hervor.`
        },
        {
            id: 'sop-account-loesen',
            label: 'Mit PIA lösen',
            description: 'Beziehung analysieren und konkrete nächste Schritte vorschlagen',
            prompt: `Analysiere den aktuellen Account (ID: {{entityId}}) und schlage nächste Schritte vor:
1. Verschaffe dir in EINER Runde ein Bild: getAccountDetails, offene Cases (searchCases mit AccountId), offene Aufgaben (searchTasks mit WhatId), laufende Vorgänge (searchMaterialProposals und searchOrders mit AccountId).
2. Bestimme daraus die Lage (Beziehung, offene Punkte, Auffälligkeiten) und die vollständige Maßnahmenliste.
3. Merke die Maßnahmen direkt vor — eine Folgeaufgabe (createTask, WhatId = Account) oder einen Case für ein offenes Thema (createCase mit AccountId) — die Freigabe-Karte ist die Bestätigung.`
        },
        {
            id: 'sop-account-kommunikation',
            label: 'Kommunikation vorbereiten',
            description: 'Was fehlt am Account? Checkliste und Anfrage-Mail an den Ansprechpartner',
            prompt: `Bereite die nächste Kommunikation zum Account (ID: {{entityId}}) vor — du schlägst vor, versendet wird von Hand:
1. Stand erfassen: getAccountDetails, Kontakte (searchContacts mit AccountId) und offene Aufgaben (searchTasks mit WhatId) gemeinsam abfragen.
2. Checkliste: Was fehlt zum Zielbild (Branche, Kontaktdaten, Website, Rechnungsinformationen, Ansprechpartner, Zertifikate, Produktionsstandorte)?
3. Vorschlag, strukturiert: Adressat (Haupt-Ansprechpartner, Kanal), Thema, "Warum jetzt", Betreff, Mail-Text in der Sprache des Accounts (sachlich, Sie-Form), der genau die fehlenden Angaben abfragt, Wiedervorlage in 7 Tagen.
4. Aufgabe für die Wiedervorlage vormerken (createTask, WhatId = Account): "Rückmeldung prüfen".`
        }
    ],
    // -------------------------------------------------------------------------
    // Case — shown on /case/[id]
    // -------------------------------------------------------------------------
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Case]: [
        {
            id: 'sop-case-status',
            label: 'Fall-Status prüfen',
            description: 'Details und Status dieses Cases anzeigen',
            prompt: `Prüfe den Status dieses Cases:
1. Hole die Case-Details (getCaseDetails)
2. Fasse den aktuellen Status zusammen: Betreff, Status, Priorität, Erstellt-Datum, Zugewiesener Benutzer.
3. Wenn der Case offen ist, schlage nächste Schritte vor.
4. Wenn der Case eskaliert ist, zeige die Dringlichkeit an.`
        },
        {
            id: 'sop-case-escalate',
            label: 'Eskalation vorbereiten',
            description: 'Task für Case-Eskalation erstellen',
            prompt: `Bereite eine Eskalation für diesen Case vor:
1. Hole die Case-Details (getCaseDetails)
2. Fasse das Problem und den bisherigen Verlauf zusammen.
3. Erstelle eine Eskalations-Aufgabe (createTask) mit:
   - Betreff: "Eskalation: [Case-Betreff]"
   - Priorität: High
   - Beschreibung: Zusammenfassung des Problems und bisheriger Maßnahmen
4. Warte auf meine Bestätigung bevor die Aufgabe erstellt wird.`
        }
    ],
    // -------------------------------------------------------------------------
    // Contact — shown on /contact/[id]
    // -------------------------------------------------------------------------
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contact]: [
        {
            id: 'sop-contact-overview',
            label: 'Kontakt-Überblick',
            description: 'Details und zugehörige Daten dieses Kontakts',
            prompt: `Erstelle einen Überblick für diesen Kontakt:
1. Hole die Kontakt-Details (getContactDetails)
2. Suche offene Cases für den zugehörigen Account (searchCases)
3. Suche Bestellungen für den zugehörigen Account (searchOrders, limit=5)
4. Fasse die Ergebnisse zusammen:
   - Kontaktdaten und Rolle
   - Offene Cases beim zugehörigen Account
   - Letzte Bestellungen`
        }
    ],
    // -------------------------------------------------------------------------
    // Order — shown on /order/[id]
    // -------------------------------------------------------------------------
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order]: [
        {
            id: 'sop-order-status',
            label: 'Bestellstatus prüfen',
            description: 'Status und Details dieser Bestellung',
            prompt: `Prüfe den Status dieser Bestellung:
1. Suche die Bestelldetails (searchOrders)
2. Hole die Account-Details des zugehörigen Accounts (getAccountDetails)
3. Fasse zusammen: Bestellnummer, Status, Account, Bestelldatum.
4. Bei offenen Bestellungen: Schlage nächste Schritte vor.`
        },
        {
            id: 'sop-order-pruefen',
            label: 'Auftrag prüfen (Vollbild)',
            description: 'Positionen, Abrechnungen und Aufgaben prüfen, Lücken benennen',
            prompt: `Prüfe den Auftrag (ID: {{entityId}}) im Vollbild:
1. In EINER Runde holen: getOrderDetails, Positionen (searchOrderItems mit OrderId), Abrechnungen (searchInvoices mit AuftragId), offene Aufgaben (searchTasks mit WhatId).
2. Auftragsprodukte: Steht die Menge noch auf der 20-t-Standardliefermenge oder weicht sie von der tatsächlichen Liefermenge ab? Dann sind auch die Zielbeträge unzuverlässig — benennen.
3. Abrechnungen gegen Zielbetrag Kunde/Lieferant halten; fehlende Kernfelder (Vertrag, Kundenbestellnummer, Liefertermine, Transporteur) benennen.
4. Fasse die Lage kompakt: fehlende Kernfelder, Mengen-/Betragsauffälligkeiten, offene Aufgaben. Ein laufender Auftrag ist naturgemäß unvollständig — offene Punkte sind Arbeitsstand: dafür höchstens EINE Aufgabe (createTask, WhatId = Auftrag) mit Frist vormerken.`
        },
        {
            id: 'sop-order-kommunikation',
            label: 'Kommunikation vorbereiten',
            description: 'Bestellung, Auftragsbestätigung, Transport, Nachhaken — mit Mail-Text',
            prompt: `Bereite die nächste Kommunikation zum Auftrag (ID: {{entityId}}) vor — du schlägst vor, versendet wird von Hand:
1. Stand erfassen: getOrderDetails, Positionen (searchOrderItems mit OrderId), Ansprechpartner (searchContacts mit AccountId des Kunden) und offene Aufgaben (searchTasks mit WhatId) gemeinsam abfragen.
2. Befund je Phase: Bestellung an den Lieferanten offen? Auftragsbestätigung an den Kunden offen? Transport zu beauftragen? Bestätigung oder Liefertermin seit mehr als 3 Werktagen ausstehend → nachhaken.
3. Vorschlag, strukturiert: Adressat (Lieferant, Kunde oder Transporteur — Rolle + Person, Kanal), Thema, "Warum jetzt", Dringlichkeit, Betreff, Mail-Text in der Sprache des Kontakts (sachlich, Sie-Form, mit Auftragsnummer, Produkt, Menge und Termin), nächste Wiedervorlage. Bei zwei sinnvollen Optionen (z. B. nachhaken beim Lieferanten ODER Kunden über Verzug informieren) beide nennen, die dringendere zuerst.
4. Aufgabe für die Wiedervorlage vormerken (createTask, WhatId = Auftrag).`
        }
    ],
    // -------------------------------------------------------------------------
    // Weitere Objekte — Lese-Fassungen der Katalog-Karten (#810) und die
    // Kommunikations-Karte aus #989. {{entityId}} wird beim Klick durch die
    // Datensatz-ID der Seite ersetzt.
    // -------------------------------------------------------------------------
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contract]: [
        {
            id: 'sop-contract-auswerten',
            label: 'Vertrag prüfen & auswerten',
            description: 'Konvention und Zuordnung prüfen, Aufträge und Beträge zusammenfassen',
            prompt: `Prüfe den Vertrag (ID: {{entityId}}) und werte ihn aus:
1. Vertrag lesen (getContractDetails): Entspricht der Name der Konvention Abholort–Produkt-ID–Lieferort–Zeitraum? Ist ein Projekt zugeordnet? Lücken benennen.
2. Aufträge des Vertrags holen (searchOrders mit AccountId des Vertrags, Auftragsnummern gegen die Vertragszuordnung prüfen) und je Auftrag die Abrechnungen (searchInvoices mit AuftragId).
3. Kompakt zusammenfassen: Anzahl Aufträge, Volumen, offene Beträge — Auffälligkeiten benennen (Aufträge ohne Abrechnung).
4. Reine Auswertung — eine Aufgabe (createTask, WhatId = Vertrag) nur, wenn etwas offensichtlich fehlt. Felder in Klartext nennen, keine API-Namen.`
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Invoice]: [
        {
            id: 'sop-invoice-pruefen',
            label: 'Abrechnung prüfen',
            description: 'Menge und Beträge gegen die Auftrags-Zielwerte prüfen, Empfehlung geben',
            prompt: `Prüfe die Abrechnung (ID: {{entityId}}) gegen den Auftrag — die FREIGABE bleibt beim Menschen, du gibst eine Empfehlung:
1. Abrechnungs-Details holen (getAbrechnungDetails) und den verknüpften Auftrag (getOrderDetails) samt Positionen (searchOrderItems mit OrderId) — alle Abfragen gemeinsam absetzen, sobald die Auftrags-ID bekannt ist.
2. MENGEN-GATE ZUERST: Steht die Auftragsmenge noch auf der 20-t-Standardliefermenge oder weicht sie von der tatsächlichen Liefermenge ab? Dann warne: "Zielbeträge basieren womöglich auf der Standardmenge — erst Menge korrigieren, dann Beträge prüfen."
3. Betragsprüfung je Typ: Rechnungstyp Ausgang → Rechnungsbetrag gegen Zielbetrag Kunde. Eingang mit Kostenart Materialeinkauf → gegen Zielbetrag Lieferant. Eingang mit Transportkosten → gegen den Transporteur-Preis am Auftrag.
4. Ergebnis in Klartext: Beträge soll/ist, Zahlungsziel, Kontierung — Empfehlung "freigabefähig" oder die konkreten Abweichungen. Für die nötigen Korrekturen EINE Aufgabe vormerken (createTask, WhatId = Abrechnung) — nicht nur im Text vorschlagen.`
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Requirement]: [
        {
            id: 'sop-requirement-decken',
            label: 'Bedarf decken (Matching)',
            description: 'Spezifikation prüfen, beste Produkte finden, nächsten Schritt vorschlagen',
            prompt: `Decke den Bedarf (ID: {{entityId}}):
1. Bedarf lesen (getBedarfDetails) und Spezifikations-Lücken benennen (Materialkategorie, Hauptpolymer, Anwendung, Monatsbedarf, Zielpreis).
2. Matching: searchProducts mit den Kennwerten (Polymer, Typ, Farbe) — nenne die besten bis zu 5 Kandidaten MIT Begründung (was passt, was weicht ab); neuere Produkte (hohe Produktcodes) zuerst, Jahreskapazität gegen die angefragte Menge halten.
3. Prüfe mit searchMaterialProposals (AccountId des Bedarfs), ob es schon ein Material Proposal gibt.
4. Für den klarsten Kandidaten eine Aufgabe vormerken (createTask, WhatId = Bedarf): "Material Proposal anlegen: <Produkt> für <Kunde>" mit Wiedervorlage-Frist.`
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Product]: [
        {
            id: 'sop-product-vermarkten',
            label: 'Produkt vermarkten',
            description: 'Stammdaten prüfen, passende Bedarfe finden, Angebot anstoßen',
            prompt: `Vermarkte das Produkt (ID: {{entityId}}):
1. Produkt lesen (getProductDetails) und Stammdaten prüfen: Produktcode, Hauptpolymer, Materialtyp, Farbkategorie, Preis, Menge — Lücken benennen.
2. Passende Bedarfe suchen (searchRequirements mit dem Polymer/Materialtyp als Suchtext) und die besten Treffer MIT Begründung nennen (Anwendung, Menge, Zielpreis vs. unser Preis).
3. Für den klarsten Treffer eine Aufgabe vormerken (createTask, WhatId = Produkt): "Material Proposal anlegen für <Bedarf/Kunde>" mit den Eckdaten für die Angebots-Mail im Text.`
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal]: [
        {
            id: 'sop-mp-pflegen',
            label: 'MP pflegen',
            description: 'Status und Kernfelder prüfen, Lücken benennen',
            prompt: `Pflege das Material Proposal (ID: {{entityId}}) auf sein Zielbild:
1. Details holen (getMaterialProposalDetails) und vorhandene Bemusterungen (searchSampleSendings mit ProduktId des MP) gemeinsam abfragen. ZUERST der Status: Passt er zum tatsächlichen Stand des Vorgangs?
2. Verknüpfungen prüfen: Supplier, Account, Produkt, Bedarf, Ansprechpartner — fehlende benennen.
3. Kernfelder prüfen: EK/VK und Marge, Incoterm, Mindestmenge, Gültigkeit/Wiedervorlage.
4. Kurz zusammenfassen: was ist belastbar, was fehlt noch bis zur Angebotsreife — und für die Lücken EINE Aufgabe (createTask, WhatId = MP) mit Frist vormerken, wer was liefern muss.`
        },
        {
            id: 'sop-mp-kommunikation',
            label: 'Kommunikation vorbereiten',
            description: 'Wen kontaktiere ich wozu? Nachhaken, Feedback einholen, Zusage — mit Mail-Text',
            prompt: `Bereite die nächste Kommunikation zum Material Proposal (ID: {{entityId}}) vor — du schlägst vor, versendet wird von Hand:
1. Stand erfassen: getMaterialProposalDetails, Ansprechpartner (searchContacts mit AccountId), Bemusterungen (searchSampleSendings mit ProduktId) und offene Aufgaben (searchTasks mit WhatId) gemeinsam abfragen.
2. Befund: Was steht aus — Rückmeldung zum Angebot (letzter Kontakt älter als 14 Tage?), Feedback zur Bemusterung, Zusage-Kommunikation?
3. Vorschlag, strukturiert: Adressat (Rolle + Person, Kanal), Thema, "Warum jetzt" (konkreter Befund), Dringlichkeit, Betreff, Mail-Text in der Sprache des Kontakts (sachlich, Sie-Form, mit MP-Bezeichnung und Eckdaten), nächste Wiedervorlage.
4. Aufgabe für die Wiedervorlage vormerken (createTask, WhatId = MP, Fälligkeit = Wiedervorlage).`
        }
    ],
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending]: [
        {
            id: 'sop-samplesending-fuehren',
            label: 'Bemusterung führen',
            description: 'Stand prüfen, Statuskette und nächsten Schritt benennen',
            prompt: `Führe die Bemusterung (ID: {{entityId}}) weiter:
1. Sending lesen (getSampleSendingDetails) und das zugehörige Material Proposal suchen (searchMaterialProposals mit AccountId des Sendings) — das MP ist die Quelle für fehlende Angaben (Menge, Produkt, Kontakt Anlieferung, Carrier).
2. Lücken im Sending benennen, die aus dem MP füllbar wären; was weder im Sending noch im MP steht, beim Nutzer erfragen — nie raten.
3. Statuskette prüfen (Draft → Ready → Ordered → Sent → Received) und den nächsten fälligen Schritt benennen.
4. Aufgabe für den nächsten realen Handgriff vormerken (createTask, WhatId = Sending): Versand, Tracking, Wareneingang oder "Feedback erfragen und am MP dokumentieren".`
        },
        {
            id: 'sop-samplesending-kommunikation',
            label: 'Kommunikation vorbereiten',
            description: 'Versandbestätigung, Feedback nachhaken, Tracking — mit Mail-Text',
            prompt: `Bereite die nächste Kommunikation zur Bemusterung (ID: {{entityId}}) vor — du schlägst vor, versendet wird von Hand:
1. Stand erfassen: getSampleSendingDetails, Ansprechpartner (searchContacts mit AccountId) und offene Aufgaben (searchTasks mit WhatId) gemeinsam abfragen.
2. Befund: Versendet ohne Bestätigung? Versand älter als 14 Tage ohne Feedback? Tracking offen?
3. Vorschlag, strukturiert: Adressat (Empfänger des Musters bzw. Versender, Kanal), Thema, "Warum jetzt", Dringlichkeit, Betreff, Mail-Text in der Sprache des Kontakts (sachlich, Sie-Form, mit Musterbezeichnung, Versanddatum und konkreter Bitte), nächste Wiedervorlage.
4. Aufgabe für die Wiedervorlage vormerken (createTask, WhatId = Sending).`
        }
    ]
};
function getSOPsForContext(entityType) {
    if (!entityType) return PIA_TOOL_SOPS['DEFAULT'] || [];
    return PIA_TOOL_SOPS[entityType] || PIA_TOOL_SOPS['DEFAULT'] || [];
}
function getAvailableSOPContexts() {
    return Object.keys(PIA_TOOL_SOPS);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/utils/salesforceErrorText.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1636: Texte der Salesforce-Ablehnungen in der Sprache des Nutzers.
 *
 * Der Server kennt die Sprache des Nutzers nicht. Er schickt deshalb neben der
 * deutschen `message` (Logs, ältere Clients) eine strukturierte Beschreibung
 * (`salesforce`: Fehlercode, Feld-API-Namen, Feld-Labels der Entity-Config,
 * Objekt). Daraus setzt der Client die Meldung mit seinem `tr` neu zusammen —
 * und der Server mit einem `tr`, das nur den deutschen `defaultValue` füllt.
 * So gibt es jeden Satz genau einmal.
 *
 * Reine Funktionen ohne Server-Abhängigkeiten: wird von `salesforceErrors.ts`
 * (Server) und `lib/axios.ts` (Client) genutzt.
 *
 * Nicht übersetzbar: Texte, die Salesforce selbst liefert (Validierungsregeln,
 * Apex addError, Trigger-Meldungen, Details wie bei MALFORMED_ID) — sie sind in
 * der Org geschrieben und gehen unverändert durch.
 */ /** Signatur von `tr`, auf das Nötige reduziert. */ __turbopack_context__.s([
    "SALESFORCE_ERROR_TEXTS",
    ()=>SALESFORCE_ERROR_TEXTS,
    "defaultValueTr",
    ()=>defaultValueTr,
    "identityEntityText",
    ()=>identityEntityText,
    "isSalesforceRejection",
    ()=>isSalesforceRejection,
    "salesforceErrorTextId",
    ()=>salesforceErrorTextId,
    "salesforceRejectedTitle",
    ()=>salesforceRejectedTitle,
    "translateSalesforceError",
    ()=>translateSalesforceError,
    "translateSalesforceRejection",
    ()=>translateSalesforceRejection
]);
const SALESFORCE_ERROR_TEXTS = {
    fieldLabel: {
        key: 'salesforceErrors.fieldLabel',
        de: '„{{label}}"'
    },
    requiredFieldMissing: {
        key: 'salesforceErrors.requiredFieldMissing',
        de: 'Pflichtfeld fehlt: {{fields}}.'
    },
    requiredFieldMissingGeneric: {
        key: 'salesforceErrors.requiredFieldMissingGeneric',
        de: 'Ein Pflichtfeld fehlt.'
    },
    lookupFilter: {
        key: 'salesforceErrors.lookupFilter',
        de: '{{fields}}: Der gewählte Wert erfüllt die Auswahlkriterien nicht (Lookup-Filter in Salesforce).'
    },
    lookupFilterGeneric: {
        key: 'salesforceErrors.lookupFilterGeneric',
        de: 'Ein gewählter Wert erfüllt die Auswahlkriterien nicht (Lookup-Filter in Salesforce).'
    },
    readOnlyField: {
        key: 'salesforceErrors.readOnlyField',
        de: '{{fields}} kann an diesem Datensatz nicht (mehr) geändert werden — in Salesforce schreibgeschützt (Formel/Rollup, feste Verknüpfung oder nach Aktivierung gesperrt).'
    },
    readOnlyFieldGeneric: {
        key: 'salesforceErrors.readOnlyFieldGeneric',
        de: 'Ein Feld ist in Salesforce schreibgeschützt und kann nicht geändert werden.'
    },
    malformedId: {
        key: 'salesforceErrors.malformedId',
        de: '{{fields}}: Der Wert ist kein gültiger Datensatzbezug ({{detail}}).'
    },
    malformedIdGeneric: {
        key: 'salesforceErrors.malformedIdGeneric',
        de: 'Ungültiger Datensatzbezug: {{detail}}'
    },
    restrictedPicklist: {
        key: 'salesforceErrors.restrictedPicklist',
        de: '{{fields}}: Der Wert ist in der Auswahlliste nicht zulässig.'
    },
    restrictedPicklistGeneric: {
        key: 'salesforceErrors.restrictedPicklistGeneric',
        de: 'Ein Wert ist in der Auswahlliste nicht zulässig.'
    },
    stringTooLong: {
        key: 'salesforceErrors.stringTooLong',
        de: '{{fields}}: Der Text ist zu lang.'
    },
    stringTooLongGeneric: {
        key: 'salesforceErrors.stringTooLongGeneric',
        de: 'Ein Text ist zu lang.'
    },
    duplicateValue: {
        key: 'salesforceErrors.duplicateValue',
        de: 'Doppelter Wert: {{detail}}'
    },
    entityLocked: {
        key: 'salesforceErrors.entityLocked',
        de: 'Der Datensatz ist in Salesforce gesperrt (z. B. laufender Genehmigungsprozess).'
    },
    insufficientAccess: {
        key: 'salesforceErrors.insufficientAccess',
        de: 'Keine Schreibberechtigung in Salesforce: {{detail}}'
    },
    notFound: {
        key: 'salesforceErrors.notFound',
        de: 'Der Datensatz wurde in Salesforce nicht gefunden.'
    },
    withFields: {
        key: 'salesforceErrors.withFields',
        de: '{{fields}}: {{detail}}'
    },
    rejected: {
        key: 'salesforceErrors.rejected',
        de: 'Salesforce hat die Änderung abgelehnt'
    }
};
/** Satz je SF-Fehlercode: [mit Feldern, ohne Felder]. `null` = SF-Text durchreichen. */ const CODE_TEXTS = {
    REQUIRED_FIELD_MISSING: [
        'requiredFieldMissing',
        'requiredFieldMissingGeneric'
    ],
    // Validierungsregel oder Apex addError: der Text ist vom Admin für den
    // Nutzer geschrieben — unverändert durchreichen (in der Org, nicht im Code).
    FIELD_CUSTOM_VALIDATION_EXCEPTION: null,
    // #917: SF nennt das Feld nur in fields[], die message ist generisch.
    FIELD_FILTER_VALIDATION_EXCEPTION: [
        'lookupFilter',
        'lookupFilterGeneric'
    ],
    // #349/#326: Master-Detail ohne Reparenting, Formel/Rollup, nach
    // Aktivierung gesperrte Felder (z. B. ContractId am aktivierten Auftrag).
    INVALID_FIELD_FOR_INSERT_UPDATE: [
        'readOnlyField',
        'readOnlyFieldGeneric'
    ],
    MALFORMED_ID: [
        'malformedId',
        'malformedIdGeneric'
    ],
    INVALID_OR_NULL_FOR_RESTRICTED_PICKLIST: [
        'restrictedPicklist',
        'restrictedPicklistGeneric'
    ],
    STRING_TOO_LONG: [
        'stringTooLong',
        'stringTooLongGeneric'
    ],
    DUPLICATE_VALUE: [
        'duplicateValue',
        'duplicateValue'
    ],
    DUPLICATES_DETECTED: [
        'duplicateValue',
        'duplicateValue'
    ],
    ENTITY_IS_LOCKED: [
        'entityLocked',
        'entityLocked'
    ],
    INSUFFICIENT_ACCESS_OR_READONLY: [
        'insufficientAccess',
        'insufficientAccess'
    ],
    INSUFFICIENT_ACCESS_ON_CROSS_REFERENCE_ENTITY: [
        'insufficientAccess',
        'insufficientAccess'
    ],
    NOT_FOUND: [
        'notFound',
        'notFound'
    ]
};
function salesforceErrorTextId(error) {
    const hasFields = (error.fields?.length ?? 0) > 0;
    const texts = CODE_TEXTS[error.errorCode];
    if (texts === null) return null;
    if (texts === undefined) return hasFields ? 'withFields' : null;
    return hasFields ? texts[0] : texts[1];
}
const text = (tr, id, values = {})=>tr(SALESFORCE_ERROR_TEXTS[id].key, {
        defaultValue: SALESFORCE_ERROR_TEXTS[id].de,
        ...values
    });
/** Felder als Liste übersetzter Labels in Anführungszeichen. */ function fieldList(tr, entityText, error) {
    return (error.fields ?? []).map((apiName, i)=>text(tr, 'fieldLabel', {
            label: entityText.text(error.fieldLabels?.[i] ?? apiName)
        })).join(', ');
}
function translateSalesforceError(tr, entityText, error) {
    const id = salesforceErrorTextId(error);
    if (!id) return error.message;
    // #1184: Eine im Nachschlagefilter hinterlegte Fehlermeldung (Salesforce,
    // Feld „Fehlermeldung" am Filter) ist der bessere Satz — nur Salesforce'
    // Standardtext wird durch den eigenen ersetzt.
    if (error.errorCode === 'FIELD_FILTER_VALIDATION_EXCEPTION' && !istStandardFilterText(error.message)) {
        const fields = fieldList(tr, entityText, error);
        return fields ? `${fields}: ${error.message}` : error.message;
    }
    return text(tr, id, {
        fields: fieldList(tr, entityText, error),
        detail: error.message
    });
}
/** Salesforce-Standardtexte des Nachschlagefilters (de/en), ohne eigene Meldung. */ const STANDARD_FILTER_TEXTE = [
    'value does not exist or does not match filter criteria',
    'wert ist nicht vorhanden oder entspricht nicht den filterkriterien',
    'wert ist nicht vorhanden'
];
function istStandardFilterText(message) {
    const m = (message ?? '').trim().toLowerCase().replace(/\.$/, '');
    return m === '' || STANDARD_FILTER_TEXTE.some((s)=>m.startsWith(s));
}
function translateSalesforceRejection(tr, entityText, rejection) {
    if (rejection.status === 404) return text(tr, 'notFound');
    const messages = rejection.errors.map((e)=>translateSalesforceError(tr, entityText, e)).filter(Boolean);
    return messages.length > 0 ? messages.join(' ') : rejection.fallbackMessage ?? '';
}
const salesforceRejectedTitle = (tr)=>text(tr, 'rejected');
const defaultValueTr = (key, options)=>{
    let result = options?.defaultValue ?? key;
    for (const [name, value] of Object.entries(options ?? {})){
        if (name === 'defaultValue' || value === undefined) continue;
        result = result.replace(new RegExp(`\\{\\{${name}\\}\\}`, 'g'), ()=>String(value));
    }
    return result;
};
const identityEntityText = {
    text: (label)=>label
};
function isSalesforceRejection(value) {
    if (!value || typeof value !== 'object') return false;
    const v = value;
    return typeof v.status === 'number' && Array.isArray(v.errors) && v.errors.every((e)=>!!e && typeof e === 'object' && typeof e.errorCode === 'string' && typeof e.message === 'string');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Organism/PiaChat/index.ts [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Organism/PiaChat/index.ts [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_app_12ts5zh--ycov._.js.map