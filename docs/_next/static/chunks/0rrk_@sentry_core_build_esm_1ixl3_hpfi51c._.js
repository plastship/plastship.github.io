(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/web/node_modules/@sentry/core/build/esm/asyncContext/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAsyncContextStrategy",
    ()=>getAsyncContextStrategy,
    "setAsyncContextStrategy",
    ()=>setAsyncContextStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$stackStrategy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js [app-client] (ecmascript)");
;
;
function setAsyncContextStrategy(strategy) {
    const registry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const sentry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentryCarrier"])(registry);
    sentry.acs = strategy;
}
function getAsyncContextStrategy(carrier) {
    const sentry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentryCarrier"])(carrier);
    if (sentry.acs) {
        return sentry.acs;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$stackStrategy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStackAsyncContextStrategy"])();
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/asyncContext/stackStrategy.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AsyncContextStack",
    ()=>AsyncContextStack,
    "getStackAsyncContextStrategy",
    ()=>getStackAsyncContextStrategy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$defaultScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/defaultScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/scope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$chain$2d$and$2d$copy$2d$promiselike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/chain-and-copy-promiselike.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
;
;
;
;
;
class AsyncContextStack {
    constructor(scope, isolationScope){
        let assignedScope;
        if (!scope) {
            assignedScope = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"]();
        } else {
            assignedScope = scope;
        }
        let assignedIsolationScope;
        if (!isolationScope) {
            assignedIsolationScope = new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"]();
        } else {
            assignedIsolationScope = isolationScope;
        }
        this._stack = [
            {
                scope: assignedScope
            }
        ];
        this._isolationScope = assignedIsolationScope;
    }
    /**
   * Fork a scope for the stack.
   */ withScope(callback) {
        const scope = this._pushScope();
        let maybePromiseResult;
        try {
            maybePromiseResult = callback(scope);
        } catch (e) {
            this._popScope();
            throw e;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isThenable"])(maybePromiseResult)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$chain$2d$and$2d$copy$2d$promiselike$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainAndCopyPromiseLike"])(maybePromiseResult, ()=>this._popScope(), ()=>this._popScope());
        }
        this._popScope();
        return maybePromiseResult;
    }
    /**
   * Get the client of the stack.
   */ getClient() {
        return this.getStackTop().client;
    }
    /**
   * Returns the scope of the top stack.
   */ getScope() {
        return this.getStackTop().scope;
    }
    /**
   * Get the isolation scope for the stack.
   */ getIsolationScope() {
        return this._isolationScope;
    }
    /**
   * Returns the topmost scope layer in the order domain > local > process.
   */ getStackTop() {
        return this._stack[this._stack.length - 1];
    }
    /**
   * Push a scope to the stack.
   */ _pushScope() {
        const scope = this.getScope().clone();
        this._stack.push({
            client: this.getClient(),
            scope
        });
        return scope;
    }
    /**
   * Pop a scope from the stack.
   */ _popScope() {
        if (this._stack.length <= 1) return false;
        return !!this._stack.pop();
    }
}
function getAsyncContextStack() {
    const registry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const sentry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentryCarrier"])(registry);
    return sentry.stack = sentry.stack || new AsyncContextStack((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$defaultScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultCurrentScope"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$defaultScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultIsolationScope"])());
}
function withScope(callback) {
    return getAsyncContextStack().withScope(callback);
}
function withSetScope(scope, callback) {
    const stack = getAsyncContextStack();
    return stack.withScope(()=>{
        stack.getStackTop().scope = scope;
        return callback(scope);
    });
}
function withIsolationScope(callback) {
    return getAsyncContextStack().withScope(()=>{
        return callback(getAsyncContextStack().getIsolationScope());
    });
}
function getStackAsyncContextStrategy() {
    return {
        withIsolationScope,
        withScope,
        withSetScope,
        withSetIsolationScope: (_isolationScope, callback)=>{
            return withIsolationScope(callback);
        },
        getCurrentScope: ()=>getAsyncContextStack().getScope(),
        getIsolationScope: ()=>getAsyncContextStack().getIsolationScope()
    };
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/attributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attributeValueToTypedAttributeValue",
    ()=>attributeValueToTypedAttributeValue,
    "estimateTypedAttributesSizeInBytes",
    ()=>estimateTypedAttributesSizeInBytes,
    "isAttributeObject",
    ()=>isAttributeObject,
    "serializeAttributes",
    ()=>serializeAttributes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)");
;
function isAttributeObject(maybeObj) {
    return typeof maybeObj === "object" && maybeObj != null && !Array.isArray(maybeObj) && Object.keys(maybeObj).includes("value");
}
function attributeValueToTypedAttributeValue(rawValue, useFallback) {
    const { value, unit } = isAttributeObject(rawValue) ? rawValue : {
        value: rawValue,
        unit: void 0
    };
    const attributeValue = getTypedAttributeValue(value);
    const checkedUnit = unit && typeof unit === "string" ? {
        unit
    } : {};
    if (attributeValue) {
        return {
            ...attributeValue,
            ...checkedUnit
        };
    }
    if (!useFallback || useFallback === "skip-undefined" && value === void 0) {
        return;
    }
    let stringValue = "";
    try {
        stringValue = JSON.stringify(value) ?? "";
    } catch  {}
    return {
        value: stringValue,
        type: "string",
        ...checkedUnit
    };
}
function serializeAttributes(attributes, fallback = false) {
    const serializedAttributes = {};
    for (const [key, value] of Object.entries(attributes ?? {})){
        const typedValue = attributeValueToTypedAttributeValue(value, fallback);
        if (typedValue) {
            serializedAttributes[key] = typedValue;
        }
    }
    return serializedAttributes;
}
function estimateTypedAttributesSizeInBytes(attributes) {
    if (!attributes) {
        return 0;
    }
    let weight = 0;
    for (const [key, attr] of Object.entries(attributes)){
        weight += key.length * 2;
        weight += attr.type.length * 2;
        weight += (attr.unit?.length ?? 0) * 2;
        const val = attr.value;
        if (Array.isArray(val)) {
            weight += estimatePrimitiveSizeInBytes(val[0]) * val.length;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(val)) {
            weight += estimatePrimitiveSizeInBytes(val);
        } else {
            weight += 100;
        }
    }
    return weight;
}
function estimatePrimitiveSizeInBytes(value) {
    if (typeof value === "string") {
        return value.length * 2;
    } else if (typeof value === "boolean") {
        return 4;
    } else if (typeof value === "number") {
        return 8;
    }
    return 0;
}
function getTypedAttributeValue(value) {
    if (Array.isArray(value)) {
        return {
            value,
            type: "array"
        };
    }
    const primitiveType = typeof value === "string" ? "string" : typeof value === "boolean" ? "boolean" : typeof value === "number" && !Number.isNaN(value) ? Number.isInteger(value) ? "integer" : "double" : null;
    if (primitiveType) {
        return {
            value,
            type: primitiveType
        };
    }
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getGlobalSingleton",
    ()=>getGlobalSingleton,
    "getMainCarrier",
    ()=>getMainCarrier,
    "getSentryCarrier",
    ()=>getSentryCarrier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/version.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)");
;
;
function getMainCarrier() {
    getSentryCarrier(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
}
function getSentryCarrier(carrier) {
    const __SENTRY__ = carrier.__SENTRY__ = carrier.__SENTRY__ || {};
    __SENTRY__.version = __SENTRY__.version || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"];
    return __SENTRY__[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"]] = __SENTRY__[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"]] || {};
}
function getGlobalSingleton(name, creator, obj = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]) {
    const __SENTRY__ = obj.__SENTRY__ = obj.__SENTRY__ || {};
    const carrier = __SENTRY__[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"]] = __SENTRY__[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SDK_VERSION"]] || {};
    return carrier[name] || (carrier[name] = creator());
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_ENVIRONMENT",
    ()=>DEFAULT_ENVIRONMENT,
    "DEV_ENVIRONMENT",
    ()=>DEV_ENVIRONMENT
]);
const DEFAULT_ENVIRONMENT = "production";
const DEV_ENVIRONMENT = "development";
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getClient",
    ()=>getClient,
    "getCurrentScope",
    ()=>getCurrentScope,
    "getExternalPropagationContext",
    ()=>getExternalPropagationContext,
    "getGlobalScope",
    ()=>getGlobalScope,
    "getIsolationScope",
    ()=>getIsolationScope,
    "getTraceContextFromScope",
    ()=>getTraceContextFromScope,
    "hasExternalPropagationContext",
    ()=>hasExternalPropagationContext,
    "registerExternalPropagationContext",
    ()=>registerExternalPropagationContext,
    "withIsolationScope",
    ()=>withIsolationScope,
    "withScope",
    ()=>withScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/asyncContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/scope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/propagationContext.js [app-client] (ecmascript)");
;
;
;
;
let _externalPropagationContextProvider;
function registerExternalPropagationContext(fn) {
    _externalPropagationContextProvider = fn;
}
function getExternalPropagationContext() {
    return _externalPropagationContextProvider?.();
}
function hasExternalPropagationContext() {
    return _externalPropagationContextProvider !== void 0;
}
function getCurrentScope() {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    return acs.getCurrentScope();
}
function getIsolationScope() {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    return acs.getIsolationScope();
}
function getGlobalScope() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalSingleton"])("globalScope", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"]());
}
function withScope(...rest) {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    if (rest.length === 2) {
        const [scope, callback] = rest;
        if (!scope) {
            return acs.withScope(callback);
        }
        return acs.withSetScope(scope, callback);
    }
    return acs.withScope(rest[0]);
}
function withIsolationScope(...rest) {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    if (rest.length === 2) {
        const [isolationScope, callback] = rest;
        if (!isolationScope) {
            return acs.withIsolationScope(callback);
        }
        return acs.withSetIsolationScope(isolationScope, callback);
    }
    return acs.withIsolationScope(rest[0]);
}
function getClient() {
    return getCurrentScope().getClient();
}
function getTraceContextFromScope(scope) {
    const externalContext = getExternalPropagationContext();
    if (externalContext) {
        return {
            trace_id: externalContext.traceId,
            span_id: externalContext.spanId
        };
    }
    const propagationContext = scope.getPropagationContext();
    const { traceId, parentSpanId, propagationSpanId } = propagationContext;
    const traceContext = {
        trace_id: traceId,
        span_id: propagationSpanId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSpanId"])()
    };
    if (parentSpanId) {
        traceContext.parent_span_id = parentSpanId;
    }
    return traceContext;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEBUG_BUILD",
    ()=>DEBUG_BUILD
]);
const DEBUG_BUILD = typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__;
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/defaultScopes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getDefaultCurrentScope",
    ()=>getDefaultCurrentScope,
    "getDefaultIsolationScope",
    ()=>getDefaultIsolationScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/scope.js [app-client] (ecmascript)");
;
;
function getDefaultCurrentScope() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalSingleton"])("defaultCurrentScope", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"]());
}
function getDefaultIsolationScope() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalSingleton"])("defaultIsolationScope", ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$scope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scope"]());
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/metrics/envelope.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMetricContainerEnvelopeItem",
    ()=>createMetricContainerEnvelopeItem,
    "createMetricEnvelope",
    ()=>createMetricEnvelope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/dsn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/envelope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$isBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/isBrowser.js [app-client] (ecmascript)");
;
;
;
function createMetricContainerEnvelopeItem(items, inferUserData) {
    const inferSetting = inferUserData ? "auto" : "never";
    return [
        {
            type: "trace_metric",
            item_count: items.length,
            content_type: "application/vnd.sentry.items.trace-metric+json"
        },
        {
            version: 2,
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$isBrowser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowser"])() && {
                ingest_settings: {
                    infer_ip: inferSetting,
                    infer_user_agent: inferSetting
                }
            },
            items
        }
    ];
}
function createMetricEnvelope(metrics, metadata, tunnel, dsn, inferUserData) {
    const headers = {};
    if (metadata?.sdk) {
        headers.sdk = {
            name: metadata.sdk.name,
            version: metadata.sdk.version
        };
    }
    if (!!tunnel && !!dsn) {
        headers.dsn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dsnToString"])(dsn);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createEnvelope"])(headers, [
        createMetricContainerEnvelopeItem(metrics, inferUserData)
    ]);
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/metrics/internal.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_INTERNAL_captureMetric",
    ()=>_INTERNAL_captureMetric,
    "_INTERNAL_captureSerializedMetric",
    ()=>_INTERNAL_captureSerializedMetric,
    "_INTERNAL_flushMetricsBuffer",
    ()=>_INTERNAL_flushMetricsBuffer,
    "_INTERNAL_getMetricBuffer",
    ()=>_INTERNAL_getMetricBuffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/attributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$scopeData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/scopeData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/spanOnScope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$timestampSequence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/timestampSequence.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$trace$2d$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/trace-info.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/metrics/envelope.js [app-client] (ecmascript)");
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
const MAX_METRIC_BUFFER_SIZE = 1e3;
function setMetricAttribute(metricAttributes, key, value, setEvenIfPresent = true) {
    if (value && (setEvenIfPresent || !(key in metricAttributes))) {
        metricAttributes[key] = value;
    }
}
function _INTERNAL_captureSerializedMetric(client, serializedMetric) {
    const bufferMap = _getBufferMap();
    const metricBuffer = _INTERNAL_getMetricBuffer(client);
    if (metricBuffer === void 0) {
        bufferMap.set(client, [
            serializedMetric
        ]);
    } else {
        if (metricBuffer.length >= MAX_METRIC_BUFFER_SIZE) {
            _INTERNAL_flushMetricsBuffer(client, metricBuffer);
            bufferMap.set(client, [
                serializedMetric
            ]);
        } else {
            bufferMap.set(client, [
                ...metricBuffer,
                serializedMetric
            ]);
        }
    }
}
function _enrichMetricAttributes(beforeMetric, client, user) {
    const { release, environment } = client.getOptions();
    const processedMetricAttributes = {
        ...beforeMetric.attributes
    };
    setMetricAttribute(processedMetricAttributes, "user.id", user.id, false);
    setMetricAttribute(processedMetricAttributes, "user.email", user.email, false);
    setMetricAttribute(processedMetricAttributes, "user.name", user.username, false);
    setMetricAttribute(processedMetricAttributes, "sentry.release", release);
    setMetricAttribute(processedMetricAttributes, "sentry.environment", environment);
    const { name, version } = client.getSdkMetadata()?.sdk ?? {};
    setMetricAttribute(processedMetricAttributes, "sentry.sdk.name", name);
    setMetricAttribute(processedMetricAttributes, "sentry.sdk.version", version);
    const replay = client.getIntegrationByName("Replay");
    const replayId = replay?.getReplayId(true);
    setMetricAttribute(processedMetricAttributes, "sentry.replay_id", replayId);
    if (replayId && replay?.getRecordingMode() === "buffer") {
        setMetricAttribute(processedMetricAttributes, "sentry._internal.replay_is_buffering", true);
    }
    return {
        ...beforeMetric,
        attributes: processedMetricAttributes
    };
}
function _buildSerializedMetric(metric, client, currentScope, scopeAttributes) {
    const [, traceContext] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$trace$2d$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getTraceInfoFromScope"])(client, currentScope);
    const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getSpanForScope"])(currentScope);
    const traceId = span ? span.spanContext().traceId : traceContext?.trace_id;
    const spanId = span ? span.spanContext().spanId : void 0;
    const timestamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
    const sequenceAttr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$timestampSequence$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSequenceAttribute"])(timestamp);
    return {
        timestamp,
        trace_id: traceId ?? "",
        span_id: spanId,
        name: metric.name,
        type: metric.type,
        unit: metric.unit,
        value: metric.value,
        attributes: {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAttributes"])(scopeAttributes),
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAttributes"])(metric.attributes, "skip-undefined"),
            [sequenceAttr.key]: sequenceAttr.value
        }
    };
}
function _INTERNAL_captureMetric(beforeMetric, options) {
    const currentScope = options?.scope ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])();
    const captureSerializedMetric = options?.captureSerializedMetric ?? _INTERNAL_captureSerializedMetric;
    const client = currentScope?.getClient() ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].warn("No client available to capture metric.");
        return;
    }
    const { _experiments, enableMetrics, beforeSendMetric } = client.getOptions();
    const metricsEnabled = enableMetrics ?? _experiments?.enableMetrics ?? true;
    if (!metricsEnabled) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].warn("metrics option not enabled, metric will not be captured.");
        return;
    }
    const { user, attributes: scopeAttributes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$scopeData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCombinedScopeData"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getIsolationScope"])(), currentScope);
    const enrichedMetric = _enrichMetricAttributes(beforeMetric, client, user);
    client.emit("processMetric", enrichedMetric);
    const beforeSendCallback = beforeSendMetric || _experiments?.beforeSendMetric;
    const processedMetric = beforeSendCallback ? beforeSendCallback(enrichedMetric) : enrichedMetric;
    if (!processedMetric) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log("`beforeSendMetric` returned `null`, will not send metric.");
        return;
    }
    const serializedMetric = _buildSerializedMetric(processedMetric, client, currentScope, scopeAttributes);
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log("[Metric]", serializedMetric);
    captureSerializedMetric(client, serializedMetric);
    client.emit("afterCaptureMetric", processedMetric);
}
function _INTERNAL_flushMetricsBuffer(client, maybeMetricBuffer) {
    const metricBuffer = maybeMetricBuffer ?? _INTERNAL_getMetricBuffer(client) ?? [];
    if (metricBuffer.length === 0) {
        return;
    }
    const clientOptions = client.getOptions();
    const envelope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$envelope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMetricEnvelope"])(metricBuffer, clientOptions._metadata, clientOptions.tunnel, client.getDsn(), client.getDataCollectionOptions().userInfo);
    _getBufferMap().set(client, []);
    client.emit("flushMetrics");
    client.sendEnvelope(envelope);
}
function _INTERNAL_getMetricBuffer(client) {
    return _getBufferMap().get(client);
}
function _getBufferMap() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalSingleton"])("clientToMetricBufferMap", ()=>/* @__PURE__ */ new WeakMap());
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/metrics/public-api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "count",
    ()=>count,
    "distribution",
    ()=>distribution,
    "gauge",
    ()=>gauge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/metrics/internal.js [app-client] (ecmascript)");
