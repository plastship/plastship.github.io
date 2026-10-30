(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionButton",
    ()=>ActionButton,
    "ActionLink",
    ()=>ActionLink,
    "Heading",
    ()=>Heading,
    "Hint",
    ()=>Hint,
    "Info",
    ()=>Info,
    "List",
    ()=>List,
    "Meta",
    ()=>Meta,
    "Name",
    ()=>Name,
    "Root",
    ()=>Root,
    "Row",
    ()=>Row,
    "RowActions",
    ()=>RowActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "AttachmentPreviewList.styles__Root",
    componentId: "sc-b50cfbe0-0"
})`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Heading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h4.withConfig({
    displayName: "AttachmentPreviewList.styles__Heading",
    componentId: "sc-b50cfbe0-1"
})`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme })=>theme.palette.default.black};
`;
const List = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "AttachmentPreviewList.styles__List",
    componentId: "sc-b50cfbe0-2"
})`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const Row = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "AttachmentPreviewList.styles__Row",
    componentId: "sc-b50cfbe0-3"
})`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  padding: 0.375rem 0.5rem;
  border-radius: 6px;
  background-color: ${({ theme })=>theme.palette.default.greyLight};
`;
const Info = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AttachmentPreviewList.styles__Info",
    componentId: "sc-b50cfbe0-4"
})`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;
const Name = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "AttachmentPreviewList.styles__Name",
    componentId: "sc-b50cfbe0-5"
})`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme })=>theme.palette.default.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Meta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "AttachmentPreviewList.styles__Meta",
    componentId: "sc-b50cfbe0-6"
})`
  font-size: 0.75rem;
  color: ${({ theme })=>theme.palette.default.secondary};
`;
const RowActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "AttachmentPreviewList.styles__RowActions",
    componentId: "sc-b50cfbe0-7"
})`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-shrink: 0;
`;
const action = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 6px;
  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;

  svg {
    width: 1rem;
    height: 1rem;
  }
`;
const ActionButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "AttachmentPreviewList.styles__ActionButton",
    componentId: "sc-b50cfbe0-8"
})`
  ${action}
  border: 1px solid ${({ theme })=>theme.palette.default.primary};
  background-color: transparent;
  color: ${({ theme })=>theme.palette.default.primary};

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 1px;
  }
`;
const ActionLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "AttachmentPreviewList.styles__ActionLink",
    componentId: "sc-b50cfbe0-9"
})`
  && {
    ${action}
    border: 1px solid ${({ theme })=>theme.palette.default.grey};
    color: ${({ theme })=>theme.palette.default.primary};
  }
`;
const Hint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "AttachmentPreviewList.styles__Hint",
    componentId: "sc-b50cfbe0-10"
})`
  margin: 0;
  font-size: 0.75rem;
  color: ${({ theme })=>theme.palette.default.secondary};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttachmentPreviewList",
    ()=>AttachmentPreviewList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileEye$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFileEye/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDownload$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDownload/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FileThumbnail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FileThumbnail/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FileThumbnail$2f$FileThumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FileThumbnail/FileThumbnail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$viewerItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/viewerItems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordFiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useRecordFiles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useFormatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$files$2f$filePreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/files/filePreview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.styles.ts [app-client] (ecmascript)");
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
const AttachmentPreviewList = ({ recordId, title, viewerLayer = 'dialog', dataTestId = 'attachment-preview-list' })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const fmt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"])();
    const { data, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordFiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordFiles"])(recordId);
    const files = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttachmentPreviewList.useMemo[files]": ()=>(data?.data ?? []).filter({
                "AttachmentPreviewList.useMemo[files]": (file)=>!!file.downloadUrl
            }["AttachmentPreviewList.useMemo[files]"])
    }["AttachmentPreviewList.useMemo[files]"], [
        data
    ]);
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "AttachmentPreviewList.useMemo[items]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$viewerItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salesforceFilesToViewerItems"])(files)
    }["AttachmentPreviewList.useMemo[items]"], [
        files
    ]);
    const [viewerIndex, setViewerIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const heading = title ?? tr('relatedFiles.title', {
        defaultValue: 'Anhänge'
    });
    const open = (fileId)=>{
        const index = items.findIndex((item)=>item.id === fileId);
        if (index >= 0) setViewerIndex(index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-testid": dataTestId,
        "data-count": files.length,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                children: heading
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
                "data-testid": `${dataTestId}-error`,
                children: tr('relatedFiles.loadError', {
                    defaultValue: 'Fehler beim Laden der Dateien.'
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : files.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hint"], {
                "data-testid": `${dataTestId}-empty`,
                children: tr('relatedFiles.empty', {
                    defaultValue: 'Keine Anhänge vorhanden.'
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["List"], {
                children: files.map((file, index)=>{
                    const item = items[index];
                    const kind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$files$2f$filePreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["previewKindForExtension"])(file.fileExtension);
                    const previewLabel = tr('relatedFiles.previewLabel', {
                        defaultValue: 'Vorschau von {{title}} öffnen',
                        title: file.title
                    });
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Row"], {
                        "data-testid": `${dataTestId}-item-${file.id}`,
                        "data-kind": kind ?? 'none',
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FileThumbnail$2f$FileThumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileThumbnail"], {
                                name: item.name,
                                extension: file.fileExtension,
                                kind: kind,
                                imageUrl: item.previewUrl,
                                onClick: ()=>open(file.id),
                                ariaLabel: previewLabel,
                                dataTestId: `${dataTestId}-thumb-${file.id}`
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                                lineNumber: 92,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Info"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Name"], {
                                        title: item.name,
                                        children: item.name
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                                        lineNumber: 102,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Meta"], {
                                        children: [
                                            fmt.fileSize(file.contentSize),
                                            " • ",
                                            fmt.date(file.lastModifiedDate)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                                lineNumber: 101,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RowActions"], {
                                children: [
                                    kind && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionButton"], {
                                        type: "button",
                                        onClick: ()=>open(file.id),
                                        "aria-label": previewLabel,
                                        title: tr('relatedFiles.preview', {
                                            defaultValue: 'Vorschau'
                                        }),
                                        "data-testid": `${dataTestId}-preview-${file.id}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileEye$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                                            lineNumber: 116,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                                        lineNumber: 109,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionLink"], {
                                        href: file.downloadUrl,
                                        "aria-label": tr('relatedFiles.downloadLabel', {
                                            defaultValue: '{{title}} herunterladen',
                                            title: file.title
                                        }),
                                        title: tr('relatedFiles.download', {
                                            defaultValue: 'Herunterladen'
                                        }),
                                        "data-testid": `${dataTestId}-download-${file.id}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDownload$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                                            lineNumber: 128,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                                lineNumber: 107,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, file.id, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                        lineNumber: 91,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            viewerIndex !== null && items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentViewer"], {
                items: items,
                index: viewerIndex,
                onIndexChange: setViewerIndex,
                onClose: ()=>setViewerIndex(null),
                layer: viewerLayer,
                dataTestId: `${dataTestId}-viewer`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
                lineNumber: 137,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AttachmentPreviewList, "uE7oObus1+cAgfx45YilUVQN4io=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordFiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordFiles"]
    ];
});
_c = AttachmentPreviewList;
var _c;
__turbopack_context__.k.register(_c, "AttachmentPreviewList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/AttentionBadge/AttentionBadge.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dot",
    ()=>Dot,
    "InheritedDot",
    ()=>InheritedDot,
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const pulse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keyframes"]`
  0% { box-shadow: 0 0 0 0 rgba(185, 28, 28, 0.45); }
  70% { box-shadow: 0 0 0 5px rgba(185, 28, 28, 0); }
  100% { box-shadow: 0 0 0 0 rgba(185, 28, 28, 0); }
`;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "AttentionBadge.styles__Root",
    componentId: "sc-a78e8119-0"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
// Eine visuelle Sprache (#421). AB-Review 2026-08-29: die status.*.text-Toene
// sind fuer Text auf hellem Grund gedacht — warning.text (#854d0e) wirkt als
// Punktfuellung braunrot und war von dringend nicht unterscheidbar. Deshalb
// eigene, klar getrennte Fuellfarben: Rot / Amber / Blau.
const DOT_COLORS = {
    dringend: '#dc2626',
    warnung: '#f59e0b',
    info: '#3b82f6'
};
const Dot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "AttentionBadge.styles__Dot",
    componentId: "sc-a78e8119-1"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${({ $level })=>DOT_COLORS[$level]};
  color: #ffffff;
  font-size: 10px;
  font-weight: 700;
  line-height: 1;
  cursor: default;
  user-select: none;

  ${({ $pulse })=>$pulse && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      animation: ${pulse} 2s infinite;
    `}
`;
const InheritedDot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "AttentionBadge.styles__InheritedDot",
    componentId: "sc-a78e8119-2"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid ${({ $level })=>DOT_COLORS[$level]};
  background-color: transparent;
  color: ${({ $level })=>DOT_COLORS[$level]};
  font-size: 9px;
  font-weight: 700;
  line-height: 1;
  cursor: default;
  user-select: none;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/AttentionBadge/AttentionBadge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttentionBadge",
    ()=>AttentionBadge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// AttentionBadge (#419/#421): EIN Renderer für Aufmerksamkeits-Indikatoren —
// identische Optik auf Tabellenzeile, Kanban-Karte und Drawer-/Detail-Kopf.
// Gefüllter Punkt = eigene Regeln des Datensatzes; Ring = von geladenen
// Kind-Datensätzen vererbte Regeln (Propagation Stufe 1, nur mit detailData).
// Tooltip nennt alle Gründe, bei dringend pulsiert der Punkt.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttentionBadge$2f$AttentionBadge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/AttentionBadge/AttentionBadge.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$indicators$2f$indicatorRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/indicators/indicatorRegistry.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Interne Prozess-Indikatoren sind nichts für Kundenrollen —
// gleiches Gate wie die Vollständigkeits-Ampel (TrafficLightCell).
const ROLES_WITHOUT_INDICATORS = new Set([
    'user',
    'rigk'
]);
const AttentionBadge = ({ entityType, record, detailData, className, dataTestId })=>{
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const anchorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const role = session?.user?.role;
    if (role && ROLES_WITHOUT_INDICATORS.has(role)) return null;
    const own = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$indicators$2f$indicatorRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIndicators"])(entityType, record);
    // Vererbung liest die __r-Collections: im Detail/Drawer der Voll-Fetch
    // (detailData), in Listen der Record selbst — die Listen-Routen haengen
    // die Kind-Records der LIST_INHERITANCE-Quellen an (attachIndicatorChildren).
    const inherited = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$indicators$2f$indicatorRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getInheritedIndicators"])(detailData ?? record);
    if (own.length === 0 && inherited.length === 0) return null;
    const tooltipLines = [
        ...own.map((indicator)=>tr(indicator.labelKey, {
                defaultValue: indicator.defaultLabel
            })),
        ...inherited.map((indicator)=>`${tr('indicators.inheritedPrefix', {
                defaultValue: 'Untergeordnet'
            })}: ${indicator.count}× ` + `${tr(indicator.labelKey, {
                defaultValue: indicator.defaultLabel
            })}`)
    ];
    const testId = dataTestId ?? (own.length > 0 ? `attention-badge-${own[0].rule}` : `attention-badge-inherited-${inherited[0].rule}`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttentionBadge$2f$AttentionBadge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: anchorRef,
        className: className,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        "data-testid": testId,
        children: [
            own.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttentionBadge$2f$AttentionBadge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dot"], {
                $level: own[0].level,
                $pulse: own[0].level === 'dringend',
                children: "!"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/AttentionBadge/AttentionBadge.tsx",
                lineNumber: 80,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            inherited.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttentionBadge$2f$AttentionBadge$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InheritedDot"], {
                $level: inherited[0].level,
                "data-testid": `${testId}-inherited`,
                children: "!"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/AttentionBadge/AttentionBadge.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                content: tooltipLines.join('\n'),
                isVisible: hovered,
                position: "bottom",
                anchorRef: anchorRef
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/AttentionBadge/AttentionBadge.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/AttentionBadge/AttentionBadge.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AttentionBadge, "ushADFrMfwiYD9K+dRQQSoEP9oI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = AttentionBadge;
;
var _c;
__turbopack_context__.k.register(_c, "AttentionBadge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/AttentionBadge/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttentionBadge$2f$AttentionBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/AttentionBadge/AttentionBadge.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CreateEntityButton/CreateEntityButton.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "TooltipWrapper",
    ()=>TooltipWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CreateEntityButton.styles__Root",
    componentId: "sc-4d2da934-0"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  transition: all 0.15s ease-in-out;

  width: ${(props)=>props.$size === 'small' ? '24px' : '32px'};
  height: ${(props)=>props.$size === 'small' ? '24px' : '32px'};

  color: ${(props)=>props.theme.palette.default.grey || '#666'};

  &:hover {
    background-color: ${(props)=>props.theme.palette.default.secondary || '#37BA24'};
    color: ${(props)=>props.theme.palette.default.white || '#fff'};

    svg path,
    svg line,
    svg circle {
      stroke: ${(props)=>props.theme.palette.default.white || '#fff'};
    }
  }

  &:focus {
    outline: 2px solid ${(props)=>props.theme.palette.default.primary || '#00416E'};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  svg {
    width: ${(props)=>props.$size === 'small' ? '16px' : '20px'};
    height: ${(props)=>props.$size === 'small' ? '16px' : '20px'};
  }
`;
const TooltipWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CreateEntityButton.styles__TooltipWrapper",
    componentId: "sc-4d2da934-1"
})`
  position: relative;
  display: inline-flex;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CreateEntityButton/CreateEntityButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateEntityButton",
    ()=>CreateEntityButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CreateEntityButton$2f$CreateEntityButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CreateEntityButton/CreateEntityButton.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlus/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/ModalContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityFormRegistry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
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
const CreateEntityButton = ({ entityType, parentEntityId, parentEntityType, tooltip, onSuccess, size = 'small', initialValues, disabled = false, dataTestId = 'create-entity-button', className })=>{
    _s();
    const { openCreateModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const displayName = entityText.text(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_DISPLAY_NAMES"][entityType] || entityType);
    const tooltipText = tooltip || tr('relatedLists.createTooltip', {
        defaultValue: 'Create {{label}}',
        label: displayName
    });
    const handleClick = ()=>{
        if (disabled) return;
        openCreateModal({
            entityType,
            parentEntityId,
            parentEntityType,
            initialValues,
            onSuccess
        });
    };
    // #2071: Objekte mit eigenem Anlege-Weg bekommen keinen generischen Plus-Knopf
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsGenericCreate"])(entityType)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CreateEntityButton$2f$CreateEntityButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipWrapper"], {
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CreateEntityButton$2f$CreateEntityButton$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
                type: "button",
                onClick: handleClick,
                disabled: disabled,
                $size: size,
                className: className,
                "data-testid": dataTestId,
                "aria-label": tooltipText,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/CreateEntityButton/CreateEntityButton.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CreateEntityButton/CreateEntityButton.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                content: tooltipText,
                isVisible: isHovered && !disabled,
                position: "bottom"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/CreateEntityButton/CreateEntityButton.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/CreateEntityButton/CreateEntityButton.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CreateEntityButton, "vfZ7Zc4dl2hGqPqdBTl7UlCT7fE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"]
    ];
});
_c = CreateEntityButton;
;
var _c;
__turbopack_context__.k.register(_c, "CreateEntityButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/CreateEntityButton/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CreateEntityButton$2f$CreateEntityButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CreateEntityButton/CreateEntityButton.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/EmptyState/EmptyState.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActionSlot",
    ()=>ActionSlot,
    "Container",
    ()=>Container,
    "Description",
    ()=>Description,
    "IconWrapper",
    ()=>IconWrapper,
    "Title",
    ()=>Title
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
'use client';
;
;
;
const SIZE_PADDING = {
    small: '1rem',
    medium: '3rem 1.5rem',
    large: '4rem 1.5rem'
};
const Container = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EmptyState.styles__Container",
    componentId: "sc-3a7a8dd2-0"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  padding: ${({ $size })=>SIZE_PADDING[$size]};
  ${({ $size })=>$size === 'large' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      min-height: 18rem;
    `}
  color: ${({ theme, $variant })=>$variant === 'error' ? theme.palette.status.error.text : theme.palette.text.secondary};
`;
const IconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EmptyState.styles__IconWrapper",
    componentId: "sc-3a7a8dd2-1"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme })=>theme.margin.small};
  color: ${({ theme, $variant })=>$variant === 'error' ? theme.palette.status.error.text : theme.palette.text.muted};

  svg {
    width: ${({ $size })=>$size === 'small' ? '1.75rem' : '3rem'};
    height: ${({ $size })=>$size === 'small' ? '1.75rem' : '3rem'};
  }
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h3.withConfig({
    displayName: "EmptyState.styles__Title",
    componentId: "sc-3a7a8dd2-2"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextStyles"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].body)}
  font-weight: 600;
  margin: 0 0 ${({ theme })=>theme.margin.extrasmall};
  color: ${({ theme, $variant })=>$variant === 'error' ? theme.palette.status.error.text : theme.palette.text.primary};
`;
const Description = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "EmptyState.styles__Description",
    componentId: "sc-3a7a8dd2-3"
})`
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextStyles"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].bodysmall)}
  margin: 0;
  max-width: 24rem;
  color: inherit;
`;
const ActionSlot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EmptyState.styles__ActionSlot",
    componentId: "sc-3a7a8dd2-4"
})`
  margin-top: ${({ theme })=>theme.margin.default};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/EmptyState/EmptyState.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyState",
    ()=>EmptyState,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$EmptyState$2f$EmptyState$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/EmptyState/EmptyState.styles.ts [app-client] (ecmascript)");
;
;
const EmptyState = ({ icon, title, description, children, size = 'medium', variant = 'default', className, dataTestId = 'empty-state' })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$EmptyState$2f$EmptyState$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Container"], {
        className: className,
        "data-testid": dataTestId,
        $size: size,
        $variant: variant,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$EmptyState$2f$EmptyState$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWrapper"], {
                $size: size,
                $variant: variant,
                children: icon
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/EmptyState/EmptyState.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$EmptyState$2f$EmptyState$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                $variant: variant,
                children: title
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/EmptyState/EmptyState.tsx",
                lineNumber: 43,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$EmptyState$2f$EmptyState$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Description"], {
                children: description
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/EmptyState/EmptyState.tsx",
                lineNumber: 44,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$EmptyState$2f$EmptyState$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ActionSlot"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/EmptyState/EmptyState.tsx",
                lineNumber: 45,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/EmptyState/EmptyState.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = EmptyState;
const __TURBOPACK__default__export__ = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/EmptyState/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$EmptyState$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/EmptyState/EmptyState.tsx [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$EmptyState$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"];
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerLegend.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldMarkerLegend",
    ()=>FieldMarkerLegend
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const FieldMarkerLegend = ({ document, shared, qualification, dataTestId = 'field-origin-legend' })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    if (!document && !shared && !qualification) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
        "data-testid": dataTestId,
        children: [
            document && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LegendItem"], {
                "data-testid": `${dataTestId}-document`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LegendSwatch"], {
                        $tone: "document"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerLegend.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    tr('entityDetail.fieldOrigin.documentLegend', {
                        defaultValue: 'Fließt in Dokumente ein'
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerLegend.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            shared && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LegendItem"], {
                "data-testid": `${dataTestId}-shared`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LegendSwatch"], {
                        $tone: "shared"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerLegend.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    tr('entityDetail.fieldOrigin.sharedLegend', {
                        defaultValue: 'Mit dem Kunden geteilt'
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerLegend.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            qualification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LegendItem"], {
                "data-testid": `${dataTestId}-qualification`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LegendSwatch"], {
                        $tone: "qualification",
                        $unmet: true
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerLegend.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    tr('entityDetail.fieldOrigin.qualificationLegend', {
                        defaultValue: 'Qualifizierungsrelevant (kräftig = Bedingung noch offen)'
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerLegend.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerLegend.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FieldMarkerLegend, "A48qdLdlHx0As3VD+PF2fl+BV48=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = FieldMarkerLegend;
;
var _c;
__turbopack_context__.k.register(_c, "FieldMarkerLegend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bar",
    ()=>Bar,
    "FIELD_MARKER_TONE_COLORS",
    ()=>FIELD_MARKER_TONE_COLORS,
    "Legend",
    ()=>Legend,
    "LegendItem",
    ()=>LegendItem,
    "LegendSwatch",
    ()=>LegendSwatch,
    "MarkedFieldWrap",
    ()=>MarkedFieldWrap,
    "Rail",
    ()=>Rail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
'use client';
;
;
const FIELD_MARKER_TONE_COLORS = {
    document: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].INFO,
    shared: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].SUCCESS,
    qualification: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PURPLE
};
const MarkedFieldWrap = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FieldMarkerRail.styles__MarkedFieldWrap",
    componentId: "sc-9b3063ef-0"
})`
  position: relative;
  padding-left: 10px;
