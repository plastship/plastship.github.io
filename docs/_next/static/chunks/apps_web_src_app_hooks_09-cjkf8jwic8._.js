(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/hooks/useDebouncedCallback.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "useDebouncedCallback",
    ()=>useDebouncedCallback
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function useDebouncedCallback(callback, delay) {
    _s();
    const timeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const callbackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(callback);
    // Update callback ref when callback changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebouncedCallback.useEffect": ()=>{
            callbackRef.current = callback;
        }
    }["useDebouncedCallback.useEffect"], [
        callback
    ]);
    // Clear timeout on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebouncedCallback.useEffect": ()=>{
            return ({
                "useDebouncedCallback.useEffect": ()=>{
                    if (timeoutRef.current) {
                        clearTimeout(timeoutRef.current);
                    }
                }
            })["useDebouncedCallback.useEffect"];
        }
    }["useDebouncedCallback.useEffect"], []);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDebouncedCallback.useCallback": (...args)=>{
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout({
                "useDebouncedCallback.useCallback": ()=>{
                    callbackRef.current(...args);
                }
            }["useDebouncedCallback.useCallback"], delay);
        }
    }["useDebouncedCallback.useCallback"], [
        delay
    ]);
}
_s(useDebouncedCallback, "fDUz5UWalfStebMUOEGxr3AEChg=");
const __TURBOPACK__default__export__ = useDebouncedCallback;
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
"[project]/apps/web/src/app/hooks/useEntityTypeLabel.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEntityTypeLabel",
    ()=>useEntityTypeLabel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/lookupFields.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function useEntityTypeLabel() {
    _s();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    // Ohne eigenen `entityLabel.*`-Schlüssel: Objektname über den Daten-Text-Mechanismus
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useEntityTypeLabel.useCallback": (entityType)=>{
            const sobject = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$lookupFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ENTITY_TYPE_TO_SF_OBJECT"][entityType] ?? entityType;
            return tr(`entityLabel.${sobject}`, {
                defaultValue: entityText.text((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityLabel"])(sobject))
            });
        }
    }["useEntityTypeLabel.useCallback"], [
        tr,
        entityText
    ]);
}
_s(useEntityTypeLabel, "8+IO17t9Z+O5jlln3be/kubJ5/Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useFieldMarkers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getFieldMarkerSets",
    ()=>getFieldMarkerSets,
    "isCustomerFacingRole",
    ()=>isCustomerFacingRole,
    "useFieldMarkers",
    ()=>useFieldMarkers
]);
/**
 * useFieldMarkers (#916) — EINE Quelle dafür, welche Felder eines Objekts
 * eine Markierung tragen (#465 Dokument / kundengeteilt, #844 Qualifizierung).
 *
 * Verbraucher: EntityDetailLayout (Detail-View), EntityPreviewFields
 * (Side-Drawer) und GenericEntityForm (Create-/Edit-Formular). Alle drei
 * rechnen dieselben Mengen aus denselben Configs; vorher stand die Ableitung
 * je Verbraucher einzeln da.
 *
 * Schlüssel ist der Salesforce-API-Name (`Order`, `Material_Proposal__c`, …)
 * — die Registries (Dokumente, Feld-Config, Qualifizierung) sind so verkeyt.
 * Das Formular bekommt den EntityType-Enum-Wert und muss vorher über
 * ENTITY_TYPE_TO_SF_OBJECT mappen (sonst leere Mengen, ohne Fehler).
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$fieldOriginIndicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/documents/fieldOriginIndicators.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$qualificationFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/entityFields/qualificationFields.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function isCustomerFacingRole(role) {
    return role === 'user' || role === 'rigk';
}
function getFieldMarkerSets(sfObjectName) {
    const documentRelevantFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$fieldOriginIndicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocumentRelevantFields"])(sfObjectName);
    const customerSharedFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$documents$2f$fieldOriginIndicators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCustomerSharedFields"])(sfObjectName);
    const qualificationFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$entityFields$2f$qualificationFields$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQualificationFields"])(sfObjectName);
    return {
        documentRelevantFields,
        customerSharedFields,
        qualificationFields,
        hasAny: documentRelevantFields.size > 0 || customerSharedFields.size > 0 || qualificationFields.size > 0
    };
}
function useFieldMarkers(sfObjectName) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useFieldMarkers.useMemo": ()=>getFieldMarkerSets(sfObjectName)
    }["useFieldMarkers.useMemo"], [
        sfObjectName
    ]);
}
_s(useFieldMarkers, "nwk+m61qLgjDVUp4IGV/072DDN4=");
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
"[project]/apps/web/src/app/hooks/useGenericEntityMutations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_MAP",
    ()=>API_BASE_MAP,
    "ENTITY_CREATE_API_MAP",
    ()=>ENTITY_CREATE_API_MAP,
    "ENTITY_QUERY_KEY_MAP",
    ()=>ENTITY_QUERY_KEY_MAP,
    "ENTITY_SINGLE_API_MAP",
    ()=>ENTITY_SINGLE_API_MAP,
    "useGenericEntityMutations",
    ()=>useGenericEntityMutations
]);
/**
 * Generic Entity Mutations Hook
 *
 * Provides unified Create and Update operations for all entity types.
 * Used by GenericEntityForm for creating and updating entities.
 *
 * NOTE: Delete operations have been removed for Salesforce objects as a security policy.
 * Salesforce data should be managed through proper Salesforce workflows, not direct API deletion.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/toast.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUnifiedHooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiErrorText.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
const ENTITY_CREATE_API_MAP = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account]: 'accounts',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contact]: 'contacts',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Opportunity]: 'opportunities',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Case]: 'cases',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task]: 'tasks',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order]: 'orders',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contract]: 'contracts',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CostCenter]: 'cost-centers',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].OrderItem]: 'orderitems',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Project]: 'projects',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Invoice]: 'invoices',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialAnalysis]: 'material-analyses',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal]: 'material-proposals',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MonitoredMaterial]: 'monitored-materials',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Requirement]: 'requirements',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleFeedback]: 'sample-feedbacks',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending]: 'sample-sendings',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SupplierAudit]: 'supplier-audits',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Onboarding]: 'onboardings',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ContactHandover]: 'contact-handovers',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CompanyCertificate]: 'company-certificates',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Certificate]: 'certificates',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AuditProperty]: 'audit-properties',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ProductionSite]: 'production-sites',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Product]: 'products',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Lohn]: 'lohn',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AktuellerPreisUndVerfugbarkeit]: 'aktueller-preis-und-verfugbarkeit',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Reklamation]: 'reklamations',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Prozessfeedback]: 'prozessfeedbacks',
    // Postgres entities (non-Salesforce)
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Notification]: 'notifications',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].User]: 'plastship/users',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].TravelExpense]: 'travel-expenses'
};
const ENTITY_SINGLE_API_MAP = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account]: 'account',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contact]: 'contact',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Opportunity]: 'opportunity',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Case]: 'case',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task]: 'task',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order]: 'order',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contract]: 'contract',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CostCenter]: 'cost-center',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].OrderItem]: 'orderitem',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Project]: 'project',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Invoice]: 'invoice',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialAnalysis]: 'material-analysis',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal]: 'material-proposals',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MonitoredMaterial]: 'monitored-material',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Requirement]: 'requirement',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleFeedback]: 'sample-feedback',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending]: 'sample-sending',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SupplierAudit]: 'supplier-audit',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Onboarding]: 'onboarding',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ContactHandover]: 'contact-handover',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CompanyCertificate]: 'company-certificate',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Certificate]: 'certificate',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AuditProperty]: 'audit-property',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ProductionSite]: 'production-site',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Product]: 'product',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Lohn]: 'lohn',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AktuellerPreisUndVerfugbarkeit]: 'aktueller-preis-und-verfugbarkeit',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Reklamation]: 'reklamation',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Prozessfeedback]: 'prozessfeedback',
    // Postgres entities (non-Salesforce)
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Notification]: 'notifications/admin',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].User]: 'plastship/users',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].TravelExpense]: 'travel-expenses'
};
const ENTITY_QUERY_KEY_MAP = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_ACCOUNT,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contact]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_CONTACT,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Opportunity]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_OPPORTUNITY,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Case]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_CASE,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_TASK,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_ORDER,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contract]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_CONTRACT,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CostCenter]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_COST_CENTER,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].OrderItem]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_ORDER_ITEM,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Project]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_PROJECT,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Invoice]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_INVOICE,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialAnalysis]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_MATERIAL_ANALYSIS,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_MATERIAL_PROPOSAL,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MonitoredMaterial]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_MONITORED_MATERIAL,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Requirement]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_REQUIREMENT,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleFeedback]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_SAMPLE_FEEDBACK,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_SAMPLE_SENDING,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SupplierAudit]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_SUPPLIER_AUDIT,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Onboarding]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_ONBOARDING,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ContactHandover]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_CONTACT_HANDOVER,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CompanyCertificate]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_COMPANY_CERTIFICATE,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Certificate]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_CERTIFICATE,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AuditProperty]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_AUDIT_PROPERTY,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ProductionSite]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_PRODUCTION_SITE,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Product]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_PRODUCT,
    // Kein Unified-List-Hook — Invalidierung ist folgenloser No-op:
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Lohn]: 'salesforce-lohn',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AktuellerPreisUndVerfugbarkeit]: 'salesforce-aktueller-preis-und-verfugbarkeit',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Reklamation]: 'salesforce-reklamation',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Prozessfeedback]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].SALESFORCE_PROZESSFEEDBACK,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].TravelExpense]: 'travel-expense',
    // Postgres entities (non-Salesforce)
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Notification]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].NOTIFICATION,
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].User]: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUnifiedHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNIFIED_QUERY_KEYS"].PLASTSHIP_USER // UsersTable/UserContent nutzen usePlastshipUser
};
/**
 * German display names for success/error messages — angezeigt über
 * `entityText.text()` in der Sprache des Nutzers (#1637)
 */ const ENTITY_DISPLAY_NAMES_DE = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account]: 'Account',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contact]: 'Kontakt',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Opportunity]: 'Opportunity',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Case]: 'Kundenvorgang',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task]: 'Aufgabe',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order]: 'Auftrag',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contract]: 'Vertrag',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CostCenter]: 'Kostenstelle',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].OrderItem]: 'Auftragsposition',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Project]: 'Projekt',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Invoice]: 'Rechnung',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialAnalysis]: 'Materialanalyse',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MaterialProposal]: 'Materialvorschlag',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].MonitoredMaterial]: 'Überwachtes Material',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Requirement]: 'Bedarf',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleFeedback]: 'Musterfeedback',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending]: 'Musterversand',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SupplierAudit]: 'Lieferantenaudit',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Onboarding]: 'Onboarding',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ContactHandover]: 'Kontaktübergabe',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].CompanyCertificate]: 'Firmenzertifikat',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Certificate]: 'Zertifikat (Katalog)',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AuditProperty]: 'Prüfparameter',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].ProductionSite]: 'Produktionsstätte',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Product]: 'Produkt',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Lohn]: 'Lohndienstleistung',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].AktuellerPreisUndVerfugbarkeit]: 'Aktueller Preis',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Reklamation]: 'Reklamation',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Prozessfeedback]: 'Prozessfeedback',
    // Postgres entities (non-Salesforce)
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Notification]: 'Benachrichtigung',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].User]: 'Benutzer',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].TravelExpense]: 'Reisekostenabrechnung'
};
const API_BASE_MAP = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Notification]: '/api',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].User]: '/api',
    [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].TravelExpense]: '/api'
};
/**
 * Get the API base path for an entity type.
 * Returns '/api/salesforce' for Salesforce entities, or a custom base for Postgres entities.
 */ function getApiBase(entityType) {
    return API_BASE_MAP[entityType] ?? '/api/salesforce';
}
function useGenericEntityMutations(entityType, options = {}) {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const apiBase = getApiBase(entityType);
    const createApiPath = ENTITY_CREATE_API_MAP[entityType];
    const singleApiPath = ENTITY_SINGLE_API_MAP[entityType];
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])();
    const entityText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    const displayName = entityText.text(ENTITY_DISPLAY_NAMES_DE[entityType]);
    // Compute axios-relative path by stripping the leading '/api'
    const axiosBase = apiBase.replace(/^\/api/, '');
    // #363: invalidation must hit the exact unified-hook key; see
    // ENTITY_QUERY_KEY_MAP for why this cannot be derived from the API path.
    const unifiedListKey = ENTITY_QUERY_KEY_MAP[entityType];
    // apiPathOverride ist laut Contract (ModalConfig) relativ zur Axios-Basis
    // '/api' — z.B. '/rigk/accounts/<id>/products'. Das entity-spezifische
    // axiosBase ('/salesforce') darf hier NICHT davor: das ergab
    // /api/salesforce/rigk/... → 404 für alle RIGK-Modul-Creates/-Edits.
    const createUrl = options.apiPathOverride ? `${options.apiPathOverride}/` : `${axiosBase}/${createApiPath}/`;
    // Create mutation - uses plural path (collection endpoint)
    const createMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useGenericEntityMutations.useMutation[createMutation]": async (data)=>{
                try {
                    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post(createUrl, data);
                    const result = response.data;
                    return {
                        id: result.Id ?? result.id ?? '',
                        ...result
                    };
                } catch (err) {
                    const errorData = err?.response?.data;
                    // #1626: feste Server-Meldungen in der Sprache des Nutzers
                    const serverMessage = errorData?.message ?? errorData?.error;
                    throw new Error(serverMessage != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateApiMessage"])(tr, serverMessage) : tr('entityForm.toast.createFailed', {
                        defaultValue: 'Fehler beim Erstellen'
                    }));
                }
            }
        }["useGenericEntityMutations.useMutation[createMutation]"],
        onSuccess: {
            "useGenericEntityMutations.useMutation[createMutation]": (result)=>{
                // Invalidate relevant queries
                queryClient.invalidateQueries({
                    queryKey: [
                        entityType
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'salesforce',
                        createApiPath
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'salesforce',
                        entityType.toLowerCase()
                    ]
                });
                // #363: invalidate the unified-hook list key (prefix match covers the
                // paginated key `[unifiedListKey, {params}]`) so the new record shows
                // without a manual reload.
                queryClient.invalidateQueries({
                    queryKey: [
                        unifiedListKey
                    ]
                });
                const ctx = {
                    entityType,
                    entityId: result.id || result.Id || '',
                    action: tr('notifications.action.created', {
                        defaultValue: 'Erstellt'
                    })
                };
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('entityForm.toast.created', {
                    defaultValue: '{{entity}} erfolgreich erstellt',
                    entity: displayName
                }), {
                    context: ctx
                });
            }
        }["useGenericEntityMutations.useMutation[createMutation]"],
        onError: {
            "useGenericEntityMutations.useMutation[createMutation]": (error)=>{
                console.error(`Error creating ${entityType}:`, error);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('entityForm.toast.createError', {
                    defaultValue: 'Fehler beim Erstellen: {{message}}',
                    message: error.message
                }));
            }
        }["useGenericEntityMutations.useMutation[createMutation]"]
    });
    // Update mutation - uses singular path with ID. When apiPathOverride is
    // set, it is expected to already be record-scoped (e.g. `/rigk/products/
    // <recordId>`), so no `id` suffix is appended.
    const updateMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useGenericEntityMutations.useMutation[updateMutation]": async ({ id, data })=>{
                // Wie beim Create: Override ist '/api'-relativ, kein axiosBase-Präfix.
                const url = options.apiPathOverride ? `${options.apiPathOverride}/` : `${axiosBase}/${singleApiPath}/${id}/`;
                try {
                    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].patch(url, data);
                    const result = response.data;
                    return {
                        id,
                        ...result
                    };
                } catch (err) {
                    const errorData = err?.response?.data;
                    // #1626: feste Server-Meldungen in der Sprache des Nutzers
                    const serverMessage = errorData?.message ?? errorData?.error;
                    throw new Error(serverMessage != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiErrorText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["translateApiMessage"])(tr, serverMessage) : tr('entityForm.toast.updateFailed', {
                        defaultValue: 'Fehler beim Aktualisieren'
                    }));
                }
            }
        }["useGenericEntityMutations.useMutation[updateMutation]"],
        onSuccess: {
            "useGenericEntityMutations.useMutation[updateMutation]": (_, variables)=>{
                // Invalidate relevant queries
                queryClient.invalidateQueries({
                    queryKey: [
                        entityType
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        entityType,
                        variables.id
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'salesforce',
                        singleApiPath
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        'salesforce',
                        singleApiPath,
                        variables.id
                    ]
                });
                // #363: also invalidate the unified-hook key (list + detail) so edits show
                // without a manual reload.
                queryClient.invalidateQueries({
                    queryKey: [
                        unifiedListKey
                    ]
                });
                queryClient.invalidateQueries({
                    queryKey: [
                        unifiedListKey,
                        variables.id
                    ]
                });
                const changedFields = Object.keys(variables.data);
                const action = changedFields.length === 1 ? `${changedFields[0]} aktualisiert` : 'Aktualisiert';
                const ctx = {
                    entityType,
                    entityId: variables.id,
                    action
                };
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(tr('entityForm.toast.updated', {
                    defaultValue: '{{entity}} erfolgreich aktualisiert',
                    entity: displayName
                }), {
                    context: ctx
                });
            }
        }["useGenericEntityMutations.useMutation[updateMutation]"],
        onError: {
            "useGenericEntityMutations.useMutation[updateMutation]": (error)=>{
                console.error(`Error updating ${entityType}:`, error);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(tr('entityForm.toast.updateError', {
                    defaultValue: 'Fehler beim Aktualisieren: {{message}}',
                    message: error.message
                }));
            }
        }["useGenericEntityMutations.useMutation[updateMutation]"]
    });
    return {
        // Mutation functions
        create: createMutation.mutateAsync,
        update: updateMutation.mutateAsync,
        // #363: for creates that bypass the mutations above (e.g. wizard related
        // objects posting directly), callers invalidate the target entity's
        // unified list here — keeps the queryClient encapsulated in this hook.
        invalidateEntityList: (targetEntityType)=>queryClient.invalidateQueries({
                queryKey: [
                    ENTITY_QUERY_KEY_MAP[targetEntityType]
                ]
            }),
        // #913: nach Kind-Anlage auch den Eltern-Datensatz neu laden — Related
        // Lists sind Subqueries am Parent, die Kind-Listen-Invalidierung allein
        // zeigte neue Positionen erst nach Reload.
        invalidateEntityRecord: (targetEntityType, id)=>queryClient.invalidateQueries({
                queryKey: [
                    ENTITY_QUERY_KEY_MAP[targetEntityType],
                    id
                ]
            }),
        // Loading states
        isCreating: createMutation.isPending,
        isUpdating: updateMutation.isPending,
        isLoading: createMutation.isPending || updateMutation.isPending,
        // Error states
        createError: createMutation.error,
        updateError: updateMutation.error,
        error: createMutation.error || updateMutation.error
    };
}
_s(useGenericEntityMutations, "CT/9Wg+PZruP8kEdVVQayh4vV5E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useKanbanStatusUpdate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateKanbanStatus",
    ()=>updateKanbanStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
;
async function updateKanbanStatus({ entityPath, id, data, method = 'PUT' }) {
    const url = `/salesforce/${entityPath}/${id}/`;
    if (method === 'PUT') {
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].put(url, data);
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].patch(url, data);
    }
}
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
"[project]/apps/web/src/app/hooks/useQuickOpenEntity.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useQuickOpenEntity",
    ()=>useQuickOpenEntity
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/SidebarContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/helper/entityHelpers.ts [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function useQuickOpenEntity() {
    _s();
    const { openRightSidebar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const role = session?.user?.role;
    const skipPreview = role === 'user' || role === 'rigk';
    const quickOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useQuickOpenEntity.useCallback[quickOpen]": (recordId, record = {}, highlightField)=>{
            const entityType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getEntityTypeFromId"])(recordId);
            const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getUrlFromId"])(recordId);
            const entityPath = entityType ? __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$helper$2f$entityHelpers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ENTITY_URLS"][entityType]?.replace(/^\//, '') : undefined;
            if (skipPreview || !entityType) {
                if (url) router.push(url);
                return;
            }
            openRightSidebar({
                entityType,
                entityId: recordId,
                entityPath,
                record,
                highlightField
            });
        }
    }["useQuickOpenEntity.useCallback[quickOpen]"], [
        openRightSidebar,
        router,
        skipPreview
    ]);
    return {
        quickOpen
    };
}
_s(useQuickOpenEntity, "nogNBvxWqWuu4R8/qGZxEZJfzDc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$SidebarContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSidebar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useRecordFiles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "recordFilesQueryKey",
    ()=>recordFilesQueryKey,
    "useRecordFiles",
    ()=>useRecordFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const recordFilesQueryKey = (recordId)=>[
        'salesforce-files',
        recordId
    ];
function useRecordFiles(recordId, options = {}) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: recordFilesQueryKey(recordId),
        queryFn: {
            "useRecordFiles.useQuery": async ()=>{
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`/salesforce/files?recordId=${recordId}`);
                return response.data;
            }
        }["useRecordFiles.useQuery"],
        enabled: !!recordId && (options.enabled ?? true)
    });
}
_s(useRecordFiles, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
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
"[project]/apps/web/src/app/hooks/useTeam.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTeam",
    ()=>useTeam
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$team$2f$team$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/team/team.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const LEER = [];
function useTeam(options) {
    _s();
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const angemeldet = Boolean(userContext);
    const query = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'team'
        ],
        queryFn: {
            "useTeam.useQuery[query]": async ()=>(await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get('/plastship/team/')).data
        }["useTeam.useQuery[query]"],
        staleTime: 60 * 60 * 1000,
        refetchOnWindowFocus: false,
        retry: 1,
        enabled: angemeldet && (options?.enabled ?? true)
    });
    const members = query.data ?? LEER;
    const bySalesforceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTeam.useCallback[bySalesforceId]": (salesforceId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$team$2f$team$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTeamMemberBySalesforceId"])(members, salesforceId)
    }["useTeam.useCallback[bySalesforceId]"], [
        members
    ]);
    const byEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTeam.useCallback[byEmail]": (email)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$team$2f$team$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findTeamMemberByEmail"])(members, email)
    }["useTeam.useCallback[byEmail]"], [
        members
    ]);
    return {
        members,
        isLoading: query.isLoading,
        bySalesforceId,
        byEmail
    };
}
_s(useTeam, "MjkWzBYaGYSnccpjPuxriFAdSHI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/hooks/useUnifiedHooks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UNIFIED_QUERY_KEYS",
    ()=>UNIFIED_QUERY_KEYS,
    "UNIFIED_QUERY_OPTIONS",
    ()=>UNIFIED_QUERY_OPTIONS,
    "convertToSingularPath",
    ()=>convertToSingularPath,
    "createPlastshipEntityHooks",
    ()=>createPlastshipEntityHooks,
    "createPlastshipHooks",
    ()=>createPlastshipHooks,
    "createPlastshipListHooks",
    ()=>createPlastshipListHooks,
    "createQueryKey",
    ()=>createQueryKey,
    "createSalesforceEntityHooks",
    ()=>createSalesforceEntityHooks,
    "createSalesforceHooks",
    ()=>createSalesforceHooks,
    "createSalesforceListHooks",
    ()=>createSalesforceListHooks,
    "hasCompleteCRUDHooks",
    ()=>hasCompleteCRUDHooks,
    "hasListHooks",
    ()=>hasListHooks,
    "isCreatePlaceholderId",
    ()=>isCreatePlaceholderId,
    "standardizeEnabled",
    ()=>standardizeEnabled,
    "standardizeErrorHandler",
    ()=>standardizeErrorHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
;
;
const UNIFIED_QUERY_KEYS = {
    // Salesforce entities
    SALESFORCE_ACCOUNT: 'salesforce-account',
    SALESFORCE_CASE: 'salesforce-case',
    SALESFORCE_CONTACT: 'salesforce-contact',
    SALESFORCE_TASK: 'salesforce-task',
    SALESFORCE_ORDER: 'salesforce-order',
    SALESFORCE_OPPORTUNITY: 'salesforce-opportunity',
    SALESFORCE_PRODUCT: 'salesforce-product',
    SALESFORCE_PROJECT: 'salesforce-project',
    SALESFORCE_INVOICE: 'salesforce-invoice',
    SALESFORCE_REQUIREMENT: 'salesforce-requirement',
    SALESFORCE_MATERIAL_ANALYSIS: 'salesforce-material-analysis',
    SALESFORCE_MATERIAL_PROPOSAL: 'salesforce-material-proposal',
    SALESFORCE_MONITORED_MATERIAL: 'salesforce-monitored-material',
    SALESFORCE_ONBOARDING: 'salesforce-onboarding',
    SALESFORCE_CONTACT_HANDOVER: 'salesforce-contact-handover',
    SALESFORCE_SAMPLE_FEEDBACK: 'salesforce-sample-feedback',
    SALESFORCE_SAMPLE_SENDING: 'salesforce-sample-sending',
    SALESFORCE_USER: 'salesforce-user',
    SALESFORCE_ORDER_ITEM: 'salesforce-orderitem',
    SALESFORCE_OPPORTUNITY_LINE_ITEM: 'salesforce-opportunitylineitem',
    SALESFORCE_SUPPLIER_AUDIT: 'salesforce-supplier-audit',
    SALESFORCE_PRODUCTION_SITE: 'salesforce-production-site',
    SALESFORCE_COMPANY_CERTIFICATE: 'salesforce-company-certificate',
    // #449: Verträge
    SALESFORCE_CONTRACT: 'salesforce-contract',
    // #325: Kostenstellen
    SALESFORCE_COST_CENTER: 'salesforce-cost-center',
    SALESFORCE_CERTIFICATE: 'salesforce-certificate',
    SALESFORCE_AUDIT_PROPERTY: 'salesforce-audit-property',
    SALESFORCE_PROZESSFEEDBACK: 'salesforce-prozessfeedback',
    SALESFORCE_RECYCLATE_GRADE: 'salesforce-recyclate-grade',
    SALESFORCE_RECYCLATE_COMPATIBILITY: 'salesforce-recyclate-compatibility',
    // Plastrack entities
    PLASTRACK_SCAN: 'plastrack-scan',
    PLASTRACK_BOX: 'plastrack-box',
    // Plastship entities
    PLASTSHIP_USER: 'plastship-user',
    PLASTSHIP_USER_PROFILE: 'plastship-user-profile',
    PLASTSHIP_USERS: 'plastship-users',
    // RIGK module entities
    RIGK_ACCOUNT: 'rigk-account',
    RIGK_CONTACT: 'rigk-contact',
    RIGK_STATUS_UPDATE: 'rigk-status-update',
    // Postgres entities
    NOTIFICATION: 'notification',
    MARKET_PRICE: 'market-price',
    // #1656: Preisbewegungen/veraltete Preise (berechnet aus SF-Preisdatensätzen)
    PRICE_MOVEMENT: 'price-movement'
};
const UNIFIED_QUERY_OPTIONS = {
    staleTime: 60 * 1000,
    retry: 3,
    retryDelay: (attemptIndex)=>Math.min(1000 * 2 ** attemptIndex, 30000),
    refetchOnWindowFocus: false
};
const createQueryKey = (entityKey, id, additionalKeys)=>{
    const keys = [
        entityKey
    ];
    if (id) keys.push(id);
    if (additionalKeys) keys.push(...additionalKeys);
    return keys;
};
const isCreatePlaceholderId = (id)=>id === 'create';
const standardizeEnabled = (options, id)=>{
    if (isCreatePlaceholderId(id)) return false;
    return options?.enabled !== undefined ? options.enabled : !!id;
};
const standardizeErrorHandler = (error, entityName)=>{
    // 403 (RBAC denies this role the resource) and 404 (no such record) are expected
    // outcomes for data queries, not application errors — e.g. a `user`-role session
    // hitting a global widget's monitored-materials/pia list. Don't log them as errors;
    // still throw so React Query surfaces an empty/error state to the caller.
    const status = error?.response?.status;
    if (status !== 403 && status !== 404) {
        console.error(`Error in ${entityName} operation:`, error);
    }
    throw error;
};
const convertToSingularPath = (pluralPath)=>{
    // Handle special cases first (without /api prefix since axios adds it)
    const specialCases = {
        '/salesforce/material-analyses': '/salesforce/material-analysis',
        // #331: unregelmäßiger Plural — naives 's'-Strippen ergäbe 'audit-propertie'
        '/salesforce/audit-properties': '/salesforce/audit-property',
        '/salesforce/material-proposals': '/salesforce/material-proposals',
        '/salesforce/contact-handovers': '/salesforce/contact-handover',
        '/salesforce/sample-feedbacks': '/salesforce/sample-feedback',
        '/salesforce/sample-sendings': '/salesforce/sample-sending',
        '/salesforce/monitored-materials': '/salesforce/monitored-material',
        '/salesforce/opportunities': '/salesforce/opportunity',
        '/salesforce/opportunitylineitems': '/salesforce/opportunitylineitems',
        '/salesforce/recyclate-compatibilities': '/salesforce/recyclate-compatibility',
        '/monitored-materials-recyclate': '/monitored-materials-recyclate',
        '/rigk/accounts': '/rigk/accounts',
        '/rigk/contacts': '/rigk/contacts',
        '/rigk/status-updates': '/rigk/status-updates',
        '/plastrack/scans': '/plastrack/scan',
        '/plastrack/boxes': '/plastrack/box',
        '/plastship/users': '/plastship/users'
    };
    if (specialCases[pluralPath]) {
        return specialCases[pluralPath];
    }
    // Default: remove trailing 's' (handle both with and without trailing slash)
    return pluralPath.replace(/s\/$/, '/').replace(/s$/, '');
};
function hasCompleteCRUDHooks(hooks) {
    return !!(hooks.useSingle && hooks.useCreate && hooks.useUpdate);
}
function hasListHooks(hooks) {
    return !!hooks.useList;
}
function createSalesforceHooks(entityKey, basePath, options) {
    var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
    const queryOptions = {
        ...UNIFIED_QUERY_OPTIONS,
        ...options?.customQueryOptions
    };
    const errorHandler = options?.customErrorHandler || ((error)=>standardizeErrorHandler(error, entityKey));
    return {
        useSingle: _s((id, options)=>{
            _s();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
                queryKey: createQueryKey(entityKey, id),
                queryFn: {
                    "createSalesforceHooks.useQuery": async ()=>{
                        try {
                            // Convert basePath from plural to singular for individual operations
                            const singularPath = convertToSingularPath(basePath);
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`${singularPath.replace(/\/$/, '')}/${encodeURIComponent(id)}/`);
                            return response.data;
                        } catch (error) {
                            errorHandler(error);
                            throw error;
                        }
                    }
                }["createSalesforceHooks.useQuery"],
                ...queryOptions,
                enabled: standardizeEnabled(options, id)
            });
        }, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
            ];
        }),
        useCreate: _s1(()=>{
            _s1();
            const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
                mutationFn: {
                    "createSalesforceHooks.useMutation": async (data)=>{
                        try {
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post(basePath, data);
                            return response.data;
                        } catch (error) {
                            errorHandler(error);
                            throw error;
                        }
                    }
                }["createSalesforceHooks.useMutation"],
                onSuccess: {
                    "createSalesforceHooks.useMutation": ()=>{
                        queryClient.invalidateQueries({
                            queryKey: [
                                entityKey
                            ]
                        });
                    }
                }["createSalesforceHooks.useMutation"]
            });
        }, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
            ];
        }),
        useUpdate: _s2(()=>{
            _s2();
            const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
                mutationFn: {
                    "createSalesforceHooks.useMutation": async ({ id, data })=>{
                        try {
                            // Convert basePath from plural to singular for individual operations
                            const singularPath = convertToSingularPath(basePath);
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].patch(`${singularPath.replace(/\/$/, '')}/${id}/`, data);
                            return response.data;
                        } catch (error) {
                            errorHandler(error);
                            throw error;
                        }
                    }
                }["createSalesforceHooks.useMutation"],
                onSuccess: {
                    "createSalesforceHooks.useMutation": (_, { id })=>{
                        queryClient.invalidateQueries({
                            queryKey: createQueryKey(entityKey, id)
                        });
                        queryClient.invalidateQueries({
                            queryKey: [
                                entityKey
                            ]
                        });
                    }
                }["createSalesforceHooks.useMutation"]
            });
        }, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
            ];
        })
    };
}
function createSalesforceListHooks(entityKey, basePath, options) {
    var _s = __turbopack_context__.k.signature();
    const queryOptions = {
        ...UNIFIED_QUERY_OPTIONS,
        ...options?.customQueryOptions
    };
    const errorHandler = options?.customErrorHandler || ((error)=>standardizeErrorHandler(error, entityKey));
    return {
        useList: _s((params)=>{
            _s();
            const { pagination = {
                page: 1,
                pageSize: 25
            }, sort = {
                field: 'LastModifiedDate',
                order: 'DESC'
            }, queryParams = {}, enabled = true, initialData } = params || {};
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
                queryKey: createQueryKey(entityKey, undefined, [
                    pagination,
                    sort,
                    queryParams
                ]),
                queryFn: {
                    "createSalesforceListHooks.useQuery": async ()=>{
                        try {
                            if (!pagination || !sort) {
                                throw new Error('Missing required parameters');
                            }
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(basePath, {
                                params: {
                                    page: pagination.page,
                                    pageSize: pagination.pageSize,
                                    sortField: sort.field,
                                    sortOrder: sort.order,
                                    ...queryParams
                                }
                            });
                            return response.data;
                        } catch (error) {
                            errorHandler(error);
                            throw error;
                        }
                    }
                }["createSalesforceListHooks.useQuery"],
                ...queryOptions,
                enabled,
                initialData
            });
        }, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
            ];
        })
    };
}
function createSalesforceEntityHooks(entityKey, basePath, options) {
    return {
        ...createSalesforceHooks(entityKey, basePath, options),
        ...createSalesforceListHooks(entityKey, basePath, options)
    };
}
function createPlastshipHooks(entityKey, basePath, options) {
    var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
    const queryOptions = {
        ...UNIFIED_QUERY_OPTIONS,
        ...options?.customQueryOptions
    };
    const errorHandler = options?.customErrorHandler || ((error)=>standardizeErrorHandler(error, entityKey));
    return {
        useSingle: _s((id, options)=>{
            _s();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
                queryKey: createQueryKey(entityKey, id),
                queryFn: {
                    "createPlastshipHooks.useQuery": async ()=>{
                        try {
                            const singularPath = convertToSingularPath(basePath);
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`${singularPath.replace(/\/$/, '')}/${encodeURIComponent(id)}/`);
                            return response.data;
                        } catch (error) {
                            errorHandler(error);
                            throw error;
                        }
                    }
                }["createPlastshipHooks.useQuery"],
                ...queryOptions,
                enabled: standardizeEnabled(options, id)
            });
        }, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
            ];
        }),
        useCreate: _s1(()=>{
            _s1();
            const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
                mutationFn: {
                    "createPlastshipHooks.useMutation": async (data)=>{
                        try {
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post(basePath, data);
                            return response.data;
                        } catch (error) {
                            errorHandler(error);
                            throw error;
                        }
                    }
                }["createPlastshipHooks.useMutation"],
                onSuccess: {
                    "createPlastshipHooks.useMutation": ()=>{
                        queryClient.invalidateQueries({
                            queryKey: [
                                entityKey
                            ]
                        });
                    }
                }["createPlastshipHooks.useMutation"]
            });
        }, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
            ];
        }),
        useUpdate: _s2(()=>{
            _s2();
            const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
                mutationFn: {
                    "createPlastshipHooks.useMutation": async ({ id, data })=>{
                        try {
                            const singularPath = convertToSingularPath(basePath);
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].put(`${singularPath.replace(/\/$/, '')}/${encodeURIComponent(id)}/`, data);
                            return response.data;
                        } catch (error) {
                            errorHandler(error);
                            throw error;
                        }
                    }
                }["createPlastshipHooks.useMutation"],
                onSuccess: {
                    "createPlastshipHooks.useMutation": (_, { id })=>{
                        queryClient.invalidateQueries({
                            queryKey: createQueryKey(entityKey, id)
                        });
                        queryClient.invalidateQueries({
                            queryKey: [
                                entityKey
                            ]
                        });
                    }
                }["createPlastshipHooks.useMutation"]
            });
        }, "YK0wzM21ECnncaq5SECwU+/SVdQ=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
            ];
        })
    };
}
function createPlastshipListHooks(entityKey, basePath, options) {
    var _s = __turbopack_context__.k.signature();
    const queryOptions = {
        ...UNIFIED_QUERY_OPTIONS,
        ...options?.customQueryOptions
    };
    const errorHandler = options?.customErrorHandler || ((error)=>standardizeErrorHandler(error, entityKey));
    return {
        useList: _s((params)=>{
            _s();
            const { pagination = {
                page: 1,
                pageSize: 25
            }, sort = {
                field: 'createdAt',
                order: 'DESC'
            }, queryParams = {}, enabled = true, initialData } = params || {};
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
                queryKey: createQueryKey(entityKey, undefined, [
                    pagination,
                    sort,
                    queryParams
                ]),
                queryFn: {
                    "createPlastshipListHooks.useQuery": async ()=>{
                        try {
                            const queryParamsString = new URLSearchParams();
                            if (pagination) {
                                queryParamsString.set('page', pagination.page.toString());
                                queryParamsString.set('pageSize', pagination.pageSize.toString());
                            }
                            if (sort) {
                                queryParamsString.set('sortField', sort.field);
                                queryParamsString.set('sortOrder', sort.order);
                            }
                            Object.entries(queryParams).forEach({
                                "createPlastshipListHooks.useQuery": ([key, value])=>{
                                    if (value !== undefined) {
                                        queryParamsString.set(key, value.toString());
                                    }
                                }
                            }["createPlastshipListHooks.useQuery"]);
                            const normalizedPath = basePath.endsWith('/') ? basePath : `${basePath}/`;
                            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].get(`${normalizedPath}?${queryParamsString}`);
                            return response.data;
                        } catch (error) {
                            errorHandler(error);
                            throw error;
                        }
                    }
                }["createPlastshipListHooks.useQuery"],
                ...queryOptions,
                enabled,
                initialData
            });
        }, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
            return [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
            ];
        })
    };
}
function createPlastshipEntityHooks(entityKey, basePath, options) {
    return {
        ...createPlastshipHooks(entityKey, basePath, options),
        ...createPlastshipListHooks(entityKey, basePath, options)
    };
}
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
]);})()

//# sourceMappingURL=apps_web_src_app_hooks_09-cjkf8jwic8._.js.map