;
function captureMetric(type, name, value, options) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$internal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_INTERNAL_captureMetric"])({
        type,
        name,
        value,
        unit: options?.unit,
        attributes: options?.attributes
    }, {
        scope: options?.scope
    });
}
function count(name, value = 1, options) {
    captureMetric("counter", name, value, options);
}
function gauge(name, value, options) {
    captureMetric("gauge", name, value, options);
}
function distribution(name, value, options) {
    captureMetric("distribution", name, value, options);
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/metrics/public-api.js [app-client] (ecmascript) <export * as metrics>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "metrics",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$metrics$2f$public$2d$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/metrics/public-api.js [app-client] (ecmascript)");
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/scope.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Scope",
    ()=>Scope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/session.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/propagationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/randomSafeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/spanOnScope.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
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
const DEFAULT_MAX_BREADCRUMBS = 100;
class Scope {
    // NOTE: Any field which gets added here should get added not only to the constructor but also to the `clone` method.
    constructor(){
        this._notifyingListeners = false;
        this._scopeListeners = [];
        this._eventProcessors = [];
        this._breadcrumbs = [];
        this._attachments = [];
        this._user = {};
        this._tags = {};
        this._attributes = {};
        this._extra = {};
        this._contexts = {};
        this._sdkProcessingMetadata = {};
        this._propagationContext = {
            traceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(),
            sampleRand: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMathRandom"])()
        };
    }
    /**
   * Clone all data from this scope into a new scope.
   */ clone() {
        const newScope = new Scope();
        newScope._breadcrumbs = [
            ...this._breadcrumbs
        ];
        newScope._tags = {
            ...this._tags
        };
        newScope._attributes = {
            ...this._attributes
        };
        newScope._extra = {
            ...this._extra
        };
        newScope._contexts = {
            ...this._contexts
        };
        if (this._contexts.flags) {
            newScope._contexts.flags = {
                values: [
                    ...this._contexts.flags.values
                ]
            };
        }
        newScope._user = this._user;
        newScope._level = this._level;
        newScope._session = this._session;
        newScope._transactionName = this._transactionName;
        newScope._fingerprint = this._fingerprint;
        newScope._eventProcessors = [
            ...this._eventProcessors
        ];
        newScope._attachments = [
            ...this._attachments
        ];
        newScope._sdkProcessingMetadata = {
            ...this._sdkProcessingMetadata
        };
        newScope._propagationContext = {
            ...this._propagationContext
        };
        newScope._client = this._client;
        newScope._lastEventId = this._lastEventId;
        newScope._conversationId = this._conversationId;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setSpanForScope"])(newScope, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getSpanForScope"])(this));
        return newScope;
    }
    /**
   * Update the client assigned to this scope.
   * Note that not every scope will have a client assigned - isolation scopes & the global scope will generally not have a client,
   * as well as manually created scopes.
   */ setClient(client) {
        this._client = client;
    }
    /**
   * Set the ID of the last captured error event.
   * This is generally only captured on the isolation scope.
   */ setLastEventId(lastEventId) {
        this._lastEventId = lastEventId;
    }
    /**
   * Get the client assigned to this scope.
   */ getClient() {
        return this._client;
    }
    /**
   * Get the ID of the last captured error event.
   * This is generally only available on the isolation scope.
   */ lastEventId() {
        return this._lastEventId;
    }
    /**
   * @inheritDoc
   */ addScopeListener(callback) {
        this._scopeListeners.push(callback);
    }
    /**
   * Add an event processor that will be called before an event is sent.
   */ addEventProcessor(callback) {
        this._eventProcessors.push(callback);
        return this;
    }
    /**
   * Set the user for this scope.
   * Set to `null` to unset the user.
   */ setUser(user) {
        this._user = user || {
            email: void 0,
            id: void 0,
            ip_address: void 0,
            username: void 0
        };
        if (this._session) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$session$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSession"])(this._session, {
                user
            });
        }
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Get the user from this scope.
   */ getUser() {
        return this._user;
    }
    /**
   * Set the conversation ID for this scope.
   * Set to `null` to unset the conversation ID.
   */ setConversationId(conversationId) {
        this._conversationId = conversationId || void 0;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Set an object that will be merged into existing tags on the scope,
   * and will be sent as tags data with the event.
   */ setTags(tags) {
        this._tags = {
            ...this._tags,
            ...tags
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Set a single tag that will be sent as tags data with the event.
   */ setTag(key, value) {
        return this.setTags({
            [key]: value
        });
    }
    /**
   * Sets attributes onto the scope.
   *
   * These attributes are applied to logs, metrics and streamed spans.
   *
   * Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.
   *
   * @param newAttributes - The attributes to set on the scope, as key-value pairs.
   *
   * @example
   * ```typescript
   * scope.setAttributes({
   *   is_admin: true,
   *   payment_selection: 'credit_card',
   *   render_duration: 150,
   * });
   * ```
   */ setAttributes(newAttributes) {
        this._attributes = {
            ...this._attributes,
            ...newAttributes
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Sets an attribute onto the scope.
   *
   * These attributes are applied to logs, metrics and streamed spans.
   *
   * Supported attribute value types are `string`, `number`, `boolean`, `string[]`, `number[]` and `boolean[]`.
   *
   * @param key - The attribute key.
   * @param value - The attribute value.
   *
   * @example
   * ```typescript
   * scope.setAttribute('is_admin', true);
   * scope.setAttribute('render_duration', 150);
   * ```
   */ // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setAttribute(key, value) {
        return this.setAttributes({
            [key]: value
        });
    }
    /**
   * Removes the attribute with the given key from the scope.
   *
   * @param key - The attribute key.
   *
   * @example
   * ```typescript
   * scope.removeAttribute('is_admin');
   * ```
   */ removeAttribute(key) {
        if (key in this._attributes) {
            delete this._attributes[key];
            this._notifyScopeListeners();
        }
        return this;
    }
    /**
   * Set an object that will be merged into existing extra on the scope,
   * and will be sent as extra data with the event.
   */ setExtras(extras) {
        this._extra = {
            ...this._extra,
            ...extras
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Set a single key:value extra entry that will be sent as extra data with the event.
   */ setExtra(key, extra) {
        this._extra = {
            ...this._extra,
            [key]: extra
        };
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Sets the fingerprint on the scope to send with the events.
   * @param {string[]} fingerprint Fingerprint to group events in Sentry.
   */ setFingerprint(fingerprint) {
        this._fingerprint = fingerprint;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Sets the level on the scope for future events.
   */ setLevel(level) {
        this._level = level;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Sets the transaction name on the scope so that the name of e.g. taken server route or
   * the page location is attached to future events.
   *
   * IMPORTANT: Calling this function does NOT change the name of the currently active
   * root span. If you want to change the name of the active root span, use
   * `Sentry.updateSpanName(rootSpan, 'new name')` instead.
   *
   * By default, the SDK updates the scope's transaction name automatically on sensible
   * occasions, such as a page navigation or when handling a new request on the server.
   */ setTransactionName(name) {
        this._transactionName = name;
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Sets context data with the given name.
   * Data passed as context will be normalized. You can also pass `null` to unset the context.
   * Note that context data will not be merged - calling `setContext` will overwrite an existing context with the same key.
   */ setContext(key, context) {
        if (context === null) {
            delete this._contexts[key];
        } else {
            this._contexts[key] = context;
        }
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Set the session for the scope.
   */ setSession(session) {
        if (!session) {
            delete this._session;
        } else {
            this._session = session;
        }
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Get the session from the scope.
   */ getSession() {
        return this._session;
    }
    /**
   * Updates the scope with provided data. Can work in three variations:
   * - plain object containing updatable attributes
   * - Scope instance that'll extract the attributes from
   * - callback function that'll receive the current scope as an argument and allow for modifications
   */ update(captureContext) {
        if (!captureContext) {
            return this;
        }
        const scopeToMerge = typeof captureContext === "function" ? captureContext(this) : captureContext;
        const scopeInstance = scopeToMerge instanceof Scope ? scopeToMerge.getScopeData() : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(scopeToMerge) ? captureContext : void 0;
        const { tags, attributes, extra, user, contexts, level, fingerprint = [], propagationContext, conversationId } = scopeInstance || {};
        this._tags = {
            ...this._tags,
            ...tags
        };
        this._attributes = {
            ...this._attributes,
            ...attributes
        };
        this._extra = {
            ...this._extra,
            ...extra
        };
        this._contexts = {
            ...this._contexts,
            ...contexts
        };
        if (user && Object.keys(user).length) {
            this._user = user;
        }
        if (level) {
            this._level = level;
        }
        if (fingerprint.length) {
            this._fingerprint = fingerprint;
        }
        if (propagationContext) {
            this._propagationContext = propagationContext;
        }
        if (conversationId) {
            this._conversationId = conversationId;
        }
        return this;
    }
    /**
   * Clears the current scope and resets its properties.
   * Note: The client will not be cleared.
   *
   * @deprecated This method will be removed in v11. To reset scope state, re-initialize the SDK or run
   * your code in a fresh scope via `withScope` instead.
   */ clear() {
        this._breadcrumbs = [];
        this._tags = {};
        this._attributes = {};
        this._extra = {};
        this._user = {};
        this._contexts = {};
        this._level = void 0;
        this._transactionName = void 0;
        this._fingerprint = void 0;
        this._session = void 0;
        this._conversationId = void 0;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_setSpanForScope"])(this, void 0);
        this._attachments = [];
        this.setPropagationContext({
            traceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(),
            sampleRand: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMathRandom"])()
        });
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Adds a breadcrumb to the scope.
   * By default, the last 100 breadcrumbs are kept.
   */ addBreadcrumb(breadcrumb, maxBreadcrumbs) {
        const maxCrumbs = typeof maxBreadcrumbs === "number" ? maxBreadcrumbs : DEFAULT_MAX_BREADCRUMBS;
        if (maxCrumbs <= 0) {
            return this;
        }
        const mergedBreadcrumb = {
            timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateTimestampInSeconds"])(),
            ...breadcrumb,
            // Breadcrumb messages can theoretically be infinitely large and they're held in memory so we truncate them not to leak (too much) memory
            message: breadcrumb.message ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncate"])(breadcrumb.message, 2048) : breadcrumb.message
        };
        this._breadcrumbs.push(mergedBreadcrumb);
        if (this._breadcrumbs.length > maxCrumbs) {
            this._breadcrumbs = this._breadcrumbs.slice(-maxCrumbs);
            this._client?.recordDroppedEvent("buffer_overflow", "log_item");
        }
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Get the last breadcrumb of the scope.
   */ getLastBreadcrumb() {
        return this._breadcrumbs[this._breadcrumbs.length - 1];
    }
    /**
   * Clear all breadcrumbs from the scope.
   */ clearBreadcrumbs() {
        this._breadcrumbs = [];
        this._notifyScopeListeners();
        return this;
    }
    /**
   * Add an attachment to the scope.
   */ addAttachment(attachment) {
        this._attachments.push(attachment);
        return this;
    }
    /**
   * Clear all attachments from the scope.
   */ clearAttachments() {
        this._attachments = [];
        return this;
    }
    /**
   * Get the data of this scope, which should be applied to an event during processing.
   */ getScopeData() {
        return {
            breadcrumbs: this._breadcrumbs,
            attachments: this._attachments,
            contexts: this._contexts,
            tags: this._tags,
            attributes: this._attributes,
            extra: this._extra,
            user: this._user,
            level: this._level,
            fingerprint: this._fingerprint || [],
            eventProcessors: this._eventProcessors,
            propagationContext: this._propagationContext,
            sdkProcessingMetadata: this._sdkProcessingMetadata,
            transactionName: this._transactionName,
            span: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getSpanForScope"])(this),
            conversationId: this._conversationId
        };
    }
    /**
   * Add data which will be accessible during event processing but won't get sent to Sentry.
   */ setSDKProcessingMetadata(newData) {
        this._sdkProcessingMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(this._sdkProcessingMetadata, newData, 2);
        return this;
    }
    /**
   * Add propagation context to the scope, used for distributed tracing
   */ setPropagationContext(context) {
        this._propagationContext = context;
        return this;
    }
    /**
   * Get propagation context from the scope, used for distributed tracing
   */ getPropagationContext() {
        return this._propagationContext;
    }
    /**
   * Capture an exception for this scope.
   *
   * @returns {string} The id of the captured Sentry event.
   */ captureException(exception, hint) {
        const eventId = hint?.event_id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
        if (!this._client) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].warn("No client configured on scope - will not capture exception!");
            return eventId;
        }
        const syntheticException = new Error("Sentry syntheticException");
        this._client.captureException(exception, {
            originalException: exception,
            syntheticException,
            ...hint,
            event_id: eventId
        }, this);
        return eventId;
    }
    /**
   * Capture a message for this scope.
   *
   * @returns {string} The id of the captured message.
   */ captureMessage(message, level, hint) {
        const eventId = hint?.event_id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
        if (!this._client) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].warn("No client configured on scope - will not capture message!");
            return eventId;
        }
        const syntheticException = hint?.syntheticException ?? new Error(message);
        this._client.captureMessage(message, level, {
            originalException: message,
            syntheticException,
            ...hint,
            event_id: eventId
        }, this);
        return eventId;
    }
    /**
   * Capture a Sentry event for this scope.
   *
   * @returns {string} The id of the captured event.
   */ captureEvent(event, hint) {
        const eventId = event.event_id || hint?.event_id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
        if (!this._client) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].warn("No client configured on scope - will not capture event!");
            return eventId;
        }
        this._client.captureEvent(event, {
            ...hint,
            event_id: eventId
        }, this);
        return eventId;
    }
    /**
   * This will be called on every set call.
   */ _notifyScopeListeners() {
        if (!this._notifyingListeners) {
            this._notifyingListeners = true;
            this._scopeListeners.forEach((callback)=>{
                callback(this);
            });
            this._notifyingListeners = false;
        }
    }
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GEN_AI_CONVERSATION_ID_ATTRIBUTE",
    ()=>GEN_AI_CONVERSATION_ID_ATTRIBUTE,
    "SEMANTIC_ATTRIBUTE_CACHE_HIT",
    ()=>SEMANTIC_ATTRIBUTE_CACHE_HIT,
    "SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE",
    ()=>SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE,
    "SEMANTIC_ATTRIBUTE_CACHE_KEY",
    ()=>SEMANTIC_ATTRIBUTE_CACHE_KEY,
    "SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME",
    ()=>SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME,
    "SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD",
    ()=>SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD,
    "SEMANTIC_ATTRIBUTE_PROFILE_ID",
    ()=>SEMANTIC_ATTRIBUTE_PROFILE_ID,
    "SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME,
    "SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT,
    "SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON,
    "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT,
    "SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE,
    "SEMANTIC_ATTRIBUTE_SENTRY_OP",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_OP,
    "SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN,
    "SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE,
    "SEMANTIC_ATTRIBUTE_SENTRY_RELEASE",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_RELEASE,
    "SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE,
    "SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS,
    "SEMANTIC_ATTRIBUTE_SENTRY_SDK_NAME",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_SDK_NAME,
    "SEMANTIC_ATTRIBUTE_SENTRY_SDK_VERSION",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_SDK_VERSION,
    "SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_ID",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_ID,
    "SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_NAME",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_NAME,
    "SEMANTIC_ATTRIBUTE_SENTRY_SOURCE",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_SOURCE,
    "SEMANTIC_ATTRIBUTE_SENTRY_STATUS_MESSAGE",
    ()=>SEMANTIC_ATTRIBUTE_SENTRY_STATUS_MESSAGE,
    "SEMANTIC_ATTRIBUTE_URL_FULL",
    ()=>SEMANTIC_ATTRIBUTE_URL_FULL,
    "SEMANTIC_ATTRIBUTE_USER_EMAIL",
    ()=>SEMANTIC_ATTRIBUTE_USER_EMAIL,
    "SEMANTIC_ATTRIBUTE_USER_ID",
    ()=>SEMANTIC_ATTRIBUTE_USER_ID,
    "SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS",
    ()=>SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS,
    "SEMANTIC_ATTRIBUTE_USER_USERNAME",
    ()=>SEMANTIC_ATTRIBUTE_USER_USERNAME,
    "SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE",
    ()=>SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE
]);
const SEMANTIC_ATTRIBUTE_SENTRY_SOURCE = "sentry.source";
const SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE = "sentry.sample_rate";
const SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE = "sentry.previous_trace_sample_rate";
const SEMANTIC_ATTRIBUTE_SENTRY_OP = "sentry.op";
const SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN = "sentry.origin";
const SEMANTIC_ATTRIBUTE_SENTRY_STATUS_MESSAGE = "sentry.status.message";
const SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON = "sentry.idle_span_finish_reason";
const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT = "sentry.measurement_unit";
const SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE = "sentry.measurement_value";
const SEMANTIC_ATTRIBUTE_SENTRY_RELEASE = "sentry.release";
const SEMANTIC_ATTRIBUTE_SENTRY_ENVIRONMENT = "sentry.environment";
const SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_NAME = "sentry.segment.name";
const SEMANTIC_ATTRIBUTE_SENTRY_SEGMENT_ID = "sentry.segment.id";
const SEMANTIC_ATTRIBUTE_SENTRY_SDK_NAME = "sentry.sdk.name";
const SEMANTIC_ATTRIBUTE_SENTRY_SDK_VERSION = "sentry.sdk.version";
const SEMANTIC_ATTRIBUTE_SENTRY_SDK_INTEGRATIONS = "sentry.sdk.integrations";
const SEMANTIC_ATTRIBUTE_USER_ID = "user.id";
const SEMANTIC_ATTRIBUTE_USER_EMAIL = "user.email";
const SEMANTIC_ATTRIBUTE_USER_IP_ADDRESS = "user.ip_address";
const SEMANTIC_ATTRIBUTE_USER_USERNAME = "user.name";
const SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME = "sentry.custom_span_name";
const SEMANTIC_ATTRIBUTE_PROFILE_ID = "sentry.profile_id";
const SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME = "sentry.exclusive_time";
const SEMANTIC_ATTRIBUTE_CACHE_HIT = "cache.hit";
const SEMANTIC_ATTRIBUTE_CACHE_KEY = "cache.key";
const SEMANTIC_ATTRIBUTE_CACHE_ITEM_SIZE = "cache.item_size";
const SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD = "http.request.method";
const SEMANTIC_ATTRIBUTE_URL_FULL = "url.full";
const SEMANTIC_LINK_ATTRIBUTE_LINK_TYPE = "sentry.link.type";
const GEN_AI_CONVERSATION_ID_ATTRIBUTE = "gen_ai.conversation.id";
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/session.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeSession",
    ()=>closeSession,
    "makeSession",
    ()=>makeSession,
    "updateSession",
    ()=>updateSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/misc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
;
;
function makeSession(context) {
    const startingTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
    const session = {
        sid: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])(),
        init: true,
        timestamp: startingTime,
        started: startingTime,
        duration: 0,
        status: "ok",
        errors: 0,
        ignoreDuration: false,
        toJSON: ()=>sessionToJSON(session)
    };
    if (context) {
        updateSession(session, context);
    }
    return session;
}
function updateSession(session, context = {}) {
    if (context.user) {
        if (!session.ipAddress && context.user.ip_address) {
            session.ipAddress = context.user.ip_address;
        }
        if (!session.did && !context.did) {
            session.did = context.user.id || context.user.email || context.user.username;
        }
    }
    session.timestamp = context.timestamp || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
    if (context.abnormal_mechanism) {
        session.abnormal_mechanism = context.abnormal_mechanism;
    }
    if (context.ignoreDuration) {
        session.ignoreDuration = context.ignoreDuration;
    }
    if (context.sid) {
        session.sid = context.sid.length === 32 ? context.sid : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
    }
    if (context.init !== void 0) {
        session.init = context.init;
    }
    if (!session.did && context.did) {
        session.did = `${context.did}`;
    }
    if (typeof context.started === "number") {
        session.started = context.started;
    }
    if (session.ignoreDuration) {
        session.duration = void 0;
    } else if (typeof context.duration === "number") {
        session.duration = context.duration;
    } else {
        const duration = session.timestamp - session.started;
        session.duration = duration >= 0 ? duration : 0;
    }
    if (context.release) {
        session.release = context.release;
    }
    if (context.environment) {
        session.environment = context.environment;
    }
    if (!session.ipAddress && context.ipAddress) {
        session.ipAddress = context.ipAddress;
    }
    if (!session.userAgent && context.userAgent) {
        session.userAgent = context.userAgent;
    }
    if (typeof context.errors === "number") {
        session.errors = context.errors;
    }
    if (context.status) {
        session.status = context.status;
    }
}
function closeSession(session, status) {
    let context = {};
    if (status) {
        context = {
            status
        };
    } else if (session.status === "ok") {
        context = {
            status: "exited"
        };
    }
    updateSession(session, context);
}
function sessionToJSON(session) {
    return {
        sid: `${session.sid}`,
        init: session.init,
        // Make sure that sec is converted to ms for date constructor
        started: new Date(session.started * 1e3).toISOString(),
        timestamp: new Date(session.timestamp * 1e3).toISOString(),
        status: session.status,
        errors: session.errors,
        did: typeof session.did === "number" || typeof session.did === "string" ? `${session.did}` : void 0,
        duration: session.duration,
        abnormal_mechanism: session.abnormal_mechanism,
        attrs: {
            release: session.release,
            environment: session.environment,
            ip_address: session.ipAddress,
            user_agent: session.userAgent
        }
    };
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "freezeDscOnSpan",
    ()=>freezeDscOnSpan,
    "getDynamicSamplingContextFromClient",
    ()=>getDynamicSamplingContextFromClient,
    "getDynamicSamplingContextFromScope",
    ()=>getDynamicSamplingContextFromScope,
    "getDynamicSamplingContextFromSpan",
    ()=>getDynamicSamplingContextFromSpan,
    "spanToBaggageHeader",
    ()=>spanToBaggageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/baggage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/dsn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/tracing/utils.js [app-client] (ecmascript)");
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
const FROZEN_DSC_FIELD = "_frozenDsc";
function freezeDscOnSpan(span, dsc) {
    const spanWithMaybeDsc = span;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(spanWithMaybeDsc, FROZEN_DSC_FIELD, dsc);
}
function getDynamicSamplingContextFromClient(trace_id, client) {
    const options = client.getOptions();
    const { publicKey: public_key } = client.getDsn() || {};
    const dsc = {
        environment: options.environment || __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_ENVIRONMENT"],
        release: options.release,
        public_key,
        trace_id,
        org_id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractOrgIdFromClient"])(client)
    };
    client.emit("createDsc", dsc);
    return dsc;
}
function getDynamicSamplingContextFromScope(client, scope) {
    const propagationContext = scope.getPropagationContext();
    return propagationContext.dsc || getDynamicSamplingContextFromClient(propagationContext.traceId, client);
}
function getDynamicSamplingContextFromSpan(span) {
    const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])();
    if (!client) {
        return {};
    }
    const rootSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(span);
    const rootSpanJson = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(rootSpan);
    const rootSpanAttributes = rootSpanJson.data;
    const traceState = rootSpan.spanContext().traceState;
    const rootSpanSampleRate = traceState?.get("sentry.sample_rate") ?? rootSpanAttributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SAMPLE_RATE"]] ?? rootSpanAttributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_PREVIOUS_TRACE_SAMPLE_RATE"]];
    function applyLocalSampleRateToDsc(dsc2) {
        if (typeof rootSpanSampleRate === "number" || typeof rootSpanSampleRate === "string") {
            dsc2.sample_rate = `${rootSpanSampleRate}`;
        }
        return dsc2;
    }
    const frozenDsc = rootSpan[FROZEN_DSC_FIELD];
    if (frozenDsc) {
        return applyLocalSampleRateToDsc(frozenDsc);
    }
    const isNonRecordingRoot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$sentryNonRecordingSpan$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanIsNonRecordingSpan"])(rootSpan);
    const isIgnoredRoot = isNonRecordingRoot && rootSpan.dropReason === "ignored";
    if (isNonRecordingRoot && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSpansEnabled"])(client.getOptions()) || isIgnoredRoot)) {
        const capturedScope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCapturedScopesOnSpan"])(rootSpan).scope;
        if (capturedScope) {
            const dsc2 = {
                ...getDynamicSamplingContextFromScope(client, capturedScope)
            };
            if (isIgnoredRoot) {
                dsc2.sampled = "false";
            }
            return applyLocalSampleRateToDsc(dsc2);
        }
    }
    const traceStateDsc = traceState?.get("sentry.dsc");
    const dscOnTraceState = traceStateDsc && (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baggageHeaderToDynamicSamplingContext"])(traceStateDsc);
    if (dscOnTraceState) {
        return applyLocalSampleRateToDsc(dscOnTraceState);
    }
    const dsc = getDynamicSamplingContextFromClient(span.spanContext().traceId, client);
    const source = rootSpanAttributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]] ?? rootSpanAttributes["sentry.segment.name.source"];
    const name = rootSpanJson.description;
    if (source !== "url" && name) {
        dsc.transaction = name;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$hasSpansEnabled$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSpansEnabled"])()) {
        dsc.sampled = String((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanIsSampled"])(rootSpan));
        dsc.sample_rand = // The Sentry OTEL SpanSampler takes care of writing the sample rand on the root span
        traceState?.get("sentry.sample_rand") ?? // On all other platforms we can actually get the scopes from a root span (we use this as a fallback)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCapturedScopesOnSpan"])(rootSpan).scope?.getPropagationContext().sampleRand.toString();
    }
    applyLocalSampleRateToDsc(dsc);
    client.emit("createDsc", dsc, rootSpan);
    return dsc;
}
function spanToBaggageHeader(span) {
    const dsc = getDynamicSamplingContextFromSpan(span);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dynamicSamplingContextToSentryBaggageHeader"])(dsc);
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/tracing/sentryNonRecordingSpan.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SentryNonRecordingSpan",
    ()=>SentryNonRecordingSpan,
    "spanIsNonRecordingSpan",
    ()=>spanIsNonRecordingSpan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/propagationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
;
;
;
const NON_RECORDING_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.nonRecordingSpan");
class SentryNonRecordingSpan {
    constructor(spanContext = {}){
        this._traceId = spanContext.traceId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])();
        this._spanId = spanContext.spanId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSpanId"])();
        this.dropReason = spanContext.dropReason;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(this, NON_RECORDING_SPAN_FIELD, true);
    }
    /** @inheritdoc */ spanContext() {
        return {
            spanId: this._spanId,
            traceId: this._traceId,
            traceFlags: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TRACE_FLAG_NONE"]
        };
    }
    /** @inheritdoc */ end(_timestamp) {}
    /** @inheritdoc */ setAttribute(_key, _value) {
        return this;
    }
    /** @inheritdoc */ setAttributes(_values) {
        return this;
    }
    /** @inheritdoc */ setStatus(_status) {
        return this;
    }
    /** @inheritdoc */ updateName(_name) {
        return this;
    }
    /** @inheritdoc */ isRecording() {
        return false;
    }
    /** @inheritdoc */ addEvent(_name, _attributesOrStartTime, _startTime) {
        return this;
    }
    /** @inheritDoc */ addLink(_link) {
        return this;
    }
    /** @inheritDoc */ addLinks(_links) {
        return this;
    }
    /**
   * This should generally not be used,
   * but we need it for being compliant with the OTEL Span interface.
   *
   * @hidden
   * @internal
   */ recordException(_exception, _time) {}
}
function spanIsNonRecordingSpan(span) {
    return !!span && span[NON_RECORDING_SPAN_FIELD] === true;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/tracing/spanstatus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SPAN_STATUS_ERROR",
    ()=>SPAN_STATUS_ERROR,
    "SPAN_STATUS_OK",
    ()=>SPAN_STATUS_OK,
    "SPAN_STATUS_UNSET",
    ()=>SPAN_STATUS_UNSET,
    "getSpanStatusFromHttpCode",
    ()=>getSpanStatusFromHttpCode,
    "setHttpStatus",
    ()=>setHttpStatus
]);
const SPAN_STATUS_UNSET = 0;
const SPAN_STATUS_OK = 1;
const SPAN_STATUS_ERROR = 2;
function getSpanStatusFromHttpCode(httpStatus) {
    if (httpStatus < 400 && httpStatus >= 100) {
        return {
            code: SPAN_STATUS_OK
        };
    }
    if (httpStatus >= 400 && httpStatus < 500) {
        switch(httpStatus){
            case 401:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "unauthenticated"
                };
            case 403:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "permission_denied"
                };
            case 404:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "not_found"
                };
            case 409:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "already_exists"
                };
            case 413:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "failed_precondition"
                };
            case 429:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "resource_exhausted"
                };
            case 499:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "cancelled"
                };
            default:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "invalid_argument"
                };
        }
    }
    if (httpStatus >= 500 && httpStatus < 600) {
        switch(httpStatus){
            case 501:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "unimplemented"
                };
            case 503:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "unavailable"
                };
            case 504:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "deadline_exceeded"
                };
            default:
                return {
                    code: SPAN_STATUS_ERROR,
                    message: "internal_error"
                };
        }
    }
    return {
        code: SPAN_STATUS_ERROR,
        message: "internal_error"
    };
}
function setHttpStatus(span, httpStatus) {
    span.setAttribute("http.response.status_code", httpStatus);
    const spanStatus = getSpanStatusFromHttpCode(httpStatus);
    if (spanStatus.message !== "unknown_error") {
        span.setStatus(spanStatus);
    }
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/tracing/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCapturedScopesOnSpan",
    ()=>getCapturedScopesOnSpan,
    "markSpanAsTracerProviderSpan",
    ()=>markSpanAsTracerProviderSpan,
    "markSpanForOtelSourceInference",
    ()=>markSpanForOtelSourceInference,
    "markSpanSourceAsExplicit",
    ()=>markSpanSourceAsExplicit,
    "setCapturedScopesOnSpan",
    ()=>setCapturedScopesOnSpan,
    "spanIsTracerProviderSpan",
    ()=>spanIsTracerProviderSpan,
    "spanShouldInferOtelSource",
    ()=>spanShouldInferOtelSource,
    "spanSourceWasExplicitlySet",
    ()=>spanSourceWasExplicitlySet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$weakRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/weakRef.js [app-client] (ecmascript)");
;
;
const SCOPE_ON_START_SPAN_FIELD = "_sentryScope";
const ISOLATION_SCOPE_ON_START_SPAN_FIELD = "_sentryIsolationScope";
const OTEL_SOURCE_INFERENCE_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.otelSourceInference");
const OTEL_SOURCE_EXPLICITLY_SET_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.otelSourceExplicitlySet");
const TRACER_PROVIDER_SPAN_FIELD = /* @__PURE__ */ Symbol.for("sentry.tracerProviderSpan");
function setCapturedScopesOnSpan(span, scope, isolationScope) {
    if (span) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(span, ISOLATION_SCOPE_ON_START_SPAN_FIELD, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$weakRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeWeakRef"])(isolationScope));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(span, SCOPE_ON_START_SPAN_FIELD, scope);
    }
}
function getCapturedScopesOnSpan(span) {
    const spanWithScopes = span;
    return {
        scope: spanWithScopes[SCOPE_ON_START_SPAN_FIELD],
        isolationScope: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$weakRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derefWeakRef"])(spanWithScopes[ISOLATION_SCOPE_ON_START_SPAN_FIELD])
    };
}
function markSpanForOtelSourceInference(span) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(span, OTEL_SOURCE_INFERENCE_SPAN_FIELD, true);
}
function spanShouldInferOtelSource(span) {
    return span[OTEL_SOURCE_INFERENCE_SPAN_FIELD] === true;
}
function markSpanSourceAsExplicit(span) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(span, OTEL_SOURCE_EXPLICITLY_SET_SPAN_FIELD, true);
}
function spanSourceWasExplicitlySet(span) {
    return span[OTEL_SOURCE_EXPLICITLY_SET_SPAN_FIELD] === true;
}
function markSpanAsTracerProviderSpan(span) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(span, TRACER_PROVIDER_SPAN_FIELD, true);
}
function spanIsTracerProviderSpan(span) {
    return span[TRACER_PROVIDER_SPAN_FIELD] === true;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/baggage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_BAGGAGE_STRING_LENGTH",
    ()=>MAX_BAGGAGE_STRING_LENGTH,
    "SENTRY_BAGGAGE_KEY_PREFIX",
    ()=>SENTRY_BAGGAGE_KEY_PREFIX,
    "SENTRY_BAGGAGE_KEY_PREFIX_REGEX",
    ()=>SENTRY_BAGGAGE_KEY_PREFIX_REGEX,
    "baggageHeaderToDynamicSamplingContext",
    ()=>baggageHeaderToDynamicSamplingContext,
    "dynamicSamplingContextToSentryBaggageHeader",
    ()=>dynamicSamplingContextToSentryBaggageHeader,
    "mergeBaggageHeaders",
    ()=>mergeBaggageHeaders,
    "objectToBaggageHeader",
    ()=>objectToBaggageHeader,
    "parseBaggageHeader",
    ()=>parseBaggageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)");
