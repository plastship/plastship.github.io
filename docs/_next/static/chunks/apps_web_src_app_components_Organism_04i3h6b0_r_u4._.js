(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BatchActions",
    ()=>BatchActions,
    "BatchConfirmButton",
    ()=>BatchConfirmButton,
    "BatchRow",
    ()=>BatchRow,
    "MenuContent",
    ()=>MenuContent,
    "MenuDivider",
    ()=>MenuDivider,
    "MenuItem",
    ()=>MenuItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
'use client';
;
;
const MenuContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CreateEntityMenu.styles__MenuContent",
    componentId: "sc-f96dc3d0-0"
})`
  background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  border-radius: 12px;
  padding: 24px;
  width: 380px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 64px);
  overflow-y: auto;
`;
const MenuItem = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CreateEntityMenu.styles__MenuItem",
    componentId: "sc-f96dc3d0-1"
})`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 12px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].BLACK};
  font-size: 13px;
  font-weight: 500;
  text-align: left;
  cursor: pointer;
  transition: background 0.15s;

  &:hover:not(:disabled) {
    background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_LIGHT};
  }

  &:disabled {
    cursor: wait;
    opacity: 0.5;
  }

  svg {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;
const MenuDivider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hr.withConfig({
    displayName: "CreateEntityMenu.styles__MenuDivider",
    componentId: "sc-f96dc3d0-2"
})`
  border: none;
  border-top: 1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_LIGHT};
  margin: 8px 0;
`;
const BatchRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CreateEntityMenu.styles__BatchRow",
    componentId: "sc-f96dc3d0-3"
})`
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-sizing: border-box;
  width: 100%;
  padding: 4px 12px 8px;
`;
const BatchActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "CreateEntityMenu.styles__BatchActions",
    componentId: "sc-f96dc3d0-4"
})`
  display: flex;
  justify-content: flex-end;
`;
const BatchConfirmButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "CreateEntityMenu.styles__BatchConfirmButton",
    componentId: "sc-f96dc3d0-5"
})`
  padding: 8px 14px;
  border: none;
  border-radius: 6px;
  background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].BLACK};
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateEntityMenu",
    ()=>CreateEntityMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * CreateEntityMenu (#916) — DER Anlegen-Einstieg einer Entity-Seite.
 *
 * Vorher gab es zwei: das IconPlus im PageHead („Neu anlegen", öffnete das
 * Create-Modal direkt) und darunter eine eigene Aktionszeile mit dem
 * „Anlegen aus"-Overlay (#415/#447: Duplizieren, Mehrfach duplizieren,
 * Cross-Objekt-Anlage mit Vorbefüllung). Jetzt ist es EIN Plus-Button im
 * PageHead, der ein Menü öffnet:
 *
 *   Neu anlegen: <Objekt>            ← RBAC create (wie das frühere PageHead-Plus)
 *   ─────
 *   Duplizieren / Mehrfach …          ← CREATE_FROM_REGISTRY.duplicate
 *   ─────
 *   <Ziel> anlegen …                  ← CREATE_FROM_REGISTRY.targets
 *
 * Gibt es nur EINE Aktion (z. B. auf Objekten ohne Registry-Eintrag nur
 * „Neu anlegen"), startet der Klick sie direkt — ein Ein-Punkt-Menü wäre
 * ein Klick zu viel. Mit Batch-Option bleibt das Menü immer sichtbar, sonst
 * wäre sie unerreichbar.
 *
 * #2071: Objekte mit `createVia` ≠ 'generic' (entityFormRegistry) erscheinen
 * weder als „Neu anlegen" noch als Duplikat- oder Ziel-Eintrag.
 *
 * Gating: „Neu anlegen" hängt am Create-Recht des Objekts (getResourceForEntityType
 * + hasObjectAccess, fail-open wie im PageHead). „Anlegen aus" ist ein internes
 * Werkzeug — Kundenrollen (user/rigk) sehen es nicht — und braucht Id + Record
 * der Quelle. Ohne eine einzige Aktion rendert die Komponente nichts.
 *
 * WICHTIG (unverändert aus #415): Vor dem Öffnen eines „Anlegen aus"-Modals
 * wird der VOLLE Quell-Datensatz über `entityPath` nachgeladen (Board-/Drawer-
 * Records sind schlank, GenericEntityForm merged initialValues nur beim Mount).
 * Schlägt der Fetch fehl, wird bewusst NICHT mit dem schlanken Record
 * vorbefüllt.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlus/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileCopies$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFileCopies/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/iconButtonColors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/ModalContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$relatedEntityCreateAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/relatedEntityCreateAccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityToResourceMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityToResourceMap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/lookupFields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityFormRegistry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityIconMap.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$create$2d$from$2f$createFromRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/create-from/createFromRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$createFormConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/createFormConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useGenericEntityMutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.styles.ts [app-client] (ecmascript)");
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
const ROLES_WITHOUT_CREATE_FROM = new Set([
    'user',
    'rigk'
]);
/** Enum-Wert aus Enum/SF-Name/Alias — für Modal, RBAC und Anzeigename. */ function resolveEntityTypeEnum(entityType) {
    const mapped = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SF_OBJECT_TO_ENTITY_TYPE"][entityType] ?? entityType;
    return mapped;
}
const CreateEntityMenu = ({ entityType, entityId, record, showCreateNew = true, dataTestId })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const { openCreateModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [busyKey, setBusyKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // #464 Batch-Anlage: null = Zähler zu, sonst gewünschte Kopienzahl
    const [batchCount, setBatchCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [batchProgress, setBatchProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const enumType = resolveEntityTypeEnum(entityType);
    const displayName = entityText.text(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_DISPLAY_NAMES"][enumType] ?? enumType);
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$create$2d$from$2f$createFromRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCreateFromConfig"])(entityType);
    // #1887: Rolle aus dem Nutzerkontext; ohne ihn kein „Anlegen aus" (fail-closed)
    const kontextRolle = userContext?.role;
    const hideCreateFrom = !kontextRolle || ROLES_WITHOUT_CREATE_FROM.has(kontextRolle);
    const hasSource = Boolean(entityId && record);
    /**
   * Aktionsliste: „Neu anlegen" (Create-Recht, Muster PageHead.filteredButtons),
   * dann Duplizieren, dann die Ziele in Registry-Reihenfolge.
   * canShowRelatedCreateButton ist fail-open — die Server-Routen erzwingen
   * das Create-Recht in jedem Fall.
   */ const actions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CreateEntityMenu.useMemo[actions]": ()=>{
            const result = [];
            // #2071: Objekte mit eigenem Anlege-Weg (createVia 'dialog'/'none', z. B.
            // User → /users „Neuer Nutzer") bekommen hier weder „Neu anlegen" noch
            // „Duplizieren"; Ziele mit eigenem Weg fallen aus „Anlegen aus" heraus.
            if (showCreateNew && userContext && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsGenericCreate"])(enumType)) {
                const resource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityToResourceMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceForEntityType"])(enumType);
                const canCreate = !resource || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, resource, 'create');
                if (canCreate) {
                    result.push({
                        key: 'new',
                        group: 'new',
                        label: `${tr('createFrom.new', {
                            defaultValue: 'Neu anlegen'
                        })}: ${displayName}`,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                            lineNumber: 166,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        targetEntityType: enumType
                    });
                }
            }
            if (config && hasSource && !hideCreateFrom) {
                if (config.duplicate && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsGenericCreate"])(config.sourceEntityType) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$relatedEntityCreateAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canShowRelatedCreateButton"])(userContext, config.sourceEntityType)) {
                    result.push({
                        key: 'duplicate',
                        group: 'duplicate',
                        label: tr('createFrom.duplicate', {
                            defaultValue: 'Duplizieren'
                        }),
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileCopies$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                            lineNumber: 182,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        targetEntityType: config.sourceEntityType,
                        buildValues: {
                            "CreateEntityMenu.useMemo[actions]": (source)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$create$2d$from$2f$createFromRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildDuplicateValues"])(config, source)
                        }["CreateEntityMenu.useMemo[actions]"],
                        needsAllRelated: Boolean(config.duplicate.relatedObjectsSeed?.fromRelationship)
                    });
                }
                for (const target of config.targets){
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsGenericCreate"])(target.targetEntityType)) continue;
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$relatedEntityCreateAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canShowRelatedCreateButton"])(userContext, target.targetEntityType)) continue;
                    result.push({
                        key: target.id,
                        group: 'target',
                        // Beschriftung je Ziel aus der Registry, übersetzt wie die Objektnamen
                        label: entityText.text(target.label),
                        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityIconMap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIconForEntityType"])(target.targetEntityType),
                        targetEntityType: target.targetEntityType,
                        buildValues: {
                            "CreateEntityMenu.useMemo[actions]": (source)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$create$2d$from$2f$createFromRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildInitialValues"])(target, source)
                        }["CreateEntityMenu.useMemo[actions]"],
                        writeBack: target.writeBack,
                        warnUnless: target.warnUnless,
                        needsAllRelated: Boolean(target.relatedObjectsSeed?.fromRelationship)
                    });
                }
            }
            return result;
        }
    }["CreateEntityMenu.useMemo[actions]"], [
        showCreateNew,
        enumType,
        displayName,
        userContext,
        config,
        hasSource,
        hideCreateFrom,
        tr,
        entityText
    ]);
    const hasBatch = Boolean(config?.duplicate?.batch && hasSource && !hideCreateFrom && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allowsGenericCreate"])(config.sourceEntityType));
    if (actions.length === 0) return null;
    const runAction = async (action)=>{
        if (busyKey) return;
        // „Neu anlegen": kein Quell-Fetch, direkt ins leere Formular.
        if (!action.buildValues) {
            openCreateModal({
                entityType: action.targetEntityType
            });
            setIsOpen(false);
            return;
        }
        if (!config || !entityId) return;
        setBusyKey(action.key);
        try {
            const query = action.needsAllRelated ? '?relatedListLimit=200&relatedListOrderBy=CreatedDate%20ASC' : '';
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/salesforce/${config.entityPath}/${entityId}/${query}`);
            const fullRecord = response.data?.data;
            if (!fullRecord) throw new Error('empty record response');
            // #1805: z. B. Vertrag noch Draft — Hinweis, das Formular öffnet trotzdem
            const warn = action.warnUnless;
            if (warn && fullRecord[warn.field] !== warn.value) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].warning(entityText.text(warn.message));
            }
            openCreateModal({
                entityType: action.targetEntityType,
                initialValues: action.buildValues(fullRecord),
                title: action.label,
                onSuccess: action.writeBack ? (newId)=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].patch(`/salesforce/${config.entityPath}/${entityId}/`, {
                        [action.writeBack.sourceField]: newId
                    }).then(()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('createFrom.sourceLinked', {
                            defaultValue: 'Quelldatensatz verknüpft'
                        }))).catch((err)=>{
                        console.error('[CreateEntityMenu] write-back failed:', err);
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('createFrom.sourceLinkFailed', {
                            defaultValue: 'Angelegt, aber die Verknüpfung am Quelldatensatz ist fehlgeschlagen'
                        }));
                    });
                } : undefined
            });
            setIsOpen(false);
        } catch (err) {
            console.error('[CreateEntityMenu] source fetch failed:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('createFrom.loadFailed', {
                defaultValue: 'Datensatz konnte nicht geladen werden'
            }));
        } finally{
            setBusyKey(null);
        }
    };
    /**
   * #464 Batch-Anlage: x Kopien DIREKT anlegen (ohne Formular). Duplikat-Werte
   * wie beim Einzel-Duplizieren, dann je Kopie Parent-POST + Positions-POSTs —
   * dieselben Routen, die auch GenericEntityForm nutzt. Bricht eine Kopie ab,
   * stoppt der Lauf und meldet, wie viele Kopien bereits angelegt sind.
   */ const runBatch = async (count)=>{
        if (busyKey || !config?.duplicate || !entityId) return;
        setBusyKey('duplicate-batch');
        setBatchProgress(0);
        try {
            const query = config.duplicate.relatedObjectsSeed?.fromRelationship ? '?relatedListLimit=200&relatedListOrderBy=CreatedDate%20ASC' : '';
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/salesforce/${config.entityPath}/${entityId}/${query}`);
            const fullRecord = response.data?.data;
            if (!fullRecord) throw new Error('empty record response');
            // createDefaults (Status: 'Draft') setzt buildDuplicateValues bereits (#912);
            // batch: Vertrag & Co. bleiben drin (Kopien am selben Vertrag, #464).
            const { _relatedObjects, ...parentValues } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$create$2d$from$2f$createFromRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildDuplicateValues"])(config, fullRecord, {
                batch: true
            });
            const parentPath = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_CREATE_API_MAP"][config.sourceEntityType] ?? config.entityPath;
            const relatedConfigs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$createFormConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEntityFormConfig"])(config.sourceEntityType)?.relatedObjects ?? [];
            let created = 0;
            try {
                for(let i = 0; i < count; i++){
                    const createResponse = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post(`/salesforce/${parentPath}/`, parentValues);
                    const newId = createResponse.data?.id;
                    if (!newId) throw new Error('create returned no id');
                    for (const [relatedType, rows] of Object.entries(_relatedObjects ?? {})){
                        const relatedConfig = relatedConfigs.find((r)=>r.entityType === relatedType);
                        if (!relatedConfig) continue;
                        const childPath = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_CREATE_API_MAP"][relatedType] ?? relatedType.toLowerCase();
                        for (const row of rows){
                            // `_`-Keys sind Anzeige-Metadaten der Seeds (z. B. _Product2Id_label)
                            const cleaned = Object.fromEntries(Object.entries(row).filter(([key])=>!key.startsWith('_')));
                            await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post(`/salesforce/${childPath}/`, {
                                ...cleaned,
                                [relatedConfig.parentField]: newId
                            });
                        }
                    }
                    created++;
                    setBatchProgress(created);
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('createFrom.copiesCreated', {
                    defaultValue: '{{count}} Kopien angelegt',
                    count: created
                }));
                setBatchCount(null);
                setIsOpen(false);
            } catch (createErr) {
                console.error('[CreateEntityMenu] batch create failed:', createErr);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('createFrom.copiesAborted', {
                    defaultValue: 'Abbruch: {{created}} von {{total}} Kopien angelegt',
                    created,
                    total: count
                }));
            }
            // Board/Listen/Related Lists sollen die neuen Kopien sofort zeigen
            if (created > 0) void queryClient.invalidateQueries();
        } catch (err) {
            console.error('[CreateEntityMenu] source fetch failed:', err);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('createFrom.loadFailed', {
                defaultValue: 'Datensatz konnte nicht geladen werden'
            }));
        } finally{
            setBusyKey(null);
            setBatchProgress(0);
        }
    };
    const menuLabel = tr('createFrom.menuTitle', {
        defaultValue: 'Anlegen'
    });
    const singleAction = actions.length === 1 ? actions[0] : null;
    const triggerLabel = singleAction ? singleAction.label : menuLabel;
    const triggerTestId = dataTestId ?? `create-${enumType.toLowerCase()}-btn`;
    const handleTriggerClick = ()=>{
        // Mit Batch-Option immer das Menü zeigen (sonst wäre sie unerreichbar)
        if (singleAction && !hasBatch) {
            void runAction(singleAction);
        } else {
            setIsOpen(true);
        }
    };
    const batchLabel = tr('createFrom.duplicateMultiple', {
        defaultValue: 'Mehrfach duplizieren …'
    });
    // Trenner zwischen den Gruppen (Neu | Duplizieren | Ziele)
    const renderItems = ()=>actions.map((action, index)=>{
            const previous = actions[index - 1];
            const showDivider = previous !== undefined && previous.group !== action.group;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: [
                    showDivider && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuDivider"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                        lineNumber: 407,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
                        type: "button",
                        onClick: ()=>void runAction(action),
                        disabled: !!busyKey,
                        "data-testid": `create-from-item-${action.key}`,
                        "data-group": action.group,
                        children: [
                            action.icon,
                            busyKey === action.key ? tr('createFrom.loading', {
                                defaultValue: 'Lade Datensatz …'
                            }) : action.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, action.key, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                lineNumber: 406,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                onClick: handleTriggerClick,
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                    lineNumber: 428,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0)),
                tooltip: triggerLabel,
                ariaLabel: triggerLabel,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].PLUS,
                dataTestId: triggerTestId
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isOpen,
                onClose: ()=>setIsOpen(false),
                variant: "bare",
                ariaLabel: menuLabel,
                dataTestId: "create-from-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                            importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h3,
                            children: menuLabel
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuDivider"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                            lineNumber: 444,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        renderItems(),
                        hasBatch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
                            type: "button",
                            onClick: ()=>setBatchCount((current)=>current === null ? 5 : null),
                            disabled: !!busyKey,
                            "data-testid": "create-from-item-duplicate-batch",
                            "data-group": "duplicate",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileCopies$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                                    lineNumber: 454,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                batchLabel
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                            lineNumber: 447,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        hasBatch && batchCount !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BatchRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableField"], {
                                    fieldName: "batchCount",
                                    label: tr('createFrom.copyCount', {
                                        defaultValue: 'Anzahl Kopien'
                                    }),
                                    fieldType: "number",
                                    value: batchCount,
                                    isEditing: true,
                                    // Ohne eigenes Speichern/Abbrechen — der Feld-Wert wirkt sofort,
                                    // bestätigt wird über den „x Kopien anlegen"-Button darunter.
                                    hideEditActions: true,
                                    onChange: (_field, value)=>{
                                        const parsed = Number(value);
                                        setBatchCount(Number.isFinite(parsed) ? Math.floor(parsed) : 0);
                                    },
                                    dataTestId: "create-from-batch-count"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BatchActions"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BatchConfirmButton"], {
                                        type: "button",
                                        onClick: ()=>void runBatch(batchCount),
                                        disabled: !!busyKey || batchCount < 1 || batchCount > 25,
                                        "data-testid": "create-from-batch-confirm",
                                        children: busyKey === 'duplicate-batch' ? tr('createFrom.copiesProgress', {
                                            defaultValue: 'Lege an … {{done}}/{{total}}',
                                            done: batchProgress,
                                            total: batchCount
                                        }) : tr('createFrom.createCopies', {
                                            defaultValue: '{{count}} Kopien anlegen',
                                            count: batchCount
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                                        lineNumber: 476,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                                    lineNumber: 475,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                            lineNumber: 459,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx",
        lineNumber: 425,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CreateEntityMenu, "Ibsp4r2h18hvalyunnMnekop0lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"]
    ];
});
_c = CreateEntityMenu;
;
var _c;
__turbopack_context__.k.register(_c, "CreateEntityMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/CreateEntityMenu/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Actions",
    ()=>Actions,
    "Body",
    ()=>Body,
    "CenterState",
    ()=>CenterState,
    "Counter",
    ()=>Counter,
    "Header",
    ()=>Header,
    "ImageFrame",
    ()=>ImageFrame,
    "PageFrame",
    ()=>PageFrame,
    "PageList",
    ()=>PageList,
    "Panel",
    ()=>Panel,
    "Root",
    ()=>Root,
    "SidePanel",
    ()=>SidePanel,
    "Title",
    ()=>Title,
    "ToolButton",
    ()=>ToolButton,
    "ToolLink",
    ()=>ToolLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/zIndex.ts [app-client] (ecmascript)");
'use client';
;
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].section.withConfig({
    displayName: "DocumentViewer.styles__Root",
    componentId: "sc-cb5db826-0"
})`
  position: fixed;
  display: flex;
  flex-direction: row;

  /* Schmal: Seitenleiste (#1878) unter dem Dokument statt daneben */
  @media only screen and (max-width: 1024px) {
    flex-direction: column;
  }

  ${({ $layer, $drawerOpen })=>$layer === 'dialog' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          inset: 0;
          z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].overlayTop};
          padding: 1rem;
          background-color: rgba(0, 0, 0, 0.55);

          @media only screen and (max-width: 768px) {
            padding: 0;
          }
        ` : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
          top: 56px;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$zIndex$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Z_INDEX"].viewer};

          /* Desktop: endet an der linken Kante des offenen Drawers (400px) */
          @media only screen and (min-width: 1024px) {
            right: ${$drawerOpen ? '400px' : '0'};
          }

          /* Mobil: über der BottomTabBar enden (wie der Drawer) */
          @media only screen and (max-width: 1024px) {
            bottom: calc(50px + env(safe-area-inset-bottom, 0px));
          }
        `}

  &:focus {
    outline: none;
  }
`;
const Panel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "DocumentViewer.styles__Panel",
    componentId: "sc-cb5db826-1"
})`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  min-width: 0;
  background-color: ${({ theme })=>theme.palette.default.white};
  border-left: 1px solid ${({ theme })=>theme.palette.default.greyLight};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  border-radius: ${({ $layer })=>$layer === 'dialog' ? '8px' : '0'};
  overflow: hidden;
`;
const SidePanel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].aside.withConfig({
    displayName: "DocumentViewer.styles__SidePanel",
    componentId: "sc-cb5db826-2"
})`
  display: flex;
  flex-direction: column;
  flex: 0 0 440px;
  width: 440px;
  min-height: 0;

  @media only screen and (min-width: 1280px) {
    flex-basis: 500px;
    width: 500px;
  }

  @media only screen and (min-width: 1600px) {
    flex-basis: 560px;
    width: 560px;
  }
  background-color: ${({ theme })=>theme.palette.default.white};
  border-left: 1px solid ${({ theme })=>theme.palette.default.greyLight};
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
  border-radius: ${({ $layer })=>$layer === 'dialog' ? '0 8px 8px 0' : '0'};
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    flex: 0 0 auto;
    width: 100%;
    max-height: 48%;
    border-left: none;
    border-top: 1px solid ${({ theme })=>theme.palette.default.greyLight};
  }
`;
const Header = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].header.withConfig({
    displayName: "DocumentViewer.styles__Header",
    componentId: "sc-cb5db826-3"
})`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-bottom: 1px solid ${({ theme })=>theme.palette.default.greyLight};
  flex-shrink: 0;
  flex-wrap: wrap;
`;
const Title = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].h2.withConfig({
    displayName: "DocumentViewer.styles__Title",
    componentId: "sc-cb5db826-4"
})`
  flex: 1;
  min-width: 8rem;
  margin: 0;
  font-size: 0.9375rem;
  font-weight: 600;
  color: ${({ theme })=>theme.palette.default.black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Counter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "DocumentViewer.styles__Counter",
    componentId: "sc-cb5db826-5"
})`
  font-size: 0.8125rem;
  font-variant-numeric: tabular-nums;
  color: ${({ theme })=>theme.palette.default.secondary};
  white-space: nowrap;
