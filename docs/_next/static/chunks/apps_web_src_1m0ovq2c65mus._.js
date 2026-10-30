(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/components/Atom/Badge/Badge.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "Badge.styles__Root",
    componentId: "sc-88b77c61-0"
})`
  position: absolute;
  top: -4px;
  right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 ${(props)=>props.$isLarge ? '5px' : '0'};
  border-radius: 9px;
  background-color: ${({ theme })=>theme.palette.default.error};
  color: ${({ theme })=>theme.palette.default.white};
  font-family: ${(props)=>props.theme.font.secondaryFamily};
  font-size: 11px;
  font-weight: bold;
  line-height: 1;
  pointer-events: none;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Badge/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Badge$2f$Badge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Badge/Badge.styles.ts [app-client] (ecmascript)");
;
;
const Badge = ({ count, maxCount = 99, dataTestId = 'badge-root', className })=>{
    if (count <= 0) return null;
    const displayCount = count > maxCount ? `${maxCount}+` : String(count);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Badge$2f$Badge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        $isLarge: displayCount.length > 2,
        children: displayCount
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Badge/Badge.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Badge/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Badge/Badge.tsx [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"];
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
"[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.styles.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClearButton",
    ()=>ClearButton,
    "DropdownList",
    ()=>DropdownList,
    "InputWrapper",
    ()=>InputWrapper,
    "LoadingIndicator",
    ()=>LoadingIndicator,
    "Root",
    ()=>Root,
    "SearchIconWrapper",
    ()=>SearchIconWrapper,
    "StyledInput",
    ()=>StyledInput
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/inputStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/dropdownStyles.ts [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputSearch.styles__Root",
    componentId: "sc-cc666282-0"
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: ${(props)=>props.$noMargin ? '0' : props.theme.margin.default};
  position: relative;

  ${(props)=>props.$variant === 'compact' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      margin-bottom: 0;
    `}
`;
const InputWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputSearch.styles__InputWrapper",
    componentId: "sc-cc666282-1"
})`
  position: relative;
  display: flex;
  align-items: center;
  z-index: 1;

  ${(props)=>props.$variant === 'overlay' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      flex: 1;
    `}
`;
const SearchIconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "InputSearch.styles__SearchIconWrapper",
    componentId: "sc-cc666282-2"
})`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  z-index: 1;
  background: none;
  border: none;
  padding: 0.25rem;
  margin: 0;
  cursor: pointer;
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  ${(props)=>props.$variant === 'compact' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      left: 0.5rem;
      svg {
        width: 0.875rem;
        height: 0.875rem;
      }
    `}

  ${(props)=>props.$variant === 'overlay' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      left: 1rem;
      svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    `}
`;
const StyledInput = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "InputSearch.styles__StyledInput",
    componentId: "sc-cc666282-3"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputBase"])()}
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  ${(props)=>props.$variant === 'compact' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      padding: 0.375rem 2rem 0.375rem 2rem;
      font-size: 0.8125rem;
      /* the legacy InputStyles mixin set the body line-height underneath —
         re-assert it so the Header search keeps its exact height */
      line-height: ${props.theme.font.text.body.mobile.lineHeight};
      min-width: 180px;

      @media (min-width: 768px) {
        min-width: 240px;
      }
    `}

  ${(props)=>props.$variant === 'overlay' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      padding: 1rem 3rem 1rem 3rem;
      font-size: 1.125rem;
      /* see compact: preserve the legacy mixin line-height for exact height */
      line-height: ${props.theme.font.text.body.mobile.lineHeight};
      border-radius: ${props.theme.borderRadius.box};
    `}
`;
const LoadingIndicator = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "InputSearch.styles__LoadingIndicator",
    componentId: "sc-cc666282-4"
})`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);

  ${(props)=>props.$variant === 'compact' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      right: 0.5rem;
    `}

  ${(props)=>props.$variant === 'overlay' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      right: 1rem;
    `}
`;
const ClearButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "InputSearch.styles__ClearButton",
    componentId: "sc-cc666282-5"
})`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  opacity: 0.5;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 1rem;
    height: 1rem;
  }

  ${(props)=>props.$variant === 'compact' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      right: 0.5rem;
      svg {
        width: 0.875rem;
        height: 0.875rem;
      }
    `}

  ${(props)=>props.$variant === 'overlay' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      right: 1rem;
      svg {
        width: 1.25rem;
        height: 1.25rem;
      }
    `}
`;
const DropdownList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownList"]).withConfig({
    displayName: "InputSearch.styles__DropdownList",
    componentId: "sc-cc666282-6"
})`
  ${(props)=>props.$variant === 'overlay' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      border-radius: ${props.theme.borderRadius.box};
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    `}
`;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InputSearch",
    ()=>InputSearch,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.styles.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/dropdownStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSearch/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconClose/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HighlightedText$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HighlightedText/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HighlightedText$2f$HighlightedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HighlightedText/HighlightedText.tsx [app-client] (ecmascript)");
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
function InputSearch({ placeholder, value: controlledValue, defaultValue = '', onChange, onSearch, onSubmit, onClear, suggestions = [], onSuggestionSelect, loadingSuggestions = false, highlightMatches = false, minChars = 2, noResultsText, disabled = false, variant = 'default', showSubmitButton = false, showClearButton = true, autoFocus = false, noMargin = false, dataTestId, entityType }) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const resolvedPlaceholder = placeholder ?? tr('form.inputSearch.placeholder', {
        defaultValue: 'Suchen...'
    });
    const resolvedNoResultsText = noResultsText ?? tr('form.inputSearch.noResults', {
        defaultValue: 'Keine Ergebnisse gefunden'
    });
    const searchActionLabel = tr('form.inputSearch.search', {
        defaultValue: 'Suchen'
    });
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue);
    const inputValue = isControlled ? controlledValue : internalValue;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(-1);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isFocusedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // Auto focus with delay to ensure element is rendered
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputSearch.useEffect": ()=>{
            if (!autoFocus || !inputRef.current) return;
            // Small delay to ensure overlay animation has started
            const timer = setTimeout({
                "InputSearch.useEffect.timer": ()=>{
                    inputRef.current?.focus();
                }
            }["InputSearch.useEffect.timer"], 50);
            return ({
                "InputSearch.useEffect": ()=>clearTimeout(timer)
            })["InputSearch.useEffect"];
        }
    }["InputSearch.useEffect"], [
        autoFocus
    ]);
    // Open dropdown when suggestions arrive while focused
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputSearch.useEffect": ()=>{
            if (isFocusedRef.current && suggestions.length > 0) {
                setIsOpen(true);
            }
        }
    }["InputSearch.useEffect"], [
        suggestions
    ]);
    // Filter suggestions by entityType if provided
    const filteredSuggestions = entityType ? suggestions.filter((s)=>s.entityType === entityType) : suggestions;
    const updateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputSearch.useCallback[updateValue]": (newValue)=>{
            if (!isControlled) {
                setInternalValue(newValue);
            }
            onChange?.(newValue);
        }
    }["InputSearch.useCallback[updateValue]"], [
        isControlled,
        onChange
    ]);
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputSearch.useCallback[handleInputChange]": (e)=>{
            const newValue = e.target.value;
            updateValue(newValue);
            setActiveIndex(-1);
            if (newValue.length >= minChars) {
                setIsOpen(true);
                onSearch?.(newValue);
            } else {
                setIsOpen(false);
            }
        }
    }["InputSearch.useCallback[handleInputChange]"], [
        minChars,
        onSearch,
        updateValue
    ]);
    const handleSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputSearch.useCallback[handleSelect]": (suggestion)=>{
            updateValue(suggestion.label);
            setIsOpen(false);
            setActiveIndex(-1);
            onSuggestionSelect?.(suggestion);
        }
    }["InputSearch.useCallback[handleSelect]"], [
        onSuggestionSelect,
        updateValue
    ]);
    const handleSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputSearch.useCallback[handleSubmit]": ()=>{
            if (inputValue.trim().length >= minChars) {
                setIsOpen(false);
                onSubmit?.(inputValue.trim());
            }
        }
    }["InputSearch.useCallback[handleSubmit]"], [
        inputValue,
        minChars,
        onSubmit
    ]);
    const handleClear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputSearch.useCallback[handleClear]": ()=>{
            updateValue('');
            setIsOpen(false);
            setActiveIndex(-1);
            onClear?.();
            inputRef.current?.focus();
        }
    }["InputSearch.useCallback[handleClear]"], [
        onClear,
        updateValue
    ]);
    const handleFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputSearch.useCallback[handleFocus]": ()=>{
            isFocusedRef.current = true;
            if (filteredSuggestions.length > 0) {
                setIsOpen(true);
            }
        }
    }["InputSearch.useCallback[handleFocus]"], [
        filteredSuggestions.length
    ]);
    const handleBlur = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputSearch.useCallback[handleBlur]": ()=>{
            isFocusedRef.current = false;
            // Delay closing to allow click on dropdown item
            setTimeout({
                "InputSearch.useCallback[handleBlur]": ()=>setIsOpen(false)
            }["InputSearch.useCallback[handleBlur]"], 200);
        }
    }["InputSearch.useCallback[handleBlur]"], []);
    const handleKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "InputSearch.useCallback[handleKeyDown]": (e)=>{
            if (e.key === 'Enter') {
                e.preventDefault();
                if (activeIndex >= 0 && activeIndex < filteredSuggestions.length) {
                    handleSelect(filteredSuggestions[activeIndex]);
                } else {
                    handleSubmit();
                }
                return;
            }
            if (e.key === 'Escape') {
                e.preventDefault();
                setIsOpen(false);
                setActiveIndex(-1);
                return;
            }
            if (!isOpen) {
                if (e.key === 'ArrowDown' && filteredSuggestions.length > 0) {
                    setIsOpen(true);
                    setActiveIndex(0);
                    e.preventDefault();
                }
                return;
            }
            switch(e.key){
                case 'ArrowDown':
                    e.preventDefault();
                    setActiveIndex({
                        "InputSearch.useCallback[handleKeyDown]": (prev)=>prev < filteredSuggestions.length - 1 ? prev + 1 : prev
                    }["InputSearch.useCallback[handleKeyDown]"]);
                    break;
                case 'ArrowUp':
                    e.preventDefault();
                    setActiveIndex({
                        "InputSearch.useCallback[handleKeyDown]": (prev)=>prev > 0 ? prev - 1 : 0
                    }["InputSearch.useCallback[handleKeyDown]"]);
                    break;
            }
        }
    }["InputSearch.useCallback[handleKeyDown]"], [
        isOpen,
        filteredSuggestions,
        activeIndex,
        handleSelect,
        handleSubmit
    ]);
    // Scroll active item into view
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InputSearch.useEffect": ()=>{
            if (activeIndex >= 0 && listRef.current) {
                const activeItem = listRef.current.children[activeIndex];
                if (activeItem) {
                    activeItem.scrollIntoView({
                        block: 'nearest'
                    });
                }
            }
        }
    }["InputSearch.useEffect"], [
        activeIndex
    ]);
    // Only show dropdown/no-results if suggestion functionality is being used (onSearch or onSuggestionSelect provided)
    const usesSuggestions = Boolean(onSearch || onSuggestionSelect);
    const showDropdown = isOpen && !disabled && usesSuggestions && (filteredSuggestions.length > 0 || inputValue.length >= minChars);
    const showNoResults = isOpen && !disabled && usesSuggestions && !loadingSuggestions && filteredSuggestions.length === 0 && inputValue.length >= minChars;
    const hasValue = inputValue.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Root"], {
        $noMargin: noMargin,
        $variant: variant,
        "data-testid": dataTestId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["InputWrapper"], {
            $variant: variant,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SearchIconWrapper"], {
                    type: "button",
                    $variant: variant,
                    onClick: handleSubmit,
                    disabled: disabled || inputValue.length < minChars,
                    "aria-label": searchActionLabel,
                    "data-testid": dataTestId ? `${dataTestId}-search-btn` : undefined,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["StyledInput"], {
                    ref: inputRef,
                    type: "text",
                    value: inputValue,
                    onChange: handleInputChange,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    onKeyDown: handleKeyDown,
                    placeholder: resolvedPlaceholder,
                    disabled: disabled,
                    $variant: variant,
                    $hasValue: hasValue,
                    autoComplete: "off",
                    "aria-autocomplete": "list",
                    "aria-expanded": showDropdown,
                    "data-testid": dataTestId ? `${dataTestId}-input` : undefined
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                    lineNumber: 268,
                    columnNumber: 9
                }, this),
                loadingSuggestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LoadingIndicator"], {
                    $variant: variant,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
                        size: "small"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                        lineNumber: 288,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                    lineNumber: 287,
                    columnNumber: 11
                }, this),
                showClearButton && hasValue && !loadingSuggestions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClearButton"], {
                    type: "button",
                    onClick: handleClear,
                    $variant: variant,
                    "data-testid": dataTestId ? `${dataTestId}-clear` : undefined,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                        lineNumber: 299,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                    lineNumber: 293,
                    columnNumber: 11
                }, this),
                showSubmitButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSearch$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                        lineNumber: 305,
                        columnNumber: 19
                    }, this),
                    onClick: handleSubmit,
                    isDisabled: disabled || inputValue.length < minChars,
                    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].primary,
                    tooltip: searchActionLabel,
                    ariaLabel: searchActionLabel,
                    dataTestId: dataTestId ? `${dataTestId}-submit` : undefined
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                    lineNumber: 304,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["DropdownList"], {
                    ref: listRef,
                    $visible: showDropdown && (filteredSuggestions.length > 0 || showNoResults),
                    $variant: variant,
                    role: "listbox",
                    "data-testid": dataTestId ? `${dataTestId}-dropdown` : undefined,
                    children: showNoResults ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoResults"], {
                        children: resolvedNoResultsText
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                        lineNumber: 323,
                        columnNumber: 13
                    }, this) : filteredSuggestions.map((suggestion, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownItem"], {
                            $active: index === activeIndex,
                            role: "option",
                            "aria-selected": index === activeIndex,
                            onMouseDown: ()=>handleSelect(suggestion),
                            onMouseEnter: ()=>setActiveIndex(index),
                            "data-testid": dataTestId ? `${dataTestId}-option-${index}` : undefined,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownItemPrimary"], {
                                    children: highlightMatches ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HighlightedText$2f$HighlightedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightedText"], {
                                        text: suggestion.label,
                                        term: inputValue,
                                        dataTestId: dataTestId ? `${dataTestId}-option-${index}-label` : undefined
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                                        lineNumber: 337,
                                        columnNumber: 21
                                    }, this) : suggestion.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                                    lineNumber: 335,
                                    columnNumber: 17
                                }, this),
                                suggestion.secondaryLabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownItemSecondary"], {
                                    children: highlightMatches ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HighlightedText$2f$HighlightedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightedText"], {
                                        text: suggestion.secondaryLabel,
                                        term: inputValue
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                                        lineNumber: 349,
                                        columnNumber: 23
                                    }, this) : suggestion.secondaryLabel
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                                    lineNumber: 347,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, suggestion.value, true, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                            lineNumber: 326,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
            lineNumber: 256,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx",
        lineNumber: 255,
        columnNumber: 5
    }, this);
}
_s(InputSearch, "CXjqD+xzDF6G1w0PLNxU1q3Sn6c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"]
    ];
});
_c = InputSearch;
const __TURBOPACK__default__export__ = InputSearch;
var _c;
__turbopack_context__.k.register(_c, "InputSearch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/InputSearch/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSearch"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/shared/adornment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdornedInputWrapper",
    ()=>AdornedInputWrapper,
    "InputAdornment",
    ()=>InputAdornment,
    "adornedInputPadding",
    ()=>adornedInputPadding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const AdornedInputWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "adornment__AdornedInputWrapper",
    componentId: "sc-cf83c0e4-0"
})`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;
const InputAdornment = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "adornment__InputAdornment",
    componentId: "sc-cf83c0e4-1"
})`
  position: absolute;
  ${({ $position })=>$position === 'start' ? 'left' : 'right'}: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.9rem;
  color: ${({ theme })=>theme.palette.default.greyDark};
  font-weight: 500;
  pointer-events: none;
`;
const adornedInputPadding = '1.75rem';
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/shared/dropdownStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownItem",
    ()=>DropdownItem,
    "DropdownItemPrimary",
    ()=>DropdownItemPrimary,
    "DropdownItemSecondary",
    ()=>DropdownItemSecondary,
    "DropdownList",
    ()=>DropdownList,
    "NoResults",
    ()=>NoResults,
    "dropdownItemStyles",
    ()=>dropdownItemStyles,
    "dropdownListStyles",
    ()=>dropdownListStyles,
    "noResultsStyles",
    ()=>noResultsStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
const dropdownListStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].popover};
  max-height: 18.75rem;
  overflow-y: auto;
  margin: 0.25rem 0 0 0;
  padding: 0;
  background: ${({ theme })=>theme.palette.default.white};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  outline: 1px solid ${({ theme })=>theme.palette.default.grey};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  list-style: none;
`;
const dropdownItemStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  cursor: pointer;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.5rem;
  transition: all 200ms ease-in-out;
  border-bottom: 1px solid ${({ theme })=>theme.palette.default.greyLight};

  &:last-child {
    border-bottom: none;
  }
`;
const DropdownList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "dropdownStyles__DropdownList",
    componentId: "sc-9bb914e4-0"
})`
  ${dropdownListStyles}
  display: ${({ $visible })=>$visible === false ? 'none' : 'block'};
`;
const DropdownItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "dropdownStyles__DropdownItem",
    componentId: "sc-9bb914e4-1"
})`
  ${dropdownItemStyles}
  color: ${({ $active, theme })=>$active ? theme.palette.default.white : theme.palette.default.black};
  background: ${({ $active, theme })=>$active ? theme.palette.default.primary : theme.palette.default.white};

  &:hover {
    color: ${({ theme })=>theme.palette.default.black};
    background: ${({ theme })=>theme.palette.default.greyLight};
  }
`;
const DropdownItemPrimary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "dropdownStyles__DropdownItemPrimary",
    componentId: "sc-9bb914e4-2"
})`
  font-weight: 500;
  color: inherit;
`;
const DropdownItemSecondary = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "dropdownStyles__DropdownItemSecondary",
    componentId: "sc-9bb914e4-3"
})`
  font-size: 0.75rem;
  color: ${({ theme })=>theme.palette.default.greyDark};
  margin-top: 0.125rem;
`;
const noResultsStyles = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  padding: 0.75rem;
  color: ${({ theme })=>theme.palette.default.greyDark};
  font-size: 0.875rem;
  text-align: center;
`;
const NoResults = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "dropdownStyles__NoResults",
    componentId: "sc-9bb914e4-4"
})`
  ${noResultsStyles}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/shared/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$inputStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/inputStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$dropdownStyles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/dropdownStyles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$shared$2f$adornment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/shared/adornment.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Form/shared/inputStyles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "focusRing",
    ()=>focusRing,
    "inputBase",
    ()=>inputBase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const focusRing = (error)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  border-color: ${({ theme })=>error ? theme.palette.default.error : theme.palette.default.primary};
  box-shadow: 0 0 0 0.2rem
    ${({ theme })=>(error ? theme.palette.default.error : theme.palette.default.primary) + '40'};
`;
const inputBase = (opts)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  box-sizing: border-box;
  width: 100%;
  min-height: 38px;
  padding: 0.375rem 0.5rem;
  font-family: inherit;
  font-size: 0.9rem;
  color: ${({ theme })=>theme.palette.default.black};
  background-color: ${({ theme })=>theme.palette.default.white};
  border: 1px solid
    ${({ theme })=>opts?.error ? theme.palette.default.error : theme.palette.default.grey};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  outline: none;
  color-scheme: light;

  &::placeholder {
    color: ${({ theme })=>theme.palette.default.greyDark};
    opacity: 0.7;
  }

  &:focus {
    ${focusRing(opts?.error)}
  }

  &:disabled {
    background-color: ${({ theme })=>theme.palette.default.greyLight};
    cursor: not-allowed;
  }
`;
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
"[project]/apps/web/src/app/components/Atom/HighlightedText/HighlightedText.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Mark",
    ()=>Mark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const Mark = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].mark.withConfig({
    displayName: "HighlightedText.styles__Mark",
    componentId: "sc-3036a15-0"
})`
  background-color: ${({ theme })=>theme.palette.status.warning.bg};
  color: ${({ theme })=>theme.palette.status.warning.text};
  padding: 0 0.1em;
  border-radius: 2px;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/HighlightedText/HighlightedText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HighlightedText",
    ()=>HighlightedText,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$highlightMatch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/highlightMatch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HighlightedText$2f$HighlightedText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HighlightedText/HighlightedText.styles.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
/**
 * #486: Hebt die Fundstelle im Text hervor.
 *
 * Die Suche läuft über SOSL `IN ALL FIELDS` — ein Treffer kann also über ein
 * Feld kommen, das in der Zeile gar nicht steht. Die Hervorhebung ist damit
 * die einzige Stelle, an der ein Nutzer sieht, WARUM eine Zeile da ist.
 *
 * `<mark>` statt einer eigenen Span-Klasse: Screenreader kündigen die Stelle
 * dadurch als Hervorhebung an, und die Semantik stimmt auch ohne CSS.
 */ const HighlightedText = ({ text, term, dataTestId })=>{
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$highlightMatch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highlightMatch"])(text, term ?? '');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-testid": dataTestId,
        children: segments.map((segment, index)=>segment.match ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HighlightedText$2f$HighlightedText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"], {
                "data-testid": dataTestId ? `${dataTestId}-match` : undefined,
                children: segment.text
            }, index, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/HighlightedText/HighlightedText.tsx",
                lineNumber: 32,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: segment.text
            }, index, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/HighlightedText/HighlightedText.tsx",
                lineNumber: 36,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/HighlightedText/HighlightedText.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HighlightedText;
;
const __TURBOPACK__default__export__ = HighlightedText;
var _c;
__turbopack_context__.k.register(_c, "HighlightedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/HighlightedText/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$HighlightedText$2f$HighlightedText$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/HighlightedText/HighlightedText.tsx [app-client] (ecmascript)");
;
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
"[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconBell.styles__Root",
    componentId: "sc-e765de69-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconBell",
    ()=>IconBell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBell$2f$IconBell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.styles.ts [app-client] (ecmascript)");