;
;
;
const SENTRY_BAGGAGE_KEY_PREFIX = "sentry-";
const SENTRY_BAGGAGE_KEY_PREFIX_REGEX = /^sentry-/;
const MAX_BAGGAGE_STRING_LENGTH = 8192;
function baggageHeaderToDynamicSamplingContext(baggageHeader) {
    const baggageObject = parseBaggageHeader(baggageHeader);
    if (!baggageObject) {
        return void 0;
    }
    const dynamicSamplingContext = Object.entries(baggageObject).reduce((acc, [key, value])=>{
        if (key.startsWith(SENTRY_BAGGAGE_KEY_PREFIX)) {
            const nonPrefixedKey = key.slice(SENTRY_BAGGAGE_KEY_PREFIX.length);
            acc[nonPrefixedKey] = value;
        }
        return acc;
    }, {});
    if (Object.keys(dynamicSamplingContext).length > 0) {
        return dynamicSamplingContext;
    } else {
        return void 0;
    }
}
function dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContext) {
    if (!dynamicSamplingContext) {
        return void 0;
    }
    const sentryPrefixedDSC = Object.entries(dynamicSamplingContext).reduce((acc, [dscKey, dscValue])=>{
        if (dscValue) {
            acc[`${SENTRY_BAGGAGE_KEY_PREFIX}${dscKey}`] = dscValue;
        }
        return acc;
    }, {});
    return objectToBaggageHeader(sentryPrefixedDSC);
}
function parseBaggageHeader(baggageHeader) {
    if (!baggageHeader || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(baggageHeader) && !Array.isArray(baggageHeader)) {
        return void 0;
    }
    if (Array.isArray(baggageHeader)) {
        return baggageHeader.reduce((acc, curr)=>{
            const currBaggageObject = baggageHeaderToObject(curr);
            Object.entries(currBaggageObject).forEach(([key, value])=>{
                acc[key] = value;
            });
            return acc;
        }, {});
    }
    return baggageHeaderToObject(baggageHeader);
}
function baggageHeaderToObject(baggageHeader) {
    return baggageHeader.split(",").map((baggageEntry)=>{
        const eqIdx = baggageEntry.indexOf("=");
        if (eqIdx === -1) {
            return [];
        }
        const key = baggageEntry.slice(0, eqIdx);
        const value = baggageEntry.slice(eqIdx + 1);
        return [
            key,
            value
        ].map((keyOrValue)=>{
            try {
                return decodeURIComponent(keyOrValue.trim());
            } catch  {
                return;
            }
        });
    }).reduce((acc, [key, value])=>{
        if (key && value) {
            acc[key] = value;
        }
        return acc;
    }, {});
}
function objectToBaggageHeader(object) {
    if (Object.keys(object).length === 0) {
        return void 0;
    }
    return Object.entries(object).reduce((baggageHeader, [objectKey, objectValue], currentIndex)=>{
        const baggageEntry = `${encodeURIComponent(objectKey)}=${encodeURIComponent(objectValue)}`;
        const newBaggageHeader = currentIndex === 0 ? baggageEntry : `${baggageHeader},${baggageEntry}`;
        if (newBaggageHeader.length > MAX_BAGGAGE_STRING_LENGTH) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].warn(`Not adding key: ${objectKey} with val: ${objectValue} to baggage header due to exceeding baggage size limits.`);
            return baggageHeader;
        } else {
            return newBaggageHeader;
        }
    }, "");
}
function mergeBaggageHeaders(existing, incoming) {
    if (!existing) {
        return incoming;
    }
    const existingEntries = parseBaggageHeader(existing);
    const incomingEntries = parseBaggageHeader(incoming);
    if (!incomingEntries) {
        return existing;
    }
    const merged = {};
    let hasNewSentryEntries = false;
    const newSentryEntries = {};
    const newNonSentryEntries = {};
    for (const [key, value] of Object.entries(incomingEntries)){
        if (key.startsWith(SENTRY_BAGGAGE_KEY_PREFIX)) {
            newSentryEntries[key] = value;
            hasNewSentryEntries = true;
        } else {
            newNonSentryEntries[key] = value;
        }
    }
    if (existingEntries) {
        for (const [key, value] of Object.entries(existingEntries)){
            if (!hasNewSentryEntries || !key.startsWith(SENTRY_BAGGAGE_KEY_PREFIX)) {
                merged[key] = value;
            }
        }
    }
    if (hasNewSentryEntries) {
        Object.assign(merged, newSentryEntries);
    }
    for (const [key, value] of Object.entries(newNonSentryEntries)){
        merged[key] ?? (merged[key] = value);
    }
    return objectToBaggageHeader(merged);
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/chain-and-copy-promiselike.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chainAndCopyPromiseLike",
    ()=>chainAndCopyPromiseLike
]);
const isActualPromise = (p)=>p instanceof Promise && !p[kChainedCopy];
const kChainedCopy = /* @__PURE__ */ Symbol("chained PromiseLike");
const chainAndCopyPromiseLike = (original, onSuccess, onError)=>{
    const chained = original.then((value)=>{
        onSuccess(value);
        return value;
    }, (err)=>{
        onError(err);
        throw err;
    });
    return isActualPromise(chained) && isActualPromise(original) ? chained : copyProps(original, chained);
};
const copyProps = (original, chained)=>{
    if (!chained) return original;
    let mutated = false;
    for(const key in original){
        if (key in chained) continue;
        mutated = true;
        const value = original[key];
        if (typeof value === "function") {
            Object.defineProperty(chained, key, {
                value: (...args)=>value.apply(original, args),
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            chained[key] = value;
        }
    }
    if (mutated) Object.assign(chained, {
        [kChainedCopy]: true
    });
    return chained;
};
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONSOLE_LEVELS",
    ()=>CONSOLE_LEVELS,
    "consoleSandbox",
    ()=>consoleSandbox,
    "debug",
    ()=>debug,
    "originalConsoleMethods",
    ()=>originalConsoleMethods
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)");
;
;
;
const CONSOLE_LEVELS = [
    "debug",
    "info",
    "warn",
    "error",
    "log",
    "assert",
    "trace"
];
const PREFIX = "Sentry Logger ";
const originalConsoleMethods = {};
function consoleSandbox(callback) {
    if (!("console" in __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"])) {
        return callback();
    }
    const console = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].console;
    const wrappedFuncs = {};
    const wrappedLevels = Object.keys(originalConsoleMethods);
    wrappedLevels.forEach((level)=>{
        const originalConsoleMethod = originalConsoleMethods[level];
        wrappedFuncs[level] = console[level];
        console[level] = originalConsoleMethod;
    });
    try {
        return callback();
    } finally{
        wrappedLevels.forEach((level)=>{
            console[level] = wrappedFuncs[level];
        });
    }
}
function enable() {
    _getLoggerSettings().enabled = true;
}
function disable() {
    _getLoggerSettings().enabled = false;
}
function isEnabled() {
    return _getLoggerSettings().enabled;
}
function log(...args) {
    _maybeLog("log", ...args);
}
function warn(...args) {
    _maybeLog("warn", ...args);
}
function error(...args) {
    _maybeLog("error", ...args);
}
function _maybeLog(level, ...args) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
        return;
    }
    if (isEnabled()) {
        consoleSandbox(()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].console[level](`${PREFIX}[${level}]:`, ...args);
        });
    }
}
function _getLoggerSettings() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
        return {
            enabled: false
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalSingleton"])("loggerSettings", ()=>({
            enabled: false
        }));
}
const debug = {
    /** Enable logging. */ enable,
    /** Disable logging. */ disable,
    /** Check if logging is enabled. */ isEnabled,
    /** Log a message. */ log,
    /** Log a warning. */ warn,
    /** Log an error. */ error
};
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/dsn.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dsnFromString",
    ()=>dsnFromString,
    "dsnToString",
    ()=>dsnToString,
    "extractOrgIdFromClient",
    ()=>extractOrgIdFromClient,
    "extractOrgIdFromDsnHost",
    ()=>extractOrgIdFromDsnHost,
    "makeDsn",
    ()=>makeDsn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