`;
const Actions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "DocumentViewer.styles__Actions",
    componentId: "sc-cb5db826-6"
})`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-wrap: wrap;
`;
const toolButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["css"]`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  min-width: 2.25rem;
  height: 2.25rem;
  padding: 0 0.5rem;
  border: 1px solid ${({ theme })=>theme.palette.default.greyLight};
  border-radius: 6px;
  background-color: ${({ theme })=>theme.palette.default.white};
  color: ${({ theme })=>theme.palette.default.black};
  font-size: 0.8125rem;
  font-family: inherit;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;

  &:hover:not(:disabled) {
    border-color: ${({ theme })=>theme.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 1px;
  }

  &:disabled {
    opacity: 0.4;
    cursor: default;
  }

  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
`;
const ToolButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "DocumentViewer.styles__ToolButton",
    componentId: "sc-cb5db826-7"
})`
  ${toolButton}
`;
const ToolLink = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].a.withConfig({
    displayName: "DocumentViewer.styles__ToolLink",
    componentId: "sc-cb5db826-8"
})`
  && {
    ${toolButton}
  }
`;
const Body = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "DocumentViewer.styles__Body",
    componentId: "sc-cb5db826-9"
})`
  position: relative;
  flex: 1;
  min-height: 0;
  overflow: auto;
  background-color: ${({ theme })=>theme.palette.default.greyLight};
`;
const CenterState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "DocumentViewer.styles__CenterState",
    componentId: "sc-cb5db826-10"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  min-height: 100%;
  padding: 2rem 1rem;
  box-sizing: border-box;
  text-align: center;
  font-size: 0.875rem;
  color: ${({ theme })=>theme.palette.default.secondary};
`;
const PageList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "DocumentViewer.styles__PageList",
    componentId: "sc-cb5db826-11"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
`;
const PageFrame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "DocumentViewer.styles__PageFrame",
    componentId: "sc-cb5db826-12"
})`
  width: 100%;
  max-width: 960px;
  aspect-ratio: ${({ $ratio })=>$ratio};
  background-color: #ffffff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);

  canvas {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
const ImageFrame = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "DocumentViewer.styles__ImageFrame",
    componentId: "sc-cb5db826-13"
})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 0.75rem;
  box-sizing: border-box;

  img {
    max-width: 100%;
    max-height: calc(100vh - 10rem);
    object-fit: contain;
    background-color: #ffffff;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.styles.ts [app-client] (ecmascript) <export ToolButton as DocumentViewerActionButton>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentViewerActionButton",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.styles.ts [app-client] (ecmascript)");
}),
"[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentViewer",
    ()=>DocumentViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowLeft/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconArrowRight/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconClose/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDownload$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDownload/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/LoadingSpinner/LoadingSpinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useDialogLifecycle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useDialogLifecycle.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$isTypingContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/isTypingContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$PdfCanvasPages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/PdfCanvasPages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.styles.ts [app-client] (ecmascript)");
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
;
;
;
;
/** Lädt die Bytes eines Eintrags — `previewUrl` per fetch (Cookies derselben Origin) */ async function fetchItemBlob(item) {
    if (item.loadData) return item.loadData();
    if (!item.previewUrl) throw new Error('no preview source');
    const response = await fetch(item.previewUrl, {
        credentials: 'same-origin'
    });
    if (!response.ok) throw new Error(`preview request failed: ${response.status}`);
    return response.blob();
}
function usePreview(item) {
    _s();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: 'loading'
    });
    const fail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePreview.useCallback[fail]": ()=>setState({
                status: 'error'
            })
    }["usePreview.useCallback[fail]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePreview.useEffect": ()=>{
            if (!item || !item.kind || !item.previewUrl && !item.loadData) {
                setState({
                    status: 'none'
                });
                return;
            }
            // Bilder mit URL lädt der Browser selbst (<img>), ohne Umweg über fetch
            if (item.kind === 'image' && item.previewUrl && !item.loadData) {
                setState({
                    status: 'image',
                    src: item.previewUrl
                });
                return;
            }
            let cancelled = false;
            let objectUrl = null;
            setState({
                status: 'loading'
            });
            fetchItemBlob(item).then({
                "usePreview.useEffect": async (blob)=>{
                    if (cancelled) return;
                    if (item.kind === 'pdf') {
                        const data = await blob.arrayBuffer();
                        if (!cancelled) setState({
                            status: 'pdf',
                            data
                        });
                    } else {
                        objectUrl = URL.createObjectURL(blob);
                        setState({
                            status: 'image',
                            src: objectUrl
                        });
                    }
                }
            }["usePreview.useEffect"]).catch({
                "usePreview.useEffect": ()=>{
                    if (!cancelled) setState({
                        status: 'error'
                    });
                }
            }["usePreview.useEffect"]);
            return ({
                "usePreview.useEffect": ()=>{
                    cancelled = true;
                    if (objectUrl) URL.revokeObjectURL(objectUrl);
                }
            })["usePreview.useEffect"];
        // Neu laden nur bei anderem Eintrag — Aufrufer bauen `items` oft je Render neu
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["usePreview.useEffect"], [
        item?.id,
        item?.previewUrl,
        item?.kind
    ]);
    return [
        state,
        fail
    ];
}
_s(usePreview, "HewxX6PX8SW4ARsofrOSyZtLK6I=");
const DocumentViewer = ({ items, index, onIndexChange, onClose, layer = 'content', renderActions, renderHeaderActions, panel, emptyState, emptyTitle, dataTestId = 'document-viewer' })=>{
    _s1();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const sidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptionalSidebar"])();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentViewer.useEffect": ()=>{
            setMounted(true);
        }
    }["DocumentViewer.useEffect"], []);
    const count = items.length;
    const safeIndex = count === 0 ? 0 : Math.min(Math.max(index, 0), count - 1);
    const item = items[safeIndex];
    const [preview, failPreview] = usePreview(item);
    const showPrevious = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentViewer.useCallback[showPrevious]": ()=>{
            if (count > 1) onIndexChange((safeIndex - 1 + count) % count);
        }
    }["DocumentViewer.useCallback[showPrevious]"], [
        count,
        safeIndex,
        onIndexChange
    ]);
    const showNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "DocumentViewer.useCallback[showNext]": ()=>{
            if (count > 1) onIndexChange((safeIndex + 1) % count);
        }
    }["DocumentViewer.useCallback[showNext]"], [
        count,
        safeIndex,
        onIndexChange
    ]);
    // Fokus beim Öffnen auf „Schließen“ (data-autofocus), beim Schließen zurück
    // zum Auslöser. Escape behandelt der Viewer selbst (unten).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useDialogLifecycle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogLifecycle"])(true, rootRef, {
        onClose,
        closeOnEscape: false,
        mounted,
        lockScroll: false
    });
    const latest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        onClose,
        showPrevious,
        showNext,
        layer
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentViewer.useEffect": ()=>{
            latest.current = {
                onClose,
                showPrevious,
                showNext,
                layer
            };
        }
    }["DocumentViewer.useEffect"], [
        onClose,
        showPrevious,
        showNext,
        layer
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DocumentViewer.useEffect": ()=>{
            const handleKeyDown = {
                "DocumentViewer.useEffect.handleKeyDown": (event)=>{
                    const current = latest.current;
                    // Liegt ein Modal über der Vorschau, gehören ihm die Tasten
                    if (current.layer === 'content' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$isTypingContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOpenModal"])()) return;
                    const target = event.target instanceof Element ? event.target : null;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$isTypingContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTypingContext"])(target)) return;
                    if (event.altKey || event.ctrlKey || event.metaKey) return;
                    if (event.key === 'Escape') {
                        // Über einem Modal: nur die Vorschau schließen, nicht das Modal darunter
                        if (current.layer === 'dialog') event.stopPropagation();
                        event.preventDefault();
                        current.onClose();
                    } else if (event.key === 'ArrowLeft') {
                        event.preventDefault();
                        current.showPrevious();
                    } else if (event.key === 'ArrowRight') {
                        event.preventDefault();
                        current.showNext();
                    }
                }
            }["DocumentViewer.useEffect.handleKeyDown"];
            // Capture-Phase am window: läuft vor dem Escape-Hörer des Modals (document)
            window.addEventListener('keydown', handleKeyDown, true);
            return ({
                "DocumentViewer.useEffect": ()=>window.removeEventListener('keydown', handleKeyDown, true)
            })["DocumentViewer.useEffect"];
        }
    }["DocumentViewer.useEffect"], []);
    if (!mounted) return null;
    if (!item && !emptyState) return null;
    const downloadLabel = tr('documentViewer.download', {
        defaultValue: 'Herunterladen'
    });
    const counterLabel = tr('documentViewer.counter', {
        defaultValue: '{{current}} / {{total}}',
        current: safeIndex + 1,
        total: count
    });
    const renderBody = ()=>{
        if (!item) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenterState"], {
                "data-testid": `${dataTestId}-empty`,
                children: emptyState
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                lineNumber: 226,
                columnNumber: 14
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (preview.status === 'loading') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenterState"], {
                "data-testid": `${dataTestId}-loading`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$LoadingSpinner$2f$LoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LoadingSpinner"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                    lineNumber: 231,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                lineNumber: 230,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (preview.status === 'pdf') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$PdfCanvasPages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PdfCanvasPages"], {
                data: preview.data,
                onError: failPreview,
                dataTestId: dataTestId
            }, item.id, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                lineNumber: 237,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        if (preview.status === 'image') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageFrame"], {
                "data-testid": `${dataTestId}-image`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: preview.src,
                    alt: item.name,
                    onError: failPreview
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                    lineNumber: 249,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                lineNumber: 247,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CenterState"], {
            "data-testid": preview.status === 'error' ? `${dataTestId}-error` : `${dataTestId}-no-preview`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: preview.status === 'error' ? tr('documentViewer.loadError', {
                        defaultValue: 'Die Vorschau konnte nicht geladen werden.'
                    }) : tr('documentViewer.noPreview', {
                        defaultValue: 'Für diese Datei gibt es keine Vorschau.'
                    })
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                    lineNumber: 257,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                renderDownload(`${dataTestId}-fallback-download`, true)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
            lineNumber: 254,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    function renderDownload(testId, withLabel) {
        if (!item) return null;
        if (item.downloadUrl) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolLink"], {
                href: item.downloadUrl,
                download: item.name,
                "aria-label": downloadLabel,
                title: downloadLabel,
                "data-testid": testId,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDownload$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    withLabel && downloadLabel
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                lineNumber: 275,
                columnNumber: 9
            }, this);
        }
        if (item.onDownload) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                type: "button",
                onClick: item.onDownload,
                "aria-label": downloadLabel,
                title: downloadLabel,
                "data-testid": testId,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDownload$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                        lineNumber: 296,
                        columnNumber: 11
                    }, this),
                    withLabel && downloadLabel
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, this);
        }
        return null;
    }
    const viewer = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: rootRef,
        $layer: layer,
        $drawerOpen: layer === 'content' && !!sidebar?.isRightSidebarOpen,
        role: "dialog",
        "aria-modal": layer === 'dialog' ? 'true' : 'false',
        "aria-labelledby": `${dataTestId}-title`,
        tabIndex: -1,
        "data-testid": dataTestId,
        "data-layer": layer,
        "data-item-id": item?.id ?? 'none',
        "data-kind": item?.kind ?? 'none',
        "data-index": safeIndex,
        "data-count": count,
        "data-state": item ? preview.status : 'empty',
        "data-panel": panel ? 'true' : 'false',
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Panel"], {
                $layer: layer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Title"], {
                                id: `${dataTestId}-title`,
                                title: item?.name ?? emptyTitle ?? '',
                                "data-testid": `${dataTestId}-title`,
                                children: item?.name ?? emptyTitle ?? ''
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Counter"], {
                                "data-testid": `${dataTestId}-counter`,
                                children: counterLabel
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Actions"], {
                                children: [
                                    count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                                                type: "button",
                                                onClick: showPrevious,
                                                "aria-label": tr('documentViewer.previous', {
                                                    defaultValue: 'Vorheriges Dokument'
                                                }),
                                                title: tr('documentViewer.previous', {
                                                    defaultValue: 'Vorheriges Dokument'
                                                }),
                                                "data-testid": `${dataTestId}-prev`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowLeft$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                                                lineNumber: 333,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                                                type: "button",
                                                onClick: showNext,
                                                "aria-label": tr('documentViewer.next', {
                                                    defaultValue: 'Nächstes Dokument'
                                                }),
                                                title: tr('documentViewer.next', {
                                                    defaultValue: 'Nächstes Dokument'
                                                }),
                                                "data-testid": `${dataTestId}-next`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconArrowRight$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                                                lineNumber: 342,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    item && renderActions?.(item),
                                    renderHeaderActions?.(),
                                    renderDownload(`${dataTestId}-download`, false),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToolButton"], {
                                        type: "button",
                                        onClick: onClose,
                                        "aria-label": tr('documentViewer.close', {
                                            defaultValue: 'Vorschau schließen'
                                        }),
                                        title: tr('documentViewer.close', {
                                            defaultValue: 'Vorschau schließen'
                                        }),
                                        "data-testid": `${dataTestId}-close`,
                                        "data-autofocus": true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Body"], {
                        "data-testid": `${dataTestId}-body`,
                        children: renderBody()
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                        lineNumber: 368,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                lineNumber: 322,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            panel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SidePanel"], {
                $layer: layer,
                "data-testid": `${dataTestId}-panel`,
                children: panel
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
                lineNumber: 371,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx",
        lineNumber: 305,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(viewer, document.body);
};
_s1(DocumentViewer, "4/w6p1PV5oM4wZQefEqhO6ke1cU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOptionalSidebar"],
        usePreview,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useDialogLifecycle$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDialogLifecycle"]
    ];
});
_c = DocumentViewer;
var _c;
__turbopack_context__.k.register(_c, "DocumentViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/DocumentViewer/PdfCanvasPages.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PdfCanvasPages",
    ()=>PdfCanvasPages
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$pdfjs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/pdfjs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
const PdfCanvasPages = ({ data, onError, dataTestId })=>{
    _s();
    const [doc, setDoc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pages, setPages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const onErrorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(onError);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfCanvasPages.useEffect": ()=>{
            onErrorRef.current = onError;
        }
    }["PdfCanvasPages.useEffect"], [
        onError
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfCanvasPages.useEffect": ()=>{
            let cancelled = false;
            // Der Ladeauftrag besitzt das Dokument: destroy() räumt es ab, der geteilte Worker bleibt (lib/pdfjs)
            let destroyTask = null;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$pdfjs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadPdfjs"])().then({
                "PdfCanvasPages.useEffect": (pdfjs)=>{
                    if (cancelled) return null;
                    const task = pdfjs.getDocument({
                        data: new Uint8Array(data.slice(0))
                    });
                    destroyTask = ({
                        "PdfCanvasPages.useEffect": ()=>task.destroy()
                    })["PdfCanvasPages.useEffect"];
                    return task.promise;
                }
            }["PdfCanvasPages.useEffect"]).then({
                "PdfCanvasPages.useEffect": async (pdf)=>{
                    if (!pdf || cancelled) return;
                    const sizes = [];
                    for(let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++){
                        const page = await pdf.getPage(pageNumber);
                        const viewport = page.getViewport({
                            scale: 1
                        });
                        sizes.push({
                            width: viewport.width,
                            height: viewport.height
                        });
                    }
                    if (cancelled) return;
                    setDoc(pdf);
                    setPages(sizes);
                }
            }["PdfCanvasPages.useEffect"]).catch({
                "PdfCanvasPages.useEffect": (error)=>{
                    if (!cancelled) onErrorRef.current(error);
                }
            }["PdfCanvasPages.useEffect"]);
            return ({
                "PdfCanvasPages.useEffect": ()=>{
                    cancelled = true;
                    if (destroyTask) void destroyTask();
                }
            })["PdfCanvasPages.useEffect"];
        }
    }["PdfCanvasPages.useEffect"], [
        data
    ]);
    if (!doc) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageList"], {
        "data-testid": `${dataTestId}-pages`,
        "data-page-count": pages.length,
        children: pages.map((size, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PdfPage, {
                doc: doc,
                pageNumber: index + 1,
                size: size,
                dataTestId: `${dataTestId}-page-${index + 1}`
            }, index, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/PdfCanvasPages.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/PdfCanvasPages.tsx",
        lineNumber: 74,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PdfCanvasPages, "ZZu1tpCnrcYkmcTeaqJxnElmeVY=");
_c = PdfCanvasPages;
const PdfPage = ({ doc, pageNumber, size, dataTestId })=>{
    _s1();
    const frameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Ohne IntersectionObserver (alte Browser, jsdom) sofort rendern
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "PdfPage.useState": ()=>typeof IntersectionObserver === 'undefined'
    }["PdfPage.useState"]);
    const [renderWidth, setRenderWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [rendered, setRendered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Sichtbarkeit: rendern, sobald die Seite bis zu einer Bildschirmhöhe
    // entfernt ist; weit außerhalb Puffer freigeben.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfPage.useEffect": ()=>{
            const frame = frameRef.current;
            if (!frame || typeof IntersectionObserver === 'undefined') return;
            const observer = new IntersectionObserver({
                "PdfPage.useEffect": (entries)=>{
                    for (const entry of entries)setVisible(entry.isIntersecting);
                }
            }["PdfPage.useEffect"], {
                rootMargin: '100% 0px'
            });
            observer.observe(frame);
            return ({
                "PdfPage.useEffect": ()=>observer.disconnect()
            })["PdfPage.useEffect"];
        }
    }["PdfPage.useEffect"], []);
    // Breite verfolgen: nach Größenänderung scharf neu rendern
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfPage.useEffect": ()=>{
            const frame = frameRef.current;
            if (!frame) return;
            const measure = {
                "PdfPage.useEffect.measure": ()=>setRenderWidth(Math.round(frame.clientWidth))
            }["PdfPage.useEffect.measure"];
            measure();
            if (typeof ResizeObserver === 'undefined') return;
            const observer = new ResizeObserver(measure);
            observer.observe(frame);
            return ({
                "PdfPage.useEffect": ()=>observer.disconnect()
            })["PdfPage.useEffect"];
        }
    }["PdfPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PdfPage.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            if (!visible) {
                // Puffer freigeben — der Platzhalter behält das Seitenverhältnis
                canvas.width = 0;
                canvas.height = 0;
                setRendered(false);
                return;
            }
            let cancelled = false;
            let task = null;
            const cssWidth = renderWidth || size.width;
            const pixelRatio = ("TURBOPACK compile-time truthy", 1) ? Math.min(window.devicePixelRatio || 1, 2) : "TURBOPACK unreachable";
            const scale = cssWidth * pixelRatio / size.width;
            doc.getPage(pageNumber).then({
                "PdfPage.useEffect": (page)=>{
                    if (cancelled) return undefined;
                    const viewport = page.getViewport({
                        scale
                    });
                    canvas.width = Math.floor(viewport.width);
                    canvas.height = Math.floor(viewport.height);
                    task = page.render({
                        canvas,
                        viewport
                    });
                    return task.promise;
                }
            }["PdfPage.useEffect"]).then({
                "PdfPage.useEffect": ()=>{
                    if (!cancelled) setRendered(true);
                }
            }["PdfPage.useEffect"]).catch({
                "PdfPage.useEffect": ()=>{
                // Abgebrochenes Rendern (Blättern, Größenänderung) ist kein Fehler
                }
            }["PdfPage.useEffect"]);
            return ({
                "PdfPage.useEffect": ()=>{
                    cancelled = true;
                    task?.cancel();
                }
            })["PdfPage.useEffect"];
        }
    }["PdfPage.useEffect"], [
        doc,
        pageNumber,
        size.width,
        visible,
        renderWidth
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageFrame"], {
        ref: frameRef,
        $ratio: size.width / size.height,
        "data-testid": dataTestId,
        "data-rendered": rendered ? 'true' : 'false',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/PdfCanvasPages.tsx",
            lineNumber: 177,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/DocumentViewer/PdfCanvasPages.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(PdfPage, "6lX8LzTwm9JJgisVf+SD3DhGGK4=");
_c1 = PdfPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "PdfCanvasPages");
__turbopack_context__.k.register(_c1, "PdfPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/DocumentViewer/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$viewerItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/viewerItems.ts [app-client] (ecmascript)");
// Knopf-Optik für zusätzliche Kopf-Aktionen (renderActions)
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.styles.ts [app-client] (ecmascript)");
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/DocumentViewer/viewerItems.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "salesforceFilesToViewerItems",
    ()=>salesforceFilesToViewerItems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$contentDisposition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/contentDisposition.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$files$2f$filePreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/files/filePreview.ts [app-client] (ecmascript)");
;
;
function salesforceFilesToViewerItems(files) {
    return files.filter((file)=>!!file.downloadUrl).map((file)=>{
        const kind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$files$2f$filePreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["previewKindForExtension"])(file.fileExtension);
        return {
            id: file.id,
            name: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$contentDisposition$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinFileName"])(file.title, file.fileExtension),
            kind,
            previewUrl: kind ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$files$2f$filePreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withInlineDisposition"])(file.downloadUrl) : undefined,
            downloadUrl: file.downloadUrl
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CueBadge",
    ()=>CueBadge,
    "CueFieldButton",
    ()=>CueFieldButton,
    "DesignToggle",
    ()=>DesignToggle,
    "DesignToggleButton",
    ()=>DesignToggleButton,
    "DesignToggleLabel",
    ()=>DesignToggleLabel,
    "Divider",
    ()=>Divider,
    "DocInfo",
    ()=>DocInfo,
    "DocLabel",
    ()=>DocLabel,
    "DocRecipient",
    ()=>DocRecipient,
    "DocRow",
    ()=>DocRow,
    "LangButton",
    ()=>LangButton,
    "MenuButton",
    ()=>MenuButton,
    "MissingList",
    ()=>MissingList,
    "ModalContent",
    ()=>ModalContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/assets/theme/colors.ts [app-client] (ecmascript)");
'use client';
;
;
const MenuButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "EntityDocumentMenu.styles__MenuButton",
    componentId: "sc-e454bc5d-0"
})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_LIGHT};
  border-radius: 6px;
  background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].BLACK};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_LIGHT};
    border-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
const ModalContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityDocumentMenu.styles__ModalContent",
    componentId: "sc-e454bc5d-1"
})`
  background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  border-radius: 12px;
  padding: 24px;
  width: 460px;
  max-width: calc(100vw - 32px);
  max-height: calc(100vh - 64px);
  overflow-y: auto;
`;
const DocRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityDocumentMenu.styles__DocRow",
    componentId: "sc-e454bc5d-2"
})`
  display: flex;
  align-items: center;
  /* #1651: mit den Vorschau-Knöpfen passen DE+EN nicht immer in eine Zeile */
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 6px;
  transition: background 0.15s;

  &:hover {
    background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_LIGHT};
  }
`;
const DocInfo = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityDocumentMenu.styles__DocInfo",
    componentId: "sc-e454bc5d-3"
})`
  flex: 1 1 140px;
  min-width: 0;
`;
const DocLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityDocumentMenu.styles__DocLabel",
    componentId: "sc-e454bc5d-4"
})`
  font-size: 13px;
  font-weight: 500;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].BLACK};
`;
const DocRecipient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EntityDocumentMenu.styles__DocRecipient",
    componentId: "sc-e454bc5d-5"
})`
  font-size: 11px;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_DARK};
  margin-left: 6px;
`;
const LangButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "EntityDocumentMenu.styles__LangButton",
    componentId: "sc-e454bc5d-6"
})`
  padding: 4px 10px;
  border: 1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_LIGHT};
  border-radius: 4px;
  background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  font-size: 11px;
  font-weight: 600;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
  cursor: ${({ $loading })=>$loading ? 'wait' : 'pointer'};
  opacity: ${({ $loading })=>$loading ? 0.6 : 1};
  transition: all 0.15s;
  min-width: 36px;
  text-align: center;

  /* #1651: Auge der Vorschau-Knöpfe */
  svg {
    width: 12px;
    height: 12px;
    vertical-align: middle;
  }

  &:hover:not(:disabled) {
    background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
    border-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;
const Divider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hr.withConfig({
    displayName: "EntityDocumentMenu.styles__Divider",
    componentId: "sc-e454bc5d-7"
})`
  border: none;
  border-top: 1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_LIGHT};
  margin: 8px 0;
`;
const DesignToggle = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityDocumentMenu.styles__DesignToggle",
    componentId: "sc-e454bc5d-8"
})`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 10px;
`;
const DesignToggleLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EntityDocumentMenu.styles__DesignToggleLabel",
    componentId: "sc-e454bc5d-9"
})`
  font-size: 11px;
  font-weight: 600;
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_DARK};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-right: 4px;
`;
const DesignToggleButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "EntityDocumentMenu.styles__DesignToggleButton",
    componentId: "sc-e454bc5d-10"
})`
  padding: 4px 12px;
  border: 1px solid ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].GREY_LIGHT};
  border-radius: 999px;
  background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].BLACK};
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
  }

  &[data-active='true'] {
    background: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
    border-color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].PRIMARY};
    color: ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$assets$2f$theme$2f$colors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlastshipColors"].WHITE};
  }
`;
const CueBadge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "EntityDocumentMenu.styles__CueBadge",
    componentId: "sc-e454bc5d-11"
})`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 600;
  cursor: ${({ $complete })=>$complete ? 'default' : 'pointer'};
  border: 1px solid ${({ theme, $complete })=>$complete ? theme.palette.status.success.border : theme.palette.status.warning.border};
  background: ${({ theme, $complete })=>$complete ? theme.palette.status.success.bg : theme.palette.status.warning.bg};
  color: ${({ theme, $complete })=>$complete ? theme.palette.status.success.text : theme.palette.status.warning.text};
`;
const CueFieldButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "EntityDocumentMenu.styles__CueFieldButton",
    componentId: "sc-e454bc5d-12"
})`
  border: none;
  background: transparent;
  padding: 0;
  margin-right: 6px;
  font: inherit;
  cursor: pointer;
  color: inherit;
  text-decoration: underline dotted;

  &:hover {
    text-decoration: underline;
  }
`;
const MissingList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "EntityDocumentMenu.styles__MissingList",
    componentId: "sc-e454bc5d-13"
})`
  margin: 4px 0 8px;
  padding: 6px 10px 6px 26px;
  border-radius: 6px;
  background: ${({ theme })=>theme.palette.status.warning.bg};
  font-size: 11px;
  color: ${({ theme })=>theme.palette.status.warning.text};

  li {
    margin: 2px 0;
  }

  li strong {
    white-space: nowrap;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EntityDocumentMenu",
    ()=>EntityDocumentMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * EntityDocumentMenu (#422)
 *
 * Generisches Dokument-Menü je Objekt — das verallgemeinerte Order-Muster
 * (#196): je Dokumenttyp Download je angebotener Sprache
 * (#2088: DOCUMENT_OFFERED_LANGUAGES, vorerst de/en), Ablage in Salesforce-Files
 * (ContentVersion am Record → Anhänge-Sektion) und Mail-Versand mit
 * vorbelegten Empfängern aus dem Record. Welche Dokumente ein Objekt hat,
 * steht in der DOCUMENT_REGISTRY — die Komponente ist config-getrieben und
 * selbst-gatend: ohne Registry-Eintrag oder für Kundenrollen (user/rigk)
 * rendert sie nichts (gleiche Gate-Logik wie MailTemplateAction).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDocuments$2f$IconDocuments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconDocuments/IconDocuments.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileEye$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFileEye/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/iconButtonColors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$blobDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/blobDownload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SendViaMailModal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/AttachmentPreviewList/AttachmentPreviewList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolButton__as__DocumentViewerActionButton$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.styles.ts [app-client] (ecmascript) <export ToolButton as DocumentViewerActionButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$generatedPdfPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/generatedPdfPreview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$documentRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/documents/documentRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useQuickOpenEntity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useQuickOpenEntity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiErrorText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/pdf/documentLanguages.ts [app-client] (ecmascript)");
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
const EntityDocumentMenu = ({ entityType, entityId, entityName, record, variant = 'button', dataTestId = 'entity-documents-btn' })=>{
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    // #1626: Feld- und Objekt-Labels der Fehlend-Liste übersetzt
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    const { tr, i18n } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    // #1637: Dokumentname im Menü in der Sprache der Oberfläche — welche
    // Sprache das PDF hat, wählen weiterhin die DE-/EN-Knöpfe je Dokument.
    const isGermanUi = (i18n?.language ?? 'de').startsWith('de');
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loadingKey, setLoadingKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mailContext, setMailContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // #419: aufgeklappte Fehlend-Liste (ein Dokumenttyp gleichzeitig)
    const [openCue, setOpenCue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // #422: Design-Umschalter (Standard vs. Minimal) — reicht ?design=minimal
    // an alle PDF-Aktionen durch. Minimal ist der Standard (AB 2026-07-17).
    const [design, setDesign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('minimal');
    const { quickOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useQuickOpenEntity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickOpenEntity"])();
    // #1651: In-App-Vorschau der erzeugten Dokumente (Sprache + Position)
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Erzeugte Vorschauen je PDF-Pfad (Typ, Sprache, Design) — Download und
    // Versand aus der Vorschau nutzen dieselbe Datei
    const previews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    /**
   * #455 Teil 2: Sprung vom Cue-Eintrag zum auszufüllenden Feld. Flacher Pfad
   * → Drawer des Records selbst; `X__r.`-Pfad → Drawer des verknüpften
   * Objekts (Lookup-Feld aus dem ersten Segment). Bei leerem Lookup gibt es
   * kein Ziel — Hinweis statt Sprung. Mehr-Hop-Pfade öffnen den ersten Hop
   * ohne Feld-Highlight.
   */ const jumpToMissingField = (path)=>{
        const segments = path.split('.');
        const fieldApiName = segments[segments.length - 1];
        if (segments.length === 1) {
            quickOpen(entityId, record ?? {}, fieldApiName);
            setIsOpen(false);
            return;
        }
        const root = segments[0];
        const lookupField = root.endsWith('__r') ? root.replace(/__r$/, '__c') : `${root}Id`;
        const targetId = record?.[lookupField];
        if (typeof targetId !== 'string' || !targetId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('documents.menu.emptyLookup', {
                defaultValue: 'Verknüpfung ist leer — bitte zuerst das Lookup-Feld füllen'
            }));
            return;
        }
        const related = record?.[root] ?? {};
        quickOpen(targetId, related, segments.length === 2 ? fieldApiName : undefined);
        setIsOpen(false);
    };
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$documentRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentConfig"])(entityType);
    // #1240 (M-19): nie die Id als Anzeigename — weder im Modal-Titel noch im
    // Mail-Betreff/Anhangname fuer externe Empfaenger. Ohne echten Namen zeigt
    // stattdessen der Objektname (z. B. „Order").
    const displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EntityDocumentMenu.useMemo[displayName]": ()=>entityName ?? (config ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$documentRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDocumentEntityName"])(config, record, entityId) : null) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityLabel"])(entityType)
    }["EntityDocumentMenu.useMemo[displayName]"], [
        entityName,
        config,
        record,
        entityId,
        entityType
    ]);
    const pdfPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntityDocumentMenu.useCallback[pdfPath]": (docType, lang)=>{
            const base = `${config.pdfBasePath}/${entityId}/pdf?type=${docType}&lang=${lang}`;
            return design === 'minimal' ? `${base}&design=minimal` : base;
        }
    }["EntityDocumentMenu.useCallback[pdfPath]"], [
        config,
        entityId,
        design
    ]);
    /** #1651: Vorschau je Pfad einmal erzeugen; Fehler nicht zwischenspeichern */ const loadPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntityDocumentMenu.useCallback[loadPreview]": (docType, lang)=>{
            const path = pdfPath(docType, lang);
            const cached = previews.current.get(path);
            if (cached) return cached;
            const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$generatedPdfPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchGeneratedPdfPreview"])(path);
            previews.current.set(path, request);
            request.catch({
                "EntityDocumentMenu.useCallback[loadPreview]": ()=>previews.current.delete(path)
            }["EntityDocumentMenu.useCallback[loadPreview]"]);
            return request;
        }
    }["EntityDocumentMenu.useCallback[loadPreview]"], [
        pdfPath
    ]);
    const handleDownload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntityDocumentMenu.useCallback[handleDownload]": async (docType, lang)=>{
            const key = `${docType}-${lang}`;
            if (loadingKey) return;
            setLoadingKey(key);
            try {
                const { blob, filename } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["apiDownloadBlob"])(pdfPath(docType, lang), // Artefakte-Review M-5: Fallback ohne Record-Id (der Server liefert
                // den echten Namen per Content-Disposition).
                `${docType}.pdf`);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$blobDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerBlobDownload"])(blob, filename);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('documents.menu.pdfCreated', {
                    defaultValue: 'PDF erstellt: {{type}}',
                    type: docType
                }));
            } catch (err) {
                console.error('[EntityDocumentMenu] Download error:', err);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('documents.menu.downloadFailed', {
                    defaultValue: 'PDF-Download fehlgeschlagen'
                }));
            } finally{
                setLoadingKey(null);
            }
        }
    }["EntityDocumentMenu.useCallback[handleDownload]"], [
        entityId,
        loadingKey,
        pdfPath,
        tr
    ]);
    const handleSaveToSf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntityDocumentMenu.useCallback[handleSaveToSf]": async (docType, lang)=>{
            const key = `${docType}-${lang}-sf`;
            if (loadingKey) return;
            setLoadingKey(key);
            try {
                const { data } = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`${pdfPath(docType, lang)}&save=sf`);
                if (data.success) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('documents.menu.savedToSf', {
                        defaultValue: 'In Salesforce gespeichert: {{title}}',
                        title: data.title ?? docType
                    }));
                } else {
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('documents.menu.saveFailed', {
                        defaultValue: 'Speichern fehlgeschlagen: {{error}}',
                        error: data.error ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateApiMessage"])(tr, data.error) : 'unknown'
                    }));
                }
            } catch (err) {
                console.error('[EntityDocumentMenu] SF save error:', err);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('documents.menu.saveToSfFailed', {
                    defaultValue: 'Speichern in Salesforce fehlgeschlagen'
                }));
            } finally{
                setLoadingKey(null);
            }
        }
    }["EntityDocumentMenu.useCallback[handleSaveToSf]"], [
        loadingKey,
        pdfPath,
        tr
    ]);
    const openMail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntityDocumentMenu.useCallback[openMail]": (doc, lang)=>{
            // Empfänger aus dem Record auflösen (auch `__r.`-Pfade wie
            // Kontakt_Anlieferung__r.Email); leere/ungültige Werte fallen raus.
            const recipients = record ? doc.recipientFields.map({
                "EntityDocumentMenu.useCallback[openMail]": (f)=>f.split('.').reduce({
                        "EntityDocumentMenu.useCallback[openMail]": (node, seg)=>node && typeof node === 'object' ? node[seg] : undefined
                    }["EntityDocumentMenu.useCallback[openMail]"], record)
            }["EntityDocumentMenu.useCallback[openMail]"]).filter({
                "EntityDocumentMenu.useCallback[openMail]": (v)=>typeof v === 'string' && v.includes('@')
            }["EntityDocumentMenu.useCallback[openMail]"]) : [];
            setMailContext({
                doc,
                lang,
                recipients
            });
            setIsOpen(false);
        }
    }["EntityDocumentMenu.useCallback[openMail]"], [
        record
    ]);
    /** #1651: Versand aus der Vorschau — mit der angesehenen Datei */ const openMailFromPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntityDocumentMenu.useCallback[openMailFromPreview]": async (doc, lang)=>{
            const cached = previews.current.get(pdfPath(doc.type, lang));
            const previewed = cached ? await cached.catch({
                "EntityDocumentMenu.useCallback[openMailFromPreview]": ()=>undefined
            }["EntityDocumentMenu.useCallback[openMailFromPreview]"]) : undefined;
            setPreview(null);
            openMail(doc, lang);
            if (previewed) setMailContext({
                "EntityDocumentMenu.useCallback[openMailFromPreview]": (current)=>current ? {
                        ...current,
                        preview: previewed
                    } : current
            }["EntityDocumentMenu.useCallback[openMailFromPreview]"]);
        }
    }["EntityDocumentMenu.useCallback[openMailFromPreview]"], [
        openMail,
        pdfPath
    ]);
    /** #1651: Download aus der Vorschau — ohne zweite Erzeugung */ const downloadFromPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntityDocumentMenu.useCallback[downloadFromPreview]": async (docType, lang)=>{
            const cached = previews.current.get(pdfPath(docType, lang));
            const previewed = cached ? await cached.catch({
                "EntityDocumentMenu.useCallback[downloadFromPreview]": ()=>undefined
            }["EntityDocumentMenu.useCallback[downloadFromPreview]"]) : undefined;
            if (!previewed) {
                await handleDownload(docType, lang);
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$blobDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerBlobDownload"])(previewed.blob, previewed.filename ?? `${docType}.pdf`);
        }
    }["EntityDocumentMenu.useCallback[downloadFromPreview]"], [
        handleDownload,
        pdfPath
    ]);
    const mailModalProps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EntityDocumentMenu.useMemo[mailModalProps]": ()=>{
            if (!mailContext) return null;
            const { doc, lang, recipients } = mailContext;
            const german = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGermanDocumentLanguage"])(lang);
            const label = german ? doc.labelDe : doc.labelEn;
            const subject = `${label}: ${displayName}`;
            // Vorbelegung nach der Grundsprache des Dokuments (Mailtext bleibt editierbar)
            const body = german ? `Sehr geehrte Damen und Herren,\n\nanbei senden wir Ihnen: ${label} zu ${displayName}.\n\nMit freundlichen Grüßen` : `Dear partner,\n\nplease find attached the ${label} for ${displayName}.\n\nKind regards`;
            return {
                entityType: label,
                entityId,
                entityName: displayName,
                pdfApiPath: pdfPath(doc.type, lang),
                defaultFilename: mailContext.preview?.filename ?? `${doc.type}-${displayName}.pdf`,
                // #1651: Vorschau aus dem Dokumente-Modal → dieselbe Datei verschicken
                previewToken: mailContext.preview?.token ?? undefined,
                previewBlob: mailContext.preview?.blob,
                defaultRecipients: recipients,
                defaultSubject: subject,
                defaultBody: body,
                // #1018: Vorlagen-Registry braucht das Objekt, nicht das Dokumentlabel
                templateEntityType: entityType
            };
        }
    }["EntityDocumentMenu.useMemo[mailModalProps]"], [
        mailContext,
        entityId,
        entityType,
        displayName,
        pdfPath
    ]);
    // #1651: Vorschau-Einträge — alle Dokumente der gewählten Sprache, damit
    // im Viewer durchgeschaltet werden kann; erzeugt wird erst beim Anzeigen.
    const previewDocs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EntityDocumentMenu.useMemo[previewDocs]": ()=>preview && config ? config.types.filter({
                "EntityDocumentMenu.useMemo[previewDocs]": (doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentSupportsLanguage"])(doc, preview.lang)
            }["EntityDocumentMenu.useMemo[previewDocs]"]) : []
    }["EntityDocumentMenu.useMemo[previewDocs]"], [
        preview,
        config
    ]);
    const previewItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EntityDocumentMenu.useMemo[previewItems]": ()=>previewDocs.map({
                "EntityDocumentMenu.useMemo[previewItems]": (doc)=>{
                    const lang = preview?.lang ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DOCUMENT_LANGUAGE"];
                    return {
                        id: `${doc.type}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentLanguageSlug"])(lang)}`,
                        name: `${isGermanUi ? doc.labelDe : doc.labelEn} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentLanguageSlug"])(lang).toUpperCase()})`,
                        kind: 'pdf',
                        loadData: ({
                            "EntityDocumentMenu.useMemo[previewItems]": ()=>loadPreview(doc.type, lang).then({
                                    "EntityDocumentMenu.useMemo[previewItems]": (result)=>result.blob
                                }["EntityDocumentMenu.useMemo[previewItems]"])
                        })["EntityDocumentMenu.useMemo[previewItems]"],
                        onDownload: ({
                            "EntityDocumentMenu.useMemo[previewItems]": ()=>void downloadFromPreview(doc.type, lang)
                        })["EntityDocumentMenu.useMemo[previewItems]"]
                    };
                }
            }["EntityDocumentMenu.useMemo[previewItems]"])
    }["EntityDocumentMenu.useMemo[previewItems]"], [
        previewDocs,
        preview,
        isGermanUi,
        loadPreview,
        downloadFromPreview
    ]);
    // Selbst-gatend: Kundenrollen, interne-nur-Objekte, fehlender Registry-
    // Eintrag oder leere Liste. Dieselbe Regel wie das Server-Gate der
    // PDF-Routen (canRoleGenerateDocuments) — getrennt gepflegt drifteten die
    // beiden auseinander.
    const hideForRole = session?.user?.role !== undefined && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$documentRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canRoleGenerateDocuments"])(entityType, session.user.role);
    if (hideForRole || !config || config.types.length === 0) return null;
    // #422 review: Nur admin/staff sehen den ungemaskten Record — die Detail-
    // Route lädt die Registry-Felder (Empfänger-Mails + contentFields) nur für
    // diese Rollen, und getVisibleFields maskiert sie für alle anderen. Für
    // agent/accounting/… wären Vollständigkeits-Cue (zählte maskierte Felder
    // als "fehlend") und Mail-Vorbelegung (immer leer, obwohl in SF befüllt)
    // still falsch — daher beide Affordances an die Maskierungs-Regel koppeln.
    // #1888: dazu Rollen mit Dokument-Freigabe genau auf diesem Objekt
    // (accounting → Abrechnung, volle Feldsicht seit #1180).
    const hasFullFieldVisibility = !!session?.user?.role && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$documentRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasFullDocumentFieldVisibility"])(entityType, session.user.role);
    const openPreview = (docType, lang)=>{
        const docs = config.types.filter((doc)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentSupportsLanguage"])(doc, lang));
        const index = docs.findIndex((doc)=>doc.type === docType);
        if (index >= 0) setPreview({
            lang,
            index
        });
    };
    const renderPreviewActions = (item)=>{
        const doc = previewDocs.find((candidate)=>preview && `${candidate.type}-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentLanguageSlug"])(preview.lang)}` === item.id);
        if (!doc || !preview) return null;
        const canMailDoc = doc.supportsMail && (hasFullFieldVisibility || doc.recipientFields.length === 0);
        const saveLabel = tr('documents.menu.saveToSfShort', {
            defaultValue: 'In Salesforce ablegen'
        });
        const mailLabel = tr('documents.menu.mailShort', {
            defaultValue: 'Per E-Mail senden'
        });
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolButton__as__DocumentViewerActionButton$3e$__["DocumentViewerActionButton"], {
                    type: "button",
                    onClick: ()=>handleSaveToSf(doc.type, preview.lang),
                    disabled: !!loadingKey,
                    "aria-label": saveLabel,
                    title: saveLabel,
                    "data-testid": "doc-viewer-save-sf",
                    children: "☁"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                    lineNumber: 396,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                canMailDoc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__ToolButton__as__DocumentViewerActionButton$3e$__["DocumentViewerActionButton"], {
                    type: "button",
                    onClick: ()=>void openMailFromPreview(doc, preview.lang),
                    "aria-label": mailLabel,
                    title: mailLabel,
                    "data-testid": "doc-viewer-mail",
                    children: "✉"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                    lineNumber: 407,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
            lineNumber: 395,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    const documentsLabel = tr('documents.menu.title', {
        defaultValue: 'Dokumente'
    });
    const headline = tr('documents.menu.headline', {
        defaultValue: 'Dokumente: {{name}}',
        name: displayName
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            variant === 'icon' ? // #916: IconDocuments statt IconFilePdf — im PageHead steht der Trigger
            // neben „PDF herunterladen" (IconFilePdf); zwei gleiche Glyphen wären
            // nicht unterscheidbar.
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                onClick: ()=>setIsOpen(true),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDocuments$2f$IconDocuments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDocuments"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                    lineNumber: 435,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                tooltip: documentsLabel,
                ariaLabel: documentsLabel,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].INFO,
                dataTestId: dataTestId
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                lineNumber: 433,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuButton"], {
                type: "button",
                onClick: ()=>setIsOpen(true),
                "data-testid": dataTestId,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconDocuments$2f$IconDocuments$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDocuments"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                        lineNumber: 443,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    documentsLabel
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                lineNumber: 442,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: isOpen,
                onClose: ()=>setIsOpen(false),
                variant: "bare",
                ariaLabel: headline,
                dataTestId: "entity-documents-overlay",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ModalContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                            importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h3,
                            children: headline
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                            lineNumber: 456,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignToggle"], {
                            "data-testid": "doc-design-toggle",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignToggleLabel"], {
                                    children: tr('documents.menu.design', {
                                        defaultValue: 'Design'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                    lineNumber: 459,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignToggleButton"], {
                                    type: "button",
                                    "data-active": design === 'current',
                                    onClick: ()=>setDesign('current'),
                                    "data-testid": "doc-design-current",
                                    children: tr('documents.menu.designStandard', {
                                        defaultValue: 'Standard'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DesignToggleButton"], {
                                    type: "button",
                                    "data-active": design === 'minimal',
                                    onClick: ()=>setDesign('minimal'),
                                    "data-testid": "doc-design-minimal",
                                    children: tr('documents.menu.designMinimal', {
                                        defaultValue: 'Minimal'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                            lineNumber: 479,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        config.types.map((doc)=>{
                            // #419: Vollständigkeits-Cue — welche Inhaltsfelder des Dokuments
                            // sind am Record noch leer? (Nur für Typen mit contentFields und
                            // nur für Rollen mit voller Feld-Sicht, s. hasFullFieldVisibility.)
                            const missing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$documentRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMissingContentFields"])(doc, record);
                            // Positions-Prüfung (rowsSource): leere Quell-Liste bzw. Zeilen
                            // mit fehlenden Pflichtfeldern (z. B. Trade Name) zählen mit.
                            const rowIssues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$documentRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentRowIssues"])(doc, record, ({ position, ident, fields })=>tr('documents.menu.rowMissing', {
                                    defaultValue: 'Position {{position}}{{ident}}: {{fields}} fehlt',
                                    position,
                                    ident,
                                    fields: fields.map((field)=>entityText.text(field)).join(', ')
                                }));
                            const rowIssueCount = rowIssues ? rowIssues.emptyList ? 1 : rowIssues.rowMessages.length : 0;
                            const issueCount = missing.length + rowIssueCount;
                            const hasCue = hasFullFieldVisibility && ((doc.contentFields?.length ?? 0) > 0 || !!doc.rowsSource);
                            // Mail-Versand mit Empfänger-Vorbelegung nur, wenn die Rolle die
                            // Empfängerfelder auch sehen kann (sonst stünde die Vorbelegung
                            // still leer); Dokumente ohne Empfängerfelder bleiben für alle.
                            const canMail = doc.supportsMail && (hasFullFieldVisibility || doc.recipientFields.length === 0);
                            const recipient = entityText.text(doc.recipient);
                            const rowsLabel = doc.rowsSource ? entityText.text(doc.rowsSource.label) : '';
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocRow"], {
                                        "data-testid": `doc-row-${doc.type}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocInfo"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocLabel"], {
                                                    children: [
                                                        isGermanUi ? doc.labelDe : doc.labelEn,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocRecipient"], {
                                                            children: recipient
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                            lineNumber: 513,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        hasCue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CueBadge"], {
                                                            type: "button",
                                                            $complete: issueCount === 0,
                                                            onClick: ()=>issueCount > 0 && setOpenCue(openCue === doc.type ? null : doc.type),
                                                            title: issueCount === 0 ? tr('documents.menu.allFieldsFilled', {
                                                                defaultValue: 'Alle Inhaltsfelder befüllt'
                                                            }) : tr('documents.menu.showMissingFields', {
                                                                defaultValue: 'Fehlende Felder anzeigen'
                                                            }),
                                                            "data-testid": `doc-cue-${doc.type}`,
                                                            children: issueCount === 0 ? tr('documents.menu.complete', {
                                                                defaultValue: '✓ vollständig'
                                                            }) : tr('documents.menu.issues', {
                                                                defaultValue: '⚠ {{count}} Hinweise',
                                                                count: issueCount
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                    lineNumber: 511,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                lineNumber: 510,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOCUMENT_OFFERED_LANGUAGES"].filter((lang)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentSupportsLanguage"])(doc, lang)).map((lang)=>{
                                                const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentLanguageSlug"])(lang);
                                                const code = slug.toUpperCase();
                                                const language = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$pdf$2f$documentLanguages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentLanguageLabel"])(lang);
                                                const key = `${doc.type}-${lang}`;
                                                const sfKey = `${key}-sf`;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangButton"], {
                                                            onClick: ()=>openPreview(doc.type, lang),
                                                            disabled: !!loadingKey,
                                                            "data-testid": `doc-${doc.type}-${slug}-preview`,
                                                            title: tr('documents.menu.previewIn', {
                                                                defaultValue: 'Vorschau ({{language}})',
                                                                language
                                                            }),
                                                            "aria-label": tr('documents.menu.previewIn', {
                                                                defaultValue: 'Vorschau ({{language}})',
                                                                language
                                                            }),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFileEye$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                                lineNumber: 567,
                                                                columnNumber: 27
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                            lineNumber: 554,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangButton"], {
                                                            $loading: loadingKey === key,
                                                            onClick: ()=>handleDownload(doc.type, lang),
                                                            disabled: !!loadingKey,
                                                            "data-testid": `doc-${doc.type}-${slug}`,
                                                            title: tr('documents.menu.downloadIn', {
                                                                defaultValue: 'Download PDF ({{language}})',
                                                                language
                                                            }),
                                                            children: loadingKey === key ? '...' : code
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangButton"], {
                                                            $loading: loadingKey === sfKey,
                                                            onClick: ()=>handleSaveToSf(doc.type, lang),
                                                            disabled: !!loadingKey,
                                                            "data-testid": `doc-${doc.type}-${slug}-sf`,
                                                            title: tr('documents.menu.saveToSfIn', {
                                                                defaultValue: 'In Salesforce speichern ({{language}})',
                                                                language
                                                            }),
                                                            children: loadingKey === sfKey ? '...' : `☁ ${code}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                            lineNumber: 581,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        canMail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LangButton"], {
                                                            onClick: ()=>openMail(doc, lang),
                                                            disabled: !!loadingKey,
                                                            "data-testid": `doc-${doc.type}-${slug}-mail`,
                                                            title: tr('documents.menu.mailIn', {
                                                                defaultValue: 'Per E-Mail senden ({{language}}) → {{recipient}}',
                                                                language,
                                                                recipient
                                                            }),
                                                            children: [
                                                                "✉ ",
                                                                code
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                            lineNumber: 594,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, lang, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                    lineNumber: 553,
                                                    columnNumber: 23
                                                }, ("TURBOPACK compile-time value", void 0));
                                            })
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                        lineNumber: 509,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    openCue === doc.type && issueCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissingList"], {
                                        "data-testid": `doc-cue-${doc.type}-list`,
                                        children: [
                                            rowIssues?.emptyList && doc.rowsSource && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                "data-testid": `doc-cue-${doc.type}-no-rows`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            rowsLabel,
                                                            ":"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    ' ',
                                                    tr('documents.menu.noRows', {
                                                        defaultValue: 'keine Einträge verknüpft — das Dokument hätte keine Positionen'
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                lineNumber: 618,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            rowIssues?.rowMessages.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                rowsLabel,
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                            lineNumber: 627,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        " ",
                                                        message
                                                    ]
                                                }, message, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))),
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$documentRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["groupMissingContentFields"])(entityType, missing, entityText.text).map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                group.objectLabel,
                                                                ":"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                            lineNumber: 635,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        ' ',
                                                        group.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CueFieldButton"], {
                                                                type: "button",
                                                                onClick: ()=>jumpToMissingField(item.path),
                                                                "data-testid": `doc-cue-jump-${doc.type}-${item.path.replace(/\./g, '-')}`,
                                                                children: item.label
                                                            }, item.path, false, {
                                                                fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                                lineNumber: 639,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, group.objectLabel, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                                    lineNumber: 634,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                        lineNumber: 613,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, doc.type, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                lineNumber: 508,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        }),
                        isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                    lineNumber: 660,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttachmentPreviewList$2f$AttachmentPreviewList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttachmentPreviewList"], {
                                    recordId: entityId,
                                    viewerLayer: "dialog",
                                    dataTestId: "doc-attachments"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                                    lineNumber: 661,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                            lineNumber: 659,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                    lineNumber: 455,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                lineNumber: 448,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            preview && previewItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentViewer"], {
                items: previewItems,
                index: preview.index,
                onIndexChange: (index)=>setPreview((current)=>current ? {
                            ...current,
                            index
                        } : current),
                onClose: ()=>setPreview(null),
                layer: "dialog",
                renderActions: renderPreviewActions,
                dataTestId: "doc-viewer"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                lineNumber: 673,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            mailModalProps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SendViaMailModal"], {
                isOpen: !!mailContext,
                onClose: ()=>setMailContext(null),
                ...mailModalProps
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
                lineNumber: 685,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx",
        lineNumber: 428,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(EntityDocumentMenu, "lf9cd2mNSMnKKoAuSQHmErYb8HY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useQuickOpenEntity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickOpenEntity"]
    ];
});
_c = EntityDocumentMenu;
var _c;
__turbopack_context__.k.register(_c, "EntityDocumentMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityPageActions/EntityPageActions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EntityPageActions",
    ()=>EntityPageActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MailTemplateModal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MailTemplateModal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MailTemplateModal$2f$MailTemplateAction$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MailTemplateModal/MailTemplateAction.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityDocumentMenu/EntityDocumentMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CreateEntityMenu/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/CreateEntityMenu/CreateEntityMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityNavigation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/lookupFields.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const EntityPageActions = ({ entityType, entityId, record, entityName, showCreate, testIdPrefix = '', children })=>{
    const enumType = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SF_OBJECT_TO_ENTITY_TYPE"][entityType] ?? entityType;
    const sfObjectName = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_TYPE_TO_SF_OBJECT"][enumType] ?? entityType;
    const createNew = showCreate ?? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityNavigation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_NAVIGATION_CONFIGS"][enumType]?.hasCreate ?? false;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            children,
            entityId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MailTemplateModal$2f$MailTemplateAction$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailTemplateAction"], {
                entityType: sfObjectName,
                entityId: entityId,
                entityName: entityName,
                record: record,
                variant: "icon",
                dataTestId: `${testIdPrefix}mail-template-btn`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityPageActions/EntityPageActions.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            entityId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityDocumentMenu$2f$EntityDocumentMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityDocumentMenu"], {
                entityType: sfObjectName,
                entityId: entityId,
                entityName: entityName,
                record: record,
                variant: "icon",
                dataTestId: `${testIdPrefix}entity-documents-btn`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityPageActions/EntityPageActions.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$CreateEntityMenu$2f$CreateEntityMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CreateEntityMenu"], {
                entityType: enumType,
                entityId: entityId,
                record: record,
                showCreateNew: createNew,
                dataTestId: `${testIdPrefix}create-${enumType.toLowerCase()}-btn`
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityPageActions/EntityPageActions.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/EntityPageActions/EntityPageActions.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = EntityPageActions;
;
var _c;
__turbopack_context__.k.register(_c, "EntityPageActions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityPageActions/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPageActions$2f$EntityPageActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPageActions/EntityPageActions.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FieldRow",
    ()=>FieldRow,
    "HighlightFieldBox",
    ()=>HighlightFieldBox,
    "SectionBody",
    ()=>SectionBody,
    "SectionChevron",
    ()=>SectionChevron,
    "SectionHeader",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const FieldRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityPreviewFields.styles__FieldRow",
    componentId: "sc-92dc89b8-0"
})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6px 0;
  gap: 12px;
  border-bottom: 1px solid ${(props)=>props.theme.palette.default.greyLight};

  &:last-child {
    border-bottom: none;
  }
`;
const HighlightFieldBox = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityPreviewFields.styles__HighlightFieldBox",
    componentId: "sc-92dc89b8-1"
})`
  margin: 8px 0 12px;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme })=>theme.palette.status.warning.text};
  background: ${({ theme })=>theme.palette.status.warning.bg};