;
;
const IconBell = (props)=>{
    const currentColor = props['color'] ?? 'currentColor';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBell$2f$IconBell$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-bell-root',
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "bell-2"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: currentColor,
                strokeLinecap: "square",
                strokeLinejoin: "miter",
                strokeMiterlimit: 10,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14.45 14C14.4828 14.1616 14.5 14.3288 14.5 14.5C14.5 15.8807 13.3807 17 12 17C10.6193 17 9.5 15.8807 9.5 14.5C9.5 14.3288 9.51722 14.1616 9.55001 14",
                        stroke: currentColor,
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "butt"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 15.3564L4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V15.3564",
                        stroke: currentColor,
                        strokeWidth: "2",
                        fill: "none",
                        strokeLinecap: "butt"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M8 10C8 7.79086 9.79086 6 12 6",
                        stroke: currentColor,
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 21C17.5228 21 22 19.433 22 17.5C22 15.567 17.5228 14 12 14C6.47715 14 2 15.567 2 17.5C2 19.433 6.47715 21 12 21Z",
                        stroke: currentColor,
                        strokeWidth: "2",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconBell;
;
var _c;
__turbopack_context__.k.register(_c, "IconBell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconCalendar.styles__Root",
    componentId: "sc-31b25be0-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconCalendar",
    ()=>IconCalendar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.styles.ts [app-client] (ecmascript)");
;
;
const IconCalendar = (props)=>{
    const defaultStrokeColor = 'currentColor';
    const strokeColor = props['strokeColor'] || defaultStrokeColor;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        className: props['className'],
        "data-testid": 'icon-calendar-root',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            fill: strokeColor,
            strokeLinejoin: "miter",
            strokeLinecap: "butt",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "2",
                    y1: "9",
                    x2: "22",
                    y2: "9",
                    fill: "none",
                    stroke: strokeColor,
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "7",
                    y1: "1",
                    x2: "7",
                    y2: "4",
                    fill: "none",
                    stroke: strokeColor,
                    strokeLinecap: "square",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                    x1: "17",
                    y1: "1",
                    x2: "17",
                    y2: "4",
                    fill: "none",
                    stroke: strokeColor,
                    strokeLinecap: "square",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "2",
                    y: "4",
                    width: "20",
                    height: "16",
                    rx: "2",
                    ry: "2",
                    fill: "none",
                    stroke: strokeColor,
                    strokeLinecap: "square",
                    strokeMiterlimit: "10",
                    strokeWidth: "2"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
            lineNumber: 26,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconCalendar;
;
var _c;
__turbopack_context__.k.register(_c, "IconCalendar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconLogout/IconLogout.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconLogout.styles__Root",
    componentId: "sc-19897c63-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconLogout/IconLogout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconLogout",
    ()=>IconLogout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLogout$2f$IconLogout$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLogout/IconLogout.styles.ts [app-client] (ecmascript)");
;
;
const IconLogout = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLogout$2f$IconLogout$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-logout-root',
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        width: "24",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
            strokeLinecap: "square",
            strokeMiterlimit: "10",
            fill: "currentColor",
            strokeLinejoin: "miter",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 5L5 5C3.89543 5 3 5.89543 3 7L3 19C3 20.1046 3.89543 21 5 21L17 21C18.1046 21 19 20.1046 19 19L19 15",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconLogout/IconLogout.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12 12L21 3L20.6972 3.30285",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconLogout/IconLogout.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 3L21 3L21 10",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconLogout/IconLogout.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconLogout/IconLogout.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconLogout/IconLogout.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconLogout;
;
var _c;
__turbopack_context__.k.register(_c, "IconLogout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconLogout/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLogout$2f$IconLogout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLogout/IconLogout.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLogout$2f$IconLogout$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLogout"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconMessages/IconMessages.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconMessages.styles__Root",
    componentId: "sc-41db6883-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconMessages/IconMessages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconMessages",
    ()=>IconMessages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMessages$2f$IconMessages$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMessages/IconMessages.styles.ts [app-client] (ecmascript)");
;
;
const IconMessages = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMessages$2f$IconMessages$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-messages-root',
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M16 2H4C2.895 2 2 2.895 2 4V12C2 13.105 2.895 14 4 14H5V19L12 14H16C17.105 14 18 13.105 18 12V4C18 2.895 17.105 2 16 2Z",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "square",
                strokeLinejoin: "miter"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMessages/IconMessages.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 7V16C22 17.105 21.105 18 20 18H19V22L14 18H12",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "square",
                strokeLinejoin: "miter"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMessages/IconMessages.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconMessages/IconMessages.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconMessages;
;
var _c;
__turbopack_context__.k.register(_c, "IconMessages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconPause.styles__Root",
    componentId: "sc-58b9cdd7-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconPause",
    ()=>IconPause
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.styles.ts [app-client] (ecmascript)");
;
;
const IconPause = (props)=>{
    const currentColor = props['color'] ?? 'currentColor';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-pause-root',
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "media-pause"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: currentColor,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M4 4V20H9V4H4Z",
                        stroke: currentColor,
                        strokeWidth: "2",
                        strokeLinecap: "square",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M15 4V20H20V4H15Z",
                        stroke: currentColor,
                        strokeWidth: "2",
                        strokeLinecap: "square",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconPause;
;
var _c;
__turbopack_context__.k.register(_c, "IconPause");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconPlay/IconPlay.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconPlay.styles__Root",
    componentId: "sc-2afb8061-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconPlay/IconPlay.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconPlay",
    ()=>IconPlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$IconPlay$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlay/IconPlay.styles.ts [app-client] (ecmascript)");
;
;
const IconPlay = (props)=>{
    const currentColor = props['color'] ?? 'currentColor';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$IconPlay$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-play-root',
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "media-play"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconPlay/IconPlay.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: currentColor,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M6 4V20L20 12L6 4Z",
                    stroke: currentColor,
                    strokeWidth: "2",
                    strokeLinecap: "square",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconPlay/IconPlay.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconPlay/IconPlay.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconPlay/IconPlay.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconPlay;
;
var _c;
__turbopack_context__.k.register(_c, "IconPlay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconStop/IconStop.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconStop.styles__Root",
    componentId: "sc-a874f867-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconStop/IconStop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconStop",
    ()=>IconStop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconStop$2f$IconStop$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconStop/IconStop.styles.ts [app-client] (ecmascript)");
;
;
const IconStop = (props)=>{
    const currentColor = props['color'] ?? 'currentColor';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconStop$2f$IconStop$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-stop-root',
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                children: "media-stop"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconStop/IconStop.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fill: currentColor,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M20 4H4V20H20V4Z",
                    stroke: currentColor,
                    strokeWidth: "2",
                    strokeLinecap: "square",
                    fill: "none"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconStop/IconStop.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconStop/IconStop.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconStop/IconStop.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconStop;
;
var _c;
__turbopack_context__.k.register(_c, "IconStop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconUser/IconUser.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "IconUser.styles__Root",
    componentId: "sc-9eb1797d-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconUser/IconUser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IconUser",
    ()=>IconUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUser$2f$IconUser$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconUser/IconUser.styles.ts [app-client] (ecmascript)");
;
;
const IconUser = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUser$2f$IconUser$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: props['className'],
        "data-testid": 'icon-user-root',
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3.2373 19.5C4.56272 17.2892 7.46759 15.7762 11.9996 15.7762C16.5316 15.7762 19.4364 17.2892 20.7619 19.5M15.5996 8.1C15.5996 10.0882 13.9878 11.7 11.9996 11.7C10.0114 11.7 8.39958 10.0882 8.39958 8.1C8.39958 6.11177 10.0114 4.5 11.9996 4.5C13.9878 4.5 15.5996 6.11177 15.5996 8.1Z",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconUser/IconUser.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Icons/IconUser/IconUser.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = IconUser;
;
var _c;
__turbopack_context__.k.register(_c, "IconUser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Icons/IconUser/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUser$2f$IconUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconUser/IconUser.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUser$2f$IconUser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUser"];
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
"[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "LogoPlastshipNoText.styles__Root",
    componentId: "sc-af92995f-0"
})``;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoPlastshipNoText",
    ()=>LogoPlastshipNoText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastshipNoText$2f$LogoPlastshipNoText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.styles.ts [app-client] (ecmascript)");
;
;
const LogoPlastshipNoText = (props)=>{
    const { className, width = 89, height = 100, ...restProps } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastshipNoText$2f$LogoPlastshipNoText$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": 'logo-plastship-no-text-root',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: width,
            height: height,
            viewBox: "0 0 89 100",
            fill: "none",
            shapeRendering: "geometricPrecision",
            ...restProps,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    clipPath: "url(#clip0_2_2)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M16.157 63.1687V37.2257C16.1565 36.2097 16.4236 35.2114 16.9315 34.3314C17.4394 33.4514 18.17 32.7206 19.05 32.2127L41.168 19.4377C42.0482 18.9295 43.0466 18.662 44.063 18.662C45.0794 18.662 46.0778 18.9295 46.958 19.4377L69.418 32.4087L85.574 23.0787L46.959 0.775713C46.0788 0.267534 45.0804 0 44.064 0C43.0476 0 42.0492 0.267534 41.169 0.775713L2.895 22.8817C2.01486 23.3896 1.28395 24.1203 0.775767 25.0003C0.267579 25.8803 2.32196e-05 26.8785 0 27.8947L0 72.5007L16.157 63.1687Z",
                            fill: "#00416E"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M71.9698 36.831V62.774C71.97 63.79 71.7028 64.7882 71.195 65.6682C70.6872 66.5481 69.9566 67.2789 69.0768 67.787L46.9568 80.562C46.0771 81.0707 45.0789 81.3385 44.0628 81.3385C43.0466 81.3385 42.0484 81.0707 41.1688 80.562L18.7098 67.59L2.55176 76.921L41.1698 99.224C42.0494 99.7328 43.0476 100.001 44.0638 100.001C45.0799 100.001 46.0781 99.7328 46.9578 99.224L85.2328 77.118C86.1129 76.6101 86.8438 75.8794 87.352 74.9994C87.8602 74.1194 88.1277 73.1212 88.1278 72.105V27.5L71.9698 36.831Z",
                            fill: "#37BA24"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "clip0_2_2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "89",
                            height: "100.001",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Atom/Logos/LogoPlastshipNoText/LogoPlastshipNoText.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LogoPlastshipNoText;
;
var _c;
__turbopack_context__.k.register(_c, "LogoPlastshipNoText");
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
"[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "ElapsedBadge",
    ()=>ElapsedBadge,
    "Group",
    ()=>Group,
    "HoldRing",
    ()=>HoldRing,
    "Wrapper",
    ()=>Wrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/hex.ts [app-client] (ecmascript) <locals>");
'use client';
;
;
const OUTER = 36;
const INNER = 32;
const INSET = 2;
/** #1742: runde Ecken wie im Logo; innen konzentrisch zu außen (concentricHexCornerRadius) */ const OUTER_CLIP_PATH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(OUTER);
_c = OUTER_CLIP_PATH;
const INNER_CLIP_PATH = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["roundedHexagonClipPath"])(INNER, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$hex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["concentricHexCornerRadius"])(OUTER, INSET));
_c1 = INNER_CLIP_PATH;
const Group = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeaderWorkingHoursButton.styles__Group",
    componentId: "sc-b85a051-0"
})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;
const Wrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HeaderWorkingHoursButton.styles__Wrapper",
    componentId: "sc-b85a051-1"
})`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${OUTER}px;
  height: ${OUTER}px;
  touch-action: manipulation;
  user-select: none;
`;
const pulse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.06); }
`;
const Button = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "HeaderWorkingHoursButton.styles__Button",
    componentId: "sc-b85a051-2"
})`
  width: ${OUTER}px;
  height: ${OUTER}px;
  flex-shrink: 0;
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
  -webkit-tap-highlight-color: transparent;

  ${({ $tone })=>$tone === 'running' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      animation: ${pulse} 2.4s ease-in-out infinite;
    `}

  & > * {
    position: relative;
    z-index: 1;
  }

  & > svg {
    flex-shrink: 0;
    display: block;
    transform: scale(0.8);
  }

  path,
  rect,
  line,
  circle,
  polyline,
  polygon {
    stroke: ${({ theme })=>theme.palette.default.black};
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: ${OUTER}px;
    height: ${OUTER}px;
    clip-path: ${OUTER_CLIP_PATH};
    background: ${({ theme, $tone })=>{
    if ($tone === 'stop') return theme.palette.default.error;
    if ($tone === 'running') return theme.palette.default.primary;
    if ($tone === 'paused') return theme.palette.default.warning;
    return theme.palette.default.greyDark;
}};
    opacity: ${({ $tone })=>$tone === 'idle' ? 0.6 : 1};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  &::after {
    position: absolute;
    content: '';
    top: ${INSET}px;
    left: ${INSET}px;
    width: ${INNER}px;
    height: ${INNER}px;
    clip-path: ${INNER_CLIP_PATH};
    background: ${({ theme, $tone, $isHolding })=>{
    if ($isHolding) return theme.palette.default.error;
    if ($tone === 'running') return theme.palette.default.primary;
    if ($tone === 'paused') return theme.palette.default.warning;
    return theme.palette.default.white;
}};
    z-index: 0;
    transition: 0.15s ease-in-out;
  }

  ${({ $tone, $isHolding, theme })=>($tone === 'running' || $tone === 'paused' || $isHolding) && `
    path, rect, line, circle, polyline, polygon {
      stroke: ${theme.palette.default.white};
    }
  `}

  &:hover {
    path,
    rect,
    line,
    circle,
    polyline,
    polygon {
      stroke: ${({ theme })=>theme.palette.default.white};
    }
    &::before {
      opacity: 1;
    }
    &::after {
      background: ${({ theme, $tone, $isHolding })=>{
    if ($isHolding) return theme.palette.default.error;
    if ($tone === 'idle') return theme.palette.default.primary;
    if ($tone === 'running') return theme.palette.default.primary;
    if ($tone === 'paused') return theme.palette.default.warning;
    return theme.palette.default.primary;
}};
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 2px;
  }

  &:disabled,
  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${({ $size, $tone, theme })=>$size === 'small' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      transform: scale(0.8);
      ${$tone === 'stop' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        &::after {
          background: ${theme.palette.default.error};
        }
        path,
        rect,
        line,
        circle,
        polyline,
        polygon {
          stroke: ${theme.palette.default.white};
        }
      `}
    `}
`;
const HoldRing = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].svg.withConfig({
    displayName: "HeaderWorkingHoursButton.styles__HoldRing",
    componentId: "sc-b85a051-3"
})`
  position: absolute;
  inset: -4px;
  pointer-events: none;
  width: ${OUTER + 8}px;
  height: ${OUTER + 8}px;
  z-index: 2;
  transform: rotate(-90deg);

  & circle {
    fill: none;
    stroke: ${({ theme })=>theme.palette.default.error};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-dasharray: ${({ $progress })=>`${$progress * 126} 126`};
    transition: stroke-dasharray 0.05s linear;
  }
`;
const ElapsedBadge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "HeaderWorkingHoursButton.styles__ElapsedBadge",
    componentId: "sc-b85a051-4"
})`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  padding: 2px 4px;
  border-radius: 4px;
  background: ${({ theme })=>theme.palette.default.black};
  color: ${({ theme })=>theme.palette.default.white};
  white-space: nowrap;
  pointer-events: none;
  z-index: 3;
`;
var _c, _c1;
__turbopack_context__.k.register(_c, "OUTER_CLIP_PATH");
__turbopack_context__.k.register(_c1, "INNER_CLIP_PATH");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderWorkingHoursButton",
    ()=>HeaderWorkingHoursButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$IconPlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlay/IconPlay.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPause/IconPause.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconStop$2f$IconStop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconStop/IconStop.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$WorkingHoursTimerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/WorkingHoursTimerContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$HeaderWorkingHoursButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.styles.ts [app-client] (ecmascript)");
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
const HOLD_MS = 3000;
const TICK_MS = 50;
/**
 * Timer in der Kopfzeile. Klick (oder Leertaste/Enter) = Start/Pause.
 * #1576: Stoppen über einen eigenen, fokussierbaren Knopf neben dem Timer,
 * solange eine Sitzung offen ist; Halten (3 s) bleibt als Abkürzung.
 */ const HeaderWorkingHoursButton = ({ dataTestId = 'working-hours-timer' })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    const { state, pending, elapsedMs, postEvent } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$WorkingHoursTimerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkingHoursTimer"])();
    const [holdProgress, setHoldProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isHolding, setIsHolding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const holdStartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const holdRafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pointerDownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const triggeredStopRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const cancelHold = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderWorkingHoursButton.useCallback[cancelHold]": ()=>{
            if (holdRafRef.current !== null) {
                window.clearInterval(holdRafRef.current);
                holdRafRef.current = null;
            }
            holdStartRef.current = null;
            setHoldProgress(0);
            setIsHolding(false);
        }
    }["HeaderWorkingHoursButton.useCallback[cancelHold]"], []);
    const onPointerDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderWorkingHoursButton.useCallback[onPointerDown]": (e)=>{
            if (pending || e.button !== 0) return;
            pointerDownRef.current = true;
            triggeredStopRef.current = false;
            if (state.status === 'idle') return;
            holdStartRef.current = performance.now();
            setIsHolding(true);
            holdRafRef.current = window.setInterval({
                "HeaderWorkingHoursButton.useCallback[onPointerDown]": ()=>{
                    if (holdStartRef.current === null) return;
                    const elapsed = performance.now() - holdStartRef.current;
                    const progress = Math.min(1, elapsed / HOLD_MS);
                    setHoldProgress(progress);
                    if (progress >= 1 && !triggeredStopRef.current) {
                        triggeredStopRef.current = true;
                        if (holdRafRef.current !== null) {
                            window.clearInterval(holdRafRef.current);
                            holdRafRef.current = null;
                        }
                    }
                }
            }["HeaderWorkingHoursButton.useCallback[onPointerDown]"], TICK_MS);
        }
    }["HeaderWorkingHoursButton.useCallback[onPointerDown]"], [
        pending,
        state.status
    ]);
    const onPointerUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderWorkingHoursButton.useCallback[onPointerUp]": ()=>{
            if (!pointerDownRef.current) return;
            pointerDownRef.current = false;
            const didTriggerStop = triggeredStopRef.current;
            cancelHold();
            if (didTriggerStop) {
                void postEvent('stop');
            } else if (state.status === 'running') {
                void postEvent('pause');
            } else {
                void postEvent('play');
            }
        }
    }["HeaderWorkingHoursButton.useCallback[onPointerUp]"], [
        cancelHold,
        postEvent,
        state.status
    ]);
    const onPointerLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderWorkingHoursButton.useCallback[onPointerLeave]": ()=>{
            if (!pointerDownRef.current) return;
            pointerDownRef.current = false;
            triggeredStopRef.current = false;
            cancelHold();
        }
    }["HeaderWorkingHoursButton.useCallback[onPointerLeave]"], [
        cancelHold
    ]);
    const onKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderWorkingHoursButton.useCallback[onKeyDown]": (e)=>{
            if (e.key !== ' ' && e.key !== 'Enter') return;
            e.preventDefault();
            if (pending) return;
            if (state.status === 'running') void postEvent('pause');
            else void postEvent('play');
        }
    }["HeaderWorkingHoursButton.useCallback[onKeyDown]"], [
        pending,
        postEvent,
        state.status
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderWorkingHoursButton.useEffect": ()=>({
                "HeaderWorkingHoursButton.useEffect": ()=>cancelHold()
            })["HeaderWorkingHoursButton.useEffect"]
    }["HeaderWorkingHoursButton.useEffect"], [
        cancelHold
    ]);
    const showStopIcon = isHolding && holdProgress >= 1;
    const tone = showStopIcon ? 'stop' : state.status;
    const Icon = showStopIcon ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconStop$2f$IconStop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStop"] : state.status === 'running' ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPause$2f$IconPause$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPause"] : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlay$2f$IconPlay$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlay"];
    const tooltip = showStopIcon ? tr('workingHoursTimer.releaseToStop', {
        defaultValue: 'Loslassen zum Stoppen'
    }) : state.status === 'running' ? tr('workingHoursTimer.runningTooltip', {
        defaultValue: 'Pause (halten zum Stoppen)'
    }) : state.status === 'paused' ? tr('workingHoursTimer.pausedTooltip', {
        defaultValue: 'Fortsetzen (halten zum Stoppen)'
    }) : tr('workingHoursTimer.idleTooltip', {
        defaultValue: 'Arbeitszeit starten'
    });
    const ariaLabel = showStopIcon ? tr('workingHoursTimer.aria.stop', {
        defaultValue: 'Arbeitszeit-Timer stoppen'
    }) : state.status === 'running' ? tr('workingHoursTimer.aria.pause', {
        defaultValue: 'Arbeitszeit-Timer pausieren'
    }) : state.status === 'paused' ? tr('workingHoursTimer.aria.resume', {
        defaultValue: 'Arbeitszeit-Timer fortsetzen'
    }) : tr('workingHoursTimer.aria.start', {
        defaultValue: 'Arbeitszeit-Timer starten'
    });
    const stopLabel = tr('workingHoursTimer.aria.stop', {
        defaultValue: 'Arbeitszeit-Timer stoppen'
    });
    const elapsed = state.status === 'idle' ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$WorkingHoursTimerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatElapsed"])(elapsedMs);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$HeaderWorkingHoursButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-testid": `${dataTestId}-group`,
        "data-state": state.status,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$HeaderWorkingHoursButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Wrapper"], {
                ref: wrapperRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$HeaderWorkingHoursButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        $tone: tone,
                        $isHolding: isHolding,
                        // aria-disabled statt disabled: ein gesperrter Knopf verlöre den
                        // Tastaturfokus (#1576); die Handler prüfen `pending` selbst
                        "aria-disabled": pending || undefined,
                        onPointerDown: onPointerDown,
                        onPointerUp: onPointerUp,
                        onPointerLeave: onPointerLeave,
                        onPointerCancel: onPointerLeave,
                        onKeyDown: onKeyDown,
                        onMouseEnter: ()=>setIsHovered(true),
                        onMouseLeave: ()=>{
                            setIsHovered(false);
                            onPointerLeave();
                        },
                        "aria-label": ariaLabel,
                        "data-testid": `${dataTestId}-button`,
                        "data-state": state.status,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx",
                            lineNumber: 182,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx",
                        lineNumber: 161,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    isHolding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$HeaderWorkingHoursButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoldRing"], {
                        $progress: holdProgress,
                        viewBox: "0 0 44 44",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "22",
                            cy: "22",
                            r: "20"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    elapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$HeaderWorkingHoursButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElapsedBadge"], {
                        children: elapsed
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx",
                        lineNumber: 189,
                        columnNumber: 19
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                        content: tooltip,
                        isVisible: isHovered && !isHolding,
                        position: "bottom",
                        anchorRef: wrapperRef
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx",
                        lineNumber: 190,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx",
                lineNumber: 160,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            state.status !== 'idle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$HeaderWorkingHoursButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                $tone: "stop",
                $isHolding: false,
                $size: "small",
                "aria-disabled": pending || undefined,
                onClick: ()=>{
                    if (!pending) void postEvent('stop');
                },
                "aria-label": stopLabel,
                title: stopLabel,
                "data-testid": `${dataTestId}-stop`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconStop$2f$IconStop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconStop"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx",
                    lineNumber: 211,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeaderWorkingHoursButton, "sqIdl8Ykwt/b55UC/KXlq6kxoFI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$WorkingHoursTimerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkingHoursTimer"]
    ];
});
_c = HeaderWorkingHoursButton;
;
var _c;
__turbopack_context__.k.register(_c, "HeaderWorkingHoursButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$HeaderWorkingHoursButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$HeaderWorkingHoursButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderWorkingHoursButton"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentWrapper",
    ()=>ContentWrapper,
    "MessageWrapper",
    ()=>MessageWrapper,
    "Root",
    ()=>Root,
    "TimeStamp",
    ()=>TimeStamp,
    "Title",
    ()=>Title,
    "UnreadDot",
    ()=>UnreadDot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NotificationItem.styles__Root",
    componentId: "sc-9f7f86ba-0"
})`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 16px;
  cursor: pointer;
  /* #392: ungelesen = Theme-Fläche statt festem Hellblau (im Dark Mode weiß auf weiß) */
  background-color: ${(props)=>props.$isRead ? 'transparent' : props.theme.palette.surface.subtle};
  border-bottom: 1px solid ${({ theme })=>theme.palette.border.default};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${(props)=>props.$isRead ? props.theme.palette.surface.subtle : props.theme.palette.surface.muted};
  }

  &:last-child {
    border-bottom: none;
  }
`;
const UnreadDot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NotificationItem.styles__UnreadDot",
    componentId: "sc-9f7f86ba-1"
})`
  flex-shrink: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme })=>theme.palette.default.primary};
  margin-top: 6px;
`;
const ContentWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NotificationItem.styles__ContentWrapper",
    componentId: "sc-9f7f86ba-2"
})`
  flex: 1;
  min-width: 0;
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NotificationItem.styles__Title",
    componentId: "sc-9f7f86ba-3"
})`
  font-family: ${(props)=>props.theme.font.secondaryFamily};
  font-size: 14px;
  line-height: 20px;
  font-weight: ${(props)=>props.$isRead ? 'normal' : 'bold'};
  color: ${({ theme })=>theme.palette.text.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const MessageWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NotificationItem.styles__MessageWrapper",
    componentId: "sc-9f7f86ba-4"
})`
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme })=>theme.palette.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 2px;
`;
const TimeStamp = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NotificationItem.styles__TimeStamp",
    componentId: "sc-9f7f86ba-5"
})`
  font-family: ${(props)=>props.theme.font.secondaryFamily};
  font-size: 11px;
  line-height: 16px;
  color: ${({ theme })=>theme.palette.text.muted};
  margin-top: 4px;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationItem",
    ()=>NotificationItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NotificationItem$2f$NotificationItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useFormatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/notificationText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/entityFieldI18n.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/MarkdownRenderer/MarkdownRenderer.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function useRelativeTime(dateString) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const fmt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"])();
    const now = new Date();
    const date = new Date(dateString);
    const diffMs = now.getTime() - date.getTime();
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);
    if (diffSecs < 60) return tr('notifications.time.justNow');
    if (diffMins < 60) return tr('notifications.time.minutesAgo', {
        count: diffMins
    });
    if (diffHours < 24) return tr('notifications.time.hoursAgo', {
        count: diffHours
    });
    if (diffDays < 7) return tr('notifications.time.daysAgo', {
        count: diffDays
    });
    // #1640: Datum in der Sprache des Nutzers (vorher Browser-Standard)
    return fmt.dateWith(date, {});
}
_s(useRelativeTime, "tLjKENKz+b22mQSxvFYlT3FNlGk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"]
    ];
});
/**
 * Resolve a notification's i18n title/message at render time.
 * #1626: in the reader's language, incl. translated placeholders
 * (app/lib/notificationText.ts); falls back to the stored default text.
 */ function useNotificationText(notification) {
    _s1();
    const { tr, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    // Test-Mocks liefern teils kein i18n — dann Deutsch
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveNotificationText"])(notification, tr, i18n?.language ?? 'de', (text)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$entityFieldI18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateEntityText"])(tr, text));
}
_s1(useNotificationText, "BA2v6sQJt82zj3IQo3kcbNbCJpQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
const NotificationItem = ({ notification, onClick, dataTestId = 'notification-item-root', className })=>{
    _s2();
    const handleClick = ()=>{
        onClick(notification);
    };
    const relativeTime = useRelativeTime(notification.createdAt);
    const { title, message } = useNotificationText(notification);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NotificationItem$2f$NotificationItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": dataTestId,
        $isRead: notification.isRead,
        onClick: handleClick,
        children: [
            !notification.isRead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NotificationItem$2f$NotificationItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnreadDot"], {
                "data-testid": "notification-unread-dot"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.tsx",
                lineNumber: 98,
                columnNumber: 32
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NotificationItem$2f$NotificationItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentWrapper"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NotificationItem$2f$NotificationItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                        $isRead: notification.isRead,
                        "data-testid": "notification-title",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NotificationItem$2f$NotificationItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MessageWrapper"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MarkdownRenderer"], {
                            content: message,
                            mode: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$MarkdownRenderer$2f$MarkdownRenderer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkdownRendererMode"].inline,
                            dataTestId: "notification-message"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NotificationItem$2f$NotificationItem$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TimeStamp"], {
                        "data-testid": "notification-timestamp",
                        children: relativeTime
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(NotificationItem, "Kb46cYBcXqPkXgyst/meARKQrMQ=", false, function() {
    return [
        useRelativeTime,
        useNotificationText
    ];
});
_c = NotificationItem;
;
var _c;
__turbopack_context__.k.register(_c, "NotificationItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/NotificationItem/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NotificationItem$2f$NotificationItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.tsx [app-client] (ecmascript)");
;
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
"[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeaderAppControls",
    ()=>HeaderAppControls,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
/**
 * #1478: rechter Teil des Headers für angemeldete Nutzer — Suche, Rollen-
 * Vorschau, Arbeitszeit, Outlook, Glocke, Avatar. Eigene Datei, damit der
 * Header ihn per `next/dynamic` lädt: Besucher ohne Konto laden weder
 * Notifications noch Timer noch Outlook-Status. Braucht die App-Shell-
 * Provider (NotificationProvider, WorkingHoursTimer, UserContext) — der
 * Header rendert ihn nur, wenn sie im Baum sind (useAppShellActive).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/image-component.js [app-client] (ecmascript) <export Image as default>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$profilePictures$2f$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/profilePictures/url.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/NotificationContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/Header/Header.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUser$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconUser/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputSearch/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Form/InputSearch/InputSearch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSpecializedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSpecializedHooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLogout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLogout/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEmail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconEmail/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMessages$2f$IconMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMessages/IconMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCalendar/IconCalendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useOutlookStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useOutlookStatus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Burger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Burger/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/mobileMenu.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBell$2f$IconBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Badge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Badge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Badge/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/NotificationPanel/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$HeaderWorkingHoursButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HeaderWorkingHoursButton/HeaderWorkingHoursButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$workingHoursTimerAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/workingHoursTimerAccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useRecordLabel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSessionFlags.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/records/recordLabel.ts [app-client] (ecmascript)");
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
/**
 * #1869: Rollen-Vorschau erst im Browser und nur für die echte Rolle admin
 * laden. Sie zeigt Rollen-, Tag- und Modulnamen (Namespaces usage, users,
 * modules) — öffentliche Seiten tragen davon nichts im Teil-Seed; fehlt dort
 * ein Schlüssel, lädt der Client die volle Sprache (Angemeldete ohnehin über
 * I18nSessionPreload).
 */ const ViewAsControl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Molecule/ViewAsControl/ViewAsControl.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Molecule/ViewAsControl/ViewAsControl.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ViewAsControl;
/** #1714: boolesch statt Type-Guard — sonst verengt TS den else-Zweig auf `never`. */ const istEigenesProfilbild = (url)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$profilePictures$2f$url$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProfilePictureUrl"])(url);
// Module-level cache for user image — survives component remounts
let cachedUserImage;
function HeaderAppControls() {
    _s();
    const { language, isHydrated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    const { isLeftSidebarOpen, toggleLeftSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    // #2175: eine Auffrischung der Sitzung (Theme-/Sprachwechsel) blendet nichts aus
    const { isAuthenticated, isSessionLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionFlags$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sessionFlags"])(status, !!session);
    // #1869: echte Rolle (realRole), nicht die der Vorschau
    const darfVorschau = isAuthenticated && (session?.user?.realRole ?? session?.user?.role) === 'admin';
    const [showDropdown, setShowDropdown] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [showNotifications, setShowNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Use isHydrated from UserPreferencesContext instead of local isClient state
    // to avoid an extra re-render on every mount
    const [imageError, setImageError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchValue, setSearchValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Die Route liefert `label: null` für namenlose Datensätze (nie die Id);
    // der Platzhalter entsteht erst beim Rendern (keine veraltete Sprache).
    const [suggestions, setSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const { label: recordLabelOf } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"])();
    const unnamedPlaceholder = recordLabelOf(null).text;
    // Gemerkt: InputSearch oeffnet das Dropdown bei jeder neuen Vorschlags-
    // Referenz wieder; der Platzhalter ist Abhaengigkeit (nachgeladene Sprache).
    const suggestionOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HeaderAppControls.useMemo[suggestionOptions]": ()=>suggestions.map({
                "HeaderAppControls.useMemo[suggestionOptions]": (s)=>({
                        ...s,
                        label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordLabel"])(s.label) ?? unnamedPlaceholder
                    })
            }["HeaderAppControls.useMemo[suggestionOptions]"])
    }["HeaderAppControls.useMemo[suggestionOptions]"], [
        suggestions,
        unnamedPlaceholder
    ]);
    const [isSearchLoading, setIsSearchLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const avatarRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const searchDebounceRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useRef(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    // #1576: Der Timer gehört allen, die Arbeitszeit erfassen dürfen
    // (working-hours.create nach den Rollendefinitionen) — auch staff; die
    // Ausblendung aus #843 entfällt, Rollen ohne das Recht sehen ihn nicht.
    const showWorkingHoursWidget = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$workingHoursTimerAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkingHoursTimerAccess"])();
    const { outlookLinked, isStaffOrAdmin } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useOutlookStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutlookStatus"])();
    const { unreadCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"])();
    // Get user image with database-first priority using the custom hook
    const { userImage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSpecializedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserImage"])(session?.user?.image ?? undefined, {
        enabled: !!session
    });
    // Track the last successfully loaded image to prevent flicker across remounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderAppControls.useEffect": ()=>{
            if (userImage && !imageError) cachedUserImage = userImage;
        }
    }["HeaderAppControls.useEffect"], [
        userImage,
        imageError
    ]);
    // Use cached image during transitions to prevent fallback flash
    const displayImage = userImage && !imageError ? userImage : cachedUserImage;
    // Reset image error only when the actual image URL changes
    const prevImageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(session?.user?.image);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderAppControls.useEffect": ()=>{
            if (session?.user?.image !== prevImageRef.current) {
                prevImageRef.current = session?.user?.image;
                setImageError(false);
            }
        }
    }["HeaderAppControls.useEffect"], [
        session?.user?.image
    ]);
    // Pre-fill search from URL query param.
    // #1919: je Pfad statt einmal beim Mount — der Kopf bleibt seit dem
    // App-Rahmen bei der Navigation stehen; bis dahin leerte der Remount das
    // Feld und schloss Vorschläge und Menü bei jedem Seitenwechsel.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderAppControls.useEffect": ()=>{
            const searchParams = new URLSearchParams(window.location.search);
            setSearchValue(searchParams.get('q') ?? '');
            setSuggestions([]);
            setShowDropdown(false);
        }
    }["HeaderAppControls.useEffect"], [
        pathname
    ]);
    // Handle clicks outside dropdown to close it
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeaderAppControls.useEffect": ()=>{
            const handleClickOutside = {
                "HeaderAppControls.useEffect.handleClickOutside": (event)=>{
                    if (dropdownRef.current && !dropdownRef.current.contains(event.target) && avatarRef.current && !avatarRef.current.contains(event.target)) {
                        setShowDropdown(false);
                    }
                }
            }["HeaderAppControls.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "HeaderAppControls.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["HeaderAppControls.useEffect"];
        }
    }["HeaderAppControls.useEffect"], []);
    // Search with suggestions (same as SearchOverlay)
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderAppControls.useCallback[handleSearch]": (term)=>{
            // Clear previous debounce
            if (searchDebounceRef.current) {
                clearTimeout(searchDebounceRef.current);
            }
            if (term.length < 2) {
                setSuggestions([]);
                return;
            }
            // Debounce search
            searchDebounceRef.current = setTimeout({
                "HeaderAppControls.useCallback[handleSearch]": async ()=>{
                    setIsSearchLoading(true);
                    try {
                        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/search/suggestions?q=${encodeURIComponent(term)}`);
                        setSuggestions(response.data.suggestions || []);
                    } catch  {
                        setSuggestions([]);
                    } finally{
                        setIsSearchLoading(false);
                    }
                }
            }["HeaderAppControls.useCallback[handleSearch]"], 300);
        }
    }["HeaderAppControls.useCallback[handleSearch]"], []);
    const handleSearchSubmit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderAppControls.useCallback[handleSearchSubmit]": (term)=>{
            if (term.trim().length >= 2) {
                setSuggestions([]);
                router.push(`/search?q=${encodeURIComponent(term.trim())}`);
            }
        }
    }["HeaderAppControls.useCallback[handleSearchSubmit]"], [
        router
    ]);
    const handleSuggestionSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "HeaderAppControls.useCallback[handleSuggestionSelect]": (suggestion)=>{
            setSuggestions([]);
            if (suggestion.value.startsWith('/')) {
                router.push(suggestion.value);
            } else {
                router.push(`/search?q=${encodeURIComponent(suggestion.label)}`);
            }
        }
    }["HeaderAppControls.useCallback[handleSuggestionSelect]"], [
        router
    ]);
    const handleLogout = async (e)=>{
        e.preventDefault();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
            redirect: false
        });
        router.push('/login');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controls"], {
                $isLoading: isSessionLoading,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Form$2f$InputSearch$2f$InputSearch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputSearch"], {
                    placeholder: isHydrated ? tr('search.placeholder') : 'Suche...',
                    value: searchValue,
                    onChange: setSearchValue,
                    onSearch: handleSearch,
                    onSubmit: handleSearchSubmit,
                    suggestions: suggestionOptions,
                    onSuggestionSelect: handleSuggestionSelect,
                    loadingSuggestions: isSearchLoading,
                    noResultsText: isHydrated ? tr('search.noResults', {
                        defaultValue: 'Keine Ergebnisse'
                    }) : 'Keine Ergebnisse',
                    variant: "compact",
                    showClearButton: true,
                    minChars: 2,
                    noMargin: true,
                    dataTestId: "header-search"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                    lineNumber: 228,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BurgerWrapper"], {
                children: [
                    darfVorschau && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewAsControl, {
                        dataTestId: "view-as-mobile"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                        lineNumber: 252,
                        columnNumber: 26
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Burger$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        isOpen: isLeftSidebarOpen,
                        onClick: toggleLeftSidebar,
                        controlsId: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$mobileMenu$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MOBILE_MENU_ID"]
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Nav"], {
                $isLoading: isSessionLoading,
                children: (isAuthenticated || isSessionLoading) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        darfVorschau && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ViewAsControl, {
                            dataTestId: "view-as"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                            lineNumber: 260,
                            columnNumber: 30
                        }, this),
                        showWorkingHoursWidget && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HeaderWorkingHoursButton$2f$HeaderWorkingHoursButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderWorkingHoursButton"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                            lineNumber: 262,
                            columnNumber: 40
                        }, this),
                        isStaffOrAdmin && outlookLinked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                            onClick: ()=>router.push(`/mail`),
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconEmail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                lineNumber: 267,
                                columnNumber: 23
                            }, this),
                            tooltip: tr('header.mail.tooltip', {
                                defaultValue: 'Mail'
                            }),
                            ariaLabel: tr('header.mail.ariaLabel', {
                                defaultValue: 'Mail page'
                            }),
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].microsoft,
                            isActive: pathname?.startsWith('/mail')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                            lineNumber: 265,
                            columnNumber: 15
                        }, this),
                        isStaffOrAdmin && outlookLinked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                            onClick: ()=>router.push('/chat'),
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMessages$2f$IconMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMessages"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                lineNumber: 277,
                                columnNumber: 23
                            }, this),
                            tooltip: tr('header.messages.tooltip', {
                                defaultValue: 'Messages'
                            }),
                            ariaLabel: tr('header.messages.ariaLabel', {
                                defaultValue: 'Messages'
                            }),
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].microsoft,
                            isActive: pathname?.startsWith('/chat')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                            lineNumber: 275,
                            columnNumber: 15
                        }, this),
                        isStaffOrAdmin && outlookLinked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                            onClick: ()=>router.push('/calendar'),
                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCalendar$2f$IconCalendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCalendar"], {}, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                lineNumber: 287,
                                columnNumber: 23
                            }, this),
                            tooltip: tr('header.calendar.tooltip', {
                                defaultValue: 'Calendar'
                            }),
                            ariaLabel: tr('header.calendar.ariaLabel', {
                                defaultValue: 'Calendar'
                            }),
                            color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].microsoft,
                            isActive: pathname?.startsWith('/calendar')
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                            lineNumber: 285,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationBellWrapper"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                    onClick: ()=>setShowNotifications((prev)=>!prev),
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBell$2f$IconBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBell"], {}, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                                lineNumber: 300,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Badge$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                count: unreadCount,
                                                dataTestId: "header-notifications-badge"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                                lineNumber: 301,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                        lineNumber: 299,
                                        columnNumber: 19
                                    }, this),
                                    tooltip: tr('header.notifications.tooltip', {
                                        defaultValue: 'Notifications'
                                    }),
                                    ariaLabel: tr('header.notifications.ariaLabel', {
                                        defaultValue: 'Notifications'
                                    }),
                                    color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButtonColors"].primary,
                                    isActive: showNotifications || pathname?.startsWith('/notifications'),
                                    dataTestId: "header-notifications-button"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationPanel"], {
                                    isOpen: showNotifications,
                                    onClose: ()=>setShowNotifications(false),
                                    dataTestId: "header-notification-panel"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                            lineNumber: 295,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarContainer"], {
                            ref: avatarRef,
                            onMouseEnter: ()=>setShowDropdown(true),
                            onMouseLeave: ()=>setShowDropdown(false),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarWrapper"], {
                                    $isActive: pathname?.startsWith('/profile'),
                                    onClick: ()=>router.push(`/profile`),
                                    "aria-label": tr('header.profile', {
                                        defaultValue: 'User profile'
                                    }),
                                    title: session?.user?.name || tr('header.profile', {
                                        defaultValue: 'Profile'
                                    }),
                                    "data-testid": "header-avatar",
                                    children: (()=>{
                                        if (!displayImage) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUser$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                                    lineNumber: 336,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                                lineNumber: 335,
                                                columnNumber: 23
                                            }, this);
                                        }
                                        // #1714: eigener Profilbild-Pfad (Session, private Cache) nicht über den Optimierer
                                        if (typeof displayImage === 'string' && (displayImage.includes('force.com') || istEigenesProfilbild(displayImage))) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: displayImage,
                                                    alt: session?.user?.name || 'User',
                                                    onError: ()=>setImageError(true)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                                    lineNumber: 348,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                                lineNumber: 346,
                                                columnNumber: 23
                                            }, this);
                                        }
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$image$2d$component$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__Image__as__default$3e$__["default"], {
                                                src: displayImage || '',
                                                alt: session?.user?.name || 'User',
                                                fill: true,
                                                sizes: "40px",
                                                priority: true,
                                                style: {
                                                    objectFit: 'cover'
                                                },
                                                unoptimized: typeof displayImage === 'string' && displayImage.includes('ui-avatars.com') || typeof displayImage === 'string' && displayImage.includes('stickees.com') || typeof displayImage === 'string' && displayImage.includes('external') || typeof displayImage === 'string' && !displayImage.startsWith('/'),
                                                onError: ()=>{
                                                    setImageError(true);
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                                lineNumber: 358,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                            lineNumber: 357,
                                            columnNumber: 21
                                        }, this);
                                    })()
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                    lineNumber: 325,
                                    columnNumber: 15
                                }, this),
                                showDropdown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropdown"], {
                                    ref: dropdownRef,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownHeader"], {
                                            onClick: ()=>router.push('/profile'),
                                            children: tr('header.profile')
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                            lineNumber: 385,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$Header$2f$Header$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownItem"], {
                                            "data-testid": "logout-button",
                                            onClick: ()=>handleLogout(new MouseEvent('click')),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLogout$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                                    lineNumber: 394,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: tr('header.logout')
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                                    lineNumber: 395,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                            lineNumber: 388,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                                    lineNumber: 384,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                            lineNumber: 320,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                    lineNumber: 258,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/Header/HeaderAppControls.tsx",
        lineNumber: 225,
        columnNumber: 5
    }, this);
}
_s(HeaderAppControls, "E+Wux09/hVv3TDOl+3FvWbLnJGQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$workingHoursTimerAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkingHoursTimerAccess"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useOutlookStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutlookStatus"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSpecializedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserImage"]
    ];
});
_c1 = HeaderAppControls;
const __TURBOPACK__default__export__ = HeaderAppControls;
var _c, _c1;
__turbopack_context__.k.register(_c, "ViewAsControl");
__turbopack_context__.k.register(_c1, "HeaderAppControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState,
    "EmptyStateText",
    ()=>EmptyStateText,
    "MarkAllReadButton",
    ()=>MarkAllReadButton,
    "PanelBody",
    ()=>PanelBody,
    "PanelFooter",
    ()=>PanelFooter,
    "PanelHeader",
    ()=>PanelHeader,
    "PanelTitle",
    ()=>PanelTitle,
    "Root",
    ()=>Root,
    "ViewAllLink",
    ()=>ViewAllLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NotificationPanel.styles__Root",
    componentId: "sc-3f2c7219-0"
})`
  position: absolute;
  top: 100%;
  right: 0;
  width: 360px;
  max-height: 520px;
  margin-top: 8px;
  background-color: ${({ theme })=>theme.palette.default.white};
  border: 1px solid ${({ theme })=>theme.palette.border.default};
  border-radius: ${(props)=>props.theme.borderRadius.box};
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].overlay};
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (max-width: ${(props)=>props.theme.device.smartphone}) {
    position: fixed;
    top: 60px;
    right: 8px;
    left: 8px;
    width: auto;
  }
`;
const PanelHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NotificationPanel.styles__PanelHeader",
    componentId: "sc-3f2c7219-1"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  border-bottom: 1px solid ${({ theme })=>theme.palette.border.default};
`;
const PanelTitle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "NotificationPanel.styles__PanelTitle",
    componentId: "sc-3f2c7219-2"
})`
  font-family: ${(props)=>props.theme.font.primaryFamily};
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme })=>theme.palette.text.primary};
  margin: 0;
`;
const MarkAllReadButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "NotificationPanel.styles__MarkAllReadButton",
    componentId: "sc-3f2c7219-3"
})`
  background: none;
  border: none;
  padding: 0;
  font-family: ${(props)=>props.theme.font.secondaryFamily};
  font-size: 12px;
  color: ${({ theme })=>theme.palette.default.primary};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
const PanelBody = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NotificationPanel.styles__PanelBody",
    componentId: "sc-3f2c7219-4"
})`
  flex: 1;
  overflow-y: auto;
  max-height: 400px;
`;
const PanelFooter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NotificationPanel.styles__PanelFooter",
    componentId: "sc-3f2c7219-5"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-top: 1px solid ${({ theme })=>theme.palette.border.default};
`;
const ViewAllLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "NotificationPanel.styles__ViewAllLink",
    componentId: "sc-3f2c7219-6"
})`
  background: none;
  border: none;
  padding: 0;
  font-family: ${(props)=>props.theme.font.secondaryFamily};
  font-size: 13px;
  color: ${({ theme })=>theme.palette.default.primary};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;
const EmptyState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "NotificationPanel.styles__EmptyState",
    componentId: "sc-3f2c7219-7"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px 16px;
  gap: 12px;
