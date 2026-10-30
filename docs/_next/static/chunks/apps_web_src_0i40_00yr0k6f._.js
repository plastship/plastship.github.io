(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "api",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["api"],
    "apiDownloadBlob",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["apiDownloadBlob"],
    "fingerprintPath",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fingerprintPath"],
    "getApiErrorMessage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApiErrorMessage"],
    "requestIdOf",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["requestIdOf"],
    "triggerBlobDownload",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$blobDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerBlobDownload"],
    "wasCapturedByApiClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiCapture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wasCapturedByApiClient"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$axios$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/axios.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$apiCapture$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/apiCapture.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$blobDownload$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/blobDownload.ts [app-client] (ecmascript)");
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
]);})()

//# sourceMappingURL=apps_web_src_0i40_00yr0k6f._.js.map