`;
const SectionHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "EntityPreviewFields.styles__SectionHeader",
    componentId: "sc-92dc89b8-2"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: none;
  background: transparent;
  /* #1748: <button> nimmt sonst die Browserfarbe (schwarz) statt der Textfarbe der Seitenleiste */
  color: inherit;
  padding: 10px 0 4px;
  cursor: pointer;
  text-align: left;
`;
const SectionChevron = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EntityPreviewFields.styles__SectionChevron",
    componentId: "sc-92dc89b8-3"
})`
  display: inline-flex;
  transition: transform 0.15s ease;
  transform: rotate(${({ $collapsed })=>$collapsed ? '-90deg' : '0deg'});
  color: ${({ theme })=>theme.palette.default.greyDark};
  font-size: 11px;
`;
const SectionBody = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityPreviewFields.styles__SectionBody",
    componentId: "sc-92dc89b8-4"
})`
  margin-bottom: 4px;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EntityPreviewFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useFormatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickStatusField$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/QuickStatusField/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickStatusField$2f$QuickStatusField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/QuickStatusField/QuickStatusField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$status$2f$statusRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/status/statusRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useKanbanStatusUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useKanbanStatusUpdate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useGenericEntityMutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/updatableFields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/lookupFields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityToResourceMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityToResourceMap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useQuickOpenEntity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useQuickOpenEntity.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$resolveLookupDisplay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/resolveLookupDisplay.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__isValidSalesforceId__as__isSalesforceId$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript) <export isValidSalesforceId as isSalesforceId>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$dependsOn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/dependsOn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$preview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/preview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/useEntityFieldConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFieldMarkers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useFieldMarkers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FieldMarkerRail/FieldMarkerRail.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$EntityPreviewFields$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.styles.ts [app-client] (ecmascript)");
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
// ─── Legacy-Kurzlisten (read-only Fallback, letzte Instanz) ───────────────────
// Nur noch für Objekte OHNE EntityFieldConfig — alles andere leitet seine
// Sektionen aus der rollen-gefilterten Detail-Config ab (oder hat eine
// kuratierte #200-Liste). Supplier_audit__c: Config-Key heißt Supplier_Audit__c.
const ENTITY_PREVIEW_FIELDS = {
    Auftrag__c: [
        {
            key: 'OrderNumber',
            label: 'Nummer'
        },
        {
            key: 'Status',
            label: 'Status'
        },
        {
            key: 'Type',
            label: 'Typ'
        },
        {
            key: 'EffectiveDate',
            label: 'Datum',
            format: 'date'
        },
        {
            key: 'TotalAmount',
            label: 'Betrag',
            format: 'currency'
        }
    ],
    Supplier_audit__c: [
        {
            key: 'Name',
            label: 'Name'
        },
        {
            key: 'Status__c',
            label: 'Status'
        },
        {
            key: 'CreatedDate',
            label: 'Erstellt',
            format: 'date'
        }
    ]
};
// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatFieldValue(value, format, booleanLabels, fmt) {
    if (value === null || value === undefined || value === '') return '—';
    if (format === 'date' && typeof value === 'string') {
        return fmt.dateWith(value, {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
    if (format === 'currency' && typeof value === 'number') {
        return fmt.currency(value, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2
        });
    }
    if (format === 'boolean') return value ? booleanLabels.yes : booleanLabels.no;
    return String(value);
}
/** FieldConfig zum apiName aus den Detail-Sections (Metadaten-Quelle, #455-Muster). */ function findFieldConfig(entityType, apiName) {
    for (const section of (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfigForApiName"])(entityType)?.sections ?? []){
        for (const field of section.fields ?? []){
            if (field.apiName === apiName) return field;
        }
    }
    return undefined;
}
/** Anzeige-Typ für Felder ohne Config-Metadaten (Formeln/Rollups) heuristisch. */ function inferFallbackType(apiName, value) {
    if (typeof value === 'boolean') return 'boolean';
    // #1273 (E-2): Lookups ohne Feld-Config (z. B. Sample_Sending.Opportunity__c,
    // Abrechnung.Kontakt_bergabe__c) landeten sonst als 'text' und zeigten
    // Rollen mit FIELDS(ALL) die rohe Id. Als 'lookup' loest EditableField den
    // Namen ueber die Id auf und zeigt sonst den Platzhalter.
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSalesforceId18"])(value)) return 'lookup';
    if (typeof value === 'number') {
        return /Betrag|Amount|Preis|[Mm]arge/.test(apiName) ? 'currency' : 'number';
    }
    if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
        return value.length > 10 ? 'datetime' : 'date';
    }
    return 'text';
}
function EntityPreviewFields({ entityType, entityId, entityPath, record, highlightField }) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const fmt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"])();
    // #1626: Labels, Sektionstitel und Picklist-Optionen der Feld-Config übersetzt
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const { quickOpen } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useQuickOpenEntity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickOpenEntity"])();
    // ── Voll-Fetch: Karten-Snapshot rendert sofort, Voll-Record hydratisiert ──
    const mappedEntityType = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SF_OBJECT_TO_ENTITY_TYPE"][entityType];
    const singleApiPath = (mappedEntityType ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_SINGLE_API_MAP"][mappedEntityType] : undefined) ?? entityPath;
    const { data: fetchedRecord } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'preview-record',
            entityType,
            entityId
        ],
        // Ohne API-Pfad bleibt der Karten-Snapshot (Registry-Review m-2).
        enabled: Boolean(singleApiPath),
        queryFn: {
            "EntityPreviewFields.useQuery": async ()=>{
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/salesforce/${singleApiPath}/${entityId}/`);
                return res.data?.data ?? res.data ?? {};
            }
        }["EntityPreviewFields.useQuery"]
    });
    const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EntityPreviewFields.useMemo[merged]": ()=>({
                ...record,
                ...fetchedRecord ?? {}
            })
    }["EntityPreviewFields.useMemo[merged]"], [
        record,
        fetchedRecord
    ]);
    const previewSections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$preview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviewSections"])(entityType);
    // Fallback (AB 2026-07-19): Objekte ohne kuratierte #200-Liste zeigen die
    // rollen-gefilterten Detail-Sections (Standardfelder) statt der Mini-Liste.
    const derivedSections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EntityPreviewFields.useMemo[derivedSections]": ()=>{
            if (previewSections || !userContext) return undefined;
            const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFilteredEntityConfig"])(entityType, userContext, merged);
            if (!filtered) return undefined;
            const sections = filtered.sections.map({
                "EntityPreviewFields.useMemo[derivedSections].sections": (s)=>({
                        id: s.id,
                        label: entityText.text(s.label, s.labelKey),
                        fields: s.fields.map({
                            "EntityPreviewFields.useMemo[derivedSections].sections": (f)=>f.apiName
                        }["EntityPreviewFields.useMemo[derivedSections].sections"])
                    })
            }["EntityPreviewFields.useMemo[derivedSections].sections"]).filter({
                "EntityPreviewFields.useMemo[derivedSections].sections": (s)=>s.fields.length > 0
            }["EntityPreviewFields.useMemo[derivedSections].sections"]);
            return sections.length > 0 ? sections : undefined;
        }
    }["EntityPreviewFields.useMemo[derivedSections]"], [
        previewSections,
        entityType,
        userContext,
        merged,
        entityText
    ]);
    // #1626: kuratierte Sektionstitel (config/entityFields/preview) übersetzt.
    // #1575: kuratierte Listen folgen derselben Rollen-Sichtbarkeit wie die
    // Detailseite (visibleForRoles der Feld-Config) — sonst sähen Kundenrollen
    // interne Felder wie Sales Intent. Leere Sektionen entfallen.
    const viewerRole = userContext?.role;
    const localizedPreviewSections = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EntityPreviewFields.useMemo[localizedPreviewSections]": ()=>{
            if (!previewSections) return undefined;
            const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfigForApiName"])(entityType);
            return previewSections.map({
                "EntityPreviewFields.useMemo[localizedPreviewSections]": (s)=>({
                        ...s,
                        label: entityText.text(s.label),
                        fields: s.fields.filter({
                            "EntityPreviewFields.useMemo[localizedPreviewSections]": (f)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isConfigFieldVisibleForRole"])(config, f, viewerRole)
                        }["EntityPreviewFields.useMemo[localizedPreviewSections]"])
                    })
            }["EntityPreviewFields.useMemo[localizedPreviewSections]"]).filter({
                "EntityPreviewFields.useMemo[localizedPreviewSections]": (s)=>s.fields.length > 0
            }["EntityPreviewFields.useMemo[localizedPreviewSections]"]);
        }
    }["EntityPreviewFields.useMemo[localizedPreviewSections]"], [
        previewSections,
        entityType,
        viewerRole,
        entityText
    ]);
    const effectiveSections = localizedPreviewSections ?? derivedSections;
    /** FieldConfig zum apiName mit übersetzten Texten (#1626). */ const localizedFieldConfig = (apiName)=>{
        const field = findFieldConfig(entityType, apiName);
        return field ? entityText.field(field) : undefined;
    };
    const updatableFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EntityPreviewFields.useMemo[updatableFields]": ()=>userContext ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUpdatableFields"])(entityType, userContext.role) : []
    }["EntityPreviewFields.useMemo[updatableFields]"], [
        entityType,
        userContext
    ]);
    // ── Inline-Edit (ein Feld zur Zeit, PATCH auf die Single-Route) ───────────
    const [editingField, setEditingField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFieldConfirm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntityPreviewFields.useCallback[handleFieldConfirm]": async (fieldName, value)=>{
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].patch(`/salesforce/${singleApiPath}/${entityId}/`, {
                    [fieldName]: value
                });
                setEditingField(null);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('common.saveSuccess', {
                    defaultValue: 'Gespeichert'
                }));
                void queryClient.invalidateQueries({
                    queryKey: [
                        'preview-record',
                        entityType,
                        entityId
                    ]
                });
                if (mappedEntityType) {
                    void queryClient.invalidateQueries({
                        queryKey: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_QUERY_KEY_MAP"][mappedEntityType]
                        ]
                    });
                }
                // #870: Dashboard-Widgets (Aufgaben/Aufmerksamkeit) lesen den Datensatz neu
                void queryClient.invalidateQueries({
                    queryKey: [
                        'dashboard'
                    ]
                });
            } catch (err) {
                console.error('[EntityPreviewFields] field save failed:', err);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('common.saveError', {
                    defaultValue: 'Speichern fehlgeschlagen'
                }));
            }
        }
    }["EntityPreviewFields.useCallback[handleFieldConfirm]"], [
        singleApiPath,
        entityId,
        entityType,
        queryClient,
        mappedEntityType,
        tr
    ]);
    // ── #420 Schnellstatus im Drawer ──────────────────────────────────────────
    const statusConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$status$2f$statusRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStatusConfig"])(entityType);
    const quickStatusResource = statusConfig ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityToResourceMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceForEntityType"])(statusConfig.entityType) : undefined;
    const canQuickStatus = !!statusConfig && !!userContext && !!quickStatusResource && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, quickStatusResource, 'edit') && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUpdatableFields"])(statusConfig.apiName, userContext.role).includes(statusConfig.field);
    const handleQuickStatusChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntityPreviewFields.useCallback[handleQuickStatusChange]": async (next)=>{
            if (!statusConfig) return;
            // WICHTIG: entityPath aus der Registry, NICHT data.entityPath — die
            // Kanbans übergeben teils abweichende Pfade; der Registry-Pfad ist per
            // Drift-Guard gegen ENTITY_SINGLE_API_MAP gepinnt.
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useKanbanStatusUpdate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateKanbanStatus"])({
                entityPath: statusConfig.entityPath,
                id: entityId,
                data: {
                    [statusConfig.field]: next
                }
            });
            queryClient.invalidateQueries({
                queryKey: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_QUERY_KEY_MAP"][statusConfig.entityType]
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    'preview-record',
                    entityType,
                    entityId
                ]
            });
            queryClient.invalidateQueries({
                queryKey: [
                    'dashboard'
                ]
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('quickStatus.updateSuccess', {
                defaultValue: 'Status aktualisiert'
            }));
        }
    }["EntityPreviewFields.useCallback[handleQuickStatusChange]"], [
        statusConfig,
        entityId,
        entityType,
        queryClient,
        tr
    ]);
    // ── #455 Feldsprung: hervorgehobenes Zielfeld ─────────────────────────────
    const [editingHighlight, setEditingHighlight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const highlightFieldConfig = highlightField ? localizedFieldConfig(highlightField) : undefined;
    const canEditHighlight = !!highlightField && !!userContext && updatableFields.includes(highlightField);
    // #837 (AB): leere Produktbeschreibung beim Edit-Start mit dem Handelsnamen
    // des Label-Produkts vorbelegen — gespeichert wird erst beim Bestätigen,
    // die Anzeige außerhalb des Edit-Modus bleibt der echte (leere) Wert
    const highlightValue = merged[highlightField ?? ''];
    const highlightPrefill = editingHighlight && highlightField === 'Vorlage_Labels_Produktbeschreibung__c' && (highlightValue == null || highlightValue === '') ? merged['Produkt__r']?.Trade_Name__c : undefined;
    // ── Sektionen auf-/zuklappen ──────────────────────────────────────────────
    const [collapsedSections, setCollapsedSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const toggleSection = (id)=>setCollapsedSections((prev)=>{
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    const renderQuickStatusRow = (apiName, label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$EntityPreviewFields$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldRow"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    variant: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].caption,
                    children: label
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                    lineNumber: 307,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$QuickStatusField$2f$QuickStatusField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickStatusField"], {
                    entityType: entityType,
                    value: typeof merged[apiName] === 'string' ? merged[apiName] : null,
                    onStatusChange: handleQuickStatusChange,
                    dataTestId: `preview-quick-status-${apiName}`
                }, entityId, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                    lineNumber: 308,
                    columnNumber: 7
                }, this)
            ]
        }, apiName, true, {
            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
            lineNumber: 306,
            columnNumber: 5
        }, this);
    const renderEditableRow = (apiName)=>{
        if (canQuickStatus && statusConfig && apiName === statusConfig.field) {
            return renderQuickStatusRow(apiName, localizedFieldConfig(apiName)?.label ?? entityText.fieldLabel(apiName));
        }
        const meta = localizedFieldConfig(apiName);
        const value = merged[apiName];
        const fieldType = meta?.fieldType ?? inferFallbackType(apiName, value);
        const editable = updatableFields.includes(apiName);
        const isLookup = fieldType === 'lookup';
        const lookupSeed = isLookup && typeof value === 'string' && value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$resolveLookupDisplay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveLookupDisplay"])(merged, apiName) : undefined;
        const lookupTargetId = isLookup && typeof value === 'string' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__isValidSalesforceId__as__isSalesforceId$3e$__["isSalesforceId"])(value) ? value : undefined;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableField"], {
            compact: true,
            fieldName: apiName,
            label: meta?.label ?? entityText.fieldLabel(apiName),
            fieldType: fieldType,
            value: value,
            isEditing: editingField === apiName,
            isEditable: editable,
            readOnly: !editable,
            onStartEdit: ()=>setEditingField(apiName),
            onConfirm: handleFieldConfirm,
            onCancel: ()=>setEditingField(null),
            options: meta?.picklistOptions,
            lookupObjectType: meta?.lookupObjectType,
            lookupFilter: meta ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$dependsOn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDependsOnLookupFilter"])(meta, merged) : undefined,
            initialLookupDisplay: lookupSeed?.name,
            onLabelClick: lookupTargetId ? ()=>quickOpen(lookupTargetId, lookupSeed?.related) : undefined,
            currencyCode: meta?.currencyCode,
            dataTestId: `preview-field-${apiName}`
        }, apiName, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
            lineNumber: 338,
            columnNumber: 7
        }, this);
    };
    // ── #844/#916 Qualifizierungs-Markierung (nur interne Rollen) ─────────────
    // Der Drawer zeigt bewusst nur den lila Ton: Dokument-/Kundenmarker sind
    // eine Detail-View-Information (#465), der Drawer bleibt kompakt.
    const { qualificationFields } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFieldMarkers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldMarkers"])(entityType);
    const showQualification = !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFieldMarkers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCustomerFacingRole"])(userContext?.role);
    const renderRow = (apiName)=>{
        const row = renderEditableRow(apiName);
        const criteria = showQualification ? qualificationFields.get(apiName) : undefined;
        if (!criteria) return row;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkedFieldWrap"], {
            "data-testid": `preview-qualification-${apiName}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FieldMarkerRail$2f$FieldMarkerRail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldMarkerRail"], {
                    fieldName: apiName,
                    qualification: {
                        criteria,
                        value: merged[apiName],
                        record: merged
                    },
                    testIdPrefix: "preview-"
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, this),
                row
            ]
        }, apiName, true, {
            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
            lineNumber: 375,
            columnNumber: 7
        }, this);
    };
    const legacyFields = ENTITY_PREVIEW_FIELDS[entityType] || [
        {
            key: 'Name',
            label: 'Name'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            highlightField && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$EntityPreviewFields$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HighlightFieldBox"], {
                "data-testid": "preview-highlight-field",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                        importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h5,
                        children: tr('entityPreview.missingField', {
                            defaultValue: 'Fehlendes Dokument-Feld'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                        lineNumber: 393,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableField"], {
                        fieldName: highlightField,
                        label: highlightFieldConfig?.label ?? entityText.fieldLabel(highlightField),
                        fieldType: highlightFieldConfig?.fieldType ?? 'text',
                        value: highlightPrefill ?? merged[highlightField],
                        isEditing: editingHighlight,
                        isEditable: canEditHighlight,
                        readOnly: !canEditHighlight,
                        onStartEdit: ()=>setEditingHighlight(true),
                        onConfirm: async (fieldName, value)=>{
                            await handleFieldConfirm(fieldName, value);
                            setEditingHighlight(false);
                        },
                        onCancel: ()=>setEditingHighlight(false),
                        options: highlightFieldConfig?.picklistOptions,
                        lookupObjectType: highlightFieldConfig?.lookupObjectType,
                        currencyCode: highlightFieldConfig?.currencyCode,
                        dataTestId: "preview-highlight-editable"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                        lineNumber: 396,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                lineNumber: 392,
                columnNumber: 9
            }, this),
            effectiveSections ? // #200: kuratierte (oder aus der Detail-Config abgeleitete) Sektionen
            effectiveSections.map((section)=>{
                const isCollapsed = collapsedSections.has(section.id);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$EntityPreviewFields$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHeader"], {
                            type: "button",
                            onClick: ()=>toggleSection(section.id),
                            "data-testid": `preview-section-${section.id}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                                    importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h5,
                                    children: section.label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                                    lineNumber: 429,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$EntityPreviewFields$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionChevron"], {
                                    $collapsed: isCollapsed,
                                    children: "▼"
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                                    lineNumber: 430,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                            lineNumber: 424,
                            columnNumber: 15
                        }, this),
                        !isCollapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$EntityPreviewFields$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionBody"], {
                            children: section.fields.map(renderRow)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                            lineNumber: 433,
                            columnNumber: 17
                        }, this)
                    ]
                }, section.id, true, {
                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                    lineNumber: 423,
                    columnNumber: 13
                }, this);
            }) : // Legacy-Kurzliste (read-only) für noch nicht migrierte Objekte
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                        importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h5,
                        dataTestId: "preview-details-headline",
                        children: tr('entityPreview.details', {
                            defaultValue: 'Details'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                        lineNumber: 441,
                        columnNumber: 11
                    }, this),
                    legacyFields.map((field)=>{
                        const label = tr(`entityPreview.legacyField.${field.key}`, {
                            defaultValue: field.label
                        });
                        return canQuickStatus && statusConfig && field.key === statusConfig.field ? renderQuickStatusRow(field.key, label) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$EntityPreviewFields$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FieldRow"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    variant: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].caption,
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                                    lineNumber: 452,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                    variant: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].body,
                                    children: formatFieldValue(merged[field.key], field.format, {
                                        yes: tr('common.yes', {
                                            defaultValue: 'Ja'
                                        }),
                                        no: tr('common.no', {
                                            defaultValue: 'Nein'
                                        })
                                    }, fmt)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                                    lineNumber: 453,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, field.key, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                            lineNumber: 451,
                            columnNumber: 15
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
                lineNumber: 440,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx",
        lineNumber: 389,
        columnNumber: 5
    }, this);
}
_s(EntityPreviewFields, "TEBpcqtepPl7Vfzi0qKzm+siuEE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useQuickOpenEntity$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuickOpenEntity"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFieldMarkers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFieldMarkers"]
    ];
});
_c = EntityPreviewFields;
var _c;
__turbopack_context__.k.register(_c, "EntityPreviewFields");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EntityPreviewPanel,
    "getPreviewRecordName",
    ()=>getPreviewRecordName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/NavLink/NavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useRecordLabel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/records/recordLabel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/Tooltip/Tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttentionBadge$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/AttentionBadge/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttentionBadge$2f$AttentionBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/AttentionBadge/AttentionBadge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/notificationText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Text/Text.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Avatar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Avatar/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Avatar$2f$Avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Avatar/Avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.tsx [app-client] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Button/Button.types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FilterField$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FilterField/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FilterField$2f$FilterField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FilterField/FilterField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/iconButtonColors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SystemInformation/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/SystemInformation/SystemInformation.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$IconTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconTask/IconTask.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconShare$2f$IconShare$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconShare/IconShare.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconClose/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/ModalContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/lookupFields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityFormRegistry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$salesforceObjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/salesforceObjects.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$previewListLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/previewListLink.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPageActions$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPageActions/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPageActions$2f$EntityPageActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPageActions/EntityPageActions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$EntityPreviewFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewFields.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewRelatedLists$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewRelatedLists.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$previewTaskAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/previewTaskAccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$material$2d$vision$2f$material$2d$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/material-vision/material-appearance.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
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
;
;
;
;
// ─── Entity type to nav i18n key (same keys as left sidebar) ──────────────────
const ENTITY_NAV_KEYS = {
    Case: 'nav.cases',
    Order: 'nav.orders',
    Bedarfe__c: 'nav.requirements',
    Material_Proposal__c: 'nav.materialProposals',
    Materialanalyse__c: 'nav.materialAnalyses',
    Abrechnung__c: 'nav.invoices',
    Sample_Sending__c: 'nav.sampleSendings',
    Produktionsstandort__c: 'nav.productionSites',
    Product2: 'nav.products',
    Opportunity: 'nav.opportunities',
    Account: 'nav.accounts',
    Contact: 'nav.contacts',
    Task: 'nav.tasks',
    Projekt__c: 'nav.projects',
    Onboarding__c: 'nav.onboardings',
    Monitored_Material__c: 'nav.monitoredMaterials',
    Sample_Feedback__c: 'nav.sampleFeedbacks',
    Supplier_audit__c: 'nav.supplierAudits',
    Kontakt_bergaben__c: 'nav.contactHandovers',
    Unternehmenszertifikat__c: 'nav.companyCertificates'
};
// ─── Styled Components ────────────────────────────────────────────────────────
const Panel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityPreviewPanel__Panel",
    componentId: "sc-362acad2-0"
})`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 400px;
`;
_c = Panel;
const PanelHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityPreviewPanel__PanelHeader",
    componentId: "sc-362acad2-1"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid ${(props)=>props.theme.palette.default.greyLight};
  background: linear-gradient(to left, #001a2c, #00416e);
  color: #ffffff;
`;
_c1 = PanelHeader;
const HeaderLeft = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityPreviewPanel__HeaderLeft",
    componentId: "sc-362acad2-2"
})`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  flex: 1;
`;
_c2 = HeaderLeft;
const EntityTypeLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "EntityPreviewPanel__EntityTypeLink",
    componentId: "sc-362acad2-3"
})`
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  margin-bottom: 2px;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;
_c3 = EntityTypeLink;
const EntityNameLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$NavLink$2f$NavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavLink"]).withConfig({
    displayName: "EntityPreviewPanel__EntityNameLink",
    componentId: "sc-362acad2-4"
})`
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  word-break: break-word;
  overflow-wrap: break-word;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #ffffff;
  }
`;
_c4 = EntityNameLink;
/** Kopf ohne Detailseite (m-2): gleiche Optik, kein Link. */ const EntityNameText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EntityPreviewPanel__EntityNameText",
    componentId: "sc-362acad2-5"
})`
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  word-break: break-word;
  overflow-wrap: break-word;
`;
_c5 = EntityNameText;
const EntityTypeText = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "EntityPreviewPanel__EntityTypeText",
    componentId: "sc-362acad2-6"
})`
  display: block;
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 2px;
`;
_c6 = EntityTypeText;
const HeaderActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityPreviewPanel__HeaderActions",
    componentId: "sc-362acad2-7"
})`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`;
_c7 = HeaderActions;
const PanelBody = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityPreviewPanel__PanelBody",
    componentId: "sc-362acad2-8"
})`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
_c8 = PanelBody;
const OwnerRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityPreviewPanel__OwnerRow",
    componentId: "sc-362acad2-9"
})`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
`;
_c9 = OwnerRow;
const FormGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityPreviewPanel__FormGroup",
    componentId: "sc-362acad2-10"
})`
  margin-bottom: 12px;