;
;
const ORG_ID_REGEX = /^o(\d+)\./;
const DSN_REGEX = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)((?:\[[:.%\w]+\]|[\w.-]+))(?::(\d+))?\/(.+)/;
function isValidProtocol(protocol) {
    return protocol === "http" || protocol === "https";
}
function dsnToString(dsn, withPassword = false) {
    const { host, path, pass, port, projectId, protocol, publicKey } = dsn;
    return `${protocol}://${publicKey}${withPassword && pass ? `:${pass}` : ""}@${host}${port ? `:${port}` : ""}/${path ? `${path}/` : path}${projectId}`;
}
function dsnFromString(str) {
    const match = DSN_REGEX.exec(str);
    if (!match) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleSandbox"])(()=>{
            console.error(`Invalid Sentry Dsn: ${str}`);
        });
        return void 0;
    }
    const [protocol, publicKey, pass = "", host = "", port = "", lastPath = ""] = match.slice(1);
    let path = "";
    let projectId = lastPath;
    const split = projectId.split("/");
    if (split.length > 1) {
        path = split.slice(0, -1).join("/");
        projectId = split.pop();
    }
    if (projectId) {
        const projectMatch = projectId.match(/^\d+/);
        if (projectMatch) {
            projectId = projectMatch[0];
        }
    }
    return dsnFromComponents({
        host,
        pass,
        path,
        projectId,
        port,
        protocol,
        publicKey
    });
}
function dsnFromComponents(components) {
    return {
        protocol: components.protocol,
        publicKey: components.publicKey || "",
        pass: components.pass || "",
        host: components.host,
        port: components.port || "",
        path: components.path || "",
        projectId: components.projectId
    };
}
function validateDsn(dsn) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"]) {
        return true;
    }
    const { port, projectId, protocol } = dsn;
    const requiredComponents = [
        "protocol",
        "publicKey",
        "host",
        "projectId"
    ];
    const hasMissingRequiredComponent = requiredComponents.find((component)=>{
        if (!dsn[component]) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error(`Invalid Sentry Dsn: ${component} missing`);
            return true;
        }
        return false;
    });
    if (hasMissingRequiredComponent) {
        return false;
    }
    if (!projectId.match(/^\d+$/)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error(`Invalid Sentry Dsn: Invalid projectId ${projectId}`);
        return false;
    }
    if (!isValidProtocol(protocol)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error(`Invalid Sentry Dsn: Invalid protocol ${protocol}`);
        return false;
    }
    if (port && isNaN(parseInt(port, 10))) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].error(`Invalid Sentry Dsn: Invalid port ${port}`);
        return false;
    }
    return true;
}
function extractOrgIdFromDsnHost(host) {
    const match = host.match(ORG_ID_REGEX);
    return match?.[1];
}
function extractOrgIdFromClient(client) {
    const options = client.getOptions();
    const { host } = client.getDsn() || {};
    let org_id;
    if (options.orgId) {
        org_id = String(options.orgId);
    } else if (host) {
        org_id = extractOrgIdFromDsnHost(host);
    }
    return org_id;
}
function makeDsn(from) {
    const components = typeof from === "string" ? dsnFromString(from) : dsnFromComponents(from);
    if (!components || !validateDsn(components)) {
        return void 0;
    }
    return components;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/env.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSDKSource",
    ()=>getSDKSource,
    "isBrowserBundle",
    ()=>isBrowserBundle
]);
function isBrowserBundle() {
    return typeof __SENTRY_BROWSER_BUNDLE__ !== "undefined" && !!__SENTRY_BROWSER_BUNDLE__;
}
function getSDKSource() {
    /*! __SENTRY_SDK_SOURCE__ */ return "npm";
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/envelope.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addItemToEnvelope",
    ()=>addItemToEnvelope,
    "createAttachmentEnvelopeItem",
    ()=>createAttachmentEnvelopeItem,
    "createEnvelope",
    ()=>createEnvelope,
    "createEventEnvelopeHeaders",
    ()=>createEventEnvelopeHeaders,
    "createSpanEnvelopeItem",
    ()=>createSpanEnvelopeItem,
    "envelopeContainsItemType",
    ()=>envelopeContainsItemType,
    "envelopeItemTypeToDataCategory",
    ()=>envelopeItemTypeToDataCategory,
    "forEachEnvelopeItem",
    ()=>forEachEnvelopeItem,
    "getSdkMetadataForEnvelopeHeader",
    ()=>getSdkMetadataForEnvelopeHeader,
    "parseEnvelope",
    ()=>parseEnvelope,
    "serializeEnvelope",
    ()=>serializeEnvelope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/dsn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/normalize.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/randomSafeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)");