`;
const Rail = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "FieldMarkerRail.styles__Rail",
    componentId: "sc-9b3063ef-1"
})`
  position: absolute;
  left: 0;
  top: 2px;
  bottom: 2px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 4px;
`;
const Bar = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "FieldMarkerRail.styles__Bar",
    componentId: "sc-9b3063ef-2"
})`
  flex: 1;
  width: 4px;
  border-radius: 2px;
  background: ${({ $tone })=>FIELD_MARKER_TONE_COLORS[$tone]};
  /* #844: kräftig = Stufen-Bedingung noch offen, dezent = erfüllt */
  opacity: ${({ $unmet })=>$unmet ? 1 : 0.55};
  cursor: help;
`;
const Legend = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "FieldMarkerRail.styles__Legend",
    componentId: "sc-9b3063ef-3"
})`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;
const LegendItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "FieldMarkerRail.styles__LegendItem",
    componentId: "sc-9b3063ef-4"
})`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_DARK};
`;
const LegendSwatch = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "FieldMarkerRail.styles__LegendSwatch",
    componentId: "sc-9b3063ef-5"
})`
  width: 4px;
  height: 14px;
  border-radius: 2px;
  background: ${({ $tone })=>FIELD_MARKER_TONE_COLORS[$tone]};
  opacity: ${({ $unmet })=>$unmet ? 1 : 0.55};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldMarkerRail",
    ()=>FieldMarkerRail,
    "hasAnyFieldMarker",
    ()=>hasAnyFieldMarker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$qualificationFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/qualificationFields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function hasAnyFieldMarker(props) {
    return Boolean(props.document || props.shared || props.qualification);
}
const FieldMarkerRail = ({ fieldName, document, shared, qualification, testIdPrefix = '' })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    if (!hasAnyFieldMarker({
        document,
        shared,
        qualification
    })) return null;
    const prefix = `${testIdPrefix}field-origin`;
    const unmet = qualification ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$qualificationFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasUnmetQualificationCriterion"])(qualification.criteria, qualification.value, qualification.record) : false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rail"], {
        "data-testid": `${prefix}-rail-${fieldName}`,
        children: [
            document && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                $tone: "document",
                title: tr('entityDetail.fieldOrigin.documentTooltip', {
                    defaultValue: 'Fließt in Dokumente ein'
                }),
                "data-testid": `${prefix}-document-${fieldName}`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.tsx",
                lineNumber: 82,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            shared && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                $tone: "shared",
                title: tr('entityDetail.fieldOrigin.sharedTooltip', {
                    defaultValue: 'Mit dem Kunden geteilt'
                }),
                "data-testid": `${prefix}-shared-${fieldName}`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            qualification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                $tone: "qualification",
                $unmet: unmet,
                // strukturierter Zustand fürs Testen (kein Style-Assert nötig)
                "data-unmet": unmet ? 'true' : 'false',
                title: tr('entityDetail.fieldOrigin.qualificationTooltip', {
                    defaultValue: 'Qualifizierungsrelevant'
                }) + '\n' + (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$qualificationFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatQualificationCriteria"])(qualification.criteria, qualification.value, qualification.record, (text)=>entityText.text(text)),
                "data-testid": `${prefix}-qualification-${fieldName}`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.tsx",
                lineNumber: 100,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FieldMarkerRail, "H2fUXUJFQMgBJlaIM85EK/GJRNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"]
    ];
});
_c = FieldMarkerRail;
;
var _c;
__turbopack_context__.k.register(_c, "FieldMarkerRail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerLegend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerLegend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.styles.ts [app-client] (ecmascript)");
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldMarkerRail"];
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FileThumbnail/FileThumbnail.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThumbButton",
    ()=>ThumbButton,
    "ThumbStatic",
    ()=>ThumbStatic,
    "TypeLabel",
    ()=>TypeLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const dimensions = {
    small: '2.5rem',
    medium: '3.5rem'
};
const frame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  width: ${({ $size })=>dimensions[$size]};
  height: ${({ $size })=>dimensions[$size]};
  flex-shrink: 0;
  padding: 0;
  overflow: hidden;
  border: 1px solid ${({ theme })=>theme.palette.default.greyLight};
  border-radius: 6px;
  background-color: ${({ theme })=>theme.palette.default.primary}12;
  color: ${({ theme })=>theme.palette.default.primary};
  font-family: inherit;
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  svg {
    width: 1.125rem;
    height: 1.125rem;
  }
`;
const ThumbButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "FileThumbnail.styles__ThumbButton",
    componentId: "sc-3f23192f-0"
})`
  ${frame}
  cursor: pointer;

  &:hover {
    border-color: ${({ theme })=>theme.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 1px;
  }
`;
const ThumbStatic = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "FileThumbnail.styles__ThumbStatic",
    componentId: "sc-3f23192f-1"
})`
  ${frame}
`;
const TypeLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "FileThumbnail.styles__TypeLabel",
    componentId: "sc-3f23192f-2"
})`
  font-size: 0.5625rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FileThumbnail/FileThumbnail.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileThumbnail",
    ()=>FileThumbnail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$fileTypeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/fileTypeIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FileThumbnail$2f$FileThumbnail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FileThumbnail/FileThumbnail.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const FileThumbnail = ({ name, extension, kind, imageUrl, onClick, ariaLabel, size = 'small', dataTestId = 'file-thumbnail' })=>{
    _s();
    const [imageFailed, setImageFailed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const showImage = kind === 'image' && !!imageUrl && !imageFailed;
    const label = (extension ?? '').replace(/^\.+/, '').slice(0, 5);
    const content = showImage ? // eslint-disable-next-line @next/next/no-img-element -- authentifizierte API-Route, kein next/image
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: imageUrl,
        alt: "",
        loading: "lazy",
        onError: ()=>setImageFailed(true)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FileThumbnail/FileThumbnail.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$fileTypeIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fileTypeIcon"])(name),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FileThumbnail$2f$FileThumbnail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TypeLabel"], {
                children: label
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/FileThumbnail/FileThumbnail.tsx",
                lineNumber: 54,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FileThumbnail/FileThumbnail.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const dataProps = {
        'data-testid': dataTestId,
        'data-kind': kind ?? 'none',
        'data-thumbnail': showImage ? 'image' : 'tile'
    };
    if (onClick) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FileThumbnail$2f$FileThumbnail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThumbButton"], {
            type: "button",
            $size: size,
            onClick: onClick,
            "aria-label": ariaLabel,
            ...dataProps,
            children: content
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/FileThumbnail/FileThumbnail.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FileThumbnail$2f$FileThumbnail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThumbStatic"], {
        $size: size,
        "aria-hidden": "true",
        ...dataProps,
        children: content
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FileThumbnail/FileThumbnail.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FileThumbnail, "J/DE58sO7UnFuUylWstCz93Av2c=");
_c = FileThumbnail;
var _c;
__turbopack_context__.k.register(_c, "FileThumbnail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FileThumbnail/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FileThumbnail$2f$FileThumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FileThumbnail/FileThumbnail.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FilterField/FilterField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterField",
    ()=>FilterField,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const FilterField = ({ name, label, hideLabel, value, fieldType = 'text', onChange, options, listMaxHeight, lookupObjectType, placeholder, disabled, dataTestId })=>{
    _s();
    const testId = dataTestId || `filter-field-${name}`;
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "FilterField.useCallback[handleChange]": (_fieldName, next)=>{
            onChange(next);
        }
    }["FilterField.useCallback[handleChange]"], [
        onChange
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableField"], {
        fieldName: name,
        label: label,
        hideLabel: hideLabel,
        value: value,
        fieldType: fieldType,
        // When disabled, drop out of editing mode so the value renders as plain
        // text and the user can't change it — EditableField's `isEditing` always
        // overrides the per-field click-to-edit lifecycle.
        isEditing: !disabled,
        isEditable: !disabled,
        readOnly: disabled,
        hideEditActions: true,
        compact: true,
        onChange: handleChange,
        options: options,
        listMaxHeight: listMaxHeight,
        lookupObjectType: lookupObjectType,
        placeholder: placeholder,
        dataTestId: testId
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/FilterField/FilterField.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FilterField, "y/H5GIiu8jog9Hni7mlqNguo+do=");
_c = FilterField;
const __TURBOPACK__default__export__ = FilterField;
var _c;
__turbopack_context__.k.register(_c, "FilterField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/FilterField/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FilterField$2f$FilterField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FilterField/FilterField.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HtmlPreview/HtmlPreview.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PreviewContent",
    ()=>PreviewContent,
    "PreviewRoot",
    ()=>PreviewRoot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/theme.ts [app-client] (ecmascript)");
'use client';
;
;
/**
 * #1985: Vorschau von eigenem HTML (Signaturen, Kampagnen, Vorlagen) und
 * fremdem HTML (Postfach, Kalender, Chat) ohne Frame. Der Rahmen wächst mit dem Inhalt (keine feste Höhe) und hat das
 * Standard-Padding aus dem Theme.
 */ /** Papierweiß wie im hellen Theme — Mail-HTML bleibt auch im Dunkelmodus weiß. */ const PAPER_BACKGROUND = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.default.white;
const PAPER_TEXT = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$theme$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["themePlastship"].palette.text.primary;
const PreviewRoot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HtmlPreview.styles__PreviewRoot",
    componentId: "sc-fc596a0e-0"
})`
  /* #1985: Inhalt kann nie über die App hinauslaufen — eigener Stapelkontext,
     Layout/Paint/Style eingeschlossen, Überlauf bleibt im Rahmen. */
  position: relative;
  z-index: 0;
  isolation: isolate;
  contain: layout paint style;
  overflow: auto;
  max-height: ${({ $maxHeight })=>$maxHeight ?? 'none'};
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  max-width: 100%;
  padding: ${({ theme, $bare })=>$bare ? '0' : theme.padding.default};
  border: ${({ theme, $bare })=>$bare ? 'none' : `1px solid ${theme.palette.border.default}`};
  border-radius: 6px;
  /* ohne paper liegt das HTML auf der Fläche der Karte */
  background: ${({ $paper })=>$paper ? PAPER_BACKGROUND : 'transparent'};
  color: ${({ theme, $paper, $bare })=>$paper ? PAPER_TEXT : $bare ? 'inherit' : theme.palette.text.primary};
  overflow-wrap: anywhere;
