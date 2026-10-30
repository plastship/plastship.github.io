(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/global-error.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GlobalError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// #1494: über die Brücke — das SDK lädt erst nach dem ersten Rendern
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/browser.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
/**
 * #1626: Diese Seite ersetzt das Root-Layout — keine Provider, keine
 * Übersetzungen aus der App. Deshalb eine eigene, winzige Texttabelle:
 * Deutsch für `de`/`de-*`, Englisch für jede andere Sprache.
 */ const TEXTE = {
    de: {
        title: 'Ein Fehler ist aufgetreten',
        body: 'Es tut uns leid, aber ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie den Support, wenn das Problem weiterhin besteht.',
        errorId: 'Fehler-ID',
        retry: 'Erneut versuchen',
        home: 'Zur Startseite'
    },
    en: {
        title: 'An error has occurred',
        body: 'We are sorry, but an unexpected error has occurred. Please try again or contact support if the problem persists.',
        errorId: 'Error ID',
        retry: 'Try again',
        home: 'Go to home page'
    }
};
/** Markiert das eigene `<html>` (Attribut unten im JSX) — dessen `lang` ist keine Auskunft über den Nutzer. */ const EIGENES_HTML = 'data-global-error';
/**
 * Sprache ohne App-Abhängigkeit: `<html>` der App (`data-language`, `lang`),
 * dann die gespeicherte Wahl (`localStorage.language`), dann der Browser.
 * Wirft nie — im Zweifel Deutsch.
 */ function detectGlobalErrorLanguage() {
    try {
        if (typeof document === 'undefined') return 'de';
        const root = document.documentElement;
        let code = null;
        if (root && !root.hasAttribute(EIGENES_HTML)) {
            code = root.getAttribute('data-language') || root.getAttribute('lang');
        }
        if (!code) {
            try {
                code = window.localStorage.getItem('language');
            } catch  {
                code = null;
            }
        }
        if (!code && typeof navigator !== 'undefined') code = navigator.language;
        if (!code) return 'de';
        return /^de(?:-|_|$)/i.test(code.trim()) ? 'de' : 'en';
    } catch  {
        return 'de';
    }
}
/** Erste Wahl beim Rendern: beim Hydrieren der eigenen Server-Ausgabe Deutsch wie der Server. */ function initialLanguage() {
    try {
        if (typeof document === 'undefined') return 'de';
        if (document.documentElement?.hasAttribute(EIGENES_HTML)) return 'de';
    } catch  {
        return 'de';
    }
    return detectGlobalErrorLanguage();
}
function GlobalError({ error, reset }) {
    _s();
    const [sprache, setSprache] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialLanguage);
    const t = TEXTE[sprache];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalError.useEffect": ()=>{
            console.error('Global error:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"](error);
        }
    }["GlobalError.useEffect"], [
        error
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalError.useEffect": ()=>{
            setSprache(detectGlobalErrorLanguage());
        }
    }["GlobalError.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: sprache,
        "data-global-error": "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    padding: '2rem',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    backgroundColor: '#f8f8f8'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        backgroundColor: 'white',
                        padding: '3rem 2rem',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        textAlign: 'center',
                        maxWidth: '500px'
                    },
                    "data-testid": "global-error-page",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                fontSize: '4rem',
                                fontWeight: '700',
                                color: '#DC0000',
                                marginBottom: '0.5rem'
                            },
                            "data-testid": "error-code",
                            children: "500"
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/global-error.tsx",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontSize: '1.5rem',
                                fontWeight: '600',
                                color: '#1F2937',
                                margin: '0 0 1rem 0'
                            },
                            children: t.title
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/global-error.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: '#889396',
                                marginBottom: '2rem',
                                lineHeight: '1.6'
                            },
                            children: t.body
                        }, void 0, false, {
                            fileName: "[project]/apps/web/src/app/global-error.tsx",
                            lineNumber: 141,
                            columnNumber: 13
                        }, this),
                        error.digest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontSize: '0.875rem',
                                color: '#889396',
                                marginBottom: '1.5rem'
                            },
                            children: [
                                t.errorId,
                                ": ",
                                error.digest
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/global-error.tsx",
                            lineNumber: 151,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                gap: '1rem',
                                justifyContent: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>reset(),
                                    "data-testid": "retry-button",
                                    style: {
                                        backgroundColor: '#00416E',
                                        color: 'white',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '4px',
                                        border: 'none',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        fontWeight: '500'
                                    },
                                    children: t.retry
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/global-error.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>window.location.href = '/',
                                    "data-testid": "home-button",
                                    style: {
                                        backgroundColor: 'white',
                                        color: '#00416E',
                                        padding: '0.75rem 1.5rem',
                                        borderRadius: '4px',
                                        border: '1px solid #00416E',
                                        cursor: 'pointer',
                                        fontSize: '1rem',
                                        fontWeight: '500'
                                    },
                                    children: t.home
                                }, void 0, false, {
                                    fileName: "[project]/apps/web/src/app/global-error.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/web/src/app/global-error.tsx",
                            lineNumber: 161,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/web/src/app/global-error.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/apps/web/src/app/global-error.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/apps/web/src/app/global-error.tsx",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/web/src/app/global-error.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(GlobalError, "ZwT3EwPFpIFoNQgGThOHVagq+fE=");
_c = GlobalError;
var _c;
__turbopack_context__.k.register(_c, "GlobalError");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_web_src_app_global-error_tsx_05zslzjlmjxru._.js.map