;
;
;
;
;
function createEnvelope(headers, items = []) {
    return [
        headers,
        items
    ];
}
function addItemToEnvelope(envelope, newItem) {
    const [headers, items] = envelope;
    return [
        headers,
        [
            ...items,
            newItem
        ]
    ];
}
function forEachEnvelopeItem(envelope, callback) {
    const envelopeItems = envelope[1];
    for (const envelopeItem of envelopeItems){
        const envelopeItemType = envelopeItem[0].type;
        const result = callback(envelopeItem, envelopeItemType);
        if (result) {
            return true;
        }
    }
    return false;
}
function envelopeContainsItemType(envelope, types) {
    return forEachEnvelopeItem(envelope, (_, type)=>types.includes(type));
}
function encodeUTF8(input) {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentryCarrier"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]);
    return carrier.encodePolyfill ? carrier.encodePolyfill(input) : new TextEncoder().encode(input);
}
function decodeUTF8(input) {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSentryCarrier"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"]);
    return carrier.decodePolyfill ? carrier.decodePolyfill(input) : new TextDecoder().decode(input);
}
function serializeEnvelope(envelope) {
    const [envHeaders, items] = envelope;
    let parts = JSON.stringify(envHeaders);
    function append(next) {
        if (typeof parts === "string") {
            parts = typeof next === "string" ? parts + next : [
                encodeUTF8(parts),
                next
            ];
        } else {
            parts.push(typeof next === "string" ? encodeUTF8(next) : next);
        }
    }
    for (const item of items){
        const [itemHeaders, payload] = item;
        append(`
${JSON.stringify(itemHeaders)}
`);
        if (typeof payload === "string" || payload instanceof Uint8Array) {
            append(payload);
        } else {
            let stringifiedPayload;
            try {
                stringifiedPayload = JSON.stringify(payload);
            } catch  {
                stringifiedPayload = JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalize"])(payload));
            }
            append(stringifiedPayload);
        }
    }
    return typeof parts === "string" ? parts : concatBuffers(parts);
}
function concatBuffers(buffers) {
    const totalLength = buffers.reduce((acc, buf)=>acc + buf.length, 0);
    const merged = new Uint8Array(totalLength);
    let offset = 0;
    for (const buffer of buffers){
        merged.set(buffer, offset);
        offset += buffer.length;
    }
    return merged;
}
function parseEnvelope(env) {
    let buffer = typeof env === "string" ? encodeUTF8(env) : env;
    function readBinary(length) {
        const bin = buffer.subarray(0, length);
        buffer = buffer.subarray(length + 1);
        return bin;
    }
    function readJson() {
        let i = buffer.indexOf(10);
        if (i < 0) {
            i = buffer.length;
        }
        return JSON.parse(decodeUTF8(readBinary(i)));
    }
    const envelopeHeader = readJson();
    const items = [];
    while(buffer.length){
        const itemHeader = readJson();
        const binaryLength = typeof itemHeader.length === "number" ? itemHeader.length : void 0;
        items.push([
            itemHeader,
            binaryLength ? readBinary(binaryLength) : readJson()
        ]);
    }
    return [
        envelopeHeader,
        items
    ];
}
function createSpanEnvelopeItem(spanJson) {
    const spanHeaders = {
        type: "span"
    };
    return [
        spanHeaders,
        spanJson
    ];
}
function createAttachmentEnvelopeItem(attachment) {
    const buffer = typeof attachment.data === "string" ? encodeUTF8(attachment.data) : attachment.data;
    return [
        {
            type: "attachment",
            length: buffer.length,
            filename: attachment.filename,
            content_type: attachment.contentType,
            attachment_type: attachment.attachmentType
        },
        buffer
    ];
}
const DATA_CATEGORY_OVERRIDES = {
    sessions: "session",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    raw_security: "security",
    log: "log_item",
    trace_metric: "metric"
};
function _isOverriddenType(type) {
    return type in DATA_CATEGORY_OVERRIDES;
}
function envelopeItemTypeToDataCategory(type) {
    return _isOverriddenType(type) ? DATA_CATEGORY_OVERRIDES[type] : type;
}
function getSdkMetadataForEnvelopeHeader(metadataOrEvent) {
    if (!metadataOrEvent?.sdk) {
        return;
    }
    const { name, version } = metadataOrEvent.sdk;
    return {
        name,
        version
    };
}
function createEventEnvelopeHeaders(event, sdkInfo, tunnel, dsn) {
    const dynamicSamplingContext = event.sdkProcessingMetadata?.dynamicSamplingContext;
    return {
        event_id: event.event_id,
        sent_at: new Date((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeDateNow"])()).toISOString(),
        ...sdkInfo && {
            sdk: sdkInfo
        },
        ...!!tunnel && dsn && {
            dsn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dsnToString"])(dsn)
        },
        ...dynamicSamplingContext && {
            trace: dynamicSamplingContext
        }
    };
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/hasSpansEnabled.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasSpansEnabled",
    ()=>hasSpansEnabled
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
;
function hasSpansEnabled(maybeOptions) {
    if (typeof __SENTRY_TRACING__ === "boolean" && !__SENTRY_TRACING__) {
        return false;
    }
    const options = maybeOptions || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getClient"])()?.getOptions();
    return !!options && // Note: This check is `!= null`, meaning "nullish". `0` is not "nullish", `undefined` and `null` are. (This comment was brought to you by 15 minutes of questioning life)
    (options.tracesSampleRate != null || !!options.tracesSampler);
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isDOMError",
    ()=>isDOMError,
    "isDOMException",
    ()=>isDOMException,
    "isElement",
    ()=>isElement,
    "isError",
    ()=>isError,
    "isErrorEvent",
    ()=>isErrorEvent,
    "isEvent",
    ()=>isEvent,
    "isInstanceOf",
    ()=>isInstanceOf,
    "isObjectLike",
    ()=>isObjectLike,
    "isParameterizedString",
    ()=>isParameterizedString,
    "isPlainObject",
    ()=>isPlainObject,
    "isPrimitive",
    ()=>isPrimitive,
    "isRegExp",
    ()=>isRegExp,
    "isRequest",
    ()=>isRequest,
    "isString",
    ()=>isString,
    "isSyntheticEvent",
    ()=>isSyntheticEvent,
    "isThenable",
    ()=>isThenable,
    "isVueViewModel",
    ()=>isVueViewModel
]);
const objectToString = Object.prototype.toString;
function isError(wat) {
    switch(objectToString.call(wat)){
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
        case "[object WebAssembly.Exception]":
            return true;
        default:
            return isInstanceOf(wat, Error);
    }
}
function isBuiltin(wat, className) {
    return objectToString.call(wat) === `[object ${className}]`;
}
function isErrorEvent(wat) {
    return isBuiltin(wat, "ErrorEvent");
}
function isDOMError(wat) {
    return isBuiltin(wat, "DOMError");
}
function isDOMException(wat) {
    return isBuiltin(wat, "DOMException");
}
function isString(wat) {
    return isBuiltin(wat, "String");
}
function isParameterizedString(wat) {
    return typeof wat === "object" && wat !== null && "__sentry_template_string__" in wat && "__sentry_template_values__" in wat;
}
function isPrimitive(wat) {
    return wat === null || isParameterizedString(wat) || typeof wat !== "object" && typeof wat !== "function";
}
function isPlainObject(wat) {
    return isBuiltin(wat, "Object");
}
function isObjectLike(wat) {
    return typeof wat === "object" && wat !== null;
}
function isEvent(wat) {
    return typeof Event !== "undefined" && isInstanceOf(wat, Event);
}
function isElement(wat) {
    return typeof Element !== "undefined" && isInstanceOf(wat, Element);
}
function isRegExp(wat) {
    return isBuiltin(wat, "RegExp");
}
function isThenable(wat) {
    return Boolean(wat?.then && typeof wat.then === "function");
}
function isSyntheticEvent(wat) {
    return isPlainObject(wat) && "nativeEvent" in wat && "preventDefault" in wat && "stopPropagation" in wat;
}
function isInstanceOf(wat, base) {
    try {
        return wat instanceof base;
    } catch  {
        return false;
    }
}
function isVueViewModel(wat) {
    return !!(typeof wat === "object" && wat !== null && (wat.__isVue || wat._isVue || wat.__v_isVNode));
}
function isRequest(request) {
    return typeof Request !== "undefined" && isInstanceOf(request, Request);
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/isBrowser.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBrowser",
    ()=>isBrowser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)");
;
;
function isBrowser() {
    return typeof window !== "undefined" && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeEnv"])() || isElectronNodeRenderer());
}
function isElectronNodeRenderer() {
    const process = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].process;
    return process?.type === "renderer";
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/merge.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "merge",
    ()=>merge
]);
function merge(initialObj, mergeObj, levels = 2) {
    if (!mergeObj || typeof mergeObj !== "object" || levels <= 0) {
        return mergeObj;
    }
    if (initialObj && Object.keys(mergeObj).length === 0) {
        return initialObj;
    }
    const output = {
        ...initialObj
    };
    for(const key in mergeObj){
        if (Object.prototype.hasOwnProperty.call(mergeObj, key)) {
            output[key] = merge(output[key], mergeObj[key], levels - 1);
        }
    }
    return output;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/misc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addContextToFrame",
    ()=>addContextToFrame,
    "addExceptionMechanism",
    ()=>addExceptionMechanism,
    "addExceptionTypeValue",
    ()=>addExceptionTypeValue,
    "checkOrSetAlreadyCaught",
    ()=>checkOrSetAlreadyCaught,
    "getEventDescription",
    ()=>getEventDescription,
    "isAlreadyCaptured",
    ()=>isAlreadyCaptured,
    "parseSemver",
    ()=>parseSemver,
    "uuid4",
    ()=>uuid4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/randomSafeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)");