`;
const PreviewContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "HtmlPreview.styles__PreviewContent",
    componentId: "sc-fc596a0e-1"
})`
  all: initial;
  display: block;
  min-width: 0;
  color: inherit;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  overflow-wrap: anywhere;

  && *,
  && *::before,
  && *::after {
    all: revert;
  }

  && img {
    max-width: 100%;
  }

  /* bare (Chat-Blase): Links in der Textfarbe der Blase, sonst Browser-Blau
     auf der Primärfarbe der eigenen Nachricht */
  ${({ $bare })=>$bare ? `
  && a {
    color: inherit;
    text-decoration: underline;
  }` : ''}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HtmlPreview/HtmlPreview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HtmlPreview",
    ()=>HtmlPreview,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$security$2f$htmlPolicy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/security/htmlPolicy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$htmlPolicyReport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/htmlPolicyReport.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HtmlPreview$2f$HtmlPreview$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HtmlPreview/HtmlPreview.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const HtmlPreview = ({ html, dataTestId = 'html-preview', paper = false, title, mode = 'own', maxHeight, className, dataAttributes, allowExternalImages = false, bare = false })=>{
    _s();
    const clean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "HtmlPreview.useMemo[clean]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$security$2f$htmlPolicy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanitizeTrustedHtml"])(html, mode, {
                report: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$htmlPolicyReport$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reportHtmlPolicyRemovals"],
                allowExternalImages: mode === 'mail' && allowExternalImages
            })
    }["HtmlPreview.useMemo[clean]"], [
        html,
        mode,
        allowExternalImages
    ]);
    const dataProps = {};
    for (const [key, value] of Object.entries(dataAttributes ?? {})){
        if (value !== undefined) dataProps[`data-${key}`] = value;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HtmlPreview$2f$HtmlPreview$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewRoot"], {
        className: className,
        $paper: paper,
        $bare: bare,
        $maxHeight: maxHeight,
        "data-testid": dataTestId,
        "data-paper": paper ? 'true' : 'false',
        role: title ? 'region' : undefined,
        "aria-label": title,
        ...dataProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HtmlPreview$2f$HtmlPreview$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PreviewContent"], {
            $bare: bare,
            "data-testid": `${dataTestId}-content`,
            dangerouslySetInnerHTML: {
                __html: clean
            }
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/HtmlPreview/HtmlPreview.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/HtmlPreview/HtmlPreview.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HtmlPreview, "0jh3+2MSRdXthfLNm2h1bRu0NGs=");
_c = HtmlPreview;
const __TURBOPACK__default__export__ = HtmlPreview;
var _c;
__turbopack_context__.k.register(_c, "HtmlPreview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/HtmlPreview/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HtmlPreview$2f$HtmlPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HtmlPreview/HtmlPreview.tsx [app-client] (ecmascript)");
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
"[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorText",
    ()=>ErrorText,
    "Input",
    ()=>Input,
    "Tag",
    ()=>Tag,
    "TagRemove",
    ()=>TagRemove,
    "TagsContainer",
    ()=>TagsContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const TagsContainer = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "MailRecipientsField.styles__TagsContainer",
    componentId: "sc-79985046-0"
})`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px 0;
`;
const Tag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "MailRecipientsField.styles__Tag",
    componentId: "sc-79985046-1"
})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  border-radius: 12px;
  background: ${({ theme })=>theme.palette.default.primary};
  color: ${({ theme })=>theme.palette.default.white};
  font-size: 0.75rem;
  font-weight: 500;
`;
const TagRemove = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "MailRecipientsField.styles__TagRemove",
    componentId: "sc-79985046-2"
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font-size: 0.75rem;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "MailRecipientsField.styles__Input",
    componentId: "sc-79985046-3"
})`
  padding: 8px 12px;
  border: 1px solid ${({ theme })=>theme.palette.default.grey};
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${({ theme })=>theme.palette.default.black};
  background: ${({ theme })=>theme.palette.default.white};
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme })=>theme.palette.default.primary};
  }

  &::placeholder {
    color: ${({ theme })=>theme.palette.default.greyDark};
  }