`;
_c10 = FormGroup;
const FormTextarea = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].textarea.withConfig({
    displayName: "EntityPreviewPanel__FormTextarea",
    componentId: "sc-362acad2-11"
})`
  width: 100%;
  padding: 8px 10px;
  font-size: 13px;
  font-family: inherit;
  border: 1px solid ${(props)=>props.theme.palette.default.greyLight};
  border-radius: 4px;
  outline: none;
  box-sizing: border-box;
  resize: vertical;

  &:focus {
    border-color: ${(props)=>props.theme.palette.default.primary};
  }
`;
_c11 = FormTextarea;
const ModalActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "EntityPreviewPanel__ModalActions",
    componentId: "sc-362acad2-12"
})`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
`;
_c12 = ModalActions;
function getPreviewRecordName(record) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$records$2f$recordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recordLabel"])(record.Belegnummer__c, record.Name, record.Subject, record.CaseNumber, record.OrderNumber, record.OrderItemNumber, record.ContractNumber);
}
// ─── Component ────────────────────────────────────────────────────────────────
const MaterialPreviewThumb = ({ url, tooltip })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        style: {
            marginBottom: '12px',
            position: 'relative',
            width: '100%',
            aspectRatio: '4 / 3',
            backgroundImage: `url("${url}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#EEF1F4',
            borderRadius: '12px'
        },
        role: "img",
        "aria-label": tr('entityPreview.materialAria', {
            defaultValue: 'Material'
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$Tooltip$2f$Tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            content: tooltip,
            isVisible: hovered,
            position: "bottom",
            anchorRef: ref
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
            lineNumber: 260,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
        lineNumber: 242,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MaterialPreviewThumb, "CxDJApwpTm+c33JQ/zPOIZ1cwtw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"]
    ];
});
_c13 = MaterialPreviewThumb;
const MaterialPreview = ({ materialId, thumbnailUrl, tooltipReal, tooltipFallback })=>{
    _s1();
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'mm-cover-single',
            materialId
        ],
        queryFn: {
            "MaterialPreview.useQuery": async ()=>{
                if (!materialId) return {
                    covers: {}
                };
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/material-vision/covers?materialIds=${encodeURIComponent(materialId)}`);
                return res.data;
            }
        }["MaterialPreview.useQuery"],
        enabled: !!materialId,
        staleTime: 5 * 60 * 1000
    });
    const cover = materialId ? data?.covers?.[materialId] : undefined;
    if (cover) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MaterialPreviewThumb, {
            url: cover.imageUrl,
            tooltip: cover.imageTitle || tooltipReal
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
            lineNumber: 301,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MaterialPreviewThumb, {
        url: thumbnailUrl,
        tooltip: tooltipFallback
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
        lineNumber: 307,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(MaterialPreview, "JtionF1PqWN50DPWu724eJIU2SM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c14 = MaterialPreview;
function EntityPreviewPanel({ data, onClose }) {
    _s2();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    const { label } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { entityType, entityId, entityPath, record, highlightField } = data;
    // Modal states
    const [showShareModal, setShowShareModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Share state
    // #1428: „Team" = admin + staff; „Alle" (auch Kunden) gibt es hier nicht
    const [shareAudience, setShareAudience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('team');
    const [shareMessage, setShareMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // #1239 (M-18): nie die rohe Id im Kopf/Teilen/Modals zeigen — fehlt jedes
    // Namensfeld, greift der Platzhalter (unnamed markiert per data-Attribut).
    const recordNameResult = label(getPreviewRecordName(record));
    const recordName = recordNameResult.text;
    const ownerId = record.OwnerId;
    const ownerName = record.Owner?.Name;
    const navKey = ENTITY_NAV_KEYS[entityType];
    // #1626: ohne Navigations-Schlüssel das übersetzte Objekt-Label der Feld-Config
    const displayName = navKey ? tr(navKey) : entityText.text((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityFieldConfig"])(entityType)?.entityLabel ?? entityType);
    const listUrl = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$salesforceObjects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SF_OBJECT_ROUTES"][entityType] || (entityPath ? `/${entityPath}` : undefined);
    const detailUrl = entityPath ? `/${entityPath}/${entityId}` : undefined;
    // ── Aufgabe anlegen (#991): zentrales Anlage-Modal, Bezug = dieser Datensatz ──
    const { openCreateModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"])();
    const parentEntityType = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SF_OBJECT_TO_ENTITY_TYPE"][entityType];
    // #1575: Aufgaben und Inhaber nur für Rollen, die Task sehen dürfen
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const taskAccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$previewTaskAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPreviewTaskAccess"])(userContext);
    const canCreateTask = taskAccess.create && Boolean(parentEntityType && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityFormRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PARENT_FIELD_MAP"].Task?.[parentEntityType]);
    const openTaskCreate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "EntityPreviewPanel.useCallback[openTaskCreate]": ()=>{
            if (!parentEntityType) return;
            openCreateModal({
                entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task,
                parentEntityType,
                parentEntityId: entityId,
                onSuccess: {
                    "EntityPreviewPanel.useCallback[openTaskCreate]": ()=>{
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('entityPreview.taskCreated', {
                            defaultValue: 'Aufgabe erstellt'
                        }));
                        void queryClient.invalidateQueries({
                            queryKey: [
                                'preview-tasks',
                                entityId
                            ]
                        });
                        // #870: „Meine offenen Aufgaben" auf dem Dashboard neu laden
                        void queryClient.invalidateQueries({
                            queryKey: [
                                'dashboard'
                            ]
                        });
                    }
                }["EntityPreviewPanel.useCallback[openTaskCreate]"]
            });
        }
    }["EntityPreviewPanel.useCallback[openTaskCreate]"], [
        openCreateModal,
        parentEntityType,
        entityId,
        queryClient,
        tr
    ]);
    // ── Share to team mutation ────────────────────────────────────────────────
    const shareMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "EntityPreviewPanel.useMutation[shareMutation]": async ()=>{
                const note = shareMessage.trim();
                const msg = note ? `${displayName}: ${recordName}\n\n${note}` : `${displayName}: ${recordName}`;
                // #1626: Schlüssel + Platzhalter — die Empfänger lesen in ihrer Sprache
                const params = {};
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeText"])(params, `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TITLE_ROOT"]}~p.record`, recordName);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeText"])(params, `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGE_ROOT"]}~p.entity`, displayName);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeText"])(params, `${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGE_ROOT"]}~p.record`, recordName);
                if (note) params[`${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$notificationText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MESSAGE_ROOT"]}~p.note`] = note;
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post('/notifications', {
                    type: 'info',
                    titleKey: 'notifications.shared.title',
                    titleDefault: `${recordName} wurde geteilt`,
                    messageKey: note ? 'notifications.shared.messageWithNote' : 'notifications.shared.message',
                    messageDefault: msg,
                    params,
                    ...detailUrl ? {
                        link: detailUrl
                    } : {},
                    audience: shareAudience
                });
            }
        }["EntityPreviewPanel.useMutation[shareMutation]"],
        onSuccess: {
            "EntityPreviewPanel.useMutation[shareMutation]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('entityPreview.shared', {
                    defaultValue: 'Mit Team geteilt'
                }));
                setShareMessage('');
                setShowShareModal(false);
            }
        }["EntityPreviewPanel.useMutation[shareMutation]"],
        onError: {
            "EntityPreviewPanel.useMutation[shareMutation]": (err)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || tr('entityPreview.shareError', {
                    defaultValue: 'Fehler beim Teilen'
                }));
            }
        }["EntityPreviewPanel.useMutation[shareMutation]"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Panel, {
                "data-testid": "entity-preview-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelHeader, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderLeft, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$previewListLink$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPreviewListLinkAllowed"])(listUrl, userContext?.role) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntityTypeLink, {
                                                href: listUrl,
                                                "data-testid": "preview-entity-type-link",
                                                children: displayName
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                                lineNumber: 407,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntityTypeText, {
                                                "data-testid": "preview-entity-type-text",
                                                children: displayName
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                                lineNumber: 411,
                                                columnNumber: 17
                                            }, this),
                                            detailUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntityNameLink, {
                                                href: detailUrl,
                                                title: recordName,
                                                "data-unnamed": recordNameResult.unnamed || undefined,
                                                children: recordName
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                                lineNumber: 414,
                                                columnNumber: 17
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntityNameText, {
                                                title: recordName,
                                                "data-testid": "entity-preview-name-nolink",
                                                "data-unnamed": recordNameResult.unnamed || undefined,
                                                children: recordName
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                                lineNumber: 422,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                        lineNumber: 405,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$AttentionBadge$2f$AttentionBadge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttentionBadge"], {
                                        entityType: entityType,
                                        record: record,
                                        detailData: record
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                        lineNumber: 433,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 404,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeaderActions, {
                                children: [
                                    canCreateTask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                        onClick: openTaskCreate,
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$IconTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTask"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                            lineNumber: 439,
                                            columnNumber: 23
                                        }, this),
                                        tooltip: tr('entityPreview.quickTask', {
                                            defaultValue: 'Aufgabe erstellen'
                                        }),
                                        ariaLabel: tr('entityPreview.quickTask', {
                                            defaultValue: 'Aufgabe erstellen'
                                        }),
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].PLUS,
                                        dataTestId: "preview-action-task"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                        lineNumber: 437,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                        onClick: ()=>setShowShareModal(true),
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconShare$2f$IconShare$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconShare"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                            lineNumber: 448,
                                            columnNumber: 21
                                        }, this),
                                        tooltip: tr('entityPreview.shareToTeam', {
                                            defaultValue: 'Mit Team teilen'
                                        }),
                                        ariaLabel: tr('entityPreview.shareToTeam', {
                                            defaultValue: 'Mit Team teilen'
                                        }),
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].INFO,
                                        dataTestId: "preview-action-share"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                        lineNumber: 446,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPageActions$2f$EntityPageActions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityPageActions"], {
                                        entityType: entityType,
                                        entityId: entityId,
                                        record: record,
                                        showCreate: false,
                                        testIdPrefix: "preview-"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                        lineNumber: 459,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                                        onClick: onClose,
                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconClose$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                            lineNumber: 468,
                                            columnNumber: 21
                                        }, this),
                                        tooltip: tr('entityPreview.close', {
                                            defaultValue: 'Schliessen'
                                        }),
                                        ariaLabel: tr('entityPreview.close', {
                                            defaultValue: 'Schliessen'
                                        }),
                                        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].DELETE,
                                        dataTestId: "entity-preview-close"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                        lineNumber: 466,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 435,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PanelBody, {
                        children: [
                            taskAccess.view && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                entityId: entityId,
                                onCreateTask: canCreateTask ? openTaskCreate : undefined,
                                canComplete: taskAccess.complete,
                                showOwner: taskAccess.owner
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 480,
                                columnNumber: 13
                            }, this),
                            entityType === 'Monitored_Material__c' && (()=>{
                                const thumbnailUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$material$2d$vision$2f$material$2d$appearance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildMaterialThumbUrl"])({
                                    farbe: record.Farbe__c ? String(record.Farbe__c) : null,
                                    form: record.Form__c ? String(record.Form__c) : null,
                                    defekte: record.Summe_Defekte__c ? Number(record.Summe_Defekte__c) : null,
                                    opacity: record.Avg_Opacity__c ? Number(record.Avg_Opacity__c) : null,
                                    materialId: entityId,
                                    seed: entityId,
                                    width: 536,
                                    height: 400
                                });
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MaterialPreview, {
                                    materialId: entityId || undefined,
                                    thumbnailUrl: thumbnailUrl,
                                    tooltipReal: tr('entityPreview.materialPhoto', {
                                        defaultValue: 'Material photo'
                                    }),
                                    tooltipFallback: tr('material3d.tooltip', {
                                        defaultValue: '3D-Darstellung des Materials'
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                    lineNumber: 504,
                                    columnNumber: 15
                                }, this);
                            })(),
                            ownerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                                        importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h5,
                                        dataTestId: "preview-owner-headline",
                                        children: tr('entityPreview.owner', {
                                            defaultValue: 'Verantwortlich'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                        lineNumber: 516,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OwnerRow, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Avatar$2f$Avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                userId: ownerId,
                                                name: ownerName,
                                                size: 28
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                                lineNumber: 520,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                                variant: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].body,
                                                children: ownerName || '—'
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                                lineNumber: 521,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                        lineNumber: 519,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 515,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$EntityPreviewFields$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                entityType: entityType,
                                entityId: entityId,
                                entityPath: entityPath,
                                record: record,
                                highlightField: highlightField
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 528,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewRelatedLists$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                entityType: entityType,
                                entityId: entityId,
                                entityPath: entityPath,
                                record: record
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 537,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                                importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h5,
                                dataTestId: "preview-system-headline",
                                children: tr('entityPreview.systemInfo', {
                                    defaultValue: 'Systeminformationen'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 545,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$SystemInformation$2f$SystemInformation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SystemInformation"], {
                                entityData: record,
                                compact: true
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 548,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                        lineNumber: 477,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
                isOpen: showShareModal,
                onClose: ()=>setShowShareModal(false),
                title: tr('entityPreview.shareToTeam', {
                    defaultValue: 'Mit Team teilen'
                }),
                size: "small",
                dataTestId: "share-modal",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                        variant: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].caption,
                        children: [
                            displayName,
                            ": ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-unnamed": recordNameResult.unnamed || undefined,
                                children: recordName
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 564,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                variant: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].caption,
                                children: tr('entityPreview.shareAudience', {
                                    defaultValue: 'Empfaenger'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FilterField$2f$FilterField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FilterField"], {
                                name: "shareAudience",
                                hideLabel: true,
                                value: shareAudience,
                                fieldType: "picklist",
                                options: [
                                    {
                                        value: 'team',
                                        label: tr('entityPreview.shareTeam', {
                                            defaultValue: 'Team (Staff und Admin)'
                                        })
                                    },
                                    {
                                        value: 'role:admin',
                                        label: tr('entityPreview.shareAdminsOnly', {
                                            defaultValue: 'Nur Admins'
                                        })
                                    }
                                ],
                                onChange: (v)=>setShareAudience(String(v)),
                                dataTestId: "share-audience"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 570,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormGroup, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                                variant: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Text$2f$Text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextVariants"].caption,
                                children: tr('entityPreview.shareMessage', {
                                    defaultValue: 'Nachricht (optional)'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 590,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormTextarea, {
                                value: shareMessage,
                                onChange: (e)=>setShareMessage(e.target.value),
                                placeholder: tr('entityPreview.shareMessagePlaceholder', {
                                    defaultValue: 'z.B. Bitte mal anschauen...'
                                }),
                                rows: 3,
                                "data-testid": "share-message"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 593,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                        lineNumber: 589,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ModalActions, {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].SECONDARY,
                                onClick: ()=>setShowShareModal(false),
                                dataTestId: "share-modal-cancel",
                                children: tr('entityPreview.cancel', {
                                    defaultValue: 'Abbrechen'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 604,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                modifier: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Button$2f$Button$2e$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonModifier"].PRIMARY,
                                onClick: ()=>shareMutation.mutate(),
                                loading: shareMutation.isPending,
                                disabled: shareMutation.isPending,
                                dataTestId: "share-modal-submit",
                                children: tr('entityPreview.share', {
                                    defaultValue: 'Teilen'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                                lineNumber: 611,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
                lineNumber: 556,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx",
        lineNumber: 401,
        columnNumber: 5
    }, this);
}
_s2(EntityPreviewPanel, "OQHSdQO5KWTsD3+YJHsPx0QpAuE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordLabel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c15 = EntityPreviewPanel;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14, _c15;
__turbopack_context__.k.register(_c, "Panel");
__turbopack_context__.k.register(_c1, "PanelHeader");
__turbopack_context__.k.register(_c2, "HeaderLeft");
__turbopack_context__.k.register(_c3, "EntityTypeLink");
__turbopack_context__.k.register(_c4, "EntityNameLink");
__turbopack_context__.k.register(_c5, "EntityNameText");
__turbopack_context__.k.register(_c6, "EntityTypeText");
__turbopack_context__.k.register(_c7, "HeaderActions");
__turbopack_context__.k.register(_c8, "PanelBody");
__turbopack_context__.k.register(_c9, "OwnerRow");
__turbopack_context__.k.register(_c10, "FormGroup");
__turbopack_context__.k.register(_c11, "FormTextarea");
__turbopack_context__.k.register(_c12, "ModalActions");
__turbopack_context__.k.register(_c13, "MaterialPreviewThumb");
__turbopack_context__.k.register(_c14, "MaterialPreview");
__turbopack_context__.k.register(_c15, "EntityPreviewPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewRelatedLists.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Root",
    ()=>Root
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const Root = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PreviewRelatedLists.styles__Root",
    componentId: "sc-daef3568-0"
})`
  margin-top: 1rem;
  min-width: 0;

  & > * {
    margin-bottom: 1rem;
  }

  table {
    font-size: 0.85rem;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewRelatedLists.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PreviewRelatedLists
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useGenericEntityMutations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/lookupFields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/RelatedListTable/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/RelatedListTable/RelatedListTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewRelatedLists$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewRelatedLists.styles.ts [app-client] (ecmascript)");
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
function PreviewRelatedLists({ entityType, entityId, entityPath, record }) {
    _s();
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const mappedEntityType = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SF_OBJECT_TO_ENTITY_TYPE"][entityType];
    const singleApiPath = (mappedEntityType ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useGenericEntityMutations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_SINGLE_API_MAP"][mappedEntityType] : undefined) ?? entityPath;
    const { data: fetchedRecord } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'preview-record',
            entityType,
            entityId
        ],
        enabled: Boolean(singleApiPath),
        queryFn: {
            "PreviewRelatedLists.useQuery": async ()=>{
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/salesforce/${singleApiPath}/${entityId}/`);
                return res.data?.data ?? res.data ?? {};
            }
        }["PreviewRelatedLists.useQuery"]
    });
    const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PreviewRelatedLists.useMemo[merged]": ()=>({
                ...record,
                ...fetchedRecord ?? {}
            })
    }["PreviewRelatedLists.useMemo[merged]"], [
        record,
        fetchedRecord
    ]);
    const { relatedLists } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalizedEntityFieldConfig"])(entityType, userContext ?? {
        role: 'user'
    }, merged);
    const sichtbar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PreviewRelatedLists.useMemo[sichtbar]": ()=>userContext ? relatedLists.filter({
                "PreviewRelatedLists.useMemo[sichtbar]": (rl)=>rl.showInPreview
            }["PreviewRelatedLists.useMemo[sichtbar]"]) : []
    }["PreviewRelatedLists.useMemo[sichtbar]"], [
        relatedLists,
        userContext
    ]);
    if (sichtbar.length === 0) return null;
    const zeilen = (rl)=>{
        const daten = merged[rl.relationshipName];
        if (daten && typeof daten === 'object' && 'records' in daten) {
            const records = daten.records;
            return Array.isArray(records) ? records : [];
        }
        return Array.isArray(daten) ? daten : [];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewRelatedLists$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-testid": "preview-related-lists",
        children: sichtbar.map((rl)=>{
            const records = zeilen(rl);
            const ersteId = records.length > 0 ? String(records[0].Id ?? '') : '';
            const relatedEntityType = (ersteId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityTypeFromId"])(ersteId) : undefined) ?? rl.relatedEntityType ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityTypeFromRelationship"])(rl.relationshipName) ?? null;
            // Lesende Fassung: Spalten der Vorschau, kein Anlegen, kein Anhängen, kein Inline-Edit
            const config = {
                ...rl,
                fields: rl.previewFields ?? rl.fields,
                inlineEdit: false,
                showCreateButton: false
            };
            delete config.addExisting;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$RelatedListTable$2f$RelatedListTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelatedListTable"], {
                config: config,
                records: records,
                entityId: entityId,
                entityType: entityType,
                relatedEntityType: relatedEntityType,
                hideCreateButton: true,
                parentRecord: merged,
                dataTestId: `preview-related-${rl.relationshipName}`
            }, rl.relationshipName, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewRelatedLists.tsx",
                lineNumber: 87,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewRelatedLists.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(PreviewRelatedLists, "8/G65Ve1Q7wtFE6K4Hd4OgtxbXo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLocalizedEntityFieldConfig"]
    ];
});
_c = PreviewRelatedLists;
var _c;
__turbopack_context__.k.register(_c, "PreviewRelatedLists");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DoneField",
    ()=>DoneField,
    "DueTag",
    ()=>DueTag,
    "TaskEmpty",
    ()=>TaskEmpty,
    "TaskList",
    ()=>TaskList,
    "TaskMain",
    ()=>TaskMain,
    "TaskMeta",
    ()=>TaskMeta,
    "TaskMore",
    ()=>TaskMore,
    "TaskRow",
    ()=>TaskRow,
    "TaskSubject",
    ()=>TaskSubject,
    "TasksHeader",
    ()=>TasksHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/EditableField.styles.ts [app-client] (ecmascript)");