;
;
;
;
function getCrypto() {
    const gbl = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
    return gbl.crypto || gbl.msCrypto;
}
let emptyUuid;
function getRandomByte() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMathRandom"])() * 16;
}
function uuid4(crypto = getCrypto()) {
    try {
        if (crypto?.randomUUID) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRandomSafeContext"])(()=>crypto.randomUUID()).replace(/-/g, "");
        }
    } catch  {}
    if (!emptyUuid) {
        emptyUuid = "10000000100040008000" + 1e11;
    }
    return emptyUuid.replace(/[018]/g, (c)=>// eslint-disable-next-line no-bitwise
        (c ^ (getRandomByte() & 15) >> c / 4).toString(16));
}
function getFirstException(event) {
    return event.exception?.values?.[0];
}
function getEventDescription(event) {
    const { message, event_id: eventId } = event;
    if (message) {
        return message;
    }
    const firstException = getFirstException(event);
    if (firstException) {
        if (firstException.type && firstException.value) {
            return `${firstException.type}: ${firstException.value}`;
        }
        return firstException.type || firstException.value || eventId || "<unknown>";
    }
    return eventId || "<unknown>";
}
function addExceptionTypeValue(event, value, type) {
    const exception = event.exception = event.exception || {};
    const values = exception.values = exception.values || [];
    const firstException = values[0] = values[0] || {};
    if (!firstException.value) {
        firstException.value = value || "";
    }
    if (!firstException.type) {
        firstException.type = type || "Error";
    }
}
function addExceptionMechanism(event, newMechanism) {
    const firstException = getFirstException(event);
    if (!firstException) {
        return;
    }
    const defaultMechanism = {
        type: "generic",
        handled: true
    };
    const currentMechanism = firstException.mechanism;
    firstException.mechanism = {
        ...defaultMechanism,
        ...currentMechanism,
        ...newMechanism
    };
    if (newMechanism && "data" in newMechanism) {
        const mergedData = {
            ...currentMechanism?.data,
            ...newMechanism.data
        };
        firstException.mechanism.data = mergedData;
    }
}
const SEMVER_REGEXP = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
function _parseInt(input) {
    return parseInt(input || "", 10);
}
function parseSemver(input) {
    const match = input.match(SEMVER_REGEXP) || [];
    const major = _parseInt(match[1]);
    const minor = _parseInt(match[2]);
    const patch = _parseInt(match[3]);
    return {
        buildmetadata: match[5],
        major: isNaN(major) ? void 0 : major,
        minor: isNaN(minor) ? void 0 : minor,
        patch: isNaN(patch) ? void 0 : patch,
        prerelease: match[4]
    };
}
function addContextToFrame(lines, frame, linesOfContext = 5) {
    if (frame.lineno === void 0) {
        return;
    }
    const maxLines = lines.length;
    const sourceLine = Math.max(Math.min(maxLines - 1, frame.lineno - 1), 0);
    frame.pre_context = lines.slice(Math.max(0, sourceLine - linesOfContext), sourceLine).map((line)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snipLine"])(line, 0));
    const lineIndex = Math.min(maxLines - 1, sourceLine);
    frame.context_line = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snipLine"])(lines[lineIndex], frame.colno || 0);
    frame.post_context = lines.slice(Math.min(sourceLine + 1, maxLines), sourceLine + 1 + linesOfContext).map((line)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["snipLine"])(line, 0));
}
function checkOrSetAlreadyCaught(exception) {
    if (isAlreadyCaptured(exception)) {
        return true;
    }
    try {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(exception, "__sentry_captured__", true);
    } catch  {}
    return false;
}
function isAlreadyCaptured(exception) {
    try {
        return exception.__sentry_captured__;
    } catch  {}
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/node.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNodeEnv",
    ()=>isNodeEnv,
    "loadModule",
    ()=>loadModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/env.js [app-client] (ecmascript)");
;
function isNodeEnv() {
    return !(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$env$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isBrowserBundle"])() && Object.prototype.toString.call(typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] : 0) === "[object process]";
}
function dynamicRequire(mod, request) {
    return mod.require(request);
}
function loadModule(moduleName, existingModule = module) {
    let mod;
    try {
        mod = dynamicRequire(existingModule, moduleName);
    } catch  {}
    if (!mod) {
        try {
            const { cwd } = dynamicRequire(existingModule, "process");
            mod = dynamicRequire(existingModule, `${cwd()}/node_modules/${moduleName}`);
        } catch  {}
    }
    return mod;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/normalizationHints.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNormalizationDepthOverrideHint",
    ()=>getNormalizationDepthOverrideHint,
    "hasSkipNormalizationHint",
    ()=>hasSkipNormalizationHint,
    "setNormalizationDepthOverrideHint",
    ()=>setNormalizationDepthOverrideHint,
    "setSkipNormalizationHint",
    ()=>setSkipNormalizationHint
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
;
const SENTRY_SKIP_NORMALIZATION = /* @__PURE__ */ Symbol.for("sentry.skipNormalization");
const SENTRY_OVERRIDE_NORMALIZATION_DEPTH = /* @__PURE__ */ Symbol.for("sentry.overrideNormalizationDepth");
function setSkipNormalizationHint(obj) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(obj, SENTRY_SKIP_NORMALIZATION, true);
}
function setNormalizationDepthOverrideHint(obj, depth) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(obj, SENTRY_OVERRIDE_NORMALIZATION_DEPTH, depth);
}
function hasSkipNormalizationHint(value) {
    return Boolean(value[SENTRY_SKIP_NORMALIZATION]);
}
function getNormalizationDepthOverrideHint(value) {
    const v = value[SENTRY_OVERRIDE_NORMALIZATION_DEPTH];
    return typeof v === "number" ? v : void 0;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/normalize.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalize",
    ()=>normalize,
    "normalizeToSize",
    ()=>normalizeToSize,
    "normalizeUrlToBase",
    ()=>normalizeUrlToBase,
    "setNormalizeStringifier",
    ()=>setNormalizeStringifier,
    "stringifyValue",
    ()=>stringifyValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$normalizationHints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/normalizationHints.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/stacktrace.js [app-client] (ecmascript)");
;
;
;
let stringifier;
function setNormalizeStringifier(newStringifier) {
    stringifier = newStringifier;
}
function normalize(input, depth = 100, maxProperties = Infinity) {
    try {
        return visit("", input, depth, maxProperties);
    } catch (err) {
        return {
            ERROR: `**non-serializable** (${err})`
        };
    }
}
function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
    const normalized = normalize(object, depth);
    if (jsonSize(normalized) > maxSize) {
        return normalizeToSize(object, depth - 1, maxSize);
    }
    return normalized;
}
function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
    const [memoize, unmemoize] = memo;
    if (value == null || // this matches null and undefined -> eqeq not eqeqeq
    [
        "boolean",
        "string"
    ].includes(typeof value) || typeof value === "number" && Number.isFinite(value)) {
        return value;
    }
    const stringified = stringifyValue(key, value);
    if (!stringified.startsWith("[object ")) {
        return stringified;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$normalizationHints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasSkipNormalizationHint"])(value)) {
        return value;
    }
    const overrideDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$normalizationHints$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNormalizationDepthOverrideHint"])(value);
    const remainingDepth = overrideDepth !== void 0 ? overrideDepth : depth;
    if (remainingDepth === 0) {
        return stringified.replace("object ", "");
    }
    if (memoize(value)) {
        return "[Circular ~]";
    }
    const valueWithToJSON = value;
    if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
        try {
            const jsonValue = valueWithToJSON.toJSON();
            return visit("", jsonValue, remainingDepth - 1, maxProperties, memo);
        } catch  {}
    }
    const normalized = Array.isArray(value) ? [] : {};
    let numAdded = 0;
    const visitable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["convertToPlainObject"])(value);
    for(const visitKey in visitable){
        if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
            continue;
        }
        if (numAdded >= maxProperties) {
            normalized[visitKey] = "[MaxProperties ~]";
            break;
        }
        const visitValue = visitable[visitKey];
        normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
        numAdded++;
    }
    unmemoize(value);
    return normalized;
}
function stringifyValue(key, value) {
    try {
        if (stringifier) {
            const stringified = stringifier(value);
            if (stringified) {
                return stringified;
            }
        }
        if (("TURBOPACK compile-time value", "object") !== "undefined" && value === /*TURBOPACK member replacement*/ __turbopack_context__.g) {
            return "[Global]";
        }
        if (typeof value === "number" && !Number.isFinite(value)) {
            return `[${value}]`;
        }
        if (typeof value === "function") {
            return `[Function: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$stacktrace$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFunctionName"])(value)}]`;
        }
        if (typeof value === "symbol") {
            return `[${String(value)}]`;
        }
        if (typeof value === "bigint") {
            return `[BigInt: ${String(value)}]`;
        }
        const objName = getConstructorName(value);
        return `[object ${objName}]`;
    } catch (err) {
        return `**non-serializable** (${err})`;
    }
}
function getConstructorName(value) {
    const prototype = Object.getPrototypeOf(value);
    return prototype?.constructor ? prototype.constructor.name : "null prototype";
}
function utf8Length(value) {
    return ~-encodeURI(value).split(/%..|./).length;
}
function jsonSize(value) {
    return utf8Length(JSON.stringify(value));
}
function normalizeUrlToBase(url, basePath) {
    const escapedBase = basePath.replace(/\\/g, "/").replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
    let newUrl = url;
    try {
        newUrl = decodeURI(url);
    } catch  {}
    return newUrl.replace(/\\/g, "/").replace(/webpack:\/?/g, "").replace(new RegExp(`(file://)?/*${escapedBase}/*`, "ig"), "app:///");
}
function memoBuilder() {
    const inner = /* @__PURE__ */ new WeakSet();
    function memoize(obj) {
        if (inner.has(obj)) {
            return true;
        }
        inner.add(obj);
        return false;
    }
    function unmemoize(obj) {
        inner.delete(obj);
    }
    return [
        memoize,
        unmemoize
    ];
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addNonEnumerableProperty",
    ()=>addNonEnumerableProperty,
    "convertToPlainObject",
    ()=>convertToPlainObject,
    "dropUndefinedKeys",
    ()=>dropUndefinedKeys,
    "extractExceptionKeysForMessage",
    ()=>extractExceptionKeysForMessage,
    "fill",
    ()=>fill,
    "getOriginalFunction",
    ()=>getOriginalFunction,
    "markFunctionWrapped",
    ()=>markFunctionWrapped,
    "objectify",
    ()=>objectify,
    "wrapMethod",
    ()=>wrapMethod
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/debug-build.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)");
;
;
;
function fill(source, name, replacementFactory) {
    if (!(name in source)) {
        return;
    }
    const original = source[name];
    if (typeof original !== "function") {
        return;
    }
    const wrapped = replacementFactory(original);
    if (typeof wrapped === "function") {
        markFunctionWrapped(wrapped, original);
    }
    try {
        source[name] = wrapped;
    } catch  {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log(`Failed to replace method "${name}" in object`, source);
    }
}
function addNonEnumerableProperty(obj, name, value) {
    try {
        Object.defineProperty(obj, name, {
            // enumerable: false, // the default, so we can save on bundle size by not explicitly setting it
            value,
            writable: true,
            configurable: true
        });
    } catch  {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$debug$2d$build$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEBUG_BUILD"] && __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log(`Failed to add non-enumerable property "${String(name)}" to object`, obj);
    }
}
function markFunctionWrapped(wrapped, original) {
    try {
        const proto = original.prototype || {};
        wrapped.prototype = original.prototype = proto;
        addNonEnumerableProperty(wrapped, "__sentry_original__", original);
    } catch  {}
}
function wrapMethod(obj, field, wrapped, enumerable = true) {
    const original = obj[field];
    if (typeof original !== "function") {
        throw new Error(`Cannot wrap method: ${field} is not a function`);
    }
    if (getOriginalFunction(original)) {
        throw new Error(`Attempting to wrap method ${field} multiple times`);
    }
    markFunctionWrapped(wrapped, original);
    Object.defineProperty(obj, field, {
        writable: true,
        configurable: true,
        enumerable,
        value: wrapped
    });
}
function getOriginalFunction(func) {
    return func.__sentry_original__;
}
function convertToPlainObject(value) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isError"])(value)) {
        return {
            message: value.message,
            name: value.name,
            stack: value.stack,
            ...getOwnProperties(value)
        };
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEvent"])(value)) {
        const { type, target, currentTarget, detail } = value;
        return {
            type,
            target,
            currentTarget,
            ...detail ? {
                detail
            } : {},
            ...getOwnProperties(value)
        };
    }
    return value;
}
function getOwnProperties(obj) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObjectLike"])(obj)) {
        return Object.fromEntries(Object.entries(obj));
    }
    return {};
}
function extractExceptionKeysForMessage(exception) {
    const keys = Object.keys(convertToPlainObject(exception));
    keys.sort();
    return !keys[0] ? "[object has no keys]" : keys.join(", ");
}
function dropUndefinedKeys(inputValue) {
    const memoizationMap = /* @__PURE__ */ new Map();
    return _dropUndefinedKeys(inputValue, memoizationMap);
}
function _dropUndefinedKeys(inputValue, memoizationMap) {
    if (inputValue === null || typeof inputValue !== "object") {
        return inputValue;
    }
    const memoVal = memoizationMap.get(inputValue);
    if (memoVal !== void 0) {
        return memoVal;
    }
    if (Array.isArray(inputValue)) {
        const returnValue = [];
        memoizationMap.set(inputValue, returnValue);
        inputValue.forEach((value)=>{
            returnValue.push(_dropUndefinedKeys(value, memoizationMap));
        });
        return returnValue;
    }
    if (isPojo(inputValue)) {
        const returnValue = {};
        memoizationMap.set(inputValue, returnValue);
        const keys = Object.keys(inputValue);
        keys.forEach((key)=>{
            const val = inputValue[key];
            if (val !== void 0) {
                returnValue[key] = _dropUndefinedKeys(val, memoizationMap);
            }
        });
        return returnValue;
    }
    return inputValue;
}
function isPojo(input) {
    const constructor = input.constructor;
    return constructor === Object || constructor === void 0;
}
function objectify(wat) {
    let objectified;
    switch(true){
        // this will catch both undefined and null
        case wat == void 0:
            objectified = new String(wat);
            break;
        // Though symbols and bigints do have wrapper classes (`Symbol` and `BigInt`, respectively), for whatever reason
        // those classes don't have constructors which can be used with the `new` keyword. We therefore need to cast each as
        // an object in order to wrap it.
        case typeof wat === "symbol" || typeof wat === "bigint":
            objectified = Object(wat);
            break;
        // this will catch the remaining primitives: `String`, `Number`, and `Boolean`
        case (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(wat):
            objectified = new wat.constructor(wat);
            break;
        // by process of elimination, at this point we know that `wat` must already be an object
        default:
            objectified = wat;
            break;
    }
    return objectified;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/parseSampleRate.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseSampleRate",
    ()=>parseSampleRate
]);
function parseSampleRate(sampleRate) {
    if (typeof sampleRate === "boolean") {
        return Number(sampleRate);
    }
    const rate = typeof sampleRate === "string" ? parseFloat(sampleRate) : sampleRate;
    if (typeof rate !== "number" || isNaN(rate) || rate < 0 || rate > 1) {
        return void 0;
    }
    return rate;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/propagationContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateSpanId",
    ()=>generateSpanId,
    "generateTraceId",
    ()=>generateTraceId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/misc.js [app-client] (ecmascript)");
;
function generateTraceId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])();
}
function generateSpanId() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$misc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["uuid4"])().substring(16);
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/randomSafeContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safeDateNow",
    ()=>safeDateNow,
    "safeMathRandom",
    ()=>safeMathRandom,
    "withRandomSafeContext",
    ()=>withRandomSafeContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)");