`;
const ErrorText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "MailRecipientsField.styles__ErrorText",
    componentId: "sc-79985046-4"
})`
  font-size: 0.75rem;
  color: ${({ theme })=>theme.palette.default.error};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MailRecipientsField",
    ()=>MailRecipientsField,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail/address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MailRecipientsField$2f$MailRecipientsField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.styles.ts [app-client] (ecmascript)");
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
const MailRecipientsField = ({ inputId, values, onChange, placeholder, reportErrors = true, error, onInput, inputTestId, removeTestIdPrefix, contactTestId, contactFieldName, dataTestId })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [inputError, setInputError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [pickerKey, setPickerKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Die Kontaktsuche schreibt nach einem await — dann gilt der Stand von
    // JETZT, nicht der beim Klick (sonst gingen inzwischen getippte Adressen verloren).
    const valuesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(values);
    valuesRef.current = values;
    const addAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MailRecipientsField.useCallback[addAddress]": (raw)=>{
            const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeMailAddress"])(raw);
            if (!address) return;
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMailAddress"])(address)) {
                if (reportErrors) {
                    setInputError(tr('mail.send.invalidAddress', {
                        defaultValue: 'Ungültige E-Mail-Adresse'
                    }));
                }
                return;
            }
            if (values.includes(address)) {
                if (reportErrors) {
                    setInputError(tr('mail.send.duplicateRecipient', {
                        defaultValue: 'Empfänger bereits hinzugefügt'
                    }));
                }
                return;
            }
            onChange([
                ...values,
                address
            ]);
            setInputValue('');
            setInputError('');
        }
    }["MailRecipientsField.useCallback[addAddress]"], [
        values,
        onChange,
        reportErrors,
        tr
    ]);
    const removeAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MailRecipientsField.useCallback[removeAddress]": (address)=>onChange(values.filter({
                "MailRecipientsField.useCallback[removeAddress]": (value)=>value !== address
            }["MailRecipientsField.useCallback[removeAddress]"]))
    }["MailRecipientsField.useCallback[removeAddress]"], [
        values,
        onChange
    ]);
    const addContact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "MailRecipientsField.useCallback[addContact]": async (contactId)=>{
            if (typeof contactId !== 'string' || !contactId) return;
            try {
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/salesforce/contact/${contactId}/`);
                const email = response.data?.data?.Email?.trim().toLowerCase();
                if (!email) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('mail.send.contactWithoutEmail', {
                        defaultValue: 'Der Kontakt hat keine E-Mail-Adresse'
                    }));
                    return;
                }
                const current = valuesRef.current;
                if (!current.includes(email)) onChange([
                    ...current,
                    email
                ]);
                setInputError('');
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('mail.send.contactLoadError', {
                    defaultValue: 'Kontakt konnte nicht geladen werden'
                }));
            } finally{
                setPickerKey({
                    "MailRecipientsField.useCallback[addContact]": (key)=>key + 1
                }["MailRecipientsField.useCallback[addContact]"]);
            }
        }
    }["MailRecipientsField.useCallback[addContact]"], [
        onChange,
        tr
    ]);
    const shownError = inputError || error;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            values.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MailRecipientsField$2f$MailRecipientsField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TagsContainer"], {
                "data-testid": dataTestId,
                children: values.map((address)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MailRecipientsField$2f$MailRecipientsField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tag"], {
                        children: [
                            address,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MailRecipientsField$2f$MailRecipientsField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TagRemove"], {
                                type: "button",
                                onClick: ()=>removeAddress(address),
                                "aria-label": tr('mail.composer.removeRecipient', {
                                    defaultValue: '{{address}} entfernen',
                                    address
                                }),
                                "data-testid": `${removeTestIdPrefix}${address}`,
                                children: "x"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.tsx",
                                lineNumber: 138,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, address, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.tsx",
                lineNumber: 134,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MailRecipientsField$2f$MailRecipientsField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                id: inputId,
                type: "email",
                value: inputValue,
                onChange: (event)=>{
                    setInputValue(event.target.value);
                    setInputError('');
                    onInput?.();
                },
                onKeyDown: (event)=>{
                    // Tab nur abfangen, wenn etwas zu übernehmen ist — sonst wäre das
                    // Feld eine Tab-Falle und die Tastatur käme nicht weiter.
                    if (event.key === 'Tab' && !inputValue.trim()) return;
                    if (event.key === 'Enter' || event.key === ',' || event.key === 'Tab') {
                        event.preventDefault();
                        addAddress(inputValue);
                    }
                },
                onBlur: ()=>{
                    if (inputValue.trim()) addAddress(inputValue);
                },
                placeholder: placeholder,
                "aria-invalid": shownError ? true : undefined,
                "data-testid": inputTestId
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableField"], {
                fieldName: contactFieldName,
                label: tr('mail.send.searchContact', {
                    defaultValue: 'Kontakt suchen'
                }),
                fieldType: "lookup",
                lookupObjectType: "Contact",
                value: "",
                isEditable: true,
                isEditing: true,
                hideEditActions: true,
                compact: true,
                placeholder: tr('mail.send.searchContactPlaceholder', {
                    defaultValue: 'Name oder E-Mail des Kontakts'
                }),
                onChange: (_field, value)=>void addContact(value),
                dataTestId: contactTestId
            }, `${contactFieldName}-${pickerKey}`, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            shownError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MailRecipientsField$2f$MailRecipientsField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorText"], {
                children: shownError
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.tsx",
                lineNumber: 195,
                columnNumber: 22
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MailRecipientsField, "BRjTFx7hugFEmXcF780WUh6YVlo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c = MailRecipientsField;
const __TURBOPACK__default__export__ = MailRecipientsField;
var _c;
__turbopack_context__.k.register(_c, "MailRecipientsField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/MailRecipientsField/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MailRecipientsField$2f$MailRecipientsField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/QuickStatusField/QuickStatusField.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root,
    "ToneDot",
    ()=>ToneDot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "QuickStatusField.styles__Root",
    componentId: "sc-f1d09a91-0"
})`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  min-width: 0;
`;
const ToneDot = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "QuickStatusField.styles__ToneDot",
    componentId: "sc-f1d09a91-1"
})`
  flex-shrink: 0;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background: ${({ theme, $tone })=>theme.palette.status[$tone].text};
  border: 1px solid ${({ theme, $tone })=>theme.palette.status[$tone].border};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/QuickStatusField/QuickStatusField.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuickStatusField",
    ()=>QuickStatusField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * QuickStatusField (#420)
 *
 * Schnellstatus-Wechsel: ein immer-editierendes Status-Dropdown für den
 * Detail-Header und den Side-Drawer. Werteliste kommt ausschließlich aus der
 * zentralen Status-Registry (eine Quelle mit den Kanban-Boards); die Farbe
 * folgt getStatusTone wie bei der bisherigen read-only StatusPill.
 *
 * Verhalten: optimistisches Update — der neue Wert wird sofort angezeigt;
 * lehnt `onStatusChange` ab (rejected Promise), wird auf den letzten
 * Server-Wert zurückgesetzt und ein Fehler-Toast gezeigt. Erfolgs-Feedback
 * liegt beim Aufrufer (Detail-View-Save-Kette bzw. Drawer-Handler).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FilterField$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FilterField/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FilterField$2f$FilterField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FilterField/FilterField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$status$2f$statusRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/status/statusRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$statusTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/statusTone.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Toast$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Toast/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Toast$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Toast/Toast.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickStatusField$2f$QuickStatusField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/QuickStatusField/QuickStatusField.styles.ts [app-client] (ecmascript)");
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
const QuickStatusField = ({ entityType, value, onStatusChange, disabled, dataTestId, className })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    const [optimisticValue, setOptimisticValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Neuer Server-Wert (Refetch nach Save) gewinnt immer über den optimistischen.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "QuickStatusField.useEffect": ()=>{
            setOptimisticValue(null);
        }
    }["QuickStatusField.useEffect"], [
        value
    ]);
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$status$2f$statusRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusConfig"])(entityType);
    const handleChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickStatusField.useCallback[handleChange]": async (next)=>{
            if (typeof next !== 'string' || next === '' || isSaving) return;
            const previous = optimisticValue ?? value ?? null;
            if (next === previous) return;
            setOptimisticValue(next);
            setIsSaving(true);
            try {
                await onStatusChange(next);
            } catch (error) {
                setOptimisticValue(null);
                // #1553: dieser Toast ist die einzige Meldung eines gescheiterten
                // Schnellstatus — die Detailseiten melden nicht mehr selbst. Deshalb
                // trägt er die Server-Meldung (Salesforce-Ablehnung) wie das Layout.
                const title = tr('quickStatus.updateError', {
                    defaultValue: 'Status konnte nicht geändert werden'
                });
                const serverMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApiErrorMessage"])(error, '');
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(serverMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Toast$2f$Toast$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContent"], {
                    title: title,
                    message: serverMessage
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/QuickStatusField/QuickStatusField.tsx",
                    lineNumber: 85,
                    columnNumber: 27
                }, ("TURBOPACK compile-time value", void 0)) : title, {
                    persistTitleKey: 'quickStatus.updateError',
                    persistTitleDefault: title,
                    ...serverMessage ? {
                        persistMessageDefault: serverMessage
                    } : {}
                });
            } finally{
                setIsSaving(false);
            }
        }
    }["QuickStatusField.useCallback[handleChange]"], [
        isSaving,
        optimisticValue,
        value,
        onStatusChange,
        tr
    ]);
    if (!config) return null;
    const shownValue = optimisticValue ?? value ?? '';
    const testId = dataTestId || `quick-status-${config.field}`;
    // #1626: Status-Labels in der Sprache des Nutzers (Wert bleibt der SF-Wert)
    const options = entityText.options(config.columns.map((column)=>({
            value: column.key,
            label: column.label
        })));
    return(// #511 F1: data-value = optimistischer Header-Wert (shownValue). Live-UI-
    // Signal — die Persistenz wird über das Section-Feld nach Reload geprüft,
    // nicht hierüber (shownValue kann ein noch nicht committetes Update sein).
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickStatusField$2f$QuickStatusField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": `${testId}-root`,
        "data-value": String(shownValue),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickStatusField$2f$QuickStatusField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToneDot"], {
                $tone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$statusTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusTone"])(shownValue),
                "data-testid": `${testId}-tone`,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/QuickStatusField/QuickStatusField.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FilterField$2f$FilterField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterField"], {
                name: config.field,
                hideLabel: true,
                value: shownValue,
                fieldType: "picklist",
                onChange: handleChange,
                options: options,
                disabled: disabled || isSaving,
                dataTestId: testId
            }, String(shownValue), false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/QuickStatusField/QuickStatusField.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/QuickStatusField/QuickStatusField.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)));
};
_s(QuickStatusField, "jVab6yFYnxc4B5OlCRsNsl2L+qo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"]
    ];
});
_c = QuickStatusField;
;
var _c;
__turbopack_context__.k.register(_c, "QuickStatusField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/QuickStatusField/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickStatusField$2f$QuickStatusField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/QuickStatusField/QuickStatusField.tsx [app-client] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickStatusField$2f$QuickStatusField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickStatusField"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CellLink",
    ()=>CellLink,
    "CellQuickOpenButton",
    ()=>CellQuickOpenButton,
    "EmptyState",
    ()=>EmptyState,
    "EmptyStateText",
    ()=>EmptyStateText,
    "Header",
    ()=>Header,
    "HeaderActionButton",
    ()=>HeaderActionButton,
    "HeaderRight",
    ()=>HeaderRight,
    "IconWrapper",
    ()=>IconWrapper,
    "InlineEditCell",
    ()=>InlineEditCell,
    "LoadErrorBox",
    ()=>LoadErrorBox,
    "LoadErrorText",
    ()=>LoadErrorText,
    "MutedCell",
    ()=>MutedCell,
    "PickerContent",
    ()=>PickerContent,
    "RecordCount",
    ()=>RecordCount,
    "RetryButton",
    ()=>RetryButton,
    "Root",
    ()=>Root,
    "StatusChip",
    ()=>StatusChip,
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCell",
    ()=>TableCell,
    "TableCellActions",
    ()=>TableCellActions,
    "TableHead",
    ()=>TableHead,
    "TableHeadCell",
    ()=>TableHeadCell,
    "TableHeadCellActions",
    ()=>TableHeadCellActions,
    "TableRow",
    ()=>TableRow,
    "TableWrapper",
    ()=>TableWrapper,
    "Title",
    ()=>Title,
    "UnlinkButton",
    ()=>UnlinkButton,
    "ViewLink",
    ()=>ViewLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RelatedListTable.styles__Root",
    componentId: "sc-4ed05743-0"
})`
  padding: 1rem;
  background-color: ${({ theme })=>theme.palette.default.white};
  border-radius: ${({ theme })=>theme.borderRadius.box};
  border: 1px solid ${({ theme })=>theme.palette.border.default};
`;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RelatedListTable.styles__Header",
    componentId: "sc-4ed05743-1"
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${({ theme })=>theme.palette.border.default};
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h4.withConfig({
    displayName: "RelatedListTable.styles__Title",
    componentId: "sc-4ed05743-2"
})`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme })=>theme.palette.text.primary};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const IconWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "RelatedListTable.styles__IconWrapper",
    componentId: "sc-4ed05743-3"
})`
  display: inline-flex;
  align-items: center;
`;
const HeaderRight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RelatedListTable.styles__HeaderRight",
    componentId: "sc-4ed05743-4"
})`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
const RecordCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "RelatedListTable.styles__RecordCount",
    componentId: "sc-4ed05743-5"
})`
  font-size: 0.8rem;
  color: ${({ theme })=>theme.palette.text.muted};
`;
const TableWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RelatedListTable.styles__TableWrapper",
    componentId: "sc-4ed05743-6"
})`
  overflow-x: auto;
`;
const Table = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].table.withConfig({
    displayName: "RelatedListTable.styles__Table",
    componentId: "sc-4ed05743-7"
})`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
`;
const TableHead = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].thead.withConfig({
    displayName: "RelatedListTable.styles__TableHead",
    componentId: "sc-4ed05743-8"
})`
  tr {
    background-color: ${({ theme })=>theme.palette.surface.subtle};
  }
`;
const TableHeadCell = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].th.withConfig({
    displayName: "RelatedListTable.styles__TableHeadCell",
    componentId: "sc-4ed05743-9"
})`
  padding: 0.4rem 0.75rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: ${({ theme })=>theme.palette.text.muted};
  border-bottom: 1px solid ${({ theme })=>theme.palette.border.strong};
  white-space: nowrap;
`;
const TableHeadCellActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(TableHeadCell).withConfig({
    displayName: "RelatedListTable.styles__TableHeadCellActions",
    componentId: "sc-4ed05743-10"
})`
  text-align: right;
  width: 90px;
`;
const TableBody = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tbody.withConfig({
    displayName: "RelatedListTable.styles__TableBody",
    componentId: "sc-4ed05743-11"
})``;
const TableRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tr.withConfig({
    displayName: "RelatedListTable.styles__TableRow",
    componentId: "sc-4ed05743-12"
})`
  border-bottom: 1px solid ${({ theme })=>theme.palette.border.default};
  background-color: ${({ theme, $even })=>$even ? theme.palette.default.white : theme.palette.surface.subtle};

  &:hover {
    background-color: ${({ theme })=>theme.palette.surface.muted};
  }

  &:last-child {
    border-bottom: none;
  }
`;
const TableCell = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].td.withConfig({
    displayName: "RelatedListTable.styles__TableCell",
    componentId: "sc-4ed05743-13"
})`
  padding: 0.45rem 0.75rem;
  color: ${({ theme })=>theme.palette.text.primary};
  vertical-align: middle;
`;
const TableCellActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].td.withConfig({
    displayName: "RelatedListTable.styles__TableCellActions",
    componentId: "sc-4ed05743-14"
})`
  padding: 0.45rem 0.75rem;
  text-align: right;
  white-space: nowrap;
`;
const CellLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "RelatedListTable.styles__CellLink",
    componentId: "sc-4ed05743-15"
})`
  color: ${({ theme })=>theme.palette.default.primary};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;
const CellQuickOpenButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "RelatedListTable.styles__CellQuickOpenButton",
    componentId: "sc-4ed05743-16"
})`
  border: none;
  background: transparent;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: ${({ theme })=>theme.palette.default.primary};
  font-weight: 600;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;
const ViewLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "RelatedListTable.styles__ViewLink",
    componentId: "sc-4ed05743-17"
})`
  color: ${({ theme })=>theme.palette.text.muted};
  text-decoration: none;
  font-size: 0.8rem;

  &:hover {
    color: ${({ theme })=>theme.palette.default.primary};
  }
`;
const MutedCell = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "RelatedListTable.styles__MutedCell",
    componentId: "sc-4ed05743-18"
})`
  color: ${({ theme })=>theme.palette.text.muted};
`;
const StatusChip = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "RelatedListTable.styles__StatusChip",
    componentId: "sc-4ed05743-19"
})`
  display: inline-flex;
  align-items: center;
  padding: 0.05rem 0.45rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 600;
  white-space: nowrap;
  background: ${({ theme, $tone })=>theme.palette.status[$tone].bg};
  color: ${({ theme, $tone })=>theme.palette.status[$tone].text};
  border: 1px solid ${({ theme, $tone })=>theme.palette.status[$tone].border};
`;
const EmptyState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RelatedListTable.styles__EmptyState",
    componentId: "sc-4ed05743-20"
})`
  padding: 1.5rem;
  background-color: ${({ theme })=>theme.palette.surface.subtle};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  text-align: center;
`;
const EmptyStateText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "RelatedListTable.styles__EmptyStateText",
    componentId: "sc-4ed05743-21"
})`
  font-size: 0.85rem;
  color: ${({ theme })=>theme.palette.text.muted};
  margin: 0;
`;
const LoadErrorBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RelatedListTable.styles__LoadErrorBox",
    componentId: "sc-4ed05743-22"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: ${({ theme })=>theme.palette.status.error.bg};
  border: 1px solid ${({ theme })=>theme.palette.status.error.border};
  border-radius: ${({ theme })=>theme.borderRadius.input};
