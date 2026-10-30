(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/apps/web/src/app/utils/salesforce.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalesforceClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalesforceClient"],
    "callApexAgentEndpoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callApexAgentEndpoint"],
    "callApexChartEndpoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callApexChartEndpoint"],
    "callApexDailyChart",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callApexDailyChart"],
    "callApexEntityOverview",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callApexEntityOverview"],
    "callApexFinanceEndpoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callApexFinanceEndpoint"],
    "callApexListEndpoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callApexListEndpoint"],
    "callApexSearchEndpoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callApexSearchEndpoint"],
    "callApexUserAnalyticsEndpoint",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["callApexUserAnalyticsEndpoint"],
    "countSalesforceRecords",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["countSalesforceRecords"],
    "createSalesforceRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSalesforceRecord"],
    "deleteSalesforceRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["deleteSalesforceRecord"],
    "errorForLog",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["errorForLog"],
    "escapeSoslSearchTerm",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["escapeSoslSearchTerm"],
    "executeSalesforceQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["executeSalesforceQuery"],
    "executeSalesforceQueryAll",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["executeSalesforceQueryAll"],
    "executeSalesforceQueryWithPagination",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["executeSalesforceQueryWithPagination"],
    "executeSalesforceSearch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["executeSalesforceSearch"],
    "getSalesforceClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSalesforceClient"],
    "getSalesforceConnection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSalesforceConnection"],
    "getSalesforceRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSalesforceRecord"],
    "soqlPreview",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["soqlPreview"],
    "updateSalesforceRecord",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateSalesforceRecord"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforce$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/salesforce.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/salesforceClient.ts [app-client] (ecmascript)");
}),
"[project]/apps/web/src/app/utils/salesforce.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callApexAgentEndpoint",
    ()=>callApexAgentEndpoint,
    "callApexChartEndpoint",
    ()=>callApexChartEndpoint,
    "callApexDailyChart",
    ()=>callApexDailyChart,
    "callApexEntityOverview",
    ()=>callApexEntityOverview,
    "callApexFinanceEndpoint",
    ()=>callApexFinanceEndpoint,
    "callApexListEndpoint",
    ()=>callApexListEndpoint,
    "callApexSearchEndpoint",
    ()=>callApexSearchEndpoint,
    "callApexUserAnalyticsEndpoint",
    ()=>callApexUserAnalyticsEndpoint,
    "countSalesforceRecords",
    ()=>countSalesforceRecords,
    "createSalesforceRecord",
    ()=>createSalesforceRecord,
    "deleteSalesforceRecord",
    ()=>deleteSalesforceRecord,
    "errorForLog",
    ()=>errorForLog,
    "escapeSoslSearchTerm",
    ()=>escapeSoslSearchTerm,
    "executeSalesforceQuery",
    ()=>executeSalesforceQuery,
    "executeSalesforceQueryAll",
    ()=>executeSalesforceQueryAll,
    "executeSalesforceQueryWithPagination",
    ()=>executeSalesforceQueryWithPagination,
    "executeSalesforceSearch",
    ()=>executeSalesforceSearch,
    "getSalesforceClient",
    ()=>getSalesforceClient,
    "getSalesforceConnection",
    ()=>getSalesforceConnection,
    "getSalesforceRecord",
    ()=>getSalesforceRecord,
    "soqlPreview",
    ()=>soqlPreview,
    "updateSalesforceRecord",
    ()=>updateSalesforceRecord
]);
/**
 * Salesforce utility module
 *
 * Provides high-level functions for Salesforce SOQL queries, CRUD operations,
 * SOSL search, and Apex REST endpoint calls.
 *
 * All Salesforce communication goes through SalesforceClient (native fetch + JWT Bearer auth).
 * No jsforce dependency at runtime.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/salesforceClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/logger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__metrics$3e$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/metrics/public-api.js [app-client] (ecmascript) <export * as metrics>");
;
;
;
;
// ---------------------------------------------------------------------------
// Rate limit detection (used by query retry logic and withRetry)
// ---------------------------------------------------------------------------
function isRateLimitError(errorText) {
    const rateLimitPatterns = [
        'login rate exceeded',
        'rate limit exceeded',
        'REQUEST_LIMIT_EXCEEDED',
        'too many requests',
        'concurrent requests limit',
        'TooManyRequests'
    ];
    const lowerError = errorText.toLowerCase();
    return rateLimitPatterns.some((pattern)=>lowerError.includes(pattern.toLowerCase()));
}
async function getSalesforceClient() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalesforceClient"].create();
}
async function getSalesforceConnection() {
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalesforceClient"].create();
}
// ---------------------------------------------------------------------------
// Log-Hygiene (#1722): Salesforce-Fehlertexte zitieren Werte („data value too
// large: <Wert>", „invalid email address: …", Abfrage-Ausschnitte). Logger und
// Sentry bekommen deshalb nur bereinigte Texte; geworfen wird der Originalfehler.
// ---------------------------------------------------------------------------
const ENTFERNT = '[entfernt]';
const EMAIL_MUSTER = /[^\s@:;,()<>"'\[\]]+@[^\s@:;,()<>"'\[\]]+/g;
const SOQL_LITERAL = /'(?:[^'\\]|\\.)*'/g;
function soqlPreview(query, max = 100) {
    const ohneWerte = query.replace(SOQL_LITERAL, "'…'");
    return ohneWerte.substring(0, max) + (ohneWerte.length > max ? '...' : '');
}
function textOhneWerte(text, werte) {
    let t = text;
    for (const w of werte)t = t.split(w).join(ENTFERNT);
    return t.replace(SOQL_LITERAL, "'…'").replace(EMAIL_MUSTER, ENTFERNT);
}
function errorForLog(error, werte = [], objectType) {
    const liste = werte.filter((w)=>typeof w === 'string').map((w)=>w.trim()).filter((w)=>w.length >= 3).sort((a, b)=>b.length - a.length);
    const original = error instanceof Error ? error : new Error(String(error));
    const bereinigt = new Error(textOhneWerte(original.message, liste));
    bereinigt.name = original.name;
    if (original.stack) bereinigt.stack = textOhneWerte(original.stack, liste);
    const typ = objectType ?? (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalesforceApiError"] ? error.objectType : undefined);
    if (typ) Object.assign(bereinigt, {
        objectType: typ
    });
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalesforceApiError"]) {
        Object.assign(bereinigt, {
            statusCode: error.statusCode,
            errorCodes: error.errors.map((e)=>e.errorCode)
        });
    }
    return bereinigt;
}
async function executeSalesforceQuery(query) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'query');
    const maxRetries = 3;
    let retries = 0;
    let lastError = null;
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug('Executing Salesforce query', {
        ...context,
        metadata: {
            queryLength: query.length,
            queryPreview: soqlPreview(query),
            queryType: query.trim().split(' ')[0].toUpperCase()
        }
    });
    while(retries < maxRetries){
        try {
            const client = await getSalesforceClient();
            const result = await client.query(query);
            const duration = Date.now() - startTime;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Salesforce query executed successfully', {
                ...context,
                duration,
                metadata: {
                    recordCount: result.records.length,
                    totalSize: result.totalSize,
                    done: result.done,
                    queryLength: query.length,
                    hasMoreRecords: !result.done,
                    attempts: retries + 1
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__metrics$3e$__["metrics"].count('salesforce.query', 1, {
                attributes: {
                    result: 'success'
                }
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__metrics$3e$__["metrics"].distribution('salesforce.query.duration', duration, {
                unit: 'millisecond'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__metrics$3e$__["metrics"].distribution('salesforce.query.records', result.records.length);
            return result;
        } catch (error) {
            lastError = error;
            const errorMessage = error instanceof Error ? error.message : String(error);
            // Check if this is a rate limit error
            if (isRateLimitError(errorMessage)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__metrics$3e$__["metrics"].count('salesforce.query', 1, {
                    attributes: {
                        result: 'rate_limited'
                    }
                });
                retries++;
                // Wait: 5s, 15s, 45s
                const waitTime = Math.min(5000 * Math.pow(3, retries - 1), 60000);
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`Query rate limit hit, waiting ${waitTime / 1000}s before retry ${retries}/${maxRetries}`, {
                    ...context,
                    metadata: {
                        attempt: retries,
                        waitTime,
                        queryPreview: soqlPreview(query)
                    }
                });
                console.warn(`Salesforce query rate limit hit. Waiting ${waitTime / 1000}s before retry...`);
                await new Promise((resolve)=>setTimeout(resolve, waitTime));
                continue;
            }
            // Non-rate-limit error, throw immediately
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__metrics$3e$__["metrics"].count('salesforce.query', 1, {
                attributes: {
                    result: 'error'
                }
            });
            const duration = Date.now() - startTime;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Salesforce query execution failed', {
                ...context,
                duration,
                metadata: {
                    queryLength: query.length,
                    queryPreview: soqlPreview(query),
                    errorType: error instanceof Error ? error.constructor.name : 'Unknown'
                }
            }, errorForLog(error));
            throw error;
        }
    }
    const duration = Date.now() - startTime;
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Salesforce query failed after all retries', {
        ...context,
        duration,
        metadata: {
            totalAttempts: maxRetries,
            lastError: lastError ? errorForLog(lastError).message : undefined
        }
    });
    throw lastError || new Error('Salesforce query failed after all retries');
}
async function executeSalesforceQueryAll(query) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'queryAll');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug('Executing Salesforce queryAll', {
        ...context,
        metadata: {
            queryLength: query.length,
            queryPreview: soqlPreview(query),
            queryType: query.trim().split(' ')[0].toUpperCase()
        }
    });
    try {
        const client = await getSalesforceClient();
        const allRecords = [];
        let result = await client.query(query);
        allRecords.push(...result.records);
        // Continue fetching if there are more records
        while(!result.done && result.nextRecordsUrl){
            result = await client.queryMore(result.nextRecordsUrl);
            allRecords.push(...result.records);
        }
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Salesforce queryAll executed successfully', {
            ...context,
            duration,
            metadata: {
                recordCount: allRecords.length,
                totalSize: result.totalSize,
                queryLength: query.length
            }
        });
        return {
            records: allRecords,
            totalSize: result.totalSize
        };
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Salesforce queryAll execution failed', {
            ...context,
            duration,
            metadata: {
                queryLength: query.length,
                queryPreview: soqlPreview(query),
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, errorForLog(error));
        throw error;
    }
}
async function getSalesforceRecord(objectType, id) {
    try {
        const client = await getSalesforceClient();
        return await client.retrieve(objectType, id);
    } catch (error) {
        console.error(`Error retrieving ${objectType} record:`, error);
        throw error;
    }
}
async function createSalesforceRecord(objectType, data, options) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'create-record');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Creating Salesforce record', {
        ...context,
        metadata: {
            objectType,
            fieldCount: Object.keys(data).length,
            fields: Object.keys(data),
            hasRequiredFields: !!(data['Name'] || data['Subject'] || data['Id'])
        }
    });
    try {
        const client = await getSalesforceClient();
        const result = await client.create(objectType, data, options);
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Salesforce record created successfully', {
            ...context,
            duration,
            metadata: {
                objectType,
                recordId: result.id,
                success: result.success,
                hasErrors: result.errors && result.errors.length > 0,
                errorCount: result.errors ? result.errors.length : 0
            }
        });
        return result;
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Salesforce record creation failed', {
            ...context,
            duration,
            metadata: {
                objectType,
                fieldCount: Object.keys(data).length,
                fields: Object.keys(data),
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, // #1722: Fehlertexte zitieren Werte — ins Log nur ohne sie, geworfen wird das Original
        errorForLog(error, Object.values(data), objectType));
        throw withObjectType(error, objectType);
    }
}
/**
 * #912: Objekt an den SF-Fehler hängen, damit der zentrale Mapper
 * (salesforceErrors.ts) Feldnamen in Labels der Entity-Config übersetzen kann.
 */ function withObjectType(error, objectType) {
    if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$salesforceClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalesforceApiError"] && !error.objectType) {
        error.objectType = objectType;
    }
    return error;
}
async function updateSalesforceRecord(objectType, recordId, data) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'update-record');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Updating Salesforce record', {
        ...context,
        metadata: {
            objectType,
            recordId,
            updateFieldCount: Object.keys(data).length,
            updateFields: Object.keys(data)
        }
    });
    try {
        const client = await getSalesforceClient();
        // '' -> null: Salesforce kennt keine leeren Strings; fuer date/number/
        // currency ist '' sogar ein JSON_PARSER_ERROR (400). null leert das Feld —
        // damit funktioniert das Loeschen von Werten aus der UI (AB 2026-08-29,
        // Fall: Follow-up-Datum am Material Proposal liess sich nicht entfernen).
        const normalized = Object.fromEntries(Object.entries(data).map(([key, value])=>[
                key,
                value === '' ? null : value
            ]));
        const result = await client.update(objectType, recordId, normalized);
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Salesforce record updated successfully', {
            ...context,
            duration,
            metadata: {
                objectType,
                recordId,
                success: result.success,
                hasErrors: result.errors && result.errors.length > 0
            }
        });
        return result;
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Salesforce record update failed', {
            ...context,
            duration,
            metadata: {
                objectType,
                recordId,
                updateFieldCount: Object.keys(data).length,
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, error);
        throw withObjectType(error, objectType);
    }
}
async function deleteSalesforceRecord(objectType, id) {
    try {
        const client = await getSalesforceClient();
        return await client.destroy(objectType, id);
    } catch (error) {
        console.error(`Error deleting ${objectType} record:`, error);
        throw error;
    }
}
async function executeSalesforceSearch(query) {
    try {
        const client = await getSalesforceClient();
        const searchResult = await client.search(query);
        return {
            searchRecords: searchResult.searchRecords.map((record)=>({
                    ...record,
                    Id: record.Id || '' // Ensure Id is always a string
                }))
        };
    } catch (error) {
        console.error('Salesforce search error:', error);
        throw error;
    }
}
async function countSalesforceRecords(query) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'count-records');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug('Executing Salesforce count query', {
        ...context,
        metadata: {
            queryLength: query.length,
            queryPreview: soqlPreview(query)
        }
    });
    try {
        const client = await getSalesforceClient();
        const result = await client.query(query);
        // Handle cases where there are no records
        if (!result.records || result.records.length === 0) {
            const duration = Date.now() - startTime;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Salesforce count query returned zero records', {
                ...context,
                duration,
                metadata: {
                    count: 0
                }
            });
            return 0;
        }
        // The count query returns an object with a property containing the count
        const countRecord = result.records[0];
        let count = 0;
        if ('expr0' in countRecord) {
            count = parseInt(countRecord['expr0'], 10);
        } else if ('count' in countRecord) {
            count = parseInt(countRecord['count'], 10);
        } else {
            // Look for any property that might contain the count
            const possibleCountProperty = Object.keys(countRecord).find((key)=>key.toLowerCase().includes('count') || key.match(/^expr\d+$/i));
            if (possibleCountProperty) {
                count = parseInt(countRecord[possibleCountProperty], 10);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Could not find count property in result', {
                    ...context,
                    metadata: {
                        resultKeys: Object.keys(countRecord),
                        firstRecord: countRecord
                    }
                });
                return 0;
            }
        }
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Salesforce count query completed', {
            ...context,
            duration,
            metadata: {
                count,
                queryLength: query.length
            }
        });
        return count;
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Salesforce count query failed', {
            ...context,
            duration,
            metadata: {
                queryLength: query.length,
                queryPreview: soqlPreview(query),
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, errorForLog(error));
        throw error;
    }
}
async function executeSalesforceQueryWithPagination(params) {
    try {
        const { query, page, pageSize, sortField, sortOrder } = params;
        const client = await getSalesforceClient();
        // Calculate offset for pagination
        const offset = (page - 1) * pageSize;
        // Add ORDER BY clause if not already present
        const hasOrderBy = query.toUpperCase().includes('ORDER BY');
        let finalQuery = query;
        if (!hasOrderBy) {
            finalQuery += ` ORDER BY ${sortField} ${sortOrder}`;
        }
        // Add LIMIT and OFFSET for pagination
        finalQuery += ` LIMIT ${pageSize} OFFSET ${offset}`;
        console.log('Executing paginated query:', finalQuery);
        // Create COUNT query from the original query (remove SELECT ... FROM and replace with COUNT())
        let countQuery = query.trim();
        // Extract the FROM clause and everything after it (but before ORDER BY if present)
        const fromMatch = countQuery.match(/\bFROM\s+(.+?)(?:\s+ORDER\s+BY\s+.+)?$/i);
        if (fromMatch) {
            const fromClause = fromMatch[1].trim();
            countQuery = `SELECT COUNT() FROM ${fromClause}`;
        } else {
            // Fallback: just replace SELECT part with COUNT()
            countQuery = countQuery.replace(/^SELECT\s+.+?\s+FROM/i, 'SELECT COUNT() FROM');
        }
        // Remove ORDER BY, LIMIT, OFFSET from count query
        countQuery = countQuery.replace(/\s+ORDER\s+BY\s+.+$/i, '');
        countQuery = countQuery.replace(/\s+LIMIT\s+\d+/i, '');
        countQuery = countQuery.replace(/\s+OFFSET\s+\d+/i, '');
        console.log('Executing count query:', countQuery);
        // Execute both queries in parallel
        const [result, countResult] = await Promise.all([
            client.query(finalQuery),
            client.query(countQuery)
        ]);
        // Use the proper COUNT query result instead of unreliable totalSize
        const totalCount = countResult.totalSize || 0;
        // Enhance the result with accurate total count
        return {
            ...result,
            totalSize: totalCount
        };
    } catch (error) {
        console.error('Salesforce paginated query error:', error);
        throw error;
    }
}
// ============ Apex REST Integration ============
/**
 * Retry helper for Salesforce API calls with exponential backoff.
 * Retries on 429 (rate limit) and transient errors.
 */ async function withRetry(fn, options = {}) {
    const { maxRetries = 3, baseDelayMs = 1000, context = 'SF API' } = options;
    for(let attempt = 0; attempt <= maxRetries; attempt++){
        try {
            return await fn();
        } catch (error) {
            const isLastAttempt = attempt === maxRetries;
            const errorMessage = error instanceof Error ? error.message : String(error);
            const statusCode = error && typeof error === 'object' && 'statusCode' in error ? error.statusCode : 0;
            // Retry on 429 (rate limit) or 503 (service unavailable)
            const isRetryable = statusCode === 429 || statusCode === 503 || errorMessage.includes('REQUEST_LIMIT_EXCEEDED') || errorMessage.includes('UNABLE_TO_LOCK_ROW');
            if (isLastAttempt || !isRetryable) {
                throw error;
            }
            const delay = baseDelayMs * Math.pow(2, attempt) + Math.random() * 500;
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`${context} rate limited (attempt ${attempt + 1}/${maxRetries + 1}), retrying in ${Math.round(delay)}ms`, {
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'retry'),
                metadata: {
                    statusCode,
                    errorMessage: errorMessage.substring(0, 100),
                    attempt
                }
            });
            await new Promise((resolve)=>setTimeout(resolve, delay));
        }
    }
    // Should never reach here, but TypeScript needs it
    throw new Error('withRetry exhausted');
}
async function callApexListEndpoint(params) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'apex-list');
    const { objectType, page = 1, pageSize = 25, sortField = 'LastModifiedDate', sortOrder = 'DESC', search, filter, includeTaskCounts } = params;
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Calling Apex List endpoint', {
        ...context,
        metadata: {
            objectType,
            page,
            pageSize,
            sortField,
            sortOrder,
            hasSearch: !!search,
            hasFilter: !!filter
        }
    });
    try {
        const client = await getSalesforceClient();
        // Build query string
        const queryParams = new URLSearchParams({
            page: String(page),
            pageSize: String(pageSize),
            sortField,
            sortOrder
        });
        if (search) {
            queryParams.set('search', search);
        }
        if (filter) {
            queryParams.set('filter', filter);
        }
        if (includeTaskCounts) {
            queryParams.set('includeTaskCounts', 'true');
        }
        // Call Apex REST endpoint with retry on 429
        const endpoint = `/services/apexrest/plastship/v1/list/${objectType}?${queryParams.toString()}`;
        const rawResponse = await withRetry(async ()=>client.request('GET', endpoint), {
            context: `Apex List ${objectType}`
        });
        // Handle double-serialization (Apex REST may return JSON as a string)
        const response = typeof rawResponse === 'string' ? JSON.parse(rawResponse) : rawResponse;
        const duration = Date.now() - startTime;
        if (!response.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex List endpoint returned error', {
                ...context,
                duration,
                metadata: {
                    objectType,
                    error: response.error
                }
            });
            throw new Error(response.error || 'Apex endpoint returned error');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Apex List endpoint success', {
            ...context,
            duration,
            metadata: {
                objectType,
                recordCount: response.data?.length || 0,
                totalRecords: response.pagination?.totalRecords || 0,
                page: response.pagination?.page
            }
        });
        return response;
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex List endpoint call failed', {
            ...context,
            duration,
            metadata: {
                objectType,
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, error);
        throw error;
    }
}
async function callApexEntityOverview(params) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'apex-entity-overview');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Calling Apex entity-overview endpoint', {
        ...context,
        metadata: {
            entityCount: params.entities?.length || 'all',
            hasPermissionFilters: !!params.permissionFilters
        }
    });
    try {
        const client = await getSalesforceClient();
        const queryParams = new URLSearchParams();
        if (params.entities?.length) {
            queryParams.set('entities', params.entities.join(','));
        }
        if (params.permissionFilters && Object.keys(params.permissionFilters).length > 0) {
            queryParams.set('permissionFilters', JSON.stringify(params.permissionFilters));
        }
        const endpoint = `/services/apexrest/plastship/v1/dashboard/entity-overview?${queryParams.toString()}`;
        const rawResponse = await withRetry(async ()=>client.request('GET', endpoint), {
            context: 'Apex entity-overview'
        });
        // Handle double-serialization (Apex REST may return JSON as a string)
        const response = typeof rawResponse === 'string' ? JSON.parse(rawResponse) : rawResponse;
        const duration = Date.now() - startTime;
        if (!response.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex entity-overview returned error', {
                ...context,
                duration,
                metadata: {
                    error: response.error
                }
            });
            throw new Error(response.error || 'Apex entity-overview returned error');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Apex entity-overview success', {
            ...context,
            duration,
            metadata: {
                entityCount: Object.keys(response.entityOverview || {}).length
            }
        });
        return response;
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex entity-overview call failed', {
            ...context,
            duration,
            metadata: {
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, error);
        throw error;
    }
}
async function callApexDailyChart(days = 30) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'apex-daily-chart');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Calling Apex Dashboard entities-daily endpoint', {
        ...context,
        metadata: {
            days
        }
    });
    try {
        const client = await getSalesforceClient();
        const rawResponse = await withRetry(()=>client.request('GET', `/services/apexrest/plastship/v1/dashboard/entities-daily?days=${days}`));
        // Handle double-serialization
        const response = typeof rawResponse === 'string' ? JSON.parse(rawResponse) : rawResponse;
        const duration = Date.now() - startTime;
        if (!response.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Dashboard entities-daily returned error', {
                ...context,
                duration,
                metadata: {
                    error: response.error
                }
            });
            throw new Error(response.error || 'Apex dashboard entities-daily returned error');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Apex Dashboard entities-daily success', {
            ...context,
            duration,
            metadata: {
                days,
                statsCount: response.dailyStats?.length || 0
            }
        });
        return response;
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Dashboard entities-daily call failed', {
            ...context,
            duration,
            metadata: {
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, error);
        throw error;
    }
}
function escapeSoslSearchTerm(term) {
    return term.replace(/[?&|!{}[\]()^~*:\\"'+-]/g, '\\$&');
}
async function callApexSearchEndpoint(params) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'apex-search');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Calling Apex Search endpoint', {
        ...context,
        metadata: {
            searchTerm: params.searchTerm,
            objectCount: params.configs.length,
            objects: params.configs.map((c)=>c.objectType)
        }
    });
    try {
        const client = await getSalesforceClient();
        const rawResponse = await client.request('POST', '/services/apexrest/plastship/v1/search', {
            searchTerm: escapeSoslSearchTerm(params.searchTerm),
            configs: params.configs,
            limitPerObject: params.limitPerObject || 10
        });
        // Handle double-serialization (Apex REST may return JSON as a string)
        const response = typeof rawResponse === 'string' ? JSON.parse(rawResponse) : rawResponse;
        const duration = Date.now() - startTime;
        if (!response.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Search endpoint returned error', {
                ...context,
                duration,
                metadata: {
                    error: response.error
                }
            });
            throw new Error(response.error || 'Apex search returned error');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Apex Search endpoint success', {
            ...context,
            duration,
            metadata: {
                resultCount: response.totalCount,
                objects: params.configs.map((c)=>c.objectType)
            }
        });
        return response;
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Search endpoint call failed', {
            ...context,
            duration,
            metadata: {
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, error);
        throw error;
    }
}
async function callApexChartEndpoint(path, params) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'apex-charts');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Calling Apex Charts endpoint', {
        ...context,
        metadata: {
            path,
            params
        }
    });
    try {
        const client = await getSalesforceClient();
        const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
        const rawResponse = await withRetry(()=>client.request('GET', `/services/apexrest/plastship/v1/charts/${path}${queryString}`));
        // Handle double-serialization: Apex returns JSON.serialize(response)
        const response = typeof rawResponse === 'string' ? JSON.parse(rawResponse) : rawResponse;
        const duration = Date.now() - startTime;
        if (!response.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Charts endpoint returned error', {
                ...context,
                duration,
                metadata: {
                    error: response.error,
                    path
                }
            });
            throw new Error(response.error || 'Apex charts returned error');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Apex Charts endpoint success', {
            ...context,
            duration,
            metadata: {
                path
            }
        });
        return response;
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Charts endpoint call failed', {
            ...context,
            duration,
            metadata: {
                path,
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, error);
        throw error;
    }
}
async function callApexFinanceEndpoint(path, params) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'apex-finance');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Calling Apex Finance endpoint', {
        ...context,
        metadata: {
            path,
            params
        }
    });
    try {
        const client = await getSalesforceClient();
        const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
        const rawResponse = await withRetry(()=>client.request('GET', `/services/apexrest/plastship/v1/finance/${path}${queryString}`));
        // Handle double-serialization
        const response = typeof rawResponse === 'string' ? JSON.parse(rawResponse) : rawResponse;
        const duration = Date.now() - startTime;
        if (!response.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Finance endpoint returned error', {
                ...context,
                duration,
                metadata: {
                    error: response.error,
                    path
                }
            });
            throw new Error(response.error || 'Apex finance returned error');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Apex Finance endpoint success', {
            ...context,
            duration,
            metadata: {
                path
            }
        });
        return response;
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Finance endpoint call failed', {
            ...context,
            duration,
            metadata: {
                path,
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, error);
        throw error;
    }
}
async function callApexAgentEndpoint(path) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'apex-agents');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Calling Apex Agents endpoint', {
        ...context,
        metadata: {
            path
        }
    });
    try {
        const client = await getSalesforceClient();
        const urlPath = path ? `/services/apexrest/plastship/v1/agents/${path}` : '/services/apexrest/plastship/v1/agents';
        const rawResponse = await withRetry(()=>client.request('GET', urlPath));
        // Handle double-serialization
        const response = typeof rawResponse === 'string' ? JSON.parse(rawResponse) : rawResponse;
        const duration = Date.now() - startTime;
        if (!response.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Agents endpoint returned error', {
                ...context,
                duration,
                metadata: {
                    error: response.error,
                    path
                }
            });
            throw new Error(response.error || 'Apex agents returned error');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Apex Agents endpoint success', {
            ...context,
            duration,
            metadata: {
                path
            }
        });
        return response;
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Agents endpoint call failed', {
            ...context,
            duration,
            metadata: {
                path,
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, error);
        throw error;
    }
}
async function callApexUserAnalyticsEndpoint(path, params) {
    const startTime = Date.now();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'apex-analytics');
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Calling Apex Analytics endpoint', {
        ...context,
        metadata: {
            path,
            params
        }
    });
    try {
        const client = await getSalesforceClient();
        const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
        const rawResponse = await withRetry(()=>client.request('GET', `/services/apexrest/plastship/v1/analytics/${path}${queryString}`));
        // Handle double-serialization
        const response = typeof rawResponse === 'string' ? JSON.parse(rawResponse) : rawResponse;
        const duration = Date.now() - startTime;
        if (!response.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Analytics endpoint returned error', {
                ...context,
                duration,
                metadata: {
                    error: response.error,
                    path
                }
            });
            throw new Error(response.error || 'Apex analytics returned error');
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Apex Analytics endpoint success', {
            ...context,
            duration,
            metadata: {
                path
            }
        });
        return response;
    } catch (error) {
        const duration = Date.now() - startTime;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('Apex Analytics endpoint call failed', {
            ...context,
            duration,
            metadata: {
                path,
                errorType: error instanceof Error ? error.constructor.name : 'Unknown'
            }
        }, error);
        throw error;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/app/utils/salesforceClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalesforceApiError",
    ()=>SalesforceApiError,
    "SalesforceClient",
    ()=>SalesforceClient,
    "buildRecordPath",
    ()=>buildRecordPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
/**
 * SalesforceClient - Native fetch-based Salesforce REST API client
 *
 * Replaces jsforce.Connection for all production runtime Salesforce communication.
 * Uses JWT Bearer Token Flow (most secure, MFA/2FA compatible).
 *
 * Features:
 * - JWT-only authentication (no password fallback)
 * - Connection caching with 30min TTL
 * - Rate limit detection + exponential backoff retry
 * - Structured logging via app logger
 * - Full Salesforce REST API coverage (query, CRUD, describe, search)
 * - Apex REST endpoint support
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsonwebtoken/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$integrationFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/usage/integrationFetch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$integrations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/usage/integrations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$empty$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/empty.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/logger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/utils/soqlSanitizer.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
class SalesforceApiError extends Error {
    statusCode;
    errors;
    objectType;
    constructor(message, statusCode, errors = []){
        super(message);
        this.name = 'SalesforceApiError';
        this.statusCode = statusCode;
        this.errors = errors;
    }
}
// ---------------------------------------------------------------------------
// Internal: Rate limit detection
// ---------------------------------------------------------------------------
const RATE_LIMIT_PATTERNS = [
    'login rate exceeded',
    'rate limit exceeded',
    'request_limit_exceeded',
    'too many requests',
    'concurrent requests limit',
    'toomanyrequests'
];
function isRateLimitError(text) {
    const lower = text.toLowerCase();
    return RATE_LIMIT_PATTERNS.some((p)=>lower.includes(p));
}
function isRateLimitStatus(status) {
    return status === 429;
}
// ---------------------------------------------------------------------------
// Internal: JWT token creation
// ---------------------------------------------------------------------------
async function createJWTToken() {
    const clientId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SF_CLIENT_ID;
    const username = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SF_USERNAME;
    const audience = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SF_JWT_AUDIENCE || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SF_LOGIN_URL;
    if (!clientId || !username) {
        throw new Error('Missing required JWT configuration: SF_CLIENT_ID, SF_USERNAME');
    }
    const privateKeyContent = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SF_JWT_PRIVATE_KEY;
    const privateKeyPath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SF_JWT_PRIVATE_KEY_PATH;
    let privateKey;
    if (privateKeyContent) {
        if (privateKeyContent.includes('-----BEGIN')) {
            privateKey = privateKeyContent;
        } else {
            privateKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(privateKeyContent, 'base64').toString('utf8');
        }
    } else if (privateKeyPath) {
        const fullPath = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$empty$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].resolve(privateKeyPath);
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$empty$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].existsSync(fullPath)) {
            throw new Error(`Private key file not found: ${fullPath}`);
        }
        privateKey = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$empty$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].readFileSync(fullPath, 'utf8');
    } else {
        throw new Error('Missing Salesforce private key: Set either SF_JWT_PRIVATE_KEY or SF_JWT_PRIVATE_KEY_PATH');
    }
    const payload = {
        iss: clientId,
        sub: username,
        aud: audience,
        exp: Math.floor(Date.now() / 1000) + 5 * 60 // 5 minutes expiry
    };
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsonwebtoken$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sign(payload, privateKey, {
        algorithm: 'RS256'
    });
}
function buildRecordPath(objectType, id) {
    if (!/^[A-Za-z0-9_]+$/.test(objectType)) {
        throw new Error('Ungültiger SObject-Name');
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$utils$2f$soqlSanitizer$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidSalesforceId"])(id)) {
        throw new Error('Ungültige Salesforce-Id');
    }
    return `/sobjects/${objectType}/${encodeURIComponent(id)}`;
}
class SalesforceClient {
    instanceUrl;
    accessToken;
    apiVersion;
    // Singleton cache
    static cachedClient = null;
    static cacheExpiry = 0;
    static CACHE_TTL_MS = 30 * 60 * 1000 // 30 minutes
    ;
    constructor(accessToken, instanceUrl, apiVersion = 'v59.0'){
        this.accessToken = accessToken;
        this.instanceUrl = instanceUrl;
        this.apiVersion = apiVersion;
    }
    // -------------------------------------------------------------------------
    // Factory: authenticate via JWT Bearer Token Flow and cache the client
    // -------------------------------------------------------------------------
    static async create() {
        const now = Date.now();
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])('salesforce', 'connection');
        // Return cached client if still valid
        if (SalesforceClient.cachedClient && SalesforceClient.cacheExpiry > now) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].debug('Using cached SalesforceClient', {
                ...context,
                metadata: {
                    remainingTTL: Math.round((SalesforceClient.cacheExpiry - now) / 1000) + 's',
                    instanceUrl: SalesforceClient.cachedClient.instanceUrl
                }
            });
            return SalesforceClient.cachedClient;
        }
        const startTime = now;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Creating new SalesforceClient (JWT Bearer)', {
            ...context,
            metadata: {
                loginUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SF_LOGIN_URL,
                reason: SalesforceClient.cachedClient ? 'cache_expired' : 'no_cache'
            }
        });
        const maxRetries = 5;
        let lastError = null;
        for(let attempt = 0; attempt < maxRetries; attempt++){
            try {
                const jwtToken = await createJWTToken();
                const tokenUrl = `${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SF_LOGIN_URL}/services/oauth2/token`;
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$integrationFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integrationFetch"])('salesforce', 'auth', tokenUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: new URLSearchParams({
                        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                        assertion: jwtToken
                    })
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    if (isRateLimitError(errorText)) {
                        const waitTime = Math.min(30_000 * Math.pow(2, attempt), 480_000);
                        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`JWT auth rate limited, waiting ${waitTime / 1000}s (attempt ${attempt + 1}/${maxRetries})`, {
                            ...context,
                            metadata: {
                                attempt: attempt + 1,
                                waitTime,
                                errorText: errorText.substring(0, 200)
                            }
                        });
                        await new Promise((resolve)=>setTimeout(resolve, waitTime));
                        continue;
                    }
                    throw new Error(`JWT authentication failed: ${response.status} ${response.statusText} - ${errorText}`);
                }
                const result = await response.json();
                const client = new SalesforceClient(result.access_token, result.instance_url);
                // Cache
                SalesforceClient.cachedClient = client;
                SalesforceClient.cacheExpiry = now + SalesforceClient.CACHE_TTL_MS;
                const duration = Date.now() - startTime;
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('SalesforceClient created successfully', {
                    ...context,
                    duration,
                    metadata: {
                        instanceUrl: result.instance_url,
                        tokenType: result.token_type,
                        attempts: attempt + 1,
                        cacheTTL: SalesforceClient.CACHE_TTL_MS / 1000 + 's'
                    }
                });
                return client;
            } catch (error) {
                lastError = error;
                const errorMessage = error instanceof Error ? error.message : String(error);
                if (isRateLimitError(errorMessage)) {
                    const waitTime = Math.min(30_000 * Math.pow(2, attempt), 480_000);
                    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn(`JWT auth rate limit in error, waiting ${waitTime / 1000}s (attempt ${attempt + 1}/${maxRetries})`, {
                        ...context,
                        metadata: {
                            attempt: attempt + 1,
                            waitTime,
                            errorMessage: errorMessage.substring(0, 200)
                        }
                    });
                    await new Promise((resolve)=>setTimeout(resolve, waitTime));
                    continue;
                }
                // Non-rate-limit error: throw immediately
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('JWT authentication failed', context, error);
                // Clear cache on auth failure
                SalesforceClient.cachedClient = null;
                SalesforceClient.cacheExpiry = 0;
                throw error;
            }
        }
        // All retries exhausted
        SalesforceClient.cachedClient = null;
        SalesforceClient.cacheExpiry = 0;
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].error('JWT authentication failed after all retries', {
            ...context,
            metadata: {
                totalAttempts: maxRetries,
                lastError: lastError?.message
            }
        });
        throw lastError || new Error('JWT authentication failed after all retries');
    }
    /**
   * Invalidate the cached client. Call this if you detect an expired session.
   */ static invalidateCache() {
        SalesforceClient.cachedClient = null;
        SalesforceClient.cacheExpiry = 0;
    }
    // -------------------------------------------------------------------------
    // Core: authenticated HTTP request
    // -------------------------------------------------------------------------
    /**
   * Make an authenticated HTTP request to the Salesforce instance.
   * @param method HTTP method
   * @param urlPath Path relative to instanceUrl (e.g. /services/data/v59.0/query?q=...)
   * @param body Optional request body (will be JSON-stringified)
   * @param headers Optional extra headers
   */ async request(method, urlPath, body, headers) {
        const url = `${this.instanceUrl}${urlPath}`;
        const requestHeaders = {
            Authorization: `Bearer ${this.accessToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
            ...headers
        };
        const init = {
            method,
            headers: requestHeaders
        };
        if (body !== undefined) {
            init.body = typeof body === 'string' ? body : JSON.stringify(body);
        }
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$integrationFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integrationFetch"])('salesforce', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$integrations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salesforceOperation"])(urlPath), url, init);
        // Handle 204 No Content (success for update/delete)
        if (response.status === 204) {
            return {
                success: true
            };
        }
        // Handle error responses
        if (!response.ok) {
            const errorText = await response.text();
            let errorMessage = `Salesforce API error: ${response.status} ${response.statusText}`;
            const structured = [];
            try {
                const errorBody = JSON.parse(errorText);
                if (Array.isArray(errorBody)) {
                    const messages = errorBody.map((e)=>`${e.errorCode}: ${e.message}`).filter((m)=>m !== 'undefined: undefined');
                    if (messages.length > 0) {
                        errorMessage = messages.join('; ');
                    }
                    errorBody.forEach((e)=>{
                        if (e && e.errorCode) structured.push({
                            errorCode: e.errorCode,
                            message: e.message,
                            fields: e.fields
                        });
                    });
                } else if ('errorCode' in errorBody && errorBody.errorCode && 'message' in errorBody && errorBody.message) {
                    errorMessage = `${errorBody.errorCode}: ${errorBody.message}`;
                    structured.push({
                        errorCode: errorBody.errorCode,
                        message: errorBody.message,
                        fields: errorBody.fields
                    });
                } else if ('error' in errorBody && errorBody.error) {
                    errorMessage = `Apex error: ${errorBody.error}`;
                } else if ('message' in errorBody && errorBody.message) {
                    errorMessage = `Salesforce error: ${errorBody.message}`;
                } else {
                    errorMessage += ` - ${errorText}`;
                }
            } catch  {
                errorMessage += ` - ${errorText}`;
            }
            throw new SalesforceApiError(errorMessage, response.status, structured);
        }
        // Parse JSON response
        const text = await response.text();
        if (!text) {
            return {};
        }
        return JSON.parse(text);
    }
    // -------------------------------------------------------------------------
    // Raw fetch (for binary content like file downloads)
    // -------------------------------------------------------------------------
    /**
   * Make an authenticated HTTP request and return the raw Response object.
   * Use this for binary downloads where JSON parsing is not desired.
   * @param method HTTP method
   * @param urlPath Path relative to instanceUrl
   * @param headers Optional extra headers
   */ async rawFetch(method, urlPath, headers) {
        const url = `${this.instanceUrl}${urlPath}`;
        const requestHeaders = {
            Authorization: `Bearer ${this.accessToken}`,
            ...headers
        };
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$integrationFetch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integrationFetch"])('salesforce', (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$usage$2f$integrations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salesforceOperation"])(urlPath), url, {
            method,
            headers: requestHeaders
        });
        if (!response.ok) {
            throw new SalesforceApiError(`Salesforce API error: ${response.status} ${response.statusText}`, response.status);
        }
        return response;
    }
    // -------------------------------------------------------------------------
    // Data path helper
    // -------------------------------------------------------------------------
    dataPath(suffix) {
        return `/services/data/${this.apiVersion}${suffix}`;
    }
    /**
   * #511 F2: Roh-Bytes einer ContentVersion laden.
   *
   * Über die REST-Data-API (`sobjects/ContentVersion/<id>/VersionData`), NICHT
   * über den Shepherd-Servlet (`/sfc/servlet.shepherd/...`): letzterer akzeptiert
   * keinen OAuth-Bearer-Token und antwortet mit HTTP 200 + der SF-Login-Seite
   * statt der Datei — der Datei-Download lieferte dadurch eine Login-HTML statt
   * des Anhangs. Die Data-API funktioniert mit dem Bearer-Token (verifiziert).
   */ async downloadContentVersion(versionId) {
        return this.rawFetch('GET', this.dataPath(`/sobjects/ContentVersion/${versionId}/VersionData`));
    }
    // -------------------------------------------------------------------------
    // SOQL Query
    // -------------------------------------------------------------------------
    /**
   * Execute a SOQL query.
   * Maps to: GET /services/data/vXX.0/query?q={soql}
   */ async query(soql) {
        const encodedQuery = encodeURIComponent(soql);
        return this.request('GET', this.dataPath(`/query?q=${encodedQuery}`));
    }
    /**
   * Fetch the next page of query results.
   * Maps to: GET {nextRecordsUrl}
   */ async queryMore(nextRecordsUrl) {
        // nextRecordsUrl is relative to instanceUrl, e.g. /services/data/v59.0/query/01g...
        return this.request('GET', nextRecordsUrl);
    }
    // -------------------------------------------------------------------------
    // SOSL Search
    // -------------------------------------------------------------------------
    /**
   * Execute a SOSL search.
   * Maps to: GET /services/data/vXX.0/search?q={sosl}
   */ async search(sosl) {
        const encodedSearch = encodeURIComponent(sosl);
        return this.request('GET', this.dataPath(`/search?q=${encodedSearch}`));
    }
    // -------------------------------------------------------------------------
    // sObject CRUD
    // -------------------------------------------------------------------------
    /**
   * Retrieve a single record by ID.
   * Maps to: GET /services/data/vXX.0/sobjects/{objectType}/{id}
   */ async retrieve(objectType, id) {
        return this.request('GET', this.dataPath(buildRecordPath(objectType, id)));
    }
    /**
   * Create a new record.
   * Maps to: POST /services/data/vXX.0/sobjects/{objectType}
   * Returns { id, success, errors }
   * `options.headers`: zusätzliche Request-Header (z. B. `Sforce-Auto-Assign`).
   */ async create(objectType, data, options) {
        const result = await this.request('POST', this.dataPath(`/sobjects/${objectType}`), data, options?.headers);
        return {
            id: result.id,
            success: result.success,
            errors: result.errors?.map((e)=>e.message) || []
        };
    }
    /**
   * Update an existing record.
   * Maps to: PATCH /services/data/vXX.0/sobjects/{objectType}/{id}
   * Salesforce returns 204 No Content on success.
   */ async update(objectType, id, data) {
        // Remove Id from data if present (it's in the URL)
        const { Id: _id, id: _id2, ...cleanData } = data;
        await this.request('PATCH', this.dataPath(buildRecordPath(objectType, id)), cleanData);
        // PATCH returns 204 on success - our request() method returns { success: true }
        return {
            id,
            success: true,
            errors: []
        };
    }
    /**
   * Delete a record.
   * Maps to: DELETE /services/data/vXX.0/sobjects/{objectType}/{id}
   * Salesforce returns 204 No Content on success.
   */ async destroy(objectType, id) {
        await this.request('DELETE', this.dataPath(buildRecordPath(objectType, id)));
        return {
            id,
            success: true,
            errors: []
        };
    }
    // -------------------------------------------------------------------------
    // Describe (metadata)
    // -------------------------------------------------------------------------
    /**
   * Describe an sObject (fields, relationships, etc.).
   * Maps to: GET /services/data/vXX.0/sobjects/{objectType}/describe
   */ async describe(objectType) {
        return this.request('GET', this.dataPath(`/sobjects/${objectType}/describe`));
    }
    /**
   * Describe all sObjects available in the org.
   * Maps to: GET /services/data/vXX.0/sobjects
   */ async describeGlobal() {
        return this.request('GET', this.dataPath('/sobjects'));
    }
    // -------------------------------------------------------------------------
    // jsforce-compatible helpers (used by scripts)
    // -------------------------------------------------------------------------
    /**
   * Returns a jsforce-compatible sObject handle with batch create/update.
   */ sobject(objectType) {
        return {
            create: async (records)=>{
                const body = {
                    allOrNone: false,
                    records: records.map((r)=>({
                            attributes: {
                                type: objectType
                            },
                            ...r
                        }))
                };
                const results = await this.request('POST', this.dataPath('/composite/sobjects'), body);
                return results;
            },
            update: async (records)=>{
                const body = {
                    allOrNone: false,
                    records: records.map((r)=>({
                            attributes: {
                                type: objectType
                            },
                            ...r
                        }))
                };
                const results = await this.request('PATCH', this.dataPath('/composite/sobjects'), body);
                return results;
            }
        };
    }
    /**
   * Tooling API access (used by scripts for FlexiPage queries etc.).
   */ get tooling() {
        return {
            query: async (soql)=>{
                const encodedQuery = encodeURIComponent(soql);
                return this.request('GET', this.dataPath(`/tooling/query?q=${encodedQuery}`));
            }
        };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/empty.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// Empty module used as browser fallback for Node.js built-ins
// Used by Turbopack resolveAlias configuration
const emptyModule = {};
const __TURBOPACK__default__export__ = emptyModule;
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
"[project]/apps/web/src/lib/usage/integrationFetch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "integrationFetch",
    ()=>integrationFetch,
    "integrationSmtp",
    ()=>integrationSmtp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/app/lib/logger.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentryEnvironment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/src/lib/sentryEnvironment.ts [app-client] (ecmascript)");
;
;
let lastRecordingWarning = 0;
async function record(integration, operation, method, status, started, measurement) {
    const duration = Date.now() - started;
    const environment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$lib$2f$sentryEnvironment$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sentryUmgebung"])();
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].info('Integration request', {
            component: 'integration',
            action: 'request',
            duration,
            metadata: {
                integration,
                operation,
                method,
                status,
                environment,
                measurement
            }
        });
    } catch  {
    /* Logging failures must not prevent durable measurement. */ }
    try {
        // Kein Import von @/lib/prisma, auch nicht dynamisch: salesforceClient und
        // damit diese Datei sind über lib/rbac/permissions.ts aus dem Client
        // erreichbar, Turbopack zöge prisma → pg ins Browser-Bundle. Wie
        // permissions.ts nur über globalThis.prisma (registriert in lib/prisma.ts,
        // vorgeladen in instrumentation.ts).
        const prisma = globalThis.prisma;
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.DATABASE_URL && prisma) {
            const hour = new Date(Math.floor(started / 3_600_000) * 3_600_000);
            await prisma.$executeRaw`
        INSERT INTO integration_usage_hourly
          (hour, environment, integration, operation, method, status, measurement, requests, duration_ms)
        VALUES (${hour}, ${environment}, ${integration}, ${operation}, ${method}, ${status}, ${measurement}, 1, ${duration})
        ON CONFLICT (hour, environment, integration, operation, method, status, measurement)
        DO UPDATE SET requests = integration_usage_hourly.requests + 1,
                      duration_ms = integration_usage_hourly.duration_ms + EXCLUDED.duration_ms`;
        }
    } catch  {
        // Bound warning volume during a database outage; never replace the upstream result.
        if (Date.now() - lastRecordingWarning >= 60_000) {
            lastRecordingWarning = Date.now();
            try {
                __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$src$2f$app$2f$lib$2f$logger$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logger"].warn('Integration usage recording failed', {
                    component: 'integration',
                    action: 'usage',
                    metadata: {
                        integration,
                        environment
                    }
                });
            } catch  {
            /* Diagnostics must not replace the upstream result. */ }
        }
    }
}
async function integrationFetch(integration, operation, input, init) {
    const started = Date.now();
    let status = 0;
    const options = init;
    const cached = init?.cache !== 'no-store' && (init?.cache === 'force-cache' || options?.next?.revalidate === false || typeof options?.next?.revalidate === 'number' && options.next.revalidate > 0);
    try {
        const response = await fetch(input, init);
        status = response.status;
        return response;
    } finally{
        await record(integration, operation, (init?.method ?? 'GET').toUpperCase(), status, started, cached ? 'cached-fetch' : 'http');
    }
}
async function integrationSmtp(operation, send) {
    const started = Date.now();
    let status = 0;
    try {
        const result = await send();
        status = 250;
        return result;
    } finally{
        await record('smtp', operation, 'SEND', status, started, 'smtp');
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/web/src/lib/usage/integrations.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTEGRATIONS",
    ()=>INTEGRATIONS,
    "isIntegration",
    ()=>isIntegration,
    "salesforceOperation",
    ()=>salesforceOperation
]);
const INTEGRATIONS = {
    salesforce: 'Salesforce',
    absence: 'absence.io',
    smtp: 'SMTP',
    microsoft: 'Microsoft Graph',
    microsoftAuth: 'Microsoft OAuth',
    gitlab: 'GitLab',
    sentryApi: 'Sentry API',
    azureAi: 'Azure AI',
    yahoo: 'Yahoo Finance',
    ecb: 'EZB',
    coingecko: 'CoinGecko',
    plasticker: 'Plasticker',
    vies: 'VIES',
    rdap: 'RDAP',
    openregister: 'OpenRegister',
    websiteCheck: 'Website-Prüfung',
    companieshouse: 'Companies House',
    safebrowsing: 'Google Safe Browsing',
    virustotal: 'VirusTotal',
    lei: 'GLEIF',
    sanctions: 'OpenSanctions',
    opencorporates: 'OpenCorporates',
    wikidata: 'Wikidata',
    gravatar: 'Gravatar',
    // #1916: Webhooks an Auktions-Anbieter (Operation = Anbieter-Slug, nie die URL)
    auctionWebhook: 'Auktions-Webhooks',
    // #2135/#2136: eigene Geodienste (privates Docker-Netz), Operation search/reverse/route
    photon: 'Photon (Adresssuche)',
    valhalla: 'Valhalla (Routen)'
};
function isIntegration(value) {
    return Object.prototype.hasOwnProperty.call(INTEGRATIONS, value);
}
function salesforceOperation(urlPath) {
    const path = urlPath.split('?')[0];
    if (path.includes('/oauth2/token')) return 'auth';
    if (path.includes('/apexrest/')) return 'apex';
    if (path.includes('/tooling/')) return 'tooling';
    if (path.includes('/composite/')) return 'composite';
    if (path.includes('/query')) return 'query';
    if (path.includes('/search')) return 'search';
    if (path.endsWith('/describe') || /\/sobjects\/?$/.test(path)) return 'describe';
    if (path.includes('/sobjects/')) return 'records';
    return 'other';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=apps_web_src_0m03568w_vpq5._.js.map