;
let RESOLVED_RUNNER;
function withRandomSafeContext(cb) {
    if (RESOLVED_RUNNER !== void 0) {
        return RESOLVED_RUNNER ? RESOLVED_RUNNER(cb) : cb();
    }
    const sym = /* @__PURE__ */ Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
    const globalWithSymbol = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
    if (sym in globalWithSymbol && typeof globalWithSymbol[sym] === "function") {
        RESOLVED_RUNNER = globalWithSymbol[sym];
        return RESOLVED_RUNNER(cb);
    }
    RESOLVED_RUNNER = null;
    return cb();
}
function safeMathRandom() {
    return withRandomSafeContext(()=>Math.random());
}
function safeDateNow() {
    return withRandomSafeContext(()=>Date.now());
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/scopeData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyScopeDataToEvent",
    ()=>applyScopeDataToEvent,
    "getCombinedScopeData",
    ()=>getCombinedScopeData,
    "mergeAndOverwriteScopeData",
    ()=>mergeAndOverwriteScopeData,
    "mergeScopeData",
    ()=>mergeScopeData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/merge.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
;
;
;
;
function applyScopeDataToEvent(event, data) {
    const { fingerprint, span, breadcrumbs, sdkProcessingMetadata } = data;
    applyDataToEvent(event, data);
    if (span) {
        applySpanToEvent(event, span);
    }
    applyFingerprintToEvent(event, fingerprint);
    applyBreadcrumbsToEvent(event, breadcrumbs);
    applySdkMetadataToEvent(event, sdkProcessingMetadata);
}
function mergeScopeData(data, mergeData) {
    const { extra, tags, attributes, user, contexts, level, sdkProcessingMetadata, breadcrumbs, fingerprint, eventProcessors, attachments, propagationContext, transactionName, span } = mergeData;
    mergeAndOverwriteScopeData(data, "extra", extra);
    mergeAndOverwriteScopeData(data, "tags", tags);
    mergeAndOverwriteScopeData(data, "attributes", attributes);
    mergeAndOverwriteScopeData(data, "user", user);
    mergeAndOverwriteScopeData(data, "contexts", contexts);
    data.sdkProcessingMetadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(data.sdkProcessingMetadata, sdkProcessingMetadata, 2);
    if (level) {
        data.level = level;
    }
    if (transactionName) {
        data.transactionName = transactionName;
    }
    if (span) {
        data.span = span;
    }
    if (breadcrumbs.length) {
        data.breadcrumbs = [
            ...data.breadcrumbs,
            ...breadcrumbs
        ];
    }
    if (fingerprint.length) {
        data.fingerprint = [
            ...data.fingerprint,
            ...fingerprint
        ];
    }
    if (eventProcessors.length) {
        data.eventProcessors = [
            ...data.eventProcessors,
            ...eventProcessors
        ];
    }
    if (attachments.length) {
        data.attachments = [
            ...data.attachments,
            ...attachments
        ];
    }
    data.propagationContext = {
        ...data.propagationContext,
        ...propagationContext
    };
}
function mergeAndOverwriteScopeData(data, prop, mergeVal) {
    data[prop] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$merge$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["merge"])(data[prop], mergeVal, 1);
}
function getCombinedScopeData(isolationScope, currentScope) {
    const scopeData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGlobalScope"])().getScopeData();
    isolationScope && mergeScopeData(scopeData, isolationScope.getScopeData());
    currentScope && mergeScopeData(scopeData, currentScope.getScopeData());
    return scopeData;
}
function applyDataToEvent(event, data) {
    const { extra, tags, user, contexts, level, transactionName } = data;
    if (Object.keys(extra).length) {
        event.extra = {
            ...extra,
            ...event.extra
        };
    }
    if (Object.keys(tags).length) {
        event.tags = {
            ...tags,
            ...event.tags
        };
    }
    if (Object.keys(user).length) {
        event.user = {
            ...user,
            ...event.user
        };
    }
    if (Object.keys(contexts).length) {
        event.contexts = {
            ...contexts,
            ...event.contexts
        };
    }
    if (level) {
        event.level = level;
    }
    if (transactionName && event.type !== "transaction") {
        event.transaction = transactionName;
    }
}
function applyBreadcrumbsToEvent(event, breadcrumbs) {
    const mergedBreadcrumbs = [
        ...event.breadcrumbs || [],
        ...breadcrumbs
    ];
    event.breadcrumbs = mergedBreadcrumbs.length ? mergedBreadcrumbs : void 0;
}
function applySdkMetadataToEvent(event, sdkProcessingMetadata) {
    event.sdkProcessingMetadata = {
        ...event.sdkProcessingMetadata,
        ...sdkProcessingMetadata
    };
}
function applySpanToEvent(event, span) {
    event.contexts = {
        trace: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToTraceContext"])(span),
        ...event.contexts
    };
    event.sdkProcessingMetadata = {
        dynamicSamplingContext: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromSpan"])(span),
        ...event.sdkProcessingMetadata
    };
    const rootSpan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRootSpan"])(span);
    const transactionName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToJSON"])(rootSpan).description;
    if (transactionName && !event.transaction && event.type === "transaction") {
        event.transaction = transactionName;
    }
}
function applyFingerprintToEvent(event, fingerprint) {
    event.fingerprint = event.fingerprint ? Array.isArray(event.fingerprint) ? event.fingerprint : [
        event.fingerprint
    ] : [];
    if (fingerprint) {
        event.fingerprint = event.fingerprint.concat(fingerprint);
    }
    if (!event.fingerprint.length) {
        delete event.fingerprint;
    }
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/spanOnScope.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_getSpanForScope",
    ()=>_getSpanForScope,
    "_setSpanForScope",
    ()=>_setSpanForScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$weakRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/weakRef.js [app-client] (ecmascript)");
;
;
const SCOPE_SPAN_FIELD = "_sentrySpan";
function _setSpanForScope(scope, span) {
    if (span) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(scope, SCOPE_SPAN_FIELD, (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$weakRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeWeakRef"])(span));
    } else {
        delete scope[SCOPE_SPAN_FIELD];
    }
}
function _getSpanForScope(scope) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$weakRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["derefWeakRef"])(scope[SCOPE_SPAN_FIELD]);
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERNAL_getSegmentSpan",
    ()=>INTERNAL_getSegmentSpan,
    "TRACE_FLAG_NONE",
    ()=>TRACE_FLAG_NONE,
    "TRACE_FLAG_SAMPLED",
    ()=>TRACE_FLAG_SAMPLED,
    "addChildSpanToSpan",
    ()=>addChildSpanToSpan,
    "addStatusMessageAttribute",
    ()=>addStatusMessageAttribute,
    "convertSpanLinksForEnvelope",
    ()=>convertSpanLinksForEnvelope,
    "getActiveSpan",
    ()=>getActiveSpan,
    "getRootSpan",
    ()=>getRootSpan,
    "getSimpleStatus",
    ()=>getSimpleStatus,
    "getSpanDescendants",
    ()=>getSpanDescendants,
    "getStatusMessage",
    ()=>getStatusMessage,
    "getStreamedSpanLinks",
    ()=>getStreamedSpanLinks,
    "removeChildSpanFromSpan",
    ()=>removeChildSpanFromSpan,
    "showSpanDropWarning",
    ()=>showSpanDropWarning,
    "spanIsSampled",
    ()=>spanIsSampled,
    "spanIsSentrySpan",
    ()=>spanIsSentrySpan,
    "spanTimeInputToSeconds",
    ()=>spanTimeInputToSeconds,
    "spanToJSON",
    ()=>spanToJSON,
    "spanToStreamedSpanJSON",
    ()=>spanToStreamedSpanJSON,
    "spanToTraceContext",
    ()=>spanToTraceContext,
    "spanToTraceHeader",
    ()=>spanToTraceHeader,
    "spanToTraceparentHeader",
    ()=>spanToTraceparentHeader,
    "spanToTransactionTraceContext",
    ()=>spanToTransactionTraceContext,
    "streamedSpanJsonToSerializedSpan",
    ()=>streamedSpanJsonToSerializedSpan,
    "updateSpanName",
    ()=>updateSpanName
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/asyncContext/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/attributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/carrier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/semanticAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/tracing/spanstatus.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/tracing/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/propagationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/tracing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/spanOnScope.js [app-client] (ecmascript)");
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
const TRACE_FLAG_NONE = 0;
const TRACE_FLAG_SAMPLED = 1;
let hasShownSpanDropWarning = false;
function spanToTransactionTraceContext(span) {
    const { spanId: span_id, traceId: trace_id } = span.spanContext();
    const { data, op, parent_span_id, status, origin, links } = spanToJSON(span);
    return {
        parent_span_id,
        span_id,
        trace_id,
        data,
        op,
        status,
        origin,
        links
    };
}
function spanToTraceContext(span) {
    const { spanId, traceId: trace_id, isRemote } = span.spanContext();
    const parent_span_id = isRemote ? spanId : spanToJSON(span).parent_span_id;
    const scope = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCapturedScopesOnSpan"])(span).scope;
    const span_id = isRemote ? scope?.getPropagationContext().propagationSpanId || (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSpanId"])() : spanId;
    return {
        parent_span_id,
        span_id,
        trace_id
    };
}
function spanToTraceHeader(span) {
    const { traceId, spanId } = span.spanContext();
    const sampled = spanIsSampled(span);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSentryTraceHeader"])(traceId, spanId, sampled);
}
function spanToTraceparentHeader(span) {
    const { traceId, spanId } = span.spanContext();
    const sampled = spanIsSampled(span);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$tracing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceparentHeader"])(traceId, spanId, sampled);
}
function convertSpanLinksForEnvelope(links) {
    if (links && links.length > 0) {
        return links.map(({ context: { spanId, traceId, traceFlags, ...restContext }, attributes })=>({
                span_id: spanId,
                trace_id: traceId,
                sampled: traceFlags === TRACE_FLAG_SAMPLED,
                attributes,
                ...restContext
            }));
    } else {
        return void 0;
    }
}
function getStreamedSpanLinks(links) {
    if (links?.length) {
        return links.map(({ context: { spanId, traceId, traceFlags }, attributes })=>({
                span_id: spanId,
                trace_id: traceId,
                sampled: traceFlags === TRACE_FLAG_SAMPLED,
                attributes
            }));
    } else {
        return void 0;
    }
}
function spanTimeInputToSeconds(input) {
    if (typeof input === "number") {
        return ensureTimestampInSeconds(input);
    }
    if (Array.isArray(input)) {
        return input[0] + input[1] / 1e9;
    }
    if (input instanceof Date) {
        return ensureTimestampInSeconds(input.getTime());
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$time$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timestampInSeconds"])();
}
function ensureTimestampInSeconds(timestamp) {
    const isMs = timestamp > 9999999999;
    return isMs ? timestamp / 1e3 : timestamp;
}
function spanToJSON(span) {
    if (spanIsSentrySpan(span)) {
        return span.getSpanJSON();
    }
    const { spanId: span_id, traceId: trace_id } = span.spanContext();
    if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
        const { attributes, startTime, name, endTime, status, links } = span;
        return {
            span_id,
            trace_id,
            data: attributes,
            description: name,
            parent_span_id: getOtelParentSpanId(span),
            start_timestamp: spanTimeInputToSeconds(startTime),
            // This is [0,0] by default in OTEL, in which case we want to interpret this as no end time
            timestamp: spanTimeInputToSeconds(endTime) || void 0,
            status: getStatusMessage(status),
            op: attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_OP"]],
            origin: attributes[__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN"]],
            links: convertSpanLinksForEnvelope(links)
        };
    }
    return {
        span_id,
        trace_id,
        start_timestamp: 0,
        data: {}
    };
}
function spanToStreamedSpanJSON(span) {
    if (spanIsSentrySpan(span)) {
        return span.getStreamedSpanJSON();
    }
    const { spanId: span_id, traceId: trace_id } = span.spanContext();
    if (spanIsOpenTelemetrySdkTraceBaseSpan(span)) {
        const { attributes, startTime, name, endTime, status, links } = span;
        return {
            name,
            span_id,
            trace_id,
            parent_span_id: getOtelParentSpanId(span),
            start_timestamp: spanTimeInputToSeconds(startTime),
            end_timestamp: spanTimeInputToSeconds(endTime),
            is_segment: span === INTERNAL_getSegmentSpan(span),
            status: getSimpleStatus(status),
            attributes: addStatusMessageAttribute(attributes, status),
            links: getStreamedSpanLinks(links)
        };
    }
    return {
        span_id,
        trace_id,
        start_timestamp: 0,
        name: "",
        end_timestamp: 0,
        status: "ok",
        is_segment: span === INTERNAL_getSegmentSpan(span)
    };
}
function getOtelParentSpanId(span) {
    return "parentSpanId" in span ? span.parentSpanId : "parentSpanContext" in span ? span.parentSpanContext?.spanId : void 0;
}
function streamedSpanJsonToSerializedSpan(spanJson) {
    return {
        ...spanJson,
        attributes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAttributes"])(spanJson.attributes),
        links: spanJson.links?.map((link)=>({
                ...link,
                attributes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$attributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAttributes"])(link.attributes)
            }))
    };
}
function spanIsOpenTelemetrySdkTraceBaseSpan(span) {
    const castSpan = span;
    return !!castSpan.attributes && !!castSpan.startTime && !!castSpan.name && !!castSpan.endTime && !!castSpan.status;
}
function spanIsSentrySpan(span) {
    return typeof span.getSpanJSON === "function";
}
function spanIsSampled(span) {
    const { traceFlags } = span.spanContext();
    return traceFlags === TRACE_FLAG_SAMPLED;
}
function getStatusMessage(status) {
    if (!status || status.code === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_UNSET"]) {
        return void 0;
    }
    if (status.code === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_OK"]) {
        return "ok";
    }
    return status.message || "internal_error";
}
function getSimpleStatus(status) {
    return !status || status.code === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_OK"] || status.code === __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$spanstatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SPAN_STATUS_UNSET"] || status.message === "cancelled" ? "ok" : "error";
}
function addStatusMessageAttribute(attributes, status) {
    const statusMessage = getSimpleStatus(status) === "error" ? status?.message : void 0;
    return {
        ...statusMessage && {
            [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_STATUS_MESSAGE"]]: statusMessage
        },
        ...attributes
    };
}
const CHILD_SPANS_FIELD = "_sentryChildSpans";
const ROOT_SPAN_FIELD = "_sentryRootSpan";
function addChildSpanToSpan(span, childSpan) {
    const rootSpan = span[ROOT_SPAN_FIELD] || span;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(childSpan, ROOT_SPAN_FIELD, rootSpan);
    if (!spanIsSampled(span)) {
        return;
    }
    if (!span.isRecording() && !rootSpan.isRecording()) {
        return;
    }
    if (span[CHILD_SPANS_FIELD]) {
        span[CHILD_SPANS_FIELD].add(childSpan);
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addNonEnumerableProperty"])(span, CHILD_SPANS_FIELD, /* @__PURE__ */ new Set([
            childSpan
        ]));
    }
}
function removeChildSpanFromSpan(span, childSpan) {
    if (span[CHILD_SPANS_FIELD]) {
        span[CHILD_SPANS_FIELD].delete(childSpan);
    }
}
function getSpanDescendants(span) {
    const resultSet = /* @__PURE__ */ new Set();
    function addSpanChildren(span2) {
        if (resultSet.has(span2)) {
            return;
        } else if (spanIsSampled(span2)) {
            resultSet.add(span2);
            const childSpans = span2[CHILD_SPANS_FIELD] ? Array.from(span2[CHILD_SPANS_FIELD]) : [];
            for (const childSpan of childSpans){
                addSpanChildren(childSpan);
            }
        }
    }
    addSpanChildren(span);
    return Array.from(resultSet);
}
const getRootSpan = INTERNAL_getSegmentSpan;
function INTERNAL_getSegmentSpan(span) {
    return span[ROOT_SPAN_FIELD] || span;
}
function getActiveSpan() {
    const carrier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$carrier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMainCarrier"])();
    const acs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$asyncContext$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAsyncContextStrategy"])(carrier);
    if (acs.getActiveSpan) {
        return acs.getActiveSpan();
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanOnScope$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_getSpanForScope"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"])());
}
function showSpanDropWarning() {
    if (!hasShownSpanDropWarning) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleSandbox"])(()=>{
            console.warn("[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.");
        });
        hasShownSpanDropWarning = true;
    }
}
function updateSpanName(span, name) {
    span.updateName(name);
    span.setAttributes({
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_SOURCE"]]: "custom",
        [__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$semanticAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME"]]: name
    });
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/stacktrace.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UNKNOWN_FUNCTION",
    ()=>UNKNOWN_FUNCTION,
    "createStackParser",
    ()=>createStackParser,
    "getFramesFromEvent",
    ()=>getFramesFromEvent,
    "getFunctionName",
    ()=>getFunctionName,
    "normalizeStackTracePath",
    ()=>normalizeStackTracePath,
    "stackParserFromStackParserOptions",
    ()=>stackParserFromStackParserOptions,
    "stripSentryFramesAndReverse",
    ()=>stripSentryFramesAndReverse
]);
const STACKTRACE_FRAME_LIMIT = 50;
const UNKNOWN_FUNCTION = "?";
const WEBPACK_ERROR_REGEXP = /\(error: (.*)\)/;
const STRIP_FRAME_REGEXP = /captureMessage|captureException/;
function createStackParser(...parsers) {
    const sortedParsers = parsers.sort((a, b)=>a[0] - b[0]).map((p)=>p[1]);
    return (stack, skipFirstLines = 0, framesToPop = 0)=>{
        const frames = [];
        const lines = stack.split("\n");
        for(let i = skipFirstLines; i < lines.length; i++){
            let line = lines[i];
            if (line.length > 1024) {
                line = line.slice(0, 1024);
            }
            const cleanedLine = WEBPACK_ERROR_REGEXP.test(line) ? line.replace(WEBPACK_ERROR_REGEXP, "$1") : line;
            if (cleanedLine.includes("Error: ")) {
                continue;
            }
            for (const parser of sortedParsers){
                const frame = parser(cleanedLine);
                if (frame) {
                    frames.push(frame);
                    break;
                }
            }
            if (frames.length >= STACKTRACE_FRAME_LIMIT + framesToPop) {
                break;
            }
        }
        return stripSentryFramesAndReverse(frames.slice(framesToPop));
    };
}
function stackParserFromStackParserOptions(stackParser) {
    if (Array.isArray(stackParser)) {
        return createStackParser(...stackParser);
    }
    return stackParser;
}
function stripSentryFramesAndReverse(stack) {
    if (!stack.length) {
        return [];
    }
    const localStack = Array.from(stack);
    if (/sentryWrapped/.test(getLastStackFrame(localStack).function || "")) {
        localStack.pop();
    }
    localStack.reverse();
    if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
        localStack.pop();
        if (STRIP_FRAME_REGEXP.test(getLastStackFrame(localStack).function || "")) {
            localStack.pop();
        }
    }
    return localStack.slice(0, STACKTRACE_FRAME_LIMIT).map((frame)=>({
            ...frame,
            filename: frame.filename || getLastStackFrame(localStack).filename,
            function: frame.function || UNKNOWN_FUNCTION
        }));
}
function getLastStackFrame(arr) {
    return arr[arr.length - 1] || {};
}
const defaultFunctionName = "<anonymous>";
function getFunctionName(fn) {
    try {
        if (!fn || typeof fn !== "function") {
            return defaultFunctionName;
        }
        return fn.name || defaultFunctionName;
    } catch  {
        return defaultFunctionName;
    }
}
function getFramesFromEvent(event) {
    const exception = event.exception;
    if (exception) {
        const frames = [];
        try {
            exception.values.forEach((value)=>{
                if (value.stacktrace.frames) {
                    frames.push(...value.stacktrace.frames);
                }
            });
            return frames;
        } catch  {
            return void 0;
        }
    }
    return void 0;
}
function normalizeStackTracePath(path) {
    let filename = path?.startsWith("file://") ? path.slice(7) : path;
    if (filename?.match(/\/[A-Z]:/)) {
        filename = filename.slice(1);
    }
    return filename;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isMatchingPattern",
    ()=>isMatchingPattern,
    "safeJoin",
    ()=>safeJoin,
    "snipLine",
    ()=>snipLine,
    "stringMatchesSomePattern",
    ()=>stringMatchesSomePattern,
    "stringify",
    ()=>stringify,
    "truncate",
    ()=>truncate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/is.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/normalize.js [app-client] (ecmascript)");
;
;
function stringify(value, fallback = "[unserializable]") {
    if (typeof value === "string") {
        return value;
    }
    try {
        return JSON.stringify(value);
    } catch  {
        return typeof fallback === "function" ? fallback(value) : fallback;
    }
}
function truncate(str, max = 0) {
    if (typeof str !== "string" || max === 0) {
        return str;
    }
    return str.length <= max ? str : `${str.slice(0, max)}...`;
}
function snipLine(line, colno) {
    let newLine = line;
    const lineLength = newLine.length;
    if (lineLength <= 150) {
        return newLine;
    }
    if (colno > lineLength) {
        colno = lineLength;
    }
    let start = Math.max(colno - 60, 0);
    if (start < 5) {
        start = 0;
    }
    let end = Math.min(start + 140, lineLength);
    if (end > lineLength - 5) {
        end = lineLength;
    }
    if (end === lineLength) {
        start = Math.max(end - 140, 0);
    }
    newLine = newLine.slice(start, end);
    if (start > 0) {
        newLine = `'{snip} ${newLine}`;
    }
    if (end < lineLength) {
        newLine += " {snip}";
    }
    return newLine;
}
function safeJoin(input, delimiter) {
    if (!Array.isArray(input)) {
        return "";
    }
    const output = [];
    for(let i = 0; i < input.length; i++){
        const value = input[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPrimitive"])(value)) {
            output.push(String(value));
        } else if (value instanceof Error) {
            output.push(value.message ? `${value.name}: ${value.message}` : value.name);
        } else {
            output.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$normalize$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringifyValue"])(void 0, value));
        }
    }
    return output.join(delimiter);
}
function isMatchingPattern(value, pattern, requireExactStringMatch = false) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(value)) {
        return false;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRegExp"])(pattern)) {
        return pattern.test(value);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$is$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"])(pattern)) {
        return requireExactStringMatch ? value === pattern : value.includes(pattern);
    }
    if (typeof pattern === "function") {
        return pattern(value);
    }
    return false;
}
function stringMatchesSomePattern(testString, patterns = [], requireExactStringMatch = false) {
    for (const pattern of patterns){
        if (isMatchingPattern(testString, pattern, requireExactStringMatch)) {
            return true;
        }
    }
    return false;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/time.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "browserPerformanceTimeOrigin",
    ()=>browserPerformanceTimeOrigin,
    "dateTimestampInSeconds",
    ()=>dateTimestampInSeconds,
    "timestampInSeconds",
    ()=>timestampInSeconds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/randomSafeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)");
