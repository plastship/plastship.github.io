(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
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
"[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MarkdownRenderer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MarkdownRenderer"],
    "MarkdownRendererMode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownRendererMode"],
    "default",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.styles.ts [app-client] (ecmascript)");
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
"[project]/apps/web/src/lib/markdown/rehypeExternalLinks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "rehypeExternalLinks",
    ()=>rehypeExternalLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/url/externalLink.ts [app-client] (ecmascript)");
;
/**
 * #2158: Externe Links im Markdown — neuer Tab, `rel="noopener noreferrer"`
 * (vorhandene Werte bleiben), `referrerpolicy="no-referrer"`. Erkennung
 * zentral über `isExternalHref` (lib/url/externalLink.ts); `mailto:`, `tel:`
 * und eigene Seiten bleiben, wie sie sind.
 *
 * Hängt in jeder Markdown-Pipeline der Web-Oberfläche: Fließtext der
 * öffentlichen Seiten (SiteMarkdownContent: CMS, News, Partner) und der
 * App-Renderer (MarkdownRenderer: Wiki, Pia, Felder). Deren `a`-Komponenten
 * rechnen dieselben Attribute über die Link-Atome noch einmal — das Plugin
 * gilt auch für jeden Weg ohne eigene `a`-Komponente.
 */ const isElement = (node)=>node.type === 'element';
/** `rel` aus hast (Liste oder Text) als Liste */ const relListe = (wert)=>{
    if (Array.isArray(wert)) return wert.map(String);
    if (typeof wert === 'string') return wert.split(/\s+/).filter(Boolean);
    return [];
};
function rehypeExternalLinks() {
    return (tree)=>{
        const visit = (nodes)=>{
            for (const node of nodes){
                if (!isElement(node)) continue;
                if (node.tagName === 'a') {
                    const href = node.properties['href'];
                    if (typeof href === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExternalHref"])(href)) {
                        const rel = relListe(node.properties['rel']);
                        for (const noetig of __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NO_REFERRER_REL"].split(' ')){
                            if (!rel.some((r)=>r.toLowerCase() === noetig)) rel.push(noetig);
                        }
                        node.properties['rel'] = rel;
                        node.properties['target'] = '_blank';
                        node.properties['referrerPolicy'] = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$url$2f$externalLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NO_REFERRER_POLICY"];
                    }
                }
                visit(node.children);
            }
        };
        visit(tree.children);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_19jo3_cdzsctp._.js.map