`;
const EmptyStateText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "NotificationPanel.styles__EmptyStateText",
    componentId: "sc-3f2c7219-8"
})`
  font-family: ${(props)=>props.theme.font.secondaryFamily};
  font-size: 14px;
  color: ${({ theme })=>theme.palette.text.muted};
  margin: 0;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationPanel",
    ()=>NotificationPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NotificationItem$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NotificationItem/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NotificationItem$2f$NotificationItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/NotificationItem/NotificationItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/NotificationContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$navigation$2f$internalPath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/navigation/internalPath.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBell$2f$IconBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconBell/IconBell.tsx [app-client] (ecmascript)");
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
const NotificationPanel = ({ isOpen, onClose, dataTestId = 'notification-panel-root', className })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { notifications, isLoading, markAsRead, markAllAsRead, loadNotifications } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"])();
    // #1479: Die Liste lädt erst beim Öffnen, nicht mit jeder Seite.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationPanel.useEffect": ()=>{
            if (isOpen) void loadNotifications();
        }
    }["NotificationPanel.useEffect"], [
        isOpen,
        loadNotifications
    ]);
    // Close panel on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationPanel.useEffect": ()=>{
            if (!isOpen) return;
            const handleClickOutside = {
                "NotificationPanel.useEffect.handleClickOutside": (event)=>{
                    if (panelRef.current && !panelRef.current.contains(event.target)) {
                        // Check if the click was on the bell button (parent manages toggle)
                        const target = event.target;
                        if (target.closest('[data-testid="header-notifications-button"]')) return;
                        onClose();
                    }
                }
            }["NotificationPanel.useEffect.handleClickOutside"];
            // Delay to avoid immediate close on the same click that opens
            const timer = setTimeout({
                "NotificationPanel.useEffect.timer": ()=>{
                    document.addEventListener('mousedown', handleClickOutside);
                }
            }["NotificationPanel.useEffect.timer"], 0);
            return ({
                "NotificationPanel.useEffect": ()=>{
                    clearTimeout(timer);
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["NotificationPanel.useEffect"];
        }
    }["NotificationPanel.useEffect"], [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    const handleNotificationClick = async (notification)=>{
        if (!notification.isRead) {
            await markAsRead(notification.id);
        }
        const path = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$navigation$2f$internalPath$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toInternalPath"])(notification.link);
        if (path) {
            router.push(path);
        }
        onClose();
    };
    const handleMarkAllRead = async ()=>{
        await markAllAsRead();
    };
    const handleViewAll = ()=>{
        router.push('/notifications');
        onClose();
    };
    const unreadNotifications = notifications.filter((n)=>!n.isRead);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: panelRef,
        "data-testid": dataTestId,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelHeader"], {
                "data-testid": "notification-panel-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelTitle"], {
                        children: tr('notifications.title', {
                            defaultValue: 'Notifications'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    unreadNotifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkAllReadButton"], {
                        onClick: handleMarkAllRead,
                        "data-testid": "notification-mark-all-read",
                        type: "button",
                        children: tr('notifications.markAllRead', {
                            defaultValue: 'Mark all as read'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelBody"], {
                "data-testid": "notification-panel-body",
                children: isLoading && notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                    "data-testid": "notification-loading",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyStateText"], {
                        children: tr('notifications.loading', {
                            defaultValue: 'Loading...'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                    "data-testid": "notification-empty",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBell$2f$IconBell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBell"], {
                            color: theme.palette.default.grey
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyStateText"], {
                            children: tr('notifications.empty', {
                                defaultValue: 'No notifications'
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : notifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$NotificationItem$2f$NotificationItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationItem"], {
                        notification: notification,
                        onClick: handleNotificationClick,
                        dataTestId: `notification-item-${notification.id}`
                    }, notification.id, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PanelFooter"], {
                "data-testid": "notification-panel-footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewAllLink"], {
                    onClick: handleViewAll,
                    "data-testid": "notification-view-all",
                    type: "button",
                    children: tr('notifications.viewAll', {
                        defaultValue: 'View all notifications'
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx",
        lineNumber: 98,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(NotificationPanel, "aMrXDjno2TmZqXI2TnTC4Ijkods=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"]
    ];
});
_c = NotificationPanel;
;
var _c;
__turbopack_context__.k.register(_c, "NotificationPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/NotificationPanel/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$NotificationPanel$2f$NotificationPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/NotificationPanel/NotificationPanel.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/NotificationContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "useNotifications",
    ()=>useNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
// #1494: über die Brücke — das SDK lädt erst nach dem ersten Rendern
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/runtimeEnv.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useShellBootstrap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSessionComplete.ts [app-client] (ecmascript)");
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
// Bounded exponential backoff for the SSE reconnect — a flat infinite retry
// hammers the endpoint forever on a permanent failure (e.g. 401 after session
// loss). Cap both the delay and the number of attempts.
const SSE_RECONNECT_BASE_DELAY = 5000;
const SSE_RECONNECT_MAX_DELAY = 60000;
const SSE_MAX_RECONNECT_ATTEMPTS = 6;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function NotificationProvider({ children }) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const sessionComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"])();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [unreadCount, setUnreadCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const eventSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sseReconnectCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const connectSSERef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        "NotificationProvider.useRef[connectSSERef]": ()=>{}
    }["NotificationProvider.useRef[connectSSERef]"]);
    // #1479: Die Liste lädt erst, wenn jemand sie braucht (Panel, Seite) — der
    // Zähler kommt aus dem Bootstrap und dem SSE-Stream.
    const listRequestedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const bootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"])();
    const bootstrapUnread = bootstrap.data?.unreadCount;
    const bootstrapFailed = bootstrap.isError || bootstrap.isSuccess && bootstrapUnread == null;
    const fetchNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[fetchNotifications]": async ()=>{
            listRequestedRef.current = true;
            try {
                setIsLoading(true);
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/notifications/?limit=20');
                setNotifications(response.data.data || []);
            } catch  {
                // Silently fail - notifications are non-critical; next open retries
                listRequestedRef.current = false;
            } finally{
                setIsLoading(false);
            }
        }
    }["NotificationProvider.useCallback[fetchNotifications]"], []);
    const loadNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[loadNotifications]": async ()=>{
            if (listRequestedRef.current) return;
            await fetchNotifications();
        }
    }["NotificationProvider.useCallback[loadNotifications]"], [
        fetchNotifications
    ]);
    const fetchUnreadCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[fetchUnreadCount]": async ()=>{
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/notifications/unread-count');
                setUnreadCount(response.data.data?.count || 0);
            } catch  {
            // Silently fail
            }
        }
    }["NotificationProvider.useCallback[fetchUnreadCount]"], []);
    const refreshNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[refreshNotifications]": async ()=>{
            await Promise.all([
                fetchNotifications(),
                fetchUnreadCount()
            ]);
        }
    }["NotificationProvider.useCallback[refreshNotifications]"], [
        fetchNotifications,
        fetchUnreadCount
    ]);
    const markAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[markAsRead]": async (id)=>{
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].patch(`/notifications/${id}/read`);
                setNotifications({
                    "NotificationProvider.useCallback[markAsRead]": (prev)=>prev.map({
                            "NotificationProvider.useCallback[markAsRead]": (n)=>n.id === id ? {
                                    ...n,
                                    isRead: true,
                                    readAt: new Date().toISOString()
                                } : n
                        }["NotificationProvider.useCallback[markAsRead]"])
                }["NotificationProvider.useCallback[markAsRead]"]);
                setUnreadCount({
                    "NotificationProvider.useCallback[markAsRead]": (prev)=>Math.max(0, prev - 1)
                }["NotificationProvider.useCallback[markAsRead]"]);
            } catch  {
            // Silently fail
            }
        }
    }["NotificationProvider.useCallback[markAsRead]"], []);
    const markAllAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[markAllAsRead]": async ()=>{
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].patch('/notifications/read-all');
                setNotifications({
                    "NotificationProvider.useCallback[markAllAsRead]": (prev)=>prev.map({
                            "NotificationProvider.useCallback[markAllAsRead]": (n)=>({
                                    ...n,
                                    isRead: true,
                                    readAt: new Date().toISOString()
                                })
                        }["NotificationProvider.useCallback[markAllAsRead]"])
                }["NotificationProvider.useCallback[markAllAsRead]"]);
                setUnreadCount(0);
            } catch  {
            // Silently fail
            }
        }
    }["NotificationProvider.useCallback[markAllAsRead]"], []);
    // Connect SSE
    const connectSSE = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[connectSSE]": ()=>{
            if (eventSourceRef.current) {
                eventSourceRef.current.close();
            }
            const eventSource = new EventSource('/api/notifications/events/');
            eventSourceRef.current = eventSource;
            eventSource.onopen = ({
                "NotificationProvider.useCallback[connectSSE]": ()=>{
                    sseReconnectCountRef.current = 0;
                }
            })["NotificationProvider.useCallback[connectSSE]"];
            eventSource.onmessage = ({
                "NotificationProvider.useCallback[connectSSE]": (event)=>{
                    try {
                        const data = JSON.parse(event.data);
                        if (data.type === 'notification') {
                            const newNotification = data.payload;
                            setNotifications({
                                "NotificationProvider.useCallback[connectSSE]": (prev)=>[
                                        newNotification,
                                        ...prev.slice(0, 19)
                                    ]
                            }["NotificationProvider.useCallback[connectSSE]"]);
                            setUnreadCount({
                                "NotificationProvider.useCallback[connectSSE]": (prev)=>prev + 1
                            }["NotificationProvider.useCallback[connectSSE]"]);
                        } else if (data.type === 'unread_count') {
                            setUnreadCount(data.payload.count);
                        }
                    // Ignore 'connected' and other types
                    } catch  {
                    // Ignore parse errors
                    }
                }
            })["NotificationProvider.useCallback[connectSSE]"];
            eventSource.onerror = ({
                "NotificationProvider.useCallback[connectSSE]": ()=>{
                    eventSource.close();
                    eventSourceRef.current = null;
                    sseReconnectCountRef.current++;
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"]({
                        category: 'sse',
                        message: `SSE notification connection lost (reconnect #${sseReconnectCountRef.current})`,
                        level: 'warning'
                    });
                    // Report to Sentry after 3 consecutive failures (avoids noise from single blips)
                    if (sseReconnectCountRef.current === 3) {
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureMessage"]('SSE notification connection failing repeatedly', {
                            level: 'warning',
                            tags: {
                                component: 'notifications',
                                reconnectCount: String(sseReconnectCountRef.current)
                            }
                        });
                    }
                    // Give up after the cap so a permanent failure can't hammer the endpoint
                    // forever; a page reload re-establishes the stream.
                    if (sseReconnectCountRef.current > SSE_MAX_RECONNECT_ATTEMPTS) return;
                    // Reconnect with bounded exponential backoff, via ref to avoid
                    // self-reference in the closure.
                    const delay = Math.min(SSE_RECONNECT_BASE_DELAY * 2 ** (sseReconnectCountRef.current - 1), SSE_RECONNECT_MAX_DELAY);
                    reconnectTimeoutRef.current = setTimeout({
                        "NotificationProvider.useCallback[connectSSE]": ()=>{
                            connectSSERef.current();
                        }
                    }["NotificationProvider.useCallback[connectSSE]"], delay);
                }
            })["NotificationProvider.useCallback[connectSSE]"];
        }
    }["NotificationProvider.useCallback[connectSSE]"], []);
    connectSSERef.current = connectSSE;
    // #1479: Anfangswert des Zählers aus dem Bootstrap. Fehlt er (Teil oder
    // ganzer Bootstrap fehlgeschlagen), gezielt den Einzelendpunkt fragen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationProvider.useEffect": ()=>{
            if (typeof bootstrapUnread === 'number') setUnreadCount(bootstrapUnread);
        }
    }["NotificationProvider.useEffect"], [
        bootstrapUnread
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationProvider.useEffect": ()=>{
            if (bootstrapFailed) void fetchUnreadCount();
        }
    }["NotificationProvider.useEffect"], [
        bootstrapFailed,
        fetchUnreadCount
    ]);
    // Initialize on auth. Skipped in Storybook — the static logged-in session
    // would otherwise open a live EventSource per story (×N on autodocs pages),
    // flooding the tab.
    // #1548: Toasts speichern sich nur als Benachrichtigung, solange die API
    // antwortet (lib/toast.ts) — also mit dieser Hülle und vollständiger Sitzung.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationProvider.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setToastPersistence"])(sessionComplete);
            return ({
                "NotificationProvider.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setToastPersistence"])(false)
            })["NotificationProvider.useEffect"];
        }
    }["NotificationProvider.useEffect"], [
        sessionComplete
    ]);
    // #1548: erst mit vollständiger Sitzung — in der Teil-Sitzung (Startpasswort,
    // offener zweiter Faktor) antwortet der Stream 401, und der Wiederaufbau
    // versuchte es sieben Mal.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationProvider.useEffect": ()=>{
            if (sessionComplete && session && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStorybookRuntime"])()) {
                connectSSE();
            }
            return ({
                "NotificationProvider.useEffect": ()=>{
                    if (eventSourceRef.current) {
                        eventSourceRef.current.close();
                        eventSourceRef.current = null;
                    }
                    if (reconnectTimeoutRef.current) {
                        clearTimeout(reconnectTimeoutRef.current);
                        reconnectTimeoutRef.current = null;
                    }
                }
            })["NotificationProvider.useEffect"];
        }
    }["NotificationProvider.useEffect"], [
        sessionComplete,
        session,
        connectSSE
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: {
            notifications,
            unreadCount,
            isLoading,
            markAsRead,
            markAllAsRead,
            refreshNotifications,
            loadNotifications
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/NotificationContext.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_s(NotificationProvider, "/syPoxHxz7UFpPNT/MpErHNakMo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"]
    ];
});
_c = NotificationProvider;
function useNotifications() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotifications must be used within a NotificationProvider');
    }
    return context;
}
_s1(useNotifications, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "NotificationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/UserContextContext.tsx [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserContextProvider",
    ()=>UserContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useShellBootstrap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/userContextValue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextSeed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/userContextSeed.ts [app-client] (ecmascript)");
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
const UserContextProvider = ({ children, initialUserContext = null })=>{
    _s();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const bootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const userContext = bootstrap.data?.userContext ?? null;
    // #1887: Server-Startwert nur für die Navigation (startContext), solange er
    // zur Sitzung passt (userContextSeed.ts). `userContext`/`loading` bleiben
    // beim Bootstrap: Seiten, die darauf warten (EntityListPage mountet die
    // Tabelle erst danach, Listen-Einstellungen #1812 lesen dann den
    // Browser-Speicher), rendern weiter nie beim Server-Render oder Hydrieren.
    const seed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextSeed$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seedGilt"])(initialUserContext, status, session?.user) ? initialUserContext : null;
    const startContext = userContext ?? seed;
    const unauthenticated = status === 'unauthenticated';
    // isLoading (= pending UND fetching), nicht isPending: bei deaktivierter
    // Query (Storybook) bliebe isPending sonst für immer true.
    const loading = status === 'loading' || !unauthenticated && bootstrap.isLoading;
    const error = unauthenticated ? tr('common.userContext.loginRequired', {
        defaultValue: 'Please log in to view this page'
    }) : bootstrap.isError ? tr('common.userContext.loadError', {
        defaultValue: 'Failed to load user permissions'
    }) : null;
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "UserContextProvider.useMemo[contextValue]": ()=>({
                userContext,
                startContext,
                loading,
                error
            })
    }["UserContextProvider.useMemo[contextValue]"], [
        userContext,
        startContext,
        loading,
        error
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserContextContext"].Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/UserContextContext.tsx",
        lineNumber: 62,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(UserContextProvider, "1vBmoSms/BzfR6Kn9lHNgqaD0r4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = UserContextProvider;
var _c;
__turbopack_context__.k.register(_c, "UserContextProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/WorkingHoursTimerContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IDLE_STATE",
    ()=>IDLE_STATE,
    "WorkingHoursTimerProvider",
    ()=>WorkingHoursTimerProvider,
    "formatElapsed",
    ()=>formatElapsed,
    "useWorkingHoursTimer",
    ()=>useWorkingHoursTimer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/axios/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/runtimeEnv.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useShellBootstrap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$workingHoursTimerAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/workingHoursTimerAccess.ts [app-client] (ecmascript)");
;
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
// Dialoge (vergessener Timer, Konflikt) erst laden, wenn ein Stopp sie braucht.
const WorkingHoursTimerDialogs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.WorkingHoursTimerDialogs), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Molecule/WorkingHoursTimerBanner/WorkingHoursTimerDialogs.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = WorkingHoursTimerDialogs;
const IDLE_STATE = {
    status: 'idle',
    sessionId: null,
    startedAt: null,
    lastEventAt: null,
    pausedMs: 0,
    pausedSince: null
};
const WorkingHoursTimerContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function computeElapsedMs(state) {
    if (state.status === 'idle' || !state.startedAt) return 0;
    const start = new Date(state.startedAt).getTime();
    const now = Date.now();
    let elapsed = now - start - state.pausedMs;
    if (state.status === 'paused' && state.pausedSince) {
        elapsed -= now - new Date(state.pausedSince).getTime();
    }
    return elapsed < 0 ? 0 : elapsed;
}
function computeBreakMs(state) {
    if (state.status === 'idle') return 0;
    let breakMs = state.pausedMs;
    if (state.status === 'paused' && state.pausedSince) {
        breakMs += Date.now() - new Date(state.pausedSince).getTime();
    }
    return breakMs < 0 ? 0 : breakMs;
}
// Bounded exponential backoff for the SSE reconnect. A flat infinite retry
// hammers the endpoint forever on a permanent failure (e.g. a 401 after the
// session is lost), so cap both the delay and the number of attempts.
const SSE_RECONNECT_BASE_DELAY = 3000;
const SSE_RECONNECT_MAX_DELAY = 60000;
const SSE_MAX_RECONNECT_ATTEMPTS = 6;
function WorkingHoursTimerProvider({ children }) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"])();
    // #1576: Timer, Stream und Rückfall-Abruf nur, wer working-hours.create hat
    // (Rollendefinitionen, keine Rollenliste). #1548: erst mit vollständiger
    // Sitzung — davor antworten Stream und /timer/active mit 401.
    const hasTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$workingHoursTimerAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkingHoursTimerAccess"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(IDLE_STATE);
    const [events, setEvents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [elapsedMs, setElapsedMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [breakMs, setBreakMs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [problem, setProblem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Ein offener Dialog zeigt den Fehler seines Stopps selbst (kein Toast daneben)
    const problemRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    problemRef.current = problem;
    const [lastError, setLastError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const pendingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const eventSourceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectTimerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectAttemptsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const bootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"])();
    const bootstrapTimer = bootstrap.data?.timer;
    const bootstrapUpdatedAt = bootstrap.dataUpdatedAt;
    // `timer: null` heißt: kein Recht auf working-hours (z. B. accounting) —
    // dann bleibt der Timer leer. Nur ein gescheiterter Bootstrap fällt auf
    // den Einzelendpunkt zurück.
    const bootstrapFailed = bootstrap.isError;
    // Der Bootstrap-Stand gilt nur als ANFANGSzustand: spätere Schreibvorgänge
    // in den Bootstrap-Cache (Outlook-Refetch, Profil-Mutation) dürfen einen
    // inzwischen per POST/SSE geänderten Timer nicht zurücksetzen.
    const hydratedFromBootstrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkingHoursTimerProvider.useCallback[refresh]": async ()=>{
            if (!hasTimer || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStorybookRuntime"])()) return;
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/plastship/working-hours/timer/active/');
                const { events: nextEvents, ...nextState } = res.data.data ?? IDLE_STATE;
                setState(nextState);
                setEvents(nextEvents ?? []);
            } catch  {
            // Silent; keep current state
            } finally{
                setIsHydrated(true);
            }
        }
    }["WorkingHoursTimerProvider.useCallback[refresh]"], [
        hasTimer
    ]);
    // Cross-tab / cross-device sync: subscribe to server SSE stream.
    // Skipped in Storybook — the static logged-in session would otherwise open a
    // live EventSource per story (×N on autodocs pages), flooding the tab.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkingHoursTimerProvider.useEffect": ()=>{
            if (!hasTimer || ("TURBOPACK compile-time value", "object") === 'undefined' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStorybookRuntime"])()) return;
            reconnectAttemptsRef.current = 0;
            const connect = {
                "WorkingHoursTimerProvider.useEffect.connect": ()=>{
                    if (eventSourceRef.current) eventSourceRef.current.close();
                    const es = new EventSource('/api/plastship/working-hours/timer/stream/');
                    eventSourceRef.current = es;
                    es.onopen = ({
                        "WorkingHoursTimerProvider.useEffect.connect": ()=>{
                            reconnectAttemptsRef.current = 0;
                        }
                    })["WorkingHoursTimerProvider.useEffect.connect"];
                    es.onmessage = ({
                        "WorkingHoursTimerProvider.useEffect.connect": (ev)=>{
                            try {
                                const msg = JSON.parse(ev.data);
                                if (msg.type === 'state-change' && msg.payload) {
                                    setState(msg.payload.state);
                                    setEvents(msg.payload.events ?? []);
                                    // Anderswo gestoppt: ein offener Dialog dieses Stopps ist erledigt
                                    if (msg.payload.state.status === 'idle') setProblem(null);
                                }
                            } catch  {
                            // Ignore parse errors
                            }
                        }
                    })["WorkingHoursTimerProvider.useEffect.connect"];
                    es.onerror = ({
                        "WorkingHoursTimerProvider.useEffect.connect": ()=>{
                            es.close();
                            eventSourceRef.current = null;
                            if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
                            // Give up after the cap so a permanent failure can't hammer the endpoint
                            // forever; a page reload or tab refocus re-establishes the stream.
                            if (reconnectAttemptsRef.current >= SSE_MAX_RECONNECT_ATTEMPTS) return;
                            const delay = Math.min(SSE_RECONNECT_BASE_DELAY * 2 ** reconnectAttemptsRef.current, SSE_RECONNECT_MAX_DELAY);
                            reconnectAttemptsRef.current += 1;
                            reconnectTimerRef.current = setTimeout(connect, delay);
                        }
                    })["WorkingHoursTimerProvider.useEffect.connect"];
                }
            }["WorkingHoursTimerProvider.useEffect.connect"];
            connect();
            return ({
                "WorkingHoursTimerProvider.useEffect": ()=>{
                    if (reconnectTimerRef.current) clearTimeout(reconnectTimerRef.current);
                    eventSourceRef.current?.close();
                    eventSourceRef.current = null;
                }
            })["WorkingHoursTimerProvider.useEffect"];
        }
    }["WorkingHoursTimerProvider.useEffect"], [
        hasTimer
    ]);
    // Belt-and-suspenders: refetch when the tab regains focus
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkingHoursTimerProvider.useEffect": ()=>{
            if (typeof document === 'undefined') return;
            const onVisible = {
                "WorkingHoursTimerProvider.useEffect.onVisible": ()=>{
                    if (document.visibilityState === 'visible') void refresh();
                }
            }["WorkingHoursTimerProvider.useEffect.onVisible"];
            document.addEventListener('visibilitychange', onVisible);
            return ({
                "WorkingHoursTimerProvider.useEffect": ()=>document.removeEventListener('visibilitychange', onVisible)
            })["WorkingHoursTimerProvider.useEffect"];
        }
    }["WorkingHoursTimerProvider.useEffect"], [
        refresh
    ]);
    // Hydrate when auth resolves. In Storybook, settle to an idle, hydrated state
    // without hitting the network (the static session would otherwise fetch once
    // per story).
    // #1479: Der Anfangszustand kommt aus dem Shell-Bootstrap (`/me/bootstrap/`);
    // nur wenn der Bootstrap scheitert, gezielt `/timer/active` fragen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkingHoursTimerProvider.useEffect": ()=>{
            if (!hasTimer || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$runtimeEnv$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStorybookRuntime"])()) {
                hydratedFromBootstrapRef.current = false;
                setState(IDLE_STATE);
                setEvents([]);
                setIsHydrated(true);
                return;
            }
            if (hydratedFromBootstrapRef.current || bootstrapUpdatedAt === 0) return;
            hydratedFromBootstrapRef.current = true;
            if (bootstrapTimer) {
                const { events: nextEvents, ...nextState } = bootstrapTimer;
                setState(nextState);
                setEvents(nextEvents ?? []);
            }
            setIsHydrated(true);
        // Nur den ersten Bootstrap-Stand übernehmen (siehe hydratedFromBootstrapRef).
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["WorkingHoursTimerProvider.useEffect"], [
        hasTimer,
        bootstrapUpdatedAt
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkingHoursTimerProvider.useEffect": ()=>{
            if (hasTimer && bootstrapFailed) void refresh();
        }
    }["WorkingHoursTimerProvider.useEffect"], [
        hasTimer,
        bootstrapFailed,
        refresh
    ]);
    // Live elapsed + break tick — one ticks while running, the other while paused
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkingHoursTimerProvider.useEffect": ()=>{
            setElapsedMs(computeElapsedMs(state));
            setBreakMs(computeBreakMs(state));
            if (state.status === 'idle') return;
            const id = window.setInterval({
                "WorkingHoursTimerProvider.useEffect.id": ()=>{
                    setElapsedMs(computeElapsedMs(state));
                    setBreakMs(computeBreakMs(state));
                }
            }["WorkingHoursTimerProvider.useEffect.id"], 1000);
            return ({
                "WorkingHoursTimerProvider.useEffect": ()=>window.clearInterval(id)
            })["WorkingHoursTimerProvider.useEffect"];
        }
    }["WorkingHoursTimerProvider.useEffect"], [
        state
    ]);
    const postEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkingHoursTimerProvider.useCallback[postEvent]": async (type, options)=>{
            if (pendingRef.current) return {
                createdEntryIds: []
            };
            pendingRef.current = true;
            setPending(true);
            const clientId = typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post('/plastship/working-hours/timer/events/', {
                    type,
                    clientId,
                    ...type === 'stop' && options?.actualEnd ? {
                        actualEnd: options.actualEnd
                    } : {},
                    ...type === 'stop' && options?.discard ? {
                        discard: true
                    } : {}
                });
                setState(res.data.data.state);
                setEvents(res.data.data.events ?? []);
                setProblem(null);
                setLastError(null);
                // Other tabs/devices will receive the same update via SSE — no client broadcast needed.
                const createdEntryIds = res.data.data.createdEntryIds ?? [];
                if (type === 'stop' && createdEntryIds.length > 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('workingHoursTimer.saved', {
                        defaultValue: 'Arbeitszeit gespeichert'
                    }), {
                        context: {
                            entityType: 'WorkingHoursEntry',
                            entityId: createdEntryIds[0],
                            action: tr('notifications.action.created', {
                                defaultValue: 'Erstellt'
                            })
                        }
                    });
                } else if (type === 'stop' && !options?.discard) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(tr('workingHoursTimer.tooShort', {
                        defaultValue: 'Unter einer Minute – kein Eintrag angelegt'
                    }));
                }
                return {
                    createdEntryIds
                };
            } catch (error) {
                const body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAxiosError"])(error) ? error.response?.data : undefined;
                const code = body?.code ?? 'error';
                if (body?.state) setState(body.state);
                if (code === 'forgotten' && body?.startedAt) {
                    setProblem({
                        code: 'forgotten',
                        startedAt: body.startedAt
                    });
                } else if (code === 'conflict') {
                    setProblem({
                        code: 'conflict',
                        issues: body?.issues ?? [],
                        proposed: body?.proposed ?? []
                    });
                } else if (!problemRef.current) {
                    setLastError(code);
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('workingHoursTimer.error', {
                        defaultValue: 'Timer-Aktion fehlgeschlagen'
                    }));
                }
                return {
                    createdEntryIds: [],
                    error: code
                };
            } finally{
                pendingRef.current = false;
                setPending(false);
            }
        }
    }["WorkingHoursTimerProvider.useCallback[postEvent]"], [
        tr
    ]);
    const clearProblem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WorkingHoursTimerProvider.useCallback[clearProblem]": ()=>setProblem(null)
    }["WorkingHoursTimerProvider.useCallback[clearProblem]"], []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "WorkingHoursTimerProvider.useMemo[value]": ()=>({
                enabled: hasTimer,
                state,
                events,
                isHydrated,
                pending,
                elapsedMs,
                breakMs,
                postEvent,
                problem,
                clearProblem,
                lastError,
                refresh
            })
    }["WorkingHoursTimerProvider.useMemo[value]"], [
        hasTimer,
        state,
        events,
        isHydrated,
        pending,
        elapsedMs,
        breakMs,
        postEvent,
        problem,
        clearProblem,
        lastError,
        refresh
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkingHoursTimerContext.Provider, {
        value: value,
        children: [
            children,
            problem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WorkingHoursTimerDialogs, {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/context/WorkingHoursTimerContext.tsx",
                lineNumber: 400,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/context/WorkingHoursTimerContext.tsx",
        lineNumber: 398,
        columnNumber: 5
    }, this);
}
_s(WorkingHoursTimerProvider, "R01hRJWPYMC691cBQGFUyYJcHIU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$workingHoursTimerAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkingHoursTimerAccess"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"]
    ];
});
_c1 = WorkingHoursTimerProvider;
function useWorkingHoursTimer() {
    _s1();
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WorkingHoursTimerContext);
    if (!ctx) {
        throw new Error('useWorkingHoursTimer must be used within WorkingHoursTimerProvider');
    }
    return ctx;
}
_s1(useWorkingHoursTimer, "/dMy7t63NXD4eYACoT93CePwGrg=");
function formatElapsed(ms) {
    if (ms <= 0) return '00:00';
    const totalSec = Math.floor(ms / 1000);
    const h = Math.floor(totalSec / 3600);
    const m = Math.floor(totalSec % 3600 / 60);
    const s = totalSec % 60;
    const pad = (n)=>n.toString().padStart(2, '0');
    return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}