;
;
const ONE_SECOND_IN_MS = 1e3;
function dateTimestampInSeconds() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeDateNow"])() / ONE_SECOND_IN_MS;
}
function createUnixTimestampInSecondsFunc() {
    const { performance } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
    if (!performance?.now || !performance.timeOrigin) {
        return dateTimestampInSeconds;
    }
    const timeOrigin = performance.timeOrigin;
    return ()=>{
        return (timeOrigin + (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRandomSafeContext"])(()=>performance.now())) / ONE_SECOND_IN_MS;
    };
}
let _cachedTimestampInSeconds;
function timestampInSeconds() {
    const func = _cachedTimestampInSeconds ?? (_cachedTimestampInSeconds = createUnixTimestampInSecondsFunc());
    return func();
}
let cachedTimeOrigin = null;
function getBrowserTimeOrigin() {
    const { performance } = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"];
    if (!performance?.now) {
        return void 0;
    }
    const threshold = 3e5;
    const performanceNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRandomSafeContext"])(()=>performance.now());
    const dateNow = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeDateNow"])();
    const timeOrigin = performance.timeOrigin;
    if (typeof timeOrigin === "number") {
        const timeOriginDelta = Math.abs(timeOrigin + performanceNow - dateNow);
        if (timeOriginDelta < threshold) {
            return timeOrigin;
        }
    }
    const navigationStart = performance.timing?.navigationStart;
    if (typeof navigationStart === "number") {
        const navigationStartDelta = Math.abs(navigationStart + performanceNow - dateNow);
        if (navigationStartDelta < threshold) {
            return navigationStart;
        }
    }
    return dateNow - performanceNow;
}
function browserPerformanceTimeOrigin() {
    if (cachedTimeOrigin === null) {
        cachedTimeOrigin = getBrowserTimeOrigin();
    }
    return cachedTimeOrigin;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/timestampSequence.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSequenceAttribute",
    ()=>getSequenceAttribute
]);
const SEQUENCE_ATTR_KEY = "sentry.timestamp.sequence";
let _sequenceNumber = 0;
let _previousTimestampMs;
function getSequenceAttribute(timestampInSeconds) {
    const nowMs = Math.floor(timestampInSeconds * 1e3);
    if (_previousTimestampMs !== void 0 && nowMs !== _previousTimestampMs) {
        _sequenceNumber = 0;
    }
    const value = _sequenceNumber;
    _sequenceNumber++;
    _previousTimestampMs = nowMs;
    return {
        key: SEQUENCE_ATTR_KEY,
        value: {
            value,
            type: "integer"
        }
    };
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/trace-info.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_getTraceInfoFromScope",
    ()=>_getTraceInfoFromScope
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/currentScopes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/tracing/dynamicSamplingContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/spanUtils.js [app-client] (ecmascript)");
;
;
;
function _getTraceInfoFromScope(client, scope) {
    if (!scope) {
        return [
            void 0,
            void 0
        ];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withScope"])(scope, ()=>{
        const span = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getActiveSpan"])();
        const traceContext = span ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$spanUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spanToTraceContext"])(span) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$currentScopes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTraceContextFromScope"])(scope);
        const dynamicSamplingContext = span ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromSpan"])(span) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$tracing$2f$dynamicSamplingContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDynamicSamplingContextFromScope"])(client, scope);
        return [
            dynamicSamplingContext,
            traceContext
        ];
    });
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/tracing.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TRACEPARENT_REGEXP",
    ()=>TRACEPARENT_REGEXP,
    "extractTraceparentData",
    ()=>extractTraceparentData,
    "generateSentryTraceHeader",
    ()=>generateSentryTraceHeader,
    "generateTraceparentHeader",
    ()=>generateTraceparentHeader,
    "propagationContextFromHeaders",
    ()=>propagationContextFromHeaders,
    "shouldContinueTrace",
    ()=>shouldContinueTrace
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/debug-logger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/baggage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/dsn.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/parseSampleRate.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/propagationContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/randomSafeContext.js [app-client] (ecmascript)");
;
;
;
;
;
;
const TRACEPARENT_REGEXP = new RegExp("^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$");
function extractTraceparentData(traceparent) {
    if (!traceparent) {
        return void 0;
    }
    const matches = traceparent.match(TRACEPARENT_REGEXP);
    if (!matches) {
        return void 0;
    }
    let parentSampled;
    if (matches[3] === "1") {
        parentSampled = true;
    } else if (matches[3] === "0") {
        parentSampled = false;
    }
    return {
        traceId: matches[1],
        parentSampled,
        parentSpanId: matches[2]
    };
}
function propagationContextFromHeaders(sentryTrace, baggage) {
    const traceparentData = extractTraceparentData(sentryTrace);
    const dynamicSamplingContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$baggage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baggageHeaderToDynamicSamplingContext"])(baggage);
    if (!traceparentData?.traceId) {
        return {
            traceId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(),
            sampleRand: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMathRandom"])()
        };
    }
    const sampleRand = getSampleRandFromTraceparentAndDsc(traceparentData, dynamicSamplingContext);
    if (dynamicSamplingContext) {
        dynamicSamplingContext.sample_rand = sampleRand.toString();
    }
    const { traceId, parentSpanId, parentSampled } = traceparentData;
    return {
        traceId,
        parentSpanId,
        sampled: parentSampled,
        dsc: dynamicSamplingContext || {},
        // If we have traceparent data but no DSC it means we are not head of trace and we must freeze it
        sampleRand
    };
}
function generateSentryTraceHeader(traceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(), spanId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSpanId"])(), sampled) {
    let sampledString = "";
    if (sampled !== void 0) {
        sampledString = sampled ? "-1" : "-0";
    }
    return `${traceId}-${spanId}${sampledString}`;
}
function generateTraceparentHeader(traceId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateTraceId"])(), spanId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$propagationContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateSpanId"])(), sampled) {
    return `00-${traceId}-${spanId}-${sampled ? "01" : "00"}`;
}
function getSampleRandFromTraceparentAndDsc(traceparentData, dsc) {
    const parsedSampleRand = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSampleRate"])(dsc?.sample_rand);
    if (parsedSampleRand !== void 0) {
        return parsedSampleRand;
    }
    const parsedSampleRate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$parseSampleRate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseSampleRate"])(dsc?.sample_rate);
    if (parsedSampleRate && traceparentData?.parentSampled !== void 0) {
        return traceparentData.parentSampled ? // Returns a sample rand with positive sampling decision [0, sampleRate)
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMathRandom"])() * parsedSampleRate : // Returns a sample rand with negative sampling decision [sampleRate, 1)
        parsedSampleRate + (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMathRandom"])() * (1 - parsedSampleRate);
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$randomSafeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeMathRandom"])();
    }
}
function shouldContinueTrace(client, baggageOrgId) {
    const clientOrgId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$dsn$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractOrgIdFromClient"])(client);
    if (baggageOrgId && clientOrgId && baggageOrgId !== clientOrgId) {
        __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log(`Won't continue trace because org IDs don't match (incoming baggage: ${baggageOrgId}, SDK options: ${clientOrgId})`);
        return false;
    }
    const strictTraceContinuation = client.getOptions().strictTraceContinuation || false;
    if (strictTraceContinuation) {
        if (baggageOrgId && !clientOrgId || !baggageOrgId && clientOrgId) {
            __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$debug$2d$logger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["debug"].log(`Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${baggageOrgId}, Sentry client: ${clientOrgId})`);
            return false;
        }
    }
    return true;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDK_VERSION",
    ()=>SDK_VERSION
]);
const SDK_VERSION = "10.73.0";
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/weakRef.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "derefWeakRef",
    ()=>derefWeakRef,
    "makeWeakRef",
    ()=>makeWeakRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/web/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)");
;
function makeWeakRef(value) {
    try {
        const WeakRefImpl = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$web$2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$utils$2f$worldwide$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GLOBAL_OBJ"].WeakRef;
        if (typeof WeakRefImpl === "function") {
            return new WeakRefImpl(value);
        }
    } catch  {}
    return value;
}
function derefWeakRef(ref) {
    if (!ref) {
        return void 0;
    }
    if (typeof ref === "object" && "deref" in ref && typeof ref.deref === "function") {
        try {
            return ref.deref();
        } catch  {
            return void 0;
        }
    }
    return ref;
}
;
}),
"[project]/apps/web/node_modules/@sentry/core/build/esm/utils/worldwide.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GLOBAL_OBJ",
    ()=>GLOBAL_OBJ
]);
const GLOBAL_OBJ = globalThis;
;
}),
]);})()

//# sourceMappingURL=0rrk_%40sentry_core_build_esm_1ixl3_hpfi51c._.js.map