`;
const LoadErrorText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "RelatedListTable.styles__LoadErrorText",
    componentId: "sc-4ed05743-23"
})`
  margin: 0;
  font-size: 0.85rem;
  color: ${({ theme })=>theme.palette.status.error.text};
`;
const RetryButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "RelatedListTable.styles__RetryButton",
    componentId: "sc-4ed05743-24"
})`
  padding: 0.3rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme })=>theme.palette.status.error.text};
  background: transparent;
  border: 1px solid ${({ theme })=>theme.palette.status.error.border};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  cursor: pointer;

  &:hover {
    background: ${({ theme })=>theme.palette.default.white};
  }
`;
const InlineEditCell = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RelatedListTable.styles__InlineEditCell",
    componentId: "sc-4ed05743-25"
})`
  min-width: 7rem;

  /* Anzeige-Modus des EditableField kompakt halten */
  > div {
    margin: 0;
  }
`;
const HeaderActionButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "RelatedListTable.styles__HeaderActionButton",
    componentId: "sc-4ed05743-26"
})`
  padding: 0.3rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme })=>theme.palette.default.primary};
  background: transparent;
  border: 1px solid ${({ theme })=>theme.palette.default.grey};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  cursor: pointer;

  &:hover {
    background: ${({ theme })=>theme.palette.surface.subtle};
  }
