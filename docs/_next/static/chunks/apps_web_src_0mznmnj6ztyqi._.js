(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildEqualityCondition",
    ()=>buildEqualityCondition,
    "buildIdCondition",
    ()=>buildIdCondition,
    "buildIncludesCondition",
    ()=>buildIncludesCondition,
    "buildLikeCondition",
    ()=>buildLikeCondition,
    "buildMultiFieldSearch",
    ()=>buildMultiFieldSearch,
    "computeSalesforceIdChecksum",
    ()=>computeSalesforceIdChecksum,
    "isSalesforceId18",
    ()=>isSalesforceId18,
    "isValidSalesforceId",
    ()=>isValidSalesforceId,
    "normalizeSalesforceUserId",
    ()=>normalizeSalesforceUserId,
    "sameSalesforceId",
    ()=>sameSalesforceId,
    "sanitizeForSOQL",
    ()=>sanitizeForSOQL,
    "sanitizeForSOQLLike",
    ()=>sanitizeForSOQLLike,
    "toSalesforceId18",
    ()=>toSalesforceId18,
    "validateEnumValue",
    ()=>validateEnumValue,
    "validateEnumValueCaseInsensitive",
    ()=>validateEnumValueCaseInsensitive,
    "validateSalesforceId",
    ()=>validateSalesforceId
]);
/**
 * SOQL Sanitization Utilities
 *
 * Provides functions to prevent SOQL injection attacks by sanitizing
 * user input before use in Salesforce queries.
 *
 * @see https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_comparisonoperators.htm
 */ /**
 * Special characters that have meaning in SOQL and need escaping
 * - Single quote (') - String delimiter
 * - Backslash (\) - Escape character
 * - Percent (%) - LIKE wildcard (matches zero or more characters)
 * - Underscore (_) - LIKE wildcard (matches exactly one character)
 */ const SOQL_SPECIAL_CHARS = /['\\\n\r]/g;
const SOQL_LIKE_WILDCARDS = /[%_]/g;
/**
 * Salesforce ID pattern: 15 or 18 alphanumeric characters
 * 15-char: case-sensitive ID
 * 18-char: case-insensitive ID with checksum suffix
 */ const SALESFORCE_ID_PATTERN = /^[a-zA-Z0-9]{15}([a-zA-Z0-9]{3})?$/;
function sanitizeForSOQL(input) {
    if (!input || typeof input !== 'string') {
        return '';
    }
    // Limit input length to prevent DoS
    const trimmed = input.slice(0, 1000);
    // Escape special characters
    return trimmed.replace(SOQL_SPECIAL_CHARS, (char)=>{
        switch(char){
            case "'":
                return "\\'";
            case '\\':
                return '\\\\';
            case '\n':
                return '\\n';
            case '\r':
                return '\\r';
            default:
                return char;
        }
    });
}
function sanitizeForSOQLLike(input, preserveWildcards = false) {
    if (!input || typeof input !== 'string') {
        return '';
    }
    // First apply standard SOQL sanitization
    let sanitized = sanitizeForSOQL(input);
    // Escape LIKE wildcards unless preserving them
    if (!preserveWildcards) {
        sanitized = sanitized.replace(SOQL_LIKE_WILDCARDS, (char)=>`\\${char}`);
    }
    return sanitized;
}
/**
 * Salesforce's 18-char checksum suffix encodes which of the first 15 chars are
 * uppercase. Bytes 16-18 are 5-bit values (0-31) mapped to `ABCDEFGHIJKLMNOPQRSTUVWXYZ012345`,
 * each derived from a 5-char window of the prefix. We use this to reject mock
 * IDs whose shape happens to match but whose checksum doesn't — those would
 * otherwise round-trip into Salesforce and get rejected as MALFORMED_ID.
 */ const SF_CHECKSUM_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ012345';
function computeSalesforceIdChecksum(id15) {
    let suffix = '';
    for(let chunk = 0; chunk < 3; chunk++){
        let bits = 0;
        for(let i = 0; i < 5; i++){
            const c = id15.charCodeAt(chunk * 5 + i);
            // A-Z = 65-90
            if (c >= 65 && c <= 90) bits |= 1 << i;
        }
        suffix += SF_CHECKSUM_ALPHABET[bits];
    }
    return suffix;
}
function isValidSalesforceId(id) {
    if (!id || typeof id !== 'string') {
        return false;
    }
    if (!SALESFORCE_ID_PATTERN.test(id)) {
        return false;
    }
    if (id.length === 18) {
        return computeSalesforceIdChecksum(id.slice(0, 15)) === id.slice(15);
    }
    return true;
}
function isSalesforceId18(value) {
    return typeof value === 'string' && value.length === 18 && isValidSalesforceId(value);
}
function validateSalesforceId(id) {
    return isValidSalesforceId(id) ? id : null;
}
function toSalesforceId18(id) {
    if (!isValidSalesforceId(id)) return undefined;
    return id.length === 18 ? id : id + computeSalesforceIdChecksum(id);
}
function sameSalesforceId(a, b) {
    const left = toSalesforceId18(a);
    return left !== undefined && left === toSalesforceId18(b);
}
/** Präfix des Salesforce-Objekts User */ const SF_USER_PREFIX = '005';
function normalizeSalesforceUserId(value) {
    if (typeof value !== 'string') {
        return undefined;
    }
    const trimmed = value.trim();
    if (trimmed === '') {
        return undefined;
    }
    // Identitäts-URL: die User-Id ist das letzte Pfadsegment
    const candidate = /^https?:\/\//i.test(trimmed) ? trimmed.split('?')[0]?.split('/').filter(Boolean).pop() ?? '' : trimmed;
    if (!candidate.startsWith(SF_USER_PREFIX)) {
        return undefined;
    }
    return isValidSalesforceId(candidate) ? candidate : undefined;
}
function validateEnumValue(value, allowedValues) {
    if (!value || typeof value !== 'string') {
        return null;
    }
    return allowedValues.includes(value) ? value : null;
}
function validateEnumValueCaseInsensitive(value, allowedValues) {
    if (!value || typeof value !== 'string') {
        return null;
    }
    const lowerValue = value.toLowerCase();
    return allowedValues.find((v)=>v.toLowerCase() === lowerValue) ?? null;
}
function buildLikeCondition(field, value, matchType = 'contains') {
    if (!value || typeof value !== 'string' || value.trim() === '') {
        return null;
    }
    const sanitized = sanitizeForSOQLLike(value.trim());
    switch(matchType){
        case 'contains':
            return `${field} LIKE '%${sanitized}%'`;
        case 'startsWith':
            return `${field} LIKE '${sanitized}%'`;
        case 'endsWith':
            return `${field} LIKE '%${sanitized}'`;
        case 'exact':
            return `${field} = '${sanitizeForSOQL(value.trim())}'`;
        default:
            return `${field} LIKE '%${sanitized}%'`;
    }
}
function buildMultiFieldSearch(fields, value, matchType = 'contains') {
    if (!value || typeof value !== 'string' || value.trim() === '' || fields.length === 0) {
        return null;
    }
    const conditions = fields.map((field)=>buildLikeCondition(field, value, matchType)).filter((c)=>c !== null);
    if (conditions.length === 0) {
        return null;
    }
    return conditions.length === 1 ? conditions[0] : `(${conditions.join(' OR ')})`;
}
function buildEqualityCondition(field, value) {
    if (!value || typeof value !== 'string' || value.trim() === '') {
        return null;
    }
    const sanitized = sanitizeForSOQL(value.trim());
    return `${field} = '${sanitized}'`;
}
function buildIncludesCondition(field, value) {
    if (!value || typeof value !== 'string' || value.trim() === '') {
        return null;
    }
    const sanitized = sanitizeForSOQL(value.trim());
    return `${field} INCLUDES ('${sanitized}')`;
}
function buildIdCondition(field, id) {
    if (!isValidSalesforceId(id)) {
        return null;
    }
    return `${field} = '${id}'`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/consent/consent.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1133/#1142: Einwilligungs-Kern — ohne React, ohne DOM, damit Middleware
 * (Edge), API-Routen und der Sentry-Browser-Init dasselbe lesen wie der
 * Banner (Molecule/CookieBanner).
 *
 * `necessary` = nur technisch notwendige Cookies (Session, CSRF, Sprache),
 * `all` = zusätzlich Nutzungsanalyse: anonymes Zählen öffentlicher Seiten
 * und Sentry-Performance-Traces. Fehlerberichte bleiben unabhängig davon
 * (berechtigtes Interesse, ohne Nutzeridentität vor dem Login).
 */ __turbopack_context__.s([
    "CONSENT_COOKIE",
    ()=>CONSENT_COOKIE,
    "CONSENT_MARKER_ATTRIBUTE",
    ()=>CONSENT_MARKER_ATTRIBUTE,
    "CONSENT_MAX_AGE_SEKUNDEN",
    ()=>CONSENT_MAX_AGE_SEKUNDEN,
    "CONSENT_OPEN_EVENT",
    ()=>CONSENT_OPEN_EVENT,
    "consentAusCookieHeader",
    ()=>consentAusCookieHeader,
    "consentMarkerScript",
    ()=>consentMarkerScript,
    "hatEinwilligung",
    ()=>hatEinwilligung,
    "parseConsent",
    ()=>parseConsent,
    "traceSampleRateMitConsent",
    ()=>traceSampleRateMitConsent
]);
const CONSENT_COOKIE = 'plastship_consent';
const CONSENT_MAX_AGE_SEKUNDEN = 60 * 60 * 24 * 365;
const CONSENT_OPEN_EVENT = 'plastship:consent-open';
function parseConsent(wert) {
    return wert === 'all' || wert === 'necessary' ? wert : null;
}
function consentAusCookieHeader(header) {
    if (!header) return null;
    for (const teil of header.split(';')){
        const [name, ...rest] = teil.trim().split('=');
        if (name === CONSENT_COOKIE) {
            try {
                return parseConsent(decodeURIComponent(rest.join('=')));
            } catch  {
                return null;
            }
        }
    }
    return null;
}
function hatEinwilligung(zweck, consent) {
    if (zweck === 'analytics') return consent === 'all';
    return false;
}
function traceSampleRateMitConsent(rate, consent) {
    if (!Number.isFinite(rate) || rate <= 0) return 0;
    return hatEinwilligung('analytics', consent) ? Math.min(1, rate) : 0;
}
const CONSENT_MARKER_ATTRIBUTE = 'data-consent';
function consentMarkerScript() {
    const pattern = `(?:^|;)\\s*${CONSENT_COOKIE}=(?:all|necessary)(?:;|$)`;
    return `try{if(new RegExp(${JSON.stringify(pattern)}).test(document.cookie))document.documentElement.setAttribute(${JSON.stringify(CONSENT_MARKER_ATTRIBUTE)},'')}catch(e){}`;
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
"[project]/apps/web/src/lib/sentry/browserInit.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "initBrowserSentry",
    ()=>initBrowserSentry
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Browser-Init von Sentry — #630/#631, seit #1494 NACHGELADEN.
 *
 * Dieses Modul importiert das SDK statisch und darf deshalb nur über
 * `import()` erreicht werden (lib/sentry/browser.ts, `loadSentry`). So landet
 * das SDK (~100 KB gzip) in einem eigenen Chunk, der erst nach dem ersten
 * Rendern lädt, statt im kritischen Pfad jeder Seite. Der Wächter
 * tests/guards/sentry-client-bridge.test.ts hält das fest.
 *
 * Die Optionen sind unverändert aus instrumentation-client.ts übernommen
 * (Geschichte dort und in den Issues):
 *
 * UMGEBUNGS-TAG (#633/#1404): ein einziges Image bedient dev/stage/live, zur
 * Buildzeit ist die Umgebung also prinzipiell unbekannt (und
 * SENTRY_ENVIRONMENT ist kein NEXT_PUBLIC_*, landet daher nie im Bundle). Das
 * Root-Layout trägt ENVIRONMENT_NAME zur Laufzeit als
 * <meta name="ps-environment"> in die Seite; hier wird es ausgelesen.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$react$2f$build$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/react/build/esm/error.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/nextjs/build/esm/client/routing/appRouterRoutingInstrumentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/nextjs/build/esm/client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$console$2d$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/logs/console-integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/consent/consent.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentryScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentryScrub.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentryEnvironment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentryEnvironment.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$sdkFunctions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentry/sdkFunctions.ts [app-client] (ecmascript)");
;
;
;
;
;
function metaInhalt(name) {
    if (typeof document === 'undefined') return undefined;
    const inhalt = document.querySelector(`meta[name="${name}"]`)?.getAttribute('content');
    return inhalt || undefined;
}
function umgebungAusMeta() {
    return metaInhalt('ps-environment');
}
// #1008: SENTRY_TRACES_SAMPLE_RATE ist kein NEXT_PUBLIC_* — im Bundle war
// die Rate immer 0, egal was die Umgebung sagte. Wie die Umgebung kommt der
// Wert zur Laufzeit ueber ein Meta-Tag aus dem Root-Layout.
function tracesSampleRateAusMeta() {
    const wert = parseFloat(metaInhalt('ps-traces-sample-rate') ?? '');
    return Number.isFinite(wert) && wert >= 0 && wert <= 1 ? wert : 0;
}
function initBrowserSentry() {
    const funktionen = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentry$2f$sdkFunctions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sentryFunktionen"],
        captureReactException: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$react$2f$build$2f$esm$2f$error$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureReactException"],
        captureRouterTransitionStart: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureRouterTransitionStart"]
    };
    // Schon initialisiert (z. B. zweite Modulinstanz derselben Seite): kein zweites init
    if (__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"]?.()) return funktionen;
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"]({
        dsn: ("TURBOPACK compile-time value", "https://6c8511f8f80732bf9baf5e1a8da299af@o4511139981426688.ingest.de.sentry.io/4511140106207312"),
        // #1404: ohne Meta-Tag "local" (wie Server und Layout), nicht NODE_ENV.
        environment: umgebungAusMeta() || 'local',
        // #1404: "local" sendet nur mit SENTRY_SEND_LOCAL=1 (Meta-Tag ps-sentry-send-local).
        enabled: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentryEnvironment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sentrySendet"])(("TURBOPACK compile-time value", "https://6c8511f8f80732bf9baf5e1a8da299af@o4511139981426688.ingest.de.sentry.io/4511140106207312"), umgebungAusMeta() || 'local', metaInhalt('ps-sentry-send-local')),
        // #1142: Performance-Traces nur mit Einwilligung (Cookie plastship_consent=all,
        // Molecule/CookieBanner). Wird je Transaktion ausgewertet, greift also auch
        // nach einem Klick im Banner ohne Reload. Fehler laufen hier NICHT durch —
        // die bleiben (berechtigtes Interesse, keine Nutzeridentität vor dem Login).
        tracesSampler: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traceSampleRateMitConsent"])(tracesSampleRateAusMeta(), typeof document === 'undefined' ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$consent$2f$consent$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consentAusCookieHeader"])(document.cookie)),
        // #1007: Kein Fallback 'plastship@dev' mehr — der ueberschrieb das vom
        // Build injizierte Release, deshalb meldete jeder Browser plastship@dev.
        // SENTRY_RELEASE ist nicht NEXT_PUBLIC_, im Bundle also undefined; das SDK
        // greift dann auf das injizierte _sentryRelease zurueck — aber nur, wenn
        // der Schluessel hier gar nicht gesetzt ist (Spread-Vorrang).
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SENTRY_RELEASE ? {
            release: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SENTRY_RELEASE
        } : {},
        // #1014: Kein Session Replay. Die frueheren replays*SampleRate-Optionen
        // waren ohne replayIntegration() wirkungslos (Projekt: hasReplays=false),
        // taeuschten aber eine Aufzeichnung bei jedem Fehler vor. Entscheidung:
        // bewusst aus — Formularwerte und Kundendaten auf dem Bildschirm, Kontingent.
        // Falls spaeter gewuenscht: replayIntegration({ maskAllText: true,
        // blockAllMedia: true }) plus Sample-Raten, nichts anderes.
        integrations: [
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$console$2d$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleLoggingIntegration"]({
                levels: [
                    'warn',
                    'error'
                ]
            })
        ],
        enableLogs: true,
        // #1233 (M-11): Salesforce-Record-Ids/UUIDs duerfen Sentry nicht erreichen
        // — weder in Event-Text/extra noch in Log-Nachrichten, Breadcrumbs oder Spans.
        beforeSend: (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentryScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubEvent"])(event),
        beforeSendLog: (log)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentryScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubLog"])(log),
        beforeSendTransaction: (event)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentryScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["scrubTransaction"])(event),
        // #1014: Konsolen-Breadcrumbs unterhalb von warning verwerfen — console.log
        // in Komponenten traegt gern ganze Datensaetze, die sonst als Kontext an
        // jedem spaeteren Fehler haengen. warn/error bleiben (die gehen ohnehin
        // als Logs raus), fetch/xhr/ui bleiben (URLs und Klicks, keine Rumpfdaten).
        beforeBreadcrumb (breadcrumb) {
            if (breadcrumb.category === 'console' && breadcrumb.level !== 'warning' && breadcrumb.level !== 'error') {
                return null;
            }
            return breadcrumb;
        },
        initialScope: {
            tags: {
                runtime: 'browser'
            }
        }
    });
    return funktionen;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/sentry/sdkFunctions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sentryFunktionen",
    ()=>sentryFunktionen
]);
/**
 * Die Sentry-Funktionen, die die Brücke (browser.ts) weiterreicht — als
 * benannte Auswahl (#1494). Wichtig für die Chunk-Größe: die Brücke bekommt
 * nie den ganzen `@sentry/nextjs`-Namensraum als Wert (der hebelt das
 * Tree-Shaking aus: der nachgeladene Chunk wog dann ~200 statt ~100 KB gzip),
 * sondern nur dieses Objekt. Läuft auf Server und Client; nur per import().
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/exports.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/breadcrumbs.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__logger$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/logs/public-api.js [app-client] (ecmascript) <export * as logger>");
;
const sentryFunktionen = {
    captureException: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureException"],
    captureMessage: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureMessage"],
    addBreadcrumb: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$breadcrumbs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addBreadcrumb"],
    setUser: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setUser"],
    setTag: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$exports$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTag"],
    logger: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__logger$3e$__["logger"]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/sentryEnvironment.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * #1006: Eine Quelle fuer den Namen der Sentry-Umgebung.
 *
 * Der Server (instrumentation.ts) und der PDF-Dienst melden
 * SENTRY_ENVIRONMENT — dev / stage / live (#1515; bis dahin development /
 * staging / production). Der Browser kann
 * die Variable nicht lesen (kein NEXT_PUBLIC_*), er bekommt den Wert ueber
 * <meta name="ps-environment"> aus dem Root-Layout. Bisher nahm der Meta-Tag
 * zuerst ENVIRONMENT_NAME (dev / stage / live): Server und Browser derselben
 * Maschine meldeten damit zwei verschiedene Umgebungen, und jede Filterung
 * im Sentry-Dashboard sah nur die Haelfte der Ereignisse.
 *
 * Reihenfolge: SENTRY_ENVIRONMENT, dann ENVIRONMENT_NAME, sonst "local".
 * #1515: Seit dem Angleichen sind Sentry-Etikett und Kurzname dieselben
 * Werte (dev / stage / live) — wie bei Host-Monitoren und Backups.
 */ /**
 * #1404: Soll das SDK ueberhaupt senden? Ohne DSN nie. Die Umgebung "local"
 * (Entwicklerrechner, docker-compose.local.yml) nur mit SENTRY_SEND_LOCAL=1 —
 * vorher gingen 2.660 Ereignisse in 14 Tagen ins gemeinsame Projekt, darunter
 * Office-365-535-Fehler und Pfade der Entwicklerrechner, und zaehlten in die
 * Alarmregel "Taeglich: Warnungen …".
 */ __turbopack_context__.s([
    "istLive",
    ()=>istLive,
    "sentrySendet",
    ()=>sentrySendet,
    "sentryUmgebung",
    ()=>sentryUmgebung
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function sentrySendet(dsn, umgebung, sendLocal) {
    if (!dsn) return false;
    if (umgebung === 'local') return sendLocal === '1';
    return true;
}
function sentryUmgebung() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SENTRY_ENVIRONMENT || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ENVIRONMENT_NAME || 'local';
}
function istLive() {
    const sentry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SENTRY_ENVIRONMENT;
    return sentry === 'live' || sentry === 'production' || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.ENVIRONMENT_NAME === 'live';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/sentryScrub.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMAIL_MASK",
    ()=>EMAIL_MASK,
    "FILTERED",
    ()=>FILTERED,
    "geheimeKopfzeilenEntfernen",
    ()=>geheimeKopfzeilenEntfernen,
    "isSalesforceUrl",
    ()=>isSalesforceUrl,
    "maskEmails",
    ()=>maskEmails,
    "maskRecordIds",
    ()=>maskRecordIds,
    "maskSensitiveQueryParams",
    ()=>maskSensitiveQueryParams,
    "scrubBreadcrumb",
    ()=>scrubBreadcrumb,
    "scrubEvent",
    ()=>scrubEvent,
    "scrubLog",
    ()=>scrubLog,
    "scrubTransaction",
    ()=>scrubTransaction,
    "stripSalesforceQuery",
    ()=>stripSalesforceQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * #1233 (M-11): Salesforce-Record-Ids und Postgres-Ids (UUID, cuid) duerfen
 * Sentry nicht erreichen. Beide Sentry-Inits (`instrumentation.ts`
 * nodejs+edge, `instrumentation-client.ts`) haengen diese Scrubber vor jeden
 * Versand (`beforeSend`, `beforeSendTransaction`, `beforeSendLog`).
 *
 * Maskiert wird nach WERT, nicht nur nach Schluesselname: Ids stecken in
 * Log-Attributen (`sentry.message.template`/`.parameter.N` aus
 * consoleLoggingIntegration), in `extra.message` (logger.error), in
 * Breadcrumb-URLs, `request.url`, Tags, Kontexten und Span-Beschreibungen.
 * Die Maske behaelt das Key-Praefix (`[sf-id:500]`): man sieht noch den
 * Objekttyp, aber nicht mehr den Datensatz.
 *
 * Stufe 1 aus dem Plan (keine ID als Text fuer Menschen) — die App-URLs und
 * API-JSON behalten ihre Ids (E-1 im Brief); nur was Sentry erreicht, wird
 * maskiert.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/logScrub.ts [app-client] (ecmascript)");
;
;
/** Schluessel, deren Wert eine Record-Id ist — werden zusaetzlich entfernt. */ const ID_KEYS = new Set([
    'recordId',
    'parentId',
    'entityId',
    'targetRecordId',
    'userId'
]);
/**
 * Schluessel, deren Wert NIE maskiert wird: `requestId` braucht die
 * Korrelation Log ↔ Antwort-Header; `user.id` ist die bewusst per
 * `Sentry.setUser` gesetzte Nutzerzuordnung (wie `event.user`);
 * `auction_id` (#1916) ist der Tag einer Auktion — kein Personenbezug, nur
 * eine gültige Datenbank-Id (geprüft in `lib/auctions/observability.ts`).
 */ const KEEP_KEYS = new Set([
    'requestId',
    'user.id',
    'auction_id'
]);
// Grenzen statt `\b`: `\b` sieht `_` als Wortzeichen (`Abrechnung_<id>`) und
// trennt nicht hinter einem Prozent-Escape (`%2F<id>` in `callbackUrl=`,
// kodiertem Router-State). Links (Gruppe 1, bleibt stehen): Anfang, ein
// Nicht-Alphanumerisches oder ein `%XX`; rechts: kein Alphanumerisches.
// Bewusst ohne Lookbehind — der Scrubber laeuft auch im Browser, aeltere
// Safari-Versionen koennen keinen.
const LEFT = '(^|[^A-Za-z0-9]|%[0-9A-Fa-f]{2})';
const RIGHT = '(?![A-Za-z0-9])';
const UUID = new RegExp(`${LEFT}([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})${RIGHT}`, 'gi');
// Postgres-Ids sind cuid() (`schema.prisma`): 'c' + 24 Kleinbuchstaben/Ziffern.
const CUID = new RegExp(`${LEFT}(c[a-z0-9]{24})${RIGHT}`, 'g');
// Salesforce-Ids sind 15- oder 18-stellig alphanumerisch — derselbe Token
// matcht auch andere 15/18-stellige Camel-Case-Bezeichner, daher zusaetzlich
// isValidSalesforceId() (Checksummenpruefe bei 18 Stellen) und ein
// Ziffern-Erfordernis, damit reine Wortfolgen (z. B. Funktionsnamen) stehen
// bleiben.
const TOKEN = new RegExp(`${LEFT}([a-zA-Z0-9]{15}(?:[a-zA-Z0-9]{3})?)${RIGHT}`, 'g');
const MAX_DEPTH = 10;
/** Tiefer verschachtelte Werte gehen nicht ungeprueft raus. */ const TRUNCATED = '[truncated]';
function maskRecordIds(text) {
    return text.replace(UUID, (_match, left)=>`${left}[uuid]`).replace(CUID, (match, left, token)=>/\d/.test(token) ? `${left}[pg-id]` : match).replace(TOKEN, (match, left, token)=>/\d/.test(token) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"])(token) ? `${left}[sf-id:${token.slice(0, 3)}]` : match);
}
/**
 * #1370: Geheimnisse in Query-Parametern. Reset-Links (`?token=`), der
 * OAuth-Rückruf von Microsoft (`?code=…&state=…`) und API-Schlüssel landeten
 * mit der vollen URL in `request.url`, Breadcrumbs (navigation/fetch/xhr
 * `data.url`/`from`/`to`), Transaktionsnamen und im Referer. Maskiert wird
 * der WERT jedes Parameters, dessen Name `code`/`state` ist (auch mit
 * Unterstrich-Präfix wie `session_state`, nicht aber `postcode`) oder auf
 * token/secret/password/key endet (`access_token`, `client_secret`,
 * `apiKey` …) — auch prozent-kodiert in einer eingebetteten URL
 * (`callbackUrl=%2Freset%3Ftoken%3D…`).
 */ const SENSITIVE_PARAM_NAME = '(?:[A-Za-z0-9_.-]*(?:token|secret|password|passwd|key)|(?:[A-Za-z0-9.-]*_)?(?:code|state))';
const SENSITIVE_PARAM = new RegExp(`((?:[?&;#]|%3F|%26|%23)${SENSITIVE_PARAM_NAME}(?:=|%3D))((?:(?!%26|%23)[^&#;\\s"'<>])*)`, 'gi');
const SENSITIVE_PARAM_NAME_ONLY = new RegExp(`^${SENSITIVE_PARAM_NAME}$`, 'i');
const FILTERED = '[Filtered]';
function maskSensitiveQueryParams(text) {
    return text.replace(SENSITIVE_PARAM, (match, prefix, value)=>value.length === 0 ? match : `${prefix}${FILTERED}`);
}
const EMAIL_MASK = '[email]';
// Längen begrenzt (lokaler Teil 64, Label 63, höchstens 9 Labels, TLD 24 — RFC 5321/1035):
// ohne Grenzen backtrackt die Suche quadratisch (20 000 Zeichen ohne Treffer ≈ 4 s), mit
// Grenzen ist sie linear.
const EMAIL = /[A-Za-z0-9._%+-]{1,64}(?:@|%40)[A-Za-z0-9-]{1,63}(?:\.[A-Za-z0-9-]{1,63}){0,8}\.[A-Za-z]{2,24}/g;
function maskEmails(text) {
    return text.replace(EMAIL, EMAIL_MASK);
}
/** Record-Ids, E-Mail-Adressen und sensible Query-Parameter — das, was jeder String vor dem Versand durchläuft. */ function maskText(text) {
    return maskSensitiveQueryParams(maskEmails(maskRecordIds(text)));
}
/**
 * `request.query_string` kommt als String (`a=1&token=x`), als Objekt oder als
 * Liste von Paaren. Beim String fehlt das führende `?`, deshalb wird es für
 * die Suche vorangestellt.
 */ function maskQueryString(value) {
    if (typeof value === 'string') return maskText(`?${value}`).slice(1);
    if (Array.isArray(value)) {
        return value.map((pair)=>Array.isArray(pair) && typeof pair[0] === 'string' && SENSITIVE_PARAM_NAME_ONLY.test(pair[0]) ? [
                pair[0],
                FILTERED
            ] : maskDeep(pair));
    }
    if (value && typeof value === 'object') {
        return Object.fromEntries(Object.entries(value).map(([key, item])=>[
                key,
                SENSITIVE_PARAM_NAME_ONLY.test(key) ? FILTERED : maskDeep(item)
            ]));
    }
    return value;
}
/**
 * Maskiert jeden String in `value`, rekursiv durch Arrays und Objekte. Ein
 * mehrfach referenziertes Objekt bekommt ueberall dieselbe maskierte Kopie
 * (auch bei Zyklen); was tiefer als MAX_DEPTH liegt, wird ersetzt statt roh
 * durchgereicht.
 */ function maskDeep(value, depth = 0, seen = new WeakMap()) {
    if (typeof value === 'string') return maskText(value);
    if (value === null || typeof value !== 'object') return value;
    if (seen.has(value)) return seen.get(value);
    if (depth > MAX_DEPTH) return TRUNCATED;
    if (Array.isArray(value)) {
        const out = [];
        seen.set(value, out);
        for (const item of value)out.push(maskDeep(item, depth + 1, seen));
        return out;
    }
    const out = {};
    seen.set(value, out);
    for (const [key, item] of Object.entries(value)){
        out[key] = KEEP_KEYS.has(key) ? item : maskDeep(item, depth + 1, seen);
    }
    return out;
}
/**
 * #1722 (Schlussreview I2): Abfragen an Salesforce tragen Eingaben im
 * Query-String — die Kontakt-Suche schickt `q=SELECT … WHERE Email = '<adresse>'`.
 * Das SDK legt für jeden ausgehenden Request einen Breadcrumb mit `data.url`
 * und `data['http.query']` an, der am nächsten Ereignis derselben Anfrage
 * hängt (`contact.case-create-failed`). Für Salesforce-Hosts bleibt deshalb
 * nur der Pfad; Query und Fragment fallen weg. Andere Hosts bleiben, wie sie
 * sind (sensible Parameter maskiert ohnehin maskText).
 */ const SALESFORCE_HOST = /(^|\.)(salesforce\.com|force\.com|salesforce-setup\.com|cloudforce\.com)$/i;
/** Host aus SF_LOGIN_URL (eigene Domain möglich); im Browser nicht gesetzt */ function konfigurierterSalesforceHost() {
    const wert = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env?.SF_LOGIN_URL : undefined;
    if (!wert) return null;
    try {
        return new URL(wert).hostname.toLowerCase();
    } catch  {
        return null;
    }
}
function isSalesforceUrl(url) {
    try {
        const host = new URL(url).hostname.toLowerCase();
        return SALESFORCE_HOST.test(host) || host === konfigurierterSalesforceHost();
    } catch  {
        return false;
    }
}
const ohneQuery = (url)=>url.split(/[?#]/)[0] ?? url;
function stripSalesforceQuery(data) {
    const urlFelder = [
        'url',
        'http.url',
        'url.full'
    ];
    const ziel = urlFelder.map((k)=>data[k]).find((v)=>typeof v === 'string');
    if (!ziel || !isSalesforceUrl(ziel)) return data;
    const out = {
        ...data
    };
    for (const k of urlFelder){
        if (typeof out[k] === 'string') out[k] = ohneQuery(out[k]);
    }
    for (const k of [
        'http.query',
        'http.fragment',
        'url.query'
    ])delete out[k];
    return out;
}
function scrubBreadcrumb(breadcrumb) {
    if (breadcrumb.data && (breadcrumb.category === 'http' || breadcrumb.category === 'fetch')) {
        breadcrumb.data = stripSalesforceQuery(breadcrumb.data);
    }
    return breadcrumb;
}
/**
 * #1916: Kopfzeilen mit Geheimnissen — `Authorization` (Zugangsschlüssel der
 * Auktions-Schnittstelle), `X-Plastship-Signature`, `X-Plastship-Nonce`,
 * Cookies, API-Schlüssel — verlieren ihren Wert, unabhängig von seiner Länge.
 * Der Name bleibt, damit man sieht, dass die Kopfzeile da war.
 */ const GEHEIME_KOPFZEILE = /(^|-)(signature|nonce|hmac)$/i;
function geheimeKopfzeilenEntfernen(headers) {
    if (!headers || typeof headers !== 'object' || Array.isArray(headers)) return headers;
    return Object.fromEntries(Object.entries(headers).map(([name, wert])=>[
            name,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$logScrub$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSecretLogKey"])(name) || GEHEIME_KOPFZEILE.test(name) ? FILTERED : wert
        ]));
}
function maskRecord(record, dropIdKeys = false) {
    if (!record || typeof record !== 'object') return record;
    const entries = Object.entries(record).filter(([key])=>!dropIdKeys || !ID_KEYS.has(key));
    return maskDeep(Object.fromEntries(entries));
}
function scrubEvent(event) {
    if (event.user) {
        const id = event.user.id;
        event.user = id === undefined || id === null ? {} : {
            id
        };
    }
    if (typeof event.message === 'string') {
        event.message = maskText(event.message);
    }
    if (event.logentry) {
        event.logentry = maskRecord(event.logentry);
    }
    if (typeof event.transaction === 'string') {
        event.transaction = maskText(event.transaction);
    }
    for (const value of event.exception?.values ?? []){
        if (typeof value.value === 'string') {
            value.value = maskText(value.value);
        }
    }
    if (event.extra) event.extra = maskRecord(event.extra, true);
    if (event.contexts) event.contexts = maskRecord(event.contexts);
    if (event.tags) event.tags = maskRecord(event.tags);
    if (event.breadcrumbs) {
        event.breadcrumbs = event.breadcrumbs.map((crumb)=>({
                ...crumb,
                ...typeof crumb.message === 'string' ? {
                    message: maskText(crumb.message)
                } : {},
                ...crumb.data ? {
                    data: maskRecord(stripSalesforceQuery(crumb.data))
                } : {}
            }));
    }
    if (event.request) {
        const request = event.request;
        if (typeof request.url === 'string') request.url = maskText(request.url);
        if (request.query_string !== undefined) {
            request.query_string = maskQueryString(request.query_string);
        }
        if (request.data !== undefined) request.data = maskDeep(request.data);
        // `referer` traegt die volle Seiten-URL (`/invoice/<id>`), RSC-Anfragen
        // zusaetzlich `next-url` und den kodierten `next-router-state-tree`.
        if (request.headers) {
            request.headers = maskDeep(geheimeKopfzeilenEntfernen(request.headers));
        }
        // Cookies braucht keine Fehleranalyse; sie koennen Ids und Tokens tragen.
        if (request.cookies !== undefined) delete request.cookies;
    }
    return event;
}
function scrubTransaction(event) {
    scrubEvent(event);
    if (event.spans) {
        event.spans = event.spans.map((span)=>({
                ...span,
                ...typeof span.description === 'string' ? {
                    description: maskText(span.description)
                } : {},
                ...span.data ? {
                    data: maskRecord(stripSalesforceQuery(span.data))
                } : {}
            }));
    }
    return event;
}
function scrubLog(log) {
    if (typeof log.message === 'string') {
        log.message = maskText(log.message);
    }
    if (log.attributes) {
        log.attributes = maskRecord(log.attributes, true);
    }
    return log;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_0mznmnj6ztyqi._.js.map