;
;
const TasksHeader = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PreviewTasks.styles__TasksHeader",
    componentId: "sc-8ed1c43d-0"
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
`;
const TaskList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PreviewTasks.styles__TaskList",
    componentId: "sc-8ed1c43d-1"
})`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props)=>props.theme.palette.default.greyLight};
  border-radius: 6px;
  margin-bottom: 16px;
  box-sizing: border-box;
`;
const TaskRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PreviewTasks.styles__TaskRow",
    componentId: "sc-8ed1c43d-2"
})`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  min-width: 0;

  & + & {
    border-top: 1px solid ${(props)=>props.theme.palette.default.greyLight};
  }
`;
const DoneField = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PreviewTasks.styles__DoneField",
    componentId: "sc-8ed1c43d-3"
})`
  flex: 0 0 auto;

  & > div {
    width: auto;
    padding: 0;
  }

  ${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwitchShell"]} + span {
    display: none;
  }
`;
const TaskMain = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PreviewTasks.styles__TaskMain",
    componentId: "sc-8ed1c43d-4"
})`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
const TaskSubject = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PreviewTasks.styles__TaskSubject",
    componentId: "sc-8ed1c43d-5"
})`
  font-size: 13px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const TaskMeta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PreviewTasks.styles__TaskMeta",
    componentId: "sc-8ed1c43d-6"
})`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: ${(props)=>props.theme.palette.default.greyDark};
`;
const DueTag = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "PreviewTasks.styles__DueTag",
    componentId: "sc-8ed1c43d-7"
})`
  font-size: 11px;
  font-weight: ${(props)=>props.$overdue ? 600 : 400};
  color: ${(props)=>props.$overdue ? props.theme.palette.status.error.text : 'inherit'};
`;
const TaskEmpty = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PreviewTasks.styles__TaskEmpty",
    componentId: "sc-8ed1c43d-8"
})`
  padding: 8px 10px;
  font-size: 12px;
  color: ${(props)=>props.theme.palette.default.greyDark};
