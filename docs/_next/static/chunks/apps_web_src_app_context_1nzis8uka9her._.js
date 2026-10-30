(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
(()=>{"use strict";return[
"[project]/apps/web/src/app/context/AppShellProviders.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppShellProviders",
    ()=>AppShellProviders,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useSessionComplete.ts [app-client] (ecmascript)");
// #1494: über die Brücke — das SDK lädt erst nach dem ersten Rendern
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserContextContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserContextContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/ModalContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PageContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/PageContextProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelActionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/QuickWheelContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$OverlayContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/OverlayContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$TourContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/TourContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PiaChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/PiaChatContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$WorkingHoursTimerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/WorkingHoursTimerContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/NotificationContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/AppShellActiveContext.tsx [app-client] (ecmascript)");
// #1919: Seitengerüst einmal für alle App-Seiten statt je Seite (WithSidebar)
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$AppShellFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Template/WithSidebar/AppShellFrame.tsx [app-client] (ecmascript)");
;
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
 * #1478: Die App-Shell — alles, was nur angemeldete Nutzer in der App brauchen.
 * Getrennt von den Basis-Providern (app/providers.tsx), damit öffentliche
 * Seiten ohne Sitzung dieses JavaScript nicht laden:
 *
 *   - App-Routen (und öffentliche Seiten mit Session-Cookie) rendert das
 *     Root-Layout direkt mit dieser Hülle (serverseitig, wie vor #1478).
 *   - Öffentliche Seiten ohne Sitzung bekommen PublicShellProviders; das lädt
 *     diese Datei per import() nach, sobald eine Sitzung besteht oder eine
 *     App-Route angesteuert wird.
 *
 * Reihenfolge wie im bisherigen Providers-Baum; NotificationProvider lag im
 * Root-Layout innerhalb des ToastProviders und liegt jetzt innen hier.
 *
 * #1919: Innen sitzt AppShellFrame — das Seitengerüst (Kopf, Seitenleisten,
 * QuickWheel, Suche) einmal für alle App-Seiten, damit eine Navigation nur
 * den Inhalt von <main> tauscht. Welche Pfade: lib/routing/appFrame.ts.
 */ /**
 * Overlays der App erst mit Sitzung und als eigene Chunks — Entity-Formulare
 * (Finance, Markdown-Editor, …), PIA-Chat (Markdown) und der Prozessfeedback-
 * Knopf. ssr: false wie bisher faktisch (alle drei rendern erst nach dem Mount
 * bzw. bei offenem Modal).
 */ const EntityModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Molecule/EntityModal/index.ts [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.EntityModal), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Molecule/EntityModal/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = EntityModal;
const PiaChat = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Organism/PiaChat/index.ts [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.PiaChat), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Organism/PiaChat/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = PiaChat;
const ProzessfeedbackLauncher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Molecule/ProzessfeedbackLauncher/index.ts [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.ProzessfeedbackLauncher), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Molecule/ProzessfeedbackLauncher/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c2 = ProzessfeedbackLauncher;
/**
 * Error Boundary for the PIA chat widget.
 * Prevents PIA errors from crashing the entire application.
 */ class PiaErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('[PIA] Error boundary caught error:', error.message, errorInfo.componentStack);
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error, {
            tags: {
                component: 'pia-chat'
            },
            extra: {
                componentStack: errorInfo.componentStack
            }
        });
    }
    render() {
        if (this.state.hasError) {
            // PIA silently disappears rather than showing a broken UI
            return null;
        }
        return this.props.children;
    }
}
function SessionOverlays() {
    _s();
    // #1548: erst mit vollständiger Sitzung — auf /password-change und den
    // 2FA-Schritten antwortet die API 401, PIA und Feedback liefen ins Leere
    const sessionComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"])();
    if (!sessionComplete) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntityModal, {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProzessfeedbackLauncher, {}, void 0, false, {
                fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PiaErrorBoundary, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PiaChat, {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(SessionOverlays, "W6fQe8rROz1SOv+AAZAHtvBftE0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useSessionComplete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSessionComplete"]
    ];
});
_c3 = SessionOverlays;
function AppShellProviders({ children, initialUserContext = null }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$AppShellActiveContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShellActiveContext"].Provider, {
        value: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserContextContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UserContextProvider"], {
            initialUserContext: initialUserContext,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ModalProvider"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PageContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageContextProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelActionsContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickWheelActionsProvider"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$QuickWheelContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuickWheelProvider"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$OverlayContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OverlayProvider"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$TourContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TourProvider"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PiaChatContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiaChatProvider"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$WorkingHoursTimerContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WorkingHoursTimerProvider"], {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationProvider"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Template$2f$WithSidebar$2f$AppShellFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AppShellFrame"], {
                                                        children: children
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SessionOverlays, {}, void 0, false, {
                                                        fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                                                lineNumber: 133,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                                            lineNumber: 132,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                                        lineNumber: 131,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                                    lineNumber: 130,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                                lineNumber: 129,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                            lineNumber: 128,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/AppShellProviders.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c4 = AppShellProviders;
const __TURBOPACK__default__export__ = AppShellProviders;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "EntityModal");
__turbopack_context__.k.register(_c1, "PiaChat");
__turbopack_context__.k.register(_c2, "ProzessfeedbackLauncher");
__turbopack_context__.k.register(_c3, "SessionOverlays");
__turbopack_context__.k.register(_c4, "AppShellProviders");
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
"[project]/apps/web/src/app/context/OverlayContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OVERLAY_IDS",
    ()=>OVERLAY_IDS,
    "OverlayProvider",
    ()=>OverlayProvider,
    "useOverlay",
    ()=>useOverlay
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const OverlayContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function OverlayProvider({ children }) {
    _s();
    const [activeOverlayId, setActiveOverlayId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OverlayProvider.useCallback[openOverlay]": (id)=>{
            setActiveOverlayId(id);
        }
    }["OverlayProvider.useCallback[openOverlay]"], []);
    const closeOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OverlayProvider.useCallback[closeOverlay]": ()=>{
            setActiveOverlayId(null);
        }
    }["OverlayProvider.useCallback[closeOverlay]"], []);
    const isOverlayOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OverlayProvider.useCallback[isOverlayOpen]": (id)=>activeOverlayId === id
    }["OverlayProvider.useCallback[isOverlayOpen]"], [
        activeOverlayId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OverlayContext.Provider, {
        value: {
            activeOverlayId,
            openOverlay,
            closeOverlay,
            isOverlayOpen
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/OverlayContext.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(OverlayProvider, "9n2em31NFvQ1DmgKKzBIgpfZf1k=");
_c = OverlayProvider;
function useOverlay() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(OverlayContext);
    if (context === undefined) {
        throw new Error('useOverlay must be used within an OverlayProvider');
    }
    return context;
}
_s1(useOverlay, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const OVERLAY_IDS = {
    SEARCH: 'search',
    QUICK_WHEEL_Q: 'quickwheel-q',
    QUICK_WHEEL_E: 'quickwheel-e',
    QUICK_WHEEL_A: 'quickwheel-a',
    MODAL: 'modal',
    PIA_CHAT: 'pia-chat'
};
var _c;
__turbopack_context__.k.register(_c, "OverlayProvider");
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
"[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuickWheelActionsProvider",
    ()=>QuickWheelActionsProvider,
    "useQuickWheelActions",
    ()=>useQuickWheelActions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/ModalContext.tsx [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PageContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/PageContextProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$quickWheelActionRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/quickWheelActionRegistry.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$contextAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/contextAccess.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityToResourceMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/config/entityToResourceMap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/i18n/ClientTranslation.tsx [app-client] (ecmascript) <export useClientSafeTranslation as useClientTranslation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useEntityText.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/context/UserPreferencesContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/config/routes.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useProzessfeedbackCreate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useProzessfeedbackCreate.ts [app-client] (ecmascript)");
// Icons for create and admin sub-wheels
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$IconPlus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconPlus/IconPlus.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAdmin$2f$IconAdmin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAdmin/IconAdmin.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconWindowAnalytics$2f$IconWindowAnalytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconWindowAnalytics/IconWindowAnalytics.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$IconTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconTask/IconTask.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCase$2f$IconCase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconCase/IconCase.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAccount/IconAccount.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$IconContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconContact/IconContact.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOpportunity$2f$IconOpportunity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOpportunity/IconOpportunity.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProject$2f$IconProject$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProject/IconProject.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrder$2f$IconOrder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconOrder/IconOrder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleSending$2f$IconSampleSending$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconSampleSending/IconSampleSending.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFinance$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFinance/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFinance$2f$IconFinance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconFinance/IconFinance.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconGit$2f$IconGit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconGit/IconGit.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccessManagement$2f$IconAccessManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconAccessManagement/IconAccessManagement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastrack$2f$LogoPlastrack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Logos/LogoPlastrack/LogoPlastrack.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUsers$2f$IconUsers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconUsers/IconUsers.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconQrCode$2f$IconQrCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconQrCode/IconQrCode.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBug$2f$IconBug$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconBug/IconBug.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProzessfeedback$2f$IconProzessfeedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/components/Atom/Icons/IconProzessfeedback/IconProzessfeedback.tsx [app-client] (ecmascript)");
;
;
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
/** true ab dem ersten Mal, dass `wert` true war. */ function useStickyFlag(wert) {
    _s();
    const [gesetzt, setGesetzt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(wert);
    if (wert && !gesetzt) setGesetzt(true);
    return gesetzt || wert;
}
_s(useStickyFlag, "DEu1W1JXN6hwCQK80o13lA69Jpk=");
// #1478: Scanner (Kamera) und Fehlerbericht erst beim ersten Öffnen laden
const QRScannerModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/plastrack/components/QRScanner/index.ts [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.QRScannerModal), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/plastrack/components/QRScanner/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = QRScannerModal;
const BugReportModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Molecule/BugReportModal/index.ts [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.BugReportModal), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Molecule/BugReportModal/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = BugReportModal;
const QuickWheelActionsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function QuickWheelActionsProvider({ children }) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { pageIdentity } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PageContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageContext"])();
    const pathname = pageIdentity.pathname;
    const { openCreateModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"])();
    const { language } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"])();
    const { tr } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"])(language);
    const { revision: trRevision } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"])();
    const [isScannerOpen, setIsScannerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBugReportOpen, setIsBugReportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // #1478: einmal geöffnet bleiben die Modals gemountet (Schließ-Animation)
    const scannerUsed = useStickyFlag(isScannerOpen);
    const bugReportUsed = useStickyFlag(isBugReportOpen);
    const openProzessfeedback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useProzessfeedbackCreate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProzessfeedbackCreate"])();
    const handleQrScan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheelActionsProvider.useCallback[handleQrScan]": (qrCodeId)=>{
            router.push(`/plastrack?box=${encodeURIComponent(qrCodeId)}`);
        }
    }["QuickWheelActionsProvider.useCallback[handleQrScan]"], [
        router
    ]);
    // Get user role and full context for RBAC checks
    // #1887: Rolle allein aus dem Nutzerkontext — ohne ihn keine Aktionen (fail-closed)
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const isAdmin = userContext?.role === 'admin';
    // Helper to check if user can create an entity type
    const canCreate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheelActionsProvider.useCallback[canCreate]": (entityType)=>{
            // Fail closed: unmapped entity or unknown context (#1887)
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$contextAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kontextDarf"])(userContext, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityToResourceMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceForEntityType"])(entityType), 'create');
        }
    }["QuickWheelActionsProvider.useCallback[canCreate]"], [
        userContext
    ]);
    // Helper to check if user can edit an entity type
    const canEdit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheelActionsProvider.useCallback[canEdit]": (entityType)=>{
            // Fail closed: unmapped entity or unknown context (#1887)
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$contextAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["kontextDarf"])(userContext, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityToResourceMap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResourceForEntityType"])(entityType), 'edit');
        }
    }["QuickWheelActionsProvider.useCallback[canEdit]"], [
        userContext
    ]);
    // Entity create sub-actions (RBAC filtered)
    const entityCreateSubActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuickWheelActionsProvider.useMemo[entityCreateSubActions]": ()=>{
            const allCreateActions = [
                {
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Task,
                    labelKey: 'quickWheel.create.task',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconTask$2f$IconTask$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconTask"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 126,
                        columnNumber: 80
                    }, this)
                },
                {
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Case,
                    labelKey: 'quickWheel.create.case',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconCase$2f$IconCase$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconCase"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 127,
                        columnNumber: 80
                    }, this)
                },
                {
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Project,
                    labelKey: 'quickWheel.create.project',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProject$2f$IconProject$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconProject"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 131,
                        columnNumber: 15
                    }, this)
                },
                {
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Account,
                    labelKey: 'quickWheel.create.account',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccount$2f$IconAccount$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccount"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 136,
                        columnNumber: 15
                    }, this)
                },
                {
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Contact,
                    labelKey: 'quickWheel.create.contact',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconContact$2f$IconContact$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconContact"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 141,
                        columnNumber: 15
                    }, this)
                },
                {
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Order,
                    labelKey: 'quickWheel.create.order',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOrder$2f$IconOrder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconOrder"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 143,
                        columnNumber: 82
                    }, this)
                },
                {
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Opportunity,
                    labelKey: 'quickWheel.create.opportunity',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconOpportunity$2f$IconOpportunity$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconOpportunity"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 147,
                        columnNumber: 15
                    }, this)
                },
                {
                    entityType: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].SampleSending,
                    labelKey: 'quickWheel.create.sample',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconSampleSending$2f$IconSampleSending$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconSampleSending"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 152,
                        columnNumber: 15
                    }, this)
                }
            ];
            return allCreateActions.filter({
                "QuickWheelActionsProvider.useMemo[entityCreateSubActions]": (action)=>canCreate(action.entityType)
            }["QuickWheelActionsProvider.useMemo[entityCreateSubActions]"]).map({
                "QuickWheelActionsProvider.useMemo[entityCreateSubActions]": (action)=>({
                        id: `create-${action.entityType.toLowerCase()}`,
                        label: tr(action.labelKey),
                        icon: action.icon,
                        onClick: ({
                            "QuickWheelActionsProvider.useMemo[entityCreateSubActions]": ()=>openCreateModal({
                                    entityType: action.entityType
                                })
                        })["QuickWheelActionsProvider.useMemo[entityCreateSubActions]"]
                    })
            }["QuickWheelActionsProvider.useMemo[entityCreateSubActions]"]);
        // `tr` behält beim Nachladen der Übersetzungen seine Identität, `revision` nicht
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["QuickWheelActionsProvider.useMemo[entityCreateSubActions]"], [
        openCreateModal,
        tr,
        trRevision,
        canCreate
    ]);
    // Admin sub-actions (only for admins)
    const adminSubActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuickWheelActionsProvider.useMemo[adminSubActions]": ()=>[
                {
                    id: 'admin-dashboard',
                    label: tr('quickWheel.admin.admin'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAdmin$2f$IconAdmin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAdmin"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 174,
                        columnNumber: 15
                    }, this),
                    onClick: {
                        "QuickWheelActionsProvider.useMemo[adminSubActions]": ()=>router.push('/admin')
                    }["QuickWheelActionsProvider.useMemo[adminSubActions]"]
                },
                {
                    id: 'admin-finance',
                    label: tr('quickWheel.admin.finance'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconFinance$2f$IconFinance$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconFinance"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 180,
                        columnNumber: 15
                    }, this),
                    onClick: {
                        "QuickWheelActionsProvider.useMemo[adminSubActions]": ()=>router.push('/finance')
                    }["QuickWheelActionsProvider.useMemo[adminSubActions]"]
                },
                {
                    id: 'admin-git',
                    label: tr('quickWheel.admin.git'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconGit$2f$IconGit$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconGit"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 186,
                        columnNumber: 15
                    }, this),
                    onClick: {
                        "QuickWheelActionsProvider.useMemo[adminSubActions]": ()=>router.push('/git')
                    }["QuickWheelActionsProvider.useMemo[adminSubActions]"]
                },
                {
                    id: 'admin-usage',
                    label: tr('quickWheel.admin.usage', {
                        defaultValue: 'Nutzung'
                    }),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconWindowAnalytics$2f$IconWindowAnalytics$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconWindowAnalytics"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 192,
                        columnNumber: 15
                    }, this),
                    onClick: {
                        "QuickWheelActionsProvider.useMemo[adminSubActions]": ()=>router.push(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationPaths"].USAGE)
                    }["QuickWheelActionsProvider.useMemo[adminSubActions]"]
                },
                {
                    id: 'admin-access-management',
                    label: tr('quickWheel.admin.accessManagement'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAccessManagement$2f$IconAccessManagement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAccessManagement"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 198,
                        columnNumber: 15
                    }, this),
                    onClick: {
                        "QuickWheelActionsProvider.useMemo[adminSubActions]": ()=>router.push('/access-management')
                    }["QuickWheelActionsProvider.useMemo[adminSubActions]"]
                },
                {
                    id: 'admin-plastrack',
                    label: tr('quickWheel.admin.plastrack'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Logos$2f$LogoPlastrack$2f$LogoPlastrack$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LogoPlastrack"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 204,
                        columnNumber: 15
                    }, this),
                    onClick: {
                        "QuickWheelActionsProvider.useMemo[adminSubActions]": ()=>router.push('/plastrack')
                    }["QuickWheelActionsProvider.useMemo[adminSubActions]"]
                },
                {
                    id: 'admin-users',
                    label: tr('quickWheel.admin.users'),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconUsers$2f$IconUsers$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconUsers"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 210,
                        columnNumber: 15
                    }, this),
                    onClick: {
                        "QuickWheelActionsProvider.useMemo[adminSubActions]": ()=>router.push(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$config$2f$routes$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavigationPaths"].USERS)
                    }["QuickWheelActionsProvider.useMemo[adminSubActions]"]
                }
            ]
    }["QuickWheelActionsProvider.useMemo[adminSubActions]"], // `tr` behält beim Nachladen der Übersetzungen seine Identität, `revision` nicht
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
        router,
        tr,
        trRevision
    ]);
    // Entity data + callbacks (separate from identity, which lives in PageContextProvider)
    const [entityData, setEntityData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Store callbacks in refs to avoid re-render loops from function reference changes
    const onStatusChangeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const updateEntityData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheelActionsProvider.useCallback[updateEntityData]": (data, onStatusChange)=>{
            onStatusChangeRef.current = onStatusChange;
            setEntityData({
                "QuickWheelActionsProvider.useCallback[updateEntityData]": (prev)=>{
                    if (prev === data) return prev;
                    return data;
                }
            }["QuickWheelActionsProvider.useCallback[updateEntityData]"]);
        }
    }["QuickWheelActionsProvider.useCallback[updateEntityData]"], []);
    /**
   * Compute context-aware actions for Q wheel
   * Structure:
   * 1. IconPlus (Create sub-wheel) - always first if user can create any entity
   * 2. IconAdmin (Admin sub-wheel) - second if user is admin
   * 3. Context actions:
   *    - Entity-specific actions (e.g., Complete Task, View Contact)
   *    - Related record creation actions (for entities with children)
   *    - Default navigation actions (fallback)
   */ const contextActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "QuickWheelActionsProvider.useMemo[contextActions]": ()=>{
            const actions = [];
            // 1. Add IconPlus (Create) as first item if user can create any entities
            if (entityCreateSubActions.length > 0) {
                actions.push({
                    id: 'create-menu',
                    label: tr('quickWheel.actions.create') || 'Create',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconPlus$2f$IconPlus$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPlus"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 254,
                        columnNumber: 15
                    }, this),
                    onClick: {
                        "QuickWheelActionsProvider.useMemo[contextActions]": ()=>{}
                    }["QuickWheelActionsProvider.useMemo[contextActions]"],
                    subActions: entityCreateSubActions
                });
            }
            // 2. Add IconAdmin as second item if user is admin
            if (isAdmin) {
                actions.push({
                    id: 'admin-menu',
                    label: tr('quickWheel.actions.admin') || 'Admin',
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconAdmin$2f$IconAdmin$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconAdmin"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 265,
                        columnNumber: 15
                    }, this),
                    onClick: {
                        "QuickWheelActionsProvider.useMemo[contextActions]": ()=>{}
                    }["QuickWheelActionsProvider.useMemo[contextActions]"],
                    subActions: adminSubActions
                });
            }
            // 3. Add QR Scan action
            actions.push({
                id: 'qr-scan',
                label: tr('quickWheel.actions.scanQR', {
                    defaultValue: 'Scan QR'
                }),
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconQrCode$2f$IconQrCode$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconQrCode"], {}, void 0, false, {
                    fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                    lineNumber: 275,
                    columnNumber: 13
                }, this),
                onClick: {
                    "QuickWheelActionsProvider.useMemo[contextActions]": ()=>setIsScannerOpen(true)
                }["QuickWheelActionsProvider.useMemo[contextActions]"]
            });
            // 3b. Add Report Bug action (admin only)
            if (isAdmin) {
                actions.push({
                    id: 'report-bug',
                    label: tr('quickWheel.actions.reportBug', {
                        defaultValue: 'Report Bug'
                    }),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconBug$2f$IconBug$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconBug"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 284,
                        columnNumber: 15
                    }, this),
                    onClick: {
                        "QuickWheelActionsProvider.useMemo[contextActions]": ()=>setIsBugReportOpen(true)
                    }["QuickWheelActionsProvider.useMemo[contextActions]"]
                });
            }
            // 3c. #384: Prozessfeedback (CAPA) — globaler Einstieg auf jeder Seite
            // (admin/staff via RBAC); Kontext-Lookup, Beschreibungs-Vorlage und
            // Bestätigungs-Toast stecken im gemeinsamen Hook (auch Floating-Launcher).
            if (canCreate(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$entityTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityType"].Prozessfeedback)) {
                actions.push({
                    id: 'prozessfeedback',
                    label: tr('quickWheel.actions.prozessfeedback', {
                        defaultValue: 'Prozessfeedback'
                    }),
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$components$2f$Atom$2f$Icons$2f$IconProzessfeedback$2f$IconProzessfeedback$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconProzessfeedback"], {}, void 0, false, {
                        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                        lineNumber: 296,
                        columnNumber: 15
                    }, this),
                    onClick: openProzessfeedback
                });
            }
            // 4. Get context-specific actions
            let contextSpecificActions = [];
            // If no entity context or on a default action path, show navigation
            if (!pageIdentity.entityType || !pageIdentity.entityId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$quickWheelActionRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldShowDefaultActions"])(pathname || '/')) {
                contextSpecificActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$quickWheelActionRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultNavigationActions"])(router, tr);
            } else {
                // Try entity-specific actions first (e.g., Task: Complete, View Contact)
                const entitySpecificActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$quickWheelActionRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getEntitySpecificActions"])(pageIdentity.entityType, pageIdentity.entityId, entityData || null, {
                    router,
                    tr,
                    onStatusChange: onStatusChangeRef.current,
                    openCreateModal
                });
                // Filter entity-specific actions by RBAC
                const filteredEntityActions = entitySpecificActions.filter({
                    "QuickWheelActionsProvider.useMemo[contextActions].filteredEntityActions": (action)=>{
                        // Navigate actions: target page handles RBAC
                        if (action.actionType === 'navigate') return true;
                        // View actions: usually allowed, but check anyway
                        if (action.actionType === 'view') return true;
                        // Create actions: check create permission on target entity
                        if (action.actionType === 'create' && action.entityType) {
                            return canCreate(action.entityType);
                        }
                        // Status change actions (no actionType): check edit permission on current entity
                        if (!action.actionType && pageIdentity.entityType) {
                            return canEdit(pageIdentity.entityType);
                        }
                        return true;
                    }
                }["QuickWheelActionsProvider.useMemo[contextActions].filteredEntityActions"]);
                if (filteredEntityActions.length > 0) {
                    contextSpecificActions = filteredEntityActions;
                } else {
                    // Try related record creation actions (for entities with children)
                    const relatedActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$quickWheelActionRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRelatedRecordActions"])(pageIdentity.entityType, pageIdentity.entityId, openCreateModal, tr);
                    const filteredRelatedActions = relatedActions.filter({
                        "QuickWheelActionsProvider.useMemo[contextActions].filteredRelatedActions": (action)=>{
                            if (!action.entityType) return true;
                            return canCreate(action.entityType);
                        }
                    }["QuickWheelActionsProvider.useMemo[contextActions].filteredRelatedActions"]);
                    if (filteredRelatedActions.length > 0) {
                        contextSpecificActions = filteredRelatedActions;
                    } else {
                        // Fall back to default navigation
                        contextSpecificActions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$config$2f$quickWheelActionRegistry$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultNavigationActions"])(router, tr);
                    }
                }
            }
            // Add context actions (limit to 6 to leave room for Create and Admin)
            const maxContextActions = 8 - actions.length;
            actions.push(...contextSpecificActions.slice(0, maxContextActions));
            return actions;
        // `tr` behält beim Nachladen der Übersetzungen seine Identität, `revision` nicht
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["QuickWheelActionsProvider.useMemo[contextActions]"], [
        entityData,
        pathname,
        router,
        tr,
        trRevision,
        openCreateModal,
        canCreate,
        canEdit,
        entityCreateSubActions,
        adminSubActions,
        isAdmin,
        pageIdentity,
        openProzessfeedback
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickWheelActionsContext.Provider, {
        value: {
            updateEntityData,
            contextActions
        },
        children: [
            children,
            scannerUsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QRScannerModal, {
                isOpen: isScannerOpen,
                onClose: ()=>setIsScannerOpen(false),
                onScan: handleQrScan
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                lineNumber: 398,
                columnNumber: 9
            }, this),
            bugReportUsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BugReportModal, {
                isOpen: isBugReportOpen,
                onClose: ()=>setIsBugReportOpen(false)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
                lineNumber: 405,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/context/QuickWheelActionsContext.tsx",
        lineNumber: 390,
        columnNumber: 5
    }, this);
}
_s1(QuickWheelActionsProvider, "kIuFUDmw+RfpEFMNnwIZiFibLn8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$PageContextProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePageContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$ModalContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$context$2f$UserPreferencesContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserPreferences"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$i18n$2f$ClientTranslation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__useClientSafeTranslation__as__useClientTranslation$3e$__["useClientTranslation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useEntityText$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEntityText"],
        useStickyFlag,
        useStickyFlag,
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useProzessfeedbackCreate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProzessfeedbackCreate"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"]
    ];
});
_c2 = QuickWheelActionsProvider;
function useQuickWheelActions() {
    _s2();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(QuickWheelActionsContext);
    if (context === undefined) {
        throw new Error('useQuickWheelActions must be used within a QuickWheelActionsProvider');
    }
    return context;
}
_s2(useQuickWheelActions, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "QRScannerModal");
__turbopack_context__.k.register(_c1, "BugReportModal");
__turbopack_context__.k.register(_c2, "QuickWheelActionsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/QuickWheelContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuickWheelProvider",
    ()=>QuickWheelProvider,
    "useQuickWheel",
    ()=>useQuickWheel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const QuickWheelContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function QuickWheelProvider({ children }) {
    _s();
    const [activeWheelId, setActiveWheelId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const openWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheelProvider.useCallback[openWheel]": (id)=>{
            setActiveWheelId(id);
        }
    }["QuickWheelProvider.useCallback[openWheel]"], []);
    const closeWheel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheelProvider.useCallback[closeWheel]": ()=>{
            setActiveWheelId(null);
        }
    }["QuickWheelProvider.useCallback[closeWheel]"], []);
    const isWheelOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "QuickWheelProvider.useCallback[isWheelOpen]": (id)=>activeWheelId === id
    }["QuickWheelProvider.useCallback[isWheelOpen]"], [
        activeWheelId
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickWheelContext.Provider, {
        value: {
            activeWheelId,
            openWheel,
            closeWheel,
            isWheelOpen
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/context/QuickWheelContext.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(QuickWheelProvider, "IHqiMsXCr/4pjzQ0CHYprCpqu1w=");
_c = QuickWheelProvider;
function useQuickWheel() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(QuickWheelContext);
    if (context === undefined) {
        throw new Error('useQuickWheel must be used within a QuickWheelProvider');
    }
    return context;
}
_s1(useQuickWheel, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "QuickWheelProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/context/TourContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TourProvider",
    ()=>TourProvider,
    "useTour",
    ()=>useTour
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useShellBootstrap.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/hooks/useUserContext.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$contextAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/rbac/contextAccess.ts [app-client] (ecmascript)");
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
// #1478: Overlay erst laden, wenn eine Tour läuft
const TourOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/apps/web/src/app/components/Molecule/TourOverlay/index.ts [app-client] (ecmascript, next/dynamic entry, async loader)").then((m)=>m.TourOverlay), {
    loadableGenerated: {
        modules: [
            "[project]/apps/web/src/app/components/Molecule/TourOverlay/index.ts [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = TourOverlay;
const TourContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function TourProvider({ children }) {
    _s();
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [activeTourId, setActiveTourId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const [tours, setTours] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Map());
    const sessionUser = session?.user;
    const userId = sessionUser?.id;
    // #1887: Rolle aus dem Nutzerkontext (wirksame Rolle inkl. Vorschau); ohne
    // ihn keine Tour (fail-closed statt Rolle `user`).
    const { userContext } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"])();
    const userRole = userContext?.role ?? null;
    // #1479: Tour-Fortschritt kommt aus dem Shell-Bootstrap (`/me/bootstrap/`)
    // statt aus einem eigenen Aufruf von `/tour`. Fehlt er, laufen Touren
    // trotzdem — sie merken sich nur nichts.
    const bootstrapTours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"])().data?.tours;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TourProvider.useEffect": ()=>{
            if (!userId || !bootstrapTours) return;
            setProgress(new Map(bootstrapTours.map({
                "TourProvider.useEffect": (record)=>[
                        record.tourId,
                        record
                    ]
            }["TourProvider.useEffect"])));
        }
    }["TourProvider.useEffect"], [
        userId,
        bootstrapTours
    ]);
    const registerTour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[registerTour]": (tour)=>{
            setTours({
                "TourProvider.useCallback[registerTour]": (prev)=>{
                    const next = new Map(prev);
                    next.set(tour.id, tour);
                    return next;
                }
            }["TourProvider.useCallback[registerTour]"]);
        }
    }["TourProvider.useCallback[registerTour]"], []);
    const getAvailableTours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[getAvailableTours]": ()=>{
            return Array.from(tours.values()).filter({
                "TourProvider.useCallback[getAvailableTours]": (tour)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$contextAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rolleErlaubt"])(userRole, tour.roles)
            }["TourProvider.useCallback[getAvailableTours]"]).sort({
                "TourProvider.useCallback[getAvailableTours]": (a, b)=>a.priority - b.priority
            }["TourProvider.useCallback[getAvailableTours]"]);
        }
    }["TourProvider.useCallback[getAvailableTours]"], [
        tours,
        userRole
    ]);
    const activeTour = activeTourId ? tours.get(activeTourId) || null : null;
    const saveProgress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[saveProgress]": async (tourId, data)=>{
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].post('/tour', {
                    tourId,
                    ...data
                });
                const record = res.data;
                setProgress({
                    "TourProvider.useCallback[saveProgress]": (prev)=>{
                        const next = new Map(prev);
                        next.set(tourId, record);
                        return next;
                    }
                }["TourProvider.useCallback[saveProgress]"]);
            } catch  {
            // Silent fail
            }
        }
    }["TourProvider.useCallback[saveProgress]"], []);
    const startTour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[startTour]": (tourId)=>{
            const tour = tours.get(tourId);
            if (!tour || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$rbac$2f$contextAccess$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rolleErlaubt"])(userRole, tour.roles)) return;
            const existing = progress.get(tourId);
            const startStep = existing && !existing.completed && !existing.skipped ? existing.step : 0;
            setActiveTourId(tourId);
            setCurrentStep(startStep);
        }
    }["TourProvider.useCallback[startTour]"], [
        tours,
        userRole,
        progress
    ]);
    const nextStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[nextStep]": ()=>{
            if (!activeTour) return;
            const next = currentStep + 1;
            if (next >= activeTour.steps.length) {
                // Tour complete
                setActiveTourId(null);
                setCurrentStep(0);
                saveProgress(activeTour.id, {
                    completed: true,
                    step: activeTour.steps.length - 1
                });
            } else {
                setCurrentStep(next);
                saveProgress(activeTour.id, {
                    step: next
                });
            }
        }
    }["TourProvider.useCallback[nextStep]"], [
        activeTour,
        currentStep,
        saveProgress
    ]);
    const prevStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[prevStep]": ()=>{
            if (currentStep > 0) {
                const prev = currentStep - 1;
                setCurrentStep(prev);
                if (activeTour) {
                    saveProgress(activeTour.id, {
                        step: prev
                    });
                }
            }
        }
    }["TourProvider.useCallback[prevStep]"], [
        currentStep,
        activeTour,
        saveProgress
    ]);
    const goToStep = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[goToStep]": (index)=>{
            if (!activeTour) return;
            const clamped = Math.max(0, Math.min(index, activeTour.steps.length - 1));
            setCurrentStep(clamped);
            saveProgress(activeTour.id, {
                step: clamped
            });
        }
    }["TourProvider.useCallback[goToStep]"], [
        activeTour,
        saveProgress
    ]);
    const skipTour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[skipTour]": ()=>{
            if (!activeTour) return;
            setActiveTourId(null);
            setCurrentStep(0);
            saveProgress(activeTour.id, {
                skipped: true,
                step: currentStep
            });
        }
    }["TourProvider.useCallback[skipTour]"], [
        activeTour,
        currentStep,
        saveProgress
    ]);
    const closeTour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[closeTour]": ()=>{
            if (!activeTour) return;
            const isLastStep = currentStep === activeTour.steps.length - 1;
            setActiveTourId(null);
            setCurrentStep(0);
            if (isLastStep) {
                saveProgress(activeTour.id, {
                    completed: true,
                    step: currentStep
                });
            } else {
                saveProgress(activeTour.id, {
                    step: currentStep
                });
            }
        }
    }["TourProvider.useCallback[closeTour]"], [
        activeTour,
        currentStep,
        saveProgress
    ]);
    const isTourCompleted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[isTourCompleted]": (tourId)=>{
            return progress.get(tourId)?.completed === true;
        }
    }["TourProvider.useCallback[isTourCompleted]"], [
        progress
    ]);
    const isTourSkipped = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[isTourSkipped]": (tourId)=>{
            return progress.get(tourId)?.skipped === true;
        }
    }["TourProvider.useCallback[isTourSkipped]"], [
        progress
    ]);
    const resetTour = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TourProvider.useCallback[resetTour]": async (tourId)=>{
            // Optimistically clear local progress so the tour becomes available again
            // immediately; the server delete is best-effort. (The previous fetch
            // implementation also cleared local state regardless of the response status,
            // since fetch does not reject on non-2xx.)
            setProgress({
                "TourProvider.useCallback[resetTour]": (prev)=>{
                    const next = new Map(prev);
                    next.delete(tourId);
                    return next;
                }
            }["TourProvider.useCallback[resetTour]"]);
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"].delete(`/tour/${tourId}`);
            } catch  {
            // Silent fail — local reset already applied.
            }
        }
    }["TourProvider.useCallback[resetTour]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TourContext.Provider, {
        value: {
            activeTour: activeTourId,
            currentStep,
            isOpen: activeTourId !== null,
            startTour,
            nextStep,
            prevStep,
            goToStep,
            skipTour,
            closeTour,
            isTourCompleted,
            isTourSkipped,
            resetTour,
            registerTour,
            getAvailableTours
        },
        children: [
            children,
            activeTour && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TourOverlay, {
                tour: activeTour,
                currentStep: currentStep,
                isOpen: true,
                onNext: nextStep,
                onPrev: prevStep,
                onSkip: skipTour,
                onClose: closeTour,
                onDotClick: goToStep
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/context/TourContext.tsx",
                lineNumber: 226,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/web/src/app/context/TourContext.tsx",
        lineNumber: 206,
        columnNumber: 5
    }, this);
}
_s(TourProvider, "v0f0M9pVjR4HCsDufbNX8djfpkM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useUserContext$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserContext"],
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$hooks$2f$useShellBootstrap$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShellBootstrap"]
    ];
});
_c1 = TourProvider;
function useTour() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TourContext);
    if (context === undefined) {
        throw new Error('useTour must be used within a TourProvider');
    }
    return context;
}
_s1(useTour, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c, _c1;
__turbopack_context__.k.register(_c, "TourOverlay");
__turbopack_context__.k.register(_c1, "TourProvider");
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
]})(),
"[project]/apps/web/src/app/context/AppShellProviders.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/apps/web/src/app/context/AppShellProviders.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=apps_web_src_app_context_1nzis8uka9her._.js.map