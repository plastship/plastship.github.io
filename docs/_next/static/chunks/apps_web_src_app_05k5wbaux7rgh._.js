(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/StartPageView.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StartPreviewBar",
    ()=>StartPreviewBar,
    "StartRoot",
    ()=>StartRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const StartRoot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "StartPageView.styles__StartRoot",
    componentId: "sc-3d456179-0"
})`
  display: contents;
`;
const StartPreviewBar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "StartPageView.styles__StartPreviewBar",
    componentId: "sc-3d456179-1"
})`
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  z-index: 150;
  padding: 8px 16px;
  text-align: center;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme })=>theme.palette.default.primary};
  background: ${({ theme })=>theme.palette.default.warning};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/StartPageView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StartPageView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/Frontpage/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Utility$2f$JsonLd$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Utility/JsonLd/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Utility$2f$JsonLd$2f$JsonLd$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Utility/JsonLd/JsonLd.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$CmsBlockRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CmsBlockRenderer/CmsBlockRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$edges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/edges.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsContentLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/CmsContentLocaleContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$StartPageView$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/StartPageView.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteLocaleHint$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteLocaleHint$2f$SiteLocaleHint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SiteLocaleHint/SiteLocaleHint.tsx [app-client] (ecmascript)");
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
function StartPageView({ page, markdown, pageHeadingIds, preview = false, previewLocale = null, source, structuredData }) {
    _s();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    // #2083: Vorschau-Sprache vor der Sprache der Oberfläche
    const locale = previewLocale ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsLocaleFor"])(language);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsContentLocaleContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsContentLocaleProvider"], {
        preview: previewLocale,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$Frontpage$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            footerEdge: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$edges$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsFooterEdgeColor"])(page.blocks),
            children: [
                structuredData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Utility$2f$JsonLd$2f$JsonLd$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    data: structuredData
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/StartPageView.tsx",
                    lineNumber: 61,
                    columnNumber: 28
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$StartPageView$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StartRoot"], {
                    "data-testid": "cms-page-root",
                    "data-slug": page.slug,
                    "data-status": page.status,
                    "data-preview": preview ? 'true' : 'false',
                    "data-version": page.version?.id ?? '',
                    "data-preview-locale": previewLocale ?? '',
                    "data-source": source,
                    "data-template": "frontpage",
                    children: [
                        preview && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$StartPageView$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StartPreviewBar"], {
                            "data-testid": "cms-preview-bar",
                            role: "status",
                            children: page.version ? tr('cms.preview.version', {
                                defaultValue: 'Vorschau: Version vom {{date}}',
                                date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCmsDate"])(page.version.createdAt, locale)
                            }) : tr('cms.preview.draft', {
                                defaultValue: 'Vorschau: Entwurf, noch nicht veröffentlicht'
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/StartPageView.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this),
                        !preview && !previewLocale && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SiteLocaleHint$2f$SiteLocaleHint$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiteLocaleHint"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/StartPageView.tsx",
                            lineNumber: 85,
                            columnNumber: 42
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CmsBlockRenderer$2f$CmsBlockRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CmsBlockRenderer"], {
                            blocks: page.blocks,
                            locale: locale,
                            title: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsText"])(page.title, locale),
                            markdown: markdown,
                            pageHeadingIds: pageHeadingIds
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/StartPageView.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/StartPageView.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/StartPageView.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/StartPageView.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_s(StartPageView, "sqE/X4xsqdrr6IXK9zGQeoRp8EQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = StartPageView;
var _c;
__turbopack_context__.k.register(_c, "StartPageView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/af.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/af.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$af$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/af.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$af$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/am.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/am.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$am$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/am.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$am$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ar.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ar.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ar$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ar.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ar$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/az.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/az.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$az$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/az.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$az$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/be.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/be.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$be$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/be.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$be$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/bg.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/bg.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$bg$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/bg.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$bg$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/bn.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/bn.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$bn$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/bn.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$bn$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/bs.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/bs.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$bs$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/bs.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$bs$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ca.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ca.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ca$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ca.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ca$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/cs.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/cs.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$cs$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/cs.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$cs$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/cy.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/cy.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$cy$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/cy.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$cy$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/da.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/da.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$da$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/da.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$da$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/de.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/de.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$de$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/de.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$de$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/el.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/el.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$el$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/el.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$el$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/en-GB.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/en-GB.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$en$2d$GB$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/en-GB.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$en$2d$GB$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/en-US.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/en-US.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$en$2d$US$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/en-US.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$en$2d$US$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/es.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/es.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$es$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/es.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$es$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/et.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/et.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$et$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/et.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$et$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/eu.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/eu.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$eu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/eu.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$eu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/fa.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/fa.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$fa$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/fa.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$fa$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/fi.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/fi.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$fi$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/fi.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$fi$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/fr.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/fr.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$fr$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/fr.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$fr$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ga.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ga.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ga$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ga.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ga$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/gl.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/gl.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$gl$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/gl.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$gl$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/gu.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/gu.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$gu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/gu.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$gu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ha.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ha.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ha$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ha.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ha$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/he.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/he.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$he$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/he.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$he$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/hi.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/hi.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$hi$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/hi.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$hi$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/hr.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/hr.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$hr$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/hr.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$hr$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/hu.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/hu.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$hu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/hu.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$hu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/id.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/id.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$id$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/id.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$id$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ig.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ig.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ig$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ig.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ig$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/is.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/is.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$is$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/is.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$is$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/it.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/it.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$it$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/it.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$it$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ja.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ja.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ja$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ja.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ja$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/kk.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/kk.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$kk$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/kk.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$kk$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ko.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ko.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ko$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ko.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ko$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/lb.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/lb.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$lb$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/lb.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$lb$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/lt.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/lt.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$lt$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/lt.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$lt$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/lv.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/lv.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$lv$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/lv.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$lv$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/mk.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/mk.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$mk$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/mk.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$mk$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/mr.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/mr.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$mr$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/mr.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$mr$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ms.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ms.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ms$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ms.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ms$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/mt.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/mt.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$mt$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/mt.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$mt$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/my.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/my.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$my$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/my.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$my$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ne.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ne.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ne$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ne.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ne$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/nl.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/nl.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$nl$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/nl.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$nl$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/no.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/no.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$no$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/no.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$no$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/pa.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/pa.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$pa$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/pa.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$pa$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/pl.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/pl.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$pl$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/pl.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$pl$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/pt-BR.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/pt-BR.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$pt$2d$BR$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/pt-BR.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$pt$2d$BR$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/pt-PT.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/pt-PT.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$pt$2d$PT$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/pt-PT.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$pt$2d$PT$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ro.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ro.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ro$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ro.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ro$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ru.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ru.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ru$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ru.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ru$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/sk.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/sk.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sk$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/sk.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sk$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/sl.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/sl.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sl$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/sl.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sl$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/sq.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/sq.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sq$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/sq.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sq$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/sr.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/sr.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sr$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/sr.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sr$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/sv.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/sv.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sv$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/sv.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sv$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/sw.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/sw.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sw$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/sw.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$sw$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ta.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ta.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ta$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ta.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ta$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/te.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/te.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$te$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/te.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$te$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/th.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/th.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$th$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/th.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$th$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/tl.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/tl.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$tl$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/tl.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$tl$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/tr.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/tr.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$tr$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/tr.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$tr$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/uk.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/uk.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$uk$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/uk.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$uk$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/ur.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/ur.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ur$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/ur.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$ur$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/uz.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/uz.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$uz$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/uz.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$uz$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/vi.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/vi.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$vi$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/vi.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$vi$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/yo.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/yo.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$yo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/yo.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$yo$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/zh-CN.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/zh-CN.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$zh$2d$CN$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/zh-CN.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$zh$2d$CN$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/zh.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/zh.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$zh$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/zh.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$zh$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/flags/zu.svg.mjs { IMAGE => \"[project]/apps/web/src/app/assets/flags/zu.svg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$zu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/flags/zu.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$flags$2f$zu$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 640,
    height: 480,
    blurWidth: 0,
    blurHeight: 0
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/assets/theme/brands/partnerTheme.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDarkTheme",
    ()=>isDarkTheme,
    "partnerAccent",
    ()=>partnerAccent,
    "partnerCssVars",
    ()=>partnerCssVars,
    "partnerTheme",
    ()=>partnerTheme
]);
function isDarkTheme(theme) {
    return theme.key === 'plastship-dark';
}
function partnerAccent(theme, brand) {
    return isDarkTheme(theme) ? {
        accent: brand.accentDark,
        accentHover: brand.accentDarkHover
    } : {
        accent: brand.accent,
        accentHover: brand.accentHover
    };
}
function partnerTheme(theme, brand) {
    const { accent } = partnerAccent(theme, brand);
    return {
        ...theme,
        boxShadow: isDarkTheme(theme) ? theme.boxShadow : brand.shadow,
        font: {
            ...theme.font,
            primaryFamily: brand.fontFamily,
            secondaryFamily: brand.fontFamily
        },
        palette: {
            ...theme.palette,
            default: {
                ...theme.palette.default,
                primary: accent
            },
            link: {
                ...theme.palette.link,
                primary: accent
            },
            text: {
                ...theme.palette.text,
                onAccent: brand.onAccent
            }
        }
    };
}
function partnerCssVars(theme, brand) {
    const { accent, accentHover } = partnerAccent(theme, brand);
    return `--button-primary-bg: ${accent}; --button-primary-bg-hover: ${accentHover};`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/apps/web/src/app/assets/theme/mixins.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "userSelectNone",
    ()=>userSelectNone,
    "visuallyHidden",
    ()=>visuallyHidden
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const userSelectNone = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const visuallyHidden = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/footerNavigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FOOTER_CONTACT",
    ()=>FOOTER_CONTACT,
    "FOOTER_META_LINKS",
    ()=>FOOTER_META_LINKS,
    "FOOTER_SECTIONS",
    ()=>FOOTER_SECTIONS,
    "footerHrefs",
    ()=>footerHrefs
]);
/**
 * #1157: Die eingebauten Footer-Links als Daten statt JSX — eine Quelle für den
 * Footer (solange `CmsNavigation.footer` leer ist), für den Wächter-Test
 * (jeder Link muss ohne Anmeldung erreichbar sein, sonst landet ein Besucher
 * vom Footer aus auf der Login-Seite) und für den anonymen E2E-Sweep.
 * Label-Keys bleiben `footer.*` (Übersetzungs-DB); `tr('footer.about')` im
 * Footer war bisher der Anker des Key-Scanners — die Keys stehen jetzt hier.
 *
 * #1212: genau die Links des Footers von plastship.com (Stand 2026-09-21):
 * „Weitere Links", Kontaktangaben, unten AGB/Impressum/Datenschutz. Die Ziele
 * sind die App-Pfade der importierten Seiten; „Kontaktformular" zeigt auf der
 * Quelle auf /team (ohne Formular) — hier auf die Kontaktseite mit Formular.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/companyContact.ts [app-client] (ecmascript)");
;
const FOOTER_SECTIONS = [
    {
        titleKey: 'footer.sections.links',
        links: [
            {
                href: '/team',
                labelKey: 'footer.team'
            },
            {
                href: '/faq',
                labelKey: 'footer.faq'
            },
            {
                href: '/about',
                labelKey: 'footer.about'
            },
            {
                href: '/news',
                labelKey: 'footer.latest'
            },
            {
                href: '/contact-us',
                labelKey: 'footer.contactForm'
            },
            // #1563: sonst nur über die Sitemap erreichbar (verlinkt Design for Recycling)
            {
                href: '/services',
                labelKey: 'footer.services'
            }
        ]
    }
];
const FOOTER_CONTACT = {
    titleKey: 'footer.contact',
    email: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_EMAILS"].info,
    phone: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_PHONES"].central,
    address: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$companyContact$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COMPANY_ADDRESS"]
};
const FOOTER_META_LINKS = [
    {
        href: '/agb',
        labelKey: 'footer.terms'
    },
    {
        href: '/imprint',
        labelKey: 'footer.imprint'
    },
    {
        href: '/privacy',
        labelKey: 'footer.privacy'
    },
    {
        href: '/email-disclaimer',
        labelKey: 'footer.emailDisclaimer'
    },
    // #2141: Erklärung zur Barrierefreiheit neben den Rechtsseiten
    {
        href: '/accessibility',
        labelKey: 'footer.accessibility'
    }
];
function footerHrefs() {
    const alle = [
        ...FOOTER_SECTIONS.flatMap((section)=>section.links),
        ...FOOTER_META_LINKS
    ];
    return [
        ...new Set(alle.map((link)=>link.href))
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/config/headerNavigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEADER_NAV_ITEMS",
    ()=>HEADER_NAV_ITEMS,
    "headerHrefs",
    ()=>headerHrefs
]);
const HEADER_NAV_ITEMS = [
    {
        label: {
            de: 'Rezyklatversorgung',
            en: 'Recyclate supply'
        },
        href: '/procurement',
        children: [
            {
                label: {
                    de: 'End-to-End-Versorgung',
                    en: 'End-to-end supply'
                },
                href: '/end-to-end-supply'
            },
            {
                label: {
                    de: 'Digitale Plattform & Materialsuche',
                    en: 'Digital platform & material sourcing'
                },
                href: '/material-search'
            },
            {
                label: {
                    de: 'Top-Rezyklate',
                    en: 'Top Recyclates'
                },
                href: '/top-recyclates'
            }
        ]
    },
    {
        label: {
            de: 'Materialqualität',
            en: 'Material quality'
        },
        href: '/material-quality',
        children: [
            // plastship.com/monitored-materials — in der App die öffentliche Seite dazu (#1205)
            {
                label: {
                    de: 'plastship Monitored Materials'
                },
                href: '/recyclate-performance'
            },
            // #1563: die Bewertungslogik dazu (plastship.com/plastship-monitored-material-system) —
            // vorher nur über die Sitemap erreichbar
            {
                label: {
                    de: 'Qualitätsbewertung von Rezyklaten',
                    en: 'Quality assessment of recyclates'
                },
                href: '/monitored-material-system'
            },
            {
                label: {
                    de: 'Whitepaper'
                },
                href: '/whitepaper'
            },
            {
                label: {
                    de: 'Labordienstleistungen & Materialanalysen',
                    en: 'Laboratory services & material analysis'
                },
                href: '/laboratory-services'
            }
        ]
    },
    {
        label: {
            de: 'Recycling as a Service'
        },
        href: '/waste-disposal'
    },
    {
        label: {
            de: 'Community'
        },
        href: '/partners',
        children: [
            {
                label: {
                    de: 'Entsorger Circle'
                },
                href: '/recycler-circle'
            },
            {
                label: {
                    de: 'Strategiemix in der Kunststoffindustrie',
                    en: 'Strategic Mix in the Plastics Industry'
                },
                href: '/strategy-mix'
            }
        ]
    },
    {
        label: {
            de: 'Aktuelles',
            en: 'News'
        },
        href: '/news',
        children: [
            {
                label: {
                    de: 'KISS – KI-gestützte Optimierung von Kunststoffkreisläufen',
                    en: 'KISS – AI-Driven Optimisation of Plastic Recycling Loops'
                },
                href: '/benchmark'
            },
            {
                label: {
                    de: 'plastship Story',
                    en: 'plastship story'
                },
                href: '/story'
            },
            {
                label: {
                    de: 'Branchen-Umfrage',
                    en: 'Industry survey'
                },
                href: '/industry-survey'
            }
        ]
    },
    {
        label: {
            de: 'Über uns',
            en: 'About us'
        },
        href: '/about',
        children: [
            {
                label: {
                    de: 'Team'
                },
                href: '/team'
            },
            {
                label: {
                    de: 'Kontakt',
                    en: 'Contact'
                },
                href: '/contact-us'
            }
        ]
    }
];
function headerHrefs(items = HEADER_NAV_ITEMS) {
    const alle = items.flatMap((item)=>[
            item.href,
            ...(item.children ?? []).map((kind)=>kind.href)
        ]);
    return [
        ...new Set(alle)
    ];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/CmsContentLocaleContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CmsContentLocaleProvider",
    ()=>CmsContentLocaleProvider,
    "useCmsContentLocale",
    ()=>useCmsContentLocale,
    "useCmsPreviewLocale",
    ()=>useCmsPreviewLocale
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/cmsBlocks/localize.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
/**
 * #2083: Inhaltssprache der öffentlichen CMS-Ansichten.
 *
 * Regel: die Sprachfassung der Oberflächensprache (`cmsLocaleFor`, nur
 * öffentliche Sprachen; Besucher = Sprache des Pfads, Angemeldete = Profil).
 * Die Vorschau der Redaktion (`?lang=xx`, auch für Sprachen in Vorbereitung,
 * vom Server nur mit cms.edit gesetzt) überstimmt sie für den ganzen Baum der
 * Seite — Blöcke, Kopfmenü und Fußzeile.
 */ const PreviewLocaleContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function CmsContentLocaleProvider({ preview, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PreviewLocaleContext.Provider, {
        value: preview ?? null,
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/CmsContentLocaleContext.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = CmsContentLocaleProvider;
function useCmsPreviewLocale() {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PreviewLocaleContext);
}
_s(useCmsPreviewLocale, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
function useCmsContentLocale() {
    _s1();
    const preview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(PreviewLocaleContext);
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    return preview ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$cmsBlocks$2f$localize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cmsLocaleFor"])(language);
}
_s1(useCmsContentLocale, "IvfqpKT/FI133l41k0ComJAANF4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"]
    ];
});
var _c;
__turbopack_context__.k.register(_c, "CmsContentLocaleProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useCmsNavigation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCmsNavigation",
    ()=>useCmsNavigation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsNavigationSeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/CmsNavigationSeedContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const LEER = {
    header: [],
    footer: []
};
function useCmsNavigation() {
    _s();
    const seed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsNavigationSeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsNavigationSeed"])();
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'cms-navigation'
        ],
        queryFn: {
            "useCmsNavigation.useQuery": async ()=>{
                // #1478: fetch statt axios — die Navigation steht auf jeder öffentlichen
                // Seite, der App-HTTP-Client (Interceptors, Sentry-Anbindung) nicht.
                // Schluss-Slash wie die übrigen API-Aufrufe (trailingSlash in next.config, sonst erst 308)
                const res = await fetch('/api/cms/navigation/public/', {
                    headers: {
                        Accept: 'application/json'
                    }
                });
                if (!res.ok) throw new Error(`cms-navigation ${res.status}`);
                const antwort = await res.json();
                return {
                    ...LEER,
                    ...antwort.data ?? {}
                };
            }
        }["useCmsNavigation.useQuery"],
        staleTime: 5 * 60 * 1000,
        retry: 1,
        enabled: seed === null
    });
    return {
        header: data?.header ?? seed?.header ?? [],
        footer: data?.footer ?? seed?.footer ?? [],
        isLoading: seed === null && isLoading
    };
}
_s(useCmsNavigation, "pCnJLkXOfC4RVYToi7PvtLAItmU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$CmsNavigationSeedContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCmsNavigationSeed"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useDialogLifecycle.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDialogLifecycle",
    ()=>useDialogLifecycle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useDialogLifecycle(isOpen, containerRef, { onClose, closeOnEscape, mounted, lockScroll = true }) {
    _s();
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        onClose,
        closeOnEscape
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDialogLifecycle.useEffect": ()=>{
            latest.current = {
                onClose,
                closeOnEscape
            };
        }
    }["useDialogLifecycle.useEffect"], [
        onClose,
        closeOnEscape
    ]);
    // Auslöser merken, Scroll sperren, Escape abhören — unabhängig vom Mount,
    // damit der Auslöser feststeht, bevor ein autoFocus-Feld den Fokus nimmt.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDialogLifecycle.useEffect": ()=>{
            if (!isOpen) return;
            const previousActiveElement = document.activeElement;
            if (lockScroll) document.body.style.overflow = 'hidden';
            const handleKeyDown = {
                "useDialogLifecycle.useEffect.handleKeyDown": (event)=>{
                    if (latest.current.closeOnEscape && event.key === 'Escape') {
                        latest.current.onClose();
                    }
                }
            }["useDialogLifecycle.useEffect.handleKeyDown"];
            document.addEventListener('keydown', handleKeyDown);
            return ({
                "useDialogLifecycle.useEffect": ()=>{
                    if (lockScroll) document.body.style.overflow = '';
                    document.removeEventListener('keydown', handleKeyDown);
                    // preventScroll: der Fokuswechsel darf die dahinterliegende Seite nie
                    // verschieben — der Nutzer kann inzwischen weitergescrollt haben
                    // (Scroll-Sprung-Befund AB 28.08., #783)
                    if (previousActiveElement instanceof HTMLElement) {
                        previousActiveElement.focus({
                            preventScroll: true
                        });
                    }
                }
            })["useDialogLifecycle.useEffect"];
        }
    }["useDialogLifecycle.useEffect"], [
        isOpen,
        lockScroll
    ]);
    // Anfangsfokus, sobald der Inhalt im DOM steht
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDialogLifecycle.useEffect": ()=>{
            const container = containerRef.current;
            if (!isOpen || !mounted || !container) return;
            if (container.contains(document.activeElement)) return;
            const target = container.querySelector('[data-autofocus]') ?? container;
            target.focus({
                preventScroll: true
            });
        }
    }["useDialogLifecycle.useEffect"], [
        isOpen,
        mounted,
        containerRef
    ]);
}
_s(useDialogLifecycle, "66j5gS0nqbfLE1prQzQcGNvedmA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useElementWidth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useElementWidth",
    ()=>useElementWidth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useElementWidth = (ref)=>{
    _s();
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useElementWidth.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const measure = {
                "useElementWidth.useEffect.measure": ()=>{
                    const next = el.clientWidth;
                    setWidth({
                        "useElementWidth.useEffect.measure": (prev)=>prev === next ? prev : next
                    }["useElementWidth.useEffect.measure"]);
                }
            }["useElementWidth.useEffect.measure"];
            measure();
            if (typeof ResizeObserver === 'undefined') return;
            const observer = new ResizeObserver(measure);
            observer.observe(el);
            return ({
                "useElementWidth.useEffect": ()=>observer.disconnect()
            })["useElementWidth.useEffect"];
        }
    }["useElementWidth.useEffect"], [
        ref
    ]);
    return width;
};
_s(useElementWidth, "4/nr7/glcmtQpNPa3y1HsyGlpKw=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useEntranceAnimation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useEntranceAnimation",
    ()=>useEntranceAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSceneVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSceneVisibility.ts [app-client] (ecmascript)");
// direkt aus der Datei: der Index des Imagefilms zöge three.js mit
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$useSaveData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Scene3D/Organism/Imagefilm/useSaveData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/motion/entrance.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function useEntranceAnimation(ref, durationMs, threshold = 0.35) {
    _s();
    const visible = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSceneVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneVisibility"])(ref, threshold);
    const reducedMotion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"])();
    const saveData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$useSaveData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveData"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [seen, setSeen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEntranceAnimation.useEffect": ()=>setMounted(true)
    }["useEntranceAnimation.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEntranceAnimation.useEffect": ()=>{
            if (visible) setSeen(true);
        }
    }["useEntranceAnimation.useEffect"], [
        visible
    ]);
    const state = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$motion$2f$entrance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveEntranceState"])({
        mounted,
        reducedMotion,
        saveData,
        seen,
        finished
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEntranceAnimation.useEffect": ()=>{
            if (state !== 'running') return;
            const timer = window.setTimeout({
                "useEntranceAnimation.useEffect.timer": ()=>setFinished(true)
            }["useEntranceAnimation.useEffect.timer"], durationMs);
            // Unmount oder Wechsel auf `static` mitten im Lauf: Zeitgeber weg
            return ({
                "useEntranceAnimation.useEffect": ()=>window.clearTimeout(timer)
            })["useEntranceAnimation.useEffect"];
        }
    }["useEntranceAnimation.useEffect"], [
        state,
        durationMs
    ]);
    return {
        state,
        visible
    };
}
_s(useEntranceAnimation, "Lv1m03VYFHN4/rJ6E8Zuj9ky+fw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSceneVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSceneVisibility"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$usePrefersReducedMotion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrefersReducedMotion"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Scene3D$2f$Organism$2f$Imagefilm$2f$useSaveData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSaveData"]
    ];
});
const __TURBOPACK__default__export__ = useEntranceAnimation;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useHexStagePlacement.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HEX_STAGE_ATTRIBUTE",
    ()=>HEX_STAGE_ATTRIBUTE,
    "useHexStagePlacement",
    ()=>useHexStagePlacement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HexContentBackdrop/HexContentBackdrop.tsx [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const HEX_STAGE_ATTRIBUTE = 'data-hex-stage';
const useHexStagePlacement = (ref)=>{
    _s();
    const [placement, setPlacement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHexStagePlacement.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const stage = el.closest(`[${HEX_STAGE_ATTRIBUTE}]`) ?? el.offsetParent;
            if (!stage) return;
            const measure = {
                "useHexStagePlacement.useEffect.measure": ()=>{
                    const width = stage.offsetWidth;
                    const height = stage.offsetHeight;
                    if (width <= 0 || height <= 0 || el.offsetWidth <= 0) return;
                    const declared = Number(stage.getAttribute('data-columns'));
                    const columns = declared > 0 ? declared : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnsForWidth"])(width);
                    const rect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HexContentBackdrop$2f$HexContentBackdrop$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["layoutRect"])(el, stage);
                    setPlacement({
                        "useHexStagePlacement.useEffect.measure": (prev)=>prev && prev.width === width && prev.height === height && prev.columns === columns && JSON.stringify(prev.rect) === JSON.stringify(rect) ? prev : {
                                width,
                                height,
                                columns,
                                rect
                            }
                    }["useHexStagePlacement.useEffect.measure"]);
                }
            }["useHexStagePlacement.useEffect.measure"];
            measure();
            if (typeof document !== 'undefined' && document.fonts?.ready) {
                document.fonts.ready.then(measure).catch({
                    "useHexStagePlacement.useEffect": ()=>undefined
                }["useHexStagePlacement.useEffect"]);
            }
            if (typeof ResizeObserver === 'undefined') return;
            const observer = new ResizeObserver(measure);
            observer.observe(stage);
            observer.observe(el);
            // data-columns ändert sich mit der Bühnenbreite erst nach deren Render
            const attributes = typeof MutationObserver === 'undefined' ? null : new MutationObserver(measure);
            attributes?.observe(stage, {
                attributes: true,
                attributeFilter: [
                    'data-columns'
                ]
            });
            return ({
                "useHexStagePlacement.useEffect": ()=>{
                    observer.disconnect();
                    attributes?.disconnect();
                }
            })["useHexStagePlacement.useEffect"];
        }
    }["useHexStagePlacement.useEffect"], [
        ref
    ]);
    return placement;
};
_s(useHexStagePlacement, "Po4+CEDS4NIY+LTxkClX+FCbSDE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useHexStageSize.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useHexStageSize",
    ()=>useHexStageSize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/hex/grid.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const useHexStageSize = (ref, fallbackColumns, tileSize = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_TILE_SIZE_PX"])=>{
    _s();
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 0,
        height: 0,
        columns: fallbackColumns
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useHexStageSize.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const measure = {
                "useHexStageSize.useEffect.measure": ()=>{
                    // Nachtrag #2186: offsetWidth/-Height runden auf ganze Pixel — bei
                    // gebrochener Höhe (Browser-Zoom, Schrift) ab, dann bliebe unter der
                    // Wabenkante ein Streifen der Fläche stehen, eine gerade Schnittkante.
                    // Aufgerundet deckt das Raster das Element ganz; der Host schneidet den
                    // Bruchteil ab.
                    const rect = el.getBoundingClientRect();
                    const width = Math.max(el.offsetWidth, Math.ceil(rect.width - 0.01));
                    const height = Math.max(el.offsetHeight, Math.ceil(rect.height - 0.01));
                    if (width <= 0 || height <= 0) return;
                    setSize({
                        "useHexStageSize.useEffect.measure": (prev)=>prev.width === width && prev.height === height ? prev : {
                                width,
                                height,
                                columns: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$hex$2f$grid$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnsForWidth"])(width, tileSize)
                            }
                    }["useHexStageSize.useEffect.measure"]);
                }
            }["useHexStageSize.useEffect.measure"];
            measure();
            if (typeof ResizeObserver === 'undefined') return;
            const observer = new ResizeObserver(measure);
            observer.observe(el);
            return ({
                "useHexStageSize.useEffect": ()=>observer.disconnect()
            })["useHexStageSize.useEffect"];
        }
    }["useHexStageSize.useEffect"], [
        ref,
        tileSize
    ]);
    return size;
};
_s(useHexStageSize, "29eqAFZ9kFXWEk0RNKZbG5Lc35o=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useIsGuest.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useIsGuest",
    ()=>useIsGuest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/AppShellActiveContext.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
function useIsGuest() {
    _s();
    const { data, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const appShellActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellActive"])();
    if (status === 'unauthenticated') return true;
    // #2175: Auffrischung einer bestehenden Sitzung (update()) ist kein Gast
    return status === 'loading' && !data && !appShellActive;
}
_s(useIsGuest, "YJAq6ihyeE9cKi2aKkVTwxJV51o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppShellActive"]
    ];
});
const __TURBOPACK__default__export__ = useIsGuest;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useMediaQuery.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useMediaQuery = (query)=>{
    _s();
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || typeof window.matchMedia !== 'function') return;
            const media = window.matchMedia(query);
            const update = {
                "useMediaQuery.useEffect.update": ()=>setMatches(media.matches)
            }["useMediaQuery.useEffect.update"];
            update();
            media.addEventListener('change', update);
            return ({
                "useMediaQuery.useEffect": ()=>media.removeEventListener('change', update)
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], [
        query
    ]);
    return matches;
};
_s(useMediaQuery, "/aV7jSECvYA0Ea4uAEPK2AzROhs=");
const __TURBOPACK__default__export__ = useMediaQuery;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/usePrefersReducedMotion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "usePrefersReducedMotion",
    ()=>usePrefersReducedMotion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const QUERY = '(prefers-reduced-motion: reduce)';
const usePrefersReducedMotion = ()=>{
    _s();
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrefersReducedMotion.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") === 'undefined' || typeof window.matchMedia !== 'function') return;
            const media = window.matchMedia(QUERY);
            const update = {
                "usePrefersReducedMotion.useEffect.update": ()=>setReduced(media.matches)
            }["usePrefersReducedMotion.useEffect.update"];
            update();
            media.addEventListener('change', update);
            return ({
                "usePrefersReducedMotion.useEffect": ()=>media.removeEventListener('change', update)
            })["usePrefersReducedMotion.useEffect"];
        }
    }["usePrefersReducedMotion.useEffect"], []);
    return reduced;
};
_s(usePrefersReducedMotion, "PAG4zvF6+IsK2eHB7xTPE8NJ12w=");
const __TURBOPACK__default__export__ = usePrefersReducedMotion;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useSceneVisibility.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useSceneVisibility",
    ()=>useSceneVisibility
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const useSceneVisibility = (ref, threshold = 0.2, /** Vorlauf um das Sichtfeld, z. B. '400px' — für frühes Laden */ rootMargin)=>{
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSceneVisibility.useEffect": ()=>{
            const element = ref.current;
            const update = {
                "useSceneVisibility.useEffect.update": (value)=>setVisible(value)
            }["useSceneVisibility.useEffect.update"];
            if (typeof IntersectionObserver === 'undefined') {
                update(true);
                return;
            }
            if (!element) return;
            const observer = new IntersectionObserver({
                "useSceneVisibility.useEffect": ([entry])=>update(entry.isIntersecting)
            }["useSceneVisibility.useEffect"], {
                threshold,
                rootMargin
            });
            observer.observe(element);
            return ({
                "useSceneVisibility.useEffect": ()=>observer.disconnect()
            })["useSceneVisibility.useEffect"];
        }
    }["useSceneVisibility.useEffect"], [
        ref,
        threshold,
        rootMargin
    ]);
    return visible;
};
_s(useSceneVisibility, "cz/DzCD06IMMsoBJ0A1IgCy1P5M=");
const __TURBOPACK__default__export__ = useSceneVisibility;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useSessionFlags.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "sessionFlags",
    ()=>sessionFlags,
    "useSessionFlags",
    ()=>useSessionFlags
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const sessionFlags = (status, hasSession)=>({
        isAuthenticated: status === 'authenticated' || status === 'loading' && hasSession,
        isSessionLoading: status === 'loading' && !hasSession
    });
function useSessionFlags() {
    _s();
    const { data, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    return sessionFlags(status, !!data);
}
_s(useSessionFlags, "H1a9HdVcQdmPZqkUFV9G+j8pnzM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
const __TURBOPACK__default__export__ = useSessionFlags;
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
]})(),
"[project]/apps/web/src/app/assets/flags/af.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/af.1pxy20vfsgof_.svg");}),
"[project]/apps/web/src/app/assets/flags/am.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/am.1aiz170fyx9nc.svg");}),
"[project]/apps/web/src/app/assets/flags/ar.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ar.1d-o0sx2msp7o.svg");}),
"[project]/apps/web/src/app/assets/flags/az.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/az.3ydnaydfpxwzf.svg");}),
"[project]/apps/web/src/app/assets/flags/be.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/be.2kyls0yvbg0ui.svg");}),
"[project]/apps/web/src/app/assets/flags/bg.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/bg.18qzd7kjrn-xw.svg");}),
"[project]/apps/web/src/app/assets/flags/bn.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/bn.2bwd5f-ynuims.svg");}),
"[project]/apps/web/src/app/assets/flags/bs.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/bs.3bcnhs2vjhuxr.svg");}),
"[project]/apps/web/src/app/assets/flags/ca.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ca.31ufyo2r11wys.svg");}),
"[project]/apps/web/src/app/assets/flags/cs.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/cs.0jhcdil1dv9cb.svg");}),
"[project]/apps/web/src/app/assets/flags/cy.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/cy.22w3wqa3yyolz.svg");}),
"[project]/apps/web/src/app/assets/flags/da.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/da.0jr0294h4sfnj.svg");}),
"[project]/apps/web/src/app/assets/flags/de.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/de.382yhwb-cufgt.svg");}),
"[project]/apps/web/src/app/assets/flags/el.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/el.2fy04rl96dsps.svg");}),
"[project]/apps/web/src/app/assets/flags/en-GB.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/en-GB.1e85bjg_5t8f0.svg");}),
"[project]/apps/web/src/app/assets/flags/en-US.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/en-US.0i80fi4aa4liy.svg");}),
"[project]/apps/web/src/app/assets/flags/es.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/es.3jwq6b1aedu03.svg");}),
"[project]/apps/web/src/app/assets/flags/et.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/et.2vphvd7dupyoi.svg");}),
"[project]/apps/web/src/app/assets/flags/eu.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/eu.0268p2q9me4fv.svg");}),
"[project]/apps/web/src/app/assets/flags/fa.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/fa.25o1m1av7p56o.svg");}),
"[project]/apps/web/src/app/assets/flags/fi.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/fi.0icgbywumbgxs.svg");}),
"[project]/apps/web/src/app/assets/flags/fr.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/fr.2qtnmmkygkwo0.svg");}),
"[project]/apps/web/src/app/assets/flags/ga.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ga.2in2hao5yrc75.svg");}),
"[project]/apps/web/src/app/assets/flags/gl.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/gl.1fi124p5xfx0e.svg");}),
"[project]/apps/web/src/app/assets/flags/gu.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/gu.23o1lp_ompvci.svg");}),
"[project]/apps/web/src/app/assets/flags/ha.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ha.08p8tfb041qvh.svg");}),
"[project]/apps/web/src/app/assets/flags/he.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/he.23_79c33ymfry.svg");}),
"[project]/apps/web/src/app/assets/flags/hi.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/hi.23o1lp_ompvci.svg");}),
"[project]/apps/web/src/app/assets/flags/hr.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/hr.04bys4huewk8_.svg");}),
"[project]/apps/web/src/app/assets/flags/hu.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/hu.2mgk5ohjcqwhf.svg");}),
"[project]/apps/web/src/app/assets/flags/id.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/id.2p_bmmjx0hlmc.svg");}),
"[project]/apps/web/src/app/assets/flags/ig.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ig.08p8tfb041qvh.svg");}),
"[project]/apps/web/src/app/assets/flags/is.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/is.2im7rvbdjxgeo.svg");}),
"[project]/apps/web/src/app/assets/flags/it.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/it.28jj5t2w1e8n9.svg");}),
"[project]/apps/web/src/app/assets/flags/ja.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ja.07kbrn116x9rq.svg");}),
"[project]/apps/web/src/app/assets/flags/kk.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/kk.1mgsvosss8wkm.svg");}),
"[project]/apps/web/src/app/assets/flags/ko.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ko.3nm9b2rm0e892.svg");}),
"[project]/apps/web/src/app/assets/flags/lb.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/lb.3yyrwyr23dg46.svg");}),
"[project]/apps/web/src/app/assets/flags/lt.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/lt.0dvkjcjv0ujf-.svg");}),
"[project]/apps/web/src/app/assets/flags/lv.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/lv.2rtcxxkt2iw2r.svg");}),
"[project]/apps/web/src/app/assets/flags/mk.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/mk.2gyoisr3ezc__.svg");}),
"[project]/apps/web/src/app/assets/flags/mr.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/mr.23o1lp_ompvci.svg");}),
"[project]/apps/web/src/app/assets/flags/ms.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ms.2r-9xrwm_hib5.svg");}),
"[project]/apps/web/src/app/assets/flags/mt.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/mt.16_8tss0uvig-.svg");}),
"[project]/apps/web/src/app/assets/flags/my.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/my.0ps2-wsd1e3ej.svg");}),
"[project]/apps/web/src/app/assets/flags/ne.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ne.3eymdwb96xxqe.svg");}),
"[project]/apps/web/src/app/assets/flags/nl.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/nl.032d_gwegw-fa.svg");}),
"[project]/apps/web/src/app/assets/flags/no.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/no.29b6jdvgi8o5y.svg");}),
"[project]/apps/web/src/app/assets/flags/pa.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/pa.23o1lp_ompvci.svg");}),
"[project]/apps/web/src/app/assets/flags/pl.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/pl.2n39rbxemzpae.svg");}),
"[project]/apps/web/src/app/assets/flags/pt-BR.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/pt-BR.1lim59_m3v1o5.svg");}),
"[project]/apps/web/src/app/assets/flags/pt-PT.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/pt-PT.30uq3q4ca_-ob.svg");}),
"[project]/apps/web/src/app/assets/flags/ro.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ro.0mkw5mp9tsi4b.svg");}),
"[project]/apps/web/src/app/assets/flags/ru.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ru.22ziysz1h6pbc.svg");}),
"[project]/apps/web/src/app/assets/flags/sk.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/sk.389yba_4ysbi9.svg");}),
"[project]/apps/web/src/app/assets/flags/sl.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/sl.2jikcjz1khewt.svg");}),
"[project]/apps/web/src/app/assets/flags/sq.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/sq.3s0ei9o1ve2al.svg");}),
"[project]/apps/web/src/app/assets/flags/sr.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/sr.3fp59pzcoe7zm.svg");}),
"[project]/apps/web/src/app/assets/flags/sv.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/sv.0x4bam4k37dur.svg");}),
"[project]/apps/web/src/app/assets/flags/sw.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/sw.3togoiu71nn3q.svg");}),
"[project]/apps/web/src/app/assets/flags/ta.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ta.23o1lp_ompvci.svg");}),
"[project]/apps/web/src/app/assets/flags/te.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/te.23o1lp_ompvci.svg");}),
"[project]/apps/web/src/app/assets/flags/th.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/th.0ma-9fgy1_vj8.svg");}),
"[project]/apps/web/src/app/assets/flags/tl.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/tl.3azj0xmcy1tgi.svg");}),
"[project]/apps/web/src/app/assets/flags/tr.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/tr.29qgv6gtc7976.svg");}),
"[project]/apps/web/src/app/assets/flags/uk.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/uk.1guqasah1gjce.svg");}),
"[project]/apps/web/src/app/assets/flags/ur.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/ur.3o6tl1hm52y_f.svg");}),
"[project]/apps/web/src/app/assets/flags/uz.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/uz.44sh_x0fgp11k.svg");}),
"[project]/apps/web/src/app/assets/flags/vi.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/vi.0c164k5hbr83_.svg");}),
"[project]/apps/web/src/app/assets/flags/yo.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/yo.08p8tfb041qvh.svg");}),
"[project]/apps/web/src/app/assets/flags/zh-CN.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/zh-CN.0xbthc_a9bbwn.svg");}),
"[project]/apps/web/src/app/assets/flags/zh.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/zh.0xbthc_a9bbwn.svg");}),
"[project]/apps/web/src/app/assets/flags/zu.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/zu.1pxy20vfsgof_.svg");}),
]);

//# sourceMappingURL=apps_web_src_app_05k5wbaux7rgh._.js.map