`;
const TaskMore = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "PreviewTasks.styles__TaskMore",
    componentId: "sc-8ed1c43d-9"
})`
  padding: 6px 10px;
  font-size: 11px;
  color: ${(props)=>props.theme.palette.default.greyDark};
  border-top: 1px solid ${(props)=>props.theme.palette.default.greyLight};
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PREVIEW_TASKS_MAX",
    ()=>PREVIEW_TASKS_MAX,
    "default",
    ()=>PreviewTasks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Headline/Headline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Avatar$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Avatar/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Avatar$2f$Avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Avatar/Avatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlus/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/iconButtonColors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TableCells$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TableCells/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TableCells$2f$TableCells$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/TableCells/TableCells.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.styles.ts [app-client] (ecmascript)");
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
const PREVIEW_TASKS_MAX = 5;
const dueTs = (value)=>value ? Date.parse(value) : Number.POSITIVE_INFINITY;
const isOverdue = (value)=>{
    if (!value) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return Date.parse(value) < today.getTime();
};
function PreviewTasks({ entityId, onCreateTask, canComplete = true, showOwner = true }) {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'preview-tasks',
            entityId
        ],
        enabled: Boolean(entityId),
        staleTime: 30 * 1000,
        queryFn: {
            "PreviewTasks.useQuery": async ()=>{
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/salesforce/record/${entityId}/tasks/`);
                return res.data.data ?? [];
            }
        }["PreviewTasks.useQuery"]
    });
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PreviewTasks.useMemo[open]": ()=>(data ?? []).filter({
                "PreviewTasks.useMemo[open]": (task)=>!task.IsClosed && task.Status !== 'Completed'
            }["PreviewTasks.useMemo[open]"]).sort({
                "PreviewTasks.useMemo[open]": (a, b)=>dueTs(a.ActivityDate) - dueTs(b.ActivityDate)
            }["PreviewTasks.useMemo[open]"])
    }["PreviewTasks.useMemo[open]"], [
        data
    ]);
    const visible = open.slice(0, PREVIEW_TASKS_MAX);
    const complete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "PreviewTasks.useMutation[complete]": async (taskId)=>{
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].patch(`/salesforce/task/${taskId}/`, {
                    Status: 'Completed'
                });
            }
        }["PreviewTasks.useMutation[complete]"],
        onSuccess: {
            "PreviewTasks.useMutation[complete]": ()=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('entityPreview.tasks.completed', {
                    defaultValue: 'Aufgabe erledigt'
                }));
                void queryClient.invalidateQueries({
                    queryKey: [
                        'preview-tasks',
                        entityId
                    ]
                });
                void queryClient.invalidateQueries({
                    queryKey: [
                        'dashboard'
                    ]
                });
                void queryClient.invalidateQueries({
                    queryKey: [
                        'salesforce-task'
                    ]
                });
            }
        }["PreviewTasks.useMutation[complete]"],
        onError: {
            "PreviewTasks.useMutation[complete]": (err)=>{
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(err.message || tr('entityPreview.tasks.error', {
                    defaultValue: 'Aufgabe konnte nicht erledigt werden'
                }));
            }
        }["PreviewTasks.useMutation[complete]"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-testid": "preview-tasks",
        "data-count": open.length,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TasksHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Headline"], {
                        importance: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Headline$2f$Headline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeadlineImportances"].h5,
                        dataTestId: "preview-tasks-headline",
                        children: [
                            tr('entityPreview.tasks.title', {
                                defaultValue: 'Aufgaben'
                            }),
                            open.length > 0 ? ` (${open.length})` : ''
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    onCreateTask && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                        onClick: onCreateTask,
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                            lineNumber: 121,
                            columnNumber: 19
                        }, this),
                        tooltip: tr('entityPreview.quickTask', {
                            defaultValue: 'Aufgabe erstellen'
                        }),
                        ariaLabel: tr('entityPreview.quickTask', {
                            defaultValue: 'Aufgabe erstellen'
                        }),
                        color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].PLUS,
                        dataTestId: "preview-tasks-create"
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskList"], {
                children: [
                    visible.map((task)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskRow"], {
                            "data-testid": `preview-task-${task.Id}`,
                            children: [
                                canComplete && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DoneField"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableField"], {
                                        fieldName: `done-${task.Id}`,
                                        label: tr('entityPreview.tasks.done', {
                                            defaultValue: 'Erledigt'
                                        }),
                                        hideLabel: true,
                                        hideEditActions: true,
                                        compact: true,
                                        fieldType: "boolean",
                                        value: false,
                                        isEditing: true,
                                        isEditable: true,
                                        onChange: (_field, value)=>{
                                            if (value === true && !complete.isPending) complete.mutate(task.Id);
                                        },
                                        dataTestId: `preview-task-done-${task.Id}`
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskMain"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskSubject"], {
                                            title: task.Subject ?? '',
                                            children: task.Subject || '—'
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskMeta"], {
                                            children: [
                                                showOwner && task.OwnerId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Avatar$2f$Avatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                            userId: task.OwnerId,
                                                            name: task.Owner?.Name ?? undefined,
                                                            size: 18
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "data-testid": `preview-task-owner-${task.Id}`,
                                                            children: task.Owner?.Name ?? '—'
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DueTag"], {
                                                    $overdue: isOverdue(task.ActivityDate),
                                                    "data-testid": `preview-task-due-${task.Id}`,
                                                    children: task.ActivityDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$TableCells$2f$TableCells$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DateCell"], {
                                                        value: task.ActivityDate
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                                                        lineNumber: 167,
                                                        columnNumber: 21
                                                    }, this) : tr('entityPreview.tasks.noDate', {
                                                        defaultValue: 'ohne Termin'
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, task.Id, true, {
                            fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)),
                    !isLoading && open.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskEmpty"], {
                        "data-testid": "preview-tasks-empty",
                        children: tr('entityPreview.tasks.empty', {
                            defaultValue: 'Keine offenen Aufgaben'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                        lineNumber: 177,
                        columnNumber: 11
                    }, this),
                    open.length > PREVIEW_TASKS_MAX && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$EntityPreviewPanel$2f$PreviewTasks$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaskMore"], {
                        "data-testid": "preview-tasks-more",
                        children: tr('entityPreview.tasks.more', {
                            defaultValue: '+ {{n}} weitere in der Related List',
                            n: open.length - PREVIEW_TASKS_MAX
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                        lineNumber: 182,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/PreviewTasks.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(PreviewTasks, "iKJtlN6rODtUTuP8MjAnj+KWE5Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = PreviewTasks;
var _c;
__turbopack_context__.k.register(_c, "PreviewTasks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/previewListLink.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isPreviewListLinkAllowed",
    ()=>isPreviewListLinkAllowed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$routeProtection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/auth/routeProtection.ts [app-client] (ecmascript)");
;
function isPreviewListLinkAllowed(listUrl, role) {
    if (!listUrl) return false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$auth$2f$routeProtection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routeAccess"])(listUrl) !== 'admin' || role === 'admin';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/previewTaskAccess.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPreviewTaskAccess",
    ()=>getPreviewTaskAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/permissions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/updatableFields.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/useEntityFieldConfig.ts [app-client] (ecmascript)");
;
;
;
function getPreviewTaskAccess(userContext) {
    if (!userContext || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, 'Task', 'view')) {
        return {
            view: false,
            complete: false,
            create: false,
            owner: false
        };
    }
    return {
        view: true,
        complete: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, 'Task', 'edit'),
        create: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$permissions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasObjectAccess"])(userContext, 'Task', 'create'),
        owner: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$useEntityFieldConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isConfigFieldVisibleForRole"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$updatableFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getConfigForApiName"])('Task'), 'OwnerId', userContext.role)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/MailTemplateModal/MailTemplateAction.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TriggerButton",
    ()=>TriggerButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
;
const TriggerButton = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "MailTemplateAction.styles__TriggerButton",
    componentId: "sc-5a6981cd-0"
})`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid ${({ theme })=>theme.palette.border.default};
  border-radius: 6px;
  background: ${({ theme })=>theme.palette.default.white};
  color: ${({ theme })=>theme.palette.text.primary};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${({ theme })=>theme.palette.surface.subtle};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/MailTemplateModal/MailTemplateAction.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MailTemplateAction",
    ()=>MailTemplateAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
/**
 * MailTemplateAction (#418, #1018)
 *
 * Selbst-gatender Trigger für die Mail-Vorlagen: sichtbarer Button im Stil
 * des Order-„Dokumente"-Buttons (Detail-Views) bzw. kompaktes Icon
 * (Side-Drawer). Öffnet seit #1018 das EINE Versand-Modal (SendViaMailModal)
 * ohne Anhang, mit vorgewählter erster Vorlage — Kopieren bleibt dort als
 * Zweitaktion. Rendert nichts, wenn das Objekt keine Vorlagen hat oder die
 * Rolle kundenseitig ist (user/rigk — internes Staff-Werkzeug, gleiche
 * Gate-Logik wie die PDF-Actions).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMailSend$2f$IconMailSend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconMailSend/IconMailSend.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/IconButton/IconButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/iconButtonColors.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2d$templates$2f$mailTemplateRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail-templates/mailTemplateRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SendViaMailModal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MailTemplateModal$2f$MailTemplateAction$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MailTemplateModal/MailTemplateAction.styles.ts [app-client] (ecmascript)");
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
const ROLES_WITHOUT_MAIL_TEMPLATES = new Set([
    'user',
    'rigk'
]);
const MailTemplateAction = ({ entityType, entityId, record, entityName, variant = 'button', dataTestId = 'mail-template-btn' })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const hideForRole = session?.user?.role !== undefined && ROLES_WITHOUT_MAIL_TEMPLATES.has(session.user.role);
    const templates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2d$templates$2f$mailTemplateRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMailTemplates"])(entityType);
    if (hideForRole || !record || templates.length === 0) return null;
    const label = tr('mailTemplates.modalTitle', {
        defaultValue: 'Mail-Vorlagen'
    });
    const displayName = entityName || typeof record.Name === 'string' && record.Name || typeof record.OrderNumber === 'string' && record.OrderNumber || entityId;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            variant === 'icon' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$IconButton$2f$IconButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconButton"], {
                onClick: ()=>setIsOpen(true),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMailSend$2f$IconMailSend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMailSend"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/components/Organism/MailTemplateModal/MailTemplateAction.tsx",
                    lineNumber: 71,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                tooltip: label,
                ariaLabel: label,
                color: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$iconButtonColors$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StandardIconColors"].INFO,
                dataTestId: dataTestId
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/MailTemplateModal/MailTemplateAction.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MailTemplateModal$2f$MailTemplateAction$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TriggerButton"], {
                type: "button",
                onClick: ()=>setIsOpen(true),
                "data-testid": dataTestId,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconMailSend$2f$IconMailSend$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMailSend"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/MailTemplateModal/MailTemplateAction.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    label
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/MailTemplateModal/MailTemplateAction.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SendViaMailModal"], {
                isOpen: isOpen,
                onClose: ()=>setIsOpen(false),
                entityType: entityType,
                templateEntityType: entityType,
                entityId: entityId,
                entityName: displayName,
                initialTemplateId: templates[0].id
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/MailTemplateModal/MailTemplateAction.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/MailTemplateModal/MailTemplateAction.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MailTemplateAction, "iS64DIBXQ8w6Qxjc6kuvtdjwWho=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = MailTemplateAction;
;
var _c;
__turbopack_context__.k.register(_c, "MailTemplateAction");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/MailTemplateModal/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
// #1018: Das Kopier-Modal ist im SendViaMailModal aufgegangen — hier bleibt
// nur der selbst-gatende Trigger.
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$MailTemplateModal$2f$MailTemplateAction$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/MailTemplateModal/MailTemplateAction.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AttachmentBadge",
    ()=>AttachmentBadge,
    "AttachmentBadgeHint",
    ()=>AttachmentBadgeHint,
    "Button",
    ()=>Button,
    "ButtonRow",
    ()=>ButtonRow,
    "ConnectPrompt",
    ()=>ConnectPrompt,
    "ExtraAttachmentLabel",
    ()=>ExtraAttachmentLabel,
    "ExtraAttachmentList",
    ()=>ExtraAttachmentList,
    "ExtraAttachmentName",
    ()=>ExtraAttachmentName,
    "ExtraAttachmentRow",
    ()=>ExtraAttachmentRow,
    "ExtraAttachmentSize",
    ()=>ExtraAttachmentSize,
    "Form",
    ()=>Form,
    "FormGroup",
    ()=>FormGroup,
    "Input",
    ()=>Input,
    "Label",
    ()=>Label,
    "MissingHint",
    ()=>MissingHint,
    "SenderHint",
    ()=>SenderHint,
    "SignatureHint",
    ()=>SignatureHint,
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
'use client';
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].form.withConfig({
    displayName: "SendViaMailModal.styles__Form",
    componentId: "sc-3771e061-0"
})`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const FormGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SendViaMailModal.styles__FormGroup",
    componentId: "sc-3771e061-1"
})`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
const Label = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "SendViaMailModal.styles__Label",
    componentId: "sc-3771e061-2"
})`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme })=>theme.palette.default.black};
`;
const Input = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].input.withConfig({
    displayName: "SendViaMailModal.styles__Input",
    componentId: "sc-3771e061-3"
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
const Textarea = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].textarea.withConfig({
    displayName: "SendViaMailModal.styles__Textarea",
    componentId: "sc-3771e061-4"
})`
  padding: 8px 12px;
  border: 1px solid ${({ theme })=>theme.palette.default.grey};
  border-radius: 6px;
  font-size: 0.875rem;
  color: ${({ theme })=>theme.palette.default.black};
  background: ${({ theme })=>theme.palette.default.white};
  outline: none;
  resize: vertical;
  min-height: 100px;
  transition: border-color 0.2s;
  font-family: inherit;

  &:focus {
    border-color: ${({ theme })=>theme.palette.default.primary};
  }
`;
const ButtonRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SendViaMailModal.styles__ButtonRow",
    componentId: "sc-3771e061-5"
})`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 8px;
`;
const Button = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "SendViaMailModal.styles__Button",
    componentId: "sc-3771e061-6"
})`
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid
    ${({ theme, $variant })=>$variant === 'primary' ? theme.palette.default.primary : theme.palette.default.grey};
  background: ${({ theme, $variant })=>$variant === 'primary' ? theme.palette.default.primary : theme.palette.default.white};
  color: ${({ theme, $variant })=>$variant === 'primary' ? theme.palette.default.white : theme.palette.default.black};
  transition: opacity 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
const AttachmentBadge = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].button.withConfig({
    displayName: "SendViaMailModal.styles__AttachmentBadge",
    componentId: "sc-3771e061-7"
})`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid transparent;
  border-radius: 6px;
  background: ${({ theme })=>theme.palette.default.greyLight};
  font-family: inherit;
  font-size: 0.8125rem;
  color: ${({ theme })=>theme.palette.default.black};
  text-align: left;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme })=>theme.palette.default.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme })=>theme.palette.default.primary};
    outline-offset: 1px;
  }

  svg {
    flex-shrink: 0;
    color: ${({ theme })=>theme.palette.default.error};
  }
`;
const AttachmentBadgeHint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "SendViaMailModal.styles__AttachmentBadgeHint",
    componentId: "sc-3771e061-8"
})`
  margin-left: auto;
  font-size: 0.75rem;
  color: ${({ theme })=>theme.palette.default.primary};
  white-space: nowrap;
`;
const ExtraAttachmentList = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].ul.withConfig({
    displayName: "SendViaMailModal.styles__ExtraAttachmentList",
    componentId: "sc-3771e061-9"
})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 220px;
  overflow-y: auto;
`;
const ExtraAttachmentRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].li.withConfig({
    displayName: "SendViaMailModal.styles__ExtraAttachmentRow",
    componentId: "sc-3771e061-10"
})`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border-radius: 6px;
  background: ${({ theme })=>theme.palette.default.greyLight};
  font-size: 0.8125rem;
  color: ${({ theme })=>theme.palette.default.black};

  input {
    flex-shrink: 0;
    margin: 0;
  }

  &[data-disabled='true'] {
    opacity: 0.55;
  }
`;
const ExtraAttachmentLabel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].label.withConfig({
    displayName: "SendViaMailModal.styles__ExtraAttachmentLabel",
    componentId: "sc-3771e061-11"
})`
  display: flex;
  flex: 1;
  min-width: 0;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;
const ExtraAttachmentName = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "SendViaMailModal.styles__ExtraAttachmentName",
    componentId: "sc-3771e061-12"
})`
  flex: 1;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ExtraAttachmentSize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].span.withConfig({
    displayName: "SendViaMailModal.styles__ExtraAttachmentSize",
    componentId: "sc-3771e061-13"
})`
  flex-shrink: 0;
  font-size: 0.75rem;
  color: ${({ theme })=>theme.palette.default.secondary};
`;
const ConnectPrompt = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].div.withConfig({
    displayName: "SendViaMailModal.styles__ConnectPrompt",
    componentId: "sc-3771e061-14"
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 24px;
  text-align: center;
  color: ${({ theme })=>theme.palette.default.greyDark};
  font-size: 0.875rem;
`;
const MissingHint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "SendViaMailModal.styles__MissingHint",
    componentId: "sc-3771e061-15"
})`
  margin: 0;
  font-size: 0.8125rem;
  color: ${({ theme })=>theme.palette.default.error};
`;
const SignatureHint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "SendViaMailModal.styles__SignatureHint",
    componentId: "sc-3771e061-16"
})`
  margin: 0;
  font-size: 0.8125rem;
  color: ${({ theme })=>theme.palette.default.greyDark};
`;
const SenderHint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].p.withConfig({
    displayName: "SendViaMailModal.styles__SenderHint",
    componentId: "sc-3771e061-17"
})`
  margin: 0;
  font-size: 0.8125rem;
  color: ${({ theme })=>theme.palette.text.secondary};
  overflow-wrap: anywhere;
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SendViaMailModal",
    ()=>SendViaMailModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Modal/Modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/EditableField/EditableField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFilePdf$2f$IconFilePdf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFilePdf/IconFilePdf.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconLoadingSpinner/IconLoadingSpinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useOutlookStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useOutlookStatus.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2d$templates$2f$mailTemplateRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail-templates/mailTemplateRegistry.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$signature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail/signature.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$defaultCc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail/defaultCc.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail/address.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MailRecipientsField$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MailRecipientsField/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MailRecipientsField$2f$MailRecipientsField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/MailRecipientsField/MailRecipientsField.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HtmlPreview$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HtmlPreview/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HtmlPreview$2f$HtmlPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/HtmlPreview/HtmlPreview.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/axios/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FileThumbnail$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FileThumbnail/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FileThumbnail$2f$FileThumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Molecule/FileThumbnail/FileThumbnail.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/DocumentViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$viewerItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/DocumentViewer/viewerItems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$blobDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/blobDownload.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$generatedPdfPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/generatedPdfPreview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordFiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useRecordFiles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useFormatters.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$files$2f$filePreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/files/filePreview.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$mailAttachmentLimits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/mail/mailAttachmentLimits.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityTypeLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityTypeLabel.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiErrorText.ts [app-client] (ecmascript)");
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
/** Vorlagentext = Betreff, Leerzeile, Body (Registry-Konvention) */ function splitRendered(text) {
    const idx = text.indexOf('\n\n');
    if (idx < 0) return {
        subject: text,
        body: ''
    };
    return {
        subject: text.slice(0, idx),
        body: text.slice(idx + 2)
    };
}
const SendViaMailModal = ({ isOpen, onClose, entityType, entityId, entityName, pdfApiPath, defaultFilename, defaultRecipients, defaultCc, defaultSubject, defaultBody, templateEntityType, initialTemplateId, previewToken, previewBlob })=>{
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const { revision: trRevision } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    // Artefakte-Review M-3: Empfänger sehen das Objekt-Label, nie den
    // SObject-API-Namen („Abrechnung__c: RE-2026-0042").
    const entityTypeLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityTypeLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityTypeLabel"])()(entityType);
    const [recipients, setRecipients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cc, setCc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showCc, setShowCc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [subject, setSubject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [body, setBody] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [templateId, setTemplateId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [missing, setMissing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSending, setIsSending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [inputError, setInputError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Vorlage genau einmal je Öffnen anwenden — nie über Nutzereingaben drüber
    const templateApplied = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // #1789: Empfänger aus dem Datensatz genau einmal je Öffnen vorbelegen
    const recipientsPrefilled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // #1807: Standard-CC genau einmal je Öffnen vorbelegen
    const ccPrefilled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // #1807: zählt jeden Reset hoch — die CC-Vorbelegung läuft danach erneut
    const [resetTick, setResetTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const fmt = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"])();
    // #1651: Vorschau des PDF-Anhangs (einmal erzeugt, für Versand wiederverwendet)
    const [attachmentPreview, setAttachmentPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const attachmentPreviewRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // #1651: Viewer — 'pdf' = erzeugtes Dokument, sonst Id eines Datensatz-Anhangs
    const [viewerTarget, setViewerTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // #1651: zusätzlich gewählte Anhänge des Datensatzes (ContentDocument-Ids)
    const [extraAttachmentIds, setExtraAttachmentIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const canAttachRecordFiles = !!pdfApiPath && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"])(entityId);
    const { data: recordFilesData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordFiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordFiles"])(entityId, {
        enabled: isOpen && canAttachRecordFiles
    });
    const recordFiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SendViaMailModal.useMemo[recordFiles]": ()=>(recordFilesData?.data ?? []).filter({
                "SendViaMailModal.useMemo[recordFiles]": (file)=>!!file.downloadUrl
            }["SendViaMailModal.useMemo[recordFiles]"])
    }["SendViaMailModal.useMemo[recordFiles]"], [
        recordFilesData
    ]);
    // Shared Outlook link status (#340) — single react-query source across all consumers.
    const { linked, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useOutlookStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutlookStatus"])();
    // #1658: Signatur mit Bildern baut der Server; hier nur die Vorschau
    // (Bilder als data:-URL). Beim Senden hängt der Server dieselbe Fassung an.
    const { data: signature, isError: signatureError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'mail-signature-preview'
        ],
        queryFn: {
            "SendViaMailModal.useQuery": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/mail/signature/');
                return response.data;
            }
        }["SendViaMailModal.useQuery"],
        enabled: isOpen,
        staleTime: 60_000
    });
    // #1888: Belege gehen aus dem Buchhaltungspostfach (System) — dann braucht
    // der Versand mit Dokument kein verknüpftes Outlook. Nur mit Dokument; die
    // Mail ohne Dokument (/api/mail/send) bleibt persönlich.
    const { data: senderInfo, isLoading: senderLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'entity-pdf-sender'
        ],
        queryFn: {
            "SendViaMailModal.useQuery": async ()=>(await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/entity-pdf/sender/')).data
        }["SendViaMailModal.useQuery"],
        enabled: isOpen && !!pdfApiPath,
        staleTime: 5 * 60_000
    });
    const systemTransport = !!pdfApiPath && senderInfo?.transport === 'system';
    const senderMissing = systemTransport && !senderInfo?.sender;
    // #1807: Standard-CC je Objekt (Funktionspostfächer aus der Server-Umgebung)
    const { data: defaultCcMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'mail-default-cc'
        ],
        queryFn: {
            "SendViaMailModal.useQuery": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/mail/default-cc/');
                return response.data ?? {};
            }
        }["SendViaMailModal.useQuery"],
        enabled: isOpen && defaultCc === undefined,
        staleTime: 5 * 60_000
    });
    // #1018: Vorlagen des Objekts + Voll-Fetch (Drawer-/Listen-Records sind schlank)
    const mailConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2d$templates$2f$mailTemplateRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMailEntityConfig"])(templateEntityType ?? entityType);
    const templates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SendViaMailModal.useMemo[templates]": ()=>mailConfig?.templates ?? []
    }["SendViaMailModal.useMemo[templates]"], [
        mailConfig
    ]);
    const { data: fullRecord } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'mail-template-record',
            mailConfig?.entityPath,
            entityId
        ],
        queryFn: {
            "SendViaMailModal.useQuery": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/salesforce/${mailConfig?.entityPath}/${entityId}/`);
                return response.data?.data ?? {};
            }
        }["SendViaMailModal.useQuery"],
        enabled: isOpen && !!mailConfig && templates.length > 0 && !!entityId,
        staleTime: 30_000
    });
    const genericBody = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SendViaMailModal.useMemo[genericBody]": ()=>defaultBody ?? `${tr('mail.send.defaultBodyIntro', {
                defaultValue: 'Anbei sende ich Ihnen'
            })} ${entityTypeLabel} "${entityName}"${pdfApiPath ? ` ${tr('mail.send.defaultBodyAsPdf', {
                defaultValue: 'als PDF'
            })}` : ''}.\n\n${tr('mail.send.regards', {
                defaultValue: 'Mit freundlichen Grüßen'
            })}`
    }["SendViaMailModal.useMemo[genericBody]"], // `tr` behält beim Nachladen der Übersetzungen seine Identität, `revision` nicht
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        defaultBody,
        entityTypeLabel,
        entityName,
        pdfApiPath,
        tr,
        trRevision
    ]);
    // Reset form on open — apply caller-supplied defaults if present
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SendViaMailModal.useEffect": ()=>{
            if (isOpen) {
                const validDefaults = (defaultRecipients ?? []).map(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeMailAddress"]).filter(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMailAddress"]);
                setRecipients(validDefaults);
                setCc([]);
                setShowCc(false);
                setSubject(defaultSubject ?? `${entityTypeLabel}: ${entityName}`);
                setBody(genericBody);
                setTemplateId(initialTemplateId ?? '');
                setMissing([]);
                setIsSending(false);
                setInputError('');
                templateApplied.current = false;
                recipientsPrefilled.current = false;
                ccPrefilled.current = false;
                setViewerTarget(null);
                setExtraAttachmentIds([]);
                const handedOver = previewBlob !== undefined ? {
                    blob: previewBlob,
                    token: previewToken ?? null,
                    filename: defaultFilename ?? null
                } : null;
                setAttachmentPreview(handedOver);
                attachmentPreviewRequest.current = handedOver ? Promise.resolve(handedOver) : null;
                setResetTick({
                    "SendViaMailModal.useEffect": (tick)=>tick + 1
                }["SendViaMailModal.useEffect"]);
            }
        // Vorschau-Props gehören zum Öffnen, nicht zu jedem Render
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["SendViaMailModal.useEffect"], [
        isOpen,
        entityTypeLabel,
        entityName,
        defaultRecipients,
        defaultSubject,
        genericBody,
        initialTemplateId
    ]);
    // #1807: Standard-CC vorbelegen — aus der Prop, sonst aus der Zuordnung je
    // Objekt. Inhalt als Schlüssel, damit ein Array-Literal des Aufrufers nicht
    // bei jedem Render neu vorbelegt. Der Nutzer kann die Adressen entfernen.
    const defaultCcKey = defaultCc === undefined ? null : JSON.stringify(defaultCc);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SendViaMailModal.useEffect": ()=>{
            if (!isOpen || ccPrefilled.current) return;
            let adressen;
            if (defaultCcKey !== null) {
                adressen = JSON.parse(defaultCcKey).map({
                    "SendViaMailModal.useEffect": (a)=>a.trim().toLowerCase()
                }["SendViaMailModal.useEffect"]);
            } else {
                if (!defaultCcMap) return;
                adressen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$defaultCc$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defaultCcFor"])(defaultCcMap, templateEntityType ?? entityType);
            }
            ccPrefilled.current = true;
            const gueltig = adressen.filter(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$address$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMailAddress"]);
            if (gueltig.length === 0) return;
            setCc({
                "SendViaMailModal.useEffect": (prev)=>[
                        ...new Set([
                            ...gueltig,
                            ...prev
                        ])
                    ]
            }["SendViaMailModal.useEffect"]);
            setShowCc(true);
        }
    }["SendViaMailModal.useEffect"], [
        isOpen,
        defaultCcKey,
        defaultCcMap,
        templateEntityType,
        entityType,
        resetTick
    ]);
    // #1789: Ohne Empfänger vom Aufrufer kommen sie aus dem Voll-Datensatz
    // (Registry `recipientPaths`, z. B. Rechnungs-Mailadressen des Accounts).
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SendViaMailModal.useEffect": ()=>{
            if (!isOpen || !fullRecord || recipientsPrefilled.current) return;
            recipientsPrefilled.current = true;
            if (recipients.length > 0 || (defaultRecipients ?? []).length > 0) return;
            const ausDatensatz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2d$templates$2f$mailTemplateRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recipientsFromRecord"])(mailConfig, fullRecord);
            if (ausDatensatz.length > 0) setRecipients(ausDatensatz);
        }
    }["SendViaMailModal.useEffect"], [
        isOpen,
        fullRecord,
        recipients.length,
        defaultRecipients,
        mailConfig
    ]);
    /** #1651: PDF-Anhang einmal erzeugen; das Token geht mit dem Versand mit */ const loadAttachmentPreview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SendViaMailModal.useCallback[loadAttachmentPreview]": ()=>{
            if (!pdfApiPath) return Promise.reject(new Error('no attachment'));
            if (!attachmentPreviewRequest.current) {
                const request = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$generatedPdfPreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchGeneratedPdfPreview"])(pdfApiPath);
                attachmentPreviewRequest.current = request;
                request.then(setAttachmentPreview).catch({
                    "SendViaMailModal.useCallback[loadAttachmentPreview]": ()=>{
                        attachmentPreviewRequest.current = null;
                    }
                }["SendViaMailModal.useCallback[loadAttachmentPreview]"]);
            }
            return attachmentPreviewRequest.current;
        }
    }["SendViaMailModal.useCallback[loadAttachmentPreview]"], [
        pdfApiPath
    ]);
    const recordFileItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SendViaMailModal.useMemo[recordFileItems]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$viewerItems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salesforceFilesToViewerItems"])(recordFiles)
    }["SendViaMailModal.useMemo[recordFileItems]"], [
        recordFiles
    ]);
    const viewerItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SendViaMailModal.useMemo[viewerItems]": ()=>{
            if (viewerTarget === 'pdf') {
                return [
                    {
                        id: 'pdf',
                        name: attachmentPreview?.filename ?? defaultFilename ?? 'dokument.pdf',
                        kind: 'pdf',
                        loadData: {
                            "SendViaMailModal.useMemo[viewerItems]": ()=>loadAttachmentPreview().then({
                                    "SendViaMailModal.useMemo[viewerItems]": (result)=>result.blob
                                }["SendViaMailModal.useMemo[viewerItems]"])
                        }["SendViaMailModal.useMemo[viewerItems]"],
                        onDownload: {
                            "SendViaMailModal.useMemo[viewerItems]": ()=>void loadAttachmentPreview().then({
                                    "SendViaMailModal.useMemo[viewerItems]": (result)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$blobDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerBlobDownload"])(result.blob, result.filename ?? defaultFilename ?? 'dokument.pdf')
                                }["SendViaMailModal.useMemo[viewerItems]"])
                        }["SendViaMailModal.useMemo[viewerItems]"]
                    }
                ];
            }
            return recordFileItems;
        }
    }["SendViaMailModal.useMemo[viewerItems]"], [
        viewerTarget,
        attachmentPreview,
        defaultFilename,
        loadAttachmentPreview,
        recordFileItems
    ]);
    const viewerIndex = viewerTarget === null || viewerTarget === 'pdf' ? 0 : Math.max(0, recordFileItems.findIndex((item)=>item.id === viewerTarget));
    // #1651: Größe vorab begrenzen (Graph sendMail ~3 MB); das PDF zählt mit,
    // sobald es einmal erzeugt ist
    const selectedBytes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SendViaMailModal.useMemo[selectedBytes]": ()=>recordFiles.filter({
                "SendViaMailModal.useMemo[selectedBytes]": (file)=>extraAttachmentIds.includes(file.id)
            }["SendViaMailModal.useMemo[selectedBytes]"]).reduce({
                "SendViaMailModal.useMemo[selectedBytes]": (sum, file)=>sum + file.contentSize
            }["SendViaMailModal.useMemo[selectedBytes]"], 0)
    }["SendViaMailModal.useMemo[selectedBytes]"], [
        recordFiles,
        extraAttachmentIds
    ]);
    const pdfBytes = attachmentPreview?.blob.size ?? 0;
    const toggleExtraAttachment = (fileId)=>setExtraAttachmentIds((current)=>current.includes(fileId) ? current.filter((id)=>id !== fileId) : [
                ...current,
                fileId
            ]);
    // Vorlage anwenden (Betreff + Body aus dem Datensatz); die Signatur hängt
    // der Server an (#1658), sie steht nicht im Textfeld.
    const applyTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SendViaMailModal.useCallback[applyTemplate]": (id)=>{
            setTemplateId(id);
            templateApplied.current = true;
            const template = templates.find({
                "SendViaMailModal.useCallback[applyTemplate].template": (t)=>t.id === id
            }["SendViaMailModal.useCallback[applyTemplate].template"]);
            if (!template) {
                setMissing([]);
                setBody(genericBody);
                setSubject(defaultSubject ?? `${entityTypeLabel}: ${entityName}`);
                return;
            }
            const rendered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2d$templates$2f$mailTemplateRegistry$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderMailTemplate"])(template, fullRecord ?? {});
            const parts = splitRendered(rendered.text);
            setSubject(parts.subject);
            setBody(parts.body);
            setMissing(rendered.missing);
        }
    }["SendViaMailModal.useCallback[applyTemplate]"], [
        templates,
        fullRecord,
        genericBody,
        defaultSubject,
        entityTypeLabel,
        entityName
    ]);
    // Vorgewählte Vorlage anwenden, sobald der Datensatz geladen ist.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SendViaMailModal.useEffect": ()=>{
            if (!isOpen || templateApplied.current) return;
            if (templateId && templates.length > 0 && fullRecord) applyTemplate(templateId);
        }
    }["SendViaMailModal.useEffect"], [
        isOpen,
        templateId,
        templates.length,
        fullRecord,
        applyTemplate
    ]);
    // #964: Chips, Freitext und Kontaktsuche für An/CC stecken im gemeinsamen
    // Molecule MailRecipientsField (auch im Mail-Dialog auf /mail).
    // #1018: Kopieren bleibt als Zweitaktion (auch ohne Outlook-Verknüpfung)
    const handleCopy = async ()=>{
        try {
            // #1658: Klartext-Fassung der Signatur mitkopieren (für Outlook von Hand)
            const signatureText = signature?.text ? `\n\n${signature.text}` : '';
            await navigator.clipboard.writeText(`${subject}\n\n${body}${signatureText}`);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('mailTemplates.copied', {
                defaultValue: 'Text kopiert'
            }));
        } catch  {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('mailTemplates.copyError', {
                defaultValue: 'Kopieren fehlgeschlagen — Text bitte manuell markieren'
            }));
        }
    };
    const handleSend = async (e)=>{
        e.preventDefault();
        if (recipients.length === 0) {
            setInputError(tr('mail.send.recipientRequired', {
                defaultValue: 'Mindestens ein Empfänger erforderlich'
            }));
            return;
        }
        setIsSending(true);
        try {
            const html = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$signature$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bodyToHtml"])(body);
            if (pdfApiPath) {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post('/entity-pdf/send', {
                    entityType,
                    entityId,
                    entityName,
                    pdfApiPath,
                    defaultFilename,
                    // #1651: angesehene Vorschau verschicken, gewählte Anhänge dazu
                    previewToken: attachmentPreview?.token ?? undefined,
                    attachmentDocumentIds: extraAttachmentIds.length > 0 ? extraAttachmentIds : undefined,
                    channel: 'mail',
                    mail: {
                        to: recipients,
                        cc: cc.length > 0 ? cc : undefined,
                        subject,
                        body: html,
                        signature: true
                    }
                });
            } else {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post('/mail/send', {
                    to: recipients,
                    cc: cc.length > 0 ? cc : undefined,
                    subject,
                    body: html,
                    // #1601: Versand-Log am Datensatz auch ohne Dokument
                    log: entityId ? {
                        entityId,
                        entityType: templateEntityType ?? entityType
                    } : undefined,
                    signature: true
                });
            }
            const ctx = {
                entityType,
                entityId,
                entityName,
                action: pdfApiPath ? tr('notifications.action.pdfEmailSent', {
                    defaultValue: 'PDF per E-Mail gesendet'
                }) : tr('notifications.action.emailSent', {
                    defaultValue: 'E-Mail gesendet'
                })
            };
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`${tr('mail.send.sentTo', {
                defaultValue: 'E-Mail gesendet an'
            })} ${recipients.join(', ')}`, {
                context: ctx
            });
            onClose();
        } catch (err) {
            const ctx = {
                entityType,
                entityId,
                entityName,
                action: tr('notifications.action.emailSendFailed', {
                    defaultValue: 'E-Mail senden — Fehler'
                })
            };
            // A rejected axios request is the equivalent of the old `!response.ok` branch:
            // surface the server-supplied body message, falling back to 'Fehler beim Senden'.
            // Any other thrown error keeps the original err.message / generic fallback.
            let message;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAxiosError"])(err) && err.response) {
                const data = err.response.data;
                message = data?.message && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateApiMessage"])(tr, data.message) || tr('mail.send.sendError', {
                    defaultValue: 'Fehler beim Senden'
                });
            } else {
                message = err instanceof Error ? err.message : tr('mail.send.sendMailError', {
                    defaultValue: 'Fehler beim Senden der E-Mail'
                });
            }
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message, {
                context: ctx
            });
        } finally{
            setIsSending(false);
        }
    };
    // #1888: beim Systemweg zählt die Outlook-Verknüpfung nicht
    const senderPending = !!pdfApiPath && senderLoading;
    const notLinked = !systemTransport && !senderPending && !isLoading && !linked;
    const templateOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SendViaMailModal.useMemo[templateOptions]": ()=>templates.map({
                "SendViaMailModal.useMemo[templateOptions]": (t)=>({
                        label: t.title,
                        value: t.id
                    })
            }["SendViaMailModal.useMemo[templateOptions]"])
    }["SendViaMailModal.useMemo[templateOptions]"], [
        templates
    ]);
    const hasSignature = !!signature?.html;
    const signatureState = signature ? 'ready' : signatureError ? 'error' : 'loading';
    // #1018: Atom/Modal rendert auch geschlossen (Overlay hidden). Das Modal
    // steht mehrfach auf einer Seite (Sidebar, Vorlagen-Aktion, Dokument-Menü)
    // — geschlossen nichts rendern, sonst kollidieren die Testids/Ids.
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Modal$2f$Modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        onClose: onClose,
        title: `${entityTypeLabel} ${tr('mail.send.titleSuffix', {
            defaultValue: 'per E-Mail senden'
        })}`,
        // #1985: so breit wie die Signatur (560 px), mindestens medium
        size: "fit",
        dataTestId: "send-via-mail-modal",
        // #911: Eingabe-Formular — nur bewusst schließen (X/Abbrechen/Escape)
        closeOnBackdropClick: false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
                onSubmit: handleSend,
                "data-testid": "send-via-mail-form",
                children: [
                    notLinked && // #1018: ohne Outlook-Verknüpfung bleibt Vorlage + Kopieren nutzbar
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectPrompt"], {
                        "data-testid": "mail-not-linked-hint",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: tr('mail.send.notLinked', {
                                    defaultValue: 'Um E-Mails zu senden, müssen Sie Ihr Microsoft-Konto verknüpfen. Vorlage und Text lassen sich trotzdem kopieren.'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 507,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                $variant: "primary",
                                type: "button",
                                onClick: ()=>{
                                    window.location.href = '/api/auth/outlook';
                                },
                                "data-testid": "connect-outlook-btn",
                                children: tr('mail.send.connectOutlook', {
                                    defaultValue: 'Microsoft-Konto verbinden'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 512,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                        lineNumber: 506,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    pdfApiPath && senderInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SenderHint"], {
                        "data-testid": "send-mail-sender",
                        "data-transport": senderInfo.transport,
                        "data-configured": senderInfo.transport === 'personal' || senderInfo.sender ? 'true' : 'false',
                        "data-dry-run": senderInfo.dryRun ? 'true' : 'false',
                        children: senderInfo.transport === 'personal' ? tr('mail.send.senderPersonal', {
                            defaultValue: 'Absender: Ihr verknüpftes Microsoft-Konto'
                        }) : senderInfo.sender ? tr('mail.send.senderSystem', {
                            defaultValue: 'Absender: {{name}} <{{address}}>, Antworten gehen an dieses Postfach',
                            name: senderInfo.sender.name,
                            address: senderInfo.sender.address
                        }) : tr('mail.send.senderMissing', {
                            defaultValue: 'Der Absender für Belege ist in dieser Umgebung nicht konfiguriert.'
                        })
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                        lineNumber: 526,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    templates.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$EditableField$2f$EditableField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EditableField"], {
                                fieldName: "mailTemplate",
                                label: tr('mail.send.template', {
                                    defaultValue: 'Vorlage'
                                }),
                                fieldType: "picklist",
                                value: templateId,
                                isEditable: true,
                                isEditing: true,
                                hideEditActions: true,
                                compact: true,
                                options: templateOptions,
                                onChange: (_field, value)=>applyTemplate(typeof value === 'string' ? value : ''),
                                dataTestId: "mail-template"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            missing.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MissingHint"], {
                                "data-testid": "mail-template-missing-hint",
                                children: [
                                    tr('mailTemplates.missingHint', {
                                        defaultValue: 'Fehlende Werte im Datensatz:'
                                    }),
                                    ' ',
                                    missing.join(', ')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 562,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                        lineNumber: 547,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "mail-to",
                                children: tr('mail.send.to', {
                                    defaultValue: 'An'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 571,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MailRecipientsField$2f$MailRecipientsField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailRecipientsField"], {
                                inputId: "mail-to",
                                values: recipients,
                                onChange: setRecipients,
                                error: inputError,
                                onInput: ()=>setInputError(''),
                                placeholder: tr('mail.send.toPlaceholder', {
                                    defaultValue: 'E-Mail-Adresse eingeben und Enter drücken'
                                }),
                                inputTestId: "mail-to-input",
                                removeTestIdPrefix: "remove-recipient-",
                                contactTestId: "mail-to-contact",
                                contactFieldName: "mailContactTo"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 572,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            !showCc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                $variant: "secondary",
                                onClick: ()=>setShowCc(true),
                                style: {
                                    alignSelf: 'flex-start',
                                    padding: '2px 8px',
                                    fontSize: '0.75rem'
                                },
                                "data-testid": "show-cc-btn",
                                children: tr('mail.send.addCc', {
                                    defaultValue: 'CC hinzufügen'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 585,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                        lineNumber: 570,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    showCc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "mail-cc",
                                children: "CC"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 599,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$MailRecipientsField$2f$MailRecipientsField$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MailRecipientsField"], {
                                inputId: "mail-cc",
                                values: cc,
                                onChange: setCc,
                                reportErrors: false,
                                placeholder: tr('mail.send.ccPlaceholder', {
                                    defaultValue: 'CC E-Mail-Adresse'
                                }),
                                inputTestId: "mail-cc-input",
                                removeTestIdPrefix: "remove-cc-",
                                contactTestId: "mail-cc-contact",
                                contactFieldName: "mailContactCc"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 600,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                        lineNumber: 598,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "mail-subject",
                                children: tr('mail.send.subject', {
                                    defaultValue: 'Betreff'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 615,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                id: "mail-subject",
                                type: "text",
                                value: subject,
                                onChange: (e)=>setSubject(e.target.value),
                                "data-testid": "mail-subject-input"
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 616,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                        lineNumber: 614,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "mail-body",
                                children: tr('mail.send.message', {
                                    defaultValue: 'Nachricht'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 626,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                id: "mail-body",
                                value: body,
                                onChange: (e)=>setBody(e.target.value),
                                "data-testid": "mail-body-input",
                                "data-has-signature": hasSignature ? 'true' : 'false',
                                "data-template-id": templateId || undefined
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 627,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                        lineNumber: 625,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                as: "span",
                                children: tr('mail.send.signature', {
                                    defaultValue: 'Signatur'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 638,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            signature?.html ? // #1658: nicht editierbar, Bilder nur als data:-URL. #1985: inline über
                            // HtmlPreview (Richtlinie htmlPolicy) statt Frame, Höhe nach Inhalt.
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$HtmlPreview$2f$HtmlPreview$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HtmlPreview"], {
                                html: signature.html,
                                paper: true,
                                title: tr('mail.send.signaturePreview', {
                                    defaultValue: 'Vorschau der Signatur'
                                }),
                                dataTestId: "mail-signature-preview",
                                dataAttributes: {
                                    state: signatureState
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 642,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SignatureHint"], {
                                "data-testid": "mail-signature-preview",
                                "data-state": signatureState,
                                children: signatureError ? tr('mail.send.signatureError', {
                                    defaultValue: 'Die Signatur konnte nicht geladen werden. Sie wird beim Senden trotzdem angehängt.'
                                }) : tr('mail.send.signatureLoading', {
                                    defaultValue: 'Signatur wird geladen …'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 650,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                        lineNumber: 637,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    pdfApiPath && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                children: tr('mail.send.attachment', {
                                    defaultValue: 'Anhang'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 662,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttachmentBadge"], {
                                type: "button",
                                onClick: ()=>setViewerTarget('pdf'),
                                "aria-label": tr('mail.send.previewAttachment', {
                                    defaultValue: 'Vorschau von {{name}} öffnen',
                                    name: defaultFilename ?? ''
                                }),
                                "data-testid": "mail-attachment-badge",
                                "data-previewed": attachmentPreview ? 'true' : 'false',
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFilePdf$2f$IconFilePdf$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFilePdf"], {}, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                        lineNumber: 673,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: attachmentPreview?.filename ?? defaultFilename
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                        lineNumber: 674,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AttachmentBadgeHint"], {
                                        children: tr('relatedFiles.preview', {
                                            defaultValue: 'Vorschau'
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                        lineNumber: 675,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 663,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                        lineNumber: 661,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    canAttachRecordFiles && recordFiles.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormGroup"], {
                        "data-testid": "mail-extra-attachments",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                children: tr('mail.send.extraAttachments', {
                                    defaultValue: 'Weitere Anhänge aus dem Datensatz (max. {{size}} insgesamt)',
                                    size: fmt.fileSize(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$mailAttachmentLimits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_MAIL_ATTACHMENT_BYTES"])
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 684,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtraAttachmentList"], {
                                children: recordFiles.map((file)=>{
                                    const item = recordFileItems.find((candidate)=>candidate.id === file.id);
                                    const checked = extraAttachmentIds.includes(file.id);
                                    const tooLarge = !checked && (pdfBytes + selectedBytes + file.contentSize > __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$mailAttachmentLimits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_MAIL_ATTACHMENT_BYTES"] || extraAttachmentIds.length >= __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$mail$2f$mailAttachmentLimits$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MAX_EXTRA_MAIL_ATTACHMENTS"]);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtraAttachmentRow"], {
                                        "data-testid": `mail-extra-attachment-${file.id}`,
                                        "data-selected": checked ? 'true' : 'false',
                                        "data-disabled": tooLarge ? 'true' : 'false',
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Molecule$2f$FileThumbnail$2f$FileThumbnail$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FileThumbnail"], {
                                                name: item?.name ?? file.title,
                                                extension: file.fileExtension,
                                                kind: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$files$2f$filePreview$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["previewKindForExtension"])(file.fileExtension),
                                                imageUrl: item?.previewUrl,
                                                onClick: ()=>setViewerTarget(file.id),
                                                ariaLabel: tr('mail.send.previewAttachment', {
                                                    defaultValue: 'Vorschau von {{name}} öffnen',
                                                    name: item?.name ?? file.title
                                                }),
                                                dataTestId: `mail-extra-attachment-thumb-${file.id}`
                                            }, void 0, false, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                                lineNumber: 705,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtraAttachmentLabel"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: checked,
                                                        disabled: tooLarge,
                                                        onChange: ()=>toggleExtraAttachment(file.id),
                                                        "data-testid": `mail-extra-attachment-check-${file.id}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                                        lineNumber: 718,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtraAttachmentName"], {
                                                        title: item?.name,
                                                        children: item?.name ?? file.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                                        lineNumber: 725,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExtraAttachmentSize"], {
                                                        children: fmt.fileSize(file.contentSize)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                                        lineNumber: 726,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                                lineNumber: 717,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, file.id, true, {
                                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                        lineNumber: 699,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 690,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                        lineNumber: 683,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                $variant: "secondary",
                                onClick: onClose,
                                disabled: isSending,
                                "data-testid": "mail-cancel-btn",
                                children: tr('common.cancel', {
                                    defaultValue: 'Abbrechen'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 736,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                $variant: "secondary",
                                onClick: handleCopy,
                                "data-testid": "mail-copy-btn",
                                children: tr('mailTemplates.copy', {
                                    defaultValue: 'Text kopieren'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 745,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                $variant: "primary",
                                disabled: isSending || recipients.length === 0 || notLinked || senderPending || senderMissing,
                                "data-testid": "mail-send-btn",
                                children: isSending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconLoadingSpinner$2f$IconLoadingSpinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLoadingSpinner"], {}, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                    lineNumber: 754,
                                    columnNumber: 26
                                }, ("TURBOPACK compile-time value", void 0)) : tr('mail.send.send', {
                                    defaultValue: 'Senden'
                                })
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                                lineNumber: 748,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                        lineNumber: 735,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            viewerTarget !== null && viewerItems.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$DocumentViewer$2f$DocumentViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentViewer"], {
                items: viewerItems,
                index: viewerIndex,
                onIndexChange: (index)=>setViewerTarget(viewerItems[index]?.id ?? null),
                onClose: ()=>setViewerTarget(null),
                layer: "dialog",
                dataTestId: "mail-attachment-viewer"
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
                lineNumber: 760,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx",
        lineNumber: 493,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SendViaMailModal, "90kliD9jKyNY5MVne4uSCm5r1JY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityTypeLabel$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityTypeLabel"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useFormatters$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormatters"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useRecordFiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecordFiles"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useOutlookStatus$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOutlookStatus"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = SendViaMailModal;
;
var _c;
__turbopack_context__.k.register(_c, "SendViaMailModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/components/Organism/SendViaMailModal/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Organism$2f$SendViaMailModal$2f$SendViaMailModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Organism/SendViaMailModal/SendViaMailModal.tsx [app-client] (ecmascript)");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]})(),
"[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/components/Organism/EntityPreviewPanel/EntityPreviewPanel.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_app_components_Organism_04i3h6b0_r_u4._.js.map