`;
const PickerContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "RelatedListTable.styles__PickerContent",
    componentId: "sc-4ed05743-27"
})`
  background: ${({ theme })=>theme.palette.default.white};
  border-radius: 12px;
  padding: 24px;
  width: 480px;
  max-width: calc(100vw - 32px);
  /* Platz fürs Autocomplete-Dropdown, das im Content aufklappt (kein Portal) */
  min-height: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const UnlinkButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "RelatedListTable.styles__UnlinkButton",
    componentId: "sc-4ed05743-28"
})`
  margin-left: 0.5rem;
  padding: 0.15rem 0.5rem;
  font-size: 0.72rem;
  color: ${({ theme })=>theme.palette.status.error.text};
  background: transparent;
  border: 1px solid ${({ theme })=>theme.palette.status.error.border};
  border-radius: ${({ theme })=>theme.borderRadius.input};
  cursor: pointer;

  &:disabled {
    cursor: wait;
    opacity: 0.5;
  }

  &:hover:not(:disabled) {
    background: ${({ theme })=>theme.palette.status.error.bg};
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelatedListTable",
    ()=>RelatedListTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__isValidSalesforceId__as__isSalesforceId$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript) <export isValidSalesforceId as isSalesforceId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityIcons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$humanizeFieldName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/humanizeFieldName.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttentionBadge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/AttentionBadge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttentionBadge$2f$AttentionBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/AttentionBadge/AttentionBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$indicators$2f$indicatorRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/indicators/indicatorRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$statusTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/statusTone.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CreateEntityButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CreateEntityButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CreateEntityButton$2f$CreateEntityButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/CreateEntityButton/CreateEntityButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$EmptyState$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/EmptyState/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$EmptyState$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/EmptyState/EmptyState.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/lookupFields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$dependsOn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/dependsOn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useGenericEntityMutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/updatableFields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useFormatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useRecordLabel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useQuickOpenEntity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useQuickOpenEntity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$relatedEntityCreateAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/relatedEntityCreateAccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiErrorText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityFormRegistry.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
/** Field names whose numeric value should be shown as EUR currency. */ const CURRENCY_FIELD = /(price|amount|betrag|marge|preis|kosten|transportpreis|rechnungsbetrag|_pro_t|tonnage|\bdb_)/i;
/**
 * #323: Feldtypen, die die Zelle inline editieren kann. Lookups (MR-2) nutzen
 * die EditableField-Autocomplete-Suche; der Anzeige-Name kommt, wenn die Zeile
 * ihn trägt (X__r.Name), sonst löst EditableField ihn selbst auf.
 */ const INLINE_EDITABLE_TYPES = new Set([
    'text',
    'number',
    'date',
    'datetime',
    'currency',
    'percent',
    'picklist',
    'textarea',
    'boolean',
    'lookup'
]);
/**
 * Anzeige-Name eines Lookup-Werts aus der Zeile selbst (X__c → X__r.Name,
 * XId → X.Name) — erspart EditableField den Nachlade-Request, wenn die
 * Subquery den Namen schon mitliefert.
 */ const lookupDisplayFromRow = (record, fieldName)=>{
    const relationKey = fieldName.endsWith('__c') ? fieldName.replace(/__c$/, '__r') : fieldName.endsWith('Id') ? fieldName.slice(0, -2) : null;
    if (!relationKey) return undefined;
    const related = record[relationKey];
    // Produkt-Lookups zeigen bevorzugt den Handelsnamen (Trade Name), wenn die
    // Subquery ihn mitliefert (hiddenFields) — sonst wie gehabt Name.
    if (typeof related?.Trade_Name__c === 'string' && related.Trade_Name__c) return related.Trade_Name__c;
    return typeof related?.Name === 'string' ? related.Name : undefined;
};
const emptyValue = (value)=>value === null || value === undefined || value === '';
/** Format a related-list cell value into a readable node. */ const renderCellValue = (fieldName, value, label, texts, dataTestId)=>{
    if (emptyValue(value)) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutedCell"], {
        children: "–"
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
        lineNumber: 134,
        columnNumber: 33
    }, ("TURBOPACK compile-time value", void 0));
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$statusTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isStatusField"])(fieldName) && typeof value === 'string') {
        // Farbe am SF-Wert, Text als übersetztes Picklist-Label
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StatusChip"], {
            $tone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$statusTone$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusTone"])(value),
            children: texts.picklistLabel(fieldName, value) ?? value
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
            lineNumber: 139,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (typeof value === 'boolean') return value ? texts.yes : texts.no;
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
        const date = new Date(value);
        if (!Number.isNaN(date.getTime())) {
            return texts.fmt.dateWith(date, {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
        }
    }
    if (typeof value === 'number') {
        if (CURRENCY_FIELD.test(fieldName)) {
            return texts.fmt.number(value, {
                style: 'currency',
                currency: 'EUR'
            });
        }
        return texts.fmt.number(value);
    }
    // Lookup id we couldn't resolve to a name → compact link to the record.
    // #1239 (M-18): without a route there is no name to show either — the
    // placeholder replaces the raw id instead of falling through to String(value).
    if (typeof value === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__isValidSalesforceId__as__isSalesforceId$3e$__["isSalesforceId"])(value)) {
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUrlFromId"])(value);
        if (url) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CellLink"], {
            href: url,
            children: "↗"
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
            lineNumber: 166,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0));
        const unresolved = label(undefined);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MutedCell"], {
            "data-testid": dataTestId,
            "data-unnamed": unresolved.unnamed || undefined,
            children: unresolved.text
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    if (typeof value === 'string') return texts.picklistLabel(fieldName, value) ?? value;
    return String(value);
};
const RelatedListTable = ({ config, records, entityId, entityType, relatedEntityType, hideCreateButton, loadError, onRetry, dataTestId, parentRecord })=>{
    _s();
    // `label` kommt bereits übersetzt (useLocalizedEntityFieldConfig im Layout).
    const { label, fields, maxRows = 10 } = config;
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const fmt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"])();
    // #1626: Spaltenköpfe und Picklist-Werte aus der Kind-Config übersetzt
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    // Renamed to avoid shadowing `config.label` (the related list's own title).
    const { label: recordLabelOf } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"])();
    const { quickOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useQuickOpenEntity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickOpenEntity"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const entityIcon = relatedEntityType ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_ICONS"][relatedEntityType] : null;
    // 'Id' is only needed for row links, not as a visible column.
    const displayFields = fields.filter((fieldName)=>fieldName !== 'Id');
    // ── #323: Inline-Edit (opt-in via config.inlineEdit) ───────────────────────
    // Feld-Metadaten kommen aus dem KIND-Config (keine Doppelpflege im Parent);
    // editierbar ist nur, was in der Server-Allowlist getUpdatableFields liegt —
    // Formeln/Rollups bleiben dadurch automatisch reine Anzeige.
    //
    // WICHTIG: relatedEntityType kommt gemischt an — bei befüllten Listen löst
    // EntityDetailLayout ihn aus dem Record-Prefix auf (SF-API-Name, z. B.
    // 'Materialanalyse__c'), bei leeren aus der Relationship (freundlicher Name).
    // Beide Formen hier normalisieren, sonst laufen die EntityType-Maps ins Leere
    // (PATCH auf /salesforce/undefined/...).
    const childEntityType = relatedEntityType ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SF_OBJECT_TO_ENTITY_TYPE"][relatedEntityType] ?? relatedEntityType : null;
    const childSfName = childEntityType ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_TYPE_TO_SF_OBJECT"][childEntityType] ?? childEntityType : '';
    // Registry-Review I-2: Create-Knopf und RBAC-Check mit dem NORMALISIERTEN
    // Typ — der Rohname befüllter Listen (z. B. a0t) fand in den Create-Maps
    // keinen Eintrag (POST /api/salesforce/undefined/).
    const canCreate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$relatedEntityCreateAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canShowRelatedCreateButton"])(userContext, childEntityType);
    // #421: Aufmerksamkeits-Badge-Spalte nur, wenn das Kind-Objekt Regeln hat
    const showAttentionColumn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$indicators$2f$indicatorRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasIndicatorRules"])(childSfName);
    // Objekt-Gate: getUpdatableFields leitet sich nur aus Feld-SICHTBARKEIT ab
    // (visibleForRoles) — ohne Objekt-Edit-Recht (z. B. agent auf Abrechnung__c:
    // view ja, edit nein) zeigten Zellen/Picker sonst Edit-Affordances, deren
    // PATCH serverseitig immer 403 liefert. Spiegelt den Check der Kind-Route.
    const canEditChildObject = !!userContext && !!childSfName && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, childSfName, 'edit');
    const inlineEditEnabled = config.inlineEdit === true && !!relatedEntityType && canEditChildObject;
    const childFieldMeta = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RelatedListTable.useMemo[childFieldMeta]": ()=>{
            const map = new Map();
            if (!inlineEditEnabled) return map;
            const childConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfigForApiName"])(childSfName);
            for (const section of childConfig?.sections ?? []){
                for (const field of section.fields ?? []){
                    const existing = map.get(field.apiName);
                    // Rollen-Duplikate (#329): das editierbare Vorkommen gewinnt.
                    if (!existing || existing.readOnly && !field.readOnly) {
                        // #1626: Label und Picklist-Optionen übersetzt
                        map.set(field.apiName, entityText.field(field));
                    }
                }
            }
            return map;
        }
    }["RelatedListTable.useMemo[childFieldMeta]"], [
        inlineEditEnabled,
        childSfName,
        entityText
    ]);
    const updatableChildFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RelatedListTable.useMemo[updatableChildFields]": ()=>inlineEditEnabled ? new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUpdatableFields"])(childSfName, userContext?.role)) : new Set()
    }["RelatedListTable.useMemo[updatableChildFields]"], [
        inlineEditEnabled,
        childSfName,
        userContext?.role
    ]);
    // ── #330: Spalten-Header aus der kuratierten Kind-Config ───────────────────
    // humanizeFieldName produziert Artefakte ("G Ltig Ab") — die Kind-Configs
    // tragen aber bereits kuratierte Labels je Feld. Dotted paths loesen auf das
    // Lookup-Feld auf (X__r.Name -> X__c, Account.Name -> AccountId); humanize
    // bleibt der Fallback fuer Felder ohne Config-Eintrag.
    const childFieldLabels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RelatedListTable.useMemo[childFieldLabels]": ()=>{
            const map = new Map();
            const childConfig = childSfName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfigForApiName"])(childSfName) : null;
            for (const section of childConfig?.sections ?? []){
                for (const field of section.fields ?? []){
                    if (field.label && !map.has(field.apiName)) map.set(field.apiName, entityText.text(field.label, field.labelKey));
                }
            }
            return map;
        }
    }["RelatedListTable.useMemo[childFieldLabels]"], [
        childSfName,
        entityText
    ]);
    // #1626: Picklist-Werte der Zellen (Status-Chip, read-only) mit übersetztem
    // Label der Kind-Config; erstes Vorkommen eines Felds gewinnt.
    const childPicklistLabels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RelatedListTable.useMemo[childPicklistLabels]": ()=>{
            const map = new Map();
            const childConfig = childSfName ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfigForApiName"])(childSfName) : null;
            for (const section of childConfig?.sections ?? []){
                for (const field of section.fields ?? []){
                    if (!field.picklistOptions?.length || map.has(field.apiName)) continue;
                    map.set(field.apiName, new Map(entityText.options(field.picklistOptions).map({
                        "RelatedListTable.useMemo[childPicklistLabels]": (o)=>[
                                o.value,
                                o.label
                            ]
                    }["RelatedListTable.useMemo[childPicklistLabels]"])));
                }
            }
            return map;
        }
    }["RelatedListTable.useMemo[childPicklistLabels]"], [
        childSfName,
        entityText
    ]);
    const cellTexts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RelatedListTable.useMemo[cellTexts]": ()=>({
                yes: tr('common.yes', {
                    defaultValue: 'Ja'
                }),
                no: tr('common.no', {
                    defaultValue: 'Nein'
                }),
                picklistLabel: ({
                    "RelatedListTable.useMemo[cellTexts]": (fieldName, value)=>childPicklistLabels.get(fieldName)?.get(value)
                })["RelatedListTable.useMemo[cellTexts]"],
                fmt
            })
    }["RelatedListTable.useMemo[cellTexts]"], // `tr` behält beim Nachladen der Übersetzungen seine Identität, `revision` nicht
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        tr,
        entityText.revision,
        childPicklistLabels,
        fmt
    ]);
    const headerLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RelatedListTable.useCallback[headerLabel]": (fieldName)=>{
            const direct = childFieldLabels.get(fieldName);
            if (direct) return direct;
            if (fieldName.includes('.')) {
                const relationship = fieldName.split('.')[0];
                const lookupApiName = relationship.endsWith('__r') ? relationship.replace(/__r$/, '__c') : `${relationship}Id`;
                const lookupLabel = childFieldLabels.get(lookupApiName);
                if (lookupLabel) return lookupLabel;
            }
            return entityText.text((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$humanizeFieldName$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["humanizeFieldName"])(fieldName));
        }
    }["RelatedListTable.useCallback[headerLabel]"], [
        childFieldLabels,
        entityText
    ]);
    const [editingCell, setEditingCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savingCell, setSavingCell] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ── #417 „Hinzufügen zu": bestehende Datensätze verknüpfen/lösen ──────────
    // Der Lookup AM KIND zeigt auf den Parent — Hinzufügen setzt ihn per PATCH,
    // Lösen setzt ihn auf null. Aktiv nur, wenn die Rolle das Feld laut
    // Server-Allowlist schreiben darf (identisches Gate wie Inline-Edit).
    const addExisting = config.addExisting;
    const childLookupFieldMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RelatedListTable.useMemo[childLookupFieldMap]": ()=>addExisting && relatedEntityType && userContext ? new Set((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUpdatableFields"])(childSfName, userContext.role)) : new Set()
    }["RelatedListTable.useMemo[childLookupFieldMap]"], [
        addExisting,
        relatedEntityType,
        userContext,
        childSfName
    ]);
    // #1184: ist ein Filter konfiguriert, muss der Eltern-Bezug da sein (z. B.
    // Abrechnung ohne Auftrag) — sonst zeigte der Picker alle Kinder.
    const addExistingFilter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RelatedListTable.useMemo[addExistingFilter]": ()=>{
            const filter = addExisting?.filter;
            if (!filter) return undefined;
            const value = parentRecord?.[filter.parentField];
            return typeof value === 'string' && value ? {
                field: filter.childField,
                value
            } : null;
        }
    }["RelatedListTable.useMemo[addExistingFilter]"], [
        addExisting,
        parentRecord
    ]);
    const canAddExisting = !!addExisting && canEditChildObject && childLookupFieldMap.has(addExisting.childLookupField) && !hideCreateButton && addExistingFilter !== null;
    const canUnlink = !!addExisting && canEditChildObject && childLookupFieldMap.has(addExisting.childLookupField) && !hideCreateButton && addExisting.unlinkable === true;
    const [pickerOpen, setPickerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [linkBusy, setLinkBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const invalidateAfterLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RelatedListTable.useCallback[invalidateAfterLink]": ()=>{
            const parentEntity = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SF_OBJECT_TO_ENTITY_TYPE"][entityType] ?? entityType;
            for (const key of [
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_QUERY_KEY_MAP"][parentEntity],
                childEntityType ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_QUERY_KEY_MAP"][childEntityType] : undefined
            ]){
                if (key) queryClient.invalidateQueries({
                    queryKey: [
                        key
                    ]
                });
            }
        }
    }["RelatedListTable.useCallback[invalidateAfterLink]"], [
        entityType,
        childEntityType,
        queryClient
    ]);
    const patchChildLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RelatedListTable.useCallback[patchChildLookup]": async (childId, value)=>{
            // linkBusy-Gate: onChange (Ein-Klick-Pfad) und onConfirm (Enter) können
            // für dieselbe Auswahl beide feuern — nur der erste PATCH läuft.
            if (!addExisting || !childEntityType || linkBusy) return;
            setLinkBusy(true);
            try {
                const singlePath = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_SINGLE_API_MAP"][childEntityType];
                if (!singlePath) throw new Error(`no API path for entity type ${childEntityType}`);
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].patch(`/salesforce/${singlePath}/${childId}/`, {
                    [addExisting.childLookupField]: value
                });
                invalidateAfterLink();
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(value ? tr('relatedLists.linked', {
                    defaultValue: 'Datensatz verknüpft'
                }) : tr('relatedLists.unlinked', {
                    defaultValue: 'Verknüpfung gelöst'
                }));
                setPickerOpen(false);
            } catch (err) {
                console.error('[RelatedListTable] link/unlink failed:', err);
                const serverMessage = err?.response?.data?.message;
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(serverMessage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateApiMessage"])(tr, serverMessage) || tr('relatedLists.linkFailed', {
                    defaultValue: 'Verknüpfen fehlgeschlagen'
                }));
            } finally{
                setLinkBusy(false);
            }
        }
    }["RelatedListTable.useCallback[patchChildLookup]"], [
        addExisting,
        childEntityType,
        linkBusy,
        invalidateAfterLink,
        tr
    ]);
    const canEditCell = (fieldName)=>{
        if (!inlineEditEnabled || fieldName.includes('.') || fieldName.startsWith('_')) return false;
        if (!updatableChildFields.has(fieldName)) return false;
        const meta = childFieldMeta.get(fieldName);
        return !!meta && INLINE_EDITABLE_TYPES.has(meta.fieldType);
    };
    const handleCellConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RelatedListTable.useCallback[handleCellConfirm]": async (recordId, fieldName, value)=>{
            const cellKey = `${recordId}:${fieldName}`;
            setSavingCell(cellKey);
            try {
                const singlePath = childEntityType ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_SINGLE_API_MAP"][childEntityType] : undefined;
                if (!singlePath) throw new Error(`no API path for entity type ${relatedEntityType}`);
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].patch(`/salesforce/${singlePath}/${recordId}/`, {
                    [fieldName]: value
                });
                // Parent-Detail (hält die Subquery-Daten) UND Kind-Listen refetchen —
                // gleiche Key-Mechanik wie der #446-Retry.
                const parentEntity = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SF_OBJECT_TO_ENTITY_TYPE"][entityType] ?? entityType;
                for (const key of [
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_QUERY_KEY_MAP"][parentEntity],
                    childEntityType ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_QUERY_KEY_MAP"][childEntityType] : undefined
                ]){
                    if (key) queryClient.invalidateQueries({
                        queryKey: [
                            key
                        ]
                    });
                }
                setEditingCell(null);
            } catch (err) {
                console.error('[RelatedListTable] inline save failed:', err);
                const serverMessage = err?.response?.data?.message;
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(serverMessage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateApiMessage"])(tr, serverMessage) || tr('relatedLists.inlineSaveFailed', {
                    defaultValue: 'Speichern fehlgeschlagen'
                }));
            } finally{
                setSavingCell(null);
            }
        }
    }["RelatedListTable.useCallback[handleCellConfirm]"], [
        relatedEntityType,
        childEntityType,
        entityType,
        queryClient,
        tr
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-testid": dataTestId || `related-list-${config.relationshipName}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                        children: [
                            entityIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWrapper"], {
                                children: entityIcon
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                lineNumber: 453,
                                columnNumber: 26
                            }, ("TURBOPACK compile-time value", void 0)),
                            label || tr('relatedLists.defaultTitle', {
                                defaultValue: 'Related List'
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderRight"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecordCount"], {
                                children: loadError ? tr('relatedLists.loadError', {
                                    defaultValue: 'Laden fehlgeschlagen'
                                }) : records.length > 0 ? tr('relatedLists.recordCount', {
                                    count: records.length,
                                    defaultValue: records.length === 1 ? '{{count}} record' : '{{count}} records'
                                }) : tr('relatedLists.noRecords', {
                                    defaultValue: 'No records'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                lineNumber: 457,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            canAddExisting && !loadError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeaderActionButton"], {
                                type: "button",
                                onClick: ()=>setPickerOpen(true),
                                "data-testid": `related-list-add-existing-${config.relationshipName}`,
                                children: tr('relatedLists.addExisting', {
                                    defaultValue: 'Hinzufügen'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                lineNumber: 469,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            childEntityType && config.showCreateButton !== false && canCreate && !hideCreateButton && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsGenericCreate"])(childEntityType) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$CreateEntityButton$2f$CreateEntityButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateEntityButton"], {
                                entityType: childEntityType,
                                parentEntityId: entityId,
                                parentEntityType: entityType,
                                size: "small",
                                tooltip: tr('relatedLists.createTooltip', {
                                    defaultValue: 'Create {{label}}',
                                    label
                                }),
                                dataTestId: `create-${config.relationshipName.toLowerCase()}-button`,
                                // #913: die Liste ist eine Subquery am Parent — nach der Kind-
                                // Anlage Parent UND Kind-Keys refetchen (wie nach Verknüpfen),
                                // sonst erscheint die neue Position erst nach Reload.
                                onSuccess: invalidateAfterLink
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                lineNumber: 485,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                lineNumber: 451,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            loadError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadErrorBox"], {
                "data-testid": `related-list-error-${config.relationshipName}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadErrorText"], {
                        children: tr('relatedLists.loadErrorHint', {
                            defaultValue: 'Diese Liste konnte nicht geladen werden.'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                        lineNumber: 507,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RetryButton"], {
                        type: "button",
                        onClick: onRetry,
                        "data-testid": `related-list-retry-${config.relationshipName}`,
                        children: tr('relatedLists.retry', {
                            defaultValue: 'Erneut versuchen'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                        lineNumber: 513,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                lineNumber: 506,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : records.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableWrapper"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    showAttentionColumn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeadCell"], {
                                        style: {
                                            width: '24px'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                        lineNumber: 528,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    displayFields.map((fieldName, fieldIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeadCell"], {
                                            children: headerLabel(fieldName)
                                        }, `header-${fieldIdx}-${fieldName}`, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                            lineNumber: 530,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeadCellActions"], {
                                        children: tr('relatedLists.actionColumn', {
                                            defaultValue: 'Aktion'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                        lineNumber: 534,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                lineNumber: 526,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                            lineNumber: 525,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: records.slice(0, maxRows).map((record, recordIndex)=>{
                                const recordId = record.Id;
                                const recordUrl = recordId && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__isValidSalesforceId__as__isSalesforceId$3e$__["isSalesforceId"])(recordId) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUrlFromId"])(recordId) : null;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                    $even: recordIndex % 2 === 0,
                                    "data-testid": `related-list-row-${config.relationshipName}-${recordIndex}`,
                                    children: [
                                        showAttentionColumn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttentionBadge$2f$AttentionBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttentionBadge"], {
                                                entityType: childSfName,
                                                record: record
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                                lineNumber: 553,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                            lineNumber: 552,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        displayFields.map((fieldName, fieldIndex)=>{
                                            let value = record[fieldName];
                                            if (value === undefined && fieldName.includes('.')) {
                                                const [parent, childField] = fieldName.split('.');
                                                value = record[parent]?.[childField];
                                            }
                                            // Erste Spalte bleibt der Navigations-Link (gewinnt vor Edit).
                                            const isFirstColumn = fieldIndex === 0;
                                            const cellKey = `${recordId}:${fieldName}`;
                                            const inlineEditable = !isFirstColumn && !!recordId && canEditCell(fieldName);
                                            const meta = childFieldMeta.get(fieldName);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: isFirstColumn && recordUrl ? // #455: Quicklink öffnet den Side-Drawer;
                                                // Vollnavigation bleibt über „Öffnen →"
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CellQuickOpenButton"], {
                                                    type: "button",
                                                    onClick: ()=>quickOpen(recordId, record),
                                                    "data-testid": `related-list-quickopen-${config.relationshipName}-${recordIndex}`,
                                                    // #1809: Titelfeld und -wert als Attribut (E2E ohne Textvergleich)
                                                    "data-field": fieldName,
                                                    "data-value": emptyValue(value) ? '' : String(value),
                                                    children: emptyValue(value) ? '–' : String(value)
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                                    lineNumber: 574,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)) : inlineEditable && meta ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InlineEditCell"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableField"], {
                                                        fieldName: fieldName,
                                                        fieldType: meta.fieldType,
                                                        options: meta.picklistOptions,
                                                        lookupObjectType: meta.lookupObjectType,
                                                        // #1184: abhängiger Lookup (dependsOn) auch in der Zeile —
                                                        // z. B. Abrechnung nur aus dem eigenen Auftrag (OrderId
                                                        // kommt über hiddenFields mit).
                                                        lookupFilter: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$dependsOn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDependsOnLookupFilter"])(meta, record),
                                                        initialLookupDisplay: lookupDisplayFromRow(record, fieldName),
                                                        value: value,
                                                        isEditing: editingCell === cellKey,
                                                        isEditable: savingCell === null,
                                                        onStartEdit: ()=>setEditingCell(cellKey),
                                                        onConfirm: (f, v)=>void handleCellConfirm(recordId, f, v),
                                                        onCancel: ()=>setEditingCell(null),
                                                        dataTestId: `related-list-cell-${config.relationshipName}-${recordIndex}-${fieldName}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 29
                                                }, ("TURBOPACK compile-time value", void 0)) : renderCellValue(fieldName, value, recordLabelOf, cellTexts, `related-list-cell-${config.relationshipName}-${recordIndex}-${fieldName}`)
                                            }, `cell-${recordIndex}-${fieldIndex}-${fieldName}`, false, {
                                                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                                lineNumber: 570,
                                                columnNumber: 25
                                            }, ("TURBOPACK compile-time value", void 0));
                                        }),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCellActions"], {
                                            children: [
                                                recordUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ViewLink"], {
                                                    href: recordUrl,
                                                    children: [
                                                        tr('relatedLists.open', {
                                                            defaultValue: 'Öffnen'
                                                        }),
                                                        " →"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                canUnlink && recordId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnlinkButton"], {
                                                    type: "button",
                                                    disabled: linkBusy,
                                                    onClick: ()=>void patchChildLookup(recordId, null),
                                                    "data-testid": `related-list-unlink-${config.relationshipName}-${recordIndex}`,
                                                    title: tr('relatedLists.unlink', {
                                                        defaultValue: 'Lösen'
                                                    }),
                                                    children: tr('relatedLists.unlink', {
                                                        defaultValue: 'Lösen'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                                    lineNumber: 625,
                                                    columnNumber: 25
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                            lineNumber: 617,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, `row-${recordIndex}`, true, {
                                    fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                                    lineNumber: 546,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0));
                            })
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                            lineNumber: 539,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                    lineNumber: 524,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                lineNumber: 523,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$EmptyState$2f$EmptyState$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                size: "small",
                description: tr('relatedLists.empty', {
                    defaultValue: 'No {{label}} found',
                    label: label || tr('relatedLists.emptyFallbackLabel', {
                        defaultValue: 'related records'
                    })
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                lineNumber: 643,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            canAddExisting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: pickerOpen,
                onClose: ()=>setPickerOpen(false),
                variant: "bare",
                ariaLabel: `${tr('relatedLists.addExisting', {
                    defaultValue: 'Hinzufügen'
                })}: ${label}`,
                // #914: Picker über anderen Dialogen; portalierte Dropdowns liegen
                // per Skala (popover) darüber, QuickWheel (floating) darunter.
                zIndex: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].overlayTop,
                dataTestId: `related-list-add-existing-overlay-${config.relationshipName}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PickerContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                            importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h3,
                            children: [
                                tr('relatedLists.addExisting', {
                                    defaultValue: 'Hinzufügen'
                                }),
                                ": ",
                                label
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                            lineNumber: 666,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableField"], {
                            fieldName: addExisting.childLookupField,
                            fieldType: "lookup",
                            lookupObjectType: childSfName,
                            // #1184: Suche auf Kinder des Eltern-Bezugs eingrenzen (z. B.
                            // Auftragsprodukte des Auftrags der Abrechnung)
                            lookupFilter: addExistingFilter ?? undefined,
                            // Überschrift benennt das Ziel schon — das rohe API-Feldlabel
                            // (z. B. „Sample_Sending__c:") wäre nur Rauschen.
                            hideLabel: true,
                            value: "",
                            isEditing: pickerOpen,
                            isEditable: !linkBusy,
                            onChange: (_f, picked)=>{
                                if (typeof picked === 'string' && picked) {
                                    void patchChildLookup(picked, entityId);
                                }
                            },
                            onConfirm: (_f, picked)=>{
                                if (typeof picked === 'string' && picked) {
                                    void patchChildLookup(picked, entityId);
                                }
                            },
                            onCancel: ()=>setPickerOpen(false),
                            dataTestId: `related-list-add-existing-picker-${config.relationshipName}`
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                            lineNumber: 672,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                    lineNumber: 665,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
                lineNumber: 655,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx",
        lineNumber: 450,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(RelatedListTable, "Myf9UnMQ/cUq+4Pi1Rf8brPnA+s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useQuickOpenEntity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickOpenEntity"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"]
    ];
});
_c = RelatedListTable;
;
var _c;
__turbopack_context__.k.register(_c, "RelatedListTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/RelatedListTable/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx [app-client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyMessage",
    ()=>EmptyMessage,
    "Root",
    ()=>Root,
    "SystemInfoGrid",
    ()=>SystemInfoGrid,
    "SystemInfoItem",
    ()=>SystemInfoItem,
    "SystemInfoLabel",
    ()=>SystemInfoLabel,
    "SystemInfoValue",
    ()=>SystemInfoValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SystemInformation.styles__Root",
    componentId: "sc-2b6aac2-0"
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: ${({ theme })=>theme.margin.default};
`;
const SystemInfoGrid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SystemInformation.styles__SystemInfoGrid",
    componentId: "sc-2b6aac2-1"
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4px;
  width: 100%;
`;
const SystemInfoItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SystemInformation.styles__SystemInfoItem",
    componentId: "sc-2b6aac2-2"
})`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px 8px;
  margin-bottom: 4px;
  background: ${({ theme })=>theme.palette.default.greyLight};
  border-radius: ${({ theme })=>theme.borderRadius.box};
  border: 1px solid ${({ theme })=>theme.palette.default.secondary}30;
`;
const SystemInfoLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "SystemInformation.styles__SystemInfoLabel",
    componentId: "sc-2b6aac2-3"
})`
  font-size: ${({ theme })=>theme.font.text.caption.desktop.fontSize};
  font-weight: bold;
  color: ${({ theme })=>theme.palette.default.black};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: ${({ theme })=>theme.font.text.caption.desktop.lineHeight};
`;
const SystemInfoValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "SystemInformation.styles__SystemInfoValue",
    componentId: "sc-2b6aac2-4"
})`
  font-size: ${({ theme })=>theme.font.text.bodysmall.desktop.fontSize};
  font-weight: ${({ theme })=>theme.font.text.bodysmall.desktop.fontWeight};
  color: ${({ theme })=>theme.palette.default.black};
  word-break: break-word;
  font-family: ${({ theme })=>theme.font.secondaryFamily};
  line-height: ${({ theme })=>theme.font.text.bodysmall.desktop.lineHeight};
`;
const EmptyMessage = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SystemInformation.styles__EmptyMessage",
    componentId: "sc-2b6aac2-5"
})`
  padding: 2rem;
  text-align: center;
  color: ${({ theme })=>theme.palette.default.secondary};
  font-style: italic;
  font-size: ${({ theme })=>theme.font.text.body.mobile.fontSize};
  background-color: ${({ theme })=>theme.palette.default.primary}50;
  border-radius: 0.375rem;
  border: 1px dashed ${({ theme })=>theme.palette.default.secondary};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SystemInformation",
    ()=>SystemInformation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useRecordLabel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$recordIdVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/recordIdVisibility.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$RecordIdField$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/RecordIdField/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$RecordIdField$2f$RecordIdField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/RecordIdField/RecordIdField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useFormatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const SystemInformation = ({ entityData, className, compact = false })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const fmt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"])();
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const { label } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"])();
    if (!entityData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            className: className,
            "data-testid": "system-information-root",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyMessage"], {
                "data-testid": "system-information-empty",
                children: tr('systemInformation.noData', {
                    defaultValue: 'No system information available.'
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
            lineNumber: 76,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // #1238 (M-14/M-18): nie die Id als Name zeigen — fehlt der Name, greift der
    // Platzhalter aus useRecordLabel und der Wert wird als `unnamed` markiert.
    const ownerLabel = label(entityData.Owner?.Name);
    const createdByLabel = label(entityData.CreatedBy?.Name);
    const lastModifiedByLabel = label(entityData.LastModifiedBy?.Name);
    // Extract system fields
    const systemFields = [
        {
            key: 'record-id',
            label: tr('systemInformation.fields.recordId', {
                defaultValue: 'Record ID'
            }),
            // #1238 (E-2/M-14): rohe Id nur für interne Rollen, sonst entfällt die Zeile ganz
            show: !!entityData.Id && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$recordIdVisibility$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canSeeRecordIds"])(userContext?.role),
            render: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$RecordIdField$2f$RecordIdField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecordIdField"], {
                    recordId: entityData.Id,
                    dataTestId: "system-info-value-record-id"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
        },
        {
            key: 'owner',
            label: tr('systemInformation.fields.owner', {
                defaultValue: 'Owner'
            }),
            value: ownerLabel.text,
            unnamed: ownerLabel.unnamed,
            show: Boolean(entityData.Owner?.Name) || Boolean(entityData.OwnerId)
        },
        {
            key: 'owner-email',
            label: tr('systemInformation.fields.ownerEmail', {
                defaultValue: 'Owner Email'
            }),
            value: entityData.Owner?.Email,
            show: !!entityData.Owner?.Email
        },
        {
            key: 'created-by',
            label: tr('systemInformation.fields.createdBy', {
                defaultValue: 'Created By'
            }),
            value: createdByLabel.text,
            unnamed: createdByLabel.unnamed,
            show: Boolean(entityData.CreatedBy?.Name) || Boolean(entityData.CreatedById)
        },
        {
            key: 'created-date',
            label: tr('systemInformation.fields.createdDate', {
                defaultValue: 'Created Date'
            }),
            value: fmt.dateTime(entityData.CreatedDate),
            show: !!entityData.CreatedDate
        },
        {
            key: 'last-modified-by',
            label: tr('systemInformation.fields.lastModifiedBy', {
                defaultValue: 'Last Modified By'
            }),
            value: lastModifiedByLabel.text,
            unnamed: lastModifiedByLabel.unnamed,
            show: Boolean(entityData.LastModifiedBy?.Name) || Boolean(entityData.LastModifiedById)
        },
        {
            key: 'last-modified-date',
            label: tr('systemInformation.fields.lastModifiedDate', {
                defaultValue: 'Last Modified Date'
            }),
            value: fmt.dateTime(entityData.LastModifiedDate),
            show: !!entityData.LastModifiedDate
        },
        {
            key: 'system-modstamp',
            label: tr('systemInformation.fields.systemModstamp', {
                defaultValue: 'System Timestamp'
            }),
            value: fmt.dateTime(entityData.SystemModstamp),
            show: !!entityData.SystemModstamp
        },
        {
            key: 'last-activity-date',
            label: tr('systemInformation.fields.lastActivityDate', {
                defaultValue: 'Last Activity'
            }),
            value: fmt.dateTime(entityData.LastActivityDate),
            show: !!entityData.LastActivityDate
        },
        {
            key: 'last-viewed-date',
            label: tr('systemInformation.fields.lastViewedDate', {
                defaultValue: 'Last Viewed'
            }),
            value: fmt.dateTime(entityData.LastViewedDate),
            show: !!entityData.LastViewedDate
        },
        {
            key: 'last-referenced-date',
            label: tr('systemInformation.fields.lastReferencedDate', {
                defaultValue: 'Last Referenced'
            }),
            value: fmt.dateTime(entityData.LastReferencedDate),
            show: !!entityData.LastReferencedDate
        },
        {
            key: 'is-deleted',
            label: tr('systemInformation.fields.isDeleted', {
                defaultValue: 'Deleted'
            }),
            value: entityData.IsDeleted ? tr('common.yes', {
                defaultValue: 'Yes'
            }) : tr('common.no', {
                defaultValue: 'No'
            }),
            show: entityData.IsDeleted !== undefined
        }
    ].filter((field)=>field.show);
    if (systemFields.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
            className: className,
            "data-testid": "system-information-root",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyMessage"], {
                "data-testid": "system-information-empty",
                children: tr('systemInformation.noData', {
                    defaultValue: 'No system information available.'
                })
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        className: className,
        "data-testid": "system-information-root",
        children: compact ? systemFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemInfoItem"], {
                "data-testid": `system-info-item-${field.key}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemInfoLabel"], {
                        "data-testid": `system-info-label-${field.key}`,
                        children: field.label
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
                        lineNumber: 194,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemInfoValue"], {
                        "data-testid": `system-info-value-${field.key}`,
                        "data-unnamed": field.unnamed ? 'true' : undefined,
                        children: field.render?.() ?? field.value ?? '-'
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
                        lineNumber: 197,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, field.key, true, {
                fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
                lineNumber: 193,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemInfoGrid"], {
            children: systemFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemInfoItem"], {
                    "data-testid": `system-info-item-${field.key}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemInfoLabel"], {
                            "data-testid": `system-info-label-${field.key}`,
                            children: field.label
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
                            lineNumber: 209,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemInfoValue"], {
                            "data-testid": `system-info-value-${field.key}`,
                            "data-unnamed": field.unnamed ? 'true' : undefined,
                            children: field.render?.() ?? field.value ?? '-'
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
                            lineNumber: 212,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, field.key, true, {
                    fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
                    lineNumber: 208,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
            lineNumber: 206,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SystemInformation, "Cq7A7nIiQnQqLN3btX3qeONI7jI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"]
    ];
});
_c = SystemInformation;
;
var _c;
__turbopack_context__.k.register(_c, "SystemInformation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/SystemInformation/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Molecule/Tables/ResponsiveTable/ResponsiveTable.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CellContent",
    ()=>CellContent,
    "EmptyState",
    ()=>EmptyState,
    "HeaderContent",
    ()=>HeaderContent,
    "Root",
    ()=>Root,
    "StyledCounterColumn",
    ()=>StyledCounterColumn,
    "StyledTable",
    ()=>StyledTable,
    "StyledTableLink",
    ()=>StyledTableLink,
    "StyledTableText",
    ()=>StyledTableText,
    "StyledTbody",
    ()=>StyledTbody,
    "StyledTd",
    ()=>StyledTd,
    "StyledTh",
    ()=>StyledTh,
    "StyledThead",
    ()=>StyledThead,
    "StyledTr",
    ()=>StyledTr,
    "TdBefore",
    ()=>TdBefore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$mixins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/mixins.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
;
;
;
/**
 * #1081: Listen-Design. Die Breakpoint-Logik bleibt: unter 1024 px Container-
 * Breite wird jede Zeile zur Karte (Label/Wert), darüber zur klassischen
 * Tabelle. Neu ist nur das Aussehen — Theme-Tokens statt Hex-Werte (Dark Mode
 * kommt damit automatisch mit), `table-layout: auto` mit horizontalem Scrollen
 * statt Quetschen, Karten-Grid ab 640 px, gestapelte Label unter 480 px.
 */ const DESKTOP = '@container responsive-table (min-width: 1024px)';
const TWO_COLUMN_CARDS = '@container responsive-table (min-width: 640px)';
const STACKED_CARDS = '@container responsive-table (max-width: 479px)';
// Farbhelfer: die Inverted-Variante (Tabellen im dunklen Sidebar-Panel) lebt
// auf `palette.default.primary`, alles andere auf den Surface-/Border-Tokens.
const lineColor = ({ $inverted, theme })=>$inverted ? 'rgba(255, 255, 255, 0.25)' : theme.palette.border.default;
const strongLineColor = ({ $inverted, theme })=>$inverted ? 'rgba(255, 255, 255, 0.4)' : theme.palette.border.strong;
const headBackground = ({ $inverted, theme })=>$inverted ? 'rgba(255, 255, 255, 0.12)' : theme.palette.surface.muted;
const labelBackground = ({ $inverted, theme })=>$inverted ? 'rgba(255, 255, 255, 0.08)' : theme.palette.surface.subtle;
const bodyText = ({ $inverted, theme })=>$inverted ? theme.palette.default.white : theme.palette.text.primary;
const labelText = ({ $inverted, theme })=>$inverted ? 'rgba(255, 255, 255, 0.8)' : theme.palette.text.muted;
const headText = ({ $inverted, theme })=>$inverted ? theme.palette.default.white : theme.palette.text.secondary;
const cardBackground = ({ $inverted, theme })=>$inverted ? 'transparent' : theme.palette.default.white;
const hoverBackground = ({ $inverted, theme })=>$inverted ? 'rgba(255, 255, 255, 0.08)' : theme.palette.surface.subtle;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ResponsiveTable.styles__Root",
    componentId: "sc-2e5a9576-0"
})`
  container-type: inline-size;
  container-name: responsive-table;
  display: block;
  width: 100%;
  min-width: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  /* Platz für den Karten-Schatten, den overflow-x sonst abschneidet */
  padding-bottom: 4px;
`;
const StyledTable = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].table.withConfig({
    displayName: "ResponsiveTable.styles__StyledTable",
    componentId: "sc-2e5a9576-1"
})`
  /* Karten-Modus: Tabelle als Block, damit tbody ein Grid werden darf */
  display: block;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  font-size: 14px;
  line-height: 1.45;
  color: ${bodyText};
  background: transparent;

  ${DESKTOP} {
    display: table;
    table-layout: auto;
    min-width: 100%;
    border: 1px solid ${lineColor};
    border-radius: ${(props)=>props.theme.borderRadius.box};
    overflow: hidden;
    background: ${(props)=>props.$inverted ? props.theme.palette.default.primary : props.theme.palette.default.white};
  }
`;
const StyledThead = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].thead.withConfig({
    displayName: "ResponsiveTable.styles__StyledThead",
    componentId: "sc-2e5a9576-2"
})`
  display: block;

  /* Karten-Modus: Kopfzeile bleibt im DOM (Screenreader), aber außerhalb des Bildes */
  tr {
    position: absolute;
    left: -9999px;
  }

  ${DESKTOP} {
    display: table-header-group;
    background: ${headBackground};

    tr {
      position: static;
    }
  }
`;
const StyledTbody = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tbody.withConfig({
    displayName: "ResponsiveTable.styles__StyledTbody",
    componentId: "sc-2e5a9576-3"
})`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 12px;
  width: 100%;

  ${TWO_COLUMN_CARDS} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  ${DESKTOP} {
    display: table-row-group;
  }
`;
const StyledTr = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].tr.withConfig({
    displayName: "ResponsiveTable.styles__StyledTr",
    componentId: "sc-2e5a9576-4"
})`
  /* Karte */
  display: block;
  min-width: 0;
  border: 1px solid ${lineColor};
  border-radius: ${(props)=>props.theme.borderRadius.box};
  background: ${cardBackground};
  box-shadow: ${(props)=>props.theme.boxShadow};
  color: ${bodyText};
  overflow: hidden;
  transition:
    background-color 0.15s ease,
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  ${({ $clickable, theme })=>$clickable && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
      cursor: pointer;

      &:hover {
        border-color: ${theme.palette.default.primary};
        box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08);
      }
    `}

  ${DESKTOP} {
    display: table-row;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background: transparent;
    overflow: visible;

    ${({ $clickable })=>$clickable && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
        &:hover {
          box-shadow: none;
          background: ${hoverBackground};
        }
      `}
  }
`;
const StyledTh = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].th.withConfig({
    displayName: "ResponsiveTable.styles__StyledTh",
    componentId: "sc-2e5a9576-5"
})`
  display: none;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.3;
  color: ${headText};
  white-space: nowrap;
  vertical-align: middle;
  ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$mixins$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["userSelectNone"])()}

  &[data-sortable='true'] {
    cursor: pointer;
    transition: color 0.15s ease;

    &:hover {
      color: ${bodyText};
    }
  }

  /* Sortier-Pfeil: klein, in der Primärfarbe, mit festem Platz, damit der
     Kopf beim Sortierwechsel nicht springt */
  &::after {
    content: '';
    display: inline-block;
    width: 0.75em;
    margin-left: 0.35em;
    font-size: 9px;
    line-height: 1;
    vertical-align: middle;
    color: ${(props)=>props.$inverted ? props.theme.palette.default.white : props.theme.palette.default.primary};
  }

  &[data-sortable='true'][data-sorted='none']:hover::after {
    content: '▼';
    opacity: 0.35;
  }

  &[data-sorted='asc']::after {
    content: '▲';
  }

  &[data-sorted='desc']::after {
    content: '▼';
  }

  &[data-sticky='true'] {
    position: sticky;
    left: 0;
    z-index: 2;
    background: ${headBackground};
  }

  ${DESKTOP} {
    display: table-cell;
    padding: 10px 12px;
    border-bottom: 1px solid ${strongLineColor};
    width: var(--column-width, auto);
    min-width: var(--column-width, 0);
    max-width: var(--column-width, none);
  }
`;
const HeaderContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "ResponsiveTable.styles__HeaderContent",
    componentId: "sc-2e5a9576-6"
})`
  display: inline-flex;
  align-items: center;
`;
const TdBefore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ResponsiveTable.styles__TdBefore",
    componentId: "sc-2e5a9576-7"
})`
  /* Karten-Label */
  display: flex;
  align-items: flex-start;
  min-width: 0;
  padding: 8px 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0.01em;
  color: ${labelText};
  background: ${labelBackground};
  border-right: 1px solid ${lineColor};
  overflow-wrap: anywhere;
  hyphens: auto;

  ${STACKED_CARDS} {
    padding: 8px 12px 0;
    background: transparent;
    border-right: none;
  }

  ${DESKTOP} {
    display: none;
  }
`;
const CellContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ResponsiveTable.styles__CellContent",
    componentId: "sc-2e5a9576-8"
})`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 6px;
  min-width: 0;
  padding: 8px 12px;
  color: ${bodyText};
  overflow-wrap: anywhere;

  a {
    min-width: 0;
    max-width: 100%;
    overflow-wrap: anywhere;
    color: ${(props)=>props.$inverted ? props.theme.palette.default.white : props.theme.palette.link.primary};
  }

  ${STACKED_CARDS} {
    padding: 4px 12px 10px;
  }

  ${DESKTOP} {
    padding: 0;
    /* Lange Texte umbrechen statt die Spalte endlos zu verbreitern */
    max-width: 24rem;

    /* Nur an Wortgrenzen umbrechen: overflow-wrap anywhere / word-break
       break-word würden die Mindestbreite der Spalte auf ein Zeichen
       schrumpfen lassen — genau die „Deuts chlan d"-Brüche von vorher.
       overflow-wrap break-word bricht erst, wenn ein Wort wirklich nicht in
       die Zelle passt. */
    &,
    && * {
      overflow-wrap: break-word;
      word-break: normal;
      hyphens: manual;
    }
  }
`;
const StyledTableText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"]).withConfig({
    displayName: "ResponsiveTable.styles__StyledTableText",
    componentId: "sc-2e5a9576-9"
})`
  word-break: break-word;
  overflow-wrap: break-word;
  max-width: 100%;
  min-width: 0;
  margin: 0;
`;
const StyledTableLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "ResponsiveTable.styles__StyledTableLink",
    componentId: "sc-2e5a9576-10"
})`
  margin: 0;
  color: ${(props)=>props.theme.palette.link.primary};
`;
const StyledTd = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].td.withConfig({
    displayName: "ResponsiveTable.styles__StyledTd",
    componentId: "sc-2e5a9576-11"
})`
  /* Karte: Label | Wert */
  display: grid;
  grid-template-columns: minmax(7rem, 36%) minmax(0, 1fr);
  align-items: stretch;
  padding: 0;
  border-bottom: 1px solid ${lineColor};
  text-align: left;
  color: ${bodyText};

  &:last-child {
    border-bottom: none;
  }

  ${STACKED_CARDS} {
    grid-template-columns: minmax(0, 1fr);
  }

  &[data-sticky='true'] {
    position: sticky;
    left: 0;
    z-index: 1;
    background: ${cardBackground};
  }

  ${DESKTOP} {
    display: table-cell;
    padding: 9px 12px;
    vertical-align: middle;
    width: var(--column-width, auto);
    min-width: var(--column-width, 0);
    max-width: var(--column-width, none);
    border-bottom: 1px solid ${lineColor};
    white-space: normal;
    overflow-wrap: normal;

    a {
      display: inline;
      white-space: normal;
      word-break: normal;
      overflow-wrap: break-word;
      max-width: 100%;
    }

    tr:last-child > & {
      border-bottom: none;
    }
  }
`;
const EmptyState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ResponsiveTable.styles__EmptyState",
    componentId: "sc-2e5a9576-12"
})`
  padding: 2.5rem 1rem;
  text-align: center;
  font-size: 14px;
  color: ${(props)=>props.theme.palette.text.muted};
  border: 1px dashed ${(props)=>props.theme.palette.border.strong};
  border-radius: ${(props)=>props.theme.borderRadius.box};
`;
const StyledCounterColumn = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "ResponsiveTable.styles__StyledCounterColumn",
    componentId: "sc-2e5a9576-13"
})`
  /* This is a global style that will be applied to the table */
  /* Target the first column in the table header */
  & ~ div th:first-child {
    text-align: center;
    background-color: ${(props)=>props.theme.palette.default.primary};
    color: white;
    font-weight: 600;
    padding: 8px 8px;
    span {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
  }

  /* Target the first column in the table body */
  & ~ div td:first-child {
    width: 100%;
    text-align: center;
    background-color: ${(props)=>props.theme.palette.default.primary};
    color: white;
    font-weight: 600;
    padding: 0;
    justify-content: center;
    align-items: center;
    font-size: 12px;
  }

  /* Target the content inside the first column */
  & ~ div td:first-child div:last-child {
    background-color: ${(props)=>props.theme.palette.default.primary};
    color: white;
    text-align: center;
    font-weight: 600;
    border-radius: 4px;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @container responsive-table (min-width: 1024px) {
    & ~ div th:first-child {
      width: 20px;
      background-color: ${(props)=>props.theme.palette.default.primary};
    }
    & ~ div td:first-child {
      background-color: ${(props)=>props.theme.palette.default.primary};
      width: 100%;
      height: 100%;
    }
  }
`;
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

//# sourceMappingURL=apps_web_src_app_components_Molecule_13fer23ewuz-4._.js.map