var _c, _c1;
__turbopack_context__.k.register(_c, "WorkingHoursTimerDialogs");
__turbopack_context__.k.register(_c1, "WorkingHoursTimerProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/userContextSeed.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seedGilt",
    ()=>seedGilt
]);
function seedGilt(seed, status, sessionUser) {
    if (!seed) return false;
    if (status === 'unauthenticated') return false;
    if (status === 'loading') return true;
    return !!sessionUser?.email && sessionUser.email === seed.email && !!sessionUser.role && sessionUser.role === seed.role;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/userContextValue.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserContextContext",
    ()=>UserContextContext,
    "useSharedUserContext",
    ()=>useSharedUserContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const UserContextContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    userContext: null,
    loading: true,
    error: null
});
const useSharedUserContext = ()=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UserContextContext);
};
_s(useSharedUserContext, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/workingHoursTimerAccess.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canUseWorkingHoursTimer",
    ()=>canUseWorkingHoursTimer,
    "useWorkingHoursTimerAccess",
    ()=>useWorkingHoursTimerAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSessionComplete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function canUseWorkingHoursTimer(userContext) {
    if (!userContext) return false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, 'working-hours', 'create');
}
function useWorkingHoursTimerAccess() {
    _s();
    const sessionComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"])();
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    if (!sessionComplete) return false;
    return canUseWorkingHoursTimer(userContext);
}
_s(useWorkingHoursTimerAccess, "o06klJrjTpm8Y/6/dqO5lKqb9Kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/helper/highlightMatch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #486: Zerlegt einen Text in Treffer- und Nicht-Treffer-Segmente.
 *
 * Warum ueberhaupt: Die Suche laeuft ueber SOSL `IN ALL FIELDS` und matcht
 * damit auch Felder, die in der Ergebniszeile gar nicht stehen. Ohne
 * Hervorhebung sieht der Nutzer eine Zeile, ohne zu wissen, warum sie da ist.
 *
 * Bewusst nur die Zerlegung, kein JSX: so ist die Logik ohne DOM testbar, und
 * Ergebnisliste wie Suggestions-Dropdown benutzen dieselbe Quelle.
 */ __turbopack_context__.s([
    "highlightMatch",
    ()=>highlightMatch
]);
/** Sonderzeichen entschaerfen — Suchbegriffe wie `MP-0308` oder `(netto)` sind hier Alltag. */ function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
function highlightMatch(text, term) {
    if (!text) return [];
    const needle = term.trim();
    // Ohne diesen Riegel waere bei leerem Begriff jedes Zeichen ein Treffer und
    // die ganze Zeile wuerde leuchten.
    if (!needle) return [
        {
            text,
            match: false
        }
    ];
    const pattern = new RegExp(escapeRegExp(needle), 'gi') // nosemgrep: javascript.lang.security.audit.detect-non-literal-regexp.detect-non-literal-regexp — Suchbegriff per escapeRegExp maskiert
    ;
    const segments = [];
    let lastIndex = 0;
    for (const match of text.matchAll(pattern)){
        const start = match.index ?? 0;
        if (start > lastIndex) {
            segments.push({
                text: text.slice(lastIndex, start),
                match: false
            });
        }
        // Aus dem Originaltext schneiden, nicht den Suchbegriff einsetzen: sonst
        // wuerde die Schreibweise des Nutzers die des Datensatzes ueberschreiben.
        segments.push({
            text: text.slice(start, start + match[0].length),
            match: true
        });
        lastIndex = start + match[0].length;
    }
    if (lastIndex < text.length) {
        segments.push({
            text: text.slice(lastIndex),
            match: false
        });
    }
    return segments;
}
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
"[project]/apps/web/src/app/hooks/useOutlookStatus.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOutlookStatus",
    ()=>useOutlookStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useShellBootstrap.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useOutlookStatus() {
    _s();
    const { status: sessionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const isAuthenticated = sessionStatus === 'authenticated';
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const isAdmin = userContext?.role === 'admin';
    const isStaffOrAdmin = userContext?.role === 'admin' || userContext?.role === 'staff';
    const bootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"])();
    const updateBootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateShellBootstrap"])();
    // Wirft nie (wie früher query.refetch): Aufrufer rufen es auch ohne await
    // bzw. nach einem erfolgreichen DELETE — ein gescheiterter Status-Refresh
    // darf dort keinen Fehler-Toast oder eine unbehandelte Ablehnung auslösen.
    const refetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useOutlookStatus.useCallback[refetch]": async ()=>{
            try {
                const fresh = (await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/auth/outlook/status')).data;
                updateBootstrap({
                    "useOutlookStatus.useCallback[refetch]": (current)=>({
                            ...current,
                            outlook: fresh
                        })
                }["useOutlookStatus.useCallback[refetch]"]);
                return fresh;
            } catch (error) {
                console.error('[useOutlookStatus] Outlook-Status konnte nicht neu geladen werden:', error);
                return undefined;
            }
        }
    }["useOutlookStatus.useCallback[refetch]"], [
        updateBootstrap
    ]);
    const status = bootstrap.data?.outlook ?? null;
    const linked = status?.linked ?? false;
    return {
        status,
        linked,
        email: status?.email ?? null,
        mailWrite: status?.mailWrite ?? false,
        outlookLinked: linked,
        isStaffOrAdmin,
        isAdmin,
        isAuthenticated,
        isLoading: bootstrap.isLoading,
        refetch
    };
}
_s(useOutlookStatus, "BpSDlkRkJCqULErG6th+5SBggJU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateShellBootstrap"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useRecordLabel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useRecordLabel",
    ()=>useRecordLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/records/recordLabel.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
function useRecordLabel() {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useRecordLabel.useCallback[label]": (...candidates)=>{
            const text = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordLabel"])(...candidates);
            return text !== null ? {
                text,
                unnamed: false
            } : {
                text: tr('common.unnamedRecord', {
                    defaultValue: 'Unnamed'
                }),
                unnamed: true
            };
        }
    }["useRecordLabel.useCallback[label]"], [
        tr
    ]);
    return {
        label
    };
}
_s(useRecordLabel, "9yG2HL3UEFhPX0IicCAPuq8cflk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
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
"[project]/apps/web/src/app/hooks/useSpecializedHooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useBulkUserOperations",
    ()=>useBulkUserOperations,
    "useOrderTasks",
    ()=>useOrderTasks,
    "useRIGKMapAccounts",
    ()=>useRIGKMapAccounts,
    "useSalesforceContactHandovers",
    ()=>useSalesforceContactHandovers,
    "useSalesforceMapAccounts",
    ()=>useSalesforceMapAccounts,
    "useSalesforceMonitoredMaterials",
    ()=>useSalesforceMonitoredMaterials,
    "useSalesforceMonitoredMaterialsPaginated",
    ()=>useSalesforceMonitoredMaterialsPaginated,
    "useUpdateUserProfile",
    ()=>useUpdateUserProfile,
    "useUserImage",
    ()=>useUserImage,
    "useUserProfile",
    ()=>useUserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useShellBootstrap.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature();
;
;
;
const useUserProfile = (options)=>{
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'user-profile'
        ],
        queryFn: {
            "useUserProfile.useQuery": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/plastship/user/profile');
                return response.data;
            }
        }["useUserProfile.useQuery"],
        staleTime: 60 * 1000,
        retry: 3,
        enabled: options?.enabled
    });
};
_s(useUserProfile, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useUpdateUserProfile = ()=>{
    _s1();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const updateBootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateShellBootstrap"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateUserProfile.useMutation": async (data)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].put('/plastship/user/profile', data);
                return response.data.user;
            }
        }["useUpdateUserProfile.useMutation"],
        onSuccess: {
            "useUpdateUserProfile.useMutation": (user)=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'user-profile'
                    ]
                });
                updateBootstrap({
                    "useUpdateUserProfile.useMutation": (current)=>({
                            ...current,
                            profile: {
                                ...current.profile,
                                ...user
                            }
                        })
                }["useUpdateUserProfile.useMutation"]);
            }
        }["useUpdateUserProfile.useMutation"]
    });
};
_s1(useUpdateUserProfile, "+u/QTS9iw9ffCOJ1T+WYkSZXy6M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUpdateShellBootstrap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useUserImage = (fallbackImage, options)=>{
    _s2();
    const bootstrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"])();
    const enabled = options?.enabled ?? true;
    const image = enabled ? bootstrap.data?.profile?.image : undefined;
    return {
        userImage: image || fallbackImage,
        isLoading: enabled && bootstrap.isLoading,
        error: bootstrap.error ?? undefined
    };
};
_s2(useUserImage, "baUoRMHseEZH3vmcqCcl3P4eYHw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"]
    ];
});
const useBulkUserOperations = ()=>{
    _s3();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useBulkUserOperations.useMutation": async (operation)=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].patch('/plastship/users', operation);
                return response.data;
            }
        }["useBulkUserOperations.useMutation"],
        onSuccess: {
            "useBulkUserOperations.useMutation": ()=>{
                queryClient.invalidateQueries({
                    queryKey: [
                        'plastship-users'
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'user-profile'
                    ]
                });
            }
        }["useBulkUserOperations.useMutation"]
    });
};
_s3(useBulkUserOperations, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useRIGKMapAccounts = (options)=>{
    _s4();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'rigk-map-accounts',
            options?.limit,
            options?.filters
        ],
        queryFn: {
            "useRIGKMapAccounts.useQuery": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/rigk/accounts/map', {
                    params: {
                        limit: options?.limit || 1000,
                        ...options?.filters
                    }
                });
                return response.data;
            }
        }["useRIGKMapAccounts.useQuery"],
        staleTime: 2 * 60 * 1000,
        retry: 3,
        enabled: options?.enabled !== false
    });
};
_s4(useRIGKMapAccounts, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useSalesforceMapAccounts = (queryParams, options)=>{
    _s5();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'salesforce-map-accounts',
            queryParams
        ],
        queryFn: {
            "useSalesforceMapAccounts.useQuery": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/salesforce/accounts/map', {
                    params: queryParams
                });
                return response.data;
            }
        }["useSalesforceMapAccounts.useQuery"],
        staleTime: 2 * 60 * 1000,
        retry: 3,
        enabled: !options?.skip && options?.enabled !== false,
        refetchInterval: options?.refetchInterval
    });
};
_s5(useSalesforceMapAccounts, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useOrderTasks = (orderId, options = {})=>{
    _s6();
    const { enabled = true, pagination = {
        page: 1,
        pageSize: 10
    }, sort = {
        field: 'ActivityDate',
        order: 'DESC'
    }, debug = false } = options;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'orderTasks',
            orderId,
            pagination,
            sort,
            debug
        ],
        queryFn: {
            "useOrderTasks.useQuery": async ()=>{
                if (!orderId) {
                    return {
                        data: [],
                        pagination: {
                            page: 1,
                            pageSize: 10,
                            totalPages: 0,
                            totalRecords: 0,
                            hasMore: false
                        },
                        sort: {
                            field: 'Name',
                            order: 'ASC'
                        } // Add missing sort property
                    };
                }
                // Fetch data from our dedicated endpoint
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/salesforce/order/${orderId}/tasks`, {
                    params: {
                        page: pagination.page,
                        pageSize: pagination.pageSize,
                        sortField: sort.field,
                        sortOrder: sort.order,
                        debug: debug ? 'true' : 'false'
                    }
                });
                return response.data;
            }
        }["useOrderTasks.useQuery"],
        enabled: !!orderId && enabled
    });
};
_s6(useOrderTasks, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useSalesforceMonitoredMaterials = (options)=>{
    _s7();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'salesforce-monitored-materials'
        ],
        queryFn: {
            "useSalesforceMonitoredMaterials.useQuery": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/salesforce/monitored-materials');
                return response.data;
            }
        }["useSalesforceMonitoredMaterials.useQuery"],
        staleTime: 60 * 1000,
        retry: 3,
        enabled: options?.enabled,
        refetchInterval: options?.refetchInterval
    });
};
_s7(useSalesforceMonitoredMaterials, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useSalesforceMonitoredMaterialsPaginated = (options)=>{
    _s8();
    const { page = 1, pageSize = 25, sortField = 'LastModifiedDate', sortOrder = 'DESC', enabled = true } = options || {};
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'salesforce-monitored-materials-paginated',
            {
                page,
                pageSize,
                sortField,
                sortOrder
            }
        ],
        queryFn: {
            "useSalesforceMonitoredMaterialsPaginated.useQuery": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/salesforce/monitored-materials', {
                    params: {
                        page,
                        pageSize,
                        sortField,
                        sortOrder
                    }
                });
                return response.data;
            }
        }["useSalesforceMonitoredMaterialsPaginated.useQuery"],
        enabled,
        staleTime: 60 * 1000,
        retry: 3
    });
};
_s8(useSalesforceMonitoredMaterialsPaginated, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const useSalesforceContactHandovers = (options)=>{
    _s9();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'salesforce-contact-handovers'
        ],
        queryFn: {
            "useSalesforceContactHandovers.useQuery": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/salesforce/contact-handovers');
                return response.data;
            }
        }["useSalesforceContactHandovers.useQuery"],
        staleTime: 60 * 1000,
        retry: 3,
        enabled: options?.enabled,
        refetchInterval: options?.refetchInterval
    });
};
_s9(useSalesforceContactHandovers, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserContext",
    ()=>useUserContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserContextContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserContextContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/userContextValue.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useUserContext() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSharedUserContext"])();
}
_s(useUserContext, "lxGWexjcHfjnyyw+QkRlk98bzV0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$userContextValue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSharedUserContext"]
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
"[project]/apps/web/src/config/entityFields/entityFieldI18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ENTITY_TEXT_PREFIX",
    ()=>ENTITY_TEXT_PREFIX,
    "collectEntityTexts",
    ()=>collectEntityTexts,
    "entityTextKey",
    ()=>entityTextKey,
    "localizeEntityFieldConfig",
    ()=>localizeEntityFieldConfig,
    "localizeField",
    ()=>localizeField,
    "localizePicklistOptions",
    ()=>localizePicklistOptions,
    "localizeRelatedList",
    ()=>localizeRelatedList,
    "localizeSection",
    ()=>localizeSection,
    "localizeTabGroup",
    ()=>localizeTabGroup,
    "translateEntityText",
    ()=>translateEntityText,
    "translateFieldLabel",
    ()=>translateFieldLabel
]);
/**
 * Texte der Feld-Configs in der Sprache des Nutzers (#1626)
 *
 * Die `*.fields.ts` führen ihre Anzeigetexte als lesbare Strings. Übersetzt
 * werden sie über einen Schlüssel, der aus dem Text selbst abgeleitet ist —
 * `entityFields.<Kurzform>_<Hash>` — mit dem Text als `defaultValue`:
 *
 * - niemand pflegt 2000 `labelKey` von Hand,
 * - derselbe Text hat überall dieselbe Übersetzung,
 * - ein geänderter Text bekommt automatisch einen neuen Schlüssel, eine
 *   veraltete Übersetzung kann also nicht stehen bleiben.
 *
 * Braucht ein Text je Kontext eine andere Übersetzung, hat ein explizites
 * `labelKey` an Feld, Sektion oder Related List Vorrang.
 *
 * Reine Funktionen ohne React — auch aus Tests und Skripten nutzbar. Der Hook
 * dazu liegt in `app/hooks/useEntityText.ts`.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/fieldLabels.ts [app-client] (ecmascript)");
;
const ENTITY_TEXT_PREFIX = 'entityFields.';
const UMLAUTE = {
    ä: 'ae',
    ö: 'oe',
    ü: 'ue',
    Ä: 'Ae',
    Ö: 'Oe',
    Ü: 'Ue',
    ß: 'ss'
};
/** FNV-1a, 32 Bit — klein, deterministisch, im Browser wie in Node gleich. */ const hash = (text)=>{
    let h = 0x811c9dc5;
    for(let i = 0; i < text.length; i++){
        h ^= text.charCodeAt(i);
        h = Math.imul(h, 0x01000193);
    }
    return (h >>> 0).toString(16).padStart(8, '0');
};
const entityTextKey = (text)=>{
    const kurzform = text.replace(/[äöüÄÖÜß]/g, (zeichen)=>UMLAUTE[zeichen]).replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 40);
    return `${ENTITY_TEXT_PREFIX}${kurzform ? `${kurzform}_` : ''}${hash(text)}`;
};
const translateEntityText = (tr, text, key)=>text ? tr(key ?? entityTextKey(text), {
        defaultValue: text
    }) : text;
const translateFieldLabel = (tr, apiName)=>translateEntityText(tr, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldLabel"])(apiName));
const localizePicklistOptions = (options, tr)=>options.map((option)=>({
            ...option,
            label: translateEntityText(tr, option.label, option.labelKey)
        }));
const localizeField = (field, tr)=>({
        ...field,
        label: translateEntityText(tr, field.label ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldLabel"])(field.apiName), field.labelKey),
        ...field.helpText ? {
            helpText: translateEntityText(tr, field.helpText)
        } : {},
        ...field.placeholder ? {
            placeholder: translateEntityText(tr, field.placeholder)
        } : {},
        ...field.picklistOptions ? {
            picklistOptions: localizePicklistOptions(field.picklistOptions, tr)
        } : {}
    });
const localizeSection = (section, tr)=>({
        ...section,
        label: translateEntityText(tr, section.label, section.labelKey),
        fields: section.fields.map((field)=>localizeField(field, tr))
    });
const localizeRelatedList = (relatedList, tr)=>({
        ...relatedList,
        label: translateEntityText(tr, relatedList.label, relatedList.labelKey)
    });
const localizeTabGroup = (group, tr)=>({
        ...group,
        label: translateEntityText(tr, group.label)
    });
const localizeEntityFieldConfig = (config, tr)=>({
        ...config,
        entityLabel: translateEntityText(tr, config.entityLabel, config.entityLabelKey),
        sections: config.sections.map((section)=>localizeSection(section, tr)),
        ...config.createSections ? {
            createSections: config.createSections.map((section)=>localizeSection(section, tr))
        } : {},
        ...config.tabGroups ? {
            tabGroups: config.tabGroups.map((group)=>localizeTabGroup(group, tr))
        } : {},
        ...config.relatedLists ? {
            relatedLists: config.relatedLists.map((list)=>localizeRelatedList(list, tr))
        } : {},
        ...config.relatedListTabGroups ? {
            relatedListTabGroups: config.relatedListTabGroups.map((group)=>localizeTabGroup(group, tr))
        } : {}
    });
const collectEntityTexts = (configs, /** Texte aus weiteren Quellen, die über denselben Schlüssel übersetzt werden */ extraTexts = [])=>{
    const texts = new Map();
    const explicitKeys = new Map();
    const collisions = [];
    const add = (text, key)=>{
        if (!text) return;
        if (key) {
            explicitKeys.set(key, text);
            return;
        }
        const derived = entityTextKey(text);
        const bekannt = texts.get(derived);
        if (bekannt !== undefined && bekannt !== text) collisions.push([
            bekannt,
            text
        ]);
        texts.set(derived, text);
    };
    const addApiNames = (apiNames)=>apiNames?.forEach((apiName)=>add((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldLabel"])(apiName)));
    const addSections = (sections)=>sections?.forEach((section)=>{
            add(section.label, section.labelKey);
            section.fields.forEach((field)=>{
                add(field.label ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFieldLabel"])(field.apiName), field.labelKey);
                add(field.helpText);
                add(field.placeholder);
                field.picklistOptions?.forEach((option)=>add(option.label, option.labelKey));
            });
        });
    for (const config of Object.values(configs)){
        add(config.entityLabel, config.entityLabelKey);
        addSections(config.sections);
        addSections(config.createSections);
        config.tabGroups?.forEach((group)=>add(group.label));
        config.relatedListTabGroups?.forEach((group)=>add(group.label));
        config.relatedLists?.forEach((list)=>{
            add(list.label, list.labelKey);
            addApiNames(list.fields);
            addApiNames(list.hiddenFields);
        });
        addApiNames(config.headerFields);
        addApiNames(config.systemFields);
    }
    Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$fieldLabels$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIELD_LABELS"]).forEach((label)=>add(label));
    extraTexts.forEach((text)=>add(text));
    return {
        texts,
        explicitKeys,
        collisions
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/config/entityFields/fieldLabels.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Field Label Mappings
 *
 * Maps Salesforce API names to correct German/English labels.
 * Fixes issues where umlauts were lost in API name encoding (ä→a, ö→o, ü→u, ß→ss).
 *
 * Usage:
 *   import { getFieldLabel } from '@/config/entityFields/fieldLabels'
 *   const label = getFieldLabel('Verh_ltnis__c') // Returns "Verhältnis"
 */ /**
 * Mapping of API names to corrected labels
 * Key: Salesforce API name
 * Value: Correct German/English label
 */ __turbopack_context__.s([
    "FIELD_LABELS",
    ()=>FIELD_LABELS,
    "getFieldLabel",
    ()=>getFieldLabel,
    "hasCustomLabel",
    ()=>hasCustomLabel
]);
const FIELD_LABELS = {
    // ===== Account Fields =====
    Verh_ltnis__c: 'Verhältnis',
    Standard_Gesch_ftsablauf__c: 'Standard Geschäftsablauf',
    Anzahl_KISS_Pr_fungen_avisiert__c: 'Anzahl KISS-Prüfungen avisiert',
    Kunde_Materialpr_fung__c: 'Kunde Materialprüfung',
    Ma_nahmen__c: 'Maßnahmen',
    Ust_ID__c: 'USt-ID',
    // ===== Order Fields =====
    Zust_ndiger_Kontakt_Lieferant__c: 'Zuständiger Kontakt Lieferant',
    Zust_ndiger_Kontakt_Kunde__c: 'Zuständiger Kontakt Kunde',
    Vorlage_AB_Stra_e__c: 'Vorlage AB Straße',
    Hinweis_Auftragsbest_tigung__c: 'Hinweis Auftragsbestätigung',
    Verpackung_bersetzung_EN_del__c: 'Verpackung Übersetzung EN',
    Tats_chliche_Liefermenge__c: 'Tatsächliche Liefermenge',
    Tats_chliches_Abholdatum__c: 'Tatsächliches Abholdatum',
    Tats_chliches_Lieferdatum__c: 'Tatsächliches Lieferdatum',
    AVV_Nummer_Anzeige__c: 'AVV-Nummer Anzeige',
    Voralge_Dispo_Transp_PLZ_Text__c: 'Vorlage Dispo Transport PLZ Text',
    // ===== Materialanalyse Fields =====
    Ergebnis_ben_tigt_bis__c: 'Ergebnis benötigt bis',
    Kategorie_f_r_Qualit_tseinsch_tzung__c: 'Kategorie für Qualitätseinschätzung',
    // ===== MonitoredMaterial Fields =====
    Sch_ttdichte__c: 'Schüttdichte',
    Beschreibung_Analysen_Optische_Qualit_t__c: 'Beschreibung Analysen Optische Qualität',
    Anzahl_Datens_tze_Optische_Qualit_t__c: 'Anzahl Datensätze Optische Qualität',
    Anzahl_Datens_tze_Geruch__c: 'Anzahl Datensätze Geruch',
    Gesamtqualit_t__c: 'Gesamtqualität',
    Optische_Qualit_t__c: 'Optische Qualität',
    Mechanische_Qualit_t__c: 'Mechanische Qualität',
    Polymerqualit_t__c: 'Polymerqualität',
    Geruchsqualit_t__c: 'Geruchsqualität',
    Summe_Defekte_gro__c: 'Summe Defekte groß',
    Oberfl_chenfeuchte_Test_Standard_IS__c: 'Oberflächenfeuchte Test Standard ISO',
    Kerbschlagz_higkeit_Charpy__c: 'Kerbschlagzähigkeit Charpy',
    // ===== Project Fields =====
    Projektpriorit_t__c: 'Projektpriorität',
    Risikoabsch_tzung__c: 'Risikoabschätzung',
    Potenzialabsch_tzung__c: 'Potenzialabschätzung',
    // ===== Bedarfe Fields =====
    Jahresmengenbest_tigung__c: 'Jahresmengenbestätigung',
    // ===== SupplierAudit Fields =====
    Begr_ndung_der_Bewertung__c: 'Begründung der Bewertung',
    // ===== Common abbreviation expansions =====
    PLZ__c: 'PLZ (Postleitzahl)',
    AVV_Nummer__c: 'AVV-Nummer',
    MFR_kg__c: 'MFR (kg)',
    MVR__c: 'MVR (Melt Volume Rate)',
    TDS_check_up__c: 'TDS Check-up',
    PCF_Virgin_Material_kg_CO2_eq__c: 'PCF Virgin Material (kg CO₂ eq)',
    Product_Carbon_Footprint_kg_CO2_eq__c: 'Product Carbon Footprint (kg CO₂ eq)',
    Potential_CO2e_savings__c: 'Potenzial CO₂e Einsparung',
    // ===== Document attachment fields =====
    Document_Order_attached__c: 'Bestellung angehängt',
    Document_Order_Confirmation_attached__c: 'Auftragsbestätigung angehängt',
    Document_Order_to_Supplier_attached__c: 'Bestellung an Lieferant angehängt',
    Document_Transport_Order_attached__c: 'Transportauftrag angehängt',
    Document_Pickup_Note_attached__c: 'Abholschein angehängt',
    Document_Delivery_Note_attached__c: 'Lieferschein angehängt',
    Document_CoA_attached__c: 'CoA angehängt',
    Document_Annex_VII_attached__c: 'Anlage VII angehängt',
    Document_Weighing_Note_Supplier_attached__c: 'Wiegeschein Lieferant angehängt',
    Document_Weighing_Note_Customer_attached__c: 'Wiegeschein Kunde angehängt',
    Document_CMR_attached__c: 'CMR angehängt',
    Document_Original_TDS_attached__c: 'Original TDS angehängt',
    Document_plastship_TDS_attached__c: 'plastship TDS angehängt',
    Document_Original_MSDS_attached__c: 'Original MSDS angehängt',
    Document_plastship_MSDS_attached__c: 'plastship MSDS angehängt',
    Document_Additional_Analysis_attached__c: 'Zusätzliche Analyse angehängt',
    // ===== Rate/Percentage fields =====
    TotalInformation_rate__c: 'Gesamtinformationen (%)',
    AccountInformation_rate__c: 'Account-Informationen (%)',
    ContactInformation_rate__c: 'Kontakt-Informationen (%)',
    AdditionalInformation_rate__c: 'Zusätzliche Informationen (%)',
    InvoiceInformation_rate__c: 'Rechnungsinformationen (%)',
    ResearchInformation_rate__c: 'Recherche-Informationen (%)',
    Processing_Status_percent__c: 'Bearbeitungsstatus (%)',
    MP_Progress_percent__c: 'MP Fortschritt (%)',
    // ===== SampleSending Fields =====
    Versandart_Muster__c: 'Versandart Muster',
    Empf_nger_Account__c: 'Empfänger Account',
    Sichtbar_f_r_Kunden__c: 'Sichtbar für Kunden',
    // ===== Product Fields =====
    F_llstoff_Text__c: 'Füllstoff Text',
    Hauptpolymer__c: 'Hauptpolymer',
    Materialform__c: 'Materialform',
    Recyclatdefinition__c: 'Rezyklat-Definition',
    // ===== Produktionsstandort Fields =====
    Stra_e__c: 'Straße',
    Stra_e_Nummer__c: 'Straßen-Nummer'
};
function getFieldLabel(apiName) {
    // Check for explicit mapping first
    if (FIELD_LABELS[apiName]) {
        return FIELD_LABELS[apiName];
    }
    // Auto-format: remove __c, replace underscores, add spaces between camelCase
    return apiName.replace(/__c$/, '').replace(/__r$/, '').replace(/_/g, ' ').replace(/([a-z])([A-Z])/g, '$1 $2').trim();
}
function hasCustomLabel(apiName) {
    return apiName in FIELD_LABELS;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/api/rejectionSummary.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #2075: Was an einer abgewiesenen Anfrage ins Log und nach Sentry darf —
 * Fehlercode und Namen der beanstandeten Felder. Nie Werte, nie Meldungstexte,
 * nie der Body (Regel #1678): aus dem Antwort-Body werden nur Bezeichner
 * übernommen, die wie ein Code bzw. ein Feldname aussehen; alles andere fällt weg.
 *
 * Gelesen werden die Formen, die unsere Routen schicken:
 *   - `{ code, fields }` (z. B. POST /api/plastship/users, #2071)
 *   - `{ code, details: { fields | missing } }` (apiErrorResponse, validateRequiredParams)
 *   - `{ code, details: { errors: [{ fields }] } }` (Salesforce-Ablehnung, #912)
 */ __turbopack_context__.s([
    "MAX_LOGGED_FIELDS",
    ()=>MAX_LOGGED_FIELDS,
    "summarizeRejectedResponse",
    ()=>summarizeRejectedResponse,
    "summarizeRejection",
    ()=>summarizeRejection
]);
/** Fehlercodes: `validation`, `UPSTREAM_REJECTED`, `email-exists` … */ const CODE_PATTERN = /^[A-Za-z][A-Za-z0-9_.:-]{0,63}$/;
/** Feldnamen: `email`, `Account__c`, `address.city` — kein Leerzeichen, kein Wert. */ const FIELD_PATTERN = /^[A-Za-z_][A-Za-z0-9_.]{0,79}$/;
const MAX_LOGGED_FIELDS = 20;
function asRecord(value) {
    return value && typeof value === 'object' && !Array.isArray(value) ? value : null;
}
function fieldNames(value) {
    if (!Array.isArray(value)) return [];
    return value.filter((v)=>typeof v === 'string' && FIELD_PATTERN.test(v));
}
function summarizeRejection(body) {
    const root = asRecord(body);
    if (!root) return {
        fields: []
    };
    const code = typeof root['code'] === 'string' && CODE_PATTERN.test(root['code']) ? root['code'] : undefined;
    const details = asRecord(root['details']);
    const collected = [
        ...fieldNames(root['fields']),
        ...fieldNames(details?.['fields']),
        ...fieldNames(details?.['missing'])
    ];
    const errors = details?.['errors'];
    if (Array.isArray(errors)) {
        for (const entry of errors)collected.push(...fieldNames(asRecord(entry)?.['fields']));
    }
    const fields = Array.from(new Set(collected)).slice(0, MAX_LOGGED_FIELDS);
    return code ? {
        code,
        fields
    } : {
        fields
    };
}
async function summarizeRejectedResponse(response) {
    try {
        const type = response.headers?.get?.('content-type') ?? '';
        if (!type.includes('application/json')) return {
            fields: []
        };
        return summarizeRejection(await response.clone().json());
    } catch  {
        return {
            fields: []
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/logScrub.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1678: Geheimnisse gehören in kein Log.
 *
 * Passwörter, Tokens und Schlüssel stehen nie im Klartext in einer Logzeile —
 * und auch nicht maskiert in ihrer Länge: Sternchen je Zeichen verraten, wie
 * lang ein Passwort ist. Ersetzt wird immer durch denselben festen Platzhalter.
 *
 * Zwei Stellen nutzen das:
 * - der Logger (app/lib/logger.ts) für JEDE Zeile: Nachricht, Kontext,
 *   Metadaten, Fehlertext. Das ist das Netz für alle Aufrufer.
 * - die API-Schicht (app/lib/apiMiddleware.ts) für die Vorschau des
 *   Anfrage-Bodys: geschwärzt wird VOR dem Kürzen, sonst bliebe ein
 *   abgeschnittenes Passwort ohne schließendes Anführungszeichen stehen.
 *
 * Rein und ohne Server-Importe — der Logger läuft auch im Browser.
 */ /** Der eine Platzhalter. Feste Länge, kein Bezug zum ersetzten Wert. */ __turbopack_context__.s([
    "LOG_REDACTED",
    ()=>LOG_REDACTED,
    "describeRequestBodyForLog",
    ()=>describeRequestBodyForLog,
    "hasSecretLogKey",
    ()=>hasSecretLogKey,
    "isSecretLogKey",
    ()=>isSecretLogKey,
    "scrubLogString",
    ()=>scrubLogString,
    "scrubLogValue",
    ()=>scrubLogValue
]);
const LOG_REDACTED = '[entfernt]';
/** Wörter im Feldnamen, die ein Geheimnis ankündigen. */ const SECRET_WORDS = new Set([
    'password',
    'passwort',
    'passwd',
    'passphrase',
    'pwd',
    'secret',
    'token',
    'authorization',
    'cookie',
    'totp',
    'otp',
    'credential',
    'credentials',
    'apikey',
    // #1916: Auktions-Schnittstelle — Signatur, Nonce und HMAC eines Aufrufs
    // (`X-Plastship-Signature`, `X-Plastship-Nonce`) sind so geheim wie der Schlüssel
    'signature',
    'nonce',
    'hmac'
]);
/**
 * Letztes Wort des Feldnamens, das aus dem Geheimnis einen bloßen Zustand
 * macht: `passwordStatus`, `tokenCount`, `mustChangePassword…At`. Solche
 * Felder beschreiben das Geheimnis, sie tragen es nicht.
 */ const HARMLESS_LAST_WORDS = new Set([
    'status',
    'state',
    'required',
    'enabled',
    'policy',
    'type',
    'count',
    'length',
    'expires',
    'expiry',
    'at',
    'in',
    'id',
    'ids',
    'name',
    'names',
    'label',
    'field',
    'fields',
    'error',
    'errors',
    'reason',
    'valid',
    'strength',
    'source',
    'usage',
    'limit',
    'hint',
    'changed',
    'set',
    'age',
    'ttl',
    'consent',
    'header'
]);
/** Feldname in Wörter: `newPassword`, `api_key`, `x-pdf-service-token`. */ function words(key) {
    return key.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}
function isSecretLogKey(key) {
    const w = words(key);
    if (w.length === 0) return false;
    if (HARMLESS_LAST_WORDS.has(w[w.length - 1])) return false;
    for(let i = 0; i < w.length; i++){
        if (SECRET_WORDS.has(w[i])) return true;
        // api key, private key, access key, secret key
        if (w[i] === 'key' && i > 0 && [
            'api',
            'private',
            'access',
            'signing'
        ].includes(w[i - 1])) {
            return true;
        }
    }
    return false;
}
/** Billige Vorprüfung, bevor die teureren Muster laufen. */ const MAYBE_SECRET = /pass|pwd|secret|token|authoriz|cookie|otp|credential|key|signature|nonce|hmac/i;
/** JSON-Paar mit Textwert: `"key":"wert"` — auch am Ende abgeschnitten. */ const JSON_PAIR = /"([A-Za-z0-9_.\- ]{1,60})"(\s*:\s*)"((?:[^"\\]|\\.)*)("|$)/g;
/** JSON-Paar mit Zahl: `"otp":123456`. */ const JSON_NUMBER_PAIR = /"([A-Za-z0-9_.\- ]{1,60})"(\s*:\s*)(-?[0-9][0-9.eE+-]*)/g;
/**
 * Dasselbe eine Ebene tiefer: JSON, das selbst als Text in JSON steht
 * (`\"key\":\"wert\"`), z. B. ein Body in einem Metadatenfeld.
 */ const ESCAPED_JSON_PAIR = /\\"([A-Za-z0-9_.\- ]{1,60})\\"(\s*:\s*)\\"((?:(?!\\").)*)(\\"|$)/g;
/** Formular- und Query-Paare: `password=wert`, `?token=wert&…`. */ const FORM_PAIR = /(^|[?&;#\s])([A-Za-z0-9_.\-[\]]{1,60})=([^&#;\s"'<>]*)/g;
/** Kopfzeilen im Fließtext. */ const AUTH_HEADER = /\b(authorization|proxy-authorization|cookie|set-cookie)(\s*[:=]\s*)([^\r\n"']+)/gi;
function scrubLogString(text) {
    if (text.length === 0 || !MAYBE_SECRET.test(text)) return text;
    return text.replace(ESCAPED_JSON_PAIR, (match, key, sep, value, end)=>value.length > 0 && isSecretLogKey(key) ? `\\"${key}\\"${sep}\\"${LOG_REDACTED}${end}` : match).replace(JSON_PAIR, (match, key, sep, value, end)=>value.length > 0 && isSecretLogKey(key) ? `"${key}"${sep}"${LOG_REDACTED}${end}` : match).replace(JSON_NUMBER_PAIR, (match, key, sep)=>isSecretLogKey(key) ? `"${key}"${sep}"${LOG_REDACTED}"` : match).replace(FORM_PAIR, (match, lead, key, value)=>value.length > 0 && isSecretLogKey(key) ? `${lead}${key}=${LOG_REDACTED}` : match).replace(AUTH_HEADER, (_match, name, sep)=>`${name}${sep}${LOG_REDACTED}`);
}
const MAX_DEPTH = 8;
function scrub(value, depth, seen) {
    if (typeof value === 'string') return scrubLogString(value);
    if (value === null || typeof value !== 'object') return value;
    if (value instanceof Date || value instanceof Error) return value;
    if (seen.has(value) || depth >= MAX_DEPTH) return value;
    seen.add(value);
    if (Array.isArray(value)) return value.map((item)=>scrub(item, depth + 1, seen));
    const out = {};
    for (const [key, inner] of Object.entries(value)){
        if (isSecretLogKey(key) && isSecretValue(inner)) {
            out[key] = LOG_REDACTED;
        } else {
            out[key] = scrub(inner, depth + 1, seen);
        }
    }
    return out;
}
/** Unter einem Geheimnis-Feld wird alles ersetzt, was ein Wert sein kann — Schalter und Leeres bleiben. */ function isSecretValue(value) {
    if (typeof value === 'string') return value.length > 0;
    if (typeof value === 'number' || typeof value === 'bigint') return true;
    if (Array.isArray(value)) return value.length > 0;
    return typeof value === 'object' && value !== null;
}
function scrubLogValue(value) {
    return scrub(value, 0, new WeakSet());
}
function hasSecretLogKey(value, depth = 0) {
    if (value === null || typeof value !== 'object' || depth >= MAX_DEPTH) return false;
    if (Array.isArray(value)) return value.some((item)=>hasSecretLogKey(item, depth + 1));
    return Object.entries(value).some(([key, inner])=>isSecretLogKey(key) && isSecretValue(inner) || hasSecretLogKey(inner, depth + 1));
}
const PREVIEW_LENGTH = 500;
/** Größere Bodys (Uploads) werden nicht zerlegt — sie bekommen nie eine Vorschau. */ const MAX_PARSE_LENGTH = 256 * 1024;
function describeRequestBodyForLog(body, contentType) {
    const type = (contentType ?? '').split(';')[0].trim().toLowerCase();
    // Auch ohne passenden Content-Type: was sich als JSON lesen lässt, ist JSON.
    const looksLikeJson = type.includes('json') || /^\s*[[{]/.test(body);
    if (looksLikeJson && body.length <= MAX_PARSE_LENGTH) {
        try {
            const parsed = JSON.parse(body);
            const secret = hasSecretLogKey(parsed);
            const preview = JSON.stringify(scrubLogValue(parsed)).substring(0, PREVIEW_LENGTH);
            return secret ? {
                hasRequestBody: true,
                requestBodyPreview: preview,
                requestBodyRedacted: true
            } : {
                hasRequestBody: true,
                requestBodySize: body.length,
                requestBodyPreview: preview
            };
        } catch  {
        // kein gültiges JSON — wie jeder andere Body: kein Inhalt
        }
    }
    if (type === 'application/x-www-form-urlencoded') {
        const secret = [
            ...new URLSearchParams(body).keys()
        ].some(isSecretLogKey);
        return secret ? {
            hasRequestBody: true,
            requestBodyType: type,
            requestBodyRedacted: true
        } : {
            hasRequestBody: true,
            requestBodySize: body.length,
            requestBodyType: type
        };
    }
    // Unbekannte Form: steckt ein Geheimnis-Wort darin, bleibt auch die Größe weg.
    return MAYBE_SECRET.test(body.substring(0, MAX_PARSE_LENGTH)) && scrubLogString(body.substring(0, MAX_PARSE_LENGTH)) !== body.substring(0, MAX_PARSE_LENGTH) ? {
        hasRequestBody: true,
        requestBodyType: type || 'unbekannt',
        requestBodyRedacted: true
    } : {
        hasRequestBody: true,
        requestBodySize: body.length,
        requestBodyType: type || 'unbekannt'
    };
}
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
"[project]/apps/web/src/lib/navigation/internalPath.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toInternalPath",
    ()=>toInternalPath
]);
/**
 * Nur Pfade innerhalb der App (M-10). Benachrichtigungen tragen einen frei
 * gespeicherten Link; ohne diese Prüfung ist jeder Klick ein Open Redirect.
 *
 * Der WHATWG-URL-Parser (den auch der Next-Router nutzt) entfernt Tab, LF und
 * CR und löst Punkt-Segmente auf. Deshalb wird mit demselben Parser
 * kanonisiert und die kanonische Form zurückgegeben: `/\t/evil.example` oder
 * `/..//evil.example` dürfen nicht als `//evil.example` beim Router ankommen.
 */ const CTRL_OR_BACKSLASH = /[\u0000-\u001F\u007F\\]/;
const BASE = 'https://app.invalid';
function toInternalPath(link) {
    if (typeof link !== 'string') return null;
    const value = link.trim();
    if (!value.startsWith('/') || value.startsWith('//') || CTRL_OR_BACKSLASH.test(value)) {
        return null;
    }
    let decoded;
    try {
        decoded = decodeURIComponent(value);
    } catch  {
        return null;
    }
    if (decoded.startsWith('//') || CTRL_OR_BACKSLASH.test(decoded)) return null;
    let url;
    try {
        url = new URL(value, BASE);
    } catch  {
        return null;
    }
    if (url.origin !== BASE || url.pathname.startsWith('//')) return null;
    return url.pathname + url.search + url.hash;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/profilePictures/limits.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Grenzen der Profilbilder (#1714). Ohne Node-Abhängigkeiten — auch der
 * Browser (Zuschnitt-Dialog) importiert sie.
 */ /** Höchstgröße des hochgeladenen (bereits zugeschnittenen) Bildes: 1 MB. */ __turbopack_context__.s([
    "PROFILE_PICTURE_MAX_BYTES",
    ()=>PROFILE_PICTURE_MAX_BYTES,
    "PROFILE_PICTURE_MAX_INPUT_PIXELS",
    ()=>PROFILE_PICTURE_MAX_INPUT_PIXELS,
    "PROFILE_PICTURE_MIME",
    ()=>PROFILE_PICTURE_MIME,
    "PROFILE_PICTURE_SIZE",
    ()=>PROFILE_PICTURE_SIZE,
    "PROFILE_PICTURE_USER_ID",
    ()=>PROFILE_PICTURE_USER_ID,
    "PROFILE_PICTURE_USER_ID_SOURCE",
    ()=>PROFILE_PICTURE_USER_ID_SOURCE
]);
const PROFILE_PICTURE_MAX_BYTES = 1_048_576;
const PROFILE_PICTURE_MIME = [
    'image/jpeg',
    'image/png',
    'image/webp'
];
const PROFILE_PICTURE_MAX_INPUT_PIXELS = 40_000_000;
const PROFILE_PICTURE_SIZE = 512;
const PROFILE_PICTURE_USER_ID_SOURCE = '(?:[a-z0-9]{10,40}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})';
const PROFILE_PICTURE_USER_ID = new RegExp(`^${PROFILE_PICTURE_USER_ID_SOURCE}$`);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/profilePictures/url.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isProfilePictureUrl",
    ()=>isProfilePictureUrl,
    "profilePictureUrl",
    ()=>profilePictureUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$profilePictures$2f$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/profilePictures/limits.ts [app-client] (ecmascript)");
;
/**
 * Serve-Pfad der Profilbilder (#1714). Ohne Node-Abhängigkeiten — Client und
 * Server nutzen ihn. `User.image` trägt nur noch genau diese Form.
 */ const PREFIX = '/api/profile-picture/';
const URL_PATTERN = new RegExp(`^\\/api\\/profile-picture\\/${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$profilePictures$2f$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE_PICTURE_USER_ID_SOURCE"]}\\/(\\?v=\\d+)?$`);
function profilePictureUrl(userId, version) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$profilePictures$2f$limits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFILE_PICTURE_USER_ID"].test(userId)) throw new Error('Profilbild: ungültige userId');
    return `${PREFIX}${userId}/?v=${Math.floor(version)}`;
}
function isProfilePictureUrl(url) {
    return typeof url === 'string' && URL_PATTERN.test(url);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * RBAC taxonomy — single source of truth (#338).
 *
 * These runtime `as const` arrays are the ONE place the RBAC domain vocabulary is
 * declared. The union types in permissions.ts are DERIVED from them
 * (`type X = (typeof ARRAY)[number]`), the Zod schemas in validation.ts validate
 * against them, and the admin UI screens iterate them. Previously the same lists
 * were hand-copied into each admin screen and drifted (PermissionsWidget's stale
 * 13-entry UI-resource list, RbacRecordVisibility's 5-entry modules list missing
 * `pricing`, and validation's SOBJECTS missing `Reklamation__c`), silently
 * breaking admin config or showing wrong resources. Add a member here once and
 * type + validation + every screen stay in lockstep.
 *
 * Dependency-free on purpose (no Prisma/server imports) so client components can
 * import it directly.
 */ /** User roles. Derived type: {@link Role} in permissions.ts. */ __turbopack_context__.s([
    "ADMIN_ONLY_SOBJECTS",
    ()=>ADMIN_ONLY_SOBJECTS,
    "CONTENT_ONLY_ROLES",
    ()=>CONTENT_ONLY_ROLES,
    "FINANCE_WORKFLOW_ROLES",
    ()=>FINANCE_WORKFLOW_ROLES,
    "INFORMATION_CATEGORIES",
    ()=>INFORMATION_CATEGORIES,
    "INTERNAL_MEDIA_ROLES",
    ()=>INTERNAL_MEDIA_ROLES,
    "MODULES",
    ()=>MODULES,
    "OUTLOOK_ROLES",
    ()=>OUTLOOK_ROLES,
    "RECORD_SCOPED_ROLES",
    ()=>RECORD_SCOPED_ROLES,
    "RESOURCES",
    ()=>RESOURCES,
    "ROLES",
    ()=>ROLES,
    "SOBJECTS",
    ()=>SOBJECTS,
    "STAFF_TAGS",
    ()=>STAFF_TAGS,
    "TAGS_BY_ROLE",
    ()=>TAGS_BY_ROLE,
    "UI_RESOURCES",
    ()=>UI_RESOURCES,
    "VISIBILITY_MECHANISMS",
    ()=>VISIBILITY_MECHANISMS,
    "WIKI_ROLES",
    ()=>WIKI_ROLES,
    "isOutlookRole",
    ()=>isOutlookRole
]);
const ROLES = [
    'admin',
    'staff',
    'agent',
    'user',
    'accounting',
    'laboratory',
    'advisor',
    'rigk',
    // #1855: Partner (zuerst INEOS, Meilenstein INflow) — extern, ohne jeden
    // Salesforce-Zugriff: nur Dashboard, Profil, Wiki (/my-auctions mit Pool-Rolle, #1927).
    'partner'
];
const RECORD_SCOPED_ROLES = [
    'agent',
    'user',
    'rigk',
    'laboratory',
    'advisor'
];
const CONTENT_ONLY_ROLES = [
    'partner'
];
const FINANCE_WORKFLOW_ROLES = [
    'admin',
    'staff',
    'accounting'
];
const WIKI_ROLES = ROLES;
const INTERNAL_MEDIA_ROLES = [
    'admin',
    'staff'
];
const OUTLOOK_ROLES = [
    'admin',
    'staff'
];
function isOutlookRole(role) {
    return typeof role === 'string' && OUTLOOK_ROLES.includes(role);
}
const STAFF_TAGS = [
    'management',
    'finance',
    'sales',
    'operations',
    // #950: 'quality' und 'logistics' entfernt — beide vergaben ausschliesslich
    // Rechte, die Basis-Staff ohnehin hat, waren also wirkungslos. Der Waechter
    // staff-tags-nicht-redundant.test.ts haelt den Zustand.
    // #1589: 'hr' ist zurueck, diesmal mit eigenem Recht: nur Staff mit hr (oder
    // management) pflegt die Staff-Tags anderer Staff-Konten (Ressource
    // `staff-tags`). Das alte hr (#950 entfernt) gab nur, was Basis-Staff schon hatte.
    // #1576: Personalverantwortung — zusätzlich Bereichsverwaltung Zeit & Abwesenheit
    // (Ressource `time-admin`, wie admin). Wirkt außerdem über die
    // Wiki-Freigabe (visibleStaffTags).
    'hr',
    'marketing',
    // #1154: Redaktion der öffentlichen Seiten (/cms). Basis-Staff hat auf `cms`
    // nichts; nur admin und Staff mit diesem Tag sehen und nutzen die Redaktion.
    'editor',
    // #1592: IT — vergibt keine Rechte, schaltet nur Ansichten frei (Zeit-Widgets
    // auf dem Dashboard; Bereich Zeit & Abwesenheit in der Vorab-Phase). Wirkt nur
    // an einem admin-Konto (TIME_AREA_TAG_BY_ROLE, #1853) — staff mit nur it
    // bekommt den Bereich in der Vorab-Phase nicht.
    'it',
    // #1662: Praktikum — Kennzeichen für Praktikantenkonten (Rolle staff). Vergibt
    // keine Matrix-Rechte: die Rechte bleiben Basis-Staff.
    // #1853: öffnet einem staff-Konto den Bereich Zeit & Abwesenheit in der
    // Vorab-Phase (TIME_AREA_TAG_BY_ROLE in lib/rbac/timeAreaGate.ts); an einem
    // admin-Konto wirkungslos. Wird wörtlich am Konto gelesen — nicht über
    // management (Vereinigung aller Tags) und nicht über hasStaffTag für admin.
    'intern',
    // #1855: INEOS-Partner — Kennzeichen an Konten der Rolle partner (TAGS_BY_ROLE),
    // vergibt keine Rechte. Öffnet /auctions (tagGates.ts) und Wiki-Inhalte, die
    // für ineos freigegeben sind. Für staff/admin nicht wählbar.
    'ineos'
];
/**
 * #1855: welche Rolle welche Tags tragen darf — eine Quelle für Endpunkt
 * (PUT users/[id]/staff-tags), Anlage (accountCreatePolicy), Rollenwechsel,
 * Tag-Karte und Rollen-Vorschau. Rollen ohne Eintrag tragen keine Tags.
 * Abhängigkeitsfrei hier statt in staffTagPolicy.ts, weil die Rollen-Vorschau
 * (viewAs.ts, Edge) sie braucht; staffTagPolicy.ts reicht sie weiter.
 */ const PARTNER_TAGS = [
    'ineos'
];
const INTERNAL_TAGS = STAFF_TAGS.filter(_c = (tag)=>!PARTNER_TAGS.includes(tag));
_c1 = INTERNAL_TAGS;
const TAGS_BY_ROLE = {
    admin: INTERNAL_TAGS,
    staff: INTERNAL_TAGS,
    partner: PARTNER_TAGS
};
const SOBJECTS = [
    'Case',
    'Task',
    'Event',
    'Contact',
    'Account',
    'Produktionsstandort__c',
    'Projekt__c',
    'Bedarfe__c',
    'Lohn__c',
    'Product2',
    'Material_Proposal__c',
    'Sample_Sending__c',
    'Sample_Feedback__c',
    'Requirement__c',
    'Order',
    'OrderItem',
    // #449: Verträge (Standard-Objekt) — Auftrags-Management am Vertrag
    'Contract',
    'Kostenstelle_plastship__c',
    // #792: Kontenplan DATEV (Lookup-Ziel Abrechnung__c.DATEV_Sachkonto__c)
    'DATEV_Sachkonto__c',
    // #831: Lookup-Ziel für Product2.Abfallfraktionen__c (keine eigene Seite)
    'Abfallfraktionen__c',
    'Abrechnung__c',
    'Invoice__c',
    'Monitored_Material__c',
    'Materialanalyse__c',
    'Onboarding__c',
    'Kontakt_bergaben__c',
    'Supplier_Audit__c',
    'Unternehmenszertifikat__c',
    // #362/#333: Zertifikats-Katalog (Lookup-Ziel von Unternehmenszertifikat__c.Zertifikate__c)
    'Zertifikate__c',
    // #331: Prüfparameter an der Materialanalyse + sein Typ-Katalog (Lookup-Ziel)
    'AuditProperty__c',
    'AuditPropertyType__c',
    'RecordAccessGrant__c',
    'Probe__c',
    'Probeversand__c',
    'Opportunity',
    'User',
    'Aktueller_Preis_und_Verf_gbarkeit__c',
    'Reklamation__c',
    // #384: Prozessfeedback/CAPA — überall anlegbar (admin/staff)
    'Prozessfeedback__c',
    // #495: reine Lookup-Ziele. Beide werden an der Opportunity als editierbares
    // Lookup gerendert (CampaignId, SyncedQuoteId, jeweils admin/staff), waren
    // aber nirgends registriert — die Suche im Autocomplete lief in ein 403 und
    // zeigte still ein leeres Dropdown. Ohne eigene Detailseite (detailPath ''),
    // sie tauchen deshalb nicht in der globalen Suche auf.
    'Campaign',
    'Quote'
];
const ADMIN_ONLY_SOBJECTS = [
    'Abfallqualit_t__c',
    'Agreement__c',
    'Agreement_Templates__c',
    'Asset',
    'Audit_Parameter__c',
    'Audit_ParameterType__c',
    'Beziehung__c',
    'Bonus__c',
    'Bonus_Ausschuettung__c',
    'CampaignMember',
    'cloudworx_Console__c',
    'ContentVersion',
    'EmailMessage',
    'Facilities_and_Capabilities__c',
    'Idea',
    'Inventarliste__c',
    'Knowledge__c',
    'Laboratory_Equipment__c',
    'Lead',
    'Location',
    'Material_qualification_process__c',
    'Material_Segment__c',
    'Mengenstaffel_Einkauf__c',
    'Muster_Lagerbewegung__c',
    'Musterlager__c',
    'News__c',
    'Opportunity_Transportpreis__c',
    'OpportunityContactRole',
    'OpportunityLineItem',
    'PEintrag__c',
    'Polymere__c',
    'Pricebook2',
    'PricebookEntry',
    'QuickText',
    'QuoteLineItem',
    'ServiceResource',
    'Solution',
    'Textvorlagen_Dokumente__c',
    'Transportpreis__c',
    'Waren_Lagerbewegung__c',
    'Warenlager__c',
    'WorkOrder',
    'WorkOrderLineItem',
    'Zus_tzliche_Produkte__c'
];
const UI_RESOURCES = [
    'dashboard',
    'profile',
    'user-management',
    'recyclate-grade',
    'recyclate-compatibility',
    'documents',
    'rigk-module',
    'Finance',
    'access-management',
    'plastrack',
    'admin',
    'operations',
    'sales',
    'travel-expenses',
    'working-hours',
    'absences',
    'verification-module',
    'notification-management',
    'pia-management',
    'pricing',
    // #1154: Redaktion der öffentlichen Seiten (/cms, /api/cms/*) — admin und staff
    'cms',
    // #1330: Wiki (/wiki, /api/wiki/*) — lesen. Bewusst getrennt von `cms`: die
    // Redaktion braucht das Tag editor. #1507: jede Rolle, sichtbar ist nur, was
    // ein Admin für sie freigegeben hat.
    'wiki',
    // #1589: Staff-Tags anderer Staff-Konten pflegen (PUT /api/plastship/users/[id]/staff-tags)
    // — admin und Staff mit Tag hr; Basis-Staff und alle anderen Rollen nichts
    'staff-tags',
    // #1576: Bereichsverwaltung Zeit & Abwesenheit (Team, Teamkalender, Freigaben,
    // Einstellungen, Verwaltungs-Widgets) — admin und Staff mit Tag hr
    'time-admin',
    // #1682: Admin-Seite /mailing (Vorlagen, Signatur, Rundbrief)
    'mailing',
    // #1856/#1927: /my-auctions — admin und partner mit Pool-Rolle provider_admin (Scope-Gate, tagGates.ts)
    'my-auctions',
    // #1889: /auctions (Übersicht des Auktionshauses) — admin und partner mit Tag ineos (tagGates.ts)
    'auctions',
    // #1889: alle weiteren Auktionsseiten im Gerüst (Beobachtet, Historie, Anbieterseiten,
    // Detail, Bedingungen, Einladung, Widget, Betreiber-Sicht) — nur admin
    'auctions-admin',
    // #1844: Admin-Seite /jobs (Job-System: Schalter, Jetzt ausführen, Lauf-Protokoll)
    'jobs'
];
const RESOURCES = [
    ...SOBJECTS,
    ...ADMIN_ONLY_SOBJECTS,
    ...UI_RESOURCES
];
const VISIBILITY_MECHANISMS = [
    'lookup',
    'ownership',
    'recordAccessGrant',
    'module',
    // #331: Kind-Objekte ohne eigenen Owner/Account-Lookup erben den
    // Record-Zugriff vom Parent-Record (z.B. AuditProperty__c → Materialanalyse__c)
    'parentRecord'
];
const INFORMATION_CATEGORIES = [
    'supplierInformation',
    'customerInformation',
    'transportInformation',
    'buyingInformation',
    'sellingInformation',
    'earnings',
    'statistics',
    'rigkRelationships',
    // #329: carrier-only Transport-Preise (Preis/t + Notiz) — bewusst getrennt
    // von transportInformation, die auch Kunde+Lieferant erhalten.
    'transportPricing'
];
const MODULES = [
    'mmaterials',
    'plastrack',
    'plaspcf',
    'ppwr',
    'rigk',
    'pricing'
];
var _c, _c1;
__turbopack_context__.k.register(_c, "INTERNAL_TAGS$STAFF_TAGS.filter");
__turbopack_context__.k.register(_c1, "INTERNAL_TAGS");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCOUNTING_VISIBLE_FIELDS",
    ()=>ACCOUNTING_VISIBLE_FIELDS,
    "ALL_STAFF_TAGS",
    ()=>ALL_STAFF_TAGS,
    "ANALYTICS_ROLES",
    ()=>ANALYTICS_ROLES,
    "DEFAULT_ALWAYS_VISIBLE_FIELDS",
    ()=>DEFAULT_ALWAYS_VISIBLE_FIELDS,
    "DEFAULT_FIELD_DEFINITIONS",
    ()=>DEFAULT_FIELD_DEFINITIONS,
    "DEFAULT_GLOBAL_PERMISSIONS",
    ()=>DEFAULT_GLOBAL_PERMISSIONS,
    "DEFAULT_OBJECT_VISIBILITY_CONFIG",
    ()=>DEFAULT_OBJECT_VISIBILITY_CONFIG,
    "DEFAULT_RECORD_VISIBILITY_RULES",
    ()=>DEFAULT_RECORD_VISIBILITY_RULES,
    "DEFAULT_STAFF_TAG_PERMISSIONS",
    ()=>DEFAULT_STAFF_TAG_PERMISSIONS,
    "GRANTABLE_SOBJECTS",
    ()=>GRANTABLE_SOBJECTS,
    "MM_HIDDEN_ID_FIELDS",
    ()=>MM_HIDDEN_ID_FIELDS,
    "MM_HIDDEN_NAMES_PRODUCT_FIELDS",
    ()=>MM_HIDDEN_NAMES_PRODUCT_FIELDS,
    "MM_HIDDEN_NAME_FIELDS",
    ()=>MM_HIDDEN_NAME_FIELDS,
    "alwaysVisibleFields",
    ()=>alwaysVisibleFields,
    "buildLookupConditions",
    ()=>buildLookupConditions,
    "canAccessInformationCategory",
    ()=>canAccessInformationCategory,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fieldDefinitions",
    ()=>fieldDefinitions,
    "flexpageConfig",
    ()=>flexpageConfig,
    "getAccessibleInformationCategories",
    ()=>getAccessibleInformationCategories,
    "getAccessibleObjects",
    ()=>getAccessibleObjects,
    "getAlwaysVisibleFields",
    ()=>getAlwaysVisibleFields,
    "getFieldDefinitions",
    ()=>getFieldDefinitions,
    "getFlexpage",
    ()=>getFlexpage,
    "getGlobalPermissions",
    ()=>getGlobalPermissions,
    "getObjectVisibilityConfig",
    ()=>getObjectVisibilityConfig,
    "getRecordVisibilityRules",
    ()=>getRecordVisibilityRules,
    "getSalesforceLayoutMapping",
    ()=>getSalesforceLayoutMapping,
    "getSearchConfigs",
    ()=>getSearchConfigs,
    "getSearchDisplayConfig",
    ()=>getSearchDisplayConfig,
    "getSearchableObjects",
    ()=>getSearchableObjects,
    "getStaffTagPermissions",
    ()=>getStaffTagPermissions,
    "getVisibleFields",
    ()=>getVisibleFields,
    "globalPermissions",
    ()=>globalPermissions,
    "hasAnalyticsAccess",
    ()=>hasAnalyticsAccess,
    "hasObjectAccess",
    ()=>hasObjectAccess,
    "hasPermission",
    ()=>hasPermission,
    "hasRecordAccess",
    ()=>hasRecordAccess,
    "hasStaffTag",
    ()=>hasStaffTag,
    "hidesMonitoredMaterialNames",
    ()=>hidesMonitoredMaterialNames,
    "isContentOnlyRole",
    ()=>isContentOnlyRole,
    "isInternalStaff",
    ()=>isInternalStaff,
    "isRecordOwner",
    ()=>isRecordOwner,
    "moduleConfig",
    ()=>moduleConfig,
    "objectVisibilityConfig",
    ()=>objectVisibilityConfig,
    "recordVisibilityRules",
    ()=>recordVisibilityRules,
    "requiresRecordLevelFiltering",
    ()=>requiresRecordLevelFiltering,
    "resolveStaffTags",
    ()=>resolveStaffTags,
    "searchDisplayConfig",
    ()=>searchDisplayConfig,
    "seesMonitoredMaterialNames",
    ()=>seesMonitoredMaterialNames,
    "staffTagPermissions",
    ()=>staffTagPermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Comprehensive Permission System for plastship
 *
 * This file defines the complete permission logic including:
 * - Global object-level permissions (can role access this object type?)
 * - Record-level visibility rules (can role see this specific record?)
 * - Field-level visibility (which fields are visible based on information categories?)
 * - Flexpage mappings (which UI layout to use?)
 * - Module-based access (mmaterials, plastrack, plaspcf)
 *
 * ARCHITECTURE (#364): This file is the single source of truth. Permissions
 * are versioned code — the DEFAULT_* constants below ARE the effective
 * configuration. There is no DB overlay and no runtime cache; changes go
 * through code review + deploy. /rbac-management renders these constants
 * read-only.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)");
// Reines String-/Regex-Modul ohne eigene Imports — zieht nichts Serverseitiges
// nach, permissions.ts bleibt clientseitig importierbar.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$productVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/productVisibility.ts [app-client] (ecmascript)");
// #1576 (R86): abhängigkeitsfrei, auch im Browser importierbar
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$timeAreaGate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/timeAreaGate.ts [app-client] (ecmascript)");
// #1856: abhängigkeitsfrei — Ressourcen, die für eine Rolle zusätzlich ein Tag verlangen
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$tagGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/tagGates.ts [app-client] (ecmascript)");
// #1494: über die Brücke — RouteGuard bringt dieses Modul in den Browser, wo das
// SDK erst nach dem ersten Rendern lädt (auf dem Server reicht sie direkt weiter)
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const ALL_STAFF_TAGS = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAFF_TAGS"]
];
/**
 * #2085: Matrix-Zeilen für ADMIN_ONLY_SOBJECTS — alle Aktionen gleich.
 */ function adminOnlyObjectRows(granted) {
    return Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ADMIN_ONLY_SOBJECTS"].map((object)=>[
            object,
            {
                view: granted,
                create: granted,
                edit: granted,
                delete: granted
            }
        ]));
}
const DEFAULT_GLOBAL_PERMISSIONS = {
    admin: {
        // UI Resources
        dashboard: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        profile: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'user-management': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'recyclate-grade': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'recyclate-compatibility': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        documents: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'rigk-module': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Finance: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'access-management': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        plastrack: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        admin: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        operations: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        sales: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'travel-expenses': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'working-hours': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        absences: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'verification-module': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'notification-management': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        'pia-management': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        pricing: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin.
        // create bleibt für admin an (Invariante create ⊇ edit, Layer-4-Test) — es gibt keine
        // Route, die anlegt: Anfragen entstehen nur über das öffentliche Kontaktformular.
        // #1589: Staff-Tags pflegen (Widget auf /user/[id], eigener Endpunkt)
        'staff-tags': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // Salesforce Objects
        // NOTE: DELETE is disabled for ALL Salesforce objects for every role except
        // admin (security policy; #1650 Abrechnung__c als Ausnahme für staff/accounting).
        // Records should be soft-deleted via IsDeleted flag, not hard-deleted.
        // #2085: admin trägt hier delete, weil er es bisher über den Durchgriff in
        // hasObjectAccess hatte — die Matrix bildet das jetzt ab.
        Case: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Task: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Event: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Contact: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Account: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Produktionsstandort__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Projekt__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Lohn__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Product2: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Material_Proposal__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Sample_Sending__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Sample_Feedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Order: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Contract: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Kostenstelle_plastship__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        DATEV_Sachkonto__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Abfallfraktionen__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        OrderItem: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Abrechnung__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Invoice__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Monitored_Material__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Materialanalyse__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Onboarding__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Kontakt_bergaben__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Supplier_Audit__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Zertifikate__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        AuditProperty__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        AuditPropertyType__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        RecordAccessGrant__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Probe__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Probeversand__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Opportunity: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        User: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Reklamation__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #384: Prozessfeedback/CAPA — intern (admin/staff), kein Delete (QM-Nachvollziehbarkeit)
        Prozessfeedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #495: reine Lookup-Ziele an der Opportunity (CampaignId, SyncedQuoteId).
        // Nur view — angelegt/gepflegt werden sie in Salesforce.
        Campaign: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Quote: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — nur admin, wie bisher über den Durchgriff
        ...adminOnlyObjectRows(true)
    },
    // NOTE: clevel role was removed and absorbed into staff + 'management' tag;
    // die verbliebenen Konten sind seit #950 migriert.
    // Use staffTagPermissions below for tag-based permission overrides.
    staff: {
        dashboard: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        // #843 (AB 28.08.): staff verwaltet Kunden-User (anlegen/einladen,
        // deaktivieren, Module zuschalten). Interne Accounts und die Vergabe
        // von admin/staff bleiben admin-only — Schranke in userFieldPolicy;
        // die Admin-Tools (GitLab-Seiten, /admin, Demos) hängen seit #843 an
        // der 'admin'-Resource, nicht mehr an user-management.
        'user-management': {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        'recyclate-grade': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        'working-hours': {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        absences: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        'verification-module': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: true,
            create: true,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Basis-Staff pflegt keine Staff-Tags — das gibt erst das Tag hr
        // (sonst könnte sich jeder Staff über ein Kollegenkonto Rechte verschaffen)
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Task: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Event: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Contact: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Account: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Produktionsstandort__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Projekt__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Lohn__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        // #447 (AB-Review): staff legt Produkte im Alltag an (Anlegen aus Account) —
        // create war das einzige fehlende Recht neben view/edit.
        Product2: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Material_Proposal__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Sample_Sending__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Sample_Feedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Order: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Contract: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Abrechnung__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Invoice__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Monitored_Material__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Materialanalyse__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Onboarding__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Supplier_Audit__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Zertifikate__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        AuditProperty__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        AuditPropertyType__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        RecordAccessGrant__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Probe__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Probeversand__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Opportunity: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        User: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Reklamation__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        // #384: Prozessfeedback/CAPA — intern (admin/staff), kein Delete (QM-Nachvollziehbarkeit)
        Prozessfeedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        // #495: reine Lookup-Ziele an der Opportunity (CampaignId, SyncedQuoteId).
        // Nur view — angelegt/gepflegt werden sie in Salesforce.
        Campaign: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // accounting: Invoices + minimal context (orders, accounts, contacts)
    accounting: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #483: Buchhaltung arbeitet in der Ausgangsrechnungen-Ansicht (/finance/*)
        Finance: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Task: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Event: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Contact: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Lohn__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Product2: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Material_Proposal__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Sending__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Order: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Contract: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: true,
            create: true,
            edit: true,
            delete: true
        },
        Invoice__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Monitored_Material__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Zertifikate__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditPropertyType__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // laboratory: Material analysis when related via Dienstleister__c
    laboratory: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #514: laboratory sieht keine Cases. Vorher stand hier view/create/edit
        // auf true, ohne dass es eine Sichtbarkeitsregel fuer Case gaebe — die
        // Rolle ist record-gefiltert, der Listenfilter lieferte also dauerhaft
        // eine leere Liste, waehrend die Detailseite per Direkt-URL erreichbar
        // blieb (hasObjectAccess winkt bei view: true vorher durch).
        // Produktentscheidung ML 2026-08-01: kein Case-Zugriff.
        Case: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Task: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Event: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Contact: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Lohn__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Product2: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Material_Proposal__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Sending__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Requirement__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Order: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Contract: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Zertifikate__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        AuditPropertyType__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // agent: View access with record-level filtering (OwnerId OR RecordAccessGrant)
    agent: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        absences: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Task: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Event: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Contact: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: false,
            delete: false
        },
        Lohn__c: {
            view: true,
            create: true,
            edit: false,
            delete: false
        },
        Product2: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Material_Proposal__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Sample_Sending__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Sample_Feedback__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Order: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Contract: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Supplier_Audit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Zertifikate__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        AuditPropertyType__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // user: View access with record-level filtering (OwnerId OR RecordAccessGrant)
    user: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: true,
            create: true,
            edit: false,
            delete: false
        },
        Task: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Event: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Contact: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Lohn__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Product2: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Material_Proposal__c: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        Sample_Sending__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Order: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        Contract: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Zertifikate__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditPropertyType__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // advisor: Advisory board (Beirat) - read-only KPI dashboard + limited entity browsing
    advisor: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Task: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Event: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Contact: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Lohn__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Product2: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Material_Proposal__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Sending__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Order: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Contract: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Zertifikate__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditPropertyType__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // rigk: mechanical clone of 'user' — same baseline access; the extra read on
    // Account Verh_ltnis_RIGK_System__c / Pamira__c / Hannawald__c / ERDE__c is
    // wired via a new 'rigkRelationships' InformationCategory + record-visibility rule.
    rigk: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: true,
            create: true,
            edit: false,
            delete: false
        },
        Task: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Event: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Contact: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Lohn__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Product2: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Material_Proposal__c: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        Sample_Sending__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Requirement__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Order: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        Contract: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: true,
            create: true,
            edit: true,
            delete: false
        },
        Zertifikate__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditPropertyType__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    },
    // #1855 partner: extern, ohne jeden Salesforce-Zugriff. Sieht Dashboard,
    // eigenes Profil und das Wiki (nur die für partner freigegebenen Einträge,
    // wikiVisibility.ts). Keine Record-Regeln (appliesTo unverändert), nicht
    // record-scoped, aber CONTENT_ONLY_ROLES (nicht intern).
    partner: {
        dashboard: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        profile: {
            view: true,
            create: false,
            edit: true,
            delete: false
        },
        'user-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-grade': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'recyclate-compatibility': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        documents: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'rigk-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Finance: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'access-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        plastrack: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        admin: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        operations: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        sales: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'travel-expenses': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'working-hours': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        absences: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'verification-module': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'notification-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        'pia-management': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        pricing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1154: Redaktion der öffentlichen Seiten (/cms) — admin und Staff mit Tag editor (#1154)
        cms: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1330: internes Wiki (/wiki), gepflegt über `cms`. #1507: jede Rolle darf
        // hinein, sieht aber nur die für sie freigegebenen Einträge (wikiVisibility.ts)
        wiki: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1435: Anfragen aus dem Kontaktformular — admin und staff; löschen (DSGVO) nur admin
        // #1589: Staff-Tags pflegen — nur admin und Staff mit Tag hr
        'staff-tags': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1576: Bereichsverwaltung Zeit & Abwesenheit — admin und Staff mit Tag hr
        'time-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1682: Admin-Seite /mailing — nur admin
        mailing: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1844: Admin-Seite /jobs — nur admin
        jobs: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #1856/#1927: /my-auctions — admin und partner (partner nur mit Pool-Rolle provider_admin, Scope-Gate tagGates.ts)
        'my-auctions': {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: /auctions — admin und partner (partner nur mit Tag ineos, tagGates.ts)
        auctions: {
            view: true,
            create: false,
            edit: false,
            delete: false
        },
        // #1889: weitere Auktionsseiten im Gerüst — nur admin
        'auctions-admin': {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Case: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Task: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Event: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Contact: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Account: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Produktionsstandort__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Projekt__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Bedarfe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Lohn__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Product2: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Material_Proposal__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Sending__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Sample_Feedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Requirement__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Order: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Contract: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kostenstelle_plastship__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        DATEV_Sachkonto__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abfallfraktionen__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        OrderItem: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Abrechnung__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Invoice__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Monitored_Material__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Materialanalyse__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Onboarding__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Kontakt_bergaben__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Supplier_Audit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Unternehmenszertifikat__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Zertifikate__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditProperty__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        AuditPropertyType__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        RecordAccessGrant__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probe__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Probeversand__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Opportunity: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        User: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Aktueller_Preis_und_Verf_gbarkeit__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Reklamation__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Prozessfeedback__c: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #495: reine Lookup-Ziele, nur admin/staff
        Campaign: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        Quote: {
            view: false,
            create: false,
            edit: false,
            delete: false
        },
        // #2085: nicht integrierte SF-Objekte (constants.ts ADMIN_ONLY_SOBJECTS) — kein Zugriff
        ...adminOnlyObjectRows(false)
    }
};
function getGlobalPermissions() {
    return DEFAULT_GLOBAL_PERMISSIONS;
}
const globalPermissions = DEFAULT_GLOBAL_PERMISSIONS;
const DEFAULT_STAFF_TAG_PERMISSIONS = {
    // management: Resolved dynamically via resolveStaffTags() -- gets union of ALL other tags
    management: {},
    finance: {
        Finance: {
            view: true,
            create: true,
            edit: true
        },
        // Finance staff get enhanced financial object access
        Abrechnung__c: {
            view: true,
            create: true,
            edit: true
        },
        Invoice__c: {
            view: true,
            create: true,
            edit: true
        },
        Order: {
            view: true,
            create: true,
            edit: true
        } // Financial context for orders
    },
    sales: {
        sales: {
            view: true,
            create: true,
            edit: true
        },
        Opportunity: {
            view: true,
            create: true,
            edit: true
        },
        Bedarfe__c: {
            view: true,
            create: true,
            edit: true
        },
        Lohn__c: {
            view: true,
            create: true,
            edit: true
        },
        Material_Proposal__c: {
            view: true,
            create: true,
            edit: true
        },
        Kontakt_bergaben__c: {
            view: true,
            create: true,
            edit: true
        }
    },
    operations: {
        operations: {
            view: true,
            create: true,
            edit: true
        },
        Order: {
            view: true,
            create: true,
            edit: true
        },
        OrderItem: {
            view: true,
            create: true,
            edit: true
        },
        Produktionsstandort__c: {
            view: true,
            create: true,
            edit: true
        },
        Sample_Sending__c: {
            view: true,
            create: true,
            edit: true
        },
        Projekt__c: {
            view: true,
            create: true,
            edit: true
        }
    },
    // #1154: Redaktion der öffentlichen Seiten (/cms) — neben admin die einzige Quelle
    // für cms. management vereinigt alle Tags und schließt editor damit ein.
    editor: {
        cms: {
            view: true,
            create: true,
            edit: true,
            delete: true
        }
    },
    // #1589: hr pflegt die Staff-Tags ANDERER Staff-Konten (eigenes Konto sperrt
    // staffTagPolicy.canEditStaffTags). management schließt hr über die Vereinigung ein.
    // #1660: dasselbe Recht lässt Staff-Konten anlegen (accountCreatePolicy); hr und
    // management selbst vergibt nur ein Admin (ADMIN_ONLY_STAFF_TAGS).
    // #1576: dazu die Bereichsverwaltung Zeit & Abwesenheit — neben admin die einzige
    // Quelle für time-admin.
    hr: {
        'staff-tags': {
            view: true,
            edit: true
        },
        'time-admin': {
            view: true,
            create: true,
            edit: true,
            delete: true
        }
    },
    marketing: {
        'notification-management': {
            view: true,
            create: true,
            edit: true,
            delete: true
        }
    },
    // #1592: it vergibt keine Rechte — nur Sichtbarkeit (dashboardRegistry `staffTag`)
    it: {},
    // #1662: intern (Praktikum) ist bisher nur ein Kennzeichen — keine Zusatzrechte,
    // keine Einschränkung. Ein Praktikantenkonto hat die Rechte von Basis-Staff.
    intern: {},
    // #1855: ineos hängt an partner-Konten (TAGS_BY_ROLE) und vergibt keine Rechte.
    // Es öffnet nur Sichtbarkeit: /auctions (tagGates.ts) und Wiki-Freigaben;
    // /my-auctions hängt seit #1927 an der Pool-Mitgliedschaft, nicht am Tag.
    ineos: {}
};
function getStaffTagPermissions() {
    return DEFAULT_STAFF_TAG_PERMISSIONS;
}
const staffTagPermissions = DEFAULT_STAFF_TAG_PERMISSIONS;
const DEFAULT_OBJECT_VISIBILITY_CONFIG = {
    // Lookup-based visibility (uses fields from 2standardvisibility.txt)
    Case: {
        mechanism: 'lookup',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ],
        lookupRules: [
            {
                lookupField: 'ContactId',
                matchType: 'contact',
                appliesTo: [
                    'agent',
                    'user',
                    'rigk'
                ],
                grants: {
                    showRecord: true,
                    informationCategories: [
                        'customerInformation',
                        'statistics'
                    ]
                }
            }
        ]
    },
    Task: {
        mechanism: 'lookup',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ],
        lookupRules: [
            {
                lookupField: 'WhoId',
                matchType: 'contact',
                appliesTo: [
                    'agent',
                    'user',
                    'rigk'
                ],
                grants: {
                    showRecord: true,
                    informationCategories: []
                }
            }
        ]
    },
    // RecordAccessGrant-only visibility (no OwnerId access)
    Contact: {
        mechanism: 'recordAccessGrant',
        appliesTo: [
            'agent'
        ]
    },
    Account: {
        mechanism: 'recordAccessGrant',
        appliesTo: [
            'agent'
        ]
    },
    Produktionsstandort__c: {
        mechanism: 'recordAccessGrant',
        appliesTo: [
            'agent'
        ]
    },
    // Ownership-based visibility (OwnerId OR RecordAccessGrant)
    Projekt__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Bedarfe__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Lohn__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Product2: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk',
            'advisor'
        ]
    },
    Material_Proposal__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Sample_Sending__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    // #271: these were previously unconfigured, so hasRecordAccess fell through to
    // the default-allow branch — a record-filtered role could read another tenant's
    // records by id. All three are owned by their creator (the entity routes set
    // OwnerId = userContext.userId on create), so ownership scoping applies.
    Sample_Feedback__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk',
            'laboratory',
            'advisor'
        ]
    },
    Requirement__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Aktueller_Preis_und_Verf_gbarkeit__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Order: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Abrechnung__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Invoice__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Kontakt_bergaben__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent'
        ]
    },
    Supplier_Audit__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    Unternehmenszertifikat__c: {
        mechanism: 'ownership',
        appliesTo: [
            'agent',
            'user',
            'rigk'
        ]
    },
    // Module-based visibility
    Monitored_Material__c: {
        mechanism: 'module',
        appliesTo: [
            'agent',
            'user',
            'rigk',
            'advisor'
        ],
        moduleRequired: 'mmaterials'
    },
    // Laboratory-specific (also ownership-based)
    // #331: agent ergänzt — Materialanalyse ist für agent objekt-seitig unsichtbar
    // (view: false), aber AuditProperty__c erbt seinen Record-Zugriff vom Parent
    // (parentRecord unten). Ohne agent hier fiele die Parent-Prüfung für agents
    // in den Default-Allow-Zweig und der Scope wäre wirkungslos.
    Materialanalyse__c: {
        mechanism: 'ownership',
        appliesTo: [
            'laboratory',
            'advisor',
            'agent'
        ]
    },
    // #331: Prüfparameter haben weder OwnerId noch eigenen Account-Lookup —
    // Record-Zugriff wird vom Materialanalyse-Parent geerbt (laboratory:
    // Dienstleister__c-Match, agent: OwnerId/Grants auf der Analyse). Ohne
    // diesen Eintrag fiel hasRecordAccess in den Default-Allow-Zweig
    // (#271-Bugklasse): laboratory/agent konnten JEDEN der 6.900+ Bestands-
    // datensätze per Id lesen und beschreiben (cross-tenant IDOR).
    AuditProperty__c: {
        mechanism: 'parentRecord',
        appliesTo: [
            'laboratory',
            'agent'
        ],
        parentObject: 'Materialanalyse__c',
        parentLookupField: 'Materialanalyse__c'
    },
    // #496: Contract fehlte hier komplett — hasRecordAccess fiel in den
    // Default-Allow-Zweig (#271-Bugklasse) und buildRecordFilter auf
    // 'Id != null'. Jede Rolle mit Contract-view erreichte damit JEDEN Vertrag
    // der Org, inklusive der Orders-Related-List mit Einkaufspreisen und dem
    // Download der Vertrags-PDF.
    //
    // Warum childRecord und nicht lookup/ownership/recordAccessGrant:
    //  - Contract trägt keinen Bearbeiter-Kontakt. Die einzige Contact-Referenz
    //    im Objekt ist CustomerSignedId — der Unterzeichner, nicht der
    //    Bearbeiter. Die 7 Kontakt-Lookups, über die agent seine Aufträge sieht,
    //    sind am Vertrag nicht abbildbar.
    //  - AccountId ist der Vertragspartner, nicht der Bearbeiter. Eine
    //    matchType-'account'-Regel würde zusätzlich hasParentAccountGrant und
    //    den accountLookupFields-Zweig scharfschalten: jeder BESTEHENDE
    //    Account-Grant gäbe rückwirkend Vertragszugriff.
    //  - OwnerId ist immer ein interner SF-User (Anlage in Salesforce oder
    //    seit #907 durch Staff/Admin in der App); buildRecordFilter emittiert
    //    OwnerId ohnehin nirgends.
    //
    // Die Sichtbarkeit erbt sich stattdessen vom KIND: wer einen Auftrag des
    // Vertrags sehen darf, darf den Vertrag sehen. Das ist nicht quer zum
    // Order-Scoping — es IST das Order-Scoping, und es entspricht dem, wofür
    // #449 den Vertrag gebaut hat (die Related List „Aufträge" ist das
    // Herzstück). Nebeneffekt: das Feld „Vertrag" am Auftrag kann nie ins Leere
    // zeigen, denn wer den Auftrag sieht, sieht per Konstruktion dessen Vertrag.
    //
    // appliesTo listet ALLE record-gefilterten Rollen — auch die mit
    // view: false, damit ein späteres view: true nicht wieder in den
    // Default-Allow fällt (Lehre aus #271/#331).
    Contract: {
        mechanism: 'childRecord',
        appliesTo: [
            'agent',
            'user',
            'rigk',
            'laboratory',
            'advisor'
        ],
        childObject: 'Order',
        childLookupField: 'ContractId'
    }
};
function getObjectVisibilityConfig() {
    return DEFAULT_OBJECT_VISIBILITY_CONFIG;
}
const objectVisibilityConfig = DEFAULT_OBJECT_VISIBILITY_CONFIG;
const DEFAULT_RECORD_VISIBILITY_RULES = {
    // #495: reine Lookup-Ziele (Opportunity.CampaignId / SyncedQuoteId).
    // Nur admin/staff haben view — die sind ohnehin nicht record-gefiltert.
    Campaign: [],
    Quote: [],
    // #449/#496: intern — am Objekt gibt es kein Kontakt-Lookup, über das sich
    // scopen ließe. Leer heißt hier NICHT „alles sichtbar": der Record-Scope
    // steht in DEFAULT_OBJECT_VISIBILITY_CONFIG.Contract (childRecord).
    // Bewusst leer, damit hasParentAccountGrant und der accountLookupFields-
    // Zweig von buildRecordFilter für Contract strukturell tot bleiben — sonst
    // gäbe jeder bestehende Account-Grant rückwirkend Vertragszugriff.
    Contract: [],
    // #325: intern — keine kundenseitige Sichtbarkeit
    Kostenstelle_plastship__c: [],
    // #792: intern — Kontenplan nur admin/staff/accounting
    DATEV_Sachkonto__c: [],
    // #831: intern (nur admin/staff sehen das Objekt)
    Abfallfraktionen__c: [],
    Case: [
        {
            lookupField: 'ContactId',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'statistics'
                ]
            }
        }
    ],
    Task: [
        {
            lookupField: 'WhoId',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Event: [
        {
            lookupField: 'WhoId',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Contact: [
        {
            lookupField: 'Id',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        },
        {
            lookupField: 'AccountId',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Account: [
        {
            lookupField: 'Id',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        },
        {
            // RIGK-only: unlock the four Verh_ltnis_RIGK_System / Pamira / Hannawald / ERDE
            // fields on the same Account record. The previous rule already grants
            // customerInformation; this one adds rigkRelationships on top for rigk role only.
            lookupField: 'Id',
            matchType: 'account',
            appliesTo: [
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'rigkRelationships'
                ]
            }
        }
    ],
    Produktionsstandort__c: [
        {
            lookupField: 'Verantwortlicher_Lieferung__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'transportInformation',
                    'statistics'
                ]
            }
        }
    ],
    Projekt__c: [
        {
            lookupField: 'Hauptlieferant__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'supplierInformation'
                ]
            }
        },
        {
            lookupField: 'Hauptkunde__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        },
        {
            lookupField: 'Lohndienstleister__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'sellingInformation'
                ]
            }
        }
    ],
    Bedarfe__c: [
        {
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'statistics'
                ]
            }
        }
    ],
    Lohn__c: [
        {
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'statistics'
                ]
            }
        }
    ],
    Product2: [
        {
            // #358: auf dem EIGENEN Produkt (Account__c = eigener Account) bekommt der
            // Kunde die pflegbaren Produktfelder (customerInformation) — Marktplatz-
            // Produkte anderer bleiben auf die alwaysVisible-Katalogfelder beschränkt.
            // showRecord ist für den Marktplatz ohnehin via hasRecordAccess-Bypass true;
            // hier zählt nur die Kategorie-Freigabe für die Feld-Sichtbarkeit.
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Material_Proposal__c: [
        {
            lookupField: 'Carrier_Contact__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                // #329: transportPricing (Preis/t + Carrier-Notiz) NUR hier — Kunde und
                // Lieferant bekommen transportInformation, aber nicht die Preise.
                informationCategories: [
                    'transportInformation',
                    'transportPricing'
                ]
            }
        },
        {
            lookupField: 'Account_Contact__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation',
                    'sellingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'Supplier_Contact__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'supplierInformation',
                    'transportInformation',
                    'buyingInformation',
                    'statistics'
                ]
            }
        }
    ],
    Sample_Sending__c: [
        {
            lookupField: 'Kontakt_Anlieferung__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation'
                ]
            }
        },
        {
            // #329 Welle A (PM 2026-07-03): der ABSENDER hat kein Kontaktfeld am
            // Record — Erkennung über den Ladestellen-Account (Account-Match).
            // Keine Spediteur-Perspektive bei Mustern (PM-Entscheid).
            lookupField: 'Load_from__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'supplierInformation',
                    'transportInformation'
                ]
            }
        }
    ],
    Sample_Feedback__c: [
        {
            // #271 GAP: Sample_Feedback__c has no OwnerId field in Salesforce, so the
            // `ownership` mechanism's OwnerId === userId check can never match. Scope
            // both the list (buildRecordFilter -> `Account__c = '<accountId>'`) and the
            // detail check (hasRecordAccess 'ownership' falls through to
            // matchesRecordVisibilityRule) by the Account lookup instead. Mirrors the
            // Abrechnung__c / Bedarfe__c account-scoping pattern. Account__c is already
            // part of the fetched baseFields, so list and detail stay in agreement.
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Requirement__c: [
        {
            lookupField: 'Contact__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Order: [
        {
            lookupField: 'Ansprechpartner_Transport_Lieferstelle__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation',
                    'sellingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'BillToContactId',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation',
                    'sellingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'ShipToContactId',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation',
                    'sellingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'CustomerAuthorizedById',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation',
                    'transportInformation',
                    'sellingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'Ansprechpartner_Transport_Ladestelle__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'supplierInformation',
                    'transportInformation',
                    'buyingInformation',
                    'statistics'
                ]
            }
        },
        {
            lookupField: 'Zust_ndiger_Kontakt_Lieferant__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'supplierInformation',
                    'transportInformation',
                    'buyingInformation',
                    'statistics'
                ]
            }
        },
        {
            // #329 Welle A (PM 2026-07-03): Spediteur-Perspektive auf Auftragsebene —
            // vorher konnte ein Transporteur-Kontakt eine Order gar nicht sehen.
            // transportPricing (Transporteur_Preis_NEU__c) NUR hier, analog MP.
            lookupField: 'Transporteur_Ansprechpartner_NEU__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'transportInformation',
                    'transportPricing'
                ]
            }
        }
    ],
    OrderItem: [],
    Abrechnung__c: [
        {
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'earnings'
                ]
            }
        }
    ],
    Invoice__c: [
        {
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'earnings'
                ]
            }
        }
    ],
    Monitored_Material__c: [
        {
            lookupField: 'Kunde__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        },
        {
            lookupField: 'Kontakt_Kunde__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Materialanalyse__c: [
        {
            lookupField: 'Dienstleister__c',
            matchType: 'account',
            appliesTo: [
                'laboratory'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Onboarding__c: [],
    Kontakt_bergaben__c: [
        {
            lookupField: 'Kontakt_Empf_nger__c',
            matchType: 'contact',
            appliesTo: [
                'agent'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        },
        {
            lookupField: 'Kontakt_bergeben__c',
            matchType: 'contact',
            appliesTo: [
                'agent'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Supplier_Audit__c: [
        {
            lookupField: 'Audit_Contact__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                // #369: vorher leer — ein kontakt-gematchtes Audit lieferte nur
                // Id/Name/CreatedDate (leere Slots).
                informationCategories: [
                    'customerInformation'
                ]
            }
        },
        {
            // #369: Account-Match analog Bedarfe/Lohn/Zertifikate — rigk sieht die
            // Audits des eigenen Accounts; das RIGK-Modul listet zusätzlich pro
            // Gruppen-Account (gated Route).
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    Unternehmenszertifikat__c: [
        {
            lookupField: 'Account__c',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                // #329 Welle A: der Kunde sieht sein eigenes Zertifikat inhaltlich
                // (vorher leer — Record sichtbar, aber keine Kategorie gewährt).
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    RecordAccessGrant__c: [
        {
            lookupField: 'ContactId__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Probe__c: [
        {
            lookupField: 'ContactId__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Probeversand__c: [
        {
            lookupField: 'ContactId__c',
            matchType: 'contact',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: []
            }
        }
    ],
    Opportunity: [
        {
            lookupField: 'AccountId',
            matchType: 'account',
            appliesTo: [
                'agent',
                'user',
                'rigk'
            ],
            grants: {
                showRecord: true,
                informationCategories: [
                    'customerInformation'
                ]
            }
        }
    ],
    User: [],
    Aktueller_Preis_und_Verf_gbarkeit__c: [],
    Reklamation__c: [],
    Prozessfeedback__c: [],
    // #362: Zertifikats-Katalog — globale Stammdaten (Lookup-Ziel), kein Record-Scoping.
    Zertifikate__c: [],
    // #331: Prüfparameter — Sichtbarkeit läuft über objectPermissions (interne Objekte)
    AuditProperty__c: [],
    AuditPropertyType__c: []
};
function getRecordVisibilityRules() {
    return DEFAULT_RECORD_VISIBILITY_RULES;
}
const recordVisibilityRules = DEFAULT_RECORD_VISIBILITY_RULES;
const DEFAULT_FIELD_DEFINITIONS = {
    // #495: reine Lookup-Ziele (Opportunity.CampaignId / SyncedQuoteId).
    Campaign: {},
    Quote: {},
    // #449
    Contract: {},
    // #325
    Kostenstelle_plastship__c: {},
    // #792
    DATEV_Sachkonto__c: {},
    // #831
    Abfallfraktionen__c: {},
    Case: {
        supplierInformation: [
            'Lieferant_Produkt__c'
        ],
        // #329 Welle A: der Kunde sieht seinen eigenen Vorgang inkl. Typ, Produkt
        // und dem Anfragetext (Description war schon hier, wurde aber von der Config
        // nicht für user/rigk gezeigt).
        // #1419: Produkt__c raus — die Id löste sich zum Produktnamen samt
        // Lieferant auf; maskRecordFields entfernt auch Produkt__r.
        customerInformation: [
            'ContactId',
            'AccountId',
            'Description',
            'Type'
        ],
        statistics: [
            'CheckAccount__c',
            'CheckContact__c',
            'CheckProduct__c',
            'CheckTypeSet__c',
            'CreatedDate',
            'ClosedDate',
            'Reaction_Time__c',
            'Processing_Time__c',
            'First_Touched__c',
            'Count_Onboardings__c',
            'Count_Requirements__c',
            'Count_MaterialProposals__c',
            'Count_ContactForwarding__c',
            'Count_Opportunities__c',
            'Count_Claim__c'
        ]
    },
    Task: {},
    Event: {},
    Probe__c: {},
    Probeversand__c: {},
    Contact: {},
    Account: {
        customerInformation: [
            'KISS_Kunde__c',
            'Kunde_Werksentsorgung__c',
            'Kunde_Materialeinkauf__c',
            'Transporteur__c',
            'Kunde_Partnermodell__c',
            'Kunde_Zertifizierung__c',
            'Dienstleister_Sonstige__c',
            'Kooperationspartner__c',
            'Zugesagtes_KISS_Kontingent__c',
            'Anzahl_KISS_Pr_fungen_avisiert__c',
            'Kunde_Materialpr_fung__c',
            'Kunde_Materialverkauf__c',
            'Dienstleister_Lohn__c',
            'Kunde_Digitale_Services__c',
            'Kunde_Beratung__c',
            'Agent__c',
            'ParentId',
            'AccountSource',
            'Charakteristik__c',
            'Verh_ltnis__c',
            'Ist_Key_Account__c'
        ],
        rigkRelationships: [
            // Only the 'rigk' role gets read access to these — wired via record-visibility rule
            'Verh_ltnis_RIGK_System__c',
            'Verh_ltnis_Pamira__c',
            'Verh_ltnis_Hannawald__c',
            'Verh_ltnis_ERDE__c'
        ],
        buyingInformation: [
            'Standardbedingung_Einkauf_von_Account__c'
        ],
        sellingInformation: [
            'E_Mailadresse_Rechnungen__c',
            'Besonderheiten_Rechnungsstellung__c',
            'Standardbedingung_Verkauf_an_Account__c',
            'Standardvorgehen_Bemusterung__c'
        ],
        statistics: [
            'AdditionalInformation_rate__c',
            'ContactInformation_rate__c',
            'InvoiceInformation_rate__c',
            'ResearchInformation_rate__c',
            'AccountInformation_rate__c',
            'TotalInformation_rate__c',
            'Count_Produktionsstandort__c',
            'Count_Audits__c',
            'Count_Certificates__c',
            'Count_Dienstleistungsmonitor__c',
            'Count_Reklamation_Verantwortlich__c',
            'Count_Reklamation_Kunde__c',
            'Count_Auftr_ge_Lieferant__c',
            'Count_Auftr_ge_Kunde__c',
            'Count_Abrechnungen_Eingang__c',
            'Count_Abrechnungen_Ausgang__c',
            'Datum_letzte_ReklamationV__c',
            'Datum_letzter_Auftrag_Lieferant__c',
            'Datum_letzter_Auftrag_Kunde__c',
            'Datum_letzte_Abrechnung__c',
            'Datum_letzte_Aktivit_t_Operations__c',
            'Lieferanten_Score__c',
            'Kunden_Score__c',
            'Ma_nahmen__c'
        ]
    },
    Produktionsstandort__c: {
        transportInformation: [
            'Verantwortlicher_Lieferung__c'
        ],
        statistics: [
            'plastship_Deeplink__c',
            'Anzahl_WL_Eintr_ge__c',
            'Ist_plastship_Lager__c',
            'Kosten_pro_Stellplatz_pro_Monat__c',
            'Kosten_Ein_Auslagerung_pauschal__c',
            'Lagermenge_Gesamt__c',
            'Aktuelle_Monatskosten_Bestand__c'
        ]
    },
    Projekt__c: {
        supplierInformation: [
            'Hauptlieferant__c'
        ],
        customerInformation: [
            'Hauptkunde__c'
        ],
        sellingInformation: [
            'Lohndienstleister__c'
        ]
    },
    Bedarfe__c: {
        // #329 Welle A: die komplette Kunden-Feldliste (vom PM bestätigt, 2026-07-02) —
        // das Materialprofil, das der Kunde selbst pflegt. Ohne diese Einträge lieferte
        // der Server Kunden auf ihren EIGENEN Bedarfen nur Name/Status (leere Slots).
        // Intern bleiben (bewusst NICHT hier): Bedarfsstatus__c, OwnerId-Details,
        // Qualifizierungs-Flags (Im_Fokus/Hohes_Potenzial/Hohes_Risiko/Sichtbar_f_r_Kunden),
        // Projekt-/Vorgangs-/Onboarding-Verknüpfungen.
        customerInformation: [
            'Account__c',
            'Land_Account__c',
            'Produktionsstandort__c',
            'Beschreibung_Bedarf__c',
            'Monatsbedarf_t__c',
            'Zielpreis__c',
            'Mengenpotenzial_t_p_a__c',
            'Materialkategorie__c',
            'Hauptpolymer__c',
            'Materialtyp__c',
            'Materialfarbe__c',
            'Rezyklatdefinition__c',
            'Verarbeitungsverfahren__c',
            'Anwendung__c',
            'F_llstoff_Text__c',
            'MFR_Min__c',
            'MFR_Max__c',
            'MFR_Mittelwert__c',
            'MFR_Temp__c',
            'MFR_kg__c',
            'Dichte_Min__c',
            'Dichte_Max__c',
            'Aschegehalt_Min__c',
            'Aschegehalt_Max__c',
            'Korngr_e_mm_Min__c',
            'Korngr_e_mm_Max__c',
            'Zugfestigkeit_Min__c',
            'Zugfestigkeit_Max__c',
            'Zug_E_Modul_Min__c',
            'Zug_E_Modul_Max__c',
            'Bruchdehnung_Min__c',
            'Bruchdehnung_Max__c',
            'Kerbschlagzaehigkeit_Min__c',
            'Kerbschlagzaehigkeit_Max__c'
        ],
        statistics: [
            'Count_Projects__c',
            'Count_Material_Proposal__c',
            'Time_to_Action__c',
            'First_Project_Created__c',
            'First_Material_Proposal_Created__c'
        ]
    },
    Lohn__c: {
        // #329 Welle A: der Kunde sieht die zu seinem Account gehörende
        // Lohndienstleistung inhaltlich (Kategorie/Preis/Beschreibung waren nie
        // geliefert — Katalogpflege bleibt Staff, daher view-only).
        // #404: Land_Account__c/Produktionsstandort__c und die komplette statistics-
        // Kategorie waren ein Copy-Paste aus dem Bedarfe__c-Block darüber. Auf Lohn__c
        // existieren diese Felder nicht — describe (teilkopie UND Produktion) liefert
        // 15 Felder, Tooling-API FieldDefinition als Systemadministrator 17 (inkl.
        // System-Pseudofelder). Keines davon ist dabei; also entfernt statt gepinnt.
        customerInformation: [
            'Account__c',
            'Dienstleistungskategorie__c',
            'Preis_pro_Tonne_standard__c',
            'Beschreibung__c'
        ]
    },
    Product2: {
        // #358: Felder, die der Kunde auf dem EIGENEN Produkt sieht/pflegt (Account-
        // Match schaltet diese Kategorie frei). Katalog-/Tech-Felder (Polymer, Farbe,
        // MFR, Dichte …) sind bereits in alwaysVisibleFields.Product2 und müssen hier
        // nicht wiederholt werden. Bewusst NICHT hier (bleibt intern, staff-gepflegt):
        // Sales_Intent__c, Im_Fokus/Hohes_Potenzial/Hohes_Risiko, Risikobewertung,
        // Accountinhaber, Dokumentencheck-Flags, Verknüpfungen (Projekt/Case/Onboarding).
        customerInformation: [
            'Account__c',
            'Produktionsstandort__c',
            // Stammdaten/Material (Text-/Kategorie-Ergänzungen zu den alwaysVisible-Katalogfeldern)
            'Product_Description__c',
            'Materialkategorie__c',
            'Filler_Material_Text__c',
            'Foreign_Polymers_Text__c',
            'Contaminants_Text__c',
            // Abwicklung / kaufmännisch (#358 PM 2026-07-06: Verpackung/Muster/Lager raus)
            'Tonnage_per_truck__c',
            'Yearly_capacity_in_t__c',
            'AVV_Nummer__c',
            'Recycled_Content__c',
            // Zertifizierungen (Selbstauskunft des Herstellers)
            'REACH_Confirmation__c',
            'FDA_Approval__c',
            'SVHC_Approval__c',
            'UN_Approval__c',
            'Cosmetics_Approval_Rinse_Off__c',
            'Cosmetics_Approval_Leave_On__c'
        ]
    },
    Material_Proposal__c: {
        supplierInformation: [
            'Product__c',
            'Producer_in_Product_Account__c',
            'Monthly_availability_in_t__c',
            'Supplier__c',
            'Supplier_Contact__c',
            'Relation_to_Supplier__c',
            'Standard_Business_Terms_Supplier__c',
            'Available_Sample_plastship_kg__c',
            'Sample_Order_from_Supplier__c',
            'Sample_Order_from_Supplier_Status__c',
            'Loading_Location__c'
        ],
        customerInformation: [
            'Account__c',
            'Account_Contact__c',
            'Relation_to_Customer__c',
            'Standard_Business_Terms_Customer__c',
            'Standard_Sampling_Process_Customer__c',
            'Delivery_Location__c',
            // #329: der Kunde sieht den Status seines Musterversands
            'Sample_Sending_to_Account__c'
        ],
        // #329 Welle A: Lade-/Lieferort zusätzlich in transport — der Spediteur
        // (nur transportInformation) braucht Von/Nach; Kunde/Lieferant hatten die
        // Orte über ihre eigenen Kategorien ohnehin schon.
        transportInformation: [
            'Tonnage_per_truck__c',
            'Carrier__c',
            'Carrier_Contact__c',
            'Loading_Location__c',
            'Delivery_Location__c'
        ],
        buyingInformation: [
            'Purchasing_price_per_ton__c',
            'Total_Purchasing_Price__c'
        ],
        sellingInformation: [
            'Sales_Price_per_ton__c',
            'Total_Sales_Price__c',
            'Delivery_Terms_Offer__c',
            // #329: die angebotene Menge gehört zum Angebot an den Kunden
            'Amount_monthly_t_offered__c'
        ],
        // #329: Transportpreis + Notiz NUR für den Spediteur (eigene schmale
        // Kategorie, der Carrier-Regel zugeordnet) — bewusst NICHT in
        // transportInformation (Kunde+Lieferant) und getrennt von den Margen
        // (earnings bleibt intern).
        transportPricing: [
            'Transport_Price_per_ton__c',
            'Total_Transport_Price__c',
            'Carrier_Note__c'
        ],
        earnings: [
            'Transport_Price_per_ton__c',
            'Total_Transport_Price__c',
            'Margin_per_ton__c',
            'Total_margin__c'
        ],
        statistics: [
            'Feedback_Date__c',
            'Feedback__c',
            'Negative_Feedback_Reason_Category__c'
        ]
    },
    Sample_Sending__c: {
        supplierInformation: [
            'Load_from__c',
            'Loading_Produktion__c',
            'Loading_Site__c'
        ],
        customerInformation: [
            'Deliver_to__c',
            'Delivery_Produktion__c',
            'Delivery_Site__c',
            'Kontakt_Anlieferung__c',
            // #329: Land + Lieferschein-Referenz für den Empfänger
            'Delivery_Produktion_Land__c',
            'Auftrags_ID_Lieferschein__c'
        ],
        // #329: Transportkosten__c ENTFERNT (PM 2026-07-03: keine Spediteur-
        // Perspektive bei Mustern; Kosten bleiben intern — der Empfänger soll sie
        // nicht sehen). Menge + Verpackung dafür rein: Empfänger UND Absender
        // brauchen sie (annehmen/verladen); Verpackungszähler zeigen sich in der
        // UI nur, wenn befüllt (hideWhenEmpty).
        transportInformation: [
            'Carrier__c',
            'Carrier_Contact__c',
            'Carrier_E_Mail__c',
            'Carrier_Phone__c',
            'Amount_in_kg__c',
            'Anzahl_BigBags__c',
            'Anzahl_Paletten_Holz__c',
            'Anzahl_Verpackung_Beutel__c',
            'Anzahl_Verpackung_Kartons__c',
            'Sonst_kg_Verpackung_Kunststoff__c'
        ]
    },
    Sample_Feedback__c: {},
    Requirement__c: {
        customerInformation: [
            'Account__c',
            'Contact__c',
            'Status__c',
            'Priority__c',
            'Type__c'
        ]
    },
    Order: {
        supplierInformation: [
            'Lieferant__c',
            'Produktionsstandort__c',
            // #1647: Adresse der Ladestelle zum Standort-Namen
            'Loading_Site__c',
            'Incoterm_Einkauf__c',
            'Zust_ndiger_Kontakt_Lieferant__c',
            'Ansprechpartner_Transport_Ladestelle__c'
        ],
        customerInformation: [
            'CompanyAuthorizedById',
            'AccountId',
            'Produktion_Delivery__c',
            // #1647: Adresse der Lieferstelle zum Standort-Namen
            'Delivery_Site__c',
            'PoNumber',
            'Incoterm__c',
            'Ansprechpartner_Transport_Lieferstelle__c'
        ],
        // #329: NEU-Felder nachgezogen (die Kategorien standen noch auf dem alten
        // Transportblock → Externe bekamen leere Alt-Felder statt echter Daten)
        // + Von/Nach/Termine/AVV/Verpackung, damit die Spediteur-Sicht die Strecke
        // kennt (transport geht an alle drei Parteien).
        transportInformation: [
            'Transportpreis_Nachschlagen__c',
            'Truck_Nr__c',
            'Transporteur__c',
            'Transporteur_Ansprechpartner__c',
            'Transporteur_AP_Telefon__c',
            'Transporteur_AP_EMail__c',
            'Anweisungen_Transporteur_Dispo__c',
            'Transporteur_NEU__c',
            'Transporteur_Ansprechpartner_NEU__c',
            'Produktionsstandort__c',
            'Produktion_Delivery__c',
            'Datum_Abholung_NEU__c',
            'Datum_ETA_NEU__c',
            'AVV_Nummer_Anzeige__c',
            'Verpackung__c'
        ],
        buyingInformation: [
            'Wiegeschein_Lieferant_t__c',
            'Wiegeschein_Lieferant_Nr__c',
            'Einkaufspreis_pro_t__c',
            'Einkaufspreis_Gesamt__c',
            'Datum_Abholung__c',
            'Anweisungen_Transporteur_Ladestelle__c',
            // #329: NEU-Abholdatum + USt Einkauf für die Lieferanten-Sicht
            'Datum_Abholung_NEU__c',
            'Ust_Einkauf__c'
        ],
        sellingInformation: [
            'Wiegeschein_Kunde_t__c',
            'Wiegeschein_Kunde_Nr__c',
            'Liefermenge__c',
            'Vorlage_Labels_Materialnummer_Kunde__c',
            'Verkaufspreis_pro_t__c',
            'TotalAmount',
            'ETA__c',
            'Anweisungen_Transporteur_Entladestelle__c',
            // #329: NEU-Liefertermine, tatsächliche Menge + USt für die Kunden-Sicht
            'Datum_ETA_NEU__c',
            'Datum_tats_Anlieferung_NEU__c',
            'Tats_chliche_Liefermenge__c',
            'Ust__c'
        ],
        // #329: Transportpreis (NEU) NUR für den Spediteur — getrennt von den
        // internen Margen/Alt-Preisfeldern in earnings (bleiben unangetastet).
        transportPricing: [
            'Transporteur_Preis_NEU__c'
        ],
        earnings: [
            'Kostenstelle__c',
            'Marge_2_Gesamt__c',
            'Transporteur_AP_EMail__c',
            'Transportpreis_pro_Tonne__c',
            'Transportpreis__c',
            'Auslagen_pro_t_Agent__c',
            'Auslagen_Agent__c',
            'Marge_pro_t__c',
            'Gesamtmarge__c',
            'Zielbetrag_Kunde__c',
            'Zielbetrag_Lieferant__c',
            'Offener_Betrag_von_Kunde__c',
            'Offener_Betrag_an_Lieferant__c',
            'Offener_Betrag_an_Sales_Agent__c',
            'Offener_Betrag_an_Transporteur__c',
            'DB_plastship__c',
            'Abrechnung_Betrag__c',
            'Betrag_Ausgangsrechnungen_Kunde__c',
            'Betrag_Eingangsrechnungen_Lieferant__c',
            'Betrag_Eingangsrechnungen_Sales_Agent__c',
            'Betrag_Eingangsrechnungen_Sonstige__c',
            'Betrag_Eingangsrechnungen_Transporteur__c',
            'Betrag_Vorkasse_gezahlt__c'
        ],
        statistics: [
            'Anzahl_Auftragsprodukte__c',
            'Anzahl_Abrechnungen__c',
            'Anzahl_Abrechnungen_Kategorie_Rechnung__c',
            'Hat_Datum_Lieferung__c',
            'Datum_letzte_Abrechnung__c',
            'Datum_letzte_Reklamation__c'
        ]
    },
    OrderItem: {},
    Abrechnung__c: {
        earnings: [
            'Rechnungsbetrag__c',
            'Ust__c',
            'Rechnungsbetrag_brutto__c',
            'Eingangsdatum_plastship__c',
            'Originalbeleg_Herkunft__c',
            'Status_der_Abrechnung__c'
        ]
    },
    Invoice__c: {
        earnings: [
            'Amount__c',
            'Tax_Amount__c',
            'Total_Amount__c',
            'Invoice_Date__c',
            'Due_Date__c',
            'Status__c'
        ]
    },
    Monitored_Material__c: {
        supplierInformation: [
            'Account_Produkt__c',
            'Produktbeschreibung_DE__c'
        ],
        customerInformation: [
            'Recycled_Content__c',
            'Kunde__c',
            'Kontakt_Kunde__c',
            'Auftrag__c',
            'Assessment_11_Sampling__c',
            'Assessment_13_Quality__c',
            'Report_Individuelle_Nummer__c',
            'Assessment_1_General__c',
            'Beschreibung_Analysen_Standard__c',
            'Assessment_2_Parameters__c',
            'Beschreibung_Analysen_Folie__c',
            'Assessment_3_Mechanical__c',
            'Beschreibung_Analysen_Geruch__c',
            'Assessment_4_Odour__c',
            'Beschreibung_Analysen_Polymeranteile__c',
            'Assessment_5_Polymers__c',
            'Beschreibung_Analysen_Schwermetalle__c',
            'Assessment_6_HeavyM__c',
            'Beschreibung_Analysen_Optische_Qualit_t__c',
            'Assessment_7_Optical__c',
            'Beschreibung_CO2e__c',
            'Assessment_8_CO2__c',
            'Equivalency_and_market__c',
            'Assessment_9_Market__c',
            'Assessment_10_TDS__c',
            'Final_remarks__c',
            'Assessment_12_Final__c'
        ],
        statistics: [
            'LastModifiedDate',
            'Hauptpolymer__c',
            'Form__c',
            'Datum_Report__c',
            'Quality_Grade__c',
            'Rezyklatdefinition__c',
            'Farbe__c',
            'Abfallfraktion__c',
            // Relationship fields
            'Kunde__r',
            'Ersteller__c',
            'LastModifiedBy'
        ]
    },
    Materialanalyse__c: {},
    Onboarding__c: {},
    Kontakt_bergaben__c: {},
    Supplier_Audit__c: {
        // #369: die Audit-Feldliste (PM: Audits sind fachlich für die Zusammenarbeit
        // in der Gruppe gedacht) — ohne diese Einträge lieferte der Server auf
        // gematchten Audits nur Id/Name/CreatedDate. Produktionsstandort__c und
        // Audit_Contact__c bewusst NICHT (PM 2026-07-07: für rigk unwichtig, und
        // die Lookup-Ziele sind für rigk nicht suchbar).
        customerInformation: [
            'Account__c',
            'Audit_Type__c',
            'Audit_Direction__c',
            'Audit_result__c',
            'Date_of_visit__c',
            'Valid_to__c',
            'Audit_report__c',
            'Master_Checkliste_Audits__c'
        ]
    },
    Unternehmenszertifikat__c: {
        // #329 Welle A: der Kunde sieht sein eigenes registriertes Zertifikat.
        // Betrifft_Standort__c bewusst NICHT hier — Produktionsstandorte sind für
        // Kunden (noch) nicht sichtbar; Kundenansicht folgt als eigenes Feature.
        // #353: Account__c ergänzt — sonst zeigt der Kopf "-" (Feld war maskiert),
        // obwohl der Kunde die Zuordnung zu seinem eigenen Account sehen soll.
        customerInformation: [
            'Account__c',
            'Zertifikate__c',
            'G_ltig_von__c',
            'G_ltig_bis__c',
            'Notiz__c'
        ]
    },
    RecordAccessGrant__c: {},
    Zertifikate__c: {},
    AuditProperty__c: {},
    AuditPropertyType__c: {},
    Opportunity: {},
    User: {},
    Aktueller_Preis_und_Verf_gbarkeit__c: {},
    Reklamation__c: {},
    Prozessfeedback__c: {} // No specific field categories defined
};
function getFieldDefinitions() {
    return DEFAULT_FIELD_DEFINITIONS;
}
const fieldDefinitions = DEFAULT_FIELD_DEFINITIONS;
const DEFAULT_ALWAYS_VISIBLE_FIELDS = {
    // #495: reine Lookup-Ziele (Opportunity.CampaignId / SyncedQuoteId).
    Campaign: [
        'Id',
        'Name'
    ],
    Quote: [
        'Id',
        'Name',
        'QuoteNumber'
    ],
    // #449
    Contract: [
        'Id',
        'ContractNumber',
        'Status',
        'StartDate',
        'EndDate',
        'OwnerId',
        'CreatedDate',
        'LastModifiedDate'
    ],
    // #325
    Kostenstelle_plastship__c: [
        'Id',
        'Name',
        'Nummer_Kostenstelle__c',
        'Kostenstellentyp__c',
        'OwnerId',
        'CreatedDate',
        'LastModifiedDate'
    ],
    // #792: Kontenplan — Name = Kontonummer, Bezeichnung, Typ, aktiv
    DATEV_Sachkonto__c: [
        'Id',
        'Name',
        'Kontonummer__c',
        'Bezeichnung__c',
        'Typ__c',
        'Aktiv__c',
        'CreatedDate',
        'LastModifiedDate'
    ],
    // #831
    Abfallfraktionen__c: [
        'Id',
        'Name',
        'AVV_Nummer__c',
        'CreatedDate',
        'LastModifiedDate'
    ],
    Case: [
        'Id',
        'CaseNumber',
        'Subject',
        'Status',
        'OwnerId',
        'CreatedDate',
        'LastModifiedDate'
    ],
    Task: [
        'Id',
        'Subject',
        'Status',
        'Priority',
        'ActivityDate',
        'OwnerId',
        'CreatedDate'
    ],
    Event: [
        'Id',
        'Subject',
        'StartDateTime',
        'EndDateTime'
    ],
    Probe__c: [
        'Id',
        'Name'
    ],
    Probeversand__c: [
        'Id',
        'Name'
    ],
    Contact: [
        'Id',
        'Name',
        'Email',
        'Phone',
        'Title',
        'AccountId',
        'OwnerId'
    ],
    Account: [
        'Id',
        'Name',
        'Type',
        'Industry',
        'OwnerId',
        'CreatedDate'
    ],
    Produktionsstandort__c: [
        'Id',
        'Name',
        'CreatedDate'
    ],
    // #359: Typ/Status/Priorität identifizieren das Projekt — auch in der Minimal-
    // Sicht soll klar sein, worum es geht (analog Material Proposal/#329). Das
    // generische 'Status' existiert auf Projekt__c nicht (Feld heißt Status__c).
    Projekt__c: [
        'Id',
        'Name',
        'Status__c',
        'Projekttyp__c',
        'Projektpriorit_t__c',
        'OwnerId',
        'CreatedDate'
    ],
    Bedarfe__c: [
        'Id',
        'Name',
        'OwnerId',
        'CreatedDate'
    ],
    Lohn__c: [
        'Id',
        'Name',
        'OwnerId',
        'CreatedDate'
    ],
    // Product2 is the public marketplace catalogue. Anyone with view access
    // (admin/staff natively, customer roles via the marketplace bypass and
    // Sales_Intent__c filter) needs the catalog attributes — Product_Name_Sync,
    // polymer, type, colour, trade name, monthly amount, platform price — to
    // render /products/ and /products/search/. Customer-private linkages like
    // Account__c (supplier company), Material_ID__c, etc. stay gated.
    Product2: [
        'Id',
        'Name',
        'ProductCode',
        'IsActive',
        'OwnerId',
        'CreatedDate',
        'LastModifiedDate',
        // Display name — the formatted "1922-PP-schwarz" Salesforce keeps in sync
        'Product_Name__c',
        // Catalog attributes shown in the table + cards
        'Material_type__c',
        'Main_polymer__c',
        'Material_colour__c',
        'Trade_Name__c',
        'Description',
        'Family',
        'Amount_monthly__c',
        'Platform_Price__c',
        // Picklists driving filters / search
        'Rezyklatdefinition__c',
        'Verarbeitungsverfahren__c',
        'Ziel_Anwendung__c',
        // #1772: Katalog-Stammdaten als Lookup (Spalten Materialkategorie /
        // Abfallfraktionen der Produktliste). Ihre Namen kamen bisher über das
        // ungefilterte __r-Objekt; seit #1772 braucht __r den sichtbaren
        // Fremdschlüssel. Keine kundenbezogene Information.
        'Materialkategorie__c',
        'Abfallfraktionen__c',
        // Marketplace-visibility gate (we filter on it server-side, but it's
        // useful for the UI to know the value when admin/staff inspect the row)
        'Sales_Intent__c',
        // Technical datasheet fields rendered in the "Technische Daten" tab on
        // the marketplace product detail page and consumed by the SimilarMaterials
        // / fit-assessment calculator. These are catalog specs (same tier as
        // polymer/colour) — they never contain customer-private information.
        'MFR_Test_Standard_ISO_1133__c',
        'MFR_Min__c',
        'MFR_Temp__c',
        'MFR_kg__c',
        'MVR_Test_Standard_ISO_1133__c',
        'MVR_Min__c',
        'Dichte_Test_Standard_ISO_1183__c',
        'Dichte_Min__c',
        'Aschegehalt_Test_Standard_ISO_3451__c',
        'Aschegehalt_Min__c',
        'Zug_E_Modul__c',
        'Zug_E_Modul_Min__c',
        'Zugfestigkeit__c',
        'Zugfestigkeit_Min__c',
        'Zugdehnung__c',
        'Zugdehnung_Min__c',
        'Zugspannung_an_der_Streckgrenze_MPa__c',
        'Zugspannung_an_der_Streckgrenze_Min__c',
        'Bruchdehnung__c',
        'Bruchdehnung_Min__c',
        'Bruchspannung__c',
        'Bruchspannung_Min__c',
        'Kerbschlagz_higkeit_Charpy__c',
        'Kerbschlagzaehigkeit_Min__c',
        'Kerbschlagz_higkeit_Izod__c',
        'Kerbschlagz_higkeit_Izod_Min__c',
        'Sch_ttdichte__c',
        'Sch_ttdichte_Min__c',
        'Korngr_e_mm__c',
        'Korngr_e_mm_Min__c',
        'Filter_size_my__c',
        'Oberfl_chenfeuchte__c',
        'Oberfl_chenfeuchte_Min__c'
    ],
    // #329: Produktcode/-kategorie identifizieren den Deal — auch in der
    // Minimal-/Grant-Sicht soll klar sein, worum es geht.
    Material_Proposal__c: [
        'Id',
        'Name',
        'Status__c',
        'OwnerId',
        'CreatedDate',
        'Product_Code__c',
        'Product_Category__c'
    ],
    // #329: Typ + Produkt identifizieren die Sendung auch in der Minimal-/Grant-Sicht.
    Sample_Sending__c: [
        'Id',
        'Name',
        'Status__c',
        'Datum_Versand__c',
        'OwnerId',
        'CreatedDate',
        'Typ__c',
        'Produkt__c'
    ],
    Sample_Feedback__c: [
        'Id',
        'Name',
        'Status__c',
        'CreatedDate'
    ],
    Requirement__c: [
        'Id',
        'Name',
        'Status__c',
        'Priority__c',
        'OwnerId',
        'CreatedDate'
    ],
    // #329: Produkt + Menge identifizieren den Auftrag — auch in der Minimal-/
    // Grant-Sicht soll klar sein, worum es geht (analog Material Proposal).
    Order: [
        'Id',
        'OrderNumber',
        'Status',
        'EffectiveDate',
        'OwnerId',
        'CreatedDate',
        'Produkt__c',
        'Quantity__c'
    ],
    OrderItem: [
        'Id',
        'OrderId',
        'Product2Id',
        'Quantity',
        'UnitPrice',
        'TotalPrice'
    ],
    Abrechnung__c: [
        'Id',
        'Name',
        'Status_der_Abrechnung__c',
        'CreatedDate'
    ],
    Invoice__c: [
        'Id',
        'Name',
        'Status__c',
        'Invoice_Number__c',
        'OwnerId',
        'CreatedDate'
    ],
    // Monitored_Material__c is the public marketplace catalog. Anyone with view
    // access (admin/staff natively, customer roles via the mmaterials module
    // bypass) needs the catalog attributes — polymer, form, color, quality
    // grade, report metadata — to render the MM list. Customer-private fields
    // (Kunde__c, Kontakt_Kunde__c, Account_Produkt__c) are *not* in this list
    // and stay gated by mmaterials hideNames + information categories.
    Monitored_Material__c: [
        'Id',
        'Name',
        'OwnerId',
        'CreatedDate',
        'LastModifiedDate',
        // Display lookup — interne Rollen sehen ohnehin alles; für alle anderen
        // entfernt getVisibleFields die Id wieder (#1419, MM_HIDDEN_ID_FIELDS).
        'Produkt__c',
        // Catalog attributes shown in every MM row
        'Hauptpolymer__c',
        'Form__c',
        'Farbe__c',
        'Avg_Opacity__c',
        'Summe_Defekte__c',
        'Rezyklatdefinition__c',
        'Quality_Grade__c',
        'Recycled_Content__c',
        // Report metadata
        'Datum_Report__c',
        'Report_Individuelle_Nummer__c',
        // High-level assessment text rendered in the assessment columns
        'Assessment_1_General__c',
        'Assessment_2_Parameters__c'
    ],
    Materialanalyse__c: [
        'Id',
        'Name',
        'Status__c',
        'OwnerId',
        'CreatedDate'
    ],
    Onboarding__c: [
        'Id',
        'Name',
        'OwnerId',
        'CreatedDate'
    ],
    Kontakt_bergaben__c: [
        'Id',
        'Name',
        'OwnerId',
        'CreatedDate'
    ],
    Supplier_Audit__c: [
        'Id',
        'Name',
        'CreatedDate'
    ],
    // #370: die Kern-Felder mitliefern — die Detailseite eines GRUPPEN-Zertifikats
    // ist für rigk über den Gruppen-Bypass erreichbar, aber die Kategorie-Grants
    // matchen nur den EIGENEN Account → ohne diese Einträge zeigte die Seite
    // leere Slots. Zugriff bleibt über hasRecordAccess gegated; die Felder sind
    // das, was das Zertifikat ausmacht (kein Internes).
    Unternehmenszertifikat__c: [
        'Id',
        'Name',
        'CreatedDate',
        'Account__c',
        'Zertifikate__c',
        'G_ltig_von__c',
        'G_ltig_bis__c',
        'Notiz__c'
    ],
    // #362: Katalog-Einträge bestehen im Kern aus dem Namen.
    Zertifikate__c: [
        'Id',
        'Name',
        'CreatedDate'
    ],
    // #331: analog #370 (Unternehmenszertifikat__c) — AuditProperty__c hat keine
    // Kategorie-Grants, daher müssen die Fachfelder hier stehen. Ohne sie maskte
    // Layer 3 für laboratory/agent ALLE Ergebnis-/Definitionsfelder weg: die
    // Detailseite renderte leere Slots, der "Zur Materialanalyse"-Button fehlte
    // (Materialanalyse__c gestrippt) und ein Save überschrieb blind vorhandene
    // Werte. Zugriff bleibt über hasRecordAccess (parentRecord-Scoping) gegated;
    // welche Felder eine Rolle SIEHT/EDITIERT, steuern die Sections der
    // Feld-Config (AuditProperty.fields.ts, #202 §21).
    AuditProperty__c: [
        'Id',
        'Name',
        'Name__c',
        'CreatedDate',
        'LastModifiedDate',
        'Type__c',
        'Category_AuditPropertyType__c',
        'Test_standard__c',
        'Value__c',
        'Value_min__c',
        'Value_max__c',
        'Test_parameter1__c',
        'Test_parameter2__c',
        'Text_Value__c',
        'Materialanalyse__c',
        'Monitored_Material__c'
    ],
    AuditPropertyType__c: [
        'Id',
        'Name'
    ],
    RecordAccessGrant__c: [
        'Id',
        'Name',
        'AccessGrantedFor__c',
        'Show_Record__c',
        'OwnerId',
        'CreatedDate'
    ],
    Opportunity: [
        'Id',
        'Name',
        'StageName',
        'Amount',
        'CloseDate',
        'AccountId',
        'OwnerId',
        'CreatedDate'
    ],
    User: [
        'Id',
        'Name',
        'Username',
        'Email',
        'IsActive',
        'UserType',
        'CreatedDate',
        'LastModifiedDate'
    ],
    Reklamation__c: [
        'Id',
        'Name',
        'CreatedDate',
        'LastModifiedDate'
    ],
    Prozessfeedback__c: [
        'Id',
        'Name',
        'CreatedDate',
        'LastModifiedDate'
    ],
    Aktueller_Preis_und_Verf_gbarkeit__c: [
        'Id',
        'Name',
        'Preis_pro_Tonne__c',
        'Tonnen__c',
        'g_ltig_ab__c',
        'g_ltig_bis__c',
        'CreatedDate'
    ]
};
function getAlwaysVisibleFields() {
    return DEFAULT_ALWAYS_VISIBLE_FIELDS;
}
const alwaysVisibleFields = DEFAULT_ALWAYS_VISIBLE_FIELDS;
const ACCOUNTING_VISIBLE_FIELDS = {
    Order: [
        ...DEFAULT_FIELD_DEFINITIONS.Order.customerInformation ?? [],
        ...DEFAULT_FIELD_DEFINITIONS.Order.transportInformation ?? [],
        ...DEFAULT_FIELD_DEFINITIONS.Order.sellingInformation ?? [],
        ...DEFAULT_FIELD_DEFINITIONS.Order.statistics ?? [],
        'Type',
        'Auftragsrichtung__c',
        'ContractId',
        'Projekt__c',
        'Lieferant__c',
        'Lieferdatum_Text__c',
        'Zusatz_Rechnung__c',
        'Zahlungsbedingung_Kunde__c',
        'Zahlungsziel_Ausgangsrechnung__c',
        'Zahlungsziel_Eingangsrechnung_Lieferant__c',
        'Zahlungsziel_Transportrechnung__c',
        'Einkaufsbedingung_Abrechnung_Lieferant__c',
        'Ust_Einkauf__c',
        'Wiegeschein_Lieferant_t__c',
        'Wiegeschein_Lieferant_Nr__c',
        'Datum_Abholung__c',
        'Kostenstelle__c',
        'Transportpreis__c',
        'Transportpreis_pro_Tonne__c',
        'Transporteur_Preis_NEU__c',
        'Zielbetrag_Kunde__c',
        'Zielbetrag_Lieferant__c',
        'Offener_Betrag_von_Kunde__c',
        'Offener_Betrag_an_Lieferant__c',
        'Offener_Betrag_an_Sales_Agent__c',
        'Offener_Betrag_an_Transporteur__c',
        'Abrechnung_Betrag__c',
        'Betrag_Ausgangsrechnungen_Kunde__c',
        'Betrag_Eingangsrechnungen_Lieferant__c',
        'Betrag_Eingangsrechnungen_Sales_Agent__c',
        'Betrag_Eingangsrechnungen_Sonstige__c',
        'Betrag_Eingangsrechnungen_Transporteur__c',
        'Betrag_Rechnung_Nachlass_Kunde__c',
        'Betrag_Rechnung_Nachlass_Lieferant__c',
        'Betrag_Vorkasse_gezahlt__c',
        'Anzahl_Prognosen__c',
        'Rechnungen_pr_fen__c',
        'Alle_Abrechnungen_erstellt__c'
    ],
    Account: [
        ...DEFAULT_FIELD_DEFINITIONS.Account.buyingInformation ?? [],
        ...DEFAULT_FIELD_DEFINITIONS.Account.sellingInformation ?? [],
        ...DEFAULT_FIELD_DEFINITIONS.Account.statistics ?? [],
        'Kundennummer__c',
        'Ust_ID__c',
        'Leitweg_ID__c',
        'Account_E_Mail__c',
        'Phone',
        'Website',
        'BillingStreet',
        'BillingPostalCode',
        'BillingCity',
        'BillingState',
        'BillingCountry'
    ]
};
const flexpageConfig = {
    // #495: reine Lookup-Ziele (Opportunity.CampaignId / SyncedQuoteId).
    Campaign: {},
    Quote: {},
    // #449
    Contract: {},
    // #325
    Kostenstelle_plastship__c: {},
    // #792
    DATEV_Sachkonto__c: {},
    // #831
    Abfallfraktionen__c: {},
    Case: {
        admin: 'CaseDefault_Record_Page',
        staff: 'CaseDefault_Record_Page',
        agent: 'CaseDefault_Record_Page_Agent',
        user: 'CaseDefault_Record_Page_User',
        rigk: 'CaseDefault_Record_Page_User'
    },
    Contact: {
        admin: 'Contact_Record_Page_Three_Column',
        staff: 'Contact_Record_Page_Three_Column',
        agent: 'Contact_Record_Page_Three_Column_Agent',
        user: 'Contact_Record_Page_Three_Column_Agent',
        rigk: 'Contact_Record_Page_Three_Column_Agent'
    },
    Account: {
        admin: 'Account_Record_Page_Three_Column',
        staff: 'Account_Record_Page_Three_Column',
        agent: 'Account_Record_Page_Agent',
        user: 'Account_Record_Page_User',
        rigk: 'Account_Record_Page_User'
    },
    Produktionsstandort__c: {
        admin: 'Produktionsstandort',
        staff: 'Produktionsstandort',
        agent: 'Produktionsstandort_Agent',
        user: 'Produktionsstandort_Agent',
        rigk: 'Produktionsstandort_Agent'
    },
    Projekt__c: {
        admin: 'Projekt_bersicht1',
        staff: 'Projekt_bersicht1',
        agent: 'Projekt_bersicht1_Agent'
    },
    Bedarfe__c: {
        admin: 'Bedarfe',
        staff: 'Bedarfe',
        agent: 'Bedarfe_Agent',
        user: 'Bedarfe_User',
        rigk: 'Bedarfe_User'
    },
    Lohn__c: {
        admin: 'Bedarfe',
        staff: 'Bedarfe',
        agent: 'Bedarfe_Agent',
        user: 'Bedarfe_User',
        rigk: 'Bedarfe_User'
    },
    Order: {
        admin: 'Orders1',
        staff: 'Orders1',
        agent: 'Orders1_Agent',
        user: 'Orders1_User',
        rigk: 'Orders1_User'
    },
    Abrechnung__c: {
        admin: 'Abrechnung',
        staff: 'Abrechnung',
        accounting: 'Abrechnung',
        agent: 'Abrechnung_Agent',
        user: 'Abrechnung_User',
        rigk: 'Abrechnung_User'
    },
    Invoice__c: {
        admin: 'Invoice',
        staff: 'Invoice',
        accounting: 'Invoice',
        agent: 'Invoice_Agent',
        user: 'Invoice_User',
        rigk: 'Invoice_User'
    },
    Product2: {
        admin: 'Produkt',
        staff: 'Produkt'
    },
    Monitored_Material__c: {
        admin: 'Monitored_Materials',
        staff: 'Monitored_Materials',
        user: 'Monitored_Materials_User',
        rigk: 'Monitored_Materials_User'
    },
    Materialanalyse__c: {
        admin: 'Materialanalyse',
        staff: 'Materialanalyse',
        laboratory: 'Materialanalyse_Laboratory'
    },
    Material_Proposal__c: {
        admin: 'Material_Proposal',
        staff: 'Material_Proposal',
        agent: 'Material_Proposal_Agent',
        user: 'Material_Proposal_User',
        rigk: 'Material_Proposal_User'
    },
    Sample_Sending__c: {
        admin: 'Sample_Sendings',
        staff: 'Sample_Sendings',
        agent: 'Sample_Sendings_Agent',
        user: 'Sample_Sendings_User',
        rigk: 'Sample_Sendings_User'
    },
    Sample_Feedback__c: {
        admin: 'Sample_Feedback',
        staff: 'Sample_Feedback'
    },
    Requirement__c: {
        admin: 'Requirement',
        staff: 'Requirement',
        agent: 'Requirement_Agent',
        user: 'Requirement_User',
        rigk: 'Requirement_User'
    },
    Supplier_Audit__c: {
        admin: 'Supplier_audit',
        staff: 'Supplier_audit',
        user: 'Supplier_audit_User',
        rigk: 'Supplier_audit_User'
    },
    Unternehmenszertifikat__c: {
        admin: 'Unternehmenszertifikat',
        staff: 'Unternehmenszertifikat'
    },
    Zertifikate__c: {},
    // #331
    AuditProperty__c: {},
    AuditPropertyType__c: {},
    RecordAccessGrant__c: {},
    Task: {},
    Event: {},
    Probe__c: {},
    Probeversand__c: {},
    OrderItem: {
        admin: 'OrderItem_Record_Page',
        staff: 'OrderItem_Record_Page',
        accounting: 'OrderItem_Record_Page'
    },
    Onboarding__c: {},
    Kontakt_bergaben__c: {},
    Opportunity: {},
    User: {},
    Aktueller_Preis_und_Verf_gbarkeit__c: {},
    Reklamation__c: {},
    Prozessfeedback__c: {}
};
const MM_HIDDEN_NAME_FIELDS = [
    'Account_Produkt__c',
    'Kunde__c',
    'Kontakt_Kunde__c'
];
const MM_HIDDEN_NAMES_PRODUCT_FIELDS = [
    'Material_colour__c'
];
function seesMonitoredMaterialNames(userContext) {
    return [
        'admin',
        'staff',
        'laboratory'
    ].includes(userContext.role);
}
function hidesMonitoredMaterialNames(userContext, object) {
    return object === 'Monitored_Material__c' && !seesMonitoredMaterialNames(userContext);
}
const MM_HIDDEN_ID_FIELDS = [
    'Produkt__c'
];
const moduleConfig = {
    mmaterials: {
        objects: [
            'Monitored_Material__c'
        ],
        hideNames: true // Hide account/contact names for basic module users
    },
    ppwr: {
        objects: [
            'Account',
            'Unternehmenszertifikat__c',
            'Supplier_Audit__c',
            'Produktionsstandort__c',
            'Order'
        ],
        hideNames: false // Show full information for PPWR compliance monitoring
    },
    plastrack: {
        objects: [] // Future: Tracking system objects
    },
    plaspcf: {
        objects: [] // Future: CO2 evaluation objects
    },
    rigk: {
        // Page access comes via MODULE_RESOURCE_MAP['rigk'] = ['rigk-module']
        // (below). The dedicated /api/rigk/accounts/** routes do their own
        // explicit `userContext.modules?.includes('rigk')` check and apply
        // `Ist_RIGK_Gruppenkontakt__c = true` filtering at the SOQL layer, so
        // we don't grant blanket Account view here — that would break the
        // documented "Requires ppwr module" gate on the global /accounts page
        // and let any agent+rigk user open the unfiltered Accounts list.
        objects: [],
        hideNames: false
    },
    pricing: {
        objects: [] // Stockmarket & pricing — UI access only, no SF objects
    }
};
function resolveStaffTags(tags) {
    if (tags.includes('management')) {
        return ALL_STAFF_TAGS;
    }
    return tags;
}
function hasStaffTag(userContext, tag) {
    if (userContext.role === 'admin') return true;
    if (userContext.role !== 'staff') return false;
    if (!userContext.staffTags || userContext.staffTags.length === 0) return false;
    const effectiveTags = resolveStaffTags(userContext.staffTags);
    return effectiveTags.includes(tag);
}
function isInternalStaff(role) {
    return role === 'admin' || role === 'staff';
}
function hasObjectAccess(userContext, object, action) {
    // #1576 (R86): Bereich Zeit & Abwesenheit bis zum Start versteckt — #1592/#1853:
    // nur admin mit Tag `it` und staff mit Tag `intern` (TIME_AREA_TAG_BY_ROLE).
    // Gilt auch für admin (bis #2085 deshalb vor dem admin-Durchgriff).
    // Server: der Schalter TIME_AREA_AUDIENCE gilt auch für Aufrufer, die einen
    // Kontext ohne Snapshot bauen. Browser: die Variable ist dort unbekannt —
    // allein der Snapshot aus getUserContext trägt den Schalter zum Client;
    // ohne Snapshot also kein Zugriff (kein Rückfall auf Matrix und Tags, der
    // den Schalter umginge).
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$timeAreaGate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTimeAreaResource"])(object)) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            return userContext.permissions?.[object]?.[action] === true;
        }
    }
    // #1856/#1889: Tag-Gate (z. B. /auctions: partner nur mit Tag ineos) — Server und
    // Browser, mit und ohne Snapshot; das Tag zählt wörtlich. admin hat kein Gate.
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$tagGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["passesTagGate"])(userContext.role, userContext.staffTags, object)) return false;
    // #1927: Scope-Gate (/my-auctions: partner nur mit Pool-Rolle provider_admin).
    // Die Mitgliedschaft kennt nur getUserContext (Datenbank) — allein der
    // Snapshot trägt sie, ohne Snapshot kein Zugriff (fail closed).
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$tagGates$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isScopeGated"])(userContext.role, object)) return userContext.permissions?.[object]?.[action] === true;
    // #2085: kein admin-Durchgriff mehr — admin antwortet wie jede Rolle aus
    // Snapshot bzw. Matrix (DEFAULT_GLOBAL_PERMISSIONS.admin trägt alles).
    // Prefer the resolved permissions snapshot (built at session creation
    // from DB overrides + staff-tag merges). Both server and client see the
    // same authoritative view this way.
    const snapshot = userContext.permissions?.[object];
    if (snapshot) {
        if (snapshot[action]) return true;
    } else {
        // Fallback: legacy callers that build UserContext without a snapshot.
        const rolePerms = globalPermissions[userContext.role];
        const objectPerms = rolePerms?.[object];
        if (objectPerms?.[action]) return true;
        // For staff role: tag-based permissions (additive on top of base staff)
        if (userContext.role === 'staff' && userContext.staffTags && userContext.staffTags.length > 0) {
            const effectiveTags = resolveStaffTags(userContext.staffTags);
            for (const tag of effectiveTags){
                const tagPerms = staffTagPermissions[tag];
                if (tagPerms?.[object]?.[action]) return true;
            }
        }
    }
    // Module-to-UI-resource mapping (modules that unlock page access)
    // NOTE: recyclate-grade is intentionally NOT here even though the
    // mmaterials fit-score feature reads it. Adding it would also surface
    // the top-level "Recyclate Grades" nav item to user-role customers,
    // which violates issue #216 SOLL. The /salesforce/recyclate-grades
    // endpoint instead accepts either recyclate-grade view OR
    // Monitored_Material__c view so mmaterials customers still get the
    // data needed for the embedded fit assessment without seeing a new
    // nav entry.
    const MODULE_RESOURCE_MAP = {
        mmaterials: [
            'Monitored_Material__c'
        ],
        pricing: [
            'pricing'
        ],
        rigk: [
            'rigk-module'
        ],
        plastrack: [
            'plastrack'
        ]
    };
    // Check module-based access (additive)
    // #1855: nie für Rollen ohne Salesforce-Daten (partner) — nicht record-scoped,
    // ein Modul gäbe ihnen sonst den ungefilterten Bestand.
    if (userContext.modules && userContext.modules.length > 0 && !isContentOnlyRole(userContext.role)) {
        for (const userModule of userContext.modules){
            // Check module → UI resource mapping
            const mappedResources = MODULE_RESOURCE_MAP[userModule];
            if (mappedResources?.includes(object) && action === 'view') return true;
            // Check module → Salesforce object mapping
            const moduleConf = moduleConfig[userModule];
            if (moduleConf && moduleConf.objects.includes(object)) {
                if (action === 'view') return true;
            }
        }
    }
    return false;
}
/**
 * Check if a user has access to a specific record
 *
 * For admin, staff, accounting: Always returns true (if object access granted)
 * For agent, user, laboratory: Checks record visibility based on mechanism:
 *   - lookup: Via lookup fields (Case, Task)
 *   - ownership: Via OwnerId OR RecordAccessGrant (Postgres)
 *   - recordAccessGrant: ONLY via RecordAccessGrant (Contact, Account, Produktionsstandort)
 *   - module: Via enabled module (Monitored_Material)
 *
 * @param userContext - User information (must include pgUserId for grant checks)
 * @param object - Object type
 * @param record - Record data
 * @returns Promise<boolean> indicating if user has access to this record
 */ function matchesRecordVisibilityRule(userContext, object, record) {
    const rules = recordVisibilityRules[object];
    if (!rules || rules.length === 0) return false;
    for (const rule of rules){
        if (!rule.appliesTo.includes(userContext.role)) continue;
        if (!rule.grants?.showRecord) continue;
        const fieldValue = record[rule.lookupField];
        if (!fieldValue) continue;
        if (rule.matchType === 'contact' && fieldValue === userContext.contactId) {
            return true;
        }
        if (rule.matchType === 'account' && fieldValue === userContext.accountId) {
            return true;
        }
    }
    return false;
}
function isRecordOwner(userContext, ownerId) {
    return typeof userContext.userId === 'string' && userContext.userId !== '' && typeof ownerId === 'string' && ownerId === userContext.userId;
}
async function hasRecordAccess(userContext, object, record) {
    // Rollen ohne Record-Filterung sehen jeden Datensatz — dieselbe Bedingung,
    // mit der buildRecordFilter 'Id != null' zurueckgibt. Frueher stand hier nur
    // ['admin','staff']; accounting kam trotzdem durch, weil es in KEINEM
    // appliesTo steht und deshalb in den Default-Allow weiter unten fiel. Seit
    // dieser Zweig zumacht, muss die Rolle hier stehen, sonst waere das Detail
    // strenger als die Liste (accounting sieht in der Liste jeden Auftrag).
    if (!requiresRecordLevelFiltering(userContext.role)) {
        return true;
    }
    // #1419: Marktplatz-Katalog — Kunden öffnen nur GELISTETE Produkte
    // (Sales_Intent__c, dieselbe Bedingung wie buildRecordFilter). Vorher stand
    // hier ein bedingungsloses `return true`; jede Product2-Id ließ sich damit
    // samt Name und Lieferant auflösen. user/agent/rigk sehen jedes gelistete
    // Produkt; die übrigen record-gefilterten Rollen (advisor) behalten ihre
    // Eigentums-/Grant-Regel ZUSÄTZLICH zur Listung.
    if (object === 'Product2') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$productVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customerMayOpenProduct"])(record, userContext)) return false;
        if (userContext.role === 'user' || userContext.role === 'agent' || userContext.role === 'rigk') {
            return true;
        }
    }
    // Get visibility configuration for this object
    const visibilityConfig = objectVisibilityConfig[object];
    // Kein Eintrag, oder die Rolle steht nicht in appliesTo. Hier stand ein
    // bedingungsloses `return true` ("default to visible, for backwards
    // compatibility"). Der Listenfilter entscheidet an genau dieser Stelle
    // UMGEKEHRT: ohne passende Regel liefert buildRecordFilter
    // "Id = '000000000000000000'", also null Treffer. Damit war jeder fremde
    // Datensatz per Id vollstaendig lesbar, waehrend die Liste ihn verschwieg —
    // gemessen fuer advisor und laboratory auf Account (Detail 200 mit vollem
    // Datensatz, Liste 200 mit 0 Zeilen), in Summe 30 Rolle/Objekt-Paare.
    //
    // Das ist die Bugklasse #271 (Contact), #331 (AuditProperty) und #496
    // (Contract) — dort jeweils fuer EIN Objekt geschlossen, nie als Regel. Der
    // childRecord-Zweig weiter unten umgeht diesen Default-Allow seit #496
    // ausdruecklich (siehe Kommentar dort); mit dieser Aenderung ist das nicht
    // mehr noetig, weil die Wurzel zu ist.
    //
    // Die Entscheidung faellt jetzt aus DERSELBEN Quelle wie der Listenfilter.
    if (!visibilityConfig || !visibilityConfig.appliesTo.includes(userContext.role)) {
        const rules = recordVisibilityRules[object];
        // Objekt ohne jede Regel: buildRecordFilter gibt 'Id != null' zurueck, die
        // Liste zeigt alles. Das Detail zieht mit — waere es hier strenger als die
        // Liste, wuerden Datensaetze auftauchen, die sich nicht oeffnen lassen.
        if (!rules || rules.length === 0) {
            return true;
        }
        // Spiegelt buildRecordFilter fuer diesen Zweig: Regeltreffer ODER direkter
        // Grant ODER weitergereichter Account-Grant. Kein Treffer heisst kein
        // Zugriff — deckungsgleich mit dem "Id = '000000000000000000'" der Liste.
        if (matchesRecordVisibilityRule(userContext, object, record)) {
            return true;
        }
        if (await hasRecordAccessGrant(userContext, object, record.Id)) {
            return true;
        }
        return hasParentAccountGrant(userContext, object, record);
    }
    // Check visibility based on mechanism
    switch(visibilityConfig.mechanism){
        case 'lookup':
            // Check lookup fields (Case, Task). If the user owns the lookup,
            // they get access via the standard contact/account match. Otherwise,
            // fall through to RecordAccessGrant so admin-created grants on Case
            // (via /access-management/grants/) are honored. Without this fallback,
            // grants for Case are silently ignored (GitLab #228 Phase 1a).
            const lookupRules = visibilityConfig.lookupRules || [];
            for (const rule of lookupRules){
                if (!rule.appliesTo.includes(userContext.role)) continue;
                const fieldValue = record[rule.lookupField];
                if (!fieldValue) continue;
                if (rule.matchType === 'contact' && fieldValue === userContext.contactId) {
                    return true;
                } else if (rule.matchType === 'account' && fieldValue === userContext.accountId) {
                    return true;
                }
            }
            if (await hasRecordAccessGrant(userContext, object, record.Id)) {
                return true;
            }
            // Phase 1e: propagate a parent-Account grant (e.g. Case child of a
            // granted Account should be reachable via the parent grant).
            return hasParentAccountGrant(userContext, object, record);
        case 'ownership':
            // Check OwnerId OR RecordAccessGrant
            if (isRecordOwner(userContext, record.OwnerId)) {
                return true;
            }
            // Mirror buildRecordFilter: also accept records reachable via the
            // lookup-based recordVisibilityRules (e.g. Sample_Sending__c via
            // Kontakt_Anlieferung__c, Abrechnung__c via Account__c). Without
            // this, the list endpoint includes the record but the detail/PDF
            // endpoint 403s — list and detail must agree.
            if (matchesRecordVisibilityRule(userContext, object, record)) {
                return true;
            }
            // Check if RecordAccessGrant exists in Postgres for this record
            if (await hasRecordAccessGrant(userContext, object, record.Id)) {
                return true;
            }
            // GitLab #228 Phase 1e: propagate a parent Account grant down to its
            // child records (Unternehmenszertifikate, Bedarfe/Anforderungen, etc.)
            // so a user granted access to AccountX can drill into child records
            // belonging to AccountX without needing a per-row grant.
            if (await hasParentAccountGrant(userContext, object, record)) {
                return true;
            }
            // #370: RIGK-Modul-Nutzer arbeiten mit den Records der GRUPPEN-Accounts
            // (Bedarfe/Lohn/Produkte/Projekte/Audits/Zertifikate). Ohne diesen
            // Fallback konnten sie staff-angelegte Gruppen-Records zwar in den
            // Modul-Listen sehen, aber weder öffnen noch editieren, und kamen nicht
            // an deren Anhänge (Datei-Download prüft hasRecordAccess).
            return hasRigkGroupAccess(userContext, object, record);
        case 'recordAccessGrant':
            // ONLY via RecordAccessGrant (Contact, Account, Produktionsstandort)
            return hasRecordAccessGrant(userContext, object, record.Id);
        case 'parentRecord':
            {
                // #331: Kind-Objekte ohne eigenen Owner/Account-Lookup (AuditProperty__c)
                // erben den Record-Zugriff vom Parent-Record. Der Parent wird server-
                // seitig nachgeladen — dynamic import wie bei hasRigkGroupAccess, damit
                // die Salesforce-Utils nicht ins Client-Bundle geraten (permissions.ts
                // wird auch client-seitig importiert).
                const { parentObject, parentLookupField } = visibilityConfig;
                if (!parentObject || !parentLookupField) return false;
                const parentId = record[parentLookupField];
                if (!parentId) {
                    // Waise (kein Parent gesetzt): für record-gefilterte Rollen nur per
                    // direktem Grant erreichbar — fail closed.
                    return hasRecordAccessGrant(userContext, object, record.Id);
                }
                try {
                    const { getSalesforceRecord } = await __turbopack_context__.A("[project]/apps/web/src/app/utils/salesforce.ts [app-client] (ecmascript, async loader)");
                    const parent = await getSalesforceRecord(parentObject, parentId);
                    return hasRecordAccess(userContext, parentObject, {
                        ...parent,
                        Id: parentId
                    });
                } catch (error) {
                    console.error(`[hasRecordAccess] parentRecord check failed for ${object} → ${parentObject} ${parentId}:`, error);
                    // #1029: fail closed ist richtig — aber ein Zugriff, der wegen eines
                    // SF-Fehlers verweigert wird, sieht fuer den Nutzer wie "kein Recht" aus.
                    // #1233 (M-11): keine Record-Id in extra — object/parentObject reichen
                    // fuer die Diagnose, die Id selbst geht Sentry nichts an.
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
                        tags: {
                            component: 'rbac',
                            anlass: 'parent-record-check',
                            fail_closed: 'true'
                        },
                        extra: {
                            object,
                            parentObject
                        }
                    });
                    return false;
                }
            }
        case 'childRecord':
            {
                // #496: Spiegelbild von parentRecord — der Zugriff erbt sich vom KIND
                // (Contract ← Order.ContractId). Sichtbar, wenn mindestens ein Kind
                // sichtbar ist.
                //
                // Das Prädikat kommt aus DERSELBEN Quelle wie der Listenfilter
                // (buildLookupConditions + Grants), damit Liste und Detail nicht
                // auseinanderlaufen können.
                //
                // Bewusst KEIN rekursiver hasRecordAccess(child): für Rollen außerhalb
                // von objectVisibilityConfig[childObject].appliesTo — heute laboratory
                // und advisor bei Order — liefert der den Default-Allow und wäre damit
                // weiter als die Liste. Genau die Divergenz, die dieser Fix schließt.
                const { childObject, childLookupField } = visibilityConfig;
                if (!childObject || !childLookupField || childObject === object) return false;
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"])(record.Id)) return false;
                const { conditions, accountLookupFields } = buildLookupConditions(userContext, childObject);
                const grantedChildIds = await getGrantedRecordIds(userContext, childObject);
                if (grantedChildIds.length > 0) {
                    conditions.push(`Id IN (${grantedChildIds.map((id)=>`'${id}'`).join(', ')})`);
                }
                // Spiegelt die Account-Grant-Weitergabe aus buildRecordFilter. Für Order
                // heute inert (keine matchType-'account'-Regel) — steht hier, damit es
                // das auch bleibt, falls jemand eine ergänzt.
                if (accountLookupFields.length > 0) {
                    const grantedAccountIds = await getGrantedRecordIds(userContext, 'Account');
                    if (grantedAccountIds.length > 0) {
                        const list = grantedAccountIds.map((id)=>`'${id}'`).join(', ');
                        for (const field of accountLookupFields)conditions.push(`${field} IN (${list})`);
                    }
                }
                // Keine Bedingung = kein Kind erreichbar. Fail closed, deckungsgleich mit
                // dem "Id = '000000000000000000'" des Listenfilters.
                if (conditions.length === 0) return false;
                try {
                    const { executeSalesforceQuery } = await __turbopack_context__.A("[project]/apps/web/src/app/utils/salesforce.ts [app-client] (ecmascript, async loader)");
                    const result = await executeSalesforceQuery(`SELECT Id FROM ${childObject} ` + `WHERE ${childLookupField} = '${record.Id}' AND (${conditions.join(' OR ')}) LIMIT 1`);
                    return (result.records?.length ?? 0) > 0;
                } catch (error) {
                    console.error(`[hasRecordAccess] childRecord check failed for ${object} → ${childObject} ${record.Id}:`, error);
                    // #1233 (M-11): keine Record-Id in extra.
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
                        tags: {
                            component: 'rbac',
                            anlass: 'child-record-check',
                            fail_closed: 'true'
                        },
                        extra: {
                            object,
                            childObject
                        }
                    });
                    return false;
                }
            }
        case 'module':
            // Check if user has required module
            const moduleRequired = visibilityConfig.moduleRequired;
            if (moduleRequired && userContext.modules?.includes(moduleRequired)) {
                // For module-based, also check OwnerId OR RecordAccessGrant if specified
                if (isRecordOwner(userContext, record.OwnerId)) {
                    return true;
                }
                // Check Postgres RecordAccessGrant
                const hasGrant = await hasRecordAccessGrant(userContext, object, record.Id);
                if (hasGrant) return true;
                // If no owner matching, module alone grants access
                return true;
            }
            return false;
        default:
            return false;
    }
}
function buildLookupConditions(userContext, object) {
    const conditions = [];
    const accountLookupFields = [];
    for (const rule of recordVisibilityRules[object] ?? []){
        if (!rule.appliesTo.includes(userContext.role)) continue;
        if (rule.matchType === 'contact' && userContext.contactId) {
            conditions.push(`${rule.lookupField} = '${userContext.contactId}'`);
        } else if (rule.matchType === 'account' && userContext.accountId) {
            conditions.push(`${rule.lookupField} = '${userContext.accountId}'`);
            accountLookupFields.push(rule.lookupField);
        } else if (rule.matchType === 'account') {
            accountLookupFields.push(rule.lookupField);
        }
    }
    return {
        conditions,
        accountLookupFields
    };
}
/**
 * #496: Die Record-Ids, für die dieser User einen Grant auf `object` hat.
 *
 * Gegenstück zu hasRecordAccessGrant (Einzelprüfung) für die Fälle, in denen
 * eine Menge gebraucht wird. Liest prisma über globalThis aus demselben Grund
 * wie dort — permissions.ts wird auch clientseitig importiert.
 */ async function getGrantedRecordIds(userContext, object) {
    // #1194: in der Rollen-Vorschau keine Grants — sie gehoeren dem Admin
    if (!userContext.pgUserId || userContext.viewAs) return [];
    const prisma = globalThis.prisma;
    if (!prisma) {
        console.warn('[getGrantedRecordIds] globalThis.prisma not initialized');
        return [];
    }
    try {
        const grants = await prisma.recordAccessGrant.findMany({
            where: {
                userId: userContext.pgUserId,
                targetSObject: object,
                showRecord: true
            },
            select: {
                targetRecordId: true
            }
        });
        return grants.map((g)=>g.targetRecordId).filter(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"]);
    } catch (error) {
        console.error(`[getGrantedRecordIds] query failed for ${object}:`, error);
        // #1029: leere Liste bei DB-Fehler = alle Datensaetze weg, ohne Signal.
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
            tags: {
                component: 'rbac',
                anlass: 'granted-record-ids',
                fail_closed: 'true'
            },
            extra: {
                object
            }
        });
        return [];
    }
}
const GRANTABLE_SOBJECTS = [
    'Account',
    'Contact',
    'Case',
    'Order',
    'Abrechnung__c',
    'Invoice__c',
    'Bedarfe__c',
    'Material_Proposal__c',
    'Product2',
    'Projekt__c',
    'Sample_Sending__c',
    'Produktionsstandort__c',
    'Supplier_Audit__c',
    'Unternehmenszertifikat__c',
    'Kontakt_bergaben__c',
    'Monitored_Material__c'
];
async function hasRecordAccessGrant(userContext, object, recordId) {
    // Need Postgres user ID to query grants.
    // #319: this early-return was silent, making a session without pgUserId
    // indistinguishable from a missing grant row when diagnosing the
    // deployed-env grant denials — log it.
    // #1194: in der Rollen-Vorschau still verweigern — die Grants gehoeren dem Admin.
    if (userContext.viewAs) return false;
    if (!userContext.pgUserId) {
        // #1233 (M-11): weder E-Mail noch Record-Id ins Log — object/role reichen
        // fuer die Diagnose (console.warn laeuft ueber consoleLoggingIntegration
        // in Sentry-Logs).
        console.warn(`[RecordAccessGrant] deny: session has no pgUserId (role=${userContext.role}, object=${object})`);
        return false;
    }
    if (!GRANTABLE_SOBJECTS.includes(object)) return false;
    const targetSObject = object;
    try {
        // Server-only prisma access via globalThis.prisma. prisma.ts stashes its
        // singleton on `global.prisma` on first load (apps/web/src/lib/prisma.ts:7).
        // Reading it via globalThis avoids any static module reference, so neither
        // Webpack nor Turbopack drags prisma → pg into the client bundle (which
        // would trip the `import 'server-only'` guard). instrumentation.ts kicks
        // off the initial load so the global is populated before this runs.
        const prisma = globalThis.prisma;
        if (!prisma) {
            console.warn('[checkRecordAccessGrant] globalThis.prisma not initialized');
            return false;
        }
        // M-04: exakter DB-Vergleich verfehlt den Grant, wenn targetRecordId
        // (gespeichert) und recordId (übergeben) unterschiedlich lang (15 vs. 18)
        // sind. sameSalesforceId gleicht beide Formen auf 18 Stellen ab, deshalb
        // hier per findMany + JS-Vergleich statt eines DB-seitigen Exaktfilters.
        const candidates = await prisma.recordAccessGrant.findMany({
            where: {
                userId: userContext.pgUserId,
                targetSObject,
                showRecord: true
            },
            select: {
                id: true,
                targetRecordId: true
            }
        });
        const grant = candidates.find((c)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sameSalesforceId"])(c.targetRecordId, recordId)) ?? null;
        if (grant === null && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.RBAC_GRANT_DEBUG === '1') {
            // #319: the deployed-env grant denials could not be pinpointed because
            // the deny path logged nothing. Debug-only (RBAC_GRANT_DEBUG=1, dev) —
            // grant misses are normal control flow in list filtering, so this would
            // flood elsewhere. The per-user count discriminates the failure modes:
            // count>0 with no exact match = key mismatch (targetRecordId/showRecord),
            // count=0 = the grant row is genuinely absent for this userId (wrong key
            // at write time / different DB).
            console.warn(`[RecordAccessGrant] deny: no grant match (pgUserId=${userContext.pgUserId}, targetSObject=${targetSObject}, recordId=${recordId}, userGrantsForObject=${candidates.length})`);
        }
        return grant !== null;
    } catch (error) {
        console.error('Error checking RecordAccessGrant:', error);
        // #1233 (M-11): keine Record-Id in extra.
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
            tags: {
                component: 'rbac',
                anlass: 'record-access-grant',
                fail_closed: 'true'
            },
            extra: {
                object
            }
        });
        return false;
    }
}
/**
 * Check whether a record is reachable via a parent-Account grant.
 *
 * Many child objects (Unternehmenszertifikat__c, Bedarfe__c, Lohn__c, …)
 * declare an `Account__c` (matchType `account`) lookup in `recordVisibilityRules`.
 * The standard rule lets a user see records whose Account is their OWN company
 * (matched against userContext.accountId). This helper additionally lets a user
 * see a child record when they hold an Account-level RecordAccessGrant on the
 * Account the child belongs to — i.e. the per-Account grant propagates down to
 * the child's detail endpoint without needing per-row grants.
 *
 * Returns false unless the object has at least one matchType=`account` rule
 * AND the user holds an Account grant on the looked-up Account ID.
 */ async function hasParentAccountGrant(userContext, object, record) {
    if (!userContext.pgUserId) return false;
    const rules = recordVisibilityRules[object];
    if (!rules || rules.length === 0) return false;
    for (const rule of rules){
        if (rule.matchType !== 'account') continue;
        if (!rule.appliesTo.includes(userContext.role)) continue;
        if (!rule.grants?.showRecord) continue;
        const parentAccountId = record[rule.lookupField];
        if (!parentAccountId) continue;
        if (parentAccountId === userContext.accountId) return true // own company
        ;
        if (await hasRecordAccessGrant(userContext, 'Account', parentAccountId)) {
            return true;
        }
    }
    return false;
}
/**
 * #370: Objekte, die das RIGK-Modul pro Gruppen-Account verwaltet, mit den
 * Account-Lookups, über die die Gruppenzugehörigkeit geprüft wird. Bewusst
 * eine strikte Allowlist — andere account-verknüpfte Objekte (z.B. Invoice__c)
 * bekommen KEINEN Gruppen-Bypass.
 */ const RIGK_GROUP_MANAGED_OBJECTS = {
    Bedarfe__c: [
        'Account__c'
    ],
    Lohn__c: [
        'Account__c'
    ],
    Product2: [
        'Account__c'
    ],
    Supplier_Audit__c: [
        'Account__c'
    ],
    Unternehmenszertifikat__c: [
        'Account__c'
    ],
    Projekt__c: [
        'Hauptkunde__c',
        'Hauptlieferant__c',
        'Lohndienstleister__c'
    ]
};
/**
 * #370: Record-Zugriff für RIGK-Modul-Nutzer auf Records der Gruppen-Accounts
 * (Ist_RIGK_Gruppenkontakt__c). Nur für die Allowlist oben; der SOQL-Check
 * läuft ausschließlich server-seitig — daher dynamic import, damit die
 * Salesforce-Utils nicht ins Client-Bundle geraten (permissions.ts wird auch
 * client-seitig importiert).
 */ async function hasRigkGroupAccess(userContext, object, record) {
    if (!userContext.modules?.includes('rigk')) return false;
    const accountFields = RIGK_GROUP_MANAGED_OBJECTS[object];
    if (!accountFields) return false;
    const { assertRigkGroupAccount } = await __turbopack_context__.A("[project]/apps/web/src/lib/rbac/rigkAccountGate.ts [app-client] (ecmascript, async loader)");
    for (const field of accountFields){
        const accountId = record[field];
        if (typeof accountId === 'string' && accountId) {
            const gate = await assertRigkGroupAccount(accountId);
            if (gate.ok) return true;
        }
    }
    return false;
}
function getAccessibleInformationCategories(userContext, object, record) {
    // Admin, staff see all categories (no field-level filtering)
    if ([
        'admin',
        'staff'
    ].includes(userContext.role)) {
        const allCategories = [
            'supplierInformation',
            'customerInformation',
            'transportInformation',
            'buyingInformation',
            'sellingInformation',
            'earnings',
            'statistics',
            'rigkRelationships',
            'transportPricing'
        ];
        return allCategories;
    }
    const categories = new Set();
    // Get visibility rules for this object
    const rules = recordVisibilityRules[object];
    if (!rules) return [];
    // Check each rule
    for (const rule of rules){
        if (!rule.appliesTo.includes(userContext.role)) {
            continue;
        }
        const fieldValue = record[rule.lookupField];
        if (!fieldValue) continue;
        let matches = false;
        if (rule.matchType === 'contact') {
            matches = fieldValue === userContext.contactId;
        } else if (rule.matchType === 'account') {
            matches = fieldValue === userContext.accountId;
        }
        if (matches) {
            // Add granted categories
            rule.grants.informationCategories.forEach((cat)=>categories.add(cat));
        }
    }
    return Array.from(categories);
}
function getVisibleFields(userContext, object, record) {
    // Admin, staff see ALL fields - no filtering needed
    // This is consistent with hasRecordAccess() and getAccessibleInformationCategories()
    // which also grant full access to these privileged roles
    if ([
        'admin',
        'staff'
    ].includes(userContext.role)) {
        return Object.keys(record);
    }
    // Laboratory has full field access to Monitored_Material__c since they perform the tests
    if (userContext.role === 'laboratory' && object === 'Monitored_Material__c') {
        return Object.keys(record);
    }
    // #1180: Buchhaltung arbeitet auf der Abrechnung — alle Felder
    if (userContext.role === 'accounting' && object === 'Abrechnung__c') {
        return Object.keys(record);
    }
    const visibleFields = new Set();
    if (userContext.role === 'accounting') {
        ;
        (ACCOUNTING_VISIBLE_FIELDS[object] ?? []).forEach((field)=>visibleFields.add(field));
    }
    // Always add always-visible fields (includes OwnerId)
    const alwaysFields = alwaysVisibleFields[object] || [];
    alwaysFields.forEach((field)=>visibleFields.add(field));
    // Get accessible information categories
    const categories = getAccessibleInformationCategories(userContext, object, record);
    // Add fields from accessible categories
    const fieldDefs = fieldDefinitions[object] || {};
    categories.forEach((category)=>{
        const fields = fieldDefs[category] || [];
        fields.forEach((field)=>visibleFields.add(field));
    });
    // Handle module-specific restrictions
    if (hidesMonitoredMaterialNames(userContext, object)) {
        // Remove name fields for mmaterials module (#1417: eine Liste, auch für maskRecordFields)
        MM_HIDDEN_NAME_FIELDS.forEach((field)=>visibleFields.delete(field));
        // #1419: auch die Produkt-Id — sie löst sich zum Produktnamen auf
        MM_HIDDEN_ID_FIELDS.forEach((field)=>visibleFields.delete(field));
    }
    // #1419: den Lieferanten eines Produkts sieht nur admin/staff — auch nicht
    // auf dem eigenen Produkt (customerInformation führt Account__c für #358).
    if (object === 'Product2' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$productVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seesProductSupplier"])(userContext)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$productVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRODUCT_SUPPLIER_FIELDS"].forEach((field)=>visibleFields.delete(field));
    }
    return Array.from(visibleFields);
}
function getSalesforceLayoutMapping(role, object) {
    const objectConfig = flexpageConfig[object];
    if (!objectConfig) return null;
    return objectConfig[role] || null;
}
const getFlexpage = getSalesforceLayoutMapping;
function canAccessInformationCategory(userContext, object, category, record) {
    const categories = getAccessibleInformationCategories(userContext, object, record);
    return categories.includes(category);
}
function getAccessibleObjects(role, action = 'view') {
    const rolePerms = globalPermissions[role];
    if (!rolePerms) return [];
    const objects = [];
    for (const [resource, perms] of Object.entries(rolePerms)){
        // Filter out UI resources, only return SObjects
        if (![
            'dashboard',
            'profile',
            'user-management'
        ].includes(resource)) {
            if (perms[action]) {
                objects.push(resource);
            }
        }
    }
    return objects;
}
function requiresRecordLevelFiltering(role) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RECORD_SCOPED_ROLES"].includes(role);
}
function isContentOnlyRole(role) {
    return typeof role === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONTENT_ONLY_ROLES"].includes(role);
}
const ANALYTICS_ROLES = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROLES"].filter(_c = (role)=>!requiresRecordLevelFiltering(role) && !isContentOnlyRole(role));
_c1 = ANALYTICS_ROLES;
function hasAnalyticsAccess(userContext, resource) {
    if (requiresRecordLevelFiltering(userContext.role)) return false;
    if (isContentOnlyRole(userContext.role)) return false;
    return hasObjectAccess(userContext, resource, 'view');
}
function hasPermission(role, resource, action) {
    return hasObjectAccess({
        role
    }, resource, action);
}
const searchDisplayConfig = {
    // Standard Objects
    Case: {
        detailPath: '/case',
        displayName: 'Case',
        nameField: 'CaseNumber',
        searchFields: [
            'CaseNumber',
            'Subject',
            'Status',
            'Priority'
        ]
    },
    Task: {
        detailPath: '/task',
        displayName: 'Task',
        nameField: 'Subject',
        searchFields: [
            'Subject',
            'Status',
            'Priority'
        ],
        // #495: war bisher nur in der Apex-Klasse hartkodiert
        searchMode: 'soql'
    },
    Event: {
        // #486: '' statt '/event' — die Route gibt es nicht. Die Suggestions-Route
        // baut ihren Link als `${detailPath}/${id}`, das war also ein 404 mit
        // Ansage. Leer heißt: nur Lookup-Ziel, raus aus globaler Suche und
        // Suggestions (getSearchableObjects filtert darauf). Sobald es eine
        // Detailseite gibt, hier wieder eintragen — der Drift-Guard erzwingt, dass
        // sie dann auch existiert.
        detailPath: '',
        displayName: 'Event',
        nameField: 'Subject',
        searchFields: [
            'Subject',
            'Location'
        ],
        searchMode: 'soql'
    },
    Account: {
        detailPath: '/account',
        displayName: 'Account',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Type',
            'Industry',
            'BillingCity',
            'Phone'
        ]
    },
    Contact: {
        detailPath: '/contact',
        displayName: 'Contact',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Email',
            'Title',
            'Phone'
        ]
    },
    Opportunity: {
        detailPath: '/opportunity',
        displayName: 'Opportunity',
        nameField: 'Name',
        searchFields: [
            'Name',
            'StageName',
            'Amount',
            'CloseDate'
        ]
    },
    Order: {
        detailPath: '/order',
        displayName: 'Order',
        nameField: 'OrderNumber',
        searchFields: [
            'OrderNumber',
            'Status',
            'EffectiveDate'
        ]
    },
    OrderItem: {
        detailPath: '/orderitem',
        displayName: 'Order Item',
        nameField: 'OrderItemNumber',
        // #495: Quantity und UnitPrice sind Zahlenfelder und mussten hier raus.
        // OrderItem gehört zu den SOQL-only-Objekten der Apex-Klasse, dort wird
        // über ALLE searchFields ein `feld LIKE '%term%'` gebaut — SOQL erlaubt
        // LIKE nur auf Text/Id. Die Query warf deshalb bei JEDER Suche eine
        // QueryException, die still gefangen wurde: OrderItem lieferte konstant
        // null Treffer. Produktcode__c ist textuell und das, wonach tatsächlich
        // gesucht wird.
        searchFields: [
            'OrderItemNumber',
            'Produktcode__c'
        ],
        searchMode: 'soql'
    },
    Product2: {
        detailPath: '/product',
        displayName: 'Product',
        nameField: 'Name',
        searchFields: [
            'Name',
            'ProductCode',
            'Family'
        ]
    },
    User: {
        detailPath: '/user',
        displayName: 'User',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Email',
            'Title',
            'Department'
        ]
    },
    // Custom Objects
    Projekt__c: {
        detailPath: '/project',
        displayName: 'Project',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Bedarfe__c: {
        detailPath: '/requirement',
        displayName: 'Requirement',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        // Die _Text__c sind Formelfelder auf die Picklists — dieselben, ueber die
        // auch die Listensuche geht.
        searchFields: [
            'Name',
            'Materialtyp_Text__c',
            'Hauptpolymer_Text__c'
        ]
    },
    // #334: war eine Copy-Paste-Altlast (detailPath '/requirement', Anzeige
    // 'Requirement') — Suchtreffer für Lohndienstleistungen führten auf die
    // falsche Seite. Jetzt echte Detailseite.
    Lohn__c: {
        detailPath: '/toll-service',
        displayName: 'Lohndienstleistung',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Dienstleistungskategorie__c'
        ]
    },
    Material_Proposal__c: {
        detailPath: '/material-proposal',
        displayName: 'Material Proposal',
        nameField: 'Name',
        // #417-Picker/Suche: Produktcode mitsuchen, Account im Treffer zeigen
        // #486: Produktbeschreibung dazu — hier zaehlt sie doppelt, weil das
        // Objekt ueber den likeSearchFallback laeuft und die Felder dort in ein
        // `LIKE '%%term%%'` gegossen werden. Die Listensuche nutzt sie genauso.
        searchFields: [
            'Name',
            'Product_Code__c',
            'Product_Description__c'
        ],
        lookupSecondaryFields: [
            'Account__r.Name'
        ],
        likeSearchFallback: true // Product_Code__c ist Formel → nicht SOSL-suchbar
    },
    Monitored_Material__c: {
        detailPath: '/monitored-material',
        displayName: 'Monitored Material',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        searchFields: [
            'Name',
            'Report_Individuelle_Nummer__c',
            'Hauptpolymer__c'
        ]
    },
    Materialanalyse__c: {
        detailPath: '/material-analysis',
        displayName: 'Material Analysis',
        nameField: 'Name',
        // #417-Picker/Suche: Produktcode mitsuchen, Dienstleister im Treffer zeigen
        // #486: Batchnummer dazu — die DoD nennt sie ausdruecklich, und ueber den
        // likeSearchFallback wird sie damit auch matchbar, nicht nur sichtbar.
        searchFields: [
            'Name',
            'Produkt_ID__c',
            'Batchnummer__c'
        ],
        lookupSecondaryFields: [
            'Dienstleister__r.Name'
        ],
        likeSearchFallback: true // Produkt_ID__c ist Formel → nicht SOSL-suchbar
    },
    Sample_Sending__c: {
        detailPath: '/sample-sending',
        displayName: 'Sample Sending',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        searchFields: [
            'Name',
            'Loading_Site__c',
            'Delivery_Site__c'
        ]
    },
    Sample_Feedback__c: {
        detailPath: '/sample-feedback',
        displayName: 'Sample Feedback',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        searchFields: [
            'Name',
            'Produktcode__c'
        ]
    },
    Supplier_Audit__c: {
        detailPath: '/supplier-audit',
        displayName: 'Supplier Audit',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Produktionsstandort__c: {
        detailPath: '/production-site',
        displayName: 'Production Site',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        searchFields: [
            'Name',
            'Ort__c',
            'Land__c'
        ]
    },
    Unternehmenszertifikat__c: {
        detailPath: '/company-certificate',
        displayName: 'Company Certificate',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // #449: Verträge — macht ContractId-Lookup am Auftrag suchbar (Vertragsnummer)
    Contract: {
        detailPath: '/contract',
        displayName: 'Contract',
        nameField: 'ContractNumber',
        searchFields: [
            'ContractNumber'
        ]
    },
    Kostenstelle_plastship__c: {
        detailPath: '/cost-center',
        displayName: 'Kostenstelle',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Nummer_Kostenstelle__c'
        ],
        likeSearchFallback: true // Objekt hat keinen SF-Suchindex — SOSL wirft "does not support search"
    },
    DATEV_Sachkonto__c: {
        // #792: Kontenplan ist reines Lookup-Ziel (AB 19.09./08.10.2026) — keine
        // Detailseite; der Name trägt die Kontonummer, die Bezeichnung erscheint als
        // Zusatz im Suchtreffer.
        detailPath: '',
        displayName: 'DATEV-Sachkonto',
        nameField: 'Name',
        searchFields: [
            'Name',
            'Kontonummer__c',
            'Bezeichnung__c'
        ],
        likeSearchFallback: true // Objekt ohne SF-Suchindex (wie Kostenstelle)
    },
    Abfallfraktionen__c: {
        // #831/#799: Lookup-Ziel für Product2.Abfallfraktionen__c — das Objekt
        // hat keine eigene App-Seite (Stammdatenpflege bleibt in SF).
        detailPath: '',
        displayName: 'Abfallfraktion',
        nameField: 'Name',
        searchFields: [
            'Name',
            'AVV_Nummer__c'
        ]
    },
    Reklamation__c: {
        // #486: '/claim' existiert nicht (auch '/complaints' aus
        // config/salesforceObjects.ts nicht — die Entität hat bis heute keine
        // Seite). Siehe Kommentar bei Event.
        detailPath: '',
        displayName: 'Reklamation',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // #362: Zertifikats-Katalog — macht das Pflicht-Lookup in der Create-Maske suchbar.
    // #333: Detailseite existiert jetzt (Katalog-Eintrag + verwendende Zertifikate).
    Zertifikate__c: {
        detailPath: '/certificate',
        displayName: 'Zertifikat',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // #331: Prüfparameter (Name ist Auto-Nr.; sprechende Bezeichnung = Formel Name__c)
    AuditProperty__c: {
        detailPath: '/audit-property',
        displayName: 'Prüfparameter',
        nameField: 'Name__c',
        searchFields: [
            'Name',
            'Name__c'
        ]
    },
    // #331: Typ-Katalog — macht das Type__c-Lookup in der Create-Maske suchbar.
    AuditPropertyType__c: {
        detailPath: '',
        displayName: 'Prüfparameter-Typ',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Kontakt_bergaben__c: {
        detailPath: '/contact-handover',
        displayName: 'Contact Handover',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Onboarding__c: {
        detailPath: '/onboarding',
        displayName: 'Onboarding',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Abrechnung__c: {
        detailPath: '/invoice',
        displayName: 'Invoice',
        nameField: 'Name',
        // #486: Business-Felder aus PlastshipListController.buildSearchCondition
        // uebernommen. Sie machen NICHT auffindbar — SOSL laeuft `IN ALL FIELDS`
        // und matcht diese Werte laengst (gegen die Org nachgemessen). Sie
        // bestimmen, was im secondaryLabel steht: bisher stand dort nichts, ein
        // Treffer auf eine Belegnummer sah aus wie ein Treffer aus dem Nichts.
        searchFields: [
            'Name',
            'Belegnummer__c'
        ],
        // #1806: Belegnummer I-<Jahr><lfd> — Teilstring (z. B. 2026102) trifft per SOSL nicht (nur Token-Anfang)
        likeSearchFallback: true
    },
    // Note: Invoice__c removed from search - object doesn't exist in teilkopie sandbox
    RecordAccessGrant__c: {
        // #486: '/access-grant' existiert nicht. Grants werden unter
        // /access-management/grants verwaltet — das ist eine Liste, keine
        // Detailseite je Datensatz. Siehe Kommentar bei Event.
        detailPath: '',
        displayName: 'Access Grant',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // Note: Probe__c, Probeversand__c, Requirement__c removed from search - objects don't exist in teilkopie sandbox
    Aktueller_Preis_und_Verf_gbarkeit__c: {
        // #486: '/price-availability' existiert nicht. Siehe Kommentar bei Event.
        detailPath: '',
        displayName: 'Price & Availability',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // #495: Prozessfeedback stand in SOBJECTS, hatte aber keine Suchkonfiguration
    // — die beiden Selbstbezüge (übergeordnetes/verknüpftes Feedback) liefen
    // deshalb in ein 400 „Unsupported object type" und zeigten ein leeres
    // Dropdown ohne Hinweis.
    Prozessfeedback__c: {
        detailPath: '/process-feedback',
        displayName: 'Prozessfeedback',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    // #495: reine Lookup-Ziele — detailPath '' hält sie aus globaler Suche und
    // Suggestions heraus (getSearchableObjects filtert darauf), das Autocomplete
    // liest searchDisplayConfig dagegen direkt.
    Campaign: {
        detailPath: '',
        displayName: 'Kampagne',
        nameField: 'Name',
        searchFields: [
            'Name'
        ]
    },
    Quote: {
        detailPath: '',
        displayName: 'Angebot',
        nameField: 'Name',
        searchFields: [
            'Name',
            'QuoteNumber'
        ]
    }
};
function getSearchableObjects(role) {
    const accessible = getAccessibleObjects(role, 'view');
    // #331: Objekte ohne eigene Detailseite (detailPath '') sind reine
    // Lookup-Ziele (die Create-Maske sucht direkt über /api/salesforce/lookup,
    // das searchDisplayConfig[objectType] selbst liest). In der globalen Suche
    // und den Suggestions würden sie tote Links erzeugen: die Suggestions-Route
    // baut value = `${detailPath}/${id}` → '/a0a…' → 404, die Suchseite
    // rendert nicht-klickbare Zeilen.
    return accessible.filter((obj)=>{
        const config = searchDisplayConfig[obj];
        return config !== undefined && config.detailPath !== '';
    });
}
function getSearchConfigs(objects) {
    return objects.map((obj)=>{
        const config = searchDisplayConfig[obj];
        if (!config) return null;
        return {
            objectType: obj,
            nameField: config.nameField,
            searchFields: config.searchFields,
            // #495: nur setzen, wenn konfiguriert — sonst entscheidet weiterhin die
            // Default-Liste der Apex-Klasse.
            ...config.searchMode ? {
                searchMode: config.searchMode
            } : {}
        };
    }).filter((c)=>c !== null);
}
function getSearchDisplayConfig(object) {
    return searchDisplayConfig[object];
}
// ============================================================================
// EXPORT ALL
// ============================================================================
/**
 * All permission functions and data collected for default export
 */ const permissionsExport = {
    // Data (aliases of the DEFAULT_* constants)
    globalPermissions,
    staffTagPermissions,
    ALL_STAFF_TAGS,
    recordVisibilityRules,
    fieldDefinitions,
    alwaysVisibleFields,
    flexpageConfig,
    moduleConfig,
    searchDisplayConfig,
    // Code-defined configuration (single source of truth, #364)
    DEFAULT_GLOBAL_PERMISSIONS,
    DEFAULT_STAFF_TAG_PERMISSIONS,
    DEFAULT_OBJECT_VISIBILITY_CONFIG,
    DEFAULT_RECORD_VISIBILITY_RULES,
    DEFAULT_FIELD_DEFINITIONS,
    DEFAULT_ALWAYS_VISIBLE_FIELDS,
    // Getters (return the code-defined configuration)
    getGlobalPermissions,
    getStaffTagPermissions,
    getObjectVisibilityConfig,
    getRecordVisibilityRules,
    getFieldDefinitions,
    getAlwaysVisibleFields,
    // Functions
    hasObjectAccess,
    hasRecordAccess,
    resolveStaffTags,
    hasStaffTag,
    isInternalStaff,
    getAccessibleInformationCategories,
    getVisibleFields,
    getSalesforceLayoutMapping,
    getFlexpage,
    canAccessInformationCategory,
    getAccessibleObjects,
    requiresRecordLevelFiltering,
    hasPermission,
    getSearchableObjects,
    getSearchConfigs,
    getSearchDisplayConfig
};
const __TURBOPACK__default__export__ = permissionsExport;
var _c, _c1;
__turbopack_context__.k.register(_c, "ANALYTICS_ROLES$ROLES.filter");
__turbopack_context__.k.register(_c1, "ANALYTICS_ROLES");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/productVisibility.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OWN_PRODUCTS_ALWAYS_VISIBLE",
    ()=>OWN_PRODUCTS_ALWAYS_VISIBLE,
    "PRODUCT_SUPPLIER_FIELDS",
    ()=>PRODUCT_SUPPLIER_FIELDS,
    "buildCustomerProductCondition",
    ()=>buildCustomerProductCondition,
    "customerMayOpenProduct",
    ()=>customerMayOpenProduct,
    "isMarketplaceListed",
    ()=>isMarketplaceListed,
    "isProductSupplierKey",
    ()=>isProductSupplierKey,
    "seesProductSupplier",
    ()=>seesProductSupplier,
    "stripProductSupplier",
    ()=>stripProductSupplier
]);
/**
 * #1419: Welche Produkte (Product2) ein Kunde öffnen darf und was er von ihnen
 * sieht. EINE Quelle für Detail, Lookup, Suche, Related-Record und Listen —
 * vorher hatte die Kundenrolle einen bedingungslosen Marktplatz-Bypass
 * (`hasRecordAccess` → true, `buildRecordFilter` → `Id != null`), womit sich
 * jede Product2-Id samt Name und Lieferant auflösen ließ.
 *
 * PO-Entscheid:
 *  1. Kunden öffnen nur Produkte, die laut Sales_Intent__c im Marktplatz
 *     gelistet sind (dieselbe Wertemenge wie der Marktplatz-Filter #209).
 *     Alles andere ist für sie „nicht gefunden".
 *  2. Der Lieferant ist für Kunden an KEINEM Produkt sichtbar.
 *
 * Bewusst ohne Import aus permissions.ts (die importiert diese Datei).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sales$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sales-intent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/constants.ts [app-client] (ecmascript)");
;
;
;
const OWN_PRODUCTS_ALWAYS_VISIBLE = false;
const PRODUCT_SUPPLIER_FIELDS = [
    'Account__c',
    'Accountinhaber__c',
    'Verh_ltnis_Account__c',
    'Ist_Key_Account__c'
];
function isRecordScoped(role) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RECORD_SCOPED_ROLES"].includes(role);
}
function seesProductSupplier(userContext) {
    return userContext.role === 'admin' || userContext.role === 'staff';
}
function isMarketplaceListed(salesIntent) {
    if (salesIntent == null || salesIntent === '') return true;
    return !__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sales$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HIDDEN_SALES_INTENTS"].includes(salesIntent);
}
function customerMayOpenProduct(product, userContext) {
    if (!isRecordScoped(userContext.role)) return true;
    if (!product) return false;
    if ('Sales_Intent__c' in product && isMarketplaceListed(product.Sales_Intent__c)) return true;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return false;
}
function buildCustomerProductCondition(userContext, fieldPrefix = '') {
    if (!isRecordScoped(userContext.role)) return null;
    const listed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sales$2d$intent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMarketplaceVisibilityCondition"])(`${fieldPrefix}Sales_Intent__c`);
    if (OWN_PRODUCTS_ALWAYS_VISIBLE && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"])(userContext.accountId)) //TURBOPACK unreachable
    ;
    return listed;
}
function stripProductSupplier(product) {
    const out = {};
    for (const [key, value] of Object.entries(product)){
        if (isProductSupplierKey(key)) continue;
        out[key] = value;
    }
    return out;
}
function isProductSupplierKey(key) {
    if (PRODUCT_SUPPLIER_FIELDS.includes(key)) return true;
    if (key.endsWith('__r')) return PRODUCT_SUPPLIER_FIELDS.includes(`${key.slice(0, -3)}__c`);
    return false;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/tagGates.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1856: Ressourcen, die für bestimmte Rollen zusätzlich ein Tag am Konto
 * verlangen — Muster wie timeAreaGate.ts, eine Quelle für hasObjectAccess
 * (Server und Browser) und den Rechte-Snapshot (permissionSnapshot.ts).
 *
 * #1889: `/auctions` (Übersicht des Auktionshauses, Überpunkt „Auktionen" in
 * der Seitenleiste): admin ohne Gate, partner nur mit Tag `ineos`. Das Tag
 * wird WÖRTLICH gelesen — ohne management-Auflösung (die betrifft nur staff)
 * und ohne admin-Durchgriff (admin hat hier gar kein Gate). Rollen ohne
 * Eintrag im Gate entscheidet die Rechte-Matrix allein. Alle weiteren
 * Auktionsseiten hängen an `auctions-admin` (nur admin, ohne Gate).
 *
 * #1927: `/my-auctions` hängt nicht mehr am Tag `ineos`, sondern an der
 * Pool-Mitgliedschaft (Konzept §8): SCOPE_GATED_RESOURCES unten. Das Tag
 * `ineos` bleibt nur Kennzeichen am Konto.
 *
 * Abhängigkeitsfrei, damit permissions.ts und permissionSnapshot.ts es ohne
 * Zirkelbezug importieren und der Browser es mitnehmen kann.
 */ __turbopack_context__.s([
    "SCOPE_GATED_RESOURCES",
    ()=>SCOPE_GATED_RESOURCES,
    "TAG_GATED_RESOURCES",
    ()=>TAG_GATED_RESOURCES,
    "closeScopeGates",
    ()=>closeScopeGates,
    "closeTagGates",
    ()=>closeTagGates,
    "isScopeGated",
    ()=>isScopeGated,
    "isTagGatedResource",
    ()=>isTagGatedResource,
    "passesTagGate",
    ()=>passesTagGate,
    "requiredTagFor",
    ()=>requiredTagFor
]);
const TAG_GATED_RESOURCES = {
    auctions: {
        partner: 'ineos'
    }
};
function isTagGatedResource(resource) {
    return Object.prototype.hasOwnProperty.call(TAG_GATED_RESOURCES, resource);
}
function requiredTagFor(role, resource) {
    if (!isTagGatedResource(resource)) return null;
    const gate = TAG_GATED_RESOURCES[resource];
    return gate[role] ?? null;
}
function passesTagGate(role, staffTags, resource) {
    const tag = requiredTagFor(role, resource);
    if (tag === null) return true;
    return Array.isArray(staffTags) && staffTags.includes(tag);
}
const ZU = {
    view: false,
    create: false,
    edit: false,
    delete: false
};
function closeTagGates(role, staffTags, permissions) {
    const ziel = {
        ...permissions
    };
    for (const resource of Object.keys(TAG_GATED_RESOURCES)){
        if (!passesTagGate(role, staffTags, resource)) ziel[resource] = {
            ...ZU
        };
    }
    return ziel;
}
const SCOPE_GATED_RESOURCES = {
    'my-auctions': [
        'partner'
    ]
};
function isScopeGated(role, resource) {
    if (!Object.prototype.hasOwnProperty.call(SCOPE_GATED_RESOURCES, resource)) return false;
    const rollen = SCOPE_GATED_RESOURCES[resource];
    return rollen.includes(role);
}
function closeScopeGates(role, open, permissions) {
    const ziel = {
        ...permissions
    };
    for (const resource of Object.keys(SCOPE_GATED_RESOURCES)){
        if (isScopeGated(role, resource) && open[resource] !== true) ziel[resource] = {
            ...ZU
        };
    }
    return ziel;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/rbac/timeAreaGate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1576 (R86) Schalter des Bereichs Zeit & Abwesenheit bis zum Start.
 *
 * Der Bereich ist fertig, wird aber versteckt ausgeliefert. `TIME_AREA_AUDIENCE`
 * entscheidet, wer ihn sieht:
 * - `all`: wie in den Rollendefinitionen (Rechte-Matrix, Tag `hr`, `management`
 *   schließt `hr` ein).
 * - alles andere (fehlt, leer, unbekannt) = `admin` (Vorab-Phase): rollenabhängig
 *   nach `TIME_AREA_TAG_BY_ROLE` — genau admin mit Tag `it` (#1592, „nur IT soll
 *   Zeiten tracken können") und staff mit Tag `intern` (#1853, Praktikum). staff
 *   mit nur `it`, admin mit nur `intern`, alle anderen Rollen und Konten ohne Tag
 *   bleiben draußen. Der Modusname bleibt `admin`, damit Umgebungen und
 *   Wiki-Logik unverändert gelten.
 *
 * Rolle und Tags sind die wirksamen des Kontexts: In der Rollen-Vorschau
 * („Ansicht als", #1194) liefert getUserContext Vorschaurolle UND Vorschau-Tags —
 * „Ansicht als staff mit intern" öffnet den Bereich also wie ein echtes
 * Praktikumskonto, „Ansicht als staff" ohne Tag nicht.
 *
 * Der Schalter greift an der Quelle — im Rechte-Snapshot (`getUserContext`) und
 * in `hasObjectAccess` — und nur für die drei Ressourcen des Bereichs. Matrix,
 * Tag-Logik und Routen bleiben unverändert; der Schalter legt sich darüber.
 *
 * Abhängigkeitsfrei, damit permissions.ts und apiPermissions.ts ihn ohne
 * Zirkelbezug importieren. Der Browser kennt die Variable nicht: dorthin trägt
 * nur der Snapshot den Schalter (siehe hasObjectAccess).
 */ __turbopack_context__.s([
    "TIME_AREA_RESOURCES",
    ()=>TIME_AREA_RESOURCES,
    "TIME_AREA_TAG_BY_ROLE",
    ()=>TIME_AREA_TAG_BY_ROLE,
    "closeTimeArea",
    ()=>closeTimeArea,
    "isTimeAreaResource",
    ()=>isTimeAreaResource,
    "opensTimeArea",
    ()=>opensTimeArea,
    "timeAreaAudience",
    ()=>timeAreaAudience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const TIME_AREA_RESOURCES = [
    'working-hours',
    'absences',
    'time-admin'
];
const TIME_AREA_TAG_BY_ROLE = {
    admin: 'it',
    staff: 'intern'
};
function opensTimeArea(role, staffTags) {
    if (!role || !Object.prototype.hasOwnProperty.call(TIME_AREA_TAG_BY_ROLE, role)) return false;
    const tag = TIME_AREA_TAG_BY_ROLE[role];
    return Array.isArray(staffTags) && staffTags.includes(tag);
}
function isTimeAreaResource(resource) {
    return TIME_AREA_RESOURCES.includes(resource);
}
function timeAreaAudience() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.TIME_AREA_AUDIENCE === 'all' ? 'all' : 'admin';
}
const ZU = {
    view: false,
    create: false,
    edit: false,
    delete: false
};
function closeTimeArea(permissions) {
    const ziel = {
        ...permissions
    };
    for (const resource of TIME_AREA_RESOURCES)ziel[resource] = {
        ...ZU
    };
    return ziel;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/records/recordLabel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1238 (M-14…M-20): der Anzeige-Name eines Datensatzes — nie eine Id als
 * Namensersatz. Liefert den ersten nicht-leeren String der Kandidaten
 * (z. B. `Owner?.Name`, `record.Name`), sonst `null`.
 */ __turbopack_context__.s([
    "recordLabel",
    ()=>recordLabel
]);
function recordLabel(...candidates) {
    for (const candidate of candidates){
        if (typeof candidate === 'string' && candidate.trim() !== '') return candidate;
    }
    return null;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/sales-intent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HIDDEN_SALES_INTENTS",
    ()=>HIDDEN_SALES_INTENTS,
    "buildMarketplaceVisibilityCondition",
    ()=>buildMarketplaceVisibilityCondition,
    "isCommerciallyActive",
    ()=>isCommerciallyActive
]);
/**
 * #771/#209: eine Quelle für die Marktplatz-/Verkaufs-Semantik von
 * Product2.Sales_Intent__c.
 *
 * - Produktkatalog (#209): Werte in HIDDEN_SALES_INTENTS sind für
 *   Kundenrollen unsichtbar; null gilt als sichtbar.
 * - Monitored Materials (#771): „Kommerziell aktiv" wird aus dem verknüpften
 *   Produkt ABGELEITET (PO-Entscheid 30.08.2026: kein eigenes SF-Feld am MM,
 *   Pflege läuft über das Produkt/Kanban). Gleiche Wertemenge, gleiche
 *   null-Parität wie der Marktplatz-Filter.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
;
const HIDDEN_SALES_INTENTS = [
    'Deactivated',
    'Salesforce only',
    'Platform invisible'
];
function buildMarketplaceVisibilityCondition(fieldPath = 'Sales_Intent__c') {
    const list = HIDDEN_SALES_INTENTS.map((v)=>`'${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeForSOQL"])(v)}'`).join(', ');
    return `(${fieldPath} = null OR ${fieldPath} NOT IN (${list}))`;
}
function isCommerciallyActive(salesIntent, hasProduct) {
    if (!hasProduct) return null;
    if (salesIntent == null || salesIntent === '') return true;
    return !HIDDEN_SALES_INTENTS.includes(salesIntent);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_1m0ovq2c65mus._.js.map